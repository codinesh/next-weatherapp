import { PlusCircleIcon } from '@heroicons/react/20/solid'
interface IListHeader {
	value: string
	active?: boolean
	icon?: boolean
}
const ListHeader = ({ value, active = false, icon = false }: IListHeader) => {
	return (
		<button
			type="button"
			className={`w-[129px] h-[28px] ${
				active
					? 'bg-brandPrimary text-white'
					: 'bg-[#D9D9D9] text-typoPrimary'
			} text-center text-[14px] leading-[21px] font-semibold rounded-[10px] cursor-pointer px-[10px] py-[3px] ${
				icon && 'flex items-center gap-2'
			}`}
		>
			{icon && (
				<PlusCircleIcon className="w-5 h-5 text-white font-semibold" />
			)}{' '}
			{value}
		</button>
	)
}

export default ListHeader
