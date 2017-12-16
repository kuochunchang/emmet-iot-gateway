import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectDataService } from './subject-data.service';
import { TopicModel } from '../topic/topic-models';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  subjects: TopicModel[]

  constructor(private router: Router, private subjectDataService: SubjectDataService) { }

  ngOnInit() {
    this.subjects = [this.subjectDataService.subjects[0], this.subjectDataService.subjects[1]];
  }

  selectSubject(id) {
    this.router.navigateByUrl('/subjects/' + id, );
  }

}
