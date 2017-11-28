$(function() {
    var code = getQueryString('code');

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        title: '流水编号',
        field: 'id',
    },  {
        title: '赠送人',
        field: 'loginName',
    }, {
        field: 'toCurrency',
        title: '赠送币种',
        type: 'select',
        key: "currency",
        keyCode: "802006",
        formatter: Dict.getNameForList("currency", "802006"),
        search: true
    }, {
        field: 'toAmount',
        title: '赠送金额',
        formatter: moneyFormat
    },{
        title: "剩余资金",
        field: "remainAmount",
        formatter: moneyFormat
    }, {
        title: '创建时间',
        field: 'createDatetime',
        formatter: dateTimeFormat
    }, {
        title: "备注",
        field: "remark"
    }];

    buildList({
        columns: columns,
        pageCode: '801145',
        searchParams: {
            poolCode: code,
            companyCode: OSS.company
        },
        beforeDetail: function(data) {
            window.location.href = "./ledger_addedit.html?v=1&code=" + data.id;
        }
    });
    $('#addBtn').remove();
    $('#editBtn').remove();
    $('#ledgerBtn').remove();

    $('.tools .toolbar').append('<li style="display:block;" id="backBtn"><span><img src="/static/images/t01.png"></span>返回</li>');
    $('#backBtn').on('click', function() {
        window.location.href = "./activeFinance.html"
    });


});