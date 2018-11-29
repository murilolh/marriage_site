var PaymentView=null;!function($){PaymentView=BaseBackboneView.extend({events:{"click .step-1":"back_store_cart","click .step-2":"back_store_cart_info","click .goto-store-cart-info":"back_store_cart_info","click label[name='paymentMethod']":"payment_click","click .def-payment":"submit_payment_click","click input[name*='instalments_']":"summary"},back_store_cart:function(){Backbone.history.navigate("/"+this.options.noivos.get("login")+"/store/"+this.options.info.id_loja+"/"+this.options.info.id_loja_sel+"/"+this.options.info.page+"/cart",!0)},back_store_cart_info:function(){Backbone.history.navigate("/"+this.options.noivos.get("login")+"/store/"+this.options.info.id_loja+"/"+this.options.info.id_loja_sel+"/"+this.options.info.page+"/cart_info",!0)},submit_payment_click:function(ev){var fn_payment=function(){var field=$(".def-processing"),count=parseInt(field.data("count"));count>10&&myStopFunction(),field.is(":visible")&&(myStopFunction(),$("#pagamento").formhelper("submit",$(ev.currentTarget),!0)),count++,field.data("count",count)},myStopFunction=function(){$(".def-processing").data("count",0),clearInterval(sendPayment)},sendPayment=setInterval(function(){fn_payment()},1e3)},summary:function(ev){var field=$(ev.currentTarget),parcelas=field.val(),field_summary=$(".summary",".payment-card");parcelas<2?(field_summary.find(".label-summary, .label-summary-description").html(""),field_summary.hide()):(summary=I18n.t("store.payment.labels.summary")+":",summary_str=I18n.t("store.payment.labels.summary_str",{value:field.data("summary")}),rate=I18n.t("store.payment.labels.interest",{value:field.data("rate")}),field_summary.find(".label-summary").html(summary),field_summary.find(".label-summary-description").html(summary_str+" <em>"+rate+"</em>"),field_summary.show())},payment_click:function(ev){var field=$("input:radio",ev.currentTarget);switch(field.attr("name")){case"paymentMethod":if(field.is(":checked")){$(".payment-active").removeClass("payment-active"),field.parents("label").addClass("payment-active");var newValue=field.val();switch(newValue){case"deposito":$(".payment-deposito").show(),$(".payment-boleto").hide(),$(".payment-card").hide(),this.emptyFields(newValue),$("input[name*='instalments']").attr("ignore","true"),$("#ccNumber").attr("ignore","true"),$("#ccName").attr("ignore","true"),$("#ccValidityMonth").attr("ignore","true"),$("#ccValidityYear").attr("ignore","true"),$("#ccSecurityCode").attr("ignore","true"),$("input[name='instalments_"+newValue+"']").attr("ignore","true");break;case"boleto":$(".payment-boleto").show(),$(".payment-deposito").hide(),$(".payment-card").hide(),this.emptyFields(newValue),$("input[name*='instalments']").attr("ignore","true"),$("#ccNumber").attr("ignore","true"),$("#ccName").attr("ignore","true"),$("#ccValidityMonth").attr("ignore","true"),$("#ccValidityYear").attr("ignore","true"),$("#ccSecurityCode").attr("ignore","true"),$("input[name='instalments_"+newValue+"']").attr("ignore","true");break;default:this.setMask(newValue),this.emptyFields(newValue),$(".payment-boleto").hide(),$(".payment-deposito").hide(),$(".payment-card").show(),$(".dados-radio-right > div").hide(),$(".taxas-parcelas-"+newValue).show(),$("."+newValue+"1").after($(".payment-card")),"amex"==newValue?($(".tooltipamex").show(),$(".tooltipdefault").hide()):($(".tooltipamex").hide(),$(".tooltipdefault").show()),$("input[name*='instalments']").attr("ignore","true"),$("#ccNumber").removeAttr("ignore"),$("#ccName").removeAttr("ignore"),$("#ccValidityMonth").removeAttr("ignore"),$("#ccValidityYear").removeAttr("ignore"),$("#ccSecurityCode").removeAttr("ignore"),$("input[name='instalments_"+newValue+"']").removeAttr("ignore")}}else field.parents("label").removeClass("payment-active")}},emptyFields:function(value){$("#pagamento").formhelper("setvalue","ccNumber","",!1),$("#pagamento").formhelper("setvalue","ccName","",!1),$("#pagamento").formhelper("setvalue","ccValidityMonth","",!1),$("#pagamento").formhelper("setvalue","ccValidityYear","",!1),$("#pagamento").formhelper("setvalue","ccSecurityCode","",!1),$("#pagamento").formhelper("setvalue","instalments_"+value,1,!1),$(".summary",".payment-card").find(".label-summary, .label-summary-description").html(""),$(".summary",".payment-card").hide(),$("#instalments_error").addClass("inpt-label-info").html(I18n.t("store.payment.errors.installments")),$(".chzn-single.chzn-default span").html("")},setMask:function(value){$("#ccNumber").attr("association",value),$("#ccSecurityCode").attr("association",value);var ccNumberMask="9999 9999 9999 9999",ccSecurityCodeMask="999";"amex"==value&&(ccNumberMask="9999 999999 99999",ccSecurityCodeMask="9999"),$("#ccNumber").mask(ccNumberMask),$("#ccSecurityCode").mask(ccSecurityCodeMask)},initialize:function(){this.constructor.__super__.initialize.call(this);var self=this;this.adopted=!0;var item=$(".template-payment");item.get(0)?(this.setElement(item),self.options.onload&&self.options.onload.call(self)):(this.adopted=!1,render_template("template_payment_id","/templates/backbone/"+this.options.noivos.get("id_noivo")+"/store/"+this.options.noivos.get("template_html_version")+"/payment",{noivos:this.options.noivos.attributes,cart:this.options.cart.attributes,info:this.options.info.attributes,loja_dado:this.options.loja_dado.attributes,tipos_pagamentos:this.options.tipos_pagamentos.models[0].get("tipos_pagamentos"),taxas_pagamentos:this.options.tipos_pagamentos.models[0].get("taxas_pagamentos")},function(ret){self.setElement(ret),self.options.onload&&self.options.onload.call(self)}))},beforeRender:function(){$("body").addClass("store-page-fix")},render:function(){var self=this;return $(".tTipT").tipTip({defaultPosition:"top"}),$(".tTipR").tipTip({defaultPosition:"right"}),load_css("//assets1.icasei.com.br/assets/formhelper.css"),load_js("//assets1.icasei.com.br/assets/formhelper.js",function(){$("#pagamento").formhelper({defaultField:"nome",autoRender:!1,messages:form_helper_messages,onSubmitError:function(){$(".def-payment").show(),$(".def-processing").hide(),Boxy.alert(I18n.t("formhelper.formhelper_invalid_values"),function(){$("html,body").animate({scrollTop:0},200)},{title:I18n.t("layout.boxy.error_title"),closeText:I18n.t("layout.boxy.close")})},onSubmit:function(){window.loading.jLoading("block",!0);var obj={tipo_pagamento:$("#pagamento input[name='paymentMethod']:checked").val(),cc_number:$("#ccNumber").val(),cc_name:$("#ccName").val(),ccValidityMonth:$("#ccValidityMonth").val(),ccValidityYear:$("#ccValidityYear").val(),ccSecurityCode:$("#ccSecurityCode").val(),instalments:$("#pagamento input[name*='instalments']:checked").val()},params=jQuery.param(obj);return jQuery.ajax({url:"/"+self.options.noivos.get("login")+"/store/"+self.options.info.id_loja+"/"+self.options.info.id_loja_sel+"/"+self.options.info.page+"/do_payment",data:params,dataType:"json",type:"POST",timeout:12e5,success:function(data_ret){window.loading.jLoading("block",!1),1==data_ret.code?Backbone.history.navigate("/"+self.options.noivos.get("login")+"/store/"+self.options.info.id_loja+"/"+self.options.info.id_loja_sel+"/"+self.options.info.page+"/confirm",!0):($(".def-payment").show(),$(".def-processing").hide(),Boxy.alert(data_ret.message,null,{title:I18n.t("layout.boxy.error_title"),closeText:I18n.t("layout.boxy.close")}))},error:function(){window.loading.jLoading("block",!1),$(".def-payment").show(),$(".def-processing").hide(),Boxy.alert(I18n.t("store.payment.errors.payment"),null,{title:I18n.t("layout.boxy.error_title"),closeText:I18n.t("layout.boxy.close")})}}),!1}}),$("#pagamento").formhelper("init")}),$(".cart-link").hide(),this},after_remove:function(){$("body").removeClass("store-page-fix")},afterRender:function(){$(".def-payment").off("click.myclick").on("click.myclick",function(){$(this).hide(),$(".def-processing").data("count",0),$(".def-processing").show()})}})}(jQuery);