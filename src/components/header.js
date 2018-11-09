import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';

import logo from '../images/logo.svg';

const HeaderWrapper = styled.div`
  background: #524763;
  // margin-bottom: 1.45rem;
  img {
    margin-bottom: 0;
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0.5rem;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img src={logo} style={{width: '100px', margin: 'auto 0'}} alt="gatsby logo" />
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
