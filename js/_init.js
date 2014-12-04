var myApp = angular.module('myApp', []);


myApp.controller('main', ['$scope', function ($scope) {
}]);


myApp.controller('cntrl1', ['$scope', 'modal', function ($scope, modal) {

	$scope.m = {
		mess: 'Hello'
	}
	$scope.action = function () {
		modal.show($scope.m);
	}

}]);

myApp.controller('cntrl2', ['$scope', 'modal', function ($scope, modal) {
	$scope.m = {
		mess: 'Word'
	}
	$scope.action = function () {
		modal.show($scope.m);
	}
}]);

myApp
	.directive('modal', function (modal) {
		var arr = modal.arr;
		var arrEl = modal.arrEl
		return {
			restrict: 'E',
			link: function (scope, el, attr, cntrl) {
				scope.arr = arr
				modal.show = function (m) {
					arr.push(m)
					scope.show = true
				}
			},
			templateUrl: 'template/modal.html'
		}
	})
	.directive('templateModal', function (modal, $timeout) {
		function clearArr(arr, index) {
			index = parseFloat(index)
			arr.splice(index, 1)
		}

		return {
			restrict: 'A',
			link: function (scope, el, attr, cntrl) {
				scope.show = true;
				scope.close = function () {
					var n = attr.n
					console.log(attr.n)
					clearArr(modal.arr, n)



					console.log(modal.arr)
				}
			},
			controller: function ($scope) {

			}
		}
	})


myApp.factory('modal', function () {
	return {
		show: function (el, attr) {

		},
		arr: []
	}
})