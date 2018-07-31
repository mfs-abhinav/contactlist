import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  contact: Contact;
  firstName: string;
  lastName: string;
  phone: string;

  constructor(private contactService: ContactService) { }

  // add contact
  addContact() {
    const newContact = {
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone
    };

    this.contactService.addContact(newContact)
      .subscribe(contact => {
        this.ngOnInit();
        this.firstName = '';
        this.lastName = '';
        this.phone = '';
      });
  }

  // delete contact
  deleteContact(id: any) {
    let contacts = this.contacts;
    this.contactService.deleteContact(id)
      .subscribe(data => {
        if (data.n === 1) {
          for (let i = 0; i < contacts.length; i++) {
            if (contacts[i]._id === id) {
              contacts.splice(i, 1);
            }
          }
        }
      });
  }

  ngOnInit() {
    this.contactService.getContacts()
      .subscribe(contacts => {
        this.contacts = contacts;
      });
  }

}
