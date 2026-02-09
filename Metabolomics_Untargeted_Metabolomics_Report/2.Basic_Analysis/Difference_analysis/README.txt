Difference_analysis----------------------------Directory of difference analysis result
├── *_vs_*-----------------------------------------Directory of grouped basic analysis
│   ├── enrichment-------------------------------------Directory of differential enrichment pathway map
│   │   ├── Graph--------------------------------------Annotation table for significantly differential metabolites of KEGG
│   │   ├── *_vs_*_filter_anno.xlsx--------------------Annotation table for significantly differential metabolites of KEGG
│   │   ├── *_vs_*_KEGG_barplot.*----------------------Differential enrichment classification map of KEGG (png file or pdf file)
│   │   ├── *_vs_*_KEGG_Enrichment_*.*-----------------Differential enrichment bubble chart of KEGG (png file or pdf file)
│   │   ├── *_vs_*_KEGG_DA_score_*.*-------------------Differential abundance score map of KEGG(png file or pdf file)
│   │   ├── *_vs_*_KEGG.xlsx---------------------------Differential Enrichment Statistics Table of KEGG
│   │   ├── *_vs_*_KEGG_stat.xlsx----------------------Differential Enrichment Classification Statistics Table of KEGG
│   │   ├── *_vs_*_filter_hmdb.xlsx--------------------HMDB annotation table of significantly different metabolites
│   │   ├── *_vs_*_SMPDB_primary.xlsx------------------HMDB differential enrichment statistics table
│   │   ├── *_vs_*_SMPDB_primary_Enrichment.*----------HMDB enrichment diagram of differential metabolites
│   │   ├── SMP_primary_pathway------------------------HMDB pathway map of differential metabolites
│   │   ├── *_vs_*_sigDiseasesTable.xlsx---------------Table of association between differential metabolites and diseases 
│   │   ├── *_vs_*_*_msea.*----------------------------MSEA enrichment analysis graph (Kegg_pathway: KEGG pathway metabolism set, blood: blood disease metabolism set, urine: urine disease metabolism set, CSF means cerebrospinal fluid metabolism set)
│   │   ├── *_vs_*_*_msea.xlsx-------------------------Table for MSEA enrichment analysis (Kegg_pathway: KEGG pathway metabolism set, blood: blood disease metabolism set, urine: urine disease metabolism set, CSF means cerebrospinal fluid metabolism set)
│   │   └── README.txt---------------------------------Document content introduction
│   ├── pca--------------------------------------------Principal component analysis of the corresponding group
│   │   ├── *_vs_*_PCA.*-------------------------------Two-dimensional PCA results of the corresponding metabolites (pdf file or png file or interactive html file)
│   │   ├── *_vs_*_PCA3D.*-----------------------------PCA three-dimensional results of corresponding metabolites (pdf file or png file or interactive html file)
│   │   ├── *_vs_*_PCA_variance.*----------------------Explainable variation of the top 5 main components of the metabolite PCA in the corresponding group (pdf file or png file)
│   │   ├── *_vs_*_PCA_components.xlsx-----------------All the principal component data of each PCA of the metabolites in the corresponding group (Note: Each column: PCA data after dimensionality reduction)
│   │   ├── *_vs_*_PCA_variance_proportion.xlsx--------The contribution rate of the PCA principal component variance of the metabolites of the corresponding group
│   │   └── README.txt---------------------------------Document content introduction
│   ├── opls-------------------------------------------Orthogonal Partial Least Squares Discriminant Analysis of the corresponding group
│   │   ├── *_vs_*_OPLS-DA_model.*---------------------OPLS-DA model diagram of the corresponding group (pdf file or png file or interactive html file)
│   │   ├── *_vs_*_OPLS-DA_permutation.*---------------OPLS-DA simulation verification diagram of the corresponding group (pdf file or png file)
│   │   ├── *_vs_*_OPLS-DA_scorePlot.*-----------------OPLS-DA S-plot of the corresponding group (pdf file or png file or interactive html file)
│   │   ├── *_vs_*_OPLS-DA_SPlot*----------------------OPLS-DA score chart of the corresponding group (pdf file or png file or interactive html file)
│   │   ├── *_vs_*_OPLS-DA_VIP.xlsx--------------------OPLS-DA VIP table of the corresponding group
│   │   ├── *_vs_*_OPLS-DA_summary.xlsx----------------OPLS-DA model summary table
│   │   └── README.txt---------------------------------Document content introduction
│   ├── dendrogram-------------------------------------Hierarchical clustering tree of samples of the corresponding group
│   │   ├── *_vs_*_dendrograms.*-----------------------Hierarchical clustering tree of samples of corresponding grouped differential metabolites under specified filter conditions (pdf file or png file)
│   │   └── README.txt---------------------------------Document content introduction
│   ├── heatmap----------------------------------------Heat map of differential metabolites of the corresponding group
│   │   ├── *_vs_*_heatmap_row_cluster.xlsx------------The data of cluster heat map of the differential metabolite content of the corresponding group (only metabolites are clustered)(z-score)
│   │   ├── *_vs_*_heatmap_row_cluster_Compounds.*-----Cluster heat map of the differential metabolite content of the corresponding group, showing the English name of the compound (only metabolites are clustered, pdf file or png file)
│   │   ├── *_vs_*_heatmap_row_cluster_Index.*---------Cluster heat map of the differential metabolite content of the corresponding group, showing the metabolite ID of (only metabolites are clustered, pdf file or png file)
│   │   ├── *_vs_*_heatmap_row_cluster_Overall.*-------Cluster heat map of the differential metabolite content of the corresponding group, showing the panorama (only metabolites are clustered, pdf file or png file)
│   │   ├── *_vs_*_heatmap_col-row_cluster.xlsx--------The data of cluster heat map of the differential metabolite content of the corresponding group (both metabolites and samples are clustered)(z-score)
│   │   ├── *_vs_*_heatmap_col-row_cluster_Compounds.*-Cluster heat map of the differential metabolite content of the corresponding group, showing the English name of the compound (both metabolites and samples are clustered, pdf file or png file)
│   │   ├── *_vs_*_heatmap_col-row_cluster_Index.*-----Cluster heat map of the differential metabolite content of the corresponding group, showing the metabolite ID of (both metabolites and samples are clustered, pdf file or png file)
│   │   ├── *_vs_*_heatmap_col-row_cluster_Overall.*---Cluster heat map of the differential metabolite content of the corresponding group, showing the panorama (both metabolites and samples are clustered, pdf file or png file)
│   │   ├── *_vs_*_heatmap_class.xlsx------------------The data of cluster heat map of the differential metabolite content of the corresponding group (z-score)
│   │   ├── *_vs_*_heatmap_class_Compounds.*-----------Cluster heat map of the differential metabolite content of the corresponding group, showing the category Class and English name of the compound (pdf file or png file)
│   │   ├── *_vs_*_heatmap_class_Index.*---------------Cluster heat map of the differential metabolite content of the corresponding group, showing the category Class and metabolite ID of (pdf file or png file)
│   │   ├── *_vs_*_heatmap_class_Overall.*-------------Cluster heat map of the differential metabolite content of the corresponding group, showing the category Class and panorama (pdf file or png file)
│   │   └── README.txt---------------------------------Document content introduction
│   ├── fullViolin-------------------------------------Violin plot of the Corresponding group
│   │   ├── *_vs_*_fullViolin_*.*----------------------Violin plot of differential metabolites
│   │   ├── singleViolin-------------------------------Directory of violin plot of single differential metabolite
│   │   └── README.txt---------------------------------Document content introduction
│   ├── vol--------------------------------------------Volcano map of the corresponding group
│   │   ├── *_vs_*_vol_*.*-----------------------------Volcano map of corresponding grouped differential metabolites under different screening conditions (pdf file or png file or interactive html file)
│   │   └── README.txt---------------------------------Document content introduction
│   ├── zScore-----------------------------------------Differential metabolite Z value of the Corresponding group
│   │   ├── *_vs_*_zScore_Compounds.*------------------Differential metabolite Z value graph of the corresponding group, showing the English name of the compound (pdf file or png file or interactive html file)
│   │   ├── *_vs_*_zScore_Index.*----------------------Differential metabolite Z value graph of the corresponding group, showing the metabolite ID of (pdf file or png file or interactive html file)
│   │   └── README.txt---------------------------------Document content introduction
│   ├── *_vs_*_filter.xlsx-------------------------Differential metabolite information of the corresponding group
│   ├── *_vs_*_info.xlsx---------------------------All metabolite information of the corresponding group
│   └── README.txt---------------------------------Document content introduction
├── sigMetabolitesCount.xlsx-------------------Statistical table of significantly differential metabolites in different groups
├── sigMetabolitesSummary.xlsx-----------------Statistical table of all significantly differential metabolites in all groups
└── README.txt---------------------------------Document content introduction