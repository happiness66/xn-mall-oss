$(function() {
	
	var code = getQueryString('code');
	
	var fields = [{
		field: 'kind',
		type: 'hidden',
		value: '1'
	}, {
        field: 'rate',
        title: '菜狗币比例',
        number: true,
        min: 0,
        required: true,
	}, {
        field: 'orderNo',
        title: '序号',
        required: true,
    }, {
        field: 'remark',
        title: '备注',
        maxlength: 250,
    }];
	
	buildDetail({
		fields: fields,
		code:code,
		detailCode: '808616',
		editCode: '808602',
	});
	
	$("#subBtn").off("click").click(function() {
		if($('#jsForm').valid()){
			confirm("确认上架？").then(function() {
				var data = $('#jsForm').serializeObject();
				data.code = code;
				data.location  = 0;
				
		    	reqApi({
		            code: '808603',
		            json:  data
		        }).then(function() {
		           sucDetail();
		        });
		        
			});
		}
    });
});