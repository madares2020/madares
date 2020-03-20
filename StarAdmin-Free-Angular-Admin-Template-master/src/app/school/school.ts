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
  date: Date;

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
  commentLinkFacebook: string;
  date: Date;
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
  date: Date;
}
export interface SchoolDetail{
  school: School;
  reviews :Review[];
  expenses: Expense[];
  interviews: Interview[];
}


