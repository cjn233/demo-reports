pca--------------------------------------------Principal component analysis of all samples
├── *_PCA.*------------------------------------PCA 2D result of all samples (including the QC samples, pdf file or png file or interactive html file)
├── *_PCA_ellipse.*----------------------------PCA 2D result of all samples (including the QC samples and adding ellispse when more than 2 samples in the groups, pdf file or png file)
├── *_PCA3D.*----------------------------------PCA 3D results of all samples (including the QC samples, pdf file or png file or interactive html file)
├── *_PCA_components.xlsx----------------------PCA data of all principal components of all samples (including the QC samples)
├── *_PCA_variance_proportion.xlsx-------------Contribution rate of PCA principal component variance of all samples (including QC samples)
├── *_no-QC_PCA.*------------------------------PCA 2D results of all samples (no QC samples, pdf file or png file or interactive html file)
├── *_no-QC_PCA_ellipse.*----------------------PCA 2D results of all samples (no QC samples and adding ellispse when more than 2 samples in the groups, pdf file or png file)
├── *_no-QC_PCA3D.*----------------------------PCA 3D results of all samples (no QC samples, pdf file or png file or interactive html file)
├── *_no-QC_PCA_variance.*---------------------Explainable variation of the first 5 principal components of PCA for all samples (no QC samples, pdf file or png file)
├── *_no-QC_PCA_components.xlsx----------------PCA data of all principal components of all samples (no QC samples)
├── *_no-QC_PCA_variance_proportion.xlsx-------Contribution rate of PCA principal component variance of all samples (no QC samples)
├── *_PC1_QCC.*--------------------------------PC1 control chart for all samples (including the QC samples, pdf file or png file)
└── README.txt---------------------------------Document content introduction
Table description:

*PCA_variance_proportion.xlsx
  PC1-PCx: The first to N principal components
  Standard deviation: Principal component standard deviation
  Proportion of Variance: Proportion of principal component variance
  Cumulative Proportion: Cumulative contribution rate of principal components

*PCA_components.xlsx
  PC1-PCx: The first to N principal components

Note:

_no-QC
  no-QC: The PCA result file contains keywords: no-QC, which means that the result does not contain QC samples, if not, it means that the results contain QC samples

_ellipse
  _ellipse: The PCA result file contains keywords: _ellipse, which means that the result adds ellispse when more than 2 samples in the groups, if not, it means that the results does not add ellipse
