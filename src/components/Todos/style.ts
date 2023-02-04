import styled from '@emotion/styled'

export const Wrapper = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  border-radius: 0.5rem;
  max-width: 30rem;
  width: 90vw;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
`

export const Status = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 0.2rem;
`

export const CompletedTodo = styled.span`
  font-size: 4rem;
  line-height: 0.8;
`

export const TodoList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 100%;
  overflow: auto;
  margin-top: 2rem;

  ::-webkit-scrollbar-thumb {
    height: 56px;
    border-radius: 8px;
    border: 4px solid transparent;
    background-clip: content-box;
    background-color: rgba(0, 0, 0, 0.5);
  }
`
