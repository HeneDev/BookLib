import React from 'react'
import Loading from './Loading'
import styled, { css } from 'styled-components'

const ButtonStyled = styled.button`
  border: none;
  background-color: DodgerBlue;
  padding: 8px 15px;
  color: white;
  font-weight: bold;
  border-radius: 6px;
  font-size: 15px;
  border: 1px solid lightGray;
`

function Button({ loading, style, ...rest }) {
  return (
    <ButtonStyled disabled={loading} {...rest}>
      {loading ? <Loading /> : rest.children}
    </ButtonStyled>
  )
}

export default Button
