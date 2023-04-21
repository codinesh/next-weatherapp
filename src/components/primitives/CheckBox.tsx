import React from 'react'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@heroicons/react/24/outline'

interface ICheckboxProp {
	value?: boolean
	label: string
	onClick: (state: boolean) => void
	id: string
}

const CheckBox = ({ label, value, onClick, id }: ICheckboxProp) => (
	<div className="flex items-center justify-center">
		<Checkbox.Root
			id={id}
			className="flex h-[18px] w-[18px] border border-typoSecondary items-center justify-center rounded-[3px] bg-white"
			checked={value}
			onCheckedChange={(a: boolean) => {
				onClick(a)
			}}
		>
			<Checkbox.Indicator className="text-typoPrimary">
				<CheckIcon className="w-3 h-3" />
			</Checkbox.Indicator>
		</Checkbox.Root>
		<label
			className="pl-3 text-[14px] font-semibold leading-[35.53px] text-typoSecondary"
			htmlFor={id}
		>
			{label}
		</label>
	</div>
)

export default CheckBox
