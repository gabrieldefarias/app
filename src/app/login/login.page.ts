import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string = "";
  senha: string = "";
  constructor(
    private service: ApiService,
    private router: Router,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() { }
  login() {
    let dados = {
      requisicao: 'login',
      usuario: this.usuario,
      senha: this.senha
    };
    this.service.conectApi(dados, 'patrimonio.php').subscribe(async data => {
      if (data['result']){
        this.router.navigate(['usuarios']);
        const toast = await this.toastCtrl.create({
          message: "Login efetuado com sucesso",
          position: "top",
          color: "success",
          duration: 4000
        });
        toast.present();
      }else{
        const toast = await this.toastCtrl.create({
          message: "Falha ao realizar o login",
          position: "bottom",
          color: "danger",
          duration: 2500
        });
        toast.present();
      }
    });
  }

}
