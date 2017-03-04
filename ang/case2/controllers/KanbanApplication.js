(function(angular, $, _) {

  angular.module('case2').config(function($routeProvider) {
      $routeProvider.when('/case2', {
        controller: 'ApplicationController',
        templateUrl: '~/case2/CaseCtrl.html',

        resolve: {
          kanbanCase: function(crmApi){
            return crmApi('Case', 'get', {
              "api_Contact_get": {
                "api_Relationship_get": {},
                "return": ["contact_id", "display_name"]
              },
              "api_Activity_get": {}
            });
          },
          kanbanStatus: function(crmApi) {
            return crmApi('OptionValue', 'get', {
              "return": ["id", "option_group_id", "label", "value", "name"],
              "option_group_id": "case_status"
            });
          }
        }
      });
    }
  );

  angular.module('case2').controller('ApplicationController', function($scope, $rootScope, crmApi, crmStatus, KanbanManipulator, kanbanCase, kanbanStatus) {
    var ts = $scope.ts = CRM.ts('case2');
    
    $rootScope.kanban = KanbanManipulator.wrapperApi(kanbanStatus.values, kanbanCase.values);

    $rootScope.saveMoveCase = function(cardIdCurrent, idColumnDest) {
      return crmStatus(
        {start: ts('Saving...'), success: ts('Saved')},
        crmApi('Case', 'create', {
          "id": cardIdCurrent,
          "status_id": idColumnDest
        })
      )
    };
  });

})(angular, CRM.$, CRM._);
