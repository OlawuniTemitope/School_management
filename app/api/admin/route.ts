import { CurrentRole } from '@/Hooks/auth'
import { UserRole } from '@prisma/client'
import { NextResponse } from "next/server"

export async function GET(){
    const role = await CurrentRole()
    if(role===UserRole?.admin){
        return new NextResponse(null,{status:200})
    }
    return new NextResponse(null,{status:403})
} 