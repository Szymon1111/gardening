(this["webpackJsonpgardening-manage"]=this["webpackJsonpgardening-manage"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(7),s=n.n(i),c=(n(12),n(13),n(14),n(15),n(16),n(2)),o=n(3),d=n(5),l=n(4),r=n(0),p=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={newTipContent:""},e.getClassName=function(e){return e?"popup-manage-box hidden":"popup-manage-box visible"},e.handleContentChange=function(t){e.setState({newTipContent:t.target.value})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.editTip,a=t.isHidden,i=t.tipID,s=t.tipCurContent,c=t.hideEditPopup;return Object(r.jsxs)("div",{className:this.getClassName(a),children:[Object(r.jsx)("div",{className:"close-popup-manage-box",onClick:function(){return c()},children:"X"}),Object(r.jsx)("h2",{className:"popup-manage-box-title",children:"Edytuj porad\u0119"}),Object(r.jsx)("textarea",{id:"new-tip-content",rows:"7",cols:"40",defaultValue:s,onChange:this.handleContentChange}),Object(r.jsx)("div",{className:"submit-button",onClick:function(){n(i,e.state.newTipContent),c()},children:"Edytuj"})]})}}]),n}(a.Component),u=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={isEditPopupHidden:!0},e.showEditPopup=function(){e.setState({isEditPopupHidden:!1})},e.hideEditPopup=function(){e.setState({isEditPopupHidden:!0})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.id,a=t.content,i=t.onDeleteTip,s=t.onEditTip;return Object(r.jsxs)("div",{className:"tip",children:[Object(r.jsx)("div",{className:"tip-content",children:a}),Object(r.jsxs)("div",{className:"flex-row manage-buttons",children:[Object(r.jsx)("div",{className:"manage-button delete",onClick:function(){return i(n)},children:"Usu\u0144"}),Object(r.jsx)("div",{className:"manage-button edit",onClick:function(){return e.showEditPopup()},children:"Edytuj"})]}),Object(r.jsx)(p,{editTip:s,tipID:n,tipCurContent:a,isHidden:this.state.isEditPopupHidden,hideEditPopup:this.hideEditPopup})]})}}]),n}(a.Component),A=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={newTipContent:""},e.handleContentChange=function(t){e.setState({newTipContent:t.target.value})},e.getClassName=function(e){return e?"popup-manage-box hidden":"popup-manage-box visible"},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.addTip,a=t.hidden,i=t.hideTipAddPopup;return Object(r.jsxs)("div",{className:this.getClassName(a),children:[Object(r.jsx)("div",{className:"close-popup-manage-box",onClick:function(){return i()},children:"X"}),Object(r.jsx)("h2",{className:"popup-manage-box-title",children:"Dodaj porad\u0119"}),Object(r.jsx)("textarea",{id:"new-tip-content",rows:"7",cols:"40",onChange:this.handleContentChange}),Object(r.jsx)("div",{className:"submit-button",onClick:function(){return n(e.state.newTipContent)},children:"Dodaj"})]})}}]),n}(a.Component),h=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={tips:[],isAddPopupHidden:!0,APIaddress:e.props.APIaddress},e.componentDidMount=function(){e.loadTipsFromDB()},e.loadTipsFromDB=function(){fetch("".concat(e.state.APIaddress,"/tips/getAll.php")).then((function(e){return e.json()})).then((function(t){e.setState({tips:t})}))},e.handleTipDelete=function(t){var n=e.state.tips.filter((function(e){return e.id!==t}));fetch("".concat(e.state.APIaddress,"/tips/delete.php?tipID=").concat(t)).then((function(){e.setState({tips:n})}))},e.handleTipEdit=function(t,n){e.setState({isEditPopupHidden:!0}),""!==n&&fetch("".concat(e.state.APIaddress,"/tips/edit.php?tipID=").concat(t,"&newContent=").concat(n)).then((function(){e.loadTipsFromDB()}))},e.handleTipAdd=function(t){e.setState({isAddPopupHidden:!0}),""!==t&&fetch("".concat(e.state.APIaddress,"/tips/add.php?tipContent=").concat(t)).then((function(){e.loadTipsFromDB()}))},e.hideTipAddPopup=function(){e.setState({isAddPopupHidden:!0})},e.showTipAddPopup=function(){e.setState({isAddPopupHidden:!1})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"manage-tips flex-column",children:[Object(r.jsxs)("div",{className:"manage-section-header flex-row",children:[Object(r.jsx)("h1",{className:"manage-section-title",children:"Przydatne porady"}),Object(r.jsx)("div",{className:"manage-button add",onClick:function(){e.showTipAddPopup()},children:"Dodaj porad\u0119"})]}),Object(r.jsx)("div",{className:"tips-content",children:this.state.tips.map((function(t){return Object(r.jsx)(u,{id:t.id,content:t.content,onDeleteTip:e.handleTipDelete,onEditTip:e.handleTipEdit},t.id)}))})]}),Object(r.jsx)(A,{addTip:this.handleTipAdd,hidden:this.state.isAddPopupHidden,hideTipAddPopup:this.hideTipAddPopup})]})}}]),n}(a.Component),m=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).getVisibilityClass=function(e){return 0===e?"image image-hidden":"image"},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.src,a=e.isVisible,i=e.onDelete,s=e.onVisibilityChange;return Object(r.jsx)("div",{className:this.getVisibilityClass(a),style:{backgroundImage:'url("http://localhost/gardening/images/gallery/'.concat(n,'")')},children:Object(r.jsxs)("div",{className:"image-controls flex-row",children:[Object(r.jsx)("img",{src:"data:image/png;base64,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",alt:"X",className:"image-control",onClick:function(){return i(t)},title:"Usu\u0144"}),Object(r.jsx)("img",{src:"data:image/png;base64,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",alt:"O",className:"image-control",onClick:function(){return s(t)},title:"Poka\u017c/Ukryj"})]})})}}]),n}(a.Component),j=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={filesToUpload:null},e.getClassName=function(e){return e?"popup-manage-box hidden":"popup-manage-box visible"},e.handleFilesChange=function(t){e.setState({filesToUpload:t.target.files})},e.handleFileUpload=function(t){for(var n=new FormData,a=0;a<t.length;a++)n.append("file".concat(a),t[a]);fetch("".concat(e.props.APIaddress,"/gallery/upload.php"),{method:"POST",body:n}).then((function(e){return e.json()})).then((function(t){e.props.handleImagesAdd()}))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.hidden,a=t.hideImageAddPopup;return Object(r.jsxs)("div",{className:this.getClassName(n),children:[Object(r.jsx)("div",{className:"close-popup-manage-box",onClick:function(){return a()},children:"X"}),Object(r.jsx)("h2",{className:"popup-manage-box-title",children:"Dodaj zdj\u0119cie"}),Object(r.jsx)("input",{type:"file",className:"file-input",multiple:!0,onChange:this.handleFilesChange}),Object(r.jsx)("div",{className:"submit-button",onClick:function(){e.handleFileUpload(e.state.filesToUpload)},children:"Dodaj"})]})}}]),n}(a.Component),g=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={images:[],APIaddress:e.props.APIaddress,isImageAddPopupHidden:!0},e.componentDidMount=function(){return e.getImages()},e.getImages=function(){fetch("".concat(e.state.APIaddress,"gallery/getAll.php")).then((function(e){return e.json()})).then((function(t){e.setState({images:t})}))},e.handleImageDelete=function(t){fetch("".concat(e.state.APIaddress,"/gallery/delete.php?id=").concat(t)).then((function(){var n=e.state.images.filter((function(e){return e.id!==t}));e.setState({images:n}),console.log("deleted")}))},e.handleImageVisibilityChange=function(t){var n=e.state.images.find((function(e){return e.id===t})),a=1===parseInt(n.isVisible)?0:1;fetch("".concat(e.state.APIaddress,"/gallery/changeVisibility.php?id=").concat(t,"&isVisible=").concat(a)).then((function(){var t=e.state.images;t[t.indexOf(n)].isVisible=a,e.setState({images:t})}))},e.handleImagesAdd=function(){e.getImages()},e.hideImageAddPopup=function(){e.setState({isImageAddPopupHidden:!0})},e.showImageAddPopup=function(){e.setState({isImageAddPopupHidden:!1})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{className:"gallery",children:[Object(r.jsxs)("div",{className:"manage-section-header flex-row",children:[Object(r.jsx)("h1",{className:"manage-section-title",children:"Galeria"}),Object(r.jsx)("div",{className:"manage-button add",onClick:function(){return e.showImageAddPopup()},children:"Dodaj zdj\u0119cie"})]}),Object(r.jsx)("div",{className:"content",children:this.state.images.map((function(t){return Object(r.jsx)(m,{id:t.id,src:t.name,isVisible:t.isVisible,onDelete:e.handleImageDelete,onVisibilityChange:e.handleImageVisibilityChange},t.id)}))}),Object(r.jsx)(j,{hidden:this.state.isImageAddPopupHidden,hideImageAddPopup:this.hideImageAddPopup,APIaddress:this.state.APIaddress,handleImagesAdd:this.handleImagesAdd})]})}}]),n}(a.Component),b=function(){var e="http://gardeningapi.epizy.com/API";return Object(r.jsxs)("main",{className:"main-container",children:[Object(r.jsx)(h,{APIaddress:e}),Object(r.jsx)(g,{APIaddress:e})]})};s.a.render(Object(r.jsx)(b,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.e3f867a9.chunk.js.map