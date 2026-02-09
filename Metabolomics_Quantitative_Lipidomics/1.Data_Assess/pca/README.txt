pca--------------------------------------------Principal component analysis catalogue of all samples
├── all_pca3D.*--------------------------------Three-dimensional PCA results of metabolites of all samples (including QC samples)
├── all_pca.*----------------------------------PCA plots of metabolites of all samples (including QC samples, without confidence intervals)
├── all_pca_ellipse.*--------------------------PCA plots of metabolites of all samples (including QC samples, with confidence intervals of more than 3 samples in each group)
├── all_pcaVar.*-------------------------------Explainable variation of the first 5 principal components of METABOLite PCA in all samples (including QC samples)
├── all_pca_components.xlsx--------------------Results of PCA components of metabolites of all samples (including QC samples)
├── all_pca_variance_proportion.xlsx-----------Statistical results of PCA components of metabolites of all samples (including QC samples)
├── all_pca_no-qc.*----------------------------PCA plots of metabolites of all samples (no QC samples, no confidence intervals)
├── all_pca_no-qc_ellipse.*--------------------PCA plots of metabolites of all samples (no QC samples, with confidence intervals of more than 3 samples in each group)
├── all_pca_no-qc_components.xlsx--------------Results of PCA components of metabolites in all samples (without QC samples)
├── all_pca_no-qc_variance_proportion.xlsx-----Statistical results of PCA components of metabolites in all samples (without QC samples)
├── all_pca*PC1_QCC.*--------------------------PC1 control diagram for all samples (including QC samples)
└── README.txt---------------------------------Readme documentation
Table description:

all_pca_*variance_proportion.xlsx
  PC1——PCx：The first to N principal components
  standard deviation：Principal component standard deviation
  Proportion of Variance：The fraction of the variance of the principal component
  Cumulative Proportion：Cumulative contribution rate of principal component

all_pca_*components.xlsx
  PC1——PCx：The first to N principal components

Note:

_no-qc
  The PCA result file contains keywords：_no-qc,Means that the result does not contain QC samples, no means that the result contains QC samples

_ellipse
  The PCA diagram file contains keywords：_ellipse，If each group of samples has more than 3 samples, the confidence interval will be increased; if no, the confidence interval will not be increased

_ellipse
  The PCA diagram file contains keywords：_ellipse，If each group of samples has more than 3 samples, the confidence interval will be increased; if no, the confidence interval will not be increased
