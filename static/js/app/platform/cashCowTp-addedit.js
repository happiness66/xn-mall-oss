$(function() {
	
	var code =  getQueryString('code');
	var view = getQueryString('v');
	
	var fields = [{
		field: 'kind',
		type: 'hidden',
		value: '1'
	},{
        title: '名称',
        field: 'name',
        required: true,
        readonly: view
    }, {
        title: '展示图',
        field: 'pic',
        type: 'img',
        required: true,
        readonly: view
    }, {
        title: '币种',
        field: 'currency',
        type: 'select',
        data:{
        	CNY: "人民币"
        },
        required: true,
        readonly: view
    }, {
        title: '价格',
        field: 'price',
        number: true,
        required: true,
        readonly: view,
        amount:true,
        formatter:moneyFormat
    },
//  {
//      title: '周期内可被摇总次数',
//      field: 'periodRockNum',
//      number: true,
//      readonly: view,
//      required: true
//  }, {
//      title: '可摇总次数',
//      field: 'totalRockNum',
//      number: true,
//      readonly: view,
//      required: true
//  },
    {
        title: '可摇总人民币',
        field: 'backAmount1',
        number: true,
        readonly: view,
        required: true,
        amount:true,
        formatter:moneyFormat
    }, {
        title: '可摇总菜狗币',
        field: 'backAmount2',
        number: true,
        readonly: view,
        required: true,
        amount:true,
        formatter:moneyFormat
    }, {
        title: '可摇总抵金券',
        field: 'backAmount3',
        number: true,
        readonly: view,
        required: true,
        amount:true,
        formatter:moneyFormat
    }, {
		title: '备注',
		field: 'remark',
        readonly: view,
		maxlength: 250
	}];
	
	buildDetail({
		fields: fields,
		code: code,
        view: view,
		detailCode: '615106',
		addCode: '615100',
		editCode: '615102',
		beforeSubmit: function(data){
			data.periodRockNum="1000000";
			data.totalRockNum="100000";
			
			return data;
		}
	});
	
});