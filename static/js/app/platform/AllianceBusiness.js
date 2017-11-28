$(function () {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
		field : 'loginName',
		title : '登录名',
		search: true
	}, {
		field : 'mobile',
		title : '手机号'
	}, {
		title : '分成比例',
    	field : 'divRate',
	}, {
		field : 'status',
		title : '状态',
        type: 'select',
		search: true,
        key: 'user_status',
        formatter: Dict.getNameForList('user_status',"807706"),
	}, {
        field: 'remark',
        title: '备注'
    },];

    buildList({
        columns: columns,
        pageCode: '805054',
		searchParams:{
			kind: '05'
		},
    });
    
    $('#detail2Btn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        window.location.href = "AllianceBusiness_detail2.html?userId=" + selRecords[0].userId+"&v=1";
    });
    
    
    $('#editBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "AllianceBusiness_addedit.html?userId="+selRecords[0].userId+"&v=1";
    });
    
    //发货
    $('#fahuoBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        window.location.href = "AllianceBusiness_fahuo.html?userId=" + selRecords[0].userId;
    });
    
    //代销
    $('#daixiaoBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
		window.location.href = "../store/daixiaoLedger.html?Code=" + selRecords[0].code+"&owner="+selRecords[0].userId+"&c=CGB";
    });
    
    //抵金券
    $('#jifenBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
		window.location.href = "../store/daixiaoLedger.html?Code=" + selRecords[0].code+"&owner="+selRecords[0].userId+"&c=CGJF";
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