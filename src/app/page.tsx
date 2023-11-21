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
    {
      id: 1,
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
    },
    {
      id: 2,
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
    },
    {
      id: 3,
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
    },
    {
      id: 4,
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
    },
    {
      id: 5,
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
    },
    {
      id: 6,
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
    },
    {
      id: 7,
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
    },
    {
      id: 8,
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
    },
    {
      id: 9,
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
    },
    {
      id: 10,
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
    },
    {
      id: 11,
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
    },
    {
      id: 12,
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
    },
  ];

  return (
    <div className="mx-auto max-w-screen-xl">
      <nav className="flex justify-between p-4">
        <div className="flex space-x-2">
          <StitchesLogoIcon className="mt-1 h-5 w-5" />
          <p className="text-xl font-semibold">Marketplace</p>
        </div>
        <div className="flex rounded-md bg-sky-50">
          <Button.Solid color="neutral" variant="ghost" size="icon">
            <MagnifyingGlassIcon />
          </Button.Solid>
          <Button.Solid color="neutral" variant="ghost">
            Search
          </Button.Solid>
        </div>
        <div className="flex space-x-1">
          <div>
            <div className="flex rounded-md bg-sky-50 ">
              <Button.Solid color="neutral" variant="ghost" size="icon">
                <EyeOpenIcon />
              </Button.Solid>
              <Button.Solid color="neutral" variant="ghost">
                Connect wallet
              </Button.Solid>
            </div>
          </div>

          <div className="rounded-md bg-sky-50">
            <Button.Solid color="neutral" variant="ghost" size="icon">
              <PlusIcon />
            </Button.Solid>
          </div>
        </div>
      </nav>

      <div className="flex-center mx-auto grid max-w-screen-xl grid-cols-2 gap-4 md:grid-cols-4">
        {images.map((card) => (
          <Card key={card.id} prop={card.src} />
        ))}
      </div>
    </div>
  );
}
