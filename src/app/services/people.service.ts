import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Define the Person interface
interface Person {
    id: string;
    name: string;
  }

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private apiUrl = 'https://example.com/api/people'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getPeople() {
    return this.http.get(this.apiUrl);
  }

  getPerson(id: string | null) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updatePerson(id: string, data: { id: string; name: string; }) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  deletePerson(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
