import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css'],
})
export class ConfirmDeleteComponent implements OnInit {
  id = '';

  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService,
    private router: Router
  ) {}

  ngOnInit() {
    let id: string = this.route.snapshot.paramMap.get('id') ?? 'defaultId';  // default value if null

  }

  deletePerson() {
    this.peopleService.deletePerson(this.id).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
