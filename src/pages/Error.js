import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function Error() {
    const err = useRouteError()
    console.log(err);
  return (
    <>
    <h1>Oops!</h1>
    <h2>Something went wrong!</h2>
    </>
  )
}
