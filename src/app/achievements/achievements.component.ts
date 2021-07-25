import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss'],
})
export class AchievementsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  achievements = [
    {
      description:
        'Gold medal in Problem-Solving (Algorithms) section on hackerrank.com, with JavaScript.',
      link: 'https://www.hackerrank.com/profile/Ashu2099',
      time: '2018',
    },
  ];
}
