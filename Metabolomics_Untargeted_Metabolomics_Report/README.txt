Result file composition description
The tree diagram in the front shows the structure of the result file, and the file type description is behind the symbol.
Depending on the actual situation, the directory structure may be different: some data may not meet the prerequisites for some analysis, so the result file does not have the analysis directory and results.
If NA appears in the quantitative data of metabolites, in order to facilitate subsequent calculations, use the number 9 instead. Hope the teacher will pay attention.
It is recommended to use Firefox or Google Chrome to open the report in web version (html) format.

XX-*----------------------------------------------Project ID of 
├── XX-*/1.Data_Assess----------------------------Directoryof Data Evaluation （The content is mainly the quality evaluation results of all samples including quality control samples, including PCA, cluster heat map, correlation analysis and KEGG annotation information.）
├── XX-*/2.Basic_Analysis-------------------------Directory of basic data analysis（The content is mainly the difference screening enrichment result of each grouping and the Venn diagram result between each difference grouping）
└── XX-*/3.Result_Report--------------------------Directory of results report（The directory where the project results report is located. You can directly click the index.html file in the directory to view the final web version report locally）

Detailed directory description

├── 1.Data_Assess----------------------------------Directoryof Data Evaluation
│   ├── pos/neg--------------------------------Directoryof Data Evaluation in different ion mode
│   │   ├── all_group--------------------------------------All sample information
│   │   │   ├── *_all_sample_data_raw.xlsx-----------------Metabolite information table for all samples (The data before missing value filling and CV filtering)
│   │   │   ├── *_all_sample_data.xlsx---------------------Metabolite information table for all samples
│   │   │   ├── *_all_sample_correlation.xlsx--------------Table of Pearson correlation coefficients for all samples
│   │   │   └── README.txt---------------------------------Document content introduction
│   │   ├── QC---------------------------------------------Sample experiment quality control directory
│   │   │   ├── *_QC_TIC*.*--------------------------------Mass spectrum total ion chromatogram of quality control sample 
│   │   │   ├── *_CV_ECDF.*--------------------------------CV value distribution of each group of samples 
│   │   │   ├── *_QC_correlation.*-------------------------Correlation graph between quality control samples 
│   │   │   ├── *_BLANK_EIC.*------------------------------EIC diagram of internal label in blank sample
│   │   │   ├── *_internal_standard.xlsx-------------------Stability of internal standards in QC samples 
│   │   │   └── README.txt---------------------------------Document content introduction
│   │   ├── Class_Count------------------------------------Metabolite category analysis
│   │   │   ├── *_Class_Count_Ring.*-----------------------Metabolite categories (pdf file or png file)
│   │   │   └── README.txt---------------------------------Document content introduction
│   │   ├── pca--------------------------------------------Principal component analysis of all samples
│   │   │   ├── *_PCA.*------------------------------------PCA 2D result of all samples (including the QC samples, pdf file or png file or interactive html file)
│   │   │   ├── *_PCA_ellipse.*----------------------------PCA 2D result of all samples (including the QC samples and adding ellispse when more than 2 samples in the groups, pdf file or png file)
│   │   │   ├── *_PCA3D.*----------------------------------PCA 3D results of all samples (including the QC samples, pdf file or png file or interactive html file)
│   │   │   ├── *_PCA_components.xlsx----------------------PCA data of all principal components of all samples (including the QC samples)
│   │   │   ├── *_PCA_variance_proportion.xlsx-------------Contribution rate of PCA principal component variance of all samples (including QC samples)
│   │   │   ├── *_no-QC_PCA.*------------------------------PCA 2D results of all samples (no QC samples, pdf file or png file or interactive html file)
│   │   │   ├── *_no-QC_PCA_ellipse.*----------------------PCA 2D results of all samples (no QC samples and adding ellispse when more than 2 samples in the groups, pdf file or png file)
│   │   │   ├── *_no-QC_PCA3D.*----------------------------PCA 3D results of all samples (no QC samples, pdf file or png file or interactive html file)
│   │   │   ├── *_no-QC_PCA_variance.*---------------------Explainable variation of the first 5 principal components of PCA for all samples (no QC samples, pdf file or png file)
│   │   │   ├── *_no-QC_PCA_components.xlsx----------------PCA data of all principal components of all samples (no QC samples)
│   │   │   ├── *_no-QC_PCA_variance_proportion.xlsx-------Contribution rate of PCA principal component variance of all samples (no QC samples)
│   │   │   ├── *_PC1_QCC.*--------------------------------PC1 control chart for all samples (including the QC samples, pdf file or png file)
│   │   │   └── README.txt---------------------------------Document content introduction
│   │   ├── heatmap----------------------------------------Heat map of all metabolites
│   │   │   ├── *_all_heatmap_row_cluster.xlsx-------------The data of cluster heat map of all metabolites content (only metabolites are clustered)(z-score)
│   │   │   ├── *_all_heatmap_row_cluster_Compounds.*------Cluster heat map of all metabolites content, showing the English name of the compound (only metabolites are clustered, pdf file or png file)
│   │   │   ├── *_all_heatmap_row_cluster_Index.*----------Cluster heat map of all metabolites content, showing the metabolite ID of (only metabolites are clustered, pdf file or png file)
│   │   │   ├── *_all_heatmap_row_cluster_Overall.*--------Cluster heat map of all metabolites content, showing the panorama (only metabolites are clustered, pdf file or png file)
│   │   │   ├── *_all_heatmap_col-row_cluster.xlsx---------The data of cluster heat map of all metabolites content (both metabolites and samples are clustered)(z-score)
│   │   │   ├── *_all_heatmap_col-row_cluster_Compounds.*--Cluster heat map of all metabolites content, showing the English name of the compound (both metabolites and samples are clustered, pdf file or png file)
│   │   │   ├── *_all_heatmap_col-row_cluster_Index.*------Cluster heat map of all metabolites content, showing the metabolite ID of (both metabolites and samples are clustered, pdf file or png file)
│   │   │   ├── *_all_heatmap_col-row_cluster_Overall.*----Cluster heat map of all metabolites content, showing the panorama (both metabolites and samples are clustered, pdf file or png file)
│   │   │   ├── *_all_heatmap_class.xlsx-------------------The data of heat map of all metabolites content (z-score)
│   │   │   ├── *_all_heatmap_class_Compounds.*------------Cluster heat map of all metabolites content, showing the category Class and English name of the compound (pdf file or png file)
│   │   │   ├── *_all_heatmap_class_Index.*----------------Cluster heat map of all metabolites content, showing the category Class and metabolite ID of (pdf file or png file)
│   │   │   ├── *_all_heatmap_class_Overall.*--------------Cluster heat map of all metabolites content, showing the category Class and panorama in positive or negative ion mode(pdf file or png file)
│   │   │   └── README.txt---------------------------------Document content introduction
│   │   └── README.txt-------------------------------Document content introduction
│   ├── all_sample_data.xlsx-----------------------Metabolite information table for all samples (Data merging of different ion modes)
│   ├── hmdb_anno.xlsx-----------------------------HMDB annotation information table of metabolites
│   ├── metabolitesCount.xlsx----------------------Number of identified metabolites
│   ├── sample_info.xlsx---------------------------Sample grouping information
│   ├── all_sample_data_raw.xlsx-------------------Metabolite information table for all samples (The data before missing value filling and CV filtering)
│   └── README.txt---------------------------------Document content introduction
├── 2.Basic_Analysis-------------------------------Directory of basic data analysis
│   ├── Difference_analysis----------------------------Directory of difference analysis result
│   │   ├── *_vs_*-----------------------------------------Directory of grouped basic analysis
│   │   │   ├── enrichment-------------------------------------Directory of differential enrichment pathway map
│   │   │   │   ├── Graph--------------------------------------Annotation table for significantly differential metabolites of KEGG
│   │   │   │   ├── *_vs_*_filter_anno.xlsx--------------------Annotation table for significantly differential metabolites of KEGG
│   │   │   │   ├── *_vs_*_KEGG_barplot.*----------------------Differential enrichment classification map of KEGG (png file or pdf file)
│   │   │   │   ├── *_vs_*_KEGG_Enrichment_*.*-----------------Differential enrichment bubble chart of KEGG (png file or pdf file)
│   │   │   │   ├── *_vs_*_KEGG_DA_score_*.*-------------------Differential abundance score map of KEGG(png file or pdf file)
│   │   │   │   ├── *_vs_*_KEGG.xlsx---------------------------Differential Enrichment Statistics Table of KEGG
│   │   │   │   ├── *_vs_*_KEGG_stat.xlsx----------------------Differential Enrichment Classification Statistics Table of KEGG
│   │   │   │   ├── *_vs_*_filter_hmdb.xlsx--------------------HMDB annotation table of significantly different metabolites
│   │   │   │   ├── *_vs_*_SMPDB_primary.xlsx------------------HMDB differential enrichment statistics table
│   │   │   │   ├── *_vs_*_SMPDB_primary_Enrichment.*----------HMDB enrichment diagram of differential metabolites
│   │   │   │   ├── SMP_primary_pathway------------------------HMDB pathway map of differential metabolites
│   │   │   │   ├── *_vs_*_sigDiseasesTable.xlsx---------------Table of association between differential metabolites and diseases 
│   │   │   │   ├── *_vs_*_*_msea.*----------------------------MSEA enrichment analysis graph (Kegg_pathway: KEGG pathway metabolism set, blood: blood disease metabolism set, urine: urine disease metabolism set, CSF means cerebrospinal fluid metabolism set)
│   │   │   │   ├── *_vs_*_*_msea.xlsx-------------------------Table for MSEA enrichment analysis (Kegg_pathway: KEGG pathway metabolism set, blood: blood disease metabolism set, urine: urine disease metabolism set, CSF means cerebrospinal fluid metabolism set)
│   │   │   │   └── README.txt---------------------------------Document content introduction
│   │   │   ├── pca--------------------------------------------Principal component analysis of the corresponding group
│   │   │   │   ├── *_vs_*_PCA.*-------------------------------Two-dimensional PCA results of the corresponding metabolites (pdf file or png file or interactive html file)
│   │   │   │   ├── *_vs_*_PCA3D.*-----------------------------PCA three-dimensional results of corresponding metabolites (pdf file or png file or interactive html file)
│   │   │   │   ├── *_vs_*_PCA_variance.*----------------------Explainable variation of the top 5 main components of the metabolite PCA in the corresponding group (pdf file or png file)
│   │   │   │   ├── *_vs_*_PCA_components.xlsx-----------------All the principal component data of each PCA of the metabolites in the corresponding group (Note: Each column: PCA data after dimensionality reduction)
│   │   │   │   ├── *_vs_*_PCA_variance_proportion.xlsx--------The contribution rate of the PCA principal component variance of the metabolites of the corresponding group
│   │   │   │   └── README.txt---------------------------------Document content introduction
│   │   │   ├── opls-------------------------------------------Orthogonal Partial Least Squares Discriminant Analysis of the corresponding group
│   │   │   │   ├── *_vs_*_OPLS-DA_model.*---------------------OPLS-DA model diagram of the corresponding group (pdf file or png file or interactive html file)
│   │   │   │   ├── *_vs_*_OPLS-DA_permutation.*---------------OPLS-DA simulation verification diagram of the corresponding group (pdf file or png file)
│   │   │   │   ├── *_vs_*_OPLS-DA_scorePlot.*-----------------OPLS-DA S-plot of the corresponding group (pdf file or png file or interactive html file)
│   │   │   │   ├── *_vs_*_OPLS-DA_SPlot*----------------------OPLS-DA score chart of the corresponding group (pdf file or png file or interactive html file)
│   │   │   │   ├── *_vs_*_OPLS-DA_VIP.xlsx--------------------OPLS-DA VIP table of the corresponding group
│   │   │   │   ├── *_vs_*_OPLS-DA_summary.xlsx----------------OPLS-DA model summary table
│   │   │   │   └── README.txt---------------------------------Document content introduction
│   │   │   ├── dendrogram-------------------------------------Hierarchical clustering tree of samples of the corresponding group
│   │   │   │   ├── *_vs_*_dendrograms.*-----------------------Hierarchical clustering tree of samples of corresponding grouped differential metabolites under specified filter conditions (pdf file or png file)
│   │   │   │   └── README.txt---------------------------------Document content introduction
│   │   │   ├── heatmap----------------------------------------Heat map of differential metabolites of the corresponding group
│   │   │   │   ├── *_vs_*_heatmap_row_cluster.xlsx------------The data of cluster heat map of the differential metabolite content of the corresponding group (only metabolites are clustered)(z-score)
│   │   │   │   ├── *_vs_*_heatmap_row_cluster_Compounds.*-----Cluster heat map of the differential metabolite content of the corresponding group, showing the English name of the compound (only metabolites are clustered, pdf file or png file)
│   │   │   │   ├── *_vs_*_heatmap_row_cluster_Index.*---------Cluster heat map of the differential metabolite content of the corresponding group, showing the metabolite ID of (only metabolites are clustered, pdf file or png file)
│   │   │   │   ├── *_vs_*_heatmap_row_cluster_Overall.*-------Cluster heat map of the differential metabolite content of the corresponding group, showing the panorama (only metabolites are clustered, pdf file or png file)
│   │   │   │   ├── *_vs_*_heatmap_col-row_cluster.xlsx--------The data of cluster heat map of the differential metabolite content of the corresponding group (both metabolites and samples are clustered)(z-score)
│   │   │   │   ├── *_vs_*_heatmap_col-row_cluster_Compounds.*-Cluster heat map of the differential metabolite content of the corresponding group, showing the English name of the compound (both metabolites and samples are clustered, pdf file or png file)
│   │   │   │   ├── *_vs_*_heatmap_col-row_cluster_Index.*-----Cluster heat map of the differential metabolite content of the corresponding group, showing the metabolite ID of (both metabolites and samples are clustered, pdf file or png file)
│   │   │   │   ├── *_vs_*_heatmap_col-row_cluster_Overall.*---Cluster heat map of the differential metabolite content of the corresponding group, showing the panorama (both metabolites and samples are clustered, pdf file or png file)
│   │   │   │   ├── *_vs_*_heatmap_class.xlsx------------------The data of cluster heat map of the differential metabolite content of the corresponding group (z-score)
│   │   │   │   ├── *_vs_*_heatmap_class_Compounds.*-----------Cluster heat map of the differential metabolite content of the corresponding group, showing the category Class and English name of the compound (pdf file or png file)
│   │   │   │   ├── *_vs_*_heatmap_class_Index.*---------------Cluster heat map of the differential metabolite content of the corresponding group, showing the category Class and metabolite ID of (pdf file or png file)
│   │   │   │   ├── *_vs_*_heatmap_class_Overall.*-------------Cluster heat map of the differential metabolite content of the corresponding group, showing the category Class and panorama (pdf file or png file)
│   │   │   │   └── README.txt---------------------------------Document content introduction
│   │   │   ├── fullViolin-------------------------------------Violin plot of the Corresponding group
│   │   │   │   ├── *_vs_*_fullViolin_*.*----------------------Violin plot of differential metabolites
│   │   │   │   ├── singleViolin-------------------------------Directory of violin plot of single differential metabolite
│   │   │   │   └── README.txt---------------------------------Document content introduction
│   │   │   ├── vol--------------------------------------------Volcano map of the corresponding group
│   │   │   │   ├── *_vs_*_vol_*.*-----------------------------Volcano map of corresponding grouped differential metabolites under different screening conditions (pdf file or png file or interactive html file)
│   │   │   │   └── README.txt---------------------------------Document content introduction
│   │   │   ├── zScore-----------------------------------------Differential metabolite Z value of the Corresponding group
│   │   │   │   ├── *_vs_*_zScore_Compounds.*------------------Differential metabolite Z value graph of the corresponding group, showing the English name of the compound (pdf file or png file or interactive html file)
│   │   │   │   ├── *_vs_*_zScore_Index.*----------------------Differential metabolite Z value graph of the corresponding group, showing the metabolite ID of (pdf file or png file or interactive html file)
│   │   │   │   └── README.txt---------------------------------Document content introduction
│   │   │   ├── *_vs_*_filter.xlsx-------------------------Differential metabolite information of the corresponding group
│   │   │   ├── *_vs_*_info.xlsx---------------------------All metabolite information of the corresponding group
│   │   │   └── README.txt---------------------------------Document content introduction
│   │   ├── sigMetabolitesCount.xlsx-------------------Statistical table of significantly differential metabolites in different groups
│   │   ├── sigMetabolitesSummary.xlsx-----------------Statistical table of all significantly differential metabolites in all groups
│   │   └── README.txt---------------------------------Document content introduction
│   ├── kmeans-----------------------------------------K-Means clustering of differential metabolites
│   │   │   ├── kmeans_cluster.xlsx------------------K-Means cluster information table of differential metabolite
│   │   │   ├── kmeans_cluster.*---------------------K-Means clustering trend graph of differential metabolites (pdf file or png file)
│   │   └── README.txt---------------------------------Document content introduction
│   └── README.txt---------------------------------Document content introduction
├── 3.Result_Report--------------------------------Directory of results report
│   ├── img----------------------------------------Picture of the Report 
│   ├── libs---------------------------------------Components of the report
│   ├── wordReport.docx----------------------------Word version of the report content
│   ├── pdfReport.pdf------------------------------PDF version of the report content
│   ├── webReport.html-----------------------------Online version of the report content
│   └── README.txt---------------------------------Document content introduction
└── README.txt---------------------------------Document content introduction
