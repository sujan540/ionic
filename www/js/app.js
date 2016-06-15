// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.controller('ctrl',function($scope,$ionicPopup,$ionicListDelegate){
  $scope.tasks=
  [
    {title:"First", completed:true},
    {title:"Second", completed:false},
    {title:"Third", completed:false},
  ];

  $scope.newTask = function(){
    $ionicPopup.prompt({
      title:"New Task",
      template:"Enter Task:",
      inputPlaceholder:"What do you need to do?",
      okText:"Create task"
    }).then(function(res){
      if(res)$scope.tasks.push({title:res, completed:false});
    })
  };

  $scope.edit=function(task){
    $scope.data = {response:task.title};
    $ionicPopup.prompt({
      title:"Edit task",
      scope:$scope
    }).then(function(res){
      if(res!==undefined) task.title=$scope.data.response;
      $ionicListDelegate.closeOptionButtons();
    })
  };
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
