webpackJsonp([1],{"1/oy":function(e,t){},"9M+g":function(e,t){},GfHa:function(e,t){},Id91:function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});r("qb6w"),r("9M+g");var n=r("e6fC"),a=r("7+uW"),s=r("3EgV"),i=r.n(s),o=r("nUxp"),l=r.n(o),u=r("Xxa5"),c=r.n(u),d=r("exGp"),v=r.n(d),m=r("mtWM"),f=r.n(m),p=(r("SyL9"),new a.default),_={data:function(){return{drawer:null,current_user:null}},props:{source:String},mounted:function(){this.fetchUser(),this.listenToEvents()},methods:{listenToEvents:function(){var e=this;p.$on("refreshUser",function(){e.fetchUser()})},fetchUser:function(){var e=this;return v()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",f()({method:"get",url:"/api/current_user"}).then(function(t){e.current_user=t.data.current_user}).catch(function(){}));case 1:case"end":return t.stop()}},t,e)}))()},logout:function(){var e=this;return f()({method:"get",url:"/api/logout"}).then(function(){p.$emit("refreshUser"),e.$router.push({name:"Home"})}).catch(function(){})}}},h={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"inspire"}},[r("v-navigation-drawer",{attrs:{fixed:"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list",{attrs:{dense:""}},[r("router-link",{staticClass:"side_bar_link",attrs:{to:{name:"Home"}}},[r("v-list-tile",[r("v-list-tile-action",[r("v-icon",[e._v("home")])],1),e._v(" "),r("v-list-tile-content",[e._v("Home")])],1)],1),e._v(" "),r("router-link",{staticClass:"side_bar_link",attrs:{to:{name:"Contact"}}},[r("v-list-tile",[r("v-list-tile-action",[r("v-icon",[e._v("contact_mail")])],1),e._v(" "),r("v-list-tile-content",[e._v("Contact")])],1)],1)],1)],1),e._v(" "),r("v-toolbar",{attrs:{color:"indigo",dark:"",fixed:"",app:""}},[r("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),e._v(" "),r("v-toolbar-title",[e._v("Home")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[e.current_user&&"admin"===e.current_user.role?r("v-btn",{attrs:{id:"add_movie_link",flat:"",to:{name:"AddMovie"}}},[e._v("\n        Add Movie\n      ")]):e._e(),e._v(" "),e.current_user?r("v-btn",{attrs:{id:"user_email",flat:""}},[e._v(e._s(e.current_user.email))]):e._e(),e._v(" "),e.current_user?e._e():r("v-btn",{attrs:{flat:"",to:{name:"Register"},id:"register_btn"}},[e._v("\n        Register\n      ")]),e._v(" "),e.current_user?e._e():r("v-btn",{attrs:{flat:"",to:{name:"Login"},id:"login_btn"}},[e._v("Login")]),e._v(" "),e.current_user?r("v-btn",{attrs:{id:"logout_btn",flat:""},on:{click:e.logout}},[e._v("Logout")]):e._e()],1)],1),e._v(" "),r("v-content",[r("v-container",{attrs:{fluid:""}},[r("div",{attrs:{id:"app"}},[r("router-view")],1)])],1),e._v(" "),r("v-footer",{attrs:{color:"indigo",app:""}},[r("span",{staticClass:"white--text"},[e._v("© 2018")])])],1)},staticRenderFns:[]},b=r("VU/8")(_,h,!1,null,null,null).exports,w=r("/ocq"),g={name:"Movies",data:function(){return{movies:[]}},mounted:function(){this.fetchMovies()},methods:{fetchMovies:function(){var e=this;return v()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",f()({method:"get",url:"/movies"}).then(function(t){e.movies=t.data.movies}).catch(function(){}));case 1:case"end":return t.stop()}},t,e)}))()}}},x={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{row:"",wrap:""}},e._l(e.movies,function(t){return r("v-flex",{key:t._id,attrs:{xs4:""}},[r("v-card",[r("v-card-title",{attrs:{"primary-title":""}},[r("div",[r("div",{staticClass:"headline"},[r("v-btn",{attrs:{flat:"",to:"/movies/"+t._id}},[e._v("\n              "+e._s(t.name)+"\n            ")])],1),e._v(" "),r("span",{staticClass:"grey--text"},[e._v(e._s(t.release_year)+" ‧ "+e._s(t.genre))])])]),e._v(" "),r("v-card-text",[e._v("\n        "+e._s(t.description)+"\n      ")])],1)],1)}))},staticRenderFns:[]},k=r("VU/8")(g,x,!1,null,null,null).exports,y={render:function(){var e=this.$createElement;return(this._self._c||e)("v-layout",[this._v("\n  this is contact\n")])},staticRenderFns:[]},$=r("VU/8")(null,y,!1,null,null,null).exports,M={data:function(){return{valid:!0,name:"",description:"",genre:"",release_year:"",nameRules:[function(e){return!!e||"Movie name is required"}],genreRules:[function(e){return!!e||"Movie genre year is required"},function(e){return e&&e.length<=80||"Genre must be less than equal to 80 characters."}],releaseRules:[function(e){return!!e||"Movie release year is required"}],select:null,years:["2018","2017","2016","2015"]}},methods:{submit:function(){var e=this;return!this.$refs.form.validate()||f()({method:"post",data:{name:this.name,description:this.description,release_year:this.release_year,genre:this.genre},url:"/movies",headers:{"Content-Type":"application/json"}}).then(function(){e.$swal("Great!","Movie added successfully!","success"),e.$router.push({name:"Home"}),e.$refs.form.reset()}).catch(function(){e.$swal("Oh oo!","Could not add the movie!","error")})},clear:function(){this.$refs.form.reset()}}},R={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{attrs:{label:"Movie Name",rules:e.nameRules,required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),r("v-text-field",{attrs:{name:"input-7-1",label:"Movie Description","multi-line":""},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}}),e._v(" "),r("v-select",{attrs:{label:"Movie Release Year",items:e.years,required:"",rules:e.releaseRules},model:{value:e.release_year,callback:function(t){e.release_year=t},expression:"release_year"}}),e._v(" "),r("v-text-field",{attrs:{label:"Movie Genre",required:"",rules:e.genreRules},model:{value:e.genre,callback:function(t){e.genre=t},expression:"genre"}}),e._v(" "),r("v-btn",{attrs:{disabled:!e.valid},on:{click:e.submit}},[e._v("\n    submit\n  ")]),e._v(" "),r("v-btn",{on:{click:e.clear}},[e._v("clear")])],1)},staticRenderFns:[]},C=r("VU/8")(M,R,!1,null,null,null).exports,q={name:"Movie",data:function(){return{movie:[]}},mounted:function(){this.fetchMovie()},methods:{fetchMovie:function(){var e=this;return v()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",f()({method:"get",url:"http://localhost:8081/api/movies/"+e.$route.params.id}).then(function(t){e.movie=t.data}).catch(function(){}));case 1:case"end":return t.stop()}},t,e)}))()}}},E={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs4:""}},[r("v-card",[r("v-card-title",{attrs:{"primary-title":""}},[r("div",[r("div",{staticClass:"headline"},[e._v(e._s(e.movie.name))]),e._v(" "),r("span",{staticClass:"grey--text"},[e._v(e._s(e.movie.release_year)+" ‧ "+e._s(e.movie.genre))])])]),e._v(" "),r("h6",{staticClass:"card-title"},[e._v("Rate this movie")]),e._v(" "),r("v-card-text",[e._v("\n        "+e._s(e.movie.description)+"\n      ")])],1)],1)],1)},staticRenderFns:[]},U=r("VU/8")(q,E,!1,null,null,null).exports,H={data:function(){return{valid:!0,name:"",email:"",password:"",confirm_password:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/\S+@\S+\.\S+/.test(e)||"E-mail must be valid"}]}},methods:{submit:function(){var e=this;return v()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$refs.form.validate()){t.next=2;break}return t.abrupt("return",f()({method:"post",data:{name:e.name,email:e.email,password:e.password},url:"/users/register",headers:{"Content-Type":"application/json"}}).then(function(){e.$swal("Great!","You have been successfully registered!","success"),e.$router.push({name:"Login"})}).catch(function(t){var r=t.response.data.message;e.$swal("Oh oo!",""+r,"error")}));case 2:return t.abrupt("return",!0);case 3:case"end":return t.stop()}},t,e)}))()},clear:function(){this.$refs.form.reset()}}},S={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{attrs:{label:"Name",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),r("v-text-field",{attrs:{label:"Email",rules:e.emailRules,required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),r("v-text-field",{attrs:{label:"Password",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),r("v-text-field",{attrs:{name:"input-7-1",label:"Confirm Password"},model:{value:e.confirm_password,callback:function(t){e.confirm_password=t},expression:"confirm_password"}}),e._v(" "),r("v-btn",{attrs:{disabled:!e.valid},on:{click:e.submit}},[e._v("\n    submit\n  ")]),e._v(" "),r("v-btn",{on:{click:e.clear}},[e._v("clear")])],1)},staticRenderFns:[]},L=r("VU/8")(H,S,!1,null,null,null).exports,V={data:function(){return{valid:!0,email:"",password:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/\S+@\S+\.\S+/.test(e)||"E-mail must be valid"}]}},methods:{submit:function(){var e=this;return v()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",f()({method:"post",data:{email:e.email,password:e.password},url:"/users/login",headers:{"Content-Type":"application/json"}}).then(function(t){window.localStorage.setItem("auth",t.data.token),e.$swal("Great!","You are ready to start!","success"),p.$emit("refreshUser"),e.$router.push({name:"Home"})}).catch(function(t){var r=t.response.data.message;e.$swal("Oh oo!",""+r,"error"),e.$router.push({name:"Login"})}));case 1:case"end":return t.stop()}},t,e)}))()},clear:function(){this.$refs.form.reset()}}},F={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{attrs:{label:"Email",rules:e.emailRules,required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),r("v-text-field",{attrs:{label:"Password",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),r("v-btn",{attrs:{disabled:!e.valid},on:{click:e.submit}},[e._v("\n    submit\n  ")]),e._v(" "),r("v-btn",{on:{click:e.clear}},[e._v("clear")])],1)},staticRenderFns:[]},G=r("VU/8")(V,F,!1,null,null,null).exports;a.default.use(w.a);var T=new w.a({mode:"history",routes:[{path:"/",name:"Home",component:k},{path:"/contact",name:"Contact",component:$},{path:"/movies/add",name:"AddMovie",component:C},{path:"/movies/:id",name:"Movie",component:U},{path:"/users/register",name:"Register",component:L},{path:"/users/login",name:"Login",component:G}]});a.default.use(n.a),a.default.use(i.a),a.default.use(l.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:T,components:{App:b},template:"<App/>"})},SyL9:function(e,t){},qb6w:function(e,t){},zj2Q:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.d71de5c32a58d277e5b8.js.map