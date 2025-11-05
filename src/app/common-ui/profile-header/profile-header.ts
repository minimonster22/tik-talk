import { Component, input } from '@angular/core';
import { Profile } from '../../data/interfaces/profile.interface';
import { ImageUrlPipe } from '../../helpers/pipes/image-url-pipe';

@Component({
  selector: 'app-profile-header',
  imports: [ImageUrlPipe],
  templateUrl: './profile-header.html',
  styleUrl: './profile-header.scss',
})
export class ProfileHeader {
  profile = input<Profile>();
}
