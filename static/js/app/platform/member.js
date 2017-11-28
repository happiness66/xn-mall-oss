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
		field : 'loginName',
		title : '登录名',
	}, {
        field: 'userRefereeName',
        title: '推荐人'
    }, {
		field : 'status',
		title : '状态',
        type: 'select',
        key: 'user_status',
        formatter: Dict.getNameForList('user_status',"807706"),
	}, {
		field : 'updateDatetime',
		title : '注册时间',
		formatter: dateTimeFormat
	}, {
        field: 'remark',
        title: '车牌号'
    }];

    buildList({
        columns: columns,
        pageCode: '805054',
		searchParams:{
			kind: 'f1'
		}
    });
    
    
    $('#accountQueryBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        window.location.href = "member_account.html?userId=" + selRecords[0].userId+"&member=1";
    });
    
    
    $('#detail2Btn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        window.location.href = "member_detail2.html?userId=" + selRecords[0].userId;
    });
    
    $('#infoBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        window.location.href = "member_info.html?userId=" + selRecords[0].userId+"&mobile=" + selRecords[0].mobile;
    });
    
});