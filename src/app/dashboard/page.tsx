import { getServerSession } from 'next-auth'
import { Inter } from 'next/font/google'
import { authOptions } from '../api/auth/[...nextauth]/route'

const inter = Inter({ subsets: ['latin'] })

export default async function Dashboard() {
  const session = await getServerSession(authOptions)
  return (
    <div>
      <div>Dashboard</div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
}
