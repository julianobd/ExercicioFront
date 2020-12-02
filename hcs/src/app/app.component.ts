import { AuthGuard } from './guards/auth.guard';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hcs';

  showHeader: boolean = false;

  constructor(private auth: AuthGuard) {}

  ngOnInit(): void {
    this.auth.showHeader.subscribe(
      show => this.showHeader = show
    );

  }

}
