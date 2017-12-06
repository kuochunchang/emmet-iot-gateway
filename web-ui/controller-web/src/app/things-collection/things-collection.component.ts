import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-things-collection',
  templateUrl: './things-collection.component.html',
  styleUrls: ['./things-collection.component.css']
})
export class ThingsCollectionComponent implements OnInit {

  things = [{ id: "Bathroom" }, { id: "Living Room" }];

  constructor() { }

  ngOnInit() {
  }

  myEvent(event) {
    console.log(event);
  }
}
