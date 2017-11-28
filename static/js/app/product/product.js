$(function () {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'name',
        title: '商品名称',
        search: true,
    }, {
        field: 'category',
        title: '大类',
        search: true,
		type: 'select',
		listCode: '808007',
		params: {
			type: '1',
			parentCode: 0
		},
		keyName: 'code',
		valueName: 'name',
		
    }, {
        field: 'type',
        title: '小类',
		type: 'select',
		listCode: '808007',
		keyName: 'code',
		valueName: 'name',
    }, {
        field: 'originalPrice',
        title: '原价/市场价',
        formatter: moneyFormat,
    }, {
        field: 'status',
        title: '状态',
        type: "select",
        key: "product_status",
        keyCode: "808907",
        formatter: Dict.getNameForList("product_status","808907"),
        search: true
    }, {
        field: 'price2',
        title: '菜狗币价',
        formatter: moneyFormat,
    }, {
        field: 'price3',
        title: '抵金券价',
        formatter: moneyFormat,
    }, {
        field: 'location',
        title: '位置',
        type:'select',
        key:"product_location",
        keyCode:'808907',
        formatter: Dict.getNameForList("product_location","808907"),
        search: true,
    }, {
        field: 'remark',
        title: '备注',
    }];

    buildList({
        columns: columns,
        pageCode: '808025',
        deleteCode:'808011',
		searchParams:{
			companyCode: OSS.company
		}
    });
    
    $('#up2Btn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status == 3) {
            toastr.info("已上架");
            return;
        }
        
        window.location.href = "product_up2.html?Code=" + selRecords[0].code;

    });
    
    $('#downBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status != 3) {
            toastr.info("还未上架");
            return;
        }
        confirm("确认下架？").then(function() {
            reqApi({
                code: '808014',
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
        if (selRecords[0].status == 3) {
            toastr.info("已上架，不可以修改信息");
            return;
        }
        
        window.location.href = "product_addedit.html?Code=" + selRecords[0].code;
    });
    
    $('#detail2Btn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        window.location.href = "product_detail2.html?Code=" + selRecords[0].code+"&v=1";
    });
    
    $('#productParamBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        window.location.href = "productParam.html?Code=" + selRecords[0].code+"&pName=" + selRecords[0].name;
    });
    
    
});