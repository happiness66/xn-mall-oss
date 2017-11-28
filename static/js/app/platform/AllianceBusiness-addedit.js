$(function() {
	
	var userId = getQueryString('userId');
	var view = !!getQueryString('v');
	
	var fields = [{
		field: 'kind',
		type: 'hidden',
		value: '1'
	},{
		title : '登录名',
		field : 'loginName',
		required: true,
		readonly: view,
		maxlength: 20
	},{
		title : '手机号',
    	field : 'mobile',
    	mobile:true,
		required: true
    }, {
        title: '真实姓名',
        field: 'realName',
        chinese: true,
		required: true
    },  {
        title: '证件类型',
        field: 'idKind',
        type: 'select',
        key: 'id_kind',
        keyCode: "807706"
	},{
        title: '证件号',
        field: 'idNo',
        idCard: true
    },{
		title : '分成比例',
    	field : 'divRate',
    	number:true,
    	max: 1,
    	min: 0,
		required: true
    }, {
		title: '备注',
		field: 'remark',
		maxlength: 250
	}];
	
	buildDetail({
		fields: fields,
		code:{
			userId: userId
		},
		detailCode: '805056',
		addCode: '805042',
		editCode: '805182',
		beforeSubmit: function(data){
			if(userId){
				data.userId = userId;
			}
			data.userReferee = getUserId();
			data.kind = '05';
			
			return data;
		}
	});
	
	var h ="<br/><p class='huilv' style='padding: 5px 0 0 194px;display: block;color:red;'>初始密码为 888888</p>";
	$(h).insertAfter("#loginName");
	
});