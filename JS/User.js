class User{
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
    var u1= new User(100004,"Jatin Anand","jatinanand",21,"Delhi");
    var u2= new User(100005,"Prem Raghuvanshi","premraghuvanshi",31,"Patna");
    var u3= new User(100006,"Mukul Juneja","mukuljuneja",23,"Chandigarh");
    var u4= new User(100007,"Bhupendra Kumar","bhupendrakumar",40,"Delhi");
    var u5= new User(100008,"Prince Anand","princeanand",15,"Modinagar");
    var u=[];
    u=[u1,u2,u3,u4,u5];
    var Ujson = JSON.stringify(u);
    return Ujson; 
}       
function CreateJSObj(json){
   var JSObj = JSON.parse(json);
   return JSObj;
}
const UserOpeartion={
    UserList:[],
    ADD:function(){},

} 