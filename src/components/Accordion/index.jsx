import React, { useState } from "react";
import styled from "styled-components";

const Accordion = (props) => {
  const [active, setActive] = useState(false);

  const classState = active ? "open" : "";
  const rotate = active ? "rotate-90" : "";
  const methodColor =
    props?.method === "POST"
      ? "bg-[#3F826D]"
      : props?.method === "GET"
      ? "bg-[#2854D2]"
      : "bg-[green]";

  const onClick = () => {
    setActive((state) => !state);
  };

  return (
    <Container
      className=" dark:border-[#303337] border-2 border-solid border-[#EBEBF2] rounded-lg px-9 pt-2.5 pb-4 mt-6 cursor-pointer"
      onClick={onClick}
    >
      <Wrapper className={`${classState}`}>
        <div className="font-semibold text-sm cursor-pointer flex justify-between items-center">
          <div
            className={`${methodColor} w-12 md:w-16 h-4 md:h-6 rounded-3xl text-center text-xs md:text-sm flex-none mt-2 mr-4 md:mr-2 text-white`}
          >
            {props.method}
          </div>

          <span className="justify-self-center font-medium text-[10px] ml-0 sm:ml-4 lg:ml-0 md:text-sm text-wrap max-[400px]:max-w-[160px] ">
            <span className="font-normal ">{props.endpoint}</span>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
            className={`${rotate} transition-all flex-none justify-self-end dark:fill-white`}
          >
            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
          </svg>
        </div>
        <div className="accordion-details">
          <div className="content">
            {props?.header ? (
              <h3 className="text-sm md:text-base">{props?.header}</h3>
            ) : null}
            {props?.summary ? (
              <p className="text-sm md:text-base">{props?.summary}</p>
            ) : null}

            {props?.parameters ? (
              <div>
                <h4 className="pb-4">Parameters</h4>
                <div>
                  {props?.items?.map((item, id) => {
                    return (
                      <div key={id}>
                        <h5 className="text-xs md:text-sm">{item.title}</h5>
                        <div className="items-wrap overflow-scroll">
                          {item?.children?.map((param) => {
                            return (
                              <div
                                key={param?.key + id}
                                className="grid gap-2 grid-cols-[116px_45px_auto] sm:grid-cols-[1fr_1fr_2fr] text-xs md:text-sm border-0 border-b border-solid border-[rgba(174,174,174,0.2)] pt-3.5"
                              >
                                <div className="text">
                                  <p className="tracking-widest border-0 border-solid border-b-3 border-red-100">
                                    {param?.key}
                                    <span
                                      className={`${
                                        param?.required ? "" : "hidden"
                                      } text-red-700 text-lg`}
                                    >
                                      *
                                    </span>
                                  </p>
                                </div>
                                <div>
                                  <p>{param?.dataType}</p>
                                </div>
                                <div>
                                  <p className="w-[100%]">
                                    {param?.description}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Accordion;

const Container = styled.div`
  .items-wrap {
    :last-child {
      border-bottom: none;
    }
  }

  @media only screen and (max-width: 600px) {
    padding: 10px 15px 15px;
  }
`;

const Wrapper = styled.div`
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
      padding-block: 1.5rem;
    }
  }
`;
