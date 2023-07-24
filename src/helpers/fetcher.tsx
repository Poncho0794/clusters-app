import { HousePayload } from '@/app/api/houses/route'
import useSWR from 'swr'

const fetcher = (url: RequestInfo | URL) => fetch(url).then(res => res.json())


export function useHouses () {
    const { data, error, isLoading } = useSWR('/api/houses', fetcher)
  // render data
    const houses = data ? data.houses : []
  return { houses, error, isLoading } 
}

export async function saveImage(image: string) {
  const response = await fetch('/api/images', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ image })
  })
  return response.json()
}

export async function saveHouse(house: HousePayload) {
  const response = await fetch('/api/houses', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...house })
  })
  return response.json()
}
