
export const filteredText = (rows, searchText) => {
  return rows.filter((row) => {
    return row.name1.toLowerCase().search(searchText.toLowerCase()) > -1 ||
      (row.email && row.email.toLowerCase().search(searchText.toLowerCase()) > -1)
  })
}

export const getRowsToRender = (initialRows, rowsPerPage, searchText) => {
  if (searchText) {
    const filteredResult = filteredText(initialRows, searchText)

    return rowsPerPages(filteredResult, rowsPerPage)
  }

  return rowsPerPages(initialRows, rowsPerPage)
}

const rowsPerPages = (initialRows, rowsPerPage) => {
  return initialRows.reduce((acc, val, index) => {
    const idx = Math.floor(index / rowsPerPage)
    const page = acc[idx + 1] || (acc[idx + 1] = [])
    page.push(val)

    return acc
  }, {});
}