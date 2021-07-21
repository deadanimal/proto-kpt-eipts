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
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-pengguna-penubuhan",
  templateUrl: "./pengguna-penubuhan.component.html",
  styleUrls: ["./pengguna-penubuhan.component.scss"],
})
export class PenggunaPenubuhanComponent implements OnInit, OnDestroy {
  // Chart
  private chart1: any;
  private chart2: any;
  private chart3: any;
  private chart4: any;

  // Modal
  modalRef: BsModalRef;
  modalReflarge: BsModalRef;

  //form
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;

  constructor(
    private zone: NgZone,
    private modalService: BsModalService,
    private _formBuilder: FormBuilder
  ) {}

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
      this.getChartUserPenubuhan1();
    });
  }

  getChartUserPenubuhan1() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create(
      "chartdivpenggunapenubuhan1",
      am4charts.PieChart
    );

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";

    // Let's cut a hole in our Pie chart the size of 30% the radius
    chart.innerRadius = am4core.percent(30);

    // Put a thick white border around each Slice
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    // change the cursor on hover to make it apparent the object can be interacted with
    pieSeries.slices.template.cursorOverStyle = [
      {
        property: "cursor",
        value: "pointer",
      },
    ];

    pieSeries.alignLabels = false;
    pieSeries.labels.template.bent = true;
    pieSeries.labels.template.radius = 3;
    pieSeries.labels.template.padding(0, 0, 0, 0);

    pieSeries.ticks.template.disabled = true;

    // Create a base filter effect (as if it's not there) for the hover to return to
    let shadow = pieSeries.slices.template.filters.push(
      new am4core.DropShadowFilter()
    );
    shadow.opacity = 0;

    // Create hover state
    let hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

    // Slightly shift the shadow and make it more prominent on hover
    let hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter());
    hoverShadow.opacity = 0.7;
    hoverShadow.blur = 5;

    // Add a legend
    chart.legend = new am4charts.Legend();

    chart.data = [
      {
        country: "Selangor",
        litres: 50,
      },
      {
        country: "Kuala Lumpur",
        litres: 44,
      },
      {
        country: "Johor",
        litres: 39,
      },
      {
        country: "Penang",
        litres: 28,
      },
      {
        country: "Perak",
        litres: 29,
      },
      {
        country: "Kedah",
        litres: 16,
      },
    ];

    this.chart1 = chart;
  }

  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template);
  // }

  // openModallarge(template: TemplateRef<any>) {
  //   this.modalReflarge = this.modalService.show(template, {
  //     class: "modal-xl",
  //   });
  // }

  modaltubuhipts(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      class: "modal-lg",
    });
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required],
    });
  }

  modalnaiktarafipts(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      class: "modal-lg",
    });
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required],
    });
  }

  modaltubuhcawang(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  modaltubuhwilayah(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  modalgabungipts(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      class: "modal-lg",
    });
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ["", Validators.required],
    });
  }

  // successSwal(task) {
  //   swal.fire({
  //     title: "Success",
  //     text: "Successfully " + task + "!",
  //     type: "success",
  //     buttonsStyling: false,
  //     confirmButtonClass: "btn btn-success",
  //   });
  // }

  // successSwalModal(task) {
  //   swal.fire({
  //     title: "Success",
  //     text: "Successfully " + task + "!",
  //     type: "success",
  //     buttonsStyling: false,
  //     confirmButtonClass: "btn btn-success",
  //   });
  //   this.modalRef.hide();
  //   this.ngOnDestroy();
  // }

  successSwal(task) {
    swal.fire({
      title: "Berjaya",
      text: "Berjaya " + task + "!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
    });
  }

  successSwalModal(task) {
    swal.fire({
      title: "Berjaya",
      text: "Berjaya " + task + "!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
    });
    this.modalRef.hide();
    // this.ngOnDestroy();
  }

  delete() {
    swal
      .fire({
        title: "Confirmation",
        text: "Are you sure want to delete this data?",
        type: "info",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-info",
        confirmButtonText: "Confirm",
        showCancelButton: true,
        cancelButtonClass: "btn btn-danger",
        cancelButtonText: "Cancel",
      })
      .then((result) => {
        if (result.value) {
          this.doneDelete();
        }
      });
  }

  doneDelete() {
    swal.fire({
      title: "Success",
      text: "The data has been deleted!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Close",
    });
  }
}
