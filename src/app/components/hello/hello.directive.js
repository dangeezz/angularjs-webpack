import helloView from './hello.view.html';

export default function helloDirective () {

  return  {
    restrict: 'AE',
    replace: true,
    template: `${helloView}`
  }
}
