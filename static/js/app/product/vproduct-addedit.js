$(function() {
	
	var code = getQueryString('code');
	var checkData = [];
	
	reqApi({
		code:"808907",
		json:{
			parentKey:"vproduct_price"
		}
	}).done(function(d){
		d.forEach(function(v,i){
			checkData[i]={
				key:v.dkey,
				value:v.dvalue
			}
		})
		
		var fields = [{
			field: 'kind',
			type: 'hidden',
			value: '1'
		}, {
	        field: 'name',
	        title: '名称',
	        maxlength: 250,
	        required: true,
	    }, {
	        field: 'type',
	        title: '类型',
	        type: 'select',
	        key: "vproduct_type",
	        keyCode:'808907',
	        required: true,
	    }, {
	        field: 'price',
	        title: '面值档位',
	        type: "checkbox",
	        items: checkData,
	        required: true,
	    }, {
	        field: 'rate',
	        title: '菜狗币比例',
	        number: true,
	        min: 0,
	        required: true,
        	readonly: true
	    }, {
	        field: 'slogan',
	        title: '广告语',
	        required: true,
	        maxlength: 250,
	    }, {
	        field: 'advPic',
	        title: '缩略图',
	        type : 'img',
			required: true
	    }, {
	        field: 'pic',
	        title: '展示图',
	        type : 'img',
			required: true
	    }, {
	        title: '详述',
	        field: 'description',
	        required: true
	    }, {
	        field: 'remark',
	        title: '备注',
	        maxlength: 250,
	    }];
		
		buildDetail({
			fields: fields,
			code: code,
			detailCode: '808616',
			editCode: '808602',
			beforeSubmit: function(data){
				var v1="";
				var v2=data.price;
	        	for (var i= 0; i < v2.length;i++) {
	        		if(i== v2.length-1){
	        			v1+=v2[i]
	        		}else{
	        			v1+=v2[i]+","
	        		}
	        	}
	        	data.price = v1;
	        	
	        	return data;
			}
		});
	})
	
	
});