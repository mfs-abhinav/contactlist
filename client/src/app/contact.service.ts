import { Contact } from './contact';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {

  constructor(private http: Http) { }

  // retreive all contacts
  getContacts() {
    return this.http.get('/api/contacts')
      .map(res => res.json());
  }

  // add contact
  addContact(newContact) {
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    return this.http.post('/api/contact', newContact, {headers: headers})
      .map(res => res.json());
  }

  // delete contact
  deleteContact(id) {
    return this.http.delete('/api/contact/' + id)
      .map(res => res.json());
  }
}
