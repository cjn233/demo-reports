1.Data_Assess----------------------------------Data Evaluation catalogue
├── Class_Count------------------------------------Catalogue of lipid subclass quantitative analysis
│   ├── Class_Count_Bar.*--------------------------Bar chart of lipid subclass number
│   ├── Class_Count_Ring_*.*-----------------------Group lipid subclass number ring diagram
│   └── README.txt---------------------------------Readme documentation
├── Class_Content----------------------------------Contents of lipid subgroups
│   ├── Class_Content_*.*--------------------------Histogram of lipid subclass content
│   ├── Class_Content.*----------------------------Bar chart of contents of all lipid subclasses
│   ├── All_Class_Content.*------------------------Summary bar chart of lipid subclass content
│   └── README.txt---------------------------------Readme documentation
├── Class_Length-----------------------------------Catalogue of lipid subclass carbon chain length analysis
│   ├── Class_Length_*.*---------------------------Bar chart of carbon chain length content of lipid subclass
│   └── README.txt---------------------------------Readme documentation
├── Class_Unsaturated------------------------------Lipid subclass unsaturation analysis directory
│   ├── Class_Unsaturated_*.*----------------------Histogram of unsaturation content of lipid subclass carbon chain
│   └── README.txt---------------------------------Readme documentation
├── pca--------------------------------------------Principal component analysis catalogue of all samples
│   ├── all_pca3D.*--------------------------------Three-dimensional PCA results of metabolites of all samples (including QC samples)
│   ├── all_pca.*----------------------------------PCA plots of metabolites of all samples (including QC samples, without confidence intervals)
│   ├── all_pca_ellipse.*--------------------------PCA plots of metabolites of all samples (including QC samples, with confidence intervals of more than 3 samples in each group)
│   ├── all_pcaVar.*-------------------------------Explainable variation of the first 5 principal components of METABOLite PCA in all samples (including QC samples)
│   ├── all_pca_components.xlsx--------------------Results of PCA components of metabolites of all samples (including QC samples)
│   ├── all_pca_variance_proportion.xlsx-----------Statistical results of PCA components of metabolites of all samples (including QC samples)
│   ├── all_pca_no-qc.*----------------------------PCA plots of metabolites of all samples (no QC samples, no confidence intervals)
│   ├── all_pca_no-qc_ellipse.*--------------------PCA plots of metabolites of all samples (no QC samples, with confidence intervals of more than 3 samples in each group)
│   ├── all_pca_no-qc_components.xlsx--------------Results of PCA components of metabolites in all samples (without QC samples)
│   ├── all_pca_no-qc_variance_proportion.xlsx-----Statistical results of PCA components of metabolites in all samples (without QC samples)
│   ├── all_pca*PC1_QCC.*--------------------------PC1 control diagram for all samples (including QC samples)
│   └── README.txt---------------------------------Readme documentation
├── CV---------------------------------------------CV analysis catalogue of each group
│   ├── all_CV_ECDF.*------------------------------CV distribution diagram of each group
│   └── README.txt---------------------------------Readme documentation
├── distribution-----------------------------------Catalogue of content distribution maps of all substance groups
│   ├── all_content_distribution*.*----------------Dynamic distribution map of all substance Groups (PDF file or PNG file)
│   └── README.txt---------------------------------Readme documentation
├── heatmap----------------------------------------Heat map of all metabolites
│   ├── all_heatmap_row_cluster*.*-----------------Metabolite content clustering heat map (for metabolite clustering)
│   ├── all_heatmap_col-row_cluster*.*-------------Metabolite content clustering heat map (for both metabolites and samples)
│   ├── all_heatmap_class*.*-----------------------Heat map of metabolite content (by metabolite)
│   └── README.txt---------------------------------Readme documentation
├── Radarchart-------------------------------------Lipid subclass content radar map directory
│   ├── *Radarchart.*------------------------------Radar map of Lipid subgroups (LOG10) (PDF or PNG file)
│   └── README.txt---------------------------------Readme documentation
├── Class_Count.xlsx---------------------------Table of lipid subclass number information
├── Class_Content.xlsx-------------------------Table of lipid subclass content information
├── Class_Length.xlsx--------------------------Table of lipid subclass carbon chain length content
├── Class_Unsaturated.xlsx---------------------Table of unsaturation content of lipid subclass carbon chains
├── meanTable.xlsx-----------------------------Average table of metabolites
└── README.txt---------------------------------Readme documentation
Table description:

meanTable.xlsx
  Index：substance abbreviation
  Compounds：English name of substance
  mean(group *)：The average content of a group
