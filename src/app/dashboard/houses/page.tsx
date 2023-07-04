"use client"
import { useHouses } from "@/helpers/fetcher";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import styles from "./style.module.css"

export type House = {
  address: string
  imageName: string
  title: string
  description: string
  id: string
}
export default function Page() {

  const { houses, error, isLoading } = useHouses()
  
  return <div className={styles["houses-container"]}>
    <h1>Houses Page</h1>
    <Button variant="contained">New House</Button>

    {isLoading ? <h2>Loading </h2> : (
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">id</TableCell>
            <TableCell align="center">title</TableCell>
            <TableCell align="center">address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {houses.map((house: House) => (
            <TableRow
              hover
              key={house.id}
              sx={{ cursor: 'pointer' }}
            >
              <TableCell component="th" scope="row">
                {house.id}
              </TableCell>
              <TableCell align="center">{house.title}</TableCell>
              <TableCell align="center">{house.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )}
    
    
  </div>
  
}