angular.module('instagramSearcher', ['ngMessages'])
	.controller('searchController', searchController);

function searchController ($scope, $http, $q, $sce){
	$scope.submitted = false;
	$scope.search = function(){
		$scope.submitted = true;
		if( $scope.searchForm.$valid ) {
    		console.log('The form is valid');
    		$scope.searching = true;
            $scope.alert = false;
    		var url = "https://api.instagram.com/v1/tags/" + $scope.data.searchText + "/media/recent";
    		var requestParams = {
				callback: 'JSON_CALLBACK',
				client_id: '721c5d87e1ab406c8ea8985697c5258a'
    		};
    		$http({
    			method: 'JSONP',
    			url: url,
    			params: requestParams
    		})
    		.success(function(response){
    			console.log("The response is good.")
    			$scope.searching = false;
                $scope.images = response.data;
                $scope.imagesFound = true;
    			console.log(response.data)
    		})
    		.error(function(response){
    			$scope.searching = false;
    			$scope.alert = true;
    			console.log("There was an error in the response.");
    		});
    		delete $scope.data.searchText;
			$scope.searchForm.$setPristine();
			$scope.submitted = false;
		}
	}
}