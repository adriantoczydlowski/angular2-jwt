import {
  Component,
  Injectable,
  OnInit,
  ElementRef,
  EventEmitter,
  Inject,
  ViewEncapsulation
} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dataset-select',
  template: `
    <div class='container'>
      <div class="page-header">
        <h1>Choose a dataset
        </h1>
      </div>
<div class="dropdown">
    <div class="dropdown-toggle"
       data-toggle="dropdown">
        Dropdown
        <b class="caret"></b>
      </div>
    <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
  <li><a tabindex="-1" href="#">Action</a></li>
  <li><a tabindex="-1" href="#">Another action</a></li>
  <li><a tabindex="-1" href="#">Something else here</a></li>
  <li class="divider"></li>
  <li><a tabindex="-1" href="#">Separated link</a></li>
</ul>
  </div>
      
<div class="form-group">
  <label for="sel1">Select list:</label>
  <select class="form-control" id="sel1">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
  </select>
</div>
      <div class="row">
        
      </div>
  </div>
  `,
  styleUrls: ['./dataset-select.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DatasetSelectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
