import { maxValue } from '@/constants/defaultConstant'
import * as Label from '@radix-ui/react-label'
export interface ITextAreaProps {
	labelName: string
	name: string
	value: string
	placeholder: string
	maxLength?: number
	required?: boolean
	errorMsg?: string
	fullErrMsg?: string
	onChange: (e: any) => void
}
const TextArea = ({
	labelName,
	name,
	value,
	placeholder,
	maxLength = maxValue.MAX_LENGTH,
	required,
	errorMsg,
	fullErrMsg,
	onChange,
}: ITextAreaProps) => {
	return (
		<div>
			<Label.Root
				htmlFor={name}
				className="block font-semibold text-typoPrimary"
			>
				{labelName}
				{required ? <sup>*</sup> : null}
			</Label.Root>
			<div className="mt-1">
				<div className="rounded-md shadow-sm h-[150px]">
					<textarea
						name={name}
						value={value}
						onChange={onChange}
						id={name}
						maxLength={maxLength}
						autoComplete="off"
						placeholder={placeholder}
						className="block w-full h-full rounded-md border-[0.5px] p-2 text-[13.51px] font-normal focus:outline-[#3C64B1] focus:ring-primary"
					/>
				</div>
				<span className="text-red-600">{errorMsg}</span>
				<span className="text-red-600">{fullErrMsg}</span>
			</div>
		</div>
	)
}

export default TextArea
