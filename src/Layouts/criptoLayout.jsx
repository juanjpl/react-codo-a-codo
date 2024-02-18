

import React from 'react'

export const CriptoLayout = ({children}) => {

    const css = 'd-flex flex-column gap-3 bg-dark text-light p4 my4 shadow rounded'
  return (
    <div className={css} >{children}</div>
  )
}
