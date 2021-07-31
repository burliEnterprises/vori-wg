import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { tap } from 'rxjs/operators';
import { BlacklistDataService } from '../blacklist-data.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  customers;

  constructor(private db: AngularFirestore, public data: BlacklistDataService) {}

  ngOnInit() {

    // this.customers = this.db.collection('customers').valueChanges({ idField: 'id' });

    this.data.subscribeToblacklist();
  }
}
