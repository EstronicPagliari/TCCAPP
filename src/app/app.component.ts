import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Forno', url: 'forno', icon: 'tv' },
    { title: 'Motor', url: 'principal', icon: 'cog' },
    { title: 'Receita', url: 'receita', icon: 'document' },
    { title: 'Histórico', url: 'historico', icon: 'reader' },
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
