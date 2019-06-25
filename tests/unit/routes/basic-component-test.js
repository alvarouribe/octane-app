import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | basic-component', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:basic-component');
    assert.ok(route);
  });
});
