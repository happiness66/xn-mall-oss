$(function () {
	var code = getQueryString('code');
	
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'price',
        title: '消费金额',
		formatter: moneyFormat
    }, {
        field: 'backAmount',
        title: '返现金额',
		formatter: moneyFormat
    }, {
        field: 'backCurrency',
        title: '返现币种',
		key: 'currency',
		keyCode: "802006",
        formatter: Dict.getNameForList("currency",'802006'),
    }, {
        field: 'backJfAmount',
        title: '返现抵金券',
		formatter: moneyFormat
    }, {
        field: 'payType',
        title: '买单方式',
		key: 'store_pay_type',
		keyCode: "808907",
        formatter: Dict.getNameForList("store_pay_type",'808907'),
    }, {
        field: 'payAmount1',
        title: '支付人民币',
		formatter: moneyFormat
    },  {
        field: 'payAmount2',
        title: '支付菜狗币',
		formatter: moneyFormat
    },  {
        field: 'payAmount3',
        title: '支付抵金券',
		formatter: moneyFormat
    },  {
        field: 'status',
        title: '状态',
        type: 'select',
        key: "store_purchase_status",
        keyCode:'808907',
        formatter: Dict.getNameForList("store_purchase_status","808907"),
        search: true,
    }, {
        field: 'createDatetime',
        title: '创建时间',
        formatter: dateTimeFormat,
    }, {
        field: 'remark',
        title: '备注'
    }];

    buildList({
        columns: columns,
        pageCode: '808245',
        searchParams:{
        	storeCode: code,
        	status: '1',
			companyCode: OSS.company
		}
    });
    
	$('.tools .toolbar').empty();
	
	$('.tools .toolbar').html('<li style="display:block;" id="backBtn"><span><img src="/static/images/t01.png"></span>返回</li>');
	$('#backBtn').on('click', function() {
		goBack();
	});  
    
    
});