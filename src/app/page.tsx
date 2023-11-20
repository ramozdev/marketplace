import Card from "@/components/card";
import Button from "@/ui/html/button";
import {
  EyeOpenIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  StitchesLogoIcon,
} from "@radix-ui/react-icons";

export default function HomePage() {
  const images = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
  ];
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
            <div className="flex rounded-md bg-sky-50 ">
              <EyeOpenIcon className="mx-1 my-auto h-5 w-5" />
              <Button.Solid
                color="neutral"
                variant="ghost"
                className="rounded-bl-none rounded-tl-none"
              >
                Connect wallet
              </Button.Solid>
            </div>
          </div>

          <div>
            <div className="flex space-x-1 rounded-md bg-sky-50 px-2 ">
              <PlusIcon className="my-2 h-4 w-4" />
            </div>
          </div>
        </div>
      </nav>

      <div className="grid grid-cols-2 grid-rows-[masonry] gap-4 md:grid-cols-4">
        <div className="grid gap-4">
          <div>
            <Card prop="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"></Card>
          </div>
          <div>
            <Card prop="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" />
          </div>
          <div>
            <Card prop="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" />
          </div>
        </div>

        <div className="grid gap-4">
          <div>
            <Card prop="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"></Card>
          </div>
          <div>
            <Card prop="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" />
          </div>
          <div>
            <Card prop="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" />
          </div>
        </div>

        <div className="grid gap-4">
          <div>
            <Card prop="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"></Card>
          </div>
          <div>
            <Card prop="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" />
          </div>
          <div>
            <Card prop="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Card prop="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"></Card>
          </div>
          <div>
            <Card prop="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" />
          </div>
          <div>
            <Card prop="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}
