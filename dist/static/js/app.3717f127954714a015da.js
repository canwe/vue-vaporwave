webpackJsonp([1],{"8yOb":function(t,e){},"9HCM":function(t,e){},"9bUw":function(t,e){},B59B:function(t,e){},ElH8:function(t,e){},G0SZ:function(t,e){},KviF:function(t,e){},NHnr:function(t,e,a){"use strict";function n(t){a("ElH8")}function i(t){a("8yOb")}function o(t){a("tH/h")}function s(t){a("n2gs")}function r(t){a("G0SZ")}function l(t){a("B59B")}function c(t){a("KviF")}function u(t){a("wCia")}function p(t){a("9HCM")}function m(t){a("9bUw")}Object.defineProperty(e,"__esModule",{value:!0});var d=a("7+uW"),h=a("3EgV"),g=a.n(h),v=(a("QCv7"),{mounted:function(){var t=this;this.interval=setInterval(function(){t.titleCounter++},3e3)},beforeDestroy:function(){clearInterval(this.interval)},data:function(){return{volumeBar:100*this.$store.state.volume,aboutDialog:!1,drawer:!1,titleCounter:0}},computed:{showHide:function(){return this.player?"Hide Player":"Show Player"},title:function(){return this.titleCounter%5==0?"v a p o r w a v e エステティック":this.titleCounter%5==1?"Project Helios":this.titleCounter%5==2?"IT'S ALL IN YOUR HEAD ( ͡° ͜ʖ ( ͡° ͜ʖ ( ͡° ͜ʖ ( ͡° ͜ʖ ͡°) ͜ʖ ͡°)ʖ ͡°)ʖ ͡°)":this.titleCounter%5==3?"☐☐☐☐☐☐☐☐☐☐☐☐☐☐☐☐☐☐☐☐":"~~ａｅｓｔｈｅｔｉｃ ｄｒｅａｍ~~"},player:function(){return this.$store.state.player}},methods:{toggleDrawer:function(){this.drawer=!0,Ae.$emit("toggledDrawer",this.drawer)},togglePlayer:function(){this.$store.commit("togglePlayer")}},watch:{volumeBar:function(t,e){this.$store.commit("volumeChange",t/100)}}}),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-toolbar",{staticClass:"pink accent-1"},[a("v-toolbar-side-icon",{attrs:{flat:""},on:{click:function(e){e.stopPropagation(),t.toggleDrawer(e)}}}),t._v(" "),a("v-toolbar-title",[a("router-link",{staticClass:"hidden-xs-only",staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[t._v("\n      "+t._s(t.title)+"\n      ")]),t._v(" "),a("router-link",{staticClass:"hidden-md-and-up",staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[t._v("\n      Project Helios\n      ")])],1),t._v(" "),a("v-spacer"),t._v(" "),a("v-toolbar-items",[a("v-btn",{staticClass:"hidden-xs-only",attrs:{flat:""},nativeOn:{click:function(e){e.stopPropagation(),t.aboutDialog=!0}}},[t._v("\n        About\n      ")]),t._v(" "),a("v-btn",{staticClass:"hidden-xs-only",attrs:{flat:"",router:"",to:"/catalogue"}},[t._v("\n        Song Library\n      ")]),t._v(" "),a("v-menu",{attrs:{"close-on-content-click":!1}},[a("v-btn",{staticClass:"hidden-xs-only",attrs:{slot:"activator",flat:""},slot:"activator"},[t._v("\n        Volume ("+t._s(t.volumeBar)+")\n        ")]),t._v(" "),a("v-card",{staticStyle:{width:"400px"}},[a("v-subheader",[t._v("Media volume")]),t._v(" "),a("v-card-text",[a("v-slider",{attrs:{"prepend-icon":"volume_up"},model:{value:t.volumeBar,callback:function(e){t.volumeBar=e},expression:"volumeBar"}})],1)],1)],1),t._v(" "),a("v-btn",{staticClass:"hidden-xs-only",attrs:{flat:""},on:{click:function(e){e.stopPropagation(),t.togglePlayer(e)}}},[t._v("\n        "+t._s(t.showHide)+"\n      ")]),t._v(" "),a("v-btn",{staticClass:"hidden-md-and-up",attrs:{flat:""},on:{click:function(e){e.stopPropagation(),t.togglePlayer(e)}}},[a("v-icon",[t._v("queue_music")])],1)],1)],1),t._v(" "),a("v-dialog",{attrs:{"max-width":"390"},model:{value:t.aboutDialog,callback:function(e){t.aboutDialog=e},expression:"aboutDialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline",staticStyle:{"font-weight":"bold"}},[t._v("Author: Phi Nguyen")]),t._v(" "),a("v-card-media",{attrs:{src:"/static/nietzchehong.jpg",height:"150px"}}),t._v(" "),a("v-card-text",[a("p",[t._v("Disclaimer: I do not own any of the artistic content on the page.\n        This website was created as a tribute to the Vaporwave movement\n        and not for any commercial purpose whatsoever.")]),t._v(" "),a("p",[t._v("Enjoy the ａｅｓｔｈｅｔｉｃ")])])],1)],1)],1)},b=[],_={render:f,staticRenderFns:b},w=_,y=a("VU/8"),k=y(v,w,!1,null,null,null),S=k.exports,x={created:function(){var t=this;Ae.$on("toggledDrawer",function(e){t.drawer=e})},data:function(){return{drawer:!1,tilesList:[{icon:"library_music",title:"Song Library",link:"/catalogue"},{icon:"people",title:"Vaporwave Artists",link:"/artists"},{icon:"translate",title:"Vaporize Your Text",link:"/textgen"},{icon:"info_outline",title:"About Vaporwave",link:"/about"},{icon:"contacts",title:"Register",link:"/register"},{icon:"account_circle",title:"Sign In",link:"/signin"}]}}},C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-navigation-drawer",{staticClass:"blue lighten-3",attrs:{temporary:"",overflow:"",absolute:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",t._l(t.tilesList,function(e,n){return a("v-list-tile",{key:n,attrs:{router:"",to:e.link}},[a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)}))],1)],1)},A=[],P={render:C,staticRenderFns:A},j=P,I=a("VU/8"),E=n,B=I(x,j,!1,E,null,null),V=B.exports,T={data:function(){return{}}},N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-footer",{staticClass:"pa-3",attrs:{absolute:""}},[a("v-spacer"),t._v(" "),a("div",[t._v("© New Dream LTD "+t._s((new Date).getFullYear()))])],1)],1)},L=[],O={render:N,staticRenderFns:L},R=O,M=a("VU/8"),D=M(T,R,!1,null,null,null),$=D.exports,H=[{artist:"_Lancaster",path:"paradise.mp3",song:"Paradise",logo:"press.jpg",album:"Press Play",url:"https://lancasterr.bandcamp.com/album/press-play"},{artist:"Macintosh Plus",path:"420.mp3",song:"リサフランク420 _ 現代のコンピュー",logo:"floral.jpg",album:"FLORAL SHOPPE",url:"https://beerontherug.bandcamp.com/album/floral-shoppe"},{artist:"Eyeliner",path:"closeness.mp3",song:"Closeness",logo:"eyeliner.jpg",album:"High Fashion Mood Music",url:"https://disasteradio.bandcamp.com/album/high-fashion-mood-music"},{artist:"fuji grid tv",path:"sundream.mp3",song:"ssun dreamm",logo:"prism.jpg",album:"prism genesis",url:"https://vektroid.bandcamp.com/album/fuji-grid-tv-ex"},{artist:"Vaperror",path:"aqua.mp3",song:"Aqua Domain",logo:"manapool.jpg",album:"Mana Pool",url:"https://vaperror.bandcamp.com/album/mana-pool"},{artist:"Sacred Tapestry",path:"ldvhd.mp3",song:"LD . VHD",logo:"shader.jpg",album:"Shader",url:"https://vektroid.bandcamp.com/album/shader-complete"},{artist:"ESPRIT 空想",path:"summer.mp3",song:"summer night",logo:"summernight.jpg",album:"summer night",url:"http://esprit.100percentelectronica.com/album/summer-night"},{artist:"マクロスMACROSS 82-99",path:"newdawn.mp3",song:"NEW DAWN",logo:"sailorwave.jpg",album:"Sailorwave",url:"https://neoncityrecords.bandcamp.com/album/sailorwave"},{artist:"YUNG BAE",path:"takemylove.mp3",song:"Take My Love",logo:"bae.jpg",album:"Bae",url:"https://yungbaebae.bandcamp.com/album/bae"},{artist:"fuji grid tv",path:"toyota.mp3",song:"toyota / waiting for you",logo:"prism.jpg",album:"prism genesis",url:"https://vektroid.bandcamp.com/album/fuji-grid-tv-ex"},{artist:"Macintosh Plus",path:"floral.mp3",song:"花の専門店",logo:"floral.jpg",album:"FLORAL SHOPPE",url:"https://beerontherug.bandcamp.com/album/floral-shoppe"},{artist:"情報デスクVIRTUAL",path:"odysseus.mp3",song:"ODYSSEUSこう岩寺「OUTDOOR MALL」",logo:"shophome.jpg",album:"札幌コンテンポラリー",url:"https://beerontherug.bandcamp.com/album/-"},{artist:"New Dreams Ltd.",path:"fatal.mp3",song:"Fatal",logo:"avalon.jpg",album:"Initiation Tape: Isle of Avalon",url:"https://www.discogs.com/New-Dreams-Ltd-Initiation-Tape-Isle-Of-Avalon-Edition/master/731048"},{artist:"M4",path:"neonexit.mp3",song:"Ｎｅｏｎ Ｅｘｉｔ",logo:"neonexit.jpg",album:"Ｎｅｏｎ Ｅｘｉｔ",url:"https://m4sound.bandcamp.com/album/--10"},{artist:"情報デスクVIRTUAL",path:"testarossa.mp3",song:"T E S T A R O S S A interLude",logo:"shophome.jpg",album:"札幌コンテンポラリー",url:"https://beerontherug.bandcamp.com/album/-"},{artist:"Hong Kong Express",path:"lexus.mp3",song:"Girl In The Lexus Showroom",logo:"hke.png",album:"浪漫的夢想",url:"https://hkedream.bandcamp.com/album/--2"},{artist:"Sacred Tapestry",path:"dreamy.mp3",song:"ドリーミー",logo:"shader.jpg",album:"Shader",url:"https://vektroid.bandcamp.com/album/shader-complete"},{artist:"Macintosh Plus",path:"geo.mp3",song:"地理",logo:"floral.jpg",album:"FLORAL SHOPPE",url:"https://beerontherug.bandcamp.com/album/floral-shoppe"},{artist:"Eyeliner",path:"devotion.mp3",song:"Devotion",logo:"eyeliner.jpg",album:"High Fashion Mood Music",url:"https://disasteradio.bandcamp.com/album/high-fashion-mood-music"},{artist:"YUNG BAE",path:"willing.mp3",song:"i'm willing",logo:"bae.jpg",album:"Bae",url:"https://yungbaebae.bandcamp.com/album/bae"},{artist:"マクロスMACROSS 82-99",path:"jupiter.mp3",song:"木野 まこと",logo:"sailorwave.jpg",album:"Sailorwave",url:"https://neoncityrecords.bandcamp.com/album/sailorwave"},{artist:"Hong Kong Express",path:"yourdrink.mp3",song:"Your drink, sir 鸡尾酒酒吧",logo:"hke.png",album:"浪漫的夢想",url:"https://hkedream.bandcamp.com/album/--2"},{artist:"Eyeliner",path:"eyeliner.mp3",song:"Eyeliner",logo:"eyeliner.jpg",album:"High Fashion Mood Music",url:"https://disasteradio.bandcamp.com/album/high-fashion-mood-music"},{artist:"情報デスクVIRTUAL",path:"7wonder.mp3",song:"7 WONDERS OF THE iNTERNET",logo:"shophome.jpg",album:"札幌コンテンポラリー",url:"https://beerontherug.bandcamp.com/album/-"},{artist:"New Dreams Ltd.",path:"slave.mp3",song:"Slave",logo:"avalon.jpg",album:"Initiation Tape: Isle of Avalon",url:"https://www.discogs.com/New-Dreams-Ltd-Initiation-Tape-Isle-Of-Avalon-Edition/master/731048"},{artist:"fuji grid tv",path:"cinemax.mp3",song:"cinemax / speak",logo:"prism.jpg",album:"prism genesis",url:"https://vektroid.bandcamp.com/album/fuji-grid-tv-ex"},{artist:"ESPRIT 空想",path:"cruiser.mp3",song:"cruiser",logo:"summernight.jpg",album:"summer night",url:"http://esprit.100percentelectronica.com/album/summer-night"},{artist:"マクロスMACROSS 82-99",path:"horsey.mp3",song:"Horsey",logo:"miles.jpg",album:"A Million Miles Away",url:"https://macross82-99.bandcamp.com/album/a-million-miles-away"},{artist:"Eyeliner",path:"payphone.mp3",song:"Payphone",logo:"buynow.jpg",album:"Buy Now",url:"https://disasteradio.bandcamp.com/album/buy-now"},{artist:"Chuck Person",path:"angel.mp3",song:"Angel",logo:"ecco.jpg",album:"Chuck Person's Eccojams Vol. I",url:"https://vaportapesinc.bandcamp.com/album/eccojams-vol-1"},{artist:"Midnight Television",path:"blind.mp3",song:"Blind Dates",logo:"midnight.jpeg",album:"Midnight Television",url:"https://beerontherug.bandcamp.com/album/midnight-television"},{artist:"New Dreams Ltd.",path:"pine.mp3",song:"Pine Forest Surf",logo:"avalon.jpg",album:"Initiation Tape: Isle of Avalon",url:"https://www.discogs.com/New-Dreams-Ltd-Initiation-Tape-Isle-Of-Avalon-Edition/master/731048"},{artist:"Silver Richards",path:"again.mp3",song:"Again",logo:"faceless.jpg",album:"夜遊び",url:"https://telepathtelepath.bandcamp.com/album/--4"},{artist:"INTERNET CLUB",path:"synergize.mp3",song:"SYNERGIZE",logo:"redefine.jpg",album:"REDEFINING THE WORKPLACE",url:"https://internetclub.bandcamp.com/album/redefining-the-workplace"},{artist:"t e l e p a t h テレパシー能力者",path:"newday.mp3",song:"新しい日",logo:"ghost.jpg",album:"未来へ",url:"https://telepathtelepath.bandcamp.com/album/--5"},{artist:"YUNG BAE",path:"yebisu.mp3",song:"YEBISU",logo:"bae.jpg",album:"Bae",url:"https://yungbaebae.bandcamp.com/album/bae"}],F=H,U=a("NYxO"),Y={created:function(){var t=this;Ae.$emit("toggledPlayer",function(e){t.player=e}),this.audio.volume=this.$store.state.volume,this.audio=new Audio(this.pathToAudio+this.catalogue[this.currentSong].path),this.init(),this.$store.commit("togglePlaying",!0)},beforeDestroy:function(){this.$store.commit("togglePlaying",!1),this.audio.removeEventListener("timeupdate",this.handleProgressBar)},data:function(){return{pathToAudio:"static/catalog/",progress:0,catalogue:F,audio:new Audio}},computed:Object(U.b)(["currentSong","playing","volume","player"]),watch:{playing:function(t,e){t?this.audio.play():this.audio.pause()},volume:function(t,e){this.audio.volume=t},currentSong:function(t,e){this.playing||this.$store.commit("togglePlaying",!0),this.audio.pause(),this.audio=new Audio(this.pathToAudio+this.catalogue[t].path),this.init(),this.audio.play()},audio:function(t,e){t.volume=this.volume}},methods:{playPause:function(){this.playing?this.$store.commit("togglePlaying",!1):this.$store.commit("togglePlaying",!0)},init:function(){this.audio.addEventListener("timeupdate",this.handleProgressBar)},handleProgressBar:function(){var t=this.audio.currentTime,e=this.audio.duration;this.progress=parseInt(t/e*100),100===this.progress&&this.skipSong(1)},skipSong:function(t){0===t?this.audio.currentTime>2?this.audio.currentTime=0:this.$store.commit("songIncr",{increment:!1,threshold:this.catalogue.length}):this.$store.commit("songIncr",{increment:!0,threshold:this.catalogue.length})},skipInterval:function(t){0===t?this.audio.currentTime-=10:this.audio.currentTime+=10},shuffleSong:function(t){this.$store.commit("songChange",function(t,e){return null==e&&(e=t,t=0),Math.floor(Math.random()*(e-t))+t}(0,this.catalogue.length))}}},G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-bottom-nav",{staticStyle:{height:"70px"},attrs:{value:"true"},model:{value:t.player,callback:function(e){t.player=e},expression:"player"}},[a("v-card",{staticStyle:{width:"100%"},attrs:{tile:""}},[a("v-progress-linear",{staticClass:"my-0",attrs:{height:"3",value:t.progress}}),t._v(" "),a("v-list",[a("v-list-tile",[a("img",{staticClass:"hidden-xs-only",staticStyle:{height:"50px",width:"auto","margin-right":"20px"},attrs:{src:t.pathToAudio+t.catalogue[t.currentSong].logo}}),t._v(" "),a("v-list-tile-content",{attrs:{"grid-list-md":""}},[a("v-list-tile-title",[a("a",{staticStyle:{"text-decoration":"none",color:"#ffffff","font-weight":"bold"},attrs:{href:t.catalogue[t.currentSong].url,target:"_blank"}},[a("span",[t._v(t._s(t.catalogue[t.currentSong].song))])])]),t._v(" "),a("v-list-tile-sub-title",[a("a",{staticStyle:{"text-decoration":"none",color:"#ffffff"},attrs:{href:t.catalogue[t.currentSong].url,target:"_blank"}},[a("span",[t._v(t._s(t.catalogue[t.currentSong].artist))]),t._v(" "),a("span",{staticClass:"hidden-xs-only"},[t._v(" - "+t._s(t.catalogue[t.currentSong].album))])])])],1),t._v(" "),a("v-spacer"),t._v(" "),a("v-list-tile-action",[a("v-btn",{on:{click:function(e){t.skipSong(0)}}},[a("v-icon",[t._v("skip_previous")])],1)],1),t._v(" "),a("v-list-tile-action",{staticClass:"hidden-xs-only"},[a("v-btn",[a("v-icon",{attrs:{color:"white"},on:{click:function(e){t.skipInterval(0)}}},[t._v("fast_rewind")])],1)],1),t._v(" "),a("v-list-tile-action",[a("v-btn",{on:{click:t.playPause}},[t.playing?a("v-icon",[t._v("pause")]):a("v-icon",[t._v("play_arrow")])],1)],1),t._v(" "),a("v-list-tile-action",{staticClass:"hidden-xs-only"},[a("v-btn",{on:{click:function(e){t.skipInterval(1)}}},[a("v-icon",[t._v("fast_forward")])],1)],1),t._v(" "),a("v-list-tile-action",[a("v-btn",{on:{click:function(e){t.skipSong(1)}}},[a("v-icon",[t._v("skip_next")])],1)],1),t._v(" "),a("v-list-tile-action",{class:{"mr-0":t.$vuetify.breakpoint.mdAndUp}},[a("v-btn",{on:{click:t.shuffleSong}},[a("v-icon",[t._v("shuffle")])],1)],1)],1)],1)],1)],1)},W=[],z={render:G,staticRenderFns:W},K=z,q=a("VU/8"),Z=i,J=q(Y,K,!1,Z,null,null),Q=J.exports,X={components:{"app-toolbar":S,"app-drawer":V,"app-footer":$,"music-nav":Q},data:function(){return{e3:1,e31:!0}}},tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticStyle:{"font-family":"'Fira Mono', monospace","-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale"},attrs:{dark:""}},[a("app-toolbar"),t._v(" "),a("app-drawer"),t._v(" "),a("router-view"),t._v(" "),a("app-footer"),t._v(" "),a("music-nav")],1)},et=[],at={render:tt,staticRenderFns:et},nt=at,it=a("VU/8"),ot=o,st=it(X,nt,!1,ot,"data-v-07d2e2b6",null),rt=st.exports,lt=a("/ocq"),ct={computed:Object(U.b)(["playing"]),methods:{pauseSong:function(){this.playing&&this.$store.commit("togglePlaying",!1)}}},ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticStyle:{padding:"50px"}},[a("section",{attrs:{id:"paragraph"}},[t._m(0,!1,!1),t._v(" "),a("p",{staticStyle:{"font-weight":"bold","font-size":"150%"}},[t._v("\n        About Vaporwave\n      ")]),t._v(" "),a("p",[t._v("\n        Vaporwave is a genre of music that began to explode around the start \n        of 2010s. The signature sound of vaporwave was made by taking sections of \n        80's music, slowing them down, then (most of the time) add a lot of effects like  \n        delay or reverb, and sometimes chop the song up into little pieces and then mix \n        them up together like shuffling a deck of card.\n      ")]),t._v(" "),a("div",{attrs:{id:"videoShowcase"}},[a("p",{on:{click:t.pauseSong}},[a("iframe",{attrs:{src:"https://www.youtube.com/embed/PdpP0mXOlWM",frameborder:"0",allow:"encrypted-media",allowfullscreen:""}}),t._v(" "),a("iframe",{attrs:{src:"https://www.youtube.com/embed/wyt_87yCyNw",frameborder:"0",allow:"encrypted-media",allowfullscreen:""}})])]),t._v(" "),a("p",[t._v('\n        The catch of Vaporwave comes in two parts, the "a e s t h e t i c" and the music \n        itself, which are two sides of somewhat the same coin. Both of these components \n        relies on a very simple strategy: to invoke nostalgia upon the listener. Many people \n        find Vaporwave the odd child of music: unoriginal, cringeworthy and apparently just \n        bits and pieces of stolen music being put together, but for some reason are oddly \n        attracted to it. The magic of Vaporwave is that it takes the listeners back to an era \n        where they could relive part of their long lost memory. Nostalgia is not what they \n        were looking for - Vaporwave forces it on them whether they like it or not.\n      ')]),t._v(" "),a("img",{staticClass:"bigImg",attrs:{src:"/static/gifs/room.gif"}})])])},pt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("img",{staticStyle:{width:"100%",height:"auto"},attrs:{src:"/static/images/vapeisdead.jpg"}})])}],mt={render:ut,staticRenderFns:pt},dt=mt,ht=a("VU/8"),gt=s,vt=ht(ct,dt,!1,gt,null,null),ft=vt.exports,bt={computed:{layoutBinding:function(){var t={};return this.$vuetify.breakpoint.xs&&(t.column=!0),t},imageStyle:function(){return this.$vuetify.breakpoint.xs?"width: 100%; height: auto;":"width: 75%; height: auto;"},cardStyle:function(){return this.$vuetify.breakpoint.xs?"margin: 0px 25px 20px 25px;":"margin: 0 auto; margin-bottom: 20px; width: 50%;"},output:function(){for(var t="",e=0;e<this.input.length;e++)this.input.charCodeAt(e)>=33&&this.input.charCodeAt(e)<=270?t+=String.fromCharCode(this.input.charCodeAt(e)+65248):32===this.input.charCodeAt(e)&&(t+=String.fromCharCode(this.input.charCodeAt(e)));return t}},data:function(){return{input:""}}},_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"padding-bottom":"50px"}},[t._m(0,!1,!1),t._v(" "),a("v-container",{attrs:{"grid-list-xl":""}},[a("v-layout",t._b({},"v-layout",t.layoutBinding,!1),[a("v-flex",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],attrs:{placeholder:"Normal text goes here...",rows:"10"},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}})]),t._v(" "),a("v-flex",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.output,expression:"output"}],attrs:{disabled:"",placeholder:"Meme text appears here...",rows:"10"},domProps:{value:t.output},on:{input:function(e){e.target.composing||(t.output=e.target.value)}}})])],1)],1),t._v(" "),a("section",{style:t.cardStyle,attrs:{id:"text"}},[a("v-card",[a("v-card-text",[a("p",[t._v("\n          Vaporwave is mostly about the aesthetics. If you're surfing around\n          Youtube and come across something like this:\n        ")]),t._v(" "),a("p",{staticStyle:{"text-align":"center"}},[a("img",{style:t.imageStyle,attrs:{src:"static/images/hero.jpg"}})]),t._v(" "),a("p",[t._v('\n          That\'s what kids those days called "a e s t h e t i c".\n        ')]),t._v(" "),a("p",[t._v("\n          Although it might look like they are adding spaces in between each\n          letters, that's actually not the case. They are using a special set\n          of unicode characters called \"full-width\" characters. Keep in mind\n          that these characters are not from a different font. They exist in\n          every computer system by default, just that\n          you don't have them on your keyboard. To acquire these special \n          characters, one must increment the ASCII code of a letter by 65248\n          to get the same letter but with a funky full-width look to it.\n        ")]),t._v(" "),a("p",[t._v("\n          The coding behind this conversion is very simple.\n        ")]),t._v(" "),a("v-card",{attrs:{id:"codeField",color:"black"}},[a("v-card-text",[a("p",[a("strong",[t._v("function")]),t._v(" memeConverter(input)  {")]),t._v(" "),a("p",[t._v("  "),a("strong",[t._v("let")]),t._v(" output = ''")]),t._v(" "),a("p",[t._v("  "),a("strong",[t._v("for")]),t._v(" (let i = 0; i < input.length; i++) {")]),t._v(" "),a("p",[t._v("    "),a("strong",[t._v("if")]),t._v(" (input.charCodeAt(i) >= 33 && input.charCodeAt(i) <= 270) {")]),t._v(" "),a("p",[t._v("      \n              output += String.fromCharCode(input.charCodeAt(i) + 65248)")]),t._v(" "),a("p",[t._v("    } "),a("strong",[t._v("else if")]),t._v(" (input.charCodeAt(i) === 32) {")]),t._v(" "),a("p",[t._v("      \n              output += String.fromCharCode(input.charCodeAt(i))")]),t._v(" "),a("p",[t._v("    }")]),t._v(" "),a("p",[t._v("  }")]),t._v(" "),a("p",[t._v("  "),a("strong",[t._v("return")]),t._v(" output")]),t._v(" "),a("p",[t._v("}")])])],1)],1)],1),t._v(" "),t._m(1,!1,!1)],1)],1)},wt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"head"}},[a("p",{staticStyle:{"text-align":"center","margin-top":"20px"}},[a("img",{staticStyle:{height:"8vw",width:"auto"},attrs:{src:"static/gifs/lacroix.gif"}}),t._v(" "),a("span",{staticStyle:{"text-align":"center","font-size":"8vw","font-family":"'Inconsolata'"}},[t._v("\n        _Text Vaporizer™\n      ")]),t._v(" "),a("img",{staticStyle:{height:"8vw",width:"auto"},attrs:{src:"static/gifs/lacroix.gif"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticStyle:{"text-align":"center"}},[a("img",{staticStyle:{height:"20vw",width:"auto"},attrs:{src:"static/gifs/sega.gif"}})])}],yt={render:_t,staticRenderFns:wt},kt=yt,St=a("VU/8"),xt=r,Ct=St(bt,kt,!1,xt,"data-v-396bca6f",null),At=Ct.exports,Pt=a("Dd8w"),jt=a.n(Pt),It={data:function(){return{pathToAudio:"static/catalog/",catalogue:F,currentSongHover:-1,mouseOver:!1,carouselViewButton:!0,viewPerPage:18,search:"",currentPage:1}},computed:jt()({},Object(U.b)(["currentSong","playing"]),{carouselView:function(){return 0===this.search.length&&!0===this.carouselViewButton},pageNum:function(){return Math.ceil(this.catalogue.length/this.viewPerPage)},processedCatalogue:function(){return this.carouselView?this.catalogue.slice((this.currentPage-1)*this.viewPerPage,this.currentPage*this.viewPerPage):this.catalogue}}),methods:{songChange:function(t){this.$store.commit("songChange",t)},playingToggle:function(t){this.$store.commit("togglePlaying",t)},playSong:function(t){this.catalogue.indexOf(t)===this.currentSong&&this.playing?this.playingToggle(!1):this.catalogue.indexOf(t)!==this.currentSong||this.playing?(this.songChange(this.catalogue.indexOf(t)),this.playingToggle(!0)):this.playingToggle(!0)},searchBool:function(t){return t.song.toLowerCase().match(this.search.toLowerCase())||t.album.toLowerCase().match(this.search.toLowerCase())||t.artist.toLowerCase().match(this.search.toLowerCase())}}},Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{attrs:{id:"paragraph"}},[a("p",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",id:"searchBar",placeholder:"Search.exe..."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),a("div",{attrs:{id:"nowPlaying"}},[a("div",{attrs:{id:"nowPlayingArtSect"}},[a("img",{staticStyle:{height:"300px"},attrs:{src:t.pathToAudio+t.catalogue[t.currentSong].logo}})]),t._v(" "),a("div",{attrs:{id:"nowPlayingInfoSect"}},[a("div",{attrs:{id:"infoSectContent"}},[a("p",{staticStyle:{"font-style":"italic"}},[t._v("now playing")]),t._v(" "),a("p",[a("strong",[t._v(t._s(t.catalogue[t.currentSong].song))])]),t._v(" "),a("p",[a("strong",[t._v("Artist:")]),t._v(" "+t._s(t.catalogue[t.currentSong].artist))]),t._v(" "),a("p",[a("strong",[t._v("Album:")]),t._v(" "+t._s(t.catalogue[t.currentSong].album))]),t._v(" "),a("div",{attrs:{id:"linkButton"}},[a("a",{attrs:{href:t.catalogue[t.currentSong].url,target:"_blank"}},[t._v("\n            >>> Visit "+t._s(t.catalogue[t.currentSong].artist)+" on Bandcamp\n          ")])])])])]),t._v(" "),a("div",{attrs:{id:"instruction"}},[a("p",[t._v("\n        Click on a song to play, click on it again to pause or use the \n        bottom panel music player to interact with the playlist.\n      ")]),t._v(" "),a("p",[t._v("\n        View per page:\n        "),a("button",{staticClass:"viewButton",class:{"viewButton active":t.carouselViewButton},on:{click:function(e){t.carouselViewButton=!0}}},[t._v(t._s(t.viewPerPage))]),t._v(" "),a("button",{staticClass:"viewButton",class:{"viewButton active":!t.carouselViewButton},on:{click:function(e){t.carouselViewButton=!1}}},[t._v("All")])])]),t._v(" "),a("div",{staticClass:"cataParent"},t._l(t.processedCatalogue,function(e,n){return a("div",{directives:[{name:"show",rawName:"v-show",value:t.searchBool(e),expression:"searchBool(song)"}],key:n,staticClass:"cataChild",class:{cataChildHighlight:t.processedCatalogue.indexOf(e)==t.currentSong||1==t.mouseOver&&e==t.currentSongHover},on:{click:function(a){t.playSong(e)},mouseover:function(a){t.currentSongHover=e,t.mouseOver=!0},mouseleave:function(e){t.currentSongHover=-1,t.mouseOver=!1}}},[a("img",{staticClass:"cataImage",attrs:{src:t.pathToAudio+e.logo}}),t._v(" "),a("p",{staticClass:"cataHeader"},[t._v(t._s(e.song))]),t._v(" "),a("p",[t._v(t._s(e.artist))]),t._v(" "),a("p",[t._v(t._s(e.album))])])})),t._v(" "),a("div",{attrs:{id:"carouselPagesButtonField"}},t._l(t.pageNum,function(e){return a("button",{directives:[{name:"show",rawName:"v-show",value:t.carouselView,expression:"carouselView"}],key:e,staticClass:"carouselPageButton",class:{"carouselPageButton active":e==t.currentPage},on:{click:function(a){t.currentPage=e}}},[t._v("\n        "+t._s(e)+"\n      ")])}))])])},Bt=[],Vt={render:Et,staticRenderFns:Bt},Tt=Vt,Nt=a("VU/8"),Lt=l,Ot=Nt(It,Tt,!1,Lt,"data-v-5bc75c87",null),Rt=Ot.exports,Mt={},Dt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0,!1,!1)},$t=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{attrs:{id:"paragraph"}},[n("div",{attrs:{id:"validator"}},[n("p",{attrs:{id:"header"}},[n("img",{staticClass:"lacroix",attrs:{src:a("dn12")}}),t._v("\n        SIGN UP FOR OUR AESTHETIC NEWSLETTER\n        "),n("img",{staticClass:"lacroix",attrs:{src:a("dn12")}})]),t._v(" "),n("div",{attrs:{id:"field"}},[n("p",[t._v("Username")]),n("input",{attrs:{type:"text"}}),t._v(" "),n("p",[t._v("Password")]),n("input",{attrs:{type:"password"}}),t._v(" "),n("p",[t._v("Confirm Password")]),n("input",{attrs:{type:"password"}}),t._v(" "),n("p",[t._v("Email")]),n("input",{attrs:{type:"text"}})]),t._v(" "),n("p",{staticStyle:{"margin-top":"50px"}},[n("button",[t._v("Sign up")])])])])])}],Ht={render:Dt,staticRenderFns:$t},Ft=Ht,Ut=a("VU/8"),Yt=c,Gt=Ut(Mt,Ft,!1,Yt,null,null),Wt=Gt.exports,zt={data:function(){return{username:"",password:""}}},Kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{attrs:{id:"paragraph"}},[a("div",{attrs:{id:"validator"}},[t._m(0,!1,!1),t._v(" "),a("div",{attrs:{id:"field"}},[a("p",[t._v("Username")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._v(" "),a("p",[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),t._m(1,!1,!1)])])])},qt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{attrs:{id:"header"}},[n("img",{staticClass:"lacroix",attrs:{src:a("dn12")}}),t._v("\n        SIGN IN\n        "),n("img",{staticClass:"lacroix",attrs:{src:a("dn12")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticStyle:{"margin-top":"50px"}},[a("button",[t._v("Sign In")])])}],Zt={render:Kt,staticRenderFns:qt},Jt=Zt,Qt=a("VU/8"),Xt=u,te=Qt(zt,Jt,!1,Xt,null,null),ee=te.exports,ae=[{name:"Vektroid",bandcamp:"https://vektroid.bandcamp.com/",alias:["MACINTOSH PLUS","fuji grid tv","Sacred Tapestry","New Dream Ltd"],description:"\n      Vektroid (Ramona Andra Xavier - born August 19, 1992) is a vaporwave artist\n      and perhaps the face of the genre that she have pioneered to be massively popular  \n      for a short period of time. She is a versatile artist who had made and mastered \n      many vaporwave subgenres during the peak of her career.\n    ",featImage:"ramonafeat.jpg",sideImage:"ramona.jpg",features:[{album:"FLORAL SHOPPE",logo:"floral.jpg",link:"https://beerontherug.bandcamp.com/album/floral-shoppe"},{album:"prism genesis",logo:"prism.jpg",link:"https://vektroid.bandcamp.com/album/fuji-grid-tv-ex"},{album:"Initiation Tape: Isle of Avalon",logo:"avalon.jpg",link:"https://www.discogs.com/New-Dreams-Ltd-Initiation-Tape-Isle-Of-Avalon-Edition/master/731048"},{album:"Shader",logo:"shader.jpg",link:"https://vektroid.bandcamp.com/album/shader-complete"}]},{name:"Disasteradio",bandcamp:"https://disasteradio.bandcamp.com/",alias:["Eyeliner","Super Doobie Bros"],description:"\n      Disasteradio is the pseudonym of Luke Rowell, a computer musician from Lower Hutt, \n      New Zealand. He began writing a mixture of Chiptune and synthpop in 1999 and has \n      released eight albums, toured New Zealand over ten times and completed several \n      tours of Europe, and two of the US.\n    ",featImage:"disasterfeat.jpg",sideImage:"disaster.jpg",features:[{album:"BUY NOW",logo:"buynow.jpg",link:"https://disasteradio.bandcamp.com/album/buy-now"},{album:"Eyeliner",logo:"eyeliner.jpg",link:"https://disasteradio.bandcamp.com/album/high-fashion-mood-music"},{album:"LARP of Luxury",logo:"larp.jpg",link:"https://disasteradio.bandcamp.com/album/larp-of-luxury-2"}]},{name:"Oneohtrix Point Never",bandcamp:"https://vapormemesinc.bandcamp.com/",alias:["Chuck Person","Dania Shapes","KGB Man","0PN"],description:"\n      Daniel Lopatin (born 25 July 1982), also known by the recording alias Oneohtrix \n      Point Never, is an American experimental musician, composer, and producer based \n      in Brooklyn. He began releasing projects under the moniker in the mid-2000s, \n      initially receiving acclaim for the 2009 compilation Rifts.\n    ",featImage:"personfeat.jpg",sideImage:"person.jpg",features:[{album:"Chuck Person's Eccojams Vol. I",logo:"ecco.jpg",link:"https://vaportapesinc.bandcamp.com/album/eccojams-vol-1"},{album:"Replica",logo:"replica.jpg",link:"https://oneohtrixpointnever1.bandcamp.com/album/replica"},{album:"R Plus Seven",logo:"seven.jpg",link:"https://itunes.apple.com/ca/album/r-plus-seven/id673970570?app=itunes&ign-mpt=uo%3D4"}]},{name:"Blank Banshee",bandcamp:"https://blankbanshee.bandcamp.com/",alias:[],description:'\n      Blank Banshee is a Canadian experimental musician and a prominent vaporwave\n      artist, best known for his albums Blank Banshee 0 and Blank Banshee 1. He is\n      one of the pioneer of a different take of vaporwave - "Vaportrap", which focuses\n      more on the technical part of vaporwave rather than its memeistic tendency.\n    ',featImage:"blankfeat.jpg",sideImage:"blank.jpg",features:[{album:"Blank Banshee 0",logo:"blank0.jpg",link:"https://blankbanshee.bandcamp.com/album/blank-banshee-0"},{album:"Blank Banshee 1",logo:"blank1.jpg",link:"https://blankbanshee.bandcamp.com/album/blank-banshee-1"},{album:"MEGA",logo:"mega.jpg",link:"https://blankbanshee.bandcamp.com/album/mega"}]},{name:"マクロスMACROSS 82-99",bandcamp:"https://macross82-99.bandcamp.com/",alias:[],description:"\n      マクロスMACROSS 82-99 is one of the more popular Vaporwave artists, featuring his\n      work on the more easily-listened Future Funk branch. Macross claims that his\n      real name is Claire Sakura and lives in Japan, but his real gender, name or\n      whereabout is currently a big mystery.\n    ",featImage:"macrossfeat.jpg",sideImage:"macross.jpg",features:[{album:"Sailorwave",logo:"sailorwave.jpg",link:"https://fortune500.bandcamp.com/album/sailorwave"},{album:"A Million Miles Away",logo:"miles.jpg",link:"https://macross82-99.bandcamp.com/album/a-million-miles-away"},{album:"Sailorwave II",logo:"sailorwave2.jpg",link:"https://macross82-99.bandcamp.com/album/sailorwave-ii"}]}],ne=ae,ie={data:function(){return{artists:ne,artistViewing:!1,currentArtist:0}}},oe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"paragraph"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.artistViewing,expression:"artistViewing"}],attrs:{id:"artistViewPhone"}},[a("div",{attrs:{id:"viewPhoneName"}},[t._v("\n        "+t._s(t.artists[t.currentArtist].name)+"\n      ")]),t._v(" "),a("div",{attrs:{id:"viewPhoneContent"}},[a("img",{staticStyle:{width:"100%",height:"auto"},attrs:{src:"static/artists/"+t.artists[t.currentArtist].featImage}}),t._v(" "),a("div",{staticStyle:{"padding-left":"10px","padding-right":"10px"}},[a("p",[t._v(t._s(t.artists[t.currentArtist].description))])]),t._v(" "),a("div",{attrs:{id:"viewPhoneFeature"}},t._l(t.artists[t.currentArtist].features,function(e,n){return a("div",{key:n,staticClass:"featAlbumPhone"},[a("div",{staticClass:"albumArtPhone"},[a("img",{staticStyle:{width:"125px",height:"auto"},attrs:{src:"static/catalog/"+e.logo}})]),t._v(" "),a("div",{staticClass:"albumNamePhone"},[a("div",[t._v(t._s(e.album))])])])})),t._v(" "),a("div",{staticClass:"visitBandcampButtonPhone"},[a("a",{staticStyle:{"text-decoration":"none",color:"white"},attrs:{href:t.artists[t.currentArtist].bandcamp,target:"_blank"}},[t._v("\n            >>>Visit "+t._s(t.artists[t.currentArtist].name)+"'s Bandcamp here\n          ")])]),t._v(" "),a("button",{staticClass:"artistViewBackButtonPhone",on:{click:function(e){t.artistViewing=!1}}},[t._v("\n          Back to Artists\n        ")])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.artistViewing,expression:"artistViewing"}],attrs:{id:"artistView"}},[a("div",{attrs:{id:"artistViewMain"}},[a("div",{attrs:{id:"viewMainColumn1"}},[a("button",{staticClass:"artistViewBackButton",on:{click:function(e){t.artistViewing=!1}}},[t._v("\n        Back to Artists\n        ")])]),t._v(" "),a("div",{attrs:{id:"viewMainColumn2"}},[a("div",[a("h1",[t._v(t._s(t.artists[t.currentArtist].name))]),t._v(" "),t.artists[t.currentArtist].alias.length>0?a("p",[t._v("\n            Aka.\n            "),t._l(t.artists[t.currentArtist].alias,function(e,n){return a("span",{key:n},[n==t.artists[t.currentArtist].alias.length-1?a("span",[t._v("\n                "+t._s(e)+"\n              ")]):a("span",[t._v("\n                "+t._s(e)+", \n              ")])])})],2):t._e()])])]),t._v(" "),a("div",{attrs:{id:"artistViewContent"}},[a("div",{attrs:{id:"viewContentArt"}},[a("img",{staticStyle:{height:"100%",width:"auto"},attrs:{src:"static/artists/"+t.artists[t.currentArtist].sideImage}})]),t._v(" "),a("div",{attrs:{id:"viewContentInfo"}},[a("div",[a("p",[t._v(t._s(t.artists[t.currentArtist].description))]),t._v(" "),a("p",[t._v(t._s(t.artists[t.currentArtist].name)+"'s featured works:")])]),t._v(" "),a("div",{attrs:{id:"featuredAlbums"}},t._l(t.artists[t.currentArtist].features,function(e,n){return a("div",{key:n,staticClass:"featAlbum"},[a("a",{attrs:{href:e.link,target:"_blank"}},[a("div",{staticClass:"albumArt"},[a("img",{staticStyle:{width:"150px",height:"auto"},attrs:{src:"static/catalog/"+e.logo}})]),t._v(" "),a("div",{staticClass:"albumName"},[a("div",[t._v(t._s(e.album))])])])])})),t._v(" "),a("div",{staticStyle:{"margin-top":"30px",background:"black",width:"70%","box-shadow":"2px 2px grey"}},[a("a",{attrs:{href:t.artists[t.currentArtist].bandcamp,target:"_blank"}},[t._v("\n            >>>Visit "+t._s(t.artists[t.currentArtist].name)+"'s Bandcamp here\n          ")])])])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.artistViewing,expression:"!artistViewing"}],attrs:{id:"artistShowcase"}},t._l(t.artists,function(e,n){return a("div",{key:n,staticClass:"showcaseItems",on:{click:function(a){t.artistViewing=!0,t.currentArtist=t.artists.indexOf(e)}}},[a("div",{staticClass:"itemArt"},[a("img",{staticStyle:{width:"350px",height:"150px"},attrs:{src:"static/artists/"+e.featImage}})]),t._v(" "),a("div",{staticClass:"itemInfo"},[t._v("\n        "+t._s(e.name)+"\n      ")])])}))])},se=[],re={render:oe,staticRenderFns:se},le=re,ce=a("VU/8"),ue=p,pe=ce(ie,le,!1,ue,null,null),me=pe.exports,de={data:function(){return{e3:1,e31:!0}}},he=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},ge=[],ve={render:he,staticRenderFns:ge},fe=ve,be=a("VU/8"),_e=m,we=be(de,fe,!1,_e,"data-v-74aaa929",null),ye=we.exports;d.a.use(lt.a);var ke=new lt.a({mode:"history",routes:[{path:"/",component:ft},{path:"/textgen",component:At},{path:"/about",component:ft},{path:"/catalogue",component:Rt},{path:"/register",component:Wt},{path:"/signin",component:ee},{path:"/artists",component:me},{path:"/test",component:ye}]});d.a.use(U.a);var Se=new U.a.Store({state:{currentSong:[0,1,4,10,13,27,28][Math.floor(7*Math.random())],playing:!1,volume:.5,player:!0},mutations:{songChange:function(t,e){t.currentSong=e},songIncr:function(t,e){var a=e.increment,n=e.threshold,i=function(t,e){return(t%e+e)%e};t.currentSong=a?i(t.currentSong+1,n-1):i(t.currentSong-1,n-1)},togglePlaying:function(t,e){t.playing=e||!t.playing},volumeChange:function(t,e){t.volume=e},togglePlayer:function(t){t.player=!t.player}}}),xe=a("k8eI"),Ce=a.n(xe);a.d(e,"bus",function(){return Ae}),d.a.use(g.a),d.a.use(Ce.a),d.a.config.productionTip=!1;var Ae=new d.a;new d.a({el:"#app",router:ke,store:Se,template:"<App/>",components:{App:rt}})},QCv7:function(t,e){},dn12:function(t,e,a){t.exports=a.p+"static/img/lacroix.b488be6.gif"},n2gs:function(t,e){},"tH/h":function(t,e){},wCia:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3717f127954714a015da.js.map