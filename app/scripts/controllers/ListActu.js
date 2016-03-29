angular.module('transaldisAngularGruntApp')
.controller('ListActu',['$scope','$http', function($scope,$http) {
  $scope.actus = [];
  $http.get('http://localhost/angular/Transaldis_Angular_Grunt/app/admin/api/api.php/actualite/?order=actu_id,desc&transform=1')
  .success(function (data) {
    $scope.actus = data.actualite;
  });
}]);
