
<div class='tableName'>


# TaxPayerConfiguration
</div>

**Arabic:** إعدادات مصلحة الضرائب - ملفات إعدادات مصلحة الضرائب
**English:** Electronic Tax Authority Configuration - Electronic Tax Authority Configuration Files

<ContentFilter/>


<div class='searchable'>
<a href='#configs'>configs (EInvoiceConfigLine) </a> , <a href='#discountConfigs'>discountConfigs (EInvoiceDiscountConfigLine) </a> , <a href='#posTerminals'>posTerminals (TaxConfigurationPOSTerminalLine) </a> , <a href='#serviceFeesAndChargesToCustomerConfigs'>serviceFeesAndChargesToCustomerConfigs (ServiceFeesAndChargesToCustomerConfig) </a> , <a href='#taxCodesSource'>taxCodesSource (TaxConfigurationCodeSource) </a>
</div>

<div class='searchable'>

## Fields

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="activityType">
<div class="cell" data-label="Property">activityType</div>
<div class="cell" data-label="Column">activityType</div>
<div class="cell" data-label="Arabic">نوع النشاط للفرع</div>
<div class="cell" data-label="English">Activity Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="allowSendPastEInvoiceFromDate">
<div class="cell" data-label="Property">allowSendPastEInvoiceFromDate</div>
<div class="cell" data-label="Column">allowSendPastEInvoiceFromDate</div>
<div class="cell" data-label="Arabic">السماح بإرسال المستندات القديمة من تاريخ</div>
<div class="cell" data-label="English">Allow Sending Past e-Invoice From Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="allowSendPastEInvoiceToDate">
<div class="cell" data-label="Property">allowSendPastEInvoiceToDate</div>
<div class="cell" data-label="Column">allowSendPastEInvoiceToDate</div>
<div class="cell" data-label="Arabic">السماح بإرسال المستندات القديمة إلي تاريخ</div>
<div class="cell" data-label="English">Allow Sending Past e-Invoice To Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="analysisSet">
<div class="cell" data-label="Property">analysisSet</div>
<div class="cell" data-label="Column">analysisSet_id</div>
<div class="cell" data-label="Arabic">المجموعة التحليلية</div>
<div class="cell" data-label="English">Analysis set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/modules/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="analysisSetId">
<div class="cell" data-label="Property">analysisSetId</div>
<div class="cell" data-label="Column">analysisSet_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="apiKey">
<div class="cell" data-label="Property">apiKey</div>
<div class="cell" data-label="Column">apiKey</div>
<div class="cell" data-label="Arabic">API Key</div>
<div class="cell" data-label="English">API Key</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="apiUrl">
<div class="cell" data-label="Property">apiUrl</div>
<div class="cell" data-label="Column">apiUrl</div>
<div class="cell" data-label="Arabic">API URL</div>
<div class="cell" data-label="English">API URL</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="branch">
<div class="cell" data-label="Property">branch</div>
<div class="cell" data-label="Column">branch_id</div>
<div class="cell" data-label="Arabic">الفرع</div>
<div class="cell" data-label="English">Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/modules/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="branchId">
<div class="cell" data-label="Property">branchId</div>
<div class="cell" data-label="Column">branch_id</div>
<div class="cell" data-label="Arabic">Branch ID</div>
<div class="cell" data-label="English">Branch ID</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="branchIdDimension">
<div class="cell" data-label="Property">branchIdDimension</div>
<div class="cell" data-label="Column">branchIdDimension</div>
<div class="cell" data-label="Arabic">حساب معرف الفرع من</div>
<div class="cell" data-label="English">Branch Id From</div>
<div class="cell" data-label="Type">EntityType</div>

</div>

<div class="row searchable" id="branchTaxAuthorityCodeTemplate">
<div class="cell" data-label="Property">branchTaxAuthorityCodeTemplate</div>
<div class="cell" data-label="Column">branchTaxAuthorityCodeTemplate</div>
<div class="cell" data-label="Arabic">قالب كود الفرع</div>
<div class="cell" data-label="English">Branch Tax Authority Code Template</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="chargesFeeFields">
<div class="cell" data-label="Property">chargesFeeFields</div>
<div class="cell" data-label="Column">chargesFeeFields</div>
<div class="cell" data-label="Arabic">حقول رسوم الخدمة</div>
<div class="cell" data-label="English">Charge Fee Fields</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="chargesFeeIncludeTax">
<div class="cell" data-label="Property">chargesFeeIncludeTax</div>
<div class="cell" data-label="Column">chargesFeeIncludeTax</div>
<div class="cell" data-label="Arabic">رسوم الخدمة شاملة الضريبة</div>
<div class="cell" data-label="English">Charge Fee Value</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="chargesFeeTaxPercent">
<div class="cell" data-label="Property">chargesFeeTaxPercent</div>
<div class="cell" data-label="Column">chargesFeeTaxPercent</div>
<div class="cell" data-label="Arabic">نسبة الضريبة للخدمة</div>
<div class="cell" data-label="English">Charge Fee Tax Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="code">
<div class="cell" data-label="Property">code</div>
<div class="cell" data-label="Column">code</div>
<div class="cell" data-label="Arabic">الكود</div>
<div class="cell" data-label="English">Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="colorCode">
<div class="cell" data-label="Property">colorCode</div>
<div class="cell" data-label="Column">colorCode</div>
<div class="cell" data-label="Arabic">كود اللون</div>
<div class="cell" data-label="English">Color Code</div>
<div class="cell" data-label="Type">Color</div>

</div>

<div class="row searchable" id="commitedBefore">
<div class="cell" data-label="Property">commitedBefore</div>
<div class="cell" data-label="Column">commitedBefore</div>
<div class="cell" data-label="Arabic">تم الحفظ مسبقا</div>
<div class="cell" data-label="English">Commited Before</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="createTransactionId">
<div class="cell" data-label="Property">createTransactionId</div>
<div class="cell" data-label="Column">createTransactionId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="creationDate">
<div class="cell" data-label="Property">creationDate</div>
<div class="cell" data-label="Column">creationDate</div>
<div class="cell" data-label="Arabic">تاريخ الإنشاء</div>
<div class="cell" data-label="English">Creation Date</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="currentApprovalCase">
<div class="cell" data-label="Property">currentApprovalCase</div>
<div class="cell" data-label="Column">currentApprovalCase_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type"></div>
<div class="cell" data-label="Foreign Table">

 [ApprovalCase](/modules/system-tables/ApprovalCase.md) 
</div>
</div>

<div class="row searchable" id="currentVersion">
<div class="cell" data-label="Property">currentVersion</div>
<div class="cell" data-label="Column">currentVersion</div>
<div class="cell" data-label="Arabic">النسخة الحالية</div>
<div class="cell" data-label="English">Current Version</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="customViewName">
<div class="cell" data-label="Property">customViewName</div>
<div class="cell" data-label="Column">customViewName</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="customerAdditionalInfoTemplate">
<div class="cell" data-label="Property">customerAdditionalInfoTemplate</div>
<div class="cell" data-label="Column">customerAdditionalInfoTemplate</div>
<div class="cell" data-label="Arabic">قالب بيانات عميل إضافية</div>
<div class="cell" data-label="English">Customer Additional Information Template</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="date1">
<div class="cell" data-label="Property">date1</div>
<div class="cell" data-label="Column">date1</div>
<div class="cell" data-label="Arabic">تـــاريخ 1</div>
<div class="cell" data-label="English">Date 1</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="date2">
<div class="cell" data-label="Property">date2</div>
<div class="cell" data-label="Column">date2</div>
<div class="cell" data-label="Arabic">تـــاريخ 2</div>
<div class="cell" data-label="English">Date 2</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="date3">
<div class="cell" data-label="Property">date3</div>
<div class="cell" data-label="Column">date3</div>
<div class="cell" data-label="Arabic">تاريخ 3</div>
<div class="cell" data-label="English">Date3</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="date4">
<div class="cell" data-label="Property">date4</div>
<div class="cell" data-label="Column">date4</div>
<div class="cell" data-label="Arabic">تاريخ 4</div>
<div class="cell" data-label="English">Date4</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="date5">
<div class="cell" data-label="Property">date5</div>
<div class="cell" data-label="Column">date5</div>
<div class="cell" data-label="Arabic">تاريخ 5</div>
<div class="cell" data-label="English">Date5</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="department">
<div class="cell" data-label="Property">department</div>
<div class="cell" data-label="Column">department_id</div>
<div class="cell" data-label="Arabic">الإدارة</div>
<div class="cell" data-label="English">Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/modules/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="departmentId">
<div class="cell" data-label="Property">departmentId</div>
<div class="cell" data-label="Column">department_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="description1">
<div class="cell" data-label="Property">description1</div>
<div class="cell" data-label="Column">description1</div>
<div class="cell" data-label="Arabic">الوصف 1</div>
<div class="cell" data-label="English">description1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="description2">
<div class="cell" data-label="Property">description2</div>
<div class="cell" data-label="Column">description2</div>
<div class="cell" data-label="Arabic">الوصف 2</div>
<div class="cell" data-label="English">description2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="description3">
<div class="cell" data-label="Property">description3</div>
<div class="cell" data-label="Column">description3</div>
<div class="cell" data-label="Arabic">الوصف 3</div>
<div class="cell" data-label="English">description3</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="description4">
<div class="cell" data-label="Property">description4</div>
<div class="cell" data-label="Column">description4</div>
<div class="cell" data-label="Arabic">الوصف 4</div>
<div class="cell" data-label="English">description4</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="description5">
<div class="cell" data-label="Property">description5</div>
<div class="cell" data-label="Column">description5</div>
<div class="cell" data-label="Arabic">الوصف 5</div>
<div class="cell" data-label="English">description5</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="doNotSendTax1IfNoCode">
<div class="cell" data-label="Property">doNotSendTax1IfNoCode</div>
<div class="cell" data-label="Column">doNotSendTax1IfNoCode</div>
<div class="cell" data-label="Arabic">عدم إرسال ضريبة 1 عند عدم وجود أكواد لها</div>
<div class="cell" data-label="English">Do Not Send Tax 1 If Codes Not Provided</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="doNotSendTax2IfNoCode">
<div class="cell" data-label="Property">doNotSendTax2IfNoCode</div>
<div class="cell" data-label="Column">doNotSendTax2IfNoCode</div>
<div class="cell" data-label="Arabic">عدم إرسال ضريبة 2 عند عدم وجود أكواد لها</div>
<div class="cell" data-label="English">Do Not Send Tax 2 If Codes Not Provided</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="doNotSendTax3IfNoCode">
<div class="cell" data-label="Property">doNotSendTax3IfNoCode</div>
<div class="cell" data-label="Column">doNotSendTax3IfNoCode</div>
<div class="cell" data-label="Arabic">عدم إرسال ضريبة 3 عند عدم وجود أكواد لها</div>
<div class="cell" data-label="English">Do Not Send Tax 3 If Codes Not Provided</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="doNotSendTax4IfNoCode">
<div class="cell" data-label="Property">doNotSendTax4IfNoCode</div>
<div class="cell" data-label="Column">doNotSendTax4IfNoCode</div>
<div class="cell" data-label="Arabic">عدم إرسال ضريبة 4 عند عدم وجود أكواد لها</div>
<div class="cell" data-label="English">Do Not Send Tax 4 If Codes Not Provided</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="docCategory">
<div class="cell" data-label="Property">docCategory</div>
<div class="cell" data-label="Column">docCategory_id</div>
<div class="cell" data-label="Arabic"> تصنيف سجل</div>
<div class="cell" data-label="English"> Record Category</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DocCategory](/modules/basic/DocCategory.md) 
</div>
</div>

<div class="row searchable" id="documentFileStatus">
<div class="cell" data-label="Property">documentFileStatus</div>
<div class="cell" data-label="Column">documentFileStatus</div>
<div class="cell" data-label="Arabic">حالة المستند</div>
<div class="cell" data-label="English">Document File Status</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="draftCreated">
<div class="cell" data-label="Property">draftCreated</div>
<div class="cell" data-label="Column">draftCreated</div>
<div class="cell" data-label="Arabic">تم إنشاء مسودة</div>
<div class="cell" data-label="English">Draft Created</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="draftXML">
<div class="cell" data-label="Property">draftXML</div>
<div class="cell" data-label="Column">draftXML</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="editedBy">
<div class="cell" data-label="Property">editedBy</div>
<div class="cell" data-label="Column">editedBy_id</div>
<div class="cell" data-label="Arabic">بواسطة</div>
<div class="cell" data-label="English">Edited By</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [NaMaUser](/modules/system-tables/NaMaUser.md) 
</div>
</div>

<div class="row searchable" id="egsSerialNumber">
<div class="cell" data-label="Property">egsSerialNumber</div>
<div class="cell" data-label="Column">egsSerialNumber</div>
<div class="cell" data-label="Arabic">EGS Serial Number</div>
<div class="cell" data-label="English">EGS Serial Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="einvoiceDocType">
<div class="cell" data-label="Property">einvoiceDocType</div>
<div class="cell" data-label="Column">einvoiceDocType</div>
<div class="cell" data-label="Arabic">نوع المستند المٌرسل</div>
<div class="cell" data-label="English">E Invoice Document Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="einvoiceSignerPin">
<div class="cell" data-label="Property">einvoiceSignerPin</div>
<div class="cell" data-label="Column">einvoiceSignerPin</div>
<div class="cell" data-label="Arabic">E Invoice Signer Pin</div>
<div class="cell" data-label="English">E Invoice Signer Pin</div>
<div class="cell" data-label="Type">Password</div>

</div>

<div class="row searchable" id="einvoiceSignerType">
<div class="cell" data-label="Property">einvoiceSignerType</div>
<div class="cell" data-label="Column">einvoiceSignerType</div>
<div class="cell" data-label="Arabic">E Invoice Signer Type</div>
<div class="cell" data-label="English">E Invoice Signer Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="einvoiceSignerUrl">
<div class="cell" data-label="Property">einvoiceSignerUrl</div>
<div class="cell" data-label="Column">einvoiceSignerUrl</div>
<div class="cell" data-label="Arabic">E Invoice Signer URL</div>
<div class="cell" data-label="English">E Invoice Signer URL</div>
<div class="cell" data-label="Type">Link</div>

</div>

<div class="row searchable" id="entitySystemEntryId">
<div class="cell" data-label="Property">entitySystemEntryId</div>
<div class="cell" data-label="Column">entitySystemEntry_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="entityType">
<div class="cell" data-label="Property">entityType</div>
<div class="cell" data-label="Column">entityType</div>
<div class="cell" data-label="Arabic">النوع</div>
<div class="cell" data-label="English">Entity Type</div>
<div class="cell" data-label="Type">EntityType</div>

</div>

<div class="row searchable" id="esignerExecutionFile">
<div class="cell" data-label="Property">esignerExecutionFile</div>
<div class="cell" data-label="Column">esignerExecutionFile</div>
<div class="cell" data-label="Arabic">E Signer Execution File Name</div>
<div class="cell" data-label="English">E Signer Execution File Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="esignerInstalltionFolder">
<div class="cell" data-label="Property">esignerInstalltionFolder</div>
<div class="cell" data-label="Column">esignerInstalltionFolder</div>
<div class="cell" data-label="Arabic">E Signer Installation Folder Path</div>
<div class="cell" data-label="English">E Signer Installation Folder Path</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="firstAuthor">
<div class="cell" data-label="Property">firstAuthor</div>
<div class="cell" data-label="Column">firstAuthor_id</div>
<div class="cell" data-label="Arabic">منشئ السجل</div>
<div class="cell" data-label="English">First Author</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [NaMaUser](/modules/system-tables/NaMaUser.md) 
</div>
</div>

<div class="row searchable" id="firstAuthorId">
<div class="cell" data-label="Property">firstAuthorId</div>
<div class="cell" data-label="Column">firstAuthor_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="futureDaysToAllowSaveDoc">
<div class="cell" data-label="Property">futureDaysToAllowSaveDoc</div>
<div class="cell" data-label="Column">futureDaysToAllowSaveDoc</div>
<div class="cell" data-label="Arabic">عدد الأيام للسماح بإنشاء مستندات مستقبلية</div>
<div class="cell" data-label="English">Days To Allow Save Document In Future</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="generatedByLine">
<div class="cell" data-label="Property">generatedByLine</div>
<div class="cell" data-label="Column">generatedByLine</div>
<div class="cell" data-label="Arabic">كود سطر الإنشاء</div>
<div class="cell" data-label="English">generated By Line</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="generatedDocsCount">
<div class="cell" data-label="Property">generatedDocsCount</div>
<div class="cell" data-label="Column">generatedDocsCount</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="generatedFrom">
<div class="cell" data-label="Property">generatedFrom</div>
<div class="cell gen-ref-column" data-label="Column">generatedFromActualCode,  generatedFromCode,  generatedFromEntityType,  generatedFromId</div>
<div class="cell" data-label="Arabic">تم إنشاؤه من</div>
<div class="cell" data-label="English">Generated From</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="generationType">
<div class="cell" data-label="Property">generationType</div>
<div class="cell" data-label="Column">generationType</div>
<div class="cell" data-label="Arabic">نوع الإنشاء</div>
<div class="cell" data-label="English">Generation Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="group">
<div class="cell" data-label="Property">group</div>
<div class="cell" data-label="Column">group_id</div>
<div class="cell" data-label="Arabic">المجموعة</div>
<div class="cell" data-label="English">Group</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MasterGroup](/modules/basic/MasterGroup.md) 
</div>
</div>

<div class="row searchable" id="id">
<div class="cell" data-label="Property">id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="identityUrl">
<div class="cell" data-label="Property">identityUrl</div>
<div class="cell" data-label="Column">identityUrl</div>
<div class="cell" data-label="Arabic">Identity Server URL</div>
<div class="cell" data-label="English">Identity Server URL</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="ignoreItemWithTaxCode">
<div class="cell" data-label="Property">ignoreItemWithTaxCode</div>
<div class="cell" data-label="Column">ignoreItemWithTaxCode</div>
<div class="cell" data-label="Arabic">تجاهل سطور الأصناف التى لها الكود الضريبي التالي</div>
<div class="cell" data-label="English">Ignore Lines With Item Whose Tax Code Is</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="indexInParent">
<div class="cell" data-label="Property">indexInParent</div>
<div class="cell" data-label="Column">indexInParent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="intermediaryServerClientId">
<div class="cell" data-label="Property">intermediaryServerClientId</div>
<div class="cell" data-label="Column">intermediaryServerClientId</div>
<div class="cell" data-label="Arabic">Intermediary Server Client ID</div>
<div class="cell" data-label="English">Intermediary Server Client ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="intermediaryServerClientSecret">
<div class="cell" data-label="Property">intermediaryServerClientSecret</div>
<div class="cell" data-label="Column">intermediaryServerClientSecret</div>
<div class="cell" data-label="Arabic">Intermediary Server Client Secret</div>
<div class="cell" data-label="English">Intermediary Server Client Secret</div>
<div class="cell" data-label="Type">Password</div>

</div>

<div class="row searchable" id="intermediaryServerUrl">
<div class="cell" data-label="Property">intermediaryServerUrl</div>
<div class="cell" data-label="Column">intermediaryServerUrl</div>
<div class="cell" data-label="Arabic">Intermediary Server URL</div>
<div class="cell" data-label="English">Intermdiary Server URL</div>
<div class="cell" data-label="Type">Link</div>

</div>

<div class="row searchable" id="internalCodeFrom">
<div class="cell" data-label="Property">internalCodeFrom</div>
<div class="cell" data-label="Column">internalCodeFrom</div>
<div class="cell" data-label="Arabic">تشغيل قالب كود نما على (كود الصنف افتراضيا)</div>
<div class="cell" data-label="English">Run Item Nama Code Template On (Item Code by Default)</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="internalCodeTemplate">
<div class="cell" data-label="Property">internalCodeTemplate</div>
<div class="cell" data-label="Column">internalCodeTemplate</div>
<div class="cell" data-label="Arabic">قالب كود نما</div>
<div class="cell" data-label="English">Item Internal Code Template</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="internalItemCodeMaxLength">
<div class="cell" data-label="Property">internalItemCodeMaxLength</div>
<div class="cell" data-label="Column">internalItemCodeMaxLength</div>
<div class="cell" data-label="Arabic">اقصي عدد حروف لكود الصنف الداخلي</div>
<div class="cell" data-label="English">Internal Item Code Maximum Length</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="itemCodeFrom">
<div class="cell" data-label="Property">itemCodeFrom</div>
<div class="cell" data-label="Column">itemCodeFrom</div>
<div class="cell" data-label="Arabic">حساب الكود الضريبي للصنف من</div>
<div class="cell" data-label="English">=Calculate Item Code From</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="itemCodeTemplate">
<div class="cell" data-label="Property">itemCodeTemplate</div>
<div class="cell" data-label="Column">itemCodeTemplate</div>
<div class="cell" data-label="Arabic">قالب كود الصنف</div>
<div class="cell" data-label="English">Item Code Template</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="lastChangeVersion">
<div class="cell" data-label="Property">lastChangeVersion</div>
<div class="cell" data-label="Column">lastChangeVersion</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="lastModifyTransactionId">
<div class="cell" data-label="Property">lastModifyTransactionId</div>
<div class="cell" data-label="Column">LastModifyTransactionId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="lastNotificationReadTime">
<div class="cell" data-label="Property">lastNotificationReadTime</div>
<div class="cell" data-label="Column">lastNotificationReadTime</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="lastReadSubmissionDateForReceivedDocuments">
<div class="cell" data-label="Property">lastReadSubmissionDateForReceivedDocuments</div>
<div class="cell" data-label="Column">lastReadSubmissionDateForReceivedDocuments</div>
<div class="cell" data-label="Arabic">تاريخ آخر قراءة للفواتير المستقبلة من مصلحة الضرائب</div>
<div class="cell" data-label="English">Last Read Submission Date For Received Documents</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="lastUpdateDate">
<div class="cell" data-label="Property">lastUpdateDate</div>
<div class="cell" data-label="Column">lastUpdateDate</div>
<div class="cell" data-label="Arabic">تاريخ اخر تحديث</div>
<div class="cell" data-label="English">Last update Date</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="legalEntity">
<div class="cell" data-label="Property">legalEntity</div>
<div class="cell" data-label="Column">legalEntity_id</div>
<div class="cell" data-label="Arabic">الشركة</div>
<div class="cell" data-label="English">Legal Entity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [LegalEntity](/modules/basic/LegalEntity.md) 
</div>
</div>

<div class="row searchable" id="legalEntityId">
<div class="cell" data-label="Property">legalEntityId</div>
<div class="cell" data-label="Column">legalEntity_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="lockVersion">
<div class="cell" data-label="Property">lockVersion</div>
<div class="cell" data-label="Column">lockVersion</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="mainFile">
<div class="cell" data-label="Property">mainFile</div>
<div class="cell" data-label="Column">mainFile_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/modules/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="maxDaysToCancelInvoice">
<div class="cell" data-label="Property">maxDaysToCancelInvoice</div>
<div class="cell" data-label="Column">maxDaysToCancelInvoice</div>
<div class="cell" data-label="Arabic">أقصي عدد أيام لإلغاء الفواتير المُرسلة</div>
<div class="cell" data-label="English">Max Days To Cancel Sent Invoices</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="maxDaysToSendInvoice">
<div class="cell" data-label="Property">maxDaysToSendInvoice</div>
<div class="cell" data-label="Column">maxDaysToSendInvoice</div>
<div class="cell" data-label="Arabic">أقصي عدد أيام لإرسال الفواتير</div>
<div class="cell" data-label="English">Max Days To Send Invoices</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="maxDocumentsPerRequest">
<div class="cell" data-label="Property">maxDocumentsPerRequest</div>
<div class="cell" data-label="Column">maxDocumentsPerRequest</div>
<div class="cell" data-label="Arabic">اقصي عدد من المستندات للإرسال في المرة الواحدة</div>
<div class="cell" data-label="English">Maximum Documents Per Request</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="minInvValueCustomerRequired">
<div class="cell" data-label="Property">minInvValueCustomerRequired</div>
<div class="cell" data-label="Column">minInvValueCustomerRequired</div>
<div class="cell" data-label="Arabic">أقل قيمة للفاتورة لإرسال العميل إجباريا</div>
<div class="cell" data-label="English">Minimum Invoice Value To Mandatory Send Customer</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="minReceiptValueCustomerRequired">
<div class="cell" data-label="Property">minReceiptValueCustomerRequired</div>
<div class="cell" data-label="Column">minReceiptValueCustomerRequired</div>
<div class="cell" data-label="Arabic">أقل قيمة للإيصال لإرسال العميل إجباريا</div>
<div class="cell" data-label="English">Minimum Receipt Value To Mandatory Send Customer</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="n1">
<div class="cell" data-label="Property">n1</div>
<div class="cell" data-label="Column">n1</div>
<div class="cell" data-label="Arabic">رقم 1</div>
<div class="cell" data-label="English">Number 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="n2">
<div class="cell" data-label="Property">n2</div>
<div class="cell" data-label="Column">n2</div>
<div class="cell" data-label="Arabic">رقم 2</div>
<div class="cell" data-label="English">Number 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="n3">
<div class="cell" data-label="Property">n3</div>
<div class="cell" data-label="Column">n3</div>
<div class="cell" data-label="Arabic">رقم 3</div>
<div class="cell" data-label="English">Number 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="n4">
<div class="cell" data-label="Property">n4</div>
<div class="cell" data-label="Column">n4</div>
<div class="cell" data-label="Arabic">رقم 4</div>
<div class="cell" data-label="English">Number 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="n5">
<div class="cell" data-label="Property">n5</div>
<div class="cell" data-label="Column">n5</div>
<div class="cell" data-label="Arabic">رقم 5</div>
<div class="cell" data-label="English">Number 5</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="name1">
<div class="cell" data-label="Property">name1</div>
<div class="cell" data-label="Column">name1</div>
<div class="cell" data-label="Arabic">الاسم العربي</div>
<div class="cell" data-label="English">Name1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="name2">
<div class="cell" data-label="Property">name2</div>
<div class="cell" data-label="Column">name2</div>
<div class="cell" data-label="Arabic">الاسم الإنجليزي</div>
<div class="cell" data-label="English">Name2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="notificationReadTask">
<div class="cell" data-label="Property">notificationReadTask</div>
<div class="cell" data-label="Column">notificationReadTask_id</div>
<div class="cell" data-label="Arabic">Notification Read Task Schedule</div>
<div class="cell" data-label="English">Notification Read Task Schedule</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [TaskSchedule](/modules/basic/TaskSchedule.md) 
</div>
</div>

<div class="row searchable" id="organizationUnitName">
<div class="cell" data-label="Property">organizationUnitName</div>
<div class="cell" data-label="Column">organizationUnitName</div>
<div class="cell" data-label="Arabic">Organization Unit Name</div>
<div class="cell" data-label="English">Organization Unit Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="parentCode">
<div class="cell" data-label="Property">parentCode</div>
<div class="cell" data-label="Column">parentCode</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="password">
<div class="cell" data-label="Property">password</div>
<div class="cell" data-label="Column">password</div>
<div class="cell" data-label="Arabic">كلمة المرور</div>
<div class="cell" data-label="English">Password</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="portalUrl">
<div class="cell" data-label="Property">portalUrl</div>
<div class="cell" data-label="Column">portalUrl</div>
<div class="cell" data-label="Arabic">Portal URL</div>
<div class="cell" data-label="English">Portal URL</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="posClientId">
<div class="cell" data-label="Property">posClientId</div>
<div class="cell" data-label="Column">posClientId</div>
<div class="cell" data-label="Arabic">POS Client ID</div>
<div class="cell" data-label="English">POS Client ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="posClientSecret">
<div class="cell" data-label="Property">posClientSecret</div>
<div class="cell" data-label="Column">posClientSecret</div>
<div class="cell" data-label="Arabic">POS Client Secret</div>
<div class="cell" data-label="English">POS Client Secret</div>
<div class="cell" data-label="Type">Password</div>

</div>

<div class="row searchable" id="posModelFramework">
<div class="cell" data-label="Property">posModelFramework</div>
<div class="cell" data-label="Column">posModelFramework</div>
<div class="cell" data-label="Arabic">POS Model Framework</div>
<div class="cell" data-label="English">POS Model Framework</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="posOSVersion">
<div class="cell" data-label="Property">posOSVersion</div>
<div class="cell" data-label="Column">posOSVersion</div>
<div class="cell" data-label="Arabic">POS OS Version</div>
<div class="cell" data-label="English">POS OS Version</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="posSerialNumber">
<div class="cell" data-label="Property">posSerialNumber</div>
<div class="cell" data-label="Column">posSerialNumber</div>
<div class="cell" data-label="Arabic">POS Serial Number</div>
<div class="cell" data-label="English">POS Serial Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="preventUsage">
<div class="cell" data-label="Property">preventUsage</div>
<div class="cell" data-label="Column">preventUsage</div>
<div class="cell" data-label="Arabic">منع الاستعمال</div>
<div class="cell" data-label="English">Prevent Usage</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="printCount">
<div class="cell" data-label="Property">printCount</div>
<div class="cell" data-label="Column">printCount</div>
<div class="cell" data-label="Arabic">عدد مرات الطباعة</div>
<div class="cell" data-label="English">Print Count</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="quantityFractionalPlaces">
<div class="cell" data-label="Property">quantityFractionalPlaces</div>
<div class="cell" data-label="Column">quantityFractionalPlaces</div>
<div class="cell" data-label="Arabic">عدد كسور الكمية</div>
<div class="cell" data-label="English">Quantity Fractional Places</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="receiverMode">
<div class="cell" data-label="Property">receiverMode</div>
<div class="cell" data-label="Column">receiverMode</div>
<div class="cell" data-label="Arabic">Notification Receiver Mode</div>
<div class="cell" data-label="English">Notification Receiver Mode</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="ref1">
<div class="cell" data-label="Property">ref1</div>
<div class="cell gen-ref-column" data-label="Column">ref1ActualCode,  ref1Code,  ref1EntityType,  ref1Id</div>
<div class="cell" data-label="Arabic">مرجع 1</div>
<div class="cell" data-label="English">Reference 1</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="ref2">
<div class="cell" data-label="Property">ref2</div>
<div class="cell gen-ref-column" data-label="Column">ref2ActualCode,  ref2Code,  ref2EntityType,  ref2Id</div>
<div class="cell" data-label="Arabic">مرجع 2</div>
<div class="cell" data-label="English">Reference 2</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="ref3">
<div class="cell" data-label="Property">ref3</div>
<div class="cell gen-ref-column" data-label="Column">ref3ActualCode,  ref3Code,  ref3EntityType,  ref3Id</div>
<div class="cell" data-label="Arabic">مرجع 3</div>
<div class="cell" data-label="English">Reference 3</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="ref4">
<div class="cell" data-label="Property">ref4</div>
<div class="cell gen-ref-column" data-label="Column">ref4ActualCode,  ref4Code,  ref4EntityType,  ref4Id</div>
<div class="cell" data-label="Arabic">مرجع 4</div>
<div class="cell" data-label="English">Reference 4</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="ref5">
<div class="cell" data-label="Property">ref5</div>
<div class="cell gen-ref-column" data-label="Column">ref5ActualCode,  ref5Code,  ref5EntityType,  ref5Id</div>
<div class="cell" data-label="Arabic">مرجع 5</div>
<div class="cell" data-label="English">Reference 5</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="remarks">
<div class="cell" data-label="Property">remarks</div>
<div class="cell" data-label="Column">remark</div>
<div class="cell" data-label="Arabic">ملاحظات</div>
<div class="cell" data-label="English">Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="reviseLevel">
<div class="cell" data-label="Property">reviseLevel</div>
<div class="cell" data-label="Column">reviseLevel</div>
<div class="cell" data-label="Arabic">مستوى المراجعة</div>
<div class="cell" data-label="English">Revise Level</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="revised">
<div class="cell" data-label="Property">revised</div>
<div class="cell" data-label="Column">primitiveValue</div>
<div class="cell" data-label="Arabic">تمت المراجعة</div>
<div class="cell" data-label="English">Revised</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="revisedBy">
<div class="cell" data-label="Property">revisedBy</div>
<div class="cell" data-label="Column">revisedBy_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [NaMaUser](/modules/system-tables/NaMaUser.md) 
</div>
</div>

<div class="row searchable" id="sector">
<div class="cell" data-label="Property">sector</div>
<div class="cell" data-label="Column">sector_id</div>
<div class="cell" data-label="Arabic">القطاع</div>
<div class="cell" data-label="English">Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/modules/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="sectorId">
<div class="cell" data-label="Property">sectorId</div>
<div class="cell" data-label="Column">sector_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="sendSignedDocuments">
<div class="cell" data-label="Property">sendSignedDocuments</div>
<div class="cell" data-label="Column">sendSignedDocuments</div>
<div class="cell" data-label="Arabic">إرسال المستندات موقعه إلكترونيا</div>
<div class="cell" data-label="English">Send Documents With Signature</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="signDocumentOnServerSide">
<div class="cell" data-label="Property">signDocumentOnServerSide</div>
<div class="cell" data-label="Column">signDocumentOnServerSide</div>
<div class="cell" data-label="Arabic">Sign Documents On Server Side</div>
<div class="cell" data-label="English">Sign Documents On Server Side</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="simplifiedInvoices">
<div class="cell" data-label="Property">simplifiedInvoices</div>
<div class="cell" data-label="Column">simplifiedInvoices</div>
<div class="cell" data-label="Arabic">Simplified Invoices</div>
<div class="cell" data-label="English">Simplified Invoices</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="standardInvoices">
<div class="cell" data-label="Property">standardInvoices</div>
<div class="cell" data-label="Column">standardInvoices</div>
<div class="cell" data-label="Arabic">Standard Invoices</div>
<div class="cell" data-label="English">Standard Invoices</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="startSendingFromDate">
<div class="cell" data-label="Property">startSendingFromDate</div>
<div class="cell" data-label="Column">startSendingFromDate</div>
<div class="cell" data-label="Arabic">بدء الإرسال من تاريخ</div>
<div class="cell" data-label="English">Start Sending From Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="syndicateLicenseNumber">
<div class="cell" data-label="Property">syndicateLicenseNumber</div>
<div class="cell" data-label="Column">syndicateLicenseNumber</div>
<div class="cell" data-label="Arabic">Syndicate License Number</div>
<div class="cell" data-label="English">Syndicate License Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="systemGeneratedCodePrefix">
<div class="cell" data-label="Property">systemGeneratedCodePrefix</div>
<div class="cell" data-label="Column">systemGeneratedCodePrefix</div>
<div class="cell" data-label="Arabic">System Generated Code Prefix</div>
<div class="cell" data-label="English">System Generated Code Prefix</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxCodesType">
<div class="cell" data-label="Property">taxCodesType</div>
<div class="cell" data-label="Column">taxCodesType</div>
<div class="cell" data-label="Arabic">حساب اكواد أنواع الضرائب من</div>
<div class="cell" data-label="English">Calculate Tax Codes Types From</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="taxDescriptionFrom">
<div class="cell" data-label="Property">taxDescriptionFrom</div>
<div class="cell" data-label="Column">taxDescriptionFrom</div>
<div class="cell" data-label="Arabic">تشغيل قالب وصف الصنف على (اسم 1 للصنف افتراضيا)</div>
<div class="cell" data-label="English">Run Item Description Template On (Item Name 1 by Default)</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="taxDescriptionTemplate">
<div class="cell" data-label="Property">taxDescriptionTemplate</div>
<div class="cell" data-label="Column">taxDescriptionTemplate</div>
<div class="cell" data-label="Arabic">قالب الوصف</div>
<div class="cell" data-label="English">Item Description Template</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="taxEInvoiceBook">
<div class="cell" data-label="Property">taxEInvoiceBook</div>
<div class="cell" data-label="Column">taxEInvoiceBook_id</div>
<div class="cell" data-label="Arabic">رقم المستند المستقبل</div>
<div class="cell" data-label="English">Recent Document Book</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DocumentBook](/modules/basic/DocumentBook.md) 
</div>
</div>

<div class="row searchable" id="taxEInvoiceTerm">
<div class="cell" data-label="Property">taxEInvoiceTerm</div>
<div class="cell" data-label="Column">taxEInvoiceTerm_id</div>
<div class="cell" data-label="Arabic">توجيه المستند المستقبل</div>
<div class="cell" data-label="English">Recent Document Term</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DocumentTerm](/modules/basic/DocumentTerm.md) 
</div>
</div>

<div class="row searchable" id="taxPayerType">
<div class="cell" data-label="Property">taxPayerType</div>
<div class="cell" data-label="Column">taxPayerType</div>
<div class="cell" data-label="Arabic">نوع المصلحة</div>
<div class="cell" data-label="English">Tax Payer Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="taxRegNo">
<div class="cell" data-label="Property">taxRegNo</div>
<div class="cell" data-label="Column">taxRegNo</div>
<div class="cell" data-label="Arabic">رقم التسجيل الضريبى</div>
<div class="cell" data-label="English">Tax Registeration NO</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxesCodes.sendTax1WithZero">
<div class="cell" data-label="Property">taxesCodes.sendTax1WithZero</div>
<div class="cell" data-label="Column">taxesCodesSendTax1WithZero</div>
<div class="cell" data-label="Arabic">إرسال الضريبة 1 بصفر</div>
<div class="cell" data-label="English">Send Tax 1 With Zero</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="taxesCodes.sendTax2WithZero">
<div class="cell" data-label="Property">taxesCodes.sendTax2WithZero</div>
<div class="cell" data-label="Column">taxesCodesSendTax2WithZero</div>
<div class="cell" data-label="Arabic">إرسال الضريبة 2 بصفر</div>
<div class="cell" data-label="English">Send Tax 2 With Zero</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="taxesCodes.sendTax3WithZero">
<div class="cell" data-label="Property">taxesCodes.sendTax3WithZero</div>
<div class="cell" data-label="Column">taxesCodesSendTax3WithZero</div>
<div class="cell" data-label="Arabic">إرسال الضريبة 3 بصفر</div>
<div class="cell" data-label="English">Send Tax 3 With Zero</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="taxesCodes.sendTax4WithZero">
<div class="cell" data-label="Property">taxesCodes.sendTax4WithZero</div>
<div class="cell" data-label="Column">taxesCodesSendTax4WithZero</div>
<div class="cell" data-label="Arabic">إرسال الضريبة 4 بصفر</div>
<div class="cell" data-label="English">Send Tax 4 With Zero</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="taxesCodes.tax1TaxAuthSubType">
<div class="cell" data-label="Property">taxesCodes.tax1TaxAuthSubType</div>
<div class="cell" data-label="Column">taxesCodesTax1TaxAuthSubType</div>
<div class="cell" data-label="Arabic">الضريبة 1 كود الضريبة الفرعي 1</div>
<div class="cell" data-label="English">Tax 1 Tax SubType</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxesCodes.tax1TaxAuthType">
<div class="cell" data-label="Property">taxesCodes.tax1TaxAuthType</div>
<div class="cell" data-label="Column">taxesCodesTax1TaxAuthType</div>
<div class="cell" data-label="Arabic">الضريبة 1 كود الضريبة 1</div>
<div class="cell" data-label="English">Tax 1 Tax Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxesCodes.tax1ZeroTaxAuthSubType">
<div class="cell" data-label="Property">taxesCodes.tax1ZeroTaxAuthSubType</div>
<div class="cell" data-label="Column">txsCdsTax1ZeroTaxAuthSubType</div>
<div class="cell" data-label="Arabic">الضريبة 1 كود الضريبة الصفرية الفرعي 1</div>
<div class="cell" data-label="English">Tax 1 Zero Tax Auth Sub Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxesCodes.tax1ZeroTaxAuthType">
<div class="cell" data-label="Property">taxesCodes.tax1ZeroTaxAuthType</div>
<div class="cell" data-label="Column">taxesCodesTax1ZeroTaxAuthType</div>
<div class="cell" data-label="Arabic">الضريبة 1 كود الضريبة الصفرية 1</div>
<div class="cell" data-label="English">Tax 1 Zero Tax Auth Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxesCodes.tax2TaxAuthSubType">
<div class="cell" data-label="Property">taxesCodes.tax2TaxAuthSubType</div>
<div class="cell" data-label="Column">taxesCodesTax2TaxAuthSubType</div>
<div class="cell" data-label="Arabic">الضريبة 2 كود الضريبة الفرعي 2</div>
<div class="cell" data-label="English">Tax2 Tax Sub Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxesCodes.tax2TaxAuthType">
<div class="cell" data-label="Property">taxesCodes.tax2TaxAuthType</div>
<div class="cell" data-label="Column">taxesCodesTax2TaxAuthType</div>
<div class="cell" data-label="Arabic">الضريبة 2 كود الضريبة 2</div>
<div class="cell" data-label="English">Tax2 Tax Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxesCodes.tax2ZeroTaxAuthSubType">
<div class="cell" data-label="Property">taxesCodes.tax2ZeroTaxAuthSubType</div>
<div class="cell" data-label="Column">txsCdsTax2ZeroTaxAuthSubType</div>
<div class="cell" data-label="Arabic">الضريبة 2 كود الضريبة الصفرية الفرعي 2</div>
<div class="cell" data-label="English">Tax 2 Zero Tax Auth Sub Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxesCodes.tax2ZeroTaxAuthType">
<div class="cell" data-label="Property">taxesCodes.tax2ZeroTaxAuthType</div>
<div class="cell" data-label="Column">taxesCodesTax2ZeroTaxAuthType</div>
<div class="cell" data-label="Arabic">الضريبة 2 كود الضريبة الصفرية 2</div>
<div class="cell" data-label="English">Tax 2 Zero Tax Auth Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxesCodes.tax3TaxAuthSubType">
<div class="cell" data-label="Property">taxesCodes.tax3TaxAuthSubType</div>
<div class="cell" data-label="Column">taxesCodesTax3TaxAuthSubType</div>
<div class="cell" data-label="Arabic">الضريبة 3 كود الضريبة الفرعي 3</div>
<div class="cell" data-label="English">Tax3 Tax Sub Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxesCodes.tax3TaxAuthType">
<div class="cell" data-label="Property">taxesCodes.tax3TaxAuthType</div>
<div class="cell" data-label="Column">taxesCodesTax3TaxAuthType</div>
<div class="cell" data-label="Arabic">الضريبة 3 كود الضريبة 3</div>
<div class="cell" data-label="English">Tax3 Tax Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxesCodes.tax3ZeroTaxAuthSubType">
<div class="cell" data-label="Property">taxesCodes.tax3ZeroTaxAuthSubType</div>
<div class="cell" data-label="Column">txsCdsTax3ZeroTaxAuthSubType</div>
<div class="cell" data-label="Arabic">الضريبة 3 كود الضريبة الصفرية الفرعي 3</div>
<div class="cell" data-label="English">Tax 3 Zero Tax Auth Sub Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxesCodes.tax3ZeroTaxAuthType">
<div class="cell" data-label="Property">taxesCodes.tax3ZeroTaxAuthType</div>
<div class="cell" data-label="Column">taxesCodesTax3ZeroTaxAuthType</div>
<div class="cell" data-label="Arabic">الضريبة 3 كود الضريبة الصفرية 3</div>
<div class="cell" data-label="English">Tax 3 Zero Tax Auth Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxesCodes.tax4TaxAuthSubType">
<div class="cell" data-label="Property">taxesCodes.tax4TaxAuthSubType</div>
<div class="cell" data-label="Column">taxesCodesTax4TaxAuthSubType</div>
<div class="cell" data-label="Arabic">الضريبة 4 كود الضريبة الفرعي 4</div>
<div class="cell" data-label="English">Tax4 Tax Sub Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxesCodes.tax4TaxAuthType">
<div class="cell" data-label="Property">taxesCodes.tax4TaxAuthType</div>
<div class="cell" data-label="Column">taxesCodesTax4TaxAuthType</div>
<div class="cell" data-label="Arabic">الضريبة 4 كود الضريبة 4</div>
<div class="cell" data-label="English">Tax4 Tax Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxesCodes.tax4ZeroTaxAuthSubType">
<div class="cell" data-label="Property">taxesCodes.tax4ZeroTaxAuthSubType</div>
<div class="cell" data-label="Column">txsCdsTax4ZeroTaxAuthSubType</div>
<div class="cell" data-label="Arabic">الضريبة 4 كود الضريبة الصفرية الفرعي 4</div>
<div class="cell" data-label="English">Tax 4 Zero Tax Auth Sub Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxesCodes.tax4ZeroTaxAuthType">
<div class="cell" data-label="Property">taxesCodes.tax4ZeroTaxAuthType</div>
<div class="cell" data-label="Column">taxesCodesTax4ZeroTaxAuthType</div>
<div class="cell" data-label="Arabic">الضريبة 4 كود الضريبة الصفرية 4</div>
<div class="cell" data-label="English">Tax 4 Zero Tax Auth Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="unitPriceSource">
<div class="cell" data-label="Property">unitPriceSource</div>
<div class="cell" data-label="Column">unitPriceSource</div>
<div class="cell" data-label="Arabic">مصدر سعر الوحدة</div>
<div class="cell" data-label="English">Unit Price Source</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="unitPriceType">
<div class="cell" data-label="Property">unitPriceType</div>
<div class="cell" data-label="Column">unitPriceType</div>
<div class="cell" data-label="Arabic">نوع مصدر سعر الوحدة</div>
<div class="cell" data-label="English">Unit Price Source Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="updateCapability">
<div class="cell" data-label="Property">updateCapability</div>
<div class="cell" data-label="Column">updateCapability_id</div>
<div class="cell" data-label="Arabic">صلاحية التعديل</div>
<div class="cell" data-label="English">Update Capability</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SecurityCapability](/modules/basic/SecurityCapability.md) 
</div>
</div>

<div class="row searchable" id="updateCapabilityId">
<div class="cell" data-label="Property">updateCapabilityId</div>
<div class="cell" data-label="Column">updateCapability_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="usageCapability">
<div class="cell" data-label="Property">usageCapability</div>
<div class="cell" data-label="Column">usageCapability_id</div>
<div class="cell" data-label="Arabic">صلاحية الاستخدام</div>
<div class="cell" data-label="English">Usage Capability</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SecurityCapability](/modules/basic/SecurityCapability.md) 
</div>
</div>

<div class="row searchable" id="usageCapabilityId">
<div class="cell" data-label="Property">usageCapabilityId</div>
<div class="cell" data-label="Column">usageCapability_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="userName">
<div class="cell" data-label="Property">userName</div>
<div class="cell" data-label="Column">userName</div>
<div class="cell" data-label="Arabic">اسم المستخدم</div>
<div class="cell" data-label="English">User Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="validateEGSCodes">
<div class="cell" data-label="Property">validateEGSCodes</div>
<div class="cell" data-label="Column">validateEGSCodes</div>
<div class="cell" data-label="Arabic">Validate EGS Codes</div>
<div class="cell" data-label="English">Validate EGS Codes</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="viewCapability">
<div class="cell" data-label="Property">viewCapability</div>
<div class="cell" data-label="Column">viewCapability_id</div>
<div class="cell" data-label="Arabic">صلاحية المطالعة</div>
<div class="cell" data-label="English">View Capability</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SecurityCapability](/modules/basic/SecurityCapability.md) 
</div>
</div>

<div class="row searchable" id="viewCapabilityId">
<div class="cell" data-label="Property">viewCapabilityId</div>
<div class="cell" data-label="Column">viewCapability_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="zatcaCSIDResponse">
<div class="cell" data-label="Property">zatcaCSIDResponse</div>
<div class="cell" data-label="Column">zatcaCSIDResponse</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="zatcaSignAPIPassword">
<div class="cell" data-label="Property">zatcaSignAPIPassword</div>
<div class="cell" data-label="Column">zatcaSignAPIPassword</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Password</div>

</div>


</div>
</div>

<div id='configs' title='configs' class='searchable'>

## configs (الإعدادات - Configurations)

<div class='tableName'>

**Table Name:** EInvoiceConfigLine, **Join Column:** taxPayerConfiguration_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="configs.applyWhen">
<div class="cell" data-label="Property">configs.applyWhen</div>
<div class="cell" data-label="Column">applyWhen_id</div>
<div class="cell" data-label="Arabic">تطبيق عندما</div>
<div class="cell" data-label="English">Apply When</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CriteriaDefinition](/modules/basic/CriteriaDefinition.md) 
</div>
</div>

<div class="row searchable" id="configs.applyWhenQuery">
<div class="cell" data-label="Property">configs.applyWhenQuery</div>
<div class="cell" data-label="Column">applyWhenQuery</div>
<div class="cell" data-label="Arabic">تطبيق عند التوافق مع الاستعلام</div>
<div class="cell" data-label="English">Apply When Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="configs.book">
<div class="cell" data-label="Property">configs.book</div>
<div class="cell" data-label="Column">book_id</div>
<div class="cell" data-label="Arabic">الدفتر</div>
<div class="cell" data-label="English">Book</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DocumentBook](/modules/basic/DocumentBook.md) 
</div>
</div>

<div class="row searchable" id="configs.doNotApplyWhen">
<div class="cell" data-label="Property">configs.doNotApplyWhen</div>
<div class="cell" data-label="Column">doNotApplyWhen_id</div>
<div class="cell" data-label="Arabic">عدم التطبيق عندما</div>
<div class="cell" data-label="English">Do not Apply When</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CriteriaDefinition](/modules/basic/CriteriaDefinition.md) 
</div>
</div>

<div class="row searchable" id="configs.doNotApplyWhenQuery">
<div class="cell" data-label="Property">configs.doNotApplyWhenQuery</div>
<div class="cell" data-label="Column">doNotApplyWhenQuery</div>
<div class="cell" data-label="Arabic">منع التطبيق عند التوافق مع الاستعلام</div>
<div class="cell" data-label="English">Do Not Apply When Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="configs.entityType">
<div class="cell" data-label="Property">configs.entityType</div>
<div class="cell" data-label="Column">entityType</div>
<div class="cell" data-label="Arabic">النوع</div>
<div class="cell" data-label="English">Entity Type</div>
<div class="cell" data-label="Type">EntityType</div>

</div>

<div class="row searchable" id="configs.entityTypeList">
<div class="cell" data-label="Property">configs.entityTypeList</div>
<div class="cell" data-label="Column">entityTypeList_id</div>
<div class="cell" data-label="Arabic">قائمة الأنواع</div>
<div class="cell" data-label="English">Entity Type List</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [EntityTypeList](/modules/basic/EntityTypeList.md) 
</div>
</div>

<div class="row searchable" id="configs.fromDate">
<div class="cell" data-label="Property">configs.fromDate</div>
<div class="cell" data-label="Column">fromDate</div>
<div class="cell" data-label="Arabic">من تاريخ</div>
<div class="cell" data-label="English">From Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="configs.id">
<div class="cell" data-label="Property">configs.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="configs.lineNumber">
<div class="cell" data-label="Property">configs.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="configs.proformaInvoiceNumberTempo">
<div class="cell" data-label="Property">configs.proformaInvoiceNumberTempo</div>
<div class="cell" data-label="Column">proformaInvoiceNumberTempo</div>
<div class="cell" data-label="Arabic">Proforma Invoice Number Template</div>
<div class="cell" data-label="English">Proforma Invoice Number Template</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="configs.purchaseOrderDescriptionTempo">
<div class="cell" data-label="Property">configs.purchaseOrderDescriptionTempo</div>
<div class="cell" data-label="Column">purchaseOrderDescriptionTempo</div>
<div class="cell" data-label="Arabic">Purchase Order Description Template</div>
<div class="cell" data-label="English">Purchase Order Description Template</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="configs.purchaseOrderPreferenceTempo">
<div class="cell" data-label="Property">configs.purchaseOrderPreferenceTempo</div>
<div class="cell" data-label="Column">purchaseOrderPreferenceTempo</div>
<div class="cell" data-label="Arabic">Purchase Order Preference Template</div>
<div class="cell" data-label="English">Purchase Order Preference Template</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="configs.salesOrderDescriptionTempo">
<div class="cell" data-label="Property">configs.salesOrderDescriptionTempo</div>
<div class="cell" data-label="Column">salesOrderDescriptionTempo</div>
<div class="cell" data-label="Arabic">Sales Order Description Template</div>
<div class="cell" data-label="English">Sales Order Description Template</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="configs.salesOrderPreferenceTempo">
<div class="cell" data-label="Property">configs.salesOrderPreferenceTempo</div>
<div class="cell" data-label="Column">salesOrderPreferenceTempo</div>
<div class="cell" data-label="Arabic">Sales Order Preference Template</div>
<div class="cell" data-label="English">Sales Order Preference Template</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="configs.term">
<div class="cell" data-label="Property">configs.term</div>
<div class="cell" data-label="Column">term_id</div>
<div class="cell" data-label="Arabic">توجيه المستند</div>
<div class="cell" data-label="English">Term</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DocumentTerm](/modules/basic/DocumentTerm.md) 
</div>
</div>

<div class="row searchable" id="configs.toDate">
<div class="cell" data-label="Property">configs.toDate</div>
<div class="cell" data-label="Column">toDate</div>
<div class="cell" data-label="Arabic">إلى تاريخ</div>
<div class="cell" data-label="English">To Date</div>
<div class="cell" data-label="Type">Date</div>

</div>


</div>
</div>

<div id='discountConfigs' title='discountConfigs' class='searchable'>

## discountConfigs (إعدادات الخصومات - Discount Configs)

<div class='tableName'>

**Table Name:** EInvoiceDiscountConfigLine, **Join Column:** taxPayerConfiguration_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="discountConfigs.addToUnitPrice">
<div class="cell" data-label="Property">discountConfigs.addToUnitPrice</div>
<div class="cell" data-label="Column">addToUnitPrice</div>
<div class="cell" data-label="Arabic">يضاف إلى سعر الوحدة</div>
<div class="cell" data-label="English">Add To Unit Price</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="discountConfigs.discount">
<div class="cell" data-label="Property">discountConfigs.discount</div>
<div class="cell" data-label="Column">discount</div>
<div class="cell" data-label="Arabic">التخفيض</div>
<div class="cell" data-label="English">Discount</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="discountConfigs.discountValueFormula">
<div class="cell" data-label="Property">discountConfigs.discountValueFormula</div>
<div class="cell" data-label="Column">discountValueFormula</div>
<div class="cell" data-label="Arabic">استعلام قيمة الخصم</div>
<div class="cell" data-label="English">Discount Value Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="discountConfigs.einvoiceDiscountLocation">
<div class="cell" data-label="Property">discountConfigs.einvoiceDiscountLocation</div>
<div class="cell" data-label="Column">einvoiceDiscountLocation</div>
<div class="cell" data-label="Arabic">وقت حساب الخصم (قبل او بعد الضريبة)</div>
<div class="cell" data-label="English">E Invoice Discount Location</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="discountConfigs.id">
<div class="cell" data-label="Property">discountConfigs.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="discountConfigs.lineNumber">
<div class="cell" data-label="Property">discountConfigs.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>


</div>
</div>

<div id='posTerminals' title='posTerminals' class='searchable'>

## posTerminals (نقاط البيع - POS Terminals - POS Terminals)

<div class='tableName'>

**Table Name:** TaxConfigurationPOSTerminalLine, **Join Column:** taxPayerConfiguration_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="posTerminals.activated">
<div class="cell" data-label="Property">posTerminals.activated</div>
<div class="cell" data-label="Column">activated</div>
<div class="cell" data-label="Arabic">تم التفعيل</div>
<div class="cell" data-label="English">Activated</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="posTerminals.documentBook">
<div class="cell" data-label="Property">posTerminals.documentBook</div>
<div class="cell" data-label="Column">documentBook_id</div>
<div class="cell" data-label="Arabic"> دفتر مستند</div>
<div class="cell" data-label="English"> Document Book</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DocumentBook](/modules/basic/DocumentBook.md) 
</div>
</div>

<div class="row searchable" id="posTerminals.id">
<div class="cell" data-label="Property">posTerminals.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="posTerminals.lineNumber">
<div class="cell" data-label="Property">posTerminals.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="posTerminals.posClientId">
<div class="cell" data-label="Property">posTerminals.posClientId</div>
<div class="cell" data-label="Column">posClientId</div>
<div class="cell" data-label="Arabic">POS Client ID</div>
<div class="cell" data-label="English">POS Client ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="posTerminals.posClientSecret">
<div class="cell" data-label="Property">posTerminals.posClientSecret</div>
<div class="cell" data-label="Column">posClientSecret</div>
<div class="cell" data-label="Arabic">POS Client Secret</div>
<div class="cell" data-label="English">POS Client Secret</div>
<div class="cell" data-label="Type">Password</div>

</div>

<div class="row searchable" id="posTerminals.posOSVersion">
<div class="cell" data-label="Property">posTerminals.posOSVersion</div>
<div class="cell" data-label="Column">posOSVersion</div>
<div class="cell" data-label="Arabic">POS OS Version</div>
<div class="cell" data-label="English">POS OS Version</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="posTerminals.posSerialNumber">
<div class="cell" data-label="Property">posTerminals.posSerialNumber</div>
<div class="cell" data-label="Column">posSerialNumber</div>
<div class="cell" data-label="Arabic">POS Serial Number</div>
<div class="cell" data-label="English">POS Serial Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="posTerminals.selectedLine">
<div class="cell" data-label="Property">posTerminals.selectedLine</div>
<div class="cell" data-label="Column">selectedLine</div>
<div class="cell" data-label="Arabic">اختيار</div>
<div class="cell" data-label="English">Select</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="posTerminals.syndicateLicenseNumber">
<div class="cell" data-label="Property">posTerminals.syndicateLicenseNumber</div>
<div class="cell" data-label="Column">syndicateLicenseNumber</div>
<div class="cell" data-label="Arabic">Syndicate License Number</div>
<div class="cell" data-label="English">Syndicate License Number</div>
<div class="cell" data-label="Type">Text</div>

</div>


</div>
</div>

<div id='serviceFeesAndChargesToCustomerConfigs' title='serviceFeesAndChargesToCustomerConfigs' class='searchable'>

## serviceFeesAndChargesToCustomerConfigs (معاملة رسوم الخدمة و ما يتحمله العميل - Service Fees And What Is Charged To Customer)

<div class='tableName'>

**Table Name:** ServiceFeesAndChargesToCustomerConfig, **Join Column:** taxPayerConfiguration_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="serviceFeesAndChargesToCustomerConfigs.additionCase">
<div class="cell" data-label="Property">serviceFeesAndChargesToCustomerConfigs.additionCase</div>
<div class="cell" data-label="Column">additionCase</div>
<div class="cell" data-label="Arabic">في حالة الإضافة</div>
<div class="cell" data-label="English">Addition Case</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="serviceFeesAndChargesToCustomerConfigs.book">
<div class="cell" data-label="Property">serviceFeesAndChargesToCustomerConfigs.book</div>
<div class="cell" data-label="Column">book_id</div>
<div class="cell" data-label="Arabic">الدفتر</div>
<div class="cell" data-label="English">Book</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DocumentBook](/modules/basic/DocumentBook.md) 
</div>
</div>

<div class="row searchable" id="serviceFeesAndChargesToCustomerConfigs.criteriaDefinition">
<div class="cell" data-label="Property">serviceFeesAndChargesToCustomerConfigs.criteriaDefinition</div>
<div class="cell" data-label="Column">criteriaDefinition_id</div>
<div class="cell" data-label="Arabic"> المعايير</div>
<div class="cell" data-label="English"> Criteria</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CriteriaDefinition](/modules/basic/CriteriaDefinition.md) 
</div>
</div>

<div class="row searchable" id="serviceFeesAndChargesToCustomerConfigs.discount">
<div class="cell" data-label="Property">serviceFeesAndChargesToCustomerConfigs.discount</div>
<div class="cell" data-label="Column">discount</div>
<div class="cell" data-label="Arabic">التخفيض</div>
<div class="cell" data-label="English">Discount</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="serviceFeesAndChargesToCustomerConfigs.discountCase">
<div class="cell" data-label="Property">serviceFeesAndChargesToCustomerConfigs.discountCase</div>
<div class="cell" data-label="Column">discountCase</div>
<div class="cell" data-label="Arabic">في حالة الخصم</div>
<div class="cell" data-label="English">Discount Case</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="serviceFeesAndChargesToCustomerConfigs.entityType">
<div class="cell" data-label="Property">serviceFeesAndChargesToCustomerConfigs.entityType</div>
<div class="cell" data-label="Column">entityType</div>
<div class="cell" data-label="Arabic">النوع</div>
<div class="cell" data-label="English">Entity Type</div>
<div class="cell" data-label="Type">EntityType</div>

</div>

<div class="row searchable" id="serviceFeesAndChargesToCustomerConfigs.entityTypeList">
<div class="cell" data-label="Property">serviceFeesAndChargesToCustomerConfigs.entityTypeList</div>
<div class="cell" data-label="Column">entityTypeList_id</div>
<div class="cell" data-label="Arabic">قائمة الأنواع</div>
<div class="cell" data-label="English">Entity Type List</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [EntityTypeList](/modules/basic/EntityTypeList.md) 
</div>
</div>

<div class="row searchable" id="serviceFeesAndChargesToCustomerConfigs.id">
<div class="cell" data-label="Property">serviceFeesAndChargesToCustomerConfigs.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="serviceFeesAndChargesToCustomerConfigs.item">
<div class="cell" data-label="Property">serviceFeesAndChargesToCustomerConfigs.item</div>
<div class="cell gen-ref-column" data-label="Column">itemActualCode,  itemCode,  itemEntityType,  itemId</div>
<div class="cell" data-label="Arabic">الصنف</div>
<div class="cell" data-label="English">Item</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="serviceFeesAndChargesToCustomerConfigs.lineNumber">
<div class="cell" data-label="Property">serviceFeesAndChargesToCustomerConfigs.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="serviceFeesAndChargesToCustomerConfigs.serviceFeesOrChargedToCustomer">
<div class="cell" data-label="Property">serviceFeesAndChargesToCustomerConfigs.serviceFeesOrChargedToCustomer</div>
<div class="cell" data-label="Column">serviceFeesOrChargedToCustomer</div>
<div class="cell" data-label="Arabic">رسوم الخدمة او ما يتحمله العميل</div>
<div class="cell" data-label="English">Service Fees Or Customer Charges</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="serviceFeesAndChargesToCustomerConfigs.taxLocation">
<div class="cell" data-label="Property">serviceFeesAndChargesToCustomerConfigs.taxLocation</div>
<div class="cell" data-label="Column">taxLocation</div>
<div class="cell" data-label="Arabic">وقت حساب ضريبة المبيعات</div>
<div class="cell" data-label="English">Invoice tax apply on</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="serviceFeesAndChargesToCustomerConfigs.term">
<div class="cell" data-label="Property">serviceFeesAndChargesToCustomerConfigs.term</div>
<div class="cell" data-label="Column">term_id</div>
<div class="cell" data-label="Arabic">توجيه المستند</div>
<div class="cell" data-label="English">Term</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DocumentTerm](/modules/basic/DocumentTerm.md) 
</div>
</div>


</div>
</div>

<div id='taxCodesSource' title='taxCodesSource' class='searchable'>

## taxCodesSource (مصادر أكواد الضرائب - Tax Codes Sources)

<div class='tableName'>

**Table Name:** TaxConfigurationCodeSource, **Join Column:** taxPayerConfiguration_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="taxCodesSource.criteriaDefinition">
<div class="cell" data-label="Property">taxCodesSource.criteriaDefinition</div>
<div class="cell" data-label="Column">criteriaDefinition_id</div>
<div class="cell" data-label="Arabic"> المعايير</div>
<div class="cell" data-label="English"> Criteria</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CriteriaDefinition](/modules/basic/CriteriaDefinition.md) 
</div>
</div>

<div class="row searchable" id="taxCodesSource.dimensions.analysisSet">
<div class="cell" data-label="Property">taxCodesSource.dimensions.analysisSet</div>
<div class="cell" data-label="Column">analysisSet_id</div>
<div class="cell" data-label="Arabic">المجموعة التحليلية</div>
<div class="cell" data-label="English">Analysis set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/modules/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="taxCodesSource.dimensions.branch">
<div class="cell" data-label="Property">taxCodesSource.dimensions.branch</div>
<div class="cell" data-label="Column">branch_id</div>
<div class="cell" data-label="Arabic">الفرع</div>
<div class="cell" data-label="English">Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/modules/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="taxCodesSource.dimensions.department">
<div class="cell" data-label="Property">taxCodesSource.dimensions.department</div>
<div class="cell" data-label="Column">department_id</div>
<div class="cell" data-label="Arabic">الإدارة</div>
<div class="cell" data-label="English">Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/modules/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="taxCodesSource.dimensions.legalEntity">
<div class="cell" data-label="Property">taxCodesSource.dimensions.legalEntity</div>
<div class="cell" data-label="Column">legalEntity_id</div>
<div class="cell" data-label="Arabic">الشركة</div>
<div class="cell" data-label="English">Legal Entity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [LegalEntity](/modules/basic/LegalEntity.md) 
</div>
</div>

<div class="row searchable" id="taxCodesSource.dimensions.sector">
<div class="cell" data-label="Property">taxCodesSource.dimensions.sector</div>
<div class="cell" data-label="Column">sector_id</div>
<div class="cell" data-label="Arabic">القطاع</div>
<div class="cell" data-label="English">Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/modules/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="taxCodesSource.documentBook">
<div class="cell" data-label="Property">taxCodesSource.documentBook</div>
<div class="cell" data-label="Column">documentBook_id</div>
<div class="cell" data-label="Arabic"> دفتر مستند</div>
<div class="cell" data-label="English"> Document Book</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DocumentBook](/modules/basic/DocumentBook.md) 
</div>
</div>

<div class="row searchable" id="taxCodesSource.documentTerm">
<div class="cell" data-label="Property">taxCodesSource.documentTerm</div>
<div class="cell" data-label="Column">documentTerm_id</div>
<div class="cell" data-label="Arabic"> توجيه مستند</div>
<div class="cell" data-label="English"> Document Term</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DocumentTerm](/modules/basic/DocumentTerm.md) 
</div>
</div>

<div class="row searchable" id="taxCodesSource.entityTypeList">
<div class="cell" data-label="Property">taxCodesSource.entityTypeList</div>
<div class="cell" data-label="Column">entityTypeList_id</div>
<div class="cell" data-label="Arabic">قائمة الأنواع</div>
<div class="cell" data-label="English">Entity Type List</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [EntityTypeList](/modules/basic/EntityTypeList.md) 
</div>
</div>

<div class="row searchable" id="taxCodesSource.forType">
<div class="cell" data-label="Property">taxCodesSource.forType</div>
<div class="cell" data-label="Column">forType</div>
<div class="cell" data-label="Arabic">للنوع</div>
<div class="cell" data-label="English">For Type</div>
<div class="cell" data-label="Type">EntityType</div>

</div>

<div class="row searchable" id="taxCodesSource.fromValueDate">
<div class="cell" data-label="Property">taxCodesSource.fromValueDate</div>
<div class="cell" data-label="Column">fromValueDate</div>
<div class="cell" data-label="Arabic">من تاريخ فعلي</div>
<div class="cell" data-label="English">From Value Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="taxCodesSource.id">
<div class="cell" data-label="Property">taxCodesSource.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="taxCodesSource.lineNumber">
<div class="cell" data-label="Property">taxCodesSource.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="taxCodesSource.taxCodesType">
<div class="cell" data-label="Property">taxCodesSource.taxCodesType</div>
<div class="cell" data-label="Column">taxCodesType</div>
<div class="cell" data-label="Arabic">حساب اكواد أنواع الضرائب من</div>
<div class="cell" data-label="English">Calculate Tax Codes Types From</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="taxCodesSource.toValueDate">
<div class="cell" data-label="Property">taxCodesSource.toValueDate</div>
<div class="cell" data-label="Column">toValueDate</div>
<div class="cell" data-label="Arabic">إلى تاريخ فعلي</div>
<div class="cell" data-label="English">To Value Date</div>
<div class="cell" data-label="Type">Date</div>

</div>


</div>
</div>

