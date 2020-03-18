import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import {  Expense } from '../school/school';

@Component({
  selector: 'app-school',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  pass: any = '';
  expense: Expense = {
    "schoolId": "227aa52a-9f60-494e-988e-e381ec704c88",
    "schoolFees": 10000,
    "booksFees": 500,
    "uniformFees": 900,
    "donationFees": 5000,
    "aplicationFees": 1000,
    "busFees": 1000,
    "grade": "المرحلة التمهيدية للمدرسة",
    "year": "2020",
    "specialityType": "لغات",
    "id": "string",
    "commentLinkFacebook":"https://www.facebook.com/Alexandria.Info/posts/2775575112496904?comment_id=2775739275813821"
  };
  schoolId: any = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.schoolId = this.route.snapshot.paramMap.get('id1');
    this.pass = localStorage.getItem('pass');
  }
  onSubmit() {
    localStorage.setItem('pass', this.pass);
    this.expense.schoolId = this.schoolId;
    this.http.post<Expense>("https://madaremasr2020031407371.azurewebsites.net/api/Expense?pass=" + this.pass, this.expense).
      subscribe(arg => {
        alert("success");
      });


  }


}
