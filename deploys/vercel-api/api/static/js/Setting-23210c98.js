import{a as t,u as e,b as a,d as i,n as l,h as s}from"./index-e486647d.js";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-w"},[a("el-form",{ref:"formRef",attrs:{model:t.form,rules:t.rules}},[a("el-form-item",{attrs:{label:"application_key_id",prop:"application_key_id"}},[a("el-input",{attrs:{placeholder:"请填写应用程序密钥id"},model:{value:t.form.application_key_id,callback:function(e){t.$set(t.form,"application_key_id",e)},expression:"form.application_key_id"}})],1),a("el-form-item",{attrs:{label:"application_key",prop:"application_key"}},[a("el-input",{attrs:{"show-password":"",placeholder:"请填写应用程序密钥"},model:{value:t.form.application_key,callback:function(e){t.$set(t.form,"application_key",e)},expression:"form.application_key"}})],1),a("el-form-item",{attrs:{label:"host_url(图床自定义域名)",prop:"host_url"}},[a("el-input",{attrs:{placeholder:"请填写地址,eg: https://cloud.mr90.top/file/imagecloud/ 注意:结尾必须加 ‘/’"},model:{value:t.form.host_url,callback:function(e){t.$set(t.form,"host_url",e)},expression:"form.host_url"}})],1),a("el-form-item",{attrs:{label:" bucket_name",prop:"bucket_name"}},[a("el-input",{attrs:{placeholder:"请填写存储桶名称"},model:{value:t.form.bucket_name,callback:function(e){t.$set(t.form,"bucket_name",e)},expression:"form.bucket_name"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("formRef")}}},[t._v("保存本地")]),a("el-button",{on:{click:function(e){return t.resetForm("formRef")}}},[t._v("重置")])],1)],1)],1)},r=[];o._withStripped=!0;const n={data(){return{form:{application_key_id:"",application_key:"",bucket_name:"",host_url:""},rules:{application_key_id:[{required:!0,message:"请输入application_key_id",trigger:"blur"},{min:5,max:50,message:"长度在 5 到 50 个字符",trigger:"blur"}],application_key:[{required:!0,message:"请输入application_key",trigger:"blur"},{min:5,max:50,message:"长度在 5 到 50 个字符",trigger:"blur"}],bucket_name:[{required:!0,message:"请输入bucket_name",trigger:"blur"},{min:5,max:20,message:"长度在 5 到 20 个字符",trigger:"blur"}],host_url:[{required:!0,validator:this.validateURL,trigger:"blur"}]}}},computed:{...t(e,["isLogined"])},mounted(){const t=localStorage.getItem("token_api");t&&(this.form=JSON.parse(t))},methods:{...a(e,["handleIsLogined"]),validateURL:(t,e,a)=>{"/"===e.charAt(e.length-1)&&0!==e.length?a():a(new Error("请输入图片地址前缀，输入的连接结尾必须加 /"))},submitForm:i((function(t){this.$refs[t].validate((t=>{if(!t)return!1;localStorage.setItem("token_api",JSON.stringify(this.form)),localStorage.removeItem("authmsg"),ELEMENT.Notification({title:"提示",message:"已将数据缓冲到本地，数据信息仅本人可知",type:"success"}),this.handleIsLogined(this.form.host_url)}))}),400,!0),resetForm(t){this.$refs[t].resetFields()}}},u={};var c=l(n,o,r,!1,p,"4c16d965",null,null);function p(t){for(let e in u)this[e]=u[e]}c.options.__file="src/views/formview/FormView.vue";const m=function(){return c.exports}();var f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"set-prefix"},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:t.handleSelect},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.prefixImg.support,(function(t){return a("el-option",{key:t.url,attrs:{label:t.label,value:t.url}})})),1),a("el-input",{attrs:{placeholder:"请选择图床管理页面图片地址前缀",disabled:!0},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)},d=[];f._withStripped=!0;const v={data:()=>({value:""}),computed:{...t(e,["prefixImg"]),...t(e,["noInvalid"]),...t(e,["prefixStatus"])},watch:{noInvalid:{deep:!0,handler(t){t&&(this.value=this.prefixStatus)}},prefixStatus:{deep:!0,handler(t){t&&(this.value=this.prefixStatus)}}},mounted(){this.noInvalid&&(this.value=this.prefixStatus)},methods:{...a(e,["setDefaultPrefix"]),handleSelect(t){this.setDefaultPrefix(t)}}},h={};var _=l(v,f,d,!1,g,"6ff34b10",null,null);function g(t){for(let e in h)this[e]=h[e]}_.options.__file="src/views/Setting/setprefix/SetPrefix.vue";const b=function(){return _.exports}();var x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"set-defalut"},[a("div",{staticStyle:{"margin-top":"20px","padding-bottom":"20px","border-bottom":"1px solid #f2f2f2"}},[a("el-radio-group",{attrs:{size:"small"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[a("el-radio",{attrs:{label:"1",border:""}},[t._v("手动输入目录")]),a("el-radio",{attrs:{label:"2",border:""}},[t._v("自动填写目录")])],1)],1),"1"===t.radio?a("el-input",{attrs:{placeholder:"图片文件夹(格式：hexo/4/)"},model:{value:t.valuePrint,callback:function(e){t.valuePrint=e},expression:"valuePrint"}}):a("el-cascader",{attrs:{props:t.options,clearable:""},model:{value:t.valueAuto,callback:function(e){t.valueAuto=e},expression:"valueAuto"}}),a("el-button",{on:{click:t.saveDefault}},[t._v("保存")]),a("el-button",{on:{click:function(e){return t.$router.replace({name:"imanage"})}}},[t._v("返回")])],1)},k=[];x._withStripped=!0;const y={data:()=>({valueAuto:[],radio:"1",valuePrint:"",options:{lazy:!0,checkStrictly:!0,lazyLoad(t,e){let a="";const{level:i,pathLabels:l}=t,o=l&&l.reduce(((t,e)=>{if(i<=l.length)return`${t}${e}/`}),"");a=l?o:a,s(a).then((t=>{const a=t.length>0?t:[];e(a)}))}}}),computed:{...t(e,["defaultFile"])},mounted(){this.radio=this.defaultFile.methods,this.initData(this.radio)},methods:{initData(t){"1"===t?(this.valueAuto=[],this.valuePrint=this.defaultFile.valPt):(this.valuePrint="",this.valueAuto=this.defaultFile.valAt)},...a(e,["setDefaultFile"]),saveDefault(){const t={methods:this.radio,valAt:this.valueAuto,valPt:this.valuePrint};this.setDefaultFile(t),ELEMENT.Notification({message:"保存成功",type:"success"})}}},S={};var C=l(y,x,k,!1,w,"04bbfc34",null,null);function w(t){for(let e in S)this[e]=S[e]}C.options.__file="src/views/Setting/setDefault/SetDefault.vue";const E=function(){return C.exports}();var F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"set-commpress"},[a("el-switch",{attrs:{"active-text":"开启","inactive-text":"关闭","active-value":!0,"inactive-value":!1},on:{change:t.handleComp},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"block-compress"},[a("span",{staticClass:"demonstration"},[t._v("压缩等级("+t._s(t.value1)+")")]),a("div",{staticClass:"slide-w"},[a("el-slider",{attrs:{"show-input":"",step:.1,max:1,"show-stops":""},on:{change:t.handleComp},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1)])],1)},D=[];F._withStripped=!0;const $=e(),N={};var L=l({data:()=>({value:!1,value1:.8}),mounted(){this.$nextTick((()=>{this.value=$.CompressData.iscompress,this.value1=$.CompressData.rank}))},methods:{handleComp:function(t){const e={iscompress:this.value,rank:this.value1};$.setDefaultCompress(e),ELEMENT.Notification({title:"压缩功能提示",message:`上传压缩功能${this.value?"已开启":"已关闭"},${this.value?"压缩等级为:"+this.value1:""}`,type:"success"})}}},F,D,!1,T,"8fe18032",null,null);function T(t){for(let e in N)this[e]=N[e]}L.options.__file="src/views/Setting/setMain/SetCompress.vue";const P=function(){return L.exports}();var M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"set-upload"},[a("el-input",{attrs:{placeholder:"eg:hexo/2/"},model:{value:t.tofile,callback:function(e){t.tofile=e},expression:"tofile"}}),a("el-button",{on:{click:t.saveToFile}},[t._v("保存")]),a("el-button",{on:{click:function(e){return t.$router.replace({name:"home"})}}},[t._v("返回")])],1)},A=[];M._withStripped=!0;const I={data:()=>({tofile:""}),computed:{...t(e,["DefaultToFile"])},mounted(){this.tofile=this.DefaultToFile},methods:{...a(e,["setDefaultToFile"]),saveToFile(){const t="/"===this.tofile.slice(-1)||""===this.tofile;ELEMENT.Notification({title:"提示",message:t?`上传路径修改为：${this.tofile}`:"路径要以“/”结尾",type:t?"success":"error"}),t&&this.setDefaultToFile(this.tofile)}}},U={};var q=l(I,M,A,!1,O,"ef07802c",null,null);function O(t){for(let e in U)this[e]=U[e]}q.options.__file="src/views/Setting/setUploadFile/SetUpload.vue";const R=function(){return q.exports}();var z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-radio-group",{attrs:{size:"small"},on:{change:t.handleFormat},model:{value:t.radiov,callback:function(e){t.radiov=e},expression:"radiov"}},t._l(t.defaultcopyformat.formatList,(function(e,i){return a("el-tooltip",{key:i,staticClass:"item",attrs:{effect:"dark",content:e||"您还未定义",placement:"top-start"}},[a("el-radio",{attrs:{label:i,border:""}},[t._v(" "+t._s(i)+" ")])],1)})),1),"Custom"===t.radiov?a("div",[a("el-input",{staticStyle:{width:"217px","margin-top":"10px","margin-right":"10px"},attrs:{type:"text",placeholder:"自定义外链格式"},model:{value:t.custom,callback:function(e){t.custom=e},expression:"custom"}}),a("el-button",{on:{click:t.validCustom}},[t._v("保存")])],1):t._e()],1)},J=[];z._withStripped=!0;const V={data:()=>({radiov:"",custom:""}),computed:{...t(e,["defaultcopyformat"]),...t(e,["defaultCopy"])},mounted(){this.radiov=this.defaultCopy,"Custom"===this.defaultCopy&&(this.custom=this.defaultcopyformat.formatList.Custom)},methods:{...a(e,["setDefaultFormat"]),...a(e,["setCustomFormat"]),handleFormat(t){"Custom"!==t?(this.setDefaultFormat(t),ELEMENT.Notification({title:"自定义格式",message:"已将格式设置为："+t,type:"success"})):ELEMENT.Notification({title:"自定义格式",message:"请在输入框中填写，格式 %s ，eg: ![](%s)",type:"warning"})},validCustom:i((function(){const t=/%s/g.test(this.custom);ELEMENT.Notification({title:"提示",message:t?`您当前的默认外链已设置为：${this.custom}`:"自定义格式有误，请将%s按照格式填写，例如：![](%s)",type:t?"success":"error"}),t&&(this.setDefaultFormat("Custom"),this.setCustomFormat(this.custom))}),300,!0)}},j={};var B=l(V,z,J,!1,G,null,null,null);function G(t){for(let e in j)this[e]=j[e]}B.options.__file="src/views/Setting/setcopy/SetCopy.vue";const H=function(){return B.exports}();var K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("el-switch",{attrs:{"active-text":"开启","inactive-text":"关闭","active-value":!0,"inactive-value":!1},on:{change:t.handleComp},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)},Q=[];K._withStripped=!0;const W={data:()=>({value:!1}),computed:{...t(e,["openUploadOutMD"])},mounted(){this.value=!!this.openUploadOutMD},methods:{handleComp(t){e().$patch({openUploadOutMD:t})}}},X={};var Y=l(W,K,Q,!1,Z,null,null,null);function Z(t){for(let e in X)this[e]=X[e]}Y.options.__file="src/views/Setting/setdefaultCopy/SetDefaultCopy.vue";const tt=function(){return Y.exports}();var et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"common-container"},[a("h1",{staticClass:"set-tit"},[t._v("⌜全局配置⌟")]),a("el-collapse",{staticClass:"img-manage",attrs:{accordion:""},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-collapse-item",{attrs:{title:"🗝️ 密钥配置管理",name:"1"}},[a("form-view")],1),a("el-collapse-item",{attrs:{title:"📷 上传图片设置",name:"2"}},[a("h2",[t._v("是否开启默认上传Markdown模式")]),a("set-default-copy"),a("h2",[t._v("B2桶图片上传路径（文件夹路径/名称） "),a("span",{staticClass:"red-c"},[t._v("必填")]),t._v("（默认根目录下）")]),a("set-upload"),a("h2",[t._v("是否开启压缩")]),a("set-compress")],1),a("el-collapse-item",{attrs:{title:"🎃 页面图片管理",name:"3"}},[a("h2",[t._v("图片前缀(默认选择 host_url 在密钥配置中可修改)")]),a("set-prefix"),a("h2",[t._v("图片外链默认复制格式 "),a("span",{staticClass:"red-c"},[t._v("%s")]),t._v("为外链地址")]),a("set-copy"),a("h2",[t._v("默认检索的图片文件夹")]),a("set-default")],1)],1)],1)},at=[];et._withStripped=!0;const it={};var lt=l({components:{FormView:m,SetPrefix:b,SetDefault:E,SetCompress:P,SetUpload:R,SetCopy:H,SetDefaultCopy:tt},data:()=>({activeName:""}),mounted(){const{id:t}=this.$route.query;t&&(this.activeName=t+"")}},et,at,!1,st,"0e0ad9a7",null,null);function st(t){for(let e in it)this[e]=it[e]}lt.options.__file="src/views/Setting/Setting.vue";const ot=function(){return lt.exports}();export{ot as default};
