import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  projects = [
    {
      name: 'Beny Benefits App',
      tech: 'React Native, React-Redux, React-Navigation, Redux Thunk',
      description:
        'Development of the Android application for clients, using Push Notifications and ' +
        'majorly driven by Functional Components with React Hooks.',
    },
    {
      name: 'Client Register',
      tech: 'Angular 5, Firebase DB, Cloud Firestore',
      description:
        'A Mobile-first responsive registry CRUD app that manages and searches clientele policies ' +
        'for insurance agents.',
    },
    {
      name: 'Faux ChatBot',
      tech: 'Angular 8, Bootstrap 4',
      description:
        'A simple chatbot that uses a JSON response sheet as input for answering questions, and is' +
        ' capable of handling complex flows using a flow detector that implements a REPL-like logic.',
    },
    {
      name: 'Forecaster',
      tech: 'AngularJS, Openweathermap.com',
      description:
        'An AngularJS app that resolves JSON data from an open source weather API according to city' +
        'name and displays the forecast for the next 5 days.',
    },
  ];
}
