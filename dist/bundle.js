!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.UserMention=n():e.UserMention=n()}(window,(function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=4)}([function(e,n,t){var r=t(1),o=t(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,n,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),s=[];function a(e){for(var n=-1,t=0;t<s.length;t++)if(s[t].identifier===e){n=t;break}return n}function l(e,n){for(var t={},r=[],o=0;o<e.length;o++){var i=e[o],l=n.base?i[0]+n.base:i[0],c=t[l]||0,u="".concat(l," ").concat(c);t[l]=c+1;var d=a(u),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(s[d].references++,s[d].updater(f)):s.push({identifier:u,updater:v(f,n),references:1}),r.push(u)}return r}function c(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var s=i(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}return n}var u,d=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function f(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,o);else{var i=document.createTextNode(o),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(i,s[n]):e.appendChild(i)}}function p(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function v(e,n){var t,r,o;if(n.singleton){var i=m++;t=h||(h=c(n)),r=f.bind(null,t,i,!1),o=f.bind(null,t,i,!0)}else t=c(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=l(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=a(t[r]);s[o].references--}for(var i=l(e,n),c=0;c<t.length;c++){var u=a(t[c]);0===s[u].references&&(s[u].updater(),s.splice(u,1))}t=i}}}},function(e,n,t){(n=t(3)(!1)).push([e.i,":root{\n    --primary: #000000;\n}\n\n.user-mention-toolbar {\n    position: fixed;\n    top: 20px;\n    left: 40px;\n    width: 200px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 0;\n    padding: 0;\n    border-radius: 4px;\n    box-shadow: 0 3px 15px -3px rgba(13, 20, 33, 0.13);\n    \n    z-index: 99;\n}\n\n.user-mention-search-bar{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    border-radius: 4px 4px 0 0;\n    padding: 4px;\n    background-color: var(--primary);\n}\n\n.user-mention-search-bar .search-icon{\n    color: #FFFFFF;\n    cursor: default;\n}\n\n.user-mention-search-bar .search-textbox{\n    color: #FFFFFF;\n    border: none;\n    background-color: transparent;\n    border: none;\n    outline: none;\n    margin-left: -2px;\n}\n\n.search-textbox::placeholder { \n    color: #BCBCBC;\n}\n\n.users-list-wrapper{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 0;\n    padding: 0;\n    border-radius: 0 0 4px 4px;\n    border: 0.1px solid #707684;\n    height: 195px;\n    overflow-y: scroll;\n}\n\n.user-list-item-wrapper{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n    margin: 0;\n    padding: 6px 10px;\n    border-bottom: 0.1px solid #707684;\n    box-sizing: border-box;\n    width: 100%;\n    cursor: pointer;\n    background-color: #FFFFFF;\n}\n\n.user-list-item-wrapper:hover{\n    background-color: #EFEFEF;\n}\n\n\n.user-list-item-wrapper .user-profile-container{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--primary);\n    border-radius: 50%;\n    width: 36px;\n    height: 36px;\n    margin-right: 10px;\n}\n\n.user-list-item-wrapper .user-profile-container .user-name-initial{\n    color: #FFFFFF;\n    font-style: normal;\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 14px;\n}\n\n.user-list-item-wrapper .user-metadata-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.user-list-item-wrapper .user-metadata-container .user-full-name{\n    font-style: normal;\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 16px;\n    margin-bottom: 4px;\n}\n\n.user-list-item-wrapper .user-metadata-container .user-slug{\n    font-style: normal;\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 12px;\n    color: #808080;\n}\n\na{\n    border-radius: 3px;\n    color: #848484;\n    text-decoration: underline;\n    font-weight: 500;\n}",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(s=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([o]).join("\n")}var s,a,l;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);r&&o[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},function(e,n,t){"use strict";function r(e){return!(null==e)}function o(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=document.createElement(e);if(r(n))for(var s=0;s<n.length;s++)r(n[s])&&i.classList.add(n[s]);if(r(t))for(var a in t)i.setAttribute(a,t[a]);if(r(o))for(var l=0;l<o.length;l++)r(o[l])&&i.appendChild(o[l]);return i}function i(e,n,t,r,o,i,s){try{var a=e[i](s),l=a.value}catch(e){return void t(e)}a.done?n(l):Promise.resolve(l).then(r,o)}function s(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var s=e.apply(n,t);function a(e){i(s,r,o,a,l,"next",e)}function l(e){i(s,r,o,a,l,"throw",e)}a(void 0)}))}}function a(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.r(n),t.d(n,"default",(function(){return l})),t(0).toString();var l=function(){function e(n){var t=n.holder,r=n.allUsers,o=n.baseUrl,i=n.searchAPIUrl;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.holder=t,this.allUsers=r,this.baseUrl=o,this.searchAPIUrl=i,this.allUserListItemsCache=this.cacheAllUsersAsUserListItems(this.allUsers,this.baseUrl),this.initialUserlistItemsOrder=this.createAllUserListItems(this.allUsers,this.baseUrl),this.prevActiveElement=null,this.prevCaretPosAndSelectedNode={},this.nodes={usersList:this.createUsersList(this.initialUserlistItemsOrder),searchBar:this.createSearchbar(),userMentionToolbar:null},this.nodes.userMentionToolbar=this.createUserMentionToolbar(this.nodes.searchBar,this.nodes.usersList),document.body.appendChild(this.nodes.userMentionToolbar),this.hideUserMentionToolbarAndChangeFocus(this.holder)}var n,t,r;return n=e,(t=[{key:"getCaretPositionAndSelectedNode",value:function(e){var n,t,r=0;if(window.getSelection)(n=window.getSelection()).rangeCount&&(t=n.getRangeAt(0)).commonAncestorContainer.parentNode==e&&(r=t.endOffset);else if(document.selection&&document.selection.createRange&&(t=document.selection.createRange()).parentElement()==e){var o=document.createElement("span");e.insertBefore(o,e.firstChild);var i=t.duplicate();i.moveToElementText(o),i.setEndPoint("EndToEnd",t),r=i.text.length}return{caretPos:r,selectedNode:t.endContainer}}},{key:"focusAfterInsertingUserMention",value:function(e){var n=document.createRange();n.setStart(e,0),n.setEnd(e,0);var t=window.getSelection();t.removeAllRanges(),t.addRange(n)}},{key:"getUserMentionToolbarPosition",value:function(){var e,n,t=document.getSelection().getRangeAt(0),r=t.startContainer,o=t.startOffset;if(o>0)return(n=document.createRange()).setStart(r,o-1),n.setEnd(r,o),{left:(e=n.getBoundingClientRect()).right,top:e.top};if(o<r.length)return(n=document.createRange()).setStart(r,o),n.setEnd(r,o+1),{left:(e=n.getBoundingClientRect()).left,top:e.top};e=r.getBoundingClientRect();var i=getComputedStyle(r),s=(parseInt(i.lineHeight)-parseInt(i.fontSize))/2;return{left:e.left,top:e.top+s}}},{key:"cacheAllUsersAsUserListItems",value:function(e,n){var t={},r=this;return e.forEach((function(e){t[e.id]=r.createUserListItem({userId:e.id,userFullName:e.name,userSlug:e.slug,baseUrl:n})})),t}},{key:"createAllUserListItems",value:function(e,n){var t=[],r=this;return e.forEach((function(e){var o=r.createUserListItem({userId:e.id,userFullName:e.name,userSlug:e.slug,baseUrl:n});t.push(o)})),t}},{key:"createUserMentionToolbar",value:function(e,n){var t=o("div",[this.CSS.userMentionToolbar],{},[e,n]);return t.style.display="none",t}},{key:"showUserMentionToolbar",value:function(){var e=this.getUserMentionToolbarPosition();this.nodes.userMentionToolbar.style.display="block",this.nodes.userMentionToolbar.style.position="fixed",this.nodes.userMentionToolbar.style.left=e.left-16+"px",this.nodes.userMentionToolbar.style.top=e.top-4+"px",this.nodes.searchBar.children[1].focus()}},{key:"hideUserMentionToolbar",value:function(){this.nodes.userMentionToolbar.style.display="none",this.nodes.searchBar.children[1].value=""}},{key:"hideUserMentionToolbarAndChangeFocus",value:function(e){var n=this,t=function(e){n.prevCaretPosAndSelectedNode=n.getCaretPositionAndSelectedNode(n.prevActiveElement),"@"==e.key&&n.showUserMentionToolbar()};document.getElementById(e).addEventListener("focusin",(function(){n.nodes.userMentionToolbar==document.activeElement||n.nodes.userMentionToolbar.contains(document.activeElement)||("none"!=n.nodes.userMentionToolbar.style.display?(n.hideUserMentionToolbar(),n.prevActiveElement&&null!=n.prevActiveElement&&n.prevActiveElement.focus()):(n.prevActiveElement=document.activeElement,n.prevActiveElement.addEventListener("keyup",t)))}))}},{key:"createUsersList",value:function(e){var n=o("div",[this.CSS.usersListWrapper],{},e);return n.lastChild.style.borderBottom=0,n}},{key:"createSearchbar",value:function(){var e=o("div",[this.CSS.searchIcon],{},[document.createTextNode("@")]),n=o("input",[this.CSS.searchTextbox],{type:"text",placeholder:"User"}),t=this;return n.addEventListener("change",s(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.nodeValue,e.next=4,fetch(t.searchAPIUrl+t.searchQuery);case 4:n=e.sent,r=n.json().data,o=t.createAllUserListItems(r),t.nodes.usersList.innerHTML="",t.nodes.userMentionToolbar.lastChild=t.createUsersList(o),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,this,[[0,11]])})))),o("div",[this.CSS.searchBar],{},[e,n])}},{key:"createUserListItem",value:function(e){e.userId;var n=e.userFullName,t=e.userSlug,r=e.baseUrl,i=o("span",[this.CSS.userFullName],{},[document.createTextNode(n)]),s=o("span",[this.CSS.userSlug],{},[document.createTextNode("@"+t)]),a=o("div",[this.CSS.userMetadataContainer],{},[i,s]),l=o("span",[this.CSS.userNameInitial],{},[document.createTextNode(n[0].toUpperCase())]),c=o("div",[this.CSS.userProfileContainer],{},[l]),u=o("div",[this.CSS.userListItemWrapper],{},[c,a]),d=this;return u.addEventListener("click",(function(){var e=o("a",[],{href:r+t,target:"_blank",contentEditable:!1},[document.createTextNode("@"+t)]),n=d.prevCaretPosAndSelectedNode,i=n.caretPos,s=n.selectedNode,a=document.createTextNode(s.textContent.slice(0,i-1)),l=document.createTextNode(s.textContent.slice(i));d.prevActiveElement.insertBefore(a,s),d.prevActiveElement.insertBefore(e,s),d.prevActiveElement.insertBefore(l,s),d.prevActiveElement.removeChild(s),d.hideUserMentionToolbar(),d.focusAfterInsertingUserMention(l)})),u}},{key:"CSS",get:function(){return{userMentionToolbar:"user-mention-toolbar",userMentionToolbarShowed:"user-mention-toolbar--showed",userMentionToolbarLeftOriented:"user-mention-toolbar--left-oriented",userMentionToolbarLeftOrientedShowed:"user-mention-toolbar--left-oriented--showed",userMentionToolbarRightOriented:"user-mention-toolbar--right-oriented",userMentionToolbarRightOrientedShowed:"user-mention-toolbar--right-oriented--showed",userMentionToolbarShortcut:"user-mention-toolbar__shortcut",searchBar:"user-mention-search-bar",searchIcon:"search-icon",searchTextbox:"search-textbox",usersListWrapper:"users-list-wrapper",userListItemWrapper:"user-list-item-wrapper",userProfileContainer:"user-profile-container",userNameInitial:"user-name-initial",userMetadataContainer:"user-metadata-container",userFullName:"user-full-name",userSlug:"user-slug"}}}])&&a(n.prototype,t),r&&a(n,r),e}()}]).default}));