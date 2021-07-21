import {
  Component,
  OnInit,
  NgZone,
  OnDestroy,
  TemplateRef,
} from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import swal from "sweetalert2";

@Component({
  selector: "app-pengguna-aduan",
  templateUrl: "./pengguna-aduan.component.html",
  styleUrls: ["./pengguna-aduan.component.scss"],
})
export class PenggunaAduanComponent implements OnInit {
  // Modal
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  ngOnInit() {}

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
