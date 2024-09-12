import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent {
performAction(arg0: string) {
throw new Error('Method not implemented.');
}

    constructor(
      private router: Router
    ){

    }

    showInfo(link : string){
      this.router.navigate([link])
    }

}
