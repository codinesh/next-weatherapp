'use client'

import * as Switch from '@radix-ui/react-switch'

const Toggle = ({
	value: defaultEnabled,
	onToggle,
	label,
}: {
	value?: boolean
	onToggle: (state: boolean) => void
	label?: string
}) => {
	return (
		<div className="flex items-center">
			<label
				className="text-[15px] leading-none pr-[15px]"
				htmlFor="airplane-mode"
			>
				{label}
			</label>
			<Switch.Root
				onCheckedChange={(a) => {
					onToggle(a)
				}}
				checked={defaultEnabled}
				className={` ${
					defaultEnabled ? 'justify-end' : 'justify-start'
				} focus:border focus:border-gray-300 transition-all duration-300 flex items-center w-[42px] h-[12px] bg-[#E28F8F] rounded-full data-[state=checked]:bg-[#99EA9C] outline-none`}
				id="airplane-mode"
			>
				<Switch.Thumb className="focus:border focus:border-gray-300 transition-all duration-300 will-change-transform  block w-[24px] h-[24px] bg-[#E25D5D] rounded-full data-[state=checked]:bg-[#3EB443]" />
			</Switch.Root>
		</div>
	)
}

export default Toggle
