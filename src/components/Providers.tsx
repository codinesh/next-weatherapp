'use client'
import { GlobalStateProvider } from '@/state/ErrorState'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

const Providers = ({
  children,
  session,
}: {
  children: ReactNode
  session: Session | null
}) => {
  return (
    <SessionProvider session={session}>
      <GlobalStateProvider>{children}</GlobalStateProvider>
    </SessionProvider>
  )
}

export default Providers
