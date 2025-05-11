import { nameSchema, UserSignInSchema, UserSignUpSchema } from "@/lib/formValidationSchemas"
import { z } from "zod"

export type IUserSignIn = z.infer<typeof UserSignInSchema>
export type IUserSignUp = z.infer<typeof UserSignUpSchema>
export type IUserName = z.infer<typeof nameSchema>