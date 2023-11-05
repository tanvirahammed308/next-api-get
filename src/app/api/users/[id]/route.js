import { user } from "@/utility/db";
import { NextResponse } from "next/server";

export function GET(req,content) {
    // console.log(content)
    // console.log(content.params.id)
    // const data = user;
    // console.log(data,content.params.id)
    const userData=user.filter((item)=>item.id ==content.params.id)
    return NextResponse.json(userData.length==0?{result:'not found'}:{result:userData[0],success:true},{status:200})
}
