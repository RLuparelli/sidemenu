import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  logScrollStart(){
    console.log('Iniciou a interacao com o scroll');
  }
  logScrollEnd(){
    console.log('Terminou a interacao com o scroll');
  }
  logScrolling(e){
    console.log(e);
  }

}
