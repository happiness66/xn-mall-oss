$(function () {
    
    var columns = [{
            field: '',
            title: '',
            checkbox: true
        }, {
            field: 'name',
            title: '名称',
            search: true
        }, {
            title: "汇率",
            field: "rate",
        },
        {
            field: 'amount',
            title: '余额',
            formatter: moneyFormat
        }, {
            field: 'usedAmount',
            title: '已出金额',
            formatter: moneyFormat
        }, {
            title: "最后入金人",
            field: "addUser",
        }, {
            title: '最后入金时间',
            field: "addDatetime",
            formatter: dateTimeFormat
        }, {
            field: 'remark',
            title: '备注'
        }
    ];

    buildList({
        columns: columns,
        pageCode: '808515',
        searchParams: {
            companyCode: OSS.company
        }
    });
    $('#enterBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = 'capitalPool_enter.html?code=' + selRecords[0].code;
    });
    $('#changeBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = 'capitalPool_change.html?code=' + selRecords[0].code;
    }); //
    $('#outDetailBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = 'capitalPoolRecord.html?code=' + selRecords[0].code;
    });
});