 var modal = document.getElementById('consultModal');
 var btn123 = document.getElementById("btnconsultModal");
 var span = document.getElementsByClassName("closebtn")[0];

 btn123.onclick = function modalGo() {
     modal.style.display = "block";
    callback();
 }
 span.onclick = function () {
     modal.style.display = "none";
 }
 window.onclick = function (event) {
     if (event.target == modal) {
        modal.style.display = "none";
     }
 }
 window.onload = function () {
    setTimeout(function() {
        modal.style.display = "block";;
    }, 8000); 
 }



//Contact Us

$("#submit_btn").click(function() {

    var user_name = $('input[name=first_name]').val();
    var user_phone = $('input[name=phone]').val();

    //simple validation at client's end
    var post_data, output;
    var proceed = true;
    if (user_name == "") {
        proceed = false;
    }
    if (user_phone == "") {
        proceed = false;
    }
   // if (user_phone == "") {
        //proceed = false;
   // }

    //everything looks good! proceed...
    if (proceed) {

        //data to be sent to server
        post_data = { 'userName': user_name, 'userPhone': user_phone};

        //Ajax post data to server
        $.post('contact.php', post_data, function(response) {

            //load json data from server and output message
            if (response.type == 'error') {
                output = '<div class="alert-danger" style="padding:10px; margin-bottom:25px;">' + response.text + '</div>';
            } else {
                output = '<div class="alert-success" style="padding:10px; margin-bottom:25px;">' + response.text + '</div>';

                //reset values in all input fields
                $('.getin_form input').val('');
                $('.getin_form textarea').val('');
            }

            $("#result").hide().html(output).slideDown();
        }, 'json');

    }
    else {
           output = '<div class="alert-danger" style="padding:10px; margin-bottom:25px;">Please provide the missing fields.</div>';
           $("#result").hide().html(output).slideDown();
    }

});
$(document).on('contextmenu', function() {
    return false;
  });

 