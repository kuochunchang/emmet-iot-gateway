import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectDataService } from '../subject-data.service';
import { TopicModel } from '../../topic/topic-models';
import { SubjectModel } from './subject-models';



@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  @Input() id: string
  name: string

  subject: SubjectModel


  constructor(private route: ActivatedRoute, private subjectDataService: SubjectDataService){  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']
    })
    this.subject = this.subjectDataService.getSubject(this.id);
    this.name = this.subject.name
  }
}
