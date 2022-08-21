import React from 'react'
import { PageLink } from '../../ui/PageLink'

const Pagination = React.forwardRef((props, ref) => (
  <ul
    {...props}
    ref={ref}
    className="pagination"
  >
    {props.children}
  </ul>
))

export default Pagination

export const Page = ({ currentPageNumber, activePage, onChange }) => {
  const click = (event) => {
    event.preventDefault()
    onChange(currentPageNumber)
  }

  const isActivePageClassName = activePage === currentPageNumber ? 'button-outline' : ''

  return (
    <li className="page-item mr-1">
      <PageLink
        className={isActivePageClassName}
        onClick={click}
      >
        {currentPageNumber}
      </PageLink>
    </li>
  )
}

