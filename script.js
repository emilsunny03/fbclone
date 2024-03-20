$(document).ready(function(){
$("#signup-form").validate({
    rules:{
    fname:{
        required:true,
        minlength:4,
        maxlength:6
    },
    sname:{
        required:true,
        minlength:4
    },
    emailAddress:{
        required:true,
        email:true
    },
    password:{
        required:true,
        minlength:4
    },
    day:{
        required:true
    }  


}

})

})