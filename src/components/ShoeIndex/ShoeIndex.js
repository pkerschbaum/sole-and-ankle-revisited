import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <div>
            <ShowTabletAndDown>
              <ShoeBreadcrumbs />
            </ShowTabletAndDown>
            <Title>Running</Title>
          </div>
          <HidePhoneAndDown>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </HidePhoneAndDown>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <ShoeBreadcrumbs />
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const ShoeBreadcrumbs = () => (
  <Breadcrumbs>
    <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
    <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
    <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
  </Breadcrumbs>
);

const ShowTabletAndDown = styled.div`
  display: none;
  @media ${QUERIES.tabletAndDown} {
    display: revert;
  }
`;

const HidePhoneAndDown = styled.div`
  @media ${QUERIES.phoneAndDown} {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;

  @media ${QUERIES.tabletAndDown} {
    flex-direction: column-reverse;
  }
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media ${QUERIES.tabletAndDown} {
    align-items: flex-end;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: var(--font-weight-medium);
`;

export default ShoeIndex;
