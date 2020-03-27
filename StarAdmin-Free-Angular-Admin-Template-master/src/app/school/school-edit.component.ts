import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { School } from '../school/school';

@Component({
  selector: 'app-school',
  templateUrl: './school-edit.component.html',
  styleUrls: ['./school-edit.component.scss']
})
export class SchoolEditComponent implements OnInit {

  pass: any = '';
  school: School  = {"name":"","region":"","city":"","address":"","landLine":"","mobile":"","website":null,"email":null,"founded":null,"classification":[],"startTime":"","endTime":"","expense":[""],"Quality":null,"facilities":null,"briefInfo":null,"id":"0","logoUrl":""};
  schoolId: any = '';

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.schoolId = this.route.snapshot.paramMap.get('id1');
    this.pass = localStorage.getItem('pass');
    if(this.schoolId != 0 )
    {
      this.http.get<School>(`https://madares.azurewebsites.net/api/GetSchoolByID?schoolId=${this.schoolId}&pass=${this.pass}`).subscribe(
        (data: School) => this.school = data  );
    }

  }
  onSubmit() {
    localStorage.setItem('pass', this.pass);
    this.school.id = this.schoolId;
    this.school.briefInfo = [this.school.briefInfo[0]];
    this.school.expense = [this.school.expense[0]];
    debugger;
    this.http.post<School>("https://madares.azurewebsites.net/api/PostSchool?pass=" + this.pass, this.school).
      subscribe(arg => {
        alert("success");
        this.router.navigate(['/Schools']);
      });


  }


}
