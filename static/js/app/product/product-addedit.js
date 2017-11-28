$(function() {
	
	var code = getQueryString('code');
	
	var fields = [{
		field: 'kind',
		type: 'hidden',
		value: '1'
	}, {
        field: 'category',
        title: '大类',
		type: 'select',
		required: true,
		listCode: '808007',
		params: {
			type: "1",
			status: '1',
			parentCode: 0
		},
		keyName: 'code',
		valueName: 'name',
		onChange:function(v,data){
			$("#type").renderDropdown({
				listCode: '808007',
				params: {
					parentCode: v
				},
				keyName: 'code',
				valueName: 'name',
			})
		}
    }, {
        field: 'type',
        title: '小类',
		type: 'select',
		listCode: '808007',
		params: {
			parentCode: $("#category").val()
		},
		keyName: 'code',
		valueName: 'name',
		required: true,
    }, {
        field: 'name',
        title: '商品名称',
        required: true,
        maxlength: 20
    }, {
        field: 'slogan',
        title: '广告语',
        required: true,
        maxlength: 250,
    }, {
        field: 'advPic',
        title: '广告图',
        type : 'img',
		required: true
    }, {
        field: 'pic',
        title: '展示图',
        type : 'img',
		required: true
    }, {
        title: '图文详述',
        field: 'description',
        type: 'textarea',
        required: true
    }, {
        field: 'remark',
        title: '备注',
    }];
	
	buildDetail({
		fields: fields,
		code: code,
		detailCode: '808026',
		addCode: '808010',
		editCode: '808012',
	});
	
});