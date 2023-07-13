import React from 'react'
import Link from 'next/link'

const index = () => {
    return (
    <div>
        <h1>Olá Semana Fullstack Master!</h1>
        <div>
            <Link href='/sobre'>
                <a>Sobre</a>
            </Link>
            <Link href='/contato'>
                <a>Contato</a>
            </Link>
            <Link href='/pesquisa'>
                <a>Pesquisa</a>
            </Link>
        </div>
    </div>
    
    )
}

export default index 