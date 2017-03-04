angular.module('case2').directive('kanbanBoardDrop', function () {
    return {
        link: function ($scope, element, attrs) {
            var dragOverClass = attrs.kanbanBoardDrop;

            cancel = function (event) {
                if (event.preventDefault) {
                    event.preventDefault();
                }

                if (event.stopPropigation) {
                    event.stopPropigation();
                }
                return false;
            };
            
            element.bind('dragover', function (event) {
                cancel(event);
                event.originalEvent.dataTransfer.dropEffect = 'move';
                element.addClass(dragOverClass);                
            });

            element.bind('drop', function (event) {
                cancel(event);
                element.removeClass(dragOverClass);

                let valueEvent = event.originalEvent.dataTransfer.getData("text/plain").split(',');
                let cardIndexCurrent = valueEvent[0];
                let columnIndexOrigin = valueEvent[1];
                let cardIndexReference = event.target.getAttribute('data-index');
                let columnIndexDest = event.currentTarget.getAttribute('data-index');
                let cardIdCurrent = valueEvent[2];
                let columnIdDest = event.currentTarget.getAttribute('id').split('-')[1];

                $scope.movoToCase(cardIndexCurrent, cardIndexReference, columnIndexOrigin, columnIndexDest, columnIdDest, cardIdCurrent);
            });

            element.bind('dragleave', function (event) {
                element.removeClass(dragOverClass);
            });
        }
    };
});