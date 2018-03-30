import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import overlayFactory from 'react-bootstrap-table2-overlay';
import ReactTable from 'react-table'

const DataTable = ({ keyField, columns, data, loading = false, bordered = false }) => (
  <div className='table-responsive'>
    <ReactTable
      columns={columns}
      data={data}
    />

    {/*<BootstrapTable*/}
      {/*classes='table'*/}
      {/*// rowStyle={ { width:'100%' }}*/}
      {/*keyField={keyField}*/}
      {/**/}
      {/*loading={loading}*/}
      {/*overlay={overlayFactory({ spinner: true, background: 'rgba(192,192,192,0.3)' })}*/}
      {/*bordered={bordered}*/}
      {/*printable*/}
    {/*/>*/}
  </div>
);

export default DataTable;
