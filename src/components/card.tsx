import Button from "@/ui/html/button";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import React from "react";

interface CardProps {
  prop?: string;
}

export default function Card({ prop }: CardProps) {
  return (
    // <div className="first:sm:col-span-2 first:xl:col-start-2">

    <div className="h-auto max-w-full rounded-lg">
      <div className="w-72 ">
        <div className=" max-h-fit rounded-none rounded-t-lg bg-sky-100">
          <img
            src={prop}
            alt="NFT"
            className="w-full  rounded-none rounded-t-lg bg-sky-100 object-contain "
          />
        </div>
        <div className="space-y-3 px-4 py-4 text-sm font-semibold">
          <p>Blur Farmers</p>
          <p>0.0041 ETH</p>
          <p className="font-normal">Last Sale: {"<"} 0.01 ETH</p>
        </div>
        <div className="grid h-8 grid-cols-4 rounded-b-lg  bg-sky-300">
          <Button.Solid
            variant="ghost"
            className="col-start-1 col-end-4 m-0 flex space-x-1 rounded-br-none rounded-tl-none rounded-tr-none p-0  font-semibold"
          >
            <span>Buy Now</span>
          </Button.Solid>

          <Button.Solid
            variant="ghost"
            className="col-start-4 m-0 rounded-bl-none rounded-tl-none rounded-tr-none p-0 px-1  font-semibold"
          >
            <CheckCircledIcon className="mx-auto h-4 w-4" />
          </Button.Solid>
        </div>
      </div>
    </div>
  );
}
