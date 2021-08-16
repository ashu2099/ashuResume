import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  workExperience = [
    {
      jobPost: 'Senior Developer',
      companyName: 'Salt-Tech Services LLP',
      duration: 'March 2021 - Present',
      description:
        'Leading the development and planning the architecture of project structure based on client requirements ' +
        'for the team to be followed. Designing and planning the API structure for backend junior devs to ensure ' +
        'seamless extraction and population of the database.',
    },
    {
      jobPost: 'Systems Engineer',
      companyName: 'Tata Consultancy Services',
      duration: 'Nov 2018 - March 2021',
      description:
        'Development and logical implementation of various website designs in AngularJS, Angular 5, 8.' +
        '\nLeading a team of 2 junior developers and co-ordinating their tasks, reviewing their pull requests.' +
        '\nDesigning and Implementing APIs in JAVA to provide extraction of data via the backend.',
    },
    {
      jobPost: 'Frontend Developer Intern',
      companyName: 'Unfound.news',
      duration: 'Sep 2018 - Nov 2018',
      description:
        'Development of the internal news-curation portal in Angular 5 ' +
        'and the official website which was on ReactJS, both of which performed CRUD ' +
        'operations whilst consuming REST APIs using RxJS Observables.',
    },
  ];
}
