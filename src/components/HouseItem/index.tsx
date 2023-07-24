import { House } from '@/app/dashboard/houses/page'
import styles from './styles.module.css'
import Image from 'next/image'
import { Card, CardContent } from '@mui/material'
import Typography from '@mui/material/Typography';

export default function HouseItem({ imageName, title, address, description }: House) {
  return (
    <Card className={styles.container}>
      <div className={styles["image-container"]}>
        <Image
          fill
          src={`${window.location.href}api/images/${imageName}`}
          alt="house image" />
      </div>
      <CardContent>
      <Typography gutterBottom variant="h6" component="div">
        {title}
      </Typography>
      <Typography variant="subtitle2" color="text.primary">
       {address}
      </Typography>
      <Typography variant="body2" color="text.secondary" className={styles.description}>
        {description}
      </Typography>
      </CardContent>
    </Card>
  )
}