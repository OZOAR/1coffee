 //Dinamic Modal
 let title = document.getElementById('modal-title1');
 var modal = document.getElementById('consultModal');
 var modalContent = document.getElementById('content-modal');
function modalActive(ModalTitle) {
    let modaltext;
    switch (ModalTitle) {
        case 1:
            modalText = 'Получить консультацию';
            break;
        case 2:
            modalText = 'Узнать стоимость';
            break;
        case 3:
            modalText = 'Вызовите мастера прямо сейчас';
            break;
        default:
            modalText = "EROR 404";
            break;
    };
    modal.style.zIndex = 5;
    modal.style.opacity = 1;
    title.innerHTML= modalText;
    // title.style.fontFamily = 'Ubuntu';
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
    setTimeout(modalActive,15000, 1); 
};
                        // DROPDOWN CM
function showAllModels() {
document.getElementById('full-machine-list').style.display = 'flex';
document.getElementById('button-showall').style.display = 'none';
document.getElementById('button-close').style.display = 'flex';
}
function closeAllModels() {
    document.getElementById('full-machine-list').style.display = 'none';
    document.getElementById('button-showall').style.display = 'flex';
    document.getElementById('button-close').style.display = 'none';
}
                    // DROPDOWN CM CLOSE


//                                 DROPDOWN PROBLEM

function showBreakege(textDivId, desctopOrMobile) {
    let text;
    switch (textDivId) {
        case 1 : 
            text = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quas vero veritatis ad alias obcaecati veniam accusantium optio, et ratione repellendus sint tempore molestiae fugit, nam, iure sunt aspernatur neque!';
            break;
        case 2 : 
            text = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quas vero veritatis ad alias obcaecati veniam accusantium optio, et ratione repellendus sint tempore molestiae fugit, nam, iure sunt aspernatur neque!';
            break;
        case 3 : 
            text = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quas vero veritatis ad alias obcaecati veniam accusantium optio, et ratione repellendus sint tempore molestiae fugit, nam, iure sunt aspernatur neque!';
            break;
        case 4 : 
            text = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quas vero veritatis ad alias obcaecati veniam accusantium optio, et ratione repellendus sint tempore molestiae fugit, nam, iure sunt aspernatur neque!';
            break;
        case 5 : 
            text = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quas vero veritatis ad alias obcaecati veniam accusantium optio, et ratione repellendus sint tempore molestiae fugit, nam, iure sunt aspernatur neque!';
            break;
        case 6 : 
            text = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quas vero veritatis ad alias obcaecati veniam accusantium optio, et ratione repellendus sint tempore molestiae fugit, nam, iure sunt aspernatur neque!';
            break;
        default: 
            text = 'ТАКОГО ТЕКСТА НЕ СУЩЕСТВУЕТ';
            break;
    };
    switch (desctopOrMobile) {
        case 1 :
            findId = document.getElementById('dropdown-problem');
            textId = document.getElementById('text');
            break;
        case 2 :
            findId = document.getElementById('dropdown-problem-mobile');
            textId = document.getElementById('text-mobile');
            break;
    };
    textId.innerHTML = text;
    if (findId.classList.contains('show') == 0) {
            alert(1);
            findId.classList.add('show');
        } else if (findId.classList.contains('show')) {
            findId.classList.remove('show');
        };
};

//                                    DROPDOWN PROBLEM CLOSE
// LAZY LOAD

// $(function() {
//     $('.lazy').Lazy({
//         effect: "fadeIn"
//     });
// });

$(document).ready(function () {
    $("img.lazy").Lazy({
        effect : "fadeIn"
    });
});

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