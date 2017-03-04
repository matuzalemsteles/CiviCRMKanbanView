
'use strict';

angular.module('case2').factory('KanbanManipulator', function () {
	return {
		addCaseToColumn: function(kanban, column, newCase) {
			angular.forEach(kanban, function(col) {
				if (col.title === column.name) {
					col.items.push(newCase);
				}
			})
		},
		wrapperApi: function(status, cases) {
			let newJson = [];
			angular.forEach(status, function(elem) {
				newJson.push({ "status": elem, "cards": []});
				angular.forEach(cases, function(card) {
					if (elem.value == card.status_id) {
						newJson[newJson.length - 1].cards.push(card);
					}
				});
			});

			return newJson;
		}
	};
});