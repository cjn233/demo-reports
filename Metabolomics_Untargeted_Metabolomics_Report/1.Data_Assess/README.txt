1.Data_Assess----------------------------------Directoryof Data Evaluation
├── pos/neg--------------------------------Directoryof Data Evaluation in different ion mode
│   ├── all_group--------------------------------------All sample information
│   │   ├── *_all_sample_data_raw.xlsx-----------------Metabolite information table for all samples (The data before missing value filling and CV filtering)
│   │   ├── *_all_sample_data.xlsx---------------------Metabolite information table for all samples
│   │   ├── *_all_sample_correlation.xlsx--------------Table of Pearson correlation coefficients for all samples
│   │   └── README.txt---------------------------------Document content introduction
│   ├── QC---------------------------------------------Sample experiment quality control directory
│   │   ├── *_QC_TIC*.*--------------------------------Mass spectrum total ion chromatogram of quality control sample 
│   │   ├── *_CV_ECDF.*--------------------------------CV value distribution of each group of samples 
│   │   ├── *_QC_correlation.*-------------------------Correlation graph between quality control samples 
│   │   ├── *_BLANK_EIC.*------------------------------EIC diagram of internal label in blank sample
│   │   ├── *_internal_standard.xlsx-------------------Stability of internal standards in QC samples 
│   │   └── README.txt---------------------------------Document content introduction
│   ├── Class_Count------------------------------------Metabolite category analysis
│   │   ├── *_Class_Count_Ring.*-----------------------Metabolite categories (pdf file or png file)
│   │   └── README.txt---------------------------------Document content introduction
│   ├── pca--------------------------------------------Principal component analysis of all samples
│   │   ├── *_PCA.*------------------------------------PCA 2D result of all samples (including the QC samples, pdf file or png file or interactive html file)
│   │   ├── *_PCA_ellipse.*----------------------------PCA 2D result of all samples (including the QC samples and adding ellispse when more than 2 samples in the groups, pdf file or png file)
│   │   ├── *_PCA3D.*----------------------------------PCA 3D results of all samples (including the QC samples, pdf file or png file or interactive html file)
│   │   ├── *_PCA_components.xlsx----------------------PCA data of all principal components of all samples (including the QC samples)
│   │   ├── *_PCA_variance_proportion.xlsx-------------Contribution rate of PCA principal component variance of all samples (including QC samples)
│   │   ├── *_no-QC_PCA.*------------------------------PCA 2D results of all samples (no QC samples, pdf file or png file or interactive html file)
│   │   ├── *_no-QC_PCA_ellipse.*----------------------PCA 2D results of all samples (no QC samples and adding ellispse when more than 2 samples in the groups, pdf file or png file)
│   │   ├── *_no-QC_PCA3D.*----------------------------PCA 3D results of all samples (no QC samples, pdf file or png file or interactive html file)
│   │   ├── *_no-QC_PCA_variance.*---------------------Explainable variation of the first 5 principal components of PCA for all samples (no QC samples, pdf file or png file)
│   │   ├── *_no-QC_PCA_components.xlsx----------------PCA data of all principal components of all samples (no QC samples)
│   │   ├── *_no-QC_PCA_variance_proportion.xlsx-------Contribution rate of PCA principal component variance of all samples (no QC samples)
│   │   ├── *_PC1_QCC.*--------------------------------PC1 control chart for all samples (including the QC samples, pdf file or png file)
│   │   └── README.txt---------------------------------Document content introduction
│   ├── heatmap----------------------------------------Heat map of all metabolites
│   │   ├── *_all_heatmap_row_cluster.xlsx-------------The data of cluster heat map of all metabolites content (only metabolites are clustered)(z-score)
│   │   ├── *_all_heatmap_row_cluster_Compounds.*------Cluster heat map of all metabolites content, showing the English name of the compound (only metabolites are clustered, pdf file or png file)
│   │   ├── *_all_heatmap_row_cluster_Index.*----------Cluster heat map of all metabolites content, showing the metabolite ID of (only metabolites are clustered, pdf file or png file)
│   │   ├── *_all_heatmap_row_cluster_Overall.*--------Cluster heat map of all metabolites content, showing the panorama (only metabolites are clustered, pdf file or png file)
│   │   ├── *_all_heatmap_col-row_cluster.xlsx---------The data of cluster heat map of all metabolites content (both metabolites and samples are clustered)(z-score)
│   │   ├── *_all_heatmap_col-row_cluster_Compounds.*--Cluster heat map of all metabolites content, showing the English name of the compound (both metabolites and samples are clustered, pdf file or png file)
│   │   ├── *_all_heatmap_col-row_cluster_Index.*------Cluster heat map of all metabolites content, showing the metabolite ID of (both metabolites and samples are clustered, pdf file or png file)
│   │   ├── *_all_heatmap_col-row_cluster_Overall.*----Cluster heat map of all metabolites content, showing the panorama (both metabolites and samples are clustered, pdf file or png file)
│   │   ├── *_all_heatmap_class.xlsx-------------------The data of heat map of all metabolites content (z-score)
│   │   ├── *_all_heatmap_class_Compounds.*------------Cluster heat map of all metabolites content, showing the category Class and English name of the compound (pdf file or png file)
│   │   ├── *_all_heatmap_class_Index.*----------------Cluster heat map of all metabolites content, showing the category Class and metabolite ID of (pdf file or png file)
│   │   ├── *_all_heatmap_class_Overall.*--------------Cluster heat map of all metabolites content, showing the category Class and panorama in positive or negative ion mode(pdf file or png file)
│   │   └── README.txt---------------------------------Document content introduction
│   └── README.txt-------------------------------Document content introduction
├── all_sample_data.xlsx-----------------------Metabolite information table for all samples (Data merging of different ion modes)
├── hmdb_anno.xlsx-----------------------------HMDB annotation information table of metabolites
├── metabolitesCount.xlsx----------------------Number of identified metabolites
├── sample_info.xlsx---------------------------Sample grouping information
├── all_sample_data_raw.xlsx-------------------Metabolite information table for all samples (The data before missing value filling and CV filtering)
└── README.txt---------------------------------Document content introduction