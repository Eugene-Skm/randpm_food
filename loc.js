var lat;
var lng;
var data;

       if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {

                 data = position.coords;

                 lng = data.longitude; //緯度
                 lat = data.latitude; //経度
                
                
               
            },
            function (error) {
                switch (error.code) {
                    case 1: //PERMISSION_DENIED
                        alert("位置情報の利用が許可されていません");
                       
                        var baseElement = document.getElementById('gps_eror');
                        baseElement.style.display = 'inline-block';
                        break;
                    case 2: //POSITION_UNAVAILABLE
                        alert("現在位置が取得できませんでした");
                        break;
                    case 3: //TIMEOUT
                        alert("タイムアウトになりました");
                        break;
                    default:
                        alert("その他のエラー(エラーコード:" + error.code + ")");
                        break;
                }
            }
        );
    } 
   

function getinfo(js) {
        if(js==1){
    var dist= document.getElementById('loc_dist').value;
                var drink= document.getElementById('bottomless_cup').checked;
                var buffe= document.getElementById('buffet').checked;
                var output=['&latitude=' +lat,'&longitude=' +lng,'&range=' +dist]
                if(drink){
                    output.push("&bottomless_cup=1");
                }else{
                    output.push("&bottomless_cup=0");
                }
                if(buffe){
                    output.push("&buffet=1");
                }else{
                    output.push("&buffet=0");
                }
     jsonget(1,output)
          }       
}
