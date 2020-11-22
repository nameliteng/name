// 入口函数
$(() => {

    getcmentlist()
    $('#btnOk').on('click', addpl)
})
//跟标签
let baseurl = 'http://www.liulongbin.top:3006'
//获取列表
function getcmentlist() {
    $.ajax({
        url: baseurl + '/api/cmtlist',
        method: 'get',
        success: function (res) {
            console.log(res);
            let strhtml = template('tplpL', res);
            $('#cmt-list').html(strhtml);
        }
    })
}
function addpl() {
    let strData = $('#formAddCmt').serialize();
    $.ajax({
        url: baseurl + '/api/addcmt',
        method: 'post',
        data: strData,
        success: function (res) {
            console.log(res);
            if (res.status !== 201) return (res.msg)
            getcmentlist()
        }
    })
}
