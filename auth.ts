import {PrismaAdapter} from '@auth/prisma-adapter'

import NextAuth, { type DefaultSession } from 'next-auth'
import authConfig from './auth.config'
import prisma from './lib/prisma'


declare module 'next-auth' {
  interface Session {
    user: {
      role: string
    } & DefaultSession['user']
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  pages: {
    signIn:"/auth/login",
    error:"/auth/sign-in",
    newUser: '/sign-up',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  adapter: PrismaAdapter(prisma),
  callbacks: {
    jwt: async ({ token, user, trigger, session }) => {
      if (user) {
        if (!user.id) {
          await prisma.user.update({where :{id:user.id}, 
           data: {
            name: user.name! || user.email!.split('@')[0],
            role: "admin",
          }})
        }
        token.name = user.name!
        token.role = (user as { role: string }).role
      }

      if (session?.user?.name && trigger === 'update') {
        token.name = session.user.name
      }
      return token
    },
    session: async ({ session, user, trigger, token }) => {
      session.user.id = token.sub as string
      session.user.role = token.role as string
      session.user.name = token.name
      if (trigger === 'update') {
        session.user.name = user.name
      }
      return session
    },
  },
})
