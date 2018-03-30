import React from 'react';
import { Table } from 'semantic-ui-react';

const sort = Object.freeze({
  ASC: 'ascending',
  DESC: 'descending',
});

class DataTable extends React.Component {

  state = {
    data: [],
    direction: null,
    column: null,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.dataSource });
  }

  handleSort = (clickedColumn, sorter) => () => {
    const { data, direction, column } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: data.sort(sorter),
        direction: sort.ASC,
      });

      return;
    }

    this.setState({
      data: data.reverse(),
      direction: direction === sort.ASC ? sort.DESC : sort.ASC,
    });
  };

  render() {
    const { columns, dataSource, keyField } = this.props;
    const { column, direction } = this.state;

    return (
      <Table
        basic='very'
        sortable
        fixed
      >
        <Table.Header>
          <Table.Row>
            {columns.map(col => (
              <Table.HeaderCell
                sorted={column === col.field ? direction : null}
                onClick={this.handleSort(col.field, col.sorter)}
                key={col.field}
              >
                {!!col.render ? col.render(col) : col.name}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {dataSource.map(record => (
            <Table.Row key={record[keyField]}>
              <Table.Cell>{record.username}</Table.Cell>
              <Table.Cell>{record.postsCount}</Table.Cell>
              <Table.Cell>{record.commentsPostsRatio}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  }
}

export default DataTable;