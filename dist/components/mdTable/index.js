!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()}(this,function(){return function(e){function t(a){if(n[a])return n[a].exports;var i=n[a]={exports:{},id:a,loaded:!1};return e[a].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}({0:function(e,t,n){e.exports=n(24)},1:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function e(t,n){return!(!t||!t.$el)&&(0!==t._uid&&(t.$el.classList.contains(n)?t:e(t.$parent,n)))};t.default=n,e.exports=t.default},24:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e){e.component("md-table",e.extend(o.default)),e.component("md-table-header",{functional:!0,render:function(e,t){return e("thead",{staticClass:"md-table-header"},t.children)}}),e.component("md-table-body",{functional:!0,render:function(e,t){return e("tbody",{staticClass:"md-table-body"},t.children)}}),e.component("md-table-row",e.extend(d.default)),e.component("md-table-head",e.extend(l.default)),e.component("md-table-cell",e.extend(f.default)),e.component("md-table-edit",e.extend(p.default)),e.component("md-table-card",e.extend(b.default)),e.component("md-table-pagination",e.extend(y.default)),e.component("md-table-alternate-header",e.extend(g.default)),e.material.styles.push(T.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var r=n(166),o=a(r),s=n(173),d=a(s),c=n(171),l=a(c),u=n(169),f=a(u),m=n(170),p=a(m),h=n(168),b=a(h),S=n(167),g=a(S),v=n(172),y=a(v),x=n(120),T=a(x);e.exports=t.default},66:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),r=a(i);t.default={props:{mdSortType:String,mdSort:String},data:function(){return{sortType:this.mdSortType,sortBy:this.mdSort,hasRowSelection:!1,data:[],numberOfRows:0,numberOfSelected:0,selectedRows:{}}},methods:{emitSort:function(e){this.sortBy=e,this.$emit("sort",{name:e,type:this.sortType})},emitSelection:function(){this.$emit("select",this.selectedRows)}},mounted:function(){this.parentCard=(0,r.default)(this.$parent,"md-table-card"),this.parentCard&&(this.parentCard.tableInstance=this)}},e.exports=t.default},67:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),r=a(i);t.default={props:{mdSelectedLabel:{type:String,default:"selected"}},data:function(){return{classes:{},tableInstance:{}}},mounted:function(){var e=this;this.parentCard=(0,r.default)(this.$parent,"md-table-card"),this.$nextTick(function(){e.tableInstance=e.parentCard.tableInstance,e.$watch("tableInstance.numberOfSelected",function(){e.$refs.counter.textContent=e.tableInstance.numberOfSelected,e.classes={"md-active":e.tableInstance.numberOfSelected>0}})})}},e.exports=t.default},68:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdNumeric:Boolean},data:function(){return{hasAction:!1}},computed:{classes:function(){return{"md-numeric":this.mdNumeric,"md-has-action":this.hasAction}}},mounted:function(){this.$children.length>0&&(this.hasAction=!0)}},e.exports=t.default},69:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{value:[String,Number],mdLarge:Boolean,mdId:String,mdName:String,mdPlaceholder:String,mdMaxlength:[Number,String]},data:function(){return{active:!1}},computed:{triggerClasses:function(){return{"md-edited":this.value}},dialogClasses:function(){return{"md-active":this.active,"md-large":this.mdLarge}},realValue:function(){console.log(this.value)}},methods:{openDialog:function(){this.active=!0,this.$refs.input.$el.focus(),document.addEventListener("click",this.closeDialogOnOffClick)},closeDialog:function(){this.active&&(this.active=!1,this.$refs.input.$el.blur(),document.removeEventListener("click",this.closeDialogOnOffClick))},closeDialogOnOffClick:function(e){this.$refs.dialog.contains(e.target)||this.closeDialog()},confirmDialog:function(){var e=this.$refs.input.$el.value;this.closeDialog(),this.$emit("input",e),this.$emit("edited",e)}}},e.exports=t.default},70:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),r=a(i);t.default={props:{mdNumeric:Boolean,mdSortBy:String,mdTooltip:String},data:function(){return{sortType:null,sorted:!1,parentTable:{}}},computed:{classes:function(){var e=this.hasMatchSort();return e||(this.sorted=!1),{"md-numeric":this.mdNumeric,"md-sortable":this.mdSortBy,"md-sorted":e&&this.sorted,"md-sorted-descending":e&&"desc"===this.sortType}}},methods:{hasMatchSort:function(){return this.parentTable.sortBy===this.mdSortBy},changeSort:function(){this.mdSortBy&&("asc"===this.sortType&&this.sorted?this.sortType="desc":this.sortType="asc",this.sorted=!0,this.parentTable.sortType=this.sortType,this.parentTable.emitSort(this.mdSortBy))}},mounted:function(){this.parentTable=(0,r.default)(this.$parent,"md-table"),this.hasMatchSort()&&(this.sorted=!0,this.sortType=this.parentTable.sortType)}},e.exports=t.default},71:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdSize:{type:[Number,String],default:10},mdPageOptions:[Array,Boolean],mdPage:{type:[Number,String],default:1},mdTotal:{type:[Number,String],default:"Many"},mdLabel:{type:String,default:"Rows per page"},mdSeparator:{type:String,default:"of"}},data:function(){return{currentSize:parseInt(this.mdSize,10),currentPage:parseInt(this.mdPage,10),totalItems:!isNaN(this.mdTotal)&&Number.MAX_SAFE_INTEGER}},computed:{lastPage:function(){return!1}},methods:{emitPaginationEvent:function(){this.canFireEvents&&this.$emit("pagination",{size:this.currentSize,page:this.currentPage})},changeSize:function(){this.canFireEvents&&(this.$emit("size",this.currentSize),this.emitPaginationEvent())},changePage:function(){this.canFireEvents&&(this.$emit("page",this.currentPage),this.emitPaginationEvent())}},mounted:function(){var e=this;this.$nextTick(function(){e.mdPageOptions=e.mdPageOptions||[10,25,50,100],e.currentSize=e.mdPageOptions[0],e.canFireEvents=!0})}},e.exports=t.default},72:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),r=a(i),o="md-transition-off";t.default={props:{mdAutoSelect:Boolean,mdSelection:Boolean,mdItem:Object},data:function(){return{parentTable:{},headRow:!1,checkbox:!1,index:0}},computed:{isDisabled:function(){return!this.mdSelection&&!this.headRow},hasSelection:function(){return this.mdSelection||this.headRow&&this.parentTable.hasRowSelection},classes:function(){return{"md-selected":this.checkbox}}},watch:{mdItem:function(e,t){this.parentTable.data[this.index]=this.mdItem,this.handleMultipleSelection(e===t)}},methods:{setSelectedRow:function(e,t){e?(this.parentTable.selectedRows[t]=this.parentTable.data[t],++this.parentTable.numberOfSelected):(delete this.parentTable.selectedRows[t],--this.parentTable.numberOfSelected)},handleSingleSelection:function(e){this.setSelectedRow(e,this.index-1),this.parentTable.$children[0].checkbox=this.parentTable.numberOfSelected===this.parentTable.numberOfRows},handleMultipleSelection:function(e){var t=this;this.parentTable.numberOfRows>25&&this.parentTable.$el.classList.add(o),this.parentTable.$children.forEach(function(n,a){n.checkbox=e,n.headRow||t.setSelectedRow(e,a-1)}),e?this.parentTable.numberOfSelected=this.parentTable.numberOfRows:this.parentTable.numberOfSelected=0,window.setTimeout(function(){return t.parentTable.$el.classList.remove(o)})},select:function(e){this.hasSelection&&(this.headRow?this.handleMultipleSelection(e):this.handleSingleSelection(e),this.parentTable.emitSelection())},autoSelect:function(){this.mdAutoSelect&&this.hasSelection&&(this.checkbox=!this.checkbox,this.handleSingleSelection(this.checkbox),this.parentTable.emitSelection())}},mounted:function(){this.parentTable=(0,r.default)(this.$parent,"md-table"),"thead"===this.$el.parentNode.tagName.toLowerCase()?this.headRow=!0:(this.parentTable.numberOfRows++,this.index=this.parentTable.numberOfRows,this.mdSelection&&(this.parentTable.hasRowSelection=!0),this.mdItem&&this.parentTable.data.push(this.mdItem))}},e.exports=t.default},100:function(e,t){},120:function(e,t){e.exports=".THEME_NAME .md-table-card .md-toolbar,.THEME_NAME.md-table-card .md-toolbar{background-color:BACKGROUND-COLOR-A100;color:BACKGROUND-CONTRAST-A100}.THEME_NAME .md-table-alternate-header,.THEME_NAME.md-table-alternate-header{background-color:BACKGROUND-COLOR-A100}.THEME_NAME .md-table-alternate-header .md-toolbar,.THEME_NAME.md-table-alternate-header .md-toolbar{background-color:ACCENT-COLOR-A100-0.2;color:ACCENT-CONTRAST-A100}.THEME_NAME .md-table-alternate-header .md-counter,.THEME_NAME.md-table-alternate-header .md-counter{color:ACCENT-COLOR}\n"},166:function(e,t,n){var a,i;n(100),a=n(66);var r=n(225);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,e.exports=a},167:function(e,t,n){var a,i;a=n(67);var r=n(193);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,e.exports=a},168:function(e,t,n){var a,i,r=n(227);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,e.exports=a},169:function(e,t,n){var a,i;a=n(68);var r=n(207);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,e.exports=a},170:function(e,t,n){var a,i;a=n(69);var r=n(194);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,e.exports=a},171:function(e,t,n){var a,i;a=n(70);var r=n(202);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,e.exports=a},172:function(e,t,n){var a,i;a=n(71);var r=n(217);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,e.exports=a},173:function(e,t,n){var a,i;a=n(72);var r=n(223);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,e.exports=a},193:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("div",{staticClass:"md-table-alternate-header",class:e.classes},[t("md-toolbar",[t("div",{staticClass:"md-counter"},[t("span",{ref:"counter"},[e._s(e.tableInstance.numberOfSelected)])," ",t("span",[e._s(e.mdSelectedLabel)])])," ",e._t("default")])])},staticRenderFns:[]}},194:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("div",{staticClass:"md-table-edit",on:{keydown:function(t){e._k(t.keyCode,"esc",27)||e.closeDialog(t)}}},[t("div",{staticClass:"md-table-edit-trigger",class:e.triggerClasses,on:{click:function(t){t.stopPropagation(),e.openDialog(t)}}},["\n    "+e._s(e.value||e.mdPlaceholder)+"\n  "])," ",t("div",{ref:"dialog",staticClass:"md-table-dialog",class:e.dialogClasses},[t("md-input-container",[t("md-input",{ref:"input",attrs:{id:e.mdId,name:e.mdName,maxlength:e.mdMaxlength,value:e.value,placeholder:e.mdPlaceholder},nativeOn:{keydown:function(t){e._k(t.keyCode,"enter",13)||e.confirmDialog(t)}}})])])])},staticRenderFns:[]}},202:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("th",{staticClass:"md-table-head",class:e.classes,on:{click:e.changeSort}},[t("div",{directives:[{name:"md-ink-ripple",rawName:"v-md-ink-ripple",value:!e.mdSortBy,expression:"!mdSortBy"}],staticClass:"md-table-head-container"},[t("div",{staticClass:"md-table-head-text md-test"},[e.mdSortBy?t("md-icon",{staticClass:"md-sortable-icon"},["arrow_downward"]):e._e()," ",e._t("default")," ",e.mdTooltip?t("md-tooltip",[e._s(e.mdTooltip)]):e._e()])])])},staticRenderFns:[]}},207:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("td",{staticClass:"md-table-cell",class:e.classes},[t("div",{staticClass:"md-table-cell-container"},[e._t("default")])])},staticRenderFns:[]}},217:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("div",{staticClass:"md-table-pagination"},[t("span",{staticClass:"md-table-pagination-label"},[e._s(e.mdLabel)+":"])," ",e.mdPageOptions?t("md-select",{directives:[{name:"model",rawName:"v-model",value:e.currentSize,expression:"currentSize"}],attrs:{"md-menu-class":"md-pagination-select"},domProps:{value:e.currentSize},on:{change:e.changeSize,input:function(t){e.currentSize=t}}},[e._l(e.mdPageOptions,function(n){return t("md-option",{attrs:{value:n}},[e._s(n)])})]):e._e()," ",t("span",[e._s((e.currentSize-e.currentSize+1)*e.currentPage)+"-"+e._s(e.currentSize)+" "+e._s(e.mdSeparator)+" "+e._s(e.mdTotal)])," ",t("md-button",{staticClass:"md-icon-button md-table-pagination-previous",attrs:{disabled:1===e.currentPage},on:{click:e.changePage}},[t("md-icon",["keyboard_arrow_left"])])," ",t("md-button",{staticClass:"md-icon-button md-table-pagination-next",attrs:{disabled:e.currentSize*e.currentPage>=e.totalItems},on:{click:e.changePage}},[t("md-icon",["keyboard_arrow_right"])])])},staticRenderFns:[]}},223:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("tr",{staticClass:"md-table-row",class:e.classes,on:{click:e.autoSelect}},[e.hasSelection?t("md-table-cell",{staticClass:"md-table-selection"},[t("md-checkbox",{directives:[{name:"model",rawName:"v-model",value:e.checkbox,expression:"checkbox"}],attrs:{disabled:e.isDisabled},domProps:{value:e.checkbox},on:{change:e.select,input:function(t){e.checkbox=t}}})]):e._e()," ",e._t("default")])},staticRenderFns:[]}},225:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("div",{staticClass:"md-table"},[t("table",[e._t("default")])])},staticRenderFns:[]}},227:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("md-card",{staticClass:"md-table-card"},[e._t("default")])},staticRenderFns:[]}}})});