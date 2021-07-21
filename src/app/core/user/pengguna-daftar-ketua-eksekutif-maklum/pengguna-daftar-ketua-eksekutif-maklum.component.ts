import { Component, OnInit } from "@angular/core";
import swal from "sweetalert2";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-pengguna-daftar-ketua-eksekutif-maklum",
  templateUrl: "./pengguna-daftar-ketua-eksekutif-maklum.component.html",
  styleUrls: ["./pengguna-daftar-ketua-eksekutif-maklum.component.scss"],
})
export class PenggunaDaftarKetuaEksekutifMaklumComponent implements OnInit {
  //table
  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      accNo: "ACC-719-MOX",
      status: "active",
      name: "Syafiq Ahmad",
      namaipt: "Universiti Malaya"
    },
    {
      accNo: "ACC-119-VLJ",
      status: "approved",
      name: "Sarah Hashim",
      namaipt: "Universiti Kebangsaan Malaysia"
    },
    {
      accNo: "ACC-635-KDJ",
      status: "reviewed",
      name: "Joshua Sprite",
      namaipt: "Universiti Sains Malaysia"
    },
  ];
  SelectionType = SelectionType;

  constructor() {
    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
        id: key,
      };
    });
  }

  ngOnInit() {}

  entriesChange($event) {
    this.entries = $event.target.value;
  }
  filterTable($event) {
    let val = $event.target.value;
    this.temp = this.rows.filter(function (d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }
  onActivate(event) {
    this.activeRow = event.row;
  }

  successSwal(task) {
    swal.fire({
      title: "Berjaya",
      text: "Berjaya " + task + "!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
    });
  }
}
