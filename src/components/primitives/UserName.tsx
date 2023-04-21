'use client'

import { useSession } from 'next-auth/react'
import Avatar from './Avatar'

const UserName = () => {
	const session: any = useSession()

	let roles = session.data?.roles ? JSON.parse(session.data.roles) : []

	return (
		<div className="flex items-center gap-5 mr-[100px] ">
			<div className="flex flex-col items-center">
				<span className="font-semibold text-[16px]">
					{`${session.data?.user?.name} ${
						session.data?.middleName ?? ''
					} ${session.data?.lastName ?? ''}`}
				</span>
				<span className="font-normal text-[12px]">
					{roles.length > 0 && roles[0].Name}
				</span>
			</div>
			<Avatar />
		</div>
	)
}

export default UserName
