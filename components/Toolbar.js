import React from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Toolbar.module.css'

export const Toolbar = () => {
    const router = useRouter();
  return (
    <div className={styles.main}>
        <div className="" onClick={() => router.push('/')}>Home</div>
        <div className="" onClick={() => router.push('/feed/1')} >Feed</div>
        <div className="" onClick={() => router.push('/eom')}>EOM</div>
        <div className="" onClick={() => window.location.href = "https://twitter.com/VishwaGauravIn"}>Twitter</div>
    </div>
  )
}
