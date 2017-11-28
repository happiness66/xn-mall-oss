$(function () {
	
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'mobile',
        title: '树主人',
        formatter: function(v, data){
        	return data.user.mobile;
        }
    }, {
        field: 'price',
        title: '树价格',
        formatter: moneyFormat
    }, {
        field: 'status',
        title: '状态',
        type: "select",
        key: "hzb_status",
        keyCode:'615907',
        formatter: Dict.getNameForList("hzb_status",'615907'),
        search: true
    }, {
        field: 'totalRockNum',
        title: '被摇次数',
    }, {
        field: 'backAmount1',
        title: '已得人民币',
        formatter: moneyFormat
    }, {
        field: 'backAmount2',
        title: '已得菜狗币',
        formatter: moneyFormat
    }, {
        field: 'backAmount3',
        title: '已得抵金券',
        formatter: moneyFormat
    }];

    buildList({
        columns: columns,
        pageCode: '615115',
		searchParams:{
			status: "effect",
			companyCode: OSS.company
		}
    });
    
    $("#upDownBtn").on("click",function(){
			var selRecords = $("#tableList").bootstrapTable("getSelections");
			if ( selRecords.length <=0){
				toastr.info("请选择记录");
				return;
			}
			var msg = selRecords[0].status == 1 ? "确认冻结？": "确认解冻？";

			confirm(msg).then(function() {
				reqApi({
					code: '615114',
					json: {"code": selRecords[0].code}
				}).then(function() {
					toastr.info("操作成功");
					$('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
				});
			});
	});
    
	$('#shakeRecordBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }

        window.location.href = "shakeRecord.html?hzbCode=" + selRecords[0].code;

    });
    
    $('#luckMomListBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }

        window.location.href = "luckMomList.html?hzbCode=" + selRecords[0].code;

    });
    
    
});