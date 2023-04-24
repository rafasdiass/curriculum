import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional-experience',
  templateUrl: './professional-experience.component.html',
  styleUrls: ['./professional-experience.component.css']
})
export class ProfessionalExperienceComponent implements OnInit {
  workExperiences = [
    {
      position: 'Desenvolvedor Front-end',
      company: 'Autônomo',
      period: 'Jan. 2019 - Atual',
      tasks: [
        'Desenvolvimento de interfaces de usuário (UI) e experiência do usuário (UX) que sejam intuitivas e atraentes para o usuário final',
        'Codificação em HTML, CSS e JavaScript',
        'Criação e implementação de designs atraentes e responsivos',
        'Teste e depuração de código para garantir que o website ou aplicativo esteja funcionando corretamente em diferentes navegadores e dispositivos',
        'Fornecimento de suporte técnico para usuários finais do website ou aplicativo',
        'Resolução de problemas de interface e fornecimento de informações úteis para melhorar a experiência do usuário',
        'Desenvolvimento de interfaces visuais e interativas que permitem aos usuários finais interagir com websites ou aplicativos, visando proporcionar uma experiência agradável e intuitiva ao usuário'
      ]
    },
    {
      position: 'Professor de Computação Gráfica',
      company: 'Centro Universitário Estácio do Ceará',
      period: 'Fev. 2015 - Jun. 2017',
      tasks: [
        'Preparei e conduzi aulas abordando conceitos básicos e avançados de computação gráfica, englobando design gráfico, animação, modelagem 3D, efeitos visuais e outros temas relevantes',
        'Ensinei aos alunos a utilização de softwares de computação gráfica, como Adobe Photoshop, Illustrator, After Effects, Autodesk Maya e 3ds Max',
        'Auxiliei os estudantes no desenvolvimento de habilidades em arte digital, incluindo desenho digital, pintura digital, edição de imagens e criação de animações',
        'Orientei os alunos durante o desenvolvimento de projetos de computação gráfica, desde a concepção até a finalização, fornecendo feedback e avaliação',
        'Ofereci suporte técnico para solucionar questões técnicas e artísticas relacionadas aos projetos dos estudantes',
        'Mantive-me atualizado com as tendências e tecnologias emergentes em computação gráfica e adaptar o currículo e as atividades de ensino para refletir as mudanças no campo',
        'Desempenhei papel fundamental na promoção de habilidades interpessoais, como colaboração e comunicação, além de incentivar uma ética de trabalho positiva e produtiva entre os alunos.'
      ]
      },
      {
      position: 'Professor de Computação Gráfica',
      company: 'Gracom Escola de Efeitos Visuais',
      period: 'Jun. 2013 - Ago. 2014',
      tasks: [
      'Preparei e ministrei aulas sobre conceitos básicos e avançados de computação gráfica, incluindo design gráfico, animação, modelagem 3D, efeitos visuais, entre outros',
      'Ensinei os alunos a usar software de computação gráfica, como Adobe Photoshop, Illustrator, After Effects, Autodesk Maya, 3ds Max, entre outros',
      'Ajudei os alunos a desenvolver habilidades de criação de arte digital, como desenho digital, pintura digital, edição de imagens e criação de animações',
      'Orientei os alunos no desenvolvimento de projetos de computação gráfica, desde a concepção até a finalização, incluindo feedback e avaliação',
      'Forneci orientação técnica para resolver problemas técnicos e artísticos relacionados aos projetos dos alunos',
      'Me mantive atualizado com as tendências e tecnologias emergentes em computação gráfica e adaptar o currículo e as atividades de ensino para refletir as mudanças no campo',
      'Desempenhei um papel importante na promoção de habilidades interpessoais, como colaboração e comunicação, bem como na promoção de uma ética de trabalho positiva e produtiva para seus alunos'
      ]
      }
      ];
      
      constructor() {}
      
      ngOnInit(): void {}
      }
