(this.webpackJsonpmarkdown_test=this.webpackJsonpmarkdown_test||[]).push([[0],{115:function(e,t,n){},342:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(9),s=n.n(i),c=(n(115),n(387)),o=n(100),l=n(70),d=n(69),h=n(30),p=n(15),u=n(16),j=n(14),b=n(18),m=n(17),O=n(26),f=n(86),x=n(52),v=n(373),g=n(392),y=n(370),C=n(371),w=n(6),S=n(393),k=n(372),T=n(68),F=n(2),I=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={timeoutCnt:0},a.copyToClipBoard=a.copyToClipBoard.bind(Object(j.a)(a)),a.copyTimeout=a.copyTimeout.bind(Object(j.a)(a)),a}return Object(u.a)(n,[{key:"copyToClipBoard",value:function(e){this.props.enqueueSnackbar("Code is now in your clipboard",{variant:"info"});var t=document.createElement("textarea");t.value=this.props.children,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t);var n=this.state.timeoutCnt;n++,this.setState({timeoutCnt:n}),setTimeout(this.copyTimeout,5e3)}},{key:"copyTimeout",value:function(){var e=this.state.timeoutCnt;e>0&&(e--,this.setState({timeoutCnt:e++}))}},{key:"render",value:function(){var e,t,n,a,r;(this.state.timeoutCnt>0?(t="!!   Copied   !!",n="primary"):(t="Copy code",n="primary"),e=void 0!==this.props.className?Object(F.jsx)("div",{children:Object(F.jsx)(y.a,{variant:"contained",size:"small",style:{marginBottom:12},color:n,onClick:this.copyToClipBoard,children:t})}):[],"lang-c"===this.props.className)?(r=1!==this.props.children.split(/\r\n|\r|\n/).length,a=Object(F.jsxs)("div",{children:[Object(F.jsx)(C.a,{}),Object(F.jsx)("div",{children:Object(F.jsx)(S.a,{language:"c",style:k.a,showLineNumbers:r,wrapLongLines:!0,codeTagProps:{style:{fontFamily:"inherit"}},children:this.props.children})}),e,Object(F.jsx)(C.a,{})]})):a=Object(F.jsx)("i",{children:Object(F.jsx)("code",{children:this.props.children})});return a}}]),n}(a.Component),L=Object(T.b)(Object(w.a)((function(e){return{button:{margin:e.spacing(1)},input:{display:"none"}}}))(I)),N=r.a.createContext(""),P=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t={overrides:{h1:{component:function(e){var t=e.children;Object(O.a)(e,["children"]);return Object(F.jsxs)(x.a,{gutterBottom:!0,variant:"h4",children:[" ",t,"  "]})},props:{classes:this.props.classes}},h2:{component:function(e){var t=e.children;Object(O.a)(e,["children"]);return Object(F.jsxs)(x.a,{gutterBottom:!0,variant:"h6",children:[" ",t]})},props:{classes:this.props.classes}},h3:{component:function(e){var t=e.children;Object(O.a)(e,["children"]);return Object(F.jsxs)(x.a,{gutterBottom:!0,variant:"subtitle1",children:[" ",t]})},props:{classes:this.props.classes}},h4:{component:function(e){var t=e.children;Object(O.a)(e,["children"]);return Object(F.jsxs)(x.a,{gutterBottom:!0,variant:"caption",paragraph:!0,children:[" ",t]})},props:{classes:this.props.classes}},p:{component:function(e){var t=e.children;Object(O.a)(e,["children"]);return Object(F.jsxs)(x.a,{paragraph:!0,children:[t," "]})},props:{classes:this.props.classes}},a:{component:v.a},li:{component:function(e){var t=e.children;Object(O.a)(e,["children"]);return Object(F.jsx)("li",{children:Object(F.jsx)(x.a,{component:"span",children:t})})},props:{classes:this.props.classes}},code:{component:L},pre:{component:function(e){var t=e.children;Object(O.a)(e,["children"]);return Object(F.jsx)(a.Fragment,{children:t})}},img:{component:function(t){t.children;var n=Object(O.a)(t,["children"]);return Object(F.jsx)(a.Fragment,{children:Object(F.jsx)("img",{alt:n.alt,src:e.context+e.props.mdInfo.mdPath+"/img/"+n.src.replace("./img/",""),title:n.title,style:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",maxWidth:"100%",height:"auto"}})})}},ainfo:{component:function(e){var t=e.children;Object(O.a)(e,["children"]);return Object(F.jsx)(g.a,{variant:"filled",severity:"info",children:t})}},asucess:{component:function(e){var t=e.children;Object(O.a)(e,["children"]);return Object(F.jsx)(g.a,{variant:"filled",severity:"sucess",children:t})}},awarning:{component:function(e){var t=e.children;Object(O.a)(e,["children"]);return Object(F.jsx)(g.a,{variant:"filled",severity:"warning",children:t})}},aerror:{component:function(e){var t=e.children;Object(O.a)(e,["children"]);return Object(F.jsx)(g.a,{variant:"filled",severity:"error",children:t})}}}};return Object(F.jsx)(a.Fragment,{children:Object(F.jsx)(f.a,{children:this.props.children,options:t})})}}]),n}(a.Component);P.contextType=N;var D=Object(w.a)((function(e){return{STdarkBlue:{color:"#002052"},STlightBlue:{color:"#39A9DC"},fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}}))(P),B=n(390),E=n(375),A=n(376),R=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).scrollTop=function(){window.scrollTo({top:0,behavior:"smooth"})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props.classes,n=this.props.mdChapters,a=(n=n.split(/(^#\s.*\r\n\r\n)/g)).map((function(t,n){return Object(F.jsx)(D,{children:t,enqueueSnackbar:e.props.enqueueSnackbar,mdInfo:e.props.mdInfo,routerLocation:e.props.routerLocation},n)}));return Object(F.jsxs)(B.a,{justify:"flex-start",spacing:0,style:{padding:24},children:[a,Object(F.jsx)(E.a,{"aria-label":"Add",className:t.fab,color:"primary",onClick:this.scrollTop,children:Object(F.jsx)(A.a,{})})]})}}]),n}(a.Component),G=Object(w.a)((function(e){return{fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}}))(R),U=n(377),W=n(394),_=n(379),q=n(380),z=n(381),J=n(11),H=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var a;Object(p.a)(this,n);var r=(a=t.call(this,e)).props.mdChapters;(r=r.split(/(?=#\s.*[\r\n\r\n|\n\n])/g))[0].search(/^[\r\n\r\n|\n\n]/)>=0&&r.shift();var i=r.length;return a.state={slideIndex:0,mdChapters:r,mdChapterSize:i,slide:!0,slideToShow:0,reroute:!1,enter:!0},a.nextSlide=a.nextSlide.bind(Object(j.a)(a)),a.previousSlide=a.previousSlide.bind(Object(j.a)(a)),a.firstSlide=a.firstSlide.bind(Object(j.a)(a)),a.onExited=a.onExited.bind(Object(j.a)(a)),a.onEnter=a.onEnter.bind(Object(j.a)(a)),a}return Object(u.a)(n,[{key:"firstSlide",value:function(){var e=this.state.slideIndex;this.setState({previousIndex:e,slideIndex:0,slide:!1})}},{key:"nextSlide",value:function(){var e=this.state.slideIndex+1;e>=this.state.mdChapterSize?console.log("\xe7ondition fail"):this.setState({slideIndex:e,slide:!1})}},{key:"previousSlide",value:function(){var e=this.state.slideIndex-1;e<0&&(e=0),this.setState({slideIndex:e,slide:!1})}},{key:"onExited",value:function(){this.setState({slideToShow:this.state.slideIndex,slide:!0,reroute:!0})}},{key:"onEnter",value:function(e){this.setState({slideIndex:e,slideToShow:e,enter:!1})}},{key:"render",value:function(){var e=this,t=this.props.classes,n=Object(F.jsxs)(J.d,{children:[Object(F.jsx)(J.b,{exact:!0,path:"".concat(this.props.match.url,"/:id"),render:function(t){var n=t.match,r=parseInt(n.params.id);return e.state.reroute?Object(F.jsx)(J.a,{push:!0,to:"".concat(e.props.match.url,"/").concat(e.state.slideIndex)}):(e.state.enter&&setTimeout(e.onEnter,0,r),Object(F.jsx)(a.Fragment,{}))}}),Object(F.jsx)(J.a,{exact:!0,from:"".concat(this.props.match.url),to:"".concat(this.props.match.url,"/0")})]}),r=Object(F.jsx)(a.Fragment,{children:Object(F.jsx)(U.a,{in:this.state.slide,unmountOnExit:!0,mountOnEnter:!0,onExited:this.onExited,children:Object(F.jsx)("div",{children:Object(F.jsx)(D,{children:this.state.mdChapters[this.state.slideToShow],mdInfo:this.props.mdInfo})})})});return Object(F.jsxs)(B.a,{justify:"flex-start",spacing:0,style:{padding:24},children:[n,r,Object(F.jsx)(W.a,{title:"First slide","aria-label":"First slide",children:Object(F.jsx)(E.a,{"aria-label":"First slide",className:t.fabLL,color:"primary",onClick:this.firstSlide,children:Object(F.jsx)(_.a,{})})}),Object(F.jsx)(W.a,{title:"Previous slide","aria-label":"Previous slide",children:Object(F.jsx)(E.a,{"aria-label":"Previous slide",className:t.fabL,color:"primary",onClick:this.previousSlide,children:Object(F.jsx)(q.a,{})})}),Object(F.jsx)(E.a,{"aria-label":"Slide",className:t.fabC,variant:"extended",children:"  ".concat(this.state.slideIndex+1," / ").concat(this.state.mdChapters.length,"  ")}),Object(F.jsx)(W.a,{title:"Next slide","aria-label":"Next slide",children:Object(F.jsx)(E.a,{"aria-label":"Next slide",className:t.fabR,color:"primary",onClick:this.nextSlide,children:Object(F.jsx)(z.a,{})})})]})}}]),n}(a.Component),M=Object(w.a)((function(e){return{fabR:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)},fabC:{position:"fixed",bottom:e.spacing(10),right:e.spacing(2)},fabL:{position:"fixed",bottom:e.spacing(2),right:e.spacing(10)},fabLL:{position:"fixed",bottom:e.spacing(2),right:e.spacing(18)}}}))(H),V=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e,t=this,n=/^----!(\r\n|\n)Presentation(\r\n|\n)----!/,r=this.props.mdInfo.mdContent;return r.search(n)>=0?(console.log("presenation mode"),r=r.split(n).pop(),e=Object(F.jsx)(J.b,{to:"".concat(this.props.match.path),render:function(e){return Object(F.jsx)(M,Object(h.a)({mdChapters:r,mdInfo:t.props.mdInfo},e))}})):(console.log("document mode"),e=Object(F.jsx)(G,{mdChapters:r,mdInfo:this.props.mdInfo})),Object(F.jsx)(a.Fragment,{children:e})}}]),n}(a.Component),$=n(374),K=n(386),Q=n(385),X=n(99),Y=n.n(X),Z=n(384),ee=n(391),te=n(382),ne=n(383),ae=n(369),re=n(96),ie=n.n(re),se=n(97),ce=n.n(se),oe=n(37),le=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var a;function r(t){return"Folder"===t.type?function(e){return e.children.find((function(e){return r(e)}))}(t):!!e.location.pathname.includes("".concat(e.match.url,"/").concat(t.file))}Object(p.a)(this,n);var i=r((a=t.call(this,e)).props.item);return i=void 0!==i,a.state={expand:i},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props,r=t.theme,i=t.classes,s=this.props.item,c={};this.props.depth>0&&(c={paddingLeft:r.spacing(4)*this.props.depth});var o={};if("Folder"===s.type){var l=s.children.map((function(t){return Object(F.jsx)(J.b,{to:"".concat(e.props.match.path),render:function(a){return Object(F.jsx)(n,Object(h.a)({item:t,depth:e.props.depth+1,selectCb:e.props.selectCb,theme:r,classes:i},a),t.name)}},t.name)}));o=Object(F.jsxs)(a.Fragment,{children:[Object(F.jsxs)(te.a,{button:!0,style:c,onClick:function(t){return e.setState({expand:!e.state.expand})},children:[Object(F.jsx)(ne.a,{inset:!0,primary:s.name,disableTypography:!0,className:i.Folder}),this.state.expand?Object(F.jsx)(ie.a,{}):Object(F.jsx)(ce.a,{})]}),Object(F.jsx)(ae.a,{in:this.state.expand,timeout:"auto",unmountOnExit:!0,children:Object(F.jsx)(Z.a,{component:"div",disablePadding:!0,children:l})})]})}else if("File"===s.type){var d=!1;this.props.location.pathname.includes("".concat(this.props.match.url,"/").concat(s.file))&&(d=!0),o=Object(F.jsx)(te.a,{button:!0,selected:d,style:c,onClick:function(t){return e.props.selectCb(s.name)},component:oe.b,to:"".concat(this.props.match.url,"/").concat(s.file),children:Object(F.jsx)(ne.a,{disableTypography:!0,inset:!0,primary:s.name,className:i.File})})}return Object(F.jsx)(a.Fragment,{children:o})}}]),n}(a.Component),de=Object(w.a)((function(e){return{Folder:{color:"#002052",fontWeight:"bold"},File:{color:"#002052",fontWeight:"500"}}}),{withTheme:!0})(le),he=n(98),pe=n.n(he),ue=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).closeDrawer=a.closeDrawer.bind(Object(j.a)(a)),a}return Object(u.a)(n,[{key:"closeDrawer",value:function(){console.log(this),this.props.drawerChange(!1)}},{key:"render",value:function(){var e=this,t=this.props.classesToUse,n=this.props.menuItems.map((function(t,n){return Object(F.jsx)(J.b,{to:"".concat(e.props.match.path),render:function(n){return Object(F.jsx)(de,Object(h.a)({item:t,depth:0,selectCb:e.props.selectCb,classesToUse:e.props.classesToUse},n),t.name)}},n)})),a=Object(F.jsx)(Z.a,{component:"nav",children:n});return Object(F.jsxs)(ee.a,{className:t.drawer,variant:"persistent",open:this.props.isDrawerOpen,classes:{paper:t.drawerPaper},anchor:"left",children:[Object(F.jsx)(Q.a,{children:Object(F.jsx)($.a,{onClick:this.closeDrawer,color:"inherit","aria-label":"open drawer",edge:"start",children:Object(F.jsx)(pe.a,{})})}),Object(F.jsx)(C.a,{}),a]})}}]),n}(a.Component),je=Object(w.a)((function(e){return{}}))(ue),be=320,me=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={mdFilesContent:[],mdSelected:"",isDrawerOpen:!0,menuStructure:[],mdfilesToLoadArr:[],mdGithubLoc:"",githubPage:""},a.itemSelectedCb=a.itemSelectedCb.bind(Object(j.a)(a)),a.drawerOpenClose=a.drawerOpenClose.bind(Object(j.a)(a)),a.handleDrawerOpen=a.handleDrawerOpen.bind(Object(j.a)(a)),a.fetchRestOfFiles=a.fetchRestOfFiles.bind(Object(j.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e;e="https://raw.githubusercontent.com/".concat(this.props.match.params.githubName,"/").concat(this.props.match.params.githubRepository,"/master/doc"),this.fetchRestOfFiles(e)}},{key:"fetchRestOfFiles",value:function(e){var t,n=this,a=[];fetch(e+"/filesToLoad.json").then((function(e){return e.json()})).then((function(e){t=e})).then((function(){var r=t.filesToLoadArr.map((function(t){return fetch(e+t.path+"/"+t.file).then((function(e){return e.text()})).then((function(e){var n={name:t.name,mdContent:e,mdPath:t.path,mdFile:t.file};a.push(n)}))}));Promise.all(r).then((function(){n.setState({mdFilesContent:a,menuStructure:t.menuStructure,mdfilesToLoadArr:t.filesToLoadArr,mdGithubLoc:t.githubLoc,githubPage:e})}))}))}},{key:"itemSelectedCb",value:function(e){this.setState({mdSelected:e})}},{key:"handleDrawerOpen",value:function(){console.log(this),this.drawerOpenClose(!0)}},{key:"drawerOpenClose",value:function(e){this.setState({isDrawerOpen:e})}},{key:"render",value:function(){var e,t,n,r,i,s,c=this,o=this.props.classes,l={};if(0===this.state.mdFilesContent.length)l.name="Loading",l.mdContent="",l.mdPath="";else if(1===this.state.mdFilesContent.length){l=this.state.mdFilesContent[0];var d=this.state.menuStructure[0];e=Object(F.jsx)(J.b,{to:"".concat(this.props.match.path),render:function(e){return Object(F.jsx)(je,Object(h.a)({classesToUse:o,menuItems:c.state.menuStructure,selectCb:c.itemSelectedCb,isDrawerOpen:c.state.isDrawerOpen,drawerChange:c.drawerOpenClose,match:c.props.match},e))}}),t=Object(F.jsx)(J.b,{path:"".concat(this.props.match.path,"/").concat(d.file),render:function(e){return Object(F.jsx)(N.Provider,{value:c.state.githubPage,children:Object(F.jsx)(V,Object(h.a)({mdInfo:l},e))})}})}else e=Object(F.jsx)(J.b,{to:"".concat(this.props.match.path),render:function(e){return Object(F.jsx)(je,Object(h.a)({classesToUse:o,menuItems:c.state.menuStructure,selectCb:c.itemSelectedCb,isDrawerOpen:c.state.isDrawerOpen,drawerChange:c.drawerOpenClose,match:c.props.match},e))}}),l=this.state.mdFilesContent.find((function(e){return e.name===c.state.mdSelected})),(t=this.state.mdFilesContent.map((function(e,t){return Object(F.jsx)(J.b,{path:"".concat(c.props.match.path,"/").concat(e.mdFile),render:function(t){return Object(F.jsx)(N.Provider,{value:c.state.githubPage,children:Object(F.jsx)(V,Object(h.a)({mdInfo:e},t))})}},t)}))).push(Object(F.jsx)(J.b,{exact:!0,path:"".concat(this.props.match.path),render:function(e){return Object(F.jsx)(a.Fragment,{})}},"main screen not selected item")),void 0===l&&((l={}).name="",l.mdContent="",l.mdPath="");this.state.isDrawerOpen?(n=o.appBarOpen,r=o.contentShift):(i=Object(F.jsx)($.a,{color:"inherit","aria-label":"open drawer",onClick:this.handleDrawerOpen,edge:"start",children:Object(F.jsx)(Y.a,{})}),n=o.appBarClose,e=null,r=o.content);var p=this.state.mdfilesToLoadArr.find((function(e){return c.props.location.pathname.includes(e.file)}));if(void 0!==p){var u="".concat(this.state.mdGithubLoc).concat(p.path,"/").concat(p.file);l.name=p.name,s=Object(F.jsx)(y.a,{target:"_blank",href:u,color:"inherit",children:"EDIT THIS PAGE"})}return Object(F.jsxs)("div",{className:o.root,children:[e,Object(F.jsx)(K.a,{position:"fixed",className:n,children:Object(F.jsxs)(Q.a,{children:[i,Object(F.jsx)(x.a,{variant:"h6",color:"inherit",className:o.title,children:l.name}),s]})}),Object(F.jsx)(B.a,{className:r,children:Object(F.jsxs)(T.a,{maxSnack:3,children:[Object(F.jsx)("div",{className:o.toolbar}),t]})})]})}}]),n}(a.Component),Oe=Object(w.a)((function(e){return{root:{display:"flex"},drawer:{width:be,flexShrink:0},drawerPaper:{width:be},appBarClose:{marginLeft:be,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarOpen:{width:"calc(100% - ".concat(be,"px)"),marginLeft:be,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:0},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},toolbar:e.mixins.toolbar,nested:{paddingLeft:e.spacing(4)},title:{flexGrow:1}}}))(me),fe=n(388),xe=(n(341),Object(o.a)({typography:{useNextVariants:!0,fontFamily:["Roboto","Arial"].join(",")},palette:{primary:l.a,secondary:d.a,text:{primary:"#002052"}}}));var ve=function(){var e;return e=Object(F.jsx)(J.b,{path:"/:githubName/:githubRepository",component:Oe}),Object(F.jsx)(oe.a,{basename:"/tomas_materials_v1",children:Object(F.jsxs)(c.a,{theme:xe,children:[Object(F.jsx)(fe.a,{}),Object(F.jsx)("div",{className:"App",children:Object(F.jsx)(J.d,{children:e})})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(F.jsx)(ve,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[342,1,2]]]);
//# sourceMappingURL=main.89f659f0.chunk.js.map