import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DineInComponent } from './pages/dine-in/dine-in.component';
import { StockComponent } from './pages/stock/stock.component';
import { SettingComponent } from './pages/setting/setting.component';
import { UserComponent } from './pages/setting/settings/user/user.component';
import { CategoryComponent } from './pages/setting/settings/category/category.component';
import { RoleComponent } from './pages/setting/settings/role/role.component';
import { IngredientComponent } from './pages/setting/settings/ingredient/ingredient.component';
import { TableComponent } from './pages/setting/settings/table/table.component';
import { AddTableComponent } from './components/add-table/add-table.component';
import { Menu1Component } from './pages/setting/settings/menu1/menu1.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dine-in', component: DineInComponent },
  { path: 'stock', component: StockComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'setting/user', component: UserComponent },
  { path: 'setting/category', component: CategoryComponent },
  { path: 'setting/role', component: RoleComponent },
  { path: 'setting/ingredient', component: IngredientComponent },
  { path: 'setting/menu1', component: Menu1Component },
  { path: 'setting/table', component: TableComponent },
  { path: 'add-table', component: AddTableComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
