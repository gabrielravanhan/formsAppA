import { Usuario } from './../models/Usuario';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  usuario: Usuario = new Usuario();

  confirmarSenha = '';

  constructor(public storage: StorageService, public router: Router) { }

  ngOnInit() {
  }

  salvar() {
    this.storage.set(this.usuario.cpf, this.usuario);
    this.router.navigateByUrl('/home');
  }

}
