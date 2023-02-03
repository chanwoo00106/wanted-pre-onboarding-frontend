import styled from '@emotion/styled'

const Button = styled.button`
  width: 100%;
  padding: 0.7rem 0;
  border: none;
  border-radius: 0.5rem;
  transition: 0.2s;

  :hover {
    background: #1f1f1f;
  }

  :disabled {
    background: #aaa;
    cursor: not-allowed;
  }
`

export default Button
