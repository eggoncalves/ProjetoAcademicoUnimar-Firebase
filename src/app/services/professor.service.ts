import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Professor } from '../interfaces/professor';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  constructor(private firestore: Firestore) { }

  private professoresColllection = collection(this.firestore, 'professores');

  listar() {        
    return collectionData(this.professoresColllection, {idField: 'id'}) as Observable<Professor[]>;
  }

  // adicionar(professor: Professor) {
  //   let app = initializeApp(environment.firebaseConfig);
  //   let db = getFirestore(app);

  //   const professoresCollection = collection(db, 'professores');
  //   return addDoc(professoresCollection, professor);
  // }

  // atualizar(usuarioId: string, professor: Professor) {
  //   let app = initializeApp(environment.firebaseConfig);
  //   let db = getFirestore(app);

  //   const professorDoc = doc(db, `professores/${usuarioId}`);
  //   return updateDoc(professorDoc, { ...professor });
  // }

  // excluir(usuarioId: string) {
  //   let app = initializeApp(environment.firebaseConfig);
  //   let db = getFirestore(app);

  //   const professorDoc = doc(db, `professores/${usuarioId}`);
  //   return deleteDoc(professorDoc);
  // }
}
