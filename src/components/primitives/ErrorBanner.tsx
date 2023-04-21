import { XCircleIcon } from '@heroicons/react/20/solid'
import * as Toast from '@radix-ui/react-toast'
import { useState } from 'react'
import {
	GlobalStateActionType,
	useGlobalDispatch,
} from '../../state/ErrorState'

interface IErrorBanner {
	title: string
	bannerOpen: boolean
	errorDescription: string
}

const ErrorBanner = (props: IErrorBanner) => {
	const [open, setOpen] = useState(props.bannerOpen)
	const erroStateDispatch = useGlobalDispatch()

	return (
		<Toast.Provider swipeDirection="right">
			<Toast.Root
				className="align-top bg-white border border-errorPrimary text-errorPrimary rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
				open={props.bannerOpen}
				onOpenChange={() => {
					erroStateDispatch({
						type: GlobalStateActionType.ClearError,
					})
				}}
			>
				<div>
					<Toast.Title className="[grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px]">
						{props.title ?? 'Error'}
					</Toast.Title>
					<Toast.Description asChild>
						<span>{props.errorDescription}</span>
					</Toast.Description>
				</div>
				<Toast.Close>
					<XCircleIcon className="w-5 h-[23px] text-[#FF2430]" />
				</Toast.Close>
			</Toast.Root>
			<Toast.Viewport className="[--viewport-padding:_25px] fixed top-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
		</Toast.Provider>
	)
}

export default ErrorBanner
