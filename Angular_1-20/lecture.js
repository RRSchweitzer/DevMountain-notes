SERVICES, VALUE, FACTORY

$scope

$http //ajax request

$watch //tells angular to 'watch' something for you

$log //console.log()

singleton: something that gets instantiated once

DRYness (dont repeat yourself), modularity, testability, and organization

Do not pre-optimize. Instead of wasting time thinking out how to 
build the perfect system, build a system that works and then
optimize it afterwards.

//

var app = angular.module('PupsApp', []);

app.config(function (animalProvider) {
  animalProvider.setAnimal('bear')
})

app.value('apiBase', 'http://placebear.com/') //gives you a constant that doesn't change that makes your app more more modular.

app.factory('animalFactory', function(apiBase) {
  return {
    getAnimal: function (w, h) { //this is an object.
      console.log('Running kitten factory');
      return apiBase + '/' + w + '/' + h;
    }
  }
})

// A factory returns an object that gets passed right through it. A service returns an instantiation of the function in the service.

app.service('animalService', function (apiBase) { //instantiation of this function.
  this.getKitten = function (w, h) {
    console.log('Running kitten service');
    return apiBase + '/' + w + '/' + h;
  }
})

app.provider('animal', function () {
  var animal = 'kitten'
  this.setAnimal = function (newAnimal) {
    animal = newAnimal
  }

  function Animaller() {
    this.getAnimal = function (w, h) {
      console.log('Running animal provider');
      return 'http://www.place' + animal + '.com/' + w + '/' + h;
    }
  }

  this.$get = function () {
    return new Animaller()
  }
})

var controller = app.controller('MainController', function (
    $scope, apiBase, kittenFactory, kittenService, animal) {
  // $scope.hero = 'http://placebear.com/800/500'
  // $scope.hero = apiBase + '/800/500'
  // $scope.hero = animalFactory.getKitten(800, 500)
  // $scope.hero = kittenService.getKitten(800, 500)
  $scope.hero = animal.getAnimal(800, 500)
})
