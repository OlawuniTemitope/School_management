
import { CurrentRole } from '@/Hooks/auth';
import { redirect } from 'next/navigation';

const Page = async () => {

    const role = await CurrentRole()
      if (role){
        redirect(`/${role}`)
      }
      
  return (
    <div>Loading...</div>
  )
}

export default Page