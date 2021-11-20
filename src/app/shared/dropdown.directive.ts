import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropDownDirective {
   @HostBinding('class.open') isOpen = false;
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen =  this.elementRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }
    constructor(private elementRef: ElementRef) {}

}