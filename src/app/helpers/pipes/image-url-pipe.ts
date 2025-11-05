import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageUrl',
})
export class ImageUrlPipe implements PipeTransform {
  transform(value: string | null | undefined): string | null {
    if (!value) return null;
    return `https://icherniakov.ru/yt-course/${value}`;
  }
}
