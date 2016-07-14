"use strict";
var toDoApp = angular.module("toDoApp", []);

toDoApp.controller("toDoCtrl", function ($scope, $filter) {

  $scope.tasks = [

    {description: 'Go through CSS , HTML , JS', done: false},
    {description: 'Learn Angular Basics', done: false},
    {description: 'Write Hello World', done: false}


  ];

  $scope.pendingTasks = "3";

  $scope.addNewTask = function (newTaskString) {
    $scope.tasks.push({description: newTaskString, done: false});
  };

  $scope.deleteTask = function (index) {
    $scope.tasks.splice(index, 1);
  };

  $scope.$watch('tasks', function () {
    $scope.pendingTasks = $filter('filter')($scope.tasks, {done: false}).length
  }, true);


  $scope.clearComplete = function () {
    $scope.tasks = $filter('filter')($scope.tasks ,{done: false});


  }
});
