$(function () {
	var view = 1;
    
    reqApi({
		code: '802503',
		json: {
			userId: getUserId()
		}
	}).done(function(data) {
		data.forEach(function(v, i){
			if(v.currency=="CNY"){
				$("#amount-CNY").text(moneyFormat(v.amount)+"元")
			}else if(v.currency=="CGB"){
				$("#amount-CGB").text(moneyFormat(v.amount)+"菜狗币")
			}else if(v.currency=="CGJF"){
				$("#amount-JF").text(moneyFormat(v.amount)+"抵金券")
			}
		})
		
	});
    
    $("#CNYls-Btn").click(function(){
		location.href="../store/ledger.html?currency=CNY";
	})
	$("#CGBls-Btn").click(function(){
		location.href="../store/ledger.html?currency=CGB";
	})
	$("#CGJFls-Btn").click(function(){
		location.href="../store/ledger.html?currency=CGJF";
	})
    
     $('#accoutSaleBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		var dw = dialog({
			content: '<form class="pop-form" id="popForm" novalidate="novalidate">' +
			'<ul class="form-info" id="formContainer"></ul>'+
			'</form>'
		});
		
		dw.showModal();
		buildDetail({
			fields: [{
				field: 'toUserId',
				title: '售卖加盟商',
				required: true,
				type: 'select',
				pageCode: 805054,
				params: {
					kind: '05',
					updater:''
				},
				keyName: 'userId',
				valueName: '{{loginName.DATA}}-{{mobile.DATA}}',
				searchName: 'mobile',
			},{
				title: '数量',
				field: 'amount',
				amount: true,
				"Z+": true,
				formatter:moneyFormat,
				required: true
			},{
				title: '备注',
				field: 'remark'
			}],
			container: $('#formContainer'),
			buttons: [{
				title: '售卖',
				handler: function() {
					
					if($('#toUserId').val()==""){
						toastr.error("售卖用户不能为空");
					}else if($('#amount').val()==""){
						toastr.error("数量不能为空");
					}else if ($('#popForm').valid()) {
						
						var data = $('#popForm').serializeObject();
						data.fromUserId = getUserId();
						data.currency = "CGB";
						reqApi({
							code: '802402',
							json: data
						}).done(function(data) {
							
							dw.close().remove();
            				toastr.success("操作成功");
            				setTimeout(function(){
								location.reload();
            				},1000)
						});
					}
				}
			}, {
				title: '取消',
				handler: function() {
					dw.close().remove();
				}
			}]
		});
		dw.__center();
	});
	
	$('#accoutGrantBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		var dw = dialog({
			content: '<form class="pop-form" id="popForm" novalidate="novalidate">' +
			'<ul class="form-info" id="formContainer"></ul>'+
			'</form>'
		});
		
		dw.showModal();
		buildDetail({
			fields: [{
				title: '发放加盟商',
				field: 'toUserId',
				type:'select',
				pageCode: 805054,
				params: {
					kind: '05',
					updater:''
				},
				keyName: 'userId',
				valueName: '{{loginName.DATA}}-{{mobile.DATA}}',
				searchName: 'mobile',
				required: true
			},{
				title: '数量',
				field: 'amount',
				amount: true,
				"Z+": true,
				formatter:moneyFormat,
				required: true
			},{
				title: '备注',
				field: 'remark'
			}],
			container: $('#formContainer'),
			buttons: [{
				title: '发放',
				handler: function() {
					if ($('#popForm').valid()) {
						
						var data = $('#popForm').serializeObject();
						data.fromUserId = getUserId();
						data.currency = "CGJF";
						reqApi({
							code: '802402',
							json: data
						}).done(function(data) {
							
							dw.close().remove();
            				toastr.success("操作成功");
            				setTimeout(function(){
								location.reload();
            				},1000)
						});
					}
				}
			}, {
				title: '取消',
				handler: function() {
					dw.close().remove();
				}
			}]
		});
		dw.__center();
	});
    
    
});