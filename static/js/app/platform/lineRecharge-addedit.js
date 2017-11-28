$(function() {
	var code = getQueryString('code');
	var view= !!getQueryString('v');
	var userId= getQueryString('userId') || '';
	
	var fields = [{
		field: 'bizType',
		type: 'hidden',
		value: '11'
	},{
		field: 'bizNote',
		type: 'hidden',
		value: '线下充值'
	},{
		field: 'accountNumberList',
		title: '用户账户',
		required: true,
		type: 'select',
		multiple: true,
		pageCode: userId ? '802503' : '802500',
		keyCode1:'802006',
		dict: [['currency', 'currency'], ['type', 'account_type']],
		params: {
			currency: '',
			userId: userId,
			type:"NOT_P"
		},
		keyName: 'accountNumber',
		valueName: '{{realName.DATA}} - {{currencyName.DATA}} - {{typeName.DATA}}',
		searchName: 'realName',
		help: '支持户名查询'
	},{
		field : 'transAmount',
		title : '充值金额',
		required: true,
		amount: true
	},{
		field : 'bankcardNumber',
		title : '充值说明',
		// title : '充值银行卡卡号',
		required: true,
		maxlength: 60
	},];
	
	var options = {
		fields: fields,
		code: code,
		addCode: '802510',
		view: view
	};
	
	buildDetail(options);
});