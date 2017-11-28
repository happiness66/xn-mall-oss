$(function() {
	var code = getQueryString('code');
	var pName = getQueryString('pName');
	
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'dkey',
		title : '参数名',
		type: 'select',
		listCode: '808037',
		params: {
			productCode:code,
			dkey: 0
		},
		keyName: 'code',
		valueName: 'dvalue',
	}, {
    	field : 'dvalue',
		title : '参数值'
    }, {
		field: 'orderNo',
        title: '次序',
        sortable: true,
	}];
	
	buildList({
		columns: columns,
		pageCode: '808037',
		deleteCode: '808031',
		searchParams:{
			productCode: code,
			companyCode: OSS.company
		}
	});
	
	$("#pName").html("商品名称：  "+pName);
	$("#up2Btn").hide();
	$("#downBtn").hide();
	$("#detail2Btn").hide();
	$("#productParamBtn").hide();
	
	$('#edit2Btn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        window.location.href = "productParam_addedit.html?Code=" + selRecords[0].code+"&pc="+ code;
    });
    
    $('#addBtn').click(function() {
        
        window.location.href = "productParam_addedit.html?pCode=" + code+"&pc="+ code;
    });
    
    
});

