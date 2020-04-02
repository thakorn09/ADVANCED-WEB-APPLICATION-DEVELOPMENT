import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, 
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  @Input() parentData: number;

  @Output() messageEvent = new EventEmitter<number>();

  childData: number;

  constructor() { console.log('Consrtucktor Work!')}

  ngOnChanges(){
    console.log('ngOnChanges Work!');
  }

  ngDoCheck(){
    console.log('ngDoCheck Work!');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit Work!');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked Work!');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit Work!');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked Work!');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy Work!');
  }

  ngOnInit(): void {
    this.childData = 0;
  }

  onClick2Parent(){
    this.childData += 1;
    this.messageEvent.emit(this.childData);
  }

}
