import { Injectable } from '@angular/core';
import { SubjectModel } from './subject/subject-models';

@Injectable()
export class SubjectDataService {

public subjects:SubjectModel[] = [{
    "id": "bathroom",
    "name": "Bathroom",
    "topics": [{
      "id": "temperature",
      "name": "Tempareture",
      "status": "view.bathroom.temperature.status"
    },
    {
      "id": "humidity",
      "name": "Humidity",
      "status": "view.bathroom.humidity.status"
    },
    {
      "id": "fan",
      "name": "Fan",
      "status": "view.bathroom.fan.status"
    }, {
      "id": "power",
      "name": "Power",
      "status": "view.bathroom.power.status",
      "update": "view.bathroom.power.update"
    }]
  }, {
    "id": "livingroom",
    "name": "Living Room",
    "topics": [{
      "id": "temperature",
      "name": "Tempareture",
      "status": "view.livingroom.temperature.status"
    },
    {
      "id": "humidity",
      "name": "Humidity",
      "status": "view.livingroom.humidity.status"
    },
    {
      "id": "light",
      "name": "Light",
      "status": "view.livingroom.light.status"
    }]
  }]

  constructor() { }

  public getSubject(id: string){
    for(var subject of this.subjects){
      if(subject.id === id){
        return subject;
      }
    }
    return null
  }

}
