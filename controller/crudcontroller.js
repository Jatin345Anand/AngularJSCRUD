app.controller("CTRLCRUD",function ($scope,crudfactory) {
    $scope.LOADCRUD=function(){
        console.log(`log called...`)  ;
       var pr = crudfactory.TalkToServer($scope);
        pr.then(function(data){ 
            $scope.result =data.data;
          //  MobileOperation.MobileLIST=data;
          MobileOperation.PrepareItem($scope.result);
        },
        function(err){$scope.error =err;})
    }
    // var id=$scope.crudid;
    // var name=$scope.crudname;
    // var price=$scope.crudprice;
    // var url =$scope.crudurl;
    $scope.UPLOADCRUD=function(){
        console.log(`Upload called...`);
        console.log(`${$scope.crudid} ,${$scope.crudname},${$scope.crudprice},${$scope.crudurl}`);

    }
    $scope.ADDCRUD=function(){
    console.log(  `addcalled...`);
    var mobile =new Mobile($scope.crudid,$scope.crudname,$scope.crudprice,$scope.crudurl,"false",0);
    console.log(mobile);
    
    MobileOperation.ADD(mobile);         
    console.log("mobile is added...");
    var AfterAddtionList=MobileOperation.GetItem();
    console.log(AfterAddtionList.length);
    $scope.result=AfterAddtionList;    
    }
   
});