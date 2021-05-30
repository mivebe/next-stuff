import navStyles from "../styles/Navbar.module.css"
import Link from "next/link"

const Navbar = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/somepage">Somepage</Link>
                </li>
                <li>
                    <Link href="/articles">Articles</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
