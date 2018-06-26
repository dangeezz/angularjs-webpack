import angular from "angular";
import HelloController from "./hello.controller";
import helloDirective from "./hello.directive";
import ucfirst from "@app/filters/ucfirst";

const Hello = angular
  .module("hello", [ucfirst])
  .controller("HelloController", HelloController)
  .directive("hello", helloDirective).name;

export default Hello;
