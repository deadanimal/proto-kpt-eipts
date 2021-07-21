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
  selector: "app-pengguna-pengurusan-permit-semak",
  templateUrl: "./pengguna-pengurusan-permit-semak.component.html",
  styleUrls: ["./pengguna-pengurusan-permit-semak.component.scss"],
})
export class PenggunaPengurusanPermitSemakComponent
  implements OnInit, OnDestroy
{
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
      this.getChartUseruruspemitsemak1();
      this.getChartUseruruspemitsemak2();
    });
  }

  getChartUseruruspemitsemak1() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create(
      "chartdivpenggunapermitsemak1",
      am4charts.PieChart
    );

    // Add data
    chart.data = [
      {
        country: "Buka",
        litres: 501.9,
      },
      {
        country: "Tutup",
        litres: 301.9,
      },
      {
        country: "Yang belum selesai",
        litres: 201.1,
      },
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    chart.hiddenState.properties.radius = am4core.percent(0);

    this.chart1 = chart;
  }

  getChartUseruruspemitsemak2() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    /**
     * Define data for each year
     */
    let chartData = {
      "2010": [
        { sector: "Buka", size: 53.7 },
        { sector: "Tutup", size: 33.2 },
        { sector: "Yang belum selesai", size: 18.4 },
      ],
      "2011": [
        { sector: "Buka", size: 46.3 },
        { sector: "Tutup", size: 31.2 },
        { sector: "Yang belum selesai", size: 18.1 },
      ],
      "2012": [
        { sector: "Buka", size: 35 },
        { sector: "Tutup", size: 22.2 },
        { sector: "Yang belum selesai", size: 16.5 },
      ],
      "2013": [
        { sector: "Buka", size: 86.7 },
        { sector: "Tutup", size: 53.2 },
        { sector: "Yang belum selesai", size: 16.2 },
      ],
      "2014": [
        { sector: "Buka", size: 51.9 },
        { sector: "Tutup", size: 41.3 },
        { sector: "Yang belum selesai", size: 17.2 },
      ],
      "2015": [
        { sector: "Buka", size: 63.7 },
        { sector: "Tutup", size: 42.3 },
        { sector: "Yang belum selesai", size: 16.4 },
      ],
      "2016": [
        { sector: "Buka", size: 85.2 },
        { sector: "Tutup", size: 53.3 },
        { sector: "Yang belum selesai", size: 16.2 },
      ],
      "2017": [
        { sector: "Buka", size: 52.1 },
        { sector: "Tutup", size: 48.3 },
        { sector: "Yang belum selesai", size: 14.9 },
      ],
      "2018": [
        { sector: "Buka", size: 85.8 },
        { sector: "Tutup", size: 63.3 },
        { sector: "Yang belum selesai", size: 14.9 },
      ],
      "2019": [
        { sector: "Buka", size: 71.7 },
        { sector: "Tutup", size: 68.2 },
        { sector: "Yang belum selesai", size: 14.9 },
      ],
      "2020": [
        { sector: "Buka", size: 61.9 },
        { sector: "Tutup", size: 44.2 },
        { sector: "Yang belum selesai", size: 14.5 },
      ],
    };

    // Create chart instance
    let chart = am4core.create("chartdivpenggunapermitsemak2", am4charts.PieChart);

    // Add data
    chart.data = [
      { sector: "Buka", size: 53.6 },
      { sector: "Tutup", size: 32.6 },
      { sector: "Yang belum selesai", size: 23.2 },
    ];

    // Add label
    chart.innerRadius = 100;
    let label = chart.seriesContainer.createChild(am4core.Label);
    label.text = "2010";
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.fontSize = 50;

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "size";
    pieSeries.dataFields.category = "sector";

    // Animate chart data
    let currentYear = 2010;
    function getCurrentData() {
      let wasd = label as any;
      wasd.text = currentYear;
      let data = chartData[currentYear];
      currentYear++;
      if (currentYear > 2020) currentYear = 2010;
      return data;
    }

    function loop() {
      //chart.allLabels[0].text = currentYear;
      let data = getCurrentData();
      for (var i = 0; i < data.length; i++) {
        chart.data[i].size = data[i].size;
      }
      chart.invalidateRawData();
      chart.setTimeout(loop, 4000);
    }

    loop();

    this.chart2 = chart
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
