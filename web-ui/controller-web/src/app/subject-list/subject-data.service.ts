import { Injectable } from '@angular/core';

@Injectable()
export class SubjectDataService {

  subjects = [{ id: 1, name: "Bathroom" }, { id: 2, name: "Living Room" }]

  constructor() { }

}
