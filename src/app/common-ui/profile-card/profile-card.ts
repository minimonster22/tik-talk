import { Component, Input } from '@angular/core';
import { Profile } from '../../data/interfaces/profile.interface';
import { ImageUrlPipe } from '../../helpers/pipes/image-url-pipe';

@Component({
  selector: 'app-profile-card',
  imports: [ImageUrlPipe],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.scss',
})
export class ProfileCard {
  @Input() profile!: Profile;
}
