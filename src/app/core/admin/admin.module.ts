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
import { RatingModule } from 'ngx-bootstrap/rating';

import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ReportComponent } from './report/report.component';
import { PegawaiPenubuhanComponent } from './pegawai-penubuhan/pegawai-penubuhan.component';
import { PegawaiDaftarKetuaComponent } from './pegawai-daftar-ketua/pegawai-daftar-ketua.component';
import { PegawaiUrusSyarikatComponent } from './pegawai-urus-syarikat/pegawai-urus-syarikat.component';
import { PegawaiDaftarInstitusiComponent } from './pegawai-daftar-institusi/pegawai-daftar-institusi.component';
import { PegawaiUrusPermitComponent } from './pegawai-urus-permit/pegawai-urus-permit.component';
import { PegawaiPemantauanComponent } from './pegawai-pemantauan/pegawai-pemantauan.component';
import { PegawaiPenguatkuasaanComponent } from './pegawai-penguatkuasaan/pegawai-penguatkuasaan.component';
import { PegawaiKawalanPenggunaComponent } from './pegawai-kawalan-pengguna/pegawai-kawalan-pengguna.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ManagementAuditComponent,
    ManagementUserComponent,
    ReportComponent,
    PegawaiPenubuhanComponent,
    PegawaiDaftarKetuaComponent,
    PegawaiUrusSyarikatComponent,
    PegawaiDaftarInstitusiComponent,
    PegawaiUrusPermitComponent,
    PegawaiPemantauanComponent,
    PegawaiPenguatkuasaanComponent,
    PegawaiKawalanPenggunaComponent
  ],
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
    RouterModule.forChild(AdminRoutes),
    MatStepperModule,
    CdkStepperModule,
    RatingModule.forRoot(),
  ]
})
export class AdminModule { }
