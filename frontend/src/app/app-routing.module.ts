import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SidebarComponent } from "./components/sidebar/sidebar.component"
import { NavbarComponent } from "./components/navbar/navbar.component"
import { FooterComponent } from "./components/footer/footer.component"
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { TableComponent } from "./components/content/Table/table.component";
import { PaginationComponent } from "./components/content/Pagination/pagination.component";
import { PublisherListComponent } from "./components/publishers/publisher-list.component";
import { PcRegistrationComponent } from "./components/pc-registration/pc-registration.component";
import { SubscriberAddComponent } from "./components/subscribers/subscriber-add/subscriber-add.component";
import { SubscriberListComponent } from "./components/subscribers/subscriber-list/subscriber-list.component";
import { ModalComponent } from "./components/content/Modal/modal.component";
import { SearchComponent } from "./components/content/Search/search.component";
import { AuthGuard } from "./auth/auth.guard";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { BreadcrumbComponent } from "./components/content/Breadcrumb/breadcrumb.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "home", redirectTo: "publishers", pathMatch: "full", data: { breadcrumb: 'Home' } },
  {
    path: "publishers",
    component: PublisherListComponent,
    data: { breadcrumb: 'Publishers' },
    /* children: [
      {
        path: "publishers/add",
        component: PublisherListComponent,
        data: { breadcrumb: 'Add Publishers' },
      }
    ] */
  },
  {
    path: "publishers/add",
    component: PublisherListComponent,
    data: { breadcrumb: 'Add Publishers' }
  },
  {
    path: "subscribers",
    component: SubscriberListComponent,
    canActivate: [AuthGuard],
    data: { role: "ROLE_ADMIN", breadcrumb: 'Subscribers' }
  },
  {
    path: "subscribers/add",
    component: SubscriberAddComponent,
    canActivate: [AuthGuard],
    data: { role: "ROLE_ADMIN", breadcrumb: 'Add Subscribers' }
  },
  { path: "pcRegistrationForm", component: PcRegistrationComponent },
  { path: '**', redirectTo: '/404', pathMatch: "full" },
  { path: '404', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const appRoutingComponents = [
  SidebarComponent,
  NavbarComponent,
  FooterComponent,
  LoginComponent,
  PcRegistrationComponent,
  SubscriberAddComponent,
  SubscriberListComponent,
  PublisherListComponent,
  HomeComponent,
  TableComponent,
  PaginationComponent,
  ModalComponent,
  SearchComponent,
  NotFoundComponent,
  BreadcrumbComponent,
]