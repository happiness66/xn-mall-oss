$(function() {

    var columns = [{
            field: '',
            title: '',
            checkbox: true
        }, {
            title: '参数名',
            field: 'ckey',
            search: true
        }, {
            field: 'cvalue',
            title: '参数值',
        }, {
            field: 'updateDatetime',
            title: '最近修改时间',
            formatter: dateTimeFormat
        }, {
            field: 'remark',
            title: '备注'
        }
    ];
    buildList({
        router: "rule",
        columns: columns,
        pageCode: "807715",
        searchParams: {
            type: "1"
        }
    });
});