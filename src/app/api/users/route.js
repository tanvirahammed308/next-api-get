import { user } from "@/utility/db";
import { NextResponse } from "next/server";

export function GET() {
    const data = user;
    return NextResponse.json(data,{status:200})
}

{/*next class-35*/}

// import {  NextResponse } from "next/server";

// export function GET(request,content){
//     console.log(content)
    
//     // return new NextResponse('you are going to hell ')
//     return  NextResponse.json({name:'tanvir',age:28},{status:200})
// }