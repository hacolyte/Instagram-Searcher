angular.module('instagramSearcher', ['ngMessages'])
	.controller('searchController', searchController);

function searchController ($scope){
	$scope.submit = function(){
		if( $scope.searchForm.$valid ) {
    		console.log('The form is valid');
		} else {
    		console.log('The form is invalid');
		}
	}
}