(this.webpackJsonpxanda=this.webpackJsonpxanda||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/magico.a4d6c483.png"},36:function(e,t,a){e.exports=a.p+"static/media/el-senor-don-gato.6161f535.mp3"},37:function(e,t,a){e.exports=a.p+"static/media/la-pegatina-gat-rumberu-con-letra.831149f9.mp3"},38:function(e,t,a){e.exports=a.p+"static/media/SKA-P-El Gato Lopez..179b9640.mp3"},41:function(e,t,a){e.exports=a.p+"static/media/1_0_steps.a0927d6d.png"},42:function(e,t,a){e.exports=a.p+"static/media/countdown_sound_cutted.df9ef4d8.mp3"},43:function(e,t,a){e.exports=a.p+"static/media/alcatpone.d280c246.jpg"},49:function(e,t,a){e.exports=a(78)},54:function(e,t,a){},56:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(19),c=a.n(r),l=(a(54),a(6)),o=a(7),i=a(9),u=a(8),m=a(21),d=a(18),h=a(14),p=a(16),E=a(80),f=a(81),v=(a(26),a(22)),g=a.n(v),C=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).continue=function(){n.props.history.push("crespo")},n.state={final:new g.a("2020-09-13T18:00:00"),date:new g.a},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new g.a})}},{key:"render",value:function(){var e=this.state.final.diff(this.state.date),t=g.a.duration(e),a=t.days(),n=t.hours(),r=t.minutes(),c=t.seconds();return e>0?s.a.createElement(d.a,{className:"center"},s.a.createElement(E.a,{fluid:!0},s.a.createElement("p",{className:"prim"},"Lo bueno se hace esperar... sabr\xe1s c\xf3mo continuar cuando llegue el momento")),s.a.createElement(p.a,{xs:4,md:8,lg:16},s.a.createElement(h.a,null,s.a.createElement("p",{className:"timeHead"},"Dias"),s.a.createElement(m.a,{value:a,maxValue:30,text:"".concat(a)})),s.a.createElement(h.a,null,s.a.createElement("p",{className:"timeHead"},"Horas"),s.a.createElement(m.a,{value:n,maxValue:24,text:"".concat(n)})),s.a.createElement(h.a,null,s.a.createElement("p",{className:"timeHead"},"Minutos"),s.a.createElement(m.a,{value:r,maxValue:60,text:"".concat(r)})),s.a.createElement(h.a,null,s.a.createElement("p",{className:"timeHead"},"Segundos"),s.a.createElement(m.a,{value:c,maxValue:60,text:"".concat(c)})))):s.a.createElement(d.a,{className:"center"},s.a.createElement(E.a,{fluid:!0},s.a.createElement("p",{className:"prim"},"\xbfYa lo ten\xe9is todo para continuar?"),s.a.createElement("p",{className:"prim"},"Estad atentos cuando puls\xe9is el bot\xf3n")),s.a.createElement(p.a,null,s.a.createElement(h.a,{className:"text-center"}," ",s.a.createElement(f.a,{onClick:this.continue},"Continuar"))))}}]),a}(s.a.Component),b=(a(56),a(57),a(44)),y=a(10),N=a(82),S=a(84),k=a(83),w=a(86),x=a(33),j=a.n(x),O=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({solution:e.target.value})},n.validate=function(){"13"===n.state.solution?(n.setState({success:!0,failed:!1}),setTimeout((function(){return n.props.history.push("caesar")}),1e3)):n.setState({failed:!0})},n.state={solution:"",failed:!1,success:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"center"},s.a.createElement(p.a,{className:"m-auto"},s.a.createElement(h.a,null,s.a.createElement(N.a,{src:j.a,className:"square",fluid:!0}))),s.a.createElement(p.a,{className:"m-auto"},s.a.createElement(h.a,null,s.a.createElement(S.a,{variant:"danger",show:this.state.failed,dismissible:!0,onClose:function(){return e.setState({failed:!1})}},"Prueba otra vez"),s.a.createElement(S.a,{variant:"success",show:this.state.success},"Correcto!"),s.a.createElement(k.a,{className:"mb-3"},s.a.createElement(w.a,{onKeyPress:function(t){"Enter"===t.key&&e.validate()},onChange:this.handleChange,value:this.state.solution,placeholder:"Soluci\xf3n"}),s.a.createElement(k.a.Append,null,s.a.createElement(f.a,{onClick:this.validate},"Validar"))))))}}]),a}(s.a.Component),P=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({solution:e.target.value})},n.validate=function(){"leiva"===n.state.solution.toLowerCase()?(n.setState({success:!0,failed:!1}),setTimeout((function(){return n.props.history.push("song")}),1e3)):n.setState({failed:!0})},n.state={solution:"",failed:!1,success:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"center"},s.a.createElement(h.a,null,s.a.createElement(E.a,{fluid:!0},s.a.createElement("p",{className:"sec"},"a  \u2192 n"),s.a.createElement("p",{className:"prim"},"yrvin")),s.a.createElement(p.a,null,s.a.createElement(S.a,{variant:"danger",show:this.state.failed,dismissible:!0,onClose:function(){return e.setState({failed:!1})}},"Prueba otra vez"),s.a.createElement(S.a,{variant:"success",show:this.state.success},"Correcto!"),s.a.createElement(k.a,{className:"mb-3"},s.a.createElement(w.a,{onKeyPress:function(t){"Enter"===t.key&&e.validate()},onChange:this.handleChange,value:this.state.solution,placeholder:"Soluci\xf3n"}),s.a.createElement(k.a.Append,null,s.a.createElement(f.a,{onClick:this.validate},"Validar"))))))}}]),a}(s.a.Component),Q=a(36),q=a.n(Q),I=a(37),A=a.n(I),V=a(38),z=a.n(V),T=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({solution:e.target.value})},n.validate=function(){"lopes"===n.state.solution.toLowerCase()?(n.setState({success:!0,failed:!1}),setTimeout((function(){return n.props.history.push("dateCountdown")}),1e3)):n.setState({failed:!0})},n.state={solution:"",failed:!1,success:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"center"},s.a.createElement(h.a,null,s.a.createElement(p.a,null,s.a.createElement("audio",{controls:!0,autoPlay:!0},s.a.createElement("source",{src:q.a,type:"audio/mpeg"}))),s.a.createElement(p.a,null,s.a.createElement("audio",{controls:!0,autoPlay:!0},s.a.createElement("source",{src:A.a,type:"audio/mpeg"}))),s.a.createElement(p.a,null,s.a.createElement("audio",{controls:!0,autoPlay:!0},s.a.createElement("source",{src:z.a,type:"audio/mpeg"}))),s.a.createElement(p.a,null,s.a.createElement(E.a,{fluid:!0},s.a.createElement("p",{className:"prim"},"La soluci\xf3n esta en una de las canciones"))),s.a.createElement(p.a,null,s.a.createElement(S.a,{variant:"danger",show:this.state.failed,dismissible:!0,onClose:function(){return e.setState({failed:!1})}},"Prueba otra vez"),s.a.createElement(S.a,{variant:"success",show:this.state.success},"Correcto!"),s.a.createElement(k.a,{className:"mb-3"},s.a.createElement(w.a,{onKeyPress:function(t){"Enter"===t.key&&e.validate()},onChange:this.handleChange,value:this.state.solution,placeholder:"Soluci\xf3n"}),s.a.createElement(k.a.Append,null,s.a.createElement(f.a,{onClick:this.validate},"Validar"))))))}}]),a}(s.a.Component),L=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).validate=function(){n.props.history.push("/square")},n.state={solution:"",failed:!1,success:!1},n}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"center"},s.a.createElement(f.a,{onClick:this.validate,size:"large"},"Comenzar"))}}]),a}(s.a.Component),M=a(23),K=a(41),D=a.n(K),B=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({solution:e.target.value})},n.onEnd=function(){n.setState({videoEnded:!0})},n.showVideo=function(){n.setState({videoEnded:!1})},n.validate=function(){"4"===n.state.solution.toLowerCase()?(n.setState({success:!0,failed:!1}),setTimeout((function(){return n.props.history.push("quickquestions")}),1e3)):n.setState({failed:!0})},n.state={solution:"",failed:!1,success:!1,videoEnded:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e,t=this;if(this.state.videoEnded)e=s.a.createElement("div",{className:"center"},s.a.createElement(p.a,{className:"m-auto"},s.a.createElement("p",{className:"prim"},"\xbfQue paso (del 1 al 5) rompe la igualdad?")),s.a.createElement(p.a,{className:"m-auto"},s.a.createElement(h.a,null,s.a.createElement(N.a,{src:D.a,className:"square",fluid:!0}))),s.a.createElement(p.a,{className:"m-auto"},s.a.createElement(h.a,null,s.a.createElement(S.a,{variant:"danger",show:this.state.failed,dismissible:!0,onClose:function(){return t.setState({failed:!1})}},"Prueba otra vez"),s.a.createElement(S.a,{variant:"success",show:this.state.success},"Correcto!"),s.a.createElement(k.a,{className:"mb-3"},s.a.createElement(k.a.Prepend,null,s.a.createElement(f.a,{variant:"outline-secondary",onClick:this.showVideo},"Volver")),s.a.createElement(w.a,{onKeyPress:function(e){"Enter"===e.key&&t.validate()},onChange:this.handleChange,value:this.state.solution,placeholder:"Soluci\xf3n"}),s.a.createElement(k.a.Append,null,s.a.createElement(f.a,{onClick:this.validate},"Validar"))))));else{e=s.a.createElement("div",{className:"center"},s.a.createElement(h.a,null,s.a.createElement(p.a,{className:"m-auto",fluid:!0},s.a.createElement(M.a,{videoId:"LfSA5voxyI0",opts:{playerVars:{autoplay:1,controls:0,end:115,rel:0,showinfo:0,modestbranding:1}},onEnd:this.onEnd})),s.a.createElement(p.a,null,s.a.createElement(h.a,{className:"text-center"},s.a.createElement(f.a,{variant:"outline-danger",onClick:this.onEnd},"Saltar")))))}return e}}]),a}(s.a.Component),H=a(42),W=a.n(H),_=[{question:"\xbfCu\xe1ntos animales meti\xf3 Mois\xe9s en el arca?",answers:["0","ninguno","no fue moises","fue noe","noe"]},{question:"La palabra todo comienza con t y termina con t tambi\xe9n, \xbfVerdadero o Falso?",answers:["verdadero","verdad","si"]},{question:"\xbfEn qu\xe9 posici\xf3n te colocas si adelantas al que va segundo?",answers:["segundo","2"]},{question:"Hay meses que tienen 30 d\xedas y otros 31. \xbfCu\xe1ntos meses tienen 28?",answers:["todos","12","doce"]},{question:"El padre de Jose tiene cinco hijos: Pata, Peta, Pita, Pota y...",answers:["jose"]}];var F=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n,s;return Object(l.a)(this,a),(n=t.call(this,e)).continue=function(){n.setState({started:!0})},n.handleChange=function(e){n.setState({solution:e.target.value})},n.nextQuestion=function(e){n.setState({solution:"",failed:!1,success:!1,seconds:5,readSeconds:2,remainingQuestions:e,currentQuestionIndex:(n.state.currentQuestionIndex+1)%e.length})},n.nextPage=function(){n.props.history.push("catpone")},n.validate=function(){var e=n.getCurrentQuestion().answers;if(console.log("Answers: ",e),console.log("Solution:",n.state.solution),e.includes(n.state.solution.toLowerCase())){n.setState({success:!0,failed:!1,readSeconds:2,seconds:5});var t=n.state.remainingQuestions,a=n.state.currentQuestionIndex;setTimeout((function(){var e=t.filter((function(e,t){return t!==a}));console.log("New questions:",e),n.nextQuestion(e)}),2e3)}else n.setState({failed:!0,success:!1,readSeconds:2,seconds:5}),setTimeout((function(){n.nextQuestion(n.state.remainingQuestions)}),2e3)},n.state={started:!1,seconds:5,readSeconds:2,remainingQuestions:_,currentQuestionIndex:(s=_.length,Math.floor(Math.random()*s)),solution:"",failed:!1,success:!1},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){if(this.state.started)if(this.state.readSeconds>0)this.setState({readSeconds:this.state.readSeconds-1});else if(this.state.seconds<=0)this.nextQuestion(this.state.remainingQuestions);else{var e=this.state.seconds;this.setState({seconds:e-1})}}},{key:"render",value:function(){return this.state.started?this.state.remainingQuestions.length>0?this.renderQuestions():this.renderFinishQuestions():this.renderBeginning()}},{key:"renderBeginning",value:function(){return s.a.createElement(d.a,{className:"center"},s.a.createElement(E.a,{fluid:!0},s.a.createElement("p",{className:"prim"},"Seguid atentos... Para contin\xfaar deb\xe9is acertar todas las preguntas "),s.a.createElement("p",{className:"prim"},"Solo ten\xe9is 5 segundos para contestar.")),s.a.createElement(p.a,null,s.a.createElement(h.a,{className:"text-center"}," ",s.a.createElement(f.a,{onClick:this.continue},"Continuar"))))}},{key:"renderFinishQuestions",value:function(){return s.a.createElement(d.a,{className:"center"},s.a.createElement(E.a,{fluid:!0},s.a.createElement("p",{className:"prim"},"Bien hecho!"),s.a.createElement("p",{className:"prim"},"Ya queda menos, para llegar a vuestro regalo...")),s.a.createElement(p.a,null,s.a.createElement(h.a,{className:"text-center"}," ",s.a.createElement(f.a,{onClick:this.nextPage},"Continuar"))))}},{key:"renderQuestions",value:function(){var e=this,t=this.getCurrentQuestion(),a=s.a.createElement("audio",{autoPlay:!0},s.a.createElement("source",{src:W.a,type:"audio/mpeg"})),n=5-this.state.remainingQuestions.length;return s.a.createElement(d.a,{className:"center"},0!==this.state.readSeconds||this.state.failed||this.state.success?null:a,s.a.createElement("p",{className:"prim"},n," / ",_.length),s.a.createElement(E.a,{fluid:!0},s.a.createElement("p",{className:"prim"},t.question)),s.a.createElement(p.a,null,s.a.createElement(S.a,{variant:"danger",show:this.state.failed,dismissible:!0,onClose:function(){return e.setState({failed:!1})}},"Otra vez ser\xe1..."),s.a.createElement(S.a,{variant:"success",show:this.state.success},"Correcto!"),s.a.createElement(k.a,{className:"mb-3"},s.a.createElement(k.a.Prepend,null,s.a.createElement(k.a.Text,{variant:"danger"},this.state.seconds)),s.a.createElement(w.a,{onKeyPress:function(t){"Enter"===t.key&&e.validate()},onChange:this.handleChange,value:this.state.solution,placeholder:"Soluci\xf3n"}),s.a.createElement(k.a.Append,null,s.a.createElement(f.a,{onClick:this.validate,disabled:this.state.failed||this.state.success},"Validar")))))}},{key:"getCurrentQuestion",value:function(){return this.state.remainingQuestions[this.state.currentQuestionIndex]}}]),a}(s.a.Component),J=a(85),Y=a(43),U=a.n(Y),G={1:"uno",2:"dos",3:"tres",4:"cuatro",5:"cinco",6:"seis",7:"siete",9:"nueve",10:"diez",11:"once",12:"doce",13:"trece",15:"quince",16:"diecis\xe9is",17:"diecisiete",19:"diecinueve",20:"veinte"},$=Object.keys(G).map((function(e){return{question:e,answer:G[e].length}}));function R(e){return Math.floor(Math.random()*e)}var X=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).continue=function(){n.setState({started:!0})},n.handleChange=function(e){n.setState({solution:e.target.value})},n.validate=function(){var e=n.getCurrentNumber();n.state.solution.toLowerCase()===e.answer.toString()?(n.setState({success:!0,failed:!1}),setTimeout((function(){return n.props.history.push("lastkey")}),1e3)):(n.setState({failed:!0}),setTimeout((function(){return n.setState({failed:!1,solution:"",currentQuestionIndex:R($.length)})}),1e3))},n.state={started:!1,currentQuestionIndex:R($.length),solution:"",failed:!1,success:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.getCurrentNumber();return s.a.createElement(d.a,{fluid:!0},s.a.createElement(p.a,null,s.a.createElement(h.a,null,s.a.createElement(E.a,{fluid:!0},s.a.createElement("p",{className:"prim"},"\xc9l es Al Catpone!"),s.a.createElement("p",{className:"m-2 text-primary text-center"},"Para que os deje pasar, le deber\xe9is contestar almenos una vez correctamente."),s.a.createElement("p",{className:"prim"},"Algunos ya lo han intentado y no han vivido para contarlo. \xbfEst\xe1is listos? :"),s.a.createElement("div",{className:"text-center"},s.a.createElement("p",{className:"text-success"},"Al Catpone dice: 18 \u2192 respuesta correcta 8"),s.a.createElement("p",{className:"text-success"},"Al Catpone dice: 8 \u2192 respuesta correcta 4"),s.a.createElement("p",{className:"text-success"},"Al Catpone dice: 14 \u2192 respuesta correcta 7"),s.a.createElement("p",{className:"text-danger"},"Al Catpone dice: 0 \u2192 respuesta incorrecta 0"),s.a.createElement("p",{className:"text-danger"},"Al Catpone dice: 6 \u2192 respuesta incorrecta 3")))),s.a.createElement(h.a,null,s.a.createElement(p.a,null,s.a.createElement(J.a,{className:"mx-auto",style:{width:"18rem"}},s.a.createElement(J.a.Img,{variant:"top",src:U.a,thumbnail:!0}),s.a.createElement(J.a.Body,null,s.a.createElement(J.a.Text,{className:"text-center"},s.a.createElement("h1",null,t.question))))),s.a.createElement("br",null),s.a.createElement(p.a,{className:"mx-auto",style:{width:"18rem"}},s.a.createElement(S.a,{variant:"danger",show:this.state.failed,dismissible:!0,onClose:function(){return e.setState({failed:!1})}},"Prueba otra vez"),s.a.createElement(S.a,{variant:"success",show:this.state.success},"Correcto!"),s.a.createElement(k.a,{className:"mb-3"},s.a.createElement(w.a,{onKeyPress:function(t){"Enter"===t.key&&e.validate()},onChange:this.handleChange,value:this.state.solution,placeholder:"Soluci\xf3n"}),s.a.createElement(k.a.Append,null,s.a.createElement(f.a,{onClick:this.validate},"Validar")))))))}},{key:"getCurrentNumber",value:function(){return $[this.state.currentQuestionIndex]}}]),a}(s.a.Component),Z=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({solution:e.target.value})},n.validate=function(){"girona"===n.state.solution.toLowerCase()?(n.setState({success:!0,failed:!1}),setTimeout((function(){return n.props.history.push("selva")}),1e3)):n.setState({failed:!0})},n.state={solution:"",failed:!1,success:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"center"},s.a.createElement(h.a,null,s.a.createElement(E.a,{fluid:!0},s.a.createElement("p",{className:"prim"},"Ya solo os falta la \xfaltima clave."),s.a.createElement("p",{className:"prim"},"\xbfLa hab\xe9is encontrado?")),s.a.createElement(p.a,null,s.a.createElement(S.a,{variant:"danger",show:this.state.failed,dismissible:!0,onClose:function(){return e.setState({failed:!1})}},"Prueba otra vez"),s.a.createElement(S.a,{variant:"success",show:this.state.success},"Correcto!"),s.a.createElement(k.a,{className:"mb-3"},s.a.createElement(w.a,{onKeyPress:function(t){"Enter"===t.key&&e.validate()},onChange:this.handleChange,value:this.state.solution,placeholder:"Soluci\xf3n"}),s.a.createElement(k.a.Append,null,s.a.createElement(f.a,{onClick:this.validate},"Validar"))))))}}]),a}(s.a.Component),ee=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({solution:e.target.value})},n.onEnd=function(){},n.validate=function(){"4"===n.state.solution.toLowerCase()?(n.setState({success:!0,failed:!1}),setTimeout((function(){return n.props.history.push("quickquestions")}),1e3)):n.setState({failed:!0})},n.state={solution:"",failed:!1,success:!1,videoEnded:!1},n}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"center"},s.a.createElement(h.a,null,s.a.createElement(p.a,{className:"m-auto",fluid:!0},s.a.createElement(M.a,{videoId:"_sAW6P4T5zE",opts:{playerVars:{autoplay:1,controls:0,end:115,rel:0,showinfo:0,modestbranding:1}},onEnd:this.onEnd}))))}}]),a}(s.a.Component),te=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(b.a,null,s.a.createElement(y.c,null,s.a.createElement(y.a,{path:"/dateCountdown",component:C}),s.a.createElement(y.a,{path:"/caesar",component:P}),s.a.createElement(y.a,{path:"/song",component:T}),s.a.createElement(y.a,{path:"/square",component:O}),s.a.createElement(y.a,{path:"/crespo",component:B}),s.a.createElement(y.a,{path:"/quickquestions",component:F}),s.a.createElement(y.a,{path:"/catpone",component:X}),s.a.createElement(y.a,{path:"/lastkey",component:Z}),s.a.createElement(y.a,{path:"/selva",component:ee}),s.a.createElement(y.a,{path:"/",component:L}))))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.e1905c6c.chunk.js.map