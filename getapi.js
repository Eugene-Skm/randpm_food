var FinalRestList = [];

function jsonget(type, input) {
    // XMLHttpRequestオブジェクトの作成


    var KeyID = "?keyid=622c2ae2a8f79127187182819fa4cc70"
    var PrefURL = 'https://api.gnavi.co.jp/master/PrefSearchAPI/v3/'; //都道府県マスタＵＲＬ
    var RestFindURL = 'https://api.gnavi.co.jp/RestSearchAPI/v3/'
    var shoplist = [];

    var HitPerPage = 5;
    var whichrequest = 0;
    var FinalURL = ''
    switch (type) {
        case 1: //GPS取得の成功時
            var backURl="";
            for(t=0;t<input.length;t++){
                backURl+=input[t]
            }
            FinalURL = RestFindURL + KeyID +backURl;
            console.log(FinalURL)
            whichrequest = 1;
            break;

    }

    if (whichrequest == 1) {
        var request = new XMLHttpRequest();
        request.open('GET', FinalURL +  '&hit_per_page='+HitPerPage, true); // URLを開く
        var data;
        // レスポンスが返ってきた時の処理を記述 
        request.onload = function () {
            data = this.response;
            var hitnum = JSON.parse(data).total_hit_count
            
            console.log(hitnum)
            if (hitnum > 1) {
                HitPerPage = 100;
                data = ""
                for (i = 1; i < hitnum; i += 100) {
                    console.log("a")
                    var requests = new XMLHttpRequest();
                    requests.open('GET', FinalURL + '&hit_per_page=' + HitPerPage + '&offset=' + i, true);
                    requests.send();
                    requests.onload = function () {
                        data = this.response;
                        control_json(data);
                        console.log(FinalRestList.length)
                        if (FinalRestList.length == hitnum) {
                            choice_random(hitnum, FinalRestList)
                            
                            console.log(FinalRestList)
                            FinalRestList = [];
                        }
                    }
                }
            }if(hitnum==1){
                control_json(data)
                console.log(FinalRestList)
                choice_random(1, FinalRestList)
                FinalRestList = [];
            }

        }

        // リクエストをURLに送信
        request.send();
    }
}

function control_json(datas) {
    var obj_data = JSON.parse(datas)
    var restlist = obj_data.rest;

    for (var x = 0; x < restlist.length; x++) {
        FinalRestList.push(restlist[x]);

    }
    //console.log(FinalRestList);

}
