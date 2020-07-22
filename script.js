var app = angular.module('app', []);
app.controller('myCtrl', function($scope) {
$scope.showContacts=function(){
  $scope.contacts= [{
            id: 1,
            name: "Anil",
            age: 28
        }, {
            id: 2,
            name: "Ashok",
            age: 24
        }, {
            id: 3,
            name: "Bharathi",
            age: 32
        },
		 {
            id: 4,
            name: "Balu",
            age: 32
        },
		{
            id: 5,
            name: "Chandra",
            age: 32
        },
		{
            id: 6,
            name: "Chanti",
            age: 32
        },
		{
            id: 7,
            name: "Dileep",
            age: 32
        },
		{
            id: 8,
            name: "Dhuitha",
            age: 32
        },
		{
            id: 9,
            name: "Geetha",
            age: 32
        },
		{
            id: 10,
            name: "vani",
            age: 32
        },
		{
            id: 11,
            name: "devi",
            age: 32
        },
		{
            id: 12,
            name: "dikistha",
            age: 40
        }];
        
    };
    $scope.showContacts();
    $scope.click = function(MyData){
      alert(JSON.stringify(MyData));
    };

});