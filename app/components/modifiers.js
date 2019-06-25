import Component from '@glimmer/component';

export default class ModifiersComponent extends Component {
    handleClick() {
        console.log('action handleClick');
    }
    
    keyPress(a, b) {
        console.log("TurboLog: ModifiersComponent -> keyPress -> a", a);
        console.log("TurboLog: ModifiersComponent -> keyPress -> b", b);
    }
}
