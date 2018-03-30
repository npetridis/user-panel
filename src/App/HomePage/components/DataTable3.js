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
    })
  };

  render() {
    const { columns, dataSource } = this.props;
    const { column, direction } = this.state;

    return (
      <Table
        basic='very'
        sortable
        fixed
      >
        <Table.Header>
          <Table.Row>
            {columns.map(record => (
              <Table.HeaderCell
                sorted={column === record.field ? direction : null}
                onClick={this.handleSort(record.field, record.sorter)}
                key={record.field}
              >
                {!!record.render ? record.render(record) : record.name}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {dataSource.map(({ username, postsCount, commentsPostsRatio }) => (
            <Table.Row key={username}>
              <Table.Cell>{username}</Table.Cell>
              <Table.Cell>{postsCount}</Table.Cell>
              <Table.Cell>{commentsPostsRatio}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  }
}

export default DataTable;