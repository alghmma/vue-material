!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var s=n[o]={exports:{},id:o,loaded:!1};return e[o].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}({0:function(e,t,n){e.exports=n(21)},21:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function s(e){e.component("md-sidenav",e.extend(d.default)),e.material.styles.push(c.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var i=n(163),d=o(i),r=n(117),c=o(r);e.exports=t.default},63:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{mdVisible:!1}},computed:{classes:function(){return this.mdVisible&&"md-active"}},methods:{show:function(){this.mdVisible=!0,this.$el.focus(),this.$emit("open")},close:function(){this.mdVisible=!1,this.$el.blur(),this.$emit("close")},toggle:function(){this.mdVisible?this.close():this.show()}}},e.exports=t.default},90:function(e,t){},117:function(e,t){e.exports=".THEME_NAME .md-sidenav .md-sidenav-content,.THEME_NAME.md-sidenav .md-sidenav-content{background-color:BACKGROUND-COLOR-A100;color:BACKGROUND-CONTRAST}\n"},163:function(e,t,n){var o,s;n(90),o=n(63);var i=n(201);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,e.exports=o},201:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("div",{staticClass:"md-sidenav",class:e.classes,attrs:{tabindex:"0"},on:{keyup:function(t){e._k(t.keyCode,"esc",27)||e.close(t)}}},[t("div",{staticClass:"md-sidenav-content"},[e._t("default")])," ",t("md-backdrop",{staticClass:"md-sidenav-backdrop",on:{close:e.close}})])},staticRenderFns:[]}}})});