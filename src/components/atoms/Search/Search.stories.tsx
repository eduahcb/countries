import React, { ReactElement, useState } from 'react'

import { Search } from 'components/atoms/Search'

export default {
  title: 'Components / Search'
}

type SearchProps = {
  defaultValue?: any
  placeholder?: any
}

export const usage = ({ placeholder }: SearchProps): ReactElement => <Search placeholder={placeholder}/>

usage.args = {
  placeholder: 'products'
}

export const withDefaultValue = ({ defaultValue }: SearchProps): ReactElement => (
  <Search placeholder="my test" defaultValue={defaultValue} />
)

withDefaultValue.args = {
  defaultValue: 'Eduardo'
}

export const Controlled = (): ReactElement => {
  const [search, setSearch] = useState('')

  return (
   <Search placeholder="my test" value={search} onChange={(event) => { setSearch(event.target.value) }} />
  )
}
