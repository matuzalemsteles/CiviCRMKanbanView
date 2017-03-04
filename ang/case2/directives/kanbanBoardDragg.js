angular.module('case2').directive('kanbanBoardDragg', function () {
    return {
        link: function ($scope, element, attrs) {

            element.bind('dragstart', function (event) {
                let columnIndex = event.originalEvent.path[1].getAttribute('data-index');
                let idCase = event.currentTarget.getAttribute('id').split('-')[1];
                event.originalEvent.dataTransfer.setData("text/plain", event.target.getAttribute('data-index') + ',' + columnIndex + ',' + idCase);
            });

            element.bind('drag', function (event) {
                angular.element(event.target).addClass('is-moving');
            });

            element.bind('dragend', function(event) {
                angular.element(event.target).removeClass('is-moving');
            });
        }
    };
});