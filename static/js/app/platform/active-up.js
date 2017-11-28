$(function() {
    var code = getQueryString('code');

    var fields = [{
        field: 'location',
        title: '位置',
        type: "hidden",
        value: "0",
        required: true,
    }, {
        title: "阅读时长(秒)",
        field: "readTimes",
        number: true,
        required: true
    }, {
        field: 'orderNo',
        title: 'UI次序',
        number: true,
        required: true,
    }, {
        field: 'remark',
        title: '备注',
        maxlength: 255
    }];

    buildDetail({
        fields: fields,
        code: code,
        detailCode: '801051'
    });

    $("#subBtn").off("click").click(function() {
        if ($('#jsForm').valid()) {
            confirm("确认上架？").then(function() {
                var data = $('#jsForm').serializeObject();
                data.code = code;

                reqApi({
                    code: '801043',
                    json: data
                }).then(function() {
                    sucDetail();
                });

            });
        }
    });
});