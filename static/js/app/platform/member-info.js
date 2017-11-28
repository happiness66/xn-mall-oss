$(function() {
	
	var userId = getQueryString('userId');
	var mobile = getQueryString('mobile');
	
	var fields = [{
    	field : 'mobile',
		title : '手机号',
        readonly: true
    }, {
		title: '用户资料',
		field: 'pdf',
		type: "img",
	}, {
		title: '车牌号',
		field: 'remark',
	}];
	
	buildDetail({
		fields: fields,
		code:{
			userId: userId
		},
		detailCode:'805056',
		addCode:'805072',
		editCode:'805072',
		beforeSubmit: function(data){
			data.userId = userId;
			return data;
		}
	});
	
	
});