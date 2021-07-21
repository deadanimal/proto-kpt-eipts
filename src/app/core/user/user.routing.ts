import { Routes } from '@angular/router';
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

export const UserRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },

            {
                path: 'penubuhan',
                component: PenggunaPenubuhanComponent
            },
            {
                path: 'pendaftaran-ketua-eksekutif',
                children: [
                    {
                        path: 'pendaftaran',
                        component: PenggunaDaftarKetuaEksekutifDaftarComponent
                    },
                    {
                        path: 'pemakluman',
                        component: PenggunaDaftarKetuaEksekutifMaklumComponent
                    }
                ]
            },
            {
                path: 'pendaftaran-institusi',
                component: PenggunaDaftarInstitusiComponent
            },
            {
                path: 'pendaftaran-kursus-pengajian',
                component: PenggunaDaftarKursusPengajianComponent
            },
            {
                path: 'pengurusan-permit',
                children: [
                    {
                        path: 'permohonan',
                        component: PenggunaPengurusanPermitMohonComponent
                    },
                    {
                        path: 'senarai-semak',
                        component: PenggunaPengurusanPermitSemakComponent
                    }
                ]
            },
            {
                path: 'naziran',
                component: PenggunaNaziranComponent
            },
            {
                path: 'aduan',
                component: PenggunaAduanComponent
            },
            {
                path: 'soalan-lazim',
                component: PenggunaFaqComponent
            },
        ]
    }
]