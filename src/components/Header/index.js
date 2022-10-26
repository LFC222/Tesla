import React,{ useState } from 'react'
import 
{
  Menu,
  Container,
  BurgerNav,
  RightMenu,
  CustomMenu,
  CustomClose,
  CloseWrapper,
} from './styles'


function Header() {

  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
        <a href='/'>
          <img src='/images/logo.svg' alt=''/>
        </a>
        <Menu>
          <a href='/'>Model 3</a>
          <a href='/'>Model Y</a>
          <a href='/'>Model S</a>
          <a href='/'>Model X</a>
        </Menu>
        <RightMenu>
          <a href='/'>Shop</a>
          <a href='/'>Tesla Account</a>
          <CustomMenu onClick={() => setBurgerStatus(true)}/>
        </RightMenu>
        <BurgerNav show={burgerStatus} onClick={() => setBurgerStatus(false)}>
          <CloseWrapper>
            <CustomClose/>
          </CloseWrapper>
          <li><a href="/">Existing Inventory</a></li>
          <li><a href="/">Used Inventory</a></li>
          <li><a href="/">Trade-in</a></li>
          <li><a href="/">Cybertruck</a></li>
          <li><a href="/">Roadaster</a></li>
          <li><a href="/">Semi</a></li>
          <li><a href="/">Existing Inventory</a></li>
          <li><a href="/">Existing Inventory</a></li>
        </BurgerNav>
    </Container>
  )
}

export default Header