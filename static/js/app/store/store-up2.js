$(function() {

    var code = getQueryString('code');

    var fields = [{
        field: 'kind',
        type: 'hidden',
        value: '1'
    }, {
        field: 'uiLocation',
        title: '位置',
        type: 'select',
        key: "product_location",
        keyCode: '808907',
        required: true,
    }, {
        field: 'uiOrder',
        title: '序号',
        type: "hidden",
        value: "0",
        required: true,
    }, {
        field: 'isDefault',
        title: '是否默认',
        type: 'select',
        data: {
            1: "是",
            0: "否",
        },
        required: true,
    }, {
        field: 'rate2',
        title: '使用抵金券比例',
        min: 0,
        required: true,
    }, {
        field: 'rate3',
        title: '返点人民币比例',
        min: 0,
        required: true,
    }, {
        field: 'rate1',
        title: '返点菜狗币比例',
        min: 0,
        required: true,
    }, {
        field: 'rate4',
        title: '返点抵金券比例',
        min: 0,
        required: true,
    }];

    buildDetail({
        fields: fields,
        code: code,
        detailCode: '808216',
        buttons: [{
            title: "上架",
        }, {
            title: "返回",
        }]
    });

    $("#btn-0").off("click").click(function() {
        var data = $('#jsForm').serializeObject();
        data.code = code;

        reqApi({
            code: '808204',
            json: data
        }).then(function() {
            sucDetail();
        });

    });

    //返回
    $("#btn-1").click(function() {
        goBack();
    })
});