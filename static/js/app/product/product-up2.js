$(function() {
	
	var code = getQueryString('code');
	
	var fields = [{
		field: 'kind',
		type: 'hidden',
		value: '1'
	}, {
        field: 'originalPrice',
        title: '原价/市场价',
        required: true,
        amount: true,
        formatter: moneyFormat,
    }, {
        field: 'price2',
        title: '菜狗币价',
        amount: true,
        formatter: moneyFormat,
        required: true,
    }, {
        field: 'price3',
        title: '抵金券价',
        amount: true,
        formatter: moneyFormat,
        required: true,
    }, {
        field: 'location',
        title: '位置',
        type:'select',
        key:"product_location",
        keyCode:'808907',
        required: true,
    },{
        field: 'orderNo',
        title: '序号',
        required: true,
    }];
	
	buildDetail({
		fields: fields,
		code:code,
		detailCode: '808026',
		addCode: '808010',
		editCode: '808012',
	});
	
	$("#subBtn").off("click").click(function() {
		if($('#jsForm').valid()){
			confirm("确认上架？").then(function() {
				var data = $('#jsForm').serializeObject();
				data.code = code;
				data.price1="0";
				
		    	reqApi({
		            code: '808013',
		            json:  data
		        }).then(function() {
		           sucDetail();
		        });
		        
			});
		}
    });
});