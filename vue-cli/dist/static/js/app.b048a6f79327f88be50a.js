webpackJsonp([1],{"5T/f":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App"},r,!1,function(e){n("vhT0")},null,null).exports,a=n("mtWM"),i=n.n(a),l=n("/ocq"),u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"full-height"},[n("el-container",{staticClass:"full-height"},[n("el-aside",{staticClass:"side"},[n("ul",[n("router-link",{attrs:{to:"/",tag:"li"}},[n("i",{staticClass:"glyphicon glyphicon-tasks"}),e._v(" 依赖后实例下的属性和方法")]),e._v(" "),n("router-link",{attrs:{to:"/1",tag:"li"}},[e._v("自定义表单验证")]),e._v(" "),n("router-link",{attrs:{to:"/2",tag:"li"}},[e._v("国际化")]),e._v(" "),n("router-link",{attrs:{to:"/3",tag:"li"}},[e._v("切换自动获取焦点")])],1)]),e._v(" "),n("el-main",[n("transition",{attrs:{name:"el-fade-in-linear",mode:"out-in"}},[n("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var _=n("VU/8")(null,u,!1,function(e){n("5T/f")},null,null).exports,c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",{staticClass:"tit1"},[this._v("通过依赖后vue实例下面的属性和方法")]),this._v(" "),t("div")])}]},d=n("VU/8")({data:function(){return{}},methods:{}},c,!1,null,null,null).exports,p={data:function(){return{ruleForm:{name:""},rules:{name:[{validator:function(e,t,n){""===t?n(new Error("请输入子帐户名称")):t.length<4?n(new Error("长度在 4 到 20 个字符")):/^[a-z\d]{4,}$/g.test(t)?n():n(new Error("您输入的子账户应为小写字母及数字的组合，长度不小于4位"))},trigger:"blur"}]}}},methods:{submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")})},resetForm:function(e){this.$refs[e].resetFields()}}},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"tit1"},[e._v("element-ui自定义表单验证")]),e._v(" "),n("div",[n("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"姓名",prop:"name"}},[n("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm2")}}},[e._v("提交")]),e._v(" "),n("el-button",{on:{click:function(t){e.resetForm("ruleForm2")}}},[e._v("重置")])],1)],1)],1)])},staticRenderFns:[]},h=n("VU/8")(p,m,!1,null,null,null).exports,f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"tit1"},[e._v("i18n国际化")]),e._v(" "),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.switchLanguage}},[e._v("语言切换")]),e._v(" "),n("hr"),e._v(" "),n("div",[e._v(e._s(e.$t("m.login")))])],1)},staticRenderFns:[]},v=n("VU/8")({data:function(){return{lang:this.$i18n.locale}},methods:{switchLanguage:function(){"zh-CN"===this.lang?(this.lang="en-US",this.$i18n.locale="en-US"):(this.lang="zh-CN",this.$i18n.locale="zh-CN")}}},f,!1,null,null,null).exports,g={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",{staticClass:"tit1"},[this._v("切换自动获取焦点")]),this._v(" "),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:this.switchShow}},[this._v("切换")]),this._v(" "),t("hr"),this._v(" "),this.show?t("div",[t("input",{ref:"ipt1",staticClass:"form-control",attrs:{type:"text",placeholder:"",value:"内容1"}})]):t("div",[t("input",{ref:"ipt2",staticClass:"form-control",attrs:{type:"text",placeholder:"",value:"内容2"}})])],1)},staticRenderFns:[]},w=n("VU/8")({data:function(){return{show:!0}},methods:{switchShow:function(){this.show=!this.show,this.show?this.$refs.ipt2.focus():this.$refs.ipt1.focus()}}},g,!1,null,null,null).exports;s.default.use(l.a);var y=new l.a({routes:[{path:"/",component:_,children:[{path:"",component:d},{path:"1",component:h},{path:"2",component:v},{path:"3",component:w}]}]}),b=n("NYxO");s.default.use(b.a);var C=new b.a.Store({modules:{m1:{namespaced:!0,state:{homeNavChanged:!1},mutations:{changed:function(e){e.homeNavChanged=!0},reset:function(e){e.homeNavChanged=!1}}},m2:{namespaced:!0,state:{homeNavChanged:!1},mutations:{changed:function(e){e.homeNavChanged=!0},reset:function(e){e.homeNavChanged=!1}}}}}),F=n("Au9i"),$=n.n(F),x=(n("d8/S"),n("TXmL")),N=n("zL8q"),k=n.n(N);n("tvR6"),n("n8o6");s.default.use($.a),s.default.use(x.a);var E=new x.a({locale:"zh-CN",messages:{"zh-CN":n("sPnx"),"en-US":n("Zavm")}});s.default.use(k.a),s.default.config.productionTip=!1,s.default.prototype.$axios=i.a,window.Vue=new s.default({el:"#app",i18n:E,router:y,store:C,components:{App:o},template:"<App/>"})},Zavm:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"m",function(){return s});var s={login:"Login",user_center:"User Center",please_entry_phone_number:"请输入手机号码",use_mobile_login:"使用手机号登录",use_mobile_sign_up:"使用手机号注册",use_email_login:"使用邮箱登录",has_account_go:"已有账号？去",place_entry_captcha:"请输入验证码",signup:"注册",entry_sms_verify_code:"请输入短信验证码",sign_up_and_login:"注册并登录",phone_number:"电话号码",use_mail_sign_up:"使用邮箱注册",create_account:"创建账户",verify_code:"输入手机验证码",create_password:"创建密码",next:"下一步",sigin_up:"注册",forgot_password:"忘记密码？",password:"密码",confirm_password:"确认密码",please_entry_password:"请输入密码",please_entry_password_less8:"请输入不少于8位的密码",password_is_to_long:"密码长度请小于256位",back:"后退",entry_password:"输入密码",sms_verification_code_send_to_your_mobile_phone:"短信验证码已发送至您填写的手机。",please_entry_correct_email_address:"请输入正确的邮箱地址",please_entry_correct_verify_code:"请输入正确的验证码",password_not_same:"两次输入的密码不一致"}},"d8/S":function(e,t){},n8o6:function(e,t){},sPnx:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"m",function(){return s});var s={login:"登录",user_center:"用户中心",please_entry_phone_number:"请输入手机号码",use_mobile_login:"使用手机号登录",use_mobile_sign_up:"使用手机号注册",use_email_login:"使用邮箱登录",has_account_go:"已有账号？去",place_entry_captcha:"请输入验证码",signup:"注册",entry_sms_verify_code:"请输入短信验证码",sign_up_and_login:"注册并登录",phone_number:"电话号码",use_mail_sign_up:"使用邮箱注册",create_account:"创建账户",verify_code:"输入手机验证码",create_password:"创建密码",next:"下一步",sigin_up:"注册",forgot_password:"忘记密码？",password:"密码",confirm_password:"确认密码",please_entry_password:"请输入密码",please_entry_password_less8:"请输入不少于8位的密码",password_is_to_long:"密码长度请小于256位",back:"后退",entry_password:"输入密码",sms_verification_code_send_to_your_mobile_phone:"短信验证码已发送至您填写的手机。",please_entry_correct_email_address:"请输入正确的邮箱地址",please_entry_correct_verify_code:"请输入正确的验证码",password_not_same:"两次输入的密码不一致"}},tvR6:function(e,t){},vhT0:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.b048a6f79327f88be50a.js.map