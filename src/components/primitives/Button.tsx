export interface IButton {
	type: 'submit' | 'button' | 'reset'
	label: string
	marginReq?: boolean
	onClick?: () => void
}
const Button = ({ type, label, onClick, marginReq = false }: IButton) => {
	return (
		<button
			type={type}
			className={`text-center mt-3 ${
				marginReq ? 'ml-[55%]' : null
			} w-full rounded-md border border-transparent bg-brandPrimary px-4 py-2 text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer hover:bg-brandPrimary/90 `}
			onClick={onClick}
		>
			{label}
		</button>
	)
}

export default Button
