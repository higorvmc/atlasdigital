import styles from '../styles/Components.module.css'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div id={styles.logo}>
                Atlas Digital
            </div>
            <div id={styles.links}>
                <a href='/'> Home </a>
                <a href='/objetos'> Bandeiras </a>
            </div>
        </div>
    )
}