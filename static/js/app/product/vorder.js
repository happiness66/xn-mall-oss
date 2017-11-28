$(function () {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'code',
        title: '订单编号',
    }, {
        field: 'type',
        title: '订单类型',
        key: "vproduct_type",
        keyCode: '808907',
        formatter: function(v,data){
        	return Dict.getNameForList1("vproduct_type","808907",data.product.type);
        },
    }, {
        field: 'reCardno',
        title: '卡号',
    }, {
        field: 'reName',
        title: '名字',
    }, {
        field: 'amount',
        title: '充值金额(元)',
        formatter: moneyFormat
    }, {
        field: 'payAmount',
        title: '支付菜狗币金额',
        formatter: moneyFormat
    }, {
        field: 'amount',
        title: '下单人',
        formatter: function(v, data){
        	return data.applyUserDetail.mobile
        },
    }, {
        field: 'status',
        title: '订单状态',
        type: "select",
        key: "vorder_status",
        keyCode: '808907',
        formatter: Dict.getNameForList("vorder_status","808907"),
        search: true,
    },  {
        field: 'applyDatetime',
        title: '下单时间',
        type: "datetime",
        formatter: dateTimeFormat
    }, {
        field: 'remark',
        title: '备注',
    }];

    buildList({
        columns: columns,
        pageCode: '808665',
		searchParams:{
			companyCode: OSS.company
		}
    });
    
    $('#cannelBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        if (selRecords[0].status != 0 && selRecords[0].status != 1 ) {
            toastr.info("当前订单状态不能取消订单!");
            return;
        }
        
        window.location.href = "vorder_addedit.html?Code=" + selRecords[0].code;
		
    });
    
    $('#exchangeBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        if (selRecords[0].status != 1 ) {
            toastr.info("当前订单状态不能兑换!");
            return;
        }
        
        var dataCode = [];
			dataCode.push(selRecords[0].code);
        
        confirm("确认兑换？").then(function() {
            reqApi({
                code: '808653',
                json: { "codeList": dataCode}
            }).then(function() {
                toastr.info("操作成功");
                $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
            });
        },function(){});

    });
    
     $('#detail2Btn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        window.location.href = "vorder_addedit.html?Code=" + selRecords[0].code + "&detail=1";
		
    });
    
    
});