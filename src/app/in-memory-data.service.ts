import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Shule } from './shule/shule';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const schools = [
      { id: 12, school_name: 'loyola',adress:'p.o box 123' ,location:'Dar es salaam'},
      { id: 13, school_name: 'ursuline',adress:'p.o box 345' ,location:'Dar es salaam'},
      { id: 14, school_name: 'green Acre',adress:'p.o box 678' ,location:'Dar es salaam'},
      { id: 15, school_name: 'Minaki' ,adress:'p.o box 91011',location:'Dar es salaam'},
      { id: 16, school_name: 'St Joseph Secondary School' ,adress:'p.o box 1213',location:'Dar es salaam'},
      { id: 17, school_name: 'Dr Elimu Primary',adress:'p.o box 156' ,location:'Dar es salaam'},
      { id: 18, school_name: 'Pugu High School' ,adress:'p.o box 167',location:'Dar es salaam'},
      { id: 19, school_name: 'Montesory School' ,adress:'p.o box 239',location:'Dar es salaam'},
      { id: 20, school_name: 'Tabata Secondary' ,adress:'p.o box 344',location:'Dar es salaam'},
      { id: 21, school_name: 'Kanyigo Secondary ' ,adress:'p.o box 234',location:'Bukoba'},
      { id: 22, school_name: 'Ifunda Girls Secondary  ' ,adress:'p.o box 450',location:'Rukwa'},
    ];
    return {schools};
    
  }
 // Overrides the genId method to ensure that a school always has an id.
  // If the schools array is empty,
  // the method below returns the initial number (11).
  // if the schools array is not empty, the method below returns the highest
  // school id + 1.
  genId(schools: Shule[]): number {
    return schools.length > 0 ? Math.max(...schools.map(shule => shule.id)) + 1 : 11;
  }
}
 

