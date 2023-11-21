import Button from "@/ui/html/button";
import { CheckCircledIcon } from "@radix-ui/react-icons";

interface CardProps {
  prop?: string;
}

export default function Card({ prop }: CardProps) {
  return (
    <div className="mx-auto rounded-lg">
      <div className="h-auto w-72">
        <div className="h-full rounded-t-lg bg-sky-100">
          <img
            src={prop}
            alt="NFT"
            className="object-fit rounded-t-lg bg-sky-100"
          />
        </div>
        <div className="space-y-3 p-3.5 font-semibold">
          <p>Blur Farmers</p>
          <p>0.0041 ETH</p>
          <p className="font-normal">Last Sale: {"<"} 0.01 ETH</p>
        </div>
        <div className="flex h-8 justify-between rounded-b-lg bg-sky-300">
          <Button.Solid
            variant="ghost"
            className="rounded-br-none rounded-tl-none rounded-tr-none"
          >
            <span>Buy Now</span>
          </Button.Solid>

          <Button.Solid
            variant="ghost"
            size="icon"
            className="rounded-bl-none rounded-tl-none rounded-tr-none"
          >
            <CheckCircledIcon />
          </Button.Solid>
        </div>
      </div>
    </div>
  );
}
