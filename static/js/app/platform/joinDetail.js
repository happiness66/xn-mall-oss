$(function() {
	
    var code = getQueryString('code');
	var jewelCode = getQueryString('jewelCode');
	
    var columns = [ {
        field: 'mobile',
        title: '夺宝人',
        formatter: function(v, data){
        	return data.user.mobile;
        }
    }, {
        field: 'times',
        title: '参与人次',
    }, {
        field: 'payDatetime',
        title: '夺宝时间',
		formatter: dateTimeFormat
    },  {
        field: 'status',
        title: '状态',
        type: 'select',
        key: 'jewel_record_status',
        keyCode:'615907',
        formatter: Dict.getNameForList("jewel_record_status",'615907'),
        search: true
    }];

    buildList({
        columns: columns,
        pageCode: '615025',
		searchParams:{
			jewelCode: jewelCode,
			companyCode: OSS.company
		}
    });
    
    $("#joinDetailBtn").remove();
});