'use strict';

angular.module('case2').controller('KanbanCardController', function($scope, $rootScope, KanbanManipulator){
	$scope.master = {image: null, id: '', name: '', list: [{title: 'Owner', subtitle: '', link: '#'}, {title: 'NO OF ACTIVITIES', subtitle: '', link: '#'}, {title: 'CASE OPEN DATE', subtitle: '', link: null}]};
	$scope.newCase = {};
	$scope.columnName = null;
	$scope.showNewCase = false;

	$rootScope.$on('AddNewCase', function(e, column){
		$scope.columnName = column.name;
		$scope.column = column;
		$scope.newCase = angular.copy($scope.master);

		$scope.showNewCase = true;
	});

	$scope.addNewCase = function(newCase) {
		if (!this.newCaseForm.$valid){
			return false;
		}

		$scope.newCard = angular.copy($scope.master);
		KanbanManipulator.addCaseToColumn($rootScope.kanban, $scope.newCard);

		$scope.showNewCase = false;

		return true;
	}
});