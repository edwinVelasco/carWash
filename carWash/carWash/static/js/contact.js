    $(document).ready(function(){
      $("#send").click(function(){
        var name   = $("#name").val();
        var email  = $("#email").val();
        var message  = $("#message").val();

        var error = false;
		
		 if(name.length == 0) {
		    var error = true;
		    $("#error_name").fadeIn(500);
		 }else{
		    $("#error_name").fadeOut(500);
		 }
		   
         if(email.length == 0 || email.indexOf("@") == "-1" || email.indexOf(".") == "-1"){
           var error = true;
           $("#error_email").fadeIn(500);
         }else{
           $("#error_email").fadeOut(500);
         }
         if(message.length == 0){
            var error = true;
            $("#error_message").fadeIn(500);
         }else{
            $("#error_message").fadeOut(500);
         }
         
         if(!error)
         {
           $("#send").attr({"disabled" : "true", "value" : "Loading..." });
           
           $.ajax({
             type: "get",
             url : "envio_contacto",    
             data: {'name':name, 'email':email, 'message':message},
             success: function(data)
             {  
                 console.log(data)
                if(data == 'success')
                 {
                    $("#btnsubmit").remove();
                    $("#mail_success").fadeIn(500);
                 }
                  else
                  {
                    $("#mail_failed").html(data).fadeIn(500);
                    $("#send").removeAttr("disabled").attr("value", "send");
                  }     
             }  
           });  
        }
		    return false;                      
      });    
    });
