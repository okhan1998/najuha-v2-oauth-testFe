'use client'
import styles from './index.module.css'

export default function Home() {
  const restApiKey = process.env.NEXT_PUBLIC_REST_API_KEY
  const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI
  const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${restApiKey}&redirect_uri=${redirectUri}&response_type=code`
  function redirectToExternalURL() {
    window.location.href = kakaoAuthURL
  }

  return (
    <>
      <button className={styles.button} onClick={redirectToExternalURL}>
        카카오로 로그인하기
      </button>
    </>
  )
}
