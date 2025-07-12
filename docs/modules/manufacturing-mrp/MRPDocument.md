# MRPDocument
**Arabic:** سند تخطيط -  سند تخطيط
**English:** planning raw materials Document -  planning raw materials Document

<ContentFilter/>


<div class='searchable'>
<a href='#analysis'>analysis (MRPRequirementsAnalysis) </a> , <a href='#lines'>lines (MRPDocumentLine) </a> , <a href='#plannedProductionLines'>plannedProductionLines (MRPPlProductionLine) </a> , <a href='#plannedPurchaseLines'>plannedPurchaseLines (MRPPlPurchasesLine) </a> , <a href='#requiredLines'>requiredLines (MRPRequiredLine) </a>
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
</div><div class="row searchable" id="aggregationPeriodType">
<div class="cell" data-label="Property">aggregationPeriodType</div>
<div class="cell" data-label="Column">aggregationPeriodType</div>
<div class="cell" data-label="Arabic">نوع فتره التجميع</div>
<div class="cell" data-label="English">Aggregation Period Type</div>
<div class="cell" data-label="Type">Enum</div>

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

<div class="row searchable" id="availableQtySource">
<div class="cell" data-label="Property">availableQtySource</div>
<div class="cell" data-label="Column">availableQtySource_id</div>
<div class="cell" data-label="Arabic">مصدر الكميات المتاحه</div>
<div class="cell" data-label="English">Available Quantity Source</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MRPAvailableQtySource](/modules/manufacturing-mrp/MRPAvailableQtySource.md) 
</div>
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

<div class="row searchable" id="fromDate">
<div class="cell" data-label="Property">fromDate</div>
<div class="cell" data-label="Column">fromDate</div>
<div class="cell" data-label="Arabic">من تاريخ</div>
<div class="cell" data-label="English">From Date</div>
<div class="cell" data-label="Type">Date</div>

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
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
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

<div class="row searchable" id="periodsCalcMethod">
<div class="cell" data-label="Property">periodsCalcMethod</div>
<div class="cell" data-label="Column">periodsCalcMethod</div>
<div class="cell" data-label="Arabic">طريقة حساب فترات الSafty Stock</div>
<div class="cell" data-label="English">Safety Stock Periods Calculation Method</div>
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

<div class="row searchable" id="previousMRPDocument">
<div class="cell" data-label="Property">previousMRPDocument</div>
<div class="cell" data-label="Column">previousMRPDocument_id</div>
<div class="cell" data-label="Arabic">سند التخطيط السابق</div>
<div class="cell" data-label="English">Previous MRP Document</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MRPDocument](/modules/manufacturing-mrp/MRPDocument.md) 
</div>
</div>

<div class="row searchable" id="printCount">
<div class="cell" data-label="Property">printCount</div>
<div class="cell" data-label="Column">printCount</div>
<div class="cell" data-label="Arabic">عدد مرات الطباعة</div>
<div class="cell" data-label="English">Print Count</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="productionDocType">
<div class="cell" data-label="Property">productionDocType</div>
<div class="cell" data-label="Column">productionDocType</div>
<div class="cell" data-label="Arabic">نوع مستند الإنتاج المنشأ</div>
<div class="cell" data-label="English">Production Doc Type</div>
<div class="cell" data-label="Type">EntityType</div>

</div>

<div class="row searchable" id="purchaseDocType">
<div class="cell" data-label="Property">purchaseDocType</div>
<div class="cell" data-label="Column">purchaseDocType</div>
<div class="cell" data-label="Arabic">نوع مستند الشراء المنشأ</div>
<div class="cell" data-label="English">Purchase Doc Type</div>
<div class="cell" data-label="Type">EntityType</div>

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

<div class="row searchable" id="reqQtyMethodType">
<div class="cell" data-label="Property">reqQtyMethodType</div>
<div class="cell" data-label="Column">reqQtyMethodType</div>
<div class="cell" data-label="Arabic">نوع الحقل المتعامل عليه</div>
<div class="cell" data-label="English">Sales Forecast Field Type</div>
<div class="cell" data-label="Type">Enum</div>

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

<div class="row searchable" id="scenario">
<div class="cell" data-label="Property">scenario</div>
<div class="cell" data-label="Column">scenario_id</div>
<div class="cell" data-label="Arabic">سيناريو</div>
<div class="cell" data-label="English">Scenario</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Scenario](/modules/manufacturing-mrp/Scenario.md) 
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

<div class="row searchable" id="toDate">
<div class="cell" data-label="Property">toDate</div>
<div class="cell" data-label="Column">toDate</div>
<div class="cell" data-label="Arabic">إلى تاريخ</div>
<div class="cell" data-label="English">To Date</div>
<div class="cell" data-label="Type">Date</div>

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

<div id='analysis' title='analysis' class='searchable'>

## analysis (التحليل - Analysis)
**Table Name:** MRPRequirementsAnalysis, **Join Column:** mRPDocument_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="analysis.available">
<div class="cell" data-label="Property">analysis.available</div>
<div class="cell" data-label="Column">available</div>
<div class="cell" data-label="Arabic">المتاح</div>
<div class="cell" data-label="English">Available</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="analysis.batchSize">
<div class="cell" data-label="Property">analysis.batchSize</div>
<div class="cell" data-label="Column">batchSize</div>
<div class="cell" data-label="Arabic">كمية الشحنه</div>
<div class="cell" data-label="English">Batch Size</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="analysis.batchesCount">
<div class="cell" data-label="Property">analysis.batchesCount</div>
<div class="cell" data-label="Column">batchesCount</div>
<div class="cell" data-label="Arabic">عدد الشحنات</div>
<div class="cell" data-label="English">Batches Count</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="analysis.bom">
<div class="cell" data-label="Property">analysis.bom</div>
<div class="cell" data-label="Column">bom_id</div>
<div class="cell" data-label="Arabic">مكونات المنتج</div>
<div class="cell" data-label="English">BOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [BOM](/modules/manufacturing/BOM.md) 
</div>
</div>

<div class="row searchable" id="analysis.dimensions.activePerc">
<div class="cell" data-label="Property">analysis.dimensions.activePerc</div>
<div class="cell" data-label="Column">dimensionsActivePerc</div>
<div class="cell" data-label="Arabic">النسبة الفعالة</div>
<div class="cell" data-label="English">Active Percentage</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="analysis.dimensions.box">
<div class="cell" data-label="Property">analysis.dimensions.box</div>
<div class="cell" data-label="Column">dimensionsBox</div>
<div class="cell" data-label="Arabic">صندوق</div>
<div class="cell" data-label="English">Box</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="analysis.dimensions.color">
<div class="cell" data-label="Property">analysis.dimensions.color</div>
<div class="cell" data-label="Column">dimensionsColor</div>
<div class="cell" data-label="Arabic">اللون</div>
<div class="cell" data-label="English">Color</div>
<div class="cell" data-label="Type">Color</div>

</div>

<div class="row searchable" id="analysis.dimensions.inactivePerc">
<div class="cell" data-label="Property">analysis.dimensions.inactivePerc</div>
<div class="cell" data-label="Column">dimensionsInactivePerc</div>
<div class="cell" data-label="Arabic">النسبة الغير فعالة</div>
<div class="cell" data-label="English">Inactive Percentage</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="analysis.dimensions.locator">
<div class="cell" data-label="Property">analysis.dimensions.locator</div>
<div class="cell" data-label="Column">dimensionsLocator_id</div>
<div class="cell" data-label="Arabic">الموقع</div>
<div class="cell" data-label="English">Locator</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Locator](/modules/supplychain/Locator.md) 
</div>
</div>

<div class="row searchable" id="analysis.dimensions.lotId">
<div class="cell" data-label="Property">analysis.dimensions.lotId</div>
<div class="cell" data-label="Column">dimensionsLotId</div>
<div class="cell" data-label="Arabic">كود الشحنة</div>
<div class="cell" data-label="English">Lot ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="analysis.dimensions.measures">
<div class="cell" data-label="Property">analysis.dimensions.measures</div>
<div class="cell" data-label="Column">dimensionsMeasures</div>
<div class="cell" data-label="Arabic">الأبعاد</div>
<div class="cell" data-label="English">Measures</div>
<div class="cell" data-label="Type">Measures</div>

</div>

<div class="row searchable" id="analysis.dimensions.revisionId">
<div class="cell" data-label="Property">analysis.dimensions.revisionId</div>
<div class="cell" data-label="Column">dimensionsRevisionId</div>
<div class="cell" data-label="Arabic">الإصدار</div>
<div class="cell" data-label="English">ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="analysis.dimensions.secondSerial">
<div class="cell" data-label="Property">analysis.dimensions.secondSerial</div>
<div class="cell" data-label="Column">dimensionsSecondSerial</div>
<div class="cell" data-label="Arabic">الرقم المسلسل الثاني</div>
<div class="cell" data-label="English">Second Serial</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="analysis.dimensions.serialNumber">
<div class="cell" data-label="Property">analysis.dimensions.serialNumber</div>
<div class="cell" data-label="Column">dimensionsSerialNumber</div>
<div class="cell" data-label="Arabic">الرقم المسلسل</div>
<div class="cell" data-label="English">Serial Number</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="analysis.dimensions.size">
<div class="cell" data-label="Property">analysis.dimensions.size</div>
<div class="cell" data-label="Column">dimensionsSize</div>
<div class="cell" data-label="Arabic">المقاس</div>
<div class="cell" data-label="English">Size</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="analysis.dimensions.subItem">
<div class="cell" data-label="Property">analysis.dimensions.subItem</div>
<div class="cell" data-label="Column">dimensionsSubItem_id</div>
<div class="cell" data-label="Arabic"> صنف فرعى</div>
<div class="cell" data-label="English"> SubItem</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SubItem](/modules/srvcenter-subitems/SubItem.md) 
</div>
</div>

<div class="row searchable" id="analysis.dimensions.warehouse">
<div class="cell" data-label="Property">analysis.dimensions.warehouse</div>
<div class="cell" data-label="Column">dimensionsWarehouse_id</div>
<div class="cell" data-label="Arabic">المخزن</div>
<div class="cell" data-label="English">Warehouse</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="analysis.editedBatchesCount">
<div class="cell" data-label="Property">analysis.editedBatchesCount</div>
<div class="cell" data-label="Column">editedBatchesCount</div>
<div class="cell" data-label="Arabic">عدد الباتش المعدل</div>
<div class="cell" data-label="English">Updated Batches Count</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="analysis.editedNetRequired">
<div class="cell" data-label="Property">analysis.editedNetRequired</div>
<div class="cell" data-label="Column">editedNetRequired</div>
<div class="cell" data-label="Arabic">صافي المطلوب المعدل</div>
<div class="cell" data-label="English">Updated NetRequired</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="analysis.id">
<div class="cell" data-label="Property">analysis.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="analysis.invItem">
<div class="cell" data-label="Property">analysis.invItem</div>
<div class="cell" data-label="Column">invItem_id</div>
<div class="cell" data-label="Arabic"> الصنف</div>
<div class="cell" data-label="English"> Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/modules/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="analysis.lineNumber">
<div class="cell" data-label="Property">analysis.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="analysis.masterRowId">
<div class="cell" data-label="Property">analysis.masterRowId</div>
<div class="cell" data-label="Column">masterRowId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="analysis.netRequired">
<div class="cell" data-label="Property">analysis.netRequired</div>
<div class="cell" data-label="Column">netRequired</div>
<div class="cell" data-label="Arabic">صافي المطلوب</div>
<div class="cell" data-label="English">Net Required</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="analysis.netRequiredAfterEdit">
<div class="cell" data-label="Property">analysis.netRequiredAfterEdit</div>
<div class="cell" data-label="Column">netRequiredAfterEdit</div>
<div class="cell" data-label="Arabic">التحليل | صافي المطلوب النهائي</div>
<div class="cell" data-label="English">Analysis |Final NetRequired</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="analysis.orderOn">
<div class="cell" data-label="Property">analysis.orderOn</div>
<div class="cell" data-label="Column">orderOn</div>
<div class="cell" data-label="Arabic">تاريخ الطلب</div>
<div class="cell" data-label="English">OrderOn</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="analysis.parentAnalysisLineId">
<div class="cell" data-label="Property">analysis.parentAnalysisLineId</div>
<div class="cell" data-label="Column">parentAnalysisLineId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="analysis.potentialAvailable">
<div class="cell" data-label="Property">analysis.potentialAvailable</div>
<div class="cell" data-label="Column">potentialAvailable</div>
<div class="cell" data-label="Arabic">المحتمل ان يكون متاح</div>
<div class="cell" data-label="English">Potential Available</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="analysis.remaining">
<div class="cell" data-label="Property">analysis.remaining</div>
<div class="cell" data-label="Column">remaining</div>
<div class="cell" data-label="Arabic">المتبقي</div>
<div class="cell" data-label="English">Remaining</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="analysis.remarks">
<div class="cell" data-label="Property">analysis.remarks</div>
<div class="cell" data-label="Column">remarks</div>
<div class="cell" data-label="Arabic">ملاحظات</div>
<div class="cell" data-label="English">Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="analysis.requiredOn">
<div class="cell" data-label="Property">analysis.requiredOn</div>
<div class="cell" data-label="Column">requiredOn</div>
<div class="cell" data-label="Arabic">تاريخ الإحتياج</div>
<div class="cell" data-label="English">RequiredOn</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="analysis.requiredQty.uom">
<div class="cell" data-label="Property">analysis.requiredQty.uom</div>
<div class="cell" data-label="Column">requiredQtyUom_id</div>
<div class="cell" data-label="Arabic">الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="analysis.requiredQty.value">
<div class="cell" data-label="Property">analysis.requiredQty.value</div>
<div class="cell" data-label="Column">requiredQtyValue</div>
<div class="cell" data-label="Arabic">القيمة</div>
<div class="cell" data-label="English">Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="analysis.routing">
<div class="cell" data-label="Property">analysis.routing</div>
<div class="cell" data-label="Column">routing_id</div>
<div class="cell" data-label="Arabic">عمليات التشغيل</div>
<div class="cell" data-label="English">Routing</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Routing](/modules/manufacturing/Routing.md) 
</div>
</div>

<div class="row searchable" id="analysis.safetyStock">
<div class="cell" data-label="Property">analysis.safetyStock</div>
<div class="cell" data-label="Column">safetyStock</div>
<div class="cell" data-label="Arabic">Safety Stock</div>
<div class="cell" data-label="English">Safty Stock</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="analysis.totalRequired">
<div class="cell" data-label="Property">analysis.totalRequired</div>
<div class="cell" data-label="Column">totalRequired</div>
<div class="cell" data-label="Arabic">إجمالي المطلوب</div>
<div class="cell" data-label="English">Total Required</div>
<div class="cell" data-label="Type">Decimal</div>

</div>


</div>
</div>

<div id='lines' title='lines' class='searchable'>

## lines ( التفاصيل -  Details)
**Table Name:** MRPDocumentLine, **Join Column:** mRPDocument_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="lines.demandDocument">
<div class="cell" data-label="Property">lines.demandDocument</div>
<div class="cell gen-ref-column" data-label="Column">demandDocumentActualCode,  demandDocumentCode,  demandDocumentEntityType,  demandDocumentId</div>
<div class="cell" data-label="Arabic">سند الطلب</div>
<div class="cell" data-label="English">Demand Document</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="lines.documentDate">
<div class="cell" data-label="Property">lines.documentDate</div>
<div class="cell" data-label="Column">documentDate</div>
<div class="cell" data-label="Arabic">تاريخ سند الطلب</div>
<div class="cell" data-label="English">Document Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="lines.id">
<div class="cell" data-label="Property">lines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="lines.lineNumber">
<div class="cell" data-label="Property">lines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="lines.remarks">
<div class="cell" data-label="Property">lines.remarks</div>
<div class="cell" data-label="Column">remarks</div>
<div class="cell" data-label="Arabic">ملاحظات</div>
<div class="cell" data-label="English">Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>


</div>
</div>

<div id='plannedProductionLines' title='plannedProductionLines' class='searchable'>

## plannedProductionLines ( - )
**Table Name:** MRPPlProductionLine, **Join Column:** mRPDocument_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="plannedProductionLines.bom">
<div class="cell" data-label="Property">plannedProductionLines.bom</div>
<div class="cell" data-label="Column">bom_id</div>
<div class="cell" data-label="Arabic">مكونات المنتج</div>
<div class="cell" data-label="English">BOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [BOM](/modules/manufacturing/BOM.md) 
</div>
</div>

<div class="row searchable" id="plannedProductionLines.category1">
<div class="cell" data-label="Property">plannedProductionLines.category1</div>
<div class="cell" data-label="Column">category1_id</div>
<div class="cell" data-label="Arabic">فئة الصنف1</div>
<div class="cell" data-label="English">Item Category1</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemCategory](/modules/supplychain/ItemCategory.md) 
</div>
</div>

<div class="row searchable" id="plannedProductionLines.date">
<div class="cell" data-label="Property">plannedProductionLines.date</div>
<div class="cell" data-label="Column">date</div>
<div class="cell" data-label="Arabic">التاريخ</div>
<div class="cell" data-label="English">Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="plannedProductionLines.doc">
<div class="cell" data-label="Property">plannedProductionLines.doc</div>
<div class="cell gen-ref-column" data-label="Column">docActualCode,  docCode,  docEntityType,  docId</div>
<div class="cell" data-label="Arabic">المستند</div>
<div class="cell" data-label="English">Document</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="plannedProductionLines.id">
<div class="cell" data-label="Property">plannedProductionLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="plannedProductionLines.invItem">
<div class="cell" data-label="Property">plannedProductionLines.invItem</div>
<div class="cell" data-label="Column">invItem_id</div>
<div class="cell" data-label="Arabic"> الصنف</div>
<div class="cell" data-label="English"> Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/modules/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="plannedProductionLines.lineNumber">
<div class="cell" data-label="Property">plannedProductionLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="plannedProductionLines.locator">
<div class="cell" data-label="Property">plannedProductionLines.locator</div>
<div class="cell" data-label="Column">locator_id</div>
<div class="cell" data-label="Arabic">الموقع</div>
<div class="cell" data-label="English">Locator</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Locator](/modules/supplychain/Locator.md) 
</div>
</div>

<div class="row searchable" id="plannedProductionLines.orderType">
<div class="cell" data-label="Property">plannedProductionLines.orderType</div>
<div class="cell" data-label="Column">orderType</div>
<div class="cell" data-label="Arabic">نوع الإذن</div>
<div class="cell" data-label="English">Order Type</div>
<div class="cell" data-label="Type">EntityType</div>

</div>

<div class="row searchable" id="plannedProductionLines.quantity.primeQty.uom">
<div class="cell" data-label="Property">plannedProductionLines.quantity.primeQty.uom</div>
<div class="cell" data-label="Column">quantityPUom_id</div>
<div class="cell" data-label="Arabic">الوحدة الرئيسية | الوحدة</div>
<div class="cell" data-label="English">Primary | UOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="plannedProductionLines.quantity.primeQty.value">
<div class="cell" data-label="Property">plannedProductionLines.quantity.primeQty.value</div>
<div class="cell" data-label="Column">quantityPValue</div>
<div class="cell" data-label="Arabic">الوحدة الرئيسية | الكمية</div>
<div class="cell" data-label="English">Primary | Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="plannedProductionLines.quantity.secondQty.uom">
<div class="cell" data-label="Property">plannedProductionLines.quantity.secondQty.uom</div>
<div class="cell" data-label="Column">quantitySUom_id</div>
<div class="cell" data-label="Arabic">الوحدة الثانية | الوحدة</div>
<div class="cell" data-label="English">Secondary | UOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="plannedProductionLines.quantity.secondQty.value">
<div class="cell" data-label="Property">plannedProductionLines.quantity.secondQty.value</div>
<div class="cell" data-label="Column">quantitySValue</div>
<div class="cell" data-label="Arabic">الوحدة الثانية | الكمية</div>
<div class="cell" data-label="English">Secondary | Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="plannedProductionLines.remarks">
<div class="cell" data-label="Property">plannedProductionLines.remarks</div>
<div class="cell" data-label="Column">remarks</div>
<div class="cell" data-label="Arabic">ملاحظات</div>
<div class="cell" data-label="English">Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="plannedProductionLines.routing">
<div class="cell" data-label="Property">plannedProductionLines.routing</div>
<div class="cell" data-label="Column">routing_id</div>
<div class="cell" data-label="Arabic">عمليات التشغيل</div>
<div class="cell" data-label="English">Routing</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Routing](/modules/manufacturing/Routing.md) 
</div>
</div>

<div class="row searchable" id="plannedProductionLines.selected">
<div class="cell" data-label="Property">plannedProductionLines.selected</div>
<div class="cell" data-label="Column">selected</div>
<div class="cell" data-label="Arabic">اختيار</div>
<div class="cell" data-label="English">Selected</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="plannedProductionLines.sourceAnalysisLineId">
<div class="cell" data-label="Property">plannedProductionLines.sourceAnalysisLineId</div>
<div class="cell" data-label="Column">sourceAnalysisLineId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="plannedProductionLines.supplier">
<div class="cell" data-label="Property">plannedProductionLines.supplier</div>
<div class="cell" data-label="Column">supplier_id</div>
<div class="cell" data-label="Arabic">مورد</div>
<div class="cell" data-label="English"> Supplier</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Supplier](/modules/basic/Supplier.md) 
</div>
</div>

<div class="row searchable" id="plannedProductionLines.warehouse">
<div class="cell" data-label="Property">plannedProductionLines.warehouse</div>
<div class="cell" data-label="Column">warehouse_id</div>
<div class="cell" data-label="Arabic">المخزن</div>
<div class="cell" data-label="English">Warehouse</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>


</div>
</div>

<div id='plannedPurchaseLines' title='plannedPurchaseLines' class='searchable'>

## plannedPurchaseLines ( - )
**Table Name:** MRPPlPurchasesLine, **Join Column:** mRPDocument_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="plannedPurchaseLines.bom">
<div class="cell" data-label="Property">plannedPurchaseLines.bom</div>
<div class="cell" data-label="Column">bom_id</div>
<div class="cell" data-label="Arabic">مكونات المنتج</div>
<div class="cell" data-label="English">BOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [BOM](/modules/manufacturing/BOM.md) 
</div>
</div>

<div class="row searchable" id="plannedPurchaseLines.category1">
<div class="cell" data-label="Property">plannedPurchaseLines.category1</div>
<div class="cell" data-label="Column">category1_id</div>
<div class="cell" data-label="Arabic">فئة الصنف1</div>
<div class="cell" data-label="English">Item Category1</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemCategory](/modules/supplychain/ItemCategory.md) 
</div>
</div>

<div class="row searchable" id="plannedPurchaseLines.date">
<div class="cell" data-label="Property">plannedPurchaseLines.date</div>
<div class="cell" data-label="Column">date</div>
<div class="cell" data-label="Arabic">التاريخ</div>
<div class="cell" data-label="English">Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="plannedPurchaseLines.doc">
<div class="cell" data-label="Property">plannedPurchaseLines.doc</div>
<div class="cell gen-ref-column" data-label="Column">docActualCode,  docCode,  docEntityType,  docId</div>
<div class="cell" data-label="Arabic">المستند</div>
<div class="cell" data-label="English">Document</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="plannedPurchaseLines.id">
<div class="cell" data-label="Property">plannedPurchaseLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="plannedPurchaseLines.invItem">
<div class="cell" data-label="Property">plannedPurchaseLines.invItem</div>
<div class="cell" data-label="Column">invItem_id</div>
<div class="cell" data-label="Arabic"> الصنف</div>
<div class="cell" data-label="English"> Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/modules/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="plannedPurchaseLines.lineNumber">
<div class="cell" data-label="Property">plannedPurchaseLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="plannedPurchaseLines.locator">
<div class="cell" data-label="Property">plannedPurchaseLines.locator</div>
<div class="cell" data-label="Column">locator_id</div>
<div class="cell" data-label="Arabic">الموقع</div>
<div class="cell" data-label="English">Locator</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Locator](/modules/supplychain/Locator.md) 
</div>
</div>

<div class="row searchable" id="plannedPurchaseLines.orderType">
<div class="cell" data-label="Property">plannedPurchaseLines.orderType</div>
<div class="cell" data-label="Column">orderType</div>
<div class="cell" data-label="Arabic">نوع الإذن</div>
<div class="cell" data-label="English">Order Type</div>
<div class="cell" data-label="Type">EntityType</div>

</div>

<div class="row searchable" id="plannedPurchaseLines.quantity.primeQty.uom">
<div class="cell" data-label="Property">plannedPurchaseLines.quantity.primeQty.uom</div>
<div class="cell" data-label="Column">quantityPUom_id</div>
<div class="cell" data-label="Arabic">الوحدة الرئيسية | الوحدة</div>
<div class="cell" data-label="English">Primary | UOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="plannedPurchaseLines.quantity.primeQty.value">
<div class="cell" data-label="Property">plannedPurchaseLines.quantity.primeQty.value</div>
<div class="cell" data-label="Column">quantityPValue</div>
<div class="cell" data-label="Arabic">الوحدة الرئيسية | الكمية</div>
<div class="cell" data-label="English">Primary | Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="plannedPurchaseLines.quantity.secondQty.uom">
<div class="cell" data-label="Property">plannedPurchaseLines.quantity.secondQty.uom</div>
<div class="cell" data-label="Column">quantitySUom_id</div>
<div class="cell" data-label="Arabic">الوحدة الثانية | الوحدة</div>
<div class="cell" data-label="English">Secondary | UOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="plannedPurchaseLines.quantity.secondQty.value">
<div class="cell" data-label="Property">plannedPurchaseLines.quantity.secondQty.value</div>
<div class="cell" data-label="Column">quantitySValue</div>
<div class="cell" data-label="Arabic">الوحدة الثانية | الكمية</div>
<div class="cell" data-label="English">Secondary | Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="plannedPurchaseLines.remarks">
<div class="cell" data-label="Property">plannedPurchaseLines.remarks</div>
<div class="cell" data-label="Column">remarks</div>
<div class="cell" data-label="Arabic">ملاحظات</div>
<div class="cell" data-label="English">Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="plannedPurchaseLines.routing">
<div class="cell" data-label="Property">plannedPurchaseLines.routing</div>
<div class="cell" data-label="Column">routing_id</div>
<div class="cell" data-label="Arabic">عمليات التشغيل</div>
<div class="cell" data-label="English">Routing</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Routing](/modules/manufacturing/Routing.md) 
</div>
</div>

<div class="row searchable" id="plannedPurchaseLines.selected">
<div class="cell" data-label="Property">plannedPurchaseLines.selected</div>
<div class="cell" data-label="Column">selected</div>
<div class="cell" data-label="Arabic">اختيار</div>
<div class="cell" data-label="English">Selected</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="plannedPurchaseLines.sourceAnalysisLineId">
<div class="cell" data-label="Property">plannedPurchaseLines.sourceAnalysisLineId</div>
<div class="cell" data-label="Column">sourceAnalysisLineId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="plannedPurchaseLines.supplier">
<div class="cell" data-label="Property">plannedPurchaseLines.supplier</div>
<div class="cell" data-label="Column">supplier_id</div>
<div class="cell" data-label="Arabic">مورد</div>
<div class="cell" data-label="English"> Supplier</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Supplier](/modules/basic/Supplier.md) 
</div>
</div>

<div class="row searchable" id="plannedPurchaseLines.warehouse">
<div class="cell" data-label="Property">plannedPurchaseLines.warehouse</div>
<div class="cell" data-label="Column">warehouse_id</div>
<div class="cell" data-label="Arabic">المخزن</div>
<div class="cell" data-label="English">Warehouse</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>


</div>
</div>

<div id='requiredLines' title='requiredLines' class='searchable'>

## requiredLines (الاحتياجات - Required Lines)
**Table Name:** MRPRequiredLine, **Join Column:** mRPDocument_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="requiredLines.analysisAvailable">
<div class="cell" data-label="Property">requiredLines.analysisAvailable</div>
<div class="cell" data-label="Column">analysisAvailable</div>
<div class="cell" data-label="Arabic">التحليل | المتاح</div>
<div class="cell" data-label="English">Analysis | Available</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="requiredLines.analysisBatchSize">
<div class="cell" data-label="Property">requiredLines.analysisBatchSize</div>
<div class="cell" data-label="Column">analysisBatchSize</div>
<div class="cell" data-label="Arabic">التحليل | حجم الباتش</div>
<div class="cell" data-label="English">Analysis | Batch Size</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="requiredLines.analysisBatchesCount">
<div class="cell" data-label="Property">requiredLines.analysisBatchesCount</div>
<div class="cell" data-label="Column">analysisBatchesCount</div>
<div class="cell" data-label="Arabic">التحليل | عدد الباتش</div>
<div class="cell" data-label="English">Analysis | Batches Count</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="requiredLines.analysisNetRequired">
<div class="cell" data-label="Property">requiredLines.analysisNetRequired</div>
<div class="cell" data-label="Column">analysisNetRequired</div>
<div class="cell" data-label="Arabic">التحليل | صافي المطلوب</div>
<div class="cell" data-label="English">Analysis | NetRequired</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="requiredLines.analysisOrderOn">
<div class="cell" data-label="Property">requiredLines.analysisOrderOn</div>
<div class="cell" data-label="Column">analysisOrderOn</div>
<div class="cell" data-label="Arabic">التحليل | تاريخ الطلب</div>
<div class="cell" data-label="English">Analysis | Order On</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="requiredLines.analysisPotentialAvailable">
<div class="cell" data-label="Property">requiredLines.analysisPotentialAvailable</div>
<div class="cell" data-label="Column">analysisPotentialAvailable</div>
<div class="cell" data-label="Arabic">التحليل | المحتمل ان يكون متاح</div>
<div class="cell" data-label="English">Analysis | Potential Available</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="requiredLines.analysisRemaining">
<div class="cell" data-label="Property">requiredLines.analysisRemaining</div>
<div class="cell" data-label="Column">analysisRemaining</div>
<div class="cell" data-label="Arabic">التحليل | المتبقي</div>
<div class="cell" data-label="English">Analysis | Remaining</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="requiredLines.analysisRequiredOn">
<div class="cell" data-label="Property">requiredLines.analysisRequiredOn</div>
<div class="cell" data-label="Column">analysisRequiredOn</div>
<div class="cell" data-label="Arabic">التحليل | تاريخ الأحتياج</div>
<div class="cell" data-label="English">Analysis | Required On</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="requiredLines.analysisSafetyStock">
<div class="cell" data-label="Property">requiredLines.analysisSafetyStock</div>
<div class="cell" data-label="Column">analysisSafetyStock</div>
<div class="cell" data-label="Arabic">التحليل | Safety Stock</div>
<div class="cell" data-label="English">Analysis | Safety Stock</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="requiredLines.analysisTotalRequired">
<div class="cell" data-label="Property">requiredLines.analysisTotalRequired</div>
<div class="cell" data-label="Column">analysisTotalRequired</div>
<div class="cell" data-label="Arabic">التحليل | إجمالي المطلوب</div>
<div class="cell" data-label="English">Analysis | Total Required</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="requiredLines.bom">
<div class="cell" data-label="Property">requiredLines.bom</div>
<div class="cell" data-label="Column">bom_id</div>
<div class="cell" data-label="Arabic">مكونات المنتج</div>
<div class="cell" data-label="English">BOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [BOM](/modules/manufacturing/BOM.md) 
</div>
</div>

<div class="row searchable" id="requiredLines.dimensions.activePerc">
<div class="cell" data-label="Property">requiredLines.dimensions.activePerc</div>
<div class="cell" data-label="Column">dimensionsActivePerc</div>
<div class="cell" data-label="Arabic">النسبة الفعالة</div>
<div class="cell" data-label="English">Active Percentage</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="requiredLines.dimensions.box">
<div class="cell" data-label="Property">requiredLines.dimensions.box</div>
<div class="cell" data-label="Column">dimensionsBox</div>
<div class="cell" data-label="Arabic">صندوق</div>
<div class="cell" data-label="English">Box</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="requiredLines.dimensions.color">
<div class="cell" data-label="Property">requiredLines.dimensions.color</div>
<div class="cell" data-label="Column">dimensionsColor</div>
<div class="cell" data-label="Arabic">اللون</div>
<div class="cell" data-label="English">Color</div>
<div class="cell" data-label="Type">Color</div>

</div>

<div class="row searchable" id="requiredLines.dimensions.inactivePerc">
<div class="cell" data-label="Property">requiredLines.dimensions.inactivePerc</div>
<div class="cell" data-label="Column">dimensionsInactivePerc</div>
<div class="cell" data-label="Arabic">النسبة الغير فعالة</div>
<div class="cell" data-label="English">Inactive Percentage</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="requiredLines.dimensions.locator">
<div class="cell" data-label="Property">requiredLines.dimensions.locator</div>
<div class="cell" data-label="Column">dimensionsLocator_id</div>
<div class="cell" data-label="Arabic">الموقع</div>
<div class="cell" data-label="English">Locator</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Locator](/modules/supplychain/Locator.md) 
</div>
</div>

<div class="row searchable" id="requiredLines.dimensions.lotId">
<div class="cell" data-label="Property">requiredLines.dimensions.lotId</div>
<div class="cell" data-label="Column">dimensionsLotId</div>
<div class="cell" data-label="Arabic">كود الشحنة</div>
<div class="cell" data-label="English">Lot ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="requiredLines.dimensions.measures">
<div class="cell" data-label="Property">requiredLines.dimensions.measures</div>
<div class="cell" data-label="Column">dimensionsMeasures</div>
<div class="cell" data-label="Arabic">الأبعاد</div>
<div class="cell" data-label="English">Measures</div>
<div class="cell" data-label="Type">Measures</div>

</div>

<div class="row searchable" id="requiredLines.dimensions.revisionId">
<div class="cell" data-label="Property">requiredLines.dimensions.revisionId</div>
<div class="cell" data-label="Column">dimensionsRevisionId</div>
<div class="cell" data-label="Arabic">الإصدار</div>
<div class="cell" data-label="English">ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="requiredLines.dimensions.secondSerial">
<div class="cell" data-label="Property">requiredLines.dimensions.secondSerial</div>
<div class="cell" data-label="Column">dimensionsSecondSerial</div>
<div class="cell" data-label="Arabic">الرقم المسلسل الثاني</div>
<div class="cell" data-label="English">Second Serial</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="requiredLines.dimensions.serialNumber">
<div class="cell" data-label="Property">requiredLines.dimensions.serialNumber</div>
<div class="cell" data-label="Column">dimensionsSerialNumber</div>
<div class="cell" data-label="Arabic">الرقم المسلسل</div>
<div class="cell" data-label="English">Serial Number</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="requiredLines.dimensions.size">
<div class="cell" data-label="Property">requiredLines.dimensions.size</div>
<div class="cell" data-label="Column">dimensionsSize</div>
<div class="cell" data-label="Arabic">المقاس</div>
<div class="cell" data-label="English">Size</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="requiredLines.dimensions.subItem">
<div class="cell" data-label="Property">requiredLines.dimensions.subItem</div>
<div class="cell" data-label="Column">dimensionsSubItem_id</div>
<div class="cell" data-label="Arabic"> صنف فرعى</div>
<div class="cell" data-label="English"> SubItem</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SubItem](/modules/srvcenter-subitems/SubItem.md) 
</div>
</div>

<div class="row searchable" id="requiredLines.dimensions.warehouse">
<div class="cell" data-label="Property">requiredLines.dimensions.warehouse</div>
<div class="cell" data-label="Column">dimensionsWarehouse_id</div>
<div class="cell" data-label="Arabic">المخزن</div>
<div class="cell" data-label="English">Warehouse</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="requiredLines.editedBatchesCount">
<div class="cell" data-label="Property">requiredLines.editedBatchesCount</div>
<div class="cell" data-label="Column">editedBatchesCount</div>
<div class="cell" data-label="Arabic">عدد الباتش المعدل</div>
<div class="cell" data-label="English">Updated Batches Count</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="requiredLines.editedNetRequired">
<div class="cell" data-label="Property">requiredLines.editedNetRequired</div>
<div class="cell" data-label="Column">editedNetRequired</div>
<div class="cell" data-label="Arabic">صافي المطلوب المعدل</div>
<div class="cell" data-label="English">Updated NetRequired</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="requiredLines.id">
<div class="cell" data-label="Property">requiredLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="requiredLines.invItem">
<div class="cell" data-label="Property">requiredLines.invItem</div>
<div class="cell" data-label="Column">invItem_id</div>
<div class="cell" data-label="Arabic"> الصنف</div>
<div class="cell" data-label="English"> Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/modules/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="requiredLines.lineNumber">
<div class="cell" data-label="Property">requiredLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="requiredLines.manual">
<div class="cell" data-label="Property">requiredLines.manual</div>
<div class="cell" data-label="Column">manual</div>
<div class="cell" data-label="Arabic">يدوي</div>
<div class="cell" data-label="English">Manual</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="requiredLines.netRequiredAfterEdit">
<div class="cell" data-label="Property">requiredLines.netRequiredAfterEdit</div>
<div class="cell" data-label="Column">netRequiredAfterEdit</div>
<div class="cell" data-label="Arabic">التحليل | صافي المطلوب النهائي</div>
<div class="cell" data-label="English">Analysis |Final NetRequired</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="requiredLines.predictedPurchase.qty1">
<div class="cell" data-label="Property">requiredLines.predictedPurchase.qty1</div>
<div class="cell" data-label="Column">predictedPurchaseQty1</div>
<div class="cell" data-label="Arabic">المتوقع دخولة | كمية 1</div>
<div class="cell" data-label="English">Predicted Purchase | Quantity 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="requiredLines.predictedPurchase.qty2">
<div class="cell" data-label="Property">requiredLines.predictedPurchase.qty2</div>
<div class="cell" data-label="Column">predictedPurchaseQty2</div>
<div class="cell" data-label="Arabic">المتوقع دخولة | كمية 2</div>
<div class="cell" data-label="English">Predicted Purchase | Quantity 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="requiredLines.predictedPurchase.total">
<div class="cell" data-label="Property">requiredLines.predictedPurchase.total</div>
<div class="cell" data-label="Column">predictedPurchaseTotal</div>
<div class="cell" data-label="Arabic">المتوقع دخولة | إجمالي</div>
<div class="cell" data-label="English">Predicted Purchase | Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="requiredLines.predictedSales.qty1">
<div class="cell" data-label="Property">requiredLines.predictedSales.qty1</div>
<div class="cell" data-label="Column">predictedSalesQty1</div>
<div class="cell" data-label="Arabic">المتوقع خروجة | كمية 1</div>
<div class="cell" data-label="English">Predicted Sales | Quantity 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="requiredLines.predictedSales.qty2">
<div class="cell" data-label="Property">requiredLines.predictedSales.qty2</div>
<div class="cell" data-label="Column">predictedSalesQty2</div>
<div class="cell" data-label="Arabic">المتوقع خروجة | كمية 2</div>
<div class="cell" data-label="English">Predicted Sales | Quantity 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="requiredLines.predictedSales.total">
<div class="cell" data-label="Property">requiredLines.predictedSales.total</div>
<div class="cell" data-label="Column">predictedSalesTotal</div>
<div class="cell" data-label="Arabic">المتوقع خروجة | إجمالي</div>
<div class="cell" data-label="English">Predicted Sales | Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="requiredLines.remarks">
<div class="cell" data-label="Property">requiredLines.remarks</div>
<div class="cell" data-label="Column">remarks</div>
<div class="cell" data-label="Arabic">ملاحظات</div>
<div class="cell" data-label="English">Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="requiredLines.requiredOn">
<div class="cell" data-label="Property">requiredLines.requiredOn</div>
<div class="cell" data-label="Column">requiredOn</div>
<div class="cell" data-label="Arabic">تاريخ الإحتياج</div>
<div class="cell" data-label="English">Required On</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="requiredLines.requiredQty.uom">
<div class="cell" data-label="Property">requiredLines.requiredQty.uom</div>
<div class="cell" data-label="Column">requiredQtyUom_id</div>
<div class="cell" data-label="Arabic">الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="requiredLines.requiredQty.value">
<div class="cell" data-label="Property">requiredLines.requiredQty.value</div>
<div class="cell" data-label="Column">requiredQtyValue</div>
<div class="cell" data-label="Arabic">المطلوب</div>
<div class="cell" data-label="English">Required</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="requiredLines.routing">
<div class="cell" data-label="Property">requiredLines.routing</div>
<div class="cell" data-label="Column">routing_id</div>
<div class="cell" data-label="Arabic">عمليات التشغيل</div>
<div class="cell" data-label="English">Routing</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Routing](/modules/manufacturing/Routing.md) 
</div>
</div>

<div class="row searchable" id="requiredLines.sourceLineId">
<div class="cell" data-label="Property">requiredLines.sourceLineId</div>
<div class="cell" data-label="Column">sourceLineId</div>
<div class="cell" data-label="Arabic">معرف سطر المصدر</div>
<div class="cell" data-label="English">Source Line Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="requiredLines.totalAvailable.qty1">
<div class="cell" data-label="Property">requiredLines.totalAvailable.qty1</div>
<div class="cell" data-label="Column">totalAvailableQty1</div>
<div class="cell" data-label="Arabic">إجمالي المتاح | كمية 1</div>
<div class="cell" data-label="English">Total Available | Quantity 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="requiredLines.totalAvailable.qty2">
<div class="cell" data-label="Property">requiredLines.totalAvailable.qty2</div>
<div class="cell" data-label="Column">totalAvailableQty2</div>
<div class="cell" data-label="Arabic">إجمالي المتاح | كمية 2</div>
<div class="cell" data-label="English">Total Available | Quantity 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="requiredLines.totalAvailable.total">
<div class="cell" data-label="Property">requiredLines.totalAvailable.total</div>
<div class="cell" data-label="Column">totalAvailableTotal</div>
<div class="cell" data-label="Arabic">إجمالي المتاح | إجمالي</div>
<div class="cell" data-label="English">Total Available | Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>


</div>
</div>

