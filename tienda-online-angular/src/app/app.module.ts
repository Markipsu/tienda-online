import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoService } from './productos/producto.service';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormComponent } from './productos/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginatorComponent } from './paginator/paginator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatInputModule } from '@angular/material/input'
import localeES from '@angular/common/locales/es'
import { registerLocaleData } from '@angular/common';
import { DetalleComponent } from './productos/detalle/detalle.component';
import { MatButtonModule } from '@angular/material/button';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorProviders } from './auth.interceptor';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AdminGuard } from './admin/admin.guard';
import { UserGuard } from './user/user.guard';
import { ServerErrorInterceptor } from './errors/ErrorInterceptor';
import { User } from './signup/user';
import { CarritoComponent } from './carrito/carrito.component';
import { VentasComponent } from './ventas/ventas.component';
import { VentaService } from './ventas/ventas.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


registerLocaleData(localeES, 'es')
const routes: Routes = [
  { path: '', redirectTo: '/productos', pathMatch: 'full' },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/page/:page', component: ProductosComponent },
  { path: 'productos/form', component: FormComponent },
  { path: 'productos/form/:id', component: FormComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'usuarios/:id/ventas', component: VentasComponent },
  { path: 'usuarios/:id/carrito', component: CarritoComponent },
  { path: 'admin', component: AdminComponent,canActivate:[AdminGuard]},
  { path: 'user-dashboard', component: UserComponent,canActivate:[UserGuard]},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductosComponent,
    FormComponent,
    PaginatorComponent,
    DetalleComponent,
    SignupComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    CarritoComponent,
    VentasComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    FontAwesomeModule,
  ],
  providers: [
    ProductoService,
    VentaService,
    authInterceptorProviders,
    { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
