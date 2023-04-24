import { InformationCircleIcon } from '@heroicons/react/24/outline'
import * as Label from '@radix-ui/react-label'
export interface IInputFieldProps {
  labelName: string
  name: string
  value: string | string[]
  disabled?: boolean
  placeholder: string
  type: 'text' | 'email'
  maxLength?: number
  required?: boolean
  errorMsg?: string
  fullErrMsg?: string
  noIconNeeded?: boolean
  onChange: (e: any) => void
}
const InputField = ({
  labelName,
  name,
  value,
  disabled,
  placeholder,
  type,
  maxLength = 100,
  required,
  errorMsg,
  fullErrMsg,
  noIconNeeded = false,
  onChange,
}: IInputFieldProps) => {
  return (
    <div>
      <Label.Root
        htmlFor={name}
        className='block font-semibold text-[14px] leading-[21.23px] text-typoPrimary'>
        {labelName}
        {required ? <sup>*</sup> : null}
      </Label.Root>
      <div className='mt-1'>
        <div className='relative rounded-md'>
          <input
            type={type}
            name={name}
            value={value}
            disabled={disabled}
            onChange={onChange}
            id={name}
            maxLength={maxLength}
            autoComplete='off'
            placeholder={placeholder}
            className='block w-full rounded-md border-[0.5px] p-2 text-[14px] leading-[21.23px] font-normal focus:outline-[#3C64B1] focus:ring-primary'
          />
          {noIconNeeded ? null : (
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 '>
              <InformationCircleIcon
                className='h-5 w-5 text-brandSecondary z-2'
                aria-hidden='true'
              />
            </div>
          )}
        </div>
        <span className='text-red-600'>{errorMsg}</span>
        <span className='text-red-600'>{fullErrMsg}</span>
      </div>
    </div>
  )
}

export default InputField
