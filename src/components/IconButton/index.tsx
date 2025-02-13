import { ReactNode } from "react"
import styles from './iconbutton.module.css'
export const IconButton = ({children,...rest}:{children: ReactNode}) => {
    return (
        <button className={styles.btn} {...rest}>
            {children}
        </button>
    )
}