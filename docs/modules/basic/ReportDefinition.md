# ReportDefinition
**Arabic:** تعريف تقرير - تعريف تقارير
**English:** Report Definition - Report Definitions

<ContentFilter/>


<div class='searchable'>
<a href='#basedOnLines'>basedOnLines (ReportDefinitionBasedOnLine) </a> , <a href='#parametersOverride'>parametersOverride (RepParamOverride) </a> , <a href='#relatedForms'>relatedForms (ReportRelatedForms) </a> , <a href='#reportGroups'>reportGroups (ReportDefinitionGroupLine) </a> , <a href='#resources'>resources (ReportResource) </a> , <a href='#securityLines'>securityLines (ReportSecurityLine) </a> , <a href='#subreports'>subreports (SubReport) </a>
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
</div><div class="row searchable" id="allowRunReportWithNoAuth">
<div class="cell" data-label="Property">allowRunReportWithNoAuth</div>
<div class="cell" data-label="Column">allowRunReportWithNoAuth</div>
<div class="cell" data-label="Arabic">السماح بتشغيل التقرير بدون تسجيل دخول</div>
<div class="cell" data-label="English">Allow Run Report Without Authentication</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="allowedIDs">
<div class="cell" data-label="Property">allowedIDs</div>
<div class="cell" data-label="Column">allowedIDs</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

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

<div class="row searchable" id="arabicVersion">
<div class="cell" data-label="Property">arabicVersion</div>
<div class="cell" data-label="Column">arabicVersion_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/modules/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="attachment1">
<div class="cell" data-label="Property">attachment1</div>
<div class="cell" data-label="Column">attachment1_id</div>
<div class="cell" data-label="Arabic">مرفق 1</div>
<div class="cell" data-label="English">Attachment 1</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/modules/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="attachment2">
<div class="cell" data-label="Property">attachment2</div>
<div class="cell" data-label="Column">attachment2_id</div>
<div class="cell" data-label="Arabic">مرفق 2</div>
<div class="cell" data-label="English">Attachment 2</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/modules/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="attachment3">
<div class="cell" data-label="Property">attachment3</div>
<div class="cell" data-label="Column">attachment3_id</div>
<div class="cell" data-label="Arabic">مرفق 3</div>
<div class="cell" data-label="English">Attachment 3</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/modules/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="attachment4">
<div class="cell" data-label="Property">attachment4</div>
<div class="cell" data-label="Column">attachment4_id</div>
<div class="cell" data-label="Arabic">مرفق 4</div>
<div class="cell" data-label="English">Attachment 4</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/modules/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="attachment5">
<div class="cell" data-label="Property">attachment5</div>
<div class="cell" data-label="Column">attachment5_id</div>
<div class="cell" data-label="Arabic">مرفق 5</div>
<div class="cell" data-label="English">Attachment 5</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/modules/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="basedOnReport">
<div class="cell" data-label="Property">basedOnReport</div>
<div class="cell" data-label="Column">basedOnReport_id</div>
<div class="cell" data-label="Arabic">التقرير المبني عليه</div>
<div class="cell" data-label="English">Based On Report</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ReportDefinition](/modules/basic/ReportDefinition.md) 
</div>
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

<div class="row searchable" id="compiledVersion">
<div class="cell" data-label="Property">compiledVersion</div>
<div class="cell" data-label="Column">compiledVersion_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/modules/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="copyContentToReport">
<div class="cell" data-label="Property">copyContentToReport</div>
<div class="cell" data-label="Column">copyContentToReport</div>
<div class="cell" data-label="Arabic">نسخ المحتوي النصي الي الملف</div>
<div class="cell" data-label="English">Copy Content To Report</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="createTransactionId">
<div class="cell" data-label="Property">createTransactionId</div>
<div class="cell" data-label="Column">createTransactionId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="createdFromWizard">
<div class="cell" data-label="Property">createdFromWizard</div>
<div class="cell gen-ref-column" data-label="Column">createdFromWizardActualCode,  createdFromWizardCode,  createdFromWizardEntityType,  createdFromWizardId</div>
<div class="cell" data-label="Arabic">منشأ من أداة إنشاء تقارير</div>
<div class="cell" data-label="English">Created From Wizard</div>
<div class="cell" data-label="Type">Genericreference</div>

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

<div class="row searchable" id="dbResourcName">
<div class="cell" data-label="Property">dbResourcName</div>
<div class="cell" data-label="Column">dbResourcName</div>
<div class="cell" data-label="Arabic">اسم مصدر قاعدة البيانات</div>
<div class="cell" data-label="English">Database Resourc Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="defintion">
<div class="cell" data-label="Property">defintion</div>
<div class="cell" data-label="Column">defintion_id</div>
<div class="cell" data-label="Arabic">ملف التقرير</div>
<div class="cell" data-label="English">Report File</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/modules/system-tables/LargeData.md) 
</div>
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

<div class="row searchable" id="doNotMirrorInArabic">
<div class="cell" data-label="Property">doNotMirrorInArabic</div>
<div class="cell" data-label="Column">doNotMirrorInArabic</div>
<div class="cell" data-label="Arabic">عدم عمل دوران لمحتويات التقرير في اللغة العربية</div>
<div class="cell" data-label="English">Do Not Mirror Content In Arabic</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="doNotPrintUnProcessedDoc">
<div class="cell" data-label="Property">doNotPrintUnProcessedDoc</div>
<div class="cell" data-label="Column">doNotPrintUnProcessedDoc</div>
<div class="cell" data-label="Arabic">عدم السماح بطباعه مستندات بإنتظار المعالجه</div>
<div class="cell" data-label="English">Do Not Print Un Processed Documents</div>
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

<div class="row searchable" id="fetchResourcesFrom">
<div class="cell" data-label="Property">fetchResourcesFrom</div>
<div class="cell" data-label="Column">fetchResourcesFrom_id</div>
<div class="cell" data-label="Arabic">احضار الملفات الإضافية من</div>
<div class="cell" data-label="English">Fetch Resources From</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ReportDefinition](/modules/basic/ReportDefinition.md) 
</div>
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

<div class="row searchable" id="fixedLanguage">
<div class="cell" data-label="Property">fixedLanguage</div>
<div class="cell" data-label="Column">fixedLanguage</div>
<div class="cell" data-label="Arabic">تثبيت اللغة</div>
<div class="cell" data-label="English">Fixed Language</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="forUser">
<div class="cell" data-label="Property">forUser</div>
<div class="cell gen-ref-column" data-label="Column">forUserActualCode,  forUserCode,  forUserEntityType,  forUserId</div>
<div class="cell" data-label="Arabic">للمستخدم</div>
<div class="cell" data-label="English">For User</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="formBook">
<div class="cell" data-label="Property">formBook</div>
<div class="cell" data-label="Column">formBook_id</div>
<div class="cell" data-label="Arabic">الدفتر</div>
<div class="cell" data-label="English">Form Book</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DocumentBook](/modules/basic/DocumentBook.md) 
</div>
</div>

<div class="row searchable" id="formCriteria">
<div class="cell" data-label="Property">formCriteria</div>
<div class="cell" data-label="Column">formCriteria_id</div>
<div class="cell" data-label="Arabic">معايير</div>
<div class="cell" data-label="English">Form Criteria</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CriteriaDefinition](/modules/basic/CriteriaDefinition.md) 
</div>
</div>

<div class="row searchable" id="formDocCategory">
<div class="cell" data-label="Property">formDocCategory</div>
<div class="cell" data-label="Column">formDocCategory_id</div>
<div class="cell" data-label="Arabic"> تصنيف سجل</div>
<div class="cell" data-label="English">Form Doc Category</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DocCategory](/modules/basic/DocCategory.md) 
</div>
</div>

<div class="row searchable" id="formEntity">
<div class="cell" data-label="Property">formEntity</div>
<div class="cell" data-label="Column">formEntity</div>
<div class="cell" data-label="Arabic">النوع</div>
<div class="cell" data-label="English">Form Entity</div>
<div class="cell" data-label="Type">EntityType</div>

</div>

<div class="row searchable" id="formFileNameTemplate">
<div class="cell" data-label="Property">formFileNameTemplate</div>
<div class="cell" data-label="Column">formFileNameTemplate</div>
<div class="cell" data-label="Arabic">قالب اسم ملف التقرير</div>
<div class="cell" data-label="English">Form File Name Template</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="formPage">
<div class="cell" data-label="Property">formPage</div>
<div class="cell" data-label="Column">formPage</div>
<div class="cell" data-label="Arabic">الصفحة</div>
<div class="cell" data-label="English">Form Page</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="formTerm">
<div class="cell" data-label="Property">formTerm</div>
<div class="cell" data-label="Column">formTerm_id</div>
<div class="cell" data-label="Arabic">توجيه المستند</div>
<div class="cell" data-label="English">Form Term</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DocumentTerm](/modules/basic/DocumentTerm.md) 
</div>
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

<div class="row searchable" id="groovyScriptlet">
<div class="cell" data-label="Property">groovyScriptlet</div>
<div class="cell" data-label="Column">groovyScriptlet</div>
<div class="cell" data-label="Arabic">Groovy Scriptlet</div>
<div class="cell" data-label="English">Groovy Scriptlet</div>
<div class="cell" data-label="Type">BigText</div>

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

<div class="row searchable" id="groupsIds">
<div class="cell" data-label="Property">groupsIds</div>
<div class="cell" data-label="Column">groupsIds</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="id">
<div class="cell" data-label="Property">id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="implRepo">
<div class="cell" data-label="Property">implRepo</div>
<div class="cell" data-label="Column">implRepo_id</div>
<div class="cell" data-label="Arabic">كتالوج التجهيز</div>
<div class="cell" data-label="English">Implementation Repository</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ImplementationRepository](/modules/basic/ImplementationRepository.md) 
</div>
</div>

<div class="row searchable" id="includeZATCAXmlInPDF">
<div class="cell" data-label="Property">includeZATCAXmlInPDF</div>
<div class="cell" data-label="Column">includeZATCAXmlInPDF</div>
<div class="cell" data-label="Arabic">Include ZATCA XML In PDF</div>
<div class="cell" data-label="English">Include ZATCA XML In PDF</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="indexInParent">
<div class="cell" data-label="Property">indexInParent</div>
<div class="cell" data-label="Column">indexInParent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

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

<div class="row searchable" id="logExportsToDB">
<div class="cell" data-label="Property">logExportsToDB</div>
<div class="cell" data-label="Column">logExportsToDB</div>
<div class="cell" data-label="Arabic">Log Report Exports To DB</div>
<div class="cell" data-label="English">Log Report Exports To DB</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="logFormsToReportLog">
<div class="cell" data-label="Property">logFormsToReportLog</div>
<div class="cell" data-label="Column">logFormsToReportLog</div>
<div class="cell" data-label="Arabic">Log Forms To Report Log</div>
<div class="cell" data-label="English">Log Forms To Report Log</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="logParametersToDB">
<div class="cell" data-label="Property">logParametersToDB</div>
<div class="cell" data-label="Column">logParametersToDB</div>
<div class="cell" data-label="Arabic">تخزين مدخلات التقارير في قاعدة البيانات عند التشغيل</div>
<div class="cell" data-label="English">Log Report Parameters To DB When Running</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="menuCode">
<div class="cell" data-label="Property">menuCode</div>
<div class="cell" data-label="Column">menuCode</div>
<div class="cell" data-label="Arabic">كود الوصلة</div>
<div class="cell" data-label="English">Menu Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="moduleName">
<div class="cell" data-label="Property">moduleName</div>
<div class="cell" data-label="Column">moduleName</div>
<div class="cell" data-label="Arabic">Module Name</div>
<div class="cell" data-label="English">Module Name</div>
<div class="cell" data-label="Type">FieldID</div>

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

<div class="row searchable" id="notifyWhenUserExport">
<div class="cell" data-label="Property">notifyWhenUserExport</div>
<div class="cell" data-label="Column">notifyWhenUserExport_id</div>
<div class="cell" data-label="Arabic">التنبيه عند تصدير التقرير</div>
<div class="cell" data-label="English">Notify When The Report Result Is Exported</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [NotificationDefinition](/modules/basic/NotificationDefinition.md) 
</div>
</div>

<div class="row searchable" id="notifyWhenUserRun">
<div class="cell" data-label="Property">notifyWhenUserRun</div>
<div class="cell" data-label="Column">notifyWhenUserRun_id</div>
<div class="cell" data-label="Arabic">التنبيه عند تشغيل التقرير</div>
<div class="cell" data-label="English">Notify When The Report is Run</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [NotificationDefinition](/modules/basic/NotificationDefinition.md) 
</div>
</div>

<div class="row searchable" id="overrideSelectedAnalysisSet">
<div class="cell" data-label="Property">overrideSelectedAnalysisSet</div>
<div class="cell" data-label="Column">overrideSelectedAnalysisSet</div>
<div class="cell" data-label="Arabic">تعديل المجموعة التحليلية المختارة</div>
<div class="cell" data-label="English">Override Selected AnalysisSet</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="overrideSelectedBranch">
<div class="cell" data-label="Property">overrideSelectedBranch</div>
<div class="cell" data-label="Column">overrideSelectedBranch</div>
<div class="cell" data-label="Arabic">تعديل الفرع المختار</div>
<div class="cell" data-label="English">Override Selected Branch</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="overrideSelectedDepartment">
<div class="cell" data-label="Property">overrideSelectedDepartment</div>
<div class="cell" data-label="Column">overrideSelectedDepartment</div>
<div class="cell" data-label="Arabic">تعديل الادارة المختارة</div>
<div class="cell" data-label="English">Override Selected Department</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="overrideSelectedLegalEntity">
<div class="cell" data-label="Property">overrideSelectedLegalEntity</div>
<div class="cell" data-label="Column">overrideSelectedLegalEntity</div>
<div class="cell" data-label="Arabic">تعديل الشركة المختارة</div>
<div class="cell" data-label="English">Override Selected LegalEntity</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="overrideSelectedSector">
<div class="cell" data-label="Property">overrideSelectedSector</div>
<div class="cell" data-label="Column">overrideSelectedSector</div>
<div class="cell" data-label="Arabic">تعديل القطاع المختار</div>
<div class="cell" data-label="English">Override Selected Sector</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="parentCode">
<div class="cell" data-label="Property">parentCode</div>
<div class="cell" data-label="Column">parentCode</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="pdfSample">
<div class="cell" data-label="Property">pdfSample</div>
<div class="cell" data-label="Column">pdfSample_id</div>
<div class="cell" data-label="Arabic">PDF Sample</div>
<div class="cell" data-label="English">PDF Sample</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/modules/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="posOrderPreparationForm">
<div class="cell" data-label="Property">posOrderPreparationForm</div>
<div class="cell" data-label="Column">posOrderPreparationForm</div>
<div class="cell" data-label="Arabic">نموذج طباعة تحضير الاوردر لنقاط البيع</div>
<div class="cell" data-label="English">POS Order Preparation Form</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="preventUsage">
<div class="cell" data-label="Property">preventUsage</div>
<div class="cell" data-label="Column">preventUsage</div>
<div class="cell" data-label="Arabic">منع الاستعمال</div>
<div class="cell" data-label="English">Prevent Usage</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="preventedIDs">
<div class="cell" data-label="Property">preventedIDs</div>
<div class="cell" data-label="Column">preventedIDs</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="printCount">
<div class="cell" data-label="Property">printCount</div>
<div class="cell" data-label="Column">printCount</div>
<div class="cell" data-label="Arabic">عدد مرات الطباعة</div>
<div class="cell" data-label="English">Print Count</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="printerName">
<div class="cell" data-label="Property">printerName</div>
<div class="cell" data-label="Column">printerName</div>
<div class="cell" data-label="Arabic">اسم الطابعة (CSV)</div>
<div class="cell" data-label="English">Printer Name (CSV)</div>
<div class="cell" data-label="Type">Text</div>

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

<div class="row searchable" id="relatedEntity1">
<div class="cell" data-label="Property">relatedEntity1</div>
<div class="cell" data-label="Column">relatedEntity1</div>
<div class="cell" data-label="Arabic">السجل المرتبط 1</div>
<div class="cell" data-label="English">Related Entity1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="relatedEntity2">
<div class="cell" data-label="Property">relatedEntity2</div>
<div class="cell" data-label="Column">relatedEntity2</div>
<div class="cell" data-label="Arabic">السجل المرتبط 2</div>
<div class="cell" data-label="English">Related Entity2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="relatedToModule1">
<div class="cell" data-label="Property">relatedToModule1</div>
<div class="cell" data-label="Column">relatedToModule1</div>
<div class="cell" data-label="Arabic">الموديول المرتبط 1</div>
<div class="cell" data-label="English">Related To Module 1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="relatedToModule2">
<div class="cell" data-label="Property">relatedToModule2</div>
<div class="cell" data-label="Column">relatedToModule2</div>
<div class="cell" data-label="Arabic">الموديول المرتبط 2</div>
<div class="cell" data-label="English">Related To Module 2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="remarks">
<div class="cell" data-label="Property">remarks</div>
<div class="cell" data-label="Column">remark</div>
<div class="cell" data-label="Arabic">ملاحظات</div>
<div class="cell" data-label="English">Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="removeFootersOfGroupsInExcel">
<div class="cell" data-label="Property">removeFootersOfGroupsInExcel</div>
<div class="cell" data-label="Column">removeFootersOfGroupsInExcel</div>
<div class="cell" data-label="Arabic">Remove Footers Of Groups In Excel (CSV, use * for all groups)</div>
<div class="cell" data-label="English">Remove Footers Of Groups In Excel (CSV, use * for all groups)</div>
<div class="cell" data-label="Type">FieldID</div>

</div>

<div class="row searchable" id="removeHeadersOfGroupsInExcel">
<div class="cell" data-label="Property">removeHeadersOfGroupsInExcel</div>
<div class="cell" data-label="Column">removeHeadersOfGroupsInExcel</div>
<div class="cell" data-label="Arabic">Remove Headers Of Groups In Excel (CSV, use * for all groups)</div>
<div class="cell" data-label="English">Remove Headers Of Groups In Excel (CSV, use * for all groups)</div>
<div class="cell" data-label="Type">FieldID</div>

</div>

<div class="row searchable" id="reportContent">
<div class="cell" data-label="Property">reportContent</div>
<div class="cell" data-label="Column">reportContent</div>
<div class="cell" data-label="Arabic">محتوي ملف التقرير</div>
<div class="cell" data-label="English">Report File Content</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="reportDetails">
<div class="cell" data-label="Property">reportDetails</div>
<div class="cell" data-label="Column">reportDetails</div>
<div class="cell" data-label="Arabic">تفاصيل إنشاء التقرير</div>
<div class="cell" data-label="English">Report Details</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="reportFileName">
<div class="cell" data-label="Property">reportFileName</div>
<div class="cell" data-label="Column">reportFileName</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="reportMetadataXML">
<div class="cell" data-label="Property">reportMetadataXML</div>
<div class="cell" data-label="Column">reportMetadataXML</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="reportOrder">
<div class="cell" data-label="Property">reportOrder</div>
<div class="cell" data-label="Column">reportOrder</div>
<div class="cell" data-label="Arabic">ترتيب التقرير</div>
<div class="cell" data-label="English">Report Order</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="reportType">
<div class="cell" data-label="Property">reportType</div>
<div class="cell" data-label="Column">reportType</div>
<div class="cell" data-label="Arabic">نوع التقرير</div>
<div class="cell" data-label="English">Report Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="reviewedAndApproved">
<div class="cell" data-label="Property">reviewedAndApproved</div>
<div class="cell" data-label="Column">reviewedAndApproved</div>
<div class="cell" data-label="Arabic">تم مراجعته وإعتماده</div>
<div class="cell" data-label="English">Reviewed And Approved</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="runOnPosServerDB">
<div class="cell" data-label="Property">runOnPosServerDB</div>
<div class="cell" data-label="Column">runOnPosServerDB</div>
<div class="cell" data-label="Arabic">تشغيل على قاعدة بيانات الخادم وليس قاعدة بيانات نقاط البيع</div>
<div class="cell" data-label="English">Run On Server DataBase Not On POS Database</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="saveToImplRepo">
<div class="cell" data-label="Property">saveToImplRepo</div>
<div class="cell" data-label="Column">saveToImplRepo</div>
<div class="cell" data-label="Arabic">الحفظ في كتالوج التجهيز</div>
<div class="cell" data-label="English">Save To Implementation Repository</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="screenshot">
<div class="cell" data-label="Property">screenshot</div>
<div class="cell" data-label="Column">screenshot_id</div>
<div class="cell" data-label="Arabic">Screenshot</div>
<div class="cell" data-label="English">Screenshot</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/modules/system-tables/LargeData.md) 
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

<div class="row searchable" id="securityEquivalent.customCapability">
<div class="cell" data-label="Property">securityEquivalent.customCapability</div>
<div class="cell" data-label="Column">customCapability_id</div>
<div class="cell" data-label="Arabic">الصلاحية المخصصة</div>
<div class="cell" data-label="English">Custom Capability</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SecurityCapability](/modules/basic/SecurityCapability.md) 
</div>
</div>

<div class="row searchable" id="securityEquivalent.securityEquivalent">
<div class="cell" data-label="Property">securityEquivalent.securityEquivalent</div>
<div class="cell" data-label="Column">securityEquivalent</div>
<div class="cell" data-label="Arabic">النوع المطبق عليها الصلاحية</div>
<div class="cell" data-label="English">Security Equivalent</div>
<div class="cell" data-label="Type">EntityType</div>

</div>

<div class="row searchable" id="securityEquivalent.securityEquivalentType">
<div class="cell" data-label="Property">securityEquivalent.securityEquivalentType</div>
<div class="cell" data-label="Column">securityEquivalentType</div>
<div class="cell" data-label="Arabic">نوع الصلاحيات</div>
<div class="cell" data-label="English">Security Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="securityEquivalent.standardCapability">
<div class="cell" data-label="Property">securityEquivalent.standardCapability</div>
<div class="cell" data-label="Column">standardCapability</div>
<div class="cell" data-label="Arabic">الصلاحية القياسية</div>
<div class="cell" data-label="English">Standard Capability</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="systemGeneratedCodePrefix">
<div class="cell" data-label="Property">systemGeneratedCodePrefix</div>
<div class="cell" data-label="Column">systemGeneratedCodePrefix</div>
<div class="cell" data-label="Arabic">System Generated Code Prefix</div>
<div class="cell" data-label="English">System Generated Code Prefix</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="systemReport">
<div class="cell" data-label="Property">systemReport</div>
<div class="cell" data-label="Column">systemReport</div>
<div class="cell" data-label="Arabic">نظامي</div>
<div class="cell" data-label="English">System</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="usedInCaptainOrder">
<div class="cell" data-label="Property">usedInCaptainOrder</div>
<div class="cell" data-label="Column">usedInCaptainOrder</div>
<div class="cell" data-label="Arabic">مستخدم لكابتن أوردر</div>
<div class="cell" data-label="English">Used In Captain Order</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="usedInFullInvoice">
<div class="cell" data-label="Property">usedInFullInvoice</div>
<div class="cell" data-label="Column">usedInFullInvoice</div>
<div class="cell" data-label="Arabic">تستخدم في الفاتورة الكامله</div>
<div class="cell" data-label="English">Used In Full Invoice</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="usedInPOS">
<div class="cell" data-label="Property">usedInPOS</div>
<div class="cell" data-label="Column">usedInPOS</div>
<div class="cell" data-label="Arabic">مستخدم لنقاط البيع</div>
<div class="cell" data-label="English">Used In POS</div>
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

<div class="row searchable" id="viewName">
<div class="cell" data-label="Property">viewName</div>
<div class="cell" data-label="Column">viewName</div>
<div class="cell" data-label="Arabic">معرف الشاشة (اسم ملف العرض)</div>
<div class="cell" data-label="English">Layout ID (View name)</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="viewingFormat">
<div class="cell" data-label="Property">viewingFormat</div>
<div class="cell" data-label="Column">viewingFormat</div>
<div class="cell" data-label="Arabic">نسق المطالعة</div>
<div class="cell" data-label="English">Viewing Format</div>
<div class="cell" data-label="Type">Enum</div>

</div>


</div>
</div>

<div id='basedOnLines' title='basedOnLines' class='searchable'>

## basedOnLines (مبنى على حسب المستخدم الحالى - Based On Lines Filtered By Current User)
**Table Name:** ReportDefinitionBasedOnLine, **Join Column:** reportDefinition_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="basedOnLines.basedOnReport">
<div class="cell" data-label="Property">basedOnLines.basedOnReport</div>
<div class="cell" data-label="Column">basedOnReport_id</div>
<div class="cell" data-label="Arabic">التقرير المبني عليه</div>
<div class="cell" data-label="English">Based On Report</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ReportDefinition](/modules/basic/ReportDefinition.md) 
</div>
</div>

<div class="row searchable" id="basedOnLines.currentEmployee">
<div class="cell" data-label="Property">basedOnLines.currentEmployee</div>
<div class="cell gen-ref-column" data-label="Column">currentEmployeeActualCode,  currentEmployeeCode,  currentEmployeeEntityType,  currentEmployeeId</div>
<div class="cell" data-label="Arabic">الموظف الحالي</div>
<div class="cell" data-label="English">Current Employee</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="basedOnLines.currentUser">
<div class="cell" data-label="Property">basedOnLines.currentUser</div>
<div class="cell gen-ref-column" data-label="Column">currentUserActualCode,  currentUserCode,  currentUserEntityType,  currentUserId</div>
<div class="cell" data-label="Arabic">المستخدم الحالى</div>
<div class="cell" data-label="English">Current User</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="basedOnLines.id">
<div class="cell" data-label="Property">basedOnLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="basedOnLines.lineNumber">
<div class="cell" data-label="Property">basedOnLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="basedOnLines.loginDimensions.analysisSet">
<div class="cell" data-label="Property">basedOnLines.loginDimensions.analysisSet</div>
<div class="cell" data-label="Column">analysisSet_id</div>
<div class="cell" data-label="Arabic">المجموعة التحليلية</div>
<div class="cell" data-label="English">Analysis set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/modules/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="basedOnLines.loginDimensions.branch">
<div class="cell" data-label="Property">basedOnLines.loginDimensions.branch</div>
<div class="cell" data-label="Column">branch_id</div>
<div class="cell" data-label="Arabic">الفرع</div>
<div class="cell" data-label="English">Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/modules/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="basedOnLines.loginDimensions.department">
<div class="cell" data-label="Property">basedOnLines.loginDimensions.department</div>
<div class="cell" data-label="Column">department_id</div>
<div class="cell" data-label="Arabic">الإدارة</div>
<div class="cell" data-label="English">Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/modules/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="basedOnLines.loginDimensions.legalEntity">
<div class="cell" data-label="Property">basedOnLines.loginDimensions.legalEntity</div>
<div class="cell" data-label="Column">legalEntity_id</div>
<div class="cell" data-label="Arabic">الشركة</div>
<div class="cell" data-label="English">Legal Entity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [LegalEntity](/modules/basic/LegalEntity.md) 
</div>
</div>

<div class="row searchable" id="basedOnLines.loginDimensions.sector">
<div class="cell" data-label="Property">basedOnLines.loginDimensions.sector</div>
<div class="cell" data-label="Column">sector_id</div>
<div class="cell" data-label="Arabic">القطاع</div>
<div class="cell" data-label="English">Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/modules/basic/Sector.md) 
</div>
</div>


</div>
</div>

<div id='parametersOverride' title='parametersOverride' class='searchable'>

## parametersOverride (تعديل المدخلات - Parameters Override)
**Table Name:** RepParamOverride, **Join Column:** reportDefinition_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="parametersOverride.allowedValues">
<div class="cell" data-label="Property">parametersOverride.allowedValues</div>
<div class="cell" data-label="Column">allowedValues</div>
<div class="cell" data-label="Arabic">القيم المسموح بها</div>
<div class="cell" data-label="English">Allowed Values</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="parametersOverride.dateTimeValue">
<div class="cell" data-label="Property">parametersOverride.dateTimeValue</div>
<div class="cell" data-label="Column">dateTimeValue</div>
<div class="cell" data-label="Arabic">وقت/تاريخ</div>
<div class="cell" data-label="English">Date/Time</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="parametersOverride.dateValue">
<div class="cell" data-label="Property">parametersOverride.dateValue</div>
<div class="cell" data-label="Column">dateValue</div>
<div class="cell" data-label="Arabic">تاريخ</div>
<div class="cell" data-label="English">Date Value</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="parametersOverride.entityType">
<div class="cell" data-label="Property">parametersOverride.entityType</div>
<div class="cell" data-label="Column">entityType</div>
<div class="cell" data-label="Arabic">نوع السجل</div>
<div class="cell" data-label="English">Entity Type</div>
<div class="cell" data-label="Type">EntityType</div>

</div>

<div class="row searchable" id="parametersOverride.id">
<div class="cell" data-label="Property">parametersOverride.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="parametersOverride.lineNumber">
<div class="cell" data-label="Property">parametersOverride.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="parametersOverride.paramId">
<div class="cell" data-label="Property">parametersOverride.paramId</div>
<div class="cell" data-label="Column">paramId</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Parameter Id</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="parametersOverride.paramType">
<div class="cell" data-label="Property">parametersOverride.paramType</div>
<div class="cell" data-label="Column">paramType</div>
<div class="cell" data-label="Arabic">النوع</div>
<div class="cell" data-label="English">Param Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="parametersOverride.paramValue">
<div class="cell" data-label="Property">parametersOverride.paramValue</div>
<div class="cell" data-label="Column">paramValue</div>
<div class="cell" data-label="Arabic">القيمة</div>
<div class="cell" data-label="English">Param Value</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="parametersOverride.refValue">
<div class="cell" data-label="Property">parametersOverride.refValue</div>
<div class="cell gen-ref-column" data-label="Column">refValueActualCode,  refValueCode,  refValueEntityType,  refValueId</div>
<div class="cell" data-label="Arabic">مرجع</div>
<div class="cell" data-label="English">Reference</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="parametersOverride.timeValue">
<div class="cell" data-label="Property">parametersOverride.timeValue</div>
<div class="cell" data-label="Column">timeValue</div>
<div class="cell" data-label="Arabic">وقت</div>
<div class="cell" data-label="English">Time Value</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="parametersOverride.usage">
<div class="cell" data-label="Property">parametersOverride.usage</div>
<div class="cell" data-label="Column">usage</div>
<div class="cell" data-label="Arabic">طريقة الاستعمال</div>
<div class="cell" data-label="English">Usage</div>
<div class="cell" data-label="Type">Enum</div>

</div>


</div>
</div>

<div id='relatedForms' title='relatedForms' class='searchable'>

## relatedForms (النماذج المرتبطة - Related Forms)
**Table Name:** ReportRelatedForms, **Join Column:** reportDefinition_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="relatedForms.id">
<div class="cell" data-label="Property">relatedForms.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="relatedForms.lineNumber">
<div class="cell" data-label="Property">relatedForms.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="relatedForms.relatedForm">
<div class="cell" data-label="Property">relatedForms.relatedForm</div>
<div class="cell" data-label="Column">relatedForm_id</div>
<div class="cell" data-label="Arabic">النموذج المرتبط</div>
<div class="cell" data-label="English">Related Form</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ReportDefinition](/modules/basic/ReportDefinition.md) 
</div>
</div>


</div>
</div>

<div id='reportGroups' title='reportGroups' class='searchable'>

## reportGroups ( مجموعات تقارير -  Report Groups)
**Table Name:** ReportDefinitionGroupLine, **Join Column:** reportDefinition_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="reportGroups.id">
<div class="cell" data-label="Property">reportGroups.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="reportGroups.lineNumber">
<div class="cell" data-label="Property">reportGroups.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="reportGroups.reportGroup">
<div class="cell" data-label="Property">reportGroups.reportGroup</div>
<div class="cell" data-label="Column">reportGroup_id</div>
<div class="cell" data-label="Arabic">Report Group</div>
<div class="cell" data-label="English">Report Group</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ReportGroup](/modules/basic/ReportGroup.md) 
</div>
</div>


</div>
</div>

<div id='resources' title='resources' class='searchable'>

## resources (الملفات الإضافية - Resources)
**Table Name:** ReportResource, **Join Column:** reportDefinition_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="resources.id">
<div class="cell" data-label="Property">resources.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="resources.lineNumber">
<div class="cell" data-label="Property">resources.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="resources.reportContent">
<div class="cell" data-label="Property">resources.reportContent</div>
<div class="cell" data-label="Column">reportContent</div>
<div class="cell" data-label="Arabic">محتوي ملف التقرير</div>
<div class="cell" data-label="English">Report File Content</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="resources.reportFileName">
<div class="cell" data-label="Property">resources.reportFileName</div>
<div class="cell" data-label="Column">reportFileName</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="resources.resourceFile">
<div class="cell" data-label="Property">resources.resourceFile</div>
<div class="cell" data-label="Column">resourceFile_id</div>
<div class="cell" data-label="Arabic">الملف</div>
<div class="cell" data-label="English">Resource File</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/modules/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="resources.resourceId">
<div class="cell" data-label="Property">resources.resourceId</div>
<div class="cell" data-label="Column">resourceId</div>
<div class="cell" data-label="Arabic">Resource ID</div>
<div class="cell" data-label="English">Resource ID</div>
<div class="cell" data-label="Type">Text</div>

</div>


</div>
</div>

<div id='securityLines' title='securityLines' class='searchable'>

## securityLines ( - )
**Table Name:** ReportSecurityLine, **Join Column:** reportDefinition_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="securityLines.allowDisallow">
<div class="cell" data-label="Property">securityLines.allowDisallow</div>
<div class="cell" data-label="Column">allowDisallow</div>
<div class="cell" data-label="Arabic">سماح - منع</div>
<div class="cell" data-label="English">Allow - Disallow</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="securityLines.applicableFor">
<div class="cell" data-label="Property">securityLines.applicableFor</div>
<div class="cell gen-ref-column" data-label="Column">applicableForActualCode,  applicableForCode,  applicableForEntityType,  applicableForId</div>
<div class="cell" data-label="Arabic">مطبق على</div>
<div class="cell" data-label="English">Applicable For</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="securityLines.id">
<div class="cell" data-label="Property">securityLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="securityLines.lineNumber">
<div class="cell" data-label="Property">securityLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>


</div>
</div>

<div id='subreports' title='subreports' class='searchable'>

## subreports (التقارير الفرعية - Subreports)
**Table Name:** SubReport, **Join Column:** reportDefinition_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="subreports.arabicVersion">
<div class="cell" data-label="Property">subreports.arabicVersion</div>
<div class="cell" data-label="Column">arabicVersion_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/modules/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="subreports.englishVersion">
<div class="cell" data-label="Property">subreports.englishVersion</div>
<div class="cell" data-label="Column">englishVersion_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/modules/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="subreports.id">
<div class="cell" data-label="Property">subreports.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="subreports.lineNumber">
<div class="cell" data-label="Property">subreports.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="subreports.reportContent">
<div class="cell" data-label="Property">subreports.reportContent</div>
<div class="cell" data-label="Column">reportContent</div>
<div class="cell" data-label="Arabic">محتوي ملف التقرير</div>
<div class="cell" data-label="English">Report File Content</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="subreports.reportFileName">
<div class="cell" data-label="Property">subreports.reportFileName</div>
<div class="cell" data-label="Column">reportFileName</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="subreports.subreportDefinition">
<div class="cell" data-label="Property">subreports.subreportDefinition</div>
<div class="cell" data-label="Column">subreportDefinition_id</div>
<div class="cell" data-label="Arabic">التقرير</div>
<div class="cell" data-label="English">Sub Report Definition</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ReportDefinition](/modules/basic/ReportDefinition.md) 
</div>
</div>

<div class="row searchable" id="subreports.subreportFile">
<div class="cell" data-label="Property">subreports.subreportFile</div>
<div class="cell" data-label="Column">subreportFile_id</div>
<div class="cell" data-label="Arabic">الملف</div>
<div class="cell" data-label="English">Sub Report File</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/modules/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="subreports.subreportId">
<div class="cell" data-label="Property">subreports.subreportId</div>
<div class="cell" data-label="Column">subreportId</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Sub Report Id</div>
<div class="cell" data-label="Type">Text</div>

</div>


</div>
</div>

