import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  model: any = {};
  registerMode = false;
  values: any;
  constructor(private authService: AuthService , private http: HttpClient) { }

  ngOnInit() {
    this.getValues(); 
  }

registerToggle() { this.registerMode = !this.registerMode; }

getValues() {
  this.http.get('http://localhost:5000/api/Values').subscribe(response => {
this.values = response;
}, error => {console.log(error); } );
}
cancelRegisterMode(registerMode: boolean) {
  this.registerMode = registerMode;
}
}
