'use client'
import { useEffect } from 'react'

export default function oauth() {
  useEffect(() => {
    let params = new URL(document.location.toString()).searchParams
    let code = params.get('code')
    let body = {
      authCode: code,
    }
    console.log(body)
  }, [])
  return <>hi</>
}
