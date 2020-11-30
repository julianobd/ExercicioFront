import { Component, OnInit, ViewChild } from '@angular/core';

import { ResponseAvatar } from 'src/app/core/models/avatar.model';
import { AvatarListService } from '../../../core/services/avatar-list.service'
import { AvatarEditComponent } from '../avatar-edit/avatar-edit.component';


@Component({
  selector: 'app-avatar-list',
  templateUrl: './avatar-list.component.html',
  styleUrls: ['./avatar-list.component.scss']
})
export class AvatarListComponent implements OnInit {


  avatar: ResponseAvatar[];

  displayedColumns: string[] = [
    'health',
    'armor',
    'hungry',
    'title',
    'jobId',
    'leader',
    'experience',
    'money',
    'statusPoint',
    'strength',
    'endurance',
    'agility',
    'accuracy',
    'action'
  ]

  responseAvatar: ResponseAvatar;

  constructor(
    private avatarService: AvatarListService
    ) { }

  ngOnInit(): void {
    this.avatarService
      .getAvatar()
      .subscribe(res => this.responseAvatar = res)
  }









}
