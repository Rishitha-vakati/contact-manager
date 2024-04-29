import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  searchResults: string[] = [];

  onSearch(contacts: string): void {
    // Perform search logic here, e.g. call a service
    this.searchResults = ['Result 1', 'Result 2', 'Result 3'];
  }
}
