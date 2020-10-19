import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-patrimonio',
  templateUrl: './add-patrimonio.page.html',
  styleUrls: ['./add-patrimonio.page.scss'],
})
export class AddPatrimonioPage implements OnInit {
  id: number;
  numero: string;
  produto: string;
  marca: string;
  serie: string;
  categoria: string;
  valor: number;
  situacao: string;
  patrimonio: any[] = [];

  constructor(
    private service: ApiService,
    private route: Router
  ) { }

  ngOnInit() {}
  incluir(){
    return new Promise(res => {
      let itemPatrimonio = {
        requisicao: 'add',
        numero: this.numero,
        produto: this.produto,
        marca: this.marca,
        serie: this.serie,
        categoria: this.categoria,
        valor: this.valor,
        situacao: this.situacao
      };
      this.service.conectApi(itemPatrimonio, 'patrimonio.php').subscribe(data => {
        if (data['success']){
          console.log(data);
          this.route.navigate(['patrimonio']);
        }
      });
    });
  }
}
