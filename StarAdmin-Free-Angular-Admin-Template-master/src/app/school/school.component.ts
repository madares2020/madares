import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { School } from './school';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {

  name : any ='';
  pass : any ='';
  schools : School[] = [];

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
    this.pass = localStorage.getItem('pass');
  }
  onSubmit() {
    debugger;
    localStorage.setItem('pass', this.pass);

  this.http.get<School[]>("https://madares.azurewebsites.net/api/School?name=" + this.name + "&pass=" + this.pass).subscribe(
(data: School[]) => this.schools = data  );

   }


}
