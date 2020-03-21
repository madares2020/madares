import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import { SchoolDetail } from '../school/school';
 import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-school-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  schoolId : any ='';
  pass : any ='';
  schooldetail : SchoolDetail;

  constructor(private http: HttpClient,private route: ActivatedRoute) { }

  ngOnInit() {
    debugger
  this.schoolId =   this.route.snapshot.paramMap.get('id1');
  this.pass =  localStorage.getItem('pass');
  this.http.get<SchoolDetail>(`https://madares.azurewebsites.net//api/GetSchoolDetail?schoolId=${this.schoolId}&pass=${this.pass}`).subscribe(
(data: SchoolDetail) => this.schooldetail = data  );

   }
  }


