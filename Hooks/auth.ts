"use server"
import { auth, signOut } from "@/auth"


export const CurrentUser = async  () => {
    const session = await auth()
  return (
    session?.user
  )
}
export const CurrentRole = async  () => {
    const session = await auth()
  return (
    session?.user.role
  )
}
export const LogOut = async () =>{
 const logOut = await signOut()
 return logOut
}