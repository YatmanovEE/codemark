(this.webpackJsonpcodemark=this.webpackJsonpcodemark||[]).push([[0],{26:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a,r,c=n(0),s=n.n(c),o=n(5),i=n.n(o),u=n(6),l=function(){return Object(u.b)()},d=u.c,h=n(2),b=function(e){var t=e.notes;return function(e){e(v({notes:t})),setTimeout((function(){e(m())}),2e3)}},j=Object(h.c)({name:"Notice",initialState:{notes:""},reducers:{clearNotes:function(e){e.notes=""},addNotes:function(e,t){e.notes=t.payload.notes}}}),p=function(e){return e.notice.notes},f=j.actions,m=f.clearNotes,v=f.addNotes,O=j.reducer,x=n(35),w=(n(26),n(1)),g=function(){var e=d(p),t=Object(c.useRef)(null);return Object(w.jsx)(x.a,{unmountOnExit:!0,in:!!e,timeout:200,classNames:"notice_wrapper",nodeRef:t,children:Object(w.jsx)("div",{className:"wrapper notice_wrapper",ref:t,children:Object(w.jsx)("span",{children:e})})})},C=n(16),y=Object(h.c)({name:"search",initialState:{value:"",disabled:!0,error:""},reducers:{setValue:function(e,t){e.value=t.payload.value},clearValue:function(e){e.value=""},createError:function(e,t){e.error=t.payload.error,e.disabled=!0},clearError:function(e){e.error="",e.disabled=!1},setDisabled:function(e,t){e.disabled=t.payload.disabled}}});(r=a||(a={})).selectValue=function(e){return e.searchValue.value},r.selectError=function(e){return e.searchValue.error};var S,_,N=y.actions,L=N.setValue,k=N.clearValue,E=N.createError,V=N.clearError,I=N.setDisabled,R=y.reducer,T=n(15),D=n(8),J=n.n(D),Z=n(14),M=Object(h.b)("ShowCase/fetchShowCase",function(){var e=Object(Z.a)(J.a.mark((function e(t,n){var a,r,c,s,o,i;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.url,r=t.name,e.prev=1,e.next=4,fetch(a);case 4:if(200===(c=e.sent).status){e.next=8;break}return n.dispatch(b({notes:"\u0421\u0435\u0440\u0432\u0435\u0440 \u043e\u0442\u0432\u0435\u0442\u0438\u043b \u043e\u0448\u0438\u0431\u043a\u043e\u0439: ".concat(c.status)})),e.abrupt("return",n.rejectWithValue({message:c.status}));case 8:return e.next=10,c.json();case 10:return s=e.sent,e.next=13,s.data.fixed_height_downsampled_url;case 13:return o=e.sent,i=Date.now(),n.dispatch(U({name:r,date:i,src:o})),e.abrupt("return",{data:o,name:r,date:i});case 19:throw e.prev=19,e.t0=e.catch(1),n.dispatch(b({notes:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435"})),e.t0;case 23:case"end":return e.stop()}}),e,null,[[1,19]])})));return function(t,n){return e.apply(this,arguments)}}()),U=Object(h.b)("ShowCase/fetchImage",function(){var e=Object(Z.a)(J.a.mark((function e(t,n){var a,r,c,s,o,i;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.name,r=t.date,c=t.src,e.prev=1,s=window.URL,e.next=5,fetch(c);case 5:return o=e.sent,e.next=8,o.blob();case 8:return i=e.sent,e.abrupt("return",{photoSrc:s.createObjectURL(i),date:r,name:a,loading:!1});case 12:throw e.prev=12,e.t0=e.catch(1),n.dispatch(b({notes:"\u041f\u043e\u0445\u043e\u0436\u0435 \u0447\u0442\u043e \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443 \u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c"})),e.t0;case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,n){return e.apply(this,arguments)}}()),z=Object(h.c)({name:"ShowCase",initialState:{showCaseList:{},pendingItem:{date:0,name:"",photoSrc:"",loading:!1},loading:!1},reducers:{updateLoading:function(e){e.loading=!e.loading},clearShowCaseList:function(e){e.showCaseList={}}},extraReducers:function(e){e.addCase(M.fulfilled,(function(e,t){var n;e.loading=!1;var a=null!==(n=e.showCaseList[t.payload.name])&&void 0!==n?n:[],r=t.payload.date,c=e.pendingItem={photoSrc:"",date:r,name:t.payload.name,loading:!0};a.push(c),e.showCaseList[t.payload.name]=a})),e.addCase(M.pending,(function(e){e.loading=!0})),e.addCase(M.rejected,(function(e){e.loading=!1})),e.addCase(U.fulfilled,(function(e,t){var n=e.showCaseList[t.payload.name].findIndex((function(e){return e.date===t.payload.date}));e.showCaseList[t.payload.name][n]=Object(T.a)(Object(T.a)({},e.showCaseList[t.payload.name][n]),{},{loading:!1,photoSrc:t.payload.photoSrc})}))}});(_=S||(S={})).selectLoading=function(e){return e.showCase.loading},_.selectShowCaseList=function(e){return e.showCase.showCaseList};var A,B=z.actions,F=(B.updateLoading,B.clearShowCaseList),G=z.reducer,H=Object(h.c)({name:"Nav",initialState:{selector:!1},reducers:{switchSelector:function(e){e.selector=!e.selector}}});(A||(A={})).selectSelector=function(e){return e.nav.selector};var Q=H.actions.switchSelector,W=H.reducer,q={fetchTag:"https://api.giphy.com/v1/gifs/random?api_key=lSnIkZHr8odpiZjOQLVvJRrbmME8jytG"},K=function(){var e=l(),t=Object(c.useState)(!1),n=Object(C.a)(t,2),a=n[0],r=n[1];Object(c.useEffect)((function(){var t=setInterval((function(){e(M({name:"random",url:"".concat(q.fetchTag,"&tag=random")}))}),500);return a||clearInterval(t),function(){clearInterval(t)}}),[e,a]);var s=d(A.selectSelector);return Object(w.jsxs)("div",{className:"wrapper nav_wrapper",children:[Object(w.jsx)("button",{className:"btn btn_showCase btn__secondary",onClick:function(){return e(Q())},children:s?"\u0413\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c":"\u0420\u0430\u0437\u0433\u0440\u0443\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),Object(w.jsx)("button",{className:"btn btn_showCase btn__secondary",onClick:function(){e(k()),e(F()),e(b({notes:"\u0421\u043f\u0438\u0441\u043e\u043a \u043e\u0447\u0438\u0449\u0435\u043d"}))},children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"}),Object(w.jsx)("button",{className:"btn btn_showCase btn__secondary",onClick:function(){r(!a)},children:"delay"})]})},P=(n(29),function(){var e=Object(u.c)((function(e){return e.searchValue})),t=e.error,n=e.value,a=e.disabled,r=l();Object(c.useEffect)((function(){n.match(/[^A-Za-z,]/)?r(E({error:"\u0414\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0435 \u0431\u0443\u043a\u0432\u044b \u0438 \u0437\u0430\u043f\u044f\u0442\u0430\u044f"})):r(","===n?E({error:"\u041d\u0435\u043b\u044c\u0437\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0437\u0430\u043f\u044f\u0442\u0443\u044e"}):""===n?I({disabled:!0}):V())}),[r,n]);return Object(w.jsxs)("div",{className:"search",children:[Object(w.jsxs)("div",{className:"wrapper search_wrapper",children:[Object(w.jsx)("input",{type:"text",className:"search_input input ".concat(t&&"input__error"),value:n,onChange:function(e){r(L({value:e.currentTarget.value}))}}),Object(w.jsx)("div",{className:"",children:Object(w.jsx)("span",{className:"error search_error",children:t})})]}),Object(w.jsx)("button",{className:"btn search_btn btn__primary",onClick:function(e){0===n.length&&r(E({error:"\u041f\u0443\u0441\u0442\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430"})),t||n.split(",").forEach((function(e,t){r(M({name:e,url:"".concat(q.fetchTag,"&tag=").concat(e)}))}))},disabled:a,children:"\u041f\u043e\u0438\u0441\u043a"})]})}),X=n(17),Y=(n(30),function(e){for(var t=[],n=0;n<e.length;n++)t.push.apply(t,Object(X.a)(e[n]));return t.sort((function(e,t){return e.date-t.date}))}),$=function(){var e=d(S.selectShowCaseList),t=d(A.selectSelector),n=l(),a=Object.keys(e);return Object(w.jsx)("div",{className:"container",children:a.length>0?t?Y(Object.values(e)).map((function(e,t){return Object(w.jsx)("img",{onClick:function(){return n(L({value:e.name}))},src:e.photoSrc,alt:""},e.date+t)})):a.map((function(t,a){return Object(w.jsxs)("div",{children:[Object(w.jsx)("h4",{children:t}),Object(w.jsx)("div",{className:"wrapper showCaseList_wrapper",children:e[t].map((function(e,t){return e.loading?Object(w.jsx)("div",{className:"loader loader_image",children:Object(w.jsx)("div",{className:"lds-circle",children:Object(w.jsx)("div",{})})},t+"loader"):Object(w.jsx)("img",{className:"btn",onClick:function(){return n(L({value:e.name}))},src:e.photoSrc,alt:""},e.date+t)}))})]},a+t)})):Object(w.jsx)("span",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0443\u0441\u0442"})})},ee=(n(31),function(){var e=d(S.selectLoading);return Object(w.jsxs)("div",{className:"container",children:[Object(w.jsxs)("div",{className:"flex",children:[Object(w.jsx)(K,{}),Object(w.jsx)(P,{})]}),Object(w.jsx)($,{}),e&&"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044f \u0447\u0442\u043e-\u0442\u043e \u043e\u0431\u044a\u0435\u043c\u043d\u043e\u0435, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435!)"]})});var te=function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(g,{}),Object(w.jsx)(ee,{})]})},ne=Object(h.a)({reducer:{showCase:G,notice:O,searchValue:R,nav:W}});n(32);i.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(u.a,{store:ne,children:Object(w.jsx)(te,{})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.a20fde41.chunk.js.map