

$(document).on("click","#bt3",function(){

   cordova.plugins.barcodeScanner.scan(
       function ( result) {
           if(result.text == 280720550){
              $(location).attr("href", "https://www.apple.com/br/shop/buy-ipad/ipad-mini/64gb-cinza-espacial-wifi")        
           }   
            if(result.text == 989895555){
              $(location).attr("href","https://www.buscape.com.br/smartphone-samsung-galaxy-j8-sm-j810-64gb")     
           }   
           if(result.text == 85236987){
              $(location).attr("href","https://www.buscape.com.br/smartphone-motorola-one-xt1941-64gb")       
           }   

           if(result.text == 85369877444){
              $(location).attr("href","https://loja.asus.com.br/asus-zenfone-max-pro-m1-4gb-64gb-azul-ag-1-4-1005651")       
           } 
           else{
             function novamente(){
             }
              navigator.notification.alert("Erro !! Codigo nao encontrado !!");
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



