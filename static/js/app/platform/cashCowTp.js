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
        field: 'price',
        title: '价格',
        formatter: moneyFormat,
    }, {
    	field: 'status',
        title: '状态',
        type: "select",
        key: "jewel_template_status",
        keyCode:'615907',
        formatter: Dict.getNameForList("jewel_template_status",'615907'),
        search: true
    }, {
        field: 'backAmount1',
        title: '可摇人民币',
        formatter:moneyFormat
    }, {
        field: 'backAmount2',
        title: '可摇菜狗币',
        formatter:moneyFormat
    }, {
        field: 'backAmount3',
        title: '可摇抵金券',
        formatter:moneyFormat
    }];

    buildList({
        columns: columns,
        pageCode: '615105',
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
                code: '615103',
                json: { "code": selRecords[0].code}
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
                code: '615104',
                json: { "code": selRecords[0].code}
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
        
        window.location.href = "cashCowTp_addedit.html?Code=" + selRecords[0].code;
    });

    
});