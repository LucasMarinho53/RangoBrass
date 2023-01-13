import { Injectable } from '@angular/core';
import { collection, doc, docSnapshots, Firestore, setDoc } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';
import { Cliente } from '../model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseclienteService {

  constructor(private firestore: Firestore) { }

  savecliente(cliente: Cliente): Promise<void>{
    const document = doc(collection(this.firestore, 'clientes'));
    return setDoc(document, cliente);
  }

  findcliente(id: string): Observable<Cliente> {
    const document = doc(this.firestore, `clientes/${id}`);
    return docSnapshots(document)
    .pipe(
      map(doc => {
        const id = doc.id;
        const data = doc.data();
        return { id, ...data } as Cliente;
      })
    );
  }

  updatecliente(cliente: Cliente): Promise<void>{
    const document = doc(this.firestore, 'clientes', cliente?.id);
    const { id, ...data } = cliente;
    return setDoc(document, data);
  }
}
