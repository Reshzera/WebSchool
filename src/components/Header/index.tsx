import React, { useState } from 'react';
import { HeaderContainer, Logo, RoutesSection, RoutesButton, MobileHeader} from './styles';
import Logosrc from '../../assets/logo.png'
import {HiOutlineLogout} from 'react-icons/hi'

import {GiHamburgerMenu} from 'react-icons/gi'
import {MdClose} from 'react-icons/md'
// import { Container } from './styles';

function Header(){
    const [mobile, setShowMobile] = useState<boolean>(false);

  return (
      <HeaderContainer>
          <Logo>
              <img src={Logosrc}></img>
          </Logo>
          <RoutesSection isShow={mobile}>
              <div>
                <RoutesButton to='/dashboard'>Dashboard</RoutesButton>
                <RoutesButton to='/simulados'>Simulados</RoutesButton>
                <RoutesButton to='/notas'>Notas</RoutesButton>
                <RoutesButton to='/agenda'>Agenda</RoutesButton>
                <RoutesButton to='/simulados'>Gabaritos</RoutesButton>
                <RoutesButton to='/'>Logout <HiOutlineLogout color='white'/></RoutesButton>
              </div>
              <section>
                  {mobile ? <MdClose size={45} color='white' onClick={() => setShowMobile(!mobile)}/> : <GiHamburgerMenu size={45} color='white' onClick={() => setShowMobile(!mobile)}/>}
              </section>
          </RoutesSection>
            <MobileHeader isShow={mobile}>
                <RoutesButton to='/dashboard'>Dashboard</RoutesButton>
                <RoutesButton to='/simulados'>Simulados</RoutesButton>
                <RoutesButton to='/notas'>Notas</RoutesButton>
                <RoutesButton to='/agenda'>Agenda</RoutesButton>
                <RoutesButton to='/simulados'>Gabaritos</RoutesButton>
                <RoutesButton to='/'>Logout <HiOutlineLogout color='white'/></RoutesButton>
            </MobileHeader>
      </HeaderContainer>
  );
}

export default Header;