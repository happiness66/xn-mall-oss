$(function() {
	var code = getQueryString('code');
	var view= !!getQueryString('v');
	var userId= getQueryString('userId') || '';
	
	var fields = [{
		field: 'bizType',
		type: 'hidden',
		value: '-11'
	},{
		field: 'bizNote',
		type: 'hidden',
		value: '线下取现'
	},{
		field: 'accountNumberList',
		title: '用户账户',
		required: true,
		type: 'select',
		multiple: true,
		pageCode: '802500',
		params: {
			currency: 'CNY',
			userId: userId,
			type:"NOT_P"
		},
		keyCode1:'802006',
		dict: [['currency', 'currency'], ['type', 'account_type']],
		keyName: 'accountNumber',
		valueName: '{{realName.DATA}} - {{currencyName.DATA}} - {{typeName.DATA}}',
		searchName: 'realName',
		help: '支持户名查询'
	},{
		field : 'bankcardNumber',
		title : '取现银行卡卡号',
		required: true,
		maxlength: 60
	},{
		field : 'transAmount',
		title : '取现金额',
		required: true,
		amount: true
	}];
	
	var options = {
		fields: fields,
		code: code,
		addCode: '802510',
		view: view
	};
	
	buildDetail(options);

	$("#subBtn").off("click").on("click", function () {
		if($('#jsForm').valid()){
			var data = $('#jsForm').serializeObject();
			data.transAmount = -data.transAmount;
			reqApi({
				code: "802510",
				json: data
			}).done(function(data) {
				sucDetail();
			});
		}
	})
});