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
  selector: "app-pegawai-daftar-institusi",
  templateUrl: "./pegawai-daftar-institusi.component.html",
  styleUrls: ["./pegawai-daftar-institusi.component.scss"],
})
export class PegawaiDaftarInstitusiComponent implements OnInit, OnDestroy {
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
      nameee: "Haris Harun",
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
      nameee: "Afiqah Badrul",
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
      nameee: "Tan Cheng Hoe",
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
      this.getChartAdminPendaftarInstitusi1();
      this.getChartAdminPendaftarInstitusi2();
    });
  }

  getChartAdminPendaftarInstitusi1() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create(
      "chartdivpegawaidaftarinstutusi1",
      am4charts.PieChart
    );
    chart.startAngle = 160;
    chart.endAngle = 380;

    // Let's cut a hole in our Pie chart the size of 40% the radius
    chart.innerRadius = am4core.percent(40);

    // Add data
    chart.data = [
      {
        country: "Selangor",
        litres: 501.9,
        bottles: 1500,
      },
      {
        country: "Kuala Lumpur",
        litres: 301.9,
        bottles: 990,
      },
      {
        country: "Johor",
        litres: 201.1,
        bottles: 785,
      },
      {
        country: "Melaka",
        litres: 165.8,
        bottles: 255,
      },
      {
        country: "Pahang",
        litres: 139.9,
        bottles: 452,
      },
      {
        country: "Perak",
        litres: 128.3,
        bottles: 332,
      },
      {
        country: "Penang",
        litres: 99,
        bottles: 150,
      },
      {
        country: "Kedah",
        litres: 60,
        bottles: 178,
      },
      {
        country: "Negeri Sembilan",
        litres: 50,
        bottles: 50,
      },
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = new am4core.InterfaceColorSet().getFor(
      "background"
    );
    pieSeries.slices.template.strokeWidth = 1;
    pieSeries.slices.template.strokeOpacity = 1;

    // Disabling labels and ticks on inner circle
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;

    // Disable sliding out of slices
    pieSeries.slices.template.states.getKey("hover").properties.shiftRadius = 0;
    pieSeries.slices.template.states.getKey("hover").properties.scale = 1;
    pieSeries.radius = am4core.percent(40);
    pieSeries.innerRadius = am4core.percent(30);

    let cs = pieSeries.colors;
    cs.list = [am4core.color(new am4core.ColorSet().getIndex(0))];

    cs.stepOptions = {
      lightness: -0.05,
      hue: 0,
    };
    cs.wrap = false;

    // Add second series
    let pieSeries2 = chart.series.push(new am4charts.PieSeries());
    pieSeries2.dataFields.value = "bottles";
    pieSeries2.dataFields.category = "country";
    pieSeries2.slices.template.stroke = new am4core.InterfaceColorSet().getFor(
      "background"
    );
    pieSeries2.slices.template.strokeWidth = 1;
    pieSeries2.slices.template.strokeOpacity = 1;
    pieSeries2.slices.template.states.getKey(
      "hover"
    ).properties.shiftRadius = 0.05;
    pieSeries2.slices.template.states.getKey("hover").properties.scale = 1;

    pieSeries2.labels.template.disabled = true;
    pieSeries2.ticks.template.disabled = true;

    let label = chart.seriesContainer.createChild(am4core.Label);
    label.textAlign = "middle";
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.adapter.add("text", function (text, target) {
      return (
        "[font-size:18px]total[/]:\n[bold font-size:30px]" +
        pieSeries.dataItem.values.value.sum +
        "[/]"
      );
    });

    this.chart1 = chart;
  }

  getChartAdminPendaftarInstitusi2() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create(
      "chartdivpegawaidaftarinstutusi2",
      am4charts.XYChart
    );

    // Add data
    chart.data = [
      {
        country: "2014",
        visits: 2025,
      },
      {
        country: "2015",
        visits: 1882,
      },
      {
        country: "2016",
        visits: 1809,
      },
      {
        country: "2017",
        visits: 1322,
      },
      {
        country: "2018",
        visits: 1122,
      },
      {
        country: "2019",
        visits: 1114,
      },
      {
        country: "2020",
        visits: 984,
      },
    ];

    // Create axes

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    categoryAxis.renderer.labels.template.adapter.add(
      "dy",
      function (dy, target) {
        if ((target.dataItem && target.dataItem.index & 2) == 2) {
          return dy + 25;
        }
        return dy;
      }
    );

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.name = "Visits";
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = 0.8;

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;

    this.chart2 = chart;
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
