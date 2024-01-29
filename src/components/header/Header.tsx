import Link from "next/link";
import styles from "./styles.module.scss"

const Header = () => {
    return(
        <div className={styles.container}>
            <Link href="#middle">Qualifications</Link>
            <Link href="#">Projects</Link>
            <Link href="#">Professional Experience</Link>
            <Link href="#">Languages</Link>
          
        </div>

        
    )
}

export default Header;