import { Observable, Subject } from 'rxjs';
import { inject } from 'aurelia-framework';

@inject(Element)
export class App {
  constructor(element) {
    this.element = element;
    this.message = 'Hello World!';
    this.observable = Observable.create(function(observer) {
      observer.next('Simon');
      observer.next('Jen');
      observer.next('Sergi');
      observer.complete(); // We are done
    });
    // this.allMoves = Observable.fromEvent(document, 'mousemove')
    // this.allMoves.subscribe(function(e) {
    //   console.log(e.clientX, e.clientY);
    // });
    this.subject = new Subject();
    this.subject.subscribe(
      next => console.log("Subject: ", next),
      error => console.log("Error: ", error),
      () => console.log("Done!")
    )
  }

  subjectTest() {
    this.subject.next("Hello");
    this.subject.next("world");
    this.subject.complete();
  }

  subscribe() {
    this.observable.subscribe(
      next => console.log("Next:", next),
      error => console.log("Error:", error),
      () => console.log("Done!")
    )
  }
}
