function plural(n){return n>1&&n<5&&1!=~~(n/10)}function translate(number,withoutSuffix,key,isFuture){var result=number+" ";switch(key){case"s":return withoutSuffix||isFuture?"p\xe1r vte\u0159in":"p\xe1r vte\u0159inami";case"m":return withoutSuffix?"minuta":isFuture?"minutu":"minutou";case"mm":return withoutSuffix||isFuture?result+(plural(number)?"minuty":"minut"):result+"minutami";case"h":return withoutSuffix?"hodina":isFuture?"hodinu":"hodinou";case"hh":return withoutSuffix||isFuture?result+(plural(number)?"hodiny":"hodin"):result+"hodinami";case"d":return withoutSuffix||isFuture?"den":"dnem";case"dd":return withoutSuffix||isFuture?result+(plural(number)?"dny":"dn\xed"):result+"dny";case"M":return withoutSuffix||isFuture?"m\u011bs\xedc":"m\u011bs\xedcem";case"MM":return withoutSuffix||isFuture?result+(plural(number)?"m\u011bs\xedce":"m\u011bs\xedc\u016f"):result+"m\u011bs\xedci";case"y":return withoutSuffix||isFuture?"rok":"rokem";case"yy":return withoutSuffix||isFuture?result+(plural(number)?"roky":"let"):result+"lety"}}var months="leden_\xfanor_b\u0159ezen_duben_kv\u011bten_\u010derven_\u010dervenec_srpen_z\xe1\u0159\xed_\u0159\xedjen_listopad_prosinec".split("_"),monthsShort="led_\xfano_b\u0159e_dub_kv\u011b_\u010dvn_\u010dvc_srp_z\xe1\u0159_\u0159\xedj_lis_pro".split("_");require("../moment").lang("cs",{months:months,monthsShort:monthsShort,monthsParse:function(months,monthsShort){var i,_monthsParse=[];for(i=0;i<12;i++)_monthsParse[i]=new RegExp("^"+months[i]+"$|^"+monthsShort[i]+"$","i");return _monthsParse}(months,monthsShort),weekdays:"ned\u011ble_pond\u011bl\xed_\xfater\xfd_st\u0159eda_\u010dtvrtek_p\xe1tek_sobota".split("_"),weekdaysShort:"ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"),weekdaysMin:"ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"),longDateFormat:{LT:"H:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd D. MMMM YYYY LT"},calendar:{sameDay:"[dnes v] LT",nextDay:"[z\xedtra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v ned\u011bli v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve st\u0159edu v] LT";case 4:return"[ve \u010dtvrtek v] LT";case 5:return"[v p\xe1tek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[v\u010dera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou ned\u011bli v] LT";case 1:case 2:return"[minul\xe9] dddd [v] LT";case 3:return"[minulou st\u0159edu v] LT";case 4:case 5:return"[minul\xfd] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"p\u0159ed %s",s:translate,m:translate,mm:translate,h:translate,hh:translate,d:translate,dd:translate,M:translate,MM:translate,y:translate,yy:translate},ordinal:"%d.",week:{dow:1,doy:4}});