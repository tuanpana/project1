angular.module('TodoApp',[])
.controller('TodoController',['$scope',function($scope,$http){
	$scope.addTodo=function(){
		$http.post('/add',$scope.todoText)
			.success(function(data){
				console.log(data);
			})
			.error(function(data){
				console.log('Error: '+data);
			});
			
	};
}]);