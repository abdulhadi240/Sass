"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TracingBeam } from "./Tracingbeam";
import DataSteps from "./DataSteps";

const images = [
  "/image.webp",
  "/image1.webp",
  "/image2.webp",
];

export function TracingBeamDemo() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images]);

  return (
    <TracingBeam className="px-6">
      <div className=" antialiased pt-4 relative flex flex-col gap-32">
        <DataSteps
          title={"Upload a few photos"}
          tag={
            "Our AI headshot generator only requires 6 photos of you to create amazing headshots!"
          }
          number={1}
          color={"#FD7940"}
        >
          <div className="flex gap-5 mt-4">
            <div className="flex flex-col">
              <div className="imag1">
                <Image src={"/left.png"} width={800} height={250} alt="image" />
              </div>
              <div className="imag1">
                <Image
                  src={"/right.png"}
                  width={800}
                  height={250}
                  alt="image"
                />
              </div>
            </div>

            <div className="video">
              <video src="/video.mp4" autoPlay loop></video>
            </div>
            <div className="flex flex-col">
              <div className="imag1">
                <Image
                  src={"/right.png"}
                  width={800}
                  height={250}
                  alt="image"
                />
              </div>
              <div className="imag1">
                <Image src={"/left.png"} width={800} height={250} alt="image" />
              </div>
            </div>
          </div>
        </DataSteps>

        <DataSteps
          title={"Our AI gets to work"}
          tag={
            "We use cutting-edge technology built by AI researchers from Meta and Microsoft to create your headshots."
          }
          number={1}
          color={"#FD7940"}
        >
          <div className="flex gap-5 mt-4">
            <div className="image-carousel">
              <Image
                src={images[currentImageIndex]}
                width={200}
                height={200}
                alt={`Image ${currentImageIndex + 1}`}
                style={{ transition: "opacity 1s ease-in-out" }}
              />
            </div>
          </div>
        </DataSteps>

        <DataSteps
          title={"Select your headshots"}
          tag={
            "You'll receive perfect AI headshot. Ready for all use cases, from personal to the most professional."
          }
          number={1}
          color={"#FD7940"}
        >
          <div className="flex gap-5 mt-4">
            <div className="flex flex-col">
              <div className="imag1">
                <Image src={"/left.png"} width={800} height={250} alt="image" />
              </div>
              <div className="imag1">
                <Image
                  src={"/right.png"}
                  width={800}
                  height={250}
                  alt="image"
                />
              </div>
            </div>

            <div className="video">
              <video src="/video.mp4" autoPlay loop></video>
            </div>
            <div className="flex flex-col">
              <div className="imag1">
                <Image
                  src={"/right.png"}
                  width={800}
                  height={250}
                  alt="image"
                />
              </div>
              <div className="imag1">
                <Image src={"/left.png"} width={800} height={250} alt="image" />
              </div>
            </div>
          </div>
        </DataSteps>
      </div>
    </TracingBeam>
  );
}
