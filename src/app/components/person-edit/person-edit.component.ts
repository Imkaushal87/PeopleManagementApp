import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../../services/people.service';

interface Person {
    id: string;
    name: string;
  }

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css'],
})
export class PersonEditComponent implements OnInit {
  person = { id: '', name: '' };

  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.peopleService.getPerson(id).subscribe((data) => {
        let person: Person = { id: '', name: '' };
    });
  }

  updatePerson() {
    this.peopleService.updatePerson(this.person.id, this.person).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
