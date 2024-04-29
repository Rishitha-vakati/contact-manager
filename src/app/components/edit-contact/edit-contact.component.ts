import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';


interface IGroup {
  id: number;
  name: string;
}
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
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit{
  public loading:boolean = false;
  public contactId:any | null = null;
  public errorMessage : string | null = null;
  contacts!: IContact;
  groups: any;
  grops: any;




   constructor(private activatedRoute:ActivatedRoute,private contactService:ContactService,private router:Router ) { }

   ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
      this.contactId = param.get('contactId')
    });
    if(this.contactId){
      this.contactService.getContact(this.contactId).subscribe((data:IContact)=>{
        this.contacts = data;
        this.loading = false;
        this.contactService.getAllGroups().subscribe((data:any)=>{
          this.grops = data;

        })
      }, (error)=>{
        this.errorMessage = error;
        this.loading = false;
      })


      }


    }
    submitUpdate(){
      if(this.contactId){
    this.contactService.updateContact(this.contacts,this.contactId).subscribe((data:IContact)=>{
      this.router.navigate(['/']).then();
   }, (error)=>{
     this.errorMessage = error;
     this.router.navigate([`/contact/edit/${this.contactId}`]).then();
   })
 }

   }

  }
