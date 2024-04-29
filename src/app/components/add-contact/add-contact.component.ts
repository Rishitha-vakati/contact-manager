import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ContactService } from 'src/app/services/contact.service';
import { Route, Router } from '@angular/router';
import { IContact } from 'src/app/models/IContact';

interface IGroup {
  id: number;
  name: string;
}


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit{
  public loading:boolean = false;
  public contacts:IContact = {} as IContact
  public errorMessage:string | null | undefined;
  public groups:IGroup[] = [] as IGroup[];
selectedGroup: any;

  constructor(private contactService: ContactService,private router:Router) { }

  ngOnInit(): void{
    this.contactService.getAllGroups().subscribe((data:any)=>{
      this.groups=data;
    },(error)=>{
      this.errorMessage=error;
    })
    }
    public addSubmit(){
      this.contactService.createContact(this.contacts).subscribe((data:IContact)=>{
         this.router.navigate(['/contacts']).then();
      }, (error)=>{
        this.errorMessage = error;
        this.router.navigate(['/contact/add']).then();
      })
    }
  }
