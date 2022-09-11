import './styles.css'

import { Link } from 'react-router-dom'

import Keycloak from 'keycloak-js'

import { useState, useEffect } from 'react'

function SecuredPage() {
    const [ objKeycloak, setObjKeycloak ] = useState({ keycloak: null, authenticated: false })

    useEffect(() => {
        const keycloak = Keycloak('/keycloak.json')
    
        const initKeycloak = () => {
          keycloak.init({onLoad: 'check-sso'}).then(authenticated => {
            setObjKeycloak({ keycloak: keycloak, authenticated: authenticated })
          })    
        }
    
        initKeycloak()
    },[])

    return (
        <div className="containerSecured">
            <p>Aqui é a minha página privada</p>

            <button onClick={() => objKeycloak.keycloak.logout() }><Link to="/">Logout</Link></button>
        </div>
    )
}

export default SecuredPage