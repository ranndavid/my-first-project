import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { DineInComponent } from './pages/dine-in/dine-in.component';
import { StockComponent } from './pages/stock/stock.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingComponent } from './pages/setting/setting.component';
import { UserComponent } from './pages/setting/settings/user/user.component';
import { CategoryComponent } from './pages/setting/settings/category/category.component';
import { RoleComponent } from './pages/setting/settings/role/role.component';
import { IngredientComponent } from './pages/setting/settings/ingredient/ingredient.component';
import { TableComponent } from './pages/setting/settings/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddTableComponent } from './components/add-table/add-table.component';
import { AddIngredientComponent } from './components/add-ingredient/add-ingredient.component';
import { Menu1Component } from './pages/setting/settings/menu1/menu1.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    DineInComponent,
    StockComponent,
    DashboardComponent,
    SettingComponent,
    UserComponent,
    CategoryComponent,
    RoleComponent,
    TableComponent,
    AddTableComponent,
    IngredientComponent,
    AddIngredientComponent,
    Menu1Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
 
  ],
  
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
  
})

export class AppModule { }
