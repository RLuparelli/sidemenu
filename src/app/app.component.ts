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
    { title: 'Alerta', url: 'alerta', icon: 'alert' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
