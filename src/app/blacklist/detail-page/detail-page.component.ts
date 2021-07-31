import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { tap } from 'rxjs/operators';
import { BlacklistDataService } from '../blacklist-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  blacklistId: string;
  blacklist: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private db: AngularFirestore,
    public data: BlacklistDataService
  ) {}

  ngOnInit() {
    this.blacklistId = this.route.snapshot.paramMap.get('id');

    // this.blacklist = this.db
    //   .collection('blacklists')
    //   .doc<any>(blacklistId)
    //   .valueChanges()
    this.blacklist = this.data.getBlacklist(this.blacklistId)
  }
}
