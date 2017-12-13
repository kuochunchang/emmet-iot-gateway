import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectDataService } from '../subject-data.service';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  id: string
  name: string

  // topics = [{ id: "device.device-0001.A1" }, { id: "device.device-0001.A2" }, { id: "device.device-0001.D1" }]
  subject = {
    "subject": "s1",
    "topics": [{
      "name": "Tempareture",
      "data": "bathroom.temperature"
    },
    {
      "name": "Humidity",
      "data": "bathroom.humidity"
    },
    {
      "name": "Fan",
      "data": "bathroom.fan"
    }, {
      "name": "Power",
      "data": "bathroom.power"
    }
    ]
  }
  

  topics = this.subject.topics

  constructor(private route: ActivatedRoute, private subjectDataService: SubjectDataService) { }

  ngOnInit() {

    //this.id = this.route.snapshot.params['id']
    //this.name = this.subjectDataService.subjects[this.id - 1].name;
  }
}
