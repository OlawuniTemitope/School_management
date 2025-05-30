import { UserRole } from "@prisma/client"
import  { DefaultSession } from "next-auth"

export type ExtendedUser =  DefaultSession["user"] & 
{
  role:UserRole, 
  isTwoFactorEnabled:boolean,
  id:string,
  email:string,
  isOAuth:boolean,
}

export declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: 
      /** The user's postal address. */
      ExtendedUser
     }
}

export { UserRole }
