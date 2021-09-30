import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

export const StyledNavLink = styled(NavLink)`
    margin-right: 20px;
    color: pink;

    font-weight: 600;
    font-size: 20px;
    line-height: 1.475;

    &.activeLink {
    color: #ec0f52;
  }
  `
  export const StyledNav = styled.nav`
    border-bottom: solid 1px pink;
  `
