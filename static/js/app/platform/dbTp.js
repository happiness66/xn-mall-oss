$(function () {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'currentPeriods',
        title: '期数',
    }, {
        title: '中奖金额',
        field: 'toAmount',
		number: true,
        amount:true,
        formatter:moneyFormat
    }, {
        title: '中奖币种',
        field: 'toCurrency',
		key: 'currency',
        formatter: Dict.getNameForList("currency","802006"),
    }, {
        title: '总次数',
        field: 'totalNum',
    }, {
        title: '每人最大投资次数',
        field: 'maxNum',
    }, {
        title: '人次单价',
        field: 'fromAmount',
        formatter:moneyFormat
    }, {
        title: '单价币种',
        field: 'fromCurrency',
		key: 'currency',
        formatter: Dict.getNameForList("currency","802006"),
    }, {
        field: 'status',
        title: '状态',
        type: 'select',
        key: "jewel_template_status",
        keyCode:'615907',
        formatter: Dict.getNameForList("jewel_template_status",'615907'),
        search: true
    }];

    buildList({
        columns: columns,
        pageCode: '615005',
		searchParams:{
			companyCode: OSS.company
		}
    });
    
    
    
    $('#upBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status == 1) {
            toastr.info("已上架");
            return;
        }
        confirm("确认上架？").then(function() {
            reqApi({
                code: '615003',
                json: { "code": selRecords[0].code }
            }).then(function() {
                toastr.info("操作成功");
                $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
            });
        });

    });
    
    $('#downBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status != 1) {
            toastr.info("还未上架");
            return;
        }
        confirm("确认下架？").then(function() {
            reqApi({
                code: '615004',
                json: { "code": selRecords[0].code }
            }).then(function() {
                toastr.info("操作成功");
                $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
            });
        });

    });
    
    $('#edit2Btn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status == 1) {
            toastr.info("已上架，不可以修改信息");
            return;
        }
        window.location.href = "dbTp_addedit.html?Code=" + selRecords[0].code;
    });

    
});