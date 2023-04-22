import type { DefaultSession, DefaultUser } from 'next-auth'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    customProps: string
    user: {
      token: string
    } & DefaultSession['user']
  }
}
