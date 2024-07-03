'use client'
import Head from 'next/head'
import Button from '@mui/material/Button'
import axios from 'axios'
import { useEffect } from 'react'

export default function Home() {
  
  const fetchApiUser = async () => {
    await axios.get('https://api-shop-l5ir.onrender.com/api/users?limit=10&page=1&order=created%20asc&roleId=1%7C2&status=1%7C2&cityId=1%7C2&userType=1%7C2%7C3')
      .then(res => {
        console.log("res")
      })
  }
  useEffect(() => {
    fetchApiUser()
  }, [])
  return (
    <>
      <Head>
        <title>Lập trình thật dễ</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Button variant='contained'>Hello world</Button>
    </>
  )
}