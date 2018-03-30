import React from 'react';
import ReactDataGrid from 'react-data-grid';

const rowGetter = (index, dataSource) => dataSource[index];

const handleGridSort = (sortColumn, sortDirection) => {
  const comparer = (a, b) => {
    if (sortDirection === 'ASC') {
      return (a[sortColumn] > b[sortColumn]) ? 1 : -1;
    } else if (sortDirection === 'DESC') {
      return (a[sortColumn] < b[sortColumn]) ? 1 : -1;
    }
  };

  const rows = sortDirection === 'NONE' ? this.state.originalRows.slice(0) : this.state.rows.sort(comparer);

  this.setState({ rows });
};

// const DataTable2 = ({ columns, dataSource, key: rowKey }) => (
//
// );

class DataTable extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      rows: this.props.dataSource,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ rows: nextProps.dataSource });
  }

  rowGetter = index => this.state.rows[index];

  handleGridSort = (sortColumn, sortDirection) => {
    const comparator = (a, b) => {
      if (sortDirection === 'ASC') {
        return (a[sortColumn] > b[sortColumn]) ? 1 : -1;
      } else if (sortDirection === 'DESC') {
        return (a[sortColumn] < b[sortColumn]) ? 1 : -1;
      }
    };

    sortDirection !== 'NONE' && this.setState({ rows: this.props.dataSource.sort(comparator) });
  };

  render() {
    const { columns, rowKey } = this.props;
    return (
      <div style={{tableLayout: 'fixed'}}>
        <ReactDataGrid
          columns={columns}
          rowKey={rowKey}
          rowGetter={this.rowGetter}
          rowsCount={this.state.rows.length}
          onGridSort={this.handleGridSort}
          // minHeight={500}
        />
      </div>
    );
  }
}

export default DataTable;