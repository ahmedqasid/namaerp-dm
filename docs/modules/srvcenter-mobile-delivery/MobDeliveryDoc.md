
<div class='tableName'>


# MobDeliveryDoc
</div>

**Arabic:** مستند الحركة - مستندات الحركة
**English:** Mobile Delivery Document - Mobile Delivery Documents

<ContentFilter/>


<div class='searchable'>
<a href='#details'>details (MobDeliveryDocLine) </a> , <a href='#timeCheckLines'>timeCheckLines (MobDeliveryTimeCheckLine) </a>
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

<div class="row searchable" id="courier">
<div class="cell" data-label="Property">courier</div>
<div class="cell" data-label="Column">courier_id</div>
<div class="cell" data-label="Arabic">مندوب التوزيع</div>
<div class="cell" data-label="English">Courier</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/modules/basic/Employee.md) 
</div>
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

<div class="row searchable" id="deliverTo">
<div class="cell" data-label="Property">deliverTo</div>
<div class="cell gen-ref-column" data-label="Column">deliverToActualCode,  deliverToCode,  deliverToEntityType,  deliverToId</div>
<div class="cell" data-label="Arabic"> العميل</div>
<div class="cell" data-label="English"> Customer</div>
<div class="cell" data-label="Type">Genericreference</div>

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

<div class="row searchable" id="region">
<div class="cell" data-label="Property">region</div>
<div class="cell" data-label="Column">region_id</div>
<div class="cell" data-label="Arabic">منطقة جغرافيه</div>
<div class="cell" data-label="English">Region</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AddressRegion](/modules/basic/AddressRegion.md) 
</div>
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

<div class="row searchable" id="salesMan">
<div class="cell" data-label="Property">salesMan</div>
<div class="cell" data-label="Column">salesMan_id</div>
<div class="cell" data-label="Arabic">مندوب المبيعات</div>
<div class="cell" data-label="English">Salesman</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/modules/basic/Employee.md) 
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

<div id='details' title='details' class='searchable'>

## details (التفاصيل - Details)

<div class='tableName'>

**Table Name:** MobDeliveryDocLine, **Join Column:** mobDeliveryDoc_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="details.arrivalDate">
<div class="cell" data-label="Property">details.arrivalDate</div>
<div class="cell" data-label="Column">arrivalDate</div>
<div class="cell" data-label="Arabic">تاريخ الوصول</div>
<div class="cell" data-label="English">Arrival Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.arrivalDateTime">
<div class="cell" data-label="Property">details.arrivalDateTime</div>
<div class="cell" data-label="Column">arrivalDateTime</div>
<div class="cell" data-label="Arabic">تاريخ و وقت الوصول</div>
<div class="cell" data-label="English">Arrival Date and Time</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="details.arrivalTime">
<div class="cell" data-label="Property">details.arrivalTime</div>
<div class="cell" data-label="Column">arrivalTime</div>
<div class="cell" data-label="Arabic">وقت الوصول</div>
<div class="cell" data-label="English">Arrival Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="details.courier">
<div class="cell" data-label="Property">details.courier</div>
<div class="cell" data-label="Column">courier_id</div>
<div class="cell" data-label="Arabic">مندوب التوزيع</div>
<div class="cell" data-label="English">Courier</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/modules/basic/Employee.md) 
</div>
</div>

<div class="row searchable" id="details.courierRemarks">
<div class="cell" data-label="Property">details.courierRemarks</div>
<div class="cell" data-label="Column">courierRemarks</div>
<div class="cell" data-label="Arabic">ملاحظات المندوب</div>
<div class="cell" data-label="English">Courier Remarks</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="details.customerAddress1">
<div class="cell" data-label="Property">details.customerAddress1</div>
<div class="cell" data-label="Column">customerAddress1</div>
<div class="cell" data-label="Arabic">عنوان العميل</div>
<div class="cell" data-label="English">Customer Address</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.deliverTo">
<div class="cell" data-label="Property">details.deliverTo</div>
<div class="cell gen-ref-column" data-label="Column">deliverToActualCode,  deliverToCode,  deliverToEntityType,  deliverToId</div>
<div class="cell" data-label="Arabic"> العميل</div>
<div class="cell" data-label="English"> Customer</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.deliveredDoc">
<div class="cell" data-label="Property">details.deliveredDoc</div>
<div class="cell gen-ref-column" data-label="Column">deliveredDocActualCode,  deliveredDocCode,  deliveredDocEntityType,  deliveredDocId</div>
<div class="cell" data-label="Arabic">مستند التسليم</div>
<div class="cell" data-label="English">Delivered Document</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.deliveredDocRemarks">
<div class="cell" data-label="Property">details.deliveredDocRemarks</div>
<div class="cell" data-label="Column">deliveredDocRemarks</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="details.deliveryState">
<div class="cell" data-label="Property">details.deliveryState</div>
<div class="cell" data-label="Column">deliveryState</div>
<div class="cell" data-label="Arabic">حالة الحركة</div>
<div class="cell" data-label="English">Delivery State</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="details.dimensions.analysisSet">
<div class="cell" data-label="Property">details.dimensions.analysisSet</div>
<div class="cell" data-label="Column">analysisSet_id</div>
<div class="cell" data-label="Arabic">المجموعة التحليلية</div>
<div class="cell" data-label="English">Analysis set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/modules/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="details.dimensions.branch">
<div class="cell" data-label="Property">details.dimensions.branch</div>
<div class="cell" data-label="Column">branch_id</div>
<div class="cell" data-label="Arabic">الفرع</div>
<div class="cell" data-label="English">Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/modules/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="details.dimensions.department">
<div class="cell" data-label="Property">details.dimensions.department</div>
<div class="cell" data-label="Column">department_id</div>
<div class="cell" data-label="Arabic">الإدارة</div>
<div class="cell" data-label="English">Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/modules/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="details.dimensions.legalEntity">
<div class="cell" data-label="Property">details.dimensions.legalEntity</div>
<div class="cell" data-label="Column">legalEntity_id</div>
<div class="cell" data-label="Arabic">الشركة</div>
<div class="cell" data-label="English">Legal Entity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [LegalEntity](/modules/basic/LegalEntity.md) 
</div>
</div>

<div class="row searchable" id="details.dimensions.sector">
<div class="cell" data-label="Property">details.dimensions.sector</div>
<div class="cell" data-label="Column">sector_id</div>
<div class="cell" data-label="Arabic">القطاع</div>
<div class="cell" data-label="English">Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/modules/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="details.id">
<div class="cell" data-label="Property">details.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="details.isCommitedBefore">
<div class="cell" data-label="Property">details.isCommitedBefore</div>
<div class="cell" data-label="Column">isCommitedBefore</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.isSelected">
<div class="cell" data-label="Property">details.isSelected</div>
<div class="cell" data-label="Column">isSelected</div>
<div class="cell" data-label="Arabic">اختيار</div>
<div class="cell" data-label="English">Select</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.lineNumber">
<div class="cell" data-label="Property">details.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="details.mapLocation">
<div class="cell" data-label="Property">details.mapLocation</div>
<div class="cell" data-label="Column">mapLocation</div>
<div class="cell" data-label="Arabic">الموقع على الخريطة</div>
<div class="cell" data-label="English">Map Location</div>
<div class="cell" data-label="Type">LatLng</div>

</div>

<div class="row searchable" id="details.mobDoc">
<div class="cell" data-label="Property">details.mobDoc</div>
<div class="cell gen-ref-column" data-label="Column">mobDocActualCode,  mobDocCode,  mobDocEntityType,  mobDocId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.package1">
<div class="cell" data-label="Property">details.package1</div>
<div class="cell" data-label="Column">package1</div>
<div class="cell" data-label="Arabic">Package 1</div>
<div class="cell" data-label="English">Package 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.package2">
<div class="cell" data-label="Property">details.package2</div>
<div class="cell" data-label="Column">package2</div>
<div class="cell" data-label="Arabic">Package 2</div>
<div class="cell" data-label="English">Package 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.package3">
<div class="cell" data-label="Property">details.package3</div>
<div class="cell" data-label="Column">package3</div>
<div class="cell" data-label="Arabic">Package 3</div>
<div class="cell" data-label="English">Package 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.package4">
<div class="cell" data-label="Property">details.package4</div>
<div class="cell" data-label="Column">package4</div>
<div class="cell" data-label="Arabic">Package 4</div>
<div class="cell" data-label="English">Package 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.package5">
<div class="cell" data-label="Property">details.package5</div>
<div class="cell" data-label="Column">package5</div>
<div class="cell" data-label="Arabic">Package 5</div>
<div class="cell" data-label="English">Package 5</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.package6">
<div class="cell" data-label="Property">details.package6</div>
<div class="cell" data-label="Column">package6</div>
<div class="cell" data-label="Arabic">Package 6</div>
<div class="cell" data-label="English">Package 6</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.package7">
<div class="cell" data-label="Property">details.package7</div>
<div class="cell" data-label="Column">package7</div>
<div class="cell" data-label="Arabic">Package 7</div>
<div class="cell" data-label="English">Package 7</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.region">
<div class="cell" data-label="Property">details.region</div>
<div class="cell" data-label="Column">region_id</div>
<div class="cell" data-label="Arabic">منطقة جغرافيه</div>
<div class="cell" data-label="English">Region</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AddressRegion](/modules/basic/AddressRegion.md) 
</div>
</div>

<div class="row searchable" id="details.remarks">
<div class="cell" data-label="Property">details.remarks</div>
<div class="cell" data-label="Column">remarks</div>
<div class="cell" data-label="Arabic"> ملاحظات</div>
<div class="cell" data-label="English"> Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="details.salesInvoice">
<div class="cell" data-label="Property">details.salesInvoice</div>
<div class="cell" data-label="Column">salesInvoice_id</div>
<div class="cell" data-label="Arabic">فاتورة المبيعات</div>
<div class="cell" data-label="English">Sales Invoice</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SalesInvoice](/modules/supplychain-sales/SalesInvoice.md) 
</div>
</div>

<div class="row searchable" id="details.salesMan">
<div class="cell" data-label="Property">details.salesMan</div>
<div class="cell" data-label="Column">salesMan_id</div>
<div class="cell" data-label="Arabic">مندوب المبيعات</div>
<div class="cell" data-label="English">Salesman</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/modules/basic/Employee.md) 
</div>
</div>

<div class="row searchable" id="details.salesRetFromDocCode">
<div class="cell" data-label="Property">details.salesRetFromDocCode</div>
<div class="cell" data-label="Column">salesRetFromDocCode</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.shippingAddress.address1">
<div class="cell" data-label="Property">details.shippingAddress.address1</div>
<div class="cell" data-label="Column">shippingAddressAddress1</div>
<div class="cell" data-label="Arabic">عنوان 1</div>
<div class="cell" data-label="English">Address 1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.shippingAddress.address2">
<div class="cell" data-label="Property">details.shippingAddress.address2</div>
<div class="cell" data-label="Column">shippingAddressAddress2</div>
<div class="cell" data-label="Arabic">رقم المبني</div>
<div class="cell" data-label="English">Building Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.shippingAddress.area">
<div class="cell" data-label="Property">details.shippingAddress.area</div>
<div class="cell" data-label="Column">shippingAddressArea</div>
<div class="cell" data-label="Arabic">المنطقة</div>
<div class="cell" data-label="English">Area</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.shippingAddress.buildingNumber">
<div class="cell" data-label="Property">details.shippingAddress.buildingNumber</div>
<div class="cell" data-label="Column">shippingAddressBuildingNumber</div>
<div class="cell" data-label="Arabic">رقم المبني</div>
<div class="cell" data-label="English">Building Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.shippingAddress.city">
<div class="cell" data-label="Property">details.shippingAddress.city</div>
<div class="cell" data-label="Column">shippingAddressCity</div>
<div class="cell" data-label="Arabic">المدينة</div>
<div class="cell" data-label="English">City</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.shippingAddress.country">
<div class="cell" data-label="Property">details.shippingAddress.country</div>
<div class="cell" data-label="Column">shippingAddressCountry</div>
<div class="cell" data-label="Arabic">الدولة</div>
<div class="cell" data-label="English">Country</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.shippingAddress.countryCode">
<div class="cell" data-label="Property">details.shippingAddress.countryCode</div>
<div class="cell" data-label="Column">shippingAddressCountryCode</div>
<div class="cell" data-label="Arabic">كود الدولة</div>
<div class="cell" data-label="English">Country Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.shippingAddress.district">
<div class="cell" data-label="Property">details.shippingAddress.district</div>
<div class="cell" data-label="Column">shippingAddressDistrict</div>
<div class="cell" data-label="Arabic">الحي</div>
<div class="cell" data-label="English">District</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.shippingAddress.landPlotNumber">
<div class="cell" data-label="Property">details.shippingAddress.landPlotNumber</div>
<div class="cell" data-label="Column">shippingAddressLandPlotNumber</div>
<div class="cell" data-label="Arabic">رقم تعريفي للأرض</div>
<div class="cell" data-label="English">Land Plot Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.shippingAddress.mapLocation">
<div class="cell" data-label="Property">details.shippingAddress.mapLocation</div>
<div class="cell" data-label="Column">shippingAddressMapLocation</div>
<div class="cell" data-label="Arabic">الموقع على الخريطة</div>
<div class="cell" data-label="English">Map Location</div>
<div class="cell" data-label="Type">LatLng</div>

</div>

<div class="row searchable" id="details.shippingAddress.postalCode">
<div class="cell" data-label="Property">details.shippingAddress.postalCode</div>
<div class="cell" data-label="Column">shippingAddressPostalCode</div>
<div class="cell" data-label="Arabic">الكود البريدي</div>
<div class="cell" data-label="English">Postal Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.shippingAddress.region">
<div class="cell" data-label="Property">details.shippingAddress.region</div>
<div class="cell" data-label="Column">shippingAddressRegion_id</div>
<div class="cell" data-label="Arabic">منطقة جغرافيه</div>
<div class="cell" data-label="English">Region</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AddressRegion](/modules/basic/AddressRegion.md) 
</div>
</div>

<div class="row searchable" id="details.shippingAddress.state">
<div class="cell" data-label="Property">details.shippingAddress.state</div>
<div class="cell" data-label="Column">shippingAddressState</div>
<div class="cell" data-label="Arabic">المحافظة</div>
<div class="cell" data-label="English">State</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.shippingAddress.street">
<div class="cell" data-label="Property">details.shippingAddress.street</div>
<div class="cell" data-label="Column">shippingAddressStreet</div>
<div class="cell" data-label="Arabic"> شارع</div>
<div class="cell" data-label="English"> Street</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.subsidiary">
<div class="cell" data-label="Property">details.subsidiary</div>
<div class="cell gen-ref-column" data-label="Column">subsidiaryActualCode,  subsidiaryCode,  subsidiaryEntityType,  subsidiaryId</div>
<div class="cell" data-label="Arabic">الذمة</div>
<div class="cell" data-label="English">Subsidiary</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.valueDate">
<div class="cell" data-label="Property">details.valueDate</div>
<div class="cell" data-label="Column">valueDate</div>
<div class="cell" data-label="Arabic">التاريخ الفعلي</div>
<div class="cell" data-label="English">Value Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.voiceAttachment">
<div class="cell" data-label="Property">details.voiceAttachment</div>
<div class="cell" data-label="Column">voiceAttachment_id</div>
<div class="cell" data-label="Arabic">مرفق صوتى</div>
<div class="cell" data-label="English">voice Attachment</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/modules/system-tables/LargeData.md) 
</div>
</div>


</div>
</div>

<div id='timeCheckLines' title='timeCheckLines' class='searchable'>

## timeCheckLines (متابعة خروج ورجوع المندوب - Courier Check In And Out)

<div class='tableName'>

**Table Name:** MobDeliveryTimeCheckLine, **Join Column:** mobDeliveryDoc_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="timeCheckLines.attendanceLocation.address1">
<div class="cell" data-label="Property">timeCheckLines.attendanceLocation.address1</div>
<div class="cell" data-label="Column">attAddress1</div>
<div class="cell" data-label="Arabic">عنوان 1</div>
<div class="cell" data-label="English">Address 1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="timeCheckLines.attendanceLocation.address2">
<div class="cell" data-label="Property">timeCheckLines.attendanceLocation.address2</div>
<div class="cell" data-label="Column">attAddress2</div>
<div class="cell" data-label="Arabic">رقم المبني</div>
<div class="cell" data-label="English">Building Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="timeCheckLines.attendanceLocation.area">
<div class="cell" data-label="Property">timeCheckLines.attendanceLocation.area</div>
<div class="cell" data-label="Column">attArea</div>
<div class="cell" data-label="Arabic">المنطقة</div>
<div class="cell" data-label="English">Area</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="timeCheckLines.attendanceLocation.buildingNumber">
<div class="cell" data-label="Property">timeCheckLines.attendanceLocation.buildingNumber</div>
<div class="cell" data-label="Column">attBuildingNumber</div>
<div class="cell" data-label="Arabic">رقم المبني</div>
<div class="cell" data-label="English">Building Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="timeCheckLines.attendanceLocation.city">
<div class="cell" data-label="Property">timeCheckLines.attendanceLocation.city</div>
<div class="cell" data-label="Column">attCity</div>
<div class="cell" data-label="Arabic">المدينة</div>
<div class="cell" data-label="English">City</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="timeCheckLines.attendanceLocation.country">
<div class="cell" data-label="Property">timeCheckLines.attendanceLocation.country</div>
<div class="cell" data-label="Column">attCountry</div>
<div class="cell" data-label="Arabic">الدولة</div>
<div class="cell" data-label="English">Country</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="timeCheckLines.attendanceLocation.countryCode">
<div class="cell" data-label="Property">timeCheckLines.attendanceLocation.countryCode</div>
<div class="cell" data-label="Column">attCountryCode</div>
<div class="cell" data-label="Arabic">كود الدولة</div>
<div class="cell" data-label="English">Country Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="timeCheckLines.attendanceLocation.district">
<div class="cell" data-label="Property">timeCheckLines.attendanceLocation.district</div>
<div class="cell" data-label="Column">attDistrict</div>
<div class="cell" data-label="Arabic">الحي</div>
<div class="cell" data-label="English">District</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="timeCheckLines.attendanceLocation.landPlotNumber">
<div class="cell" data-label="Property">timeCheckLines.attendanceLocation.landPlotNumber</div>
<div class="cell" data-label="Column">attLandPlotNumber</div>
<div class="cell" data-label="Arabic">رقم تعريفي للأرض</div>
<div class="cell" data-label="English">Land Plot Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="timeCheckLines.attendanceLocation.mapLocation">
<div class="cell" data-label="Property">timeCheckLines.attendanceLocation.mapLocation</div>
<div class="cell" data-label="Column">attMapLocation</div>
<div class="cell" data-label="Arabic">الموقع على الخريطة</div>
<div class="cell" data-label="English">Map Location</div>
<div class="cell" data-label="Type">LatLng</div>

</div>

<div class="row searchable" id="timeCheckLines.attendanceLocation.postalCode">
<div class="cell" data-label="Property">timeCheckLines.attendanceLocation.postalCode</div>
<div class="cell" data-label="Column">attPostalCode</div>
<div class="cell" data-label="Arabic">الكود البريدي</div>
<div class="cell" data-label="English">Postal Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="timeCheckLines.attendanceLocation.region">
<div class="cell" data-label="Property">timeCheckLines.attendanceLocation.region</div>
<div class="cell" data-label="Column">attRegion_id</div>
<div class="cell" data-label="Arabic">منطقة جغرافيه</div>
<div class="cell" data-label="English">Region</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AddressRegion](/modules/basic/AddressRegion.md) 
</div>
</div>

<div class="row searchable" id="timeCheckLines.attendanceLocation.state">
<div class="cell" data-label="Property">timeCheckLines.attendanceLocation.state</div>
<div class="cell" data-label="Column">attState</div>
<div class="cell" data-label="Arabic">المحافظة</div>
<div class="cell" data-label="English">State</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="timeCheckLines.attendanceLocation.street">
<div class="cell" data-label="Property">timeCheckLines.attendanceLocation.street</div>
<div class="cell" data-label="Column">attStreet</div>
<div class="cell" data-label="Arabic"> شارع</div>
<div class="cell" data-label="English"> Street</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="timeCheckLines.courier">
<div class="cell" data-label="Property">timeCheckLines.courier</div>
<div class="cell" data-label="Column">courier_id</div>
<div class="cell" data-label="Arabic">مندوب التوزيع</div>
<div class="cell" data-label="English">Courier</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/modules/basic/Employee.md) 
</div>
</div>

<div class="row searchable" id="timeCheckLines.deliverTo">
<div class="cell" data-label="Property">timeCheckLines.deliverTo</div>
<div class="cell gen-ref-column" data-label="Column">deliverToActualCode,  deliverToCode,  deliverToEntityType,  deliverToId</div>
<div class="cell" data-label="Arabic"> العميل</div>
<div class="cell" data-label="English"> Customer</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="timeCheckLines.departureLocation.address1">
<div class="cell" data-label="Property">timeCheckLines.departureLocation.address1</div>
<div class="cell" data-label="Column">departAddress1</div>
<div class="cell" data-label="Arabic">عنوان 1</div>
<div class="cell" data-label="English">Address 1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="timeCheckLines.departureLocation.address2">
<div class="cell" data-label="Property">timeCheckLines.departureLocation.address2</div>
<div class="cell" data-label="Column">departAddress2</div>
<div class="cell" data-label="Arabic">رقم المبني</div>
<div class="cell" data-label="English">Building Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="timeCheckLines.departureLocation.area">
<div class="cell" data-label="Property">timeCheckLines.departureLocation.area</div>
<div class="cell" data-label="Column">departArea</div>
<div class="cell" data-label="Arabic">المنطقة</div>
<div class="cell" data-label="English">Area</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="timeCheckLines.departureLocation.buildingNumber">
<div class="cell" data-label="Property">timeCheckLines.departureLocation.buildingNumber</div>
<div class="cell" data-label="Column">departBuildingNumber</div>
<div class="cell" data-label="Arabic">رقم المبني</div>
<div class="cell" data-label="English">Building Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="timeCheckLines.departureLocation.city">
<div class="cell" data-label="Property">timeCheckLines.departureLocation.city</div>
<div class="cell" data-label="Column">departCity</div>
<div class="cell" data-label="Arabic">المدينة</div>
<div class="cell" data-label="English">City</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="timeCheckLines.departureLocation.country">
<div class="cell" data-label="Property">timeCheckLines.departureLocation.country</div>
<div class="cell" data-label="Column">departCountry</div>
<div class="cell" data-label="Arabic">الدولة</div>
<div class="cell" data-label="English">Country</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="timeCheckLines.departureLocation.countryCode">
<div class="cell" data-label="Property">timeCheckLines.departureLocation.countryCode</div>
<div class="cell" data-label="Column">departCountryCode</div>
<div class="cell" data-label="Arabic">كود الدولة</div>
<div class="cell" data-label="English">Country Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="timeCheckLines.departureLocation.district">
<div class="cell" data-label="Property">timeCheckLines.departureLocation.district</div>
<div class="cell" data-label="Column">departDistrict</div>
<div class="cell" data-label="Arabic">الحي</div>
<div class="cell" data-label="English">District</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="timeCheckLines.departureLocation.landPlotNumber">
<div class="cell" data-label="Property">timeCheckLines.departureLocation.landPlotNumber</div>
<div class="cell" data-label="Column">departLandPlotNumber</div>
<div class="cell" data-label="Arabic">رقم تعريفي للأرض</div>
<div class="cell" data-label="English">Land Plot Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="timeCheckLines.departureLocation.mapLocation">
<div class="cell" data-label="Property">timeCheckLines.departureLocation.mapLocation</div>
<div class="cell" data-label="Column">departMapLocation</div>
<div class="cell" data-label="Arabic">الموقع على الخريطة</div>
<div class="cell" data-label="English">Map Location</div>
<div class="cell" data-label="Type">LatLng</div>

</div>

<div class="row searchable" id="timeCheckLines.departureLocation.postalCode">
<div class="cell" data-label="Property">timeCheckLines.departureLocation.postalCode</div>
<div class="cell" data-label="Column">departPostalCode</div>
<div class="cell" data-label="Arabic">الكود البريدي</div>
<div class="cell" data-label="English">Postal Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="timeCheckLines.departureLocation.region">
<div class="cell" data-label="Property">timeCheckLines.departureLocation.region</div>
<div class="cell" data-label="Column">departRegion_id</div>
<div class="cell" data-label="Arabic">منطقة جغرافيه</div>
<div class="cell" data-label="English">Region</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AddressRegion](/modules/basic/AddressRegion.md) 
</div>
</div>

<div class="row searchable" id="timeCheckLines.departureLocation.state">
<div class="cell" data-label="Property">timeCheckLines.departureLocation.state</div>
<div class="cell" data-label="Column">departState</div>
<div class="cell" data-label="Arabic">المحافظة</div>
<div class="cell" data-label="English">State</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="timeCheckLines.departureLocation.street">
<div class="cell" data-label="Property">timeCheckLines.departureLocation.street</div>
<div class="cell" data-label="Column">departStreet</div>
<div class="cell" data-label="Arabic"> شارع</div>
<div class="cell" data-label="English"> Street</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="timeCheckLines.fromDate">
<div class="cell" data-label="Property">timeCheckLines.fromDate</div>
<div class="cell" data-label="Column">fromDate</div>
<div class="cell" data-label="Arabic">من تاريخ</div>
<div class="cell" data-label="English">From Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="timeCheckLines.fromDateTime">
<div class="cell" data-label="Property">timeCheckLines.fromDateTime</div>
<div class="cell" data-label="Column">fromDateTime</div>
<div class="cell" data-label="Arabic">من تاريخ - وقت</div>
<div class="cell" data-label="English">From Date Time</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="timeCheckLines.fromTime">
<div class="cell" data-label="Property">timeCheckLines.fromTime</div>
<div class="cell" data-label="Column">fromTime</div>
<div class="cell" data-label="Arabic">من وقت</div>
<div class="cell" data-label="English">From-Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="timeCheckLines.id">
<div class="cell" data-label="Property">timeCheckLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="timeCheckLines.isCheckIn">
<div class="cell" data-label="Property">timeCheckLines.isCheckIn</div>
<div class="cell" data-label="Column">isCheckIn</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="timeCheckLines.lineNumber">
<div class="cell" data-label="Property">timeCheckLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="timeCheckLines.mobDoc">
<div class="cell" data-label="Property">timeCheckLines.mobDoc</div>
<div class="cell gen-ref-column" data-label="Column">mobDocActualCode,  mobDocCode,  mobDocEntityType,  mobDocId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="timeCheckLines.toDate">
<div class="cell" data-label="Property">timeCheckLines.toDate</div>
<div class="cell" data-label="Column">toDate</div>
<div class="cell" data-label="Arabic">إلى تاريخ</div>
<div class="cell" data-label="English">To Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="timeCheckLines.toDateTime">
<div class="cell" data-label="Property">timeCheckLines.toDateTime</div>
<div class="cell" data-label="Column">toDateTime</div>
<div class="cell" data-label="Arabic">إلى تاريخ - وقت</div>
<div class="cell" data-label="English">To Date Time</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="timeCheckLines.toTime">
<div class="cell" data-label="Property">timeCheckLines.toTime</div>
<div class="cell" data-label="Column">toTime</div>
<div class="cell" data-label="Arabic">إلى وقت</div>
<div class="cell" data-label="English">To-Time</div>
<div class="cell" data-label="Type">Time</div>

</div>


</div>
</div>

