(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(6),c=n.n(o),l=(n(12),n(1)),i=n(2),s=n(4),u=n(3),h=function(e){var t=e.name,n=e.email,r=e.id;return a.a.createElement("div",null,a.a.createElement("img",{src:"https://robohash.org/".concat(r),alt:"robots"}),a.a.createElement("div",null,a.a.createElement("h2",null,t),a.a.createElement("p",null,n)))},m=function(e){var t=e.robots;return a.a.createElement("div",null,t.map((function(e,n){return a.a.createElement(h,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})})))},d=function(e){e.searchfield;var t=e.searchChange;return a.a.createElement(r.Fragment,null,a.a.createElement("input",{type:"search",placeholder:"search robofriends",onChange:t}))},f=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"}},e.children)},v=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Oooops. Something didn't go right"):this.props.children}}]),n}(r.Component),p=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).onSearchChange=function(t){var n=t.target.value;e.setState({searchfield:n})},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,o=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return 0===t.length?a.a.createElement("h1",null,"Loading"):a.a.createElement(r.Fragment,null,a.a.createElement("h1",null,"Welcome to Robot friends"),a.a.createElement(d,{searchChange:this.onSearchChange}),a.a.createElement(f,null,a.a.createElement(v,null,a.a.createElement(m,{robots:o}))))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.d95434cc.chunk.js.map