app.factory("crudfactory",function($http,$q,CrudUrl ){
    var obj={
        print:function(name){
            return  name.toUpperCase();
        },
        show:function(){
           return "JATIN ANAND";
        },
        TalkToServer:function(s){
           var pr =$q.defer();
           $http.get(CrudUrl).then(success,fail);
          function success(data){
              pr.resolve(data);
          }
          function fail(error) {
              pr.reject(error);
            } 
            return pr.promise;
        },
         
    }
    return obj;   
});