import Link from 'next/link'
import Image from 'next/image'
import menu from 'public/icons8-menu-arrondi-60.png'
import logo from 'public/leaf+1.png'
import close from 'public/icons8-multiplier-30.png'

import { useState } from 'react';


// const [open, setOpen] = useState(false);
const [count, setCount] = useState(0);





export default function Navbar() {
    return (
        <nav>
            <div className='container'>
                <ul className="nav-first">
                    <li><Image src={menu} alt="test" width={30} height={30}/></li>
                    <li><h1>MAISON JUNGLE<Image src={logo} alt="test" width={30} height={30}/></h1></li>
                    <div className="nav-information">
                        <li className='nav-connexion'><Link href="/">Connexion</Link></li>
                        <li><Link href="/">Panier</Link></li>
                    </div>

                </ul>
                <div className='nav-border'></div>
                <ul className={"nav-secondary"}>
                    <li><Image src={close} alt="test"/></li>
                    <li><Link href="/">Plante intérieur</Link></li>
                    <li><Link href="/">Terarium</Link></li>
                    <li><Link href="/">Kokedama</Link></li>
                    <li className='nav__secondary-connexion'><Link href="/">Connexion</Link></li>
                  
                </ul>
            </div>
        </nav>
    )
}


