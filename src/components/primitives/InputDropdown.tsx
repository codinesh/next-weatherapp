import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import * as Label from '@radix-ui/react-label'
import { Fragment, useState } from 'react'
import { IDropDownItem } from './types/IDropdownItem'

interface IDropDownProps {
	labelName: string
	name: string
	value: IDropDownItem
	required?: boolean
	disabled?: boolean
	allowNewEntry?: boolean
	placeholder: string
	errorMsg?: string
	options: IDropDownItem[]
	onChange: (selectedItem: IDropDownItem, label: string) => void
}

export default function InputDropdown({
	labelName,
	name,
	disabled,
	value,
	required = false,
	allowNewEntry = false,
	options,
	placeholder,
	errorMsg,
	onChange,
}: IDropDownProps) {
	const [query, setQuery] = useState('')
	const filteredArray =
		query === ''
			? options
			: options?.filter((dropItem) =>
					dropItem.Name.toLowerCase()
						.replace(/\s+/g, '')
						.includes(query.toLowerCase().replace(/\s+/g, ''))
			  )

	return (
		<div>
			<Label.Root
				htmlFor={name}
				className="block font-semibold text-typoPrimary"
			>
				{labelName}
				{required ? <sup>*</sup> : null}
			</Label.Root>
			<Combobox
				name={name}
				disabled={disabled}
				onChange={
					allowNewEntry
						? (value) => onChange(value, name)
						: (value) =>
								onChange(
									options.find((x) => x.Id === value.Id)!,
									name
								)
				}
				value={value}
			>
				<div className="relative mt-1">
					<div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-sm sm:text-sm">
						<Combobox.Input
							className="block w-full rounded-md border-[0.5px] p-2 text-[13.51px] font-normal shadow-sm focus:outline-[#3C64B1] focus:ring-primary"
							placeholder={placeholder}
							autoComplete="off"
							displayValue={(dropItem: IDropDownItem) =>
								dropItem?.Name
							}
							onChange={(event) => setQuery(event.target.value)}
						/>
						<Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
							<ChevronDownIcon
								className="h-5 w-5 text-brandSecondary"
								aria-hidden="true"
							/>
						</Combobox.Button>
					</div>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						afterLeave={() => setQuery('')}
					>
						<Combobox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-red-700 ring-opacity-5 focus:outline-none sm:text-sm">
							{allowNewEntry
								? query.length > 0 && (
										<Combobox.Option
											className={({ active }) =>
												`relative cursor-default select-none py-2 pl-10 pr-4 ${
													active
														? 'bg-brandSecondary text-white'
														: 'text-typoSecondary'
												}`
											}
											value={{ name: query, id: 0 }}
										>
											{({ selected, active }) => (
												<>
													<span
														className={`block truncate ${
															selected
																? 'font-medium'
																: 'font-normal'
														}`}
													>
														{query}
													</span>
													{selected ? (
														<span
															className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
																active
																	? 'text-white'
																	: 'text-brandSecondary'
															}`}
														>
															<CheckIcon
																className="h-5 w-5"
																aria-hidden="true"
															/>
														</span>
													) : null}
												</>
											)}
										</Combobox.Option>
								  )
								: filteredArray?.length === 0 && (
										<div className="relative cursor-default select-none py-2 px-4 text-gray-700">
											Nothing found.
										</div>
								  )}
							{filteredArray.map((dropDownItem, index) => (
								<Combobox.Option
									key={index}
									itemID={dropDownItem?.Id?.toString()}
									className={({ active }) =>
										`relative cursor-default select-none py-2 pl-10 pr-4 ${
											active
												? 'bg-brandSecondary text-white'
												: 'text-typoSecondary'
										}`
									}
									value={dropDownItem}
								>
									{({ selected, active }) => (
										<>
											<span
												className={`block truncate ${
													selected
														? 'font-medium'
														: 'font-normal'
												}`}
											>
												{dropDownItem.Name}
											</span>
											{selected ? (
												<span
													className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
														active
															? 'text-white'
															: 'text-brandSecondary'
													}`}
												>
													<CheckIcon
														className="h-5 w-5"
														aria-hidden="true"
													/>
												</span>
											) : null}
										</>
									)}
								</Combobox.Option>
							))}
						</Combobox.Options>
					</Transition>
				</div>
			</Combobox>
			<span className="text-red-600">{errorMsg}</span>
		</div>
	)
}
