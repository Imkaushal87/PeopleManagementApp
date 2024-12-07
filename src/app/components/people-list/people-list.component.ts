import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';

interface Person {
    id: string;
    name: string;
  }

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
})
export class PeopleListComponent implements OnInit {
  people = [];

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.peopleService.getPeople().subscribe((data) => {
        let people: Person[] = [];
    });
  }
}
