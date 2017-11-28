$(function () {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'name',
        title: '名称',
        search: true,
    }, {
        field: 'type',
        title: '类型',
		type: 'select',
        key: "vproduct_type",
        keyCode: "808907",
        formatter: Dict.getNameForList("vproduct_type","808907"),
    }, {
        field: 'price',
        title: '面值档位',
    }, {
        field: 'rate',
        title: '菜狗币比例',
    }, {
        field: 'status',
        title: '状态',
        type: "select",
        key: "vproduct_status",
        keyCode: "808907",
        formatter: Dict.getNameForList("vproduct_status","808907"),
        search: true
    }, {
        field: 'remark',
        title: '备注',
    }];

    buildList({
        columns: columns,
        pageCode: '808615',
        deleteCode:'808616',
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
        if (selRecords[0].status == 3) {
            toastr.info("已上架");
            return;
        }
        
        window.location.href = "vproduct_up2.html?Code=" + selRecords[0].code;

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
                code: '808604',
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
        
        window.location.href = "vproduct_addedit.html?Code=" + selRecords[0].code;
    });
    
    $('#detail2Btn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        window.location.href = "vproduct_detail2.html?Code=" + selRecords[0].code+"&v=1";
    });
    
    
    
});