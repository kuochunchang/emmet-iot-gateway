import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subject-dashboard',
  templateUrl: './subject-dashboard.component.html',
  styleUrls: ['./subject-dashboard.component.css']
})
export class SubjectDashboardComponent implements OnInit {

  id: string
  deviceId = 'test device';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
  }
}
