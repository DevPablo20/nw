import { Link } from 'react-router-dom'
import Container from './Container';
import styles from './Navbar.module.css'
import Logo from '../../images/Logo.jpg'

function Navbar() {
    return (
        <nav class={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={Logo} alt="cnpj" />
                </Link>
                <ul class={styles.list}>
                    <li class={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li class={styles.item}>
                        <Link to="/cnpj">CNPJ</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar;