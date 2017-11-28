$(function() {

    var code = getQueryString('code');
    var view = getQueryString('v');
    var userId = getUserId();

    var fields = [{
        field: 'kind',
        type: 'hidden',
        value: '1'
    }, {
        field: 'name',
        title: '商家名称',
        readonly: view,
        required: true,
        maxlength: 32
    }, {
        field: 'type',
        title: '分类',
        type: 'select',
        required: true,
        listCode: '808007',
        keyName: 'code',
        valueName: 'name',
        readonly: view,
    }, {
        field: 'legalPersonName',
        title: '法人姓名',
        readonly: view,
        required: true,
        maxlength: 32
    }, {
        field: 'mobile',
        title: '登录名(店铺主人)',
        mobile: true,
        readonly: view,
        required: true
    }, {
        field: 'bookMobile',
        title: '联系电话',
        mobile: true,
        required: true,
        readonly: view,
    }, {
        field: 'smsMobile',
        title: '短信手机号',
        mobile: true,
        required: true,
        readonly: view,
    }, {
        title: '地址',
        field: "province1",
        type: 'select',
        key: "product_location",
        keyCode: '808907',
        required: true,
        type: 'citySelect',
        readonly: view,
    }, {
        title: '详细地址',
        field: 'address',
        required: true,
        maxlength: 255,
        readonly: view
    }, {
        title: '经度',
        field: 'longitude',
        west: true,
        readonly: view,
        hidden: true
    }, {
        title: "纬度",
        field: 'latitude',
        north: true,
        readonly: view,
        hidden: true
    }, {
        field: 'slogan',
        title: '广告语',
        required: true,
        maxlength: 255,
        readonly: view
    }, {
        field: 'advPic',
        title: '店铺缩略图',
        type: 'img',
        required: true,
        readonly: view
    }, {
        field: 'pic',
        title: '商家图片',
        type: 'img',
        required: true,
        readonly: view
    }, {
        field: 'description',
        title: '商家描述',
        type: 'textarea',
        required: true,
        readonly: view
    }, {
        field: 'uiLocation',
        title: '位置',
        type: 'select',
        key: "product_location",
        keyCode: '808907',
        required: true,
    }, {
        field: 'isDefault',
        title: '是否默认',
        type: 'select',
        data: {
            "1": "是",
            "0": "否",
        },
        required: true,
    }, {
        field: 'rate2',
        title: '使用抵金券比例'
    }, {
        field: 'rate3',
        title: '返点人民币比例'
    }, {
        field: 'rate1',
        title: '返点菜狗币比例'
    }, {
        field: 'rate4',
        title: '返点抵金券比例'

    }, {
        field: 'createDatetime',
        title: '入驻时间',
        formatter: dateTimeFormat,
    }, {
        field: 'creator',
        title: '创建人',
    }, {
        field: 'updateDatetime',
        title: '更新时间',
        formatter: dateTimeFormat,
    }, {
        field: 'remark',
        title: '备注',
        readonly: view
    }];


    var options = {
        fields: fields,
        view: view,
        code: code,
        detailCode: '808216',
    };
    buildDetail(options);
});