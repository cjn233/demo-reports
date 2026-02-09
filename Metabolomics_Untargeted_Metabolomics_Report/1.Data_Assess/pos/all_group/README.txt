all_group--------------------------------------All sample information
├── *_all_sample_data_raw.xlsx-----------------Metabolite information table for all samples (The data before missing value filling and CV filtering)
├── *_all_sample_data.xlsx---------------------Metabolite information table for all samples
├── *_all_sample_correlation.xlsx--------------Table of Pearson correlation coefficients for all samples
└── README.txt---------------------------------Document content introduction
Table description:

all_sample_data.xlsx
  Index: The ID of metabolites; Compounds: The names of metabolites; Class I: Primary classification of metabolites; Class II: Secondary classification of metabolites; Formula: The chemical formula of metabolites; Q1 (Da): The molecular weight of the precursor ions after the addition of ions by electrospray ion source; RT (min): Retention time; Mass error: Deviation between measured value and theoretical value of the same substance Q1; Level: Substance identification level (1: The substance is identified based on local library; 2: The substance is identified based on public library; 3: The substance is identified based on predicted library or MetDNA.); score: Qualitative score of metabolites; LC mode: Chromatographic column type, RP is reverse phase chromatographic column; CAS: A unique numerical identification number for a substance; cpd_ID: ID information of metabolites in KEGG database; kegg_map: KEGG database pathway number; Other columns: relative content of samples

all_sample_correlation.xlsx
  Rows and columns are sample names; the values in the table are Pearson correlation coefficients between samples

hmdb_anno.xlsx
  hmdb_ID: the ID number of the metabolite in the HMDB database; primary_SMPDB_ID: the SMPDB primary pathway number in the HMDB database where the metabolite is located
