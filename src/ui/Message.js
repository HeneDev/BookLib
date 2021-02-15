import React from 'react'
import styled, { css } from 'styled-components'

const MessageStyled = styled.p`
  padding: 10px;
  border: 1px solid lightGray;
  background: #f0f0f0;
  border-radius: 6px;
  ${(props) => {
    if (props.type === 'error') {
      return css`
        border-color: transparent;
        background-color: Tomato;
        color: white;
      `
    } else if (props.type === 'success') {
      return css`
        border-color: transparent;
        background-color: green;
        color: white;
      `
    }
  }}
`

function Message({ message, type }) {
  return (
    <div>{message && <MessageStyled type={type}>{message}</MessageStyled>}</div>
  )
}

export default Message
