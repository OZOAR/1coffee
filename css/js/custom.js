 //Dinamic Modal
 let title = document.getElementById('modal-title1');
 var modal = document.getElementById('consultModal');
 var span = document.getElementsByClassName("closebtn")[0];
 const consult = 'Получить консультацию';
 const cost = 'Узнать стоимость';
 const callback ='Выховите мастера прямо сейчас';
    // Commit change JS
    //  var btnModalConsult = document.querySelectorAll("#btn-modal-consult");
    //  var btnModalCost = document.querySelectorAll("#btn-modal-cost");
    //  var btnModalCallBack = document.querySelectorAll("#btn-modal-call");
    // for (var i = 0; i < btnModalConsult.length; i++){
    //     btnModalConsult[i].onclick = 
function consultModal() {
    modal.style.zIndex = 5;
    modal.style.opacity = 1;
    title.innerHTML= consult;
};
function costModal(){
    modal.style.zIndex = 5;
    modal.style.opacity = 1;
    title.innerHTML= cost;
};
function callBackModal() {
    modal.style.zIndex = 5;
    modal.style.opacity = 1;
    title.innerHTML= callback;
};
span.onclick = function () {
    modal.style.zIndex = -10;
    modal.style.opacity = 0;
};
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.zIndex = -10;
        modal.style.opacity = 0;
    }
};
window.onload = function () {
    setTimeout(function() {
        modal.style.zIndex = 5;
        modal.style.opacity = 1;
        title.innerHTML= consult;

    },15000); 
};

function showAllModels() {
document.getElementById('full-machine-list').style.display = 'flex';
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