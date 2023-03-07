import Link from 'next/link'


export default function Navbar() {
    return (
        <nav>
            <div className='container'>
                <ul className="nav-first">
                    <li>ON verra</li>
                    <li><p>ICI METTRE UN LOGO RECHERCHER LOGO</p></li>
                    <div className="nav-information">
                        <li><Link href="/">Connexion</Link></li>
                        <li><Link href="/">Panier</Link></li>
                    </div>

                </ul>
                <div className='nav-border'></div>
                <ul className="nav-secondary">
                    <li><Link href="/">Plante intérieur</Link></li>
                    <li><Link href="/">Terarium</Link></li>
                    <li><Link href="/">Kokedama</Link></li>
                </ul>
            </div>
        </nav>
    )
}
