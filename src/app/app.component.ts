import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy  {
  title = 'LogicLeaf';
  mediaSub!: Subscription;
  xsSize: boolean = false;
  constructor(private mediaObserver: MediaObserver) {}

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.asObservable().subscribe((changes: MediaChange[]) => {
      const xsMediaChange = changes.find(change => change.mqAlias === 'xs');
      if (xsMediaChange) {
        this.xsSize = true;
      } else {
        this.xsSize = false;
      }
    });
  }
  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }

}
