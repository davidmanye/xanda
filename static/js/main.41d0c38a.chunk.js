(this.webpackJsonpxanda=this.webpackJsonpxanda||[]).push([[0],{16:function(e,a,t){e.exports=t(26)},21:function(e,a,t){},24:function(e,a,t){},26:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(9),r=t.n(l),o=(t(21),t(10)),i=t(11),s=t(15),u=t(14),m=t(5),d=t(12),v=t(7),h=t(13),E=(t(22),t(6)),f=t.n(E),p=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={final:new f.a("2020-09-13T18:00:00"),date:new f.a},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new f.a})}},{key:"render",value:function(){var e=f.a.duration(this.state.final.diff(this.state.date)),a=e.days(),t=e.hours(),n=e.minutes(),l=e.seconds();return c.a.createElement(d.a,{className:"DateCountdown"},c.a.createElement(h.a,{xs:4,md:8,lg:16},c.a.createElement(v.a,null,c.a.createElement("p",{className:"timeHead"},"Dias"),c.a.createElement(m.a,{value:a,maxValue:30,text:"".concat(a)})),c.a.createElement(v.a,null,c.a.createElement("p",{className:"timeHead"},"Horas"),c.a.createElement(m.a,{value:t,maxValue:24,text:"".concat(t)})),c.a.createElement(v.a,null,c.a.createElement("p",{className:"timeHead"},"Minutos"),c.a.createElement(m.a,{value:n,maxValue:60,text:"".concat(n)})),c.a.createElement(v.a,null,c.a.createElement("p",{className:"timeHead"},"Segundos"),c.a.createElement(m.a,{value:l,maxValue:60,text:"".concat(l)}))))}}]),t}(c.a.Component);t(24),t(25);var w=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.41d0c38a.chunk.js.map