import styled from 'styled-components'

export const Container = styled.header`
  background: var(--element);
  border: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`

export const Content = styled.div`
  display: flex;
  padding: 1em;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;

  @media (min-width: 640px) {
    padding: 1em 1.5em;
  }
  
  @media (min-width: 768px) {
    padding: 1em 2rem;
  }

  @media (min-width: 1024px) {
    padding: 1em 2.1em;
  }

  @media (min-width: 1200px) {
    margin: auto;
    padding: 1em 0;
  }

`

export const Title = styled.h1`
  font-size: 1rem;
  color: var(--text-primary);

  @media (min-width: 640px) {
    font-size: 1.1rem;
  }
  
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1200px) {
    font-size: 2rem;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    fill: var(--text-primary);
    margin-right: 1em;
    width: 1em;
    height: 1em;
  }

  p {
    font-size: 1em;
  }

  @media (min-width: 640px) {
    svg {
      width: 1.1em;
      height: 1.1em;
    }

    p {
      font-size: 1em;
    }
  }
  
  @media (min-width: 768px) {
    svg {
      width: 1.25em;
      height: 1.25em;
    }

    p {
      font-size: 1.25em;
    }
  }

  @media (min-width: 1024px) {
    svg {
      width: 1.5em;
      height: 1.5em;
    }

    p {
      font-size: 1.5em;
    }
  }

  @media (min-width: 1200px) {
    svg {
      width: 2em;
      height: 2em;
    }

    p {
      font-size: 2em;
    }
  }
`
