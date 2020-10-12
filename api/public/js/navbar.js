$(document).ready(function(){

    $('#acceptCookie').on('click', acceptCookie);
});


function acceptCookie()
{
    $.ajax({
        type:'post',
        url:'/acceptCookie',
        success:function(data)
        {
            if(data.success)
            {
                $('#cookieDiv').css('display','none');
            }
        }
    })
}

