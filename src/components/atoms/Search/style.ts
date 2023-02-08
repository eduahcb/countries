import styled from 'styled-components'

export const Root = styled.div`
  background-color: var(--elements);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  padding: 1em 2em;
  border-radius: 5px;

  display: flex;
  align-items: center;

  cursor: text;

  &:focus-within {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4)
  }
`

export const Input = styled.input`
  all: unset;
  flex-grow: 1;
  margin: 0 1.25em;
  color: var(--input);

  font-size: 0.875rem;


  @media (min-width: 640px) {
    font-size: 1rem;
  }

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration { 
    display: none; 
  }
`

export const ImageContainer = styled.span`
  display: flex;
  align-items: center;

  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    fill: var(--input);
  }
`

export const CloseContainer = styled.span`
  display: flex;
  align-items: center;

  width: 18px;
  height: 18px;

  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
    fill: var(--input);
  }
`
