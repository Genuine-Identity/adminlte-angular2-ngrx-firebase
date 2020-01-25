// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { Routes, RouterModule } from '@angular/router'
// import { MailLayoutComponent } from './mail-layout.component';
// import { AuthGuardService as AuthGuard } from '../../core/services/guards/auth-guard.service';

// const routes: Routes = [
//   {
//     path: '',
//     component: MailLayoutComponent,
//     children: [
//       {
//         path: '', loadChildren: '../../modules/dashboard/dashboard.module#DashboardModule',
//         canActivate: [AuthGuard]
//       },
//       {
//         path: 'dashboard', loadChildren: '../../modules/dashboard/dashboard.module#DashboardModule',
//         canActivate: [AuthGuard],
//         data: {
//           breadcrumb: 'Dashboard',
//           breadcrumbs: 'Dashboard',
//           title: 'Dashboard Title',
//           smallText: 'Dashboard Small Text',
//           isHome: true,
//           icon: 'fa fa-home',
//           show: false
//         },
//       },
//       {
//         path: 'admin', loadChildren: '../../modules/admin/admin.module#AdminModule',
//         canActivate: [AuthGuard],
//         data: {
//           breadcrumb: 'Admin',
//           breadcrumbs: 'Admin',
//           title: 'Admin Title',
//           smallText: 'Admin Small Text',
//           isHome: true,
//           icon: 'fa fa-home',
//           show: false
//         },
//       }
//     ]
//   }
// ];



// @NgModule({
//   imports: [
//     RouterModule.forChild(routes),
//   ],
//   exports: [
//     RouterModule
//   ]
// })
// export class MailLayoutRoutingModule { }