import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-matrix-graph-container',
  templateUrl: './matrix-graph-container.component.html',
  styleUrls: ['./matrix-graph-container.component.css']
})
export class MatrixGraphContainerComponent implements OnInit {
  config: any;
  constructor() {
    this.config = {
      data: {
        rows: [
          {
            id: 1,
            name: 'row1'
          },
          {
            id: 2,
            name: 'row12'
          },
          {
            id: 3,
            name: 'row3'
          }
        ],
        columns: [
          {
            id: 1,
            name: 'columns1'
          },
          {
            id: 2,
            name: 'columns2'
          },
          {
            id: 3,
            name: 'columns3'
          }
        ],
        links: [
          {
            source: 0,
            target: 0,
            value: 1
          },
          {
            source: 1,
            target: 0,
            value: 1
          },
          {
            source: 2,
            target: 0,
            value: 1
          },
          {
            source: 0,
            target: 1,
            value: 1
          },
          {
            source: 1,
            target: 1,
            value: 1
          },
          {
            source: 2,
            target: 1,
            value: 1
          },
          {
            source: 0,
            target: 2,
            value: 1
          },
          {
            source: 1,
            target: 2,
            value: 1
          },
          {
            source: 2,
            target: 2,
            value: 1
          }
        ]
      }
    }
   }

  ngOnInit() {
  }

}
