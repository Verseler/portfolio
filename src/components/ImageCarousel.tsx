import { useEffect, useState } from "react";
import {
  CarouselNext,
  CarouselPrevious,
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/Carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./ui/Dialog";
import { useSearchParams } from "react-router";

type ImageCarouselProps = {
  images: Array<string> | null;
};

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedProjectId = Number(searchParams.get("project-id"));

  function handleCloseImageCarousel() {
    if (searchParams.has("project-id")) {
      searchParams.delete("project-id");
      setSearchParams(searchParams);
    }
  }

  useEffect(() => {
    if (!isOpen) {
      handleCloseImageCarousel();
    }
  }, [isOpen]);

  useEffect(() => {
    if (selectedProjectId) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [selectedProjectId]);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Dialog modal open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="p-2 w-max">
        <Carousel setApi={setApi} className="relative">
          <CarouselContent className="h-60 md:h-[calc(100vh-5rem)] aspect-[4/2.5]">
            {images &&
              images?.length > 0 &&
              images?.map((image, index) => (
                <CarouselItem key={index} className="flex items-center justify-center overflow-hidden">
                  <img
                    key={index}
                    className="object-contain border rounded shadow-sm border-neutral-100"
                    src={image}
                    alt="project image"
                  />
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          <div className="absolute bottom-0 px-2 py-1 text-sm text-center transform -translate-x-1/2 -translate-y-1/2 bg-white rounded left-1/2 text-muted-foreground">
            Slide {current} of {count}
          </div>
        </Carousel>

        <DialogTitle className="sr-only">Project Image gallery</DialogTitle>
        <DialogDescription className="sr-only"></DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
