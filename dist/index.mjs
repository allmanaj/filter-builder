var t=function(t){this.data=t,this.query="",this.orWhere=this.orWhere.bind(this),this.where=this.where.bind(this),this.get=this.get.bind(this)};t.prototype.where=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return this.query.slice(-1).includes(")")&&(this.query+=" && "),"function"==typeof t[0]?(this.query+="(",t[0](this),this.query+=")"):1===t.length?this.query+="(item."+t[0]+")":2===t.length?this.query+="(item."+t[0]+" == '"+t[1]+"')":3===t.length&&(this.query+="(item."+t[0]+" "+t[1]+" '"+t[2]+"')"),this},t.prototype.orWhere=function(){for(var t,e=[],i=arguments.length;i--;)e[i]=arguments[i];return this.query+=" || ",(t=this).where.apply(t,e)},t.prototype.whereIncludes=function(t,e,i){return void 0===i&&(i=null),null==i?(this.query+="(item."+t+" ? item."+t+".includes('"+e+"') : false)",this):(this.query+="(item."+t+" ? item."+t+".some(element => element."+e+" === '"+i+"') : false)",this)},t.prototype.orWhereIncludes=function(t,e,i){return void 0===i&&(i=null),this.query+=" || ",this.whereIncludes(t,e,i),this},t.prototype.stripEmpties=function(){this.query=this.query.replace(/&& \(\)/g,""),this.query=this.query.replace(/\(\)&&/g,"")},t.prototype.get=function(){var t=this;return this.stripEmpties(),this.data.filter(function(e){return new Function("item",'"use strict";return '+t.query+";")(e)})};export{t as FilterBuilder};
//# sourceMappingURL=index.mjs.map
