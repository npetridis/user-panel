import React from 'react';
import { Pagination, Segment, Table } from 'semantic-ui-react';

class PagedTable extends React.Component {

  static DEFAULT_PAGE_SIZE = 10;

  static sort = Object.freeze({
    ASC: 'ascending',
    DESC: 'descending',
  });

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      direction: null,
      column: null,
      currentPage: 1,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.dataSource });
  }

  handleSort = (clickedColumn, sorter) => () => {
    const { data, direction, column } = this.state;

    console.log('clicked column', clickedColumn);
    console.log('data       ', data);
    // console.log('sorted data', data.sort((a, b) => sorter(a, b, clickedColumn)).slice());

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: data.sort(sorter).slice(),
        direction: PagedTable.sort.ASC,
        currentPage: 1,
      });

      return;
    }
    console.log('PASSED');
    this.setState({
      data: data.slice().reverse().slice(),
      direction: direction === PagedTable.sort.ASC ? PagedTable.sort.DESC : PagedTable.sort.ASC,
      currentPage: 1,
    });
  };

  handlePageChange = (event, data) => this.setState({ currentPage: data.activePage });

  getTableHeader() {
    return (
      <Table.Row>
        {this.props.columns.map(column => (
          <Table.HeaderCell
            key={column.dataIndex}
            sorted={this.state.column === column.dataIndex ? this.state.direction : null}
            onClick={this.handleSort(column.dataIndex, column.sorter)}
          >
            {column.title}
          </Table.HeaderCell>))}
      </Table.Row>
    );
  }

  getTableBody = record => (
    <Table.Row key={record[this.props.rowKey || 'id']}>
      {this.props.columns.map(column => (
        <Table.Cell key={`${record.key}-${column.dataIndex}`}>
          {column.render
            ? column.render(record[column.dataIndex], record)
            : record[column.dataIndex]}
        </Table.Cell>
      ))}
    </Table.Row>
  );

  getTableFooter() {
    const { columns, dataSource, pageSize = PagedTable.DEFAULT_PAGE_SIZE } = this.props;

    return (
      <Table.Row>
        <Table.HeaderCell colSpan={columns.length + 1}>
          <Pagination
            floated="right"
            size="tiny"
            color="blue"
            defaultActivePage={1}
            onPageChange={this.handlePageChange}
            totalPages={Math.ceil(dataSource.length / pageSize)}
          />
        </Table.HeaderCell>
      </Table.Row>
    );
  }

  render() {
    const { dataSource = [], loading = false, sortable = false, pageSize = PagedTable.DEFAULT_PAGE_SIZE } = this.props;

    return (
      <Segment loading={loading}>
        <Table
          basic='very'
          sortable={sortable}
          fixed
          celled
          tableData={this.state.data.slice(this.state.currentPage - 1, this.state.currentPage + pageSize)}
          headerRow={this.getTableHeader()}
          renderBodyRow={this.getTableBody}
          footerRow={this.getTableFooter()}
        />
      </Segment>
    );
  }
}

export default PagedTable;
