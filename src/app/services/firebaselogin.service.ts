import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore/';
import { Cliente } from '../model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseloginService {

  constructor(
    public firestore: AngularFirestore,
    public auth: AngularFireAuth
  ) { }

}
