import React, { useRef } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

interface ISearchBarProp {
	placeholder?: string
	onSearch: (query: any) => void
}

const SearchBar = ({ placeholder, onSearch }: ISearchBarProp) => {
	const formElement = useRef<HTMLFormElement>(null)

	return (
		<form
			ref={formElement}
			onSubmit={(e) => {
				e.preventDefault()

				if (formElement.current) {
					const formData = new FormData(formElement.current)
					const searchQuery = formData.get('searchQuery')
					onSearch(searchQuery)
				}
			}}
			className="w-[391px] text-center ml-[32px] flex items-center bg-[#F8F8F8] rounded-[14.67px]"
		>
			<MagnifyingGlassIcon className="w-[15.83px] h-[15.83px] ml-[23.67px] cursor-pointer" />
			<input
				name="searchQuery"
				type="text"
				placeholder={placeholder ?? 'Search'}
				className="w-[80%] bg-[#F8F8F8] gap-[19.5px] px-2 flex text-[18px] leading-[20.17px] my-[6px] font-normal focus:outline-none"
			/>
		</form>
	)
}

export default SearchBar
