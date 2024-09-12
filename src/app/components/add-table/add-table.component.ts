import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Table } from '../Type/Utils';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.css']
})
export class AddTableComponent implements OnInit {
  @Input() onTable: Table = new Table();
  @Output() onAddTable: EventEmitter<Table> = new EventEmitter();

  // table: Table = new Table();
  constructor() { }

  ngOnInit(): void { }

  onSubmit(f: NgForm) {
    if (!this.onTable.table || !this.onTable.table) {
      alert('plz in form')
      return
    }
    this.onAddTable.emit(this.onTable);
    // this.onTable = new Table()
    // Handle form submission logic here
    console.log("this.table::", this.onTable);
  }
}
