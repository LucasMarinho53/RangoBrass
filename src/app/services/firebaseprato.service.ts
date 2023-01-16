import { Injectable } from '@angular/core';
import { collection, doc, docSnapshots, Firestore, setDoc } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';
import { Prato } from '../model/prato.model';

@Injectable({
  providedIn: 'root'
})
export class FirebasepratoService {

  constructor(private firestore: Firestore) { }

  saveprato(prato: Prato): Promise<void>{
    const document = doc(collection(this.firestore, 'pratos'));
    return setDoc(document, prato);
  }

  findPedido(id: string): Observable<Prato> {
    const document = doc(this.firestore, `pratos/${id}`);
    return docSnapshots(document)
    .pipe(
      map(doc => {
        const id = doc.id;
        const data = doc.data();
        return { id, ...data } as Prato;
      })
    );
  }
}
