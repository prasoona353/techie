import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
  }
  sendMessage(event: any) {
    this.noteData.emit(this.notes);
  }
}
