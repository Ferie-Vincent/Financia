/**
 * Created by radji on 25-May-18.
 */
var dob = $('#dob').val();
var nation = $('#nation').val();
var profession = $('#profession').val();
var pname = $('#pname').val();
var mname = $('#mname').val();
if ($('.wizardify-content-slide').hasClass('hidden-form-slide')) {

}
$('#validateForm1').click(function () {

});

$('#tabCustom1').click(function () {
    $('#tabCustom1').addClass('oN');
    $('#tabCustom2').removeClass('oN');
    $('#tabCustom3').removeClass('oN');
    $('#tabCustom4').removeClass('oN');

    $('#content1').removeClass('hidden');
    $('#content2').addClass('hidden');
    $('#content3').addClass('hidden');
    $('#content4').addClass('hidden');
});
$('#tabCustom2').click(function () {
    $('#tabCustom1').removeClass('oN');
    $('#tabCustom2').addClass('oN');
    $('#tabCustom3').removeClass('oN');
    $('#tabCustom4').removeClass('oN');

    $('#content1').addClass('hidden');
    $('#content2').removeClass('hidden');
    $('#content3').addClass('hidden');
    $('#content4').addClass('hidden');
});
$('#tabCustom3').click(function () {
    $('#tabCustom1').removeClass('oN');
    $('#tabCustom2').removeClass('oN');
    $('#tabCustom3').addClass('oN');
    $('#tabCustom4').removeClass('oN');

    $('#content1').addClass('hidden');
    $('#content2').addClass('hidden');
    $('#content3').removeClass('hidden');
    $('#content4').addClass('hidden');
});
$('#tabCustom4').click(function () {
    $('#tabCustom1').removeClass('oN');
    $('#tabCustom2').removeClass('oN');
    $('#tabCustom3').removeClass('oN');
    $('#tabCustom4').addClass('oN');

    $('#content1').addClass('hidden');
    $('#content2').addClass('hidden');
    $('#content3').addClass('hidden');
    $('#content4').removeClass('hidden');
});
$('#tabCustom5').click(function () {
    $('#tabCustom5').addClass('oN');
    $('#tabCustom6').removeClass('oN');
    $('#tabCustom7').removeClass('oN');
    $('#tabCustom8').removeClass('oN');

    $('#content5').removeClass('hidden');
    $('#content6').addClass('hidden');
    $('#content7').addClass('hidden');
    $('#content8').addClass('hidden');
});
$('#tabCustom6').click(function () {
    $('#tabCustom5').removeClass('oN');
    $('#tabCustom6').addClass('oN');
    $('#tabCustom7').removeClass('oN');
    $('#tabCustom8').removeClass('oN');

    $('#content5').addClass('hidden');
    $('#content6').removeClass('hidden');
    $('#content7').addClass('hidden');
    $('#content8').addClass('hidden');
});
$('#tabCustom7').click(function () {
    $('#tabCustom5').removeClass('oN');
    $('#tabCustom6').removeClass('oN');
    $('#tabCustom7').addClass('oN');
    $('#tabCustom8').removeClass('oN');

    $('#content5').addClass('hidden');
    $('#content6').addClass('hidden');
    $('#content7').removeClass('hidden');
    $('#content8').addClass('hidden');
});
$('#tabCustom8').click(function () {
    $('#tabCustom5').removeClass('oN');
    $('#tabCustom6').removeClass('oN');
    $('#tabCustom7').removeClass('oN');
    $('#tabCustom8').addClass('oN');

    $('#content5').addClass('hidden');
    $('#content6').addClass('hidden');
    $('#content7').addClass('hidden');
    $('#content8').removeClass('hidden');
});


// Ville selector

$(function () {
    var availableTags = [

        "Cotonou, Littoral", "Abomey-Calavi, Atlantique", " Porto-Novo, Ouémé", " Parakou, Borgou", "Djougou, Donga", "Bohicon, Zou", "Natitingou, Atacora", "Savé, Collines", "Abomey, Zou", "Nikki, Borgou", "Lokossa, Mono", "Ouidah,Atlantique", "Dogbo-Tota, Couffo", "Kandi, Alibori", "Cové, Zou", "Malanville,Alibori", "Pobé, Plateau", "Kérou, Atacora", "Savalou, Collines", "Sakété, Plateau", "Comè, Mono", "Bembéréké, Borgou", "Bassila, Donga", "Banikoara, Alibori", "Kétou, Plateau", "Dassa-Zoumè, Collines", "Tchaourou, Borgou", "Allada,Atlantique", "Aplahoué, Couffo", "Tanguiéta, Atacora", "N'Dali, Borgou", "Segbana, Alibori", "Athiémé, Mono", "Grand Popo, Mono", "Kouandé, Atacora", "Autres, Autre pays"
    ];
    $(".tags").autocomplete({
        source: availableTags
    });
});

//Change upload btn
$('#closePhoto').click(function () {
    $('#PICbtn').css('background-color', '#27ae61');
});
$('#closeRib').click(function () {
    $('#RIBbtn').css('background-color', '#27ae61');
});
$('#closePID').click(function () {
    $('#PIDbtn').css('background-color', '#27ae61');
});

//Translate page
$('#translateSelect').change(function () {
    var select = $("#translateSelect option:selected").text();
    // console.log(select);
    if (select === 'FR') {
        window.location.replace("http://localhost/africabourse/web/app_dev.php/fr/");
    } else {
        window.location.replace("http://localhost/africabourse/web/app_dev.php/");
    }
});

//Our Reference
var owlS = $('.alauneowl-carousel');
owlS.owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    // nav:true,
    // navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    autoplayTimeout: 2500,
    autoplayHoverPause: true
});

//Cour defile
$('.loop').owlCarousel({
    // center: true,
    // items:4,
    // loop:true,
    // autoplay:true,
    // margin:4,
    // responsive:{
    //     600:{
    //         items:4
    //     }
    // }
    items: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true
});

//Fix Header
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $("#myHeader").addClass("fixed-head").fadeIn('slow');
    } else {
        $("#myHeader").removeClass("fixed-head");
    }
});

function activePprice() {
    $('#buysellcal').css('display','block');
    $('#investcal').css('display','none');
    var operation = $("input[name='operation']:checked").val();
    if (operation === 'Sell') {
        $('#pprice1').removeAttr('disabled');
        $('#pprice2').removeAttr('disabled');
    }else {
        $('#pprice1').attr('disabled','disabled');
        $('#pprice2').attr('disabled','disabled');
    }
}
function showinvestcal() {
    $('#buysellcal').css('display','none');
    $('#investcal').css('display','block');
}

// --- Ouverture de compte form ---
$(document).ready(function () {
        // $("#codefield").inputmask("99-99-99");
        var i = 1;
        var session = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        var emailValide = false;
        var phoneValide = false;
        if (i === 1) {
            $('#returnBtn').attr('disabled', 'disabled')
        }
        $(".group>input").keyup(function () {
            if ($('.group>input').hasClass('input-error')) {
                $('.group>input').removeClass('input-error');
            }
        });
// Validate telephone
        $('.selected-dial-code').change(function () {
            if (!iti.isValidNumber()) {
                $('#errorZone').text('Numero invalide').css({"color": "firebrick"});
                phoneValide = false;
            } else {
                $('#errorZone').text('');
                phoneValide = true;
            }
            if (iti.getValidationError() === 2) {
                $('#errorZone').text('Numero trop court').css({"color": "firebrick"});
                phoneValide = false;
            } else if (iti.getValidationError() === 3) {
                $('#errorZone').text('Numero trop longue').css({"color": "firebrick"});
                phoneValide = false;
            } else if (iti.getValidationError() === 4) {
                $('#errorZone').text('Numero invalide').css({"color": "firebrick"});
                phoneValide = false;
            } else if (iti.getValidationError() === 0) {
                $('#errorZone').text('');
                phoneValide = true;
            } else {
                $('#errorZone').text('Numero invalide').css({"color": "firebrick"});
                phoneValide = false;
            }
        });
        $("#phone").keyup(function () {
            if (!iti.isValidNumber()) {
                $('#errorZone').text('Numero invalide').css({"color": "firebrick"});
                phoneValide = false;
            } else {
                $('#errorZone').text('');
                phoneValide = true;
            }
            if (iti.getValidationError() === 2) {
                $('#errorZone').text('Numero trop court').css({"color": "firebrick"});
                phoneValide = false;
            } else if (iti.getValidationError() === 3) {
                $('#errorZone').text('Numero trop longue').css({"color": "firebrick"});
                phoneValide = false;
            } else if (iti.getValidationError() === 4) {
                $('#errorZone').text('Numero invalide').css({"color": "firebrick"});
                phoneValide = false;
            } else if (iti.getValidationError() === 0) {
                $('#errorZone').text('');
                phoneValide = true;
            }
            // console.log(iti.getValidationError());
        });
// Validate email

        $("#email").keyup(function () {

            var email = $("#email").val();

            if (email !== 0) {
                if (isValidEmailAddress(email)) {
                    $("#validEmail").text(' ');
                    emailValide = true;
                } else {
                    $("#validEmail").text('Email non valide').css({
                        "color": "firebrick"
                    });
                    emailValide = false;
                }
            } else {
                $("#validEmail").text(' ');
                emailValide = true;
            }
        });

        function isValidEmailAddress(emailAddress) {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            return pattern.test(emailAddress);
        }

// Validate form empty

        function validation() {
            $('#form-content1').find('.required').each(function () {
                if ($(this).val() == "") {
                    $(this).addClass('input-error animated infinte shake');
                    phoneValide = false;
                    emailValide = false;
                }
                else {
                    $(this).removeClass('input-error animated infinte shake');
                }
            });

        }

// Continue Button
        $('#continueBtn').click(function () {
            if (i === 1) {
                validation()
            }
            // console.log(phoneValide,emailValide);
            if (phoneValide === true && emailValide === true) {
                if (i <= 1) {
                    ajax.saveClient(iti.getNumber());
                }
                $('#returnBtn').removeAttr('disabled', 'disabled');
                if (i <= 3) {
                    console.log(i);
                    $('#form-content' + i).fadeOut('slow').addClass('hideContent');
                    $('li.etape').removeClass('active');
                    // Add finished class to previsou li
                    $('#step' + i).addClass('finished');
                    i++;
                    $('#form-content' + i).fadeIn('slow').removeClass('hideContent');
                    $('#step' + i).addClass('active').fadeOut(200, function () {
                        $('#step' + i).fadeIn();
                    });
                    if (i === 2) {
                        $('#continueBtn').attr({'disabled': 'disabled'});
                    }
                    if (i === 3) {
                        $('#returnBtn').attr('disabled', 'disabled');
                        $('#continueBtn').text('Terminer');
                        // $('#continueBtn').attr({'type': 'submit'});
                        $('#continueBtn').attr({'disabled': 'disabled'});

                        setTimeout(
                            function()
                            {
                                $("#submitBtn").trigger("click");
                            }, 5000);
                    }
                    // if (i === 4) {
                    // }
                }


            }
        });

// Return Button
        $('#returnBtn').click(function () {
            $('#continueBtn').removeAttr('disabled');
            if (i !== 1) {
                $('#returnBtn').removeAttr('disabled')
            } else {
                $('#returnBtn').attr('disabled', 'disabled')
            }
            if (i > 1) {
                $('#form-content' + i).fadeOut('slow').addClass('hideContent');
                $('li.etape').removeClass('active');
                i--;
                $('#step' + i).removeClass('finished');
                $('#form-content' + i).fadeIn('slow').removeClass('hideContent');
                $('#step' + i).addClass('active').fadeOut(200, function () {
                    $('#step' + i).fadeIn();
                });
                if (i < 3) {
                    $('#continueBtn').text('Continuer');
                }
            }
        });

    }
);

//-- Verify Code--
$("#codefield").keyup(function () {
    var codeField= $("#codefield").val();
    if(codeField.length > 5){
        $('#continueBtn').removeAttr('disabled')
    }

});
