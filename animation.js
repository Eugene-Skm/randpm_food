$(function(){
    $('#gps_detail_on').on('click',function(){
        $('#gps_detail').slideToggle('fast');
    });
});

$(function(){
    $('#rolet_st').on('click',function(){
        if($('#empty').css('display')=='none'){
            $('#result').slideToggle('fast');
            $('#empty').slideToggle('fast');
            setTimeout(function(){
                 $('#result').slideToggle('fast');
                $('#empty').slideToggle('fast');
            },500);
            
        }else if($('#empty').css('display')=='inline-block'){
            console.log($('#empty').css('display'))
            $('#result').slideToggle('fast');
            $('#empty').slideToggle('fast');
            $('#empty').css('display','none');
            
        }
    });
});