import { ReactNode } from 'react'
import styles from './button.module.css'

export const Button = ({children}: {children: ReactNode}) => {
    return <button className={styles.btn}>
        {children}
    </button>
}