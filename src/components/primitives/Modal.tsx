import { Modal } from 'antd'
import Button from './Button'
interface IModal {
	modalOpen: boolean
	editing?: boolean
	onConfirm?: () => void
	label: string
	onCancel?: () => void
}

const ConfirmModal = ({
	modalOpen,
	editing = false,
	label,
	onCancel,
	onConfirm,
}: IModal) => {
	return (
		<Modal
			centered={true}
			closable={false}
			onCancel={onCancel}
			open={modalOpen}
			bodyStyle={{ height: '60vh' }}
			width={'70vw'}
			footer={null}
			className="relative text-center"
		>
			<div className="absolute flex flex-col items-center justify-center w-[66vw] h-[60vh] text-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="#61E025"
					className="absolute top-[35%] w-20 h-20"
				>
					<path
						fillRule="evenodd"
						d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
						clipRule="evenodd"
					/>
				</svg>
				<span className="absolute top-[55%] font-[400] text-[24px] leading-[24.92px]">
					{label}
				</span>
				{editing ? (
					<div className="flex absolute top-[65%] gap-[65px]">
						<Button
							type="button"
							label="Confirm"
							onClick={onConfirm}
						/>
						<Button
							type="button"
							label="Cancel"
							onClick={onCancel}
						/>
					</div>
				) : null}
			</div>
		</Modal>
	)
}

export default ConfirmModal
