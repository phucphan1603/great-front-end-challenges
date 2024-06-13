import Image from "next/image";
import React from "react";

export default function TestimonialCard() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-tr from-[#F9FAFB] to-[#D2D6DB] md:px-8 px-4">
      <div className="mt-[200px] w-[340px] mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <Image
              width={48}
              height={48}
              src="/profile-thumbnail.png"
              alt="Avatar"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-neutral-900 font-semibold line-clamp-2">
              Sarah Dole
            </p>
            <p className="text-neutral-600 text-sm">@sarahdole</p>
          </div>
        </div>
        <p className="text-neutral-600 mt-4">
          I`ve been searching for high-quality abstract images for my design
          projects, and I`m thrilled to have found this platform. The variety
          and depth of creativity are astounding!
        </p>
      </div>
    </div>
  );
}
