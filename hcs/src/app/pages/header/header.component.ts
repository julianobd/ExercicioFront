import { AuthGuard } from './../../guards/auth.guard';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private material: MaterialModule,
    private router: Router,
    private auth: AuthGuard
  ) { }

  ngOnInit(): void {
  }

  logout() {
    sessionStorage.clear()
    this.auth.logout();
    this.router.navigate(['/login']);
    console.log('fazendo logout');
  }

}
