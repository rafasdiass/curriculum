import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academic-info',
  templateUrl: './academic-info.component.html',
  styleUrls: ['./academic-info.component.css']
})
export class AcademicInfoComponent implements OnInit {
  academicHistory = [
    {
      institution: 'BSBR Business School Brasil',
      course: 'MBA em Marketing Digital',
      year: '2022'
    },
    {
      institution: 'UNIFOR',
      course: 'Especialização em Animação e Jogos Eletrônicos',
      year: '2014'
    },
    {
      institution: 'Estácio FIC',
      course: 'Graduação Tecnológica em Jogos Digitais',
      year: '2011'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
