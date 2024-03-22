import React, { useState } from "react";
import CodeBlock from "@theme/CodeBlock";
import Dropdown from "./Dropdown";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { twMerge } from "tailwind-merge";

const ApiTest = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [merchantKey, setMerchantKey] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("cURL");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  let nodeCode = `
  const axios = require('axios');
  let data = JSON.stringify({
    "amount": ${amount ? amount + "," : "_ ,"}
    "email": ${email ? email + "," : "_ ,"}
    "key": ${merchantKey ? merchantKey + "," : "_ ,"}
    "currency": "NGN",
    "initiate_type": "inline",
    "CallBack_URL": "https://www.linkedin.com/",
  });
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://sandbox-api.squadco.com/payment/Initiate',
    headers: { 
      'Authorization': '47M3DMZD', 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
  
`;

  let dartCode = `
  var headers = {
    'Authorization': '47M3DMZD',
    'Content-Type': 'application/json'
  };
  var request = http.Request('POST', Uri.parse('https://sandbox-api.squadco.com/payment/Initiate'));
  request.body = json.encode({
    "amount": ${amount ? amount + "," : "_ ,"}
    "email": ${email ? email + "," : "_ ,"}
    "key":${merchantKey ? merchantKey + "," : "_ ,"}
    "currency": "NGN",
    "initiate_type": "inline",
    "CallBack_URL": "https://www.linkedin.com/",
  });
  request.headers.addAll(headers);
  
  http.StreamedResponse response = await request.send();
  
  if (response.statusCode == 200) {
    print(await response.stream.bytesToString());
  }
  else {
    print(response.reasonPhrase);
  }
  
`;

  let curlCode = `
  curl --location 'https://sandbox-api.squadco.com/payment/Initiate' 
  --header 'Authorization: 47M3DMZD'
  --header 'Content-Type: application/json'
  --data-raw '{
    "amount":${amount ? amount + "," : "_ ,"}
    "email":${email ? email + "," : "_ ,"}
    "key":${merchantKey ? merchantKey + "," : "_ ,"}
      "currency":"NGN",
      "initiate_type": "inline",
      "CallBack_URL" : "https://www.linkedin.com/",
  }

`;

  function initWidget() {
    console.log("fired here");

    const params = {
      amount: Number(amount) * 100,
      email: email,
      currency_code: "NGN",
      key: merchantKey,
      // is_recurring: true,
      initiate_type: "inline",
    };

    const squadInstance = new window.squad({
      onClose: () => {
        console.log("Widget closed");
        setIsLoading(false);
      },
      onLoad: () => {
        console.log("Widget loaded successfully");
        setIsLoading(false);
      },
      onSuccess: () => {
        setPaymentSuccess(true);
      },
      ...params,
    });

    squadInstance.setup();
    squadInstance.open();
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    initWidget();
  };

  return (
    <div className="flex flex-col justify-center align-middle border-2 border-solid border-[#EBEBF2] dark:border-[#303337] rounded-lg md:px-5 px-2">
      <div className="relative h-10 flex justify-between pt-3.5 text-[11px] md:text-[13px] leading-[10px]  border-b-2 border-0 border-solid border-[#EBEBF2] dark:border-b-[#303337]">
        <div className="flex ">
          <p className="text-[#3F826D] font-semibold dark:text-[#4CB393]">
            POST
          </p>
          <p className="text-[rgba(45,72,117,0.70)] dark:text-[#a8b7cc] pl-2 md:pl-4">
            sandbox-api.squadco.com/payment/Initiate
          </p>
        </div>
        <Dropdown
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
        />
      </div>
      <div className="pt-8">
        <h4 className="text-[#0B3142] leading-3 dark:text-[#E2E8EF]">
          Enter Payment details
        </h4>
        <p className="text-sm text-[#475569] leading-3 dark:text-[#94A3B8]">
          Help us send transactions receipts to the customers
        </p>
      </div>
      <div className="py-6 md:grid md:grid-cols-2 md:gap-9 items-center">
        <div className="">
          <form className="text-base" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col pb-5">
              <label className="pb-1 text-sm" htmlFor="amount">
                Charge Amount (₦)
              </label>

              <input
                id="amount"
                type="text"
                placeholder="e.g 10000"
                // value={amount}
                {...register("amount", {
                  required: "Amount is required",
                  onChange: (e) => {
                    setAmount(e.target.value);
                  },
                })}
                // onChange={(e) => setAmount(e.target.value)}
                className={twMerge(
                  "rounded-[4px] px-3 py-3 border-[#BDBDBD] border-solid border placeholder:text-[#828282] dark:bg-transparent ",
                  errors?.amount && "border-red-500"
                )}
              />
              {errors.amount && (
                <p className="text-red-600 text-xs m-0 p-0 pt-1 transition-all">
                  {errors.amount.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="pb-1 text-sm" htmlFor="email">
                Customer Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="e.g example@email.com"
                {...register("email", {
                  required: "Email is required",
                  onChange: (e) => {
                    setEmail(e.target.value);
                  },
                })}
                className={twMerge(
                  "rounded-[4px] px-3 py-3 border-[#BDBDBD] border-solid border placeholder:text-[#828282] dark:bg-transparent",
                  errors?.email && "border-red-500"
                )}
              />
              {errors.email && (
                <p className="text-red-600 text-xs m-0 p-0 pt-1 transition-all">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col pt-5">
              <label className="pb-1 text-sm" htmlFor="mkey">
                Merchant key
              </label>
              <input
                id="mkey"
                type="text"
                placeholder="e.g sandbox_sk_ec8d24ec25..."
                {...register("merchant_key", {
                  required: "Merchant key is required",
                  onChange: (e) => {
                    setMerchantKey(e.target.value);
                  },
                })}
                className={twMerge(
                  "rounded-[4px] px-3 py-3 border-[#BDBDBD] border-solid border placeholder:text-[#828282] dark:bg-transparent",
                  errors?.merchant_key && "border-red-500"
                )}
              />
              {errors.merchant_key && (
                <p className="text-red-600 text-xs m-0 p-0 pt-1 transition-all">
                  {errors.merchant_key.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              // onClick={initWidget}
              className="bg-[#e51e56] w-full hover:bg-[#d43d68] border-none text-white mt-7 mb-2 py-3 rounded-[4px] font-semibold cursor-pointer"
            >
              Send Request
            </button>
          </form>
        </div>
        <div className="">
          <CodeBlock className="language-jsx h-72 overflow-scroll">
            {selectedLanguage === "cURL"
              ? curlCode
              : selectedLanguage === "Javascript"
              ? nodeCode
              : dartCode}
          </CodeBlock>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ApiTest;
