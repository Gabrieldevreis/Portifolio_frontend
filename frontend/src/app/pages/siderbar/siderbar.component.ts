import { Component } from '@angular/core';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrl: './siderbar.component.css'
})

export class SiderbarComponent {
  profile = {
    name: 'Gabriel Reis',
    role: 'Desenvolvedor Full Stack',
    bio: 'Transformando ideias em soluções digitais inovadoras com código limpo e design excepcional.',
    photo: 'assets/photo.png',
    cv: 'assets/cv-gabriel-reis.pdf',
    social: {
      github: 'https://github.com/seuusuario',
      linkedin: 'https://linkedin.com/in/seuusuario',
      email: 'mailto:seuemail@exemplo.com',
    },
  };
}
