import {inject} from 'aurelia-framework';

@inject(Element)
export class NumberCustomAttribute {
  constructor(element) {
    this.element = element;
  }

  valueChanged(newValue, oldValue) {

  }
}

