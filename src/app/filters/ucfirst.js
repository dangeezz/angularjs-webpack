import angular from "angular";

export default angular
  .module("filters.ucfirst", [])
  .filter("ucfirst", function ucfirst() {

    return (input) => {
      if (typeof input !== "string") {
        return input;
      }

      return input[0].toUpperCase() + input.slice(1);
    };
  }).name
