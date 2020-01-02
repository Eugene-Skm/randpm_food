
var cc=0;
$(function(){
    $('#gps_detail_on').on('click',function(){
        $('#gps_detail').slideToggle('fast');
    });
});

$(function(){
    $('#rolet_st').on('click',function(){
        if(cc==0){
            $('#result').slideToggle('fast');
            cc++;
        }else if($('#empty').css('display')=='none'){
            $('#result').slideToggle('fast');
            $('#empty').slideToggle('fast');
            setTimeout(function(){
                 $('#result').slideToggle('fast');
                $('#empty').slideToggle('fast');
            },500);
            
        }
    });
});