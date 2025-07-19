
<div class='tableName'>


# RECollectDoc
</div>

**Arabic:** سند تحصيل - سندات تحصيل
**English:** Collect Document - Collect Documents

<ContentFilter/>


<div class='searchable'>
<a href='#details'>details (RECollectDocLine) </a>
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
</div><div class="row searchable" id="aggrRECollectDoc">
<div class="cell" data-label="Property">aggrRECollectDoc</div>
<div class="cell" data-label="Column">aggrRECollectDoc_id</div>
<div class="cell" data-label="Arabic">سند تحصيل مجمع</div>
<div class="cell" data-label="English">Aggregated Collect Document</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AggrRECollectDoc](/modules/realestate-rent/AggrRECollectDoc.md) 
</div>
</div>

<div class="row searchable" id="amount.amount">
<div class="cell" data-label="Property">amount.amount</div>
<div class="cell" data-label="Column">amountAmount</div>
<div class="cell" data-label="Arabic"> المبلغ</div>
<div class="cell" data-label="English"> Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="amount.currency">
<div class="cell" data-label="Property">amount.currency</div>
<div class="cell" data-label="Column">amountCurrency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/modules/basic/Currency.md) 
</div>
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

<div class="row searchable" id="attachment">
<div class="cell" data-label="Property">attachment</div>
<div class="cell" data-label="Column">attachment_id</div>
<div class="cell" data-label="Arabic">مرفق</div>
<div class="cell" data-label="English">Attachment</div>
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

<div class="row searchable" id="buyer">
<div class="cell" data-label="Property">buyer</div>
<div class="cell" data-label="Column">buyer_id</div>
<div class="cell" data-label="Arabic">المشتري</div>
<div class="cell" data-label="English">Buyer</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [REOwner](/modules/realestate/REOwner.md) 
</div>
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

<div class="row searchable" id="collector">
<div class="cell" data-label="Property">collector</div>
<div class="cell" data-label="Column">collector_id</div>
<div class="cell" data-label="Arabic">المحصل</div>
<div class="cell" data-label="English">Collector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/modules/basic/Employee.md) 
</div>
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

<div class="row searchable" id="currency">
<div class="cell" data-label="Property">currency</div>
<div class="cell" data-label="Column">currency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/modules/basic/Currency.md) 
</div>
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

<div class="row searchable" id="dueDate">
<div class="cell" data-label="Property">dueDate</div>
<div class="cell" data-label="Column">dueDate</div>
<div class="cell" data-label="Arabic">تاريخ الاستحقاق</div>
<div class="cell" data-label="English">Due Date</div>
<div class="cell" data-label="Type">Date</div>

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

<div class="row searchable" id="installmentCode">
<div class="cell" data-label="Property">installmentCode</div>
<div class="cell" data-label="Column">installmentCode</div>
<div class="cell" data-label="Arabic">كود القسط</div>
<div class="cell" data-label="English">Installment Code</div>
<div class="cell" data-label="Type">Text</div>

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

<div class="row searchable" id="ledgerTransReqId">
<div class="cell" data-label="Property">ledgerTransReqId</div>
<div class="cell" data-label="Column">ledgerTransReqId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

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

<div class="row searchable" id="mediator">
<div class="cell" data-label="Property">mediator</div>
<div class="cell" data-label="Column">mediator_id</div>
<div class="cell" data-label="Arabic">الوسيط</div>
<div class="cell" data-label="English">Mediator</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ThirdParty](/modules/basic/ThirdParty.md) 
</div>
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

<div class="row searchable" id="owner">
<div class="cell" data-label="Property">owner</div>
<div class="cell" data-label="Column">owner_id</div>
<div class="cell" data-label="Arabic">المالك</div>
<div class="cell" data-label="English">Owner</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [REOwner](/modules/realestate/REOwner.md) 
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

<div class="row searchable" id="relatedPaymentId">
<div class="cell" data-label="Property">relatedPaymentId</div>
<div class="cell" data-label="Column">relatedPaymentId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

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

<div class="row searchable" id="site.address.address1">
<div class="cell" data-label="Property">site.address.address1</div>
<div class="cell" data-label="Column">siteAddressAddress1</div>
<div class="cell" data-label="Arabic">عنوان 1</div>
<div class="cell" data-label="English">Address 1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="site.address.address2">
<div class="cell" data-label="Property">site.address.address2</div>
<div class="cell" data-label="Column">siteAddressAddress2</div>
<div class="cell" data-label="Arabic">رقم المبني</div>
<div class="cell" data-label="English">Building Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="site.address.area">
<div class="cell" data-label="Property">site.address.area</div>
<div class="cell" data-label="Column">siteAddressArea</div>
<div class="cell" data-label="Arabic">المنطقة</div>
<div class="cell" data-label="English">Area</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="site.address.buildingNumber">
<div class="cell" data-label="Property">site.address.buildingNumber</div>
<div class="cell" data-label="Column">siteAddressBuildingNumber</div>
<div class="cell" data-label="Arabic">رقم المبني</div>
<div class="cell" data-label="English">Building Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="site.address.city">
<div class="cell" data-label="Property">site.address.city</div>
<div class="cell" data-label="Column">siteAddressCity</div>
<div class="cell" data-label="Arabic">المدينة</div>
<div class="cell" data-label="English">City</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="site.address.country">
<div class="cell" data-label="Property">site.address.country</div>
<div class="cell" data-label="Column">siteAddressCountry</div>
<div class="cell" data-label="Arabic">الدولة</div>
<div class="cell" data-label="English">Country</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="site.address.countryCode">
<div class="cell" data-label="Property">site.address.countryCode</div>
<div class="cell" data-label="Column">siteAddressCountryCode</div>
<div class="cell" data-label="Arabic">كود الدولة</div>
<div class="cell" data-label="English">Country Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="site.address.district">
<div class="cell" data-label="Property">site.address.district</div>
<div class="cell" data-label="Column">siteAddressDistrict</div>
<div class="cell" data-label="Arabic">الحي</div>
<div class="cell" data-label="English">District</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="site.address.landPlotNumber">
<div class="cell" data-label="Property">site.address.landPlotNumber</div>
<div class="cell" data-label="Column">siteAddressLandPlotNumber</div>
<div class="cell" data-label="Arabic">رقم تعريفي للأرض</div>
<div class="cell" data-label="English">Land Plot Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="site.address.mapLocation">
<div class="cell" data-label="Property">site.address.mapLocation</div>
<div class="cell" data-label="Column">siteAddressMapLocation</div>
<div class="cell" data-label="Arabic">الموقع على الخريطة</div>
<div class="cell" data-label="English">Map Location</div>
<div class="cell" data-label="Type">LatLng</div>

</div>

<div class="row searchable" id="site.address.postalCode">
<div class="cell" data-label="Property">site.address.postalCode</div>
<div class="cell" data-label="Column">siteAddressPostalCode</div>
<div class="cell" data-label="Arabic">الكود البريدي</div>
<div class="cell" data-label="English">Postal Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="site.address.region">
<div class="cell" data-label="Property">site.address.region</div>
<div class="cell" data-label="Column">siteAddressRegion_id</div>
<div class="cell" data-label="Arabic">موقع جغرافي</div>
<div class="cell" data-label="English">Address region</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AddressRegion](/modules/basic/AddressRegion.md) 
</div>
</div>

<div class="row searchable" id="site.address.state">
<div class="cell" data-label="Property">site.address.state</div>
<div class="cell" data-label="Column">siteAddressState</div>
<div class="cell" data-label="Arabic">المحافظة</div>
<div class="cell" data-label="English">State</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="site.address.street">
<div class="cell" data-label="Property">site.address.street</div>
<div class="cell" data-label="Column">siteAddressStreet</div>
<div class="cell" data-label="Arabic"> شارع</div>
<div class="cell" data-label="English"> Street</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="site.block">
<div class="cell" data-label="Property">site.block</div>
<div class="cell" data-label="Column">siteBlock_id</div>
<div class="cell" data-label="Arabic">البلوك</div>
<div class="cell" data-label="English">Block</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [REBlock](/modules/realestate/REBlock.md) 
</div>
</div>

<div class="row searchable" id="site.building">
<div class="cell" data-label="Property">site.building</div>
<div class="cell" data-label="Column">siteBuilding_id</div>
<div class="cell" data-label="Arabic">المبنى</div>
<div class="cell" data-label="English">Building</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [REBuilding](/modules/realestate/REBuilding.md) 
</div>
</div>

<div class="row searchable" id="site.easternNeighbor">
<div class="cell" data-label="Property">site.easternNeighbor</div>
<div class="cell" data-label="Column">siteEasternNeighbor</div>
<div class="cell" data-label="Arabic">الحد الشرقي</div>
<div class="cell" data-label="English">Eastern Neighbor</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="site.easternNeighborLength">
<div class="cell" data-label="Property">site.easternNeighborLength</div>
<div class="cell" data-label="Column">siteEasternNeighborLength</div>
<div class="cell" data-label="Arabic">طول الحد الشرقى</div>
<div class="cell" data-label="English">Eastern Neighbor Length</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="site.easternNeighborWidth">
<div class="cell" data-label="Property">site.easternNeighborWidth</div>
<div class="cell" data-label="Column">siteEasternNeighborWidth</div>
<div class="cell" data-label="Arabic">عرض الحد الشرقى</div>
<div class="cell" data-label="English">Eastern Neighbor Width</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="site.floor">
<div class="cell" data-label="Property">site.floor</div>
<div class="cell" data-label="Column">siteFloor_id</div>
<div class="cell" data-label="Arabic">الطابق</div>
<div class="cell" data-label="English">Floor</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [REFloor](/modules/realestate/REFloor.md) 
</div>
</div>

<div class="row searchable" id="site.land">
<div class="cell" data-label="Property">site.land</div>
<div class="cell" data-label="Column">siteLand_id</div>
<div class="cell" data-label="Arabic">قطعة الارض</div>
<div class="cell" data-label="English">Land</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [RELand](/modules/realestate/RELand.md) 
</div>
</div>

<div class="row searchable" id="site.northernNeighbor">
<div class="cell" data-label="Property">site.northernNeighbor</div>
<div class="cell" data-label="Column">siteNorthernNeighbor</div>
<div class="cell" data-label="Arabic">الحد الشمالي</div>
<div class="cell" data-label="English">Northern Neighbor</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="site.northernNeighborLength">
<div class="cell" data-label="Property">site.northernNeighborLength</div>
<div class="cell" data-label="Column">siteNorthernNeighborLength</div>
<div class="cell" data-label="Arabic">طول الحد الشمالى</div>
<div class="cell" data-label="English">Northern Neighbor Length</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="site.northernNeighborWidth">
<div class="cell" data-label="Property">site.northernNeighborWidth</div>
<div class="cell" data-label="Column">siteNorthernNeighborWidth</div>
<div class="cell" data-label="Arabic">عرض الحد الشمالي</div>
<div class="cell" data-label="English">Northern Neighbor Width</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="site.project">
<div class="cell" data-label="Property">site.project</div>
<div class="cell" data-label="Column">siteProject_id</div>
<div class="cell" data-label="Arabic">المشروع</div>
<div class="cell" data-label="English">Project</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [REProject](/modules/realestate/REProject.md) 
</div>
</div>

<div class="row searchable" id="site.southernNeighbor">
<div class="cell" data-label="Property">site.southernNeighbor</div>
<div class="cell" data-label="Column">siteSouthernNeighbor</div>
<div class="cell" data-label="Arabic">الحد الجنوبي</div>
<div class="cell" data-label="English">Southern Neighbor</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="site.southernNeighborLength">
<div class="cell" data-label="Property">site.southernNeighborLength</div>
<div class="cell" data-label="Column">siteSouthernNeighborLength</div>
<div class="cell" data-label="Arabic">طول الحد الجنوبي</div>
<div class="cell" data-label="English">Southern Neighbor Length</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="site.southernNeighborWidth">
<div class="cell" data-label="Property">site.southernNeighborWidth</div>
<div class="cell" data-label="Column">siteSouthernNeighborWidth</div>
<div class="cell" data-label="Arabic">عرض الحد الجنوبي</div>
<div class="cell" data-label="English">Southern Neighbor Width</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="site.square">
<div class="cell" data-label="Property">site.square</div>
<div class="cell" data-label="Column">siteSquare_id</div>
<div class="cell" data-label="Arabic">مربع</div>
<div class="cell" data-label="English">Square</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [RESquare](/modules/realestate/RESquare.md) 
</div>
</div>

<div class="row searchable" id="site.unit">
<div class="cell" data-label="Property">site.unit</div>
<div class="cell" data-label="Column">siteUnit_id</div>
<div class="cell" data-label="Arabic">وحدة سكنية</div>
<div class="cell" data-label="English">Housing units</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [RERentalUnit](/modules/realestate/RERentalUnit.md) 
</div>
</div>

<div class="row searchable" id="site.westernNeighbor">
<div class="cell" data-label="Property">site.westernNeighbor</div>
<div class="cell" data-label="Column">siteWesternNeighbor</div>
<div class="cell" data-label="Arabic">الحد الغربي</div>
<div class="cell" data-label="English">Western Neighbor</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="site.westernNeighborLength">
<div class="cell" data-label="Property">site.westernNeighborLength</div>
<div class="cell" data-label="Column">siteWesternNeighborLength</div>
<div class="cell" data-label="Arabic">طول الحد الغربي</div>
<div class="cell" data-label="English">Western Neighbor Length</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="site.westernNeighborWidth">
<div class="cell" data-label="Property">site.westernNeighborWidth</div>
<div class="cell" data-label="Column">siteWesternNeighborWidth</div>
<div class="cell" data-label="Arabic">عرض الحد الغربى</div>
<div class="cell" data-label="English">Western Neighbor Width</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="soldEstate">
<div class="cell" data-label="Property">soldEstate</div>
<div class="cell gen-ref-column" data-label="Column">soldEstateActualCode,  soldEstateCode,  soldEstateEntityType,  soldEstateId</div>
<div class="cell" data-label="Arabic">العقار</div>
<div class="cell" data-label="English">Sold estate</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="subsidiary">
<div class="cell" data-label="Property">subsidiary</div>
<div class="cell gen-ref-column" data-label="Column">subsidiaryActualCode,  subsidiaryCode,  subsidiaryEntityType,  subsidiaryId</div>
<div class="cell" data-label="Arabic">الذمة</div>
<div class="cell" data-label="English">Subsidiary</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="tax1Total">
<div class="cell" data-label="Property">tax1Total</div>
<div class="cell" data-label="Column">tax1Total</div>
<div class="cell" data-label="Arabic">إجمالي ضريبة 1</div>
<div class="cell" data-label="English">Tax 1 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tax2Total">
<div class="cell" data-label="Property">tax2Total</div>
<div class="cell" data-label="Column">tax2Total</div>
<div class="cell" data-label="Arabic">إجمالي ضريبة 2</div>
<div class="cell" data-label="English">Tax 2 Total</div>
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

<div class="row searchable" id="transferedToBankAmount">
<div class="cell" data-label="Property">transferedToBankAmount</div>
<div class="cell" data-label="Column">transferedToBankAmount</div>
<div class="cell" data-label="Arabic">المحول للبنك</div>
<div class="cell" data-label="English">Transfered To Bank</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="transferedToOwnerAmount">
<div class="cell" data-label="Property">transferedToOwnerAmount</div>
<div class="cell" data-label="Column">transferedToOwnerAmount</div>
<div class="cell" data-label="Arabic">المسدد للمالك</div>
<div class="cell" data-label="English">Transfered To Owner</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="type">
<div class="cell" data-label="Property">type</div>
<div class="cell" data-label="Column">type</div>
<div class="cell" data-label="Arabic">النوع</div>
<div class="cell" data-label="English">Type</div>
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

**Table Name:** RECollectDocLine, **Join Column:** rECollectDoc_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="details.discountValue">
<div class="cell" data-label="Property">details.discountValue</div>
<div class="cell" data-label="Column">discountValue</div>
<div class="cell" data-label="Arabic">الخصم | القيمة</div>
<div class="cell" data-label="English">Discount | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.dueDate">
<div class="cell" data-label="Property">details.dueDate</div>
<div class="cell" data-label="Column">dueDate</div>
<div class="cell" data-label="Arabic">تاريخ الاستحقاق</div>
<div class="cell" data-label="English">Due Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.financialPaper">
<div class="cell" data-label="Property">details.financialPaper</div>
<div class="cell" data-label="Column">financialPaper_id</div>
<div class="cell" data-label="Arabic">الورقة التجارية</div>
<div class="cell" data-label="English">Commercial Paper</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FinancialPaper](/modules/accounting-banks/FinancialPaper.md) 
</div>
</div>

<div class="row searchable" id="details.id">
<div class="cell" data-label="Property">details.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="details.installmentCode">
<div class="cell" data-label="Property">details.installmentCode</div>
<div class="cell" data-label="Column">installmentCode</div>
<div class="cell" data-label="Arabic">كود القسط</div>
<div class="cell" data-label="English">Installment Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.installmentDescription">
<div class="cell" data-label="Property">details.installmentDescription</div>
<div class="cell" data-label="Column">installmentDescription</div>
<div class="cell" data-label="Arabic">وصف القسط</div>
<div class="cell" data-label="English">Installment Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="details.installmentDoc">
<div class="cell" data-label="Property">details.installmentDoc</div>
<div class="cell gen-ref-column" data-label="Column">installmentDocActualCode,  installmentDocCode,  installmentDocEntityType,  installmentDocId</div>
<div class="cell" data-label="Arabic">مستند القسط</div>
<div class="cell" data-label="English">Installment doc</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.installmentTax1.afterValue">
<div class="cell" data-label="Property">details.installmentTax1.afterValue</div>
<div class="cell" data-label="Column">installmentTax1AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة القسط 1 | الصافي</div>
<div class="cell" data-label="English">Installment Tax 1 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.installmentTax1.maxNormalPercent">
<div class="cell" data-label="Property">details.installmentTax1.maxNormalPercent</div>
<div class="cell" data-label="Column">instllmntTx1MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة القسط 1 | %</div>
<div class="cell" data-label="English">Installment Tax 1 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.installmentTax1.percentage">
<div class="cell" data-label="Property">details.installmentTax1.percentage</div>
<div class="cell" data-label="Column">installmentTax1Percentage</div>
<div class="cell" data-label="Arabic">ضريبة القسط 1 | النسبة</div>
<div class="cell" data-label="English">Installment Tax 1 | Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.installmentTax1.value">
<div class="cell" data-label="Property">details.installmentTax1.value</div>
<div class="cell" data-label="Column">installmentTax1Value</div>
<div class="cell" data-label="Arabic">ضريبة القسط 1 | القيمة</div>
<div class="cell" data-label="English">Installment Tax 1 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.installmentTax2.afterValue">
<div class="cell" data-label="Property">details.installmentTax2.afterValue</div>
<div class="cell" data-label="Column">installmentTax2AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة القسط 2 | الصافي</div>
<div class="cell" data-label="English">Installment Tax 2 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.installmentTax2.maxNormalPercent">
<div class="cell" data-label="Property">details.installmentTax2.maxNormalPercent</div>
<div class="cell" data-label="Column">instllmntTx2MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة القسط 2 | %</div>
<div class="cell" data-label="English">Installment Tax 2 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.installmentTax2.percentage">
<div class="cell" data-label="Property">details.installmentTax2.percentage</div>
<div class="cell" data-label="Column">installmentTax2Percentage</div>
<div class="cell" data-label="Arabic">ضريبة القسط 2 | النسبة</div>
<div class="cell" data-label="English">Installment Tax 2 | Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.installmentTax2.value">
<div class="cell" data-label="Property">details.installmentTax2.value</div>
<div class="cell" data-label="Column">installmentTax2Value</div>
<div class="cell" data-label="Arabic">ضريبة القسط 2 | القيمة</div>
<div class="cell" data-label="English">Installment Tax 2 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.installmentValue">
<div class="cell" data-label="Property">details.installmentValue</div>
<div class="cell" data-label="Column">installmentValue</div>
<div class="cell" data-label="Arabic">قيمة القسط</div>
<div class="cell" data-label="English">Installment Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.installmentValueAfterTaxes">
<div class="cell" data-label="Property">details.installmentValueAfterTaxes</div>
<div class="cell" data-label="Column">installmentValueAfterTaxes</div>
<div class="cell" data-label="Arabic">قيمة القسط بعد الضريبة</div>
<div class="cell" data-label="English">Installment Value After Taxes</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.lineNumber">
<div class="cell" data-label="Property">details.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="details.netValue">
<div class="cell" data-label="Property">details.netValue</div>
<div class="cell" data-label="Column">netValue</div>
<div class="cell" data-label="Arabic">الصافي</div>
<div class="cell" data-label="English">Net value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.penaltyValue">
<div class="cell" data-label="Property">details.penaltyValue</div>
<div class="cell" data-label="Column">penaltyValue</div>
<div class="cell" data-label="Arabic">قيمة الغرامة</div>
<div class="cell" data-label="English">Penalty value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.reExpenseType">
<div class="cell" data-label="Property">details.reExpenseType</div>
<div class="cell" data-label="Column">reExpenseType_id</div>
<div class="cell" data-label="Arabic">نوع المصروف</div>
<div class="cell" data-label="English">Expense Type</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [REExpenseType](/modules/realestate/REExpenseType.md) 
</div>
</div>

<div class="row searchable" id="details.tax1.afterValue">
<div class="cell" data-label="Property">details.tax1.afterValue</div>
<div class="cell" data-label="Column">tax1AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | الصافي</div>
<div class="cell" data-label="English">Tax | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.tax1.maxNormalPercent">
<div class="cell" data-label="Property">details.tax1.maxNormalPercent</div>
<div class="cell" data-label="Column">tax1MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | %</div>
<div class="cell" data-label="English">Item Tax | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.tax1.percentage">
<div class="cell" data-label="Property">details.tax1.percentage</div>
<div class="cell" data-label="Column">tax1Percentage</div>
<div class="cell" data-label="Arabic">قيمة إضافية 1</div>
<div class="cell" data-label="English">Tax 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.tax1.value">
<div class="cell" data-label="Property">details.tax1.value</div>
<div class="cell" data-label="Column">tax1Value</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | القيمة</div>
<div class="cell" data-label="English">Tax value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.tax2.afterValue">
<div class="cell" data-label="Property">details.tax2.afterValue</div>
<div class="cell" data-label="Column">tax2AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | الصافي</div>
<div class="cell" data-label="English">Tax 2 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.tax2.maxNormalPercent">
<div class="cell" data-label="Property">details.tax2.maxNormalPercent</div>
<div class="cell" data-label="Column">tax2MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | %</div>
<div class="cell" data-label="English">Tax 2 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.tax2.percentage">
<div class="cell" data-label="Property">details.tax2.percentage</div>
<div class="cell" data-label="Column">tax2Percentage</div>
<div class="cell" data-label="Arabic">قيمة إضافية 2</div>
<div class="cell" data-label="English">Tax 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.tax2.value">
<div class="cell" data-label="Property">details.tax2.value</div>
<div class="cell" data-label="Column">tax2Value</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | القيمة</div>
<div class="cell" data-label="English">Tax 2 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.type">
<div class="cell" data-label="Property">details.type</div>
<div class="cell" data-label="Column">type</div>
<div class="cell" data-label="Arabic">النوع</div>
<div class="cell" data-label="English">Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="details.value">
<div class="cell" data-label="Property">details.value</div>
<div class="cell" data-label="Column">value</div>
<div class="cell" data-label="Arabic">القيمة المحصلة</div>
<div class="cell" data-label="English">Collected Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>


</div>
</div>

