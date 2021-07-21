export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    children?: ChildrenItems2[];
    isCollapsed?: boolean;
}
export interface ChildrenItems2 {
    path?: string;
    title?: string;
    type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [
  // {
  //   path: '/admin/dashboard',
  //   title: 'Dashboard',
  //   type: 'link',
  //   icontype: 'fas fa-home text-purple'
  // },

  {
    path: '/admin/penubuhan',
    title: 'Penubuhan',
    type: 'link',
    icontype: 'fab fa-wpforms text-dark'
  },
  {
    path: '/admin/daftar-ketua-eksekutif',
    title: 'Pendaftaran Ketua Eksekutif',
    type: 'link',
    icontype: 'fas fa-clipboard-list text-dark'
  },
  {
    path: '/admin/urus-berkenaan-syarikat',
    title: 'Pengurusan Berkenaan Syarikat',
    type: 'link',
    icontype: 'fas fa-building text-dark'
  },
  {
    path: '/admin/daftar-institusi',
    title: 'Pendaftaran Insitusi',
    type: 'link',
    icontype: 'fas fa-school text-dark'
  },
  // {
  //   path: '/admin/urus-permit',
  //   title: 'Pengurusan Permit',
  //   type: 'link',
  //   icontype: 'fas fa-file-invoice-dollar text-dark'
  // },
  // {
  //   path: '/admin/pantau',
  //   title: 'Pemantauan',
  //   type: 'link',
  //   icontype: 'fas fa-binoculars text-dark'
  // },
  // {
  //   path: '/admin/kuatkuasa',
  //   title: 'Penguatkuasaan',
  //   type: 'link',
  //   icontype: 'fas fa-cogs text-dark'
  // },
  {
    path: '/admin/urus-sistem',
    title: 'Pengurusan Sistem',
    type: 'sub',
    icontype: 'fas fa-file-invoice text-dark',
    collapse: 'urus-sistem',
    isCollapsed: true,
    children: [
      { path: 'kawalan-pengguna', title: 'Kawalan Pengguna', type: 'link' },
      { path: 'jejak-audit', title: 'Jejak Audit', type: 'link' }
    ]
  },
  {
    path: '/admin/laporan',
    title: 'Laporan',
    type: 'link',
    icontype: 'fas fa-chart-bar text-dark'
  },

  // {
  //   path: '/admin/management',
  //   title: 'Management',
  //   type: 'sub',
  //   icontype: 'fas fa-file-invoice text-pink',
  //   collapse: 'management',
  //   isCollapsed: true,
  //   children: [
  //     { path: 'audit-trails', title: 'Audit Trails', type: 'link' },
  //     { path: 'user', title: 'User', type: 'link' }
  //   ]
  // },
  /*
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }
  */
];

export const ROUTESUSER: RouteInfo[] = [
  // {
  //   path: '/user/dashboard',
  //   title: 'Dashboard',
  //   type: 'link',
  //   icontype: 'fas fa-desktop text-warning'
  // },

  {
    path: '/user/penubuhan',
    title: 'Penubuhan',
    type: 'link',
    icontype: 'fab fa-wpforms text-dark'
  },
  {
    path: '/user/pendaftaran-ketua-eksekutif',
    title: 'Pendaftaran Ketua Eksekutif',
    type: 'sub',
    icontype: 'fas fa-clipboard-list text-dark',
    collapse: 'pendaftaran-ketua-eksekutif',
    isCollapsed: true,
    children: [
      { path: 'pendaftaran', title: 'Pendaftaran', type: 'link' },
      { path: 'pemakluman', title: 'Pemakluman', type: 'link' }
    ]
  },
  {
    path: '/user/pendaftaran-institusi',
    title: 'Pendaftaran Institusi',
    type: 'link',
    icontype: 'fas fa-school text-dark'
  },
  {
    path: '/user/pendaftaran-kursus-pengajian',
    title: 'Pendaftaran Kursus Pengajian',
    type: 'link',
    icontype: 'fas fa-calendar-alt text-dark'
  },
  {
    path: '/user/pengurusan-permit',
    title: 'Pengurusan Permit',
    type: 'sub',
    icontype: 'fas fa-file-invoice-dollar text-dark',
    collapse: 'pengurusan-permit',
    isCollapsed: true,
    children: [
      { path: 'permohonan', title: 'Permohonan', type: 'link' },
      { path: 'senarai-semak', title: 'Senarai Semak', type: 'link' }
    ]
  },
  {
    path: '/user/naziran',
    title: 'Naziran',
    type: 'link',
    icontype: 'fas fa-user-edit text-dark'
  },
  {
    path: '/user/aduan',
    title: 'Aduan/Maklumat',
    type: 'link',
    icontype: 'fas fa-comments text-dark'
  },
  {
    path: '/user/soalan-lazim',
    title: 'Soalan Lazim',
    type: 'link',
    icontype: 'fas fa-question-circle text-dark'
  },

  
  /*,
  {
    path: '/maintenance',
    title: 'Maintenance',
    type: 'link',
    icontype: 'fas fa-cogs text-orange'
  }*/
  /*{
    path: '/settings',
    title: 'Settings',
    type: 'link',
    icontype: 'fas fa-sliders-h text-blue'
  }*/
];