import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Hello Ferrari';
  users:any;
  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: Response => this.users = Response,
      error: error => console.error,
      complete: () => console.log('Request has completed')

    });
  }

  
}
