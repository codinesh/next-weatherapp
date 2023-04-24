import Image from 'next/image'
import { Inter } from 'next/font/google'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import Signin from '@/components/Signin'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (session?.user) return <pre>{JSON.stringify(session?.user, null, 2)}</pre>

  return (
    <div>
      <Signin />
    </div>
  )
}
