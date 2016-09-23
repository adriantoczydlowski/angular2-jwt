import { Component, OnInit } from '@angular/core';
import { createSelector } from 'reselect';
import { List, Map, Record, fromJS } from 'immutable';
import { select } from 'ng2-redux';

// const MatrixRecord = Record({
//   x: 0,
//   y: 0,
//   z: 0,
// });

// const DataRecord = Record({
//   rows: List,
//   columns: List,
//   matrix: List,
// });

// const ColumnRecord = Record({
//   id: 0,
//   name: ''
// });

// const getColumns = fromJS([
//   new ColumnRecord({id: 1, name: 'column1'}),
//   new ColumnRecord({id: 2, name: 'column2'}),
//   new ColumnRecord({id: 3, name: 'column3'}),
//   new ColumnRecord({id: 4, name: 'column4'})
// ]).toList()

// const getMainTests = fromJS([
//   new ColumnRecord({id: 1, name: 'test1'}),
//   new ColumnRecord({id: 2, name: 'test2'}),
//   new ColumnRecord({id: 3, name: 'test3'}),
//   new ColumnRecord({id: 4, name: 'test4'})
// ]).toList()

// console.log('getColumns', getColumns)
// const MatrixGraphConfigRecord = Record({
//   data: DataRecord
// });

// const createMatrix = (rows: List<any>, columns: List<any>) => {
//   return rows.map((row, x) => {
//   console.log('row', row)
//     return columns.map((col, y) => {
//       return MatrixRecord({
//           x: x,
//           y: y,
//           z: 1
//         });
//     });
//   });
// }; 

// export const getMatrix = createSelector(
//   getColumns,
//   getMainTests,
//   ( columns: any, mainTests: any ) => {
//     console.log('columnsmat', columns)
//     return createMatrix(columns, mainTests);
//   }
// );

// export const getConfig = createSelector(
//   getColumns,
//   getMainTests,
//   ( columns: List<any>, mainTests: List<any> ) => {
//     return MatrixGraphConfigRecord({
//       data: DataRecord({
//         rows: columns,
//         columns: mainTests,
//         matrix: createMatrix(columns, mainTests)
//       })
//     })
//   }
// );

@Component({
  selector: 'app-matrix-graph-container',
  templateUrl: './matrix-graph-container.component.html',
  styleUrls: ['./matrix-graph-container.component.css']
})
export class MatrixGraphContainerComponent implements OnInit {
  //@select('getConfig') config$;
  data: any;
  constructor() {
    this.data = [
      {
        id: 1,
        name: 'drg1',
        count: 25
      },
      {
        id: 2,
        name: 'drg2',
        count: 44
      },
      {
        id: 3,
        name: 'drg3',
        count: 33
      },
      {
        id: 4,
        name: 'drg4',
        count: 11
      },
      {
        id: 5,
        name: 'drg5',
        count: 2
      }
    ];
    // this.config = {
    //   data: {
    //     rows: [
    //       {
    //         id: 1,
    //         name: 'row1'
    //       },
    //       {
    //         id: 2,
    //         name: 'row12'
    //       },
    //       {
    //         id: 3,
    //         name: 'row3'
    //       }
    //     ],
    //     columns: [
    //       {
    //         id: 1,
    //         name: 'columns1'
    //       },
    //       {
    //         id: 2,
    //         name: 'columns2'
    //       },
    //       {
    //         id: 3,
    //         name: 'columns3'
    //       }
    //     ],
    //     links: [
    //       {
    //         source: 0,
    //         target: 0,
    //         value: 1
    //       },
    //       {
    //         source: 1,
    //         target: 0,
    //         value: 1
    //       },
    //       {
    //         source: 2,
    //         target: 0,
    //         value: 1
    //       },
    //       {
    //         source: 0,
    //         target: 1,
    //         value: 1
    //       },
    //       {
    //         source: 1,
    //         target: 1,
    //         value: 1
    //       },
    //       {
    //         source: 2,
    //         target: 1,
    //         value: 1
    //       },
    //       {
    //         source: 0,
    //         target: 2,
    //         value: 1
    //       },
    //       {
    //         source: 1,
    //         target: 2,
    //         value: 1
    //       },
    //       {
    //         source: 2,
    //         target: 2,
    //         value: 1
    //       }
    //     ]
    //   }
    //}
   }

  ngOnInit() {
  }

}
