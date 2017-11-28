$(function() {
	var userId = getQueryString('userId');
	var store = !!getQueryString('store');
	var member = !!getQueryString('member');
	var business = !!getQueryString('business');
	var view = 1;
	
	var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
		field : 'accountNumber',
		title : '账户编号',
	}, {
		field : 'currency',
		title : '账户币种',
        key: 'currency',
        formatter: Dict.getNameForList("currency","802006"),
	}, {
		field : 'amount',
		title : '账户余额',
        formatter:moneyFormat
	}];

    buildList({
        columns: columns,
        pageCode: '802503',
		searchParams:{
			userId:userId
		}
    });
    
	$('.tools .toolbar').html('<li style="display:block;" id="minxiBtn"><span><img src="/static/images/t01.png"></span>查看明细</li><li style="display:block;" id="backBtn"><span><img src="/static/images/t01.png"></span>返回</li>');
	$('#backBtn').on('click', function() {
		
		if(store){
			window.location.href ="./store.html"
		}else if(member){
			window.location.href ="./member.html"
		}else if(business){
			window.location.href ="./business.html"
		}
	});    
	
	//查看明细
	$('#minxiBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        window.location.href = "../store/ledger.html?accountNumber=" + selRecords[0].accountNumber;
    }); 
});