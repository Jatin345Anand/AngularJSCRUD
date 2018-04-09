app.controller("myctrl",($scope,myfactory)=>{
    // $scope.Print=function(){
    //     $scope.T = myfactory.print($scope.i);
    // }
    // $scope.S=function(){
    //     $scope.j=myfactory.show();
    // }
    $scope.like=function(id){
        var list =MobileOperation.GetItem();
        console.log(list);
        list.forEach((element) => {
            console.log(element.id+" "+element.like+" "+ element.isADD);
        });
     var object =MobileOperation.SEARCH(id);
        console.log(object.name);
        MobileOperation.UPDATELIKE(object);
        console.log(object.like);
        //$scope.result=MobileOperation.GetItem();
    }
    $scope.ADDTODELETE=function(ID){
        var MobileforDelete=MobileOperation.SEARCH(ID);
        console.log(MobileforDelete.name);
       //var DeleteList= MobileOperation.AddtoMark(MobileforDelete);
        //console.log(DeleteList.length);
        var Markedlist = MobileOperation.AddtoMark(ID);
        console.log(Markedlist);
    }
    $scope.DELETE=function(){
        console.log("Total nuimber of mobile for delete is "+MobileOperation.GetItem().length);
        var listofDelete=MobileOperation.GetItem();
        console.log( "l1 = "+listofDelete);
        var l2=MobileOperation.DELETE(listofDelete);
        console.log("l2="+l2);
  //      $scope.result=MobileOperation.DELETE(MobileOperation.GetItem());
  $scope.result=l2;
    }
    $scope.LOAD=function(){
        var pr = myfactory.TalkToServer($scope);
        pr.then(function(data){ 
            $scope.result =data.data;
          //  MobileOperation.MobileLIST=data;
          MobileOperation.PrepareItem($scope.result);
        },
        function(err){$scope.error =err;})
    }
    $scope.ADDTOCART=function(ID){
        console.log("Add to cart id =" +ID);
        var mobile = MobileOperation.SEARCH(ID);
        console.log(mobile);
        var listAdded=MobileOperation.ADDTOCART(mobile);
        console.log("cart is added....");
        $scope.AddedMobiles=listAdded;
    }
     $scope.ADD=function(){
        var mobile =new Mobile($scope.ID,$scope.NAME,$scope.PRICE,$scope.URL,"false",0);
        console.log(mobile);
        MobileOperation.ADD(mobile);         
        console.log("mobile is added...");
        var AfterAddtionList=MobileOperation.GetItem();
        console.log(AfterAddtionList.length);
        $scope.result=AfterAddtionList;       
    //    console.log("list ="+List);
    // }
    // $scope.DELETE=function(){
    //    var UnMark =myfactory.Delete();
    //    console.log("unmarked list is "+UnMark); 
     }
});