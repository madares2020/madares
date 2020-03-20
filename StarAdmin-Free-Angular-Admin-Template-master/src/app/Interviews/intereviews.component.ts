import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Interview } from '../school/school';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-interviews-form',
  templateUrl: './intereviews.component.html',
  styleUrls: ['./interreviews.component.scss']
})
export class IntereviewsComponent implements OnInit {
  personalForm: FormGroup;

  pass: any = '';
  interview: Interview = {
    "process": "امتحانين و امتحان iq و امتحان English ",
    "title": "انترفيو سهل جدا",
    "specialityType": "لغات",
    "grade": "المرحلة التمهيدية للمدرسة",
    "questionAnswer": [{
      "question": "What is your name?",
      "answer": "Ahmed",
      "type": "طالب"
    }],
    "schoolId": "227aa52a-9f60-494e-988e-e381ec704c88",
    "id": "string",
    "commentLinkFacebook":"https://www.facebook.com/Alexandria.Info/posts/2775575112496904?comment_id=2775739275813821",
    "date" : new Date()
  };
  schoolId: any = '';
  constructor(private formBuilder: FormBuilder,private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.schoolId = this.route.snapshot.paramMap.get('id1');
    this.pass = localStorage.getItem('pass');
    this.personalForm = this.formBuilder.group({
      process: ['', [Validators.required,]],
      title: ['', [Validators.required]],
      specialityType: ['', [Validators.required]],
      grade: ['', [Validators.required]],
      questionAnswer: this.formBuilder.array([ this.addSkillFormGroup()]),
      commentLinkFacebook: ['', [Validators.required]],
      schoolId:  [ this.schoolId, [Validators.required]],
      id:  [ 'string', [Validators.required]],
      date:  [ new Date(), [Validators.required]]
    });

  }
  onSubmit(): void {
    console.log(this.personalForm.value);
    localStorage.setItem('pass', this.pass);

      this.http.post<Interview>("https://madaremasr2020031407371.azurewebsites.net/api/Interview?pass=" + this.pass, this.personalForm.value).
        subscribe(arg => {
          alert("success");
        });
  }



  addSkillButtonClick(): void {
    (<FormArray>this.personalForm.get('questionAnswer')).push(this.addSkillFormGroup());
  }





  addSkillFormGroup(): FormGroup {
    return this.formBuilder.group({
      question: ['', Validators.required],
      answer : ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  onClearDataClick() {
    this.personalForm.reset();
  }

  get formData() { return  this.personalForm.get('questionAnswer') as FormArray; }


}
