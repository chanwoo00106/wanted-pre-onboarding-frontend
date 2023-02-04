import styled from '@emotion/styled'

export const List = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`

export const TodoInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const TodoName = styled.h4`
  flex: 1;
  margin: 0;
  white-space: nowrap;
  width: 100%;
`

export const Buttons = styled.div`
  display: flex;
  gap: 0.8rem;
`

export const Button = styled.div`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
