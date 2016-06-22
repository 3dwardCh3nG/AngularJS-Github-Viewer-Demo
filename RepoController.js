// Code goes here
(function() {
  var app = angular.module("githubViewer");
  
  var RepoController = function($scope, github, $routeParams, $log) {
    var onRepo = function(data) {
      $scope.repo = data;
      $log.info("onRepo Return Data: " + data);
    };
    
    var onError = function(reason) {
      $scope.error = "Could not fetch the data";
    };
    
    var username = $routeParams.username;
    var reponame = $routeParams.reponame;
    
    github.getRepoDetails(username, reponame)
      .then(onRepo, onError);
      
    $log.info("Username: " + username + ", Reponame: " + reponame);
    $log.info("Repo Info: " + $scope.repo);
  };
  
  app.controller("RepoController", RepoController);
}());