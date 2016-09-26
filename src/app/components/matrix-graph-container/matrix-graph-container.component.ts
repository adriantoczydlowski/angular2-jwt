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
  showResult: any;
  constructor() {
    this.showResult = {
      title: 'show results',
      value: true
    };
    this.data = [
      {
        id: 1,
        name: 'drg1',
        count: 25,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus nulla id augue imperdiet pulvinar. Suspendisse a tempor risus. Etiam id leo vehicula, ullamcorper velit et, tempor dolor. Morbi rhoncus lacus ut porta porttitor. Nam laoreet hendrerit est ac pulvinar. Nulla sagittis, purus ut rhoncus suscipit, lorem enim iaculis odio, in aliquet ex lacus vel felis. Quisque tempor faucibus dui id lobortis. Pellentesque cursus ut eros ut auctor. Sed leo elit, mattis et imperdiet non, ultrices non metus. Curabitur vitae finibus enim. Fusce sed diam nisi. Maecenas justo dolor, dapibus id nisl nec, dapibus luctus ante. Curabitur porttitor odio vitae risus suscipit gravida.'
      },
      {
        id: 2,
        name: 'drg2',
        count: 44,
        description: 'Aliquam bibendum mauris ac porttitor fermentum. Sed faucibus, sapien sed facilisis aliquam, mi metus efficitur tellus, non euismod mauris diam et velit. Suspendisse vitae fringilla massa. Nulla nec arcu eu augue fringilla porta. Pellentesque congue nisi sem, vel sodales tellus scelerisque fringilla. Mauris egestas in ligula aliquet vestibulum. Maecenas convallis ornare turpis quis vulputate. Nunc ac ultricies felis, ut malesuada ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean pretium neque ut ante ultrices, quis rutrum justo aliquet. Nullam semper ipsum sed urna eleifend aliquam. Integer tincidunt, leo in lobortis blandit, massa dui pellentesque nisi, venenatis ultricies magna lorem non leo.'
      },
      {
        id: 3,
        name: 'drg3',
        count: 33,
        description: 'short description asd asdasda asdas dsadasd'
      },
      {
        id: 4,
        name: 'drg4',
        count: 11,
        description: 'short2 description asd asdasda asdas dsadasd'
      },
      {
        id: 5,
        name: 'drg5',
        count: 2,
        description: 'short3 description asd asdasda asdas dsadasd'
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
