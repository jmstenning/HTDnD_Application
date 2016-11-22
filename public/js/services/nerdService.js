angular.module('nerdService', []).factory('Nerd', ['$http', function($http) {
  return {
    get : function () {
      return $http.get('/api/nerds');
    },

    create : function (nerdData){
      return $http.post('/api/nerds', nerdData);
    },

    delete: function (nerdId) {
      return $http.delete('api/nerds/' + nerdId);
    }
  }
}]);
