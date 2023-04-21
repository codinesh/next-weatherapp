import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import * as Label from '@radix-ui/react-label'
import { Fragment } from 'react'
import { IDropDownItem } from './types/IDropdownItem'

interface IDropDownProps {
  labelName: string
  name: string
  value: IDropDownItem
  required?: boolean
  disabled?: boolean
  placeholder: string
  errorMsg?: string
  options: IDropDownItem[]
  onChange: (selectedItem: IDropDownItem, label: string) => void
}

export default function Dropdown({
  labelName,
  name,
  disabled,
  value,
  placeholder,
  required = false,
  options,
  errorMsg,
  onChange,
}: IDropDownProps) {
  return (
    <div>
      <Label.Root
        htmlFor={name}
        className='block font-semibold text-[14px] leading-[21.23px] text-typoPrimary'>
        {labelName}
        {required ? <sup>*</sup> : null}
      </Label.Root>
      <Listbox
        value={value}
        disabled={disabled}
        onChange={(value) => {
          onChange(value, name)
        }}>
        <div className='relative mt-1 rounded-md border border-gray-200'>
          {!value ? (
            <span className='absolute z-[1] top-[8px] left-[8px] font-normal text-typoSecondary/50 text-[13.51px]'>
              {placeholder}
            </span>
          ) : null}
          <Listbox.Button className='relative w-full h-[36px] cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus-visible:border-[#3C64B1] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-[#3C64B1] sm:text-sm disabled:bg-gray-50 '>
            <span className='block truncate'>{value?.Name}</span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 pt-[2px]'>
              <ChevronDownIcon
                className='h-5 w-5 text-brandSecondary'
                aria-hidden='true'
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <Listbox.Options
              placeholder={placeholder}
              className='z-10 absolute mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {options?.map((option, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 min-h-12 pl-10 pr-4 ${
                      active
                        ? 'bg-brandSecondary text-white'
                        : 'text-typoSecondary'
                    }`
                  }
                  value={option}>
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}>
                        {option.Name}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? 'text-white' : 'text-brandSecondary'
                          }`}>
                          <CheckIcon className='h-5 w-5' aria-hidden='true' />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      <span className='text-red-600'>{errorMsg}</span>
    </div>
  )
}
