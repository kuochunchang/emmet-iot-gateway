import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-dashboard',
  templateUrl: './device-dashboard.component.html',
  styleUrls: ['./device-dashboard.component.css']
})
export class DeviceDashboardComponent implements OnInit {

  deviceId = 'test device';

  constructor() { }

  ngOnInit() {
  }

}
