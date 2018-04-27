app.factory("loginfactory",function($http,$q,UserUrl,AdminUrl){
  var obj ={
      TalkToServerforUser:function(s){
         var pr= $q.defer();
         $http.get(UserUrl).then(S,F);
         function S(data){
            pr.resolve(data);
         }
         function F(error){
             pr.reject(error);
         }
         return pr.promise;
      },
      TalkToServerforAdmin:function(s){
        var pr= $q.defer();
        $http.get(AdminUrl).then(S,F);
        function S(data){
           pr.resolve(data);
        }
        function F(error){
            pr.reject(error);
        }
        return pr.promise;
      }
  }
  return obj;
  
});