import fs from 'fs'
import path from 'path'
import { NextResponse, NextRequest} from "next/server";

export function GET(req: Request, params: {params: { imageName: string}}){
  const { imageName } = params.params
  const headers = new Headers();
  headers.set("Content-Type", "image/*");
  headers.set('Access-Control-Allow-Origin','*')
  headers.set('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS')
  headers.set('Access-Control-Allow-Headers','Content-Type, Authorization')
  const image =  fs.readFileSync(path.join(process.cwd(), `storage/${imageName}`))
  return new NextResponse(image, { status: 200, statusText: "OK", headers });
}