(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1934:function(e,t,a){"use strict";a.r(t);var n=a(5),l=a(22),r=a(28),i=a(32),c=a(31),o=a(0),s=a.n(o),m=a(54),u=a(4),d=a.n(u),p=a(120),f=a(10),g=a(1517),h=a.n(g),b=a(102),E=a(548),v=a(36),y=a(1302),x=a(1271),S=a(1320),N=a(1412),O=a(105),j=a(23),T=a(152),_=a(1930),k=a(1931),w=a(1332),C=a(1329),L=a(60),M=a(1269),P=a(200);var R=Object(M.a)({},{withTheme:!0})(Object(m.b)(function(e){return{getNotification:u.PropTypes.func.isRequired,deleteNotification:u.PropTypes.func.isRequired,deleteAllNotification:u.PropTypes.func.isRequired,notification:e.notification,settings:e.layout.settings}},{getNotification:P.g,deleteNotification:P.f,deleteAllNotification:P.e})(function(e){var t=e.container,a=e.theme,n=e.settings,l=e.notification,r=void 0===l?[]:l,i=e.getNotification,c=e.deleteAllNotification,o=e.deleteNotification,m=s.a.useState(!1),u=Object(T.a)(m,2),d=u[0],p=u[1];function f(){d||i(),p(!d)}var g=a.palette;return s.a.createElement(y.a,{theme:n.themes[n.activeTheme]},s.a.createElement(x.a,{onClick:f,style:{color:"light"===g.type?g.text.secondary:g.text.primary}},s.a.createElement(_.a,{color:"secondary",badgeContent:5},s.a.createElement(S.a,null,"notifications"))),s.a.createElement(k.a,{width:"100px",container:t,variant:"temporary",anchor:"right",open:d,onClose:f,ModalProps:{keepMounted:!0}},s.a.createElement("div",{className:"notification"},s.a.createElement("div",{className:"notification__topbar flex flex-middle p-16 mb-24"},s.a.createElement(S.a,{color:"primary"},"notifications"),s.a.createElement("h5",{className:"ml-8 my-0 font-weight-500"},"Notifications")),r.map(function(e){return s.a.createElement("div",{key:e.id,className:"notification__card position-relative"},s.a.createElement(x.a,{size:"small",className:"delete-button bg-light-gray mr-24",onClick:function(){return o(e.id)}},s.a.createElement(S.a,{className:"text-muted",fontSize:"small"},"clear")),s.a.createElement(L.a,{to:"/".concat(e.path),onClick:f},s.a.createElement(w.a,{className:"mx-16 mb-24",elevation:3},s.a.createElement("div",{className:"card__topbar flex flex-middle flex-space-between p-8 bg-light-gray"},s.a.createElement("div",{className:"flex"},s.a.createElement("div",{className:"card__topbar__button"},s.a.createElement(S.a,{className:"card__topbar__icon",fontSize:"small",color:e.icon.color},e.icon.name)),s.a.createElement("span",{className:"ml-4 font-weight-500 text-muted"},e.heading)),s.a.createElement("small",{className:"card__topbar__time text-muted"},Object(b.c)(new Date(e.timestamp))," ago")),s.a.createElement("div",{className:"px-16 pt-8 pb-16"},s.a.createElement("p",{className:"m-0"},e.title),s.a.createElement("small",{className:"text-muted"},e.subtitle)))))}),s.a.createElement("div",{className:"text-center"},s.a.createElement(C.a,{onClick:c},"Clear Notifications")))))})),D=a(107),U=!1;var A=Object(M.a)({},{withTheme:!0})(Object(m.b)(function(e){return{settings:e.layout.settings,getCartList:u.PropTypes.func.isRequired,deleteProductFromCart:u.PropTypes.func.isRequired,updateCartAmount:u.PropTypes.func.isRequired,cartList:e.ecommerce.cartList,user:e.user}},{getCartList:D.j,deleteProductFromCart:D.i,updateCartAmount:D.k})(function(e){var t=e.container,a=e.theme,n=e.settings,l=e.cartList,r=void 0===l?[]:l,i=e.getCartList,c=e.deleteProductFromCart,o=e.updateCartAmount,m=e.user,u=s.a.useState(!1),d=Object(T.a)(u,2),p=d[0],f=d[1];function g(){f(!p)}U||(i(m.userId),U=!0);var h=a.palette;return s.a.createElement(y.a,{theme:n.themes[n.activeTheme]},s.a.createElement(x.a,{onClick:g,style:{color:"light"===h.type?h.text.secondary:h.text.primary}},s.a.createElement(_.a,{color:"secondary",badgeContent:r.length},s.a.createElement(S.a,null,"shopping_cart"))),s.a.createElement(k.a,{container:t,variant:"temporary",anchor:"right",open:p,onClose:g,ModalProps:{keepMounted:!0}},s.a.createElement("div",{className:"mini-cart"},s.a.createElement("div",{className:"cart__topbar flex flex-middle p-16 mb-24"},s.a.createElement(S.a,{color:"primary"},"shopping_cart"),s.a.createElement("h5",{className:"ml-8 my-0 font-weight-500"},"Cart")),r.map(function(e){return s.a.createElement("div",{key:e.id,className:"mini-cart__item flex flex-middle flex-space-between py-16 px-8"},s.a.createElement("div",{className:"flex flex-column mr-8"},s.a.createElement(x.a,{size:"small",onClick:function(){return o(m.userId,e.id,e.amount+1)}},s.a.createElement(S.a,{className:"cursor-pointer"},"keyboard_arrow_up")),s.a.createElement(x.a,{disabled:!(e.amount-1),size:"small",onClick:function(){return o(m.userId,e.id,e.amount-1)}},s.a.createElement(S.a,{className:"cursor-pointer"},"keyboard_arrow_down"))),s.a.createElement("div",{className:"mr-8"},s.a.createElement("img",{src:e.imgUrl,alt:e.title})),s.a.createElement("div",{className:"mr-8 text-center"},s.a.createElement("h6",{className:"m-0 mb-4"},e.title),s.a.createElement("small",{className:"text-muted"},"$",e.price," x ",e.amount)),s.a.createElement(x.a,{size:"small",onClick:function(){return c(m.userId,e.id)}},s.a.createElement(S.a,{fontSize:"small"},"clear")))}))))})),I=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={},e.updateSidebarMode=function(t){var a=e.props,l=a.settings;(0,a.setLayoutSettings)(Object(n.a)(Object(n.a)({},l),{},{layout1Settings:Object(n.a)(Object(n.a)({},l.layout1Settings),{},{leftSidebar:Object(n.a)(Object(n.a)({},l.layout1Settings.leftSidebar),t)})}))},e.handleSidebarToggle=function(){var t,a=e.props.settings.layout1Settings;t=Object(b.d)()?"close"===a.leftSidebar.mode?"mobile":"close":"full"===a.leftSidebar.mode?"close":"full",e.updateSidebarMode({mode:t})},e.handleSignOut=function(){e.props.logoutUser()},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.theme,a=e.settings,n=e.className,l=e.style,r=a.themes[a.layout1Settings.topbar.theme]||t;return s.a.createElement(y.a,{theme:r},s.a.createElement("div",{className:"topbar"},s.a.createElement("div",{className:"topbar-hold ".concat(n),style:Object.assign({},{backgroundColor:r.palette.primary.main},l)},s.a.createElement("div",{className:"flex flex-space-between flex-middle h-100"},s.a.createElement("div",{className:"flex"},s.a.createElement(x.a,{onClick:this.handleSidebarToggle,className:"hide-on-lg"},s.a.createElement(S.a,null,"menu")),s.a.createElement("div",{className:"hide-on-mobile"},s.a.createElement(x.a,null,s.a.createElement(S.a,null,"mail_outline")),s.a.createElement(x.a,null,s.a.createElement(S.a,null,"web_asset")),s.a.createElement(x.a,null,s.a.createElement(S.a,null,"star_outline")))),s.a.createElement("div",{className:"flex flex-middle"},s.a.createElement(j.f,null),s.a.createElement(R,null),s.a.createElement(A,null),s.a.createElement(j.d,{menuButton:s.a.createElement("img",{className:"mx-8 text-middle circular-image-small cursor-pointer",src:"/assets/images/face-6.jpg",alt:"user"})},s.a.createElement(N.a,{style:{minWidth:185}},s.a.createElement(L.a,{className:"flex flex-middle",to:"/"},s.a.createElement(S.a,null," home "),s.a.createElement("span",{className:"pl-16"}," Home "))),s.a.createElement(N.a,{style:{minWidth:185}},s.a.createElement(L.a,{className:"flex flex-middle",to:"/page-layouts/user-profile"},s.a.createElement(S.a,null," person "),s.a.createElement("span",{className:"pl-16"}," Profile "))),s.a.createElement(N.a,{className:"flex flex-middle",style:{minWidth:185}},s.a.createElement(S.a,null," settings "),s.a.createElement("span",{className:"pl-16"}," Settings ")),s.a.createElement(N.a,{onClick:this.handleSignOut,className:"flex flex-middle",style:{minWidth:185}},s.a.createElement(S.a,null," power_settings_new "),s.a.createElement("span",{className:"pl-16"}," Logout "))))))))}}]),a}(o.Component),q=Object(f.a)(function(e){return{root:{backgroundColor:e.palette.primary.main}}},{withTheme:!0})(Object(v.g)(Object(m.b)(function(e){return{setLayoutSettings:u.PropTypes.func.isRequired,logoutUser:u.PropTypes.func.isRequired,settings:e.layout.settings}},{setLayoutSettings:p.d,logoutUser:O.d})(I))),z=a(1478),F=a(1470),W=[{name:"Dashboard",path:"/dashboard/analytics",icon:"dashboard"},{name:"Forms",icon:"description",children:[{name:"Basic",path:"/forms/basic",iconText:"B"},{name:"Editor",path:"/forms/editor",iconText:"E"}]},{name:"Drag and Drop",icon:"control_camera",path:"/others/drag-and-drop"},{name:"Multilevel",icon:"trending_up",children:[{name:"Level 1",icon:"list",children:[{name:"Item 1",path:"/charts/victory-charts",iconText:"1"},{name:"Item 2",path:"/charts/react-vis",iconText:"2"},{name:"Item 3",path:"/charts/recharts",iconText:"3"},{name:"Item 4",path:"/charts/echarts",iconText:"4"}]}]},{name:"Utilities",icon:"format_list_bulleted",children:[{name:"Color",path:"/utilities/color",iconText:"C"},{name:"Spacing",path:"/utilities/spacing",iconText:"S"},{name:"Typography",path:"/utilities/typography",iconText:"T"},{name:"Display",path:"/utilities/display",iconText:"D"}]},{name:"Sessions",icon:"trending_up",children:[{name:"Sign in",iconText:"SI",path:"/session/signin"},{name:"Sign up",iconText:"SU",path:"/session/signup"},{name:"Forgot password",iconText:"FP",path:"/session/forgot-password"},{name:"Error",iconText:"404",path:"/session/404"}]},{name:"UI Kits",icon:"favorite",badge:{value:"50+",color:"secondary"},children:[{name:"Auto Complete",path:"/material/autocomplete",iconText:"A"},{name:"Buttons",path:"/material/buttons",iconText:"B"},{name:"Checkbox",path:"/material/checkbox",iconText:"C"},{name:"Dialog",path:"/material/dialog",iconText:"D"},{name:"Expansion Panel",path:"/material/expansion-panel",iconText:"E"},{name:"Form",path:"/material/form",iconText:"F"},{name:"Icons",path:"/material/icons",iconText:"I"},{name:"Menu",path:"/material/menu",iconText:"M"},{name:"Progress",path:"/material/progress",iconText:"P"},{name:"Radio",path:"/material/radio",iconText:"R"},{name:"Switch",path:"/material/switch",iconText:"S"},{name:"Slider",path:"/material/slider",iconText:"S"},{name:"Snackbar",path:"/material/snackbar",iconText:"S"},{name:"Table",path:"/material/table",iconText:"T"}]},{name:"Map",icon:"add_location",path:"/map"}],B=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={},e.updateSidebarMode=function(t){var a=e.props,l=a.settings,r=a.setLayoutSettings,i=l.activeLayout+"Settings",c=l[i];r(Object(n.a)(Object(n.a)({},l),{},{[i]:Object(n.a)(Object(n.a)({},c),{},{leftSidebar:Object(n.a)(Object(n.a)({},c.leftSidebar),t)})}))},e.renderOverlay=function(){return s.a.createElement("div",{onClick:function(){return e.updateSidebarMode({mode:"close"})},className:"sidenav__overlay"})},e}return Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement(o.Fragment,null,s.a.createElement(h.a,{option:{suppressScrollX:!0},className:"scrollable position-relative"},this.props.children,s.a.createElement(j.g,{navigation:W})),this.renderOverlay())}}]),a}(o.Component),H=Object(v.g)(Object(m.b)(function(e){return{setLayoutSettings:d.a.func.isRequired,settings:e.layout.settings}},{setLayoutSettings:p.d})(B)),J=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"flex flex-middle flex-space-between brand-area"},s.a.createElement("div",{className:"flex flex-middle brand"},s.a.createElement("img",{src:"/assets/images/logo.png",alt:"company-logo"}),s.a.createElement("span",{className:"brand__text"},"Matx")),this.props.children)}}]),a}(o.Component),X=a(354),G=function(e){var t=e.theme,a=e.settings;return s.a.createElement(X.Helmet,null,s.a.createElement("style",null,"\n        \n        ".concat("dark"===t.palette.type?".sidenav {\n          color: ".concat(t.palette.text.secondary,";\n        }"):" ","\n\n        .sidenav__hold {\n          background-image: url(").concat(a.layout1Settings.leftSidebar.bgImgURL,");\n          opacity: 1 !important;\n        }\n        .sidenav__hold::after {\n          background: ").concat(t.palette.primary.main,";\n          opacity: ").concat(a.layout1Settings.leftSidebar.bgOpacity,";\n        }\n        .navigation .nav-item:not(.badge) {\n          color: ").concat(t.palette.text.primary,";\n        }\n        .navigation .nav-item .icon-text::after {\n          background: ").concat(t.palette.text.primary,";\n        }\n        .navigation .nav-item.active, \n        .navigation .nav-item.active:hover {\n          background: ").concat(t.palette.secondary.main,";\n        }\n\n        \n        ").concat("dark"===t.palette.type?".navigation .nav-item:hover,\n        .navigation .nav-item.active {\n          color: ".concat(t.palette.text.primary,";\n        }"):"","\n        \n      ")))},K=Object(f.a)(function(e){return{root:{backgroundColor:"transparent",padding:"5px"}}})(x.a),$=Object(f.a)(function(){return{root:{fontSize:"1rem"}}})(S.a),Q=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={sidenavToggleChecked:!1},e.updateSidebarMode=function(t){var a=e.props,l=a.settings,r=a.setLayoutSettings,i=a.setDefaultSettings,c=Object(n.a)(Object(n.a)({},l),{},{layout1Settings:Object(n.a)(Object(n.a)({},l.layout1Settings),{},{leftSidebar:Object(n.a)(Object(n.a)({},l.layout1Settings.leftSidebar),t)})});r(c),i(c)},e.handleSidenavToggle=function(){var t=e.state.sidenavToggleChecked,a=t?"full":"compact";e.updateSidebarMode({mode:a}),e.setState({sidenavToggleChecked:!t})},e.handleSignOut=function(){e.props.logoutUser()},e.renderLogoSwitch=function(){return s.a.createElement(J,null,s.a.createElement(z.a,{className:"sidenav__toggle show-on-lg",onChange:e.handleSidenavToggle,checked:!e.state.sidenavToggleChecked,color:"secondary"}))},e.renderUser=function(){var t=e.props.user;return s.a.createElement("div",{className:"sidenav__user"},s.a.createElement("div",{className:"username-photo"},s.a.createElement("img",{src:t.photoURL,alt:"user"})),s.a.createElement("div",{className:"ml-8"},s.a.createElement("span",{className:"username"},t.displayName),s.a.createElement("div",{className:"user__menu"},s.a.createElement(j.d,{menuButton:s.a.createElement(F.a,{title:"Settings"},s.a.createElement(K,{"aria-label":"Delete",className:"",size:"small"},s.a.createElement($,null," settings ")))},s.a.createElement(N.a,{className:"flex flex-middle",style:{minWidth:185}},s.a.createElement(S.a,null," home "),s.a.createElement("span",{className:"pl-16"}," Home ")),s.a.createElement(N.a,{className:"flex flex-middle",style:{minWidth:185}},s.a.createElement(S.a,null," settings "),s.a.createElement("span",{className:"pl-16"}," Account Setting "))),s.a.createElement(F.a,{title:"Profile"},s.a.createElement(K,{"aria-label":"Delete",className:"",size:"small"},s.a.createElement($,null,"person"))),s.a.createElement(F.a,{title:"Sign out"},s.a.createElement(K,{"aria-label":"Delete",className:"",size:"small",onClick:e.handleSignOut},s.a.createElement($,null,"exit_to_app"))))))},e}return Object(r.a)(a,[{key:"componentWillMount",value:function(){var e=this;this.unlistenRouteChange=this.props.history.listen(function(t,a){Object(b.d)()&&e.updateSidebarMode({mode:"close"})})}},{key:"componentWillUnmount",value:function(){this.unlistenRouteChange()}},{key:"render",value:function(){var e=this.props,t=e.theme,a=e.settings,n=a.themes[a.layout1Settings.leftSidebar.theme]||t;return s.a.createElement(y.a,{theme:n},s.a.createElement(G,{theme:n,settings:a}),s.a.createElement("div",{className:"sidenav"},s.a.createElement("div",{className:"sidenav__hold"},s.a.createElement(o.Fragment,null,this.renderLogoSwitch(),s.a.createElement(H,null,this.renderUser())))))}}]),a}(o.Component),V=Object(f.a)(function(e){return{}},{withTheme:!0})(Object(v.g)(Object(m.b)(function(e){return{setDefaultSettings:d.a.func.isRequired,setLayoutSettings:d.a.func.isRequired,logoutUser:d.a.func.isRequired,user:e.user,settings:e.layout.settings}},{setLayoutSettings:p.d,setDefaultSettings:p.c,logoutUser:O.d})(Q))),Y=Object(f.a)({},{withTheme:!0})(Object(m.b)(function(e){return{settings:e.layout.settings}},{})(function(e){var t=e.theme,a=e.settings,n=a.themes[a.footer.theme]||t;return s.a.createElement(y.a,{theme:n},s.a.createElement(X.Helmet,null,s.a.createElement("style",null,"\n              .footer {\n                background: ".concat(n.palette.primary.main,";\n                color: ").concat(n.palette.primary.contrastText,";\n              }\n            "))),s.a.createElement("div",{className:"footer flex flex-middle"},s.a.createElement("div",{className:"flex flex-middle container px-sm-30 w-100"},s.a.createElement("a",{href:"https://ui-lib.com/downloads/matx-react-material-design-admin-template/",className:"mr-8"},s.a.createElement(C.a,{variant:"contained",color:"error"},"Download Matx")),s.a.createElement("a",{href:"https://ui-lib.com/downloads/matx-pro-react-material-design-admin-template/"},s.a.createElement(C.a,{variant:"contained",color:"secondary"},"Get MatX Pro")),s.a.createElement("span",{className:"m-auto"}),s.a.createElement("p",{className:"m-0"},"Design and Developed by ",s.a.createElement("a",{href:"http://ui-lib.com"},"UI Lib")))))})),Z=a(171),ee=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).updateSidebarMode=function(t){var a=e.props,l=a.settings;(0,a.setLayoutSettings)(Object(n.a)(Object(n.a)({},l),{},{layout1Settings:Object(n.a)(Object(n.a)({},l.layout1Settings),{},{leftSidebar:Object(n.a)(Object(n.a)({},l.layout1Settings.leftSidebar),t)})}))},e}return Object(r.a)(a,[{key:"componentWillMount",value:function(){Object(b.d)()&&this.updateSidebarMode({mode:"close"})}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.settings,a=e.classes,n=e.theme,l=t.layout1Settings,r={[a.layout]:!0,["".concat(t.activeLayout," sidenav-").concat(l.leftSidebar.mode," theme-").concat(n.palette.type," flex")]:!0,"topbar-fixed":l.topbar.fixed};return s.a.createElement(Z.a.Consumer,null,function(e){var a=e.routes;return s.a.createElement("div",{className:Object(b.a)(r)},l.leftSidebar.show&&s.a.createElement(V,null),s.a.createElement("div",{className:"content-wrap position-relative"},l.topbar.show&&l.topbar.fixed&&s.a.createElement(q,{className:"elevation-z8"}),t.perfectScrollbar&&s.a.createElement(h.a,{className:"scrollable-content"},l.topbar.show&&!l.topbar.fixed&&s.a.createElement(q,{style:{height:"80px"}}),s.a.createElement("div",{className:"content"},Object(E.b)(a)),s.a.createElement("div",{className:"my-auto"}),t.footer.show&&!t.footer.fixed&&s.a.createElement(Y,null)),!t.perfectScrollbar&&s.a.createElement("div",{className:"scrollable-content"},l.topbar.show&&!l.topbar.fixed&&s.a.createElement(q,null),s.a.createElement("div",{className:"content"},Object(E.b)(a)),s.a.createElement("div",{className:"my-auto"}),t.footer.show&&!t.footer.fixed&&s.a.createElement(Y,null)),t.footer.show&&t.footer.fixed&&s.a.createElement(Y,null)))})}}]),a}(o.Component);t.default=Object(f.a)(function(e){return{layout:{backgroundColor:e.palette.background.default}}},{withTheme:!0})(Object(m.b)(function(e){return{setLayoutSettings:u.PropTypes.func.isRequired,settings:e.layout.settings}},{setLayoutSettings:p.d})(ee))}}]);
//# sourceMappingURL=25.74428172.chunk.js.map