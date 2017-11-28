$(function() {
	
	var code = getQueryString('code');
	var view = getQueryString('v');
	var checkData = [];
	
	reqApi({
		code:"808907",
		json:{
			parentKey:"vproduct_price"
		}
	}).done(function(d){
		d.forEach(function(v,i){
			checkData[i]={
				key:v.dkey,
				value:v.dvalue
			}
		})
	
		var fields = [{
			field: 'kind',
			type: 'hidden',
			value: '1'
		}, {
	        field: 'name',
	        title: '名称',
	        maxlength: 250,
	        required: true,
	    }, {
	        field: 'type',
	        title: '类型',
	        type: 'select',
	        key: "vproduct_type",
	        keyCode:'808907',
	        required: true,
	    }, {
	        field: 'price',
	        title: '面值档位',
	        type: "checkbox",
	        items: checkData,
	        required: true,
	    }, {
	        field: 'rate',
	        title: '菜狗币比例',
	        number: true,
	        min: 0,
	        required: true,
	    }, {
	        field: 'slogan',
	        title: '广告语',
	        required: true,
	        maxlength: 250,
	    }, {
	        field: 'advPic',
	        title: '缩略图',
	        type : 'img',
			required: true
	    }, {
	        field: 'pic',
	        title: '展示图',
	        type : 'img',
			required: true
	    }, {
	        title: '详述',
	        field: 'description',
	        required: true
	    }, {
	        field: 'orderNo',
	        title: '序号',
	        required: true,
	    }, {
	        field: 'remark',
	        title: '备注',
	        maxlength: 250,
	    }];
		
		buildDetail({
			fields: fields,
			code: code,
			view: view,
			detailCode: '808616',
		});
	})
});