import { Injectable } from '@angular/core';
import { collection, doc, docSnapshots, Firestore, setDoc } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';
import { Pedido } from '../model/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class FirebasepedidoService {

  constructor(private firestore: Firestore) { }

  savepedido(pedido: Pedido): Promise<void>{
    const document = doc(collection(this.firestore, 'pedidos'));
    return setDoc(document, pedido);
  }

  findPedido(id: string): Observable<Pedido> {
    const document = doc(this.firestore, `pedidos/${id}`);
    return docSnapshots(document)
    .pipe(
      map(doc => {
        const id = doc.id;
        const data = doc.data();
        return { id, ...data } as Pedido;
      })
    );
  }
}
