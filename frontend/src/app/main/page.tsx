/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/prefer-optional-chain */
"use client";

import { Clapperboard, Search, SearchCodeIcon } from "lucide-react";
import { useEffect, useState } from "react";
import GeneViewer from "~/components/gene-viewer";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import {
  type ChromosomeFromSeach,
  type GeneFromSearch,
  type GenomeAssemblyFromSearch,
  getAvailableGenomes,
  getGenomeChromosomes,
  searchGenes,
} from "~/utils/genome-api";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

type Mode = "browse" | "search";

export default function HomePage() {
  const [genomes, setGenomes] = useState<GenomeAssemblyFromSearch[]>([]);
  const [selectedGenome, setSelectedGenome] = useState<string>("hg38");
  const [chromosomes, setChromosomes] = useState<ChromosomeFromSeach[]>([]);
  const [selectedChromosome, setSelectedChromosome] = useState<string>("chr1");
  const [selectedGene, setSelectedGene] = useState<GeneFromSearch | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<GeneFromSearch[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mode, setMode] = useState<Mode>("search");

  useEffect(() => {
    const fetchGenomes = async () => {
      try {
        setIsLoading(true);
        const data = await getAvailableGenomes();
        if (data.genomes && data.genomes["Human"]) {
          setGenomes(data.genomes["Human"]);
        }
      } catch (err) {
        setError("Failed to load genome data");
      } finally {
        setIsLoading(false);
      }
    };
    fetchGenomes();
  }, []);

  useEffect(() => {
    const fetchChromosomes = async () => {
      try {
        setIsLoading(true);
        const data = await getGenomeChromosomes(selectedGenome);
        setChromosomes(data.chromosomes);
        console.log(data.chromosomes);
        if (data.chromosomes.length > 0) {
          setSelectedChromosome(data.chromosomes[0]!.name);
        }
      } catch (err) {
        setError("Failed to load chromosome data");
      } finally {
        setIsLoading(false);
      }
    };
    fetchChromosomes();
  }, [selectedGenome]);

  const performGeneSearch = async (
    query: string,
    genome: string,
    filterFn?: (gene: GeneFromSearch) => boolean,
  ) => {
    try {
      setIsLoading(true);
      const data = await searchGenes(query, genome);
      const results = filterFn ? data.results.filter(filterFn) : data.results;

      setSearchResults(results);
    } catch (err) {
      setError("Faield to search genes");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!selectedChromosome || mode !== "browse") return;
    performGeneSearch(
      selectedChromosome,
      selectedGenome,
      (gene: GeneFromSearch) => gene.chrom === selectedChromosome,
    );
  }, [selectedChromosome, selectedGenome, mode]);

  const handleGenomeChange = (value: string) => {
    setSelectedGenome(value);
    setSearchResults([]);
    setSelectedGene(null);
  };

  const switchMode = (newMode: Mode) => {
    if (newMode === mode) return;

    setSearchResults([]);
    setSelectedGene(null);
    setError(null);

    if (newMode === "browse" && selectedChromosome) {
      performGeneSearch(
        selectedChromosome,
        selectedGenome,
        (gene: GeneFromSearch) => gene.chrom === selectedChromosome,
      );
    }

    setMode(newMode);
  };

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!searchQuery.trim()) return;

    performGeneSearch(searchQuery, selectedGenome);
  };

  const loadBRCA1Example = () => {
    setMode("search");
    setSearchQuery("BRCA1");
    performGeneSearch("BRCA1", selectedGenome);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-100 via-orange-100 to-amber-200">
      {/* Background gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/30 via-red-50/20 to-amber-100/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(255,166,0,0.05),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_0%_300px,rgba(205,133,63,0.08),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_900px_at_50%_-100px,rgba(255,140,0,0.05),transparent)]"></div>

      {/* Header */}
      <header className="relative border-b border-amber-800/10 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <h1 className="text-xl font-light tracking-wide text-amber-900">
                  <span className="font-normal">EVO</span>
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                    2
                  </span>
                </h1>
                <div className="absolute -bottom-1 left-0 h-[2px] w-12 bg-gradient-to-r from-amber-500 to-orange-500"></div>
              </div>
              <span className="text-sm font-light text-amber-900/70">
                Variant Analysis
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/">
                <Button
                  variant="outline"
                  className="border-amber-600/20 text-amber-900 transition-all hover:bg-amber-500/10"
                >
                  Back to Home
                </Button>
              </Link>
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </div>
      </header>

      <main className="relative container mx-auto px-6 py-6">
        {selectedGene ? (
          <GeneViewer
            gene={selectedGene}
            genomeId={selectedGenome}
            onClose={() => setSelectedGene(null)}
          />
        ) : (
          <>
            <Card className="mb-6 border-none bg-white/80 py-0 shadow-sm backdrop-blur-sm">
              <CardHeader className="pt-4 pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-normal text-amber-900/70">
                    Genome Assembly
                  </CardTitle>
                  <div className="text-xs text-amber-900/60">
                    Organism: <span className="font-medium">Human</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-4">
                <Select
                  value={selectedGenome}
                  onValueChange={handleGenomeChange}
                  disabled={isLoading}
                >
                  <SelectTrigger className="h-9 w-full border-amber-600/20">
                    <SelectValue placeholder="Select genome assembly" />
                  </SelectTrigger>
                  <SelectContent>
                    {genomes.map((genome) => (
                      <SelectItem key={genome.id} value={genome.id}>
                        {genome.id} - {genome.name}
                        {genome.active ? " (active)" : ""}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedGenome && (
                  <p className="mt-2 text-xs text-amber-900/60">
                    {
                      genomes.find((genome) => genome.id === selectedGenome)
                        ?.sourceName
                    }
                  </p>
                )}
              </CardContent>
            </Card>

            <Card className="mt-6 gap-0 border-none bg-white py-0 shadow-sm">
              <CardHeader className="pt-4 pb-2">
                <CardTitle className="text-sm font-normal text-amber-900/70">
                  Browse
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <Tabs
                  value={mode}
                  onValueChange={(value) => switchMode(value as Mode)}
                >
                  <TabsList className="mb-4 bg-amber-50">
                    <TabsTrigger
                      className="data-[state=active]:bg-white data-[state=active]:text-amber-900"
                      value="search"
                    >
                      Search Genes
                    </TabsTrigger>
                    <TabsTrigger
                      className="data-[state=active]:bg-white data-[state=active]:text-amber-900"
                      value="browse"
                    >
                      Browse Chromosomes
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="search" className="mt-0">
                    <div className="space-y-4">
                      <form
                        onSubmit={handleSearch}
                        className="flex flex-col gap-3 sm:flex-row"
                      >
                        <div className="relative flex-1">
                          <Input
                            type="text"
                            placeholder="Enter gene symbol or name"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="h-9 border-amber-600/20 pr-10"
                          />
                          <Button
                            type="submit"
                            className="absolute top-0 right-0 h-full cursor-pointer rounded-l-none bg-amber-900 text-white hover:bg-amber-800"
                            size="icon"
                            disabled={isLoading || !searchQuery.trim()}
                          >
                            <Search className="h-4 w-4" />
                            <span className="sr-only">Search</span>
                          </Button>
                        </div>
                      </form>
                      <Button
                        variant="link"
                        className="h-auto cursor-pointer p-0 text-amber-600 hover:text-amber-500"
                        onClick={loadBRCA1Example}
                      >
                        Try BRCA1 example
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="browse" className="mt-0">
                    <div className="max-h-[150px] overflow-y-auto pr-1">
                      <div className="flex flex-wrap gap-2">
                        {chromosomes.map((chrom) => (
                          <Button
                            key={chrom.name}
                            variant="outline"
                            size="sm"
                            className={`h-8 cursor-pointer border-amber-600/20 hover:bg-amber-50 hover:text-amber-900 ${selectedChromosome === chrom.name ? "bg-amber-50 text-amber-900" : ""}`}
                            onClick={() => setSelectedChromosome(chrom.name)}
                          >
                            {chrom.name}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                {isLoading && (
                  <div className="flex h-48 items-center justify-center">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-amber-600/20 border-t-amber-600"></div>
                  </div>
                )}

                {error && (
                  <div className="mb-6 rounded-lg bg-red-50/80 p-4 backdrop-blur-sm">
                    <p className="text-sm text-red-600">{error}</p>
                  </div>
                )}

                {searchResults.length > 0 && !isLoading && (
                  <div className="mt-6">
                    <div className="mb-2">
                      <h4 className="text-xs font-normal text-amber-900/70">
                        {mode === "search" ? (
                          <>
                            Search Results:{" "}
                            <span className="font-medium text-amber-900">
                              {searchResults.length} genes
                            </span>
                          </>
                        ) : (
                          <>
                            Genes on {selectedChromosome}:{" "}
                            <span className="font-medium text-amber-900">
                              {searchResults.length} found
                            </span>
                          </>
                        )}
                      </h4>
                    </div>

                    <div className="overflow-hidden rounded-md border border-amber-600/5">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-amber-50 hover:bg-amber-100">
                            <TableHead className="text-xs font-normal text-amber-900/70">
                              Symbol
                            </TableHead>
                            <TableHead className="text-xs font-normal text-amber-900/70">
                              Name
                            </TableHead>
                            <TableHead className="text-xs font-normal text-amber-900/70">
                              Location
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {searchResults.map((gene, index) => (
                            <TableRow
                              key={`${gene.symbol}-${index}`}
                              className="cursor-pointer border-b border-amber-600/5 hover:bg-amber-100"
                              onClick={() => setSelectedGene(gene)}
                            >
                              <TableCell className="py-2 font-medium text-amber-900">
                                {gene.symbol}
                              </TableCell>
                              <TableCell className="py-2 font-medium text-amber-900">
                                {gene.name}
                              </TableCell>
                              <TableCell className="py-2 font-medium text-amber-900">
                                {gene.chrom}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                )}

                {!isLoading && !error && searchResults.length === 0 && (
                  <div className="flex h-48 flex-col items-center justify-center text-center text-amber-400">
                    <Search className="mb-4 h-10 w-10 text-amber-400" />
                    <p className="text-sm leading-relaxed">
                      {mode === "search"
                        ? "Enter a gene or symbol and click search"
                        : selectedChromosome
                          ? "No genes found on this chromosome"
                          : "Select a chromosome to view genes"}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </>
        )}
      </main>
    </div>
  );
}
