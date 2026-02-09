*_vs_*-----------------------------------------Corresponding group difference analysis result directory
├── *_vs_*_filter.xlsx-------------------------Differential metabolites corresponding to group screening
├── *_vs_*_info.xlsx---------------------------Corresponding grouping of all metabolite information
├── enrichment-------------------------------------Differential analysis enrichment analysis catalogue
│   ├── Graph--------------------------------------Catalog of differential enrichment pathways
│   ├── *_vs_*_filter_kegg.xlsx--------------------KEGG annotated list of metabolites with significant differences
│   ├── KEGG_heatmap-------------------------------KEGG pathway differential metabolite clustering heat map catalog (PNG file or PDF file or interactive HTML file)
│   ├── *_vs_*_KEGG.xlsx---------------------------KEGG differential enrichment statistics
│   ├── *_vs_*_KEGG_stat.xlsx----------------------KEGG differential enrichment classification table
│   ├── *_vs_*_KEGG_stat_AddLevel.xlsx-------------KEGG differential enrichment classification table(Add first-level classification information)
│   └── README.txt---------------------------------Readme documentation
└── README.txt---------------------------------Readme documentation
Table description:

*_vs_*_filter.xlsx
  Index: MetWare ID;Compounds: the names of metabolites;Class: English Classification of Substances;The N/A values are filled with zeros;Fold_Change：Multiple of difference (Inf indicates infinity, since Fold_Change = mean in the experimental group/control group, and when the control group average is 0, Fold_Change is infinite, Inf indicates it);Log2FC: The difference multiple takes the logarithm base 2 (Inf is infinite, so is Log2FC when Fold_Change is infinite, -INF is negative infinity, and Log2FC when Fold_Change is 0);Type：Metabolites up or down regualation

*_vs_*_info.xlsx 
  Index: MetWare ID;Compounds: the names of metabolites;Class: English Classification of Substances;The N/A values are filled with zeros;Fold_Change：Multiple of difference (Inf indicates infinity, since Fold_Change = mean in the experimental group/control group, and when the control group average is 0, Fold_Change is infinite, Inf indicates it);Log2FC: The difference multiple takes the logarithm base 2 (Inf is infinite, so is Log2FC when Fold_Change is infinite, -INF is negative infinity, and Log2FC when Fold_Change is 0);Type：Metabolites up or down regualation

Note:

Grouping for difference analysis, if one or two groups have less than 3 biological replicates. Then, in the difference analysis results, some of the analysis contents cannot be calculated, which will lead to the failure of some of the above results.
  
