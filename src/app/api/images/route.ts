import { NextResponse } from 'next/server'
import fs from 'fs'
import {v4 as uuidv4} from 'uuid';
import path from 'path';


export async function POST(request: Request){
  let { image }: { image: string } = await request.json()
  if(image.includes('data:image/jpeg;base64,'))
    image = image.substring('data:image/jpeg;base64,'.length)
  const imageName = uuidv4()+'.jpg';
  const buffer = Buffer.from(image, "base64");
  fs.writeFileSync(path.join(process.cwd(), 'storage', imageName), buffer);
  return NextResponse.json({ status: 'ok', imageName })
}
