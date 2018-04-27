const UseAdminrOpeartion={
    UserList:[],
    AdminList:[],
    ADD:function(X,x){
        if(X==="User"){
            this.UserList.push(x);
        }
        else if(X==="Admin"){
           this.AdminList.push(x);
        }
    },
    GETADMINLIST:function(){
        return this.AdminList;
    },
    GETUSERLIST:function(){
        return this.UserList;
    }
     
}