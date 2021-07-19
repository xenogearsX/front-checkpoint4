import { Link } from 'react-router-dom'

import './BadLink.css'

const BadLink = () => {
  return (
    <div className='badLink'>
      <h1>Erreur lors de la navigation</h1>
      <p>Vous vous êtes perdu dans les méandres de Bibelot.com.</p>
      <p>
        Cela peut être dû à une faute de frappe, de copier/coller ou alors à un
        lien expiré.
      </p>
      <p>
        Nous sommes désolés pour le désagrément, merci de votre compréhension.
      </p>
      <Link to='/'>Retour à l&apos;accueil</Link>
    </div>
  )
}

export default BadLink
