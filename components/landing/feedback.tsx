import React from "react";
import { Marquee } from "../ui/marquee";

const testimonials = [
  {
    name: "Aarav Mehta",
    message:
      "They shipped our product faster than we imagined. Clean UI, solid performance.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
  {
    name: "Sarah Johnson",
    message: "The attention to detail is insane. Everything feels polished.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
  {
    name: "Rohan Patel",
    message:
      "Communication was smooth and delivery was on point. Highly recommend.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    name: "Emily Chen",
    message: "Our conversion rate improved immediately after launch.",
    image: "https://images.unsplash.com/photo-1548142813-c348350df52b",
  },
  {
    name: "Daniel Cruz",
    message: "Fast, reliable, and thoughtful execution throughout the project.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
  },
  {
    name: "Priya Shah",
    message: "They understood our vision and executed it beautifully.",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
  },
];

function TestimonialCard({
  image,
  name,
  message,
}: {
  image: string;
  name: string;
  message: string;
}) {
  return (
    <div className="w-80 rounded-2xl border border-orange-200 bg-orange-50 hover:bg-orange-100 hover:border-orange-400 transition duration-150 ease-in p-4">
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-zinc-900">
            {name}
          </p>
        </div>
      </div>
      <p className="mt-3 text-sm text-zinc-600">
        “{message}”
      </p>
    </div>
  );
}

const Feedback = () => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-20" id="testimonials"> 
      <h1 className="font-bri font-semibold text-7xl tracking-tight">
        What Our Clients Say
      </h1>
      <div className="w-full mt-12">
        <div className="relative flex h-200 w-full items-center justify-center overflow-hidden gap-6 mask-t-from-80% mask-b-from-90%">
          {/* Column 1 */}
          <Marquee vertical pauseOnHover className="[--duration:18s]">
            {testimonials.map((t, i) => (
              <TestimonialCard key={`col1-${i}`} {...t} />
            ))}
          </Marquee>

          {/* Column 2 */}
          <Marquee vertical reverse pauseOnHover className="[--duration:22s]">
            {testimonials.map((t, i) => (
              <TestimonialCard key={`col2-${i}`} {...t} />
            ))}
          </Marquee>

          {/* Column 1 */}
          <Marquee vertical pauseOnHover className="[--duration:18s]">
            {testimonials.map((t, i) => (
              <TestimonialCard key={`col1-${i}`} {...t} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
