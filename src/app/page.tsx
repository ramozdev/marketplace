import Button from "@/ui/html/button";
import {
  EyeOpenIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  StitchesLogoIcon,
} from "@radix-ui/react-icons";

export default function HomePage() {
  return (
    <div>
      <nav className="mx-auto flex max-w-screen-2xl justify-around p-4 pb-2">
        <div className=" my-auto flex space-x-2">
          <StitchesLogoIcon className="mt-1 h-5 w-5" />
          <p className="text-xl font-semibold">Marketplace</p>
        </div>
        <div className="flex w-1/4 space-x-1.5 rounded-md bg-sky-50 px-3 py-0.5">
          <MagnifyingGlassIcon className="mt-1.5 h-5 w-5" />
          <Button.Solid color="neutral" variant="ghost">
            Search
          </Button.Solid>
        </div>
        <div className="flex space-x-1">
          <div>
            <div className="flex rounded-md bg-sky-50 px-3 py-0.5">
              <EyeOpenIcon className="mt-1 h-5 w-5" />
              <Button.Solid color="neutral" variant="ghost">
                Connect
              </Button.Solid>
            </div>
          </div>

          <div>
            <div className="flex space-x-1 rounded-md bg-sky-50 px-3 py-0.5">
              <PlusIcon className="my-2.5 h-3.5 w-4" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
