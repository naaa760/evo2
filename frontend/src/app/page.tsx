import Link from "next/link";
import { Button } from "~/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function LandingPage() {
  const { userId } = await auth();

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Subtle Video Background */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-contain opacity-10"
        >
          <source src="/vi.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Grid Pattern Overlays */}
      <div className="absolute inset-0 -z-5">
        {/* Top-left grid pattern */}
        <div
          className="absolute top-0 left-0 h-1/2 w-1/2 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
          }}
        ></div>

        {/* Bottom-right grid pattern */}
        <div
          className="absolute right-0 bottom-0 h-2/3 w-1/2 opacity-12"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        ></div>

        {/* Center area grid pattern */}
        <div
          className="absolute top-1/4 left-1/4 h-1/2 w-1/2 rotate-12 opacity-8"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
            `,
            backgroundSize: "25px 25px",
          }}
        ></div>

        {/* Additional subtle grid for more coverage */}
        <div
          className="absolute top-1/3 right-1/4 h-1/3 w-1/3 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "35px 35px",
          }}
        ></div>
      </div>

      {/* Beautiful White Aesthetic Patterns */}

      {/* Floating white circles pattern */}
      <div className="absolute top-1/4 left-1/4 z-5 opacity-15 sm:opacity-20">
        <div className="animate-gentle-pulse h-1.5 w-1.5 rounded-full bg-white sm:h-2 sm:w-2"></div>
        <div className="animate-gentle-pulse absolute top-6 left-8 h-0.5 w-0.5 rounded-full bg-white delay-1000 sm:top-8 sm:left-12 sm:h-1 sm:w-1"></div>
        <div className="animate-gentle-pulse absolute top-12 left-4 h-1 w-1 rounded-full bg-white delay-2000 sm:top-16 sm:left-6 sm:h-1.5 sm:w-1.5"></div>
        <div className="animate-gentle-pulse absolute top-18 left-14 h-0.5 w-0.5 rounded-full bg-white delay-3000 sm:top-24 sm:left-20 sm:h-1 sm:w-1"></div>
      </div>

      {/* Elegant white curved lines */}
      <div className="absolute top-1/3 right-1/4 z-5 opacity-12 sm:opacity-15">
        <div className="animate-float h-20 w-20 rounded-tl-full border-t border-l border-white sm:h-24 sm:w-24 sm:border-t-2 sm:border-l-2 lg:h-32 lg:w-32"></div>
        <div className="animate-float absolute top-2 left-2 h-12 w-12 rounded-br-full border-r border-b border-white delay-2000 sm:top-4 sm:left-4 sm:h-16 sm:w-16 sm:border-r-2 sm:border-b-2 lg:h-20 lg:w-20"></div>
      </div>

      {/* Delicate white dots constellation */}
      <div className="absolute bottom-1/3 left-1/6 z-5 opacity-20 sm:opacity-25">
        <div className="relative">
          <div className="h-0.5 w-0.5 rounded-full bg-white sm:h-1 sm:w-1"></div>
          <div className="absolute top-2 left-3 h-0.5 w-0.5 rounded-full bg-white sm:top-3 sm:left-4"></div>
          <div className="absolute top-4 left-1 h-1 w-1 rounded-full bg-white sm:top-6 sm:left-2 sm:h-1.5 sm:w-1.5"></div>
          <div className="absolute top-6 left-4 h-0.5 w-0.5 rounded-full bg-white sm:top-8 sm:left-6"></div>
          <div className="absolute top-1 left-6 h-0.5 w-0.5 rounded-full bg-white sm:top-2 sm:left-8"></div>
          {/* Connecting subtle lines */}
          <div className="absolute top-0.5 left-0.5 h-px w-2 rotate-45 bg-gradient-to-r from-white to-transparent sm:top-1 sm:left-1 sm:w-3"></div>
          <div className="absolute top-3 left-2 h-px w-3 rotate-12 bg-gradient-to-r from-white to-transparent sm:top-5 sm:left-3 sm:w-4"></div>
        </div>
      </div>

      {/* Elegant white geometric pattern */}
      <div className="absolute right-1/3 bottom-1/4 z-5 opacity-15 sm:opacity-20">
        <div className="animate-float relative">
          <div className="h-4 w-4 rotate-45 border border-white opacity-60 sm:h-5 sm:w-5 lg:h-6 lg:w-6"></div>
          <div className="absolute top-0.5 left-0.5 h-3 w-3 rotate-45 border border-white opacity-40 sm:top-1 sm:left-1 sm:h-4 sm:w-4"></div>
          <div className="absolute top-1 left-1 h-1.5 w-1.5 rotate-45 border border-white opacity-80 sm:top-2 sm:left-2 sm:h-2 sm:w-2"></div>
        </div>
      </div>

      {/* Ethereal white orbs */}
      <div className="absolute top-1/6 right-1/6 z-5 opacity-12 sm:opacity-15">
        <div className="relative">
          <div className="animate-gentle-pulse h-3 w-3 rounded-full bg-white/20 blur-sm sm:h-4 sm:w-4 sm:bg-white/30"></div>
          <div className="animate-gentle-pulse absolute top-4 left-6 h-1.5 w-1.5 rounded-full bg-white/30 blur-sm delay-1000 sm:top-6 sm:left-8 sm:h-2 sm:w-2 sm:bg-white/40"></div>
          <div className="animate-gentle-pulse absolute top-8 left-3 h-2 w-2 rounded-full bg-white/15 blur-sm delay-2000 sm:top-12 sm:left-4 sm:h-3 sm:w-3 sm:bg-white/20"></div>
        </div>
      </div>

      {/* Intricate white mandala pattern */}
      <div className="absolute top-1/2 left-1/8 z-5 opacity-10 sm:opacity-12">
        <div className="animate-float relative h-16 w-16 sm:h-18 sm:w-18 lg:h-20 lg:w-20">
          <div className="absolute inset-0 rounded-full border border-white opacity-30"></div>
          <div className="absolute inset-0.5 rounded-full border border-white opacity-40 sm:inset-1"></div>
          <div className="absolute inset-2 rounded-full border border-white opacity-50 sm:inset-3"></div>
          <div className="absolute top-1/2 left-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 bg-white sm:w-6"></div>
          <div className="absolute top-1/2 left-1/2 h-4 w-px -translate-x-1/2 -translate-y-1/2 bg-white sm:h-6"></div>
          <div className="absolute top-1/2 left-1/2 h-px w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white sm:w-4"></div>
          <div className="absolute top-1/2 left-1/2 h-3 w-px -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white sm:h-4"></div>
        </div>
      </div>

      {/* Elegant white hexagon pattern */}
      <div className="absolute right-1/8 bottom-1/6 z-5 opacity-14 sm:opacity-18">
        <div className="animate-gentle-pulse relative">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            className="text-white sm:h-20 sm:w-20 lg:h-24 lg:w-24"
          >
            <polygon
              points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              opacity="0.6"
            />
            <polygon
              points="12,5 19,9.5 19,14.5 12,19 5,14.5 5,9.5"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              opacity="0.4"
            />
          </svg>
        </div>
      </div>

      {/* Cascading white triangles */}
      <div className="absolute top-2/3 right-1/6 z-5 opacity-15 sm:opacity-20">
        <div className="relative">
          <div className="animate-float h-0 w-0 border-r-3 border-b-4 border-l-3 border-r-transparent border-b-white border-l-transparent opacity-60 sm:border-r-4 sm:border-b-6 sm:border-l-4"></div>
          <div className="animate-float absolute top-1.5 left-1.5 h-0 w-0 border-r-2 border-b-3 border-l-2 border-r-transparent border-b-white border-l-transparent opacity-40 delay-1000 sm:top-2 sm:left-2 sm:border-r-3 sm:border-b-4 sm:border-l-3"></div>
          <div className="border-l-1.5 border-r-1.5 animate-float absolute top-3 left-0.5 h-0 w-0 border-b-2 border-r-transparent border-b-white border-l-transparent opacity-80 delay-2000 sm:top-4 sm:left-1 sm:border-r-2 sm:border-b-3 sm:border-l-2"></div>
        </div>
      </div>

      {/* Flowing white particle stream */}
      <div className="absolute top-3/4 left-1/8 z-5 opacity-18 sm:opacity-22">
        <div className="relative">
          <div className="animate-gentle-pulse h-0.5 w-0.5 rounded-full bg-white sm:h-1 sm:w-1"></div>
          <div className="animate-gentle-pulse absolute top-1.5 left-2 h-0.5 w-0.5 rounded-full bg-white delay-300 sm:top-2 sm:left-3"></div>
          <div className="animate-gentle-pulse absolute top-3 left-4 h-0.5 w-0.5 rounded-full bg-white delay-600 sm:top-4 sm:left-6 sm:h-1 sm:w-1"></div>
          <div className="animate-gentle-pulse absolute top-4.5 left-6 h-0.5 w-0.5 rounded-full bg-white delay-900 sm:top-6 sm:left-9"></div>
          <div className="animate-gentle-pulse absolute top-6 left-8 h-0.5 w-0.5 rounded-full bg-white delay-1200 sm:top-8 sm:left-12 sm:h-1 sm:w-1"></div>
          <div className="animate-gentle-pulse absolute top-7.5 left-10 h-0.5 w-0.5 rounded-full bg-white delay-1500 sm:top-10 sm:left-15"></div>
        </div>
      </div>

      {/* Subtle white gradient overlays */}
      <div
        className="absolute top-0 left-1/2 z-5 h-64 w-64 -translate-x-1/2 opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 50%, transparent 100%)",
        }}
      ></div>
      <div
        className="absolute right-0 bottom-0 z-5 h-80 w-80 opacity-40 blur-2xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 50%, transparent 100%)",
        }}
      ></div>

      {/* Decorative white lines pattern */}
      <div className="absolute top-2/3 left-8 z-5 opacity-12 sm:opacity-15">
        <div className="space-y-1.5 sm:space-y-2">
          <div className="h-px w-12 bg-gradient-to-r from-white via-white/50 to-transparent sm:w-16"></div>
          <div className="ml-1.5 h-px w-9 bg-gradient-to-r from-white via-white/50 to-transparent sm:ml-2 sm:w-12"></div>
          <div className="h-px w-15 bg-gradient-to-r from-white via-white/50 to-transparent sm:w-20"></div>
          <div className="ml-3 h-px w-6 bg-gradient-to-r from-white via-white/50 to-transparent sm:ml-4 sm:w-8"></div>
        </div>
      </div>

      {/* Beautiful white spiral pattern */}
      <div className="absolute top-1/2 right-8 z-5 opacity-8 sm:opacity-10">
        <div className="animate-gentle-pulse relative h-18 w-18 sm:h-20 sm:w-20 lg:h-24 lg:w-24">
          <div className="absolute inset-0 rounded-full border-2 border-white opacity-20"></div>
          <div className="absolute inset-1.5 rounded-full border border-white opacity-40 sm:inset-2"></div>
          <div className="absolute inset-3 rounded-full border border-white opacity-60 sm:inset-4"></div>
          <div className="absolute inset-4.5 rounded-full border border-white opacity-80 sm:inset-6"></div>
        </div>
      </div>

      {/* Flowing white wave pattern */}
      <div className="absolute bottom-16 left-1/3 z-5 opacity-15 sm:opacity-20">
        <svg
          width="80"
          height="16"
          viewBox="0 0 100 20"
          className="text-white sm:h-20 sm:w-100"
        >
          <path
            d="M0,10 Q25,0 50,10 T100,10"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M0,12 Q25,2 50,12 T100,12"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Minimalist white cross pattern */}
      <div className="absolute top-3/4 right-1/4 z-5 opacity-20 sm:opacity-25">
        <div className="animate-gentle-pulse relative">
          <div className="h-6 w-px bg-white sm:h-8"></div>
          <div className="absolute top-2.5 left-2.5 h-px w-6 -translate-x-1/2 bg-white sm:top-3.5 sm:left-3.5 sm:w-8"></div>
        </div>
      </div>

      {/* Delicate white flower pattern */}
      <div className="absolute top-1/5 left-2/3 z-5 opacity-12 sm:opacity-16">
        <div className="animate-float relative">
          <div className="h-1.5 w-1.5 rounded-full bg-white opacity-60 sm:h-2 sm:w-2"></div>
          <div className="absolute top-0 left-0 h-3 w-0.5 -translate-x-1/2 -translate-y-1 rounded-full bg-white opacity-40 sm:h-4 sm:w-1"></div>
          <div className="absolute top-0 left-0 h-0.5 w-3 -translate-x-1 -translate-y-1/2 rounded-full bg-white opacity-40 sm:h-1 sm:w-4"></div>
          <div className="absolute top-0 left-0 h-2.5 w-0.5 -translate-x-1/2 translate-y-1 rotate-45 rounded-full bg-white opacity-30 sm:h-3 sm:w-1"></div>
          <div className="absolute top-0 left-0 h-0.5 w-2.5 translate-x-1 -translate-y-1/2 rotate-45 rounded-full bg-white opacity-30 sm:h-1 sm:w-3"></div>
        </div>
      </div>

      {/* Crystalline white structure */}
      <div className="absolute bottom-1/5 left-3/4 z-5 opacity-12 sm:opacity-14">
        <div className="animate-gentle-pulse relative">
          <div className="h-5 w-5 rotate-45 transform border border-white sm:h-6 sm:w-6"></div>
          <div className="absolute top-1/2 left-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rotate-45 transform border border-white sm:h-4 sm:w-4"></div>
          <div className="absolute top-1/2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rotate-45 transform border border-white sm:h-2 sm:w-2"></div>
          <div className="absolute top-0 left-1/2 h-px w-5 -translate-x-1/2 bg-white sm:w-6"></div>
          <div className="absolute bottom-0 left-1/2 h-px w-5 -translate-x-1/2 bg-white sm:w-6"></div>
        </div>
      </div>

      {/* Elegant white starbursts */}
      <div className="absolute top-1/8 left-1/8 z-5 opacity-14 sm:opacity-18">
        <div className="animate-gentle-pulse relative">
          <div className="h-px w-6 bg-white sm:w-8"></div>
          <div className="absolute top-0 left-3 h-6 w-px -translate-x-1/2 bg-white sm:left-4 sm:h-8"></div>
          <div className="absolute top-0 left-3 h-px w-4.5 -translate-x-1/2 rotate-45 bg-white sm:left-4 sm:w-6"></div>
          <div className="absolute top-0 left-3 h-4.5 w-px -translate-x-1/2 rotate-45 bg-white sm:left-4 sm:h-6"></div>
          <div className="absolute top-0 left-3 h-px w-4.5 -translate-x-1/2 -rotate-45 bg-white sm:left-4 sm:w-6"></div>
          <div className="absolute top-0 left-3 h-4.5 w-px -translate-x-1/2 -rotate-45 bg-white sm:left-4 sm:h-6"></div>
        </div>
      </div>

      {/* Floating white DNA helix pattern */}
      <div className="absolute right-1/5 bottom-1/8 z-5 opacity-12 sm:opacity-15">
        <div className="animate-float relative">
          <svg
            width="32"
            height="48"
            viewBox="0 0 40 60"
            className="text-white sm:h-60 sm:w-40"
          >
            <path
              d="M10,5 Q20,15 30,5"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M10,15 Q20,25 30,15"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              opacity="0.5"
            />
            <path
              d="M10,25 Q20,35 30,25"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M10,35 Q20,45 30,35"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              opacity="0.5"
            />
            <path
              d="M10,45 Q20,55 30,45"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              opacity="0.6"
            />
            <circle cx="10" cy="5" r="1" fill="currentColor" opacity="0.8" />
            <circle cx="30" cy="15" r="1" fill="currentColor" opacity="0.8" />
            <circle cx="10" cy="25" r="1" fill="currentColor" opacity="0.8" />
            <circle cx="30" cy="35" r="1" fill="currentColor" opacity="0.8" />
            <circle cx="10" cy="45" r="1" fill="currentColor" opacity="0.8" />
          </svg>
        </div>
      </div>

      {/* Mystical white aurora pattern */}
      <div className="absolute top-5/6 left-1/5 z-5 opacity-10 sm:opacity-12">
        <div className="relative">
          <svg
            width="96"
            height="24"
            viewBox="0 0 120 30"
            className="animate-gentle-pulse text-white sm:h-30 sm:w-120"
          >
            <path
              d="M0,20 Q30,5 60,15 Q90,25 120,10"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              opacity="0.4"
            />
            <path
              d="M0,22 Q30,7 60,17 Q90,27 120,12"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              opacity="0.3"
            />
            <path
              d="M0,18 Q30,3 60,13 Q90,23 120,8"
              stroke="currentColor"
              strokeWidth="0.8"
              fill="none"
              opacity="0.5"
            />
          </svg>
        </div>
      </div>

      {/* Delicate white snowflake */}
      <div className="absolute top-1/12 right-2/5 z-5 opacity-16 sm:opacity-20">
        <div className="animate-float relative">
          <div className="h-5 w-px bg-white sm:h-6"></div>
          <div className="absolute top-0 left-0 h-px w-5 -translate-x-1/2 bg-white sm:w-6"></div>
          <div className="absolute top-0.5 left-0 h-3.5 w-px rotate-60 bg-white sm:top-1 sm:h-4"></div>
          <div className="absolute top-0.5 left-0 h-3.5 w-px -rotate-60 bg-white sm:top-1 sm:h-4"></div>
          <div className="absolute top-0 left-0 h-1.5 w-px translate-y-1 rotate-30 bg-white sm:h-2"></div>
          <div className="absolute top-0 left-0 h-1.5 w-px translate-y-1 -rotate-30 bg-white sm:h-2"></div>
        </div>
      </div>

      {/* Elegant white web pattern */}
      <div className="absolute bottom-2/5 left-1/12 z-5 opacity-11 sm:opacity-14">
        <div className="animate-gentle-pulse relative">
          <div className="h-6 w-6 rounded-full border border-white opacity-40 sm:h-8 sm:w-8"></div>
          <div className="absolute top-1/2 left-1/2 h-px w-12 -translate-x-1/2 -translate-y-1/2 bg-white sm:w-16"></div>
          <div className="absolute top-1/2 left-1/2 h-12 w-px -translate-x-1/2 -translate-y-1/2 bg-white sm:h-16"></div>
          <div className="absolute top-1/2 left-1/2 h-px w-9 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white sm:w-12"></div>
          <div className="absolute top-1/2 left-1/2 h-9 w-px -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white sm:h-12"></div>
          <div className="absolute top-0 left-3 h-1.5 w-1.5 rounded-full border border-white opacity-60 sm:left-4 sm:h-2 sm:w-2"></div>
          <div className="absolute bottom-0 left-3 h-1.5 w-1.5 rounded-full border border-white opacity-60 sm:left-4 sm:h-2 sm:w-2"></div>
          <div className="absolute top-3 left-0 h-1.5 w-1.5 rounded-full border border-white opacity-60 sm:top-4 sm:h-2 sm:w-2"></div>
          <div className="absolute top-3 right-0 h-1.5 w-1.5 rounded-full border border-white opacity-60 sm:top-4 sm:h-2 sm:w-2"></div>
        </div>
      </div>

      {/* Minimalist white cross pattern */}
      <div className="absolute top-3/4 right-1/4 z-5 opacity-20 sm:opacity-25">
        <div className="animate-gentle-pulse relative">
          <div className="h-6 w-px bg-white sm:h-8"></div>
          <div className="absolute top-2.5 left-2.5 h-px w-6 -translate-x-1/2 bg-white sm:top-3.5 sm:left-3.5 sm:w-8"></div>
        </div>
      </div>

      {/* Delicate white flower pattern */}
      <div className="absolute top-1/5 left-2/3 z-5 opacity-12 sm:opacity-16">
        <div className="animate-float relative">
          <div className="h-1.5 w-1.5 rounded-full bg-white opacity-60 sm:h-2 sm:w-2"></div>
          <div className="absolute top-0 left-0 h-3 w-0.5 -translate-x-1/2 -translate-y-1 rounded-full bg-white opacity-40 sm:h-4 sm:w-1"></div>
          <div className="absolute top-0 left-0 h-0.5 w-3 -translate-x-1 -translate-y-1/2 rounded-full bg-white opacity-40 sm:h-1 sm:w-4"></div>
          <div className="absolute top-0 left-0 h-2.5 w-0.5 -translate-x-1/2 translate-y-1 rotate-45 rounded-full bg-white opacity-30 sm:h-3 sm:w-1"></div>
          <div className="absolute top-0 left-0 h-0.5 w-2.5 translate-x-1 -translate-y-1/2 rotate-45 rounded-full bg-white opacity-30 sm:h-1 sm:w-3"></div>
        </div>
      </div>

      {/* Crystalline white structure */}
      <div className="absolute bottom-1/5 left-3/4 z-5 opacity-12 sm:opacity-14">
        <div className="animate-gentle-pulse relative">
          <div className="h-5 w-5 rotate-45 transform border border-white sm:h-6 sm:w-6"></div>
          <div className="absolute top-1/2 left-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rotate-45 transform border border-white sm:h-4 sm:w-4"></div>
          <div className="absolute top-1/2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rotate-45 transform border border-white sm:h-2 sm:w-2"></div>
          <div className="absolute top-0 left-1/2 h-px w-5 -translate-x-1/2 bg-white sm:w-6"></div>
          <div className="absolute bottom-0 left-1/2 h-px w-5 -translate-x-1/2 bg-white sm:w-6"></div>
        </div>
      </div>

      {/* Elegant white starbursts */}
      <div className="absolute top-1/8 left-1/8 z-5 opacity-14 sm:opacity-18">
        <div className="animate-gentle-pulse relative">
          <div className="h-px w-6 bg-white sm:w-8"></div>
          <div className="absolute top-0 left-3 h-6 w-px -translate-x-1/2 bg-white sm:left-4 sm:h-8"></div>
          <div className="absolute top-0 left-3 h-px w-4.5 -translate-x-1/2 rotate-45 bg-white sm:left-4 sm:w-6"></div>
          <div className="absolute top-0 left-3 h-4.5 w-px -translate-x-1/2 rotate-45 bg-white sm:left-4 sm:h-6"></div>
          <div className="absolute top-0 left-3 h-px w-4.5 -translate-x-1/2 -rotate-45 bg-white sm:left-4 sm:w-6"></div>
          <div className="absolute top-0 left-3 h-4.5 w-px -translate-x-1/2 -rotate-45 bg-white sm:left-4 sm:h-6"></div>
        </div>
      </div>

      {/* Floating white DNA helix pattern */}
      <div className="absolute right-1/5 bottom-1/8 z-5 opacity-12 sm:opacity-15">
        <div className="animate-float relative">
          <svg
            width="32"
            height="48"
            viewBox="0 0 40 60"
            className="text-white sm:h-60 sm:w-40"
          >
            <path
              d="M10,5 Q20,15 30,5"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M10,15 Q20,25 30,15"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              opacity="0.5"
            />
            <path
              d="M10,25 Q20,35 30,25"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M10,35 Q20,45 30,35"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              opacity="0.5"
            />
            <path
              d="M10,45 Q20,55 30,45"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              opacity="0.6"
            />
            <circle cx="10" cy="5" r="1" fill="currentColor" opacity="0.8" />
            <circle cx="30" cy="15" r="1" fill="currentColor" opacity="0.8" />
            <circle cx="10" cy="25" r="1" fill="currentColor" opacity="0.8" />
            <circle cx="30" cy="35" r="1" fill="currentColor" opacity="0.8" />
            <circle cx="10" cy="45" r="1" fill="currentColor" opacity="0.8" />
          </svg>
        </div>
      </div>

      {/* Mystical white aurora pattern */}
      <div className="absolute top-5/6 left-1/5 z-5 opacity-10 sm:opacity-12">
        <div className="relative">
          <svg
            width="96"
            height="24"
            viewBox="0 0 120 30"
            className="animate-gentle-pulse text-white sm:h-30 sm:w-120"
          >
            <path
              d="M0,20 Q30,5 60,15 Q90,25 120,10"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              opacity="0.4"
            />
            <path
              d="M0,22 Q30,7 60,17 Q90,27 120,12"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              opacity="0.3"
            />
            <path
              d="M0,18 Q30,3 60,13 Q90,23 120,8"
              stroke="currentColor"
              strokeWidth="0.8"
              fill="none"
              opacity="0.5"
            />
          </svg>
        </div>
      </div>

      {/* Delicate white snowflake */}
      <div className="absolute top-1/12 right-2/5 z-5 opacity-16 sm:opacity-20">
        <div className="animate-float relative">
          <div className="h-5 w-px bg-white sm:h-6"></div>
          <div className="absolute top-0 left-0 h-px w-5 -translate-x-1/2 bg-white sm:w-6"></div>
          <div className="absolute top-0.5 left-0 h-3.5 w-px rotate-60 bg-white sm:top-1 sm:h-4"></div>
          <div className="absolute top-0.5 left-0 h-3.5 w-px -rotate-60 bg-white sm:top-1 sm:h-4"></div>
          <div className="absolute top-0 left-0 h-1.5 w-px translate-y-1 rotate-30 bg-white sm:h-2"></div>
          <div className="absolute top-0 left-0 h-1.5 w-px translate-y-1 -rotate-30 bg-white sm:h-2"></div>
        </div>
      </div>

      {/* Elegant white web pattern */}
      <div className="absolute bottom-2/5 left-1/12 z-5 opacity-11 sm:opacity-14">
        <div className="animate-gentle-pulse relative">
          <div className="h-6 w-6 rounded-full border border-white opacity-40 sm:h-8 sm:w-8"></div>
          <div className="absolute top-1/2 left-1/2 h-px w-12 -translate-x-1/2 -translate-y-1/2 bg-white sm:w-16"></div>
          <div className="absolute top-1/2 left-1/2 h-12 w-px -translate-x-1/2 -translate-y-1/2 bg-white sm:h-16"></div>
          <div className="absolute top-1/2 left-1/2 h-px w-9 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white sm:w-12"></div>
          <div className="absolute top-1/2 left-1/2 h-9 w-px -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white sm:h-12"></div>
          <div className="absolute top-0 left-3 h-1.5 w-1.5 rounded-full border border-white opacity-60 sm:left-4 sm:h-2 sm:w-2"></div>
          <div className="absolute bottom-0 left-3 h-1.5 w-1.5 rounded-full border border-white opacity-60 sm:left-4 sm:h-2 sm:w-2"></div>
          <div className="absolute top-3 left-0 h-1.5 w-1.5 rounded-full border border-white opacity-60 sm:top-4 sm:h-2 sm:w-2"></div>
          <div className="absolute top-3 right-0 h-1.5 w-1.5 rounded-full border border-white opacity-60 sm:top-4 sm:h-2 sm:w-2"></div>
        </div>
      </div>

      {/* Header/Navbar */}
      <nav className="relative z-50 w-full px-4 py-6 sm:px-6 sm:py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo - Larger mobile sizing */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Image
              src="/logo.png"
              alt="EVO2 Logo"
              width={50}
              height={50}
              className="rounded-xl shadow-lg sm:h-[60px] sm:w-[60px]"
            />
            <span className="text-2xl font-light tracking-wide sm:text-3xl md:text-3xl">
              EVO2
            </span>
          </div>

          {/* Navigation Menu */}
          <div className="hidden items-center space-x-6 md:flex lg:space-x-8">
            {/* Auth Buttons */}
            {userId ? (
              <Link href="/main">
                <Button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-white via-gray-50 to-white px-5 py-2 text-sm font-medium text-black shadow-lg transition-all duration-300 lg:px-6 lg:py-2.5 lg:text-base">
                  <span className="relative z-10 flex items-center gap-1.5">
                    Dashboard
                    <svg
                      className="h-3 w-3 lg:h-4 lg:w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-cyan-600/10 to-blue-600/10 opacity-0"></div>
                </Button>
              </Link>
            ) : (
              <div className="flex items-center space-x-3 lg:space-x-4">
                <Link href="/sign-in">
                  <Button
                    variant="outline"
                    className="group relative overflow-hidden rounded-full border border-white/30 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 lg:px-5 lg:py-2.5 lg:text-base"
                  >
                    <span className="relative z-10 flex items-center gap-1.5">
                      Sign In
                      <svg
                        className="h-3 w-3 lg:h-4 lg:w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013 3v1"
                        />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 opacity-0"></div>
                  </Button>
                </Link>
                <Link href="/sign-up">
                  <Button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-white via-gray-50 to-white px-5 py-2 text-sm font-semibold text-black shadow-lg transition-all duration-300 lg:px-6 lg:py-2.5 lg:text-base">
                    <span className="relative z-10 flex items-center gap-1.5">
                      Sign Up
                      <svg
                        className="h-3 w-3 lg:h-4 lg:w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                        />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-cyan-600/10 to-blue-600/10 opacity-0"></div>
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu - Larger sizing */}
          <div className="md:hidden">
            {userId ? (
              <Link href="/main">
                <Button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-white via-gray-50 to-white px-4 py-2 text-xs font-medium text-black shadow-lg transition-all duration-300 sm:px-5 sm:py-2.5 sm:text-sm">
                  <span className="relative z-10 flex items-center gap-1">
                    Dashboard
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </Button>
              </Link>
            ) : (
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Link href="/sign-in">
                  <Button
                    variant="outline"
                    className="group relative overflow-hidden rounded-full border border-white/30 bg-white/5 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md transition-all duration-300 sm:px-4 sm:py-2 sm:text-sm"
                  >
                    <span className="relative z-10 flex items-center gap-1">
                      Sign In
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013 3v1"
                        />
                      </svg>
                    </span>
                  </Button>
                </Link>
                <Link href="/sign-up">
                  <Button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-white via-gray-50 to-white px-4 py-1.5 text-xs font-semibold text-black shadow-lg transition-all duration-300 sm:px-5 sm:py-2 sm:text-sm">
                    <span className="relative z-10 flex items-center gap-1">
                      Sign Up
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                        />
                      </svg>
                    </span>
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-10 pb-24 sm:px-6 md:pt-16 md:pb-32">
        <div className="grid min-h-[60vh] items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-20">
          {/* Left side - Text content */}
          <div className="text-center sm:text-left">
            {/* Main Heading - Larger mobile sizing and centered */}
            <h1 className="main-gradient mb-8 text-4xl leading-tight font-normal tracking-tight sm:mb-10 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              <span className="block">Find Variants with</span>
              <span className="mt-2 block font-light italic sm:mt-3">
                EVO2&apos;s AI Analysis
              </span>
            </h1>

            {/* Subtitle - Larger mobile text and centered */}
            <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed font-light text-gray-300 sm:mx-0 sm:mb-12 sm:text-xl md:text-xl">
              Analyze DNA variants with precision AI so you can explore genomic
              insights and get results right the first time.
            </p>
          </div>

          {/* Right side - Video (Larger size) */}
          <div className="relative hidden items-center justify-center lg:flex">
            <div className="relative w-full max-w-xl xl:max-w-2xl">
              {/* Main video container - Increased size */}
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-black/20 shadow-2xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-contain"
                >
                  <source src="/vi.mp4" type="video/mp4" />
                </video>
                {/* Video overlay for better integration */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/30"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile video section - Much larger for mobile */}
        <div className="mt-10 lg:hidden">
          <div className="relative mx-auto aspect-video max-w-md overflow-hidden rounded-xl bg-black/20 shadow-xl sm:max-w-lg md:max-w-xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-contain"
            >
              <source src="/vi.mp4" type="video/mp4" />
            </video>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom section with additional info */}
      <div
        id="learn-more"
        className="relative z-10 mx-auto max-w-7xl px-6 py-20"
      >
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl leading-tight font-light md:text-4xl">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Revolutionizing
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-600 to-white bg-clip-text text-transparent italic">
                Genomic Medicine
              </span>
            </h2>
            <p className="text-lg leading-relaxed font-light text-gray-300 md:text-xl">
              EVO2 represents a paradigm shift in DNA variant analysis. Our
              cutting-edge AI transforms complex genomic data into actionable
              insights, enabling breakthrough discoveries in precision medicine
              and therapeutic development.
            </p>
          </div>

          <div className="space-y-8">
            <div className="rounded-r-lg border-l-2 border-gray-800/50 bg-white/5 p-4 pl-6 backdrop-blur-sm">
              <h3 className="mb-2 text-xl font-light text-gray-400">
                AI-Powered Analysis
              </h3>
              <p className="font-light text-gray-400">
                Advanced machine learning models trained on vast genomic
                datasets to predict variant pathogenicity with unprecedented
                accuracy.
              </p>
            </div>

            <div className="rounded-r-lg border-l-2 border-blue-300/50 bg-white/5 p-4 pl-6 backdrop-blur-sm">
              <h3 className="mb-2 text-xl font-light text-blue-300">
                Clinical Integration
              </h3>
              <p className="font-light text-gray-400">
                Seamlessly integrate with existing clinical workflows and
                databases for comprehensive variant interpretation.
              </p>
            </div>

            <div className="rounded-r-lg border-l-2 border-gray-800/50 bg-white/5 p-4 pl-6 backdrop-blur-sm">
              <h3 className="mb-2 text-xl font-light text-gray-400">
                Research Excellence
              </h3>
              <p className="font-light text-gray-400">
                Accelerate research discoveries with tools designed for genomic
                researchers and computational biologists.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800/50 bg-black/30 py-12 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 flex items-center space-x-3 md:mb-0">
              <Image
                src="/logo.png"
                alt="EVO2 Logo"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="text-lg font-light">EVO2</span>
            </div>

            <div className="flex space-x-8 text-sm text-gray-400">
              <span className="cursor-pointer transition-colors hover:text-white">
                Privacy Policy
              </span>
              <span className="cursor-pointer transition-colors hover:text-white">
                Terms of Service
              </span>
              <span className="cursor-pointer transition-colors hover:text-white">
                Contact
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
