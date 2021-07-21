import { Component, OnInit } from "@angular/core";
import swal from "sweetalert2";
import Dropzone from "dropzone";
Dropzone.autoDiscover = false;

@Component({
  selector: "app-pengguna-daftar-ketua-eksekutif-daftar",
  templateUrl: "./pengguna-daftar-ketua-eksekutif-daftar.component.html",
  styleUrls: ["./pengguna-daftar-ketua-eksekutif-daftar.component.scss"],
})
export class PenggunaDaftarKetuaEksekutifDaftarComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    let currentMultipleFile = undefined;
    // multiple dropzone file - accepts any type of file
    new Dropzone(document.getElementsByClassName("dropzone-multiple")[0], {
      url: "https://",
      thumbnailWidth: null,
      thumbnailHeight: null,
      previewsContainer: document.getElementsByClassName(
        "dz-preview-multiple"
      )[0],
      previewTemplate: document.getElementsByClassName("dz-preview-multiple")[0]
        .innerHTML,
      maxFiles: null,
      acceptedFiles: null,
      init: function () {
        this.on("addedfile", function (file) {
          if (currentMultipleFile) {
          }
          currentMultipleFile = file;
        });
      },
    });
    document.getElementsByClassName("dz-preview-multiple")[0].innerHTML = "";
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
