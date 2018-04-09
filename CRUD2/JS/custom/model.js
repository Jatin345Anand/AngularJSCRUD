app.factory("myfactory",function($http,$q,LocalUrl){
    var obj={
        print:function(name){
            return  name.toUpperCase();
        },
        show:function(){
           return "JATIN ANAND";
        },
        TalkToServer:function(s){
           var pr =$q.defer();
           $http.get(LocalUrl).then(success,fail);
          function success(data){
              pr.resolve(data);
          }
          function fail(error) {
              pr.reject(error);
            } 
            return pr.promise;
        },
        // addtocart:function(id){
        //     MobileOperation.AddtoMark(id);
        // },
        // Add:function(mobile){
        //     MobileOperation.ADD(mobile);
        //     return MobileOperation.MobileLIST;
        // },
        // Delete:function(){
        //      return MobileOperation.DELETE();   
        // }
    }
    return obj;
})