import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | tracked-example', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:tracked-example');
    assert.ok(route);
  });
});
