$(function() {
	var code = getQueryString('code');
	var view= !!getQueryString('v');
	var isDetail = getQueryString('detail')||"";
	
	var approveNoteField = {
		title: '意见说明',
		field: 'rollbackNote',
		maxlength: 250,
		required: true,
		readonly: false
	};
	
	var buttons = [{
		title: '通过',
		handler: function() {
			if ($('#jsForm').valid()) {
				var data = $('#jsForm').serializeObject();
				data.rollbackResult = '1';
				data.rollbackUser = getUserName();
				data.codeList = [data.code];
				reqApi({
					code: '802511',
					json: data
				}).done(function(data) {
					sucDetail();
				});
			}
		}
	}, {
		title: '不通过',
		handler: function() {
			if ($('#jsForm').valid()) {
				var data = $('#jsForm').serializeObject();
				data.rollbackResult = '0';
				data.rollbackUser = getUserName();
				data.codeList = [data.code];
				reqApi({
					code: '802511',
					json: data
				}).done(function(data) {
					sucDetail();
				});
			}
		}
	}, {
		title: '返回',
		handler: function() {
			goBack();
		}
	}];
	
	if(isDetail){
		approveNoteField = {
			title: '意见说明',
			field: 'remark',
			maxlength: 250
		};
		buttons = [{
			title: '返回',
			handler: function() {
				goBack();
			}
		}];
	}

	var fields = [{
		title: '户名',
		field: 'realName',
		required: true,
		maxlength: 32
	}, {
		title: '账号',
		field: 'accountNumber',
		required: true
	}, {
		title: '流水编号',
		field: 'code1',
		'[value]': 'code'
	}, {
		field : 'channelType',
		title : '渠道类型',
		type: 'select',
		key: 'channel_type',
		keyCode:'802006',
		formatter: Dict.getNameForList('channel_type','802006'),
	}, {
		field: 'channelOrder',
		title: '渠道单号'
	}, {
		field : 'bizType',
		title : '业务类型',
		type: 'select',
		key: 'biz_type',
		keyCode:'802006',
		formatter: Dict.getNameForList('biz_type','802006'),
	}, {
		field: 'bizNote',
		title: '业务说明'
	}, {
		field : 'qxAmount',
		title : '取现金额',
		formatter: function(v, data){
			return moneyFormat(Math.abs(data.transAmount+data.fee))
		}
	},{
		field : 'fee',
		title : '手续费',
		formatter: moneyFormat
	},{
		field : 'transAmount',
		title : '变动金额',
		formatter: function(v, data){
			return moneyFormat(Math.abs(data.transAmount));
		}
	},{
		field: 'preAmount',
		title: '变动前金额',
		formatter: moneyFormat
	}, {
		field: 'postAmount',
		title: '变动后金额',
		formatter: moneyFormat
	}, {
		field: 'createDatetime',
		title: '金额変动时间',
		formatter: dateTimeFormat
	}, {
		field : 'status',
		title : '状态',
		type: 'select',
		key: 'jour_status',
		keyCode:'802006',
		formatter: Dict.getNameForList('jour_status','802006'),
	}, {
		field: 'workDate',
		title: '拟对账时间'
	}, approveNoteField];

	var options = {
		fields: fields,
		code: code,
		detailCode: '802522',
		view: true,
		buttons: buttons
	};


	buildDetail(options);
});