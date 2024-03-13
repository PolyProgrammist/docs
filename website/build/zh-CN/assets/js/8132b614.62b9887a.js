"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5266],{88585:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=s(85893),a=s(11151);const r={id:"relayers",title:"Relayers"},o=void 0,i={id:"concepts/abstraction/relayers",title:"Relayers",description:"A relayer is a simple web service that receives transactions from NEAR users, and relays them to the network while attaching tokens to cover their GAS expenses. In this document we present a high-level overview on how relayers work. Please check the build a relayer page if you want to learn how to build your own relayer.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/1.concepts/abstraction/relayers.md",sourceDirName:"1.concepts/abstraction",slug:"/concepts/abstraction/relayers",permalink:"/zh-CN/concepts/abstraction/relayers",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/abstraction/relayers.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665,formattedLastUpdatedAt:"2024\u5e742\u670828\u65e5",frontMatter:{id:"relayers",title:"Relayers"},sidebar:"concepts",previous:{title:"Meta Transactions",permalink:"/zh-CN/concepts/abstraction/meta-transactions"},next:{title:"What are Chain Signatures?",permalink:"/zh-CN/concepts/abstraction/chain-signatures"}},c={},l=[{value:"How it works",id:"how-it-works",level:2},{value:"Why using a Relayer?",id:"why-using-a-relayer",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.a)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["A relayer is a simple web service that receives transactions from NEAR users, and relays them to the network while attaching tokens to cover their GAS expenses. In this document we present a high-level overview on how relayers work. Please check the ",(0,n.jsx)(t.a,{href:"/zh-CN/develop/relayers/build-relayer",children:"build a relayer"})," page if you want to learn how to build your own relayer."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,n.jsxs)(t.p,{children:["Relayers are a natural consequence of ",(0,n.jsx)(t.a,{href:"https://github.com/near/NEPs/blob/master/neps/nep-0366.md",children:"NEP-366: Meta Transactions"}),", a special type of transaction which can be best understood as an intent."]}),"\n",(0,n.jsxs)(t.p,{children:['The user expresses: "I want to do a specific action on chain" and signs this intent ',(0,n.jsx)(t.strong,{children:"off-chain"}),", but does not sends it to the network. Instead, they send the intent to a ",(0,n.jsx)(t.code,{children:"Relayer"}),", which wraps the message into an actual transaction, attaches the necessary funds, and sends it to the network."]}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:" Technical Details "}),(0,n.jsxs)(t.p,{children:["Technically, the end user (client) creates a ",(0,n.jsx)(t.code,{children:"SignedDelegateAction"})," that contains the data necessary to construct a ",(0,n.jsx)(t.code,{children:"Transaction"}),", signs the ",(0,n.jsx)(t.code,{children:"SignedDelegateAction"})," using their key, and send it to  the relayer service."]}),(0,n.jsxs)(t.p,{children:["When the request is received, the relayer uses its own key to sign a ",(0,n.jsx)(t.code,{children:"Transaction"})," using the fields in the ",(0,n.jsx)(t.code,{children:"SignedDelegateAction"})," as input to create a ",(0,n.jsx)(t.code,{children:"SignedTransaction"}),"."]}),(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"SignedTransaction"})," is then sent to the network via RPC call, and the result is sent back to the client. The ",(0,n.jsx)(t.code,{children:"Transaction"})," is executed in such a way that the relayer pays the GAS fees, but all actions are executed as if the user had sent the transaction."]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"why-using-a-relayer",children:"Why using a Relayer?"}),"\n",(0,n.jsx)(t.p,{children:"There are multiple reasons to use a relayer:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Your users are new to NEAR and don't have any gas to cover transactions"}),"\n",(0,n.jsx)(t.li,{children:"Your users have an account on NEAR, but only have a Fungible Token Balance. They can now use the FT to pay for gas"}),"\n",(0,n.jsx)(t.li,{children:"As an enterprise or a large startup you want to seamlessly onboard your existing users onto NEAR without needing them to worry about gas costs and seed phrases"}),"\n",(0,n.jsx)(t.li,{children:"As an enterprise or large startup you have a user base that can generate large spikes of user activity that would congest the network. In this case, the relayer acts as a queue for low urgency transactions"}),"\n",(0,n.jsx)(t.li,{children:"In exchange for covering the gas fee costs, relayer operators can limit where users spend their assets while allowing users to have custody and ownership of their assets"}),"\n",(0,n.jsx)(t.li,{children:"Capital Efficiency: Without relayer if your business has 1M users they would have to be allocated 0.25 NEAR to cover their gas costs totalling 250k NEAR. However, only ~10% of the users would actually use the full allowance and a large amount of the 250k NEAR is just sitting there unused. So using the relayer, you can allocate 50k NEAR as a global pool of capital for your users, which can refilled on an as needed basis3."}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>o});var n=s(67294);const a={},r=n.createContext(a);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);