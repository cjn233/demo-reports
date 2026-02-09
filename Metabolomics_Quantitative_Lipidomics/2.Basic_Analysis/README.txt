2.Basic_Analysis------------------------------Data analysis catalog
├── Difference_analysis----------------------------Difference analysis results directory
│   ├── *_vs_*-----------------------------------------Corresponding group difference analysis result directory
│   │   ├── *_vs_*_filter.xlsx-------------------------Differential metabolites corresponding to group screening
│   │   ├── *_vs_*_info.xlsx---------------------------Corresponding grouping of all metabolite information
│   │   ├── enrichment-------------------------------------Differential analysis enrichment analysis catalogue
│   │   │   ├── Graph--------------------------------------Catalog of differential enrichment pathways
│   │   │   ├── *_vs_*_filter_kegg.xlsx--------------------KEGG annotated list of metabolites with significant differences
│   │   │   ├── *_vs_*_KEGG_barplot.*----------------------KEGG Differential Enrichment classification map (PNG or PDF file)
│   │   │   ├── *_vs_*_KEGG_Enrichment.*-------------------KEGG differential Enrichment bubble map (PNG or PDF file)
│   │   │   ├── KEGG_heatmap-------------------------------KEGG pathway differential metabolite clustering heat map catalog (PNG file or PDF file or interactive HTML file)
│   │   │   ├── *_vs_*_KEGG_DA_score.xlsx------------------KEGG differential abundance statistical table
│   │   │   ├── *_vs_*_KEGG_DA_score.*---------------------KEGG Differential abundance score map (PNG or PDF file)
│   │   │   ├── *_vs_*_KEGG.xlsx---------------------------KEGG differential enrichment statistics
│   │   │   ├── *_vs_*_KEGG_stat.xlsx----------------------KEGG differential enrichment classification table
│   │   │   ├── *_vs_*_KEGG_stat_AddLevel.xlsx-------------KEGG differential enrichment classification table(Add first-level classification information)
│   │   │   └── README.txt---------------------------------Readme documentation
│   │   ├── pca--------------------------------------------Differential analysis PCA analysis directory
│   │   │   ├── *_vs_*_pca3D.*-----------------------------Three-dimensional PCA results of corresponding grouped metabolites
│   │   │   ├── *_vs_*_pca_components.xlsx-----------------Results of PCA components of metabolites were obtained
│   │   │   ├── *_vs_*_pca_variance_proportion.xlsx--------Statistical results of PCA components of corresponding metabolites were obtained
│   │   │   ├── *_vs_*_pca.*-------------------------------PCA diagram of corresponding grouping metabolites
│   │   │   ├── *_vs_*_pca_ellipse.*-----------------------PCA plots of corresponding grouping metabolites (with confidence intervals of more than 3 samples in each group)
│   │   │   ├── *_vs_*_pcaVar.*----------------------------Explicable variation of the first five principal components of PCA corresponding to grouped metabolites
│   │   │   └── README.txt---------------------------------Readme documentation
│   │   ├── oPLS-------------------------------------------Difference analysis OPLS analysis directory
│   │   │   ├── *_vs_*_oPLS_model.*------------------------Corresponding grouping oPLSDA model outline diagram
│   │   │   ├── *_vs_*_oPLS_permutation.*------------------Corresponding grouping oPLSDA simulation verification diagram
│   │   │   ├── *_vs_*_oPLS_scoreplot.*--------------------Corresponding grouping oPLSDA score chart
│   │   │   ├── *_vs_*_oPLS_splot*-------------------------Corresponding group oPLSDA S-plot
│   │   │   └── README.txt---------------------------------Readme documentation
│   │   ├── heatmap----------------------------------------Differential analysis heat map analysis catalogue
│   │   │   ├── *_vs_*_heatmap_row_cluster*.*--------------Cluster heat map of metabolite content of corresponding group difference (cluster of metabolites)
│   │   │   ├── *_vs_*_heatmap_col-row_cluster*.*----------Clustering heat map of metabolite content of corresponding group difference (clustering for both metabolites and samples)
│   │   │   ├── *_vs_*_heatmap_class*.*--------------------Heat map of corresponding Group differential metabolite content (by metabolite classification)
│   │   │   └── README.txt---------------------------------Readme documentation
│   │   ├── TopFcBarMetabolites----------------------------Diff analysis diFF histogram analysis directory
│   │   │   ├── *_vs_*_TopFcBarMetabolites*.*--------------Histogram of the top 20 substances in the corresponding group differential metabolites
│   │   │   └── README.txt---------------------------------Readme documentation
│   │   ├── cpdCorr----------------------------------------Catalogue of correlation analysis of differential metabolites
│   │   │   ├── *_vs_*_raw_cpdCorr_*.*---------------------Heat map of correlation of all differential metabolites in the corresponding group (PDF file or PNG file)
│   │   │   ├── *_vs_*_raw_cpdCorr_*.xlsx------------------Table of phase relation of all differential metabolites in corresponding groups (note: Index: substance for short, other columns: correlation coefficients of this metabolite with other metabolites)
│   │   │   ├── *_vs_*_top*_cpdCorr_**---------------------Heat map of correlation between TOP 50 differential metabolites in corresponding groups (PDF or PNG file)
│   │   │   ├── *_vs_*_top*_cpdCorr_*.xlsx-----------------Table of the relationship between the TOP 50 differential metabolites in corresponding groups (note: Index: substance for short, other columns: correlation coefficients between this metabolite and other metabolites)
│   │   │   ├── *_vs_*_cpdCorr_circos*---------------------Chord diagram of all differential metabolites in corresponding groups (PDF or PNG file)
│   │   │   ├── *_vs_*_cpdCorr_Pvalue_*.*------------------Correlation information of circos graph
│   │   │   ├── *_vs_*_cpdCorr_network.*-------------------Network diagram of correlation of all differential metabolites in corresponding groups (PDF file or PNG file or interactive HTML file)
│   │   │   └── README.txt---------------------------------Readme documentation
│   │   ├── distribution-----------------------------------Catalog of differential analysis distribution maps
│   │   │   ├── *_vs_*_fc_distribution_*.* ----------------Log2FC dynamic distribution diagram of group difference multiple (PDF or PNG)
│   │   │   └── README.txt---------------------------------Readme documentation
│   │   ├── radarchart-------------------------------------Difference analysis radar map catalogue
│   │   │   ├── *_vs_*_radarchart.*------------------------Radar map of the top 10 substances in the difference multiples of corresponding group difference metabolites (PDF file or PNG file)
│   │   │   └── README.txt---------------------------------Readme documentation
│   │   ├── vipScore---------------------------------------Differential analysis differential metabolites VIP analysis directory
│   │   │   ├── *_vs_*_vipScore*.*-------------------------VIP value map of corresponding group differential metabolites (only the top 20, PDF file or PNG file)
│   │   │   └── README.txt---------------------------------Readme documentation
│   │   ├── fullViolin-------------------------------------Violin diagram analysis directory
│   │   │   ├── *_vs_*_fullViolin_*.*----------------------Whole violin diagram of corresponding group difference metabolites
│   │   │   └── README.txt---------------------------------Readme documentation
│   │   ├── vol--------------------------------------------Catalogue of differential volcanic map analysis
│   │   │   ├── *_vs_*_vol*.*------------------------------Volcanic map of metabolites with corresponding group differences (PDF file or PNG file or interactive HTML file)
│   │   │   └── README.txt---------------------------------Readme documentation
│   │   ├── zScore-----------------------------------------Catalogue of Z value analysis of differential metabolites
│   │   │   ├── *_vs_*_zScore_Index.*----------------------Z-value map of corresponding group differential metabolites (PDF file or PNG file or interactive HTML file)
│   │   │   └── README.txt---------------------------------Readme documentation
│   │   ├── ROC--------------------------------------------ROC analysis of differential metabolites
│   │   │   ├── *.ROC.*------------------------------------ROC curve of the corresponding grouping differential metabolites (PDF or PNG file)
│   │   │   ├── *_vs_*.AUC.xls-----------------------------AUC statistical table of corresponding group differential metabolites
│   │   │   └── README.txt---------------------------------Readme documentation
│   │   ├── carbons-----------------------------------Catalogue of differences in lipid subclass carbon chain length
│   │   │   ├── *carbons*---------------------------Lipid subclass carbon chain length difference analysis diagram
│   │   │   └── README.txt---------------------------------Readme documentation
│   │   ├── dendrogram----------------------------------------Differential grouping sample cluster diagram analysis directory
│   │   │   ├── *_vs_*_dendrogram*.*--------------Clustering tree of corresponding grouped samples (clustering of samples)
│   │   │   └── README.txt---------------------------------Readme documentation
│   │   ├── doubleBond------------------------------Catalog of lipid subclass unsaturation differences analysis
│   │   │   ├── *doubleBond*----------------------Analysis of unsaturation difference of lipid subclass carbon chain
│   │   │   └── README.txt---------------------------------Readme documentation
│   │   ├── scatter--------------------------------------------Differential lipid scatter map analysis catalogue
│   │   │   ├── *_vs_*_Class_scatter.*------------------------------Corresponding grouping difference lipid scatter map (PDF file or PNG file or interactive HTML file)
│   │   │   └── README.txt---------------------------------Readme documentation
│   │   └── README.txt---------------------------------Readme documentation
│   ├── sigMetabolitesCount.xlsx-------------------Statistical table of differential metabolites
│   ├── sigMetabolitesSummary.xlsx-------------------Summary of differential metabolites
│   └── README.txt---------------------------------Readme documentation
├── kmeans-----------------------------------------Kmeans analysis of differential metabolites
│   ├── kmeans_group.xlsx--------------------------Kmeans clustering information table of differential metabolites
│   ├── kmeans_cluster.*---------------------------Kmeans Clustering Trend map of Differential metabolites (PDF or PNG file)
│   └── README.txt---------------------------------Readme documentation
└── README.txt---------------------------------Readme documentation