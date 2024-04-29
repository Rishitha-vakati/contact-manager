import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IContact } from 'src/app/models/IContact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  [x: string]: any;
  public contactId: any | null = null;
  public loading: boolean = false;
  public contacts:IContact[] = [];
  public errorMessage: string | null = null;




  constructor(private activatedRoute: ActivatedRoute,
    private contactService: ContactService,Http:HttpClient) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.contactId = param.get('contactId');
      this.contactId = this.contactService.getContact(this.contactId);
    });
      this.loading = true;
      this.contactService.getAllContacts().subscribe((data:IContact[])=> {
        this.contacts = data;
        this.loading = false;
      }, (error) => {
        this.errorMessage = error;
        this.loading = false;

      });
     }


      }
