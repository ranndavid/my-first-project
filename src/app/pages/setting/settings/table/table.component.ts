import { Component, OnInit } from '@angular/core';
import { RestAPIService } from '../../../../../shared/services/rest-api.service';
import { TableAPIService } from '../../../../../shared/services/table-api.service';
import { Table } from '../../../../components/Type/Utils';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  showInfo(arg0: string) {
    
  }
  tables: Table[] = [];
  table: Table = new Table();

  constructor(private tableAPIService: TableAPIService) { }

  ngOnInit() {
    this.getAll();
  }


  getAll() {
    this.tableAPIService.gets().subscribe((res => {
      console.log('res::', res);
      this.tables = res

    }))
  }

  onAddTable(table: Table) {
    console.log("table:: out side::", table);

    if (this.table.id) {
      this.tableAPIService.put(this.table).subscribe((res) => {
        this.getAll()
      })
    } else {
      this.tableAPIService.post(table).subscribe((res) => {
        this.getAll();
      }, (error) => {

      });

    }

    this.table = new Table()

  }

  onDelete(table: Table) {
    this.tableAPIService.delete(table).subscribe((res) => {
      this.getAll();
    });
    console.log("delete table::", table);
  }

  onEditTable(table: Table) {
    this.table = table
  }

}
