$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'activityCode',
        title: '活动',
        type: "select",
        listCode: "801052",
        params: {
            type: "6"
        },
        keyName: "code",
        valueName: "title",
        searchName: "title",
        search: true
    }, {
        title: "购买金额",
        field: "czAmount",
        amount: true,
        formattter: moneyFormat
    }, {
        field: 'amount',
        title: '活动资金',
        formatter: moneyFormat
    }, {
        title: "已使用资金",
        field: 'usedAmount',
        formatter: moneyFormat
    }, {
        title: "剩余资金",
        field: 'syAmount',
        formatter: function(v, data) {
            return moneyFormat(data.amount - data.usedAmount);
        }
    }, {
        title: '最近修改时间',
        field: "addDatetime",
        formatter: dateTimeFormat
    }, {
        field: 'remark',
        title: '备注'
    }];
    buildList({
        columns: columns,
        pageCode: '801135',
        searchParams: {
            companyCode: OSS.company
        },
        beforeDetail: function(data) {
            window.location.href = "./activeFinance_detail.html?v=1&code=" + data.code;
        }
    });
    $("#ledgerBtn").click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length < 1) {
            toastr.error("请选择一条记录");
            return;
        };
        window.location.href = "./activeFinanceLedger.html?code=" + selRecords[0].code;
    });
    $("#exportBtn").remove();
});