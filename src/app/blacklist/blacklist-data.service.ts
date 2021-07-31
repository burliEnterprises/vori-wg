import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlacklistDataService {

  blacklist = null;
  subscription;

  subscribeToblacklist() {
    if (!this.blacklist) {
      this.subscription = this.db.collection('blacklist').valueChanges({idField: 'id'})
      .subscribe(blacklist =>  {
        this.blacklist = blacklist;
      });
    }
  }

  getBlacklist(id: string) {
    if (this.blacklist) {
      const cached = this.blacklist.find(v => v.id === id);
      console.log('use cached');
      return of(cached);
    } else {
      console.log('use db');
      return this.db.collection('blacklist').doc(id).valueChanges();
    }

  }

  dispose() {
    this.subscription.unsubscribe();
    this.blacklist = null;
  }



  constructor(private db: AngularFirestore) { }
}
