var CotaTipoPagamentoNoivo=null,CotaTiposPagamentosNoivo=null;!function(){var local=null,localData=null;check_localstorage("data_cota_tipo_pagamento_noivo")?local=new Backbone.LocalStorage("data_cota_tipo_pagamento_noivo"):localData=new Backbone.LocalData("data_cota_tipo_pagamento_noivo"),CotaTipoPagamentoNoivo=Backbone.Model.extend({urlRoot:"/services/cota_tipo_pagamento_noivo",idAttribute:"id_pagamento_noivo",localStorage:local,localData:localData,defaults:{},initialize:function(){}}),CotaTiposPagamentosNoivo=Backbone.Collection.extend({model:CotaTipoPagamentoNoivo,localStorage:local,localData:localData,url:"/services/cota_tipo_pagamento_noivo"})}(jQuery);