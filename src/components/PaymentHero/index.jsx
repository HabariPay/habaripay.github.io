import React from "react";
import { twMerge } from "tailwind-merge";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

const Hero = () => {
  const cld = new Cloudinary({ cloud: { cloudName: "delflsgq4" } });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mx-auto my-14">
      <div
        className={twMerge(
          "rounded-lg hover:no-underline text-center p-6",
          "grid place-items-center hover:text-[#0B3142] dark:text-[#E2E8EF] text-[#0B3142] dark:bg-[#2C2F36] bg-[#F6FAFB]"
        )}
      >
        <AdvancedImage
          className="w-full"
          cldImg={cld.image("squad-docs/websiteImg")}
        />
        <h3 className="text-sm pt-5 font-semibold">On your website</h3>
      </div>
      <div
        className={twMerge(
          "rounded-lg hover:no-underline text-center p-6",
          "grid place-items-center hover:text-[#0B3142] dark:text-[#E2E8EF] text-[#0B3142] dark:bg-[#2C2F36] bg-[#F6FAFB]"
        )}
      >
        <AdvancedImage
          className="w-full"
          cldImg={cld.image("squad-docs/mobile")}
        />
        <h3 className="text-sm pt-5 font-semibold">Mobile Apps</h3>
      </div>
      <div
        className={twMerge(
          "rounded-lg hover:no-underline text-center p-6",
          "grid place-items-center hover:text-[#0B3142] dark:text-[#E2E8EF] text-[#0B3142] dark:bg-[#2C2F36] bg-[#F6FAFB]"
        )}
      >
        <AdvancedImage
          className="w-full"
          cldImg={cld.image("squad-docs/e-commerce")}
        />
        <h3 className="text-sm pt-5 font-semibold">On your e-Commerce Store</h3>
      </div>
    </div>
  );
};

export default Hero;
