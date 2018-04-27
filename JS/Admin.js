class Admin{
    constructor(emailid,username,password,age,addresscity){
        this.emailid=emailid;
        this.username=username;
        this.password=password;
        this.age=age;
        this.addresscity=addresscity;
    }
}         
function CreateUserJson(X){
    var User=X;
    var u1= new Admin(200004,"Sharad Bajpai","sharad",31,"Ghaziabad");
    var u2= new Admin(200005,"Amit Shrivastva","amit",41,"Allhabad");
    var u3= new Admin(200006,"Sugandha Mishra","sugandha",35,"Tripura");
    var u4= new Admin(200007,"Kavita Sharma","kavita",44,"Kanpur");
    var u5= new Admin(200008,"Mark Jukarbarg","mark",30,"San Faransisco");
    var u=[];
    u=[u1,u2,u3,u4,u5];
    var Ujson = JSON.stringify(u);
    return Ujson; 
}
function CreateJSObj(json){
   var JSObj = JSON.parse(json);
   return JSObj;
}
