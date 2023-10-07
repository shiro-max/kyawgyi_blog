import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req){
    const {email,name} = await req.json();
    await connectMongoDB();
    await User.create({email,name});
    return NextResponse.json({message:"User created successfully"},{status:201});
}