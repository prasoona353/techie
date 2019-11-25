import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  @Output() noteData = new EventEmitter();
  notes: string
  constructor() { }

  ngOnInit() {
    if(NavComponent.clearNote){
      NavComponent.clearNote.subscribe((data: any ) => {
        console.log(data, 'data')
        this.notes = data;
      })
    }
    // if(NavComponent.displayNoteData){
    //   NavComponent.displayNoteData.subscribe((data: ))
    // }
  }
  sendMessage(event: any) {
    this.noteData.emit(this.notes);
  }
}
