$(function() {
	var code = getQueryString('code');
	var pCode = getQueryString('pCode');
	var pc=  getQueryString('pc');
	
	var fields = [{
		title: '参数名',
		field: 'dkey',
		required: true,
		type: 'select',
		listCode: '808037',
		params: {
			productCode:pc,
			dkey: 0
		},
		keyName: 'code',
		valueName: 'dvalue',
		defaultOption: '选此创建种类',		
	}, {
		title: '参数值',
		field: 'dvalue',
		required: true,
		maxlength: 25
	}, {
		title: '序号',
		field: 'orderNo',
		required: true,
		number: true
	}];
	
	buildDetail({
		fields: fields,
		code: code,
		addCode:'808030',
		detailCode: '808036',
		editCode: '808032',
		beforeSubmit: function(data){
			if(code)
				data.code=code;
			else
				data.productCode=pCode;
			if(data.dkey!=0){
				data.dkey = $("#dkey").val();
			}
			return data;
		}
	});
});