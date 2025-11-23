import { Component, effect, inject } from '@angular/core';
import { ProfileHeader } from '../../common-ui/profile-header/profile-header';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProfileService } from '../../data/services/profile.services';
import { firstValueFrom } from 'rxjs';
import { Profile } from '../../data/interfaces/profile.interface';

@Component({
  selector: 'app-setting-page',
  imports: [ProfileHeader, ReactiveFormsModule],
  templateUrl: './setting-page.html',
  styleUrl: './setting-page.scss',
})
export class SettingPage {
  fb = inject(FormBuilder);
  profileService = inject(ProfileService);

  form = this.fb.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: this.fb.control({ value: '', disabled: true }, { nonNullable: true }),
    description: [''],
    stack: this.fb.control<string[]>([], { nonNullable: true }),
  });

  constructor() {
    effect(() => {
      const me = this.profileService.me();
      if (!me) return;

      this.form.patchValue({
        ...me,
        stack: this.splitStack(me.stack),
      });
    });
  }

  onSave() {
    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();

    if (this.form.invalid) return;

    const raw = this.form.getRawValue();

    const merged = this.mergeStack(raw.stack);
    const normalizedStack: string[] = typeof merged === 'string' ? this.splitStack(merged) : merged;

    const payload: Partial<Profile> = {
      ...raw,
      stack: normalizedStack,
    };

    firstValueFrom(this.profileService.patchProfile(payload));
  }

  splitStack(stack: string | null | string[]): string[] {
    if (!stack) return [];
    if (Array.isArray(stack)) return stack;
    return stack.split(',');
  }

  mergeStack(stack: string | null | string[]) {
    if (!stack) return '';
    if (Array.isArray(stack)) return stack.join(',');
    return stack.split(',');
  }
}
