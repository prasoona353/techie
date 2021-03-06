import { Component, OnInit, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  noteTitles: Array<{}>;
  notes: String;
  searchText: string;
  todayDate = new Date();
  displayedNoteIndex: string;
  static clearNote = new EventEmitter();
  static displayNoteData = new EventEmitter();

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }
  ngOnInit() {
    this.noteTitles = [
      {id:4, title: 'Greetngs of the day!!!!!!',  date: new Date() },
      {id:3, title: 'Thankyou, for giving me an opportunity',  date: new Date() },
      {id:2, title: 'Because of this, I had learnt more about GitHub',  date: new Date() },
      {id:1, title: 'I found there is no need to use local storage, thats y i didnt use it',  date: new Date() }
    ]

  }
  displayNote(each: any){
  this.saveNote()
    NavComponent.clearNote.emit(each.title);
    this.displayedNoteIndex = each.id;
    console.log(this.displayedNoteIndex)
  }
  saveNote() {
    if(this.notes){
      this.noteTitles.unshift({
        id: this.noteTitles.length +1,
        title: this.notes, date: new Date()
      })
      this.notes = '';
      
      NavComponent.clearNote.emit('')
    } else {
      return;
    }
  }
  createNote(){
    NavComponent.clearNote.emit('');
    this.displayedNoteIndex = ''
  }
  filternoteData(){
    this.noteTitles = this.noteTitles.filter((each: any) => each.id != this.displayedNoteIndex);
  }
  deleteNote(){
    this.filternoteData()
    NavComponent.clearNote.emit('')
    // this.notes = ''
  }
  receiveNote(event: any) {
    console.log(event, 'event', this.displayedNoteIndex)
    this.notes = event;
    this.filternoteData()
  }

}
