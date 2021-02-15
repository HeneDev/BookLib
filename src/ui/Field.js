import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  margin-botto: 15px;
`

const StyledLabel = styled.label`
  font-weight: bold;
`

function Field(props) {
  return (
    <StyledDiv>
      <StyledLabel htmlFor="book-pages">{props.labelText}: </StyledLabel>
      {props.children}
    </StyledDiv>
  )
}

export default Field
