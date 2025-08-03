
<div class='tableName'>


# CRTNMaterialPlanning
</div>

**Arabic:** تخطيط خامات الكرتون - خطط خامات الكرتون
**English:** CRTN Material Planning - CRTN Materials Planning

<ContentFilter/>


<div class='searchable'>
<a href='#availableMaterials'>availableMaterials (CRTNMaterialPlanningAvailableMaterial) </a> , <a href='#documents'>documents (CRTNMaterialPlanningLine) </a> , <a href='#items'>items (CRTNMaterialPlanningItemLine) </a> , <a href='#materials'>materials (CRTNMaterialPlanningMaterialLine) </a> , <a href='#materialsTotals'>materialsTotals (CRTNMaterialPlanningMaterialsTotals) </a>
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
</div><div class="row searchable" id="analysisSet">
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

<div class="row searchable" id="book">
<div class="cell" data-label="Property">book</div>
<div class="cell" data-label="Column">book_id</div>
<div class="cell" data-label="Arabic">الدفتر</div>
<div class="cell" data-label="English">Book</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DocumentBook](/modules/basic/DocumentBook.md) 
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

<div class="row searchable" id="cancelledBy">
<div class="cell" data-label="Property">cancelledBy</div>
<div class="cell" data-label="Column">cancelledBy_id</div>
<div class="cell" data-label="Arabic">ألغي بواسطة</div>
<div class="cell" data-label="English">Cancelled By</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DocumentCancelDocument](/modules/basic/DocumentCancelDocument.md) 
</div>
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

<div class="row searchable" id="dimensionsHistoryXml">
<div class="cell" data-label="Property">dimensionsHistoryXml</div>
<div class="cell" data-label="Column">dimensionsHistoryXml</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

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

<div class="row searchable" id="fiscalPeriod">
<div class="cell" data-label="Property">fiscalPeriod</div>
<div class="cell" data-label="Column">fiscalPeriod_id</div>
<div class="cell" data-label="Arabic">الفترة</div>
<div class="cell" data-label="English">Fiscal Period</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FiscalPeriod](/modules/basic/FiscalPeriod.md) 
</div>
</div>

<div class="row searchable" id="fiscalYear">
<div class="cell" data-label="Property">fiscalYear</div>
<div class="cell" data-label="Column">fiscalYear_id</div>
<div class="cell" data-label="Arabic">السنة المالية</div>
<div class="cell" data-label="English">Fiscal Year</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FiscalYear](/modules/basic/FiscalYear.md) 
</div>
</div>

<div class="row searchable" id="fromDoc">
<div class="cell" data-label="Property">fromDoc</div>
<div class="cell gen-ref-column" data-label="Column">fromDoc_ActualCode,  fromDoc_Code,  fromDoc_type,  fromDoc_id</div>
<div class="cell" data-label="Arabic">بناءا على</div>
<div class="cell" data-label="English">From Document</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="fromDocsCount">
<div class="cell" data-label="Property">fromDocsCount</div>
<div class="cell" data-label="Column">fromDocsCount</div>
<div class="cell" data-label="Arabic">عدد سندات بناء على</div>
<div class="cell" data-label="English">From Docs Count</div>
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

<div class="row searchable" id="id">
<div class="cell" data-label="Property">id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="indexInParent">
<div class="cell" data-label="Property">indexInParent</div>
<div class="cell" data-label="Column">indexInParent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="issueDate">
<div class="cell" data-label="Property">issueDate</div>
<div class="cell" data-label="Column">issueDate</div>
<div class="cell" data-label="Arabic">تاريخ التحرير</div>
<div class="cell" data-label="English">Issue Date</div>
<div class="cell" data-label="Type">Date</div>

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

<div class="row searchable" id="manualRef1">
<div class="cell" data-label="Property">manualRef1</div>
<div class="cell" data-label="Column">manualRef1</div>
<div class="cell" data-label="Arabic">رقم المستند اليدوي</div>
<div class="cell" data-label="English">Manual Ref1</div>
<div class="cell" data-label="Type">Text</div>

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

<div class="row searchable" id="openShift">
<div class="cell" data-label="Property">openShift</div>
<div class="cell" data-label="Column">openShift_id</div>
<div class="cell" data-label="Arabic">فتح وردية</div>
<div class="cell" data-label="English">Open Shift</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CSHOpenShift](/modules/accounting-cashier/CSHOpenShift.md) 
</div>
</div>

<div class="row searchable" id="parentCode">
<div class="cell" data-label="Property">parentCode</div>
<div class="cell" data-label="Column">parentCode</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="planSingleLayer">
<div class="cell" data-label="Property">planSingleLayer</div>
<div class="cell" data-label="Column">planSingleLayer</div>
<div class="cell" data-label="Arabic">تخطيط طبقة واحدة</div>
<div class="cell" data-label="English">Plan Single Stage</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="plannedRevision">
<div class="cell" data-label="Property">plannedRevision</div>
<div class="cell" data-label="Column">plannedRevision_id</div>
<div class="cell" data-label="Arabic">الإصدار المخطط</div>
<div class="cell" data-label="English">Planned Revision</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemRevisionFile](/modules/supplychain/ItemRevisionFile.md) 
</div>
</div>

<div class="row searchable" id="planningConfiguration">
<div class="cell" data-label="Property">planningConfiguration</div>
<div class="cell" data-label="Column">planningConfiguration_id</div>
<div class="cell" data-label="Arabic">إعدادات التخطيط</div>
<div class="cell" data-label="English">Planning Configuration</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CRTNPlanningConfiguration](/modules/manufacturing-crtn-pln/CRTNPlanningConfiguration.md) 
</div>
</div>

<div class="row searchable" id="planningStatus">
<div class="cell" data-label="Property">planningStatus</div>
<div class="cell" data-label="Column">planningStatus</div>
<div class="cell" data-label="Arabic">حالة التخطيط</div>
<div class="cell" data-label="English">Planning Status</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="preventUsage">
<div class="cell" data-label="Property">preventUsage</div>
<div class="cell" data-label="Column">preventUsage</div>
<div class="cell" data-label="Arabic">منع الاستعمال</div>
<div class="cell" data-label="English">Prevent Usage</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="preventUseAsFromDoc">
<div class="cell" data-label="Property">preventUseAsFromDoc</div>
<div class="cell" data-label="Column">preventUseAsFromDoc</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="printCount">
<div class="cell" data-label="Property">printCount</div>
<div class="cell" data-label="Column">printCount</div>
<div class="cell" data-label="Arabic">عدد مرات الطباعة</div>
<div class="cell" data-label="English">Print Count</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="purged">
<div class="cell" data-label="Property">purged</div>
<div class="cell" data-label="Column">purged</div>
<div class="cell" data-label="Arabic">Purged</div>
<div class="cell" data-label="English">Purged</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="rbook">
<div class="cell" data-label="Property">rbook</div>
<div class="cell" data-label="Column">rbook_id</div>
<div class="cell" data-label="Arabic">دفتر الايصالات</div>
<div class="cell" data-label="English">Receipt Book</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ReceiptBook](/modules/basic/ReceiptBook.md) 
</div>
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

<div class="row searchable" id="rpaper">
<div class="cell" data-label="Property">rpaper</div>
<div class="cell" data-label="Column">rpaper_id</div>
<div class="cell" data-label="Arabic">الايصال</div>
<div class="cell" data-label="English">Receipt Paper</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ReceiptPaper](/modules/basic/ReceiptPaper.md) 
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

<div class="row searchable" id="solutionType">
<div class="cell" data-label="Property">solutionType</div>
<div class="cell" data-label="Column">solutionType</div>
<div class="cell" data-label="Arabic">نوع الحل</div>
<div class="cell" data-label="English">Solution Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="solutionWallTime">
<div class="cell" data-label="Property">solutionWallTime</div>
<div class="cell" data-label="Column">solutionWallTime</div>
<div class="cell" data-label="Arabic">الوقت المستغرق للبحث عن حل</div>
<div class="cell" data-label="English">Solution Wall Time</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="term">
<div class="cell" data-label="Property">term</div>
<div class="cell" data-label="Column">term_id</div>
<div class="cell" data-label="Arabic">توجيه المستند</div>
<div class="cell" data-label="English">Term</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DocumentTerm](/modules/basic/DocumentTerm.md) 
</div>
</div>

<div class="row searchable" id="termConfigXml">
<div class="cell" data-label="Property">termConfigXml</div>
<div class="cell" data-label="Column">termConfigXml</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

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

<div class="row searchable" id="valueDate">
<div class="cell" data-label="Property">valueDate</div>
<div class="cell" data-label="Column">valueDate</div>
<div class="cell" data-label="Arabic">التاريخ الفعلي</div>
<div class="cell" data-label="English">Value Date</div>
<div class="cell" data-label="Type">Date</div>

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


</div>
</div>

<div id='availableMaterials' title='availableMaterials' class='searchable'>

## availableMaterials (الخامات المتاحة - Available Materials)

<div class='tableName'>

**Table Name:** CRTNMaterialPlanningAvailableMaterial, **Join Column:** cRTNMaterialPlanning_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="availableMaterials.availableQty">
<div class="cell" data-label="Property">availableMaterials.availableQty</div>
<div class="cell" data-label="Column">availableQty</div>
<div class="cell" data-label="Arabic">الكمية المتاحة</div>
<div class="cell" data-label="English">Available Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="availableMaterials.id">
<div class="cell" data-label="Property">availableMaterials.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="availableMaterials.item">
<div class="cell" data-label="Property">availableMaterials.item</div>
<div class="cell" data-label="Column">item_id</div>
<div class="cell" data-label="Arabic">الصنف</div>
<div class="cell" data-label="English">Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/modules/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="availableMaterials.itemClass1">
<div class="cell" data-label="Property">availableMaterials.itemClass1</div>
<div class="cell" data-label="Column">itemClass1_id</div>
<div class="cell" data-label="Arabic">تصنيف 1</div>
<div class="cell" data-label="English">Class 1</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass1](/modules/supplychain/ItemClass1.md) 
</div>
</div>

<div class="row searchable" id="availableMaterials.itemClass2">
<div class="cell" data-label="Property">availableMaterials.itemClass2</div>
<div class="cell" data-label="Column">itemClass2_id</div>
<div class="cell" data-label="Arabic">تصنيف 2</div>
<div class="cell" data-label="English">Class 2</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass2](/modules/supplychain/ItemClass2.md) 
</div>
</div>

<div class="row searchable" id="availableMaterials.lineNumber">
<div class="cell" data-label="Property">availableMaterials.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="availableMaterials.requiredQuantityInLayer1">
<div class="cell" data-label="Property">availableMaterials.requiredQuantityInLayer1</div>
<div class="cell" data-label="Column">requiredQuantityInLayer1</div>
<div class="cell" data-label="Arabic">الكمية المطلوبة في الطبقة 1</div>
<div class="cell" data-label="English">Required Quantity In Layer 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="availableMaterials.requiredQuantityInLayer2">
<div class="cell" data-label="Property">availableMaterials.requiredQuantityInLayer2</div>
<div class="cell" data-label="Column">requiredQuantityInLayer2</div>
<div class="cell" data-label="Arabic">الكمية المطلوبة في الطبقة 2</div>
<div class="cell" data-label="English">Required Quantity In Layer 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="availableMaterials.requiredQuantityInLayer3">
<div class="cell" data-label="Property">availableMaterials.requiredQuantityInLayer3</div>
<div class="cell" data-label="Column">requiredQuantityInLayer3</div>
<div class="cell" data-label="Arabic">الكمية المطلوبة في الطبقة 3</div>
<div class="cell" data-label="English">Required Quantity In Layer 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="availableMaterials.requiredQuantityInLayer4">
<div class="cell" data-label="Property">availableMaterials.requiredQuantityInLayer4</div>
<div class="cell" data-label="Column">requiredQuantityInLayer4</div>
<div class="cell" data-label="Arabic">الكمية المطلوبة في الطبقة 4</div>
<div class="cell" data-label="English">Required Quantity In Layer 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="availableMaterials.requiredQuantityInLayer5">
<div class="cell" data-label="Property">availableMaterials.requiredQuantityInLayer5</div>
<div class="cell" data-label="Column">requiredQuantityInLayer5</div>
<div class="cell" data-label="Arabic">الكمية المطلوبة في الطبقة 5</div>
<div class="cell" data-label="English">Required Quantity In Layer 5</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="availableMaterials.requiredQuantityInLayer6">
<div class="cell" data-label="Property">availableMaterials.requiredQuantityInLayer6</div>
<div class="cell" data-label="Column">requiredQuantityInLayer6</div>
<div class="cell" data-label="Arabic">الكمية المطلوبة في الطبقة6</div>
<div class="cell" data-label="English">Required Quantity In Layer 6</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="availableMaterials.requiredQuantityInLayer7">
<div class="cell" data-label="Property">availableMaterials.requiredQuantityInLayer7</div>
<div class="cell" data-label="Column">requiredQuantityInLayer7</div>
<div class="cell" data-label="Arabic">الكمية المطلوبة في الطبقة 7</div>
<div class="cell" data-label="English">Required Quantity In Layer 7</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="availableMaterials.rollWidth">
<div class="cell" data-label="Property">availableMaterials.rollWidth</div>
<div class="cell" data-label="Column">rollWidth</div>
<div class="cell" data-label="Arabic">عرض البكرة</div>
<div class="cell" data-label="English">Roll Width</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="availableMaterials.totalRequiredQuantity">
<div class="cell" data-label="Property">availableMaterials.totalRequiredQuantity</div>
<div class="cell" data-label="Column">totalRequiredQuantity</div>
<div class="cell" data-label="Arabic">إجمالي الكميات المطلوبة</div>
<div class="cell" data-label="English">Total Required Quantities</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="availableMaterials.unavailableQty">
<div class="cell" data-label="Property">availableMaterials.unavailableQty</div>
<div class="cell" data-label="Column">unavailableQty</div>
<div class="cell" data-label="Arabic">الكمية الغير متاحة</div>
<div class="cell" data-label="English">Unavailable Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>


</div>
</div>

<div id='documents' title='documents' class='searchable'>

## documents (المستندات - documents)

<div class='tableName'>

**Table Name:** CRTNMaterialPlanningLine, **Join Column:** cRTNMaterialPlanning_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="documents.crtnOrder">
<div class="cell" data-label="Property">documents.crtnOrder</div>
<div class="cell" data-label="Column">crtnOrder_id</div>
<div class="cell" data-label="Arabic"> طلبية كرتون</div>
<div class="cell" data-label="English"> Carton Order</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CRTNOrder](/modules/manufacturing-crtn-pln/CRTNOrder.md) 
</div>
</div>

<div class="row searchable" id="documents.customer">
<div class="cell" data-label="Property">documents.customer</div>
<div class="cell" data-label="Column">customer_id</div>
<div class="cell" data-label="Arabic">العميل</div>
<div class="cell" data-label="English">Customer</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Customer](/modules/basic/Customer.md) 
</div>
</div>

<div class="row searchable" id="documents.id">
<div class="cell" data-label="Property">documents.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="documents.lineNumber">
<div class="cell" data-label="Property">documents.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="documents.netValue">
<div class="cell" data-label="Property">documents.netValue</div>
<div class="cell" data-label="Column">netValue</div>
<div class="cell" data-label="Arabic">الصافي</div>
<div class="cell" data-label="English">Net value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="documents.total">
<div class="cell" data-label="Property">documents.total</div>
<div class="cell" data-label="Column">total</div>
<div class="cell" data-label="Arabic">الإجمالي</div>
<div class="cell" data-label="English">Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>


</div>
</div>

<div id='items' title='items' class='searchable'>

## items (الوصلات - Items)

<div class='tableName'>

**Table Name:** CRTNMaterialPlanningItemLine, **Join Column:** cRTNMaterialPlanning_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="items.cartonSpecs">
<div class="cell" data-label="Property">items.cartonSpecs</div>
<div class="cell" data-label="Column">cartonSpecs_id</div>
<div class="cell" data-label="Arabic">مواصفات الكرتونة</div>
<div class="cell" data-label="English">Carton Specs</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CRTNSpecification](/modules/manufacturing-crtn-pln/CRTNSpecification.md) 
</div>
</div>

<div class="row searchable" id="items.crtnOrder">
<div class="cell" data-label="Property">items.crtnOrder</div>
<div class="cell" data-label="Column">crtnOrder_id</div>
<div class="cell" data-label="Arabic"> طلبية كرتون</div>
<div class="cell" data-label="English"> Carton Order</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CRTNOrder](/modules/manufacturing-crtn-pln/CRTNOrder.md) 
</div>
</div>

<div class="row searchable" id="items.flapValue">
<div class="cell" data-label="Property">items.flapValue</div>
<div class="cell" data-label="Column">flapValue</div>
<div class="cell" data-label="Arabic">اللسان</div>
<div class="cell" data-label="English">Flap Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="items.forceLayer1RollWidth">
<div class="cell" data-label="Property">items.forceLayer1RollWidth</div>
<div class="cell" data-label="Column">forceLayer1RollWidth</div>
<div class="cell" data-label="Arabic">استعمال عرض رول للطبقة 1</div>
<div class="cell" data-label="English">Force Layer 1 Roll Width</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="items.forceLayer2RollWidth">
<div class="cell" data-label="Property">items.forceLayer2RollWidth</div>
<div class="cell" data-label="Column">forceLayer2RollWidth</div>
<div class="cell" data-label="Arabic">استعمال عرض رول للطبقة 2</div>
<div class="cell" data-label="English">Force Layer 2 Roll Width</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="items.forceLayer3RollWidth">
<div class="cell" data-label="Property">items.forceLayer3RollWidth</div>
<div class="cell" data-label="Column">forceLayer3RollWidth</div>
<div class="cell" data-label="Arabic">استعمال عرض رول للطبقة 3</div>
<div class="cell" data-label="English">Force Layer 3 Roll Width</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="items.forceLayer4RollWidth">
<div class="cell" data-label="Property">items.forceLayer4RollWidth</div>
<div class="cell" data-label="Column">forceLayer4RollWidth</div>
<div class="cell" data-label="Arabic">استعمال عرض رول للطبقة 4</div>
<div class="cell" data-label="English">Force Layer 4 Roll Width</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="items.forceLayer5RollWidth">
<div class="cell" data-label="Property">items.forceLayer5RollWidth</div>
<div class="cell" data-label="Column">forceLayer5RollWidth</div>
<div class="cell" data-label="Arabic">استعمال عرض رول للطبقة 5</div>
<div class="cell" data-label="English">Force Layer 5 Roll Width</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="items.forceLayer6RollWidth">
<div class="cell" data-label="Property">items.forceLayer6RollWidth</div>
<div class="cell" data-label="Column">forceLayer6RollWidth</div>
<div class="cell" data-label="Arabic">استعمال عرض رول للطبقة 6</div>
<div class="cell" data-label="English">Force Layer 6 Roll Width</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="items.forceLayer7RollWidth">
<div class="cell" data-label="Property">items.forceLayer7RollWidth</div>
<div class="cell" data-label="Column">forceLayer7RollWidth</div>
<div class="cell" data-label="Arabic">استعمال عرض رول للطبقة 7</div>
<div class="cell" data-label="English">Force Layer 7 Roll Width</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="items.forceLayersRollWidth">
<div class="cell" data-label="Property">items.forceLayersRollWidth</div>
<div class="cell" data-label="Column">forceLayersRollWidth</div>
<div class="cell" data-label="Arabic">استعمال عرض رول لكل الطبقات</div>
<div class="cell" data-label="English">Force All Layers Roll Width</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="items.height">
<div class="cell" data-label="Property">items.height</div>
<div class="cell" data-label="Column">height</div>
<div class="cell" data-label="Arabic">الأبعاد | الارتفاع</div>
<div class="cell" data-label="English">Measures | Height</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="items.id">
<div class="cell" data-label="Property">items.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="items.item">
<div class="cell" data-label="Property">items.item</div>
<div class="cell" data-label="Column">item_id</div>
<div class="cell" data-label="Arabic">الصنف</div>
<div class="cell" data-label="English">Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/modules/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="items.length">
<div class="cell" data-label="Property">items.length</div>
<div class="cell" data-label="Column">length</div>
<div class="cell" data-label="Arabic">الأبعاد | الطول</div>
<div class="cell" data-label="English">Measures | Length</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="items.lineNumber">
<div class="cell" data-label="Property">items.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="items.masterRowId">
<div class="cell" data-label="Property">items.masterRowId</div>
<div class="cell" data-label="Column">masterRowId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="items.metricLength">
<div class="cell" data-label="Property">items.metricLength</div>
<div class="cell" data-label="Column">metricLength</div>
<div class="cell" data-label="Arabic">الطول المتري</div>
<div class="cell" data-label="English">Metric Length</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="items.numberOfOperations">
<div class="cell" data-label="Property">items.numberOfOperations</div>
<div class="cell" data-label="Column">numberOfOperations</div>
<div class="cell" data-label="Arabic">عدد التشغيلات</div>
<div class="cell" data-label="English">Number Of Operations</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="items.numberOfPieces">
<div class="cell" data-label="Property">items.numberOfPieces</div>
<div class="cell" data-label="Column">numberOfPieces</div>
<div class="cell" data-label="Arabic">عدد القطع</div>
<div class="cell" data-label="English">Number Of Pieces</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="items.numberOfStrikes">
<div class="cell" data-label="Property">items.numberOfStrikes</div>
<div class="cell" data-label="Column">numberOfStrikes</div>
<div class="cell" data-label="Arabic">عدد الضربيات</div>
<div class="cell" data-label="English">Number Of Strikes</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="items.operatingWidth">
<div class="cell" data-label="Property">items.operatingWidth</div>
<div class="cell" data-label="Column">operatingWidth</div>
<div class="cell" data-label="Arabic">عرض التشغيل</div>
<div class="cell" data-label="English">Operating Width</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="items.productionOrder">
<div class="cell" data-label="Property">items.productionOrder</div>
<div class="cell" data-label="Column">productionOrder_id</div>
<div class="cell" data-label="Arabic"> أمر إنتاج</div>
<div class="cell" data-label="English"> Production Order</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ProductionOrder](/modules/manufacturing/ProductionOrder.md) 
</div>
</div>

<div class="row searchable" id="items.quantity.uom">
<div class="cell" data-label="Property">items.quantity.uom</div>
<div class="cell" data-label="Column">quantityUom_id</div>
<div class="cell" data-label="Arabic">الكمية | الوحدة</div>
<div class="cell" data-label="English">Quantity | Uom</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="items.quantity.value">
<div class="cell" data-label="Property">items.quantity.value</div>
<div class="cell" data-label="Column">quantityValue</div>
<div class="cell" data-label="Arabic">الكمية  | القيمة</div>
<div class="cell" data-label="English">Quantity | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="items.rollWidth">
<div class="cell" data-label="Property">items.rollWidth</div>
<div class="cell" data-label="Column">rollWidth</div>
<div class="cell" data-label="Arabic">عرض البكرة</div>
<div class="cell" data-label="English">Roll Width</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="items.sheetLength">
<div class="cell" data-label="Property">items.sheetLength</div>
<div class="cell" data-label="Column">sheetLength</div>
<div class="cell" data-label="Arabic">طول الشيت</div>
<div class="cell" data-label="English">Sheet Length</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="items.sheetWidth">
<div class="cell" data-label="Property">items.sheetWidth</div>
<div class="cell" data-label="Column">sheetWidth</div>
<div class="cell" data-label="Arabic">عرض الشيت</div>
<div class="cell" data-label="English">Sheet Width</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="items.specificDimensions.activePerc">
<div class="cell" data-label="Property">items.specificDimensions.activePerc</div>
<div class="cell" data-label="Column">activePerc</div>
<div class="cell" data-label="Arabic">النسبة الفعالة</div>
<div class="cell" data-label="English">Active Percentage</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="items.specificDimensions.box">
<div class="cell" data-label="Property">items.specificDimensions.box</div>
<div class="cell" data-label="Column">box</div>
<div class="cell" data-label="Arabic">صندوق</div>
<div class="cell" data-label="English">Box</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="items.specificDimensions.color">
<div class="cell" data-label="Property">items.specificDimensions.color</div>
<div class="cell" data-label="Column">color</div>
<div class="cell" data-label="Arabic">اللون</div>
<div class="cell" data-label="English">Color</div>
<div class="cell" data-label="Type">Color</div>

</div>

<div class="row searchable" id="items.specificDimensions.inactivePerc">
<div class="cell" data-label="Property">items.specificDimensions.inactivePerc</div>
<div class="cell" data-label="Column">inactivePerc</div>
<div class="cell" data-label="Arabic">النسبة الغير فعالة</div>
<div class="cell" data-label="English">Inactive Percentage</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="items.specificDimensions.locator">
<div class="cell" data-label="Property">items.specificDimensions.locator</div>
<div class="cell" data-label="Column">locator_id</div>
<div class="cell" data-label="Arabic">الموقع</div>
<div class="cell" data-label="English">Locator</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Locator](/modules/supplychain/Locator.md) 
</div>
</div>

<div class="row searchable" id="items.specificDimensions.lotId">
<div class="cell" data-label="Property">items.specificDimensions.lotId</div>
<div class="cell" data-label="Column">lotId</div>
<div class="cell" data-label="Arabic">رقم الشحنه</div>
<div class="cell" data-label="English">Lot ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="items.specificDimensions.measures">
<div class="cell" data-label="Property">items.specificDimensions.measures</div>
<div class="cell" data-label="Column">measures</div>
<div class="cell" data-label="Arabic">الأبعاد</div>
<div class="cell" data-label="English">Measures</div>
<div class="cell" data-label="Type">Measures</div>

</div>

<div class="row searchable" id="items.specificDimensions.revisionId">
<div class="cell" data-label="Property">items.specificDimensions.revisionId</div>
<div class="cell" data-label="Column">revisionId</div>
<div class="cell" data-label="Arabic">الإصدار</div>
<div class="cell" data-label="English">Revision ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="items.specificDimensions.secondSerial">
<div class="cell" data-label="Property">items.specificDimensions.secondSerial</div>
<div class="cell" data-label="Column">secondSerial</div>
<div class="cell" data-label="Arabic">الرقم المسلسل الثاني</div>
<div class="cell" data-label="English">Second Serial</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="items.specificDimensions.serialNumber">
<div class="cell" data-label="Property">items.specificDimensions.serialNumber</div>
<div class="cell" data-label="Column">serialNumber</div>
<div class="cell" data-label="Arabic">الرقم المسلسل</div>
<div class="cell" data-label="English">Serial number</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="items.specificDimensions.size">
<div class="cell" data-label="Property">items.specificDimensions.size</div>
<div class="cell" data-label="Column">size</div>
<div class="cell" data-label="Arabic">المقاس</div>
<div class="cell" data-label="English">Size</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="items.specificDimensions.subItem">
<div class="cell" data-label="Property">items.specificDimensions.subItem</div>
<div class="cell" data-label="Column">subItem_id</div>
<div class="cell" data-label="Arabic"> صنف فرعى</div>
<div class="cell" data-label="English"> SubItem</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SubItem](/modules/srvcenter-subitems/SubItem.md) 
</div>
</div>

<div class="row searchable" id="items.specificDimensions.warehouse">
<div class="cell" data-label="Property">items.specificDimensions.warehouse</div>
<div class="cell" data-label="Column">warehouse_id</div>
<div class="cell" data-label="Arabic">المخزن</div>
<div class="cell" data-label="English">Warehouse</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="items.totalPlannedQty">
<div class="cell" data-label="Property">items.totalPlannedQty</div>
<div class="cell" data-label="Column">totalPlannedQty</div>
<div class="cell" data-label="Arabic">إجمالي الكمية المخططة</div>
<div class="cell" data-label="English">Total Planned Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="items.totalPrice">
<div class="cell" data-label="Property">items.totalPrice</div>
<div class="cell" data-label="Column">totalPrice</div>
<div class="cell" data-label="Arabic">إجمالي السعر</div>
<div class="cell" data-label="English">  Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="items.totalRequestedQty">
<div class="cell" data-label="Property">items.totalRequestedQty</div>
<div class="cell" data-label="Column">totalRequestedQty</div>
<div class="cell" data-label="Arabic">إجمالي الكمية المطلوبة</div>
<div class="cell" data-label="English">Total Requested Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="items.trim">
<div class="cell" data-label="Property">items.trim</div>
<div class="cell" data-label="Column">trim</div>
<div class="cell" data-label="Arabic">التريم</div>
<div class="cell" data-label="English">Trim</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="items.unitPrice">
<div class="cell" data-label="Property">items.unitPrice</div>
<div class="cell" data-label="Column">unitPrice</div>
<div class="cell" data-label="Arabic">سعر الوحدة</div>
<div class="cell" data-label="English">Unit Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="items.width">
<div class="cell" data-label="Property">items.width</div>
<div class="cell" data-label="Column">width</div>
<div class="cell" data-label="Arabic">الأبعاد | العرض</div>
<div class="cell" data-label="English">Measures | Width</div>
<div class="cell" data-label="Type">Decimal</div>

</div>


</div>
</div>

<div id='materials' title='materials' class='searchable'>

## materials (قطع غيار - Spare Parts)

<div class='tableName'>

**Table Name:** CRTNMaterialPlanningMaterialLine, **Join Column:** cRTNMaterialPlanning_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="materials.activeDoc">
<div class="cell" data-label="Property">materials.activeDoc</div>
<div class="cell" data-label="Column">activeDoc</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="materials.allowOverdraft">
<div class="cell" data-label="Property">materials.allowOverdraft</div>
<div class="cell" data-label="Column">allowOverdraft</div>
<div class="cell" data-label="Arabic">السماح بالسحب على المكشوف</div>
<div class="cell" data-label="English">Allow Overdraft</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="materials.attachment">
<div class="cell" data-label="Property">materials.attachment</div>
<div class="cell" data-label="Column">attachment_id</div>
<div class="cell" data-label="Arabic">مرفق</div>
<div class="cell" data-label="English">Attachment</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/modules/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="materials.b1">
<div class="cell" data-label="Property">materials.b1</div>
<div class="cell" data-label="Column">b1</div>
<div class="cell" data-label="Arabic">Boolean 1</div>
<div class="cell" data-label="English">Boolean 1</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="materials.b2">
<div class="cell" data-label="Property">materials.b2</div>
<div class="cell" data-label="Column">b2</div>
<div class="cell" data-label="Arabic">Boolean 2</div>
<div class="cell" data-label="English">Boolean 2</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="materials.b3">
<div class="cell" data-label="Property">materials.b3</div>
<div class="cell" data-label="Column">b3</div>
<div class="cell" data-label="Arabic">Boolean 3</div>
<div class="cell" data-label="English">Boolean 3</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="materials.calculationFormula">
<div class="cell" data-label="Property">materials.calculationFormula</div>
<div class="cell" data-label="Column">calculationFormula_id</div>
<div class="cell" data-label="Arabic"> الصيغة الحسابية</div>
<div class="cell" data-label="English"> Calculation Formula</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CalculationFormula](/modules/supplychain/CalculationFormula.md) 
</div>
</div>

<div class="row searchable" id="materials.cartonSpecs">
<div class="cell" data-label="Property">materials.cartonSpecs</div>
<div class="cell" data-label="Column">cartonSpecs_id</div>
<div class="cell" data-label="Arabic">مواصفات الكرتونة</div>
<div class="cell" data-label="English">Carton Specs</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CRTNSpecification](/modules/manufacturing-crtn-pln/CRTNSpecification.md) 
</div>
</div>

<div class="row searchable" id="materials.colorName">
<div class="cell" data-label="Property">materials.colorName</div>
<div class="cell" data-label="Column">colorName</div>
<div class="cell" data-label="Arabic">اسم اللون</div>
<div class="cell" data-label="English">Color Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="materials.comp">
<div class="cell" data-label="Property">materials.comp</div>
<div class="cell" data-label="Column">comp_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AssemblyComponent](/modules/supplychain-assembly/AssemblyComponent.md) 
</div>
</div>

<div class="row searchable" id="materials.crtnOrder">
<div class="cell" data-label="Property">materials.crtnOrder</div>
<div class="cell" data-label="Column">crtnOrder_id</div>
<div class="cell" data-label="Arabic"> طلبية كرتون</div>
<div class="cell" data-label="English"> Carton Order</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CRTNOrder](/modules/manufacturing-crtn-pln/CRTNOrder.md) 
</div>
</div>

<div class="row searchable" id="materials.date1">
<div class="cell" data-label="Property">materials.date1</div>
<div class="cell" data-label="Column">date1</div>
<div class="cell" data-label="Arabic">تـــاريخ 1</div>
<div class="cell" data-label="English">Date 1</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="materials.deleteOnSave">
<div class="cell" data-label="Property">materials.deleteOnSave</div>
<div class="cell" data-label="Column">deleteOnSave</div>
<div class="cell" data-label="Arabic">مسح عند الحفظ</div>
<div class="cell" data-label="English">Delete On Save</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="materials.documentId">
<div class="cell" data-label="Property">materials.documentId</div>
<div class="cell" data-label="Column">documentId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="materials.emptyWeight">
<div class="cell" data-label="Property">materials.emptyWeight</div>
<div class="cell" data-label="Column">emptyWeight</div>
<div class="cell" data-label="Arabic">وزن الفارغ</div>
<div class="cell" data-label="English">Empty Weight</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.expiryDate">
<div class="cell" data-label="Property">materials.expiryDate</div>
<div class="cell" data-label="Column">expiryDate</div>
<div class="cell" data-label="Arabic">تاريخ الإنتهاء</div>
<div class="cell" data-label="English">Expiry Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="materials.finishedItem">
<div class="cell" data-label="Property">materials.finishedItem</div>
<div class="cell" data-label="Column">finishedItem_id</div>
<div class="cell" data-label="Arabic">الصنف النهائي</div>
<div class="cell" data-label="English">Finished Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/modules/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="materials.finishedItemQty">
<div class="cell" data-label="Property">materials.finishedItemQty</div>
<div class="cell" data-label="Column">finishedItemQty</div>
<div class="cell" data-label="Arabic">كمية الصنف النهائي</div>
<div class="cell" data-label="English">Finished Item Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.genericDimensions.analysisSet">
<div class="cell" data-label="Property">materials.genericDimensions.analysisSet</div>
<div class="cell" data-label="Column">analysisSet_id</div>
<div class="cell" data-label="Arabic">المجموعة التحليلية</div>
<div class="cell" data-label="English">Analysis set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/modules/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="materials.genericDimensions.branch">
<div class="cell" data-label="Property">materials.genericDimensions.branch</div>
<div class="cell" data-label="Column">branch_id</div>
<div class="cell" data-label="Arabic">الفرع</div>
<div class="cell" data-label="English">Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/modules/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="materials.genericDimensions.department">
<div class="cell" data-label="Property">materials.genericDimensions.department</div>
<div class="cell" data-label="Column">department_id</div>
<div class="cell" data-label="Arabic">الإدارة</div>
<div class="cell" data-label="English">Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/modules/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="materials.genericDimensions.legalEntity">
<div class="cell" data-label="Property">materials.genericDimensions.legalEntity</div>
<div class="cell" data-label="Column">legalEntity_id</div>
<div class="cell" data-label="Arabic">الشركة</div>
<div class="cell" data-label="English">Legal Entity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [LegalEntity](/modules/basic/LegalEntity.md) 
</div>
</div>

<div class="row searchable" id="materials.genericDimensions.sector">
<div class="cell" data-label="Property">materials.genericDimensions.sector</div>
<div class="cell" data-label="Column">sector_id</div>
<div class="cell" data-label="Arabic">القطاع</div>
<div class="cell" data-label="English">Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/modules/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="materials.grossWeight">
<div class="cell" data-label="Property">materials.grossWeight</div>
<div class="cell" data-label="Column">grossWeight</div>
<div class="cell" data-label="Arabic">الوزن القائم</div>
<div class="cell" data-label="English">Gross Weight</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.id">
<div class="cell" data-label="Property">materials.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="materials.item.item">
<div class="cell" data-label="Property">materials.item.item</div>
<div class="cell" data-label="Column">item_id</div>
<div class="cell" data-label="Arabic">الصنف</div>
<div class="cell" data-label="English">Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/modules/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="materials.item.itemCode">
<div class="cell" data-label="Property">materials.item.itemCode</div>
<div class="cell" data-label="Column">itemCode</div>
<div class="cell" data-label="Arabic"> الكود</div>
<div class="cell" data-label="English"> Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="materials.item.itemName1">
<div class="cell" data-label="Property">materials.item.itemName1</div>
<div class="cell" data-label="Column">itemName1</div>
<div class="cell" data-label="Arabic">اسم الصنف</div>
<div class="cell" data-label="English">Item Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="materials.item.itemName2">
<div class="cell" data-label="Property">materials.item.itemName2</div>
<div class="cell" data-label="Column">itemName2</div>
<div class="cell" data-label="Arabic">اسم الصنف الإنجليزي</div>
<div class="cell" data-label="English">Item English Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="materials.itemClass1">
<div class="cell" data-label="Property">materials.itemClass1</div>
<div class="cell" data-label="Column">itemClass1_id</div>
<div class="cell" data-label="Arabic">تصنيف 1</div>
<div class="cell" data-label="English">Class 1</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass1](/modules/supplychain/ItemClass1.md) 
</div>
</div>

<div class="row searchable" id="materials.itemClass2">
<div class="cell" data-label="Property">materials.itemClass2</div>
<div class="cell" data-label="Column">itemClass2_id</div>
<div class="cell" data-label="Arabic">تصنيف 2</div>
<div class="cell" data-label="English">Class 2</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass2](/modules/supplychain/ItemClass2.md) 
</div>
</div>

<div class="row searchable" id="materials.lineNumber">
<div class="cell" data-label="Property">materials.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="materials.masterRowId">
<div class="cell" data-label="Property">materials.masterRowId</div>
<div class="cell" data-label="Column">masterRowId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="materials.metricLength">
<div class="cell" data-label="Property">materials.metricLength</div>
<div class="cell" data-label="Column">metricLength</div>
<div class="cell" data-label="Arabic">الطول المتري</div>
<div class="cell" data-label="English">Metric Length</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.n1">
<div class="cell" data-label="Property">materials.n1</div>
<div class="cell" data-label="Column">n1</div>
<div class="cell" data-label="Arabic">رقم 1</div>
<div class="cell" data-label="English">Number 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.n2">
<div class="cell" data-label="Property">materials.n2</div>
<div class="cell" data-label="Column">n2</div>
<div class="cell" data-label="Arabic">رقم 2</div>
<div class="cell" data-label="English">Number 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.n3">
<div class="cell" data-label="Property">materials.n3</div>
<div class="cell" data-label="Column">n3</div>
<div class="cell" data-label="Arabic">رقم 3</div>
<div class="cell" data-label="English">Number 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.numberOfPieces">
<div class="cell" data-label="Property">materials.numberOfPieces</div>
<div class="cell" data-label="Column">numberOfPieces</div>
<div class="cell" data-label="Arabic">عدد القطع</div>
<div class="cell" data-label="English">Number Of Pieces</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.numberOfStrikes">
<div class="cell" data-label="Property">materials.numberOfStrikes</div>
<div class="cell" data-label="Column">numberOfStrikes</div>
<div class="cell" data-label="Arabic">عدد الضربيات</div>
<div class="cell" data-label="English">Number Of Strikes</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.orginDoc">
<div class="cell" data-label="Property">materials.orginDoc</div>
<div class="cell gen-ref-column" data-label="Column">orginDocActualCode,  orginDocCode,  orginDocEntityType,  orginDocId</div>
<div class="cell" data-label="Arabic">تم النسخ من سند</div>
<div class="cell" data-label="English">Copied From Doc</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="materials.pickLineId">
<div class="cell" data-label="Property">materials.pickLineId</div>
<div class="cell" data-label="Column">pickLineId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="materials.pricingQty">
<div class="cell" data-label="Property">materials.pricingQty</div>
<div class="cell" data-label="Column">pricingQty</div>
<div class="cell" data-label="Arabic">كمية التسعير</div>
<div class="cell" data-label="English">Pricing Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.productionDate">
<div class="cell" data-label="Property">materials.productionDate</div>
<div class="cell" data-label="Column">productionDate</div>
<div class="cell" data-label="Arabic">تاريخ الإنتاج</div>
<div class="cell" data-label="English">Production Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="materials.qtyAtInsert">
<div class="cell" data-label="Property">materials.qtyAtInsert</div>
<div class="cell" data-label="Column">qtyAtInsert</div>
<div class="cell" data-label="Arabic">الكمية عند الإنشاء</div>
<div class="cell" data-label="English">Qty At Insert</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.qtyAtInsertWithReserv">
<div class="cell" data-label="Property">materials.qtyAtInsertWithReserv</div>
<div class="cell" data-label="Column">qtyAtInsertWithReserv</div>
<div class="cell" data-label="Arabic">الكمية عند الإنشاء مع الحجز</div>
<div class="cell" data-label="English">Qty At Insert With Reserv</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.quantity.baseQty.uom">
<div class="cell" data-label="Property">materials.quantity.baseQty.uom</div>
<div class="cell" data-label="Column">quantityBaseUom_id</div>
<div class="cell" data-label="Arabic">الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="materials.quantity.baseQty.value">
<div class="cell" data-label="Property">materials.quantity.baseQty.value</div>
<div class="cell" data-label="Column">quantityBaseValue</div>
<div class="cell" data-label="Arabic">الكمية</div>
<div class="cell" data-label="English">Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.quantity.itemAssortment">
<div class="cell" data-label="Property">materials.quantity.itemAssortment</div>
<div class="cell" data-label="Column">quantityItemAssortment_id</div>
<div class="cell" data-label="Arabic">التشكيلة</div>
<div class="cell" data-label="English">The Assortment</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemAssortment](/modules/supplychain/ItemAssortment.md) 
</div>
</div>

<div class="row searchable" id="materials.quantity.measureQty">
<div class="cell" data-label="Property">materials.quantity.measureQty</div>
<div class="cell" data-label="Column">quantityMeasureQty</div>
<div class="cell" data-label="Arabic">الأبعاد | عدد</div>
<div class="cell" data-label="English">Measures | Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.quantity.measures.clippedLength1">
<div class="cell" data-label="Property">materials.quantity.measures.clippedLength1</div>
<div class="cell" data-label="Column">quantityClippedLength1</div>
<div class="cell" data-label="Arabic">أبعادالجزء المقصوص 1 | الطول</div>
<div class="cell" data-label="English">Clipped Part1 Measures | Length</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.quantity.measures.height">
<div class="cell" data-label="Property">materials.quantity.measures.height</div>
<div class="cell" data-label="Column">quantityHeight</div>
<div class="cell" data-label="Arabic">الأبعاد | ر</div>
<div class="cell" data-label="English">Measures | H</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.quantity.measures.length">
<div class="cell" data-label="Property">materials.quantity.measures.length</div>
<div class="cell" data-label="Column">quantityLength</div>
<div class="cell" data-label="Arabic">الأبعاد | ط</div>
<div class="cell" data-label="English">Measures | L</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.quantity.measures.text">
<div class="cell" data-label="Property">materials.quantity.measures.text</div>
<div class="cell" data-label="Column">quantityText</div>
<div class="cell" data-label="Arabic">الأبعاد | الأبعاد</div>
<div class="cell" data-label="English">Measures | L * W * H</div>
<div class="cell" data-label="Type">Measures</div>

</div>

<div class="row searchable" id="materials.quantity.measures.width">
<div class="cell" data-label="Property">materials.quantity.measures.width</div>
<div class="cell" data-label="Column">quantityWidth</div>
<div class="cell" data-label="Arabic">الأبعاد | ع</div>
<div class="cell" data-label="English">Measures | W</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.quantity.quantity.primeQty.uom">
<div class="cell" data-label="Property">materials.quantity.quantity.primeQty.uom</div>
<div class="cell" data-label="Column">quantityPUom_id</div>
<div class="cell" data-label="Arabic">الوحدة الرئيسية | الوحدة</div>
<div class="cell" data-label="English">Primary | UOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="materials.quantity.quantity.primeQty.value">
<div class="cell" data-label="Property">materials.quantity.quantity.primeQty.value</div>
<div class="cell" data-label="Column">quantityPValue</div>
<div class="cell" data-label="Arabic">الوحدة الرئيسية | الكمية</div>
<div class="cell" data-label="English">Primary | Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.quantity.quantity.secondQty.uom">
<div class="cell" data-label="Property">materials.quantity.quantity.secondQty.uom</div>
<div class="cell" data-label="Column">quantitySUom_id</div>
<div class="cell" data-label="Arabic">الوحدة الثانية | الوحدة</div>
<div class="cell" data-label="English">Secondary | UOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="materials.quantity.quantity.secondQty.value">
<div class="cell" data-label="Property">materials.quantity.quantity.secondQty.value</div>
<div class="cell" data-label="Column">quantitySValue</div>
<div class="cell" data-label="Arabic">الوحدة الثانية | الكمية</div>
<div class="cell" data-label="English">Secondary | Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.quantity.uomRate">
<div class="cell" data-label="Property">materials.quantity.uomRate</div>
<div class="cell" data-label="Column">quantityUomRate</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.ref1">
<div class="cell" data-label="Property">materials.ref1</div>
<div class="cell gen-ref-column" data-label="Column">ref1ActualCode,  ref1Code,  ref1EntityType,  ref1Id</div>
<div class="cell" data-label="Arabic">مرجع 1</div>
<div class="cell" data-label="English">Reference 1</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="materials.ref2">
<div class="cell" data-label="Property">materials.ref2</div>
<div class="cell gen-ref-column" data-label="Column">ref2ActualCode,  ref2Code,  ref2EntityType,  ref2Id</div>
<div class="cell" data-label="Arabic">مرجع 2</div>
<div class="cell" data-label="English">Reference 2</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="materials.ref3">
<div class="cell" data-label="Property">materials.ref3</div>
<div class="cell gen-ref-column" data-label="Column">ref3ActualCode,  ref3Code,  ref3EntityType,  ref3Id</div>
<div class="cell" data-label="Arabic">مرجع 3</div>
<div class="cell" data-label="English">Reference 3</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="materials.ref4">
<div class="cell" data-label="Property">materials.ref4</div>
<div class="cell gen-ref-column" data-label="Column">ref4ActualCode,  ref4Code,  ref4EntityType,  ref4Id</div>
<div class="cell" data-label="Arabic">مرجع 4</div>
<div class="cell" data-label="English">Reference 4</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="materials.remaining">
<div class="cell" data-label="Property">materials.remaining</div>
<div class="cell" data-label="Column">remaining</div>
<div class="cell" data-label="Arabic">المتبقي</div>
<div class="cell" data-label="English">Remaining</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.remarks">
<div class="cell" data-label="Property">materials.remarks</div>
<div class="cell" data-label="Column">remarks</div>
<div class="cell" data-label="Arabic">ملاحظات</div>
<div class="cell" data-label="English">Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="materials.reserveLineId">
<div class="cell" data-label="Property">materials.reserveLineId</div>
<div class="cell" data-label="Column">reserveLineId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="materials.retFromSeq">
<div class="cell" data-label="Property">materials.retFromSeq</div>
<div class="cell" data-label="Column">retFromSeq</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Long</div>

</div>

<div class="row searchable" id="materials.retestDate">
<div class="cell" data-label="Property">materials.retestDate</div>
<div class="cell" data-label="Column">retestDate</div>
<div class="cell" data-label="Arabic">تاريخ إعادة الاختبار</div>
<div class="cell" data-label="English">retest Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="materials.retunLine">
<div class="cell" data-label="Property">materials.retunLine</div>
<div class="cell" data-label="Column">retunLine</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="materials.returnedQty">
<div class="cell" data-label="Property">materials.returnedQty</div>
<div class="cell" data-label="Column">returnedQty</div>
<div class="cell" data-label="Arabic">المرتجع</div>
<div class="cell" data-label="English">Return Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.revisionName">
<div class="cell" data-label="Property">materials.revisionName</div>
<div class="cell" data-label="Column">revisionName</div>
<div class="cell" data-label="Arabic">اسم الإصدار</div>
<div class="cell" data-label="English">Revision Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="materials.satisfiedQty">
<div class="cell" data-label="Property">materials.satisfiedQty</div>
<div class="cell" data-label="Column">satisfiedQty</div>
<div class="cell" data-label="Arabic">نفذت</div>
<div class="cell" data-label="English">Satisfied Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.satisfiedQty2">
<div class="cell" data-label="Property">materials.satisfiedQty2</div>
<div class="cell" data-label="Column">satisfiedQty2</div>
<div class="cell" data-label="Arabic">نفذت 2</div>
<div class="cell" data-label="English">Satisfied Qty 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.sizeName">
<div class="cell" data-label="Property">materials.sizeName</div>
<div class="cell" data-label="Column">sizeName</div>
<div class="cell" data-label="Arabic">اسم المقاس</div>
<div class="cell" data-label="English">Size Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="materials.sourceLineId">
<div class="cell" data-label="Property">materials.sourceLineId</div>
<div class="cell" data-label="Column">sourceLineId</div>
<div class="cell" data-label="Arabic">معرف سطر المصدر</div>
<div class="cell" data-label="English">Source Line Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="materials.sourceStageLine">
<div class="cell" data-label="Property">materials.sourceStageLine</div>
<div class="cell" data-label="Column">sourceStageLine</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="materials.sourceType">
<div class="cell" data-label="Property">materials.sourceType</div>
<div class="cell" data-label="Column">sourceType</div>
<div class="cell" data-label="Arabic">Source Type</div>
<div class="cell" data-label="English">Source Type</div>
<div class="cell" data-label="Type">EntityType</div>

</div>

<div class="row searchable" id="materials.specificDimensions.activePerc">
<div class="cell" data-label="Property">materials.specificDimensions.activePerc</div>
<div class="cell" data-label="Column">activePerc</div>
<div class="cell" data-label="Arabic">النسبة الفعالة</div>
<div class="cell" data-label="English">Active Percentage</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="materials.specificDimensions.box">
<div class="cell" data-label="Property">materials.specificDimensions.box</div>
<div class="cell" data-label="Column">box</div>
<div class="cell" data-label="Arabic">صندوق</div>
<div class="cell" data-label="English">Box</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="materials.specificDimensions.color">
<div class="cell" data-label="Property">materials.specificDimensions.color</div>
<div class="cell" data-label="Column">color</div>
<div class="cell" data-label="Arabic">اللون</div>
<div class="cell" data-label="English">Color</div>
<div class="cell" data-label="Type">Color</div>

</div>

<div class="row searchable" id="materials.specificDimensions.inactivePerc">
<div class="cell" data-label="Property">materials.specificDimensions.inactivePerc</div>
<div class="cell" data-label="Column">inactivePerc</div>
<div class="cell" data-label="Arabic">النسبة الغير فعالة</div>
<div class="cell" data-label="English">Inactive Percentage</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="materials.specificDimensions.locator">
<div class="cell" data-label="Property">materials.specificDimensions.locator</div>
<div class="cell" data-label="Column">locator_id</div>
<div class="cell" data-label="Arabic">الموقع</div>
<div class="cell" data-label="English">Locator</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Locator](/modules/supplychain/Locator.md) 
</div>
</div>

<div class="row searchable" id="materials.specificDimensions.lotId">
<div class="cell" data-label="Property">materials.specificDimensions.lotId</div>
<div class="cell" data-label="Column">lotId</div>
<div class="cell" data-label="Arabic">رقم الشحنه</div>
<div class="cell" data-label="English">Lot ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="materials.specificDimensions.measures">
<div class="cell" data-label="Property">materials.specificDimensions.measures</div>
<div class="cell" data-label="Column">measures</div>
<div class="cell" data-label="Arabic">الأبعاد</div>
<div class="cell" data-label="English">Measures</div>
<div class="cell" data-label="Type">Measures</div>

</div>

<div class="row searchable" id="materials.specificDimensions.revisionId">
<div class="cell" data-label="Property">materials.specificDimensions.revisionId</div>
<div class="cell" data-label="Column">revisionId</div>
<div class="cell" data-label="Arabic">الإصدار</div>
<div class="cell" data-label="English">Revision ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="materials.specificDimensions.secondSerial">
<div class="cell" data-label="Property">materials.specificDimensions.secondSerial</div>
<div class="cell" data-label="Column">secondSerial</div>
<div class="cell" data-label="Arabic">الرقم المسلسل الثاني</div>
<div class="cell" data-label="English">Second Serial</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="materials.specificDimensions.serialNumber">
<div class="cell" data-label="Property">materials.specificDimensions.serialNumber</div>
<div class="cell" data-label="Column">serialNumber</div>
<div class="cell" data-label="Arabic">الرقم المسلسل</div>
<div class="cell" data-label="English">Serial number</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="materials.specificDimensions.size">
<div class="cell" data-label="Property">materials.specificDimensions.size</div>
<div class="cell" data-label="Column">size</div>
<div class="cell" data-label="Arabic">المقاس</div>
<div class="cell" data-label="English">Size</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="materials.specificDimensions.subItem">
<div class="cell" data-label="Property">materials.specificDimensions.subItem</div>
<div class="cell" data-label="Column">subItem_id</div>
<div class="cell" data-label="Arabic"> صنف فرعى</div>
<div class="cell" data-label="English"> SubItem</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SubItem](/modules/srvcenter-subitems/SubItem.md) 
</div>
</div>

<div class="row searchable" id="materials.specificDimensions.warehouse">
<div class="cell" data-label="Property">materials.specificDimensions.warehouse</div>
<div class="cell" data-label="Column">warehouse_id</div>
<div class="cell" data-label="Arabic">المخزن</div>
<div class="cell" data-label="English">Warehouse</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="materials.subsidiary">
<div class="cell" data-label="Property">materials.subsidiary</div>
<div class="cell gen-ref-column" data-label="Column">subsidiaryActualCode,  subsidiaryCode,  subsidiaryEntityType,  subsidiaryId</div>
<div class="cell" data-label="Arabic">الذمة</div>
<div class="cell" data-label="English">Subsidiary</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="materials.text1">
<div class="cell" data-label="Property">materials.text1</div>
<div class="cell" data-label="Column">text1</div>
<div class="cell" data-label="Arabic">نــــص 1</div>
<div class="cell" data-label="English">Text 1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="materials.text2">
<div class="cell" data-label="Property">materials.text2</div>
<div class="cell" data-label="Column">text2</div>
<div class="cell" data-label="Arabic">نـــــص 2</div>
<div class="cell" data-label="English">Text 2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="materials.text3">
<div class="cell" data-label="Property">materials.text3</div>
<div class="cell" data-label="Column">text3</div>
<div class="cell" data-label="Arabic">نص 3</div>
<div class="cell" data-label="English">text3</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="materials.theSize">
<div class="cell" data-label="Property">materials.theSize</div>
<div class="cell" data-label="Column">size</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="materials.transItemType">
<div class="cell" data-label="Property">materials.transItemType</div>
<div class="cell" data-label="Column">transItemType</div>
<div class="cell" data-label="Arabic">نوع السطر</div>
<div class="cell" data-label="English">Line Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="materials.unsatisfiedQty">
<div class="cell" data-label="Property">materials.unsatisfiedQty</div>
<div class="cell" data-label="Column">unsatisfiedQty</div>
<div class="cell" data-label="Arabic">الكمية الغير مستلمة</div>
<div class="cell" data-label="English">Unsatisfied Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.unsatisfiedQty2">
<div class="cell" data-label="Property">materials.unsatisfiedQty2</div>
<div class="cell" data-label="Column">unsatisfiedQty2</div>
<div class="cell" data-label="Arabic">الكمية الغير مستلمة 2</div>
<div class="cell" data-label="English">Unsatisfied Quantity 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.userSatisfiedQty">
<div class="cell" data-label="Property">materials.userSatisfiedQty</div>
<div class="cell" data-label="Column">userSatisfiedQty</div>
<div class="cell" data-label="Arabic">الكمية المسلمة يدويا</div>
<div class="cell" data-label="English">Manually Satisfied Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.userSatisfiedQty2">
<div class="cell" data-label="Property">materials.userSatisfiedQty2</div>
<div class="cell" data-label="Column">userSatisfiedQty2</div>
<div class="cell" data-label="Arabic">الكمية المسلمة يدويا 2</div>
<div class="cell" data-label="English">Manually Satisfied Qty 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.valueDate">
<div class="cell" data-label="Property">materials.valueDate</div>
<div class="cell" data-label="Column">valueDate</div>
<div class="cell" data-label="Arabic">التاريخ الفعلي</div>
<div class="cell" data-label="English">Value Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="materials.warrantyCode">
<div class="cell" data-label="Property">materials.warrantyCode</div>
<div class="cell" data-label="Column">warrantyCode</div>
<div class="cell" data-label="Arabic">كود الضمان</div>
<div class="cell" data-label="English">Warranty Code</div>
<div class="cell" data-label="Type">BigText</div>

</div>


</div>
</div>

<div id='materialsTotals' title='materialsTotals' class='searchable'>

## materialsTotals (إجماليات الخامات - Materials Totals)

<div class='tableName'>

**Table Name:** CRTNMaterialPlanningMaterialsTotals, **Join Column:** cRTNMaterialPlanning_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="materialsTotals.box">
<div class="cell" data-label="Property">materialsTotals.box</div>
<div class="cell" data-label="Column">box</div>
<div class="cell" data-label="Arabic">صندوق</div>
<div class="cell" data-label="English">Box</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="materialsTotals.id">
<div class="cell" data-label="Property">materialsTotals.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="materialsTotals.itemClass1">
<div class="cell" data-label="Property">materialsTotals.itemClass1</div>
<div class="cell" data-label="Column">itemClass1_id</div>
<div class="cell" data-label="Arabic">تصنيف 1</div>
<div class="cell" data-label="English">Class 1</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass1](/modules/supplychain/ItemClass1.md) 
</div>
</div>

<div class="row searchable" id="materialsTotals.itemClass2">
<div class="cell" data-label="Property">materialsTotals.itemClass2</div>
<div class="cell" data-label="Column">itemClass2_id</div>
<div class="cell" data-label="Arabic">تصنيف 2</div>
<div class="cell" data-label="English">Class 2</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass2](/modules/supplychain/ItemClass2.md) 
</div>
</div>

<div class="row searchable" id="materialsTotals.lineNumber">
<div class="cell" data-label="Property">materialsTotals.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="materialsTotals.quantity.uom">
<div class="cell" data-label="Property">materialsTotals.quantity.uom</div>
<div class="cell" data-label="Column">quantityUom_id</div>
<div class="cell" data-label="Arabic">الكمية | الوحدة</div>
<div class="cell" data-label="English">Quantity | Uom</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="materialsTotals.quantity.value">
<div class="cell" data-label="Property">materialsTotals.quantity.value</div>
<div class="cell" data-label="Column">quantityValue</div>
<div class="cell" data-label="Arabic">الكمية  | القيمة</div>
<div class="cell" data-label="English">Quantity | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>


</div>
</div>

