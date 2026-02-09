enrichment-------------------------------------Differential analysis enrichment analysis catalogue
├── Graph--------------------------------------Catalog of differential enrichment pathways
├── *_vs_*_filter_kegg.xlsx--------------------KEGG annotated list of metabolites with significant differences
├── *_vs_*_KEGG_barplot.*----------------------KEGG Differential Enrichment classification map (PNG or PDF file)
├── *_vs_*_KEGG_Enrichment.*-------------------KEGG differential Enrichment bubble map (PNG or PDF file)
├── KEGG_heatmap-------------------------------KEGG pathway differential metabolite clustering heat map catalog (PNG file or PDF file or interactive HTML file)
├── *_vs_*_KEGG_DA_score.xlsx------------------KEGG differential abundance statistical table
├── *_vs_*_KEGG_DA_score.*---------------------KEGG Differential abundance score map (PNG or PDF file)
├── *_vs_*_KEGG.xlsx---------------------------KEGG differential enrichment statistics
├── *_vs_*_KEGG_stat.xlsx----------------------KEGG differential enrichment classification table
├── *_vs_*_KEGG_stat_AddLevel.xlsx-------------KEGG differential enrichment classification table(Add first-level classification information)
└── README.txt---------------------------------Readme documentation
Table description:

*_vs_*_filter_kegg.xlsx
  Index: MetWare ID;Formula: the chemical formula of the compound;Compounds: the names of metabolites;lipidmaps ID: Substance number in the LIPID MAPS database;The N/A values are filled with zeros;VIP value represents the effect of the differences between groups for a particular metabolite in various models and sample groups. It is generally considered that the metabolites with VIP ≥ 1 have significant difference.;Pvalue：Significance test p-value;Type：Metabolites up or down regualation
  cpd_ID：ID information of metabolites in KEGG database
  kegg_map：KEGG database signal path number

*_vs_*_KEGG.xlsx
  Kegg_pathway：Name of path
  ko_ID：Path ko number in KEGG database
  Sig_compound：The number of differentially significant metabolites released by KEGGNote in this pathway
  compound：The number of metabolites belonging to this pathway in the detected metabolites
  Sig_compound_all：The number of differentially significant metabolites released by KEGGNote
  compound_all：The number of metabolites released by KEGGNote in all metabolites measured
  IndexList：The substances with significantly different metabolites released by Note in this pathway are referred to as "; ".
  CIDList：KEGG database numbers of significantly different metabolites released by Note in this pathway were connected with "+"

*_vs_*_KEGG_stat.xlsx
  Kegg_pathway:Name of path
  ko_ID:Path ko number in KEGG database
  Cluter_frequency:In this pathway, the number of metabolites with significant difference released by Note accounted for the number of metabolites with significant difference released by KEGGNote
  Metabolome_frequency：The number of metabolites belonging to this pathway accounted for the number of metabolites released by KEGGNote in all detected metabolites
  P-value：Hypergeometric distribution p values
  Corrected_P-value：Corrected P-value
