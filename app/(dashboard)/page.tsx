"use client"
import { useCurrentRole } from '@/Hooks/use-current-role';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Page =  () => {
    const router = useRouter()
    // const role = await CurrentRole()
    const role = useCurrentRole()
    console.log(role)

    useEffect(() => {
      if (role){
        router.push(`/${role}`)
      }
    }, [role, router]);
    
  return (<div>Loading...</div>
)      

}

export default Page