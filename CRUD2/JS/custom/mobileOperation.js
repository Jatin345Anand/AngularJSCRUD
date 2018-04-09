
const MobileOperation={
    MobileLIST:[],
    MobileLISTforCart:[],
    MobileLISTforDelete:[],
    ADD:function(mobile){
        this.MobileLIST.push(mobile);
    },
    AddtoMark:function(id){
    
        //this.MobileLISTforDelete.push(m);
      var list1 = this.MobileLIST.filter((m)=>m.id==id);
      list1.forEach((m)=>m.isADD=true);
      return this.MobileLIST;
     //  console.log("list1 = "+list1);
       //return this.MobileLISTforDelete;
    },
    SEARCH:function(id){
       return this.MobileLIST.filter((m)=>m.id==id)[0];
    },
    GETDELETELIST:function(){
        return this.MobileLISTforDelete;
    },
    PrepareItem:function(mobiles){
        for(let mobile of mobiles){
            var obj = new Mobile(mobile.id,mobile.name,mobile.price,mobile.url,"false",mobile.like);
            this.MobileLIST.push(obj);
        }
    },
    ADDTOCART:function (m) {
       this.MobileLISTforCart.push(m);
       console.log("Added cart is "+this.MobileLISTforCart.length+"  "+m.name);
       return this.MobileLISTforCart;
    },
    GetItem:function(){
        return this.MobileLIST;
    },
    UPDATELIKE:function(mobile){
      //  console.log(mobile);
       mobile.incrementlike();
    },
    DELETE:function(LIST){
        var unMarkedMobiles;
        unMarkedMobiles=LIST.filter((m)=>m.isADD==false);
         return unMarkedMobiles;     
    }
}