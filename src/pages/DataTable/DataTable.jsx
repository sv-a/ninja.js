import React, { useEffect, useMemo, useState } from 'react'
import Row from '../../components/forms/Table/Row'
import { Table } from '../../components/forms/Table/Table'
import Pagination, { Page } from '../../components/forms/Pagination/Pagination'
import { getRowsToRender } from './utils/dataTableUtils'
import { Input } from '../../components/ui/Input'

const DataTable = ({ rows, rowsPerPage = 40 }) => {
  const [searchText, setSearchText] = useState('');
  const [activePageNumber, setActivePageNumber] = useState('1');

  const rowsToRender = useMemo(() => {
    return getRowsToRender(rows, rowsPerPage, searchText)
  }, [rows, rowsPerPage, searchText]);

  useEffect(() => {
    setActivePageNumber('1')
  }, [searchText])

  const onSearchText = (event) => setSearchText(event.target.value)

  const onPageChange = (pageNumber) => setActivePageNumber(pageNumber)

  const rowsToRenderObject = Object.keys(rowsToRender);

  return (
    <>
      <div className="p-b-1">
        <Input
          type="search"
          placeholder="Søg brugere"
          onChange={onSearchText}
        />
      </div>
      {!!rowsToRenderObject.length && (
        <>
          <Table>
            {rowsToRender[activePageNumber].map(row =>
              <Row key={row.per_id} row={row} />
            )}
          </Table>
          <Pagination>
            {rowsToRenderObject.map(page => (
              <Page
                key={page}
                activePage={activePageNumber}
                currentPageNumber={page}
                onChange={onPageChange}
              />
            ))}
          </Pagination>
        </>
      )}
    </>
  )
}

export default DataTable
