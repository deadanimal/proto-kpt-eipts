import {
  Component,
  OnInit,
  NgZone,
  OnDestroy,
  TemplateRef,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import swal from "sweetalert2";
import { CarouselConfig } from "ngx-bootstrap/carousel";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interaction from "@fullcalendar/interaction";

@Component({
  selector: "app-pengguna-daftar-kursus-pengajian",
  templateUrl: "./pengguna-daftar-kursus-pengajian.component.html",
  styleUrls: ["./pengguna-daftar-kursus-pengajian.component.scss"],
  providers: [
    {
      provide: CarouselConfig,
      useValue: {
        interval: 15000,
        noPause: true,
        showIndicators: true,
        isAnimated: true,
      },
    },
  ],
})
export class PenggunaDaftarKursusPengajianComponent implements OnInit {
  // Chart
  private chart1: any;
  private chart2: any;
  private chart3: any;
  private chart4: any;

  //carousel
  myInterval = 3000;
  activeSlideIndex = 0;

  slides = [
    { image: "assets/img/theme/imagecarousel1.jpeg" },
    { image: "assets/img/theme/imagecarousel2.jpeg" },
    { image: "assets/img/theme/imagecarousel3.jpeg" },
  ];

  //calender
  addModal: BsModalRef;
  editModal: BsModalRef;
  @ViewChild("modalAdd") modalAdd: ElementRef;
  @ViewChild("modalEdit") modalEdit: ElementRef;
  default = {
    keyboard: true,
    class: "modal-dialog-centered modal-secondary",
  };
  radios = "bg-danger";
  eventTitle = undefined;
  eventDescription;
  eventId;
  event;
  startDate;
  endDate;
  calendar;
  today = new Date();
  y = this.today.getFullYear();
  m = this.today.getMonth();
  d = this.today.getDate();
  events = [
    {
      id: 0,
      title: "Lunch meeting",
      start: "2018-11-21",
      end: "2018-11-22",
      className: "bg-orange",
    },
    {
      id: 1,
      title: "Call with Dave",
      start: new Date(this.y, this.m, 1),
      allDay: true,
      className: "bg-red",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },

    {
      id: 2,
      title: "Lunch meeting",
      start: new Date(this.y, this.m, this.d - 1, 10, 30),
      allDay: true,
      className: "bg-orange",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },

    {
      id: 3,
      title: "All day conference",
      start: new Date(this.y, this.m, this.d + 7, 12, 0),
      allDay: true,
      className: "bg-green",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },

    {
      id: 4,
      title: "Meeting with Mary",
      start: new Date(this.y, this.m, this.d - 2),
      allDay: true,
      className: "bg-blue",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },

    {
      id: 5,
      title: "Winter Hackaton",
      start: new Date(this.y, this.m, this.d + 1, 19, 0),
      allDay: true,
      className: "bg-red",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },

    {
      id: 6,
      title: "Digital event",
      start: new Date(this.y, this.m, 21),
      allDay: true,
      className: "bg-warning",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },

    {
      id: 7,
      title: "Marketing event",
      start: new Date(this.y, this.m, 21),
      allDay: true,
      className: "bg-purple",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },

    {
      id: 8,
      title: "Dinner with Family",
      start: new Date(this.y, this.m, 19),
      allDay: true,
      className: "bg-red",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },

    {
      id: 9,
      title: "Black Friday",
      start: new Date(this.y, this.m, 23),
      allDay: true,
      className: "bg-blue",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },

    {
      id: 10,
      title: "Cyber Week",
      start: new Date(this.y, this.m, 2),
      allDay: true,
      className: "bg-yellow",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },
  ];

  constructor(
    private modalService: BsModalService,
    private zone: NgZone
  ) {}

  ngOnInit() {
    this.getCharts();
    this.initCalendar();
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
      // this.getChartHomeLanding1();
      // this.getChartHomeLanding2();
    });
  }

  changeView(newView) {
    this.calendar.changeView(newView);

    currentDate: this.calendar.view.title;
  }
  initCalendar() {
    this.calendar = new Calendar(
      document.getElementById("calendarUserdaftarkursus1"),
      {
        plugins: [interaction, dayGridPlugin],
        defaultView: "dayGridMonth",
        selectable: true,
        editable: true,
        events: this.events,
        views: {
          month: {
            titleFormat: { month: "long", year: "numeric" },
          },
          agendaWeek: {
            titleFormat: { month: "long", year: "numeric", day: "numeric" },
          },
          agendaDay: {
            titleFormat: { month: "short", year: "numeric", day: "numeric" },
          },
        },
        // Add new event
        select: (info) => {
          this.addModal = this.modalService.show(this.modalAdd, this.default);
          this.startDate = info.startStr;
          this.endDate = info.endStr;
        },
        // Edit calendar event action
        eventClick: ({ event }) => {
          this.eventId = event.id;
          this.eventTitle = event.title;
          this.eventDescription = event.extendedProps.description;
          this.radios = "bg-danger";
          this.event = event;
          this.editModal = this.modalService.show(this.modalEdit, this.default);
        },
      }
    );
    this.calendar.render();
  }
  getNewEventTitle(e) {
    this.eventTitle = e.target.value;
  }
  getNewEventDescription(e) {
    this.eventDescription = e.target.value;
  }
  addNewEvent() {
    this.events.push({
      title: this.eventTitle,
      start: this.startDate,
      end: this.endDate,
      className: this.radios,
      id: this.events.length,
    });
    this.calendar.addEvent({
      title: this.eventTitle,
      start: this.startDate,
      end: this.endDate,
      className: this.radios,
      id: this.events.length,
    });
    this.addModal.hide();
    this.radios = "bg-danger";
    (this.eventTitle = undefined),
      (this.eventDescription = undefined),
      (this.eventId = undefined),
      (this.event = undefined);
  }
  deleteEventSweetAlert() {
    this.editModal.hide();
    swal
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn btn-danger",
        cancelButtonClass: "btn btn-secondary",
        confirmButtonText: "Yes, delete it!",
        buttonsStyling: false,
      })
      .then((result) => {
        if (result.value) {
          this.events = this.events.filter(
            (prop) => prop.id + "" !== this.eventId
          );
          this.initCalendar();
          swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            type: "success",
            confirmButtonClass: "btn btn-primary",
            buttonsStyling: false,
          });
        }
      });
    this.radios = "bg-danger";
    (this.eventTitle = undefined),
      (this.eventDescription = undefined),
      (this.eventId = undefined),
      (this.event = undefined);
  }
  updateEvent() {
    this.events = this.events.map((prop, key) => {
      if (prop.id + "" === this.eventId + "") {
        return {
          ...prop,
          title: this.eventTitle,
          className: this.radios,
          description: this.eventDescription,
        };
      } else {
        return prop;
      }
    });
    this.radios = "bg-danger";
    (this.eventTitle = undefined),
      (this.eventDescription = undefined),
      (this.eventId = undefined),
      (this.event = undefined);
    this.initCalendar();
    this.editModal.hide();
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
