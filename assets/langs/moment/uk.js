function plural(word,num){for(var forms=word.split("_"),minCount=Math.min(pluralRules.length,forms.length),i=-1;++i<minCount;)if(pluralRules[i](num))return forms[i];return forms[minCount-1]}function relativeTimeWithPlural(number,withoutSuffix,key){return"m"===key?withoutSuffix?"\u0445\u0432\u0438\u043b\u0438\u043d\u0430":"\u0445\u0432\u0438\u043b\u0438\u043d\u0443":number+" "+plural({mm:"\u0445\u0432\u0438\u043b\u0438\u043d\u0430_\u0445\u0432\u0438\u043b\u0438\u043d\u0438_\u0445\u0432\u0438\u043b\u0438\u043d_\u0445\u0432\u0438\u043b\u0438\u043d\u0438",hh:"\u0433\u043e\u0434\u0438\u043d\u0430_\u0433\u043e\u0434\u0438\u043d\u0438_\u0433\u043e\u0434\u0438\u043d_\u0433\u043e\u0434\u0438\u043d\u0438",dd:"\u0434\u0435\u043d\u044c_\u0434\u043d\u044f_\u0434\u043d\u0456\u0432_\u0434\u043d\u044f",MM:"\u043c\u0456\u0441\u044f\u0446\u044c_\u043c\u0456\u0441\u044f\u0446\u044f_\u043c\u0456\u0441\u044f\u0446\u0456\u0432_\u043c\u0456\u0441\u044f\u0446\u044f",yy:"\u0440\u0456\u043a_\u0440\u043e\u043a\u0443_\u0440\u043e\u043a\u0456\u0432_\u0440\u043e\u043a\u0443"}[key],+number)}function monthsCaseReplace(m,format){return{nominative:"\u0441\u0456\u0447\u0435\u043d\u044c_\u043b\u044e\u0442\u0438\u0439_\u0431\u0435\u0440\u0435\u0437\u0435\u043d\u044c_\u043a\u0432\u0456\u0442\u0435\u043d\u044c_\u0442\u0440\u0430\u0432\u0435\u043d\u044c_\u0447\u0435\u0440\u0432\u0435\u043d\u044c_\u043b\u0438\u043f\u0435\u043d\u044c_\u0441\u0435\u0440\u043f\u0435\u043d\u044c_\u0432\u0435\u0440\u0435\u0441\u0435\u043d\u044c_\u0436\u043e\u0432\u0442\u0435\u043d\u044c_\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434_\u0433\u0440\u0443\u0434\u0435\u043d\u044c".split("_"),accusative:"\u0441\u0456\u0447\u043d\u044f_\u043b\u044e\u0442\u043e\u0433\u043e_\u0431\u0435\u0440\u0435\u0437\u043d\u044f_\u043a\u0432\u0456\u0442\u043d\u044f_\u0442\u0440\u0430\u0432\u043d\u044f_\u0447\u0435\u0440\u0432\u043d\u044f_\u043b\u0438\u043f\u043d\u044f_\u0441\u0435\u0440\u043f\u043d\u044f_\u0432\u0435\u0440\u0435\u0441\u043d\u044f_\u0436\u043e\u0432\u0442\u043d\u044f_\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430_\u0433\u0440\u0443\u0434\u043d\u044f".split("_")}[/D[oD]? *MMMM?/.test(format)?"accusative":"nominative"][m.month()]}function weekdaysCaseReplace(m,format){return{nominative:"\u043d\u0435\u0434\u0456\u043b\u044f_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a_\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a_\u0441\u0435\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044f_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"),accusative:"\u043d\u0435\u0434\u0456\u043b\u044e_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a_\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a_\u0441\u0435\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044e_\u0441\u0443\u0431\u043e\u0442\u0443".split("_")}[/\[ ?[\u0412\u0432] ?(?:\u043f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u044e|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0443)? ?\] ?dddd/.test(format)?"accusative":"nominative"][m.day()]}var pluralRules=[function(n){return n%10==1&&n%100!=11},function(n){return n%10>=2&&n%10<=4&&n%10%1==0&&(n%100<12||n%100>14)},function(n){return n%10==0||n%10>=5&&n%10<=9&&n%10%1==0||n%100>=11&&n%100<=14&&n%100%1==0},function(){return!0}];require("../moment").lang("uk",{months:monthsCaseReplace,monthsShort:"\u0441\u0456\u0447_\u043b\u044e\u0442_\u0431\u0435\u0440_\u043a\u0432\u0456_\u0442\u0440\u0430_\u0447\u0435\u0440_\u043b\u0438\u043f_\u0441\u0435\u0440_\u0432\u0435\u0440_\u0436\u043e\u0432_\u043b\u0438\u0441_\u0433\u0440\u0443".split("_"),weekdays:weekdaysCaseReplace,weekdaysShort:"\u043d\u0435\u0434_\u043f\u043e\u043d_\u0432\u0456\u0432_\u0441\u0440\u0434_\u0447\u0435\u0442_\u043f\u0442\u043d_\u0441\u0443\u0431".split("_"),weekdaysMin:"\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),longDateFormat:{LT:"HH:mm",L:"DD.MM.YYYY",LL:"D MMMM YYYY \u0433.",LLL:"D MMMM YYYY \u0433., LT",LLLL:"dddd, D MMMM YYYY \u0433., LT"},calendar:{sameDay:"[\u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456 \u0432] LT",nextDay:"[\u0417\u0430\u0432\u0442\u0440\u0430 \u0432] LT",lastDay:"[\u0412\u0447\u043e\u0440\u0430 \u0432] LT",nextWeek:function(){return 2===this.day()?"[\u0423] dddd [\u0432] LT":"[\u0412] dddd [\u0432] LT"},lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return"[\u0412 \u043c\u0438\u043d\u0443\u043b\u0443] dddd [\u0432] LT";case 1:case 2:case 4:return"[\u0412 \u043c\u0438\u043d\u0443\u043b\u0438\u0439] dddd [\u0432] LT"}},sameElse:"L"},relativeTime:{future:"\u0447\u0435\u0440\u0435\u0437 %s",past:"%s \u0442\u043e\u043c\u0443",s:"\u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u0441\u0435\u043a\u0443\u043d\u0434",m:relativeTimeWithPlural,mm:relativeTimeWithPlural,h:"\u0433\u043e\u0434\u0438\u043d\u0443",hh:relativeTimeWithPlural,d:"\u0434\u0435\u043d\u044c",dd:relativeTimeWithPlural,M:"\u043c\u0456\u0441\u044f\u0446\u044c",MM:relativeTimeWithPlural,y:"\u0440\u0456\u043a",yy:relativeTimeWithPlural},ordinal:"%d.",week:{dow:1,doy:7}});