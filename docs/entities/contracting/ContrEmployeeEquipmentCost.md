# ContrEmployeeEquipmentCost
**Arabic:** توزيع تكاليف الموظفين والمعدات على المشاريع - مستندات توزيع تكاليف الموظفين والمعدات على المشاريع
**English:** Employee And Equipment Project Cost Distribution - Employee And Equipment Project Cost Distribution Documents

<ContentFilter/>


<div class='searchable'>
<a href='#costLines'>costLines (ContEmpEquipTermCostLine) </a> , <a href='#details'>details (ContEmpEquipmentCostDocLine) </a>
</div>

<div class='searchable'>

## Fields

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

 [AnalysisSet](/entities/basic/AnalysisSet.md) 
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

 [DocumentBook](/entities/basic/DocumentBook.md) 
</div>
</div>

<div class="row searchable" id="branch">
<div class="cell" data-label="Property">branch</div>
<div class="cell" data-label="Column">branch_id</div>
<div class="cell" data-label="Arabic">الفرع</div>
<div class="cell" data-label="English">Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/entities/basic/Branch.md) 
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

 [DocumentCancelDocument](/entities/basic/DocumentCancelDocument.md) 
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

 [ApprovalCase](/entities/system-tables/ApprovalCase.md) 
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

 [Department](/entities/basic/Department.md) 
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

 [DocCategory](/entities/basic/DocCategory.md) 
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

 [NaMaUser](/entities/system-tables/NaMaUser.md) 
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

 [NaMaUser](/entities/system-tables/NaMaUser.md) 
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

 [FiscalPeriod](/entities/basic/FiscalPeriod.md) 
</div>
</div>

<div class="row searchable" id="fiscalYear">
<div class="cell" data-label="Property">fiscalYear</div>
<div class="cell" data-label="Column">fiscalYear_id</div>
<div class="cell" data-label="Arabic">السنة المالية</div>
<div class="cell" data-label="English">Fiscal Year</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FiscalYear](/entities/basic/FiscalYear.md) 
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

 [LegalEntity](/entities/basic/LegalEntity.md) 
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

 [CSHOpenShift](/entities/accounting-cashier/CSHOpenShift.md) 
</div>
</div>

<div class="row searchable" id="parentCode">
<div class="cell" data-label="Property">parentCode</div>
<div class="cell" data-label="Column">parentCode</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

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

<div class="row searchable" id="range.fromAnalysisSet">
<div class="cell" data-label="Property">range.fromAnalysisSet</div>
<div class="cell" data-label="Column">rangeFromAnalysisSet_id</div>
<div class="cell" data-label="Arabic">من مجموعه تحليليه</div>
<div class="cell" data-label="English">From Analysis Set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/entities/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="range.fromAsset">
<div class="cell" data-label="Property">range.fromAsset</div>
<div class="cell" data-label="Column">rangeFromAsset_id</div>
<div class="cell" data-label="Arabic">من أصل</div>
<div class="cell" data-label="English">From Asset</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FixedAsset](/entities/fixedassets/FixedAsset.md) 
</div>
</div>

<div class="row searchable" id="range.fromAssetAnalSet">
<div class="cell" data-label="Property">range.fromAssetAnalSet</div>
<div class="cell" data-label="Column">rangeFromAssetAnalSet_id</div>
<div class="cell" data-label="Arabic">من مجموعة تحليلية(أصل)</div>
<div class="cell" data-label="English">From Analysis Set (Fixed Asset)</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/entities/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="range.fromAssetBranch">
<div class="cell" data-label="Property">range.fromAssetBranch</div>
<div class="cell" data-label="Column">rangeFromAssetBranch_id</div>
<div class="cell" data-label="Arabic">من فرع (أصل)</div>
<div class="cell" data-label="English">From Branch (Fixed Asset)</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/entities/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="range.fromAssetDepartment">
<div class="cell" data-label="Property">range.fromAssetDepartment</div>
<div class="cell" data-label="Column">rangeFromAssetDepartment_id</div>
<div class="cell" data-label="Arabic">من إدارة(أصل)</div>
<div class="cell" data-label="English">From Department (Fixed Asset)</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/entities/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="range.fromAssetGroup">
<div class="cell" data-label="Property">range.fromAssetGroup</div>
<div class="cell" data-label="Column">rangeFromAssetGroup_id</div>
<div class="cell" data-label="Arabic">من مجوعة أصل</div>
<div class="cell" data-label="English">From Fixed Asset Group</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MasterGroup](/entities/basic/MasterGroup.md) 
</div>
</div>

<div class="row searchable" id="range.fromAssetSector">
<div class="cell" data-label="Property">range.fromAssetSector</div>
<div class="cell" data-label="Column">rangeFromAssetSector_id</div>
<div class="cell" data-label="Arabic">من قطاع (أصل)</div>
<div class="cell" data-label="English">From Sector (Fixed Asset)</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/entities/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="range.fromBranch">
<div class="cell" data-label="Property">range.fromBranch</div>
<div class="cell" data-label="Column">rangeFromBranch_id</div>
<div class="cell" data-label="Arabic">من فرع</div>
<div class="cell" data-label="English">From Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/entities/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="range.fromCar">
<div class="cell" data-label="Property">range.fromCar</div>
<div class="cell" data-label="Column">rangeFromCar_id</div>
<div class="cell" data-label="Arabic">من سيارة</div>
<div class="cell" data-label="English">From Car</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Car](/entities/basic/Car.md) 
</div>
</div>

<div class="row searchable" id="range.fromCarAnalSet">
<div class="cell" data-label="Property">range.fromCarAnalSet</div>
<div class="cell" data-label="Column">rangeFromCarAnalSet_id</div>
<div class="cell" data-label="Arabic">من مجموعة تحليلية (سيارة)</div>
<div class="cell" data-label="English">From Analysis Set (Car)</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/entities/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="range.fromCarBranch">
<div class="cell" data-label="Property">range.fromCarBranch</div>
<div class="cell" data-label="Column">rangeFromCarBranch_id</div>
<div class="cell" data-label="Arabic">من فرع (سيارة)</div>
<div class="cell" data-label="English">From Branch (Car)</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/entities/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="range.fromCarBrand">
<div class="cell" data-label="Property">range.fromCarBrand</div>
<div class="cell" data-label="Column">rangeFromCarBrand_id</div>
<div class="cell" data-label="Arabic">من ماركة</div>
<div class="cell" data-label="English">From Car Brand</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CarBrand](/entities/basic/CarBrand.md) 
</div>
</div>

<div class="row searchable" id="range.fromCarDepartment">
<div class="cell" data-label="Property">range.fromCarDepartment</div>
<div class="cell" data-label="Column">rangeFromCarDepartment_id</div>
<div class="cell" data-label="Arabic">من إدارة (سيارة)</div>
<div class="cell" data-label="English">From Department (Car)</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/entities/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="range.fromCarGroup">
<div class="cell" data-label="Property">range.fromCarGroup</div>
<div class="cell" data-label="Column">rangeFromCarGroup_id</div>
<div class="cell" data-label="Arabic">من مجموعة سيارة</div>
<div class="cell" data-label="English">From Car Group</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MasterGroup](/entities/basic/MasterGroup.md) 
</div>
</div>

<div class="row searchable" id="range.fromCarModel">
<div class="cell" data-label="Property">range.fromCarModel</div>
<div class="cell" data-label="Column">rangeFromCarModel_id</div>
<div class="cell" data-label="Arabic">من موديل</div>
<div class="cell" data-label="English">From Car Model</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CarModel](/entities/basic/CarModel.md) 
</div>
</div>

<div class="row searchable" id="range.fromCarSector">
<div class="cell" data-label="Property">range.fromCarSector</div>
<div class="cell" data-label="Column">rangeFromCarSector_id</div>
<div class="cell" data-label="Arabic">من قطاع (سيارة)</div>
<div class="cell" data-label="English">From Sector (Car)</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/entities/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="range.fromDepartment">
<div class="cell" data-label="Property">range.fromDepartment</div>
<div class="cell" data-label="Column">rangeFromDepartment_id</div>
<div class="cell" data-label="Arabic">من إدارة</div>
<div class="cell" data-label="English">From Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/entities/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="range.fromDepartmentSection">
<div class="cell" data-label="Property">range.fromDepartmentSection</div>
<div class="cell" data-label="Column">rangeFromDepartmentSection_id</div>
<div class="cell" data-label="Arabic">من قسم وظيفي</div>
<div class="cell" data-label="English">From Department Section</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DepartmentSection](/entities/basic/DepartmentSection.md) 
</div>
</div>

<div class="row searchable" id="range.fromEmpDepartment">
<div class="cell" data-label="Property">range.fromEmpDepartment</div>
<div class="cell" data-label="Column">rangeFromEmpDepartment_id</div>
<div class="cell" data-label="Arabic">من إدارة موظف</div>
<div class="cell" data-label="English">From Emp Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [EmployeeDepartment](/entities/basic/EmployeeDepartment.md) 
</div>
</div>

<div class="row searchable" id="range.fromEmpWorkPlace">
<div class="cell" data-label="Property">range.fromEmpWorkPlace</div>
<div class="cell" data-label="Column">rangeFromEmpWorkPlace_id</div>
<div class="cell" data-label="Arabic">من مكان عمل</div>
<div class="cell" data-label="English">From Employee WorkPlace</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [EmpWorkPlace](/entities/basic/EmpWorkPlace.md) 
</div>
</div>

<div class="row searchable" id="range.fromEmployee">
<div class="cell" data-label="Property">range.fromEmployee</div>
<div class="cell" data-label="Column">rangeFromEmployee_id</div>
<div class="cell" data-label="Arabic">من موظف</div>
<div class="cell" data-label="English">From Employee</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/entities/basic/Employee.md) 
</div>
</div>

<div class="row searchable" id="range.fromFAType">
<div class="cell" data-label="Property">range.fromFAType</div>
<div class="cell" data-label="Column">rangeFromFAType_id</div>
<div class="cell" data-label="Arabic">من نوع أصل</div>
<div class="cell" data-label="English">From Fixed Asset Type</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FAType](/entities/fixedassets/FAType.md) 
</div>
</div>

<div class="row searchable" id="range.fromGroup">
<div class="cell" data-label="Property">range.fromGroup</div>
<div class="cell" data-label="Column">rangeFromGroup_id</div>
<div class="cell" data-label="Arabic">من مجموعة</div>
<div class="cell" data-label="English">From Group</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MasterGroup](/entities/basic/MasterGroup.md) 
</div>
</div>

<div class="row searchable" id="range.fromJobPosition">
<div class="cell" data-label="Property">range.fromJobPosition</div>
<div class="cell" data-label="Column">rangeFromJobPosition_id</div>
<div class="cell" data-label="Arabic">من وظيفة</div>
<div class="cell" data-label="English">From Job Position</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [JobPosition](/entities/basic/JobPosition.md) 
</div>
</div>

<div class="row searchable" id="range.fromNationality">
<div class="cell" data-label="Property">range.fromNationality</div>
<div class="cell" data-label="Column">rangeFromNationality_id</div>
<div class="cell" data-label="Arabic">من جنسية</div>
<div class="cell" data-label="English">From Nationality</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Nationality](/entities/basic/Nationality.md) 
</div>
</div>

<div class="row searchable" id="range.fromOrganizationPos">
<div class="cell" data-label="Property">range.fromOrganizationPos</div>
<div class="cell" data-label="Column">rangeFromOrganizationPos_id</div>
<div class="cell" data-label="Arabic"> من درجة وظيفية</div>
<div class="cell" data-label="English">From Organization Position</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [OrganizationPosition](/entities/basic/OrganizationPosition.md) 
</div>
</div>

<div class="row searchable" id="range.fromSector">
<div class="cell" data-label="Property">range.fromSector</div>
<div class="cell" data-label="Column">rangeFromSector_id</div>
<div class="cell" data-label="Arabic">من قطاع</div>
<div class="cell" data-label="English">From Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/entities/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="range.toAnalysisSet">
<div class="cell" data-label="Property">range.toAnalysisSet</div>
<div class="cell" data-label="Column">rangeToAnalysisSet_id</div>
<div class="cell" data-label="Arabic">إلي مجموعه تحليليه</div>
<div class="cell" data-label="English">To Snalysis Set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/entities/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="range.toAsset">
<div class="cell" data-label="Property">range.toAsset</div>
<div class="cell" data-label="Column">rangeToAsset_id</div>
<div class="cell" data-label="Arabic">إلى أصل</div>
<div class="cell" data-label="English">To Asset</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FixedAsset](/entities/fixedassets/FixedAsset.md) 
</div>
</div>

<div class="row searchable" id="range.toAssetAnalSet">
<div class="cell" data-label="Property">range.toAssetAnalSet</div>
<div class="cell" data-label="Column">rangeToAssetAnalSet_id</div>
<div class="cell" data-label="Arabic">إلي مجموعة تحليلية (أصل)</div>
<div class="cell" data-label="English">To Analysis Set (Fixed Asset)</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/entities/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="range.toAssetBranch">
<div class="cell" data-label="Property">range.toAssetBranch</div>
<div class="cell" data-label="Column">rangeToAssetBranch_id</div>
<div class="cell" data-label="Arabic">إلي فرع (أصل)</div>
<div class="cell" data-label="English">To Branch (Fixed Asset)</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/entities/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="range.toAssetDepartment">
<div class="cell" data-label="Property">range.toAssetDepartment</div>
<div class="cell" data-label="Column">rangeToAssetDepartment_id</div>
<div class="cell" data-label="Arabic">إلي إدارة (أصل)</div>
<div class="cell" data-label="English">To Department (Fixed Asset)</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/entities/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="range.toAssetGroup">
<div class="cell" data-label="Property">range.toAssetGroup</div>
<div class="cell" data-label="Column">rangeToAssetGroup_id</div>
<div class="cell" data-label="Arabic">إلي مجموعة أصل</div>
<div class="cell" data-label="English">To Fixed Asset Group</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MasterGroup](/entities/basic/MasterGroup.md) 
</div>
</div>

<div class="row searchable" id="range.toAssetSector">
<div class="cell" data-label="Property">range.toAssetSector</div>
<div class="cell" data-label="Column">rangeToAssetSector_id</div>
<div class="cell" data-label="Arabic">إلي قطاع (أصل)</div>
<div class="cell" data-label="English">To Sector (Fixed Asset)</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/entities/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="range.toBranch">
<div class="cell" data-label="Property">range.toBranch</div>
<div class="cell" data-label="Column">rangeToBranch_id</div>
<div class="cell" data-label="Arabic">إلى فرع</div>
<div class="cell" data-label="English">To Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/entities/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="range.toCar">
<div class="cell" data-label="Property">range.toCar</div>
<div class="cell" data-label="Column">rangeToCar_id</div>
<div class="cell" data-label="Arabic">إلى سيارة</div>
<div class="cell" data-label="English">To Car</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Car](/entities/basic/Car.md) 
</div>
</div>

<div class="row searchable" id="range.toCarAnalSet">
<div class="cell" data-label="Property">range.toCarAnalSet</div>
<div class="cell" data-label="Column">rangeToCarAnalSet_id</div>
<div class="cell" data-label="Arabic">إلى مجموعة تحليلية (سيارة)</div>
<div class="cell" data-label="English">To Analysis Set (Car)</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/entities/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="range.toCarBranch">
<div class="cell" data-label="Property">range.toCarBranch</div>
<div class="cell" data-label="Column">rangeToCarBranch_id</div>
<div class="cell" data-label="Arabic">إلى فرع (سيارة)</div>
<div class="cell" data-label="English">To Branch (Car)</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/entities/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="range.toCarBrand">
<div class="cell" data-label="Property">range.toCarBrand</div>
<div class="cell" data-label="Column">rangeToCarBrand_id</div>
<div class="cell" data-label="Arabic">إلى ماركة</div>
<div class="cell" data-label="English">To Car Brand</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CarBrand](/entities/basic/CarBrand.md) 
</div>
</div>

<div class="row searchable" id="range.toCarDepartment">
<div class="cell" data-label="Property">range.toCarDepartment</div>
<div class="cell" data-label="Column">rangeToCarDepartment_id</div>
<div class="cell" data-label="Arabic">إلى إدارة (سيارة)</div>
<div class="cell" data-label="English">To Department (Car)</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/entities/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="range.toCarGroup">
<div class="cell" data-label="Property">range.toCarGroup</div>
<div class="cell" data-label="Column">rangeToCarGroup_id</div>
<div class="cell" data-label="Arabic">إلى مجموعة سيارة</div>
<div class="cell" data-label="English">To Car Group</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MasterGroup](/entities/basic/MasterGroup.md) 
</div>
</div>

<div class="row searchable" id="range.toCarModel">
<div class="cell" data-label="Property">range.toCarModel</div>
<div class="cell" data-label="Column">rangeToCarModel_id</div>
<div class="cell" data-label="Arabic">إلى موديل</div>
<div class="cell" data-label="English">To Car Model</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CarModel](/entities/basic/CarModel.md) 
</div>
</div>

<div class="row searchable" id="range.toCarSector">
<div class="cell" data-label="Property">range.toCarSector</div>
<div class="cell" data-label="Column">rangeToCarSector_id</div>
<div class="cell" data-label="Arabic">إلى قطاع (سيارة)</div>
<div class="cell" data-label="English">To Sector (Car)</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/entities/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="range.toDepartment">
<div class="cell" data-label="Property">range.toDepartment</div>
<div class="cell" data-label="Column">rangeToDepartment_id</div>
<div class="cell" data-label="Arabic">إلى إدارة</div>
<div class="cell" data-label="English">To Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/entities/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="range.toDepartmentSection">
<div class="cell" data-label="Property">range.toDepartmentSection</div>
<div class="cell" data-label="Column">rangeToDepartmentSection_id</div>
<div class="cell" data-label="Arabic">إلى قسم وظيفي</div>
<div class="cell" data-label="English">To Department Section</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DepartmentSection](/entities/basic/DepartmentSection.md) 
</div>
</div>

<div class="row searchable" id="range.toEmpDepartment">
<div class="cell" data-label="Property">range.toEmpDepartment</div>
<div class="cell" data-label="Column">rangeToEmpDepartment_id</div>
<div class="cell" data-label="Arabic">إلى إدارة موظف</div>
<div class="cell" data-label="English">To Emp Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [EmployeeDepartment](/entities/basic/EmployeeDepartment.md) 
</div>
</div>

<div class="row searchable" id="range.toEmpWorkPlace">
<div class="cell" data-label="Property">range.toEmpWorkPlace</div>
<div class="cell" data-label="Column">rangeToEmpWorkPlace_id</div>
<div class="cell" data-label="Arabic">الي مكان عمل</div>
<div class="cell" data-label="English">To Employee WorkPlace</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [EmpWorkPlace](/entities/basic/EmpWorkPlace.md) 
</div>
</div>

<div class="row searchable" id="range.toEmployee">
<div class="cell" data-label="Property">range.toEmployee</div>
<div class="cell" data-label="Column">rangeToEmployee_id</div>
<div class="cell" data-label="Arabic">الي موظف</div>
<div class="cell" data-label="English">To Employee</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/entities/basic/Employee.md) 
</div>
</div>

<div class="row searchable" id="range.toFAType">
<div class="cell" data-label="Property">range.toFAType</div>
<div class="cell" data-label="Column">rangeToFAType_id</div>
<div class="cell" data-label="Arabic">إلي نوع أصل</div>
<div class="cell" data-label="English">To Fixed asset Type</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FAType](/entities/fixedassets/FAType.md) 
</div>
</div>

<div class="row searchable" id="range.toGroup">
<div class="cell" data-label="Property">range.toGroup</div>
<div class="cell" data-label="Column">rangeToGroup_id</div>
<div class="cell" data-label="Arabic">إلي مجموعة</div>
<div class="cell" data-label="English">To Group</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MasterGroup](/entities/basic/MasterGroup.md) 
</div>
</div>

<div class="row searchable" id="range.toJobPosition">
<div class="cell" data-label="Property">range.toJobPosition</div>
<div class="cell" data-label="Column">rangeToJobPosition_id</div>
<div class="cell" data-label="Arabic">إلى وظيفة</div>
<div class="cell" data-label="English">To Job Position</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [JobPosition](/entities/basic/JobPosition.md) 
</div>
</div>

<div class="row searchable" id="range.toNationality">
<div class="cell" data-label="Property">range.toNationality</div>
<div class="cell" data-label="Column">rangeToNationality_id</div>
<div class="cell" data-label="Arabic">إلى جنسية</div>
<div class="cell" data-label="English">To Nationality</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Nationality](/entities/basic/Nationality.md) 
</div>
</div>

<div class="row searchable" id="range.toOrganizationPos">
<div class="cell" data-label="Property">range.toOrganizationPos</div>
<div class="cell" data-label="Column">rangeToOrganizationPos_id</div>
<div class="cell" data-label="Arabic"> إلى درجة وظيفية</div>
<div class="cell" data-label="English">To Organization Position</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [OrganizationPosition](/entities/basic/OrganizationPosition.md) 
</div>
</div>

<div class="row searchable" id="range.toSector">
<div class="cell" data-label="Property">range.toSector</div>
<div class="cell" data-label="Column">rangeToSector_id</div>
<div class="cell" data-label="Arabic">إلي قطاع</div>
<div class="cell" data-label="English">To Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/entities/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="rbook">
<div class="cell" data-label="Property">rbook</div>
<div class="cell" data-label="Column">rbook_id</div>
<div class="cell" data-label="Arabic">دفتر الايصالات</div>
<div class="cell" data-label="English">Receipt Book</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ReceiptBook](/entities/basic/ReceiptBook.md) 
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

 [NaMaUser](/entities/system-tables/NaMaUser.md) 
</div>
</div>

<div class="row searchable" id="rpaper">
<div class="cell" data-label="Property">rpaper</div>
<div class="cell" data-label="Column">rpaper_id</div>
<div class="cell" data-label="Arabic">الايصال</div>
<div class="cell" data-label="English">Receipt Paper</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ReceiptPaper](/entities/basic/ReceiptPaper.md) 
</div>
</div>

<div class="row searchable" id="sector">
<div class="cell" data-label="Property">sector</div>
<div class="cell" data-label="Column">sector_id</div>
<div class="cell" data-label="Arabic">القطاع</div>
<div class="cell" data-label="English">Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/entities/basic/Sector.md) 
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

 [DocumentTerm](/entities/basic/DocumentTerm.md) 
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

 [SecurityCapability](/entities/basic/SecurityCapability.md) 
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

 [SecurityCapability](/entities/basic/SecurityCapability.md) 
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

 [SecurityCapability](/entities/basic/SecurityCapability.md) 
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

<div id='costLines' title='costLines' class='searchable'>

## costLines (توزيع التكلفة - Cost Allocation)
**Table Name:** ContEmpEquipTermCostLine, **Join Column:** contrEmployeeEquipmentCost_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="costLines.analysisTermCode">
<div class="cell" data-label="Property">costLines.analysisTermCode</div>
<div class="cell" data-label="Column">analysisTermCode</div>
<div class="cell" data-label="Arabic">كود البند التحليلى</div>
<div class="cell" data-label="English">Analysis Term Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="costLines.cost">
<div class="cell" data-label="Property">costLines.cost</div>
<div class="cell" data-label="Column">cost</div>
<div class="cell" data-label="Arabic">التكلفة</div>
<div class="cell" data-label="English">Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="costLines.creationDate">
<div class="cell" data-label="Property">costLines.creationDate</div>
<div class="cell" data-label="Column">creationDate</div>
<div class="cell" data-label="Arabic">تاريخ الإنشاء</div>
<div class="cell" data-label="English">Creation Date</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="costLines.doc">
<div class="cell" data-label="Property">costLines.doc</div>
<div class="cell gen-ref-column" data-label="Column">docActualCode,  docCode,  docEntityType,  docId</div>
<div class="cell" data-label="Arabic">المستند</div>
<div class="cell" data-label="English">Document</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="costLines.employeeOrEquipment">
<div class="cell" data-label="Property">costLines.employeeOrEquipment</div>
<div class="cell gen-ref-column" data-label="Column">employeeOrEquipmentActualCode,  employeeOrEquipmentCode,  employeeOrEquipmentEntityType,  employeeOrEquipmentId</div>
<div class="cell" data-label="Arabic">موظف / معدة</div>
<div class="cell" data-label="English">Employee / Equipment</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="costLines.estimatedTermCode">
<div class="cell" data-label="Property">costLines.estimatedTermCode</div>
<div class="cell" data-label="Column">estimatedTermCode</div>
<div class="cell" data-label="Arabic">كود بند الموازنة التقديرية</div>
<div class="cell" data-label="English">Estimated Term Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="costLines.executiveTermCode">
<div class="cell" data-label="Property">costLines.executiveTermCode</div>
<div class="cell" data-label="Column">executiveTermCode</div>
<div class="cell" data-label="Arabic">كود بند الموازنة التنفيذية</div>
<div class="cell" data-label="English">Executive Term Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="costLines.id">
<div class="cell" data-label="Property">costLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="costLines.lineNumber">
<div class="cell" data-label="Property">costLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="costLines.owner">
<div class="cell" data-label="Property">costLines.owner</div>
<div class="cell" data-label="Column">owner_id</div>
<div class="cell" data-label="Arabic"> مالك المستند</div>
<div class="cell" data-label="English"> Document Owner</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ContrEmployeeEquipmentCost](/entities/contracting/ContrEmployeeEquipmentCost.md) 
</div>
</div>

<div class="row searchable" id="costLines.projectContract">
<div class="cell" data-label="Property">costLines.projectContract</div>
<div class="cell" data-label="Column">projectContract_id</div>
<div class="cell" data-label="Arabic"> عقد مشروع</div>
<div class="cell" data-label="English"> Project Contract</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ProjectContract](/entities/contracting/ProjectContract.md) 
</div>
</div>

<div class="row searchable" id="costLines.termAnalysisCard">
<div class="cell" data-label="Property">costLines.termAnalysisCard</div>
<div class="cell" data-label="Column">termAnalysisCard_id</div>
<div class="cell" data-label="Arabic">كارت التحليل</div>
<div class="cell" data-label="English">Term Analysis Card</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [TermAnalysisCard](/entities/contracting/TermAnalysisCard.md) 
</div>
</div>

<div class="row searchable" id="costLines.termCategory">
<div class="cell" data-label="Property">costLines.termCategory</div>
<div class="cell gen-ref-column" data-label="Column">termCategoryActualCode,  termCategoryCode,  termCategoryEntityType,  termCategoryId</div>
<div class="cell" data-label="Arabic">تصنيف البند</div>
<div class="cell" data-label="English">Term Category</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="costLines.termCategory2">
<div class="cell" data-label="Property">costLines.termCategory2</div>
<div class="cell gen-ref-column" data-label="Column">termCategory2ActualCode,  termCategory2Code,  termCategory2EntityType,  termCategory2Id</div>
<div class="cell" data-label="Arabic">تصنيف البند 2</div>
<div class="cell" data-label="English">Term Category 2</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="costLines.termCode">
<div class="cell" data-label="Property">costLines.termCode</div>
<div class="cell" data-label="Column">termCode</div>
<div class="cell" data-label="Arabic">كود البند</div>
<div class="cell" data-label="English">Term Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="costLines.valueDate">
<div class="cell" data-label="Property">costLines.valueDate</div>
<div class="cell" data-label="Column">valueDate</div>
<div class="cell" data-label="Arabic">التاريخ الفعلي</div>
<div class="cell" data-label="English">Value Date</div>
<div class="cell" data-label="Type">Date</div>

</div>


</div>

<div id='details' title='details' class='searchable'>

## details (التفاصيل - Details)
**Table Name:** ContEmpEquipmentCostDocLine, **Join Column:** contrEmployeeEquipmentCost_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="details.analysisTermCode">
<div class="cell" data-label="Property">details.analysisTermCode</div>
<div class="cell" data-label="Column">analysisTermCode</div>
<div class="cell" data-label="Arabic">كود البند التحليلى</div>
<div class="cell" data-label="English">Analysis Term Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.collectedCost">
<div class="cell" data-label="Property">details.collectedCost</div>
<div class="cell" data-label="Column">collectedCost</div>
<div class="cell" data-label="Arabic">التكلفة المجمعة</div>
<div class="cell" data-label="English">Collected Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.cost">
<div class="cell" data-label="Property">details.cost</div>
<div class="cell" data-label="Column">cost</div>
<div class="cell" data-label="Arabic">التكلفة</div>
<div class="cell" data-label="English">Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.creationDate">
<div class="cell" data-label="Property">details.creationDate</div>
<div class="cell" data-label="Column">creationDate</div>
<div class="cell" data-label="Arabic">تاريخ الإنشاء</div>
<div class="cell" data-label="English">Creation Date</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="details.doc">
<div class="cell" data-label="Property">details.doc</div>
<div class="cell gen-ref-column" data-label="Column">docActualCode,  docCode,  docEntityType,  docId</div>
<div class="cell" data-label="Arabic">المستند</div>
<div class="cell" data-label="English">Document</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.employeeOrEquipment">
<div class="cell" data-label="Property">details.employeeOrEquipment</div>
<div class="cell gen-ref-column" data-label="Column">employeeOrEquipmentActualCode,  employeeOrEquipmentCode,  employeeOrEquipmentEntityType,  employeeOrEquipmentId</div>
<div class="cell" data-label="Arabic">موظف / معدة</div>
<div class="cell" data-label="English">Employee / Equipment</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.estimatedTermCode">
<div class="cell" data-label="Property">details.estimatedTermCode</div>
<div class="cell" data-label="Column">estimatedTermCode</div>
<div class="cell" data-label="Arabic">كود بند الموازنة التقديرية</div>
<div class="cell" data-label="English">Estimated Term Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.executiveTermCode">
<div class="cell" data-label="Property">details.executiveTermCode</div>
<div class="cell" data-label="Column">executiveTermCode</div>
<div class="cell" data-label="Arabic">كود بند الموازنة التنفيذية</div>
<div class="cell" data-label="English">Executive Term Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.id">
<div class="cell" data-label="Property">details.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="details.lineNumber">
<div class="cell" data-label="Property">details.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="details.owner">
<div class="cell" data-label="Property">details.owner</div>
<div class="cell" data-label="Column">owner_id</div>
<div class="cell" data-label="Arabic">المالك</div>
<div class="cell" data-label="English">owner</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ContrEmployeeEquipmentCost](/entities/contracting/ContrEmployeeEquipmentCost.md) 
</div>
</div>

<div class="row searchable" id="details.projectContract">
<div class="cell" data-label="Property">details.projectContract</div>
<div class="cell" data-label="Column">projectContract_id</div>
<div class="cell" data-label="Arabic"> عقد مشروع</div>
<div class="cell" data-label="English"> Project Contract</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ProjectContract](/entities/contracting/ProjectContract.md) 
</div>
</div>

<div class="row searchable" id="details.termAnalysisCard">
<div class="cell" data-label="Property">details.termAnalysisCard</div>
<div class="cell" data-label="Column">termAnalysisCard_id</div>
<div class="cell" data-label="Arabic">كارت التحليل</div>
<div class="cell" data-label="English">Term Analysis Card</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [TermAnalysisCard](/entities/contracting/TermAnalysisCard.md) 
</div>
</div>

<div class="row searchable" id="details.termCategory">
<div class="cell" data-label="Property">details.termCategory</div>
<div class="cell gen-ref-column" data-label="Column">termCategoryActualCode,  termCategoryCode,  termCategoryEntityType,  termCategoryId</div>
<div class="cell" data-label="Arabic">تصنيف البند</div>
<div class="cell" data-label="English">Term Category</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.termCategory2">
<div class="cell" data-label="Property">details.termCategory2</div>
<div class="cell gen-ref-column" data-label="Column">termCategory2ActualCode,  termCategory2Code,  termCategory2EntityType,  termCategory2Id</div>
<div class="cell" data-label="Arabic">تصنيف البند 2</div>
<div class="cell" data-label="English">Term Category 2</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.termCode">
<div class="cell" data-label="Property">details.termCode</div>
<div class="cell" data-label="Column">termCode</div>
<div class="cell" data-label="Arabic">كود البند</div>
<div class="cell" data-label="English">Term Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.valueDate">
<div class="cell" data-label="Property">details.valueDate</div>
<div class="cell" data-label="Column">valueDate</div>
<div class="cell" data-label="Arabic">التاريخ الفعلي</div>
<div class="cell" data-label="English">Value Date</div>
<div class="cell" data-label="Type">Date</div>

</div>


</div>

