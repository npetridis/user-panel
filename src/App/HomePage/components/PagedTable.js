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
      data: this.props.dataSource || [],
      direction: null,
      column: null,
      activePage: 1,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.dataSource });
  }

  handleSort = (clickedColumn, sorter) => () => {
    const { data, direction, column } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: data.sort((a, b) => sorter(a[clickedColumn], b[clickedColumn])).slice(),
        direction: PagedTable.sort.ASC,
        activePage: 1,
      });

      return;
    }

    this.setState({
      data: data.reverse().slice(),
      direction: direction === PagedTable.sort.ASC ? PagedTable.sort.DESC : PagedTable.sort.ASC,
      activePage: 1,
    });
  };

  getPageIndexes = () => {
    const { pageSize = PagedTable.DEFAULT_PAGE_SIZE } = this.props;
    const start = (this.state.activePage-1) * pageSize;
    const end = start + pageSize;
    return [start, end];
  };

  handlePageChange = (event, data) => this.setState({ activePage: data.activePage });

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
            activePage={this.state.activePage}
            onPageChange={this.handlePageChange}
            totalPages={Math.ceil(dataSource.length / pageSize)}
          />
        </Table.HeaderCell>
      </Table.Row>
    );
  }

  render() {
    const { loading = false, sortable = false } = this.props;

    return (
      <Segment loading={loading}>
        <Table
          basic='very'
          sortable={sortable}
          fixed
          celled
          tableData={this.state.data.slice(...this.getPageIndexes())}
          headerRow={this.getTableHeader()}
          renderBodyRow={this.getTableBody}
          footerRow={this.getTableFooter()}
        />
      </Segment>
    );
  }
}

export default PagedTable;
