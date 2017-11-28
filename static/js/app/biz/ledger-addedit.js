$(function() {
    var code = getQueryString('code');

    var fields = [{
        title: '流水编号',
        field: 'id',
    }, {
        title: '赠送人',
        field: 'loginName',
    }, {
        field: 'toCurrency',
        title: '赠送币种',
        type: 'select',
        key: "currency",
        keyCode: "802006"
    }, {
        field: 'toAmount',
        title: '赠送金额',
        formatter: moneyFormat
    },{
        title: "剩余资金",
        field: "remainAmount",
        formatter: moneyFormat
    },  {
        title: '创建时间',
        field: 'createDatetime',
        formatter: dateTimeFormat
    }, {
        title: "备注",
        field: "remark"
    }];

    var options = {
        fields: fields,
        code: {
            id: code
        },
        detailCode: '801146',
        view: true
    };

    buildDetail(options);
});