import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import overlayFactory from 'react-bootstrap-table2-overlay';

const DataTable = ({ keyField, columns, data, loading = false, bordered = false }) => (
  <div style={{width:'100%'}}>
    <BootstrapTable
      keyField={keyField}
      columns={columns}
      data={data}
      loading={loading}
      overlay={overlayFactory({ spinner: true, background: 'rgba(192,192,192,0.3)' })}
      bordered={bordered}
      printable
    />
  </div>
);

export default DataTable;
