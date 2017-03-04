'use strict';

angular.module('case2').controller('KanbanController', function($scope, $rootScope, KanbanManipulator){
	$scope.movoToCase = function(cardIndexCurrent, cardIndexReference, columnIndexOrigin, columnIndexDest, columnIdDest, cardIdCurrent) {
    // Guard case in scope
		$scope.card = $rootScope.kanban[columnIndexOrigin].cards[cardIndexCurrent];

		// Remove case of position
		$rootScope.kanban[columnIndexOrigin].cards.splice(cardIndexCurrent, 1);

		// Add case in the new position
		$rootScope.kanban[columnIndexDest].cards.splice(cardIndexReference, 0, $scope.card);

		// Save database
		$rootScope.saveMoveCase(cardIdCurrent, columnIdDest);

		$rootScope.$apply();
	};

	$scope.addNewCase = function(column) {
		$rootScope.$broadcast('AddNewCase', column);
	}

	$scope.deleteCase = function(column, card) {
		// Coding...
	}

	$scope.renameColumn = function(column, newName) {
		// Coding...
	}
});