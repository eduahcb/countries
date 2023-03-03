import styled from 'styled-components'

export const Root = styled.div`
  background-color: var(--elements);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  padding: .6em 1em;
  border-radius: 5px;
  position: relative;
  margin-bottom: 1.5rem;

  cursor: pointer;

  &:focus-within {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4)
  }

  @media (min-width: 640px) {
    padding: .7em 1.5em;
  }
  
  @media (min-width: 768px) {
    padding: .8em 2rem;
  }

  @media (min-width: 1024px) {
    padding: 1em 2em;
  }
`

export const Input = styled.input`
  all: unset;
  width: 100%;
  opacity: 0;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  pointer-events: none;

  padding: 1em 2em;
  box-sizing: border-box;

  @media (min-width: 640px) {
    font-size: 1rem;
  }
`

export const DisplayContainer = styled.div`
  cursor: pointer;
  width: 100%;

  display: flex;
  align-items: center;

  color: var(--input);

  span {
    flex: 1;
    font-size: 0.875rem;
  }

  svg {
    margin-left: 2px;
    fill: var(--input);
  }

  @media (min-width: 640px) {
    span {
      font-size: 1rem;
    }
  }
`

export const DropdownContainer = styled.div`
  position: absolute;
  inset: 0px auto auto 0;
  
  min-width: 160px;
  max-width: 620px;

  max-height: 360px;

  background-color: var(--elements);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  padding: .5em 0;

  transform: translate(0px, 46px);

  @media (min-width: 640px) {
    transform: translate(0px, 50px);
  }
  
  @media (min-width: 768px) {
    transform: translate(0px, 55px);
  }

  @media (min-width: 1024px) {
    transform: translate(0px, 60px);
  }


`

export const DropdownList = styled.div`
  width: 100%;

  max-height: 460px;
  overflow-x: auto;
`
