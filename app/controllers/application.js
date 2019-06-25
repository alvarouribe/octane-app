import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
    @tracked testText = 'This is a test text';

    @action 
    updateSearchParams(data) {
        alert('Application controller says:' + data);
    }
}
