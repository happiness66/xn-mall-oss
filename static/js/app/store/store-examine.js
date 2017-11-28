$(function() {
	
	var code = getQueryString('code');
	var view = 1;
	
	var fields = [{
		field: 'kind',
		type: 'hidden',
		value: '1'
	}, {
        field: 'name',
        title: '店铺名称',
        readonly: view,
        required: true,
    }, {
        field: 'type',
        title: '分类',
		type: 'select',
		required: true,
		listCode: '808007',
		keyName: 'code',
		valueName: 'name',
    }, {
        field: 'legalPersonName',
        title: '法人姓名',
        readonly: view,
        required: true,
        maxlength: 32
    }, {
    	field: 'mobile',
        title: '登录名(店家手机号)',
        mobile: true,
        readonly: view,
        required: true
    }, {
        field: 'bookMobile',
        title: '联系电话',
        mobile: true,
        required: true,
        readonly: view,
    }, {
        field: 'smsMobile',
        title: '短信手机号',
        mobile: true,
        required: true,
        readonly: view,
    }, {
        title: '位置',
        field: "province1",
        type:'select',
        key:"product_location",
        keyCode:'808907',
        required: true,
        type: 'citySelect',
        readonly: view,
    }, {
        title: '详细地址',
        field: 'address',
        required: true,
        maxlength: 255,
        readonly: view
    }, {
        title: '经度',
        field: 'longitude',
        west: true,
        readonly: view,
        hidden: !view
    }, {
        title: "纬度",
        field: 'latitude',
        north: true,
        readonly: view,
        hidden: !view
    }, {
        field: 'slogan',
        title: '广告语',
        required: true,
        maxlength: 255,
        readonly: view
    }, {
        field: 'advPic',
        title: '店铺缩略图',
        type: 'img',
        required: true,
        readonly: view
    }, {
        field: 'pic',
        title: '商家图片',
        type: 'img',
        required: true,
        readonly: view
    }, {
        field: 'description',
        title: '商家描述',
        type: 'textarea',
        required: true,
        readonly: view
    },{
        field: 'rate2',
        title: '使用抵金券比例',
        required: true,
        readonly: view
    },{
        field: 'rate3',
        title: '返点人民币比例',
        min: 0,
        required: true,
    },{
        field: 'rate1',
        title: '返点菜狗币比例',
        min: 0,
        required: true,
    },{
        field: 'rate4',
        title: '返点抵金券比例',
        min: 0,
        required: true,
    },{
        field: 'remark',
        title: '备注',
        readonly: view
    }];
	
	
	var options = {
        fields: fields,
		view: view,
		code: code,
		detailCode: '808216',
		buttons:[{
			title:"通过",
		},{
			title:"不通过",
		},{
			title:"返回",
		}]
    };

    buildDetail(options);
    
    //通过
    $("#btn-0").click(function(){
    	setExamine("1");
    })
    
    //不通过
    $("#btn-1").click(function(){
    	setExamine("0");
    })
    
    //返回
    $("#btn-2").click(function(){
    	goBack();
    })
    
    function setExamine(a){
    	var data = $('#jsForm').serializeObject();
    	var sCodeList = [];
    		sCodeList.push(data.code);
			data.storeCodeList = sCodeList;
    		data.approveResult = a;
    		data.approver = getUserName();
    		
    	reqApi({
            code: '808202',
            json: data
        }).then(function() {
            sucDetail();
        });
    }
	
});