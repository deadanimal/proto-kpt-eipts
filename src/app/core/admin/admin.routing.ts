import { Routes } from '@angular/router';
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

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },

            {
                path: 'penubuhan',
                component: PegawaiPenubuhanComponent
            },
            {
                path: 'daftar-ketua-eksekutif',
                component: PegawaiDaftarKetuaComponent
            },
            {
                path: 'urus-berkenaan-syarikat',
                component: PegawaiUrusSyarikatComponent
            },
            {
                path: 'daftar-institusi',
                component: PegawaiDaftarInstitusiComponent
            },
            {
                path: 'urus-permit',
                component: PegawaiUrusPermitComponent
            },
            {
                path: 'pantau',
                component: PegawaiPemantauanComponent
            },
            {
                path: 'kuatkuasa',
                component: PegawaiPenguatkuasaanComponent
            },
            {
                path: 'urus-sistem',
                children: [
                    {
                        path: 'kawalan-pengguna',
                        component: ManagementUserComponent
                    },
                    {
                        path: 'jejak-audit',
                        component: ManagementAuditComponent
                    }
                ]
            },
            {
                path: 'laporan',
                component: ReportComponent
            },

            {
                path: 'management',
                children: [
                    {
                        path: 'audit-trails',
                        component: ManagementAuditComponent
                    },
                    {
                        path: 'user',
                        component: ManagementUserComponent
                    }
                ]
            },
        ]
    }
]