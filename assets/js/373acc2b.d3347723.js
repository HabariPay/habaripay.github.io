"use strict";(self.webpackChunkhabari_docs=self.webpackChunkhabari_docs||[]).push([[872],{7064:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var a=t(5893),s=t(1151),r=t(3615),i=t(6775),o=t(2477);const c={sidebar_position:4},d="Verify Transaction",u={id:"Payments/verify-transaction",title:"Verify Transaction",description:"This is an endpoint that allows you to query the status of a particular transaction using the unique transaction reference attached to the transaction.",source:"@site/docs/Payments/verify-transaction.mdx",sourceDirName:"Payments",slug:"/Payments/verify-transaction",permalink:"/Payments/verify-transaction",draft:!1,unlisted:!1,editUrl:"https://github.com/HabariPay/habaripay.github.io/tree/main/docs/Payments/verify-transaction.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Squad Payment Modal",permalink:"/Payments/squad-payment-modal"},next:{title:"Squad Woo Commerce Plugin",permalink:"/Payments/squad-woo-squad-plugin"}},l={},h=[{value:"RESPONSE",id:"response",level:4},{value:"Response Status Code",id:"response-status-code",level:4},{value:"Status Code 200",id:"status-code-200",level:4},{value:"Status Code 400",id:"status-code-400",level:4},{value:"Response Data Object",id:"response-data-object",level:4},{value:"Example:",id:"example",level:4},{value:"Go Live",id:"go-live",level:4}];function p(e){const n={a:"a",admonition:"admonition",h1:"h1",h4:"h4",p:"p",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"verify-transaction",children:"Verify Transaction"}),"\n",(0,a.jsx)(n.p,{children:"This is an endpoint that allows you to query the status of a particular transaction using the unique transaction reference attached to the transaction."}),"\n",(0,a.jsx)(n.h4,{id:"response",children:"RESPONSE"}),"\n",(0,a.jsx)(n.p,{children:"The API responses returns a status code and a data object"}),"\n",(0,a.jsx)(n.h4,{id:"response-status-code",children:"Response Status Code"}),"\n",(0,a.jsx)(n.p,{children:"The response when this endpoint is queried returns a status code of 200 0r 400."}),"\n",(0,a.jsx)(n.h4,{id:"status-code-200",children:"Status Code 200"}),"\n",(0,a.jsx)(n.p,{children:"A status code of 200 is returned for a valid transaction ref."}),"\n",(0,a.jsx)(n.h4,{id:"status-code-400",children:"Status Code 400"}),"\n",(0,a.jsx)(n.p,{children:"A status code of 400 is returned for an invalid transaction ref"}),"\n",(0,a.jsx)(n.h4,{id:"response-data-object",children:"Response Data Object"}),"\n",(0,a.jsx)(n.p,{children:"The data object returned in the response is null when the status code is 400 and populated when the status code is 200."}),"\n",(0,a.jsx)(n.p,{children:"The data object contains a parameter known as the transaction_status which differentiates the transaction type."}),"\n",(0,a.jsx)(n.p,{children:"Transaction status can either be Success, Failed, Abandoned or Pending"}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"Authorization Any request made without the authorization key (secret key) will fail with a 401 (Unauthorized) response code."})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"The authorization key is sent via the request header as Bearer Token Authorization"})}),"\n",(0,a.jsx)(n.h4,{id:"example",children:"Example:"}),"\n",(0,a.jsx)(n.p,{children:"Authorization: Bearer sandbox_sk_94f2b798466408ef4d19e848ee1a4d1a3e93f104046f"}),"\n",(0,a.jsx)(r.Z,{items:o.nQ,parameters:!0,endpoint:"https://sandbox-api-d.squadco.com/transaction/verify/{{transaction_ref}}",method:"GET",header:"This verifies a transaction",summary:"To verify the validity of a transaction, kindly query the endpoint above by replacing {{transaction_ref}} with the unique transaction_ref of the transaction you want to verify"}),"\n",(0,a.jsx)(i.C,{items:o.nN}),"\n",(0,a.jsx)(n.h4,{id:"go-live",children:"Go Live"}),"\n",(0,a.jsxs)(n.p,{children:["If you are using the verify transaction endpoint, kindly change the base URL to ",(0,a.jsx)(n.a,{href:"https://api-d.squadco.com",children:"https://api-d.squadco.com"})]})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},2477:(e,n,t)=>{t.d(n,{D5:()=>i,K_:()=>r,nN:()=>d,nQ:()=>c,rQ:()=>s,yJ:()=>o});var a=t(8830);const s=[{title:"Header",children:[{key:"Authorization",dataType:"String",description:"API keys (Secret Key) that authorize your transactions and gotten from your squad dashboard",required:!0}]},{title:"Body",children:[{key:"email",dataType:"String",description:"Customer's email address.",required:!0},{key:"amount",dataType:"String",description:"The amount you are debiting customer (expressed in the lowest currency value - kobo& cent). 10000 = 100NGN for Naira Transactions",required:!0},{key:"initiate_type",dataType:"String",description:"This states the method by which the transaction is initiated. At the moment, this can only take the value 'inline'.",required:!0},{key:"currency",dataType:"String",description:"The currency you want the amount to be charged in. Allowed value is either NGN or USD.",required:!0},{key:"transaction_ref",dataType:"String",description:"This states the method by which the transaction is initiated. At the moment, this can only take the value 'inline'.",required:!0},{key:"initiate_type",dataType:"String",description:"An alphanumeric string that uniquely identifies a transaction",required:!1},{key:"customer_name",dataType:"String",description:"Name of Customer carrying out the transaction",required:!1},{key:"callback_url",dataType:"String",description:"Sample: http://squadco.com",required:!1},{key:"payment_channels",dataType:"Array",description:"An array of payment channels to control what channels you want to make available for the user to make a payment with. Available channels include; ['card', 'bank' , 'ussd','transfer']",required:!1},{key:"metadata",dataType:"Object",description:"Object that contains any additional information that you want to record with the transaction. The custom fields in the object will be returned via webhook and the payment verification endpoint.",required:!1},{key:"pass_charge",dataType:"Boolean",description:"It takes two possible values: True or False. It is set to False by default. When set to True, the charges on the transaction is computed and passed on to the customer(payer). But when set to False, the charge is passed to the merchant and will be deducted from the amount to be settled to the merchant.",required:!1},{key:"callback_url",dataType:"String",description:"Sample: http://squadco.com",required:!1}]}],r=[{status:"200:OK",responseMsg:"Successful",pill:a.O?.greenColor,code:'{\n    "status": 200,\n    "message": "success",\n    "data": {\n        "auth_url": null,\n        "access_token": null,\n        "merchant_info": {\n            "merchant_response": null,\n            "merchant_name": null,\n            "merchant_logo": null,\n            "merchant_id": "SBN1EBZEQ8"\n        },\n        "currency": "NGN",\n        "recurring": {\n            "frequency": null,\n            "duration": null,\n            "type": 0,\n            "plan_code": null,\n            "customer_name": null\n        },\n        "is_recurring": false,\n        "plan_code": null,\n        "callback_url": "http://squadco.com",\n        "transaction_ref": "4678388588350909090AH",\n        "transaction_memo": null,\n        "transaction_amount": 43000,\n        "authorized_channels": [\n            "card",\n            "ussd",\n            "bank"\n        ],\n        "checkout_url": "https://sandbox-pay.squadco.com/4678388588350909090AH"\n    }\n}\n\n'},{status:"401:Unauthorized",responseMsg:"Invalid/No Authorization Key",pill:a.O?.orangeColor,code:'{\n            "status": 401,\n            "message": "Initiate transaction Unauthorized",\n            "data": null\n}'},{status:"400:Bad Request",responseMsg:"Bad Request",pill:a.O?.orangeColor,code:'{\n        "type": "https://tools.ietf.org/html/rfc7231#section-6.5.1",\n        "title": "One or more validation errors occurred.",\n        "status": 400,\n        "traceId": "|8aec540f-493270cdd9661378.",\n        "errors": {\n            "email": [\n                "The email field is required."\n            ]\n        }\n}\n'}],i=[{title:"Body",children:[{key:"amount",dataType:"Integer",description:"Amount to charge from card in the lowest currency value. kobo for NGN transactions or cent for USD transactions",required:!0},{key:"token_id",dataType:"String",description:"A unique tokenization code for each card transaction and it is returned via the webhook for first charge on the card.",required:!0},{key:"transaction_ref",dataType:"String",description:"Unique case-sensitive transaction reference. If you do not pass this parameter, Squad will generate a unique reference for you.",required:!1}]}],o=[{status:"200:OK",responseMsg:"Successful",pill:a.O?.greenColor,code:'{\n            "status": 200,\n            "success": true,\n            "message": "Success",\n            "data": {\n                "transaction_amount": 0,\n                "transaction_ref": null,\n                "email": null,\n                "transaction_status": null,\n                "transaction_currency_id": null,\n                "created_at": "0001-01-01T00:00:00",\n                "transaction_type": null,\n                "merchant_name": null,\n                "merchant_business_name": null,\n                "gateway_transaction_ref": null,\n                "recurring": null,\n                "merchant_email": null,\n                "plan_code": null\n            }\n}'},{status:"400:Bad Request",responseMsg:"Bad Request",pill:a.O?.orangeColor,code:'{\n            "status": 400,\n            "success": false,\n            "message": "amount cannot be < 0",\n            "data": {}\n}'}],c=[{title:"Query",children:[{key:"transaction_ref",dataType:"String",description:"Unique transaction reference that identifies each transaction",required:!0}]}],d=[{status:"200:OK",responseMsg:"Valid Transaction Reference",pill:a.O?.greenColor,code:'{\n            "status": 200,\n            "success": true,\n            "message": "Success",\n            "data": {\n                "transaction_amount": 5000,\n                "transaction_ref": "SQCHIZ3634573076082",\n                "email": "ayo@gmail.com",\n                "transaction_status": "Success",\n                "transaction_currency_id": "NGN",\n                "created_at": "0001-01-01T00:00:00",\n                "transaction_type": "VirtualAccount",\n                "merchant_name": "CHIZOBA ANTHONY",\n                "merchant_business_name": null,\n                "gateway_transaction_ref": "SQCHIZ3634573076082",\n                "recurring": null,\n                "merchant_email": "okoyeanthonychizoba@gmail.com",\n                "plan_code": null\n            }\n}\n'},{status:"400:Bad Request",responseMsg:"Invalid Transaction Reference",pill:a.O?.orangeColor,code:'{\n            "status": 400,\n            "success": false,\n            "message": "Invalid transaction reference",\n            "data": {}\n}'},{status:"401:Unauthorized",responseMsg:"Unauthorized Request",pill:a.O?.orangeColor,code:'{\n            "success": false,\n            "message": "",\n            "data": {}\n}'},{status:"403:Forbidden",responseMsg:"Invalid API Key",pill:a.O?.orangeColor,code:'{\n            "success": false,\n            "message": "API key is invalid. Key must start with sandbox_sk_",\n            "data": {}\n}'}]}}]);