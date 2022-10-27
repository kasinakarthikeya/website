$(document).ready(function() {
    $('#close').click(function() {
        $('#loginModal').modal('hide');
    });

    $('#cancelButton').click(function() {
            $('#loginModal').modal('hide');
    });
    $('#cancel').click(function() {
        $('#reserve').modal('hide');
    });
    $('#dismiss').click(function() {
        $('#reserve').modal('hide');
    });
   $('#loginButton').click(function() {
    $('#loginModal').modal('toggle');
   });

   $('#loginCancel').click(function(){
    $('#loginModal').modal('hide');
    $('#signupModal').modal('toggle');
   });
   $('#signupcancelButton').click(function() {
        $('#signupModal').modal('hide');
    });
    $('#closeButton').click(function() {
            $('#signupModal').modal('hide');
    });

    $('#loginBut').click(function() {
    $('#loginModal').modal('toggle');
   });


   $('#adminButton').click(function(){
        $('#adminloginModal').modal('toggle');
   });

   $('#admincancelButton').click(function(){
        $('#adminloginModal').modal('hide');
   });

   $('#closeA').click(function(){
        $('#adminloginModal').modal('hide');
    });


   $('#signupButton').click(function() {
       $('#signupModal').modal('hide');
      // alert("Please login with the details");
   });

   $('#reserveButton').click(function() {
    $('#reserve').modal('toggle');
   });
});


var obj = [
    {
        username: "karthik",
        password: 1234
    },
    {
        username: "karthikeya",
        password: "k123"
    },
    {
        username: "madhav",
        password: "1234"
    }
]

function login(){
    var username = document.getElementById("exampleInputName").value;
    var password = document.getElementById("exampleInputPassword").value;
    var a = 0;
    for(i = 0; i < obj.length; i++){
        if(username == obj[i].username && password == obj[i].password){
            a = 0;
            window.location.href = "index.html";
            return;
        }
        else{
            a++;
        }
    }
    if(a > 0)
        alert("Please enter valid details");
}