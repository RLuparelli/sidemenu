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
    { title: 'Reorder', url: 'reorder', icon: 'reorder-four' },
    { title: 'Toggle', url: 'toggle', icon: 'toggle' },
    { title: 'Search-Bar', url: 'searchbar', icon: 'search' },
    { title: 'Segment', url: 'segment', icon: 'apps' },
    { title: 'Slides', url: 'slides', icon: 'albums' },
    { title: 'Toast', url: 'toast', icon: 'chatbubbles' },
    { title: 'Modal', url: 'modal', icon: 'invert-mode' },
    { title: 'Popover', url: 'popover', icon: 'paper-plane' },
    { title: 'Radio', url: 'radio', icon: 'radio' },
    { title: 'Animation', url: 'animation', icon: 'shuffle' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
