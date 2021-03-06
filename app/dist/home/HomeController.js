/**
 * Created by Girish on 5/16/2016.
 */
angular.module('cms')
  .controller('HomeController',["$scope","$http","PostsService","$state","$mdDialog",function($scope,$http,PostsService,$state,$mdDialog){

    generatePostUrl = function (posts) {
      posts.forEach(function (post) {
        post.urlTitle = post.title.replace(/ /g,"-")
      })
    }
    PostsService.getRecentPosts().then(function (response) {
      $scope.posts = response
      PostsService.recentPosts = response
      generatePostUrl($scope.posts)
    })
    $scope.delete = function(id){
      PostsService.deletePost(id).then(function(response){
        $scope.success = true
        $state.reload();
      })
    }
    $scope.showConfirm = function(ev,id) {
      // Appending dialog to document.body to cover sidenav in docs app
      var confirm = $mdDialog.confirm()
        .title('Would you like to delete your post?')
        .textContent('All of the post content is going to be deleted.')
        .ariaLabel('Lucky day')
        .targetEvent(ev)
        .ok('chesipardengu!')
        .cancel('voddura saami');
    
      $mdDialog.show(confirm).then(function() {
        $scope.delete(id)
      }, function() {
        console.log("not deleting")
      });
    };
  }]);

