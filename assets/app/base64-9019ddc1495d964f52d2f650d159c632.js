var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(input){var chr1,chr2,chr3,enc1,enc2,enc3,enc4,output="",i=0;for(input=Base64._utf8_encode(input);i<input.length;)enc1=(chr1=input.charCodeAt(i++))>>2,enc2=(3&chr1)<<4|(chr2=input.charCodeAt(i++))>>4,enc3=(15&chr2)<<2|(chr3=input.charCodeAt(i++))>>6,enc4=63&chr3,isNaN(chr2)?enc3=enc4=64:isNaN(chr3)&&(enc4=64),output=output+this._keyStr.charAt(enc1)+this._keyStr.charAt(enc2)+this._keyStr.charAt(enc3)+this._keyStr.charAt(enc4);return output},decode:function(input){var chr1,chr2,chr3,enc2,enc3,enc4,output="",i=0;for(input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");i<input.length;)chr1=this._keyStr.indexOf(input.charAt(i++))<<2|(enc2=this._keyStr.indexOf(input.charAt(i++)))>>4,chr2=(15&enc2)<<4|(enc3=this._keyStr.indexOf(input.charAt(i++)))>>2,chr3=(3&enc3)<<6|(enc4=this._keyStr.indexOf(input.charAt(i++))),output+=String.fromCharCode(chr1),64!=enc3&&(output+=String.fromCharCode(chr2)),64!=enc4&&(output+=String.fromCharCode(chr3));return output=Base64._utf8_decode(output)},_utf8_encode:function(string){string=string.replace(/\r\n/g,"\n");for(var utftext="",n=0;n<string.length;n++){var c=string.charCodeAt(n);c<128?utftext+=String.fromCharCode(c):c>127&&c<2048?(utftext+=String.fromCharCode(c>>6|192),utftext+=String.fromCharCode(63&c|128)):(utftext+=String.fromCharCode(c>>12|224),utftext+=String.fromCharCode(c>>6&63|128),utftext+=String.fromCharCode(63&c|128))}return utftext},_utf8_decode:function(utftext){for(var string="",i=0,c=c1=c2=0;i<utftext.length;)(c=utftext.charCodeAt(i))<128?(string+=String.fromCharCode(c),i++):c>191&&c<224?(c2=utftext.charCodeAt(i+1),string+=String.fromCharCode((31&c)<<6|63&c2),i+=2):(c2=utftext.charCodeAt(i+1),c3=utftext.charCodeAt(i+2),string+=String.fromCharCode((15&c)<<12|(63&c2)<<6|63&c3),i+=3);return string}};