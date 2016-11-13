angular
        .module('busingApp')
        .factory('RutaService', ['$http','$localStorage',RutaService]);

    function RutaService($http, $localStorage) {
        var service = {};

        var backendUrl = "52.16.29.49:3000";

        service.getAll = getAll;

        return service;

        function getAll(callback) {
            $http.get("http://"+backendUrl+"/ruta")
              .success(function (response, status){
                callback(response);
              })
            .error(function (response, status){                
                callback(false);               
            });
        }

        function get(ruta, callback) {
            $http.get("http://"+backendUrl+"/group/"+ruta.id)
              .success(function (response, status){
                callback(response);
              })
            .error(function (response, status){                
                callback(false);               
            });
        }

        function add(grupo, callback){
            $http.post("http://"+BACKEND_URL+"/ruta",ruta)
                .success(function(data, status){
                    callback(data);
                })
                .error(function(data, status){
                    callback(false);
                });
        }
    }