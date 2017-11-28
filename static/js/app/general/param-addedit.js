$(function() {
	var code = getQueryString('code');
	
	var fields = [{
		title: '参数键',
		field: 'ckey',
		required: true,
		maxlength: 20
	}, {
		title: '参数值',
		field: 'cvalue',
		required: true,
		maxlength: 25
	}, {
		title: '备注',
		field: 'remark',
		maxlength: 250
	}];
	
	buildDetail({
		fields: fields,
		code: code,
//		addCode:"807710",
		detailCode: '615916',
		editCode: '615910'
	});
});