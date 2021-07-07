import React from 'react'
import { Link } from 'gatsby'
import { useSiteMetadata } from '../hooks/use-site-metadata'



const activeModalStyle = {
  color: '#5E5BF7',
  fontWeight: 'bold',
}

const Collapsed = ({pageContext}) => {

  const { menuLinks } = useSiteMetadata()
  const { basePath } = useSiteMetadata()
  return (
      <div>
      <MyMenu>
        <ul>
        {menuLinks.map(link => (
          <li key={link.name}>
            <Link to={link.slug} activeStyle={activeModalStyle}>
               {link.name}
            </Link>
          </li>
          ))}
        </ul>     
    </MyMenu>
    </div>
  )
}

export default Collapsed
