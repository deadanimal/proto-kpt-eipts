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
  selector: "app-pegawai-penubuhan",
  templateUrl: "./pegawai-penubuhan.component.html",
  styleUrls: ["./pegawai-penubuhan.component.scss"],
})
export class PegawaiPenubuhanComponent implements OnInit, OnDestroy {
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
      dateend: "A042021",
    },
    {
      accNo: "ACC-119-VLJ",
      name: "Sarah Hashim",
      nokp: "960612-22-8352",
      tempat: "Kelantan",
      kesihatan: "Penubuhan 2",
      layak: "Sedang diproses",
      date: "19-04-2020",
      dateend: "A232021",
    },
    {
      accNo: "ACC-635-KDJ",
      name: "Sarvanan Krish",
      nokp: "970318-02-4153",
      tempat: "Johor",
      kesihatan: "Penubuhan 3",
      layak: "Memerlukan pengesahan",
      date: "12-06-2020",
      dateend: "A172021",
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
      this.getChartPegawaiTubuh1();
      this.getChartPegawaiTubuh2();
      this.getChartPegawaiTubuh3();
    });
  }

  getChartPegawaiTubuh1() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartdivpegawaipenubuhan1", am4charts.XYChart);

    // Add percent sign to all numbers
    chart.numberFormatter.numberFormat = "#.#'%'";

    // Add data
    chart.data = [
      {
        country: "Jan",
        year2004: 3.5,
        year2005: 4.2,
      },
      {
        country: "Feb",
        year2004: 1.7,
        year2005: 3.1,
      },
      {
        country: "Mac",
        year2004: 2.8,
        year2005: 2.9,
      },
      {
        country: "Apr",
        year2004: 2.6,
        year2005: 2.3,
      },
      {
        country: "Mei",
        year2004: 1.4,
        year2005: 2.1,
      },
      {
        country: "Jun",
        year2004: 2.6,
        year2005: 4.9,
      },
      {
        country: "Jul",
        year2004: 3.5,
        year2005: 4.2,
      },
      {
        country: "Ogos",
        year2004: 1.7,
        year2005: 3.1,
      },
      {
        country: "Sep",
        year2004: 2.8,
        year2005: 2.9,
      },
      {
        country: "Okt",
        year2004: 2.6,
        year2005: 2.3,
      },
      {
        country: "Nov",
        year2004: 1.4,
        year2005: 2.1,
      },
      {
        country: "Dis",
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
    valueAxis.title.text = "Jumlah Kemasukan Permohonan";
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

  getChartPegawaiTubuh2() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    /**
     * Define data for each year
     */
    let chartData = {
      "2010": [
        { sector: "Cawangan", size: 53.7 },
        { sector: "Wilayah", size: 33.2 },
      ],
      "2011": [
        { sector: "Cawangan", size: 46.3 },
        { sector: "Wilayah", size: 31.2 },
      ],
      "2012": [
        { sector: "Cawangan", size: 35 },
        { sector: "Wilayah", size: 22.2 },
      ],
      "2013": [
        { sector: "Cawangan", size: 86.7 },
        { sector: "Wilayah", size: 53.2 },
      ],
      "2014": [
        { sector: "Cawangan", size: 51.9 },
        { sector: "Wilayah", size: 41.3 },
      ],
      "2015": [
        { sector: "Cawangan", size: 63.7 },
        { sector: "Wilayah", size: 42.3 },
      ],
      "2016": [
        { sector: "Cawangan", size: 85.2 },
        { sector: "Wilayah", size: 53.3 },
      ],
      "2017": [
        { sector: "Cawangan", size: 52.1 },
        { sector: "Wilayah", size: 48.3 },
      ],
      "2018": [
        { sector: "Cawangan", size: 85.8 },
        { sector: "Wilayah", size: 63.3 },
      ],
      "2019": [
        { sector: "Cawangan", size: 71.7 },
        { sector: "Wilayah", size: 68.2 },
      ],
      "2020": [
        { sector: "Cawangan", size: 61.9 },
        { sector: "Wilayah", size: 44.2 },
      ],
    };

    // Create chart instance
    let chart = am4core.create("chartdivpegawaipenubuhan2", am4charts.PieChart);

    // Add data
    chart.data = [
      { sector: "Cawangan", size: 53.6 },
      { sector: "Wilayah", size: 32.6 },
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

    this.chart2 = chart;
  }

  getChartPegawaiTubuh3() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartdivpegawaipenubuhan3", am4charts.XYChart);

    // Add data
    chart.data = [
      {
        region: "Central",
        state: "North Dakota",
        sales: 920,
      },
      {
        region: "Central",
        state: "South Dakota",
        sales: 1317,
      },
      {
        region: "Central",
        state: "Kansas",
        sales: 2916,
      },
      {
        region: "Central",
        state: "Iowa",
        sales: 4577,
      },
      {
        region: "Central",
        state: "Nebraska",
        sales: 7464,
      },
      {
        region: "Central",
        state: "Oklahoma",
        sales: 19686,
      },
      {
        region: "Central",
        state: "Missouri",
        sales: 22207,
      },
      {
        region: "Central",
        state: "Minnesota",
        sales: 29865,
      },
      {
        region: "Central",
        state: "Wisconsin",
        sales: 32125,
      },
      {
        region: "Central",
        state: "Indiana",
        sales: 53549,
      },
      {
        region: "Central",
        state: "Michigan",
        sales: 76281,
      },
      {
        region: "Central",
        state: "Illinois",
        sales: 80162,
      },
      {
        region: "Central",
        state: "Texas",
        sales: 170187,
      },
      {
        region: "East",
        state: "West Virginia",
        sales: 1209,
      },
      {
        region: "East",
        state: "Maine",
        sales: 1270,
      },
      {
        region: "East",
        state: "District of Columbia",
        sales: 2866,
      },
      {
        region: "East",
        state: "New Hampshire",
        sales: 7294,
      },
      {
        region: "East",
        state: "Vermont",
        sales: 8929,
      },
      {
        region: "East",
        state: "Connecticut",
        sales: 13386,
      },
      {
        region: "East",
        state: "Rhode Island",
        sales: 22629,
      },
      {
        region: "East",
        state: "Maryland",
        sales: 23707,
      },
      {
        region: "East",
        state: "Delaware",
        sales: 27453,
      },
      {
        region: "East",
        state: "Massachusetts",
        sales: 28639,
      },
      {
        region: "East",
        state: "New Jersey",
        sales: 35763,
      },
      {
        region: "East",
        state: "Ohio",
        sales: 78253,
      },
      {
        region: "East",
        state: "Pennsylvania",
        sales: 116522,
      },
      {
        region: "East",
        state: "New York",
        sales: 310914,
      },
      {
        region: "South",
        state: "South Carolina",
        sales: 8483,
      },
      {
        region: "South",
        state: "Louisiana",
        sales: 9219,
      },
      {
        region: "South",
        state: "Mississippi",
        sales: 10772,
      },
      {
        region: "South",
        state: "Arkansas",
        sales: 11678,
      },
      {
        region: "South",
        state: "Alabama",
        sales: 19511,
      },
      {
        region: "South",
        state: "Tennessee",
        sales: 30662,
      },
      {
        region: "South",
        state: "Kentucky",
        sales: 36598,
      },
      {
        region: "South",
        state: "Georgia",
        sales: 49103,
      },
      {
        region: "South",
        state: "North Carolina",
        sales: 55604,
      },
      {
        region: "South",
        state: "Virginia",
        sales: 70641,
      },
      {
        region: "South",
        state: "Florida",
        sales: 89479,
      },
      {
        region: "West",
        state: "Wyoming",
        sales: 1603,
      },
      {
        region: "West",
        state: "Idaho",
        sales: 4380,
      },
      {
        region: "West",
        state: "New Mexico",
        sales: 4779,
      },
      {
        region: "West",
        state: "Montana",
        sales: 5589,
      },
      {
        region: "West",
        state: "Utah",
        sales: 11223,
      },
      {
        region: "West",
        state: "Nevada",
        sales: 16729,
      },
      {
        region: "West",
        state: "Oregon",
        sales: 17431,
      },
      {
        region: "West",
        state: "Colorado",
        sales: 32110,
      },
      {
        region: "West",
        state: "Arizona",
        sales: 35283,
      },
      {
        region: "West",
        state: "Washington",
        sales: 138656,
      },
      {
        region: "West",
        state: "California",
        sales: 457731,
      },
    ];

    // Create axes
    let yAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    yAxis.dataFields.category = "state";
    yAxis.renderer.grid.template.location = 0;
    yAxis.renderer.labels.template.fontSize = 10;
    yAxis.renderer.minGridDistance = 10;

    let xAxis = chart.xAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueX = "sales";
    series.dataFields.categoryY = "state";
    series.columns.template.tooltipText = "{categoryY}: [bold]{valueX}[/]";
    series.columns.template.strokeWidth = 0;
    series.columns.template.adapter.add("fill", function (fill, target) {
      if (target.dataItem) {
        let wasd = target.dataItem.dataContext as any;
        switch (wasd.region) {
          case "Central":
            return chart.colors.getIndex(0);
            break;
          case "East":
            return chart.colors.getIndex(1);
            break;
          case "South":
            return chart.colors.getIndex(2);
            break;
          case "West":
            return chart.colors.getIndex(3);
            break;
        }
      }
      return fill;
    });

    let axisBreaks = {};
    let legendData = [];

    // Add ranges
    function addRange(label, start, end, color) {
      let range = yAxis.axisRanges.create();
      range.category = start;
      range.endCategory = end;
      range.label.text = label;
      range.label.disabled = false;
      range.label.fill = color;
      range.label.location = 0;
      range.label.dx = -130;
      range.label.dy = 12;
      range.label.fontWeight = "bold";
      range.label.fontSize = 12;
      range.label.horizontalCenter = "left";
      range.label.inside = true;

      range.grid.stroke = am4core.color("#396478");
      range.grid.strokeOpacity = 1;
      range.tick.length = 200;
      range.tick.disabled = false;
      range.tick.strokeOpacity = 0.6;
      range.tick.stroke = am4core.color("#396478");
      range.tick.location = 0;

      range.locations.category = 1;
      let axisBreak = yAxis.axisBreaks.create();
      axisBreak.startCategory = start;
      axisBreak.endCategory = end;
      axisBreak.breakSize = 1;
      axisBreak.fillShape.disabled = true;
      axisBreak.startLine.disabled = true;
      axisBreak.endLine.disabled = true;
      axisBreaks[label] = axisBreak;

      legendData.push({ name: label, fill: color });
    }

    addRange("Central", "Texas", "North Dakota", chart.colors.getIndex(0));
    addRange("East", "New York", "West Virginia", chart.colors.getIndex(1));
    addRange("South", "Florida", "South Carolina", chart.colors.getIndex(2));
    addRange("West", "California", "Wyoming", chart.colors.getIndex(3));

    chart.cursor = new am4charts.XYCursor();

    let legend = new am4charts.Legend();
    legend.position = "right";
    legend.scrollable = true;
    legend.valign = "top";
    legend.reverseOrder = true;

    chart.legend = legend;
    legend.data = legendData;

    legend.itemContainers.template.events.on("toggled", function (event) {
      let qwert = event.target.dataItem.dataContext as any;
      let name = qwert.name;
      let axisBreak = axisBreaks[name];
      
      if (event.target.isActive) {
        axisBreak.animate(
          { property: "breakSize", to: 0 },
          1000,
          am4core.ease.cubicOut
        );
        yAxis.dataItems.each(function (dataItem) {
          let advav = dataItem.dataContext as any;
          if (advav.region == name) {
            dataItem.hide(1000, 500);
          }
        });
        series.dataItems.each(function (dataItem) {
          let advav = dataItem.dataContext as any;
          if (advav.region == name) {
            dataItem.hide(1000, 0, 0, ["valueX"]);
          }
        });
      } else {
        axisBreak.animate(
          { property: "breakSize", to: 1 },
          1000,
          am4core.ease.cubicOut
        );
        yAxis.dataItems.each(function (dataItem) {
          let advav = dataItem.dataContext as any;
          if (advav.region == name) {
            dataItem.show(1000);
          }
        });

        series.dataItems.each(function (dataItem) {
          let advav = dataItem.dataContext as any;
          if (advav.region == name) {
            dataItem.show(1000, 0, ["valueX"]);
          }
        });
      }
    });

    this.chart3 = chart;
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
