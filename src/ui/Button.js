import React from 'react'
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

function Button({ loading, label, style, ...rest }) {
  return (
    <ButtonStyled disabled={loading} {...rest}>
      {loading ? 'Loading' : label}
    </ButtonStyled>
  )
}

export default Button
