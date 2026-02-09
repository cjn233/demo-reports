Result file composition description
The tree diagram in the front shows the structure of the result file, and the file type description is behind the symbol.
Depending on the actual situation, the directory structure may be different: some data may not meet the prerequisites for some analysis, so the result file does not have the analysis directory and results.
It is recommended to use Firefox or Google Chrome to open the report in web version (html) format.

First-level catalog classification:
MW-*----------------------------------------------Project ID of Metware 
├── MW-*/1.Data_Assess----------------------------Directoryof Data Evaluation （The content is mainly the quality evaluation results of all samples including quality control samples, including PCA, cluster heat map, correlation analysis and KEGG annotation information.）
├── MW-*/2.Basic_Analysis-------------------------Directory of basic data analysis（The content is mainly the difference screening enrichment result of each grouping and the Venn diagram result between each difference grouping）
└── MW-*/3.Result_Report--------------------------Directory of results report（The directory where the project results report is located. You can directly click the index.html file in the directory to view the final web version report locally）

Detailed directory description
.
├── 0.data-----------------------------------------All sample data information
│   ├── equation.xlsx------------------------------Information sheet of the equation for scaling
│   ├── all_info.xlsx------------------------------Ion information table
│   ├── unit.xlsx----------------------------------Metabolite content unit
│   ├── *.levels.xlsx------------------------------Sample content
│   ├── component.xlsx-----------------------------Table corresponding to ionic substances
│   ├── sample_info.xlsx---------------------------Group information
│   └── README.txt---------------------------------Readme documentation
├── 1.Data_Assess----------------------------------Data Evaluation catalogue
│   ├── histogram--------------------------------------Content bar chart catalogue
│   │   ├── *.levels.*---------------------------------Summary diagram of all substance contents
│   │   ├── histogarm_compounds------------------------Summary chart of material content
│   │   │   └── *.histogarm.*--------------------------Summary diagram of substance content
│   │   ├── groups.stat.xlsx---------------------------Statistical value of material content
│   │   └── README.txt---------------------------------Readme documentation
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
│   │   │   │   ├── KEGG_heatmap-------------------------------KEGG pathway differential metabolite clustering heat map catalog (PNG file or PDF file or interactive HTML file)
│   │   │   │   ├── *_vs_*_KEGG.xlsx---------------------------KEGG differential enrichment statistics
│   │   │   │   ├── *_vs_*_KEGG_stat.xlsx----------------------KEGG differential enrichment classification table
│   │   │   │   ├── *_vs_*_KEGG_stat_AddLevel.xlsx-------------KEGG differential enrichment classification table(Add first-level classification information)
│   │   │   │   └── README.txt---------------------------------Readme documentation
│   │   │   └── README.txt---------------------------------Readme documentation
│   │   ├── sigMetabolitesCount.xlsx-------------------Statistical table of differential metabolites
│   │   ├── sigMetabolitesSummary.xlsx-------------------Summary of differential metabolites
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

