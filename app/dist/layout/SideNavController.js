/**
 * Created by Girish on 5/24/2016.
 */
angular.module('cms')
  .controller('SideNavController', function($scope){
    $scope.sideMenu=[]

    $scope.userSidenavMenu = [
      {'label':'Edit Profile','state':'root.profiledetails'},
      {'label':'Dashboard','state':'root.dashboard'},
      {'label':'Settings','state':'root.settings'}
    ]
    $scope.chairSidenavMenu = [
      {'label':'Edit Profile','state':'root.profiledetails'},
      {'label':'Dashboard','state':'root.chair.dashboard'},
      {'label':'Settings','state':'root.chair.settings'},
      {'label':'Assign','state':'root.chair.assign'}
    ]

    $scope.sideMenu =  $scope.userSidenavMenu
  });

