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
import { range, max } from "d3-array";
import { axisBottom, axisLeft } from "d3-axis";
//import { body as tip } from "@redsift/d3-rs-tip";
var tip = require("@redsift/d3-rs-tip");

export const BAR_COLOR = 'rgb(0, 113, 188)';
export const BAR_HOVER_COLOR = 'rgb(181, 95, 156)';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BarChartComponent implements OnInit {

  @Input() data: any;

  private htmlElement; // Host HTMLElement
  private host;        // D3 object referebcing host dom object
  private svg;         // SVG in which we will print our chart
  private margin;      // Space between the svg borders and the actual chart graphic
  private width;       // Component width
  private height;      // Component height
  private xScale;      // D3 scale in X
  private yScale;      // D3 scale in Y
  private cScale;      // D3 color scale

  constructor(private element: ElementRef) {
    this.htmlElement = this.element.nativeElement;
    this.host = select(this.element.nativeElement);
  }

  ngOnInit() {
  }

   ngOnChanges(): void {
    if (!this.data) {
        return;
    }
    this.setup();
    this.buildSVG();
    this.draw();
   }

   private setup(): void {
     this.margin = {top: 20, right: 20, bottom: 30, left: 40};
      this.width = this.htmlElement.clientWidth - this.margin.left - this.margin.right;
      //this.width = this.config.data.columns.length * 25;
      this.height = 300 - this.margin.top - this.margin.bottom;
      this.xScale = scaleBand().range([0, this.width]).padding(0.1);
      this.yScale = scaleLinear().range([this.height, 0]);
     
      // this.cScale = D3.scale.category10();
      this.cScale = scaleLinear()
                      .domain([0, 0.25, 0.5, 0.75, 1])
                      .range(<any>['rgb(181, 95, 156)', 'rgb(194, 50, 230)', 
                                  'rgb(246, 63, 216)', 'rgb(104, 221, 221)',
                                  'rgb(28, 194, 235)', 'rgb(0, 113, 188)']);

      this.xScale.domain(this.data.map(d => d.name));
      this.yScale.domain([0,max(this.data, (d: any) => d.count)]);
   }

   private buildSVG(): void {
    this.host.select('svg').html('');
    this.svg = this.host.select('svg')
      .attrs({
        'width': this.width + this.margin.left + this.margin.right,
        'height': this.height + this.margin.top + this.margin.bottom
      })
      .append('g')
        .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    var tip = tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html((d) => {
        return "<strong>Frequency:</strong> <span style='color:red'>" + d.count + "</span>";
      })
    this.svg.call(tip);
  }

  private draw() {
    this.drawAxis();
    this.drawBars();
  }

  private drawAxis() {

    this.svg.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + this.height + ")")
      .call(axisBottom(this.xScale));

  this.svg.append("g")
      .attr("class", "axis axis--y")
      .call(axisLeft(this.yScale).ticks(10))
    .append("text")
      .attrs({
        "transform":    "rotate(-90)",
        "dy":           "0.71em",
        "y":            6,
        "text-anchor":  "end"
      })
      .text("Frequency");

  }

  private drawBars() {

    this.svg.selectAll(".bar")
    .data(this.data)
    .enter().append("rect")
      .attrs({
        "class":    "bar",
        "x":        d => this.xScale(d.name),
        "y":        d => this.yScale(d.count),
        "width":    this.xScale.bandwidth(),
        "height":   d => this.height - this.yScale(d.count)
      });
  }
}
