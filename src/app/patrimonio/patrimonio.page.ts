import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { promise } from 'protractor';

@Component({
  selector: 'app-patrimonio',
  templateUrl: './patrimonio.page.html',
  styleUrls: ['./patrimonio.page.scss'],
})
export class PatrimonioPage implements OnInit {
  patrimonio: any [] = [];
  constructor(
    private router: Router,
    private service: ApiService
  ) {}

  ngOnInit() {}
  ionViewWillEnter() {
   this.patrimonio = []; // Limpa a matriz
   this.carregar();
  }
  addPatrimonio() {
    this.router.navigate(['add-patrimonio']);
  }
  carregar() {
    return new Promise(ret => {
      let dados = {
        requisicao: "listar",
        numero: ""
      };
      this.service.conectApi(dados, 'patrimonio.php').subscribe(data => {
        if (data['result'] == '0'){
          this.ionViewWillEnter();
        }else{
          for (let item of data['result']){
            this.patrimonio.push(item);
          }
        }
      });
    });
  }
}
