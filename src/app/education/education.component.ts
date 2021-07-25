import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  education = [
    {
      name: "Bachelor's Degree Of Engineering | Information Technology",
      duration: '2014 - 2018',
    },
    {
      name: "Class XIIth | HSC - Science",
      duration: '2012 - 2014',
    },
  ];
}
