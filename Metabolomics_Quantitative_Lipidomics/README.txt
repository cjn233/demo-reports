Result file composition description
The tree diagram in the front shows the structure of the result file, and the file type description is behind the symbol.
Depending on the actual situation, the directory structure may be different: some data may not meet the prerequisites for some analysis, so the result file does not have the analysis directory and results.
If NA appears in the quantitative data of metabolites, in order to facilitate subsequent calculations, use the number 9 instead. Hope the teacher will pay attention.
It is recommended to use Firefox or Google Chrome to open the report in web version (html) format.

First-level catalog classification:
MW-*----------------------------------------------Project ID of Metware 
├── MW-*/1.Data_Assess----------------------------Directoryof Data Evaluation （The content is mainly the quality evaluation results of all samples including quality control samples, including PCA, cluster heat map, correlation analysis and KEGG annotation information.）
├── MW-*/2.Basic_Analysis-------------------------Directory of basic data analysis（The content is mainly the difference screening enrichment result of each grouping and the Venn diagram result between each difference grouping）
└── MW-*/3.Result_Report--------------------------Directory of results report（The directory where the project results report is located. You can directly click the index.html file in the directory to view the final web version report locally）

Detailed directory description
.
├── 0.data-----------------------------------------All sample data information
│   ├── unit.xlsx----------------------------------Metabolite content unit
│   ├── *.levels.xlsx------------------------------Sample content
│   ├── original.xlsx------------------------------Sample content(Before CV filtration)
│   ├── QC---------------------------------------------Sample experiment quality control picture catalogue
│   │   ├── *_Integral_correction*diagram*.*-----------Integral correction diagram for quantitative analysis of metabolites
│   │   ├── *_MRM_detection_of*multimodal_maps*.*------Multi-peak map of MRM metabolite detection
│   │   ├── *_QC_MS*tic_overlap*.*---------------------QC sample essence spectrum analysis of total ion flow diagram
│   │   ├── *_QC_MS*TIC*.*-----------------------------TIC overlap was detected by QC sample essence spectrum
│   │   └── README.txt---------------------------------Readme documentation
│   ├── sample_info.xlsx---------------------------Group information
│   └── README.txt---------------------------------Readme documentation
├── 1.Data_Assess----------------------------------Data Evaluation catalogue
│   ├── Class_Count------------------------------------Catalogue of lipid subclass quantitative analysis
│   │   ├── Class_Count_Bar.*--------------------------Bar chart of lipid subclass number
│   │   ├── Class_Count_Ring_*.*-----------------------Group lipid subclass number ring diagram
│   │   └── README.txt---------------------------------Readme documentation
│   ├── Class_Content----------------------------------Contents of lipid subgroups
│   │   ├── Class_Content_*.*--------------------------Histogram of lipid subclass content
│   │   ├── Class_Content.*----------------------------Bar chart of contents of all lipid subclasses
│   │   ├── All_Class_Content.*------------------------Summary bar chart of lipid subclass content
│   │   └── README.txt---------------------------------Readme documentation
│   ├── Class_Length-----------------------------------Catalogue of lipid subclass carbon chain length analysis
│   │   ├── Class_Length_*.*---------------------------Bar chart of carbon chain length content of lipid subclass
│   │   └── README.txt---------------------------------Readme documentation
│   ├── Class_Unsaturated------------------------------Lipid subclass unsaturation analysis directory
│   │   ├── Class_Unsaturated_*.*----------------------Histogram of unsaturation content of lipid subclass carbon chain
│   │   └── README.txt---------------------------------Readme documentation
│   ├── pca--------------------------------------------Principal component analysis catalogue of all samples
│   │   ├── all_pca3D.*--------------------------------Three-dimensional PCA results of metabolites of all samples (including QC samples)
│   │   ├── all_pca.*----------------------------------PCA plots of metabolites of all samples (including QC samples, without confidence intervals)
│   │   ├── all_pca_ellipse.*--------------------------PCA plots of metabolites of all samples (including QC samples, with confidence intervals of more than 3 samples in each group)
│   │   ├── all_pcaVar.*-------------------------------Explainable variation of the first 5 principal components of METABOLite PCA in all samples (including QC samples)
│   │   ├── all_pca_components.xlsx--------------------Results of PCA components of metabolites of all samples (including QC samples)
│   │   ├── all_pca_variance_proportion.xlsx-----------Statistical results of PCA components of metabolites of all samples (including QC samples)
│   │   ├── all_pca_no-qc.*----------------------------PCA plots of metabolites of all samples (no QC samples, no confidence intervals)
│   │   ├── all_pca_no-qc_ellipse.*--------------------PCA plots of metabolites of all samples (no QC samples, with confidence intervals of more than 3 samples in each group)
│   │   ├── all_pca_no-qc_components.xlsx--------------Results of PCA components of metabolites in all samples (without QC samples)
│   │   ├── all_pca_no-qc_variance_proportion.xlsx-----Statistical results of PCA components of metabolites in all samples (without QC samples)
│   │   ├── all_pca*PC1_QCC.*--------------------------PC1 control diagram for all samples (including QC samples)
│   │   └── README.txt---------------------------------Readme documentation
│   ├── CV---------------------------------------------CV analysis catalogue of each group
│   │   ├── all_CV_ECDF.*------------------------------CV distribution diagram of each group
│   │   └── README.txt---------------------------------Readme documentation
│   ├── distribution-----------------------------------Catalogue of content distribution maps of all substance groups
│   │   ├── all_content_distribution*.*----------------Dynamic distribution map of all substance Groups (PDF file or PNG file)
│   │   └── README.txt---------------------------------Readme documentation
│   ├── heatmap----------------------------------------Heat map of all metabolites
│   │   ├── all_heatmap_row_cluster*.*-----------------Metabolite content clustering heat map (for metabolite clustering)
│   │   ├── all_heatmap_col-row_cluster*.*-------------Metabolite content clustering heat map (for both metabolites and samples)
│   │   ├── all_heatmap_class*.*-----------------------Heat map of metabolite content (by metabolite)
│   │   └── README.txt---------------------------------Readme documentation
│   ├── Radarchart-------------------------------------Lipid subclass content radar map directory
│   │   ├── *Radarchart.*------------------------------Radar map of Lipid subgroups (LOG10) (PDF or PNG file)
│   │   └── README.txt---------------------------------Readme documentation
│   ├── Class_Count.xlsx---------------------------Table of lipid subclass number information
│   ├── Class_Content.xlsx-------------------------Table of lipid subclass content information
│   ├── Class_Length.xlsx--------------------------Table of lipid subclass carbon chain length content
│   ├── Class_Unsaturated.xlsx---------------------Table of unsaturation content of lipid subclass carbon chains
│   ├── meanTable.xlsx-----------------------------Average table of metabolites
│   └── README.txt---------------------------------Readme documentation
├── 2.Basic_Analysis------------------------------Data analysis catalog
│   ├── Difference_analysis----------------------------Difference analysis results directory
│   │   ├── *_vs_*-----------------------------------------Corresponding group difference analysis result directory
│   │   │   ├── *_vs_*_filter.xlsx-------------------------Differential metabolites corresponding to group screening
│   │   │   ├── *_vs_*_info.xlsx---------------------------Corresponding grouping of all metabolite information
│   │   │   ├── enrichment-------------------------------------Differential analysis enrichment analysis catalogue
│   │   │   │   ├── Graph--------------------------------------Catalog of differential enrichment pathways
│   │   │   │   ├── *_vs_*_filter_kegg.xlsx--------------------KEGG annotated list of metabolites with significant differences
│   │   │   │   ├── *_vs_*_KEGG_barplot.*----------------------KEGG Differential Enrichment classification map (PNG or PDF file)
│   │   │   │   ├── *_vs_*_KEGG_Enrichment.*-------------------KEGG differential Enrichment bubble map (PNG or PDF file)
│   │   │   │   ├── KEGG_heatmap-------------------------------KEGG pathway differential metabolite clustering heat map catalog (PNG file or PDF file or interactive HTML file)
│   │   │   │   ├── *_vs_*_KEGG_DA_score.xlsx------------------KEGG differential abundance statistical table
│   │   │   │   ├── *_vs_*_KEGG_DA_score.*---------------------KEGG Differential abundance score map (PNG or PDF file)
│   │   │   │   ├── *_vs_*_KEGG.xlsx---------------------------KEGG differential enrichment statistics
│   │   │   │   ├── *_vs_*_KEGG_stat.xlsx----------------------KEGG differential enrichment classification table
│   │   │   │   ├── *_vs_*_KEGG_stat_AddLevel.xlsx-------------KEGG differential enrichment classification table(Add first-level classification information)
│   │   │   │   └── README.txt---------------------------------Readme documentation
│   │   │   ├── pca--------------------------------------------Differential analysis PCA analysis directory
│   │   │   │   ├── *_vs_*_pca3D.*-----------------------------Three-dimensional PCA results of corresponding grouped metabolites
│   │   │   │   ├── *_vs_*_pca_components.xlsx-----------------Results of PCA components of metabolites were obtained
│   │   │   │   ├── *_vs_*_pca_variance_proportion.xlsx--------Statistical results of PCA components of corresponding metabolites were obtained
│   │   │   │   ├── *_vs_*_pca.*-------------------------------PCA diagram of corresponding grouping metabolites
│   │   │   │   ├── *_vs_*_pca_ellipse.*-----------------------PCA plots of corresponding grouping metabolites (with confidence intervals of more than 3 samples in each group)
│   │   │   │   ├── *_vs_*_pcaVar.*----------------------------Explicable variation of the first five principal components of PCA corresponding to grouped metabolites
│   │   │   │   └── README.txt---------------------------------Readme documentation
│   │   │   ├── oPLS-------------------------------------------Difference analysis OPLS analysis directory
│   │   │   │   ├── *_vs_*_oPLS_model.*------------------------Corresponding grouping oPLSDA model outline diagram
│   │   │   │   ├── *_vs_*_oPLS_permutation.*------------------Corresponding grouping oPLSDA simulation verification diagram
│   │   │   │   ├── *_vs_*_oPLS_scoreplot.*--------------------Corresponding grouping oPLSDA score chart
│   │   │   │   ├── *_vs_*_oPLS_splot*-------------------------Corresponding group oPLSDA S-plot
│   │   │   │   └── README.txt---------------------------------Readme documentation
│   │   │   ├── heatmap----------------------------------------Differential analysis heat map analysis catalogue
│   │   │   │   ├── *_vs_*_heatmap_row_cluster*.*--------------Cluster heat map of metabolite content of corresponding group difference (cluster of metabolites)
│   │   │   │   ├── *_vs_*_heatmap_col-row_cluster*.*----------Clustering heat map of metabolite content of corresponding group difference (clustering for both metabolites and samples)
│   │   │   │   ├── *_vs_*_heatmap_class*.*--------------------Heat map of corresponding Group differential metabolite content (by metabolite classification)
│   │   │   │   └── README.txt---------------------------------Readme documentation
│   │   │   ├── TopFcBarMetabolites----------------------------Diff analysis diFF histogram analysis directory
│   │   │   │   ├── *_vs_*_TopFcBarMetabolites*.*--------------Histogram of the top 20 substances in the corresponding group differential metabolites
│   │   │   │   └── README.txt---------------------------------Readme documentation
│   │   │   ├── cpdCorr----------------------------------------Catalogue of correlation analysis of differential metabolites
│   │   │   │   ├── *_vs_*_raw_cpdCorr_*.*---------------------Heat map of correlation of all differential metabolites in the corresponding group (PDF file or PNG file)
│   │   │   │   ├── *_vs_*_raw_cpdCorr_*.xlsx------------------Table of phase relation of all differential metabolites in corresponding groups (note: Index: substance for short, other columns: correlation coefficients of this metabolite with other metabolites)
│   │   │   │   ├── *_vs_*_top*_cpdCorr_**---------------------Heat map of correlation between TOP 50 differential metabolites in corresponding groups (PDF or PNG file)
│   │   │   │   ├── *_vs_*_top*_cpdCorr_*.xlsx-----------------Table of the relationship between the TOP 50 differential metabolites in corresponding groups (note: Index: substance for short, other columns: correlation coefficients between this metabolite and other metabolites)
│   │   │   │   ├── *_vs_*_cpdCorr_circos*---------------------Chord diagram of all differential metabolites in corresponding groups (PDF or PNG file)
│   │   │   │   ├── *_vs_*_cpdCorr_Pvalue_*.*------------------Correlation information of circos graph
│   │   │   │   ├── *_vs_*_cpdCorr_network.*-------------------Network diagram of correlation of all differential metabolites in corresponding groups (PDF file or PNG file or interactive HTML file)
│   │   │   │   └── README.txt---------------------------------Readme documentation
│   │   │   ├── distribution-----------------------------------Catalog of differential analysis distribution maps
│   │   │   │   ├── *_vs_*_fc_distribution_*.* ----------------Log2FC dynamic distribution diagram of group difference multiple (PDF or PNG)
│   │   │   │   └── README.txt---------------------------------Readme documentation
│   │   │   ├── radarchart-------------------------------------Difference analysis radar map catalogue
│   │   │   │   ├── *_vs_*_radarchart.*------------------------Radar map of the top 10 substances in the difference multiples of corresponding group difference metabolites (PDF file or PNG file)
│   │   │   │   └── README.txt---------------------------------Readme documentation
│   │   │   ├── vipScore---------------------------------------Differential analysis differential metabolites VIP analysis directory
│   │   │   │   ├── *_vs_*_vipScore*.*-------------------------VIP value map of corresponding group differential metabolites (only the top 20, PDF file or PNG file)
│   │   │   │   └── README.txt---------------------------------Readme documentation
│   │   │   ├── fullViolin-------------------------------------Violin diagram analysis directory
│   │   │   │   ├── *_vs_*_fullViolin_*.*----------------------Whole violin diagram of corresponding group difference metabolites
│   │   │   │   └── README.txt---------------------------------Readme documentation
│   │   │   ├── vol--------------------------------------------Catalogue of differential volcanic map analysis
│   │   │   │   ├── *_vs_*_vol*.*------------------------------Volcanic map of metabolites with corresponding group differences (PDF file or PNG file or interactive HTML file)
│   │   │   │   └── README.txt---------------------------------Readme documentation
│   │   │   ├── zScore-----------------------------------------Catalogue of Z value analysis of differential metabolites
│   │   │   │   ├── *_vs_*_zScore_Index.*----------------------Z-value map of corresponding group differential metabolites (PDF file or PNG file or interactive HTML file)
│   │   │   │   └── README.txt---------------------------------Readme documentation
│   │   │   ├── ROC--------------------------------------------ROC analysis of differential metabolites
│   │   │   │   ├── *.ROC.*------------------------------------ROC curve of the corresponding grouping differential metabolites (PDF or PNG file)
│   │   │   │   ├── *_vs_*.AUC.xls-----------------------------AUC statistical table of corresponding group differential metabolites
│   │   │   │   └── README.txt---------------------------------Readme documentation
│   │   │   ├── carbons-----------------------------------Catalogue of differences in lipid subclass carbon chain length
│   │   │   │   ├── *carbons*---------------------------Lipid subclass carbon chain length difference analysis diagram
│   │   │   │   └── README.txt---------------------------------Readme documentation
│   │   │   ├── dendrogram----------------------------------------Differential grouping sample cluster diagram analysis directory
│   │   │   │   ├── *_vs_*_dendrogram*.*--------------Clustering tree of corresponding grouped samples (clustering of samples)
│   │   │   │   └── README.txt---------------------------------Readme documentation
│   │   │   ├── doubleBond------------------------------Catalog of lipid subclass unsaturation differences analysis
│   │   │   │   ├── *doubleBond*----------------------Analysis of unsaturation difference of lipid subclass carbon chain
│   │   │   │   └── README.txt---------------------------------Readme documentation
│   │   │   ├── scatter--------------------------------------------Differential lipid scatter map analysis catalogue
│   │   │   │   ├── *_vs_*_Class_scatter.*------------------------------Corresponding grouping difference lipid scatter map (PDF file or PNG file or interactive HTML file)
│   │   │   │   └── README.txt---------------------------------Readme documentation
│   │   │   └── README.txt---------------------------------Readme documentation
│   │   ├── sigMetabolitesCount.xlsx-------------------Statistical table of differential metabolites
│   │   ├── sigMetabolitesSummary.xlsx-------------------Summary of differential metabolites
│   │   └── README.txt---------------------------------Readme documentation
│   ├── kmeans-----------------------------------------Kmeans analysis of differential metabolites
│   │   ├── kmeans_group.xlsx--------------------------Kmeans clustering information table of differential metabolites
│   │   ├── kmeans_cluster.*---------------------------Kmeans Clustering Trend map of Differential metabolites (PDF or PNG file)
│   │   └── README.txt---------------------------------Readme documentation
│   └── README.txt---------------------------------Readme documentation
├── 3.Web_Report-----------------------------------Result Report Directory
│   ├── img----------------------------------------Report Picture Catalogue
│   ├── libs---------------------------------------Web report file library
│   ├── index.docx---------------------------------Word Report Content
│   ├── index.PDF----------------------------------PDF version Report content
│   ├── index.html---------------------------------Web version report content
│   └── README.txt---------------------------------Readme documentation
└── README.txt---------------------------------Document content introduction

