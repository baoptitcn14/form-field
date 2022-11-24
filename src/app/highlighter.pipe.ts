import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'highlighter'
})
export class HighlighterPipe implements PipeTransform {

  constructor(private dom: DomSanitizer) {}

  transform(value: any, arg: any): unknown {
    if (!arg) return value;
    const re = new RegExp(arg, 'igm');
    value = value.replace(re, '<span class="highlighted-text">$&<span>');
    // console.log(value);
    return this.dom.bypassSecurityTrustHtml(value);
  }

}
