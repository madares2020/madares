import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from '../school/school';

@Component({
  selector: 'app-school',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  pass: any = '';
  review: Review = {
    "userType": "طالب",
    "about": "المدرسة",
    "title": "مدرسة رائعة",
    "specialityType": "لغات",
    "grade": "المرحلة التمهيدية للمدرسة",
    "rating": 10,
    "pros": "كل المدرسة رائعه",
    "cons": "لا يوجد",
    "managementAdvice": "استمروا",
    "schoolId": "227aa52a-9f60-494e-988e-e381ec704c88",
    "commentLinkFacebook": "https://www.facebook.com/Alexandria.Info/posts/2775575112496904?comment_id=2775739275813821",
    "id": "string"
  };
  schoolId: any = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.schoolId = this.route.snapshot.paramMap.get('id1');
    this.pass = localStorage.getItem('pass');
  }
  onSubmit() {
    localStorage.setItem('pass', this.pass);
    this.review.schoolId = this.schoolId;
    this.http.post<Review>("https://madaremasr2020031407371.azurewebsites.net/api/Review?pass=" + this.pass, this.review).
      subscribe(arg => {
        alert("success");
      });


  }


}
