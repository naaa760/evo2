import Link from "next/link";
import { Button } from "~/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function LandingPage() {
  // Check if user is authenticated
  const { userId } = await auth();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-orange-300 to-amber-400">
      {/* Rich gradient overlays for particle effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/30 via-red-100/20 to-amber-800/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(255,166,0,0.1),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_0%_300px,rgba(205,133,63,0.15),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_900px_at_50%_-100px,rgba(255,140,0,0.1),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_80%_80%,rgba(180,83,9,0.07),transparent)]"></div>

      {/* Background Images with higher opacity to be clearly visible */}
      <div className="absolute top-0 right-0 -z-10 opacity-60">
        <Image
          src="/images/dn.png"
          alt="DNA Structure"
          width={600}
          height={600}
          className="object-contain"
          priority
        />
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-60">
        <Image
          src="/images/dn1.png"
          alt="DNA Helix"
          width={500}
          height={500}
          className="object-contain"
          priority
        />
      </div>

      <div className="relative container mx-auto px-6 py-12">
        <div className="flex items-center justify-between">
          <div className="relative">
            <h1 className="text-2xl font-light tracking-wide text-amber-950">
              <span className="font-semibold">EVO</span>
              <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                2
              </span>
            </h1>
            <div className="absolute -bottom-1 left-0 h-[3px] w-16 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-400"></div>
          </div>
          <div className="flex gap-4">
            {userId ? (
              <Link href="/main">
                <Button className="bg-gradient-to-r from-amber-600 to-orange-500 text-white transition-all hover:from-amber-700 hover:to-orange-600">
                  Go to Application
                </Button>
              </Link>
            ) : (
              <>
                <Link href="/sign-in">
                  <Button
                    variant="outline"
                    className="border-amber-600/20 text-amber-900 transition-all hover:bg-amber-500/10"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href="/sign-up">
                  <Button className="bg-gradient-to-r from-amber-600 to-orange-500 text-white transition-all hover:from-amber-700 hover:to-orange-600">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>

        <div className="relative mt-24 flex flex-col items-center text-center">
          <h1 className="fs-64 font-title text-6xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-amber-950 via-yellow-600 to-amber-950 bg-clip-text text-transparent">
              EVO
            </span>
            <span className="bg-gradient-to-r from-amber-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              2
            </span>
            <span className="bg-gradient-to-r from-amber-950 via-yellow-600 to-amber-950 bg-clip-text text-transparent">
              {" "}
              Variant Analysis
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg font-medium text-amber-950/80">
            A powerful platform for predicting the pathogenicity of single
            nucleotide variants using state-of-the-art AI modeling.
          </p>

          <div className="mt-12">
            {userId ? (
              <Link href="/main">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-600 to-orange-500 text-white transition-all hover:from-amber-700 hover:to-orange-600"
                >
                  Launch Application
                </Button>
              </Link>
            ) : (
              <Link href="/sign-in">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-600 to-orange-500 text-white transition-all hover:from-amber-700 hover:to-orange-600"
                >
                  Get Started
                </Button>
              </Link>
            )}
          </div>
        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-gradient-to-br from-white/60 to-amber-50/60 p-8 shadow-lg backdrop-blur-sm transition-all hover:from-white/70 hover:to-amber-50/70">
            <h3 className="mb-3 text-xl font-semibold text-amber-950">
              Browse Genomes
            </h3>
            <p className="text-amber-900/70">
              Select from various genome assemblies and browse their chromosomes
              to find genes of interest.
            </p>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-white/60 to-amber-50/60 p-8 shadow-lg backdrop-blur-sm transition-all hover:from-white/70 hover:to-amber-50/70">
            <h3 className="mb-3 text-xl font-semibold text-amber-950">
              Predict Variants
            </h3>
            <p className="text-amber-900/70">
              Use the EVO2 large language model to predict the pathogenicity of
              single nucleotide variants.
            </p>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-white/60 to-amber-50/60 p-8 shadow-lg backdrop-blur-sm transition-all hover:from-white/70 hover:to-amber-50/70">
            <h3 className="mb-3 text-xl font-semibold text-amber-950">
              Compare with ClinVar
            </h3>
            <p className="text-amber-900/70">
              Compare AI predictions against existing ClinVar classifications
              for known variants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
