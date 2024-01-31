"use strict";(self.webpackChunkhabari_docs=self.webpackChunkhabari_docs||[]).push([[811],{3182:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>d,metadata:()=>h,toc:()=>b});var n=t(5893),l=t(1151),s=t(3615),o=t(6775),i=t(8830);const r=[{title:"Query",children:[{key:"currency_id",dataType:"String",description:"It only takes the value 'NGN'. (Please note that you can't get wallet balance for Dollar transactions)",required:!0}]}],c=[{status:"200:OK",responseMsg:"Success",pill:i.O.greenColor,code:'{\n            "status": 200,\n            "success": true,\n            "message": "Success",\n            "data": {\n                "balance": "2367013",\n                "currency_id": "NGN",\n                "merchant_id": "SBN1EBZEQ8"\n            }\n}'},{status:"401:Unathorized",responseMsg:"No Authorization",pill:i.O.orangeColor,code:'{\n            "success": false,\n            "message": "",\n            "data": {}\n}'},{status:"403:Forbidden",responseMsg:"Invalid/Wrong API Keys",pill:i.O.orangeColor,code:'{\n            "success": false,\n            "message": "Merchant authentication failed",\n            "data": {}\n}'}],d={sidebar_position:2},u="Wallet Balance",h={id:"Transfer-API/wallet-balance",title:"Wallet Balance",description:"This endpoint allows you get your Squad Wallet Balance. Please be informed that the wallet balance is in KOBO. (Please note that you can't get wallet balance for Dollar transactions).",source:"@site/docs/Transfer-API/wallet-balance.mdx",sourceDirName:"Transfer-API",slug:"/Transfer-API/wallet-balance",permalink:"/Transfer-API/wallet-balance",draft:!1,unlisted:!1,editUrl:"https://github.com/HabariPay/habaripay.github.io/tree/main/docs/Transfer-API/wallet-balance.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Transfer API",permalink:"/Transfer-API/transfer-apis"},next:{title:"Getting Started",permalink:"/Squad-POS/getting-started"}},p={},b=[{value:"This endpoint allows you get your Squad Wallet Balance. Please be informed that the wallet balance is in KOBO. (Please note that you can&#39;t get wallet balance for Dollar transactions).",id:"this-endpoint-allows-you-get-your-squad-wallet-balance-please-be-informed-that-the-wallet-balance-is-in-kobo-please-note-that-you-cant-get-wallet-balance-for-dollar-transactions",level:5}];function f(e){const a={admonition:"admonition",h1:"h1",h5:"h5",p:"p",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"wallet-balance",children:"Wallet Balance"}),"\n",(0,n.jsx)(a.h5,{id:"this-endpoint-allows-you-get-your-squad-wallet-balance-please-be-informed-that-the-wallet-balance-is-in-kobo-please-note-that-you-cant-get-wallet-balance-for-dollar-transactions",children:"This endpoint allows you get your Squad Wallet Balance. Please be informed that the wallet balance is in KOBO. (Please note that you can't get wallet balance for Dollar transactions)."}),"\n",(0,n.jsx)(a.admonition,{title:"Authorization",type:"caution",children:(0,n.jsx)(a.p,{children:"Any request made without the authorization key will fail with a 401 (Service Not Authorized) response code."})}),"\n",(0,n.jsx)(a.admonition,{type:"info",children:(0,n.jsx)(a.p,{children:"Authorization would be done via Headers using Keys gotten from your dashboard."})}),"\n",(0,n.jsx)(s.Z,{items:r,parameters:!0,endpoint:"https://sandbox-api-d.squadco.com/merchant/balance",method:"GET",header:"This endpoint allows you get your Squad Wallet Balance. Amount is in KOBO"}),"\n",(0,n.jsx)(o.C,{items:c})]})}function m(e={}){const{wrapper:a}={...(0,l.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}}}]);