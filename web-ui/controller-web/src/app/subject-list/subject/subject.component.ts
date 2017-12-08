import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Rx from 'rxjs/Rx';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  id: string
  deviceId = 'test device';

  topics = [{name: "Humidity", value: "70"}, {name: "Temperature", value: "25"}]

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
  }
}
