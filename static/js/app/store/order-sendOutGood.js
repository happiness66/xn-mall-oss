$(function() {
	
	var code = getQueryString('code');
	
	var fields = [{
		field: 'kind',
		type: 'hidden',
		value: '1'
	}, {
        field: 'orderCode',
        title: '发货单号',
		required: true,
    }, {
		title: '物流公司',
		field: 'logisticsCompany',
		type: 'select',
		key: 'kd_company',
		keyCode: "808907",
		required: true,
	}, {
		title: '物流单号',
		field: 'logisticsCode',
		required: true,
	}, {
		field: 'deliverer',
		title: '发货人',
		required: true,
	}, {
		field: 'deliveryDatetime',
		title: '发货时间',
        type: "datetime",
        formatter: dateTimeFormat,
		required: true,
	},{
		field: 'pdf',
		title: '物流单',
		type:'img',
		
	}, {
        field: 'remark',
        title: '备注',
        maxlength: 250
    }];
	
	buildDetail({
		fields: fields,
	});
	
	$("#subBtn").off("click").click(function(){
		if ($('#jsForm').valid()) {
			var data = $('#jsForm').serializeObject();
			data.code = code;
	    	reqApi({
	            code: '808054',
	            json:  data
	        }).then(function() {
	           sucDetail();
	        });
       }
	})
	
});