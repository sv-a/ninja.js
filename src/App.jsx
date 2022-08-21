import React from 'react';
import DataTable from './pages/DataTable/DataTable';
import './assets/App.css';

const App = ({ rows }) => (
  <div className="container mt-3">
    <DataTable rows={rows} locale="da" rowsPerPage={5} />
  </div>
);

export default App;
