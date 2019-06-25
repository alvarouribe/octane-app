import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ComponentBasicsComponent extends Component {
  //Computed example ==>
  @tracked firstName = this.args.firstName || '';
  @tracked lastName = this.args.lastName || '';

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  //Computed example <==

  myProperty = {
    status: 'status of my property inside of component definition'
  }

  // LifeCycle only
  constructor(owner, args) {
    super(owner, args);
    console.log('## LifeCycle constructor ## from ComponentBasicsComponent this.args', this.args);
  }
  
  // LifeCycle only
  willDestroy() {
    console.log('## LifeCycle willDestroy ##');
  }

  @action
  hoverAction() {
    console.log('hoverAction this', this);
  }

  @action
  didInsertAction(element) {
    console.log('didInsertAction', element);
  }
  
}
