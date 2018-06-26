class HelloController {
  constructor($scope) {
    this.greeting = 'angularJS + webpack';
    this._scope = $scope;
  }
}

HelloController.$inject = ['$scope'];

export default HelloController;
