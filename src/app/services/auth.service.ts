import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Cliente } from '../model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  async register(cliente: Cliente) {
    try{
    const user = await createUserWithEmailAndPassword(
      this.auth,
      cliente.email,
      cliente.senha
       );
       return user;
    } catch (e) {
      return null;
    }
  }


  async login (cliente: Cliente) {
      try{
        const user = await signInWithEmailAndPassword(
      this.auth,
      cliente.email,
      cliente.senha
       );
       return user;
    } catch (e) {
      return null;
    }
  }

  async senhaperdida(email:string){
    const mail = sendPasswordResetEmail(this.auth,email);
    return mail;

  }

  logout() {
    return signOut(this.auth);
  }
}
