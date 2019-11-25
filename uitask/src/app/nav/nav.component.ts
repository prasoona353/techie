import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  notes: string;
  todayDate = new Date();
  noteTitles: Array<{}>;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(){
    this.noteTitles = [
      {id:4, title: 'Note1',  date: new Date() },
      {id:3, title: 'Note2',  date: new Date() },
      {id:2, title: 'Note3',  date: new Date() },
      {id:1, title: 'Note4',  date: new Date() }
    ]
  }
  receiveNote(event: any) {
    console.log(event, 'event',)
    this.notes = event;
  }
}
