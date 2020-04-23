function uno(){
    $("#uno").show();
    $("#dos").hide();
    $("#tres").hide();
    $("#cuatro").hide();
    $("#pantalla").hide();

    var url="html/uno.php"

    $.ajax({
        type: "POST",
        url:url,
        data:{},
        success: function(datos){
            $('#uno').html(datos);
        }
    })
};

function dos(){
    $("#uno").hide();
    $("#dos").show();
    $("#tres").hide();
    $("#cuatro").hide();
    $("#pantalla").hide();

    var url="html/dos.php"

    $.ajax({
        type: "POST",
        url:url,
        data:{},
        success: function(datos){
            $('#dos').html(datos);
        }
    })
};

function tres(){
    $("#uno").hide();
    $("#dos").hide();
    $("#tres").show();
    $("#cuatro").hide();
    $("#pantalla").hide();

    var url="html/tres.php"

    $.ajax({
        type: "POST",
        url:url,
        data:{},
        success: function(datos){
            $('#tres').html(datos);
        }
    })
};

function cuatro(){
    $("#uno").hide();
    $("#dos").hide();
    $("#tres").hide();
    $("#cuatro").show();
    $("#pantalla").hide();

    var url="html/cuatro.php"

    $.ajax({
        type: "POST",
        url:url,
        data:{},
        success: function(datos){
            $('#cuatro').html(datos);
        }
    })
};

function pantalla(){
    $("#uno").hide();
    $("#dos").hide();
    $("#tres").hide();
    $("#cuatro").hide();
    $("#pantalla").show();

    var url="html/pantalla.php"

    $.ajax({
        type: "POST",
        url:url,
        data:{},
        success: function(datos){
            $('#pantalla').html(datos);
        }
    })
};

function enviado(dato1,dato2){
    var parametros = {
        "dato1" : dato1,
        "dato2" : dato2
    };
    $.ajax({
        data: parametros,
        url: 'html/guardar.php',
        type: 'post',
        beforeSend: function(){
            $("#res").show("swing");
            $("#res").html("<img src='img/ajax-loader.gif'> Procesando, espere por favor...");
        },
        success:
        function(response){
            setTimeout(function() {
                $("#res").fadeOut(1500);
                $("#res").html(response);
            },2000);
           
            var url="html/pantalla.php"
   
            $.ajax({  
                type: "POST",
                url:url,
                data:{},
                success:
        function(datos){
                    $('#pantalla').html(datos);
                }
            });
        }
    });
};