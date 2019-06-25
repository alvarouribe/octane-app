// import Component from '@glimmer/component'; //Mixins needs to be old style components to be able to run like this
import Component from '@ember/component';
import InViewportMixin from 'ember-in-viewport';

export default class TriggerInViewportComponent extends Component.extend(InViewportMixin) {
    didEnterViewport() {
        console.log('didEnterViewport ALERT COMPONENT SEEN!!!');
    }
}
