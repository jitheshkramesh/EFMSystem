import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SelectRequiredValidatorDirective } from '../app/shared/select-required-validator.directive';
import { ConfirmEqualValidatorDirective } from '../app/shared/confirm-equal-validator.directive';
import { EmployeeService } from './employees/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DateValueAccessorModule } from 'angular-date-value-accessor';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { ScrollEmployeeComponent } from './employees/scroll-employee.component';
import { SelectEmployeeComponent } from './employees/select-employee.component';
import { ChooseEmployeeComponent } from './employees/choose-employee.component';
import { CreateEmployeeCanDeactivateGuardService } from './employees/create-employee-can-deactivate-guard.service';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { EmployeeFilterPipe } from './employees/employee-filter.pipe';
import { EmployeeListResolverService } from './employees/employee-list-resolver.service';
import { PageNotFoundComponent } from './page-not-found.component';
import { EmployeeDetailsGuardService } from './employees/employee-details-guard.service';
import { AccordionComponent } from './shared/accordion.component';
import { EmployeeGridListComponent } from './reports/employee-grid-list.component';
import { UploadImageComponent } from './employees/upload-image.component';
import { EmployeeSalaryComponent } from './employees/employee-salary.component';
import { SalaryService } from './shared/salary.service';
import { PayrollAdjustmentService } from './shared/payroll-adjustment.service';
import { PayrollAdjustmentComponent } from './transactions/payroll-adjustment.component';
import { PayadjustmentDetailsComponent } from './transactions/payadjustment-details/payadjustment-details.component';
import { PayrollAdjustmentsListComponent } from './transactions/payroll-adjustments-list/payroll-adjustments-list.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentDetailComponent } from './payment-details/payment-detail/payment-detail.component';
import { PaymentDetailListComponent } from './payment-details/payment-detail-list/payment-detail-list.component';
import { PaymentDetailService } from './shared/payment-detail.service';

const appRoutes: Routes = [
  {
    path: 'list',
    component: ListEmployeesComponent,
    resolve: {employeeList:EmployeeListResolverService}
  },
  {
    path: 'display', component: DisplayEmployeeComponent,
    resolve: { employeeList: EmployeeListResolverService }
  },
  {
    path: 'select', component: SelectEmployeeComponent,
    resolve: { employeeList: EmployeeListResolverService }
  },
  {
    path: 'create',
    component: CreateEmployeeComponent,
    canDeactivate: [CreateEmployeeCanDeactivateGuardService]
  },
  {
    path: 'edit/:id',
    component: CreateEmployeeComponent,
    canDeactivate: [CreateEmployeeCanDeactivateGuardService]
  },
  {
    path: 'employees/:id', component: EmployeeDetailsComponent,
    canActivate: [EmployeeDetailsGuardService]
  },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'notfound', component: PageNotFoundComponent },
  {
    path: 'gridEmployee',
    component: EmployeeGridListComponent
  },
  {
    path: 'ImageUpload',
    component: UploadImageComponent
  },
  {
    path: 'EmployeeSalary',
    component: EmployeeSalaryComponent
  }, {
    path: 'Salary', children: [
      { path: '', component: EmployeeSalaryComponent },
      { path: 'saledit/:id', component: EmployeeSalaryComponent }
    ]
  },
  {
    path: 'PayrollAdjustment',
    component: PayrollAdjustmentComponent
  }, {
    path: 'PayAdjustment', children: [
      { path: '', component: PayrollAdjustmentComponent },
      { path: 'PayAdjdedit/:id', component: PayrollAdjustmentComponent }
    ]
  }, {
    path:  'PayAdjdedit/:id', component: PayrollAdjustmentComponent 
  },
  {
    path: 'PayrollAdjustmentDetails',
    component: PayrollAdjustmentsListComponent
  },
  {
    path: 'PaymentDetails',
    component: PaymentDetailsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    DisplayEmployeeComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeeComponent,
    ScrollEmployeeComponent,
    SelectEmployeeComponent,
    ChooseEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeFilterPipe,
    PageNotFoundComponent,
    AccordionComponent,
    EmployeeGridListComponent,
    UploadImageComponent,
    EmployeeSalaryComponent,
    PayrollAdjustmentComponent,
    PayadjustmentDetailsComponent,
    PayrollAdjustmentsListComponent,
    PaymentDetailsComponent,
    PaymentDetailComponent,
    PaymentDetailListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    DateValueAccessorModule,
    ToastrModule.forRoot()
  ],
  providers: [EmployeeService,
    CreateEmployeeCanDeactivateGuardService,
    EmployeeListResolverService,
    EmployeeDetailsGuardService,
    SalaryService,
    PayrollAdjustmentService,
    PaymentDetailService],
  bootstrap: [AppComponent],
  entryComponents:[PayadjustmentDetailsComponent]
})
export class AppModule { }
