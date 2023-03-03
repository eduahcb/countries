import styled from 'styled-components'

export const Root = styled.div`
  background-color: var(--elements);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  margin-bottom: 1.5em;
  padding: .8em 1em;
  border-radius: 5px;

  display: flex;
  align-items: center;

  cursor: text;

  &:focus-within {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4)
  }

  @media (min-width: 640px) {
    padding: .9em 1.5em;
  }
  
  @media (min-width: 768px) {
    padding: .9em 2rem;
  }

  @media (min-width: 1024px) {
    padding: 1em 2em;
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
    width: 1em;
    height: 1em;
    fill: var(--input);
  }

  @media (min-width: 640px) {
    svg {
      width: 1.125em;
      height: 1.125em;
    }
  }
  
  @media (min-width: 768px) {
    svg {
      width: 1.25em;
      height: 1.25em;
    }
  }
`

export const CloseContainer = styled.span`
  display: flex;
  align-items: center;

  cursor: pointer;

  svg {
    width: 0.9rem;
    height: 0.9rem;
    fill: var(--input);
  }

  @media (min-width: 640px) {
    svg {
      width: 1rem;
      height: 1rem;
    }
  }

  @media (min-width: 768px) {
    svg {
      width: 1.125rem;
      height: 1.125rem;
    }
  }
`
