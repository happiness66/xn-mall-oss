$(function() {
	
	var code = getQueryString('code');
	var view = getQueryString('v');
	
	var fields = [{
		field: 'kind',
		type: 'hidden',
		value: '1'
	}, {
        title: '中奖币种',
        field: 'toCurrency',
        required: true,
		type: 'select',
		key: 'currency',
		keyCode: "802006",
        readonly: view
    }, {
        title: '中奖金额',
        field: 'toAmount',
		number: true,
        required: true,
        readonly: view,
        amount:true,
        formatter:moneyFormat
    }, {
        title: '总次数',
        field: 'totalNum',
		required: true,
		number: true,
        readonly: view
    }, {
        title: '每人最大投资次数',
        field: 'maxNum',
		required: true,
		number: true,
        readonly: view
    }, {
        title: '单价币种',
        field: 'fromCurrency',
        required: true,
		type: 'select',
		key: 'currency',
		keyCode: "802006",
        readonly: view
    }, {
        title: '人次单价',
        field: 'fromAmount',
		minAmount: true,
        required: true,
        readonly: view,
        amount: true,
        formatter:moneyFormat
    }, {
        title: '宣传文字',
        field: 'slogan',
        required: true,
		maxlength: 250,
        readonly: view
    }, {
        title: '宣传图',
        field: 'advPic',
        type: 'img',
        required: true,
        readonly: view
    }, {
		title: '备注',
		field: 'remark',
		maxlength: 250,
        readonly: view
	}];
	
	buildDetail({
		fields: fields,
		code: code,
        view: view,
		detailCode: '615006',
		addCode: '615000',
		editCode: '615002',
		searchParams:{
			companyCode: OSS.company
		}
	});
	
});