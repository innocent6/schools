import { Component } from '@angular/core';
import { AccountService } from './services';
import { User } from './models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shule';

  user?: User | null;

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe(x => this.user = x);
}

}
