import { Component, Input } from '@angular/core';
import { Profile } from '../../../data/interfaces/profile.interface';
import { ImageUrlPipe } from '../../../helpers/pipes/image-url-pipe';

@Component({
  selector: 'app-subscriber-card',
  imports: [ImageUrlPipe],
  templateUrl: './subscriber-card.html',
  styleUrl: './subscriber-card.scss',
})
export class SubscriberCard {
  @Input() profile!: Profile;
}
