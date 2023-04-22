import { getToken } from 'next-auth/jwt'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const token = await getToken({
    req: request,
  })

  return new Response('Hello, Next.js!' + JSON.stringify(token, null, 2))
}
