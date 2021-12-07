import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }
  async alert(){
    const alert = await this.alertCtrl.create({
      header:'Alerta',
      subHeader:'Subtitle',
      message:'This is an alert message.',
      buttons:['ok']
    });
    alert.present();

}
async multiple(){
  const alert = await this.alertCtrl.create({
  header:'Alerta',
  subHeader:'Subtitle',
  message:'This is an alert message.',
  buttons:['Cancel','Open Modal', 'Delete']
});
await alert.present();
}

async confirm(){
  const alert = await this.alertCtrl.create({
    header:'Confirma!?',
    message: 'Message <strong>text</strong>',
    buttons: [{
      text:'cancel',
      role: 'Cancel',
      cssClass: 'secundary',
      handler:(bla) => {
        console.log('Confirm Cancel:blah');
      }
    },{
      text:'Okay',
      handler:()=>{
        console.log('Confirm Okay');
      }
    }]
  });
  await alert.present();
}
async prompt(){
  const alert = await this.alertCtrl.create({
    header:'Prompt',
    inputs:[
      {
        name:'Email',
        type:'text',
        placeholder:'Informe seu Email'
      },
      {
        name:'Senha',
        type:'password',
        placeholder:'Informe sua Senha'
      },
    ],
    buttons:[
      {
        text:'Cancel',
        role:'cancel',
        cssClass:'secondary',
        handler:()=>{
          console.log('Confirmar Cancel');
        }
      },{
        text:'Ok',
        handler:(form) =>{
          console.log(form);
        }
      }
    ]
  });
await alert.present();
}

}
