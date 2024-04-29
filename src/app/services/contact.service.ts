import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { IContact } from '../models/IContact';
import { IGroup } from '../models/IGroup';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  static search(searchTerm: string): any {
    throw new Error('Method not implemented.');
  }
  private baseUrl: string = 'http://localhost:9000'; //json url


  constructor(private httpClient: HttpClient) {
  }
  public getAllContacts(): Observable<IContact[]> {
    let dataUrl: string = `http://localhost:9000/contacts`;
    return this.httpClient.get<IContact[]>(dataUrl).pipe(catchError(this.handleError));
  }
  //get single contact
  public getContact(contactId: string): Observable<IContact> {
    let dataUrl: string = `${this.baseUrl}}/contacts/${contactId}`;
    return this.httpClient.get<IContact>(dataUrl).pipe(catchError(this.handleError));
  }
  //create contact
  public createContact(contact: IContact): Observable<IContact> {
    let dataUrl: string = `${this.baseUrl}/contacts`;
    return this.httpClient.post<IContact>(dataUrl, contact).pipe(catchError(this.handleError));
  }
  //update contact
  public updateContact(contact: IContact, contactId: string): Observable<IContact> {
    let dataUrl: string = `${this.baseUrl}/contacts/${contactId}`;
    return this.httpClient.put<IContact>(dataUrl, contact).pipe(catchError(this.handleError));
  }
  //delete contact
  public deleteContact(contactId: string): Observable<{}> {
    let dataUrl: string = `${this.baseUrl}/contacts/${contactId}`;
    return this.httpClient.delete<{}>(dataUrl).pipe(catchError(this.handleError));
  }

  //get All Groups
  public getAllGroups(): Observable<IGroup[]> {
    let dataUrl: string = `${this.baseUrl}}/groups`;
    return this.httpClient.get<IGroup[]>(dataUrl).pipe(catchError(this.handleError));
  }

  ///get single group
  public getGroup(contact: IContact): Observable<IGroup> {
    let dataUrL: string = `${this.baseUrl}}/groups/${contact.groupId}`;
    return this.httpClient.get<IGroup>(dataUrL).pipe(catchError(this.handleError));
  }

  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`
    } else {
      errorMessage = `Status : ${error.status} \n Message : ${error.message}`;
    }
    return throwError(errorMessage);
  }
}

