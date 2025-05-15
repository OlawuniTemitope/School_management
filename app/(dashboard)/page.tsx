import { CurrentRole } from '@/Hooks/auth';
import { redirect } from 'next/navigation';

const Page = async () => {
    const role = await CurrentRole()
    console.log(role)

      if (!role){
          return <div>Loading...</div>
        }
        else{
      redirect(`/${role}`)
     }

}

export default Page