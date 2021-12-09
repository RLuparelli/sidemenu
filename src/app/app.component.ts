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
    { title: 'Action-Sheet', url: 'actionsheet', icon: 'magnet' },
    { title: 'Badge', url: 'badge', icon: 'terminal' },
    { title: 'Card', url: 'card', icon: 'card' },
    { title: 'Check-Box', url: 'checkbox', icon: 'checkmark-circle' },
    { title: 'Chip', url: 'chip', icon: 'hardware-chip' },
    { title: 'Content', url: 'content', icon: 'receipt' },
    { title: 'Date Time', url: 'datetime', icon: 'calendar-number' },
    { title: 'Ion Fab', url: 'fab', icon: 'radio-button-on' },
    { title: 'Grid', url: 'grid', icon: 'grid' },
    { title: 'Infinite Scroll', url: 'infinitescroll', icon: 'infinite' },
    { title: 'Input', url: 'input', icon: 'cloud-upload' },
    { title: 'List', url: 'list', icon: 'albums' },
    { title: 'Progress Bar', url: 'progressbar', icon: 'bar-chart' },
    { title: 'Refresher', url: 'refresher', icon: 'refresh' },
    { title: 'Reorder', url: 'reorder', icon: 'refresh' },
    { title: 'Toggle', url: 'toggle', icon: 'refresh' },
    { title: 'Search-Bar', url: 'searchbar', icon: 'refresh' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
