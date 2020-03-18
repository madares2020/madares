export interface School {
  id: string;
  name: string;
  region: string;
  city: string;
  address: string;
  landLine: string;
  mobile: string;
  website?: any;
  email: string;
  founded: string;
  classification: string[];
  startTime: string;
  endTime: string;
  expense: string[];
  Quality?: any;

}
export interface Review{
  userType: string;
  about: string;
  title: string;
  specialityType: string;
  grade: string;
  rating: number;
  pros: string;
  cons: string;
  managementAdvice: string;
  schoolId: string;
  commentLinkFacebook: string;
  id: string;

}
export interface QuestionAnswer {
  question: string;
  answer: string;
  type: string;
}
export interface Interview{
  process: string;
  title: string;
  specialityType: string;
  grade: string;
  questionAnswer: QuestionAnswer[];
  schoolId: string;
  id: string;
  _rid: string;
  _self: string;
  _etag: string;
  _attachments: string;
  _ts: number;
}

export interface Expense{
  schoolId: string;
  schoolFees: number;
  booksFees: number;
  uniformFees: number;
  donationFees: number;
  aplicationFees: number;
  busFees: number;
  grade: string;
  year: string;
  specialityType: string;
  commentLinkFacebook: string;
  id: string;
}
export interface SchoolDetail{
  school: School;
  reviews :Review[];
  expenses: Expense[];
  interviews: Interview[];
}


