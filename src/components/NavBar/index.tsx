import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { AccountSection, Container, HomeLogo, NavLinks } from './styles'

interface Input {
  pages: any[]
}

export function NavMenu({pages}: Input) {

  return (
    <Container>
      <HomeLogo className='teste'>
        <img src="logo192.png" alt="" />
      </HomeLogo>
      <NavLinks>
        <ul>
          {pages.map(p => <NavLink className={(navData) => navData.isActive ? '' : ''} to={p.path}>{p.label}</NavLink>)}
        </ul>
      </NavLinks>
      <AccountSection>

      </AccountSection>
    </Container>
  )
}
 
