import { Component, inject } from '@angular/core';
import { SvgIcon } from '../svg-icon/svg-icon';
import { SubscriberCard } from './subscriber-card/subscriber-card';
import { RouterLink } from '@angular/router';
import { ProfileService } from '../../data/services/profile.services';
import { AsyncPipe } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import { ImageUrlPipe } from '../../helpers/pipes/image-url-pipe';

@Component({
  selector: 'app-sidebar',
  imports: [SvgIcon, SubscriberCard, RouterLink, AsyncPipe, ImageUrlPipe],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  profileService = inject(ProfileService);

  subscribers$ = this.profileService.getSubscribersShortList();

  me = this.profileService.me;

  menuItems = [
    {
      label: 'Моя страница',
      icon: 'home',
      link: 'profile/me',
    },
    {
      label: 'Чаты',
      icon: 'chat',
      link: 'chats',
    },
    {
      label: 'Поиск',
      icon: 'search',
      link: 'search',
    },
  ];

  ngOnInit() {
    firstValueFrom(this.profileService.getMe());
  }
}
