import {
  Component,
  OnInit,
  NgZone,
  OnDestroy,
  TemplateRef,
} from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import swal from "sweetalert2";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-pengguna-naziran",
  templateUrl: "./pengguna-naziran.component.html",
  styleUrls: ["./pengguna-naziran.component.scss"],
})
export class PenggunaNaziranComponent implements OnInit {
  //rating
  max = 10;
  rate = 0;
  isReadonly = false;
  starsCount: number;

  // Chart
  private chart1: any;
  private chart2: any;
  private chart3: any;
  private chart4: any;

  // Modal
  modalRef: BsModalRef;

  //table
  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      accNo: "ACC-719-MOX",
      name: "Syafiq Ahmad",
      nokp: "931204-01-3511",
      tempat: "Selangor",
      kesihatan: "Tiada masalah kesihatan",
      layak: "Layak",
      date: "03-01-2020",
      dateend: "04-02-2021",
    },
    {
      accNo: "ACC-119-VLJ",
      name: "Sarah Hashim",
      nokp: "960612-22-8352",
      tempat: "Kelantan",
      kesihatan: "Tiada masalah kesihatan",
      layak: "Sedang diproses",
      date: "19-04-2020",
      dateend: "23-03-2021",
    },
    {
      accNo: "ACC-635-KDJ",
      name: "Sarvanan Krish",
      nokp: "970318-02-4153",
      tempat: "Johor",
      kesihatan: "Pernah menjalani pembedahan",
      layak: "Memerlukan pengesahan",
      date: "12-06-2020",
      dateend: "17-12-2021",
    },
  ];
  SelectionType = SelectionType;

  constructor(private zone: NgZone, private modalService: BsModalService) {
    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
        id: key,
      };
    });
  }

  ngOnInit() {
    this.getCharts();
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart1) {
        console.log("Chart disposed");
        this.chart1.dispose();
      }
      if (this.chart2) {
        console.log("Chart disposed");
        this.chart2.dispose();
      }
      if (this.chart3) {
        console.log("Chart disposed");
        this.chart3.dispose();
      }
      if (this.chart4) {
        console.log("Chart disposed");
        this.chart4.dispose();
      }
    });
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      // this.getChartUseruruspemitsemak1();
      // this.getChartUseruruspemitsemak2();
    });
  }

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

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  successSwal(task) {
    swal.fire({
      title: "Berjaya",
      text: "Berjaya " + task + "!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
    });
    this.modalRef.hide();
  }
}
