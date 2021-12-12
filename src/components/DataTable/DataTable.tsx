import React from 'react'
import { AgGridColumn, AgGridReact } from 'ag-grid-react'
import { keys } from 'lodash'

import 'ag-grid-enterprise'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-material.css'

interface Props {
  data: any[]
  columns: any
}

const DataTable = ({ data, columns }: Props) => {
  return (
    <div style={{ width: '100%', height: '495px' }}>
      <div
        id="myGrid"
        style={{
          height: '100%',
          width: '100%',
        }}
        className="ag-theme-material"
      >
        <AgGridReact
          defaultColDef={{
            enableRowGroup: true,
            enablePivot: true,
            enableValue: true,
            sortable: true,
            resizable: true,
            filter: true,
            flex: 1,
            minWidth: 100,
          }}
          suppressRowClickSelection={true}
          groupSelectsChildren={true}
          debug={true}
          rowSelection={'multiple'}
          rowGroupPanelShow={'always'}
          pivotPanelShow={'always'}
          enableRangeSelection={true}
          pagination={true}
          paginationPageSize={7}
          rowData={data}
        >
          {columns &&
            keys(columns).map((item: any) => (
              <AgGridColumn key={item} field={item} />
            ))}
        </AgGridReact>
      </div>
    </div>
  )
}

export default DataTable
