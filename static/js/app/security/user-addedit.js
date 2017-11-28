$(function() {
	var code = getQueryString('code');
	
	var role = {};
	reqApi({
		code:"805021",
	}).done(function(data){
		
		$.each(data, function (i, a) {
			if(a.name !== '加盟商'){
				role[a.code] = a.name;
			}
		});
		
		var fields = [{
			field: 'kind',
			type: 'hidden',
			value: '01'
		}, {
			title: '用户名',
			field: 'loginName',
			required: true,
			maxlength: 30
		}, {
			title: '角色编号',
			field: 'roleCode',
			data: role,
			type: 'select',
			required: true,
		}, {
	        title: '推荐人',
	        field: 'userReferee'
	    }, {
	        title: '证件类型',
	        field: 'idKind',
	        type: 'select',
	        key: 'id_kind',
	        keyCode: "807706",
	    }, {
	        title: '证件号',
	        field: 'idNo',
	        idCard: true,
	    }, {
	        title: '真实姓名',
	        field: 'realName',
	        chinese: true,
	    }, {
	        title: '手机号',
	        field: 'mobile',
	        tm: true,
	    }, 	{
			title: '备注',
			field: 'remark',
			maxlength: 250
		}];
		
		buildDetail({
			fields: fields,
			code: code,
			detailCode: '805056',
			addCode: '805042'
		});
		
		
		
	})
	
});