## 🧬 EVO2: DNA Variant Analysis Platform

<br/>

EVO2 is a sleek, intuitive web app that turns tiny DNA tweaks into powerful insights. Just search your gene, let our AI predict if a variant is harmful or harmless, and instantly see how it compares to real-world cases. In minutes, EVO2 makes the mysteries of your genome crystal clear—so researchers and clinicians can focus on what matters most: better health.

<br/>
<br/>

![image](https://github.com/user-attachments/assets/43b4d6a3-16a0-4d01-bb93-3f37f34dba31)


![image](https://github.com/user-attachments/assets/10a534dc-5279-4b84-9cab-c88e32a4f4a6)

![image](https://github.com/user-attachments/assets/2b42f940-3399-4780-a54e-abeee24675ca)


https://evo2-sage.vercel.app/

‼️Notice:  https://drive.google.com/file/d/1R7eAZUVClgFQsG_9JoDlVecanAU14S9c/view


- I have created a demo video for this project because it uses Modal AI, which offers only a 30-day free tier. Since the free access expires quickly because of calling the API to fetch the data, I recorded the video to show how the project works. You can still run the project locally on your machine by following the provided instructions.
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
