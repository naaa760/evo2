## EVO2: DNA Variant Analysis Platform

<br/>

EVO2 is a sleek, intuitive web app that turns tiny DNA tweaks into powerful insights. Just search your gene, let our AI predict if a variant is harmful or harmless, and instantly see how it compares to real-world cases. In minutes, EVO2 makes the mysteries of your genome crystal clear—so researchers and clinicians can focus on what matters most: better health.

<br/>
<br/>

![image](https://github.com/user-attachments/assets/fe24ac57-e588-408e-9edd-ba2eba9a0a80)


https://evo2-sage.vercel.app/

‼️Notice:

- I have created a demo video for this project because it uses Modal AI, which offers only a 2-day free tier. Since the free access expires quickly, I recorded the video to show how the project works. You can still run the project locally on your machine by following the provided instructions.
EVO2 is an advanced AI-powered platform for predicting the pathogenicity of single nucleotide variants in DNA. It helps researchers and healthcare professionals determine whether tiny changes in a person's genetic code are likely to cause diseases.

just add this env in the frontend file 

- NEXT_PUBLIC_ANALYZE_SINGLE_VARIANT_BASE_URL=""

- NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
- CLERK_SECRET_KEY=""

- MODAL_TOKEN_ID = ""
- MODAL_TOKEN_SECRET = ""

## Features

- Genome Browser: Search and navigate human genome assemblies and chromosomes
  
- Gene Explorer: Examine DNA sequences of specific genes of interest

- Variant Analysis: AI-powered prediction of variant pathogenicity

- ClinVar Integration: Compare variants against the ClinVar database of known variants

- Secure Authentication: Protected access with user authentication


## Technologies

## Frontend

- Next.js
- React
- TypeScript
- TailwindCSS
- Clerk Authentication

## Backend

- FastAPI
- Python
- Modal (for AI deployment)
- UCSC Genome Browser API
- NCBI APIs (for gene and variant data)


## How to Use


- Sign in to your account or create a new one
- Select a genome assembly from the dropdown menu
- Search for a gene by name or symbol, or browse chromosomes
- Select a gene to view its DNA sequence
- Click on a position in the sequence to analyze a variant
- Enter an alternative nucleotide to get an AI prediction of its pathogenicity
- View known variants from ClinVar for comparison
