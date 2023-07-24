"use client"
import { TextField, Button, Input } from '@mui/material'
import { useParams  } from 'next/navigation'
import styles from './styles.module.css'
import { useState } from 'react';
import { convertFileToBase64 } from '@/helpers/utils';
import { saveHouse, saveImage } from '@/helpers/fetcher';
import { HousePayload } from '@/app/api/houses/route';

type FormTarget = {
    title: { value: string };
    address: { value: string };
    description: { value: string };
  }; 
export default function DetailsPage(){
    const params = useParams()
    const [file64, setFile64] = useState('')
    const [loading, setLoading]= useState(false)
    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        setLoading(true)
        const {imageName} = await saveImage(file64)
        const { title, address, description } = e.target as typeof e.target & FormTarget 
        const payload = {
            title: title.value, 
            address: address.value, 
            description: description.value, 
            imageName
         } as HousePayload
        const response = await saveHouse(payload)
        setLoading(false)
    }
    const handleFileChange = (e: React.SyntheticEvent) => {
        const target = e.target as typeof e.target & { files: Blob[]} 
        const file = target.files[0]
        convertFileToBase64(file).then((fileEncoded: string) => {
            setFile64(fileEncoded)
        })
    }
    if(loading) return <h3>Loading...</h3>
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <TextField name="title" label="Title" variant="outlined" />
            <TextField name="address" label="Address" variant="outlined" />
            <TextField name="description" label="description" variant="outlined" />
            <Input name="image" type='file' onChange={handleFileChange}/>
            <Button variant="contained" type="submit">New House</Button>
        </form>
    )
}