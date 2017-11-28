$(function () {
    
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
		field : 'mobile',
		title : '手机号',
		search: true
	}, {
		field : 'userRefereeName',
		title : '加盟商'
	}, {
		field : 'status',
		title : '状态',
        key: 'user_status',
        formatter: Dict.getNameForList('user_status',"807706"),
	}, {
		field : 'createDatetime',
		title : '入驻时间',
        formatter: dateTimeFormat
	}, {
        field: 'remark',
        title: '备注'
    }];

    buildList({
        columns: columns,
        pageCode: '805054',
		searchParams:{
			kind: 'f2'
		}
    });
    
    $('#detail2Btn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        window.location.href = "business_detail2.html?userId=" + selRecords[0].userId;
    });
    
    //结算情况
    $('#balanceBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        window.location.href = "business_balance.html?userId=" + selRecords[0].userId;
    });
    
    //回收情况
    $('#returnBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        reqApi({
			code:'808219',
			json:{
				'userId' : selRecords[0].userId
			}
		}).done(function(d){
	        window.location.href = "yyLedger.html?code=" + d[0].store.code + "&payType=31";
	    });
	    
    });
    
    //账户查询
    $('#accountQueryBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        window.location.href = "member_account.html?userId=" + selRecords[0].userId+"&business=1";
    });
    
});