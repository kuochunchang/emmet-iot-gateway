import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-device-dashboard',
  templateUrl: './device-dashboard.component.html',
  styleUrls: ['./device-dashboard.component.css']
})
export class DeviceDashboardComponent implements OnInit {
  id : string
  deviceId = 'test device';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
  }

}
