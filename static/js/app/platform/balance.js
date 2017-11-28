$(function() {

    var code = getQueryString('code');
    var view = getQueryString('v');

    var fields = [{
        title: '中奖币种',
        field: 'toCurrency',
        required: true,
        type: 'select',
        key: 'currency',
        keyCode: "802006",
        readonly: view
    }, {
        title: '中奖金额',
        field: 'toAmount',
        number: true,
        required: true,
        readonly: view,
        amount: true,
        formatter: moneyFormat
    }, {
        title: '总次数',
        field: 'totalNum',
        required: true,
        number: true,
        readonly: view
    }];

    buildDetail({
        fields: fields,
        code: code,
        view: view,
        detailCode: ' ',
        addCode: ' ',
        editCode: ' ',
        searchParams: {
            companyCode: OSS.company
        }
    });

});