"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5001],{14950:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var r=t(85893),a=t(11151),i=t(74866),s=t(85162),l=t(77229);const c={id:"chain-signatures",title:"Chain Signatures"},o=void 0,u={id:"abstraction/chain-signatures",title:"Chain Signatures",description:"Chain signatures enable NEAR accounts, including smart contracts, to sign and execute transactions across many blockchain protocols.",source:"@site/../docs/8.abstraction/chain-signatures.md",sourceDirName:"8.abstraction",slug:"/abstraction/chain-signatures",permalink:"/abstraction/chain-signatures",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/8.abstraction/chain-signatures.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1709977504,formattedLastUpdatedAt:"Mar 9, 2024",frontMatter:{id:"chain-signatures",title:"Chain Signatures"},sidebar:"build",previous:{title:"FastAuth (Email Login)",permalink:"/tools/fastauth-sdk"},next:{title:"Wallet Chain Key Rules",permalink:"/abstraction/chain-signatures/wallet"}},h={},d=[{value:"Create a Chain Signature",id:"create-a-chain-signature",level:2},{value:"1. Deriving the Foreign Address",id:"1-deriving-the-foreign-address",level:2},{value:"2. Creating the Transaction",id:"2-creating-the-transaction",level:2},{value:"3. Requesting the Signature",id:"3-requesting-the-signature",level:2},{value:"4. Reconstructing the Signature",id:"4-reconstructing-the-signature",level:2},{value:"5. Relaying the Signature",id:"5-relaying-the-signature",level:2}];function g(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Details:c}=n;return c||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Chain signatures enable NEAR accounts, including smart contracts, to sign and execute transactions across many blockchain protocols."}),"\n",(0,r.jsx)(n.p,{children:"This unlocks the next level of blockchain interoperability by giving ownership of diverse assets, cross-chain accounts, and data to a single NEAR account."}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"This guide will take you through a step by step process for creating a Chain Signature."}),(0,r.jsxs)(n.p,{children:["\u2b50\ufe0f For a deep dive into the concepts of Chain Signatures see ",(0,r.jsx)(n.a,{href:"/concepts/abstraction/chain-signatures",children:"What are Chain Signatures?"})]}),(0,r.jsx)(n.p,{children:"\u2b50\ufe0f For complete examples of a NEAR account performing Eth transactions:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/near-examples/near-multichain",children:"web-app example"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://test.near.social/bot.testnet/widget/chainsig-sign-eth-tx",children:"component example"})}),"\n"]})]}),"\n",(0,r.jsx)(n.h2,{id:"create-a-chain-signature",children:"Create a Chain Signature"}),"\n",(0,r.jsx)(n.p,{children:"There are five steps to create a Chain Signature:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#1-deriving-the-foreign-address",children:"Deriving the Foreign Address"})," - Construct the address that will be controlled on the target blockchain"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#2-creating-the-transaction",children:"Creating a Transaction"})," - Create the transaction or message to be signed"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#3-requesting-the-signature",children:"Requesting a Signature"})," - Call the NEAR ",(0,r.jsx)(n.code,{children:"multichain"})," contract and requesting to sign the transaction"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#4-reconstructing-the-signature",children:"Reconstructing the Signature"})," - Reconstruct the signature from the MPC service's response"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#5-relaying-the-signature",children:"Relaying the Signed Transaction"})," - Send the signed transaction to the destination chain for execution"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"chain-signatures",src:t(81530).Z+"",width:"2172",height:"642"}),"\n",(0,r.jsx)(n.em,{children:"Diagram of a chain signature in NEAR"})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"1-deriving-the-foreign-address",children:"1. Deriving the Foreign Address"}),"\n",(0,r.jsxs)(n.p,{children:["Chain Signatures use ",(0,r.jsx)(n.a,{href:"/concepts/abstraction/chain-signatures#one-account-multiple-chains",children:(0,r.jsx)(n.code,{children:"derivation paths"})})," to represent accounts on the target blockchain. The external address can be deterministically derived from:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The NEAR address ",(0,r.jsxs)(n.em,{children:["(e.g., ",(0,r.jsx)(n.code,{children:"example.near"}),", ",(0,r.jsx)(n.code,{children:"example.testnet"}),", etc.)"]})]}),"\n",(0,r.jsxs)(n.li,{children:["A derivation path ",(0,r.jsxs)(n.em,{children:["(a string such as ",(0,r.jsx)(n.code,{children:"ethereum-1"}),", ",(0,r.jsx)(n.code,{children:"ethereum-2"}),", etc.)"]})]}),"\n",(0,r.jsx)(n.li,{children:"The MPC service's public key"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"We recommend using this example code snippet to derive the address, as it's a complex process that involves hashing and encoding:"}),"\n",(0,r.jsxs)(i.Z,{groupId:"code-tabs",children:[(0,r.jsx)(s.Z,{value:"\u039e Ethereum",children:(0,r.jsx)(l.Ey,{language:"js",url:"https://github.com/near-examples/near-multichain/blob/main/src/index.js",start:"24",end:"28"})}),(0,r.jsx)(s.Z,{value:"\u20bf Bitcoin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'console.log("Coming soon...")\n'})})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.p,{children:"The same NEAR account and path will always produce the same address on the target blockchain."}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"example.near"})," + ",(0,r.jsx)(n.code,{children:"ethereum-1"})," = ",(0,r.jsx)(n.code,{children:"0x1b48b83a308ea4beb845db088180dc3389f8aa3b"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"example.near"})," + ",(0,r.jsx)(n.code,{children:"ethereum-2"})," = ",(0,r.jsx)(n.code,{children:"0x99c5d3025dc736541f2d97c3ef3c90de4d221315"})]}),"\n"]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"2-creating-the-transaction",children:"2. Creating the Transaction"}),"\n",(0,r.jsx)(n.p,{children:"Constructing the transaction to be signed (transaction, message, data, etc.) varies depending on the target blockchain, but generally it's the hash of the message or transaction to be signed."}),"\n",(0,r.jsxs)(i.Z,{groupId:"code-tabs",children:[(0,r.jsx)(s.Z,{value:"\u039e Ethereum",children:(0,r.jsx)(l.Ey,{language:"js",url:"https://github.com/near-examples/near-multichain/blob/main/src/ethereum.js",start:"24",end:"46"})}),(0,r.jsx)(s.Z,{value:"\u20bf Bitcoin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'console.log("Coming soon...")\n'})})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"3-requesting-the-signature",children:"3. Requesting the Signature"}),"\n",(0,r.jsxs)(n.p,{children:["Once the transaction is created and ready to be signed, a signature request is made by calling ",(0,r.jsx)(n.code,{children:"sign"})," on the ",(0,r.jsx)(n.a,{href:"https://github.com/near/mpc-recovery/blob/develop/contract/src/lib.rs#L298",children:"MPC smart contract"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The method requires two parameters:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"transaction"})," to be signed for the target blockchain"]}),"\n",(0,r.jsxs)(n.li,{children:["The derivation ",(0,r.jsx)(n.code,{children:"path"})," for the account we want to use to sign the transaction"]}),"\n"]}),"\n",(0,r.jsxs)(i.Z,{groupId:"code-tabs",children:[(0,r.jsx)(s.Z,{value:"\u039e Ethereum",children:(0,r.jsx)(l.Ey,{language:"js",url:"https://github.com/near-examples/near-multichain/blob/main/src/index.js",start:"60",end:"64"})}),(0,r.jsx)(s.Z,{value:"\u20bf Bitcoin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'console.log("Coming soon...")\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["The contract will take some time to respond, as the ",(0,r.jsx)(n.code,{children:"sign"})," method starts recursively calling itself waiting for the ",(0,r.jsx)(n.strong,{children:"MPC service"})," to sign the transaction."]}),"\n",(0,r.jsxs)(c,{children:[(0,r.jsx)("summary",{children:" A Contract Recursively Calling Itself? "}),(0,r.jsx)(n.p,{children:"NEAR smart contracts are unable to halt execution and await the completion of a process. To solve this, one can make the contract call itself again and again checking on each iteration to see if the result is ready."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," Each call will take one block which equates to ~1 second of waiting. After some time the contract will either return a result that an external party provided or return an error running out of GAS waiting."]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"4-reconstructing-the-signature",children:"4. Reconstructing the Signature"}),"\n",(0,r.jsx)(n.p,{children:"The MPC contract will not return the signature of the transaction itself, but the elements needed to reconstruct the signature."}),"\n",(0,r.jsxs)(i.Z,{groupId:"code-tabs",children:[(0,r.jsx)(s.Z,{value:"\u039e Ethereum",children:(0,r.jsx)(l.Ey,{language:"js",url:"https://github.com/near-examples/near-multichain/blob/main/src/ethereum.js",start:"48",end:"60"})}),(0,r.jsx)(s.Z,{value:"\u20bf Bitcoin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'console.log("Coming soon...")\n'})})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"5-relaying-the-signature",children:"5. Relaying the Signature"}),"\n",(0,r.jsx)(n.p,{children:"Once we have reconstructed the signature, we can relay it to the corresponding network. This will once again vary depending on the target blockchain."}),"\n",(0,r.jsxs)(i.Z,{groupId:"code-tabs",children:[(0,r.jsx)(s.Z,{value:"\u039e Ethereum",children:(0,r.jsx)(l.Ey,{fname:"index.js",language:"js",url:"https://github.com/near-examples/near-multichain/blob/main/src/ethereum.js",start:"63",end:"67"})}),(0,r.jsx)(s.Z,{value:"\u20bf Bitcoin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'console.log("Coming soon...")\n'})})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:["\u2b50\ufe0f For a deep dive into the concepts of Chain Signatures see ",(0,r.jsx)(n.a,{href:"/concepts/abstraction/chain-signatures",children:"What are Chain Signatures?"})]}),(0,r.jsx)(n.p,{children:"\u2b50\ufe0f For complete examples of a NEAR account performing Eth transactions:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/near-examples/near-multichain",children:"web-app example"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://test.near.social/bot.testnet/widget/chainsig-sign-eth-tx",children:"component example"})}),"\n"]})]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var i=t(85893);function s(e){var n=e.children,t=e.hidden,s=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(67294),a=t(36905),i=t(12466),s=t(16550),l=t(20469),c=t(91980),o=t(67392),u=t(50012);function h(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function d(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return h(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,o.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function g(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,i=(0,s.k6)(),l=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,c._X)(l),(0,r.useCallback)((function(e){if(l){var n=new URLSearchParams(i.location.search);n.set(l,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[l,i])]}function m(e){var n,t,a,i,s=e.defaultValue,c=e.queryString,o=void 0!==c&&c,h=e.groupId,m=d(e),x=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:m})})),j=x[0],f=x[1],b=p({queryString:o,groupId:h}),v=b[0],y=b[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),t=(0,u.Nk)(n),a=t[0],i=t[1],[a,(0,r.useCallback)((function(e){n&&i.set(e)}),[n,i])]),C=w[0],k=w[1],E=function(){var e=null!=v?v:C;return g({value:e,tabValues:m})?e:null}();return(0,l.Z)((function(){E&&f(E)}),[E]),{selectedValue:j,selectValue:(0,r.useCallback)((function(e){if(!g({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);f(e),y(e),k(e)}),[y,k,m]),tabValues:m}}var x=t(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(85893);function b(e){var n=e.className,t=e.block,r=e.selectedValue,s=e.selectValue,l=e.tabValues,c=[],o=(0,i.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=c.indexOf(n),a=l[t].value;a!==r&&(o(n),s(a))},h=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;t=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var i,s=c.indexOf(e.currentTarget)-1;t=null!=(i=c[s])?i:c[c.length-1]}null==(n=t)||n.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:l.map((function(e){var n=e.value,t=e.label,i=e.attributes;return(0,f.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return c.push(e)},onKeyDown:h,onClick:u},i,{className:(0,a.Z)("tabs__item",j.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function v(e){var n=e.lazy,t=e.children,a=e.selectedValue,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var s=i.find((function(e){return e.props.value===a}));return s?(0,r.cloneElement)(s,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function y(e){var n=m(e);return(0,f.jsxs)("div",{className:(0,a.Z)("tabs-container",j.tabList),children:[(0,f.jsx)(b,Object.assign({},e,n)),(0,f.jsx)(v,Object.assign({},e,n))]})}function w(e){var n=(0,x.Z)();return(0,f.jsx)(y,Object.assign({},e,{children:h(e.children)}),String(n))}},77229:(e,n,t)=>{t.d(n,{Ey:()=>u,O2:()=>c,SQ:()=>o});t(67294);var r=t(74866),a=t(85162),i=t(95665),s=t.n(i),l=t(85893);function c(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,l.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,l.jsx)(a.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function o(e){var n=e.children,t=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var t=e.props,r=(t.children,t.url),a=t.start,i=t.end,s=t.fname;if(e.type===u)return u({url:r,start:a,end:i,language:n,fname:s});return e}(e,t)})),1==n.length?(0,l.jsx)(a.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,l.jsx)(r.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,l.jsx)(a.Z,{value:n,label:e.props.fname,children:e})}))})}function u(e){var n=e.url,t=e.start,r=e.end,a=e.language,i=e.fname,c=n+"#";return t&&r&&(c+="L"+t+"-L"+r+"#"),(0,l.jsx)(s(),{language:a,fname:i,children:c})}},81530:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/chain-signatures-overview-056d48fe7d63e04e90aed33826544327.png"}}]);