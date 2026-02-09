enrichment-------------------------------------Directory of differential enrichment pathway map
├── Graph--------------------------------------Annotation table for significantly differential metabolites of KEGG
├── *_vs_*_filter_anno.xlsx--------------------Annotation table for significantly differential metabolites of KEGG
├── *_vs_*_KEGG_barplot.*----------------------Differential enrichment classification map of KEGG (png file or pdf file)
├── *_vs_*_KEGG_Enrichment_*.*-----------------Differential enrichment bubble chart of KEGG (png file or pdf file)
├── *_vs_*_KEGG_DA_score_*.*-------------------Differential abundance score map of KEGG(png file or pdf file)
├── *_vs_*_KEGG.xlsx---------------------------Differential Enrichment Statistics Table of KEGG
├── *_vs_*_KEGG_stat.xlsx----------------------Differential Enrichment Classification Statistics Table of KEGG
├── *_vs_*_filter_hmdb.xlsx--------------------HMDB annotation table of significantly different metabolites
├── *_vs_*_SMPDB_primary.xlsx------------------HMDB differential enrichment statistics table
├── *_vs_*_SMPDB_primary_Enrichment.*----------HMDB enrichment diagram of differential metabolites
├── SMP_primary_pathway------------------------HMDB pathway map of differential metabolites
├── *_vs_*_sigDiseasesTable.xlsx---------------Table of association between differential metabolites and diseases 
├── *_vs_*_*_msea.*----------------------------MSEA enrichment analysis graph (Kegg_pathway: KEGG pathway metabolism set, blood: blood disease metabolism set, urine: urine disease metabolism set, CSF means cerebrospinal fluid metabolism set)
├── *_vs_*_*_msea.xlsx-------------------------Table for MSEA enrichment analysis (Kegg_pathway: KEGG pathway metabolism set, blood: blood disease metabolism set, urine: urine disease metabolism set, CSF means cerebrospinal fluid metabolism set)
└── README.txt---------------------------------Document content introduction
Table description:

*_vs_*_filter_anno.xlsx
  Index: The ID of metabolites; Compounds: The names of metabolites; Class I: Primary classification of metabolites; Class II: Secondary classification of metabolites; Formula: The chemical formula of metabolites; Level: Substance identification level (1: The substance is identified based on local library; 2: The substance is identified based on public library; 3: The substance is identified based on predicted library or MetDNA.); score: Qualitative score of metabolites; CAS: A unique numerical identification number for a substance; VIP: Variable importance in the projection; P-value: P-value for significance test; P-value: P-value for significance test; FDR: Error detection rate after multiple hypothesis testing validation; Fold_change: The fold change of the two sets of data; Log2FC: Fold change logarithm; Type: Metabolites up or down regulation_replace
  cpd_ID: ID information of metabolites in KEGG database
  kegg_map: KEGG database signal path number

*_vs_*_KEGG.xlsx
  Kegg_pathway: Name of the Pathway
  ko_ID: The ko number of the pathway in the KEGG database
  Sig_compound: The number of significantly differential metabolites annotated to this pathway
  compound: The number of detected metabolites belonging to this pathway
  Sig_compound_all: The number of metabolites that are significantly differential and annotated by KEGG
  compound_all: The number of metabolites annotated by KEGG in all detected metabolites
  IndexList: use ";" to join Index of significantly differential metabolites annotated to this pathway
  CIDList: use "+" to join Index of significantly differential metabolites annotated to this pathway

*_vs_*_KEGG_stat.xlsx
  Kegg_pathway: Name of the Pathway
  ko_ID: The ko number of the pathway in the KEGG database
  Cluter_frequency: The number of significantly different metabolites annotated in this pathway accounts for the proportion of the number of metabolites that are significantly different and annotated by KEGG
  Metabolome_frequency: The number of detected metabolites belonging to this pathway accounts for the number of metabolites annotated by KEGG in all detected metabolites
  P-value: Hypergeometric distribution p-value
  Corrected_P-value: Corrected p-value

*_vs_*_filter_hmdb.xlsx
  Index: The ID of metabolites; Compounds: The names of metabolites; Class I: Primary classification of metabolites; Class II: Secondary classification of metabolites; Formula: The chemical formula of metabolites; Level: Substance identification level (1: The substance is identified based on local library; 2: The substance is identified based on public library; 3: The substance is identified based on predicted library or MetDNA.); score: Qualitative score of metabolites; CAS: A unique numerical identification number for a substance; VIP: Variable importance in the projection; P-value: P-value for significance test; P-value: P-value for significance test; FDR: Error detection rate after multiple hypothesis testing validation; Fold_change: The fold change of the two sets of data; Log2FC: Fold change logarithm; Type: Metabolites up or down regulation
  hmdb_ID: the ID number of the metabolite in the HMDB database; primary_SMPDB_ID: the SMPDB primary pathway number in the HMDB database where the metabolite is located

*_vs_*_SMPDB_primary.xlsx
  N:The number of metabolites annotated by SMPDB primary pathway among all metabolites detected; n: the number of metabolites with significant differences and annotated by SMPDB Primary pathway; m: The number of metabolites belonging to this pathway in detected metabolites; k: The number of differentially significant metabolites annotated in this pathway; DE_Compounds: The metabolites abbreviations with significant differences and annotated by SMPDB Primary pathway; DE_hmdb_ID: The metabolites ID with significant differences annotated by the SMPDB primary pathway in HMDB database; The metabolite color: red indicated that the metabolite content was significantly up-regulated in the experimental group, and green indicated that the metabolite content was significantly down-regulated in the experimental group

*_vs_*_sigDiseasesTable.xlsx
  KeggDiseases: disease association information of metabolites in KEGG database; HmdbDiseases: disease association information of metabolites in HMDB database

*_vs_*_*_msea.xlsx
  name: name of the metabolite set; Total Cmpd: total number of metabolites in the metabolite set; Hits: number of detected metabolites annotated to this metabolite set; P-value: statistical P-value; Holm p: Bonferroni method corrected P-value; FDR: FDR method corrected P-value; foldEnrichment: degree of enrichment, the StatisticQ/Expected Q; hitCompound: metabolite name of the detected metabolite annotated to this metabolite set; member: metabolite name of the metabolite set; reference: reference source of the metabolite set.
