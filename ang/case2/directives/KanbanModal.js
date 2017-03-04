'use strict';

angular.module('case2').directive('kanbanModal', function () {
	return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      scope.title = attrs.title;
      
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    template: "<div class='ng-modal' ng-show='show'>" + 
        "<div class='ng-modal-overlay' ng-click='hideModal()'></div>" +
        "<div class='ng-modal-dialog' ng-style='dialogStyle'>" +
          "<div class='ng-modal-header'><h3>New case at {{title}}</h3></div>" +
          "<div class='ng-modal-close' ng-click='hideModal()'>X</div>" +
          "<div class='ng-modal-dialog-content' ng-transclude></div>" +
        "</div>" +
    "</div>"
  };
});