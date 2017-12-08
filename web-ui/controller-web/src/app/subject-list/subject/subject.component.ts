import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectDataService } from '../subject-data.service';
import * as Rx from 'rxjs/Rx';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  id: number
  name: string

  topics = [{ name: "Humidity", value: "70" }, { name: "Temperature", value: "25" }]

  constructor(private route: ActivatedRoute, private subjectDataService: SubjectDataService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.name = this.subjectDataService.subjects[this.id - 1].name;
  }
}
