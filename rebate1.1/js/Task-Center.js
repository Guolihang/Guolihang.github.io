
    $(document).ready(function() {
        var  http_severs="http://ngrok-007.queen520.cn";
        $.ajax({
            type: 'get',
            url: http_severs+"/shop/api/users/userInfo/for/task/index",
            success: function(data) {
                console.log(data)
            },
            error: function(data) {
                errCallback(data);
            }
        });
    })
