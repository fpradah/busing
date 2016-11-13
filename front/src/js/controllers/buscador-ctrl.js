/**
 * Master Controller
 */

angular.module('busingApp')
    .controller('BuscadorCtrl', ['$scope', '$state', 'RutaService', BuscadorCtrl]);

function BuscadorCtrl($scope, $state, RutaService) {
    $scope.ruta = {};

    $scope.busquedaRutas = function(){
        RutaService.find($scope.ruta,function (result){
            console.log($scope.ruta);
            console.log(result);
            if (result.id == undefined){
                $state.go('busquedaRutas');
            }else{
                $state.go('busquedaRutas/'+result.id);
                
            }
            
        });
        
    }

}