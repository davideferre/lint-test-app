import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  get appName() {
    const foo = 'bar';
    return foo;
  }
}
