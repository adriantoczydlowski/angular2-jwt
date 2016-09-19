import {Component, Input, Pipe} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/filter';
@Pipe({
   name: 'keyValueFilter'
})

export class keyValueFilterPipe {
    transform(value: any, args: any[] = null): any {

        return Object.keys(value).map(function(key) {
            let pair = {};
            let k = 'key';
            let v = 'value'


            pair[k] = key;
            pair[v] = value[key];

            return pair;
        });
    }

}
@Component({
selector: 'about',
template: `<div class="col-xs-2 col-xs-offset-5"><div class="panel panel-default">
  <div class="panel-heading">Dataset Infromation</div>
  <div class="panel-body">
     <div>Id:<span class="pull-right">{{data.id}}</span></div>
     <div>Name:<span class="pull-right">{{data.name}}</span></div>
     <div>Files:
          <ul class="list-group">
            <li class="list-group-item" *ngFor="let file of data.files">
           {{file.name}}</li>
          </ul></div>
</div></div>`
})
export class AboutComponent {
  data: any;
  constructor() {}

  ngOnInit() {
    Observable.from([
      {
        "id": 1,
        "name": 'name1',
        "files": [
          {
            "id": 1,
            "name": 'nam1'
          },
          {
            "id": 2,
            "name": 'nam2'
          }
        ]
      },
      {
        "id": 2,
        "name": 'name2',
        "files": [
          {
            "id": 3,
            "name": 'nam3'
          },
          {
            "id": 4,
            "name": 'nam4'
          }
        ]
      }
    ]).filter(d => d.id === 1)
    .subscribe(data => this.data = data);
  }
}