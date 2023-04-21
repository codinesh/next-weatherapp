import NextAuth, { AuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile }) {
      console.log('jwt', token, account, user, profile)

      if (user) {
        token.id = user.id
      }
      if (account) {
        token.accessToken = account.access_token
        token.idToken = account.id_token
        token.refreshtoken = account.refresh_token
      }

      if (profile) {
        // @ts-ignore
        token.userName = profile['cognito:username']
        // @ts-ignore
        token.userid = profile['custom:id']
        // @ts-ignore
        token.lastName = profile['custom:last_name']
        // @ts-ignore
        token.roles = profile['custom:roles']
        // @ts-ignore
        token.middleName = 'TestMN'
        // @ts-ignore
        token.userid = profile['custom:id']
      }
      return token
    },
    async session({ session, token, user }) {
      // @ts-ignore
      session.token = token.accessToken
      // @ts-ignore
      session.idToken = token.idToken
      // @ts-ignore
      session.refreshtoken = token.refreshtoken
      // @ts-ignore
      session.userName = token.userName
      // @ts-ignore
      session.userid = token.userid
      // @ts-ignore
      session.lastName = token.lastName
      // @ts-ignore
      session.roles = token.roles
      // @ts-ignore
      session.middleName = token.middleName
      // @ts-ignore
      session.userid = token.userid

      return session
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
