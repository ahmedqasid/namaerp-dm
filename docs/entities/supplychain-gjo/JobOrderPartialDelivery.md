# JobOrderPartialDelivery
**Arabic:** تسليم جزئي لأمر الشغل - تسليم جزئي لأوامر الشغل
**English:** Job Order Partial Delivery - Job Orders Partial Delivery

<ContentFilter/>


<div class='searchable'>
<a href='#jobBomLines'>jobBomLines (PartialDeliveryBomLine) </a>
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

<div class="row searchable" id="customer">
<div class="cell" data-label="Property">customer</div>
<div class="cell" data-label="Column">customer_id</div>
<div class="cell" data-label="Arabic">العميل</div>
<div class="cell" data-label="English">Customer</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Customer](/entities/basic/Customer.md) 
</div>
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

<div class="row searchable" id="jobOrder">
<div class="cell" data-label="Property">jobOrder</div>
<div class="cell" data-label="Column">jobOrder_id</div>
<div class="cell" data-label="Arabic">أمر الشغل</div>
<div class="cell" data-label="English">Job Order</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [GlassJobOrder](/entities/supplychain-gjo/GlassJobOrder.md) 
</div>
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

<div class="row searchable" id="text1">
<div class="cell" data-label="Property">text1</div>
<div class="cell" data-label="Column">text1</div>
<div class="cell" data-label="Arabic">نــــص 1</div>
<div class="cell" data-label="English">Text 1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="text2">
<div class="cell" data-label="Property">text2</div>
<div class="cell" data-label="Column">text2</div>
<div class="cell" data-label="Arabic">نـــــص 2</div>
<div class="cell" data-label="English">Text 2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="text3">
<div class="cell" data-label="Property">text3</div>
<div class="cell" data-label="Column">text3</div>
<div class="cell" data-label="Arabic">نص 3</div>
<div class="cell" data-label="English">text3</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="text4">
<div class="cell" data-label="Property">text4</div>
<div class="cell" data-label="Column">text4</div>
<div class="cell" data-label="Arabic">نص 4</div>
<div class="cell" data-label="English">text4</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="text5">
<div class="cell" data-label="Property">text5</div>
<div class="cell" data-label="Column">text5</div>
<div class="cell" data-label="Arabic">نص 5</div>
<div class="cell" data-label="English">text5</div>
<div class="cell" data-label="Type">Text</div>

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

<div id='jobBomLines' title='jobBomLines' class='searchable'>

## jobBomLines ( - )
**Table Name:** PartialDeliveryBomLine, **Join Column:** jobOrderPartialDelivery_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="jobBomLines.activeDoc">
<div class="cell" data-label="Property">jobBomLines.activeDoc</div>
<div class="cell" data-label="Column">activeDoc</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="jobBomLines.addedFreeInvoiceValue">
<div class="cell" data-label="Property">jobBomLines.addedFreeInvoiceValue</div>
<div class="cell" data-label="Column">addedFreeInvoiceValue</div>
<div class="cell" data-label="Arabic">نصيب السطر من مجاني الفاتورة</div>
<div class="cell" data-label="English">Invoice Free Share</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.addedFreeLineValue">
<div class="cell" data-label="Property">jobBomLines.addedFreeLineValue</div>
<div class="cell" data-label="Column">addedFreeLineValue</div>
<div class="cell" data-label="Arabic">تكلفة المجاني</div>
<div class="cell" data-label="English">Item Free Share</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.allowOverdraft">
<div class="cell" data-label="Property">jobBomLines.allowOverdraft</div>
<div class="cell" data-label="Column">allowOverdraft</div>
<div class="cell" data-label="Arabic">السماح بالسحب على المكشوف</div>
<div class="cell" data-label="English">Allow Overdraft</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="jobBomLines.attachment">
<div class="cell" data-label="Property">jobBomLines.attachment</div>
<div class="cell" data-label="Column">attachment_id</div>
<div class="cell" data-label="Arabic">مرفق</div>
<div class="cell" data-label="English">Attachment</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/entities/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="jobBomLines.b1">
<div class="cell" data-label="Property">jobBomLines.b1</div>
<div class="cell" data-label="Column">b1</div>
<div class="cell" data-label="Arabic">Boolean 1</div>
<div class="cell" data-label="English">Boolean 1</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="jobBomLines.b2">
<div class="cell" data-label="Property">jobBomLines.b2</div>
<div class="cell" data-label="Column">b2</div>
<div class="cell" data-label="Arabic">Boolean 2</div>
<div class="cell" data-label="English">Boolean 2</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="jobBomLines.b3">
<div class="cell" data-label="Property">jobBomLines.b3</div>
<div class="cell" data-label="Column">b3</div>
<div class="cell" data-label="Arabic">Boolean 3</div>
<div class="cell" data-label="English">Boolean 3</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="jobBomLines.calculationFormula">
<div class="cell" data-label="Property">jobBomLines.calculationFormula</div>
<div class="cell" data-label="Column">calculationFormula_id</div>
<div class="cell" data-label="Arabic"> الصيغة الحسابية</div>
<div class="cell" data-label="English"> Calculation Formula</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CalculationFormula](/entities/supplychain/CalculationFormula.md) 
</div>
</div>

<div class="row searchable" id="jobBomLines.canceledDeliveredQty">
<div class="cell" data-label="Property">jobBomLines.canceledDeliveredQty</div>
<div class="cell" data-label="Column">canceledDeliveredQty</div>
<div class="cell" data-label="Arabic">كمية التوصيل المُلغاة</div>
<div class="cell" data-label="English">Canceled Delivered Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.canceledReservedQty">
<div class="cell" data-label="Property">jobBomLines.canceledReservedQty</div>
<div class="cell" data-label="Column">canceledReservedQty</div>
<div class="cell" data-label="Arabic">كمية الحجز المُلغاة</div>
<div class="cell" data-label="English">Canceled Reserved Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.car">
<div class="cell" data-label="Property">jobBomLines.car</div>
<div class="cell" data-label="Column">car_id</div>
<div class="cell" data-label="Arabic">السيارة</div>
<div class="cell" data-label="English">Car</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DeliveryCar](/entities/basic/DeliveryCar.md) 
</div>
</div>

<div class="row searchable" id="jobBomLines.circular">
<div class="cell" data-label="Property">jobBomLines.circular</div>
<div class="cell" data-label="Column">circular</div>
<div class="cell" data-label="Arabic">دائري</div>
<div class="cell" data-label="English">Circular</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="jobBomLines.colorName">
<div class="cell" data-label="Property">jobBomLines.colorName</div>
<div class="cell" data-label="Column">colorName</div>
<div class="cell" data-label="Arabic">اسم اللون</div>
<div class="cell" data-label="English">Color Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="jobBomLines.comp">
<div class="cell" data-label="Property">jobBomLines.comp</div>
<div class="cell" data-label="Column">comp_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AssemblyComponent](/entities/supplychain-assembly/AssemblyComponent.md) 
</div>
</div>

<div class="row searchable" id="jobBomLines.component">
<div class="cell" data-label="Property">jobBomLines.component</div>
<div class="cell" data-label="Column">component_id</div>
<div class="cell" data-label="Arabic">مكون</div>
<div class="cell" data-label="English">Component</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AssemblyComponent](/entities/supplychain-assembly/AssemblyComponent.md) 
</div>
</div>

<div class="row searchable" id="jobBomLines.customer">
<div class="cell" data-label="Property">jobBomLines.customer</div>
<div class="cell" data-label="Column">customer_id</div>
<div class="cell" data-label="Arabic">العميل</div>
<div class="cell" data-label="English">Customer</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Customer](/entities/basic/Customer.md) 
</div>
</div>

<div class="row searchable" id="jobBomLines.date1">
<div class="cell" data-label="Property">jobBomLines.date1</div>
<div class="cell" data-label="Column">date1</div>
<div class="cell" data-label="Arabic">تـــاريخ 1</div>
<div class="cell" data-label="English">Date 1</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="jobBomLines.deleteOnSave">
<div class="cell" data-label="Property">jobBomLines.deleteOnSave</div>
<div class="cell" data-label="Column">deleteOnSave</div>
<div class="cell" data-label="Arabic">مسح عند الحفظ</div>
<div class="cell" data-label="English">Delete On Save</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="jobBomLines.delivStatus">
<div class="cell" data-label="Property">jobBomLines.delivStatus</div>
<div class="cell" data-label="Column">delivStatus</div>
<div class="cell" data-label="Arabic">حالة التوصيل</div>
<div class="cell" data-label="English">deliveryStatus</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="jobBomLines.deliveringQty">
<div class="cell" data-label="Property">jobBomLines.deliveringQty</div>
<div class="cell" data-label="Column">deliveringQty</div>
<div class="cell" data-label="Arabic">الكمية الجاري توصيلها</div>
<div class="cell" data-label="English">Delivering Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.deliveryDate">
<div class="cell" data-label="Property">jobBomLines.deliveryDate</div>
<div class="cell" data-label="Column">deliveryDate</div>
<div class="cell" data-label="Arabic">تاريخ التوصيل</div>
<div class="cell" data-label="English">Delivery Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="jobBomLines.deliveryRate.period.uom">
<div class="cell" data-label="Property">jobBomLines.deliveryRate.period.uom</div>
<div class="cell" data-label="Column">drPeriodUom</div>
<div class="cell" data-label="Arabic">معدل التوريد|نوع الفترة</div>
<div class="cell" data-label="English">Delivery Rate|Period Unit</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="jobBomLines.deliveryRate.period.value">
<div class="cell" data-label="Property">jobBomLines.deliveryRate.period.value</div>
<div class="cell" data-label="Column">drPeriodValue</div>
<div class="cell" data-label="Arabic">معدل التوريد | الفترة</div>
<div class="cell" data-label="English">Delivery Rate|Period Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.deliveryRate.qty">
<div class="cell" data-label="Property">jobBomLines.deliveryRate.qty</div>
<div class="cell" data-label="Column">drQty</div>
<div class="cell" data-label="Arabic">معدل التوريد|الكمية</div>
<div class="cell" data-label="English">Delivery Rate|Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.deliveryRate.startDate">
<div class="cell" data-label="Property">jobBomLines.deliveryRate.startDate</div>
<div class="cell" data-label="Column">drStartDate</div>
<div class="cell" data-label="Arabic">معدل التوريد|تاريخ البداية</div>
<div class="cell" data-label="English">Delivery Rate|Start Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="jobBomLines.deliveryTime">
<div class="cell" data-label="Property">jobBomLines.deliveryTime</div>
<div class="cell" data-label="Column">deliveryTime</div>
<div class="cell" data-label="Arabic">وقت التوصيل</div>
<div class="cell" data-label="English">Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="jobBomLines.description">
<div class="cell" data-label="Property">jobBomLines.description</div>
<div class="cell" data-label="Column">description</div>
<div class="cell" data-label="Arabic">الوصف</div>
<div class="cell" data-label="English">Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="jobBomLines.documentId">
<div class="cell" data-label="Property">jobBomLines.documentId</div>
<div class="cell" data-label="Column">documentId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="jobBomLines.driver">
<div class="cell" data-label="Property">jobBomLines.driver</div>
<div class="cell" data-label="Column">driver_id</div>
<div class="cell" data-label="Arabic">السائق</div>
<div class="cell" data-label="English">Driver</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/entities/basic/Employee.md) 
</div>
</div>

<div class="row searchable" id="jobBomLines.emptyWeight">
<div class="cell" data-label="Property">jobBomLines.emptyWeight</div>
<div class="cell" data-label="Column">emptyWeight</div>
<div class="cell" data-label="Arabic">وزن الفارغ</div>
<div class="cell" data-label="English">Empty Weight</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.expiryDate">
<div class="cell" data-label="Property">jobBomLines.expiryDate</div>
<div class="cell" data-label="Column">expiryDate</div>
<div class="cell" data-label="Arabic">تاريخ الإنتهاء</div>
<div class="cell" data-label="English">Expiry Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="jobBomLines.freeFromItemsCountOffer">
<div class="cell" data-label="Property">jobBomLines.freeFromItemsCountOffer</div>
<div class="cell" data-label="Column">freeFromItemsCountOffer</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="jobBomLines.freeGroupId">
<div class="cell" data-label="Property">jobBomLines.freeGroupId</div>
<div class="cell" data-label="Column">freeGroupId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="jobBomLines.freeItemGroup">
<div class="cell" data-label="Property">jobBomLines.freeItemGroup</div>
<div class="cell" data-label="Column">freeItemGroup_id</div>
<div class="cell" data-label="Arabic">مجموعة أصناف مجانية</div>
<div class="cell" data-label="English">Free Item Group</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FreeItemGroup](/entities/supplychain-sales/FreeItemGroup.md) 
</div>
</div>

<div class="row searchable" id="jobBomLines.freeItemId">
<div class="cell" data-label="Property">jobBomLines.freeItemId</div>
<div class="cell" data-label="Column">freeItemId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="jobBomLines.freeLine">
<div class="cell" data-label="Property">jobBomLines.freeLine</div>
<div class="cell" data-label="Column">freeLine</div>
<div class="cell" data-label="Arabic"> صنف مجاني</div>
<div class="cell" data-label="English"> Free Item</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="jobBomLines.freeOfferLineId">
<div class="cell" data-label="Property">jobBomLines.freeOfferLineId</div>
<div class="cell" data-label="Column">freeOfferLineId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="jobBomLines.genericDimensions.analysisSet">
<div class="cell" data-label="Property">jobBomLines.genericDimensions.analysisSet</div>
<div class="cell" data-label="Column">analysisSet_id</div>
<div class="cell" data-label="Arabic">المجموعة التحليلية</div>
<div class="cell" data-label="English">Analysis set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/entities/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="jobBomLines.genericDimensions.branch">
<div class="cell" data-label="Property">jobBomLines.genericDimensions.branch</div>
<div class="cell" data-label="Column">branch_id</div>
<div class="cell" data-label="Arabic">الفرع</div>
<div class="cell" data-label="English">Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/entities/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="jobBomLines.genericDimensions.department">
<div class="cell" data-label="Property">jobBomLines.genericDimensions.department</div>
<div class="cell" data-label="Column">department_id</div>
<div class="cell" data-label="Arabic">الإدارة</div>
<div class="cell" data-label="English">Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/entities/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="jobBomLines.genericDimensions.legalEntity">
<div class="cell" data-label="Property">jobBomLines.genericDimensions.legalEntity</div>
<div class="cell" data-label="Column">legalEntity_id</div>
<div class="cell" data-label="Arabic">الشركة</div>
<div class="cell" data-label="English">Legal Entity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [LegalEntity](/entities/basic/LegalEntity.md) 
</div>
</div>

<div class="row searchable" id="jobBomLines.genericDimensions.sector">
<div class="cell" data-label="Property">jobBomLines.genericDimensions.sector</div>
<div class="cell" data-label="Column">sector_id</div>
<div class="cell" data-label="Arabic">القطاع</div>
<div class="cell" data-label="English">Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/entities/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="jobBomLines.grossWeight">
<div class="cell" data-label="Property">jobBomLines.grossWeight</div>
<div class="cell" data-label="Column">grossWeight</div>
<div class="cell" data-label="Arabic">الوزن القائم</div>
<div class="cell" data-label="English">Gross Weight</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.id">
<div class="cell" data-label="Property">jobBomLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="jobBomLines.inPoints">
<div class="cell" data-label="Property">jobBomLines.inPoints</div>
<div class="cell" data-label="Column">inPoints</div>
<div class="cell" data-label="Arabic">بالنقاط</div>
<div class="cell" data-label="English">in points</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="jobBomLines.installed">
<div class="cell" data-label="Property">jobBomLines.installed</div>
<div class="cell" data-label="Column">installed</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="jobBomLines.invoiceOfferID">
<div class="cell" data-label="Property">jobBomLines.invoiceOfferID</div>
<div class="cell" data-label="Column">invoiceOfferID</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="jobBomLines.item.item">
<div class="cell" data-label="Property">jobBomLines.item.item</div>
<div class="cell" data-label="Column">item_id</div>
<div class="cell" data-label="Arabic">الصنف</div>
<div class="cell" data-label="English">Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/entities/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="jobBomLines.item.itemCode">
<div class="cell" data-label="Property">jobBomLines.item.itemCode</div>
<div class="cell" data-label="Column">itemCode</div>
<div class="cell" data-label="Arabic"> الكود</div>
<div class="cell" data-label="English"> Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="jobBomLines.item.itemName1">
<div class="cell" data-label="Property">jobBomLines.item.itemName1</div>
<div class="cell" data-label="Column">itemName1</div>
<div class="cell" data-label="Arabic">اسم الصنف</div>
<div class="cell" data-label="English">Item Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="jobBomLines.item.itemName2">
<div class="cell" data-label="Property">jobBomLines.item.itemName2</div>
<div class="cell" data-label="Column">itemName2</div>
<div class="cell" data-label="Arabic">اسم الصنف الإنجليزي</div>
<div class="cell" data-label="English">Item English Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="jobBomLines.itemNumber">
<div class="cell" data-label="Property">jobBomLines.itemNumber</div>
<div class="cell" data-label="Column">itemNumber</div>
<div class="cell" data-label="Arabic">رقم القطعة</div>
<div class="cell" data-label="English">Item Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="jobBomLines.l2">
<div class="cell" data-label="Property">jobBomLines.l2</div>
<div class="cell" data-label="Column">l2</div>
<div class="cell" data-label="Arabic">ط2</div>
<div class="cell" data-label="English">L2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.lineId">
<div class="cell" data-label="Property">jobBomLines.lineId</div>
<div class="cell" data-label="Column">lineId</div>
<div class="cell" data-label="Arabic">م</div>
<div class="cell" data-label="English">S</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="jobBomLines.lineNumber">
<div class="cell" data-label="Property">jobBomLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="jobBomLines.masterRowId">
<div class="cell" data-label="Property">jobBomLines.masterRowId</div>
<div class="cell" data-label="Column">masterRowId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="jobBomLines.n1">
<div class="cell" data-label="Property">jobBomLines.n1</div>
<div class="cell" data-label="Column">n1</div>
<div class="cell" data-label="Arabic">رقم 1</div>
<div class="cell" data-label="English">Number 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.n2">
<div class="cell" data-label="Property">jobBomLines.n2</div>
<div class="cell" data-label="Column">n2</div>
<div class="cell" data-label="Arabic">رقم 2</div>
<div class="cell" data-label="English">Number 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.n3">
<div class="cell" data-label="Property">jobBomLines.n3</div>
<div class="cell" data-label="Column">n3</div>
<div class="cell" data-label="Arabic">رقم 3</div>
<div class="cell" data-label="English">Number 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.orginDoc">
<div class="cell" data-label="Property">jobBomLines.orginDoc</div>
<div class="cell gen-ref-column" data-label="Column">orginDocActualCode,  orginDocCode,  orginDocEntityType,  orginDocId</div>
<div class="cell" data-label="Arabic">تم النسخ من سند</div>
<div class="cell" data-label="English">Copied From Doc</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="jobBomLines.pickLineId">
<div class="cell" data-label="Property">jobBomLines.pickLineId</div>
<div class="cell" data-label="Column">pickLineId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="jobBomLines.price.custom">
<div class="cell" data-label="Property">jobBomLines.price.custom</div>
<div class="cell" data-label="Column">custom</div>
<div class="cell" data-label="Arabic">مخصص</div>
<div class="cell" data-label="English">Custom</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.discount1.afterValue">
<div class="cell" data-label="Property">jobBomLines.price.discount1.afterValue</div>
<div class="cell" data-label="Column">dis1AfterValue</div>
<div class="cell" data-label="Arabic">خصم 1 | صافي</div>
<div class="cell" data-label="English">Discount 1 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.discount1.maxNormalPercent">
<div class="cell" data-label="Property">jobBomLines.price.discount1.maxNormalPercent</div>
<div class="cell" data-label="Column">dis1MaxNormalPercent</div>
<div class="cell" data-label="Arabic">خصم 1 | النسبة العادية</div>
<div class="cell" data-label="English">Discount 1 | Normal Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.discount1.percentage">
<div class="cell" data-label="Property">jobBomLines.price.discount1.percentage</div>
<div class="cell" data-label="Column">dis1Percentage</div>
<div class="cell" data-label="Arabic">خصم 1 | %</div>
<div class="cell" data-label="English">Discount 1 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.discount1.value">
<div class="cell" data-label="Property">jobBomLines.price.discount1.value</div>
<div class="cell" data-label="Column">dis1Value</div>
<div class="cell" data-label="Arabic">خصم 1 | قيمة</div>
<div class="cell" data-label="English">Discount 1 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.discount2.afterValue">
<div class="cell" data-label="Property">jobBomLines.price.discount2.afterValue</div>
<div class="cell" data-label="Column">dis2AfterValue</div>
<div class="cell" data-label="Arabic">خصم 2 | صافي</div>
<div class="cell" data-label="English">Discount 2 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.discount2.maxNormalPercent">
<div class="cell" data-label="Property">jobBomLines.price.discount2.maxNormalPercent</div>
<div class="cell" data-label="Column">dis2MaxNormalPercent</div>
<div class="cell" data-label="Arabic">خصم 2 | النسبة العادية</div>
<div class="cell" data-label="English">Discount 2 | Normal Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.discount2.percentage">
<div class="cell" data-label="Property">jobBomLines.price.discount2.percentage</div>
<div class="cell" data-label="Column">dis2Percentage</div>
<div class="cell" data-label="Arabic">خصم 2 | %</div>
<div class="cell" data-label="English">Discount 2 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.discount2.value">
<div class="cell" data-label="Property">jobBomLines.price.discount2.value</div>
<div class="cell" data-label="Column">dis2Value</div>
<div class="cell" data-label="Arabic">خصم 2 | قيمة</div>
<div class="cell" data-label="English">Discount 2 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.discount3.afterValue">
<div class="cell" data-label="Property">jobBomLines.price.discount3.afterValue</div>
<div class="cell" data-label="Column">dis3AfterValue</div>
<div class="cell" data-label="Arabic">خصم 3 | صافي</div>
<div class="cell" data-label="English">Discount 3 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.discount3.maxNormalPercent">
<div class="cell" data-label="Property">jobBomLines.price.discount3.maxNormalPercent</div>
<div class="cell" data-label="Column">dis3MaxNormalPercent</div>
<div class="cell" data-label="Arabic">خصم 3 | النسبة العادية</div>
<div class="cell" data-label="English">Discount 3 | Normal Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.discount3.percentage">
<div class="cell" data-label="Property">jobBomLines.price.discount3.percentage</div>
<div class="cell" data-label="Column">dis3Percentage</div>
<div class="cell" data-label="Arabic">خصم 3 | %</div>
<div class="cell" data-label="English">Discount 3 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.discount3.value">
<div class="cell" data-label="Property">jobBomLines.price.discount3.value</div>
<div class="cell" data-label="Column">dis3Value</div>
<div class="cell" data-label="Arabic">خصم 3 | قيمة</div>
<div class="cell" data-label="English">Discount 3 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.discount4.afterValue">
<div class="cell" data-label="Property">jobBomLines.price.discount4.afterValue</div>
<div class="cell" data-label="Column">dis4AfterValue</div>
<div class="cell" data-label="Arabic">خصم 4 | صافي</div>
<div class="cell" data-label="English">Discount 4 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.discount4.maxNormalPercent">
<div class="cell" data-label="Property">jobBomLines.price.discount4.maxNormalPercent</div>
<div class="cell" data-label="Column">dis4MaxNormalPercent</div>
<div class="cell" data-label="Arabic">خصم 4 | النسبة العادية</div>
<div class="cell" data-label="English">Discount 4 | Normal Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.discount4.percentage">
<div class="cell" data-label="Property">jobBomLines.price.discount4.percentage</div>
<div class="cell" data-label="Column">dis4Percentage</div>
<div class="cell" data-label="Arabic">خصم 4 | %</div>
<div class="cell" data-label="English">Discount 4 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.discount4.value">
<div class="cell" data-label="Property">jobBomLines.price.discount4.value</div>
<div class="cell" data-label="Column">dis4Value</div>
<div class="cell" data-label="Arabic">خصم 4 | قيمة</div>
<div class="cell" data-label="English">Discount 4 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.discount5.afterValue">
<div class="cell" data-label="Property">jobBomLines.price.discount5.afterValue</div>
<div class="cell" data-label="Column">dis5AfterValue</div>
<div class="cell" data-label="Arabic">خصم 5 | صافي</div>
<div class="cell" data-label="English">Discount 5 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.discount5.maxNormalPercent">
<div class="cell" data-label="Property">jobBomLines.price.discount5.maxNormalPercent</div>
<div class="cell" data-label="Column">dis5MaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.discount5.percentage">
<div class="cell" data-label="Property">jobBomLines.price.discount5.percentage</div>
<div class="cell" data-label="Column">dis5Percentage</div>
<div class="cell" data-label="Arabic">خصم 5 | %</div>
<div class="cell" data-label="English">Discount 5 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.discount5.value">
<div class="cell" data-label="Property">jobBomLines.price.discount5.value</div>
<div class="cell" data-label="Column">dis5Value</div>
<div class="cell" data-label="Arabic">خصم 5 | قيمة</div>
<div class="cell" data-label="English">Discount 5 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.discount6.afterValue">
<div class="cell" data-label="Property">jobBomLines.price.discount6.afterValue</div>
<div class="cell" data-label="Column">dis6AfterValue</div>
<div class="cell" data-label="Arabic">خصم 6 | صافي</div>
<div class="cell" data-label="English">Discount 6 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.discount6.maxNormalPercent">
<div class="cell" data-label="Property">jobBomLines.price.discount6.maxNormalPercent</div>
<div class="cell" data-label="Column">dis6MaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.discount6.percentage">
<div class="cell" data-label="Property">jobBomLines.price.discount6.percentage</div>
<div class="cell" data-label="Column">dis6Percentage</div>
<div class="cell" data-label="Arabic">خصم 6 | %</div>
<div class="cell" data-label="English">Discount 6 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.discount6.value">
<div class="cell" data-label="Property">jobBomLines.price.discount6.value</div>
<div class="cell" data-label="Column">dis6Value</div>
<div class="cell" data-label="Arabic">خصم 6 | قيمة</div>
<div class="cell" data-label="English">Discount 6 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.discount7.afterValue">
<div class="cell" data-label="Property">jobBomLines.price.discount7.afterValue</div>
<div class="cell" data-label="Column">dis7AfterValue</div>
<div class="cell" data-label="Arabic">خصم 7 | صافي</div>
<div class="cell" data-label="English">Discount 7 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.discount7.maxNormalPercent">
<div class="cell" data-label="Property">jobBomLines.price.discount7.maxNormalPercent</div>
<div class="cell" data-label="Column">dis7MaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.discount7.percentage">
<div class="cell" data-label="Property">jobBomLines.price.discount7.percentage</div>
<div class="cell" data-label="Column">dis7Percentage</div>
<div class="cell" data-label="Arabic">خصم 7 | %</div>
<div class="cell" data-label="English">Discount 7 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.discount7.value">
<div class="cell" data-label="Property">jobBomLines.price.discount7.value</div>
<div class="cell" data-label="Column">dis7Value</div>
<div class="cell" data-label="Arabic">خصم 7 | قيمة</div>
<div class="cell" data-label="English">Discount 7 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.discount8.afterValue">
<div class="cell" data-label="Property">jobBomLines.price.discount8.afterValue</div>
<div class="cell" data-label="Column">dis8AfterValue</div>
<div class="cell" data-label="Arabic">خصم 8 | صافي</div>
<div class="cell" data-label="English">Discount 8 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.discount8.maxNormalPercent">
<div class="cell" data-label="Property">jobBomLines.price.discount8.maxNormalPercent</div>
<div class="cell" data-label="Column">dis8MaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.discount8.percentage">
<div class="cell" data-label="Property">jobBomLines.price.discount8.percentage</div>
<div class="cell" data-label="Column">dis8Percentage</div>
<div class="cell" data-label="Arabic">خصم 8 | %</div>
<div class="cell" data-label="English">Discount 8 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.discount8.value">
<div class="cell" data-label="Property">jobBomLines.price.discount8.value</div>
<div class="cell" data-label="Column">dis8Value</div>
<div class="cell" data-label="Arabic">خصم 8 | قيمة</div>
<div class="cell" data-label="English">Discount 8 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.headerDicount.afterValue">
<div class="cell" data-label="Property">jobBomLines.price.headerDicount.afterValue</div>
<div class="cell" data-label="Column">hdrAfterValue</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.headerDicount.maxNormalPercent">
<div class="cell" data-label="Property">jobBomLines.price.headerDicount.maxNormalPercent</div>
<div class="cell" data-label="Column">hdrMaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.headerDicount.percentage">
<div class="cell" data-label="Property">jobBomLines.price.headerDicount.percentage</div>
<div class="cell" data-label="Column">hdrPercentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.headerDicount.value">
<div class="cell" data-label="Property">jobBomLines.price.headerDicount.value</div>
<div class="cell" data-label="Column">hdrValue</div>
<div class="cell" data-label="Arabic">القيمة</div>
<div class="cell" data-label="English">Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.netValue">
<div class="cell" data-label="Property">jobBomLines.price.netValue</div>
<div class="cell" data-label="Column">netValue</div>
<div class="cell" data-label="Arabic">الصافي</div>
<div class="cell" data-label="English">Net value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.price">
<div class="cell" data-label="Property">jobBomLines.price.price</div>
<div class="cell" data-label="Column">price</div>
<div class="cell" data-label="Arabic">الأسعار | السعر الكلي</div>
<div class="cell" data-label="English">Prices | total price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.tax1.afterValue">
<div class="cell" data-label="Property">jobBomLines.price.tax1.afterValue</div>
<div class="cell" data-label="Column">tax1AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | الصافي</div>
<div class="cell" data-label="English">Tax | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.tax1.maxNormalPercent">
<div class="cell" data-label="Property">jobBomLines.price.tax1.maxNormalPercent</div>
<div class="cell" data-label="Column">tax1MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | %</div>
<div class="cell" data-label="English">Item Tax | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.tax1.percentage">
<div class="cell" data-label="Property">jobBomLines.price.tax1.percentage</div>
<div class="cell" data-label="Column">tax1Percentage</div>
<div class="cell" data-label="Arabic">قيمة إضافية 1</div>
<div class="cell" data-label="English">Tax 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.tax1.value">
<div class="cell" data-label="Property">jobBomLines.price.tax1.value</div>
<div class="cell" data-label="Column">tax1Value</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | القيمة</div>
<div class="cell" data-label="English">Tax value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.tax2.afterValue">
<div class="cell" data-label="Property">jobBomLines.price.tax2.afterValue</div>
<div class="cell" data-label="Column">tax2AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | الصافي</div>
<div class="cell" data-label="English">Tax 2 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.tax2.maxNormalPercent">
<div class="cell" data-label="Property">jobBomLines.price.tax2.maxNormalPercent</div>
<div class="cell" data-label="Column">tax2MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | %</div>
<div class="cell" data-label="English">Tax 2 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.tax2.percentage">
<div class="cell" data-label="Property">jobBomLines.price.tax2.percentage</div>
<div class="cell" data-label="Column">tax2Percentage</div>
<div class="cell" data-label="Arabic">قيمة إضافية 2</div>
<div class="cell" data-label="English">Tax 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.tax2.value">
<div class="cell" data-label="Property">jobBomLines.price.tax2.value</div>
<div class="cell" data-label="Column">tax2Value</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | القيمة</div>
<div class="cell" data-label="English">Tax 2 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.tax3.afterValue">
<div class="cell" data-label="Property">jobBomLines.price.tax3.afterValue</div>
<div class="cell" data-label="Column">tax3AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة 3 | الصافي</div>
<div class="cell" data-label="English">Tax 3 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.tax3.maxNormalPercent">
<div class="cell" data-label="Property">jobBomLines.price.tax3.maxNormalPercent</div>
<div class="cell" data-label="Column">tax3MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة 3 | %</div>
<div class="cell" data-label="English">Tax 3 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.tax3.percentage">
<div class="cell" data-label="Property">jobBomLines.price.tax3.percentage</div>
<div class="cell" data-label="Column">tax3Percentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.tax3.value">
<div class="cell" data-label="Property">jobBomLines.price.tax3.value</div>
<div class="cell" data-label="Column">tax3Value</div>
<div class="cell" data-label="Arabic">ضريبة 3 | القيمة</div>
<div class="cell" data-label="English">Tax 3 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.tax4.afterValue">
<div class="cell" data-label="Property">jobBomLines.price.tax4.afterValue</div>
<div class="cell" data-label="Column">tax4AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة 4 | الصافي</div>
<div class="cell" data-label="English">Tax 4 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.tax4.maxNormalPercent">
<div class="cell" data-label="Property">jobBomLines.price.tax4.maxNormalPercent</div>
<div class="cell" data-label="Column">tax4MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة 4 | %</div>
<div class="cell" data-label="English">Tax 4 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.tax4.percentage">
<div class="cell" data-label="Property">jobBomLines.price.tax4.percentage</div>
<div class="cell" data-label="Column">tax4Percentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.tax4.value">
<div class="cell" data-label="Property">jobBomLines.price.tax4.value</div>
<div class="cell" data-label="Column">tax4Value</div>
<div class="cell" data-label="Arabic">ضريبة 4 | القيمة</div>
<div class="cell" data-label="English">Tax 4 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.totalCashShare">
<div class="cell" data-label="Property">jobBomLines.price.totalCashShare</div>
<div class="cell" data-label="Column">totalCashShare</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.totalPaymentMethodShare">
<div class="cell" data-label="Property">jobBomLines.price.totalPaymentMethodShare</div>
<div class="cell" data-label="Column">totalPaymentMethodShare</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.price.unitPrice">
<div class="cell" data-label="Property">jobBomLines.price.unitPrice</div>
<div class="cell" data-label="Column">unitPrice</div>
<div class="cell" data-label="Arabic">سعر الوحدة</div>
<div class="cell" data-label="English">Prices | Unit price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.priceClassifier1">
<div class="cell" data-label="Property">jobBomLines.priceClassifier1</div>
<div class="cell" data-label="Column">priceClassifier1_id</div>
<div class="cell" data-label="Arabic">محدد سعر 1</div>
<div class="cell" data-label="English">Price Classifier 1</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SalesPriceClassifier1](/entities/basic/SalesPriceClassifier1.md) 
</div>
</div>

<div class="row searchable" id="jobBomLines.priceClassifier2">
<div class="cell" data-label="Property">jobBomLines.priceClassifier2</div>
<div class="cell" data-label="Column">priceClassifier2_id</div>
<div class="cell" data-label="Arabic">محدد سعر 2</div>
<div class="cell" data-label="English">Price Classifier 2</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SalesPriceClassifier2](/entities/basic/SalesPriceClassifier2.md) 
</div>
</div>

<div class="row searchable" id="jobBomLines.priceClassifier3">
<div class="cell" data-label="Property">jobBomLines.priceClassifier3</div>
<div class="cell" data-label="Column">priceClassifier3_id</div>
<div class="cell" data-label="Arabic">محدد سعر 3</div>
<div class="cell" data-label="English">Price Classifier 3</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SalesPriceClassifier3](/entities/basic/SalesPriceClassifier3.md) 
</div>
</div>

<div class="row searchable" id="jobBomLines.priceClassifier4">
<div class="cell" data-label="Property">jobBomLines.priceClassifier4</div>
<div class="cell" data-label="Column">priceClassifier4_id</div>
<div class="cell" data-label="Arabic">محدد سعر 4</div>
<div class="cell" data-label="English">Price Classifier 4</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SalesPriceClassifier4](/entities/basic/SalesPriceClassifier4.md) 
</div>
</div>

<div class="row searchable" id="jobBomLines.priceClassifier5">
<div class="cell" data-label="Property">jobBomLines.priceClassifier5</div>
<div class="cell" data-label="Column">priceClassifier5_id</div>
<div class="cell" data-label="Arabic">محدد سعر 5</div>
<div class="cell" data-label="English">Price Classifier 5</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SalesPriceClassifier5](/entities/basic/SalesPriceClassifier5.md) 
</div>
</div>

<div class="row searchable" id="jobBomLines.priceWithServices">
<div class="cell" data-label="Property">jobBomLines.priceWithServices</div>
<div class="cell" data-label="Column">priceWithServices</div>
<div class="cell" data-label="Arabic">السعر شامل الخدمات | السعر الكلي</div>
<div class="cell" data-label="English">Price With Services | Total Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.pricingQty">
<div class="cell" data-label="Property">jobBomLines.pricingQty</div>
<div class="cell" data-label="Column">pricingQty</div>
<div class="cell" data-label="Arabic">كمية التسعير</div>
<div class="cell" data-label="English">Pricing Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.productionDate">
<div class="cell" data-label="Property">jobBomLines.productionDate</div>
<div class="cell" data-label="Column">productionDate</div>
<div class="cell" data-label="Arabic">تاريخ الإنتاج</div>
<div class="cell" data-label="English">Production Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="jobBomLines.qtyAtInsert">
<div class="cell" data-label="Property">jobBomLines.qtyAtInsert</div>
<div class="cell" data-label="Column">qtyAtInsert</div>
<div class="cell" data-label="Arabic">الكمية عند الإنشاء</div>
<div class="cell" data-label="English">Qty At Insert</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.qtyAtInsertWithReserv">
<div class="cell" data-label="Property">jobBomLines.qtyAtInsertWithReserv</div>
<div class="cell" data-label="Column">qtyAtInsertWithReserv</div>
<div class="cell" data-label="Arabic">الكمية عند الإنشاء مع الحجز</div>
<div class="cell" data-label="English">Qty At Insert With Reserv</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.quantity.baseQty.uom">
<div class="cell" data-label="Property">jobBomLines.quantity.baseQty.uom</div>
<div class="cell" data-label="Column">quantityBaseUom_id</div>
<div class="cell" data-label="Arabic">الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/entities/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="jobBomLines.quantity.baseQty.value">
<div class="cell" data-label="Property">jobBomLines.quantity.baseQty.value</div>
<div class="cell" data-label="Column">quantityBaseValue</div>
<div class="cell" data-label="Arabic">الكمية</div>
<div class="cell" data-label="English">Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.quantity.itemAssortment">
<div class="cell" data-label="Property">jobBomLines.quantity.itemAssortment</div>
<div class="cell" data-label="Column">quantityItemAssortment_id</div>
<div class="cell" data-label="Arabic">التشكيلة</div>
<div class="cell" data-label="English">The Assortment</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemAssortment](/entities/supplychain/ItemAssortment.md) 
</div>
</div>

<div class="row searchable" id="jobBomLines.quantity.measureQty">
<div class="cell" data-label="Property">jobBomLines.quantity.measureQty</div>
<div class="cell" data-label="Column">quantityMeasureQty</div>
<div class="cell" data-label="Arabic">الأبعاد | عدد</div>
<div class="cell" data-label="English">Measures | Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.quantity.measures.clippedLength1">
<div class="cell" data-label="Property">jobBomLines.quantity.measures.clippedLength1</div>
<div class="cell" data-label="Column">quantityClippedLength1</div>
<div class="cell" data-label="Arabic">أبعادالجزء المقصوص 1 | الطول</div>
<div class="cell" data-label="English">Clipped Part1 Measures | Length</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.quantity.measures.height">
<div class="cell" data-label="Property">jobBomLines.quantity.measures.height</div>
<div class="cell" data-label="Column">quantityHeight</div>
<div class="cell" data-label="Arabic">الأبعاد | ر</div>
<div class="cell" data-label="English">Measures | H</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.quantity.measures.length">
<div class="cell" data-label="Property">jobBomLines.quantity.measures.length</div>
<div class="cell" data-label="Column">quantityLength</div>
<div class="cell" data-label="Arabic">الأبعاد | ط</div>
<div class="cell" data-label="English">Measures | L</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.quantity.measures.text">
<div class="cell" data-label="Property">jobBomLines.quantity.measures.text</div>
<div class="cell" data-label="Column">quantityText</div>
<div class="cell" data-label="Arabic">الأبعاد | الأبعاد</div>
<div class="cell" data-label="English">Measures | L * W * H</div>
<div class="cell" data-label="Type">Measures</div>

</div>

<div class="row searchable" id="jobBomLines.quantity.measures.width">
<div class="cell" data-label="Property">jobBomLines.quantity.measures.width</div>
<div class="cell" data-label="Column">quantityWidth</div>
<div class="cell" data-label="Arabic">الأبعاد | ع</div>
<div class="cell" data-label="English">Measures | W</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.quantity.quantity.primeQty.uom">
<div class="cell" data-label="Property">jobBomLines.quantity.quantity.primeQty.uom</div>
<div class="cell" data-label="Column">quantityPUom_id</div>
<div class="cell" data-label="Arabic">الوحدة الرئيسية | الوحدة</div>
<div class="cell" data-label="English">Primary | UOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/entities/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="jobBomLines.quantity.quantity.primeQty.value">
<div class="cell" data-label="Property">jobBomLines.quantity.quantity.primeQty.value</div>
<div class="cell" data-label="Column">quantityPValue</div>
<div class="cell" data-label="Arabic">الوحدة الرئيسية | الكمية</div>
<div class="cell" data-label="English">Primary | Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.quantity.quantity.secondQty.uom">
<div class="cell" data-label="Property">jobBomLines.quantity.quantity.secondQty.uom</div>
<div class="cell" data-label="Column">quantitySUom_id</div>
<div class="cell" data-label="Arabic">الوحدة الثانية | الوحدة</div>
<div class="cell" data-label="English">Secondary | UOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/entities/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="jobBomLines.quantity.quantity.secondQty.value">
<div class="cell" data-label="Property">jobBomLines.quantity.quantity.secondQty.value</div>
<div class="cell" data-label="Column">quantitySValue</div>
<div class="cell" data-label="Arabic">الوحدة الثانية | الكمية</div>
<div class="cell" data-label="English">Secondary | Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.quantity.uomRate">
<div class="cell" data-label="Property">jobBomLines.quantity.uomRate</div>
<div class="cell" data-label="Column">quantityUomRate</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.ref1">
<div class="cell" data-label="Property">jobBomLines.ref1</div>
<div class="cell gen-ref-column" data-label="Column">ref1ActualCode,  ref1Code,  ref1EntityType,  ref1Id</div>
<div class="cell" data-label="Arabic">مرجع 1</div>
<div class="cell" data-label="English">Reference 1</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="jobBomLines.ref2">
<div class="cell" data-label="Property">jobBomLines.ref2</div>
<div class="cell gen-ref-column" data-label="Column">ref2ActualCode,  ref2Code,  ref2EntityType,  ref2Id</div>
<div class="cell" data-label="Arabic">مرجع 2</div>
<div class="cell" data-label="English">Reference 2</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="jobBomLines.ref3">
<div class="cell" data-label="Property">jobBomLines.ref3</div>
<div class="cell gen-ref-column" data-label="Column">ref3ActualCode,  ref3Code,  ref3EntityType,  ref3Id</div>
<div class="cell" data-label="Arabic">مرجع 3</div>
<div class="cell" data-label="English">Reference 3</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="jobBomLines.ref4">
<div class="cell" data-label="Property">jobBomLines.ref4</div>
<div class="cell gen-ref-column" data-label="Column">ref4ActualCode,  ref4Code,  ref4EntityType,  ref4Id</div>
<div class="cell" data-label="Arabic">مرجع 4</div>
<div class="cell" data-label="English">Reference 4</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="jobBomLines.remaining">
<div class="cell" data-label="Property">jobBomLines.remaining</div>
<div class="cell" data-label="Column">remaining</div>
<div class="cell" data-label="Arabic">المتبقي</div>
<div class="cell" data-label="English">Remaining</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.remainingQtyFromDelivery">
<div class="cell" data-label="Property">jobBomLines.remainingQtyFromDelivery</div>
<div class="cell" data-label="Column">remainingQtyFromDelivery</div>
<div class="cell" data-label="Arabic">الكمية المتبقية من التوصيل</div>
<div class="cell" data-label="English">Remaining Quantity From Delivery</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.remarks">
<div class="cell" data-label="Property">jobBomLines.remarks</div>
<div class="cell" data-label="Column">remarks</div>
<div class="cell" data-label="Arabic">ملاحظات</div>
<div class="cell" data-label="English">Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="jobBomLines.reservationDate">
<div class="cell" data-label="Property">jobBomLines.reservationDate</div>
<div class="cell" data-label="Column">reservationDate</div>
<div class="cell" data-label="Arabic">تاريخ الحجز</div>
<div class="cell" data-label="English">Reservation Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="jobBomLines.reservationLocator">
<div class="cell" data-label="Property">jobBomLines.reservationLocator</div>
<div class="cell" data-label="Column">reservationLocator_id</div>
<div class="cell" data-label="Arabic">موقع الحجز</div>
<div class="cell" data-label="English">Reservation Locator</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Locator](/entities/supplychain/Locator.md) 
</div>
</div>

<div class="row searchable" id="jobBomLines.reservationStatus">
<div class="cell" data-label="Property">jobBomLines.reservationStatus</div>
<div class="cell" data-label="Column">reservationStatus</div>
<div class="cell" data-label="Arabic">حالة الحجز</div>
<div class="cell" data-label="English">Reservation Status</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="jobBomLines.reservationWareHouse">
<div class="cell" data-label="Property">jobBomLines.reservationWareHouse</div>
<div class="cell" data-label="Column">reservationWareHouse_id</div>
<div class="cell" data-label="Arabic">مخزن الحجز</div>
<div class="cell" data-label="English">Reservation WareHouse</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/entities/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="jobBomLines.reserveLineId">
<div class="cell" data-label="Property">jobBomLines.reserveLineId</div>
<div class="cell" data-label="Column">reserveLineId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="jobBomLines.reservedQty">
<div class="cell" data-label="Property">jobBomLines.reservedQty</div>
<div class="cell" data-label="Column">reservedQty</div>
<div class="cell" data-label="Arabic">الكمية المحجوزة</div>
<div class="cell" data-label="English">Reserved Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.retFromSeq">
<div class="cell" data-label="Property">jobBomLines.retFromSeq</div>
<div class="cell" data-label="Column">retFromSeq</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Long</div>

</div>

<div class="row searchable" id="jobBomLines.retestDate">
<div class="cell" data-label="Property">jobBomLines.retestDate</div>
<div class="cell" data-label="Column">retestDate</div>
<div class="cell" data-label="Arabic">تاريخ إعادة الاختبار</div>
<div class="cell" data-label="English">retest Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="jobBomLines.retunLine">
<div class="cell" data-label="Property">jobBomLines.retunLine</div>
<div class="cell" data-label="Column">retunLine</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="jobBomLines.returnedQty">
<div class="cell" data-label="Property">jobBomLines.returnedQty</div>
<div class="cell" data-label="Column">returnedQty</div>
<div class="cell" data-label="Arabic">المرتجع</div>
<div class="cell" data-label="English">Return Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.revisionName">
<div class="cell" data-label="Property">jobBomLines.revisionName</div>
<div class="cell" data-label="Column">revisionName</div>
<div class="cell" data-label="Arabic">اسم الإصدار</div>
<div class="cell" data-label="English">Revision Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="jobBomLines.salesMan">
<div class="cell" data-label="Property">jobBomLines.salesMan</div>
<div class="cell" data-label="Column">salesMan_id</div>
<div class="cell" data-label="Arabic">مندوب المبيعات</div>
<div class="cell" data-label="English">Salesman</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/entities/basic/Employee.md) 
</div>
</div>

<div class="row searchable" id="jobBomLines.satisfiedQty">
<div class="cell" data-label="Property">jobBomLines.satisfiedQty</div>
<div class="cell" data-label="Column">satisfiedQty</div>
<div class="cell" data-label="Arabic">نفذت</div>
<div class="cell" data-label="English">Satisfied Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.satisfiedQty2">
<div class="cell" data-label="Property">jobBomLines.satisfiedQty2</div>
<div class="cell" data-label="Column">satisfiedQty2</div>
<div class="cell" data-label="Arabic">نفذت 2</div>
<div class="cell" data-label="English">Satisfied Qty 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.shippingAddress.address1">
<div class="cell" data-label="Property">jobBomLines.shippingAddress.address1</div>
<div class="cell" data-label="Column">address1</div>
<div class="cell" data-label="Arabic">عنوان 1</div>
<div class="cell" data-label="English">Address 1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="jobBomLines.shippingAddress.address2">
<div class="cell" data-label="Property">jobBomLines.shippingAddress.address2</div>
<div class="cell" data-label="Column">address2</div>
<div class="cell" data-label="Arabic">رقم المبني</div>
<div class="cell" data-label="English">Building Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="jobBomLines.shippingAddress.area">
<div class="cell" data-label="Property">jobBomLines.shippingAddress.area</div>
<div class="cell" data-label="Column">addressArea</div>
<div class="cell" data-label="Arabic">المنطقة</div>
<div class="cell" data-label="English">Area</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="jobBomLines.shippingAddress.buildingNumber">
<div class="cell" data-label="Property">jobBomLines.shippingAddress.buildingNumber</div>
<div class="cell" data-label="Column">buildingNumber</div>
<div class="cell" data-label="Arabic">رقم المبني</div>
<div class="cell" data-label="English">Building Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="jobBomLines.shippingAddress.city">
<div class="cell" data-label="Property">jobBomLines.shippingAddress.city</div>
<div class="cell" data-label="Column">addressCity</div>
<div class="cell" data-label="Arabic">المدينة</div>
<div class="cell" data-label="English">City</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="jobBomLines.shippingAddress.country">
<div class="cell" data-label="Property">jobBomLines.shippingAddress.country</div>
<div class="cell" data-label="Column">addressCountry</div>
<div class="cell" data-label="Arabic">الدولة</div>
<div class="cell" data-label="English">Country</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="jobBomLines.shippingAddress.countryCode">
<div class="cell" data-label="Property">jobBomLines.shippingAddress.countryCode</div>
<div class="cell" data-label="Column">countryCode</div>
<div class="cell" data-label="Arabic">كود الدولة</div>
<div class="cell" data-label="English">Country Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="jobBomLines.shippingAddress.district">
<div class="cell" data-label="Property">jobBomLines.shippingAddress.district</div>
<div class="cell" data-label="Column">district</div>
<div class="cell" data-label="Arabic">الحي</div>
<div class="cell" data-label="English">District</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="jobBomLines.shippingAddress.landPlotNumber">
<div class="cell" data-label="Property">jobBomLines.shippingAddress.landPlotNumber</div>
<div class="cell" data-label="Column">landPlotNumber</div>
<div class="cell" data-label="Arabic">رقم تعريفي للأرض</div>
<div class="cell" data-label="English">Land Plot Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="jobBomLines.shippingAddress.mapLocation">
<div class="cell" data-label="Property">jobBomLines.shippingAddress.mapLocation</div>
<div class="cell" data-label="Column">mapLocation</div>
<div class="cell" data-label="Arabic">الموقع على الخريطة</div>
<div class="cell" data-label="English">Map Location</div>
<div class="cell" data-label="Type">LatLng</div>

</div>

<div class="row searchable" id="jobBomLines.shippingAddress.postalCode">
<div class="cell" data-label="Property">jobBomLines.shippingAddress.postalCode</div>
<div class="cell" data-label="Column">postalCode</div>
<div class="cell" data-label="Arabic">الكود البريدي</div>
<div class="cell" data-label="English">Postal Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="jobBomLines.shippingAddress.region">
<div class="cell" data-label="Property">jobBomLines.shippingAddress.region</div>
<div class="cell" data-label="Column">region_id</div>
<div class="cell" data-label="Arabic">منطقة جغرافيه</div>
<div class="cell" data-label="English">Region</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AddressRegion](/entities/basic/AddressRegion.md) 
</div>
</div>

<div class="row searchable" id="jobBomLines.shippingAddress.state">
<div class="cell" data-label="Property">jobBomLines.shippingAddress.state</div>
<div class="cell" data-label="Column">addressState</div>
<div class="cell" data-label="Arabic">المحافظة</div>
<div class="cell" data-label="English">State</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="jobBomLines.shippingAddress.street">
<div class="cell" data-label="Property">jobBomLines.shippingAddress.street</div>
<div class="cell" data-label="Column">street</div>
<div class="cell" data-label="Arabic"> شارع</div>
<div class="cell" data-label="English"> Street</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="jobBomLines.sizeName">
<div class="cell" data-label="Property">jobBomLines.sizeName</div>
<div class="cell" data-label="Column">sizeName</div>
<div class="cell" data-label="Arabic">اسم المقاس</div>
<div class="cell" data-label="English">Size Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="jobBomLines.sourceLineId">
<div class="cell" data-label="Property">jobBomLines.sourceLineId</div>
<div class="cell" data-label="Column">sourceLineId</div>
<div class="cell" data-label="Arabic">معرف سطر المصدر</div>
<div class="cell" data-label="English">Source Line Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="jobBomLines.sourceType">
<div class="cell" data-label="Property">jobBomLines.sourceType</div>
<div class="cell" data-label="Column">sourceType</div>
<div class="cell" data-label="Arabic">Source Type</div>
<div class="cell" data-label="English">Source Type</div>
<div class="cell" data-label="Type">EntityType</div>

</div>

<div class="row searchable" id="jobBomLines.specialDiscount1">
<div class="cell" data-label="Property">jobBomLines.specialDiscount1</div>
<div class="cell" data-label="Column">specialDiscount1</div>
<div class="cell" data-label="Arabic">الخصم 1 الخاص</div>
<div class="cell" data-label="English">Special Discount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.specialDiscount2">
<div class="cell" data-label="Property">jobBomLines.specialDiscount2</div>
<div class="cell" data-label="Column">specialDiscount2</div>
<div class="cell" data-label="Arabic">الخصم 2 الخاص</div>
<div class="cell" data-label="English">Special Add. Discount1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.specialDiscount3">
<div class="cell" data-label="Property">jobBomLines.specialDiscount3</div>
<div class="cell" data-label="Column">specialDiscount3</div>
<div class="cell" data-label="Arabic">الخصم 3 الخاص</div>
<div class="cell" data-label="English">Special Add. Discount2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.specificDimensions.activePerc">
<div class="cell" data-label="Property">jobBomLines.specificDimensions.activePerc</div>
<div class="cell" data-label="Column">activePerc</div>
<div class="cell" data-label="Arabic">النسبة الفعالة</div>
<div class="cell" data-label="English">Active Percentage</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="jobBomLines.specificDimensions.box">
<div class="cell" data-label="Property">jobBomLines.specificDimensions.box</div>
<div class="cell" data-label="Column">box</div>
<div class="cell" data-label="Arabic">صندوق</div>
<div class="cell" data-label="English">Box</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="jobBomLines.specificDimensions.color">
<div class="cell" data-label="Property">jobBomLines.specificDimensions.color</div>
<div class="cell" data-label="Column">color</div>
<div class="cell" data-label="Arabic">اللون</div>
<div class="cell" data-label="English">Color</div>
<div class="cell" data-label="Type">Color</div>

</div>

<div class="row searchable" id="jobBomLines.specificDimensions.inactivePerc">
<div class="cell" data-label="Property">jobBomLines.specificDimensions.inactivePerc</div>
<div class="cell" data-label="Column">inactivePerc</div>
<div class="cell" data-label="Arabic">النسبة الغير فعالة</div>
<div class="cell" data-label="English">Inactive Percentage</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="jobBomLines.specificDimensions.locator">
<div class="cell" data-label="Property">jobBomLines.specificDimensions.locator</div>
<div class="cell" data-label="Column">locator_id</div>
<div class="cell" data-label="Arabic">الموقع</div>
<div class="cell" data-label="English">Locator</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Locator](/entities/supplychain/Locator.md) 
</div>
</div>

<div class="row searchable" id="jobBomLines.specificDimensions.lotId">
<div class="cell" data-label="Property">jobBomLines.specificDimensions.lotId</div>
<div class="cell" data-label="Column">lotId</div>
<div class="cell" data-label="Arabic">رقم الشحنه</div>
<div class="cell" data-label="English">Lot ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="jobBomLines.specificDimensions.measures">
<div class="cell" data-label="Property">jobBomLines.specificDimensions.measures</div>
<div class="cell" data-label="Column">measures</div>
<div class="cell" data-label="Arabic">الأبعاد</div>
<div class="cell" data-label="English">Measures</div>
<div class="cell" data-label="Type">Measures</div>

</div>

<div class="row searchable" id="jobBomLines.specificDimensions.revisionId">
<div class="cell" data-label="Property">jobBomLines.specificDimensions.revisionId</div>
<div class="cell" data-label="Column">revisionId</div>
<div class="cell" data-label="Arabic">الإصدار</div>
<div class="cell" data-label="English">Revision ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="jobBomLines.specificDimensions.secondSerial">
<div class="cell" data-label="Property">jobBomLines.specificDimensions.secondSerial</div>
<div class="cell" data-label="Column">secondSerial</div>
<div class="cell" data-label="Arabic">الرقم المسلسل الثاني</div>
<div class="cell" data-label="English">Second Serial</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="jobBomLines.specificDimensions.serialNumber">
<div class="cell" data-label="Property">jobBomLines.specificDimensions.serialNumber</div>
<div class="cell" data-label="Column">serialNumber</div>
<div class="cell" data-label="Arabic">الرقم المسلسل</div>
<div class="cell" data-label="English">Serial number</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="jobBomLines.specificDimensions.size">
<div class="cell" data-label="Property">jobBomLines.specificDimensions.size</div>
<div class="cell" data-label="Column">size</div>
<div class="cell" data-label="Arabic">المقاس</div>
<div class="cell" data-label="English">Size</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="jobBomLines.specificDimensions.subItem">
<div class="cell" data-label="Property">jobBomLines.specificDimensions.subItem</div>
<div class="cell" data-label="Column">subItem_id</div>
<div class="cell" data-label="Arabic"> صنف فرعى</div>
<div class="cell" data-label="English"> SubItem</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SubItem](/entities/srvcenter-subitems/SubItem.md) 
</div>
</div>

<div class="row searchable" id="jobBomLines.specificDimensions.warehouse">
<div class="cell" data-label="Property">jobBomLines.specificDimensions.warehouse</div>
<div class="cell" data-label="Column">warehouse_id</div>
<div class="cell" data-label="Arabic">المخزن</div>
<div class="cell" data-label="English">Warehouse</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/entities/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="jobBomLines.subsidiary">
<div class="cell" data-label="Property">jobBomLines.subsidiary</div>
<div class="cell gen-ref-column" data-label="Column">subsidiaryActualCode,  subsidiaryCode,  subsidiaryEntityType,  subsidiaryId</div>
<div class="cell" data-label="Arabic">الذمة</div>
<div class="cell" data-label="English">Subsidiary</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="jobBomLines.technician">
<div class="cell" data-label="Property">jobBomLines.technician</div>
<div class="cell" data-label="Column">technician_id</div>
<div class="cell" data-label="Arabic">الفني</div>
<div class="cell" data-label="English">Technician</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/entities/basic/Employee.md) 
</div>
</div>

<div class="row searchable" id="jobBomLines.text1">
<div class="cell" data-label="Property">jobBomLines.text1</div>
<div class="cell" data-label="Column">text1</div>
<div class="cell" data-label="Arabic">نــــص 1</div>
<div class="cell" data-label="English">Text 1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="jobBomLines.text2">
<div class="cell" data-label="Property">jobBomLines.text2</div>
<div class="cell" data-label="Column">text2</div>
<div class="cell" data-label="Arabic">نـــــص 2</div>
<div class="cell" data-label="English">Text 2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="jobBomLines.text3">
<div class="cell" data-label="Property">jobBomLines.text3</div>
<div class="cell" data-label="Column">text3</div>
<div class="cell" data-label="Arabic">نص 3</div>
<div class="cell" data-label="English">text3</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="jobBomLines.theSize">
<div class="cell" data-label="Property">jobBomLines.theSize</div>
<div class="cell" data-label="Column">size</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="jobBomLines.transItemType">
<div class="cell" data-label="Property">jobBomLines.transItemType</div>
<div class="cell" data-label="Column">transItemType</div>
<div class="cell" data-label="Arabic">نوع السطر</div>
<div class="cell" data-label="English">Line Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="jobBomLines.unReservedQty">
<div class="cell" data-label="Property">jobBomLines.unReservedQty</div>
<div class="cell" data-label="Column">unReservedQty</div>
<div class="cell" data-label="Arabic">الكمية العير محجوزة</div>
<div class="cell" data-label="English">Un Reserved Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.unitPriceWithServices">
<div class="cell" data-label="Property">jobBomLines.unitPriceWithServices</div>
<div class="cell" data-label="Column">unitPriceWithServices</div>
<div class="cell" data-label="Arabic">السعر شامل الخدمات | سعر الوحدة</div>
<div class="cell" data-label="English">Price With Services | Unit Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.unsatisfiedQty">
<div class="cell" data-label="Property">jobBomLines.unsatisfiedQty</div>
<div class="cell" data-label="Column">unsatisfiedQty</div>
<div class="cell" data-label="Arabic">الكمية الغير مستلمة</div>
<div class="cell" data-label="English">Unsatisfied Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.unsatisfiedQty2">
<div class="cell" data-label="Property">jobBomLines.unsatisfiedQty2</div>
<div class="cell" data-label="Column">unsatisfiedQty2</div>
<div class="cell" data-label="Arabic">الكمية الغير مستلمة 2</div>
<div class="cell" data-label="English">Unsatisfied Quantity 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.userSatisfiedQty">
<div class="cell" data-label="Property">jobBomLines.userSatisfiedQty</div>
<div class="cell" data-label="Column">userSatisfiedQty</div>
<div class="cell" data-label="Arabic">الكمية المسلمة يدويا</div>
<div class="cell" data-label="English">Manually Satisfied Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.userSatisfiedQty2">
<div class="cell" data-label="Property">jobBomLines.userSatisfiedQty2</div>
<div class="cell" data-label="Column">userSatisfiedQty2</div>
<div class="cell" data-label="Arabic">الكمية المسلمة يدويا 2</div>
<div class="cell" data-label="English">Manually Satisfied Qty 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.valueDate">
<div class="cell" data-label="Property">jobBomLines.valueDate</div>
<div class="cell" data-label="Column">valueDate</div>
<div class="cell" data-label="Arabic">التاريخ الفعلي</div>
<div class="cell" data-label="English">Value Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="jobBomLines.w2">
<div class="cell" data-label="Property">jobBomLines.w2</div>
<div class="cell" data-label="Column">w2</div>
<div class="cell" data-label="Arabic">ع2</div>
<div class="cell" data-label="English">W2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="jobBomLines.warrantyCode">
<div class="cell" data-label="Property">jobBomLines.warrantyCode</div>
<div class="cell" data-label="Column">warrantyCode</div>
<div class="cell" data-label="Arabic">كود الضمان</div>
<div class="cell" data-label="English">Warranty Code</div>
<div class="cell" data-label="Type">BigText</div>

</div>


</div>

