"use client";

import Anchor from "@/ui/html/anchor";
import { usePathname } from "next/navigation";

type Routes = {
  id: number;
  text: string;
  route?: string;
}[];

const items: Routes = [
  { id: 0, text: "General", route: "/" },
  { id: 1, text: "Audit Log" },
  { id: 2, text: "Beta features" },
  { id: 3, text: "Integrations" },
  { id: 4, text: "Members" },
  { id: 5, text: "Service tokens" },
  { id: 6, text: "Support", route: "/support" },
  { id: 7, text: "Teams", route: "/teams" },
  { id: 8, text: "Billing" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex-grow">
      <div className="grid w-full">
        {items.map((item) => (
          <Anchor.Underline
            key={item.id}
            href={item.route}
            color="gray"
            className={`py-3 no-underline ${
              pathname === item.route ? "font-semibold" : ""
            }`}
          >
            {item.text}
          </Anchor.Underline>
        ))}
      </div>
    </div>
  );
}
