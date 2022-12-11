import React from 'react'
import { HeroesList } from '../components/HeroesList'

export const Marvel = () => {
  return (
    <>
    <h1>Marvel</h1>
      <hr></hr>
      <HeroesList publisher={"Marvel Comics"}></HeroesList>
    </>
  )
}
