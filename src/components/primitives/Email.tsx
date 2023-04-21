import * as React from 'react'
import { useController, UseControllerProps } from 'react-hook-form'
import InputField from './InputField'

function Email<T>(props: UseControllerProps<any>) {
	const { field, fieldState, formState } = useController(props)

	const onChange = (event: any) => {
		let emails = event.target.value.split(',')
		field.onChange(emails)
	}

	function getError(): string | undefined {
		if (!fieldState.error) return undefined

		if (Array.isArray(fieldState.error)) {
			return fieldState.error.map((x) => x.message).join('. ')
		} else {
			return fieldState.error.message
		}
	}

	return (
		<div className="flex flex-col gap-2">
			<InputField
				noIconNeeded
				labelName={'Email'}
				placeholder={'Enter email'}
				required
				type={'text'}
				errorMsg={getError()}
				{...field}
				onChange={onChange}
			/>

			<div className="space-x-2">
				{field.value?.map((email: string) => (
					<span className=" p-2 rounded-md bg-slate-400" key={email}>
						{email}
					</span>
				))}
			</div>
		</div>
	)
}

export default Email
