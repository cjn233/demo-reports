kmeans-----------------------------------------Kmeans analysis of differential metabolites
├── kmeans_group.xlsx--------------------------Kmeans clustering information table of differential metabolites
├── kmeans_cluster.*---------------------------Kmeans Clustering Trend map of Differential metabolites (PDF or PNG file)
└── README.txt---------------------------------Readme documentation
Table description:

kmeans_group.xlsx
  Group：The serial number of kmeans clustering category corresponds to the serial number of Sub Class in the Kmeans graph
  Index: MetWare ID;Formula: the chemical formula of the compound;Compounds: the names of metabolites;lipidmaps ID: Substance number in the LIPID MAPS database;The N/A values are filled with zeros;VIP value represents the effect of the differences between groups for a particular metabolite in various models and sample groups. It is generally considered that the metabolites with VIP ≥ 1 have significant difference.;Pvalue：Significance test p-value;Type：Metabolites up or down regualation
