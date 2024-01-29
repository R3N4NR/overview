import Link from 'next/link'
import styles from './style.module.scss'

export const Footer = () => {
    return(
       
            <div className={styles.container}>
            <Link href="#middle">Qualifications</Link>
            <Link href="#">Projects</Link>
            <Link href="#">Professional Experience</Link>
            <Link href="#">Languages</Link>
            
        </div>
        
    )
}