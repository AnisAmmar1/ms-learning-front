import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizzes = [
    {
      title: 'Quiz 1',
      questions: [
        'Question 1?',
        'Question 2?',
        'Question 3?'
      ]
    },
    {
      title: 'Quiz 2',
      questions: [
        'Question 4?',
        'Question 5?',
        'Question 6?'
      ]
    }
    // Add more quizzes as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
