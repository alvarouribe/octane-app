import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('dropdown');
  this.route('d3');
  this.route('basic-component');
  this.route('tracked-example');
  this.route('trigger-on-viewport');
});

export default Router;
