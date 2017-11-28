$(function() {
    var view = getQueryString('v');
    var type = getQueryString('type');
    var code = getQueryString('code');
    var start = {
        elem: '#startDatetime',
        format: 'YYYY-MM-DD hh:mm:ss',
        min: laydate.now(),
        istime: true,
        istoday: false,
        choose: function(datas) {
            var d = new Date(datas);
            d.setDate(d.getDate());
            datas = dateTimeFormat(d);
            end.min = datas;
            end.start = datas
        }
    };
    var end = {
        elem: '#endDatetime',
        format: 'YYYY-MM-DD hh:mm:ss',
        min: laydate.now(),
        istime: true,
        istoday: false,
        choose: function(datas) {
            var d = new Date(datas);
            d.setDate(d.getDate());
            datas = dateTimeFormat(d);
            start.max = datas;
        }
    };

    var fields = [{
        title: "活动类型",
        field: "type",
        hidden: true,
        required: true,
        value: "6"
    }, {
        field: "title",
        title: '活动标题',
        maxlength: 255,
        required: true,
        readonly: view
    }, {
        field: 'advPic',
        title: "广告图",
        type: "img",
        single: true,
        required: true,
        readonly: view
    }, {
        title: '广告语',
        field: "slogn",
        maxlength: 255,
        required: true,
        readonly: view
    }, {
        title: "赠送币种",
        field: "currency",
        type: "select",
        required: true,
        key: "currency",
        keyCode: "802006",
    }, {
        title: '直接推荐人获得数量',
        field: 'number',
        required: true,
        number: true,
        readonly: view,
        formatter: moneyFormat
    }, {
        title: '间接推荐人获得数量',
        field: 'indirectNumber',
        required: true,
        readonly: view,
        number: true,
        formatter: moneyFormat
    }, {
        title: '开始时间',
        field: 'startDatetime',
        type: "datetime",
        formatter: dateTimeFormat,
        dateOption: start,
        readonly: view,
        required: true
    }, {
        title: '结束时间',
        field: 'endDatetime',
        type: "datetime",
        formatter: dateTimeFormat,
        dateOption: end,
        readonly: view,
        required: true
    }, {
        field: 'description',
        title: '活动详述',
        type: "textarea",
        required: true,
        readonly: view,
    }, {
        title: "备注",
        field: "remark",
        maxlength: 255,
        readonly: view
    }];
    var viewList = [{
        title: "阅读时长(秒)",
        field: "readTimes",
        formatter: function(v, data) {
            return data.readTimes;
        }
    }, {
        title: "UI次序",
        field: "orderNo",
        formatter: function(v, data) {
            return data.orderNo;
        }
    }, {
        title: "状态",
        field: "status",
        type: "select",
        data: {
            "0": "未上架",
            "1": "已上架",
            "2": "已下架"
        },
        readonly: view
    }, {
        title: "浏览人数",
        field: "count",
        readonly: view,
        formatter: function(v, data) {
            return data.count;
        }
    }];
    if (view) {
        fields = fields.concat(viewList);
    };
    buildDetail({
        fields: fields,
        code: code,
        detailCode: '801051',
        addCode: '801040',
        editCode: '801042',
        view: view,
        beforeSubmit: function(data) {
            data.number = data.number * 1000;
            data.indirectNumber = data.indirectNumber * 1000;
            return data;
        }
    });

});