import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShellComponent } from './shared/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CategoryListComponent } from './pages/categories/category-list/category-list.component';

import {CardModule} from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

import { OrderDetailsComponent } from './pages/orders/order-details/order-details.component';
import { OrderListComponent } from './pages/orders/order-list/order-list.component';
import { CategoriesFormComponent } from './pages/categories/categories-form/categories-form.component';
import { ProductsListComponent } from './pages/products/products-list/products-list.component';
import { ProductsFormComponent } from './pages/products/products-form/products-form.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';

import { CategoriesService } from '@ecommerce-brands/products';
import { JwtInterceptor, UsersModule, UsersService } from '@ecommerce-brands/users';
import { MessageService } from 'primeng/api';
import {ConfirmationService} from 'primeng/api';
import {ColorPickerModule} from 'primeng/colorpicker';
import {InputNumberModule} from 'primeng/inputnumber';
import {DropdownModule} from 'primeng/dropdown';
import {EditorModule} from 'primeng/editor';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputSwitchModule} from 'primeng/inputswitch';
import { TagModule } from 'primeng/tag';
import {InputMaskModule} from 'primeng/inputmask';
import {FieldsetModule} from 'primeng/fieldset';
import { AppRoutingModule } from './app-routing.module';
import { ReviewsListComponent } from './pages/reviews/reviews-list/reviews-list.component';
import {RatingModule} from 'primeng/rating';
import {ChartModule} from 'primeng/chart';
import {FileUploadModule} from 'primeng/fileupload';

import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from "ngx-ui-loader";
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';


const UX_MODULE = [
  CardModule,
  ToastModule,
  InputTextModule,
  TableModule,
  ToolbarModule,
  ButtonModule,
  ConfirmDialogModule,
  ColorPickerModule,
  InputNumberModule,
  DropdownModule,
  InputTextareaModule,
  InputSwitchModule,
  EditorModule,
  TagModule,
  InputSwitchModule,
  InputMaskModule,
  FieldsetModule,
  UsersModule,
  MessagesModule,
  MessageModule
];


@NgModule({
  declarations: [AppComponent, DashboardComponent, ShellComponent, SidebarComponent, CategoryListComponent, CategoriesFormComponent, ProductsListComponent, ProductsFormComponent, UserListComponent, UserFormComponent, OrderListComponent, OrderDetailsComponent, ReviewsListComponent],
  imports: [
    BrowserModule,
    UX_MODULE, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RatingModule,
    ChartModule,
    FileUploadModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
    })
  ],
  providers: [UsersService, CategoriesService, MessageService, ConfirmationService,
              { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}],
  bootstrap: [AppComponent],
  exports: [
    ReviewsListComponent
    ],
})
export class AppModule {}
