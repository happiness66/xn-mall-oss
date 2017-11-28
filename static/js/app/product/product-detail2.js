$(function() {
	
	var code = getQueryString('code');
	var view = getQueryString('v');
	
	var fields = [{
		field: 'kind',
		type: 'hidden',
		value: '1'
	}, {
        field: 'category',
        title: '大类',
		type: 'select',
		listCode: '808007',
		keyName: 'code',
		valueName: 'name',
        readonly: view
    }, {
        field: 'type',
        title: '小类',
		type: 'select',
		listCode: '808007',
		keyName: 'code',
		valueName: 'name',
		readonly: view
    },{
        field: 'name',
        title: '商品名称',
        required: true,
		readonly: view
    }, {
        field: 'slogan',
        title: '广告语',
        required: true,
		readonly: view
    }, {
        field: 'advPic',
        title: '广告图',
        type : 'img',
		required: true,
		readonly: view
    }, {
        field: 'pic',
        title: '展示图',
        type : 'img',
		required: true,
		readonly: view
    }, {
        field: 'description',
        title: '图文描述',
        type: 'textarea',
        required: true,
		readonly: view
    }, {
        field: 'originalPrice',
        title: '原价/市场价',
        required: true,
        amount: true,
        formatter: moneyFormat,
        readonly: view
    }, {
        field: 'price1',
        title: '人民币价',
        amount: true,
        formatter: moneyFormat,
        required: true,
        readonly: view
    }, {
        field: 'price2',
        title: '菜狗币价',
        amount: true,
        formatter: moneyFormat,
        required: true,
        readonly: view
    }, {
        field: 'price3',
        title: '抵金券价',
        amount: true,
        formatter: moneyFormat,
        required: true,
        readonly: view
    }, {
        field: 'location',
        title: '位置',
        type:'select',
        key:"product_location",
        keyCode:'808907',
        required: true,
        readonly: view
    }, {
        field: 'orderNo',
        title: '序号',
    }, {
        field: 'remark',
        title: '备注',
        readonly: view
    }];
	
	buildDetail({
		fields: fields,
		code: code,
		view: view,
		detailCode: '808026',
	});
	
});