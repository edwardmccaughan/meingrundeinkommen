(function () {
    'use strict';

    angular
        .module('app.support')
        .directive('mgeCBarFacts', [Directive]);

    function Directive() {
        return {
            restrict: 'E',
            templateUrl: '/assets/support/_cBar_facts.html',
            controller: function ($scope, StatsService) {
                StatsService.then(function(response) {
                    $scope.userCount = response.data.crowdbar_users;
                    $scope.dailyIncome = response.data.prediction.avg_daily_commission_crowdbar;
                },function(){
                    $scope.userCount = 18000;
                    $scope.dailyIncome = 150;
                });

            }
        }
    };
}());