

$(document).on("click","#bt3",function(){

   cordova.plugins.barcodeScanner.scan(
       function ( result) {
           if(result.text == 280720550){
              $(location).attr("href", "ipad.html")        
           }   
            if(result.text == 989895555){
              $(location).attr("href","samsung.html")     
           }   
           if(result.text == 85236987){
              $(location).attr("href","motorola.html")       
           }   

           if(result.text == 85369877444){
              $(location).attr("href","asus.html")       
           } 
           else{
             function novamente(){
             }
              navigator.notification.alert("Erro! Codigo não encontrado !!!");
           }                                                           
       },
                                                  
       
                                                           
       
       function ( error ) {
           alert ( " Falha na digitalização: " + erro);
       },
       {
           preferFrontCamera : false , // iOS e Android
           showFlipCameraButton : true , // iOS e Android
           showTorchButton : true , // iOS e Android
           torchOn : false , // Android, inicie com a tocha ligada (se disponível)
           saveHistory : true , // Android, salvar histórico de varredura (padrão falso)
           prompt : " Coloque um código de barras dentro da área de digitalização " , // Android
           resultDisplayDuration : 500 , // Android, exibe o texto digitalizado para X ms.  0 suprime totalmente, padrão 1500
           formatos : " QR_CODE, PDF_417 " , // padrão: todos exceto PDF_417 e RSS_EXPANDED
           orientação : " landscape " , // apenas Android (retrato | paisagem), por defeito unset por isso gira com o dispositivo
           disableAnimations : true , // iOS
           disableSuccessBeep : false // iOS e Android
       }
    ); 
})
$(document).on('click','#btn1', function(){
 location.href = "ipad.html";
});

$(document).on('click','#btn2', function(){
 location.href = "samsung.html";
});

$(document).on('click','#btn3', function(){
 location.href = "motorola.html";
});

$(document).on('click','#btn4', function(){
 location.href = "asus.html";
});

$(document).on('click','#voltar', function(){
 location.href = "index.html";
});



