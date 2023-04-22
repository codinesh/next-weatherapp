import Image from 'next/image'
import { Inter } from 'next/font/google'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import { getSession } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

const getRepos = async () => {
  const session = await getServerSession(authOptions)

  let headers = new Headers()
  headers.append('Authorization', `Bearer ${session?.user?.token ?? ''}`)
  let repos = await fetch('https://api.github.com/user', {
    headers: headers,
  })

  let resp = await repos.json()
  console.log('repos', resp, repos)
  return resp
}

export default async function Home() {
  const repos = await getRepos()
  return (
    <div>
      <div>Page</div>
      <pre>{JSON.stringify(repos, null, 2)}</pre>
    </div>
  )
}
