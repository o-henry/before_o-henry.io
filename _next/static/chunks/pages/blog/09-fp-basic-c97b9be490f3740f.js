(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[860],{2471:function(n,e,s){"use strict";var i=s(536),r=s.n(i),l=s(7099),c=s.n(l),t=s(5893),a=c()("{MM} {DD}, {YYYY}");e.Z=function(n){var e=n.meta,s=n.project,i=n.blog;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{className:"jsx-976264879 "+((s||i?"great-title":null)||""),children:e.title}),(0,t.jsxs)("div",{className:"jsx-976264879 details",children:[s||i?null:(0,t.jsx)("p",{className:"jsx-976264879",children:e.description}),(0,t.jsx)("span",{className:"jsx-976264879 "+((s||i?"hide":"date")||""),children:a.render(new Date(e.date))})]}),(0,t.jsx)(r(),{id:"976264879",children:'.hide.jsx-976264879{display:none;}h1.jsx-976264879{font-size:1.5rem;font-weight:700;color:var(--color-header);font-family:"Recoleta-bold";}.great-title.jsx-976264879{margin-top:2.5rem;font-size:3.125rem;text-align:center;color:var(--color-header);}.details.jsx-976264879 span.jsx-976264879{color:#bdbdbd;margin-right:1rem;}.details.jsx-976264879{font-weight:300;margin-bottom:2px;font-size:11pt;line-height:22pt;-webkit-letter-spacing:0.8px;-moz-letter-spacing:0.8px;-ms-letter-spacing:0.8px;letter-spacing:0.8px;font-family:"Poppins",NotoSansKR-Thin;}.date.jsx-976264879{font-size:15px;}'})]})}},891:function(n,e,s){"use strict";var i=s(2471),r=s(5893);e.Z=function(n){var e=n.children,s=n.meta;return(0,r.jsxs)("div",{children:[(0,r.jsx)(i.Z,{meta:s,project:!0,blog:!0}),(0,r.jsx)("article",{children:e})]})}},5204:function(n,e,s){"use strict";s.r(e),s.d(e,{meta:function(){return l}});var i=s(5893),r=s(891),l={title:"Functional Programming",description:"\ud568\uc218\ud615 \ud504\ub85c\uadf8\ub798\ubc0d",date:"2022-07-25T13:59:00.0Z"},c=function(n){var e=n.children;return(0,i.jsx)(r.Z,{meta:l,children:e})};function t(n){var e=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",em:"em",ol:"ol",li:"li",ul:"ul",pre:"pre",code:"code",span:"span"},n.components);return(0,i.jsxs)("div",{style:{marginTop:"4rem",fontFamily:"Recoleta, NotoSansKR-Thin, MalgunGothic",fontSize:"11pt",lineHeight:"22pt",letterSpacing:".8px"},children:[(0,i.jsx)("br",{}),(0,i.jsx)(e.h1,{children:"Functional Programming"}),(0,i.jsx)(e.p,{children:"\ud568\uc218\ub294 \uc5b4\ub514\uc5d0\uc11c\ub098 \uc2e4\ud589\uac00\ub2a5 \ud558\ub2e4. \uac01 \uc5b8\uc5b4\ub9c8\ub2e4 \ud2b9\uc131\uc774 \uc874\uc7ac\ud558\ub098 \ud568\uc218\ud615 \ud504\ub85c\uadf8\ub798\ubc0d\uc744 \uc9c0\uc6d0\ud558\ub294 \uc5b8\uc5b4\ub294 higher-order function \xb7 closure \xb7 currying \ub4f1\uc758 \uae30\ub2a5\uc744 \ud3ec\ud568\ud558\uace0 \uc788\ub2e4.\n\ud568\uc218\ud615 \ud504\ub85c\uadf8\ub798\ubc0d \uc790\uccb4\uac00 \ub9ac\uc2a4\ud2b8(LISP) \uac19\uc740 \ub370\uc774\ud130\ub97c \uc870\uc791\ud558\ub294 \ubc29\ubc95\uc5d0\uc11c \uc654\ub2e4\uace0 \ud558\ub2c8 \uc5ec\ub7ec \uc790\ub8cc\ud615\uc744 \ub2e4\ub8e8\ub294 \ubc95\uc744 \uc544\ub294\uac83\ub3c4 \ud544\uc694\ud558\ub2e4."}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(e.h1,{children:"Imperative vs Declarative"}),(0,i.jsx)(e.p,{children:"\uac1c\ubc1c\uc790\ub294 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\ub294 \uc2dc\uac04\ubcf4\ub2e4 \uc77d\ub294 \uc2dc\uac04\uc774 \ub354 \uae38\ub2e4\uace0 \ud55c\ub2e4. \uc774\ub97c \ub2e4\uc2dc \ub9d0\ud558\uba74 \ucf54\ub4dc\ub97c \uc77d\ub294 \uc2dc\uac04\uc744 \uc904\uc77c \ud544\uc694\uac00 \uc788\ub2e4\ub294 \uac83\uc774\ub2e4. \uba85\ub839\ud615 \ucf54\ub4dc\ub294 \ubd84\uae30\ucc98\ub9ac \xb7 \uc0c1\ud0dc \xb7 nullable \ub4f1\uc73c\ub85c \uc778\ud574 \uac00\ub3c5\uc131\uc744 \ud574\uce58\uac8c \ub418\uace0 \uc77d\uae30\uc5d0 \ub9ce\uc740 \uc2dc\uac04\uc744 \uc18c\ube44\ud558\uac8c \ub41c\ub2e4.\n\uc774\uc5d0 \ubc18\ud574 \uc120\uc5b8\ud615 \ud504\ub85c\uadf8\ub798\ubc0d\uc740 \ub0b4\ubd80\uc801\uc73c\ub85c \ucf54\ub4dc \uad6c\ud604\uc744 \uc228\uae30\uace0 \uc5f0\uc0b0 \xb7 \uc791\uc5c5\uc744 \ud45c\ud604\ud55c\ub2e4. \uc774\ub97c \ub0b4\ubd80 \uba54\ucee4\ub2c8\uc998\uc758 \ucd94\uc0c1\ud654\ub77c\uace0 \ud55c\ub2e4. \uc774\ub7ec\ud55c \ucd94\uc0c1\ud654\ub97c \uc774\ub8e8\uae30 \uc704\ud574\uc11c\ub294 \ub530\ub77c\uc57c \ud560 \uba87\uac00\uc9c0 \uaddc\uce59\uc774 \uc874\uc7ac\ud55c\ub2e4."}),(0,i.jsx)("hr",{}),(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.em,{children:"\ub108\ubb34 \ub9ce\uc740 \ucd94\uc0c1\ud654\ub294 \uc624\ud788\ub824 \ucf54\ub4dc \uc774\ud574\ub97c \ud574\uce5c\ub2e4."})}),"\n"]}),(0,i.jsx)("br",{}),(0,i.jsx)(e.h1,{children:"Pure"}),(0,i.jsx)(e.p,{children:"\uba3c\uc800 \uc0ac\uc6a9\ud558\ub294 \ucf54\ub4dc\uac00 \uc2e0\ub8b0\uc131\uc774 \ub192\uc544\uc57c \ud55c\ub2e4. \ube44\uc988\ub2c8\uc2a4\ub294 \ud56d\uc0c1 \ubcc0\ud654\ud558\uace0 \uac1c\ubc1c\uc790\ub294 \uc774\ub7ec\ud55c \ubcc0\ud654\uc5d0 \ub300\uc751\ud574\uc57c \ud55c\ub2e4. \uc218\ucc9c \xb7 \uc218\ub9cc\uc904\uc758 \ucf54\ub4dc\uc5d0\uc11c \uc694\uad6c\uc0ac\ud56d\uc5d0 \ub530\ub77c\uc11c \uae30\ub2a5\uc744 \ubcc0\uacbd\ud588\uc744 \ub54c \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\uc744\uac70\ub77c\ub294 \uac74 \ub9d0\ub3c4 \uc548\ub418\ub294 \ubbff\uc74c\uc774\ub2e4.\n\uc774\ub97c \uc608\ubc29\ud558\uae30 \uc704\ud574 TDD \ub4f1\uc758 \ud14c\uc2a4\ud2b8\ub97c \ub3c4\uc785\ud568\uc73c\ub85c\uc368 \uc5b4\ub290\uc815\ub3c4 \uc608\ubc29\uc744 \ud558\uae34\ud558\uc9c0\ub9cc \uadfc\ubcf8\uc801\uc73c\ub85c \uac00\uc7a5 \uc88b\uc740 \ub300\uc751\uc740 \ucf54\ub4dc(\ud568\uc218)\ub97c \uc608\uce21 \xb7 \ucee4\ubc84 \uac00\ub2a5\ud55c \ubc94\uc704\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774\ub2e4.\n\uadf8\ub9ac\uace0 \uc5ec\uae30\uc11c \uc21c\uc218\ud568\uc218\uac00 \ub098\uc628\ub2e4."}),(0,i.jsx)("hr",{}),(0,i.jsx)(e.p,{children:"\uc21c\uc218\ud568\uc218\ub294 \ub3d9\uc77c\ud55c \uc785\ub825\uc774 \uc8fc\uc5b4\uc84c\uc744 \ub54c \ud56d\uc0c1 \ub3d9\uc77c\ud55c \ucd9c\ub825\uc744 \ubc18\ud658\ud558\uace0 \uad00\ucc30\ud560 \uc218 \uc788\ub294 \ubd80\uc791\uc6a9\uc774 \uc5c6\ub294 \ud504\ub85c\uc2dc\uc800\ub2e4."}),(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.em,{children:"\uc6f9\uc740 \ub2e4\uc591\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac\uc640 API\ub97c \ud1b5\ud574 \uc791\ub3d9\ud558\ubbc0\ub85c \uc0ac\uc774\ub4dc \uc774\ud399\ud2b8\uac00 \ubc1c\uc0dd\ud560 \uc218 \ubc16\uc5d0 \uc5c6\ub294 \uad6c\uc870\ub2e4. \ub530\ub77c\uc11c Haskeller \ucc98\ub7fc \uc644\ubcbd\ud55c \uc21c\uc218\ud568\uc218\ub97c \ucd94\uad6c \ud558\uae30\ubcf4\ub2e4 \uc21c\uc218 \xb7 \uc0ac\uc774\ub4dc \uc774\ud399\ud2b8\ub97c \uc77c\uc73c\ud0a4\ub294 \ud568\uc218\ub97c \uad6c\ubd84 \ubc0f \uad00\ub9ac\ub97c \ubaa9\ud45c\ub85c \ud55c\ub2e4."})}),"\n"]}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsxs)(e.h1,{children:["Perspective ",(0,i.jsx)("sup",{children:(0,i.jsx)("a",{href:"#fn2",id:"fnref2",children:" \xb9 "})})]}),(0,i.jsx)("div",{className:"think",children:(0,i.jsx)(e.p,{children:"OOP \uc5d0\uc11c\ub294 \ucea1\uc290\ud654\ub97c \ud1b5\ud574 \ub370\uc774\ud130 \uc811\uadfc\uc744 \uc81c\uc5b4 \ud560 \uc218 \uc788\uc73c\uba70 \uc774\ub97c \ud1b5\ud574 \uc751\uc9d1\ub825\uc744\n\ud0a4\uc6b8 \uc218 \uc788\ub2e4. \uadf8\uc5d0 \ubc18\ud574 \ud568\uc218\ub294 \ub370\uc774\ud130\uc640 \uc5f0\uc0b0\uc744 \ubd84\ub9ac\ud558\ubbc0\ub85c \uc751\uc9d1\ub41c \ucf54\ub4dc\ub97c\n\uc791\uc131\ud558\uae30 \uc704\ud55c \ubc29\ubc95\uc774 \ud544\uc694\ud558\ub2e4."})}),(0,i.jsx)(e.p,{children:"\ub370\uc774\ud130\uc640 \ub370\uc774\ud130\uc5d0 \ub300\ud55c \uc791\uc5c5\uc744 \ubd84\ub9ac\ud558\ub294 \uacfc\uc815\uc5d0\ub294 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8 \uc138\uacc4\uc5d0\uc11c \ud0c0\uc785\uc744 \ud1b5\ud574 \uad6c\ud604\ud560 \uc218 \uc788\ub2e4.\n\ub370\uc774\ud130\ub97c \ud45c\ud604\ud558\ub294 \ud0c0\uc785\uacfc \uc791\uc5c5\uc744 \ud45c\ud604\ud558\ub294 \ubaa8\ub4c8\uc744 \uad6c\uc131\ud55c\ub2e4."}),(0,i.jsx)("div",{className:"custom-blockquote",children:(0,i.jsx)(e.p,{children:'\ubaa8\ub4c8\uc740 \uc798 \uc815\uc758\ub41c \uc778\ud130\ud398\uc774\uc2a4\uc640 \uc228\uaca8\uc9c4 \uad6c\ud604\uc744 \uac00\uc9c4 "\uc791\uc740 \ud504\ub85c\uadf8\ub7a8 \uc870\uac01" \uc774\ub2e4.'})}),(0,i.jsx)("hr",{}),(0,i.jsx)(e.p,{children:"\uc774\ub7ec\ud55c \uad6c\uc131\uc758 \ucd5c\ub300 \uc7a5\uc810\uc740 \ubaa8\ub4c8\uc774 \uac1c\ubcc4\uc801\uc73c\ub85c \uc791\ub3d9\ud558\uae30 \ub54c\ubb38\uc5d0 \ubcf5\uc7a1\uc131 \ucc98\ub9ac\uc5d0 \uc6a9\uc774\ud558\ub2e4\ub294 \uac83\uc774\ub2e4. \ub610\ud55c A\uae30\ub2a5\uacfc B\uae30\ub2a5\uc5d0 \uc758\uc874\uc131\uc5c6\uc774 \uae30\ub2a5 \uad6c\ud604\uc774 \uac00\ub2a5\ud558\ub2e4\ub294 \uc810\ub3c4 \uc788\ub2e4.\n\uc774\ub7ec\ud55c \ubaa8\ub4c8\ud654\ub97c \ubaa9\ud45c\ub85c \ud558\ub294 \uae30\uc220\uc740 \uba87 \uac00\uc9c0 \ud544\uc218\uc694\uc18c\ub97c \uc81c\uacf5\ud574\uc57c \ud55c\ub2e4."}),(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\uc778\ud130\ud398\uc774\uc2a4\uc640 \uad6c\ud604\uc758 \uc88b\uc740 \ubd84\ub9ac\ub97c \uc81c\uacf5\ud558\ub294 \ubaa8\ub4c8 \uad6c\uc870\uac00 \uc788\uc5b4\uc57c \ud55c\ub2e4."}),"\n",(0,i.jsx)(e.li,{children:"\uad50\uccb4\ub41c \ubaa8\ub4c8\uc5d0 \uc758\uc874\ud558\ub294 \ubaa8\ub4c8\uc744 \ubcc0\uacbd\ud558\uac70\ub098 \ub2e4\uc2dc \ucef4\ud30c\uc77c\ud558\uc9c0 \uc54a\uace0 \ud558\ub098\uc758 \ubaa8\ub4c8\uc744 \ub3d9\uc77c\ud55c \uc778\ud130\ud398\uc774\uc2a4\ub97c \uac00\uc9c4 \ub2e4\ub978 \ubaa8\ub4c8\ub85c \uad50\uccb4\ud558\ub294 \ubc29\ubc95\uc774 \uc788\uc5b4\uc57c \ud55c\ub2e4."}),"\n",(0,i.jsx)(e.li,{children:"\ubaa8\ub4c8\uc744 \ud568\uaed8 \uc5f0\uacb0\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc774 \uc788\uc5b4\uc57c \ud55c\ub2e4."}),"\n"]}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(e.h1,{children:"Communication"}),(0,i.jsx)(e.p,{children:"FP\uc5d0 \ub9ce\uc740 \uc7a5\uc810\uc774 \uc874\uc7ac\ud55c\ub2e4\uace0 \ud558\uc5ec\ub3c4 \ub2e4\ub978 \uac1c\ubc1c\uc790\uac00 \uc774\ud574\ud558\uc9c0 \ubabb\ud558\ub294 \ucf54\ub4dc(\ubc29\uc2dd)\ub294 \uacb0\uad6d \ub3c5\uc774\ub41c\ub2e4. OOP \uac19\uc740 \ub2e4\ub978 \ud328\ub7ec\ub2e4\uc784\uacfc\uc758 \uc801\uc808\ud55c \uc870\ud654\uac00 \ud544\uc694\ud558\uba70 \ub7ec\ub2dd\ucee4\ube0c\uac00 \uc801\uc5b4\uc57c \ud55c\ub2e4."}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsxs)(e.h1,{children:["Structure ",(0,i.jsx)("sup",{children:(0,i.jsx)("a",{href:"#fn1",id:"fnref1",children:" \xb2 "})})]}),(0,i.jsx)(e.p,{children:"\ud06c\uace0 \ubcf5\uc7a1\ud55c \uc560\ud50c\ub9ac\ucf00\uc774\uc158(\uc6f9 \uc11c\ube44\uc2a4 \ub4f1)\uc744 \uad6c\uc870\ud654 \ud560\ub54c\uc758 FP\uc640 OOP \ud328\ub7ec\ub2e4\uc784\uc758 \ucc28\uc774\ub294 \uc5c6\uc73c\uba70 \ud558\uc704 \uc6d0\uce59\uc5d0 \uc758\uc874\ud55c\ub2e4."}),(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Modularity : \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub294 \uac1c\ubcc4\uc801\uc774\uace0 \uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud55c \ucef4\ud3ec\ub10c\ud2b8\ub85c \uad6c\uc131\ub418\uc5b4\uc57c \ud55c\ub2e4."}),"\n",(0,i.jsx)(e.li,{children:"Sepration of concerns : \uac01 \ucef4\ud3ec\ub10c\ud2b8\ub294 \ud55c\uac00\uc9c0 \uc77c\ub9cc \ud574\uc57c \ud55c\ub2e4."}),"\n",(0,i.jsx)(e.li,{children:"Layering : \uc0c1\uc704 \uc218\uc900 \ucef4\ud3ec\ub10c\ud2b8\ub294 \ud558\uc704 \uc218\uc900\uc5d0 \uc758\uc874\ud560 \uc218 \uc788\uc9c0\ub9cc \ubc18\ub300\ub294 \ubd88\uac00\ub2a5\ud558\ub2e4."}),"\n",(0,i.jsx)(e.li,{children:"Loose coupling : \ucef4\ud3ec\ub10c\ud2b8\ub294 \uc758\uc874\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc758 \ub0b4\ubd80 \uc138\ubd80 \uc815\ubcf4\ub97c \uc54c \uc218 \uc5c6\ub2e4. \ub530\ub77c\uc11c \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \ub300\ud55c \ubcc0\uacbd\uc0ac\ud56d\uc740 \ud574\ub2f9 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc885\uc18d\ub41c \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc601\ud5a5\uc744 \uc8fc\uc5b4\uc11c\ub294 \uc548\ub41c\ub2e4."}),"\n"]}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(e.h1,{children:"Signature and Types"}),(0,i.jsx)(e.p,{children:"\ud568\uc218\ub294 \ud568\uc218\ud615 \ud504\ub85c\uadf8\ub798\ubc0d\uc758 \ube4c\ub529 \ube14\ub85d\uc774\uba70 \uc885\uc885 \ubb38\uc81c\uc5d0 \uc811\uadfc\ud560\ub54c \uac00\uc7a5 \uba3c\uc800 \ud558\ub294 \uc77c\uc774\ub2e4. \ub530\ub77c\uc11c \ud568\uc218 \uc2dc\uadf8\ub2c8\ucc98\ub97c \uc62c\ubc14\ub974\uac8c \uad6c\uc131\ud558\ub294 \uac83\uc774 \uac00\uc7a5 \uc911\uc694\ud558\ub2e4."}),(0,i.jsx)("hr",{}),(0,i.jsx)(e.p,{children:"\ud568\uc218\uc758 \uc2dc\uadf8\ub2c8\ucc98\ub294 \uc778\ud48b\uacfc \uc544\uc6c3\ud48b\uc758 \ud0c0\uc785\uc744 \uc54c\ub824\uc900\ub2e4. \uc2dc\uadf8\ub2c8\ucc98\ub97c \ud1b5\ud574 \uc5b4\ub290\uc815\ub3c4 \ub3d9\uc791\uc744\n\ucd94\ub860\ud560 \uc218 \uc788\uc73c\uba70 \ud568\uc218\uc758 \uc758\ub3c4\ub97c \ud45c\ud604\ud558\ub294\ub370 \uc88b\uc740 \uc774\ub984\uc744 \uc0ac\uc6a9\ud558\uba74 \uba85\ud655\ud55c API\ub97c \uc791\uc131\ud560\n\uc218 \uc788\ub2e4."}),(0,i.jsx)("div",{className:"blog-post",children:(0,i.jsx)(e.pre,{className:"language-ts",children:(0,i.jsxs)(e.code,{className:"language-ts",children:[(0,i.jsx)(e.span,{className:"token number",children:"1"})," fullname ",(0,i.jsx)(e.span,{className:"token operator",children:":"}),(0,i.jsx)(e.span,{className:"token operator",children:":"})," ",(0,i.jsx)(e.span,{className:"token punctuation",children:"("}),(0,i.jsx)(e.span,{className:"token builtin",children:"string"}),(0,i.jsx)(e.span,{className:"token punctuation",children:","})," ",(0,i.jsx)(e.span,{className:"token builtin",children:"string"}),(0,i.jsx)(e.span,{className:"token punctuation",children:")"})," ",(0,i.jsx)(e.span,{className:"token operator",children:"-"}),(0,i.jsx)(e.span,{className:"token operator",children:">"})," ",(0,i.jsx)(e.span,{className:"token builtin",children:"string"}),"\n"]})})}),(0,i.jsxs)("div",{className:"think",children:[" ",(0,i.jsx)(e.p,{children:"OOP\uc5d0\uc11c\ub294 TDD\uc5d0\uc11c \ud14c\uc2a4\ud2b8 \uba85\uc774\ub098 \uc778\ud130\ud398\uc774\uc2a4 \ub97c \ud1b5\ud574 \uad6c\ud604\ud558\ub358 API\ub97c \ud568\uc218\ud615 \ud504\ub85c\uadf8\ub798\ubc0d\uc5d0\uc11c\ub294\n\ud568\uc218 \uc2dc\uadf8\ub2c8\ucc98\ub85c \ud45c\ud604\ud55c\ub2e4."})]}),(0,i.jsx)("hr",{}),(0,i.jsxs)(e.p,{children:["\ud568\uc218 \uc2dc\uadf8\ub2c8\ucc98\ub97c \ud30c\uc545\ud55c \ub2e4\uc74c \ub370\uc774\ud130 \ud0c0\uc785\uc744 \uc815\uc758\ud574\uc57c \ud55c\ub2e4."," "]}),(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\ub85c\uc9c1\uc740 \ud568\uc218\ub85c \uc778\ucf54\ub529 \ub41c\ub2e4"}),"\n",(0,i.jsx)(e.li,{children:"\ub370\uc774\ud130\ub294 \ud568\uc218\uc758 \uc785\ub825 \ubc0f \ucd9c\ub825\uc73c\ub85c \uc0ac\uc6a9\ub418\ub294 \ub370\uc774\ud130 \uac1d\uccb4\ub85c \ucea1\ucc98\ub41c\ub2e4."}),"\n"]}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("hr",{style:{border:".1px solid whiteSmoke"}}),(0,i.jsx)("div",{style:{height:"15px"}}),(0,i.jsxs)("ol",{children:[(0,i.jsx)("li",{id:"fn2",style:{fontFamily:"Poppins",fontSize:"8px"},children:(0,i.jsxs)(e.p,{children:["Functional Programming, Simplified: (Scala edition) ",(0,i.jsx)("a",{href:"#fnref2"})]})}),(0,i.jsx)("li",{id:"fn1",style:{fontFamily:"Poppins",fontSize:"8px"},children:(0,i.jsxs)(e.p,{children:["Functional Programming in C# ",(0,i.jsx)("a",{href:"#fnref1"})]})})]})]})}e.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(c,Object.assign({},n,{children:(0,i.jsx)(t,n)}))}},9085:function(n,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/09-fp-basic",function(){return s(5204)}])}},function(n){n.O(0,[184,774,888,179],(function(){return e=9085,n(n.s=e);var e}));var e=n.O();_N_E=e}]);