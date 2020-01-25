import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService as AuthGuard } from "../../core/services/guards/auth-guard.service";

import { SearchPanleComponent } from "./search-box/component/search-panel.component";
import { SearchComponent } from "./search.component";

// import { SearchBoxRootComponent } from "./search-box/search-box-root.component";

const routes: Routes = [
  {
    path: "",
    component: SearchComponent,
    children: [
      {
        path: "",
        component: SearchPanleComponent,
        canActivate: [AuthGuard],
        data: {
          breadcrumb: "search",
          breadcrumbs: "search",
          title: "search",
          smallText: "search",
          isHome: true,
          icon: "fa fa-home",
          show: false
        }
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule {}
