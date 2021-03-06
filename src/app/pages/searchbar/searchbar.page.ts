import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  nome ='';
  pessoas: any;
  pessoasFiltradas: any;

  constructor() {
    this.pessoas = [
      {id: 1, idade:13, nome: 'Paulo'},
      {id: 2, idade:17, nome: 'Pedro'},
      {id: 3, idade:55, nome: 'Daiane'},
      {id: 4, idade:22, nome: 'Lucas'},
      {id: 5, idade:33, nome: 'Rodrigo'},
      {id: 6, idade:11, nome: 'Benjamim'},
      {id: 7, idade:12, nome: 'Claudiane'},
      {id: 8, idade:13, nome: 'Marcos'},
      {id: 9, idade:14, nome: 'Andre'},

    ];
    this.pessoasFiltradas = this.pessoas;
   };

  ngOnInit() {
  }

  filtrarItens(event){
    this.nome = event.target.value.toLowerCase();
    console.log(this.nome);
    this.pessoasFiltradas = this.filtrarPessoas(this.nome);
  }

  filtrarPessoas(nome){
    this.pessoasFiltradas = this.pessoas;

    return this.pessoasFiltradas.filter((item)=>item.nome.toLowerCase().includes(nome.toLowerCase()));
  }

}
