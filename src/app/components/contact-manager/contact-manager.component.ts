import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { HttpClient } from '@angular/common/http';

export interface IContact  {
  id ? : string;
  name : string;
  email : string;
  photo : string;
  mobile : string;
  company : string;
  title : string;
  groupId : string;
}

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']

})

export class ContactManagerComponent implements OnInit {
[x: string]: any;
public loading:boolean = false;
public contacts:IContact[] = [];
public errorMessage: string | null = null;


constructor(private contactService: ContactService,Http:HttpClient) {
}

ngOnInit(): void {
  this.getAllContactData()
}

getAllContactData(){
  this.loading = true;
  this.contactService.getAllContacts().subscribe((data:IContact[])=> {
    this.contacts = data;
    this.loading = false;
  }, (error) => {
    this.errorMessage = error;
    this.loading = false;

  })




}
 deleteContact(contactId:string | undefined){
  if(contactId){
    this.contactService.deleteContact(contactId).subscribe((data:{})=>{
      this.getAllContactData();
    },(error)=>{
      this.errorMessage = error;
      this.loading = false;
    })

    }
  }
 }






