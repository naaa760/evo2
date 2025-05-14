import Link from "next/link";
import { Button } from "~/components/ui/button";
import { auth } from "@clerk/nextjs/server";

export default async function LandingPage() {
  // Check if user is authenticated
  const { userId } = await auth();

  return (
    <div className="min-h-screen bg-[#e9eeea]">
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-between">
          <div className="relative">
            <h1 className="text-xl font-light tracking-wide text-[#3c4f3d]">
              <span className="font-normal">EVO</span>
              <span className="text-[#de8246]">2</span>
            </h1>
            <div className="absolute -bottom-1 left-0 h-[2px] w-12 bg-[#de8246]"></div>
          </div>
          <div className="flex gap-4">
            {userId ? (
              <>
                <Link href="/main">
                  <Button className="bg-[#3c4f3d] text-white hover:bg-[#3c4f3d]/90">
                    Go to Application
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link href="/sign-in">
                  <Button
                    variant="outline"
                    className="border-[#3c4f3d]/20 text-[#3c4f3d] hover:bg-[#3c4f3d]/10"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href="/sign-up">
                  <Button className="bg-[#3c4f3d] text-white hover:bg-[#3c4f3d]/90">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>

        <div className="mt-24 flex flex-col items-center text-center">
          <h1 className="text-5xl font-light tracking-wide text-[#3c4f3d]">
            <span className="font-normal">EVO</span>
            <span className="text-[#de8246]">2</span>
            <span className="font-normal"> Variant Analysis</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-[#3c4f3d]/80">
            A powerful platform for predicting the pathogenicity of single
            nucleotide variants using state-of-the-art AI modeling.
          </p>

          <div className="mt-12">
            {userId ? (
              <Link href="/main">
                <Button
                  size="lg"
                  className="bg-[#3c4f3d] text-white hover:bg-[#3c4f3d]/90"
                >
                  Launch Application
                </Button>
              </Link>
            ) : (
              <Link href="/sign-in">
                <Button
                  size="lg"
                  className="bg-[#3c4f3d] text-white hover:bg-[#3c4f3d]/90"
                >
                  Get Started
                </Button>
              </Link>
            )}
          </div>
        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-medium text-[#3c4f3d]">
              Browse Genomes
            </h3>
            <p className="text-[#3c4f3d]/70">
              Select from various genome assemblies and browse their chromosomes
              to find genes of interest.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-medium text-[#3c4f3d]">
              Predict Variants
            </h3>
            <p className="text-[#3c4f3d]/70">
              Use the EVO2 large language model to predict the pathogenicity of
              single nucleotide variants.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-medium text-[#3c4f3d]">
              Compare with ClinVar
            </h3>
            <p className="text-[#3c4f3d]/70">
              Compare AI predictions against existing ClinVar classifications
              for known variants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
