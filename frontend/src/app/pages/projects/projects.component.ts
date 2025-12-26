import { Component } from '@angular/core';
import { Project } from '../../shared/interfaces/projects.interface'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Projeto Financeiro',
      description: 'Sistema para controle financeiro de pequenos negócios.',
      image: 'https://placehold.co/250x250',
      alt: 'Projeto Financeiro',
      techs: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      title: 'App de Pizzaria',
      description: 'Gerenciamento de pedidos, clientes e pagamentos.',
      image: 'https://placehold.co/250x250',
      alt: 'App de Pizzaria',
      techs: ['HTML', 'CSS', 'JavaScript', 'API'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      title: 'Landing Page',
      description: 'Landing page moderna, rápida e responsiva.',
      image: 'https://placehold.co/250x250',
      alt: 'Landing Page',
      techs: ['HTML', 'CSS', 'Responsivo'],
      demoLink: '#',
      codeLink: '#',
    },
  ]
}
