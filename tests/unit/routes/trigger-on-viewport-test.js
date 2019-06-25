import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | trigger-on-viewport', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:trigger-on-viewport');
    assert.ok(route);
  });
});
