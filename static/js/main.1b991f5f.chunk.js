(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,n){e.exports=n(31)},20:function(e,a,n){},21:function(e,a,n){},24:function(e,a,n){},28:function(e,a,n){},29:function(e,a,n){},30:function(e,a,n){},31:function(e,a,n){"use strict";n.r(a);var t=n(1),c=n.n(t),l=n(12),r=n.n(l),i=(n(20),n(32));n(21);var m=function(){return c.a.createElement(i.a,{className:"header"},c.a.createElement("h1",{className:"header_name"},"INFLUENCER APP"))},o=(n(24),n(9)),s=n(33),u=n(34),d=n(7),E=n(8);n(28);var p=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"video"},c.a.createElement("img",{src:e.media.cover_photo_url,alt:"video thumbnail",className:"video_thumbnail"}),"video"===e.media.media_type&&c.a.createElement(d.a,{icon:E.c,className:"playButton"})),c.a.createElement("div",{className:"button"},c.a.createElement(s.a,null,c.a.createElement(u.a,{onClick:function(){navigator.clipboard.writeText(e.media.tracking_link)}},c.a.createElement("span",{className:"icon"},c.a.createElement(d.a,{icon:E.b}))),c.a.createElement(u.a,null,c.a.createElement("span",null,c.a.createElement(d.a,{icon:E.a}))))))};n(29);var v=function(e){return c.a.createElement("div",{className:"video_container"},e.medias.map(function(e,a){return c.a.createElement("div",{className:"card",key:a},c.a.createElement(p,{media:e}))}))};n(30);var f=function(e){return c.a.createElement("div",{className:"campaign_box"},e.campaigns.map(function(e,a){return c.a.createElement("div",{key:a},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"left"},c.a.createElement("img",{src:e.campaign_icon_url,className:"campaign_icon"})),c.a.createElement("div",{className:"right"},c.a.createElement("p",{className:"campaign_name"},e.campaign_name),c.a.createElement("p",{className:"campaign_pay"},e.pay_per_install,"per insall"))),c.a.createElement(v,{medias:e.medias}))}))};var g=function(){var e=Object(t.useState)(null),a=Object(o.a)(e,2),n=a[0],l=a[1],r=Object(t.useState)(!1),i=Object(o.a)(r,2),m=i[0],s=i[1],u=Object(t.useState)([]),d=Object(o.a)(u,2),E=d[0],p=d[1];return Object(t.useEffect)(function(){fetch("https://www.plugco.in/public/take_home_sample_feed").then(function(e){return e.json()}).then(function(e){s(!0),p(e.campaigns)},function(e){s(!0),l(e)})},[]),n?c.a.createElement("div",null,"Error: Not able to load the data successfully"):m?c.a.createElement("div",null,c.a.createElement(f,{campaigns:E})):c.a.createElement("div",null,"Loading...")},h=n(13);var N=function(){return c.a.createElement(h.a,{onRefresh:function(){window.location.reload()}},c.a.createElement("div",{className:"App"},c.a.createElement(m,null),c.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.1b991f5f.chunk.js.map