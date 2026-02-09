0.data-----------------------------------------All sample data information
├── equation.xlsx------------------------------Information sheet of the equation for scaling
├── all_info.xlsx------------------------------Ion information table
├── unit.xlsx----------------------------------Metabolite content unit
├── *.levels.xlsx------------------------------Sample content
├── component.xlsx-----------------------------Table corresponding to ionic substances
├── sample_info.xlsx---------------------------Group information
└── README.txt---------------------------------Readme documentation
Table description:

equation.xlsx
  Index：substance abbreviation
  Name：the names of metabolites
  RT：Retention time
  Equation：Linear equation
  r：The correlation coefficient
  

*.levels.xlsx
  Index: MetWare ID;Compounds: the names of metabolites;Class: English Classification of Substances;Q1 (Da): The molecular weight of the parent ion after the material has passed through the ion source;Molecular Weight: Relative molecular weight;Ion mode: Ionization mode (M+H is positively charged, M-H is negatively charged);Formula: the chemical formula of the compound;Sample columns: The amount of each substance in each sample;cpd_ID: ID information of metabolites in KEGG database;CAS: a unique numerical identification number for a substance;kegg_map: KEGG database signal path number

sample_info.xlsx
  Species：species
  Tissues：tissue site
  MW-ID：MW ID
  Sample-ID：sample ID
  Group：group

all_info.xlsx
  Index: MetWare ID;Compounds: the names of metabolites;Class: English Classification of Substances;Q1 (Da): The molecular weight of the parent ion after the material has passed through the ion source;Molecular Weight: Relative molecular weight;Ion mode: Ionization mode (M+H is positively charged, M-H is negatively charged);Formula: the chemical formula of the compound;Sample columns: The amount of each substance in each sample;cpd_ID: ID information of metabolites in KEGG database;CAS: a unique numerical identification number for a substance;kegg_map: KEGG database signal path number
