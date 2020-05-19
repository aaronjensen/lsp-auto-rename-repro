import React from 'react'

interface Props {
  pageTitle: string
}

export const NavBarLayout = ({ pageTitle }: Props) => (
  <div>
    <header>
      <title>{pageTitle}</title>
    </header>
    <div />
  </div>
)
