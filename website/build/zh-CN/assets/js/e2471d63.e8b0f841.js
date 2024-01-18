"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6018],{47963:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var o=n(85893),i=n(11151);const s={id:"upgrade-contract",title:"Upgrading the Contract",sidebar_label:"Upgrade a Contract"},a=void 0,r={id:"tutorials/nfts/js/upgrade-contract",title:"Upgrading the Contract",description:"In this tutorial, you'll build off the work you previously did to implement the minting functionality on a skeleton smart contract. You got to the point where NFTs could be minted, however, the wallet had no way of displaying the tokens since your contract didn't implement the method that the wallet was trying to call.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/3.tutorials/nfts/js/2-upgrade.md",sourceDirName:"3.tutorials/nfts/js",slug:"/tutorials/nfts/js/upgrade-contract",permalink:"/zh-CN/tutorials/nfts/js/upgrade-contract",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/js/2-upgrade.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\u5e741\u670811\u65e5",sidebarPosition:2,frontMatter:{id:"upgrade-contract",title:"Upgrading the Contract",sidebar_label:"Upgrade a Contract"},sidebar:"contracts",previous:{title:"Minting",permalink:"/zh-CN/tutorials/nfts/js/minting"},next:{title:"Enumeration",permalink:"/zh-CN/tutorials/nfts/js/enumeration"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Upgrading contracts overview",id:"upgrading-contracts",level:2},{value:"Modifications to our contract",id:"modifications-to-contract",level:2},{value:"Redeploying the contract",id:"redeploying-contract",level:2},{value:"Viewing NFTs in the wallet",id:"viewing-nfts-in-wallet",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["In this tutorial, you'll build off the work you previously did to implement the ",(0,o.jsx)(t.a,{href:"/tutorials/nfts/js/minting",children:"minting functionality"})," on a skeleton smart contract. You got to the point where NFTs could be minted, however, the wallet had no way of displaying the tokens since your contract didn't implement the method that the wallet was trying to call."]}),"\n",(0,o.jsx)(t.admonition,{type:"caution",children:(0,o.jsxs)(t.p,{children:["The JS-SDK is currently in ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.a,{href:"https://github.com/near/near-sdk-js/releases/",children:(0,o.jsx)(t.code,{children:"Alpha"})})}),"."]})}),"\n",(0,o.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(t.p,{children:["Today you'll learn about deploying patch fixes to smart contracts and you'll use that knowledge to implement the ",(0,o.jsx)(t.code,{children:"nft_tokens_for_owner"})," function on the contract you deployed in the previous tutorial."]}),"\n",(0,o.jsx)(t.h2,{id:"upgrading-contracts",children:"Upgrading contracts overview"}),"\n",(0,o.jsx)(t.p,{children:"Upgrading contracts, when done right, can be an immensely powerful tool. If done wrong, it can lead to a lot of headaches. It's important to distinguish between the code and state of a smart contract. When a contract is deployed on top of an existing contract, the only thing that changes is the code. The state will remain the same and that's where a lot of developer's issues come to fruition."}),"\n",(0,o.jsx)(t.p,{children:"The NEAR Runtime will read the serialized state from disk and it will attempt to load it using the current contract code. When your code changes, it might not be able to figure out how to do this."}),"\n",(0,o.jsxs)(t.p,{children:["You need to strategically upgrade your contracts and make sure that the runtime will be able to read your current state with the new contract code. For more information about upgrading contracts and some best practices, see the NEAR SDK's ",(0,o.jsx)(t.a,{href:"/sdk/rust/building/prototyping",children:"upgrading contracts"})," write-up."]}),"\n",(0,o.jsx)(t.h2,{id:"modifications-to-contract",children:"Modifications to our contract"}),"\n",(0,o.jsxs)(t.p,{children:["In order for the wallet to properly display your NFTs, you need to implement the ",(0,o.jsx)(t.code,{children:"nft_tokens_for_owner"})," method. This will allow anyone to query for a paginated list of NFTs owned by a given account ID."]}),"\n",(0,o.jsxs)(t.p,{children:["To accomplish this, let's break it down into some smaller subtasks. First, you need to get access to a list of all token IDs owned by a user. This information can be found in the ",(0,o.jsx)(t.code,{children:"tokensPerOwner"})," data structure. Now that you have a set of token IDs, you need to convert them into ",(0,o.jsx)(t.code,{children:"JsonToken"})," objects as that's what you'll be returning from the function."]}),"\n",(0,o.jsxs)(t.p,{children:["Luckily, you wrote a function ",(0,o.jsx)(t.code,{children:"nft_token"})," which takes a token ID and returns a ",(0,o.jsx)(t.code,{children:"JsonToken"})," in the ",(0,o.jsx)(t.code,{children:"nft_core.ts"})," file. As you can guess, in order to get a list of ",(0,o.jsx)(t.code,{children:"JsonToken"})," objects, you would need to iterate through the token IDs owned by the user and then convert each token ID into a ",(0,o.jsx)(t.code,{children:"JsonToken"})," and store that in a list."]}),"\n",(0,o.jsxs)(t.p,{children:["As for the pagination, you can use some basic JavaScript to get that done. Let's move over to the ",(0,o.jsx)(t.code,{children:"enumeration.ts"})," file and implement that logic:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial-js/blob/2.minting/src/nft-contract/enumeration.ts#L47-L82\n"})}),"\n",(0,o.jsx)(t.h2,{id:"redeploying-contract",children:"Redeploying the contract"}),"\n",(0,o.jsxs)(t.p,{children:["Now that you've implemented the necessary logic for ",(0,o.jsx)(t.code,{children:"nft_tokens_for_owner"}),", it's time to build and re-deploy the contract to your account. Using the build script, deploy the contract as you did in the previous tutorial:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"yarn build && near deploy --wasmFile build/nft.wasm --accountId $NFT_CONTRACT_ID\n"})}),"\n",(0,o.jsxs)(t.p,{children:["This should output a warning saying that the account has a deployed contract and will ask if you'd like to proceed. Simply type ",(0,o.jsx)(t.code,{children:"y"})," and hit enter."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"This account already has a deployed contract [ AKJK7sCysrWrFZ976YVBnm6yzmJuKLzdAyssfzK9yLsa ]. Do you want to proceed? (y/n)\n"})}),"\n",(0,o.jsx)(t.p,{children:"Once the contract has been redeployed, let's test and see if the state migrated correctly by running a simple view function:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"near view $NFT_CONTRACT_ID nft_metadata\n"})}),"\n",(0,o.jsx)(t.p,{children:"This should return an output similar to the following:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"{ spec: 'nft-1.0.0', name: 'NFT Tutorial Contract', symbol: 'GOTEAM' }\n"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Go team!"})," At this point, you can now test and see if the new function you wrote works correctly. Let's query for the list of tokens that you own:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'near view $NFT_CONTRACT_ID nft_tokens_for_owner \'{"account_id": "\'$NFT_CONTRACT_ID\'", "limit": 5}\'\n'})}),"\n",(0,o.jsxs)(s,{children:[(0,o.jsx)("summary",{children:"Example response: "}),(0,o.jsx)("p",{children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"[\n  {\n    token_id: 'token-1',\n    owner_id: 'goteam.examples.testnet',\n    metadata: {\n      title: 'My Non Fungible Team Token',\n      description: 'The Team Most Certainly Goes :)',\n      media: 'https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif'\n    }\n  }\n]\n"})})})]}),"\n",(0,o.jsx)(t.h2,{id:"viewing-nfts-in-wallet",children:"Viewing NFTs in the wallet"}),"\n",(0,o.jsxs)(t.p,{children:["Now that your contract implements the necessary functions that the wallet uses to display NFTs, you should be able to see your tokens on display in the ",(0,o.jsx)(t.a,{href:"https://testnet.mynearwallet.com//?tab=collectibles",children:"collectibles tab"}),"."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"filled-nft-in-wallet",src:n(95044).Z+"",width:"635",height:"432"})}),"\n",(0,o.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsxs)(t.p,{children:["In this tutorial, you learned about the basics of ",(0,o.jsx)(t.a,{href:"#upgrading-contracts",children:"upgrading contracts"}),". Then, you implemented the necessary ",(0,o.jsx)(t.a,{href:"#modifications-to-contract",children:"modifications to your smart contract"})," and ",(0,o.jsx)(t.a,{href:"#redeploying-contract",children:"redeployed it"}),". Finally you navigated to the wallet collectibles tab and ",(0,o.jsx)(t.a,{href:"#viewing-nfts-in-wallet",children:"viewed your NFTs"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["In the ",(0,o.jsx)(t.a,{href:"/tutorials/nfts/js/enumeration",children:"next tutorial"}),", you'll implement the remaining functions needed to complete the ",(0,o.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration",children:"enumeration"})," standard."]}),"\n",(0,o.jsxs)(t.admonition,{title:"Versioning for this article",type:"note",children:[(0,o.jsx)(t.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["near-cli: ",(0,o.jsx)(t.code,{children:"3.0.0"})]}),"\n",(0,o.jsxs)(t.li,{children:["NFT standard: ",(0,o.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", version ",(0,o.jsx)(t.code,{children:"1.0.0"})]}),"\n"]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},95044:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/filled-nft-in-wallet-e661209d2dbff2bb2551db943ecfc43b.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var o=n(67294);const i={},s=o.createContext(i);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);