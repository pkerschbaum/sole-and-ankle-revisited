/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>

        <StretchVertically />
        <Nav>
          <NavLink href="/sale" style={{ '--color': 'var(--color-secondary)' }}>
            Sale
          </NavLink>
          <NavLink href="/new" style={{ '--color': 'var(--color-gray-900)' }}>
            New&nbsp;Releases
          </NavLink>
          <NavLink href="/men" style={{ '--color': 'var(--color-gray-900)' }}>
            Men
          </NavLink>
          <NavLink href="/women" style={{ '--color': 'var(--color-gray-900)' }}>
            Women
          </NavLink>
          <NavLink href="/kids" style={{ '--color': 'var(--color-gray-900)' }}>
            Kids
          </NavLink>
          <NavLink
            href="/collections"
            style={{ '--color': 'var(--color-gray-900)' }}
          >
            Collections
          </NavLink>
        </Nav>
        <Footer>
          <FooterNavLink href="/terms">Terms and Conditions</FooterNavLink>
          <FooterNavLink href="/privacy">Privacy Policy</FooterNavLink>
          <FooterNavLink href="/contact">Contact Us</FooterNavLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  display: flex;
  justify-content: flex-end;

  background: hsl(220deg 5% 40% / 0.8);
`;

const Content = styled(DialogContent)`
  height: 100%;
  width: 300px;
  padding: 32px;

  display: flex;
  flex-direction: column;

  background: var(--color-white);
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0px;
  padding: 16px;
`;

const StretchVertically = styled.div`
  flex: 1;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;

  font-size: ${18 / 16}rem;
  text-transform: uppercase;
`;

const NavLink = styled.a`
  color: var(--color);
  text-decoration: none;
`;

const FooterNavLink = styled(NavLink)`
  color: var(--color-gray-700);
  font-size: ${14 / 16}rem;
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export default MobileMenu;
