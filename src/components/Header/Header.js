import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <MySuperHeader />
      <TopBorder />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <TabletAndDownNav>
          <Icon id="shopping-bag" />
          <Icon id="search" />
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
          </UnstyledButton>
        </TabletAndDownNav>
        <SideDesktop />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MySuperHeader = styled(SuperHeader)`
  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const TopBorder = styled.div`
  border-top: 4px solid ${COLORS.gray[900]};

  display: none;
  @media ${QUERIES.tabletAndDown} {
    display: revert;
  }
`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow-x: auto;

  @media ${QUERIES.phoneAndDown} {
    padding: 18px 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 8.1vw - 4rem, 3rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const TabletAndDownNav = styled.nav`
  align-self: center;
  align-items: center;

  display: none;
  @media ${QUERIES.tabletAndDown} {
    display: flex;
    gap: 32px;
  }

  @media ${QUERIES.phoneAndDown} {
    gap: 16px;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const SideDesktop = styled(Side)`
  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
