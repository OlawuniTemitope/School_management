import { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { auth } from '@/auth'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import CredentialsSignInForm from './credentials-signin-form'
// import { GoogleSignInForm } from './google-signin-form'
import { Button } from '@/components/ui/button'
// import { getSetting } from '@/lib/actions/setting.actions'
import SeparatorWithOr from '@/components/shared/separator-or'

export const metadata: Metadata = {
  title: 'Sign In',
}

export default async function SignInPage(props: {
  searchParams: Promise<{
    callbackUrl: string
  }>
}) {
  const searchParams = await props.searchParams
  // const { site } = await getSetting()

  const { callbackUrl = '/' } = searchParams

  const session = await auth()
  if (session) {
    return redirect("/")
  }

  return (
     <>
      <Card>
        <CardHeader>
          <CardTitle className='text-2xl'>Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <CredentialsSignInForm />
            <SeparatorWithOr />
            <div className='mt-1'>
              {/* <GoogleSignInForm /> */}
            </div>
          </div>
        </CardContent>
      </Card>
      <SeparatorWithOr>New</SeparatorWithOr>

      <Link href={`/auth/register?callbackUrl=${encodeURIComponent(callbackUrl)}`}>
        <Button className='w-full' variant='outline'>
          Create your account
        </Button>
      </Link>
    </>
  )
}
