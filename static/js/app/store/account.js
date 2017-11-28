$(function () {
	var view = 1;
	var rateCGB = 1;
	var rateJF = 1;
    
    reqApi({
		code: '802503',
		json: {
			userId: getUserId()
		},
        sync: true
	}).done(function(data) {
		data.forEach(function(v, i){
			if(v.currency == "CGB"){
				$("#amount-CGB").text(moneyFormat(v.amount)+"菜狗币")
			}else if(v.currency == "CNY"){
				$("#amount-CNY").text(moneyFormat(v.amount)+"元")
			}else if(v.currency == "CGJF"){
				$("#amount-JF").text(moneyFormat(v.amount)+"抵金券")
			}
		})
		
	});
	
	reqApi({
		code: '002051',
		json: {
			fromCurrency:'CNY',
			toCurrency: 'CGB'
		},
        sync: true
	}).done(function(data) {
		rateCGB = data.rate
	});
	
	reqApi({
		code: '002051',
		json: {
			fromCurrency:'CGB',
			toCurrency: 'CGJF'
		},
        sync: true
	}).done(function(data) {
		rateJF = data.rate
	});
	
	$("#CNYls-Btn").click(function(){
		location.href="ledger.html?currency=CNY";
	})
	$("#CGBls-Btn").click(function(){
		location.href="ledger.html?currency=CGB";
	})
	$("#CGJFls-Btn").click(function(){
		location.href="ledger.html?currency=CGJF";
	})
    
    $('#saleBtn').click(function() {
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
				title: '售卖商家',
				required: true,
				type: 'select',
				pageCode: 805054,
				params: {
					userReferee: getUserId(),
					updater:''
				},
				keyName: 'userId',
				valueName: 'mobile',
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
							code: '802401',
							json: data
						}).done(function(data) {
            				toastr.success("操作成功");
            				setTimeout(function(){
								location.reload();
								dw.close().remove();
            				},2000)
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
	
	$('#grantBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		var dw = dialog({
			content: '<form class="pop-form" id="popForm" novalidate="novalidate">' +
			'<ul class="form-info" id="formContainer"></ul>'+
			'</form>'
		});
		
		dw.showModal();
		buildDetail({
			fields: [{
				title: '发放商家',
				field: 'toUserId',
				type:'select',
				pageCode: 805054,
				params: {
					userReferee: getUserId(),
					updater:''
				},
				keyName: 'userId',
				valueName: 'mobile',
				searchName: 'mobile',
				required: true
			},{
				title: '数量',
				field: 'amount',
				amount: true,
				"Z+":true,
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
							code: '802401',
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

	
	$('#purchaseBtn-CGB').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		var dw = dialog({
			content: '<form class="pop-form" id="popForm" novalidate="novalidate">' +
			'<ul class="form-info" id="formContainer"></ul>'+
			'</form>'
		});
		
		dw.showModal();
		buildDetail({
			fields: [{
				title: '购买数量',
				field: 'amount',
				formatter:moneyFormat,
				required: true,
				amount: true,
				"Z+": true,
				min: 100,
				onKeyup: function(v){
					$("#price").html(moneyFormatdecimal(v/rateCGB));
				}
			},{
				title: '金额',
				field: 'price',
				amount: true,
				formatter:moneyFormat,
        		readonly: view
			}],
			container: $('#formContainer'),
			buttons: [{
				title: '购买',
				handler: function() {
					if ($('#popForm').valid()) {
						
						var data = $('#popForm').serializeObject();
						
						if (data.length <= 0) {
				            toastr.info("请选择记录");
				            return;
				        }
						data.fromUserId = getUserId();
						data.toUserId = OSS.SYS_USER;
//						data.amount = moneyFormatByEnLarge($("#price").html());
//						data.amount = 100;
						data.currency = "CGB";
						data.payType = "6";
						reqApi({
							code: '802420',
							json: data
						}).done(function(data) {
							sucList();
							
							dw.close().remove();
							var dw1 = dialog({
								title:'扫描微信二维码付款',
								content: '<form class="pop-form" id="popForm" novalidate="novalidate">' +
								'<div id="qrcode"></div></form>',
								quickClose: true,
							});
							
							dw1.showModal();
							
							var qrcode = new QRCode('qrcode',data);
						 	qrcode.makeCode(data);
						
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
		h ="<br/><p class='huilv'>当前汇率"+rateCGB+",最少购买100个</p>";
					$(h).insertAfter("#amount");
	});
	
	$('#purchaseBtn-JF').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		var dw = dialog({
			content: '<form class="pop-form" id="popForm" novalidate="novalidate">' +
			'<ul class="form-info" id="formContainer"></ul>'+
			'</form>'
		});
		
		dw.showModal();
		buildDetail({
			fields: [{
				title: '购买数量',
				field: 'amount',
				"Z+": true,
				min: 100,
				formatter:moneyFormat,
				required: true,
				onKeyup: function(v){
					$("#price").html(moneyFormatdecimal(v/rateJF));
				}
			},{
				title: '金额',
				field: 'price',
				amount: true,
				formatter:moneyFormat,
        		readonly: view
			}],
			container: $('#formContainer'),
			buttons: [{
				title: '购买',
				handler: function() {
					if ($('#popForm').valid()) {
						
						var data = $('#popForm').serializeObject();
						
						if (data.length <= 0) {
				            toastr.info("请选择记录");
				            return;
				        }
						
						data.userId = getUserId();
					    data.fromAmount = $("#price").html()*1000;
					    data.fromCurrency = "CGB";
					    data.toCurrency = "CGJF";
						reqApi({
							code: '802412',
							json: data
						}).done(function(data) {
							
            				toastr.success("操作成功");
            				setTimeout(function(){
								location.reload();
								dw.close().remove();
            				},2000)
						
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
		h ="<br/><p class='huilv'>当前汇率"+rateJF+",最少购买100个</p>";
					$(h).insertAfter("#amount");
	});
	
	
    
});