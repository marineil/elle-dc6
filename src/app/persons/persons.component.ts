import { Component, OnInit } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  title = "List of Persons"
  persons;
  allPersons

  constructor(service: PersonsService) { 
    this.persons = service.getPersons()
    this.allPersons = service.getPersons()
  }

  showAllFemale() {
    this.showAllPerson()
    this.allPersons = this.persons.filter(person => person.gender === 'Female');
  }

  showAllMale() {
    this.showAllPerson()
    this.allPersons = this.persons.filter(person => person.gender === 'Male');
  }

  showAllPerson() {
    this.allPersons = this.persons
  }

  ngOnInit(): void {
  }

}
