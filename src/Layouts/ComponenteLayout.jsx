
import React from 'react'

export const ComponenteLayout = ({children}) => {

    const css = 'd-flex flex-column gap-3 bg-dark-subtle p-4 my-4 mx-auto shadow rounded'
  return (
    <div className={css} >{children}</div>
  )
}
