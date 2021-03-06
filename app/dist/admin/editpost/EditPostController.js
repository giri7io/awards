/**
 * Created by Smurf on 11/14/2016.
 */
angular.module('cms')
  .controller('admin.EditPostController',['PostsService','$stateParams','$scope','settings',function (PostsService,$stateParams,$scope,settings) {
    $scope.categories=settings.categories
    initialize = function(cat,subcat){
      $scope.selectedcat = cat
      $scope.selectedsub = subcat
    }
    $scope.addPost=function (post,cat,subcat){
      if (cat != undefined)
        post.categories.cat=cat
      if (subcat != undefined)
        post.categories.subcat=subcat
      PostsService.editPost(post,$stateParams.id).then(function(response){
        $scope.success=true
      })
    }
    PostsService.getPostById($stateParams.id).then(function(response){
      if(response.categories == undefined)
        response.categories={}
      $scope.post = response
      initialize(response.categories.cat,response.categories.subcat)
    })

  }])
  