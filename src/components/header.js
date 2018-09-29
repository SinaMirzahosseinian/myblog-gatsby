import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

const HeaderWrapper = styled.div`
      background: black;
      margin-bottom: 1.45rem;
`;

const HeaderContainer = styled.div`
      margin: 0px auto;
      max-width: 960px;
      padding: 1.45rem 1.0875rem;

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
          {siteTitle}
        </Link>
      </h1>
    </HeaderContainer>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
  </HeaderWrapper>
)

export default Header

