import { NextResponse } from 'next/server'
import DBService from '@/services/db.service'
export type HousePayload = {
  address: string
  imageName: string
  title: string
  description: string
}
export async function POST(request: Request){
  const res: HousePayload = await request.json()
  const db = new DBService('houses')
  const savedHouse = db.saveItem(res)
  return NextResponse.json({ house: savedHouse })
}

export async function GET(){
  let houses = []
  try{
    const db = new DBService('houses')
    houses = db.listItems()
  } catch (e) {
    console.error(e)
  }
  
  return NextResponse.json({ house: houses })
}