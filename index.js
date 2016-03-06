var app = angular.module('app', []);

// Prefix directive
app.directive('prefix', [function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, modelCtrl) {
            // This will execute first time, convert model value into format that shall be displayed in input
            modelCtrl.$formatters.push(function (value) {
                if (value && typeof value === 'string' && value.indexOf(modelCtrl.$modelValue) === 0) {
                    return value.substring(attrs.prefix.length, value.length);
                }
            });

            // This will execute every tame user types in input
            modelCtrl.$parsers.push(function prependPrefix(value) {
                return attrs.prefix && value ? attrs.prefix + value : null;
            });
        }
    };
}]);

// Example controller
angular.module('app').controller('exampleCtrl', ['$scope', function ($scope) {
    // Default phone number
    $scope.phoneNumber = '995112233';
}]);