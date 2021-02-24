import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  li {
    padding: 6px;
    margin: 6px;
    background-color: f0f0f0;
    display: inline-block;

    &.active {
      background-color: #ccc;
    }
  }
`

function BookMenu({ url }) {
  const location = useLocation()

  return (
    <div>
      <StyledUl>
        <li className={location.pathname === url && 'active'}>
          <Link to={`${url}`}>General information</Link>
        </li>
        <li className={location.pathname === `${url}/authors` && 'active'}>
          <Link to={`${url}/authors`}>Authors</Link>
        </li>
        <li className={location.pathname === `${url}/photos` && 'active'}>
          <Link to={`${url}/photos`}>Photos</Link>
        </li>
      </StyledUl>
    </div>
  )
}

export default BookMenu
