$(function() {
	
	var code = getQueryString('code');
	
	var fields = [{
		field: 'kind',
		type: 'hidden',
		value: '1'
	},{
		title : '名称',
		field : 'ckey',
		required: true,
		readonly: true,
		maxlength: 20
	},{
        title: '数值',
        field: 'cvalue',
        required: true,
        maxlength: 255
	}, {
		title: '备注',
		field: 'remark',
		maxlength: 250
	}];
	
	buildDetail({
		fields: fields,
		code: code,
		detailCode: '615916',
//		addCode: '805023',
		editCode: '615910',
		searchParams:{
			companyCode: OSS.company
		}
	});
	
});