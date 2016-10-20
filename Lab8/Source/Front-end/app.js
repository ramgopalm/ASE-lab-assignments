
var app=angular.module("convert",[]);
app.controller("convertctrl",function ($scope,$http) {
    $scope.bmi = function () {
        var usd=$scope.usd;

        var inr = $http.get("http://localhost:7010/RESTExample/restexample/usdtoinreurkwd/100");
        inr.success(function (data) {
            console.log(data);
            $scope.con={"EUR":data.usd,"USD":data.tinr,"KWD":data.teur,"INR":data.tkwd};

        });
    }
});
