import React, { useState } from "react";
import styled from "styled-components";
import CodeBlock from "@theme/CodeBlock";
import { twMerge } from "tailwind-merge";

export const Toggle = ({ data }) => {
  const [open, setOpen] = useState(false);

  const classState = open ? "open" : "";
  const rotate = open ? "rotate-90" : "";

  const onClick = () => {
    setOpen((state) => !state);
  };

  return (
    <Wrapper
      className={`${classState} dark:border-b-[#303337] cursor-pointer py-[14px] px-4 sm:px-[35px]`}
      onClick={onClick}
    >
      <div className="grid grid-cols-[2fr_3fr_1fr] gap-x-4 md:gap-x-0">
        <div className="flex">
          <div
            className={twMerge(
              "w-2 h-2 flex-none rounded-full mt-2 mr-2",
              data?.pill
            )}
          />
          <span className="flex-none text-xs md:text-sm text-wrap w-20 sm:w-auto max-w-[100%]">
            {data?.status}
          </span>
        </div>

        <span className=" font-normal text-xs md:text-sm text-wrap ">
          {data?.responseMsg}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 320 512"
          className={`${rotate} transition-all justify-self-end dark:fill-white`}
        >
          <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
        </svg>
      </div>
      <div className="accordion-details">
        <div className="content">
          <CodeBlock className="language-jsx my-5">{data?.code}</CodeBlock>
        </div>
      </div>
    </Wrapper>
  );
};

export default function AccordionCode({ items }) {
  return (
    <>
      <h4>Responses</h4>
      <Container className=" dark:border-[#303337]">
        <div className="">
          {items?.map((item, id) => {
            return <Toggle key={id} data={item} />;
          })}
        </div>
      </Container>
    </>
  );
}
const Container = styled.div`
  border: 2px solid #ebebf2;
  border-radius: 8px;
  margin-top: 1.5rem;

  :last-child {
    border-bottom: none;
    margin-bottom: 0px;
  }
`;

const Wrapper = styled.div`
  border-bottom: 1px solid #f7f7f7;
  padding-bottom: 10px;

  .header {
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    display: grid;
    justify-content: space-between;
    grid-template-columns: 2fr 4fr 1fr;
    column-gap: 1rem;
  }

  .accordion-details {
    display: grid;
    grid-template-rows: 0fr;
    transition: all 0.4s ease-out;

    .content {
      overflow: hidden;
    }
  }

  &.open {
    .accordion-details {
      grid-template-rows: 1fr;
    }
  }

  @media only screen and (max-width: 600px) {
    .header {
      font-size: 12px;
    }
  }
`;
