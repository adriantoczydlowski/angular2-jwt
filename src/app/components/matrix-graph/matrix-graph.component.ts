import { 
  Component, 
  OnInit, 
  Input,
  ElementRef,
  ViewEncapsulation
} from '@angular/core';
import { select, selectAll } from "d3-selection";
import "d3-selection-multi";
import { scaleOrdinal, scaleLinear, scaleBand } from "d3-scale";
import { range } from "d3-array";

//import { IMatrixGraphConfig } from '../../matrix-graph';

@Component({
  selector: 'a2-matrix-graph',
  templateUrl: './matrix-graph.component.html',
  styleUrls: ['./matrix-graph.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MatrixGraphComponent implements OnInit {

  @Input() config: any;

  private host;        // D3 object referebcing host dom object
  private svg;         // SVG in which we will print our chart
  private matrix;      // Rectangular array of numbers
  private links;       // Values for matrix
  private rows;        // Rows for matrix 
  private columns;     // Columns for matrix
  private margin;      // Space between the svg borders and the actual chart graphic
  private width;       // Component width
  private height;      // Component height
  private xScale;      // D3 scale in X
  private yScale;      // D3 scale in Y
  private cScale;      // D3 color scale
  private htmlElement; // Host HTMLElement
  private orders;      // Order methods
  private adjacency;
  private orderBy;     // Selected order
  private currentOrder // Current order method 

  /**
  * We request angular for the element reference 
  * and then we create a D3 Wrapper for our host element
  **/
  constructor(private element: ElementRef) {
    this.htmlElement = this.element.nativeElement;
    this.host = select(this.element.nativeElement);
  }

  ngOnInit() {
  }

  /**
  * Everythime the @Input is updated, we rebuild the chart
  **/
  ngOnChanges(): void {
    if (!this.config) {
        return;
    }
    this.setup();
    this.buildSVG();
    //this.buildMatrix();
    //this.convertLinks();
    this.draw();
    // if (this.rows.length >0 && this.columns.length > 0) {
    //     this.buildSVG();
    //     this.buildMatrix();
    //     this.convertLinks();
    //     this.setupAdjacency();
    //     this.setupOrders();
    //     this.draw();
    //     if (this.currentOrder) {
    //         this.changeOrder(this.currentOrder);
    //     }
    // }
         
  }

  /**
  * Basically we get the dom element size and build the container configs
  * also we create the xScale and yScale ranges depending on calculations
  **/
  private setup(): void {
    this.margin = { top: 100, right: 0, bottom: 50, left: 150 };
    this.width = this.htmlElement.clientWidth - this.margin.left - this.margin.right;
    //this.width = this.config.data.columns.length * 25;
    this.height = this.config.data.rows.size * 25;
    this.xScale = scaleBand().range([0, this.width]);
    this.yScale = scaleBand().range([0, this.height]);
    // this.cScale = D3.scale.category10();
    this.cScale = scaleLinear()
                    .domain([0, 0.25, 0.5, 0.75, 1])
                    .range(<any>['rgb(181, 95, 156)', 'rgb(194, 50, 230)', 
                                 'rgb(246, 63, 216)', 'rgb(104, 221, 221)',
                                 'rgb(28, 194, 235)', 'rgb(0, 113, 188)']);
    this.matrix = this.config.data.matrix;
    this.rows = this.config.data.rows;
    this.columns = this.config.data.columns;
    this.xScale.domain(range(this.columns.size));
    this.yScale.domain(range(this.rows.size));
  }

  /**
  * We can now build our SVG element using the configurations we created
  **/
  private buildSVG(): void {
    this.host.select('svg').html('');
    console.log('host', this.host)
    this.svg = this.host.select('svg')
      .attrs({
        'width': this.width + this.margin.left + this.margin.right,
        'height': this.height + this.margin.top + this.margin.bottom
      })
      .append('g')
        .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }

  /**
   * Method to create empty matrix
   * Also compute index per node and map cell value.
   */
  private buildMatrix(): void {
    this.matrix = [];
    this.rows.forEach((row, i) => {
      row.index = i;
      this.matrix[i] = range(this.columns.size).map(j => { return {x: j, y: i, z: 0}; });
    });
  }

  /**
   * Convert links to matrix
   * Also count character occurrences.
   */
  private convertLinks(): void {
    console.log('matrix', this.matrix);
    console.log('links', this.links)
    this.links.forEach(link => {
      console.log('libk', link);
      console.log('value', link.get('source'))
      this.matrix[link.get('source')][link.get('target')].z = link.get('value');
    }); 
    
  }

  /**
   * Method to aggregate all functions that add new elements to svg
   */
  private draw() {  
    this.drawGrid();
    this.drawRows();
    this.drawColumns();
  }

  private drawGrid() {
    this.svg.append('rect')
      .attrs({
        class: 'background',
        width: this.width,
        height: this.height
      });
  }

  private drawRows() {
    let row = this.svg.selectAll('.row')
      .data(this.matrix.toJS());

    let group = row.enter().append('g')
      .attrs({
        'id': (d, i) => 'row' + i,
        'class': 'row',
        'transform': (d, i: number) => 'translate(0,' + this.yScale(i) + ')'
      })
      .each((d, i) => this.drawCell(d,i));

    group.append('line')
      .attr('x2', this.width);

    group.append('text')
      .attrs({
        'class': 'header',
        'x': -6,
        'y': this.yScale.bandwidth() / 2,
        'dy': '.32em',
        'text-anchor': 'end'
      })
      .text((d, i) => this.rows.get(i).name)
    // .on('click', (d, i) => this.onColumnSelect.emit(this.rows[i]));

    row.exit().remove();
  }

  private drawCell(row, index) {
    console.log('row-cell', row)
    let cell = select('#row' + index).selectAll('.cell')
      .data(row.filter((d: any) => d.z));
    
    cell.enter().append('rect')
      .attrs({
        'class': 'cell',
        'id': (d: any) => 'cell' + d.y + '-' + d.x,
        'x': (d: any) => this.xScale(d.y),
        'width': this.xScale.bandwidth(),
        'height': this.yScale.bandwidth()
      })
      .style('fill', (d: any) => this.cScale(d.z))
      .on('mouseover', this.mouseover)
      .on('mouseout', this.mouseout);

    cell.enter().append('text')
      .attrs({
        'class': 'cell-text',
        'x': (d: any) => this.xScale(d.y),
        'dx': (d: any) => this.xScale.bandwidth() / 2,
        'y': (d: any) => this.yScale.bandwidth() / 2,
        'dy': '.32em',
        'text-anchor': 'middle'
      })
      .text((d, i) => this.matrix.get(index).get(i).z + '%')
      .on('mouseover', this.mouseover)
      .on('mouseout', this.mouseout);
    
    cell.exit().remove();
  }

  private mouseover = (p) => {
    let element = select('#cell' + p.y + '-' + p.x);
    selectAll('.row text.header').classed('active', (d, i) => i == p.x);
    selectAll('.column text.header').classed('active', (d, i) => i == p.y);
    
    select('#row' + p.x).append('rect')
      .attrs({
          'class': 'highlight',
          'width': this.width,
          'height': this.yScale.bandwidth()
      });
    
    select('#col' + p.y).append('rect')
      .attrs({
          'class': 'highlight',
          'width': this.height,
          'height': this.xScale.bandwidth(),
          'x': -this.height
      });

    this.setLineOpacity(`#row${p.x + 1} line`, 0);
    this.setLineOpacity(`#col${p.y + 1} line`, 0);

    element.append('title').text((d: any) => d.z * 100 + '%');
  }

  private mouseout = (p) => {
    selectAll('text').classed('active', false);
    selectAll('.highlight').remove();
    this.setLineOpacity(`#row${p.x + 1} line`, 1);
    this.setLineOpacity(`#col${p.y + 1} line`, 1);
    select('#cell' + p.y + '-' + p.x).select('title').remove();
  }


  private drawColumns() {
    let column = this.svg.selectAll('.column')
      .data(range(this.columns.size))
      .enter().append('g')
        .attrs({
            'id': (d, i) => 'col' + i,
            'class': 'column',
            'transform': (d, i: number) => 'translate(' + this.xScale(i) + ')rotate(-90)'
        });

    column.append('line')
      .attr('x1', -this.height);

    column.append('text')
      .attrs({
          'class': 'header',
          //'x': 6,
          //'y': this.yScale.bandwidth() / 2,
          //'dy': '.32em',
          //'dx': this.xScale.bandwidth() / 2,
          'text-anchor': () => 'start',
          'transform': () => 'translate(10, '+ this.xScale.bandwidth() / 2 +')rotate(45)'
      })
      .text((d, i) => this.columns.get(i).name)
      //.on('click', (d, i) => this.onTestSelected.emit(this.columns[i]));

    column.exit().remove();
  }

  private setLineOpacity(element, value) {
    select(element)
      .style('stroke-opacity', value);
  }
}