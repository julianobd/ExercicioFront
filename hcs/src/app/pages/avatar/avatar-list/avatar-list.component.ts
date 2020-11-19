import { Component, OnInit } from '@angular/core';

import { ResponseAvatar } from 'src/app/core/models/avatar.model';
import { AvatarListService } from '../../../core/services/avatar-list.service'

@Component({
  selector: 'app-avatar-list',
  templateUrl: './avatar-list.component.html',
  styleUrls: ['./avatar-list.component.scss']
})
export class AvatarListComponent implements OnInit {

  reponseAvatar: ResponseAvatar;

  constructor(private avatarService: AvatarListService) { }

  ngOnInit(): void {
    this.avatarService
      .getAvatar()
      .subscribe(res => this.reponseAvatar = res)
  }
}
