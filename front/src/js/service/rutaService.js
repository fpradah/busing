angular
        .module('busingApp')
        .factory('RutaService', ['$http',RutaService]);

    function RutaService($http) {
        var service = {};

        var backendUrl = "52.16.29.49:3000";

        service.getAll = getAll;

        service.get = get;

        service.add = add;

        service.find = find;

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

        function add(ruta, callback){
            $http.post("http://"+backendUrl+"/ruta",ruta)
                .success(function(data, status){
                    callback(data);
                })
                .error(function(data, status){
                    callback(false);
                });
        }

        function find(ruta, callback){
            $http.post("http://"+backendUrl+"/ruta-find",ruta)
                .success(function(data, status){
                    callback(data);
                })
                .error(function(data, status){
                    callback(false);
                });
        }
    }