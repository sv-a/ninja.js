
export const filteredText = (rows, searchText) => {
  return rows.filter((row) => {
    return row.name1.toLowerCase().search(searchText.toLowerCase()) > -1 ||
      (row.email && row.email.toLowerCase().search(searchText.toLowerCase()) > -1)
  })
}

export const getRowsToRender = (initialRows, rowsPerPage, searchText) => {
  if (searchText) {
    const filteredResult = filteredText(initialRows, searchText)
    const rows = rowsPerPages(filteredResult, rowsPerPage)

    return rows
  }

  const rows = rowsPerPages(initialRows, rowsPerPage)

  return rows
}

const rowsPerPages = (initialRows, rowsPerPage) => {
  const rows = initialRows.reduce((acc, val, index) => {
    const idx = Math.floor(index / rowsPerPage)
    const page = acc[idx + 1] || (acc[idx + 1] = [])
    page.push(val)

    return acc
  }, {})

  return rows;
}