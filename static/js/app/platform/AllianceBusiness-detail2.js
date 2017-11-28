$(function() {
	
	var userId = getQueryString('userId');
	var view = 1;
	
	var fields = [{
		field: 'kind',
		type: 'hidden',
		value: '1'
	},{
		title : '登录名',
		field : 'loginName',
		required: true,
		maxlength: 20
	},{
		title : '手机号',
    	field : 'mobile',
    	mobile:true,
		required: true
    }, {
        title: '真实姓名',
        field: 'realName',
        chinese: true,
		required: true
    },  {
        title: '证件类型',
        field: 'idKind',
        type: 'select',
        key: 'id_kind',
        keyCode: "807706"
	},{
        title: '证件号',
        field: 'idNo',
        idCard: true
    }, {
		title : '分成比例',
    	field : 'divRate',
		required: true,
	},{
		title: '备注',
		field: 'remark',
		maxlength: 250
	}];
	
	buildDetail({
		fields: fields,
		code:{
			userId: userId
		},
		view:view,
		detailCode:'805056'
	});
	
});