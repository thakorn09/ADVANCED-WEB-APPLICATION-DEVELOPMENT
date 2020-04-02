import { Component, OnInit, ViewChild, OnChanges,
        AfterContentInit, AfterContentChecked, AfterViewInit,
        AfterViewChecked, OnDestroy, DoCheck } from '@angular/core';
import { ChildComponent } from '../child/child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})


export class ParentComponent implements OnInit,
 OnChanges,
 DoCheck,
 AfterContentInit,
 AfterContentChecked,
 AfterViewInit,
 AfterViewChecked,
 OnDestroy{

  @ViewChild(ChildComponent)
  childComponent: ChildComponent;

  parentData: number;
  childData: number;
  textMessage: string;
  status: string;
  showChild: boolean = true;

  constructor() { console.log('Consrtucktor Work!')}

  ngOnChanges(){
    console.log('ngOnChanges Work!');
  }

  ngDoCheck(){
    console.log(this.textMessage);
    console.log('ngDoCheck Work!');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit Work!');
  }

  ngAfterContentChecked(){
    if(this.textMessage == "B6012755"){
      this.status = "Your ID is OK";
    }
    else{
      this.status = "Error!";
    }
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
    this.parentData = 0;
  }

  onClick2Child(){
    this.parentData += 1;
  }

  receiveData($event){
    this.childData = $event;
  }

  onClickViewChild(){
    this.childComponent.onClick2Parent();
  }

  update(){
    this.showChild = !this.showChild;
  }
}
