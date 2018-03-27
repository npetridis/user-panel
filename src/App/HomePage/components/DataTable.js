import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import overlayFactory from 'react-bootstrap-table2-overlay';

const DataTable = ({ keyField, columns, data, loading = true, bordered = false }) => (
  <div className="table-responsive">
    <BootstrapTable
      keyField={keyField}
      columns={columns}
      data={data}
      loading={true}
      overlay={overlayFactory({ spinner: true, background: 'rgba(192,192,192,0.3)' })}
      bordered={bordered}
    />
  </div>
);

export default DataTable;
