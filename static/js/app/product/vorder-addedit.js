$(function() {
	
	var code = getQueryString('code');
	var view= !!getQueryString('v');
	var isDetail = !!getQueryString('detail');
	
	var rollbackNoteField = {
		title: '意见说明',
		field: 'remark',
		maxlength: 250,
		required: true,
		readonly: false
	};
	
	var buttons=[{
			title:"返回",
			handler: function() {
				goBack();
			}
		},{
			title:"取消订单",
			handler: function() {
				if ($('#jsForm').valid()) {
					var data = $('#jsForm').serializeObject();
					var dataCode = [];
					dataCode.push(code);
					data.codeList = dataCode;
					reqApi({
						code: '808652',
						json: data
					}).done(function(data) {
						sucDetail();
					});
				}
			}
		}]
	
	if(isDetail){
		rollbackNoteField = {
			title: '意见说明',
			field: 'remark',
			maxlength: 250
		};
		buttons="";
	}
	
	var fields = [{
		field: 'kind',
		type: 'hidden',
		value: '1'
	}, {
        field: 'dcode',
        title: '订单编号',
		required: true,
        formatter: function(v, data){
        	return data.code;
        },
    }, {
        field: 'type',
        title: '订单类型',
        key: "vproduct_type",
        keyCode: '808907',
        formatter: function(v,data){
        	return Dict.getNameForList1("vproduct_type","808907",data.product.type);
        },
		required: true
    }, {
        field: 'status',
        title: '订单状态',
        type: "select",
        key: "vorder_status",
        keyCode: '808907',
        formatter: Dict.getNameForList("vorder_status","808907"),
		required: true
    }, {
        field: 'reCardno',
        title: '卡号',
		required: true
    }, {
        field: 'reName',
        title: '名字',
		required: true
    }, {
        field: 'amount',
        title: '充值金额(元)',
        formatter: moneyFormat,
		required: true
    }, {
        field: 'payAmount',
        title: '支付菜狗币金额',
        formatter: moneyFormat,
		required: true
    }, {
        field: 'mobile',
        title: '下单人',
        formatter: function(v, data){
        	return data.applyUserDetail.mobile
        },
		required: true
    }, {
        field: 'applyDatetime',
        title: '下单时间',
        type: "datetime",
        formatter: dateTimeFormat,
		required: true
    }, rollbackNoteField];
	
	
	var options = {
        fields: fields,
		view: true,
		code: code,
		detailCode: '808666',
		buttons:buttons
    };

    buildDetail(options);
	
});