// Generate Table: Generate a table of numbers given the rows and columns
// https://www.greatfrontend.com/questions/user-interface/generate-table

import { useState } from 'react';

import './styles.css';

function Table(props) {
  const { rows, columns } = props;
  const cells = Array.from({ length: rows * columns }, (_, i) => i + 1);

  return (
    <div className="table" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {React.Children.toArray(
        cells.map((i) => {
          return <div>{i}</div>;
        })
      )}
    </div>
  );
}

export default function App() {
  const [rows, setRows] = useState('');
  const [columns, setColumns] = useState('');

  const handleSubmit = (event) => {
    // To prevent a page redirect.
    event.preventDefault();

    // Obtain data from the form.
    const data = new FormData(event.target);
    const rows = data.get('rows');
    setRows(Number(rows));
    const columns = data.get('columns');
    setColumns(Number(columns));
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="rows">Rows</label>
          <input id="rows" name="rows" type="number" min={1} defaultValue={rows} />
        </div>
        <div>
          <label htmlFor="columns">Columns</label>
          <input id="columns" name="columns" type="number" min={1} defaultValue={columns} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {Boolean(rows) && Boolean(columns) && <Table rows={rows} columns={columns} />}
    </div>
  );
}
