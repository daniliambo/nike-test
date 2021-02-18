
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"132",
  
  "macros":[{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"application.country"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"consumer.currencyType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.marketingClientDataLayer\u0026\u0026window.marketingClientDataLayer.filter(function(a){return a.hasOwnProperty(\"application\")}).slice(-1)[0]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",3],8,16],".productList,a=[];c.forEach(function(b){b.hasOwnProperty(\"id\")\u0026\u0026b.id\u0026\u0026a.push(b.id)});return 0\u003Ca.length?a.join(\"|\"):\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",3],8,16],".productList,a=0;c\u0026\u0026c.forEach(function(b){b.hasOwnProperty(\"currentPrice\")\u0026\u0026b.currentPrice\u0026\u0026(a=Number(b.currentPrice)+a)});return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.subtotal"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",3],8,16],".productList,a=[];c.forEach(function(b){b.hasOwnProperty(\"sku\")\u0026\u0026b.sku\u0026\u0026a.push(b.sku)});return 0\u003Ca.length?a.join(\"|\"):\"\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"loggedIn"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",3],8,16],".productList,a=[];c.forEach(function(b){b.hasOwnProperty(\"brand\")\u0026\u0026b.brand\u0026\u0026a.push(b.brand)});return 0\u003Ca.length?a.join(\"|\"):\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",3],8,16],".productList,a=[];c.forEach(function(b){b.hasOwnProperty(\"genders\")\u0026\u0026b.genders\u0026\u0026a.push(b.genders)});return 0\u003Ca.length?a.join(\"|\"):\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",3],8,16],".productList,a=[];c.forEach(function(b){b.hasOwnProperty(\"color\")\u0026\u0026b.color\u0026\u0026a.push(b.color)});return 0\u003Ca.length?a.join(\"|\"):\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",3],8,16],".productList,a=[];c.forEach(function(b){b.hasOwnProperty(\"category\")\u0026\u0026b.category\u0026\u0026a.push(b.category)});return 0\u003Ca.length?a.join(\"|\"):\"\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"filter"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",3],8,16],".productList,a=[];c.forEach(function(b){b.hasOwnProperty(\"name\")\u0026\u0026b.name\u0026\u0026a.push(b.name)});return 0\u003Ca.length?a.join(\"|\"):\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",3],8,16],".productList,a=[];c.forEach(function(b){b.hasOwnProperty(\"subCategory\")\u0026\u0026b.subCategory\u0026\u0026a.push(b.subCategory)});return 0\u003Ca.length?a.join(\"|\"):\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",3],8,16],".productList,a=[];c.forEach(function(b){b.hasOwnProperty(\"quantity\")\u0026\u0026b.quantity\u0026\u0026a.push(b.quantity)});return 0\u003Ca.length?a.join(\"|\"):0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",3],8,16],".productList,a=[];c.forEach(function(b){b.hasOwnProperty(\"isOnSale\")\u0026\u0026b.isOnSale\u0026\u0026a.push(b.isOnSale)});return 0\u003Ca.length?a.join(\"|\"):!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],".order.promoCodeList;if(0\u003Ca.length)return a.join(\"|\");a=Object.values(a).map(function(b){return b.code});return 0\u003Ca.length?a.join(\"|\"):\"\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.shipping"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.tax"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.total"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",18],8,16],".length?Math.round(100*(",["escape",["macro",6],8,16],"+",["escape",["macro",19],8,16],"+",["escape",["macro",20],8,16],"-",["escape",["macro",21],8,16],"))\/100:0})();"]
    },{
      "function":"__e"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",3],8,16],".productList,c=[];b.forEach(function(a){a.hasOwnProperty(\"currentPrice\")\u0026\u0026a.currentPrice\u0026\u0026a.hasOwnProperty(\"fullPrice\")\u0026\u0026a.fullPrice\u0026\u0026(\"onCartViewed\"===",["escape",["macro",23],8,16],"||\"onCheckoutViewed\"===",["escape",["macro",23],8,16],"||\"onOrderCompleted\"===",["escape",["macro",23],8,16],")\u0026\u0026c.push((a.currentPrice-.46*a.fullPrice-11-1.33+4-.028*a.currentPrice).toFixed(2))});return 0\u003Cc.length?(b=c.reduce(function(a,d){return a+d},0),parseFloat(parseFloat(b).toFixed(2))):0})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_map":["list",["map","key","de","value","0.87"],["map","key","gb","value","0.82"],["map","key","fr","value","0.82"],["map","key","it","value","0.81"],["map","key","es","value","0.81"],["map","key","nl","value","0.85"],["map","key","pl","value","0.87"],["map","key","ie","value","0.82"],["map","key","lu","value","0.85"],["map","key","se","value","0.87"],["map","key","si","value","0.82"],["map","key","dk","value","0.82"],["map","key","cz","value","0.82"],["map","key","fi","value","0.82"],["map","key","at","value","0.85"],["map","key","be","value","0.85"],["map","key","gr","value","0.82"],["map","key","hu","value","0.82"],["map","key","ca","value","0.74"],["map","key","au","value","0.71"],["map","key","cl","value","0.74"],["map","key","tr","value","0.65"],["map","key","ru","value","0.82"],["map","key","eg","value","0.61"],["map","key","za","value","0.74"],["map","key","ma","value","0.61"],["map","key","nz","value","0.73"],["map","key","pr","value","0.78"],["map","key","no","value","0.73"],["map","key","ro","value","0.78"],["map","key","hr","value","0.75"],["map","key","il","value","0.84"],["map","key","sk","value","0.75"],["map","key","bg","value","0.80"],["map","key","ae","value","0.85"],["map","key","sa","value","0.85"],["map","key","ch","value","0.82"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_map":["list",["map","key","de","value","11"],["map","key","gb","value","10"],["map","key","fr","value","12"],["map","key","it","value","14"],["map","key","es","value","13"],["map","key","nl","value","10"],["map","key","pl","value","15"],["map","key","ie","value","13"],["map","key","lu","value","11"],["map","key","se","value","14"],["map","key","si","value","19"],["map","key","dk","value","13"],["map","key","cz","value","17"],["map","key","fi","value","15"],["map","key","at","value","16"],["map","key","be","value","12"],["map","key","gr","value","25"],["map","key","hu","value","21"],["map","key","ca","value","25"],["map","key","au","value","24"],["map","key","cl","value","28"],["map","key","tr","value","15"],["map","key","ru","value","20"],["map","key","eg","value","26"],["map","key","za","value","31"],["map","key","ma","value","39"],["map","key","nz","value","31"],["map","key","pr","value","45"],["map","key","no","value","21"],["map","key","ro","value","19"],["map","key","hr","value","21"],["map","key","il","value","27"],["map","key","sk","value","17"],["map","key","bg","value","19"],["map","key","ae","value","21"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function e(a,b){a-=b*",["escape",["macro",25],8,16],";a-=",["escape",["macro",26],8,16],";return a.toFixed(2)}var c=",["escape",["macro",3],8,16],".productList,d=[];c.forEach(function(a){a.hasOwnProperty(\"currentPrice\")\u0026\u0026a.currentPrice\u0026\u0026a.hasOwnProperty(\"fullPrice\")\u0026\u0026a.fullPrice\u0026\u0026(\"onCartViewed\"===",["escape",["macro",23],8,16],"||\"onCheckoutViewed\"===",["escape",["macro",23],8,16],"||\"onOrderCompleted\"===",["escape",["macro",23],8,16],")\u0026\u0026d.push(e(a.currentPrice,a.fullPrice))});return 0\u003Cd.length?(c=d.reduce(function(a,b){return a+b},0),parseFloat(parseFloat(c).toFixed(2))):\n0})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_map":["list",["map","key","au","value","UA-167630499-4"],["map","key","ar","value","UA-167630499-4"],["map","key","br","value","UA-167630499-4"],["map","key","cl","value","UA-167630499-4"],["map","key","in","value","UA-167630499-4"],["map","key","id","value","UA-167630499-4"],["map","key","jp","value","UA-167630499-4"],["map","key","kr","value","UA-167630499-4"],["map","key","my","value","UA-167630499-4"],["map","key","mx","value","UA-167630499-4"],["map","key","nz","value","UA-167630499-4"],["map","key","ph","value","UA-167630499-4"],["map","key","pr","value","UA-167630499-4"],["map","key","sg","value","UA-167630499-4"],["map","key","th","value","UA-167630499-4"],["map","key","uy","value","UA-167630499-4"],["map","key","vn","value","UA-167630499-4"],["map","key","ae","value","UA-167630499-3"],["map","key","at","value","UA-167630499-3"],["map","key","be","value","UA-167630499-3"],["map","key","bg","value","UA-167630499-3"],["map","key","ch","value","UA-167630499-3"],["map","key","cz","value","UA-167630499-3"],["map","key","de","value","UA-167630499-3"],["map","key","dk","value","UA-167630499-3"],["map","key","eg","value","UA-167630499-3"],["map","key","es","value","UA-167630499-3"],["map","key","fi","value","UA-167630499-3"],["map","key","fr","value","UA-167630499-3"],["map","key","gb","value","UA-167630499-3"],["map","key","gr","value","UA-167630499-3"],["map","key","hr","value","UA-167630499-3"],["map","key","hu","value","UA-167630499-3"],["map","key","ie","value","UA-167630499-3"],["map","key","il","value","UA-167630499-3"],["map","key","it","value","UA-167630499-3"],["map","key","lu","value","UA-167630499-3"],["map","key","ma","value","UA-167630499-3"],["map","key","nl","value","UA-167630499-3"],["map","key","no","value","UA-167630499-3"],["map","key","pl","value","UA-167630499-3"],["map","key","pt","value","UA-167630499-3"],["map","key","ro","value","UA-167630499-3"],["map","key","ru","value","UA-167630499-3"],["map","key","sa","value","UA-167630499-3"],["map","key","se","value","UA-167630499-3"],["map","key","sk","value","UA-167630499-3"],["map","key","sl","value","UA-167630499-3"],["map","key","tr","value","UA-167630499-3"],["map","key","za","value","UA-167630499-3"],["map","key","cn","value","UA-167630499-5"],["map","key","hk","value","UA-167630499-5"],["map","key","tw","value","UA-167630499-5"],["map","key","ca","value","UA-167630499-2"],["map","key","us","value","UA-167630499-2"]]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",8]],["map","index","2","dimension",["macro",9]],["map","index","3","dimension",["macro",10]],["map","index","4","dimension",["macro",11]],["map","index","6","dimension",["macro",12]],["map","index","9","dimension",["macro",13]],["map","index","10","dimension",["macro",14]],["map","index","11","dimension",["macro",15]],["map","index","12","dimension",["macro",16]],["map","index","14","dimension",["macro",17]],["map","index","16","dimension",["macro",22]],["map","index","17","dimension",["macro",24]],["map","index","18","dimension",["macro",19]],["map","index","19","dimension",["macro",27]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"event"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"application.language"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"application.view"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",3],8,16],".productList,a=[];c.forEach(function(b){b.hasOwnProperty(\"currentPrice\")\u0026\u0026b.currentPrice\u0026\u0026a.push(b.currentPrice)});return 0\u003Ca.length?a.join(\"|\"):0})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_map":["list",["map","key","ae","value","aed"],["map","key","at","value","eur"],["map","key","au","value","aud"],["map","key","be","value","eur"],["map","key","bg","value","bgn"],["map","key","ca","value","cad"],["map","key","ch","value","chf"],["map","key","cl","value","clp"],["map","key","cn","value","cny"],["map","key","cz","value","czk"],["map","key","de","value","eur"],["map","key","dk","value","dkk"],["map","key","eg","value","egp"],["map","key","es","value","eur"],["map","key","fi","value","eur"],["map","key","fr","value","eur"],["map","key","gb","value","gbp"],["map","key","gr","value","eur"],["map","key","hk","value","cny"],["map","key","hr","value","hrk"],["map","key","hu","value","huf"],["map","key","id","value","idr"],["map","key","ie","value","eur"],["map","key","il","value","ils"],["map","key","in","value","inr"],["map","key","it","value","eur"],["map","key","jp","value","jpy"],["map","key","lu","value","eur"],["map","key","ma","value","mad"],["map","key","mx","value","mxn"],["map","key","my","value","myr"],["map","key","nl","value","eur"],["map","key","no","value","nok"],["map","key","nz","value","nzd"],["map","key","ph","value","php"],["map","key","pl","value","pln"],["map","key","pr","value","usd"],["map","key","pt","value","eur"],["map","key","ro","value","ron"],["map","key","ru","value","rub"],["map","key","sa","value","sar"],["map","key","se","value","sek"],["map","key","sg","value","sgd"],["map","key","si","value","eur"],["map","key","sk","value","eur"],["map","key","th","value","thb"],["map","key","tr","value","try"],["map","key","tw","value","twd"],["map","key","us","value","usd"],["map","key","vn","value","vnd"],["map","key","za","value","zar"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",3],8,16],".productList,a=[];c.forEach(function(b){b.hasOwnProperty(\"size\")\u0026\u0026b.size\u0026\u0026a.push(b.size)});return 0\u003Ca.length?a.join(\"|\"):\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"\"})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"application.device"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var d=",["escape",["macro",3],8,16],".productList,c=[];d.forEach(function(a){a.hasOwnProperty(\"inventoryLevel\")\u0026\u0026a.inventoryLevel\u0026\u0026c.push(a.inventoryLevel)});if(0\u003Cc.length){var b=[];c.forEach(function(a){\"Fouts\"===a?b.push(\"OOS\"):\"Miller\"===a?b.push(\"LOW\"):\"Dixon\"===a?b.push(\"MEDIUM\"):\"Mariota\"===a\u0026\u0026b.push(\"HIGH\")});return b.join(\"|\")}return\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"N\";window.marketingClientDataLayer.find(function(b){\"onMemberJoined\"===b.event\u0026\u0026(a=\"Y\")});return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.orderId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",3],8,16],".productList,a=[];c.forEach(function(b){b.hasOwnProperty(\"fullPrice\")\u0026\u0026b.fullPrice\u0026\u0026a.push(b.fullPrice)});return 0\u003Ca.length?a.join(\"|\"):0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"onProductListViewed\"===",["escape",["macro",23],8,16],"){var a=window.location.href.split(\"-\");return a.pop()}return\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",0],8,16],";return\"us\"===a\u0026\u0026",["escape",["macro",18],8,16],".length?Math.round(100*(",["escape",["macro",6],8,16],"+",["escape",["macro",19],8,16],"+",["escape",["macro",20],8,16],"-",["escape",["macro",21],8,16],"))\/100:\"us\"===a?0:\"Not Available\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0\u003C",["escape",["macro",18],8,16],".length?\"Y\":\"N\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"onOrderCompleted\"===",["escape",["macro",23],8,16],"){var b=",["escape",["macro",3],8,16],";return b.productList.map(function(a){return a.quantity}).reduce(function(a,c){return Number(a)+Number(c)},0)}return 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new URLSearchParams(",["escape",["macro",40],8,16],");return a.has(\"vst\")?a.get(\"vst\"):\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],".productList;return a?a.length:0})();"]
    },{
      "function":"__r"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",23],
      "vtp_map":["list",["map","key","onCartViewed","value","shopcart"],["map","key","onOrderCompleted","value","saleconf"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",23],
      "vtp_map":["list",["map","key","onCartViewed","value",["template","cart",["macro",37]]],["map","key","onOrderCompleted","value",["template","sales",["macro",37]]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.currencyCode"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_map":["list",["map","key","ca","value","947143981"],["map","key","ph","value","720583761"],["map","key","us","value","947143981"],["map","key","id","value","852295080"],["map","key","in","value","852317323"],["map","key","my","value","852295092"],["map","key","sg","value","852317356"],["map","key","th","value","852295065"],["map","key","tw","value","852317335"],["map","key","vn","value","852295041"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_map":["list",["map","key","at","value","1015746485"],["map","key","cz","value","967584670"],["map","key","dk","value","1016385456"],["map","key","es","value","1009613942"],["map","key","gr","value","1020299289"],["map","key","hu","value","1014334308"],["map","key","ie","value","961447145"],["map","key","nl","value","964066662"],["map","key","pl","value","965468284"],["map","key","pt","value","1019339978"],["map","key","se","value","1030502116"],["map","key","id","value","852295080"],["map","key","in","value","852317323"],["map","key","jp","value","949496055"],["map","key","mx","value","962023011"],["map","key","my","value","852295092"],["map","key","sg","value","852317356"],["map","key","sl","value","1019331398"],["map","key","th","value","852295065"],["map","key","tw","value","852317335"],["map","key","vn","value","852295041"],["map","key","us","value","947143981"],["map","key","cn","value","994939683"],["map","key","ph","value","720583761"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_map":["list",["map","key","at","value","972113092"],["map","key","be","value","972113092"],["map","key","cz","value","972113092"],["map","key","gr","value","972113092"],["map","key","hu","value","972113092"],["map","key","ie","value","972113092"],["map","key","mx","value","878376296"],["map","key","pl","value","972113092"],["map","key","pt","value","972113092"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_map":["list",["map","key","at","value","zqNOCOiz9F0QxInFzwM"],["map","key","be","value","zqNOCOiz9F0QxInFzwM"],["map","key","cz","value","zqNOCOiz9F0QxInFzwM"],["map","key","gr","value","zqNOCOiz9F0QxInFzwM"],["map","key","hu","value","zqNOCOiz9F0QxInFzwM"],["map","key","ie","value","zqNOCOiz9F0QxInFzwM"],["map","key","mx","value","ttYCCJr04GsQ6OrrogM"],["map","key","pl","value","zqNOCOiz9F0QxInFzwM"],["map","key","pt","value","zqNOCOiz9F0QxInFzwM"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_map":["list",["map","key","at","value","1015746485"],["map","key","be","value","1011262133"],["map","key","bg","value","972113092"],["map","key","ca","value","1039431296"],["map","key","cz","value","967584670"],["map","key","de","value","972113092"],["map","key","dk","value","972113092"],["map","key","es","value","972113092"],["map","key","fi","value","972113092"],["map","key","fr","value","972113092"],["map","key","gb","value","972113092"],["map","key","gr","value","1020299289"],["map","key","hu","value","1014334308"],["map","key","ie","value","961447145"],["map","key","it","value","972113092"],["map","key","jp","value","949496055"],["map","key","lu","value","972113092"],["map","key","mx","value","962023011"],["map","key","nl","value","972113092"],["map","key","pl","value","965468284"],["map","key","pt","value","1019339978"],["map","key","ro","value","972113092"],["map","key","se","value","972113092"],["map","key","si","value","972113092"],["map","key","sk","value","972113092"],["map","key","sl","value","1019331398"],["map","key","us","value","947143981"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_map":["list",["map","key","at","value","zqNOCOiz9F0QxInFzwM"],["map","key","be","value","zqNOCOiz9F0QxInFzwM"],["map","key","bg","value","zqNOCOiz9F0QxInFzwM"],["map","key","ca","value","boneCJ2t1WMQgO3R7wM"],["map","key","cz","value","zqNOCOiz9F0QxInFzwM"],["map","key","de","value","zqNOCOiz9F0QxInFzwM"],["map","key","dk","value","zqNOCOiz9F0QxInFzwM"],["map","key","es","value","zqNOCOiz9F0QxInFzwM"],["map","key","fi","value","zqNOCOiz9F0QxInFzwM"],["map","key","fr","value","zqNOCOiz9F0QxInFzwM"],["map","key","gb","value","zqNOCOiz9F0QxInFzwM"],["map","key","gr","value","zqNOCOiz9F0QxInFzwM"],["map","key","hu","value","zqNOCOiz9F0QxInFzwM"],["map","key","ie","value","zqNOCOiz9F0QxInFzwM"],["map","key","it","value","zqNOCOiz9F0QxInFzwM"],["map","key","jp","value","ds2sCKqg4GAQ99HgxAM"],["map","key","lu","value","zqNOCOiz9F0QxInFzwM"],["map","key","mx","value","ywRsCNDv9GsQ45zdygM"],["map","key","nl","value","zqNOCOiz9F0QxInFzwM"],["map","key","pl","value","zqNOCOiz9F0QxInFzwM"],["map","key","pt","value","zqNOCOiz9F0QxInFzwM"],["map","key","ro","value","zqNOCOiz9F0QxInFzwM"],["map","key","se","value","zqNOCOiz9F0QxInFzwM"],["map","key","si","value","zqNOCOiz9F0QxInFzwM"],["map","key","sk","value","zqNOCOiz9F0QxInFzwM"],["map","key","sl","value","zqNOCOiz9F0QxInFzwM"],["map","key","us","value",""]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_map":["list",["map","key","id","value","j4UmCIDHoXEQqPuzlgM"],["map","key","in","value","0eESCNrYp3EQi6m1lgM"],["map","key","my","value","ctr-CKPMoXEQtPuzlgM"],["map","key","sg","value","MClaCKXcp3EQrKm1lgM"],["map","key","th","value","njm5CMLQjnEQmfuzlgM"],["map","key","tw","value","0sk9CIzcjnEQl6m1lgM"],["map","key","vn","value","MtbUCJnTp3EQgfuzlgM"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_map":["list",["map","key","ca","value","947143981"],["map","key","us","value","947143981"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",23],
      "vtp_map":["list",["map","key","onCartViewed","value",["template","cart",["macro",37],"1"]]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",3],8,16],".productList,a=[];c.forEach(function(b){b.hasOwnProperty(\"currentPriceTotal\")\u0026\u0026b.currentPriceTotal\u0026\u0026a.push(b.currentPriceTotal)});return 0\u003Ca.length?a.join(\"|\"):0})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_map":["list",["map","key","id","value","852295080"],["map","key","in","value","852317323"],["map","key","my","value","852295092"],["map","key","ph","value","720583761"],["map","key","sg","value","852317356"],["map","key","th","value","852295065"],["map","key","tw","value","852317335"],["map","key","vn","value","852295041"],["map","key","us","value","1019013699"],["map","key","ca","value","1019013699"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_map":["list",["map","key","id","value","j4UmCIDHoXEQqPuzlgM"],["map","key","in","value","0eESCNrYp3EQi6m1lgM"],["map","key","my","value","ctr-CKPMoXEQtPuzlgM"],["map","key","ph","value","_nrXCPHJgacBENH4zNcC"],["map","key","sg","value","MClaCKXcp3EQrKm1lgM"],["map","key","th","value","njm5CMLQjnEQmfuzlgM"],["map","key","tw","value","0sk9CIzcjnEQl6m1lgM"],["map","key","vn","value","MtbUCJnTp3EQgfuzlgM"],["map","key","us","value","jwGxCMWNm1sQw9Tz5QM"],["map","key","ca","value","jwGxCMWNm1sQw9Tz5QM"]]
    },{
      "function":"__r"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",3],8,16],".productList,a=[];c.forEach(function(b){b.hasOwnProperty(\"isNikeByYou\")\u0026\u0026b.isNikeByYou\u0026\u0026a.push(b.isNikeByYou)});return 0\u003Ca.length?a.join(\"|\"):!1})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_map":["list",["map","key","gb","value","16327"],["map","key","fr","value","16328"],["map","key","lu","value","16328"],["map","key","de","value","16329"],["map","key","au","value","16330"],["map","key","ca","value","16331"],["map","key","nl","value","16332"],["map","key","be","value","16333"],["map","key","pl","value","16334"],["map","key","re","value","16335"],["map","key","es","value","16336"],["map","key","it","value","16336"],["map","key","dk","value","16338"],["map","key","se","value","16339"],["map","key","at","value","16340"],["map","key","gr","value","16341"],["map","key","hu","value","16341"],["map","key","cz","value","16341"],["map","key","si","value","16341"],["map","key","sk","value","16341"],["map","key","hr","value","16341"],["map","key","ro","value","16341"],["map","key","bg","value","16341"],["map","key","fi","value","16342"],["map","key","ie","value","16343"],["map","key","mx","value","16344"],["map","key","no","value","16345"],["map","key","pt","value","16346"],["map","key","ch","value","16347"],["map","key","tr","value","16348"],["map","key","za","value","16349"],["map","key","cl","value","16349"],["map","key","ma","value","16349"],["map","key","eg","value","16349"],["map","key","pr","value","16349"],["map","key","nz","value","16349"],["map","key","sa","value","16349"],["map","key","ae","value","16349"],["map","key","il","value","16349"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",30],
      "vtp_map":["list",["map","key","onLandingPageViewed","value","homepage"],["map","key","onProductListViewed","value","impressions"],["map","key","onProductViewed","value","details"],["map","key","onProductAdded","value","addToCart"],["map","key","onCartViewed","value","cart"],["map","key","onCheckoutViewed","value","checkout"],["map","key","onOrderCompleted","value","purchase"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.performance.timing;return a.domComplete-a.domLoading})();"]
    },{
      "function":"__c",
      "vtp_value":"2"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.performance.timing;return a.domComplete-a.responseStart})();"]
    },{
      "function":"__c",
      "vtp_value":"3"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.performance.timing;return a.loadEventEnd-a.navigationStart})();"]
    },{
      "function":"__c",
      "vtp_value":"4"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date,d=-a.getTimezoneOffset(),e=0\u003C=d?\"+\":\"-\",b=function(c){c=Math.abs(Math.floor(c));return(10\u003Ec?\"0\":\"\")+c};return a.getFullYear()+\"-\"+b(a.getMonth()+1)+\"-\"+b(a.getDate())+\"T\"+b(a.getHours())+\":\"+b(a.getMinutes())+\":\"+b(a.getSeconds())+\".\"+b(a.getMilliseconds())+e+b(d\/60)+\":\"+b(d%60)})();"]
    },{
      "function":"__c",
      "vtp_value":"2"
    },{
      "function":"__c",
      "vtp_value":"3"
    },{
      "function":"__c",
      "vtp_value":"5"
    },{
      "function":"__c",
      "vtp_value":"4"
    },{
      "function":"__c",
      "vtp_value":"1"
    },{
      "function":"__c",
      "vtp_value":"UA-171421696-1"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var b=ga.getAll(),c;var a=0;for(c=b.length;a\u003Cc;a+=1)if(b[a].get(\"trackingId\")===",["escape",["macro",95],8,16],")return b[a].get(\"clientId\")}catch(d){}return\"false\"})();"]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__cid"
    },{
      "function":"__ctv"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index",["macro",94],"dimension",["macro",96]],["map","index",["macro",90],"dimension",["macro",40]],["map","index",["macro",91],"dimension",["macro",97]],["map","index",["macro",93],"dimension",["macro",89]],["map","index",["macro",92],"dimension",["template",["macro",98]," - ",["macro",99]]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",95],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.performance.timing;return a.domInteractive-a.responseStart})();"]
    },{
      "function":"__c",
      "vtp_value":"1"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return JSON.stringify(window.dataLayer)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){e=",["escape",["macro",23],8,16],";if(\"gtm.js\"===e)return ",["escape",["macro",103],8,16],";for(var a=window.dataLayer.length-1;0\u003C=a;a--)if(window.dataLayer[a].event===e)return JSON.stringify(window.dataLayer[a])})();"]
    },{
      "function":"__c",
      "vtp_value":"5"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",106],8,16],";if(\"undefined\"!==typeof a)return JSON.stringify(a)})();"]
    },{
      "function":"__c",
      "vtp_value":"https:\/\/vjwvg5neoe.execute-api.us-east-1.amazonaws.com\/default\/newRelicPoster"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",3],8,16],".productList,b=[];c.forEach(function(a){a.hasOwnProperty(\"id\")\u0026\u0026a.id\u0026\u0026b.push({id:a.id,google_business_vertical:\"retail\"})});return b})();"]
    },{
      "function":"__c",
      "vtp_value":"20634084-7fa1-4691-8aec-fefe00263e00"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",3],8,16],".productList,b=[];c.forEach(function(a){a.hasOwnProperty(\"id\")\u0026\u0026a.id\u0026\u0026b.push(a.id)});return b})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",23],
      "vtp_defaultValue":"PAGE_VIEW",
      "vtp_map":["list",["map","key","onCartViewed","value","PAGE_VIEW"],["map","key","onCheckoutViewed","value","START_CHECKOUT"],["map","key","onOrderCompleted","value","PURCHASE"],["map","key","onProductListViewed","value","LIST_VIEW"],["map","key","onProductListFiltered","value","LIST_VIEW"],["map","key","onProductAdded","value","ADD_CART"],["map","key","onMemberJoined","value","SIGN_UP"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_defaultValue":"4024470",
      "vtp_map":["list",["map","key","ae","value","5424734"],["map","key","at","value","5424734"],["map","key","au","value","5424734"],["map","key","be","value","5424734"],["map","key","bg","value","5424734"],["map","key","ca","value","5424734"],["map","key","ch","value","5424734"],["map","key","cl","value","5424734"],["map","key","cz","value","5424734"],["map","key","de","value","5424734"],["map","key","dk","value","5424734"],["map","key","eg","value","5424734"],["map","key","es","value","5424734"],["map","key","fi","value","5424734"],["map","key","fr","value","5424734"],["map","key","gb","value","5424734"],["map","key","hr","value","5424734"],["map","key","hu","value","5424734"],["map","key","id","value","5662582"],["map","key","ie","value","5424734"],["map","key","il","value","5424734"],["map","key","in","value","5662580"],["map","key","it","value","5424734"],["map","key","lu","value","5424734"],["map","key","ma","value","5424734"],["map","key","mx","value","5424734"],["map","key","my","value","5662581"],["map","key","nl","value","5424734"],["map","key","no","value","5424734"],["map","key","nz","value","5424734"],["map","key","pl","value","5424734"],["map","key","pr","value","5424734"],["map","key","pt","value","5424734"],["map","key","ro","value","5424734"],["map","key","ru","value","5424734"],["map","key","sa","value","5424734"],["map","key","se","value","5424734"],["map","key","sg","value","5662579"],["map","key","si","value","5424734"],["map","key","sk","value","5424734"],["map","key","th","value","5662583"],["map","key","tr","value","5424734"],["map","key","tw","value","5662577"],["map","key","vn","value","5662584"],["map","key","za","value","5424734"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",23],
      "vtp_map":["list",["map","key","onCartViewed","value","cart"],["map","key","onCheckoutViewed","value","cart"],["map","key","onOrderCompleted","value","purchase"],["map","key","onProductListViewed","value","product"],["map","key","onProductListFiltered","value","searchresults"],["map","key","onLandingPageViewed","value","home"],["map","key","onProductViewed","value","product"],["map","key","onColorChange","value","product"],["map","key","onSizeSelect","value","product"],["map","key","onProductAdded","value","product"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",3],8,16],".productList,a=[];c.forEach(function(b){b.hasOwnProperty(\"brand\")\u0026\u0026b.brand\u0026\u0026a.push(b.brand)});return 0\u003Ca.length?a.join():\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",3],8,16],".productList,a=[];c.forEach(function(b){b.hasOwnProperty(\"id\")\u0026\u0026b.id\u0026\u0026a.push(b.id)});return 0\u003Ca.length?a.join():\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",3],8,16],".productList,a=[];c.forEach(function(b){b.hasOwnProperty(\"genders\")\u0026\u0026b.genders\u0026\u0026a.push(b.genders)});return 0\u003Ca.length?a.join():\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",3],8,16],".productList,a=[];c.forEach(function(b){b.hasOwnProperty(\"subCategory\")\u0026\u0026b.subCategory\u0026\u0026a.push(b.subCategory)});return 0\u003Ca.length?a.join():\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",3],8,16],".productList,a=[];c.forEach(function(b){b.hasOwnProperty(\"category\")\u0026\u0026b.category\u0026\u0026a.push(b.category)});return 0\u003Ca.length?a.join():\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",3],8,16],".productList})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",23],
      "vtp_defaultValue":"category",
      "vtp_map":["list",["map","key","onLandingPageViewed","value","home"],["map","key","onProductListViewed","value","category"],["map","key","onProductListFiltered","value","category"],["map","key","onProductAdded","value","category"],["map","key","onCartViewed","value","cart"],["map","key","onProductViewed","value","detail"],["map","key","onCheckoutViewed","value","conversion"]]
    },{
      "function":"__c",
      "vtp_value":"CDkPfEJh6kmQAM2mzFI06A=="
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],".order.promoCodeList;a=Object.values(a).map(function(b){return b.code});return(a=a.filter(function(b){return b.match(\/UNID|UNITEST\/i)})[0])?a:\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",6],8,16],"-(",["escape",["macro",21],8,16],"-",["escape",["macro",19],8,16],");return parseFloat(a.toFixed(2))})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=(",["escape",["macro",6],8,16],"-(",["escape",["macro",21],8,16],"-",["escape",["macro",19],8,16],"))\/",["escape",["macro",6],8,16],"*100;return parseFloat(a.toFixed(2))})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.errorMessage",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorLineNumber",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__cvt_31367757_43",
      "metadata":["map","vendor","facebook","name","Facebook - EPV"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_disablePushState":true,
      "vtp_pixelId":"351341038378023",
      "vtp_objectPropertyList":["list",["map","name","currency","value",["macro",2]],["map","name","content_ids","value",["macro",4]],["map","name","content_type","value","product"],["map","name","value","value",["macro",5]],["map","name","source","value","marketingClient"]],
      "vtp_endPoint":"https:\/\/dhjcidlp39.execute-api.us-east-2.amazonaws.com\/default\/GTM-monitoring-forwarder",
      "vtp_standardEventName":"ViewContent",
      "vtp_disableAutoConfig":true,
      "vtp_enhancedEcommerce":false,
      "vtp_userProperties":false,
      "vtp_eventName":"standard",
      "vtp_objectPropertiesFromVariable":false,
      "vtp_consent":true,
      "vtp_advancedMatching":false,
      "tag_id":42
    },{
      "function":"__cvt_31367757_43",
      "metadata":["map","vendor","facebook","name","Facebook - OC"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_disablePushState":true,
      "vtp_pixelId":"351341038378023",
      "vtp_objectPropertyList":["list",["map","name","content_ids","value",["macro",4]],["map","name","content_type","value","product"],["map","name","value","value",["macro",6]],["map","name","currency","value",["macro",2]],["map","name","order_product_sku","value",["macro",7]],["map","name","source","value","marketingClient"]],
      "vtp_endPoint":"https:\/\/dhjcidlp39.execute-api.us-east-2.amazonaws.com\/default\/GTM-monitoring-forwarder",
      "vtp_standardEventName":"Purchase",
      "vtp_disableAutoConfig":true,
      "vtp_enhancedEcommerce":false,
      "vtp_userProperties":false,
      "vtp_eventName":"standard",
      "vtp_objectPropertiesFromVariable":false,
      "vtp_consent":true,
      "vtp_advancedMatching":false,
      "tag_id":47
    },{
      "function":"__ua",
      "metadata":["map","vendor","ga360","name","GA360 Ecommerce - OrderCompleted"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"Core Buy Flow Tunnel",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",29],
      "vtp_eventAction":"Order Completed",
      "vtp_eventLabel":"GA360 - OrderCompleted",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":174
    },{
      "function":"__ua",
      "metadata":["map","vendor","ga360","name","GA360 - EveryPageViewed"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",29],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":187
    },{
      "function":"__ua",
      "metadata":["map","vendor","ga360","name","GA360 Ecommerce - EveryPageViewed"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"Core Buy Flow Tunnel",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",29],
      "vtp_eventAction":["macro",30],
      "vtp_eventLabel":"GA360 Ecommerce  - EveryPageViewed",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":243
    },{
      "function":"__flc",
      "metadata":["map","vendor","google-floodlight","name","Google Floodlight - EPV (w\/o Cart)"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",0]],["map","key","u2","value",["macro",31]],["map","key","u3","value",["macro",32]],["map","key","u4","value",["macro",33]],["map","key","u5","value",["macro",16]],["map","key","u6","value",["macro",4]],["map","key","u7","value",["macro",34]],["map","key","u8","value",["macro",31]],["map","key","u9","value",["macro",35]],["map","key","u10","value",["macro",14]],["map","key","u11","value",["macro",12]],["map","key","u12","value",["macro",16]],["map","key","u13","value",["macro",36]],["map","key","u14","value",["macro",37]],["map","key","u15","value",["macro",38]],["map","key","u16","value",["macro",39]],["map","key","u17","value",["macro",40]],["map","key","u18","value",["macro",41]],["map","key","u19","value",["macro",42]],["map","key","u20","value",["macro",43]],["map","key","u21","value",["macro",44]],["map","key","u22","value",["macro",45]],["map","key","u23","value",["macro",9]],["map","key","u24","value",["macro",12]],["map","key","u25","value",["macro",0]],["map","key","u26","value",["macro",37]],["map","key","u27","value",["macro",19]],["map","key","u28","value",["macro",46]],["map","key","u29","value",["macro",36]],["map","key","u30","value",["macro",13]],["map","key","u31","value",["macro",47]],["map","key","u32","value",["macro",48]],["map","key","u33","value",["macro",10]],["map","key","u34","value",["macro",49]],["map","key","u35","value",["macro",17]],["map","key","u36","value",["macro",31]],["map","key","u37","value",["macro",37]],["map","key","u38","value",["macro",50]],["map","key","u39","value",["macro",51]],["map","key","u40","value",["macro",52]],["map","key","u41","value",["macro",53]],["map","key","u42","value",["macro",14]],["map","key","u43","value",["macro",16]],["map","key","u44","value",["macro",7]],["map","key","u45","value",["macro",54]],["map","key","u46","value",["macro",24]],["map","key","u47","value",["macro",55]],["map","key","u48","value",["macro",22]],["map","key","u49","value",["macro",56]],["map","key","u50","value",["macro",57]],["map","key","u51","value",["macro",58]],["map","key","u52","value",["macro",59]],["map","key","u53","value",["macro",38]],["map","key","u54","value",["macro",11]],["map","key","u55","value",["macro",15]],["map","key","u56","value",["macro",6]],["map","key","u57","value",["macro",60]],["map","key","u58","value",["macro",21]],["map","key","u59","value",["macro",61]],["map","key","u60","value",["macro",40]],["map","key","u61","value",["macro",8]],["map","key","u62","value",["macro",27]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"category",
      "vtp_useImageTag":true,
      "vtp_activityTag":"pdppages",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"4171764",
      "vtp_ordinalStandard":["macro",62],
      "vtp_url":["macro",63],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":261
    },{
      "function":"__fls",
      "metadata":["map","vendor","google-floodlight","name","Google Floodlight - Cart\/OC"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",0]],["map","key","u2","value",["macro",31]],["map","key","u3","value",["macro",32]],["map","key","u4","value",["macro",33]],["map","key","u5","value",["macro",58]],["map","key","u6","value",["macro",4]],["map","key","u7","value",["macro",34]],["map","key","u8","value",["macro",31]],["map","key","u9","value",["macro",35]],["map","key","u10","value",["macro",14]],["map","key","u11","value",["macro",12]],["map","key","u12","value",["macro",16]],["map","key","u13","value",["macro",36]],["map","key","u14","value",["macro",37]],["map","key","u15","value",["macro",38]],["map","key","u16","value",["macro",39]],["map","key","u17","value",["macro",40]],["map","key","u18","value",["macro",41]],["map","key","u19","value",["macro",42]],["map","key","u20","value",["macro",43]],["map","key","u21","value",["macro",44]],["map","key","u22","value",["macro",45]],["map","key","u23","value",["macro",9]],["map","key","u24","value",["macro",12]],["map","key","u25","value",["macro",0]],["map","key","u26","value",["macro",37]],["map","key","u27","value",["macro",19]],["map","key","u28","value",["macro",46]],["map","key","u29","value",["macro",36]],["map","key","u30","value",["macro",13]],["map","key","u31","value",["macro",47]],["map","key","u32","value",["macro",48]],["map","key","u33","value",["macro",10]],["map","key","u34","value",["macro",49]],["map","key","u35","value",["macro",17]],["map","key","u36","value",["macro",31]],["map","key","u37","value",["macro",37]],["map","key","u38","value",["macro",50]],["map","key","u39","value",["macro",51]],["map","key","u40","value",["macro",52]],["map","key","u41","value",["macro",53]],["map","key","u42","value",["macro",14]],["map","key","u43","value",["macro",16]],["map","key","u44","value",["macro",7]],["map","key","u45","value",["macro",54]],["map","key","u46","value",["macro",24]],["map","key","u47","value",["macro",55]],["map","key","u48","value",["macro",22]],["map","key","u49","value",["macro",56]],["map","key","u50","value",["macro",57]],["map","key","u51","value",["macro",58]],["map","key","u52","value",["macro",59]],["map","key","u53","value",["macro",38]],["map","key","u54","value",["macro",11]],["map","key","u55","value",["macro",15]],["map","key","u56","value",["macro",6]],["map","key","u57","value",["macro",60]],["map","key","u58","value",["macro",21]],["map","key","u59","value",["macro",61]],["map","key","u60","value",["macro",40]],["map","key","u61","value",["macro",8]],["map","key","u62","value",["macro",27]]],
      "vtp_revenue":["macro",21],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",52],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":["macro",64],
      "vtp_useImageTag":true,
      "vtp_activityTag":["macro",65],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"4171764",
      "vtp_useImageTagIsTrue":true,
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",63],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":266
    },{
      "function":"__awct",
      "metadata":["map","vendor","google-adservices","name","Google AdServices(979250650) - OC"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_enableNewCustomerReporting":false,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",52],
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":["macro",21],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"979250650",
      "vtp_currencyCode":["macro",66],
      "vtp_conversionLabel":"7vJBCM76kAsQ2tv40gM",
      "vtp_rdp":false,
      "vtp_url":["macro",63],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":272
    },{
      "function":"__awct",
      "metadata":["map","vendor","google-adservices","name","Google AdServices(947143981) - OC"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_enableNewCustomerReporting":false,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":"0",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"947143981",
      "vtp_conversionLabel":"m-IECKvq3QMQrYrRwwM",
      "vtp_rdp":false,
      "vtp_url":["macro",63],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":274
    },{
      "function":"__sp",
      "metadata":["map","name","Google Adwords - EPV"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":["macro",67],
      "vtp_customParamsFormat":"NONE",
      "vtp_rdp":false,
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",63],
      "vtp_enableRdpCheckbox":true,
      "tag_id":299
    },{
      "function":"__awct",
      "metadata":["map","vendor","google-conversion","name","Google Conversion 2"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_enableNewCustomerReporting":false,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",52],
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":["macro",21],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"876806954",
      "vtp_currencyCode":["macro",66],
      "vtp_conversionLabel":"we6SCO7l3YUBEKqGjKID",
      "vtp_rdp":false,
      "vtp_url":["macro",63],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":303
    },{
      "function":"__sp",
      "metadata":["map","vendor","google-remarketing","name","Google Ads Remarketing - EPV"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_customParams":["list",["map","key","ecomm_pagetype","value",["macro",32]],["map","key","ecomm_prodid","value",["macro",4]],["map","key","ecomm_totalvalue","value",["macro",36]]],
      "vtp_conversionId":["macro",68],
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_rdp":false,
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",63],
      "vtp_enableRdpCheckbox":true,
      "tag_id":315
    },{
      "function":"__awct",
      "metadata":["map","name","Google Ads Globalstore"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_enableNewCustomerReporting":false,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",52],
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":["macro",21],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"985513555",
      "vtp_currencyCode":["macro",66],
      "vtp_conversionLabel":"kBNlCO6bnGMQ0_z21QM",
      "vtp_rdp":false,
      "vtp_url":["macro",63],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":316
    },{
      "function":"__fls",
      "metadata":["map","vendor","google-floodlight","name","Google Floodlight Globalstore (TR)"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u10","value",["macro",37]],["map","key","u2","value",["macro",14]],["map","key","u3","value",["macro",7]],["map","key","u4","value",["macro",12]],["map","key","u6","value",["macro",16]],["map","key","u7","value",["macro",36]],["map","key","u9","value",["macro",0]]],
      "vtp_revenue":["macro",21],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",52],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"saleconf",
      "vtp_useImageTag":false,
      "vtp_activityTag":"salestry",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"5283801",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",63],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":318
    },{
      "function":"__sp",
      "metadata":["map","vendor","google-remarketing","name","Google Remarketing Forward 3D"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"985513555",
      "vtp_customParamsFormat":"NONE",
      "vtp_rdp":false,
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",63],
      "vtp_enableRdpCheckbox":true,
      "tag_id":322
    },{
      "function":"__awct",
      "metadata":["map","vendor","google-adservices","name","Google AdServices(1016352054) - OC"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_enableNewCustomerReporting":false,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":"0",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1016352054",
      "vtp_conversionLabel":"riyBCKK5nAcQtprR5AM",
      "vtp_rdp":false,
      "vtp_url":["macro",63],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":324
    },{
      "function":"__cvt_31367757_368",
      "metadata":["map","name","DEBUG - Monitor GTM Tags"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_excludeSelf":true,
      "vtp_event":["macro",3],
      "tag_id":354
    },{
      "function":"__sp",
      "metadata":["map","vendor","google-confirm","name","Google Confirm - OC"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_customParams":["list",["map","key","google_conversion_color","value","ffffff"],["map","key","google_conversion_format","value","3"],["map","key","google_conversion_language","value","en"],["map","key","google_conversion_value","value","1.0"],["map","key","google_remarketing_only","value","false"],["map","key","google_conversion_id","value",["macro",69]],["map","key","google_conversion_label","value",["macro",70]],["map","key","google_conversion_currency","value",["macro",37]]],
      "vtp_conversionId":["macro",71],
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_conversionLabel":["macro",72],
      "vtp_rdp":false,
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",63],
      "vtp_enableRdpCheckbox":true,
      "tag_id":364
    },{
      "function":"__awct",
      "metadata":["map","vendor","google-adservices","name","Google AdServices(1042371899) - OC"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_enableNewCustomerReporting":false,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":"0",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1042371899",
      "vtp_conversionLabel":"sZlcCKfCRxC7qoXxAw",
      "vtp_rdp":false,
      "vtp_url":["macro",63],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":372
    },{
      "function":"__awct",
      "metadata":["map","vendor","google-adservices","name","Google AdServices(980431507) - OC"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_enableNewCustomerReporting":false,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":"0",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"980431507",
      "vtp_conversionLabel":"Sz-TCK2OnAIQk-XA0wM",
      "vtp_rdp":false,
      "vtp_url":["macro",63],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":373
    },{
      "function":"__awct",
      "metadata":["map","vendor","google-adservices","name","Google AdServices(980439425) - OC"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_enableNewCustomerReporting":false,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":"0",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"980439425",
      "vtp_conversionLabel":"qfQnCJfz1wIQgaPB0wM",
      "vtp_rdp":false,
      "vtp_url":["macro",63],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":374
    },{
      "function":"__awct",
      "metadata":["map","vendor","google-adservices","name","Google AdServices(1004523507) - OC"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_enableNewCustomerReporting":false,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":"0",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1004523507",
      "vtp_conversionLabel":"ttfYCJ2_7QIQ85__3gM",
      "vtp_rdp":false,
      "vtp_url":["macro",63],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":375
    },{
      "function":"__ua",
      "metadata":["map","vendor","ga360","name","GA360 Ecommerce - Membership"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"Registration Tunnel",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",29],
      "vtp_eventAction":["macro",30],
      "vtp_eventLabel":"GA360 Ecommerce  - Membership",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":378
    },{
      "function":"__sp",
      "metadata":["map","vendor","google-adwords","name","Google Adwords Globalstore - OC"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_customParams":["list",["map","key","google_conversion_language","value",["macro",0]],["map","key","google_conversion_format","value","3"],["map","key","google_conversion_color","value","ffffff"],["map","key","google_conversion_value","value","0.00"],["map","key","google_remarketing_only","value","false"]],
      "vtp_conversionId":["macro",67],
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_rdp":false,
      "vtp_conversionLabel":["macro",73],
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",63],
      "vtp_enableRdpCheckbox":true,
      "tag_id":397
    },{
      "function":"__sp",
      "metadata":["map","vendor","google-adwords","name","Google Adwords - CA\/US - OC"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_customParams":["list",["map","key","ecomm_prodid","value",["macro",4]],["map","key","ecomm_totalvalue","value",["macro",21]],["map","key","ecomm_category","value",["macro",9]],["map","key","ecomm_pvalue","value",["macro",36]],["map","key","ecomm_s","value",["macro",16]]],
      "vtp_conversionId":["macro",74],
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_rdp":false,
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",63],
      "vtp_enableRdpCheckbox":true,
      "tag_id":399
    },{
      "function":"__sp",
      "metadata":["map","name","Google Ads Remarketing"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":["macro",68],
      "vtp_customParamsFormat":"NONE",
      "vtp_rdp":false,
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",63],
      "vtp_enableRdpCheckbox":true,
      "tag_id":402
    },{
      "function":"__gclidw",
      "metadata":["map","vendor","google-conversion","name","Google Conversion Linker"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableUrlPassthrough":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "vtp_enableCookieFlagsFeature":false,
      "vtp_enableUrlPassthroughFeature":true,
      "tag_id":464
    },{
      "function":"__flc",
      "metadata":["map","vendor","google-floodlight","name","Google Floodlight Member Registration"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"regconfm",
      "vtp_useImageTag":false,
      "vtp_activityTag":["template","coreg",["macro",37]],
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"4171764",
      "vtp_ordinalStandard":["macro",62],
      "vtp_url":["macro",63],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":482
    },{
      "function":"__fls",
      "metadata":["map","vendor","google-floodlight","name","Google Floodlight - Cart 2"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",0]],["map","key","u2","value",["macro",31]],["map","key","u3","value",["macro",32]],["map","key","u4","value",["macro",33]],["map","key","u5","value",["macro",58]],["map","key","u6","value",["macro",4]],["map","key","u7","value",["macro",34]],["map","key","u8","value",["macro",31]],["map","key","u9","value",["macro",35]],["map","key","u10","value",["macro",14]],["map","key","u11","value",["macro",12]],["map","key","u12","value",["macro",16]],["map","key","u13","value",["macro",36]],["map","key","u14","value",["macro",37]],["map","key","u15","value",["macro",38]],["map","key","u16","value",["macro",39]],["map","key","u17","value",["macro",40]],["map","key","u18","value",["macro",41]],["map","key","u19","value",["macro",42]],["map","key","u20","value",["macro",43]],["map","key","u21","value",["macro",44]],["map","key","u22","value",["macro",45]],["map","key","u23","value",["macro",9]],["map","key","u24","value",["macro",12]],["map","key","u25","value",["macro",0]],["map","key","u26","value",["macro",37]],["map","key","u27","value",["macro",19]],["map","key","u28","value",["macro",46]],["map","key","u29","value",["macro",36]],["map","key","u30","value",["macro",13]],["map","key","u31","value",["macro",47]],["map","key","u32","value",["macro",48]],["map","key","u33","value",["macro",10]],["map","key","u34","value",["macro",49]],["map","key","u35","value",["macro",17]],["map","key","u36","value",["macro",31]],["map","key","u37","value",["macro",37]],["map","key","u38","value",["macro",50]],["map","key","u39","value",["macro",51]],["map","key","u40","value",["macro",52]],["map","key","u41","value",["macro",53]],["map","key","u42","value",["macro",14]],["map","key","u43","value",["macro",16]],["map","key","u44","value",["macro",7]],["map","key","u45","value",["macro",54]],["map","key","u46","value",["macro",24]],["map","key","u47","value",["macro",55]],["map","key","u48","value",["macro",22]],["map","key","u49","value",["macro",56]],["map","key","u50","value",["macro",57]],["map","key","u51","value",["macro",58]],["map","key","u52","value",["macro",59]],["map","key","u53","value",["macro",38]],["map","key","u54","value",["macro",11]],["map","key","u55","value",["macro",15]],["map","key","u56","value",["macro",6]],["map","key","u57","value",["macro",60]],["map","key","u58","value",["macro",21]],["map","key","u59","value",["macro",61]],["map","key","u60","value",["macro",40]],["map","key","u61","value",["macro",8]],["map","key","u62","value",["macro",27]]],
      "vtp_revenue":["macro",21],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",52],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":["macro",64],
      "vtp_useImageTag":true,
      "vtp_activityTag":["macro",75],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"4171764",
      "vtp_useImageTagIsTrue":true,
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",63],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":488
    },{
      "function":"__sp",
      "metadata":["map","vendor","google-mcc","name","Google MCC - EPV"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_customParams":["list",["map","key","ecomm_prodid","value",["macro",4]],["map","key","ecomm_totalvalue","value",["macro",76]]],
      "vtp_conversionId":["macro",77],
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_conversionLabel":["macro",78],
      "vtp_rdp":false,
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",63],
      "vtp_enableRdpCheckbox":true,
      "tag_id":491
    },{
      "function":"__awct",
      "metadata":["map","vendor","google-mcc","name","Google MCC - OC"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_enableNewCustomerReporting":false,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",52],
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":["macro",21],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":["macro",77],
      "vtp_currencyCode":["macro",66],
      "vtp_conversionLabel":["macro",78],
      "vtp_rdp":false,
      "vtp_url":["macro",63],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":507
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":680
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":681
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":682
    },{
      "function":"__jel",
      "tag_id":683
    },{
      "function":"__html",
      "metadata":["map","name","GTM Event Data Log"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar eventData=",["escape",["macro",3],8,16],",isDCMDebug=\"true\"===localStorage.getItem(\"dcm_debug\");isDCMDebug\u0026\u0026console.log(\"\\ud83c\\udff7 GTM Event Data\\n\",eventData);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":3
    },{
      "function":"__html",
      "metadata":["map","vendor","google-dc-search","name","Google DC Natural Search"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=DC-4171764\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.marketingClientDataLayer=window.marketingClientDataLayer||[];function gtag(){marketingClientDataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"DC-8128335\",{dc_natural_search:{exclusion_parameters:[\"^foo[_]bar\\x3dqux$\",\"^yes\\x3dno^\"],engines:{aol:\"1;2;a\",ask:\"3;4;b\",google:\"5;6;c\",msn:\"7;8;d\",yahoo:\"9;0;e\",yahoo_japan:\"11;12;f\"}}});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":291
    },{
      "function":"__html",
      "metadata":["map","vendor","google-dc-search","name","Google DC Search"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"https:\/\/ad.doubleclick.net\/ddm\/adj\/N8893.197812NSO.CODESRV\/B20224519.203668329;sz=1x2;ord=",["escape",["macro",79],3],"?\" async type=\"text\/gtmscript\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":301
    },{
      "function":"__html",
      "metadata":["map","vendor","rakuten","name","Rakuten Global Tracking - EPV \/ OC"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){window.DataLayer||(window.DataLayer={});DataLayer.events||(DataLayer.events={});DataLayer.events.SPIVersion=DataLayer.events.SPIVersion||\"3.4.1\";DataLayer.events.SiteSection=\"1\";var b=document.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=a;a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})(document.location.protocol+\"\/\/tag.rmp.rakuten.com\/111680.ct.js\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":601
    },{
      "function":"__html",
      "metadata":["map","vendor","rakuten","name","Rakuten - OC"],
      "consent":["list"],
      "setup_tags":["list",["tag",38,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar lineItems=",["escape",["macro",3],8,16],".productList.map(function(f){return{quantity:f.quantity,unitPrice:f.currentPrice,unitPriceLessTax:f.currentPrice,SKU:f.id,productName:\"\".concat(",["escape",["macro",0],8,16],".toUpperCase(),\" : \").concat(f.name)}}),rm_trans={affiliateConfig:{ranMID:\"41134\",discountType:\"item\",includeStatus:\"false\",tagType:\"mop\"},orderid:",["escape",["macro",52],8,16],",currency:",["escape",["macro",37],8,16],".toUpperCase(),customerStatus:\"\",conversionType:\"Sale\",customerID:\"\",discountCode:",["escape",["macro",18],8,16],",\ndiscountAmount:",["escape",["macro",22],8,16],",taxAmount:0,lineitems:lineItems};\n!function(f,J,K){var g=f.rakutenDataLayerName||\"DataLayer\";f[g]=f[g]||{};f[g].events=f[g].events||{};f[g].events.SPIVersion=\"3.4.1\";f[g].Sale=f[g].Sale||{};f[g].Sale.Basket=f[g].Sale.Basket||{};K.Ready=f[g].Sale.Basket.Ready\u0026\u0026f[g].Sale.Basket.Ready+1||1;f[g].Sale.Basket=K;var M=function(a){for(var b=a+\"\\x3d\",c=J.cookie.split(\";\"),e=0;e\u003Cc.length;e++){for(a=c[e];\" \"==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(b))return a.substring(b.length,a.length)}return\"\"};K=function(a){var b=a||\"\",c=\n{};if(a||(b=M(\"rmStore\")),b){for(;b!==decodeURIComponent(b);)b=decodeURIComponent(b);a=b.split(\"|\");for(b=0;b\u003Ca.length;b++)c[a[b].split(\":\")[0]]=a[b].split(\":\")[1]}return c};var O={};O=K();var h=function(a,b,c,e){c=c||\"\";e=e||{};a=O[a||\"\"];b=e[b||\"\"];c=(a=(e=e.ignoreCookie||!1)?0:a)||b||c;return c=(\"string\"!=typeof c||\"false\"!==c.toLowerCase())\u0026\u0026c,c},N=function(a,b,c,e,z){var m=J.createElement(a),k=-1\u003CJ.location.protocol.indexOf(\"s\")?\"https:\":\"http:\",r;for(r in b=b.replace(\"https:\",k),m.src=b,e=e||\n{},\"script\"==a?e.type=e.type||\"text\/javascript\":(e.style=\"display:none;\",\"img\"==a\u0026\u0026(e.alt=\"\",e.height=\"1\",e.width=\"1\")),e)e.hasOwnProperty(r)\u0026\u0026m.setAttribute(r,e[r]);a=J.getElementsByTagName(c);a=a.length?a[0]:J.getElementsByTagName(\"script\")[0].parentElement;z\u0026\u0026(m.onload=z,m.onreadystatechange=function(){\"complete\"!=this.readyState\u0026\u0026\"loaded\"!=this.readyState||z()});a.appendChild(m)},P=function(a){var b=new Date;b=b.getUTCFullYear()+(\"0\"+(b.getUTCMonth()+1)).slice(-2)+(\"0\"+b.getUTCDate()).slice(-2)+\n(\"0\"+b.getUTCHours()).slice(-2)+(\"0\"+b.getUTCMinutes()).slice(-2);return\"NoOID_\"+(a?a+\"_\":\"\")+Math.round(1E5*Math.random())+\"_\"+b},R=function(){var a=f[g]\u0026\u0026f[g].Sale\u0026\u0026f[g].Sale.Basket?f[g].Sale.Basket:{},b=b||a.affiliateConfig||{},c=h(\"amid\",\"ranMID\",\"\",b)||a.ranMID;if(!c)return!1;var e=\"undefined\"==typeof b.allowCommission||\"false\"!==b.allowCommission;if(!e||!(a.orderid||a.lineitems\u0026\u0026a.lineitems.length))return!1;var z=h(\"adn\",\"domain\",\"track.linksynergy.com\",b),m=h(\"atm\",\"tagType\",\"pixel\",b);e=h(\"adr\",\n\"discountType\",\"order\",b);var k=h(\"acs\",\"includeStatus\",\"false\",b),r=h(\"arto\",\"removeOrderTax\",\"false\",b),d=h(\"artp\",\"removeTaxFromProducts\",\"false\",b),n=h(\"artd\",\"removeTaxFromDiscount\",\"false\",b),q=h(\"atr\",\"taxRate\",a.taxRate||0,b),y=h(\"ald\",\"land\",!1,{})||(b.land\u0026\u0026!0===b.land?M(\"ranLandDateTime\"):b.land)||!1,F=h(\"atrv\",\"tr\",!1,{})||(b.tr\u0026\u0026!0===b.tr?M(\"ranSiteID\"):b.tr)||!1,G=h(\"acv\",\"centValues\",\"true\",b),v=h(\"ancc\",\"nonCentCurrencies\",\"JPY\",b);q=Math.abs(+q);var t=(100+q)\/100;b=a.orderid||P(c);\nb=encodeURIComponent(b);var w=a.currency||\"\";w=encodeURIComponent(w.toUpperCase());var A=!1;if(w\u0026\u0026v){v=(v+\"\").split(\",\");for(var p=0;p\u003Cv.length;p++)v[p]==w\u0026\u0026(A=!0)}var Q=function(H){return A\u0026\u0026(H=Math.round(H)),G\u0026\u0026\"false\"!==G?(H*=100,H=Math.round(H)):H=Math.round(100*H)\/100,H+\"\"};v=a.taxAmount?Math.abs(+a.taxAmount):0;var B=a.discountAmount?Math.abs(+a.discountAmount):0;p=a.discountAmountLessTax?Math.abs(+a.discountAmountLessTax):0;!p\u0026\u0026B\u0026\u0026n\u0026\u0026q\u0026\u0026(p=B\/t);p=p||B;n=\"ep\";\"mop\"===m\u0026\u0026(n=\"eventnvppixel\");\nB=(a.customerStatus||\"\")+\"\";m=\"\";B\u0026\u0026(k\u0026\u0026\"EXISTING\"==B.toUpperCase()||k\u0026\u0026\"RETURNING\"==B.toUpperCase())\u0026\u0026(m=\"R_\");k=[];for(var D=B=0;D\u003C(a.lineitems?a.lineitems.length:0);D++)if(a.lineitems[D]){var E=!1,l=f.JSON?JSON.parse(JSON.stringify(a.lineitems[D])):a.lineitems[D],L=+l.quantity||0,C=+l.unitPrice||0,u=+l.unitPriceLessTax;C=u||C||0;d\u0026\u0026q\u0026\u0026!u\u0026\u0026(C\/=t);C*=L;for(var I=0;I\u003Ck.length;I++)u=k[I],u.SKU===l.SKU\u0026\u0026(E=!0,u.quantity+=L,u.totalValue+=C);E||(l.quantity=L,l.totalValue=C,k.push(l));B+=C}E=t=q=d=\"\";\nu={};for(D=0;D\u003Ck.length;D++){l=k[D];C=encodeURIComponent(l.SKU);I=l.totalValue;L=l.quantity;var U=encodeURIComponent(l.productName)||\"\";\"item\"===e.toLowerCase()\u0026\u0026p\u0026\u0026(I-=p*I\/B);l=l.optionalData;for(var x in l)l.hasOwnProperty(x)\u0026\u0026(u[x]=u[x]||\"\",u[x]+=encodeURIComponent(l[x])+\"|\");d+=m+C+\"|\";q+=L+\"|\";t+=Q(I)+\"|\";E+=m+U+\"|\"}d=d.slice(0,-1);q=q.slice(0,-1);t=t.slice(0,-1);E=E.slice(0,-1);p\u0026\u0026(p=Q(p));v\u0026\u0026(v=Q(v));p\u0026\u0026\"order\"===e.toLowerCase()\u0026\u0026(d+=\"|\"+m+\"DISCOUNT\",E+=\"|\"+m+\"DISCOUNT\",q+=\"|0\",t+=\"|-\"+p);\nr\u0026\u0026v\u0026\u0026(d+=\"|\"+m+\"ORDERTAX\",q+=\"|0\",t+=\"|-\"+v,E+=\"|\"+m+\"ORDERTAX\");c=\"https:\/\/\"+z+\"\/\"+n+\"?mid\\x3d\"+c;c+=\"\\x26ord\\x3d\"+b;c+=y?\"\\x26land\\x3d\"+y:\"\";c+=F?\"\\x26tr\\x3d\"+F:\"\";c+=\"\\x26cur\\x3d\"+w;c+=\"\\x26skulist\\x3d\"+d;c+=\"\\x26qlist\\x3d\"+q;c+=\"\\x26amtlist\\x3d\"+t;c+=\"\\x26img\\x3d1\";c+=\"\\x26spi\\x3d\"+f[g].events.SPIVersion;p\u0026\u0026\"item\"===e.toLowerCase()\u0026\u0026(c+=\"\\x26discount\\x3d\"+p);l=a.optionalData||{};for(x in a.discountCode\u0026\u0026(l.coupon=a.discountCode),a.customerStatus\u0026\u0026(l.custstatus=a.customerStatus),a.customerID\u0026\u0026\n(l.custid=a.customerID),p\u0026\u0026(l.disamt=p),l)l.hasOwnProperty(x)\u0026\u0026(c+=\"\\x26\"+encodeURIComponent(x)+\"\\x3d\"+encodeURIComponent(l[x]));for(x in u)u.hasOwnProperty(x)\u0026\u0026(c+=\"\\x26\"+encodeURIComponent(x)+\"list\\x3d\"+u[x].slice(0,-1),p\u0026\u0026\"order\"===e.toLowerCase()\u0026\u0026(c+=\"|\"),v\u0026\u0026r\u0026\u0026(c+=\"|\"));c+=\"\\x26namelist\\x3d\"+E;if(8E3\u003Cc.length){for(a=8E3;0\u003Ca;)if(\"\\x26\"==c.charAt(a)){c=c.slice(0,a);break}else a--;c+=\"\\x26trunc\\x3dtrue\"}N(\"img\",c,\"body\")},S=function(){var a=f[g]\u0026\u0026f[g].Sale\u0026\u0026f[g].Sale.Basket?f[g].Sale.Basket:{},\nb=b||a.displayConfig||{},c=h(\"dmid\",\"rdMID\",\"\",b);if(!c||!a.orderid\u0026\u0026!a.conversionType)return!1;var e=h(\"dtm\",\"tagType\",\"js\",b),z=h(\"ddn\",\"domain\",\"tags.rd.linksynergy.com\",b),m=h(\"dis\",\"includeStatus\",\"false\",b),k=h(\"dcomm\",\"allowCommission\",\"notset\",b),r=h(\"duup\",\"useUnitPrice\",\"false\",b),d=h(\"drtp\",\"removeTaxFromProducts\",\"false\",b),n=h(\"drtd\",\"removeTaxFromDiscount\",\"false\",b),q=h(\"dtr\",\"taxRate\",a.taxRate||0,b);b=\"\";\"true\"===k||!0===k||\"1\"===k||1===k?b=\"1\":(\"false\"===k||!1===k||\"0\"===k||0===\nk)\u0026\u0026(b=\"0\");e=\"js\"===e||\"if\"===e||\"img\"===e?e:\"js\";k=\"script\";\"if\"===e?k=\"iframe\":\"img\"===e\u0026\u0026(k=\"img\");\"true\"!==r\u0026\u0026!0!==r\u0026\u0026\"1\"!==r\u0026\u00261!==r||(r=!0);var y=(a.customerStatus||\"\")+\"\",F=\"\";y\u0026\u0026m\u0026\u0026(\"EXISTING\"==y.toUpperCase()||\"RETURNING\"==y.toUpperCase())\u0026\u0026(F=\"R_\");(m=a.orderid)||(m=P((a.conversionType+\"\").toLowerCase()+\"_\"+c));m=encodeURIComponent(F+m);F=encodeURIComponent(a.currency||\"\");y=0;var G=\"\";q=Math.abs(+q);var v=(100+q)\/100,t=a.discountAmount?Math.abs(+a.discountAmount):0,w=a.discountAmountLessTax?\nMath.abs(+a.discountAmountLessTax):0;!w\u0026\u0026t\u0026\u0026n\u0026\u0026q\u0026\u0026(w=t\/v);w=w||t;w=isNaN(w)?0:w;for(n=0;n\u003C(a.lineitems?a.lineitems.length:0);n++)if(a.lineitems[n]){t=+a.lineitems[n].quantity;var A=+a.lineitems[n].unitPriceLessTax*t;(!A||r)\u0026\u0026(d\u0026\u0026q?A=+a.lineitems[n].unitPrice\/v*t:A=+a.lineitems[n].unitPrice*t);A=isNaN(A)?0:A;y+=A;G+=encodeURIComponent(a.lineitems[n].SKU)+\",\"}y=Math.round(100*(y-w))\/100;G=G.slice(0,-1);a=\"https:\/\/\"+z+\"\/\"+e+\"\/\"+c;a+=\"\/?pt\\x3dconv\";a+=\"\\x26orderNumber\\x3d\"+m;a+=\"\\x26spi\\x3d\"+f[g].events.SPIVersion;\ny\u0026\u0026(a+=\"\\x26price\\x3d\"+y);F\u0026\u0026(a+=\"\\x26cur\\x3d\"+F);b\u0026\u0026(a+=\"\\x26tvalid\\x3d\"+b);G\u0026\u0026(a+=\"\\x26prodID\\x3d\"+G);N(k,a,\"body\")},T=function(){var a=f[g]\u0026\u0026f[g].Sale\u0026\u0026f[g].Sale.Basket?f[g].Sale.Basket:{},b=a.searchConfig||{},c=1024,e=encodeURIComponent(\"...TRUNCATED\"),z=h(\"smid\",\"rsMID\",\"\",b);if(!z)return!1;var m=h(\"said\",\"accountID\",\"113\",b),k=h(\"sclid\",\"clickID\",\"\",b),r=encodeURIComponent(h(\"sct\",\"conversionType\",a.conversionType\u0026\u0026\"sale\"!==(a.conversionType+\"\").toLowerCase()?a.conversionType:\"conv\",b));N(\"script\",\n\"https:\/\/services.xg4ken.com\/js\/kenshoo.js?cid\\x3d\"+z,\"body\",null,function(){var d={};if(d.conversionType=r,d.revenue=0,d.currency=encodeURIComponent(a.currency||\"USD\"),d.orderId=encodeURIComponent(a.orderid||P(r)),d.promoCode=encodeURIComponent(a.discountCode||\"\"),k\u0026\u0026(d.ken_gclid=encodeURIComponent(k)),d.discountAmount=+(a.discountAmount||0),d.discountAmount=isNaN(d.discountAmount)?0:Math.abs(d.discountAmount),d.customerStatus=encodeURIComponent(a.customerStatus||\"\"),d.productIDList=\"\",d.productNameList=\n\"\",a.lineitems\u0026\u0026a.lineitems.length){for(var n=0;n\u003Ca.lineitems.length;n++)a.lineitems[n]\u0026\u0026(d.revenue+=+(a.lineitems[n].unitPrice||0)*+a.lineitems[n].quantity,d.productIDList+=(a.lineitems[n].SKU||\"NA\")+\",\",d.productNameList+=(a.lineitems[n].productName||\"NA\")+\",\");d.revenue=Math.round(100*(d.revenue-d.discountAmount))\/100;d.productIDList=encodeURIComponent(d.productIDList.slice(0,-1));d.productNameList=encodeURIComponent(d.productNameList.slice(0,-1));d.productIDList.length\u003Ec\u0026\u0026(d.productIDList=d.productIDList.substring(0,\nc-e.length)+e);d.productNameList.length\u003Ec\u0026\u0026(d.productNameList=d.productNameList.substring(0,c-e.length)+e)}kenshoo.trackConversion(m,z,d)})};f[g].SPI={readRMCookie:M,processRMStoreCookie:K,readRMStoreValue:h,sRAN:R,sDisplay:S,sSearch:T,addElement:N,rmStore:O};R();S();T()}(window,document,rm_trans);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":669
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"ie"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"onOrderCompleted"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"onCheckoutViewed"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"onLandingPageViewed"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"onProductAdded"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"onProductListViewed"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"onProductViewed"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"onProductListFiltered"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^(ae|at|au|be|bg|ca|ch|cl|cn|cz|de|dk|eg|es|fi|fr|gb|gr|hk|hr|hu|id|ie|il|in|it|jp|lu|ma|mx|my|nl|no|nz|pl|pr|pt|ro|ru|sa|se|sg|si|sk|th|tr|tw|us|vn|za)"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^(onCheckoutViewed|onProductListViewed|onProductListFiltered|onLandingPageViewed|onProductViewed|onColorChange|onSizeSelect|onProductAdded|onMemberJoined|onRegistrationViewed)"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^(ae|at|au|be|bg|ca|ch|cl|cn|cz|de|dk|eg|es|fi|fr|gb|gr|hk|hr|hu|id|ie|il|in|it|jp|lu|ma|mx|my|nl|no|nz|ph|pl|pr|pt|ro|ru|sa|se|sg|si|sk|th|tr|tw|us|vn|za)"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^(onCartViewed|onOrderCompleted)"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^(ae|at|be|bg|ch|cl|cn|cz|de|dk|eg|es|fi|fr|gb|gr|hr|hu|ie|il|it|jp|lu|nl|no|pl|pr|pt|ro|se|si|us)"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^(onCartViewed)"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^(at|be|cz|de|dk|es|fi|fr|gb|gr|hu|ie|it|jp|lu|nl|pl|pt|se|si|us)"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^(ca|id|in|my|ph|sg|th|tw|us|vn)"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^(onCartViewed|onCheckoutViewed|onProductListViewed|onProductListFiltered|onLandingPageViewed|onProductViewed|onColorChange|onSizeSelect|onProductAdded|onMemberJoined|onRegistrationViewed)"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"us"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^(id|in|my|ph|sg|th|tw|vn)"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^(ae|au|bg|ca|ch|cl|eg|hr|id|il|in|ma|mx|my|no|nz|ph|pr|ro|ru|sa|sg|sk|th|tr|tw|vn)"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^(onLandingPageViewed|onProductListViewed|onProductViewed|onProductAdded|onCartViewed|onCheckoutViewed)"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"TR"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^(ae|at|au|be|bg|ca|ch|cl|cz|de|dk|eg|es|fi|fr|gb|gr|hr|hu|id|ie|il|in|it|lu|ma|mx|my|nl|no|nz|pl|pr|ro|ru|sa|se|sg|si|sk|th|tr|tw|vn)"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":".*"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^(at|be|bg|ca|cz|de|dk|es|fi|fr|gb|gr|hu|ie|it|jp|lu|mx|nl|pl|pt|ro|se|si|sk|sl)"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"onMemberJoined"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^(at|cz|dk|es|ge|gr|hu|id|ie|in|jp|mx|my|nl|pl|pt|se|sg|sl|th|tw|vn)"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^(onCartViewed|onOrderCompleted|onCheckoutViewed|onProductListViewed|onProductListFiltered|onLandingPageViewed|onProductViewed|onColorChange|onSizeSelect|onProductAdded|onMemberJoined|onRegistrationViewed)"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^(onMemberJoined)"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"cn"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^(onProductViewed|onCartViewed|onOrderCompleted)"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"onCartViewed"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"onColorChange"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"onSizeSelect"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"onRegistrationViewed"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^(ae|at|au|be|bg|ca|ch|cl|cz|de|dk|eg|es|fi|fr|gb|gr|hr|hu|id|ie|il|in|it|lu|ma|mx|my|nl|no|nz|ph|pl|pr|pt|ro|ru|sa|se|sg|si|sk|th|tr|tw|vn|za)"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"onOrderCompleted"
    }],
  "rules":[
    [["if",0,1],["add",0]],
    [["if",0,2],["add",1]],
    [["if",2],["add",2,35]],
    [["if",1],["add",3,34]],
    [["if",3],["add",4,35]],
    [["if",4],["add",4,35]],
    [["if",5],["add",4,35]],
    [["if",6],["add",4,35]],
    [["if",7],["add",4,31,35]],
    [["if",8],["add",4,35]],
    [["if",9,10],["add",5]],
    [["if",11,12],["add",6]],
    [["if",2,15],["add",7,8,15,18,19,20,21]],
    [["if",16,17],["add",9,29]],
    [["if",2,18],["add",10]],
    [["if",17,19],["add",11]],
    [["if",20,21],["add",12]],
    [["if",17,22],["add",13]],
    [["if",17,23],["add",14]],
    [["if",24],["add",16,36]],
    [["if",2,25],["add",17]],
    [["if",26],["add",22,35]],
    [["if",2,19],["add",23]],
    [["if",2,16],["add",24,30]],
    [["if",17,27],["add",25]],
    [["if",28],["add",26]],
    [["if",9,29],["add",27]],
    [["if",13,14],["add",28],["block",6]],
    [["if",30,31],["add",32]],
    [["if",32],["add",33,35]],
    [["if",33],["add",35]],
    [["if",34],["add",35]],
    [["if",35],["add",35]],
    [["if",17,36],["add",37]],
    [["if",19,21],["add",38]],
    [["if",19,37],["add",39]]]
},
"runtime":[[50,"__cvt_31367757_368",[46,"a"],[52,"b",["require","addEventCallback"]],[52,"c",["require","copyFromDataLayer"]],[52,"d",["require","getUrl"]],[52,"e",["require","encodeUriComponent"]],[52,"f",["require","callInWindow"]],[52,"g",["require","decodeUriComponent"]],[52,"h",["require","queryPermission"]],[52,"i",["require","getContainerVersion"]],[52,"j",["c","event"]],[52,"k",["e",["d","path"]]],["b",[51,"",[7,"l","m"],[52,"n",[17,[15,"a"],"event"]],[52,"o",["i"]],[52,"p",[2,[17,[15,"m"],"tags"],"filter",[7,[51,"",[7,"r"],[36,[21,[17,[15,"r"],"exclude"],"true"]]]]]],[52,"q","[dD][eE][bB][uU][gG]"],[2,[15,"p"],"forEach",[7,[51,"",[7,"r","s"],[41,"t"],[3,"t",[39,[17,[15,"r"],"name"],[17,[15,"r"],"name"],[0,"unnamed tag with ID: ",[17,[15,"r"],"id"]]]],[22,[12,[2,[15,"t"],"match",[7,[15,"q"]]],[45]],[46,[53,[52,"u",[8,"gtmTagId",[17,[15,"r"],"id"],"gtmTagName",[15,"t"],"gtmTagStatus",[17,[15,"r"],"status"],"gtmEventName",[15,"j"],"gtmPathName",["g",[15,"k"]],"gtmExecutionTime",[17,[15,"r"],"executionTime"],"experienceCountry",[2,[17,[17,[15,"n"],"application"],"country"],"toUpperCase",[7]],"gtmVersion",[17,[15,"o"],"version"]]],[22,[1,[17,[15,"n"],"ecommerce"],[17,[17,[15,"n"],"ecommerce"],"currencyCode"]],[46,[43,[15,"u"],"ecommerceCurrencyCode",[17,[17,[15,"n"],"ecommerce"],"currencyCode"]]]],[22,[1,[1,[1,[17,[15,"n"],"ecommerce"],[17,[17,[15,"n"],"ecommerce"],"purchase"]],[17,[17,[17,[15,"n"],"ecommerce"],"purchase"],"actionField"]],[17,[17,[17,[17,[15,"n"],"ecommerce"],"purchase"],"actionField"],"id"]],[46,[43,[15,"u"],"ecommerceOrderId",[17,[17,[17,[17,[15,"n"],"ecommerce"],"purchase"],"actionField"],"id"]]]],[22,["h","access_globals","execute","newrelic.addPageAction"],[46,["f","newrelic.addPageAction","DataCaptureGTMEvent",[15,"u"]]]]]]]]]]]],[2,[15,"a"],"gtmOnSuccess",[7]]],[50,"__cvt_31367757_43",[46,"a"],[50,"bm",[46],["bj",[15,"bk"],[45],[45]],[2,[15,"a"],"gtmOnSuccess",[7]]],[52,"b",["require","createQueue"]],[52,"c",["require","callInWindow"]],[52,"d",["require","aliasInWindow"]],[52,"e",["require","copyFromWindow"]],[52,"f",["require","setInWindow"]],[52,"g",["require","injectScript"]],[52,"h",["require","makeTableMap"]],[52,"i",["require","makeNumber"]],[52,"j",["require","getType"]],[52,"k",["require","copyFromDataLayer"]],[52,"l",["require","Math"]],[52,"m",["require","logToConsole"]],[52,"n",[30,["e","_fbq_gtm_ids"],[7]]],[52,"o",[17,[15,"a"],"pixelId"]],[52,"p",[7,"AddPaymentInfo","AddToCart","AddToWishlist","CompleteRegistration","Contact","CustomizeProduct","Donate","FindLocation","InitiateCheckout","Lead","PageView","Purchase","Schedule","Search","StartTrial","SubmitApplication","Subscribe","ViewContent"]],[52,"q",["k","ecommerce",1]],[52,"r",[51,"",[7,"bn"],["m",[15,"bn"]],[2,[15,"a"],"gtmOnFailure",[7]]]],[52,"s",[51,"",[7,"bn","bo"],[55,"bp",[15,"bo"],[46,[22,[2,[15,"bo"],"hasOwnProperty",[7,[15,"bp"]]],[46,[43,[15,"bn"],[15,"bp"],[16,[15,"bo"],[15,"bp"]]]]]]],[36,[15,"bn"]]]],[52,"t",[51,"",[7,"bn"],[36,[8,"id",[17,[15,"bn"],"id"],"quantity",[17,[15,"bn"],"quantity"]]]]],[41,"u","v","w"],[22,[17,[15,"a"],"enhancedEcommerce"],[46,[22,[28,[15,"q"]],[46,[36,["r","Facebook Pixel: No valid \"ecommerce\" object found in dataLayer"]]]],[22,[17,[15,"q"],"detail"],[46,[3,"u","ViewContent"],[3,"v","detail"]],[46,[22,[17,[15,"q"],"add"],[46,[3,"u","AddToCart"],[3,"v","add"]],[46,[22,[17,[15,"q"],"checkout"],[46,[3,"u","InitiateCheckout"],[3,"v","checkout"]],[46,[22,[17,[15,"q"],"purchase"],[46,[3,"u","Purchase"],[3,"v","purchase"]],[46,[36,["r","Facebook Pixel: Most recently pushed \"ecommerce\" object must be one of types \"detail\", \"add\", \"checkout\" or \"purchase\"."]]]]]]]]]],[22,[30,[28,[17,[16,[15,"q"],[15,"v"]],"products"]],[21,["j",[17,[16,[15,"q"],[15,"v"]],"products"]],"array"]],[46,[36,["r","Facebook pixel: Most recently pushed \"ecommerce\" object did not have a valid \"products\" array."]]]],[3,"w",[8,"content_type","product","contents",[2,[17,[16,[15,"q"],[15,"v"]],"products"],"map",[7,[15,"t"]]],"value",[2,[17,[16,[15,"q"],[15,"v"]],"products"],"reduce",[7,[51,"",[7,"bn","bo"],[52,"bp",[10,[2,[15,"l"],"round",[7,[26,[26,["i",[30,[17,[15,"bo"],"price"],0]],[30,[17,[15,"bo"],"quantity"],1]],100]]],100]],[36,[0,[15,"bn"],[15,"bp"]]]],0]],"currency",[30,[17,[15,"q"],"currencyCode"],"USD"]]],[22,[18,[2,[7,"InitiateCheckout","Purchase"],"indexOf",[7,[15,"u"]]],[27,1]],[46,[43,[15,"w"],"num_items",[2,[17,[16,[15,"q"],[15,"v"]],"products"],"reduce",[7,[51,"",[7,"bn","bo"],[36,[0,[15,"bn"],["i",[30,[17,[15,"bo"],"quantity"],1]]]]],0]]]]]]],[52,"x",[39,[1,[17,[15,"a"],"userProperties"],[17,[17,[15,"a"],"userPropertyList"],"length"]],["h",[17,[15,"a"],"userPropertyList"],"name","value"],[8]]],[52,"y",[39,[1,[17,[15,"a"],"advancedMatching"],[17,[17,[15,"a"],"advancedMatchingList"],"length"]],["h",[17,[15,"a"],"advancedMatchingList"],"name","value"],[8]]],[52,"z",[39,[1,[17,[15,"a"],"objectPropertyList"],[17,[17,[15,"a"],"objectPropertyList"],"length"]],["h",[17,[15,"a"],"objectPropertyList"],"name","value"],[8]]],[52,"ba",[39,[20,["j",[17,[15,"a"],"objectPropertiesFromVariable"]],"object"],[17,[15,"a"],"objectPropertiesFromVariable"],[8]]],[52,"bb",["s",[15,"ba"],[15,"z"]]],[52,"bc",["s",[30,[15,"w"],[8]],[15,"bb"]]],[3,"u",[30,[15,"u"],[39,[20,[17,[15,"a"],"eventName"],"custom"],[17,[15,"a"],"customEventName"],[39,[20,[17,[15,"a"],"eventName"],"variable"],[17,[15,"a"],"variableEventName"],[17,[15,"a"],"standardEventName"]]]]],[52,"bd",[39,[20,[2,[15,"p"],"indexOf",[7,[15,"u"]]],[27,1]],"trackSingleCustom","trackSingle"]],[52,"be",[39,[17,[15,"a"],"userId"],[8,"uid",[17,[15,"a"],"userId"]],[8]]],[52,"bf",["s",[15,"be"],[15,"y"]]],[52,"bg",[39,[20,[17,[15,"a"],"consent"],false],"revoke","grant"]],[52,"bh",[51,"",[7],[41,"bn"],[3,"bn",["e","fbq"]],[22,[15,"bn"],[46,[36,[15,"bn"]]]],["f","fbq",[51,"",[7],[52,"bo",["e","fbq.callMethod.apply"]],[22,[15,"bo"],[46,["c","fbq.callMethod.apply",[45],[15,"arguments"]]],[46,["c","fbq.queue.push",[15,"arguments"]]]]]],["d","_fbq","fbq"],["b","fbq.queue"],[36,["e","fbq"]]]],[52,"bi",["bh"]],["bi","consent",[15,"bg"]],[2,[2,[15,"o"],"split",[7,","]],"forEach",[7,[51,"",[7,"bn"],[22,[20,[2,[15,"n"],"indexOf",[7,[15,"bn"]]],[27,1]],[46,[22,[17,[15,"a"],"disableAutoConfig"],[46,["bi","set","autoConfig",false,[15,"bn"]]]],[22,[17,[15,"a"],"disablePushState"],[46,["f","fbq.disablePushState",true]]],["bi","init",[15,"bn"],[15,"bf"]],[2,[15,"n"],"push",[7,[15,"bn"]]],["f","_fbq_gtm_ids",[15,"n"],true],[22,[17,[15,"a"],"userProperties"],[46,["bi","setUserProperties",[15,"bn"],[15,"x"]]]]]],["bi",[15,"bd"],[15,"bn"],[15,"u"],[15,"bc"]]]]],[52,"bj",["require","sendPixel"]],[52,"bk",[17,[15,"a"],"endPoint"]],[52,"bl","{tagId:\"GTM monitoring tag,source:\"facebook-gtm\"}"],["g","https://connect.facebook.net/en_US/fbevents.js",[15,"bm"],[17,[15,"a"],"gtmOnFailure"],"fbPixel"]]]
,"permissions":{"__cvt_31367757_368":{"read_data_layer":{"keyPatterns":["event"]},"read_event_metadata":{},"get_url":{"urlParts":"any"},"access_globals":{"keys":[{"key":"newrelic.addPageAction","read":false,"write":false,"execute":true}]},"read_container_data":{}},"__cvt_31367757_43":{"access_globals":{"keys":[{"key":"fbq","read":true,"write":true,"execute":false},{"key":"_fbq_gtm","read":true,"write":true,"execute":false},{"key":"_fbq","read":false,"write":true,"execute":false},{"key":"_fbq_gtm_ids","read":true,"write":true,"execute":false},{"key":"fbq.callMethod.apply","read":true,"write":false,"execute":true},{"key":"fbq.queue.push","read":false,"write":false,"execute":true},{"key":"fbq.queue","read":true,"write":true,"execute":false},{"key":"fbq.disablePushState","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/connect.facebook.net\/en_US\/fbevents.js"]},"logging":{"environments":"debug"},"read_data_layer":{"keyPatterns":["ecommerce"]},"send_pixel":{"allowedUrls":"specific"}}}
,"sandboxed_scripts":["__cvt_31367757_368","__cvt_31367757_43"]


};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},da=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ba(a)}},ea="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;
if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ia;a:{var ja={a:!0},ka={};try{ka.__proto__=ja;ia=ka.a;break a}catch(a){}ia=!1}fa=ia?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var la=fa,ma=function(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(la)la(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.qj=b.prototype},oa=this||self,ra=function(a){if(a&&a!=oa)return pa(a.document);null===qa&&(qa=pa(oa.document));return qa},ta=/^[\w+/_-]+[=]{0,2}$/,qa=null,pa=function(a){var b=a.querySelector&&a.querySelector("script[nonce]");if(b){var c=b.nonce||b.getAttribute("nonce");
if(c&&ta.test(c))return c}return""},va=function(a){return a};var ya=function(a,b){this.g=a;this.o=b};var za=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},Aa=function(){this.D={};this.o=!1;this.J={}};Aa.prototype.get=function(a){return this.D["dust."+a]};Aa.prototype.set=function(a,b){this.o||(a="dust."+a,this.J.hasOwnProperty(a)||(this.D[a]=b))};Aa.prototype.has=function(a){return this.D.hasOwnProperty("dust."+a)};
var Ba=function(a){var b=[],c;for(c in a.D)a.D.hasOwnProperty(c)&&b.push(c.substr(5));return b},Ca=function(a,b){b="dust."+b;a.o||a.J.hasOwnProperty(b)||delete a.D[b]};var Da=function(a){this.o=new Aa;this.g=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(za(b)?this.g[Number(b)]=a[Number(b)]:this.o.set(b,a[b]))};aa=Da.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.g.length;c++){var d=this.g[c];null===d||void 0===d?b.push(""):d instanceof Da?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"===a){if(!za(b))throw Error("RangeError: Length property must be a valid integer.");this.g.length=Number(b)}else za(a)?this.g[Number(a)]=b:this.o.set(a,b)};aa.get=function(a){return"length"===a?this.length():za(a)?this.g[Number(a)]:this.o.get(a)};aa.length=function(){return this.g.length};aa.Ub=function(){for(var a=Ba(this.o),b=0;b<this.g.length;b++)a.push(b+"");return new Da(a)};var Fa=function(a,b){za(b)?delete a.g[Number(b)]:Ca(a.o,b)};aa=Da.prototype;aa.pop=function(){return this.g.pop()};
aa.push=function(a){return this.g.push.apply(this.g,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.g.shift()};aa.splice=function(a,b,c){return new Da(this.g.splice.apply(this.g,arguments))};aa.unshift=function(a){return this.g.unshift.apply(this.g,Array.prototype.slice.call(arguments))};aa.has=function(a){return za(a)&&this.g.hasOwnProperty(a)||this.o.has(a)};var Ga=function(){function a(f,g){if(b[f]){if(b[f].Hc+g>b[f].max)throw Error("Quota exceeded");b[f].Hc+=g}}var b={},c=void 0,d=void 0,e={ni:function(f){c=f},Jf:function(){c&&a(c,1)},ri:function(f){d=f},Ta:function(f){d&&a(d,f)},Ji:function(f,g){b[f]=b[f]||{Hc:0};b[f].max=g},Rh:function(f){return b[f]&&b[f].Hc||0},reset:function(){b={}},Dh:a};e.onFnConsume=e.ni;e.consumeFn=e.Jf;e.onStorageConsume=e.ri;e.consumeStorage=e.Ta;e.setMax=e.Ji;e.getConsumed=e.Rh;e.reset=e.reset;e.consume=e.Dh;return e};var Ia=function(a,b){this.s=a;this.N=function(c,d,e){return c.apply(d,e)};this.D=b;this.o=new Aa;this.g=this.J=void 0};Ia.prototype.add=function(a,b){Ja(this,a,b,!1)};var Ja=function(a,b,c,d){if(!a.o.o)if(a.s.Ta(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.o;e.set(b,c);e.J["dust."+b]=!0}else a.o.set(b,c)};
Ia.prototype.set=function(a,b){this.o.o||(!this.o.has(a)&&this.D&&this.D.has(a)?this.D.set(a,b):(this.s.Ta(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.o.set(a,b)))};Ia.prototype.get=function(a){return this.o.has(a)?this.o.get(a):this.D?this.D.get(a):void 0};Ia.prototype.has=function(a){return!!this.o.has(a)||!(!this.D||!this.D.has(a))};var Ka=function(a){var b=new Ia(a.s,a);a.J&&(b.J=a.J);b.N=a.N;b.g=a.g;return b};var Ma={},Na=function(a,b){Ma[a]=Ma[a]||[];Ma[a][b]=!0},Oa=function(a){for(var b=[],c=Ma[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var Qa=function(){},Ra=function(a){return"function"==typeof a},k=function(a){return"string"==typeof a},Sa=function(a){return"number"==typeof a&&!isNaN(a)},Ta=function(a){var b="[object Array]"==Object.prototype.toString.call(Object(a));Array.isArray?Array.isArray(a)!==b&&Na("TAGGING",4):Na("TAGGING",5);return b},Ua=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Va=function(a,b){if(a&&Ta(a))for(var c=
0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Xa=function(a,b){if(!Sa(a)||!Sa(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Za=function(a,b){for(var c=new Ya,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},$a=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},ab=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},fb=
function(a){return Math.round(Number(a))||0},gb=function(a){return"false"==String(a).toLowerCase()?!1:!!a},hb=function(a){var b=[];if(Ta(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},ib=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},jb=function(){return(new Date).getTime()},Ya=function(){this.prefix="gtm.";this.values={}};Ya.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ya.prototype.get=function(a){return this.values[this.prefix+a]};
var kb=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},nb=function(a){var b=a;return function(){if(b){var c=b;b=void 0;try{c()}catch(d){}}}},ob=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},qb=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},sb=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},tb=function(a,b){var c=p;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=
Ua(b,d))return}return d},ub=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},vb=function(a){var b=[];$a(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var wb=function(a,b){Aa.call(this);this.N=a;this.na=b};ma(wb,Aa);wb.prototype.toString=function(){return this.N};wb.prototype.Ub=function(){return new Da(Ba(this))};wb.prototype.g=function(a,b){a.s.Jf();return this.na.apply(new xb(this,a),Array.prototype.slice.call(arguments,1))};wb.prototype.s=function(a,b){try{return this.g.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};
var Bb=function(a,b){for(var c,d=0;d<b.length&&!(c=yb(a,b[d]),c instanceof ya);d++);return c},yb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof wb))throw Error("Attempting to execute non-function "+b[0]+".");return c.g.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.J;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}},xb=function(a,b){this.o=a;this.g=b},B=function(a,b){var c=a.g;return Ta(b)?yb(c,b):b},F=function(a){return a.o.N};var Eb=function(){Aa.call(this)};ma(Eb,Aa);Eb.prototype.Ub=function(){return new Da(Ba(this))};var Fb={control:function(a,b){return new ya(a,B(this,b))},fn:function(a,b,c){var d=this.g,e=B(this,b);if(!(e instanceof Da))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.g.s.Ta(a.length+f.length);return new wb(a,function(){return function(g){var h=Ka(d);void 0===h.g&&(h.g=this.g.g);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=B(this,l[m]),l[m]instanceof ya)return l[m];for(var n=e.get("length"),q=
0;q<n;q++)q<l.length?h.add(e.get(q),l[q]):h.add(e.get(q),void 0);h.add("arguments",new Da(l));var t=Bb(h,f);if(t instanceof ya)return"return"===t.g?t.o:t}}())},list:function(a){var b=this.g.s;b.Ta(arguments.length);for(var c=new Da,d=0;d<arguments.length;d++){var e=B(this,arguments[d]);"string"===typeof e&&b.Ta(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.g.s,c=new Eb,d=0;d<arguments.length-1;d+=2){var e=B(this,arguments[d])+"",f=B(this,arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ta(g);c.set(e,f)}return c},undefined:function(){}};var Gb=function(){this.s=Ga();this.g=new Ia(this.s)},Hb=function(a,b,c){var d=new wb(b,c);d.o=!0;a.g.set(b,d)};Gb.prototype.Mc=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.o(c)};Gb.prototype.o=function(a){for(var b,c=0;c<arguments.length;c++)b=yb(this.g,arguments[c]);return b};Gb.prototype.D=function(a,b){var c=Ka(this.g);c.g=a;for(var d,e=1;e<arguments.length;e++)d=d=yb(c,arguments[e]);return d};var Ib=function(a){if(a instanceof Ib)return a;this.sa=a};Ib.prototype.toString=function(){return String(this.sa)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Jb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Kb=function(a){if(null==a)return String(a);var b=Jb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Lb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Mb=function(a){if(!a||"object"!=Kb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Lb(a,"constructor")&&!Lb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Lb(a,b)},G=function(a,b){var c=b||("array"==Kb(a)?[]:{}),d;for(d in a)if(Lb(a,d)){var e=a[d];"array"==Kb(e)?("array"!=Kb(c[d])&&(c[d]=[]),c[d]=G(e,c[d])):Mb(e)?(Mb(c[d])||(c[d]={}),c[d]=G(e,c[d])):c[d]=e}return c};var Pb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m=Ba(h),n=0;n<m.length;n++)l[m[n]]=g(h.get(m[n]))},g=function(h){var l=Ua(d,h);if(-1<l)return e[l];if(h instanceof Da){var m=[];d.push(h);e.push(m);for(var n=h.Ub(),q=0;q<n.length();q++)m[n.get(q)]=g(h.get(n.get(q)));return m}if(h instanceof Eb){var t={};d.push(h);e.push(t);f(h,t);return t}if(h instanceof wb){var r=function(){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=Ob(u[v],b,!!c);var w=b?b.s:Ga(),y=new Ia(w);
b&&(y.g=b.g);return g(h.g.apply(h,[y].concat(u)))};d.push(h);e.push(r);f(h,r);return r}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return g(a)},Ob=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m in h)h.hasOwnProperty(m)&&l.set(m,g(h[m]))},g=function(h){var l=Ua(d,
h);if(-1<l)return e[l];if(Ta(h)||ab(h)){var m=new Da([]);d.push(h);e.push(m);for(var n in h)h.hasOwnProperty(n)&&m.set(n,g(h[n]));return m}if(Mb(h)){var q=new Eb;d.push(h);e.push(q);f(h,q);return q}if("function"===typeof h){var t=new wb("",function(u){for(var v=Array.prototype.slice.call(arguments,0),w=0;w<v.length;w++)v[w]=Pb(B(this,v[w]),b,!!c);return g((0,this.g.N)(h,h,v))});d.push(h);e.push(t);f(h,t);return t}var r=typeof h;if(null===h||"string"===r||"number"===r||"boolean"===r)return h;};return g(a)};var Qb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},Rb=function(a){if(void 0===a||Ta(a)||Mb(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Tb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof Da)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new Da(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.g(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.g(a,this.get(e),e,this)&&d.push(this.get(e));return new Da(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.g(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.g(a,this.get(e),e,this));return new Da(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Qb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):Fa(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new Da(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.g(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Qb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.g(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):Fa(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var Ub="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Vb=new ya("break"),Wb=new ya("continue"),Xb=function(a,b){return B(this,a)+B(this,b)},Yb=function(a,b){return B(this,a)&&B(this,b)},Zb=function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);if(!(c instanceof Da))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"===typeof a||"number"===typeof a){if("toString"===b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(0<=Ua(Ub,b)){var d=Qb(c);return Ob(a[b].apply(a,d),this.g)}throw Error("TypeError: "+b+" is not a function");}if(a instanceof Da){if(a.has(b)){var e=a.get(b);if(e instanceof
wb){var f=Qb(c);f.unshift(this.g);return e.g.apply(e,f)}throw Error("TypeError: "+b+" is not a function");}if(0<=Ua(Tb.supportedMethods,b)){var g=Qb(c);g.unshift(this.g);return Tb[b].apply(a,g)}}if(a instanceof wb||a instanceof Eb){if(a.has(b)){var h=a.get(b);if(h instanceof wb){var l=Qb(c);l.unshift(this.g);return h.g.apply(h,l)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof wb?a.N:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,Qb(c))}if(a instanceof
Ib&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},$b=function(a,b){a=B(this,a);if("string"!==typeof a)throw Error("Invalid key name given for assignment.");var c=this.g;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=B(this,b);c.set(a,d);return d},ac=function(a){var b=Ka(this.g),c=Bb(b,Array.prototype.slice.apply(arguments));if(c instanceof ya)return c},dc=function(){return Vb},ec=function(a){for(var b=B(this,a),c=0;c<b.length;c++){var d=
B(this,b[c]);if(d instanceof ya)return d}},fc=function(a){for(var b=this.g,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=B(this,arguments[c+1]);Ja(b,d,e,!0)}}},gc=function(){return Wb},hc=function(a,b,c){var d=new Da;b=B(this,b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.g.add(a,B(this,f))},ic=function(a,b){return B(this,a)/B(this,b)},jc=function(a,b){a=B(this,a);b=B(this,b);var c=
a instanceof Ib,d=b instanceof Ib;return c||d?c&&d?a.sa==b.sa:!1:a==b},kc=function(a){for(var b,c=0;c<arguments.length;c++)b=B(this,arguments[c]);return b};function lc(a,b,c,d){for(var e=0;e<b();e++){var f=a(c(e)),g=Bb(f,d);if(g instanceof ya){if("break"===g.g)break;if("return"===g.g)return g}}}
function mc(a,b,c){if("string"===typeof b)return lc(a,function(){return b.length},function(f){return f},c);if(b instanceof Eb||b instanceof Da||b instanceof wb){var d=b.Ub(),e=d.length();return lc(a,function(){return e},function(f){return d.get(f)},c)}}
var nc=function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);var d=this.g;return mc(function(e){d.set(a,e);return d},b,c)},oc=function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);var d=this.g;return mc(function(e){var f=Ka(d);Ja(f,a,e,!0);return f},b,c)},pc=function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);var d=this.g;return mc(function(e){var f=Ka(d);f.add(a,e);return f},b,c)},rc=function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);var d=this.g;return qc(function(e){d.set(a,e);return d},b,c)},sc=
function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);var d=this.g;return qc(function(e){var f=Ka(d);Ja(f,a,e,!0);return f},b,c)},tc=function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);var d=this.g;return qc(function(e){var f=Ka(d);f.add(a,e);return f},b,c)};
function qc(a,b,c){if("string"===typeof b)return lc(a,function(){return b.length},function(d){return b[d]},c);if(b instanceof Da)return lc(a,function(){return b.length()},function(d){return b.get(d)},c);throw new TypeError("The value is not iterable.");}
var uc=function(a,b,c,d){function e(n,q){for(var t=0;t<f.length();t++){var r=f.get(t);q.add(r,n.get(r))}}var f=B(this,a);if(!(f instanceof Da))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.g;d=B(this,d);var h=Ka(g);for(e(g,h);yb(h,b);){var l=Bb(h,d);if(l instanceof ya){if("break"===l.g)break;if("return"===l.g)return l}var m=Ka(g);e(h,m);yb(m,c);h=m}},vc=function(a){a=B(this,a);var b=this.g,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");return b.get(a)},yc=function(a,b){var c;a=B(this,a);b=B(this,b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof Eb||a instanceof Da||a instanceof wb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:za(b)&&(c=a[b]);else if(a instanceof Ib)return;return c},zc=function(a,b){return B(this,a)>B(this,
b)},Ac=function(a,b){return B(this,a)>=B(this,b)},Bc=function(a,b){a=B(this,a);b=B(this,b);a instanceof Ib&&(a=a.sa);b instanceof Ib&&(b=b.sa);return a===b},Cc=function(a,b){return!Bc.call(this,a,b)},Dc=function(a,b,c){var d=[];B(this,a)?d=B(this,b):c&&(d=B(this,c));var e=Bb(this.g,d);if(e instanceof ya)return e},Ec=function(a,b){return B(this,a)<B(this,b)},Fc=function(a,b){return B(this,a)<=B(this,b)},Gc=function(a,b){return B(this,a)%B(this,b)},Hc=function(a,b){return B(this,a)*B(this,b)},Ic=function(a){return-B(this,
a)},Jc=function(a){return!B(this,a)},Nc=function(a,b){return!jc.call(this,a,b)},Oc=function(){return null},Pc=function(a,b){return B(this,a)||B(this,b)},Qc=function(a,b){var c=B(this,a);B(this,b);return c},Rc=function(a){return B(this,a)},Sc=function(a){return Array.prototype.slice.apply(arguments)},Tc=function(a){return new ya("return",B(this,a))},Uc=function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof
wb||a instanceof Da||a instanceof Eb)&&a.set(b,c);return c},Vc=function(a,b){return B(this,a)-B(this,b)},Wc=function(a,b,c){a=B(this,a);var d=B(this,b),e=B(this,c);if(!Ta(d)||!Ta(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===B(this,d[h]))if(f=B(this,e[h]),f instanceof ya){var l=f.g;if("break"===l)return;if("return"===l||"continue"===l)return f}else g=!0;if(e.length===d.length+1&&(f=B(this,e[e.length-1]),f instanceof ya&&("return"===f.g||"continue"===
f.g)))return f},Xc=function(a,b,c){return B(this,a)?B(this,b):B(this,c)},Yc=function(a){a=B(this,a);return a instanceof wb?"function":typeof a},Zc=function(a){for(var b=this.g,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},$c=function(a,b,c,d){var e=B(this,d);if(B(this,c)){var f=Bb(this.g,e);if(f instanceof ya){if("break"===f.g)return;if("return"===f.g)return f}}for(;B(this,a);){var g=Bb(this.g,e);if(g instanceof ya){if("break"===g.g)break;if("return"===g.g)return g}B(this,
b)}},ad=function(a){return~Number(B(this,a))},bd=function(a,b){return Number(B(this,a))<<Number(B(this,b))},cd=function(a,b){return Number(B(this,a))>>Number(B(this,b))},dd=function(a,b){return Number(B(this,a))>>>Number(B(this,b))},ed=function(a,b){return Number(B(this,a))&Number(B(this,b))},fd=function(a,b){return Number(B(this,a))^Number(B(this,b))},gd=function(a,b){return Number(B(this,a))|Number(B(this,b))};var id=function(){this.g=new Gb;hd(this)};id.prototype.Mc=function(a){return jd(this.g.o(a))};
var od=function(a,b){return jd(nd.g.D(a,b))},hd=function(a){var b=function(d,e){var f=a.g,g=String(e);Fb.hasOwnProperty(d)&&Hb(f,g||d,Fb[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){Hb(a.g,String(d),e)};c(0,Xb);c(1,Yb);c(2,Zb);c(3,$b);c(53,ac);c(4,dc);c(5,ec);c(52,fc);c(6,gc);c(9,ec);c(50,hc);c(10,ic);c(12,jc);c(13,kc);c(47,nc);c(54,oc);c(55,pc);c(63,uc);c(64,rc);c(65,sc);c(66,tc);c(15,vc);c(16,yc);c(17,yc);c(18,zc);c(19,Ac);c(20,Bc);c(21,Cc);c(22,Dc);
c(23,Ec);c(24,Fc);c(25,Gc);c(26,Hc);c(27,Ic);c(28,Jc);c(29,Nc);c(45,Oc);c(30,Pc);c(32,Qc);c(33,Qc);c(34,Rc);c(35,Rc);c(46,Sc);c(36,Tc);c(43,Uc);c(37,Vc);c(38,Wc);c(39,Xc);c(40,Yc);c(41,Zc);c(42,$c);c(58,ad);c(57,bd);c(60,cd);c(61,dd);c(56,ed);c(62,fd);c(59,gd)},qd=function(){var a=nd,b=pd();Hb(a.g,"require",b)},rd=function(a,b){a.g.g.N=b};
function jd(a){if(a instanceof ya||a instanceof wb||a instanceof Da||a instanceof Eb||a instanceof Ib||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};var sd=function(){var a=function(b){return{toString:function(){return b}}};return{lg:a("consent"),ed:a("consent_always_fire"),Ce:a("convert_case_to"),De:a("convert_false_to"),Ee:a("convert_null_to"),Fe:a("convert_true_to"),Ge:a("convert_undefined_to"),Vi:a("debug_mode_metadata"),Sa:a("function"),$g:a("instance_name"),bh:a("live_only"),dh:a("malware_disabled"),eh:a("metadata"),Yi:a("original_activity_id"),Zi:a("original_vendor_template_id"),gh:a("once_per_event"),wf:a("once_per_load"),Af:a("setup_tags"),
Bf:a("tag_id"),Cf:a("teardown_tags")}}();
var td=[],ud={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},vd=function(a){return ud[a]},wd=/[\x00\x22\x26\x27\x3c\x3e]/g;td[3]=function(a){return String(a).replace(wd,vd)};var Ad=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Bd={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Cd=function(a){return Bd[a]};
td[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Ad,Cd)+"'"}};var Kd=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Ld={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Md=function(a){return Ld[a]};td[16]=function(a){return a};var Od;
var Pd=[],Qd=[],Rd=[],Sd=[],Td=[],Ud={},Vd,Wd,Xd,Yd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Zd=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Ud[c],e={},f;for(f in a)if(a.hasOwnProperty(f))if(0===f.indexOf("vtp_"))d&&b&&b.Gf&&b.Gf(a[f]),e[void 0!==d?f:f.substr(4)]=a[f];else if(f===sd.ed.toString()&&a[f]){}return void 0!==d?d(e):Od(c,e,b)},ae=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=$d(a[e],b,c));return d},$d=function(a,b,c){if(Ta(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push($d(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=Pd[f];if(!g||b.Xd(g))return;c[f]=!0;try{var h=ae(g,b,c);h.vtp_gtmEventId=b.id;d=Zd(h,b);Xd&&(d=Xd.Fh(d,
h))}catch(y){b.Wf&&b.Wf(y,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[$d(a[l],b,c)]=$d(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var q=$d(a[n],b,c);Wd&&(m=m||q===Wd.zc);d.push(q)}return Wd&&m?Wd.Ih(d):d.join("");case "escape":d=$d(a[1],b,c);if(Wd&&Ta(a[1])&&"macro"===a[1][0]&&Wd.bi(a))return Wd.xi(d);d=String(d);for(var t=2;t<a.length;t++)td[a[t]]&&(d=td[a[t]](d));return d;case "tag":var r=a[1];if(!Sd[r])throw Error("Unable to resolve tag reference "+
r+".");return d={Nf:a[2],index:r};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=be(u,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},be=function(a,b,c){try{return Vd(ae(a,b,c))}catch(d){JSON.stringify(a)}return 2};var ce=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.o=a;this.g=c};ma(ce,Error);function de(a,b){if(Ta(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)de(a[c],b[c])}};var ee=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.s=a;this.o=b;this.g=[]};ma(ee,Error);var ge=function(){return function(a,b){a instanceof ee||(a=new ee(a,fe));b&&a.g.push(b);throw a;}};function fe(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Sa(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var he=null,ke=function(a){function b(q){for(var t=0;t<q.length;t++)d[q[t]]=!0}var c=[],d=[];he=ie(a);for(var e=0;e<Qd.length;e++){var f=Qd[e],g=je(f);if(g){for(var h=f.add||[],l=0;l<h.length;l++)c[h[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],n=0;n<Sd.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},je=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=he(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=he(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},ie=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=be(Rd[c],a));return b[c]}};var le={Fh:function(a,b){b[sd.Ce]&&"string"===typeof a&&(a=1==b[sd.Ce]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(sd.Ee)&&null===a&&(a=b[sd.Ee]);b.hasOwnProperty(sd.Ge)&&void 0===a&&(a=b[sd.Ge]);b.hasOwnProperty(sd.Fe)&&!0===a&&(a=b[sd.Fe]);b.hasOwnProperty(sd.De)&&!1===a&&(a=b[sd.De]);return a}};var me=function(){this.g={}};function ne(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new ce(c,d,g);}}function oe(a,b,c){return function(){var d=arguments[0];if(d){var e=a.g[d],f=a.g.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));ne(e,b,d,g);ne(f,b,d,g)}}}};var se=function(a){var b=pe.F,c=this;this.o=new me;this.g={};var d={},e=oe(this.o,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});$a(a,function(f,g){var h={};$a(g,function(l,m){var n=qe(l,m);h[l]=n.assert;d[l]||(d[l]=n.O)});c.g[f]=function(l,m){var n=h[l];if(!n)throw re(l,{},"The requested permission "+l+" is not configured.");var q=Array.prototype.slice.call(arguments,0);n.apply(void 0,q);e.apply(void 0,q)}})},ue=function(a){return te.g[a]||
function(){}};function qe(a,b){var c=Yd(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=re;try{return Zd(c)}catch(d){return{assert:function(e){throw new ce(e,{},"Permission "+e+" is unknown.");},O:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function re(a,b,c){return new ce(a,b,c)};var ve=!1;var we={};we.Qi=gb('');we.Lh=gb('');var xe=ve,ye=we.Lh,ze=we.Qi;var Me=/^[a-z$_][\w$]*$/i,Ne=/^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i;
var Oe=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},Pe=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;Oe(b,"/*")&&(b=b.slice(0,-2));Oe(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},Qe=/^[a-z0-9-]+$/i,Re=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
Te=function(a,b){var c;if(!(c=!Se(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!Qe.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,m=b[g];if(!Re.exec(m))throw Error("Invalid Wildcard");var n=m.slice(8),q=n.slice(0,n.indexOf("/")),t;var r=l.hostname,u=q;if(0!==u.indexOf("*."))t=r.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=r.toLowerCase().indexOf(u.toLowerCase());t=-1===v?!1:r.length===u.length?
!0:r.length!==u.length+v?!1:"."===r[v-1]}if(t){var w=n.slice(n.indexOf("/"));h=Pe(l.pathname+l.search,w)?!0:!1}else h=!1;if(h)return!0}return!1},Se=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var We=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,Xe={Fn:"function",DustMap:"Object",List:"Array"},H=function(a,b,c){for(var d=0;d<b.length;d++){var e=We.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var n=typeof l;l instanceof wb?n="Fn":l instanceof Da?n="List":l instanceof Eb?n="DustMap":
l instanceof Ib&&(n="OpaqueValue");if(n!=h)throw Error("Error in "+a+". Argument "+f+" has type "+n+", which does not match required type "+(Xe[h]||h)+".");}}};function Ye(a){return""+a}
function Ze(a,b){var c=[];return c};var $e=function(a,b){var c=new wb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=B(this,d[e]);return b.apply(this,d)});c.o=!0;return c},af=function(a,b){var c=new Eb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ra(e)?c.set(d,$e(a+"_"+d,e)):(Sa(e)||k(e)||"boolean"==typeof e)&&c.set(d,e)}c.o=!0;return c};var bf=function(a,b){H(F(this),["apiName:!string","message:?string"],arguments);var c={},d=new Eb;return d=af("AssertApiSubject",c)};var cf=function(a,b){H(F(this),["actual:?*","message:?string"],arguments);var c={},d=new Eb;
return d=af("AssertThatSubject",c)};function df(a){return function(){for(var b=[],c=this.g,d=0;d<arguments.length;++d)b.push(Pb(arguments[d],c));return Ob(a.apply(null,b))}}var ff=function(){for(var a=Math,b=ef,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=df(a[e].bind(a)))}return c};var gf=function(a){var b;return b};var hf=function(a){var b;H(F(this),["uri:!string"],arguments);try{b=decodeURIComponent(a)}catch(c){}return b};var jf=function(a){H(F(this),["uri:!string"],arguments);return encodeURI(a)};var kf=function(a){H(F(this),["uri:!string"],arguments);return encodeURIComponent(a)};var lf=function(a){H(F(this),["message:?string"],arguments);};var mf=function(a,b){H(F(this),["min:!number","max:!number"],arguments);return Xa(a,b)};var nf=function(a,b,c){var d=a.g.g;if(!d)throw Error("Missing program state.");d.uh.apply(null,Array.prototype.slice.call(arguments,1))};var of=function(){nf(this,"read_container_data");var a=new Eb;a.set("containerId",'GTM-NTF2X45');a.set("version",'132');a.set("environmentName",'');a.set("debugMode",xe);a.set("previewMode",ze);a.set("environmentMode",ye);a.o=!0;return a};var pf=function(){return(new Date).getTime()};var qf=function(a){if(null===a)return"null";if(a instanceof Da)return"array";if(a instanceof wb)return"function";if(a instanceof Ib){a=a.sa;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var rf=function(a){function b(c){return function(d){try{return c(d)}catch(e){(xe||ze)&&a.call(this,e.message)}}}return{parse:b(function(c){return Ob(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(Pb(c))})}};var sf=function(a){return fb(Pb(a,this.g))};var tf=function(a){return Number(Pb(a,this.g))};var uf=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var vf=function(a,b,c){var d=null,e=!1;H(F(this),["tableObj:!List","keyColumnName:!string","valueColumnName:!string"],arguments);d=new Eb;for(var f=0;f<a.length();f++){var g=a.get(f);g instanceof Eb&&g.has(b)&&g.has(c)&&(d.set(g.get(b),g.get(c)),e=!0)}return e?d:null};var ef="floor ceil round max min abs pow sqrt".split(" ");var wf=function(){var a={};return{Sh:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Ki:function(b,c){a[b]=c},reset:function(){a={}}}},xf=function(a,b){H(F(this),["apiName:!string","mock:?*"],arguments);};var yf=function(){this.g={};this.o={};};yf.prototype.get=function(a,b){var c=this.g.hasOwnProperty(a)?this.g[a]:void 0;return c};
yf.prototype.add=function(a,b,c){if(this.g.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.o.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.g[a]=c?void 0:Ra(b)?$e(a,b):af(a,b)};
var zf=function(a,b,c){if(a.o.hasOwnProperty(b))throw"Attempting to add a private function which already exists: "+b+".";if(a.g.hasOwnProperty(b))throw"Attempting to add a private function with an existing API name: "+b+".";a.o[b]=Ra(c)?$e(b,c):af(b,c)};function Af(){var a={};return a};var J={Hb:"_ee",Ed:"_syn",bj:"_uei",yd:"_eu",$i:"_pci",md:"event_callback",uc:"event_timeout",ja:"gtag.config",Oa:"gtag.get",oa:"purchase",cb:"refund",Na:"begin_checkout",$a:"add_to_cart",ab:"remove_from_cart",vg:"view_cart",Ke:"add_to_wishlist",Ba:"view_item",Je:"view_promotion",Ie:"select_promotion",gd:"select_item",oc:"view_item_list",He:"add_payment_info",ug:"add_shipping_info",Ea:"value_key",Da:"value_callback",ka:"allow_ad_personalization_signals",ud:"restricted_data_processing",xb:"allow_google_signals",
la:"cookie_expires",Ab:"cookie_update",Eb:"session_duration",ra:"user_properties",Ra:"transport_url",P:"ads_data_redaction",C:"ad_storage",K:"analytics_storage",Be:"region",mg:"wait_for_update"};J.lf=[J.oa,J.cb,J.Na,J.$a,J.ab,J.vg,J.Ke,J.Ba,J.Je,J.Ie,J.oc,J.gd,J.He,J.ug];J.kf=[J.ka,J.xb,J.Ab];J.nf=[J.la,J.uc,J.Eb];var Bf=function(a){Na("GTM",a)};var Cf=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Df=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var Ef,Ff=function(){if(void 0===Ef){var a=null,b=oa.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:va,createScript:va,createScriptURL:va})}catch(c){oa.console&&oa.console.error(c.message)}Ef=a}else Ef=a}return Ef};var Hf=function(a,b){this.g=b===Gf?a:""};Hf.prototype.toString=function(){return this.g+""};var Gf={};var If=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Jf;a:{var Kf=oa.navigator;if(Kf){var Lf=Kf.userAgent;if(Lf){Jf=Lf;break a}}Jf=""}var Mf=function(a){return-1!=Jf.indexOf(a)};var Of=function(a,b,c){this.g=c===Nf?a:""};Of.prototype.toString=function(){return this.g.toString()};var Pf=function(a){return a instanceof Of&&a.constructor===Of?a.g:"type_error:SafeHtml"},Nf={},Qf=new Of(oa.trustedTypes&&oa.trustedTypes.emptyHTML||"",0,Nf);var Rf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);var c=a.firstChild.firstChild;a.innerHTML=Pf(Qf);return!c.parentElement}),Sf=function(a,b){if(Rf())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Pf(b)};var Tf=function(a){var b=Ff(),c=b?b.createHTML(a):a;return new Of(c,null,Nf)};var p=window,K=document,Uf=navigator,Vf=K.currentScript&&K.currentScript.src,Wf=function(a,b){var c=p[a];p[a]=void 0===c?b:c;return p[a]},Xf=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Yf=function(a,b,c){var d=K.createElement("script");d.type="text/javascript";d.async=!0;var e,f=Ff(),g=f?f.createScriptURL(a):a;e=new Hf(g,Gf);d.src=e instanceof Hf&&e.constructor===Hf?e.g:"type_error:TrustedResourceUrl";
var h=ra(d.ownerDocument&&d.ownerDocument.defaultView);h&&d.setAttribute("nonce",h);Xf(d,b);c&&(d.onerror=c);var l=ra();l&&d.setAttribute("nonce",l);var m=K.getElementsByTagName("script")[0]||K.body||K.head;m.parentNode.insertBefore(d,m);return d},Zf=function(){if(Vf){var a=Vf.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},$f=function(a,b){var c=K.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";
var d=K.body&&K.body.lastChild||K.body||K.head;d.parentNode.insertBefore(c,d);Xf(c,b);void 0!==a&&(c.src=a);return c},ag=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},bg=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},cg=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},M=function(a){p.setTimeout(a,
0)},dg=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},eg=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},fg=function(a){var b=K.createElement("div"),c=Tf("A<div>"+a+"</div>");Sf(b,c);b=b.lastChild;for(var d=[];b.firstChild;)d.push(b.removeChild(b.firstChild));return d},gg=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=
a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},kg=function(a){Uf.sendBeacon&&Uf.sendBeacon(a)||ag(a)},lg=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var mg={},ng=function(){return void 0==mg.gtag_cs_api?!1:mg.gtag_cs_api};var og=[];function pg(){var a=Wf("google_tag_data",{});a.ics||(a.ics={entries:{},set:qg,update:rg,addListener:sg,notifyListeners:tg,active:!1,usedDefault:!1});return a.ics}
function qg(a,b,c,d,e,f){var g=pg();g.active=!0;g.usedDefault=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},m=l.region,n=c&&k(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(""===d||n===e||(n===d?m!==e:!n&&!m)){var q=!!(f&&0<f&&void 0===l.update),t={region:n,initial:"granted"===b,update:l.update,quiet:q};if(""!==d||!1!==l.initial)h[a]=t;q&&p.setTimeout(function(){h[a]===t&&t.quiet&&(t.quiet=!1,ug(a),tg(),Na("TAGGING",2))},f)}}}
function rg(a,b){var c=pg();c.active=!0;if(void 0!=b){var d=vg(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=vg(a);f.quiet?(f.quiet=!1,ug(a)):g!==d&&ug(a)}}function sg(a,b){og.push({If:a,Oh:b})}function ug(a){for(var b=0;b<og.length;++b){var c=og[b];Ta(c.If)&&-1!==c.If.indexOf(a)&&(c.Zf=!0)}}function tg(a){for(var b=0;b<og.length;++b){var c=og[b];if(c.Zf){c.Zf=!1;try{c.Oh({Hf:a})}catch(d){}}}}
var vg=function(a){var b=pg().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},wg=function(a){return(pg().entries[a]||{}).initial},xg=function(a){return!(pg().entries[a]||{}).quiet},yg=function(){return ng()?pg().active:!1},zg=function(){return pg().usedDefault},Ag=function(a,b){pg().addListener(a,b)},Bg=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!xg(b[e]))return!0;return!1}if(c()){var d=!1;Ag(b,function(e){d||c()||(d=!0,a(e))})}else a({})},Cg=function(a,
b){if(!1===vg(b)){var c=!1;Ag([b],function(d){!c&&vg(b)&&(a(d),c=!0)})}};function Dg(a){for(var b=[],c=0;c<Eg.length;c++){var d=a(Eg[c]);b[c]=!0===d?"1":!1===d?"0":"-"}return b.join("")}
var Eg=[J.C,J.K],Fg=function(a){var b=a[J.Be];b&&Bf(40);var c=a[J.mg];c&&Bf(41);for(var d=Ta(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<Eg.length;f++){var g=Eg[f],h=a[Eg[f]],l=d[e];pg().set(g,h,l,"RU","RU-MOW",c)}},Gg=function(a,b){for(var c=0;c<Eg.length;c++){var d=Eg[c],e=a[Eg[c]];pg().update(d,e)}pg().notifyListeners(b)},Hg=function(a){var b=vg(a);return void 0!=b?b:!0},Ig=function(){return"G1"+Dg(vg)},Jg=function(a,b){Ag(a,b)},Kg=function(a,b){Bg(a,b)};var Mg=function(a){return Lg?K.querySelectorAll(a):null},Ng=function(a,b){if(!Lg)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!K.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Og=!1;if(K.querySelectorAll)try{var Pg=K.querySelectorAll(":root");Pg&&1==Pg.length&&Pg[0]==K.documentElement&&(Og=!0)}catch(a){}var Lg=Og;var Qg=function(a){if(K.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!p.getComputedStyle)return!0;var c=p.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=p.getComputedStyle(d,
null))}return!1};var Zg=/:[0-9]+$/,$g=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},ch=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=ah(a.protocol)||ah(p.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
p.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||p.location.hostname).replace(Zg,"").toLowerCase());return bh(a,b,c,d,e)},bh=function(a,b,c,d,e){var f,g=ah(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=dh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Zg,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||Na("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Ua(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=$g(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},ah=function(a){return a?a.replace(":",
"").toLowerCase():""},dh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},eh=function(a){var b=K.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Na("TAGGING",1),c="/"+c);var d=b.hostname.replace(Zg,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},fh=function(a){function b(m){var n=m.split("=")[0];return 0>d.indexOf(n)?m:n+"=0"}function c(m){return m.split("&").map(b).filter(function(n){return void 0!=
n}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=eh(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};var gh=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),hh=new RegExp(/support|noreply/i),ih=["SCRIPT","IMG","SVG","PATH","BR"],jh=["BR"];function kh(a){var b;if(a===K.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=kh(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
var nh=function(){var a=!0;var b=a,c;var d=[],e=K.body;if(e){for(var f=e.querySelectorAll("*"),g=0;g<f.length&&1E4>g;g++){var h=f[g];if(!(0<=ih.indexOf(h.tagName.toUpperCase()))){for(var l=!1,m=0;m<h.childElementCount&&1E4>m;m++)if(!(0<=jh.indexOf(h.children[m].tagName.toUpperCase()))){l=!0;break}l||d.push(h)}}c={elements:d,status:1E4<f.length?"2":"1"}}else c=
{elements:d,status:"4"};for(var n=c,q=n.elements,t=[],r=0;r<q.length;r++){var u=q[r],v=u.textContent;u.value&&(v=u.value);if(v){var w=v.match(gh);if(w){var y=w[0],x;if(p.location){var A=bh(p.location,"host",!0);x=0<=y.toLowerCase().indexOf(A)}else x=!1;x||t.push({element:u,dd:y})}}}var z;for(var C=[],D=10<t.length?"3":n.status,E=0;E<t.length&&
10>E;E++){var I=t[E].element,P=t[E].dd,R=!1;C.push({dd:P,querySelector:kh(I),tagName:I.tagName,isVisible:!Qg(I),type:1,Rc:!!R})}return{elements:C,status:D}};var pe={},N=null,Bh=Math.random();pe.F="GTM-NTF2X45";pe.Dc="2a1";pe.Xi="";pe.ng="ChAIgL24gQYQwcen3M7Yto5XEiQAeiD/H9BNIBsoKTT12OvOpznIRZYAgjQmPWJUFgKsK+gT9O0aAtMV";var Ch={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Dh={__paused:!0,__tg:!0},Eh;for(Eh in Ch)Ch.hasOwnProperty(Eh)&&(Dh[Eh]=!0);var Fh="www.googletagmanager.com/gtm.js";
var Gh=Fh,Hh=gb(""),Ih=null,Jh=null,Kh="//www.googletagmanager.com/a?id="+pe.F+"&cv=132",Lh={},Mh={},Nh=function(){var a=N.sequence||1;N.sequence=a+1;return a};var Oh={},Ph=new Ya,Qh={},Rh={},Uh={name:"marketingClientDataLayer",set:function(a,b){G(ub(a,b),Qh);Sh()},get:function(a){return Th(a,2)},reset:function(){Ph=new Ya;Qh={};Sh()}},Th=function(a,b){return 2!=b?Ph.get(a):Vh(a)},Vh=function(a,b){var c=a.split(".");b=b||[];for(var d=Qh,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==Ua(b,d))return}return d},Wh=function(a,b){Rh.hasOwnProperty(a)||(Ph.set(a,b),G(ub(a,b),Qh),Sh())},Sh=function(a){$a(Rh,function(b,c){Ph.set(b,c);G(ub(b,
void 0),Qh);G(ub(b,c),Qh);a&&delete Rh[b]})},Xh=function(a,b,c){Oh[a]=Oh[a]||{};var d=1!==c?Vh(b):Ph.get(b);"array"===Kb(d)||"object"===Kb(d)?Oh[a][b]=G(d):Oh[a][b]=d},Yh=function(a,b){if(Oh[a])return Oh[a][b]},Zh=function(a,b){Oh[a]&&delete Oh[a][b]};var bi={},ci=function(a,b){if(p._gtmexpgrp&&p._gtmexpgrp.hasOwnProperty(a))return p._gtmexpgrp[a];void 0===bi[a]&&(bi[a]=Math.floor(Math.random()*b));return bi[a]};var di=function(a){var b=1,c,d,e;if(a)for(b=0,d=a.length-1;0<=d;d--)e=a.charCodeAt(d),b=(b<<6&268435455)+e+(e<<14),c=b&266338304,b=0!=c?b^c>>21:b;return b};function ei(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var gi=function(a,b,c,d){return fi(d)?ei(a,String(b||document.cookie),c):[]},ji=function(a,b,c,d,e){if(fi(e)){var f=hi(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=ii(f,function(g){return g.Lc},b);if(1===f.length)return f[0].id;f=ii(f,function(g){return g.$b},c);return f[0]?f[0].id:void 0}}};function ki(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=gi(b,f,!1,d).indexOf(c)}
var oi=function(a,b,c,d){function e(w,y,x){if(null==x)return delete h[y],w;h[y]=x;return w+"; "+y+"="+x}function f(w,y){if(null==y)return delete h[y],w;h[y]=!0;return w+"; "+y}if(!fi(c.za))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=li(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.li);g=e(g,"samesite",
c.Ei);c.Hi&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var n=mi(),q=void 0,t=!1,r=0;r<n.length;++r){var u="none"!==n[r]?n[r]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,h)}catch(w){q=w;continue}t=!0;if(!ni(u,c.path)&&ki(v,a,b,c.za))return 0}if(q&&!t)throw q;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,h);return ni(m,c.path)?1:ki(g,a,b,c.za)?0:1},pi=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return oi(a,b,c)};
function ii(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function hi(a,b,c){for(var d=[],e=gi(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),Lc:1*l[0]||1,$b:1*l[1]||1}))}}return d}
var li=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},qi=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,ri=/(^|\.)doubleclick\.net$/i,ni=function(a,b){return ri.test(document.location.hostname)||"/"===b&&qi.test(a)},mi=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;ri.test(e)||qi.test(e)||a.push("none");
return a},fi=function(a){if(!ng()||!a||!yg())return!0;if(!xg(a))return!1;var b=vg(a);return null==b?!0:!!b};var si=function(){for(var a=Uf.userAgent+(K.cookie||"")+(K.referrer||""),b=a.length,c=p.history.length;0<c;)a+=c--^b++;return[Math.round(2147483647*Math.random())^di(a)&2147483647,Math.round(jb()/1E3)].join(".")},vi=function(a,b,c,d,e){var f=ti(b);return ji(a,f,ui(c),d,e)},wi=function(a,b,c,d){var e=""+ti(c),f=ui(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},ti=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},ui=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&
(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function xi(a,b,c){var d,e=a.Zb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||jb())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var yi=["1"],zi={},Ci=function(a){var b=Ai(a.prefix),c=zi[b];c&&Bi(b,c,a)},Ei=function(a){var b=Ai(a.prefix);if(!zi[b]&&!Di(b,a.path,a.domain)){var c=si();if(0===Bi(b,c,a)){var d=Wf("google_tag_data",{});d._gcl_au?Na("GTM",57):d._gcl_au=c}Di(b,a.path,a.domain)}};function Bi(a,b,c){var d=wi(b,"1",c.domain,c.path),e=xi(c);e.za="ad_storage";return pi(a,d,e)}function Di(a,b,c){var d=vi(a,b,c,yi,"ad_storage");d&&(zi[a]=d);return d}function Ai(a){return(a||"_gcl")+"_au"};function Fi(){for(var a=Gi,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Hi(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Gi,Ii;
function Ji(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Ii[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Gi=Gi||Hi();Ii=Ii||Fi();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var Ki;var Oi=function(){var a=Li,b=Mi,c=Ni(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){bg(K,"mousedown",d);bg(K,"keyup",d);bg(K,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Pi=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Ni().decorators.push(f)},Qi=function(a,b,c){for(var d=Ni().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,m=a,n=!!g.sameHost;if(l&&(n||m!==K.location.hostname))for(var q=0;q<l.length;q++)if(l[q]instanceof RegExp){if(l[q].test(m)){h=!0;break a}}else if(0<=m.indexOf(l[q])||n&&0<=l[q].indexOf(m)){h=!0;break a}h=!1}if(h){var t=g.placement;void 0==t&&(t=g.fragment?2:1);t===b&&ob(e,g.callback())}}return e},Ni=function(){var a=Wf("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Ri=/(.*?)\*(.*?)\*(.*)/,Si=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Ti=/^(?:www\.|m\.|amp\.)+/,Yi=/([^?#]+)(\?[^#]*)?(#.*)?/;function Zi(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var aj=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()){b.push(c);var e=b,f=e.push,g,h=String(d);Gi=Gi||Hi();Ii=Ii||Fi();for(var l=[],m=0;m<h.length;m+=3){var n=m+1<h.length,q=m+2<h.length,t=h.charCodeAt(m),r=n?h.charCodeAt(m+1):0,u=q?h.charCodeAt(m+2):0,v=t>>2,w=(t&3)<<4|r>>4,y=(r&15)<<2|u>>6,x=u&63;q||(x=64,n||(y=64));l.push(Gi[v],Gi[w],Gi[y],Gi[x])}g=l.join("");f.call(e,g)}}var A=b.join("*");return["1",$i(A),
A].join("*")},$i=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Ki)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Ki=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Ki[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},cj=function(){return function(a){var b=eh(p.location.href),
c=b.search.replace("?",""),d=$g(c,"_gl",!1,!0)||"";a.query=bj(d)||{};var e=ch(b,"fragment").match(Zi("_gl"));a.fragment=bj(e&&e[3]||"")||{}}},dj=function(a){var b=cj(),c=Ni();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(ob(d,e.query),a&&ob(d,e.fragment));return d},bj=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Ri.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var m=g[2],n=
0;n<b;++n)if(m===$i(h,n)){l=!0;break a}l=!1}if(l){for(var q={},t=h?h.split("*"):[],r=0;r<t.length;r+=2)q[t[r]]=Ji(t[r+1]);return q}}}}catch(u){}};function ej(a,b,c,d){function e(n){var q=n,t=Zi(a).exec(q),r=q;if(t){var u=t[2],v=t[4];r=t[1];v&&(r=r+u+v)}n=r;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+m}d=void 0===d?!1:d;var f=Yi.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function fj(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Qi(b,1,c),e=Qi(b,2,c),f=Qi(b,3,c);if(qb(d)){var g=aj(d);c?gj("_gl",g,a):hj("_gl",g,a,!1)}if(!c&&qb(e)){var h=aj(e);hj("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){hj(m,n,q,void 0);break a}if("form"===q.tagName.toLowerCase()){gj(m,n,q);break a}}"string"==typeof q&&ej(m,n,q,void 0)}}
function hj(a,b,c,d){if(c.href){var e=ej(a,b,c.href,void 0===d?!1:d);If.test(e)&&(c.href=e)}}
function gj(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=K.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=ej(a,b,c.action);If.test(m)&&(c.action=m)}}}
var Li=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||fj(e,e.hostname)}}catch(g){}},Mi=function(a){try{if(a.action){var b=ch(eh(a.action),"host");fj(a,b)}}catch(c){}},ij=function(a,b,c,d){Oi();Pi(a,b,"fragment"===c?2:1,!!d,!1)},jj=function(a,b){Oi();Pi(a,[bh(p.location,"host",!0)],b,!0,!0)},kj=function(){var a=K.location.hostname,b=Si.exec(K.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(Ti,""),l=e.replace(Ti,""),m;if(!(m=h===l)){var n="."+l;m=h.substring(h.length-n.length,h.length)===n}return m},lj=function(a,b){return!1===a?!1:a||b||kj()};var mj=/^\w+$/,nj=/^[\w-]+$/,oj=/^~?[\w-]+$/,pj={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},qj=function(){if(!ng()||!yg())return!0;var a=vg("ad_storage");return null==a?!0:!!a},rj=function(a,b){xg("ad_storage")?qj()?a():Cg(a,"ad_storage"):b?Na("TAGGING",3):Bg(function(){rj(a,!0)},["ad_storage"])},tj=function(a){return sj(a).map(function(b){return b.La})},sj=function(a){var b=[];if(!K.cookie)return b;var c=gi(a,K.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d={},e=0;e<c.length;d=
{rb:d.rb},e++){d.rb=uj(c[e]);var f=vj(c[e]);if(d.rb&&f){var g=Va(b,function(h){return function(l){return l.La===h.rb}}(d));g&&g.timestamp<f?g.timestamp=f:g||b.push({La:d.rb,timestamp:f})}}return wj(b)};function xj(a){return a&&"string"==typeof a&&a.match(mj)?a:"_gcl"}
var zj=function(){var a=eh(p.location.href),b=ch(a,"query",!1,void 0,"gclid"),c=ch(a,"query",!1,void 0,"gclsrc"),d=ch(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||$g(e,"gclid",!1,void 0);c=c||$g(e,"gclsrc",!1,void 0)}return yj(b,c,d)},yj=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(nj))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":e(a,
"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Aj=function(a,b){switch(a){case void 0:case "aw":return"aw"===b;case "aw.ds":return"aw"===b||"dc"===b;case "ds":case "3p.ds":return"dc"===b;case "gf":return"gf"===b;case "ha":return"ha"===b;case "gp":return"gp"===b}return!1},Cj=function(a){var b=zj();rj(function(){Bj(b,a)})};
function Bj(a,b,c){function d(l,m){var n=Dj(l,e);n&&pi(n,m,f)}b=b||{};var e=xj(b.prefix);c=c||jb();var f=xi(b,c,!0);f.za="ad_storage";var g=Math.round(c/1E3),h=function(l){return["GCL",g,l].join(".")};a.aw&&(!0===b.tj?d("aw",h("~"+a.aw[0])):d("aw",h(a.aw[0])));a.dc&&d("dc",h(a.dc[0]));a.gf&&d("gf",h(a.gf[0]));a.ha&&d("ha",h(a.ha[0]));a.gp&&d("gp",h(a.gp[0]))}
var Ej=function(a,b){var c=dj(!0);rj(function(){for(var d=xj(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==pj[f]){var g=Dj(f,d),h=c[g];if(h){var l=Math.min(vj(h),jb()),m;b:{for(var n=l,q=gi(g,K.cookie,void 0,"ad_storage"),t=0;t<q.length;++t)if(vj(q[t])>n){m=!0;break b}m=!1}if(!m){var r=xi(b,l,!0);r.za="ad_storage";pi(g,h,r)}}}}Bj(yj(c.gclid,c.gclsrc),b)})},Dj=function(a,b){var c=pj[a];if(void 0!==c)return b+c},vj=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function uj(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Fj=function(a,b,c,d,e){if(Ta(b)){var f=xj(e),g=function(){for(var h={},l=0;l<a.length;++l){var m=Dj(a[l],f);if(m){var n=gi(m,K.cookie,void 0,"ad_storage");n.length&&(h[m]=n.sort()[n.length-1])}}return h};rj(function(){ij(g,b,c,d)})}},wj=function(a){return a.filter(function(b){return oj.test(b.La)})},Gj=function(a,b){for(var c=xj(b.prefix),d={},e=0;e<a.length;e++)pj[a[e]]&&(d[a[e]]=pj[a[e]]);rj(function(){$a(d,function(f,g){var h=gi(c+g,K.cookie,void 0,"ad_storage");if(h.length){var l=h[0],m=vj(l),
n={};n[f]=[uj(l)];Bj(n,b,m)}})})};function Hj(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Ij=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(yg()){var c=zj();if(Hj(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);jj(function(){return d},3);jj(function(){var e={};return e._up="1",e},1)}}},Jj=function(){var a;if(qj()){for(var b=[],c=K.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({ve:f[1],value:f[2]})}var g={};if(b&&b.length)for(var h=0;h<b.length;h++){var l=b[h].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[h].ve]||(g[b[h].ve]=[]),g[b[h].ve].push({timestamp:l[1],La:l[2]}))}a=g}else a={};return a};var Kj=/^\d+\.fls\.doubleclick\.net$/,Lj=!1;function Mj(a,b){xg(J.C)?Hg(J.C)?a():Cg(a,J.C):b?Bf(42):Kg(function(){Mj(a,!0)},[J.C])}function Nj(a){var b=eh(p.location.href),c=ch(b,"host",!1);if(c&&c.match(Kj)){var d=ch(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Oj(a,b,c){if("aw"==a||"dc"==a){var d=Nj("gcl"+a);if(d)return d.split(".")}var e=xj(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!Hg(J.C)&&c,g;g=zj()[a]||[];if(0<g.length)return f?["0"]:g}var h=Dj(a,e);return h?tj(h):[]}
var Pj=function(a){var b=Nj("gac");if(b)return!Hg(J.C)&&a?"0":decodeURIComponent(b);var c=Jj(),d=[];$a(c,function(e,f){f=wj(f);for(var g=[],h=0;h<f.length;h++)g.push(f[h].La);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},Rj=function(a,b){if(Lj)Qj(a,b,"dc");else{var c=zj().dc||[];Mj(function(){Ei(b);var d=zi[Ai(b.prefix)],e=!1;if(d&&0<c.length){var f=N.joined_au=N.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var h=0;h<c.length;h++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[h]+"&auiddc="+
d;kg(l);e=f[g]=!0}}null==a&&(a=e);a&&d&&Ci(b)})}},Qj=function(a,b,c){var d=zj(),e=[],f=d.gclid,g=d.dclid,h=d.gclsrc||"aw";!f||"aw.ds"!==h&&"aw"!==h&&"ds"!==h||c&&!Aj(h,c)||e.push({La:f,Rf:h});!g||c&&"dc"!==c||e.push({La:g,Rf:"ds"});Mj(function(){Ei(b);var l=zi[Ai(b.prefix)],m=!1;if(l&&0<e.length)for(var n=N.joined_auid=N.joined_auid||{},q=0;q<e.length;q++){var t=e[q],r=t.La,u=t.Rf,v=(b.prefix||"_gcl")+"."+u+"."+r;if(!n[v]){var w="https://adservice.google.com/pagead/regclk";w=w+"?gclid="+r+"&auid="+l+"&gclsrc="+u;kg(w);
m=n[v]=!0}}null==a&&(a=m);a&&l&&Ci(b)})};var Sj=/[A-Z]+/,Tj=/\s/,Uj=function(a){if(k(a)&&(a=ib(a),!Tj.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Sj.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],H:d}}}}},Wj=function(a){for(var b={},c=0;c<a.length;++c){var d=Uj(a[c]);d&&(b[d.id]=d)}Vj(b);var e=[];$a(b,function(f,g){e.push(g)});return e};
function Vj(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.H[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Xj=function(){var a=!1;return a};var Zj=function(a,b,c,d){return(2===Yj()||d||"http:"!=p.location.protocol?a:b)+c},Yj=function(){var a=Zf(),b;if(1===a)a:{var c=Gh;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=K.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var nk=function(a){return Hg(J.C)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=fh(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})},ok=function(){var a;if(!(a=Hh)){var b;if(!0===p._gtmdgs)b=!0;else{var c=Uf&&Uf.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=fb("1");return ci(1,100)<d?ci(2,2):-1},pk=function(a){var b;
if(!a||!a.length)return;for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&e.estimated_delivery_date?c.push(""+e.estimated_delivery_date):c.push("")}b=c.join(",");return b};var qk=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),rk={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},sk={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},tk="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var vk=function(a){var b=Th("gtm.allowlist")||Th("gtm.whitelist");b&&Bf(9);var c=b&&sb(hb(b),rk),d=Th("gtm.blocklist")||Th("gtm.blacklist");d||(d=Th("tagTypeBlacklist"))&&
Bf(3);d?Bf(8):d=[];uk()&&(d=hb(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Ua(hb(d),"google")&&Bf(2);var e=d&&sb(hb(d),sk),f={};return function(g){var h=g&&g[sd.Sa];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=Mh[h]||[],m=a(h,l);if(b){var n;if(n=m)a:{if(0>Ua(c,h))if(l&&0<l.length)for(var q=0;q<
l.length;q++){if(0>Ua(c,l[q])){Bf(11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var r=0<=Ua(e,h);if(r)t=r;else{var u=Za(e,l||[]);u&&Bf(10);t=u}}var v=!m||t;v||!(0<=Ua(l,"sandboxedScripts"))||c&&-1!==Ua(c,"sandboxedScripts")||(v=Za(e,tk));return f[h]=v}},uk=function(){return qk.test(p.location&&p.location.hostname)};var wk={active:!0,isAllowed:function(){return!0}},xk=function(a){var b=N.zones;return b?b.checkState(pe.F,a):wk},yk=function(a){var b=N.zones;!b&&a&&(b=N.zones=a());return b};var zk=function(){},Ak=function(){};var Bk=!1,Ck=0,Dk=[];function Ek(a){if(!Bk){var b=K.createEventObject,c="complete"==K.readyState,d="interactive"==K.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Bk=!0;for(var e=0;e<Dk.length;e++)M(Dk[e])}Dk.push=function(){for(var f=0;f<arguments.length;f++)M(arguments[f]);return 0}}}function Fk(){if(!Bk&&140>Ck){Ck++;try{K.documentElement.doScroll("left"),Ek()}catch(a){p.setTimeout(Fk,50)}}}var Gk=function(a){Bk?a():Dk.push(a)};var Ik=function(a,b){this.g=!1;this.D=[];this.J={tags:[]};this.N=!1;this.o=this.s=0;Hk(this,a,b)},Jk=function(a,b,c,d){if(Dh.hasOwnProperty(b)||"__zone"===b)return-1;var e={};Mb(d)&&(e=G(d,e));e.id=c;e.status="timeout";return a.J.tags.push(e)-1},Kk=function(a,b,c,d){var e=a.J.tags[b];e&&(e.status=c,e.executionTime=d)},Lk=function(a){if(!a.g){for(var b=a.D,c=0;c<b.length;c++)b[c]();a.g=!0;a.D.length=0}},Hk=function(a,b,c){Ra(b)&&a.Nb(b);c&&p.setTimeout(function(){return Lk(a)},Number(c))};
Ik.prototype.Nb=function(a){var b=this,c=nb(function(){return M(function(){a(pe.F,b.J)})});this.g?c():this.D.push(c)};var Mk=function(a){a.s++;return nb(function(){a.o++;a.N&&a.o>=a.s&&Lk(a)})};var Nk=function(){function a(d){return!Sa(d)||0>d?0:d}if(!N._li&&p.performance&&p.performance.timing){var b=p.performance.timing.navigationStart,c=Sa(Uh.get("gtm.start"))?Uh.get("gtm.start"):0;N._li={cst:a(c-b),cbt:a(Jh-b)}}};var Rk={},Sk=function(){return p.GoogleAnalyticsObject&&p[p.GoogleAnalyticsObject]},Tk=!1;
var Uk=function(a){p.GoogleAnalyticsObject||(p.GoogleAnalyticsObject=a||"ga");var b=p.GoogleAnalyticsObject;if(p[b])p.hasOwnProperty(b)||Bf(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);p[b]=c}Nk();return p[b]},Vk=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Sk();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},Wk=function(a){};
var Yk=function(a){},Xk=function(){return p.GoogleAnalyticsObject||"ga"},Zk=function(a,b){return function(){var c=Sk(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var dl=function(){return"&tc="+Sd.filter(function(a){return a}).length},gl=function(){2022<=el().length&&fl()},il=function(){hl||(hl=p.setTimeout(fl,500))},fl=function(){hl&&(p.clearTimeout(hl),hl=void 0);void 0===jl||kl[jl]&&!ll&&!ml||(nl[jl]||ol.ci()||0>=pl--?(Bf(1),nl[jl]=!0):(ol.Bi(),ag(el()),kl[jl]=!0,ql=rl=sl=ml=ll=""))},el=function(){var a=jl;if(void 0===a)return"";var b=Oa("GTM"),c=Oa("TAGGING");return[tl,kl[a]?"":"&es=1",ul[a],b?"&u="+b:"",c?"&ut="+c:"",dl(),ll,ml,sl?sl:"",rl,ql,"&z=0"].join("")},
vl=function(){return[Kh,"&v=3&t=t","&pid="+Xa(),"&rv="+pe.Dc].join("")},wl="0.005000">Math.random(),tl=vl(),xl=function(){tl=vl()},kl={},ll="",ml="",ql="",rl="",sl="",jl=void 0,ul={},nl={},hl=void 0,ol=function(a,b){var c=0,d=0;return{ci:function(){if(c<a)return!1;jb()-d>=b&&(c=0);return c>=a},Bi:function(){jb()-d>=b&&(c=0);c++;d=jb()}}}(2,1E3),pl=1E3,yl=function(a,b,c){if(wl&&!nl[a]&&b){a!==jl&&(fl(),jl=a);var d,e=String(b[sd.Sa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");
d=e;var f=c+d;ll=ll?ll+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var h=(Ud[g]?"1":"2")+d;ql=ql?ql+"."+h:"&ti="+h;il();gl()}},zl=function(a,b,c){if(wl&&!nl[a]){a!==jl&&(fl(),jl=a);var d=c+b;ml=ml?ml+"."+d:"&epr="+d;il();gl()}},Al=function(a,b,c){};
var Bl=function(){return!1},Cl=function(){var a={};return function(b,c,d){}};function Dl(a,b,c,d){var e=Sd[a],f=El(a,b,c,d);if(!f)return null;var g=$d(e[sd.Af],c,[]);if(g&&g.length){var h=g[0];f=Dl(h.index,{onSuccess:f,onFailure:1===h.Nf?b.terminate:f,terminate:b.terminate},c,d)}return f}
function El(a,b,c,d){function e(){if(f[sd.dh])h();else{var w=ae(f,c,[]);var A=Jk(c.Ia,String(f[sd.Sa]),Number(f[sd.Bf]),w[sd.eh]),z=!1;w.vtp_gtmOnSuccess=function(){if(!z){z=!0;var E=jb()-D;yl(c.id,Sd[a],"5");Kk(c.Ia,A,"success",
E);g()}};w.vtp_gtmOnFailure=function(){if(!z){z=!0;var E=jb()-D;yl(c.id,Sd[a],"6");Kk(c.Ia,A,"failure",E);h()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=c.id;yl(c.id,f,"1");var C=function(){var E=jb()-D;yl(c.id,f,"7");Kk(c.Ia,A,"exception",E);z||(z=!0,h())};var D=jb();try{Zd(w,c)}catch(E){C(E)}}}var f=Sd[a],g=b.onSuccess,h=b.onFailure,l=b.terminate;if(c.Xd(f))return null;var m=$d(f[sd.Cf],c,[]);if(m&&m.length){var n=m[0],q=Dl(n.index,{onSuccess:g,onFailure:h,terminate:l},c,d);if(!q)return null;g=q;h=2===n.Nf?l:q}if(f[sd.wf]||f[sd.gh]){var t=f[sd.wf]?Td:
c.Mi,r=g,u=h;if(!t[a]){e=nb(e);var v=Fl(a,t,e);g=v.onSuccess;h=v.onFailure}return function(){t[a](r,u)}}return e}function Fl(a,b,c){var d=[],e=[];b[a]=Gl(d,e,c);return{onSuccess:function(){b[a]=Hl;for(var f=0;f<d.length;f++)d[f]()},onFailure:function(){b[a]=Il;for(var f=0;f<e.length;f++)e[f]()}}}function Gl(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Hl(a){a()}function Il(a,b){b()};var Ll=function(a,b){for(var c=[],d=0;d<Sd.length;d++)if(a[d]){var e=Sd[d];var f=Mk(b.Ia);try{var g=Dl(d,{onSuccess:f,onFailure:f,terminate:f},b,d);if(g){var h=c,l=h.push,m=d,n=e["function"];if(!n)throw"Error: No function name given for function call.";var q=Ud[n];l.call(h,{gg:m,$f:q?q.priorityOverride||0:0,Mc:g})}else Jl(d,b),f()}catch(u){f()}}var t=b.Ia;t.N=!0;t.o>=t.s&&Lk(t);c.sort(Kl);for(var r=0;r<c.length;r++)c[r].Mc();
return 0<c.length};function Kl(a,b){var c,d=b.$f,e=a.$f;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.gg,h=b.gg;f=g>h?1:g<h?-1:0}return f}function Jl(a,b){if(!wl)return;var c=function(d){var e=b.Xd(Sd[d])?"3":"4",f=$d(Sd[d][sd.Af],b,[]);f&&f.length&&c(f[0].index);yl(b.id,Sd[d],e);var g=$d(Sd[d][sd.Cf],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Ml=!1,Rl=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if(Ml)return!1;Ml=!0}var d=xk(b),e=!1;if(!d.active){if("gtm.js"!==c)return!1;e=!0;d=xk(Number.MAX_SAFE_INTEGER)}wl&&!nl[b]&&jl!==b&&(fl(),jl=b,ql=ll="",ul[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,il());var f=a.eventCallback,g=a.eventTimeout,h={id:b,name:c,Xd:vk(d.isAllowed),Mi:[],Wf:function(){Bf(6)},Gf:Nl(b),Ia:new Ik(f,
g)};Ol(b,h.Ia);var l=ke(h);e&&(l=Pl(l));var m=Ll(l,h);"gtm.js"!==c&&"gtm.sync"!==c||Yk(pe.F);switch(c){case "gtm.init":Bf(19),m&&Bf(20)}return Ql(l,m)};function Nl(a){return function(b){wl&&(Rb(b)||Al(a,"input",b))}}
function Ol(a,b){Xh(a,"event",1);Xh(a,"ecommerce",1);Xh(a,"gtm");Xh(a,"eventModel");}function Pl(a){for(var b=[],c=0;c<a.length;c++)a[c]&&Ch[String(Sd[c][sd.Sa])]&&(b[c]=!0);return b}function Ql(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Sd[c]&&!Dh[String(Sd[c][sd.Sa])])return!0;return!1}function Sl(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return eh(""+c+b).href}}function Tl(a,b){return Ul()?Sl(a,b):void 0}function Ul(){var a=!1;return a};var Vl=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.remoteConfig={};this.globalConfig={};this.onSuccess=function(){};this.onFailure=function(){};this.setContainerTypeLoaded=function(){};this.getContainerTypeLoaded=function(){};this.eventId=void 0},Wl=function(a){var b=new Vl;b.eventModel=a;return b},Xl=function(a,b){a.targetConfig=b;return a},Yl=function(a,b){a.containerConfig=b;return a},Zl=function(a,b){a.remoteConfig=b;return a},$l=function(a,b){a.globalConfig=
b;return a},am=function(a,b){a.onSuccess=b;return a},bm=function(a,b){a.setContainerTypeLoaded=b;return a},cm=function(a,b){a.getContainerTypeLoaded=b;return a},dm=function(a,b){a.onFailure=b;return a};Vl.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.remoteConfig[a])return this.remoteConfig[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var em=function(a){function b(e){$a(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];$a(c,function(e){d.push(e)});return d};var fm;if(3===pe.Dc.length)fm="g";else{var gm="G";fm=gm}
var hm={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:fm,OPT:"o"},im=function(a){var b=pe.F.split("-"),c=b[0].toUpperCase(),d=hm[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===pe.Dc.length){var g="w";f="2"+g}else f="";return f+d+pe.Dc+e};var jm=function(a,b){a.addEventListener&&a.addEventListener.call(a,"message",b,!1)};var km=function(){return Mf("iPhone")&&!Mf("iPod")&&!Mf("iPad")};Mf("Opera");Mf("Trident")||Mf("MSIE");Mf("Edge");!Mf("Gecko")||-1!=Jf.toLowerCase().indexOf("webkit")&&!Mf("Edge")||Mf("Trident")||Mf("MSIE")||Mf("Edge");-1!=Jf.toLowerCase().indexOf("webkit")&&!Mf("Edge")&&Mf("Mobile");Mf("Macintosh");Mf("Windows");Mf("Linux")||Mf("CrOS");var lm=oa.navigator||null;lm&&(lm.appVersion||"").indexOf("X11");Mf("Android");km();Mf("iPad");Mf("iPod");km()||Mf("iPad")||Mf("iPod");Jf.toLowerCase().indexOf("kaios");var mm=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null};var nm=function(){};var om=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},pm=function(a,b){this.o=a;this.g=null;this.D={};this.N=0;this.J=void 0===b?500:b;this.s=null};ma(pm,nm);
var rm=function(a){return"function"===typeof a.o.__tcfapi||null!=qm(a)};
pm.prototype.addEventListener=function(a){var b={},c=Df(function(){return a(b)}),d=0;-1!==this.J&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.J));var e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=om(b),g&&0===b.internalErrorState||(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{sm(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};pm.prototype.removeEventListener=function(a){a&&a.listenerId&&sm(this,"removeEventListener",null,a.listenerId)};
var um=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var l;if(0===h)if(a.purpose&&a.vendor){var m=tm(a.vendor.consents,void 0===d?"755":d);l=m&&"1"===b&&a.purposeOneTreatment&&"DE"===a.publisherCC?!0:m&&tm(a.purpose.consents,b)}else l=!0;else l=1===h?a.purpose&&a.vendor?tm(a.purpose.legitimateInterests,
b)&&tm(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return l},tm=function(a,b){return!(!a||!a[b])},sm=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.o.__tcfapi){var e=a.o.__tcfapi;e(b,2,c,d)}else if(qm(a)){vm(a);var f=++a.N;a.D[f]=c;if(a.g){var g={};a.g.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},qm=function(a){if(a.g)return a.g;a.g=mm(a.o,"__tcfapiLocator");return a.g},vm=function(a){a.s||(a.s=function(b){try{var c;c=("string"===
typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.D[c.callId](c.returnValue,c.success)}catch(d){}},jm(a.o,a.s))};var wm=!0;var xm={1:0,3:0,4:0,7:3,9:3,10:3};function ym(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var zm=ym("",550),Am=ym("",500);function Bm(){var a=N.tcf||{};return N.tcf=a}
var Cm=function(a,b){this.s=a;this.g=b;this.o=jb();},Dm=function(a){},Em=function(a){},Km=function(){var a=Bm(),b=new pm(p,wm?3E3:-1),c=new Cm(b,a);if((Fm()?!0===p.gtag_enable_tcf_support:!1!==p.gtag_enable_tcf_support)&&!a.active&&("function"===typeof p.__tcfapi||rm(b))){a.active=!0;a.bc={};Gm();var d=null;wm?d=p.setTimeout(function(){Hm(a);Im(a);d=null},Am):a.tcString="tcunavailable";try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)Hm(a),Im(a),Dm(c);
else{var f;if(!1===e.gdprApplies)f=Jm(),b.removeEventListener(e);else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in xm)if(xm.hasOwnProperty(h))if("1"===h){var l=e,m=!0;m=void 0===m?!1:m;var n;var q=l;!1===q.gdprApplies?n=!0:(void 0===q.internalErrorState&&(q.internalErrorState=om(q)),n="error"===q.cmpStatus||0!==q.internalErrorState||"loaded"===q.cmpStatus&&("tcloaded"===q.eventStatus||"useractioncomplete"===q.eventStatus)?!0:
!1);g["1"]=n?!1===l.gdprApplies||"tcunavailable"===l.tcString||void 0===l.gdprApplies&&!m||"string"!==typeof l.tcString||!l.tcString.length?!0:um(l,"1",0):!1}else g[h]=um(e,h,xm[h]);f=g}f&&(a.tcString=e.tcString||"tcempty",a.bc=f,Im(a),Dm(c))}}),Em(c)}catch(e){d&&(clearTimeout(d),d=null),Hm(a),Im(a)}}};function Hm(a){a.type="e";a.tcString="tcunavailable";wm&&(a.bc=Jm())}function Gm(){var a={};Fg((a.ad_storage="denied",a.wait_for_update=zm,a))}
var Fm=function(){var a=!1;a=!0;return a};function Jm(){var a={},b;for(b in xm)xm.hasOwnProperty(b)&&(a[b]=!0);return a}function Im(a){var b={};Gg((b.ad_storage=a.bc["1"]?"granted":"denied",b))}
var Lm=function(){var a=Bm();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},Mm=function(){var a=Bm();return a.active?a.tcString||"":""},Nm=function(a){if(!xm.hasOwnProperty(String(a)))return!0;var b=Bm();return b.active&&b.bc?!!b.bc[String(a)]:!0};var Om=!1;function Pm(a){var b=String(p.location).split(/[?#]/)[0],c=pe.ng||p._CONSENT_MODE_SALT;return a?c?String(di(b+a+c)):"0":""}
function Qm(a){function b(r){var u;N.reported_gclid||(N.reported_gclid={});u=N.reported_gclid;var v;v=Om&&g&&(!yg()||Hg(J.C))?l+"."+(f.prefix||"_gcl")+(r?"gcu":"gcs"):l+(r?"gcu":"gcs");if(!u[v]){u[v]=!0;var w=[],y=function(D,E){E&&w.push(D+"="+encodeURIComponent(E))},x="https://www.google.com";if(yg()){var A=Hg(J.C);y("gcs",Ig());r&&y("gcu","1");N.dedupe_gclid||(N.dedupe_gclid=
""+si());y("rnd",N.dedupe_gclid);if((!l||m&&"aw.ds"!==m)&&Hg(J.C)){var z=tj("_gcl_aw");y("gclaw",z.join("."))}y("url",String(p.location).split(/[?#]/)[0]);y("dclid",Rm(d,n));!A&&d&&(x="https://pagead2.googlesyndication.com")}y("gdpr_consent",Mm());"1"===dj(!1)._up&&y("gtm_up","1");y("gclid",Rm(d,l));y("gclsrc",
m);y("gtm",im(!e));Om&&g&&Hg(J.C)&&(Ei(f||{}),y("auid",zi[Ai(f.prefix)]||""));var C=x+"/pagead/landing?"+w.join("&");kg(C)}}var c=!!a.Kd,d=!!a.xa,e=a.U,f=void 0===a.Ic?{}:a.Ic,g=void 0===a.Qc?!0:a.Qc,h=zj(),l=h.gclid||"",m=h.gclsrc,n=h.dclid||"",q=!c&&(!l||m&&"aw.ds"!==m?!1:!0),t=yg();if(q||t)t?Kg(function(){b();Hg(J.C)||Cg(function(r){return b(!0,r.Hf)},J.C)},[J.C]):b()}
function Rm(a,b){var c=a&&!Hg(J.C);return b&&c?"0":b}
var an=function(a){return!(void 0===a||null===a||0===(a+"").length)},bn=function(a,b){var c;if(2===b.da)return a("ord",Xa(1E11,1E13)),!0;if(3===b.da)return a("ord","1"),a("num",Xa(1E11,1E13)),!0;if(4===b.da)return an(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.da)c="1";else if(6===b.da)c=b.pe;else return!1;an(c)&&a("qty",c);an(b.Jc)&&a("cost",b.Jc);an(b.transactionId)&&a("ord",b.transactionId);return!0},dn=function(a,b,c){function d(A,z,C){q.hasOwnProperty(A)||(z=String(z),n.push(";"+A+"="+(C?
z:cn(z))))}var e=a.Pd,f=a.te,g=a.protocol,h=a.Td;g+=f?"//"+e+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";var l=";",m=!Hg(J.C)&&!h&&a.xa;m&&(g="https://ade.googlesyndication.com/ddm/activity",l="/",f=!1);var n=[l,"src="+cn(e),";type="+cn(a.Sd),";cat="+cn(a.Mb)],q=a.Jh||{};$a(q,function(A,z){n.push(";"+cn(A)+"="+cn(z+""))});if(bn(d,a)){an(a.bd)&&d("u",a.bd);an(a.ad)&&d("tran",a.ad);d("gtm",im());yg()&&!h&&(d("gcs",Ig()),c&&d("gcu","1"));
(function(A,z){z&&d(A,z)})("gdpr_consent",Mm());"1"===dj(!1)._up&&d("gtm_up","1");!1===a.rh&&d("npa","1");if(a.Ld){var t=void 0===a.xa?!0:!!a.xa,r=Oj("dc",a.lb,t);r&&r.length&&d("gcldc",r.join("."));var u=Oj("aw",a.lb,t);u&&u.length&&d("gclaw",u.join("."));var v=Pj(t);v&&d("gac",v);Ei({prefix:a.lb,Zb:a.Hh,domain:a.Gh,flags:a.fj});var w=zi[Ai(a.lb)];w&&d("auiddc",w)}an(a.he)&&d("prd",a.he,!0);$a(a.xe,function(A,z){d(A,z)});n.push(b||"");if(an(a.Sc)){var y=a.Sc||
"";m&&(y=fh(y));d("~oref",y)}var x=g+n.join("")+"?";f?$f(x,a.onSuccess):ag(x,a.onSuccess,a.onFailure)}else M(a.onFailure)},cn=encodeURIComponent,en=function(a,b){!yg()||a.Td?dn(a,b):Kg(function(){dn(a,b);Hg(J.C)||Cg(function(){dn(a,b,!0)},J.C)},[J.C])};var Bn=function(){var a=!0;Nm(7)&&Nm(9)&&Nm(10)||(a=!1);var b=!0;b=!1;b&&!An()&&(a=!1);return a},An=function(){var a=!0;Nm(3)&&Nm(4)||(a=!1);return a};var Zn=!1;function $n(){var a=N;return a.gcq=a.gcq||new ao}
var bo=function(a,b,c){$n().register(a,b,c)},co=function(a,b,c,d){$n().push("event",[b,a],c,d)},eo=function(a,b){$n().push("config",[a],b)},fo=function(a,b,c,d){$n().push("get",[a,b],c,d)},go=function(a){return $n().getRemoteConfig(a)},ho={},io=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.remoteConfig={};this.o=null;this.g=!1},jo=function(a,b,c,d,e){this.type=a;this.s=b;this.U=c||"";this.g=d;this.o=e},ao=function(){this.D={};this.o={};this.g=[];this.s={AW:!1,UA:!1}},
ko=function(a,b){var c=Uj(b);return a.D[c.containerId]=a.D[c.containerId]||new io},lo=function(a,b,c){if(b){var d=Uj(b);if(d&&1===ko(a,b).status){ko(a,b).status=2;var e={};wl&&(e.timeoutId=p.setTimeout(function(){Bf(38);il()},3E3));a.push("require",[e],d.containerId);ho[d.containerId]=jb();if(Xj()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=marketingClientDataLayer&cx=c",h=("http:"!=p.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=Tl(c,g)||h;Yf(l)}}}},mo=function(a,b,c,d){if(d.U){var e=ko(a,d.U),f=e.o;if(f){var g=G(c),h=G(e.targetConfig[d.U]),l=G(e.containerConfig),m=G(e.remoteConfig),n=G(a.o),q=Th("gtm.uniqueEventId"),t=Uj(d.U).prefix,r=cm(bm(dm(am($l(Zl(Yl(Xl(Wl(g),h),l),m),n),function(){
zl(q,t,"2");}),function(){zl(q,t,"3");}),function(u,v){a.s[u]=v}),function(u){return a.s[u]});try{zl(q,t,"1");f(d.U,b,d.s,r)}catch(u){zl(q,t,"4");}}}};aa=ao.prototype;
aa.register=function(a,b,c){var d=ko(this,a);if(3!==d.status){d.o=b;d.status=3;if(c){G(d.remoteConfig,c);d.remoteConfig=c}var e=Uj(a),f=ho[e.containerId];if(void 0!==f){var g=N[e.containerId].bootstrap,h=e.prefix.toUpperCase();N[e.containerId]._spx&&(h=h.toLowerCase());var l=Th("gtm.uniqueEventId"),m=h,n=jb()-g;if(wl&&!nl[l]){l!==jl&&(fl(),jl=l);var q=m+"."+Math.floor(g-f)+
"."+Math.floor(n);rl=rl?rl+","+q:"&cl="+q}delete ho[e.containerId]}this.flush()}};aa.push=function(a,b,c,d){var e=Math.floor(jb()/1E3);lo(this,c,b[0][J.Ra]||this.o[J.Ra]);Zn&&c&&ko(this,c).g&&(d=!1);this.g.push(new jo(a,e,c,b,d));d||this.flush()};aa.insert=function(a,b,c){var d=Math.floor(jb()/1E3);0<this.g.length?this.g.splice(1,0,new jo(a,d,c,b,!1)):this.g.push(new jo(a,d,c,b,!1))};
aa.flush=function(a){for(var b=this,c=[],d=!1;this.g.length;){var e=this.g[0];if(e.o)Zn?!e.U||ko(this,e.U).g?(e.o=!1,this.g.push(e)):c.push(e):(e.o=!1,this.g.push(e));else switch(e.type){case "require":if(3!==ko(this,e.U).status&&!a){Zn&&this.g.push.apply(this.g,c);return}wl&&p.clearTimeout(e.g[0].timeoutId);break;case "set":$a(e.g[0],function(t,r){G(ub(t,r),b.o)});break;case "config":var f=e.g[0],g=!!f[J.yc];delete f[J.yc];var h=ko(this,e.U),l=Uj(e.U),m=l.containerId===l.id;g||(m?h.containerConfig=
{}:h.targetConfig[e.U]={});h.g&&g||mo(this,J.ja,f,e);h.g=!0;delete f[J.Hb];m?G(f,h.containerConfig):G(f,h.targetConfig[e.U]);Zn&&(d=!0);break;case "event":mo(this,e.g[1],e.g[0],e);break;case "get":var n={},q=(n[J.Ea]=e.g[0],n[J.Da]=e.g[1],n);mo(this,J.Oa,q,e)}this.g.shift()}Zn&&(this.g.push.apply(this.g,c),d&&this.flush())};aa.getRemoteConfig=function(a){return ko(this,a).remoteConfig};function no(a,b){var c=this;};function oo(a,b,c){};function po(a,b,c,d){};function qo(a){H(F(this),["callback:!Fn"],arguments);nf(this,"read_event_metadata");var b=this.g.g;if(!b)throw Error("invalid program state");if(!Sa(b.eventId)){console.warn("addEventCallback called outside of the context of an event, ignoring callback.");return}b.Nb(Pb(a));};var ro=function(a,b,c){function d(f,g){var h=f[g];h=lg(f,g);return h}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||dg(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},so=function(a){N.hasOwnProperty("autoEventsSettings")||(N.autoEventsSettings={});var b=N.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},to=function(a,b,c){so(a)[b]=c},uo=function(a,b,c,d){var e=so(a),f=kb(e,b,d);e[b]=c(f)},vo=function(a,b,c){var d=so(a);return kb(d,b,c)};var wo={},xo=[];
var Eo=function(a,b){};

function Ho(a,b){};var Io=/^\s*$/,Jo,Ko=!1;
function Vo(a,b){}function Wo(a,b,c){};var Xo=!!p.MutationObserver,Yo=void 0,Zo=function(a){if(!Yo){var b=function(){var c=K.body;if(c)if(Xo)(new MutationObserver(function(){for(var e=0;e<Yo.length;e++)M(Yo[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;bg(c,"DOMNodeInserted",function(){d||(d=!0,M(function(){d=!1;for(var e=0;e<Yo.length;e++)M(Yo[e])}))})}};Yo=[];K.body?b():M(b)}Yo.push(a)};var ap=["www.youtube.com","www.youtube-nocookie.com"],bp,cp=!1,dp=0;
function np(a,b){}function op(a,b){H(F(this),["toPath:!string","fromPath:!string"],arguments);nf(this,"access_globals","write",a);nf(this,"access_globals","read",b);var c=a.split("."),d=b.split("."),e=[];var f=tb(c,e),g=tb(d,e);if(void 0===f||void 0===g)return!1;f[c[c.length-1]]=g[d[d.length-1]];
return!0};function pp(a,b,c){};function qp(a,b){var c;H(F(this),["path:!string"],[a]);nf(this,"access_globals","execute",a);for(var d=a.split("."),e=p,f=e[d[0]],g=1;f&&g<d.length;g++){e=f;f=f[d[g]];}if("function"!==Kb(f))return;var h=!1;
for(var l=[],m=1;m<arguments.length;m++)l.push(Pb(arguments[m],this.g,h));var n=(0,this.g.N)(f,e,l);c=Ob(n,this.g);void 0===c&&void 0!==n&&Bf(45);return c};function rp(a){};function sp(a){};var tp=!1,up=[];function vp(){if(!tp){tp=!0;for(var a=0;a<up.length;a++)M(up[a])}}var wp=function(a){tp?M(a):up.push(a)};function xp(a){H(F(this),["listener:!Fn"],arguments);nf(this,"process_dom_events","window","load");wp(Pb(a))};function yp(a){var b;return b};function zp(a,b){var c;if(H(F(this),["key:!string","dataLayerVersion:?number"],arguments),nf(this,"read_data_layer",a),2!==(b||2))c=Th(a,1);else{var d=[];c=Vh(a,d)}var e=!1;var f=Ob(c,this.g,e);void 0===f&&void 0!==c&&Bf(45);return f};function Ap(a){var b;H(F(this),["path:!string"],arguments);nf(this,"access_globals","read",a);var c=a.split("."),d=p,e;for(e=0;e<c.length-1;e++){d=d[c[e]];if(null==d)return;}b=d[c[e]];var f=!1;var g=Ob(b,this.g,f);void 0===g&&void 0!==b&&Bf(45);return g};function Bp(a,b){var c=null,d=!1;
return Ob(c,this.g,d)};function Cp(a){var b;H(F(this),["path:!string"],arguments);nf(this,"access_globals","readwrite",a);var c=a.split("."),d=[];var e=tb(c,d),f=c[c.length-1];if(void 0===e)throw Error("Path "+a+" does not exist.");var g=e[f];void 0===g&&(g=[],e[f]=g);b=function(){if(!Ra(g.push))throw Error("Object at "+a+" in window is not an array.");
g.push.apply(g,Array.prototype.slice.call(arguments,0))};var h=!1;return Ob(b,this.g,h)};var Dp=function(a){var b;return b};function Ep(a,b){b=void 0===b?!0:b;var c;return c};function Fp(a){var b=null;return b};function Gp(a,b){var c;return c};function Hp(a,b){var c;return c};function Ip(a){var b="";return b};function Jp(a,b){var c;return c};function Kp(a){var b="";H(F(this),["component:?string"],arguments),nf(this,"get_url",a),b=ch(eh(p.location.href),a);return b};function Lp(){nf(this,"get_user_agent");return p.navigator.userAgent};function Mp(a,b){};var Np={};
function Op(a,b,c,d){H(F(this),["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);nf(this,"inject_script",a);var e=this.g,f=function(){b instanceof wb&&b.s(e)},g=function(){c instanceof wb&&c.s(e)};if(!d){Yf(a,f,g);return}var h=d;Np[h]?(Np[h].onSuccess.push(f),Np[h].onFailure.push(g)):(Np[h]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=Np[h].onSuccess,m=0;m<l.length;m++)M(l[m]);l.push=function(n){M(n);return 0}},
g=function(){for(var l=Np[h].onFailure,m=0;m<l.length;m++)M(l[m]);Np[h]=null},Yf(a,f,g));};function Pp(a){var b=!0;return b};var Qp=function(){return!1},Rp={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};function Sp(){try{nf(this,"logging")}catch(c){return}if(!console)return;for(var a=Array.prototype.slice.call(arguments,0),b=0;b<a.length;b++)a[b]=Pb(a[b],this.g);console.log.apply(console,a);};function Tp(a){var b=void 0;return b};function Up(a,b){var c=!1;H(F(this),["permission:!string"],[a]);for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;++e)d[e]=Pb(d[e],this.g);d.unshift(this);try{nf.apply(null,d),c=!0}catch(f){return!1}return c};function Vp(){var a="";return a};function Wp(){var a="";return a};function Xp(a,b,c,d){d=void 0===d?!1:d;};function Yp(a,b,c){H(F(this),["url:!string","onSuccess:?Fn","onFailure:?Fn"],arguments);nf(this,"send_pixel",a);var d=this.g;ag(a,function(){b instanceof wb&&b.s(d)},function(){c instanceof wb&&c.s(d)});};function Zp(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};function $p(a){H(F(this),["consentSettings:!DustMap"],arguments);for(var b=a.Ub(),c=b.length(),d=0;d<c;d++){var e=b.get(d);e!==J.Be&&nf(this,"access_consent",e,"write")}Fg(Pb(a))};function aq(a,b,c){H(F(this),["path:!string","value:?*","overrideExisting:?boolean"],arguments);nf(this,"access_globals","readwrite",a);var d=!1;var e=a.split("."),f=p,g;for(g=0;g<e.length-1;g++){f=f[e[g]];if(void 0===f)return!1;}if(void 0===
f[e[g]]||c)return f[e[g]]=Pb(b,this.g,d),!0;return!1};function bq(a,b,c){}
;var cq=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};function dq(a,b,c,d){var e=this;};function eq(a,b,c){}
;var fq={},gq={};fq.getItem=function(a){var b=null;return b};
fq.setItem=function(a,b){};
fq.removeItem=function(a){};fq.clear=function(){};var hq=function(a){var b;return b};function iq(a){H(F(this),["consentSettings:!DustMap"],arguments);var b=Pb(a),c;for(c in b)b.hasOwnProperty(c)&&nf(this,"access_consent",c,"write");Gg(b)};var pd=function(){var a=new yf;Xj()?(a.add("injectHiddenIframe",Qa),a.add("injectScript",Qa)):(a.add("injectHiddenIframe",Mp),a.add("injectScript",Op));var b=Yp;a.add("Math",ff());a.add("TestHelper",Af());a.add("addEventCallback",qo);a.add("aliasInWindow",op);a.add("assertApi",bf);a.add("assertThat",cf);a.add("callInWindow",
qp);a.add("callLater",rp);a.add("copyFromDataLayer",zp);a.add("copyFromWindow",Ap);a.add("createArgumentsQueue",Bp);a.add("createQueue",Cp);a.add("decodeUri",gf);a.add("decodeUriComponent",hf);a.add("encodeUri",jf);a.add("encodeUriComponent",kf);a.add("fail",lf);a.add("fromBase64",Dp,!("atob"in p));a.add("generateRandom",mf);a.add("getContainerVersion",of);a.add("getCookieValues",Ep);a.add("getQueryParameters",Gp);a.add("getReferrerQueryParameters",Hp);a.add("getReferrerUrl",Ip);a.add("getTimestamp",
pf);a.add("getTimestampMillis",pf);a.add("getType",qf);a.add("getUrl",Kp);a.add("localStorage",Rp,!Qp());a.add("logToConsole",Sp);a.add("makeInteger",sf);a.add("makeNumber",tf);a.add("makeString",uf);a.add("makeTableMap",vf);a.add("mock",xf);a.add("queryPermission",Up);a.add("readCharacterSet",Vp);a.add("readTitle",Wp);a.add("sendPixel",b);a.add("setCookie",Zp);a.add("setInWindow",aq);a.add("sha256",dq);a.add("templateStorage",fq);a.add("toBase64",hq,!("btoa"in p));a.add("JSON",rf(function(c){var d=this.g.g;d&&d.log.call(this,"error",c)}));a.add("parseUrl",Tp);

return function(c){var d;if(a.g.hasOwnProperty(c))d=a.get(c,this);else{var e;if(e=a.o.hasOwnProperty(c)){var f=!1,g=this.g.g;if(g){var h=g.Tb();if(h){0!==h.indexOf("__cvt_")&&(f=!0);
}}e=f}if(e)d=a.o.hasOwnProperty(c)?a.o[c]:void 0;else throw Error(c+" is not a valid API name.");}return d}};var nd,te;
function jq(){var a=data.runtime||[],b=data.runtime_lines;nd=new id;kq();Od=function(e,f,g){lq(f);var h=new Eb;$a(f,function(r,u){var v=Ob(u);void 0===v&&void 0!==u&&Bf(44);h.set(r,v)});nd.g.g.J=ge();var l={uh:ue(e),eventId:void 0!==g?g.id:void 0,Nb:void 0!==g?function(r){return g.Ia.Nb(r)}:void 0,Tb:function(){return e},log:function(){}};if(Bl()){var m=
Cl(),n=void 0,q=void 0;l.ia={Ob:{},nb:function(r,u,v){1===u&&(n=r);7===u&&(q=v);m(r,u,v)},ae:wf()};l.log=function(r,u){if(n){var v=Array.prototype.slice.call(arguments,1);m(n,4,{level:r,source:q,message:v})}}}var t=od(l,[e,h]);nd.g.g.J=void 0;t instanceof ya&&"return"===t.g&&(t=t.o);return Pb(t)};qd();for(var c=0;c<a.length;c++){var d=a[c];if(!Ta(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&de(d,b[c]);nd.Mc(d)}}
function lq(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ra(b)&&(a.gtmOnSuccess=function(){M(b)});Ra(c)&&(a.gtmOnFailure=function(){M(c)})}function kq(){var a=nd;N.SANDBOXED_JS_SEMAPHORE=N.SANDBOXED_JS_SEMAPHORE||0;rd(a,function(b,c,d){N.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{N.SANDBOXED_JS_SEMAPHORE--}})}function mq(a){void 0!==a&&$a(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Mh[e]=Mh[e]||[];Mh[e].push(b)}})};var nq="HA GF G UA AW DC".split(" "),oq=!1,pq={},qq=!1;function rq(a,b){var c={event:a};b&&(c.eventModel=G(b),b[J.md]&&(c.eventCallback=b[J.md]),b[J.uc]&&(c.eventTimeout=b[J.uc]));return c}function sq(){return oq}
var vq={config:function(a){var b;return b},consent:function(a){function b(){sq()&&
G(a[2],{subcommand:a[1]})}if(3===a.length){Bf(39);var c=Nh(),d=a[1];"default"===d?(b(),Fg(a[2])):"update"===d&&(b(),Gg(a[2],c))}},event:function(a){var b=a[1];if(!(2>a.length)&&k(b)){var c;if(2<a.length){if(!Mb(a[2])&&void 0!=a[2]||3<a.length)return;c=a[2]}var d=rq(b,c);return d}},get:function(a){},js:function(a){if(2==a.length&&a[1].getTime)return qq=!0,sq(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=te.o;d.g[b]?d.g[b].push(c):d.g[b]=[c]}},set:function(a){var b;2==a.length&&Mb(a[1])?b=G(a[1]):3==a.length&&k(a[1])&&(b={},Mb(a[2])||Ta(a[2])?b[a[1]]=
G(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},wq={policy:!0};var xq=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},zq=function(a){var b=yq(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Qq=function(a){if(Pq(a))return a;this.g=a};Qq.prototype.Vh=function(){return this.g};var Pq=function(a){return!a||"object"!==Kb(a)||Mb(a)?!1:"getUntrustedUpdateValue"in a};Qq.prototype.getUntrustedUpdateValue=Qq.prototype.Vh;var Rq=[],Sq=!1,Tq=!1,Uq=!1,Vq=function(a){return p["marketingClientDataLayer"].push(a)},Wq=function(a){var b=N["marketingClientDataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Xq(a){var b=a._clear;$a(a,function(d,e){"_clear"!==d&&(b&&Wh(d,void 0),Wh(d,e))});Ih||(Ih=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=Nh(),a["gtm.uniqueEventId"]=c,Wh("gtm.uniqueEventId",c));return Rl(a)}function Yq(){var a=Rq[0];if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if(ab(a)){var b=a[0];if("config"===b||"event"===b||"js"===b)return!0}return!1}
function Zq(){for(var a=!1;!Uq&&0<Rq.length;){var b=!1;if(b&&!Tq&&Yq()){var c={};Rq.unshift((c.event=
"gtm.init",c));Tq=!0}var d=!1;if(d&&!Sq&&Yq()){var e={};Rq.unshift((e.event="gtm.init_consent",e));Sq=!0}Uq=!0;delete Qh.eventModel;Sh();var f=Rq.shift();if(null!=f){var g=Pq(f);
if(g){var h=f;f=Pq(h)?h.getUntrustedUpdateValue():void 0;for(var l=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],m=0;m<l.length;m++){var n=l[m],q=Th(n,1);if(Ta(q)||Mb(q))q=G(q);Rh[n]=q}}try{if(Ra(f))try{f.call(Uh)}catch(A){}else if(Ta(f)){var t=f;if(k(t[0])){var r=t[0].split("."),u=r.pop(),v=t.slice(1),w=Th(r.join("."),2);if(void 0!==w&&null!==w)try{w[u].apply(w,v)}catch(A){}}}else{if(ab(f)){a:{var y=f;if(y.length&&k(y[0])){var x=vq[y[0]];if(x&&(!g||!wq[y[0]])){f=
x(y);break a}}f=void 0}if(!f){Uq=!1;continue}}a=Xq(f)||a}}finally{g&&Sh(!0)}}Uq=!1}return!a}function $q(){var a=Zq();try{xq(p["marketingClientDataLayer"],pe.F)}catch(b){}return a}
var br=function(){var a=Wf("marketingClientDataLayer",[]),b=Wf("google_tag_manager",{});b=b["marketingClientDataLayer"]=b["marketingClientDataLayer"]||{};Gk(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});wp(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<N.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new Qq(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);Rq.push.apply(Rq,e);if(300<
this.length)for(Bf(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Zq()&&h};var d=a.slice(0);Rq.push.apply(Rq,d);ar()&&M($q)},ar=function(){var a=!0;return a};var cr={};cr.zc=new String("undefined");
var dr=function(a){this.g=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===cr.zc?b:a[d]);return c.join("")}};dr.prototype.toString=function(){return this.g("undefined")};dr.prototype.valueOf=dr.prototype.toString;cr.jh=dr;cr.Cd={};cr.Ih=function(a){return new dr(a)};var er={};cr.Ci=function(a,b){var c=Nh();er[c]=[a,b];return c};cr.Kf=function(a){var b=a?0:1;return function(c){var d=er[c];if(d&&"function"===typeof d[b])d[b]();er[c]=void 0}};cr.bi=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};cr.xi=function(a){if(a===cr.zc)return a;var b=Nh();cr.Cd[b]=a;return'google_tag_manager["'+pe.F+'"].macro('+b+")"};cr.mi=function(a,b,c){a instanceof cr.jh&&(a=a.g(cr.Ci(b,c)),b=Qa);return{Vd:a,onSuccess:b}};var fr=["input","select","textarea"],gr=["button","hidden","image","reset","submit"],hr=function(a){var b=a.tagName.toLowerCase();return!Va(fr,function(c){return c===b})||"input"===b&&Va(gr,function(c){return c===a.type.toLowerCase()})?!1:!0},ir=function(a){return a.form?a.form.tagName?a.form:K.getElementById(a.form):gg(a,["form"],100)},jr=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(hr(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var ur=p.clearTimeout,vr=p.setTimeout,O=function(a,b,c){if(Xj()){b&&M(b)}else return Yf(a,b,c)},wr=function(){return new Date},xr=function(){return p.location.href},yr=function(a){return ch(eh(a),"fragment")},zr=function(a){return dh(eh(a))},Ar=function(a,b){return Th(a,b||2)},Br=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Vq(a)):d=Vq(a);return d},Cr=function(a,b){p[a]=b},S=function(a,b,c){b&&
(void 0===p[a]||c&&!p[a])&&(p[a]=b);return p[a]},Dr=function(a,b,c){return gi(a,b,void 0===c?!0:!!c)},Er=function(a,b,c){return 0===pi(a,b,c)},Fr=function(a,b){if(Xj()){b&&M(b)}else $f(a,b)},Gr=function(a){return!!vo(a,"init",!1)},Hr=function(a){to(a,"init",!0)},Ir=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Gh;c+="?id="+encodeURIComponent(a)+"&l=marketingClientDataLayer";O(Zj("https://","http://",c))},Jr=function(a,
b){var c=a[b];c=lg(a,b);return c},Kr=function(a,b,c){wl&&(Rb(a)||Al(c,b,a))};
var Lr=cr.mi;function hs(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var is=new Ya;function js(a,b){function c(g){var h=eh(g),l=ch(h,"protocol"),m=ch(h,"host",!0),n=ch(h,"port"),q=ch(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function ks(a){return ls(a)?1:0}
function ls(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ta(c)){for(var d=0;d<c.length;d++){var e=G(a,{});G({arg1:c[d],any_of:void 0},e);if(ks(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(r){}}f=!1}return f;case "_ew":return hs(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=Ua(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var m;var n=a.ignore_case?"i":void 0;try{var q=String(c)+n,t=is.get(q);t||(t=new RegExp(c,n),is.set(q,t));m=t.test(b)}catch(r){m=!1}return m;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return js(b,c)}return!1};var ms=encodeURI,V=encodeURIComponent,ns=ag;var os=function(a,b){if(!a)return!1;var c=ch(eh(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var ps=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};function Vt(){return p.gaGlobal=p.gaGlobal||{}}var Wt=function(){var a=Vt();a.hid=a.hid||Xa();return a.hid},Xt=function(a,b){var c=Vt();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var Fu=window,Gu=document,Hu=function(a){var b=Fu._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Fu["ga-disable-"+a])return!0;try{var c=Fu.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=ei("AMP_TOKEN",String(Gu.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Gu.getElementById("__gaOptOutExtension")?!0:!1};var Iu={};function Ku(a){delete a.eventModel[J.Hb];Mu(a.eventModel)}var Mu=function(a){$a(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[J.ra]||{};$a(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Pu=function(a,b,c){co(b,c,a)},Qu=function(a,b,c){co(b,c,a,!0)},Wu=function(a,b){};
function Ru(a,b){}var X={h:{}};X.h.ctv=["google"],function(){(function(a){X.__ctv=a;X.__ctv.i="ctv";X.__ctv.m=!0;X.__ctv.priorityOverride=0})(function(){return"132"})}();
X.h.send_pixel=["google"],function(){function a(b,c){return{url:c}}(function(b){X.__send_pixel=b;X.__send_pixel.i="send_pixel";X.__send_pixel.m=!0;X.__send_pixel.priorityOverride=0})(function(b){var c=b.vtp_allowedUrls||"specific",d=b.vtp_urls||[],e=b.vtp_createPermissionError;return{assert:function(f,g){if(!k(g))throw e(f,{},"URL must be a string.");try{if("any"===c&&Se(eh(g))||"specific"===c&&Te(eh(g),d))return}catch(h){throw e(f,{},"Invalid URL filter.");}throw e(f,{},"Prohibited URL: "+g+".");
},O:a}})}();

X.h.jsm=["customScripts"],function(){(function(a){X.__jsm=a;X.__jsm.i="jsm";X.__jsm.m=!0;X.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=S("google_tag_manager");var d=c&&c.e&&c.e(b);Kr(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();X.h.read_container_data=["google"],function(){(function(a){X.__read_container_data=a;X.__read_container_data.i="read_container_data";X.__read_container_data.m=!0;X.__read_container_data.priorityOverride=0})(function(){return{assert:function(){},O:function(){return{}}}})}();

X.h.flc=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;en(b,c)}(function(b){X.__flc=b;X.__flc.i="flc";X.__flc.m=!0;X.__flc.priorityOverride=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=ps(b.vtp_customVariable||[],"key","value")||{},e={Mb:b.vtp_activityTag,Ld:c,lb:b.vtp_conversionCookiePrefix||void 0,Jc:void 0,da:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,Pd:b.vtp_advertiserId,Sd:b.vtp_groupTag,onFailure:b.vtp_gtmOnFailure,onSuccess:b.vtp_gtmOnSuccess,
Sc:b.vtp_useImageTag?void 0:b.vtp_url,protocol:"",pe:void 0,te:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,ad:b.vtp_transactionVariable,transactionId:void 0,bd:b.vtp_userVariable,xe:d},f=!1;var g=!(Hg(J.C)||f)&&void 0!=Ar(J.P)&&!1!==Ar(J.P);e.xa=g;if(b.vtp_enableAttribution){var h=b.vtp_attributionFields||[];if(h.length){O("//www.gstatic.com/attribution/collection/attributiontools.js",
function(){a(e,S("google_attr").build([ps(h,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();
X.h.sp=["google"],function(){(function(a){X.__sp=a;X.__sp.i="sp";X.__sp.m=!0;X.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure,d=function(){var g=S("google_trackConversion");if(Ra(g)){var h={};"DATA_LAYER"==a.vtp_customParamsFormat?h=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(h=ps(a.vtp_customParams,
"key","value"));var l={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:h,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:im()};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(h.event=a.vtp_eventName),a.vtp_eventValue&&(l.google_conversion_value=a.vtp_eventValue),a.vtp_eventItems&&(l.google_gtag_event_data={items:a.vtp_eventItems}));a.vtp_rdp&&(l.google_restricted_data_processing=!0);a.vtp_userId&&(l.google_user_id=
a.vtp_userId);var m=Mm();(l.google_additional_params=l.google_additional_params||{}).gdpr_consent=m;g(l)||c()}else c()},e=function(){O(b,d,c)},f=!1;yg()&&!f?Kg(function(){Hg(J.C)?e():Cg(e,J.C)},[J.C]):(Nk(),e())})}();X.h.c=["google"],function(){(function(a){X.__c=a;X.__c.i="c";X.__c.m=!0;X.__c.priorityOverride=0})(function(a){Kr(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
X.h.e=["google"],function(){(function(a){X.__e=a;X.__e.i="e";X.__e.m=!0;X.__e.priorityOverride=0})(function(a){return String(Yh(a.vtp_gtmEventId,"event"))})}();
X.h.f=["google"],function(){(function(a){X.__f=a;X.__f.i="f";X.__f.m=!0;X.__f.priorityOverride=0})(function(a){var b=Ar("gtm.referrer",1)||K.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?ch(eh(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):zr(String(b)):String(b)})}();

X.h.fls=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;en(b,c)}(function(b){X.__fls=b;X.__fls.i="fls";X.__fls.m=!0;X.__fls.priorityOverride=0})(function(b){var c;if(b.vtp_enableProductReporting){var d=function(r){r=r||[];for(var u=[],v=[["i","id"],["p","price"],["q","quantity"],["c","country"],["l","language"],["a","accountId"]],w=0;w<r.length;w++)for(var y=0;y<v.length;y++){var x=v[y],A=r[w][x[1]];void 0!==A&&u.push(x[0]+
(w+1)+":"+V(A))}return u.join("|")};switch(b.vtp_dataSource){case "DATA_LAYER":c=d(Ar("ecommerce.purchase.products"));break;case "JSON":c=d(b.vtp_productData);break;case "STRING":for(var e=(b.vtp_productData||"").split("|"),f=0;f<e.length;f++){var g=e[f].split(":");g[1]=g[1]&&V(g[1])||"";e[f]=g.join(":")}c=e.join("|")}}var h=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,l=ps(b.vtp_customVariable||
[],"key","value")||{},m={Mb:b.vtp_activityTag,Ld:h,lb:b.vtp_conversionCookiePrefix||void 0,Jc:b.vtp_revenue,da:"ITEM_SOLD"===b.vtp_countingMethod?6:5,Pd:b.vtp_advertiserId,Sd:b.vtp_groupTag,onFailure:b.vtp_gtmOnFailure,onSuccess:b.vtp_gtmOnSuccess,Sc:b.vtp_useImageTag?void 0:b.vtp_url,he:c,protocol:"",pe:b.vtp_quantity,te:!b.vtp_useImageTag,ad:b.vtp_transactionVariable,transactionId:b.vtp_orderId,bd:b.vtp_userVariable,xe:l},n=!1;var q=!(Hg(J.C)||n)&&void 0!=Ar(J.P)&&!1!==Ar(J.P);m.xa=q;if(b.vtp_enableAttribution){var t=b.vtp_attributionFields||[];if(t.length){O("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(m,S("google_attr").build([ps(t,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(m)})}();
X.h.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){X.__access_globals=b;X.__access_globals.i="access_globals";X.__access_globals.m=!0;X.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(n,q,t){if(!k(t))throw d(n,{},"Key must be a string.");if("read"===q){if(-1<Ua(e,t))return}else if("write"===q){if(-1<Ua(f,t))return}else if("readwrite"===q){if(-1<Ua(f,t)&&-1<Ua(e,t))return}else if("execute"===q){if(-1<Ua(g,t))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+q);throw d(n,{},"Prohibited "+q+" on global variable: "+
t+".");},O:a}})}();X.h.r=["google"],function(){(function(a){X.__r=a;X.__r.i="r";X.__r.m=!0;X.__r.priorityOverride=0})(function(a){return Xa(a.vtp_min,a.vtp_max)})}();
X.h.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){X.__u=b;X.__u.i="u";X.__u.m=!0;X.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Ar("gtm.url",1))||xr();var d=b[a("vtp_component")];if(!d||"URL"==d)return zr(String(c));var e=eh(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Ta(h)?m=h:m=String(h).replace(/\s+/g,
"").split(","):m=[String(h)];for(var n=0;n<m.length;n++){var q=ch(e,"QUERY",void 0,void 0,m[n]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=ch(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
X.h.v=["google"],function(){(function(a){X.__v=a;X.__v.i="v";X.__v.m=!0;X.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Ar(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;Kr(d,"v",a.vtp_gtmEventId);return d})}();
X.h.ua=["google"],function(){function a(q){return Hg(q)}function b(q,t){var r=!1;if(yg()&&!r&&!e[q]){var u=function(){var v=Sk(),w="gtm"+Nh(),y=m(t),x={name:w};l(y,x,!0);v("create",q,x);v(function(){v.remove(w)})};Cg(u,J.K);Cg(u,J.C);e[q]=!0}}var c,d={},e={},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,
allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0,_useUp:!0,_cs:!0},g={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},h={urlPassthrough:!0},
l=function(q,t,r){var u=0;if(q)for(var v in q)if(!h[v]&&q.hasOwnProperty(v)&&(r&&f[v]||!r&&void 0===f[v])){var w=g[v]?gb(q[v]):q[v];"anonymizeIp"!=v||w||(w=void 0);t[v]=w;u++}return u},m=function(q){var t={};q.vtp_gaSettings&&G(ps(q.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),t);G(ps(q.vtp_fieldsToSet,"fieldName","value"),t);Hg(J.K)||(t.storage="none");Hg(J.C)||(t.allowAdFeatures=!1,t.storeGac=!1);Bn()||(t.allowAdFeatures=!1);An()||(t.allowAdPersonalizationSignals=!1);q.vtp_transportUrl&&
(t._x_19=q.vtp_transportUrl);
return t},n=function(q){function t(na,Y){void 0!==Y&&E("set",na,Y)}var r={},u={},v={},w={};if(q.vtp_gaSettings){var y=q.vtp_gaSettings;G(ps(y.vtp_contentGroup,"index","group"),u);G(ps(y.vtp_dimension,"index","dimension"),v);G(ps(y.vtp_metric,"index","metric"),w);var x=G(y);x.vtp_fieldsToSet=void 0;x.vtp_contentGroup=void 0;x.vtp_dimension=void 0;x.vtp_metric=void 0;q=G(q,x)}G(ps(q.vtp_contentGroup,"index","group"),u);G(ps(q.vtp_dimension,"index","dimension"),v);G(ps(q.vtp_metric,"index","metric"),
w);var A=m(q),z=Uk(q.vtp_functionName);if(Ra(z)){var C="",D="";q.vtp_setTrackerName&&"string"==typeof q.vtp_trackerName?""!==q.vtp_trackerName&&(D=q.vtp_trackerName,C=D+"."):(D="gtm"+Nh(),C=D+".");var E=function(na){var Y=[].slice.call(arguments,0);Y[0]=C+Y[0];z.apply(window,Y)},I=function(na,Y){return void 0===Y?Y:na(Y)},P=function(na,Y){if(Y)for(var Wa in Y)Y.hasOwnProperty(Wa)&&E("set",na+Wa,Y[Wa])},R=function(){var na={transaction_id:"id",
affiliation:"affiliation",value:"revenue",tax:"tax",shipping:"shipping",coupon:"coupon",item_list_name:"list"},Y={},Wa=(Y[J.gd]="click",Y[J.Ba]="detail",Y[J.$a]="add",Y[J.ab]="remove",Y[J.Na]="checkout",Y[J.oa]="purchase",Y[J.cb]="refund",Y),bc={item_id:"id",item_name:"name",item_list_name:"list",item_brand:"brand",item_category:"category",item_variant:"variant",index:"position",promotion_id:"id",promotion_name:"name",creative_name:"creative",creative_slot:"position"},cc=function(db,lb){for(var eb in db)na.hasOwnProperty(eb)&&
(db[lb]=db[lb]||{},db[lb].actionField=db[lb].actionField||{},db[lb].actionField[na[eb]]=db[eb])},Cb=function(db){for(var lb=[],eb={},mb=0;mb<db.length;eb={vb:eb.vb},mb++)eb.vb={},$a(db[mb],function(Sb){return function(Lc,ig){bc.hasOwnProperty(Lc)?Sb.vb[bc[Lc]]=ig:Sb.vb[Lc]=ig}}(eb)),lb.push(eb.vb);return lb},bb=function(db,lb,eb){if(!Mb(lb))return!1;for(var mb=kb(Object(lb),eb,[]),Sb=0;mb&&Sb<mb.length;Sb++)E(db,mb[Sb]);return!!mb&&0<mb.length},U;if(q.vtp_useEcommerceDataLayer){var rb=!1;q.vtp_useGA4SchemaForEcommerce&&
(U=Yh(q.vtp_gtmEventId,"eventModel"),rb=!!U);rb||(U=Ar("ecommerce",1))}else q.vtp_ecommerceMacroData&&(U=q.vtp_ecommerceMacroData.ecommerce,!U&&q.vtp_useGA4SchemaForEcommerce&&(U=q.vtp_ecommerceMacroData));if(!Mb(U))return;U=Object(U);if(q.vtp_useGA4SchemaForEcommerce){U=G(U);U.currencyCode=U.currencyCode||U.currency;var Db=String(Yh(q.vtp_gtmEventId,
"event"));if("view_item_list"===Db&&!U.impressions&&U.items)U.impressions=Cb(U.items);else if("view_promotion"===Db&&!U.promoView&&U.items)U.promoView={},U.promoView.promotions=Cb(U.items);else if("select_promotion"===Db&&!U.promoClick)U.items&&(U.promoClick={},U.promoClick.promotions=Cb(U.items)),cc(U,"promoClick");else if(Wa.hasOwnProperty(Db)){var wc=Wa[Db];U[wc]||(U.items&&(U[wc]={},U[wc].products=Cb(U.items)),cc(U,wc))}}var Je=kb(A,"currencyCode",U.currencyCode);void 0!==Je&&E("set","&cu",Je);
bb("ec:addImpression",U,"impressions");if(bb("ec:addPromo",U[U.promoClick?"promoClick":"promoView"],"promotions")&&U.promoClick){E("ec:setAction","promo_click",U.promoClick.actionField);return}for(var kd="detail checkout checkout_option click add remove purchase refund".split(" "),hg="refund purchase remove checkout checkout_option add click detail".split(" "),Kc=0;Kc<kd.length;Kc++){var ld=U[kd[Kc]];if(ld){bb("ec:addProduct",ld,"products");E("ec:setAction",kd[Kc],ld.actionField);if(wl)for(var md=
0;md<hg.length;md++){var xc=U[hg[md]];if(xc){xc!==ld&&Bf(13);break}}break}}},ca={name:D};l(A,ca,!0);var sa=q.vtp_trackingId||r.trackingId;z("create",sa,ca);E("set","&gtm",im(!0));var Q=!1;
yg()&&!Q&&(E("set","&gcs",Ig()),b(sa,q));A._x_19&&(null==Vf&&delete A._x_19,A._x_20&&!d[D]&&(d[D]=!0,z(Zk(D,String(A._x_20)))));q.vtp_enableRecaptcha&&E("require","recaptcha","recaptcha.js");(function(na,Y){void 0!==q[Y]&&E("set",na,q[Y])})("nonInteraction","vtp_nonInteraction");P("contentGroup",u);P("dimension",v);P("metric",w);var L={};l(A,L,!1)&&E("set",L);var W;
q.vtp_enableLinkId&&E("require","linkid","linkid.js");E("set","hitCallback",function(){var na=A&&A.hitCallback;Ra(na)&&na();q.vtp_gtmOnSuccess()});var Z=function(na,Y){return void 0===q[na]?r[Y]:q[na]};if("TRACK_EVENT"==q.vtp_trackType){q.vtp_enableEcommerce&&(E("require","ec","ec.js"),R());var ua={hitType:"event",eventCategory:String(Z("vtp_eventCategory","category")),eventAction:String(Z("vtp_eventAction","action")),eventLabel:I(String,
Z("vtp_eventLabel","label")),eventValue:I(fb,Z("vtp_eventValue","value"))};l(W,ua,!1);E("send",ua);}else if("TRACK_SOCIAL"==q.vtp_trackType){}else if("TRACK_TRANSACTION"==
q.vtp_trackType){}else if("TRACK_TIMING"==q.vtp_trackType){}else if("DECORATE_LINK"==
q.vtp_trackType){}else if("DECORATE_FORM"==q.vtp_trackType){}else if("TRACK_DATA"==q.vtp_trackType){}else{q.vtp_enableEcommerce&&
(E("require","ec","ec.js"),R());if(q.vtp_doubleClick||"DISPLAY_FEATURES"==q.vtp_advertisingFeaturesType){var Pa="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");E("require","displayfeatures",void 0,{cookieName:Pa})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==q.vtp_advertisingFeaturesType){var zb="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");E("require","adfeatures",{cookieName:zb})}W?E("send","pageview",W):E("send","pageview");gb(A.urlPassthrough)&&Wk(C)}if(!c){var pb=q.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";q.vtp_useInternalVersion&&!q.vtp_useDebugVersion&&(pb="internal/"+pb);c=!0;var Nb=Tl(A._x_19,"/analytics.js"),cb=Zj("https:","http:","//www.google-analytics.com/"+pb,A&&!!A.forceSSL);O("analytics.js"===pb&&Nb?Nb:cb,function(){var na=
Sk();na&&na.loaded||q.vtp_gtmOnFailure();},q.vtp_gtmOnFailure)}}else M(q.vtp_gtmOnFailure)};(function(q){X.__ua=q;X.__ua.i="ua";X.__ua.m=!0;X.__ua.priorityOverride=0})(function(q){Kg(function(){n(q)},
[J.K,J.C])})}();
X.h.get_url=["google"],function(){function a(b,c,d){return{component:c,queryKey:d}}(function(b){X.__get_url=b;X.__get_url.i="get_url";X.__get_url.m=!0;X.__get_url.priorityOverride=0})(function(b){var c="any"===b.vtp_urlParts?null:[];c&&(b.vtp_protocol&&c.push("protocol"),b.vtp_host&&c.push("host"),b.vtp_port&&c.push("port"),b.vtp_path&&c.push("path"),b.vtp_extension&&c.push("extension"),b.vtp_query&&c.push("query"),b.vtp_fragment&&c.push("fragment"));var d=c&&"any"!==b.vtp_queriesAllowed?b.vtp_queryKeys||
[]:null,e=b.vtp_createPermissionError;return{assert:function(f,g,h){if(g){if(!k(g))throw e(f,{},"URL component must be a string.");if(c&&0>Ua(c,g))throw e(f,{},"Prohibited URL component: "+g);if("query"===g&&d){if(!h)throw e(f,{},"Prohibited from getting entire URL query when query keys are specified.");if(!k(h))throw e(f,{},"Query key must be a string.");if(0>Ua(d,h))throw e(f,{},"Prohibited query key: "+h);}}else if(c)throw e(f,{},"Prohibited from getting entire URL when components are specified.");
},O:a}})}();
X.h.jel=["google"],function(){(function(a){X.__jel=a;X.__jel.i="jel";X.__jel.m=!0;X.__jel.priorityOverride=0})(function(a){if(!Gr("jel")){var b=S("self"),c=b.onerror;b.onerror=function(d,e,f,g,h){c&&c(d,e,f,g,h);Br({event:"gtm.pageError","gtm.errorMessage":d,"gtm.errorUrl":e,"gtm.errorLineNumber":f});return!1};Hr("jel")}M(a.vtp_gtmOnSuccess)})}();

X.h.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){X.__inject_script=b;X.__inject_script.i="inject_script";X.__inject_script.m=!0;X.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!k(f))throw d(e,{},"Script URL must be a string.");try{if(Te(eh(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},O:a}})}();


X.h.cid=["google"],function(){(function(a){X.__cid=a;X.__cid.i="cid";X.__cid.m=!0;X.__cid.priorityOverride=0})(function(){return pe.F})}();

X.h.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"],b=!1;(function(c){X.__gclidw=c;X.__gclidw.i="gclidw";X.__gclidw.m=!0;X.__gclidw.priorityOverride=100})(function(c){M(c.vtp_gtmOnSuccess);var d,e,f,g;c.vtp_enableCookieOverrides&&(f=c.vtp_cookiePrefix,d=c.vtp_path,e=c.vtp_domain,c.vtp_enableCookieFlagsFeature&&(g=c.vtp_cookieFlags));var h=null;c.vtp_enableCookieUpdateFeature&&(h=
!0,void 0!==c.vtp_cookieUpdate&&(h=!!c.vtp_cookieUpdate));var l={prefix:f,path:d,domain:e,flags:g};c.vtp_enableCrossDomainFeature&&(c.vtp_enableCrossDomain&&!1===c.vtp_acceptIncoming||(c.vtp_enableCrossDomain||kj())&&Ej(a,l));Cj(l);Gj(["aw","dc"],l);b?Qj(h,l):Rj(h,l);var m=f;if(c.vtp_enableCrossDomainFeature&&c.vtp_enableCrossDomain&&c.vtp_linkerDomains){var n=c.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");Fj(a,n,c.vtp_urlPosition,!!c.vtp_formDecoration,m)}var q=Ar(J.P);Qm({Kd:!1,xa:void 0!=
q&&!1!==q,Ic:l,Qc:!0});c.vtp_enableUrlPassthroughFeature&&c.vtp_enableUrlPassthrough&&Ij()});}();

X.h.gas=["google"],function(){(function(a){X.__gas=a;X.__gas.i="gas";X.__gas.m=!0;X.__gas.priorityOverride=0})(function(a){var b=G(a),c=b;c[sd.Sa]=null;c[sd.$g]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
X.h.read_data_layer=["google"],function(){function a(b,c){return{key:c}}(function(b){X.__read_data_layer=b;X.__read_data_layer.i="read_data_layer";X.__read_data_layer.m=!0;X.__read_data_layer.priorityOverride=0})(function(b){var c=b.vtp_keyPatterns||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!k(f))throw d(e,{},"Keys must be strings.");try{var g;a:{for(var h=0;h<c.length;h++){var l=f,m=c[h];if(!Ne.exec(m))throw Error("Invalid key wildcard");var n=m.indexOf(".*"),q=-1!==n&&n===
m.length-2,t=q?m.slice(0,m.length-2):m,r;b:if(0===l.length)r=!1;else{for(var u=l.split("."),v=0;v<u.length;v++)if(!Me.exec(u[v])){r=!1;break b}r=!0}if(!r||t.length>l.length||!q&&l.length!=m.length?0:q?0===l.indexOf(t)&&(l===t||"."==l.charAt(t.length)):l===t){g=!0;break a}}g=!1}if(g)return}catch(w){throw d(e,{},"Invalid key filter.");}throw d(e,{},"Prohibited read from data layer variable: "+f+".");},O:a}})}();
X.h.awct=["google"],function(){var a=!1,b=[],c=function(g){var h=S("google_trackConversion"),l=g.gtm_onFailure;"function"==typeof h?h(g)||l():l()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}};(function(g){X.__awct=g;X.__awct.i="awct";X.__awct.m=!0;X.__awct.priorityOverride=
0})(function(g){function h(z,C,D){return"DATA_LAYER"===z?Ar(D):g[C]}function l(){v("gdpr_consent",Mm());}function m(){var z=[];return z}function n(z){var C=!0,D=[];if(z){D=m();}C&&b.push(t)}function q(){}Nk();var t={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:g.vtp_conversionId,google_conversion_label:g.vtp_conversionLabel,google_conversion_value:g.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:g.vtp_gtmOnSuccess,gtm_onFailure:g.vtp_gtmOnFailure,google_gtm:im()};t.google_gtm_experiments={capi:!0};
g.vtp_rdp&&(t.google_restricted_data_processing=!0);void 0!=Ar(J.P)&&!1!==Ar(J.P)&&(t.google_gtm_url_processor=function(z){return z=nk(z)});var r=function(z){return function(C,D,E){var I=h(z,D,E);I&&(t[C]=I)}},u=r("JSON");u("google_conversion_currency","vtp_currencyCode");u("google_conversion_order_id","vtp_orderId");g.vtp_enableProductReporting&&(u=r(g.vtp_productReportingDataSource),u("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),u("google_basket_feed_country","vtp_awFeedCountry",
"aw_feed_country"),u("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),u("google_basket_discount","vtp_discount","discount"),u("google_conversion_items","vtp_items","items"),t.google_conversion_items&&t.google_conversion_items.map&&(t.google_conversion_items=t.google_conversion_items.map(function(z){return{value:z.price,quantity:z.quantity,item_id:z.id}})));var v=function(z,C){void 0!==C&&((t.google_additional_conversion_params=t.google_additional_conversion_params||{})[z]=C)},
w=function(z){return function(C,D,E,I){var P=h(z,D,E);I(P)&&v(C,P)}};(function(){if(!g.vtp_enableShippingData)return;v("delopc",g.vtp_deliveryPostalCode);v("oedeld",g.vtp_estimatedDeliveryDate);v("delc",g.vtp_deliveryCountry);v("shf",g.vtp_shippingFee);if(g.vtp_enableProductReporting){var z=
h(g.vtp_productReportingDataSource,"vtp_items","items");v("iedeld",pk(z))}})();g.vtp_transportUrl&&(t.google_transport_url=g.vtp_transportUrl);var A=Tl(g.vtp_transportUrl,"/pagead/conversion_async.js");A||(A=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js");g.vtp_enableNewCustomerReporting&&(u=w(g.vtp_newCustomerReportingDataSource),u("vdnc",
"vtp_awNewCustomer","new_customer",function(z){return void 0!=z&&""!==z}),u("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(z){return void 0!=z&&""!==z}));!g.hasOwnProperty("vtp_enableConversionLinker")||g.vtp_enableConversionLinker?(g.vtp_conversionCookiePrefix&&(t.google_gcl_cookie_prefix=g.vtp_conversionCookiePrefix),t.google_read_gcl_cookie_opt_out=!1):t.google_read_gcl_cookie_opt_out=!0;"1"===dj(!1)._up&&v("gtm_up","1");l();(function(){var z=!1;!yg()||z?n(!0):Kg(function(){l();var C=Hg(J.C),D=!C&&void 0!=Ar(J.P)&&!1!==Ar(J.P);!g.vtp_transportUrl&&D&&(t.google_transport_url="https://pagead2.googlesyndication.com/");v("gcs",Ig());q();n(C);C||Cg(function(){l();t=G(t);!g.vtp_transportUrl&&t.google_transport_url&&delete t.google_transport_url;v("gcs",Ig());q();v("gcu","1");n(!0)},J.C)},[J.C])})();a||(a=!0,O(A,f(),e(A)))})}();

X.h.logging=["google"],function(){function a(){return{}}(function(b){X.__logging=b;X.__logging.i="logging";X.__logging.m=!0;X.__logging.priorityOverride=0})(function(b){var c=b.vtp_environments||"debug",d=b.vtp_createPermissionError;return{assert:function(e){var f;if(f="all"!==c&&!0){var g=!1;f=!g}if(f)throw d(e,{},"Logging is not enabled in all environments");},O:a}})}();X.h.smm=["google"],function(){(function(a){X.__smm=a;X.__smm.i="smm";X.__smm.m=!0;X.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=ps(a.vtp_map,"key","value")||{},d=c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue;Kr(d,"smm",a.vtp_gtmEventId);return d})}();



X.h.paused=[],function(){(function(a){X.__paused=a;X.__paused.i="paused";X.__paused.m=!0;X.__paused.priorityOverride=0})(function(a){M(a.vtp_gtmOnFailure)})}();

X.h.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var m=K.createElement("script");m.async=!1;m.type="text/javascript";m.id=h.id;m.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(m.charset=h.charset);var n=h.getAttribute("data-gtmsrc");n&&(m.src=n,Xf(m,l));d.insertBefore(m,null);n||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];h.firstChild;)q.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,q,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(t){M(g)}}}var c=function(d){if(K.body){var e=d.vtp_gtmOnFailure,f=Lr(d.vtp_html,d.vtp_gtmOnSuccess,
e),g=f.Vd,h=f.onSuccess;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(K.body,fg(g),h,e)()}else vr(function(){c(d)},200)};X.__html=c;X.__html.i="html";
X.__html.m=!0;X.__html.priorityOverride=0}();



X.h.read_event_metadata=["google"],function(){(function(a){X.__read_event_metadata=a;X.__read_event_metadata.i="read_event_metadata";X.__read_event_metadata.m=!0;X.__read_event_metadata.priorityOverride=0})(function(){return{assert:function(){},O:function(){return{}}}})}();





var Xu={};Xu.macro=function(a){if(cr.Cd.hasOwnProperty(a))return cr.Cd[a]},Xu.onHtmlSuccess=cr.Kf(!0),Xu.onHtmlFailure=cr.Kf(!1);Xu.dataLayer=Uh;Xu.callback=function(a){Lh.hasOwnProperty(a)&&Ra(Lh[a])&&Lh[a]();delete Lh[a]};Xu.bootstrap=0;Xu._spx=!1;function Yu(){N[pe.F]=Xu;ob(Mh,X.h);Wd=Wd||cr;Xd=le}
function Zu(){mg.gtag_cs_api=!0;N=p.google_tag_manager=p.google_tag_manager||{};Km();if(N[pe.F]){var a=N.zones;a&&a.unregisterChild(pe.F);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Pd.push(c[d]);
for(var e=b.tags||[],f=0;f<e.length;f++)Sd.push(e[f]);for(var g=b.predicates||[],h=0;h<g.length;h++)Rd.push(g[h]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},t=0;t<n.length;t++)q[n[t][0]]=Array.prototype.slice.call(n[t],1);Qd.push(q)}Ud=X;Vd=ks;var r=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;jq();te=new se(r);if(void 0!==u)for(var w=["sandboxedScripts"],y=0;y<u.length;y++){var x=u[y].replace(/^_*/,"");Mh[x]=w}mq(v);Yu();br();Bk=!1;Ck=0;if("interactive"==
K.readyState&&!K.createEventObject||"complete"==K.readyState)Ek();else{bg(K,"DOMContentLoaded",Ek);bg(K,"readystatechange",Ek);if(K.createEventObject&&K.documentElement.doScroll){var A=!0;try{A=!p.frameElement}catch(I){}A&&Fk()}bg(p,"load",Ek)}tp=!1;"complete"===K.readyState?vp():bg(p,"load",vp);a:{
if(!wl)break a;p.setInterval(xl,864E5);}Jh=(new Date).getTime();}}
(function(a){if(!p["__TAGGY_INSTALLED"]){var b=!1;if(K.referrer){var c=eh(K.referrer);b="cct.google"===bh(c,"host")}if(!b){var d=gi("googTaggyReferrer");b=d.length&&d[0].length}b&&(p["__TAGGY_INSTALLED"]=!0,Yf("https://cct.google/taggy/agent.js"))}var f=function(){var m=p["google.tagmanager.debugui2.queue"];m||(m=[],p["google.tagmanager.debugui2.queue"]=m,Yf("https://www.googletagmanager.com/debug/bootstrap"));return m},g="x"===ch(p.location,"query",!1,void 0,"gtm_debug");if(!g&&K.referrer){var h=eh(K.referrer);g="tagassistant.google.com"===bh(h,"host")}if(!g){var l=gi("__TAG_ASSISTANT");g=l.length&&l[0].length}p.__TAG_ASSISTANT_API&&(g=!0);g&&Vf?f().push({messageType:"CONTAINER_STARTING",
data:{scriptSource:Vf,resume:function(){a()}}}):a()})(Zu);

})()
