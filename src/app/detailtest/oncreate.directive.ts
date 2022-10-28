import { Directive, Output, EventEmitter, Input, SimpleChange} from '@angular/core';

@Directive({
  selector: '[appOncreate]'
})
export class OncreateDirective {

  
  @Output() onCreate: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}
  ngOnInit() {      
     this.onCreate.emit('dummy'); 
  } 

}
