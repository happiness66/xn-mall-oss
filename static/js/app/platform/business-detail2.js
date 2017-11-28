$(function() {
	
	var userId = getQueryString('userId');
	var view = 1;
	
	var fields = [{
        field: 'loginName',
        title: '登录名',
    }, {
    	field : 'mobile',
		title : '手机号',
    }, {
        field: 'realName',
        title: '真实姓名',
    }, {
        field: 'idKind',
        title: '证件类型',
        type: 'select',
        key: 'id_kind',
        keyCode: "807706"
	}, {
        field: 'idNo',
        title: '证件号',
    }, {
        field : 'updateDatetime',
		title : '注册时间',
		formatter: dateTimeFormat
    },{
        field: 'bankcardList',
        title: '银行卡信息',
        type: 'o2m',
        pageCode:'802015',
        o2mvalue: {
        	'userId':userId
        },
        columns: [{
            field: 'realName',
            title: '真实名称',
        },{
            field: 'bankcardNumber',
            title: '银行卡号',
        },{
            field: 'bankName',
            title: '银行名称',
        },{
            field: 'subbranch',
            title: '开户支行',
        },{
            field: 'bindMobile',
            title: '预留手机号',
        },{
            field: 'createDatetime',
            title: '创建时间',
        	formatter: dateTimeFormat
        }]
    }, {
		title: '备注',
		field: 'remark',
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