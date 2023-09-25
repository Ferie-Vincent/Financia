var ajax = {
    submitOuvertureForm: function () {
        var formData1 = {
            'name': $('input[id=name]').val(),
            'email': $('input[id=email]').val(),
            'company': $('input[id=company]').val()
        };
    },
    sendsymbole: function () {
        var selecteSymbole = $("#liste_des_action option:selected").val();
        // console.log(selecteSymbole);
        $.ajax({
            type: "POST",
            url: Routing.generate('envoieSymbol'),
            data: {
                selecteSymbole: selecteSymbole
            },
            success: function (data) {
                if (data.length > 0)
                    $('#loaderz').css('display', 'none');
                $('#vacance_search_div').html(data).fadeIn(1000);
            }
        });
    },
    getresource: function (id, local) {

        var pubid = id;
        var locale = local;
        $.ajax({
            type: "POST",
            url: Routing.generate('getresource'),
            data: {
                pubid: pubid,
                locale: locale

            },
            success: function (data) {
                // if (data.length > 0)
                // $('#loaderz').css('display', 'none');
                $('#show').html(data).fadeIn(1000);
            }
        });
    },
    getanalysis: function (secid, local, id) {

        var pubid = id;
        var locale = local;
        var sectorid = secid;
        $.ajax({
            type: "POST",
            url: Routing.generate('getanalysis'),
            data: {
                pubid: pubid,
                locale: locale,
                secid: sectorid

            },
            success: function (data) {
                // if (data.length > 0)
                // $('#loaderz').css('display', 'none');
                $('#show').html(data).fadeIn(1000);
            }
        });
    },
    getOpportunity: function (codes) {
        $('#encore').removeClass('oN').removeClass('text-white').addClass('text-dark');
        var code = codes;
        $('#loader').addClass('d-block');
        $.ajax({
            type: "POST",
            url: Routing.generate('getoppo'),
            data: {
                code: code

            },
            success: function (data) {
                // if (data.length > 0)
                $('#loader').removeClass('d-block');
                $('#show').html(data).fadeIn(1000);
            }
        });
    },


    graph: function () {

        /**
         * Create the chart when all data is loaded
         * @returns {undefined}
         */

        var idtitres = $('#idtitres').val();
        var idindices = $('#idindices').val();

        if (idtitres == null) {
            var lesTitre = new Array();
        } else {
            var lesTitre = idtitres;

        }

        if (idindices == null) {

            var lesIndice = new Array();
        } else {
            var lesIndice = idindices;

        }

        var seriesOptions = [],
            seriesCounter = 0;

        if (lesTitre.length == null && lesIndice.length == null) {

        } else {
            console.log(lesTitre, lesIndice);
            $('#loader').css('display', 'block');
            $('#containerSS').css('display', 'none');
            $.ajax({
                    type: "POST",
                    url: Routing.generate('comparetitreindice_graphe'),
                    data: {
                        tabtitre: lesTitre,
                        tabindice: lesIndice
                    },
                    success: function (data) {
                        $('#loader').css('display', 'none');
                        $('#containerSS').css('display', 'block');
                        Highcharts.setOptions(highcharts_setup_options(), highcharts_range_selector());

                        function createChart() {
                            Highcharts.stockChart('containerSS', {
                                credits: {
                                    enabled: false
                                },
                                navigator: {
                                    enabled: false
                                },
                                scrollbar: {
                                    enabled: false
                                },
                                legend: {
                                    enabled: true
                                },
                                rangeSelector: {
                                    selected: 1
                                },
                                title: {
                                    text: 'Graphe de comparaison des valeurs'
                                },
                                height: 500,

                                yAxis: {
                                    xDateFormat: '%A, %b %e, %Y',
                                    crosshair: true,
                                    labels: {
                                        formatter: function () {
                                            return (this.value > 0 ? ' + ' : '') + this.value + '%';
                                        }
                                    },
                                    plotLines: [{
                                        value: 0,
                                        width: 2,
                                        color: 'silver'
                                    }]
                                },
                                plotOptions: {
                                    xDateFormat: '%A, %b %e, %Y',
                                    series: {
                                        showInNavigator: true,
                                        compare: 'percent'
                                    }
                                },
                                legend: {
                                    layout: 'vertical',
                                    align: 'right',
                                    verticalAlign: 'middle',
                                    borderWidth: 0
                                },
                                tooltip: {
                                    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
                                    valueDecimals: 2,
                                    split: true
                                },
                                series: data
                            });
                        }

                        function highcharts_setup_options() {

                            var setup_options = {
                                lang: {
                                    months: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
                                    shortMonths: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
                                    weekdays: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
                                    shortWeekdays: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
                                    printChart: 'Imprimer le diagramme',
                                    downloadPDF: "Exporter en PDF",
                                    downloadJPEG: "Exporter en JPEG",
                                    downloadPNG: "Exporter en PNG",
                                    downloadSVG: "Exporter en SVG",
                                    loading: "Chargement en cours...",
                                    resetZoom: "Réinitialiser le zoom"
                                }
                            };
                            return setup_options;
                        }


                        function highcharts_range_selector() {

                            return {
                                selected: 1,
                                buttons: [
                                    {
                                        type: 'month',
                                        count: 1,
                                        inputEditDateFormat: "%d-%m-%Y",
                                        text: '1m'
                                    },
                                    {
                                        type: 'month',
                                        count: 3,
                                        text: '3m'
                                    },
                                    {
                                        type: 'month',
                                        count: 6,
                                        text: '6m'
                                    },
                                    {
                                        type: 'ytd',
                                        text: 'YTD'
                                    },
                                    {
                                        type: 'year',
                                        count: 1,
                                        text: '1an'
                                    },
                                    {
                                        type: 'all',
                                        text: 'Tout'
                                    }
                                ]
                            };
                        }

                        $.each(data, function (i, val) {
                            seriesOptions[i] = {
                                name: val.name,
                                data: val.data
                            };

                            seriesCounter += 1;
                            // console.log(seriesCounter);

                            if (seriesCounter === data.length) {
                                createChart();
                            }
                        });
                    }
                }
            );
        }
    },

    buysellcal1: function () {
        var securities = $('#securities').val();
        var price = $('#price').val();
        var quantity = $('#quantity').val();
        var pprice = $('#pprice1').val();
        var operation = $("input[name='operation']:checked").val();
        $.ajax({
            type: "POST",
            url: Routing.generate('calcuatefirst'),
            data: {
                securities: securities,
                quantity: quantity,
                price: price,
                pprice: pprice,
                operation: operation
            },
            success: function (data) {
                $('#calcutionResult').html(data);
            }
        });
    },

    buysellcal2: function () {
        var securities2 = $('#securities2').val();
        var price2 = $('#price2').val();
        var amount = $('#amount').val();
        var pprice2 = $('#pprice2').val();
        var operation = $("input[name='operation']:checked").val();
        // console.log(operation);

        $.ajax({
            type: "POST",
            url: Routing.generate('calcuatesecond'),
            data: {
                securities2: securities2,
                amount: amount,
                price2: price2,
                pprice2: pprice2,
                operation: operation
            },
            success: function (data) {
                $('#calcutionResult').html(data);
            }
        });
    },
    invest: function () {
        var moderem = $("#moderem option:selected").val();
        var differe = $("#differe option:selected").val();
        var maturite = $("#maturite option:selected").val();
        var taux = $('#taux').val();
        var montant = $('#montant').val();

        $.ajax({
            type: "POST",
            url: Routing.generate('investcalculate'),
            data: {
                differe: differe,
                maturite: maturite,
                moderem: moderem,
                taux: taux,
                montant: montant
            },
            success: function (data) {
                $('#calcutionResult').html(data);
            }
        });
    },
    searchfaq: function (locale) {
        var faqsearchbar = $('#faqsearchbar').val();
        $.ajax({
            type: "POST",
            url: Routing.generate('searchfaq'),
            data: {
                faqsearchbar: faqsearchbar,
                locale: locale,
            },
            success: function (data) {
                $('#accordionExample').html(data);
            }
        });
    },

    saveClient: function (phone) {
        var email = $('#email').val();
        var phonenumber = $('#phone').val();
        var tel = phone.replace('+', ' ');
        var typepersonne = $('#typepersonne').val();
        var typecompte = $('#typecompte').val();
        var pays = $('#pays').val();
        var lien;
        if (typepersonne === 'personnephysique') {
            var nom = $('#nom').val();
            var prenom = $('#prenom').val();
            lien = 'register_majeur';
        } else if (typepersonne === 'personnemoral') {
            var raisonSociale = $('#raisonSociale').val();
            lien = 'register_moral';

        }
        if (typepersonne === 'personnephysique') {
            $.ajax({
                type: "POST",
                url: Routing.generate(lien),
                data: {
                    nom: nom,
                    prenom: prenom,
                    email: email,
                    tel: $.trim(tel),
                    phonenumber: phonenumber,
                    typepersonne: typepersonne,
                    typecompte: typecompte,
                    pays: pays,
                },
                success: function (data) {
                    if (data.etat == 200) {
                        $('#clientID').val(data.codeClient);
                        $('#sentMsg').html('');
                    } else if (data.etat == 201) {
                        $('#otherMeth').modal('show').delay(3000);
                        $('#clientID').val(data.codeClient);
                    } else if (data.etat == 302) {
                        $('#sentMsg').html('Désolé, mais le numéro saisi est déjà utilisé par un autre client.').css('color', 'firebrick')
                        $('#continueBtn').attr('disabled', 'disabled')
                    } else if (data.etat == 500) {
                        $('#sentMsg').html('Il y a eu une erreur lors de l\'envoi du sms, veuillez réessayer.').css('color', 'firebrick')
                        $('#continueBtn').attr('disabled', 'disabled')
                        $('#clientID').val(data.codeClient);
                    }
                }
            });
        } else if (typepersonne === 'personnemoral') {
            $.ajax({
                type: "POST",
                url: Routing.generate(lien),
                data: {
                    raisonSociale: raisonSociale,
                    email: email,
                    tel: $.trim(tel),
                    phonenumber: phonenumber,
                    typepersonne: typepersonne,
                    typecompte: typecompte,
                    pays: pays,
                },
                success: function (data) {
                    if (data.etat == 200) {
                        $('#clientID').val(data.codeClient);
                        $('#sentMsg').html('');
                    } else if (data.etat == 201) {
                        $('#otherMeth').modal('show').delay(3000);
                        $('#clientID').val(data.codeClient);
                    } else if (data.etat == 302) {
                        $('#sentMsg').html('Désolé, mais le numéro saisi est déjà utilisé par un autre client.').css('color', 'firebrick')
                        $('#continueBtn').attr('disabled', 'disabled')
                    } else if (data.etat == 500) {
                        $('#sentMsg').html('Il y a eu une erreur lors de l\'envoi du sms, veuillez réessayer.').css('color', 'firebrick')
                        $('#continueBtn').attr('disabled', 'disabled')
                        $('#clientID').val(data.codeClient);
                    }
                }
            });
        }
    },
    resendSms: function () {
        // if(id === null){
        var id = $('#clientID').val();
        // }

        $.ajax({
            type: "POST",
            url: Routing.generate('resendsms'),
            data: {
                id: id
            },
            success: function (data) {
                if (data.etat === 200) {
                    $('#sentMsg').html('Le sms vous a été envoyé veuillez entrer le code pour continuer. Si vous n\'avez toujours pas reçu le code changeant votre numéro et réessayez').css('margin-top', '25px').delay(3000);
                } else {
                    $('#sentMsg').html(`Vous avez atteint la limite d'envoi sms un lien de confirmation sera envoye par mail`).css('color', 'firebrick');
                    $('.otherOptions').prop('checked', false);
                    $('#otherMeth').modal('show').delay(3000);
                }
            }
        });
    },

    resendSmsParam: function (id) {

        $.ajax({
            type: "POST",
            url: Routing.generate('resendsms'),
            data: {
                id: id
            },
            success: function (data) {
                if (data.etat === 200) {
                    $('#sentMsg').html('Le sms vous a été envoyé veuillez entrer le code pour continuer. Si vous n\'avez toujours pas reçu le code changeant votre numéro et réessayez').css('margin-top', '25px').delay(3000);
                } else {
                    $('#sentMsg').html(`Vous avez atteint la limite d'envoi sms un lien de confirmation sera envoye par mail`).css('color', 'firebrick');
                    $('.otherOptions').prop('checked', false);
                    $('#otherMeth').modal('show').delay(3000);
                }
            }
        });
    },

    otherMethods: function () {
        var client = $('#clientID').val();
        var optionSelect = $("input[name='autreMethod']:checked").val();
        if (optionSelect === 'changeNum') {
            var phoneNumber = $('#changedNumber').val();
            var countryCode = $('.selected-dial-code').html();
            var info = countryCode + phoneNumber;
            $('#changedNum').removeAttr('style');
        } else if (optionSelect === 'problemTechnique') {
            var info = $('#technicalIss').val();
            $('#technicalIss').removeAttr('style');
        } else if (optionSelect == 'emailVerfi') {
            var info = $('#email').val();
        }
        console.log(info);
        $.ajax({
            type: "POST",
            url: Routing.generate('otherMethods'),
            data: {
                optionSelect: optionSelect, info: info, client: client
            },
            success: function (data) {
                $('.input-fields').hide();
                $('#otherMeth').modal('hide');
                if (optionSelect === 'changeNum') {
                    $('#sentMsg').html(`Un sms a été envoyé au numéro que vous venez de fournir`).css('color', 'green');
                } else if (optionSelect === 'problemTechnique') {
                    $('#sentMsg').html(`Votre demande a été enregistrée, un membre de notre support vous contactera dans les plus brefs délais.`).css('color', 'green');
                } else if (optionSelect === 'emailVerfi') {
                    $('#sentMsg').html(`L'email de vérification a été envoyé avec succès`).css('color', 'green');
                }
            }
        });
    },

    dynamicAgence: function () {
        var id = $('#afb_sitebundle_tbinfoclient_paysRes').val();

        $.ajax({
            type: "POST",
            url: Routing.generate('dynamicAgence'),
            data: {
                id: id
            },
            success: function (data) {
                $('#lesagence').html(data);
            }
        });
    },
};

