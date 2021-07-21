import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule, 
  TabsModule,
  TooltipModule
} from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { CdkStepperModule } from "@angular/cdk/stepper";
import { MatStepperModule } from "@angular/material/stepper";
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { RatingModule } from 'ngx-bootstrap/rating';

import { RouterModule } from '@angular/router';
import { UserRoutes } from './user.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PenggunaPenubuhanComponent } from './pengguna-penubuhan/pengguna-penubuhan.component';
import { PenggunaDaftarKetuaEksekutifComponent } from './pengguna-daftar-ketua-eksekutif/pengguna-daftar-ketua-eksekutif.component';
import { PenggunaDaftarInstitusiComponent } from './pengguna-daftar-institusi/pengguna-daftar-institusi.component';
import { PenggunaDaftarKursusPengajianComponent } from './pengguna-daftar-kursus-pengajian/pengguna-daftar-kursus-pengajian.component';
import { PenggunaPengurusanPermitComponent } from './pengguna-pengurusan-permit/pengguna-pengurusan-permit.component';
import { PenggunaNaziranComponent } from './pengguna-naziran/pengguna-naziran.component';
import { PenggunaAduanComponent } from './pengguna-aduan/pengguna-aduan.component';
import { PenggunaFaqComponent } from './pengguna-faq/pengguna-faq.component';
import { PenggunaDaftarKetuaEksekutifDaftarComponent } from './pengguna-daftar-ketua-eksekutif-daftar/pengguna-daftar-ketua-eksekutif-daftar.component';
import { PenggunaDaftarKetuaEksekutifMaklumComponent } from './pengguna-daftar-ketua-eksekutif-maklum/pengguna-daftar-ketua-eksekutif-maklum.component';
import { PenggunaPengurusanPermitMohonComponent } from './pengguna-pengurusan-permit-mohon/pengguna-pengurusan-permit-mohon.component';
import { PenggunaPengurusanPermitSemakComponent } from './pengguna-pengurusan-permit-semak/pengguna-pengurusan-permit-semak.component';

@NgModule({
  declarations: [DashboardComponent, PenggunaPenubuhanComponent, PenggunaDaftarKetuaEksekutifComponent, PenggunaDaftarInstitusiComponent, PenggunaDaftarKursusPengajianComponent, PenggunaPengurusanPermitComponent, PenggunaNaziranComponent, PenggunaAduanComponent, PenggunaFaqComponent, PenggunaDaftarKetuaEksekutifDaftarComponent, PenggunaDaftarKetuaEksekutifMaklumComponent, PenggunaPengurusanPermitMohonComponent, PenggunaPengurusanPermitSemakComponent],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(UserRoutes),
    MatStepperModule,
    CdkStepperModule,
    CarouselModule.forRoot(),
    RatingModule.forRoot(),
  ]
})
export class UserModule { }
