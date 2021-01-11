import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { OnDestroy } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit ,OnDestroy {
  userId: number= null;
  private sub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.sub= this.activatedRoute.params.subscribe(params=>{
      this.userId = parseInt(params['id']);

    });
  }

    ngOnDestroy (){
      this.sub.unsubscribe();

    }
}
