0.data-----------------------------------------All sample data information
├── unit.xlsx----------------------------------Metabolite content unit
├── *.levels.xlsx------------------------------Sample content
├── original.xlsx------------------------------Sample content(Before CV filtration)
├── QC---------------------------------------------Sample experiment quality control picture catalogue
│   ├── *_Integral_correction*diagram*.*-----------Integral correction diagram for quantitative analysis of metabolites
│   ├── *_MRM_detection_of*multimodal_maps*.*------Multi-peak map of MRM metabolite detection
│   ├── *_QC_MS*tic_overlap*.*---------------------QC sample essence spectrum analysis of total ion flow diagram
│   ├── *_QC_MS*TIC*.*-----------------------------TIC overlap was detected by QC sample essence spectrum
│   └── README.txt---------------------------------Readme documentation
├── sample_info.xlsx---------------------------Group information
└── README.txt---------------------------------Readme documentation
Table description:

*.levels.xlsx
  Index: MetWare ID;Compounds: the names of metabolites;Q1 (Da): The molecular weight of the parent ion after the addition of ions by electrospray ion source;Ionization model: Ionization mode (M+H is positively charged, M-H is negatively charged);Formula: the chemical formula of the compound;Sample columns: The amount of each substance in each sample;Mix or _R: mixture content;cpd_ID: ID information of metabolites in KEGG database;HMDB: Substance HMDB database number;lipidmaps ID: Substance number in the LIPID MAPS database;Pubchem CID: Substance number in the PubChem database;CAS: a unique numerical identification number for a substance;ChEBI: Substance number in the ChEBI database;Metlin: Substance number in the Metlin database;kegg_map: KEGG database signal path number

original.xlsx
  Index: MetWare ID;Compounds: the names of metabolites;Q1 (Da): The molecular weight of the parent ion after the addition of ions by electrospray ion source;Ionization model: Ionization mode (M+H is positively charged, M-H is negatively charged);Formula: the chemical formula of the compound;Sample columns: The amount of each substance in each sample;Mix or _R: mixture content;cpd_ID: ID information of metabolites in KEGG database;HMDB: Substance HMDB database number;lipidmaps ID: Substance number in the LIPID MAPS database;Pubchem CID: Substance number in the PubChem database;CAS: a unique numerical identification number for a substance;ChEBI: Substance number in the ChEBI database;Metlin: Substance number in the Metlin database;kegg_map: KEGG database signal path number

sample_info.xlsx
  Species：species
  Tissues：tissue site
  MW-ID：MW ID
  Sample-ID：sample ID
  Group：group
