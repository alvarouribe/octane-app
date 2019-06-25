import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TrackedExampleComponent extends Component {
  @tracked language = 'en';

  get greeting() {
    switch (this.language) {
      case 'en':
        return 'Hello';
      case 'de':
        return 'Hallo';
      case 'es':
        return 'Hola';
    }
  }

  @action
  updateLanguage(event) {
    this.language = event.target.value;
  }
}
