import {
  Component,
  OnInit,
  NgZone,
  OnDestroy,
  TemplateRef,
} from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import swal from "sweetalert2";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-pegawai-daftar-ketua",
  templateUrl: "./pegawai-daftar-ketua.component.html",
  styleUrls: ["./pegawai-daftar-ketua.component.scss"],
})
export class PegawaiDaftarKetuaComponent implements OnInit, OnDestroy {
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
      kesihatan: "Penubuhan 1",
      layak: "Layak",
      date: "03-01-2020",
      dateend: "Universiti Malaya",
      nameee: "Haris Harun"
    },
    {
      accNo: "ACC-119-VLJ",
      name: "Sarah Hashim",
      nokp: "960612-22-8352",
      tempat: "Kelantan",
      kesihatan: "Penubuhan 2",
      layak: "Sedang diproses",
      date: "19-04-2020",
      dateend: "Universiti Kebangsaan Malaysia",
      nameee: "Afiqah Badrul"
    },
    {
      accNo: "ACC-635-KDJ",
      name: "Sarvanan Krish",
      nokp: "970318-02-4153",
      tempat: "Johor",
      kesihatan: "Penubuhan 3",
      layak: "Memerlukan pengesahan",
      date: "12-06-2020",
      dateend: "Universiti Sains Malaysia",
      nameee: "Tan Cheng Hoe"
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
      this.getChartPegawaiDaftarKetua1();
    });
  }

  getChartPegawaiDaftarKetua1() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartdivpegawaidaftarketua1", am4charts.XYChart);

    // Add percent sign to all numbers
    chart.numberFormatter.numberFormat = "#.#'%'";

    // Add data
    chart.data = [
      {
        country: "2015",
        year2004: 3.5,
        year2005: 4.2,
      },
      {
        country: "2016",
        year2004: 1.7,
        year2005: 3.1,
      },
      {
        country: "2017",
        year2004: 2.8,
        year2005: 2.9,
      },
      {
        country: "2018",
        year2004: 2.6,
        year2005: 2.3,
      },
      {
        country: "2019",
        year2004: 1.4,
        year2005: 2.1,
      },
      {
        country: "2020",
        year2004: 2.6,
        year2005: 4.9,
      },
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis()) as any;
    valueAxis.title.text = "Senarai Pemakluman & Pembatalan";
    valueAxis.title.fontWeight = 800;

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "year2004";
    series.dataFields.categoryX = "country";
    series.clustered = false;
    series.tooltipText = "{categoryX}: [bold]{valueY}[/]";

    let series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.dataFields.valueY = "year2005";
    series2.dataFields.categoryX = "country";
    series2.clustered = false;
    series2.columns.template.width = am4core.percent(50);
    series2.tooltipText = "{categoryX}: [bold]{valueY}[/]";

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineX.disabled = true;
    chart.cursor.lineY.disabled = true;

    this.chart1 = chart;
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
    // this.modalRef.hide();
  }
}
