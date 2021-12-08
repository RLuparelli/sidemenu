import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Navegacao', url: 'navegacao', icon: 'mail' },
    { title: 'Botoes', url: 'botao', icon: 'construct' },
    { title: 'Alerta', url: 'alerta', icon: 'alert' },
    { title: 'Action-Sheet', url: 'actionsheet', icon: 'alert' },
    { title: 'Badge', url: 'badge', icon: 'alert' },
    { title: 'Card', url: 'card', icon: 'alert' },
    { title: 'Check-Box', url: 'checkbox', icon: 'alert' },
    { title: 'Chip', url: 'chip', icon: 'alert' },
    { title: 'Content', url: 'content', icon: 'alert' },
    { title: 'Date Time', url: 'datetime', icon: 'alert' },
    { title: 'Ion Fab', url: 'fab', icon: 'alert' },
    { title: 'Grid', url: 'grid', icon: 'alert' },
    { title: 'Infinite Scroll', url: 'infinitescroll', icon: 'alert' },
    { title: 'Input', url: 'input', icon: 'alert' },
    { title: 'List', url: 'list', icon: 'alert' },
    { title: 'Progress Bar', url: 'progressbar', icon: 'alert' },
    { title: 'Refresher', url: 'refresher', icon: 'alert' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
