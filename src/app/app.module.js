import angular from "angular";
import Hello from "@app/components/hello";
import config from "@app/app.config";
import run from "@app/app.run";
import appView from "@app/app.view.html";

const App = angular
  .module("app", [Hello])
  .config(config)
  .run(run)
  .directive('app', function() {
    return {
      transclude: true,
      restrict: 'AE',
      replace: true,
      template: `${appView}`,
    }
  })

export default App;
