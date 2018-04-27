app.controller("loginctrl",function($scope,loginfactory){
    
   
    $scope.REGISTER_LOGIN=function(){
        console.log(`${$scope.loginid} ,${$scope.loginid}`);
        console.log(`register called...`);
        var pr = loginfactory.TalkToServerforUser($scope);
        pr.then(function(data){ 
         
            console.log(`${data.data}`);
        },
        function(err){$scope.error =err;})
    }
    $scope.RESET=function(){
        console.log(`${$scope.loginid} ,${$scope.loginid}`);
        console.log(`Reset called...`);
    }
    $scope.LOGIN=function(){
        console.log(`${$scope.loginid} ,${$scope.loginid}`);
        console.log(`Login called...`);
      
    }
});