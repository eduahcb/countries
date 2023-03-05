import styled from 'styled-components'

import { Search as SearchComponent } from 'components/atoms/Search'

export const Main = styled.main`
  padding: 1em 1em;
  max-width: 1440px;

  @media (min-width: 640px) {
    padding: 2em 1.5em;
  }
  
  @media (min-width: 768px) {
    padding: 3em 2rem;
  }

  @media (min-width: 1024px) {
    padding: 3em 2.1em;
  }

  @media (min-width: 1440px) {
    margin: auto;
    padding: 3em 0;
  }
`

export const Search = styled(SearchComponent)`
  @media (min-width: 1024px) {
    width: 50%;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
`
