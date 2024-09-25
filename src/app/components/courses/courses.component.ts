import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  data: any[] = [];
  courses: any[] = [];
  ngOnInit(): void {
    this.data = [
      {
        no: '1',
        course: 'B.TECH',

        fee: '₹2,42,000',
      },
      {
        no: '2',
        course: 'B.BA',

        fee: '₹2,42,000',
      },
      {
        no: '3',
        course: 'B.Com',

        fee: '₹2,42,000',
      },
      {
        no: '4',
        course: 'B.A',

        fee: '₹2,42,000',
      },
      {
        no: '5',
        course: 'M.TECH',

        fee: '₹2,42,000',
      },
      {
        no: '6',
        course: 'M.Com',

        fee: '₹2,42,000',
      },
    ];
  }
}
