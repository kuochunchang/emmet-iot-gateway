import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-things-collection',
  templateUrl: './things-collection.component.html',
  styleUrls: ['./things-collection.component.css']
})
export class ThingsCollectionComponent implements OnInit {

  things = [{ id: "Bathroom" }, { id: "Living Room" }];

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  selectSubjectE(id) {
    console.log(id);
    this.router.navigateByUrl('/devices/' + id, );
  }
}
