import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ButtonWithConfirmation extends Component {
    @tracked testText = this.args.testText;

    @action
    launchConfirmDialog() {
        this.args.clintonArgues('hola');
    }

}