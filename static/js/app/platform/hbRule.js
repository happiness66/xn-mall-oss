$(function () {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    },{
		field : 'ckey',
		title : '名称',
		search: true
	},{
		field : 'cvalue',
		title : '数值'
	}, {
        field: 'remark',
        title: '备注'
    }];

    buildList({
        columns: columns,
        pageCode: '615915',
		searchParams:{
			type: 'M',
			companyCode: OSS.company
		}
    });
    
    
    
});