'use client'

import { RadioGroup } from '@headlessui/react'

const UserTypeFilter = ({
	items,
	selected,
	onSelection,
}: {
	items: { key: string; title: string }[]
	selected: { key: string; title: string }
	onSelection: (selectedItem: { key: string; title: string }) => void
}) => {
	return (
		<RadioGroup
			className={'w-full '}
			defaultValue={selected}
			value={selected}
			onChange={onSelection}
		>
			<div className="flex justify-between ">
				{items.map((item) => (
					<RadioGroup.Option
						key={item.key}
						value={item}
						className={({ active, checked }) =>
							`w-[129px] h-[28px] bg-[#D9D9D9] text-typoPrimary flex justify-center items-center align-middle cursor-pointer rounded-lg px-5 py-4
							${active ? 'ring-2 ring-brandPrimary ring-opacity-60 ring-offset-2 ' : ''}
							${checked ? 'bg-brandPrimary text-white' : 'bg-[#D9D9D9] text-typoPrimary'}`
						}
					>
						{({ active, checked }) => (
							<RadioGroup.Label as="p">
								{item.title}
							</RadioGroup.Label>
						)}
					</RadioGroup.Option>
				))}
			</div>
		</RadioGroup>
	)
}

export default UserTypeFilter
