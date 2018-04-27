app.config(function ($routeProvider,$locationProvider,CRUD,LOGIN,REGISTER,ABOUT) {
$locationProvider.hashPrefix('');
$routeProvider.when("/",{
    templateUrl:"home.html",
    controller:"homectrl"
}).when(LOGIN,{
    templateUrl:"login.html",
    controller:"loginctrl"
}).when(REGISTER,{
    templateUrl:"register.html",
    controller:"registercontroller"
}).when("/offers/:count/:discount",{
    templateUrl:"offers.html",
    controller:"offerctrl"
}).when(ABOUT,{
    templateUrl:"resume3.html"
}).when(CRUD,{
    templateUrl:"crud.html",
    controller:"CTRLCRUD"
}).otherwise({
    template:"ERROR PAGE ,No Match Found",redirectTo:"/"
});
}); 