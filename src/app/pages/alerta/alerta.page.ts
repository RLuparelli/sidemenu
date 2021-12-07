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
      cssClass: 'my-custom-class',
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
        cssClass:'my-custom-class',
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

async check(){
  const alert = await this.alertCtrl.create({
    cssClass: 'my-custom-class',
    header: 'Checkbox',
    inputs: [
      {
        name: 'checkbox1',
        type: 'checkbox',
        label: 'Checkbox 1',
        value: 'value1',
        handler: () => {
          console.log('Checkbox 1 selected');
        },
        checked: true
      },

      {
        name: 'checkbox2',
        type: 'checkbox',
        label: 'Checkbox 2',
        value: 'value2',
        handler: () => {
          console.log('Checkbox 2 selected');
        }
      },

      {
        name: 'checkbox3',
        type: 'checkbox',
        label: 'Checkbox 3',
        value: 'value3',
        handler: () => {
          console.log('Checkbox 3 selected');
        }
      },

      {
        name: 'checkbox4',
        type: 'checkbox',
        label: 'Checkbox 4',
        value: 'value4',
        handler: () => {
          console.log('Checkbox 4 selected');
        }
      },

      {
        name: 'checkbox5',
        type: 'checkbox',
        label: 'Checkbox 5',
        value: 'value5',
        handler: () => {
          console.log('Checkbox 5 selected');
        }
      },

      {
        name: 'checkbox6',
        type: 'checkbox',
        label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',
        value: 'value6',
        handler: () => {
          console.log('Checkbox 6 selected');
        }
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Ok',
        handler: () => {
          console.log('Confirm Ok');
        }
      }
    ]
  });

  await alert.present();
}
}


