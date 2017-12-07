import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  things = [{ id: "Bathroom" }, { id: "LivingRoom" }];

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  selectSubject(id) {
    console.log(id);
    this.router.navigateByUrl('/subjects/' + id, );
  }

}
