import Image from 'next/image'
import { Inter } from 'next/font/google'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <div>
      <div>Page</div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
}
