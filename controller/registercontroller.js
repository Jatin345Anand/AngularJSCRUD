app.controller("registercontroller",function($scope,registerfactory){
     $scope.RESET=function(){
         var i= $scope.registerid ; var u = $scope.registerusername; var p=$scope.registerpassword;
         var a = $scope.registerage; var c = $scope.registercity; 
        console.log(`${i}, ${u}, ${p}, ${a}, ${c}`);
     }
     $scope.REGISTER=function(){
         console.log(`${$scope.registerid}, ${$scope.registerusername}, ${$scope.registerpassword}, ${$scope.registerage}, ${$scope.registercity}`);
         var pr = registerfactory.TalkToServerforUser($scope);
        pr.then(function(data){ 
           
            console.log(`${data.data}`);
        },
        function(err){$scope.error =err;})
     }
});