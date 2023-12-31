'use client'
import { useEffect, useState } from 'react'

// useAuthCode 커스텀 훅
function useAuthCode() {
  const [code, setCode] = useState<string | null>(null)

  useEffect(() => {
    // 클라이언트 사이드에서만 실행
    if (typeof window !== 'undefined') {
      const params = new URL(window.location.href).searchParams
      setCode(params.get('code')) // 'code' 쿼리 파라미터 추출
    }
  }, [])

  return code
}

export default function Oauth() {
  const code = useAuthCode() // useAuthCode 훅으로 code 가져오기

  async function fetchAccessToken() {
    if (!code) return // code가 없으면 함수 실행 중지

    try {
      let response = await fetch('http://localhost:3001/auth/snsLogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ authCode: code }),
      })
      let data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchAccessToken()
  }, [code]) // code 변경 시 fetchAccessToken 실행

  return <>hi</>
}
