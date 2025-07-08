# FADisposalDocument
**Arabic:** تخلص من الأصل
**English:** Fixed assets disposal document - Fixed assets disposal documents

<ContentFilter/>


<div class='searchable'>
<a href='#details'>details (FADisposalDocumentLine) </a>
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

<div class="row searchable" id="assetOldStatus">
<div class="cell" data-label="Property">assetOldStatus</div>
<div class="cell" data-label="Column">assetOldStatus</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="attachment">
<div class="cell" data-label="Property">attachment</div>
<div class="cell" data-label="Column">attachment_id</div>
<div class="cell" data-label="Arabic">مرفق</div>
<div class="cell" data-label="English">Attachment</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/entities/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="attachment2">
<div class="cell" data-label="Property">attachment2</div>
<div class="cell" data-label="Column">attachment2_id</div>
<div class="cell" data-label="Arabic">مرفق 2</div>
<div class="cell" data-label="English">Attachment 2</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/entities/system-tables/LargeData.md) 
</div>
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

<div class="row searchable" id="disposeValue">
<div class="cell" data-label="Property">disposeValue</div>
<div class="cell" data-label="Column">disposeValue</div>
<div class="cell" data-label="Arabic">قيمة التخلص</div>
<div class="cell" data-label="English">Dispose value</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="fixedAsset">
<div class="cell" data-label="Property">fixedAsset</div>
<div class="cell" data-label="Column">fixedAsset_id</div>
<div class="cell" data-label="Arabic">الأصل الثابت</div>
<div class="cell" data-label="English">Fixed Asset</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FixedAsset](/entities/fixedassets/FixedAsset.md) 
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

<div class="row searchable" id="generatedPurchaseDocument">
<div class="cell" data-label="Property">generatedPurchaseDocument</div>
<div class="cell" data-label="Column">generatedPurchaseDocument_id</div>
<div class="cell" data-label="Arabic">فاتورة المشتريات المنشأة</div>
<div class="cell" data-label="English">Generated Purchase Document</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FAPurchaseDocument](/entities/fixedassets/FAPurchaseDocument.md) 
</div>
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

<div class="row searchable" id="propertiesEntry">
<div class="cell" data-label="Property">propertiesEntry</div>
<div class="cell" data-label="Column">propertiesEntry_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type"></div>
<div class="cell" data-label="Foreign Table">

 [FAPropertiesEntry](/entities/system-tables/FAPropertiesEntry.md) 
</div>
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

<div class="row searchable" id="subsidiary">
<div class="cell" data-label="Property">subsidiary</div>
<div class="cell gen-ref-column" data-label="Column">subsidiaryActualCode,  subsidiaryCode,  subsidiaryEntityType,  subsidiaryId</div>
<div class="cell" data-label="Arabic">الذمة</div>
<div class="cell" data-label="English">Subsidiary</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="tax1Percent">
<div class="cell" data-label="Property">tax1Percent</div>
<div class="cell" data-label="Column">tax1Percent</div>
<div class="cell" data-label="Arabic">ضريبة 1 | %</div>
<div class="cell" data-label="English">Tax 1 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tax1Value">
<div class="cell" data-label="Property">tax1Value</div>
<div class="cell" data-label="Column">tax1Value</div>
<div class="cell" data-label="Arabic">ضريبة 1 | قيمة</div>
<div class="cell" data-label="English">Tax 1 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tax2Percent">
<div class="cell" data-label="Property">tax2Percent</div>
<div class="cell" data-label="Column">tax2Percent</div>
<div class="cell" data-label="Arabic">ضريبة 2 | %</div>
<div class="cell" data-label="English">Tax 2 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tax2Value">
<div class="cell" data-label="Property">tax2Value</div>
<div class="cell" data-label="Column">tax2Value</div>
<div class="cell" data-label="Arabic">ضريبة 2 | قيمة</div>
<div class="cell" data-label="English">Tax 2 | value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="taxAuthoritySysFields.submissionUUID">
<div class="cell" data-label="Property">taxAuthoritySysFields.submissionUUID</div>
<div class="cell" data-label="Column">submissionUUID</div>
<div class="cell" data-label="Arabic">معرف مرحلة الارسال</div>
<div class="cell" data-label="English">Submission ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxAuthoritySysFields.taxAuthEntityStatusType">
<div class="cell" data-label="Property">taxAuthoritySysFields.taxAuthEntityStatusType</div>
<div class="cell" data-label="Column">taxAuthEntityStatusType</div>
<div class="cell" data-label="Arabic">حالة المستند بالنسبة لمصلحة الضرائب</div>
<div class="cell" data-label="English">Tax Authority Document Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="taxAuthoritySysFields.taxAuthUUID">
<div class="cell" data-label="Property">taxAuthoritySysFields.taxAuthUUID</div>
<div class="cell" data-label="Column">taxAuthUUID</div>
<div class="cell" data-label="Arabic">معرف المستند داخل مصلحة الضرائب</div>
<div class="cell" data-label="English">Tax Authority Document View ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxAuthoritySysFields.temporaryId">
<div class="cell" data-label="Property">taxAuthoritySysFields.temporaryId</div>
<div class="cell" data-label="Column">temporaryId</div>
<div class="cell" data-label="Arabic">معرف لمطالعة المستند بدون تسجيل دخول</div>
<div class="cell" data-label="English">Tax Authority Not Registered Person Document View ID</div>
<div class="cell" data-label="Type">Text</div>

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

<div id='details' title='details' class='searchable'>

## details (التفاصيل - Details)
**Table Name:** FADisposalDocumentLine, **Join Column:** fADisposalDocument_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="details.assetName1">
<div class="cell" data-label="Property">details.assetName1</div>
<div class="cell" data-label="Column">assetName1</div>
<div class="cell" data-label="Arabic">الإسم العربي للأصل</div>
<div class="cell" data-label="English">Asset Name1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.assetName2">
<div class="cell" data-label="Property">details.assetName2</div>
<div class="cell" data-label="Column">assetName2</div>
<div class="cell" data-label="Arabic">الإسم الإنجليزي للأصل</div>
<div class="cell" data-label="English">Asset Name2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.assetNameFromPurchaseOrder">
<div class="cell" data-label="Property">details.assetNameFromPurchaseOrder</div>
<div class="cell" data-label="Column">assetNameFromPurchaseOrder</div>
<div class="cell" data-label="Arabic">اسم الاصل من أمر الشراء</div>
<div class="cell" data-label="English">Asset Name From Purchase Order</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.assetsCount">
<div class="cell" data-label="Property">details.assetsCount</div>
<div class="cell" data-label="Column">assetsCount</div>
<div class="cell" data-label="Arabic">العدد</div>
<div class="cell" data-label="English">Count</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="details.attachment">
<div class="cell" data-label="Property">details.attachment</div>
<div class="cell" data-label="Column">attachment_id</div>
<div class="cell" data-label="Arabic">مرفق</div>
<div class="cell" data-label="English">Attachment</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/entities/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="details.attachment2">
<div class="cell" data-label="Property">details.attachment2</div>
<div class="cell" data-label="Column">attachment2_id</div>
<div class="cell" data-label="Arabic">مرفق 2</div>
<div class="cell" data-label="English">Attachment 2</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/entities/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="details.custodian">
<div class="cell" data-label="Property">details.custodian</div>
<div class="cell" data-label="Column">custodian_id</div>
<div class="cell" data-label="Arabic">مسئول العهدة</div>
<div class="cell" data-label="English">Custodian</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/entities/basic/Employee.md) 
</div>
</div>

<div class="row searchable" id="details.depreciationStartDate">
<div class="cell" data-label="Property">details.depreciationStartDate</div>
<div class="cell" data-label="Column">depreciationStartDate</div>
<div class="cell" data-label="Arabic">تاريخ بداية الاهلاك</div>
<div class="cell" data-label="English">Depreciation Start Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.description1">
<div class="cell" data-label="Property">details.description1</div>
<div class="cell" data-label="Column">description1</div>
<div class="cell" data-label="Arabic">الوصف 1</div>
<div class="cell" data-label="English">description1</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="details.description2">
<div class="cell" data-label="Property">details.description2</div>
<div class="cell" data-label="Column">description2</div>
<div class="cell" data-label="Arabic">الوصف 2</div>
<div class="cell" data-label="English">description2</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="details.description3">
<div class="cell" data-label="Property">details.description3</div>
<div class="cell" data-label="Column">description3</div>
<div class="cell" data-label="Arabic">الوصف 3</div>
<div class="cell" data-label="English">description3</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="details.description4">
<div class="cell" data-label="Property">details.description4</div>
<div class="cell" data-label="Column">description4</div>
<div class="cell" data-label="Arabic">الوصف 4</div>
<div class="cell" data-label="English">description4</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="details.description5">
<div class="cell" data-label="Property">details.description5</div>
<div class="cell" data-label="Column">description5</div>
<div class="cell" data-label="Arabic">الوصف 5</div>
<div class="cell" data-label="English">description5</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="details.faClassification1">
<div class="cell" data-label="Property">details.faClassification1</div>
<div class="cell" data-label="Column">faClassification1_id</div>
<div class="cell" data-label="Arabic">تصنيف أصل ثابت 1</div>
<div class="cell" data-label="English">Fixed Asset Classification1</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FAClassification1](/entities/fixedassets/FAClassification1.md) 
</div>
</div>

<div class="row searchable" id="details.faClassification2">
<div class="cell" data-label="Property">details.faClassification2</div>
<div class="cell" data-label="Column">faClassification2_id</div>
<div class="cell" data-label="Arabic">تصنيف أصل ثابت 2</div>
<div class="cell" data-label="English">Fixed Asset Classification2</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FAClassification2](/entities/fixedassets/FAClassification2.md) 
</div>
</div>

<div class="row searchable" id="details.faClassification3">
<div class="cell" data-label="Property">details.faClassification3</div>
<div class="cell" data-label="Column">faClassification3_id</div>
<div class="cell" data-label="Arabic">تصنيف أصل ثابت 3</div>
<div class="cell" data-label="English">Fixed Asset Classification3</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FAClassification3](/entities/fixedassets/FAClassification3.md) 
</div>
</div>

<div class="row searchable" id="details.faClassification4">
<div class="cell" data-label="Property">details.faClassification4</div>
<div class="cell" data-label="Column">faClassification4_id</div>
<div class="cell" data-label="Arabic">تصنيف أصل ثابت 4</div>
<div class="cell" data-label="English">Fixed Asset Classification4</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FAClassification4](/entities/fixedassets/FAClassification4.md) 
</div>
</div>

<div class="row searchable" id="details.faClassification5">
<div class="cell" data-label="Property">details.faClassification5</div>
<div class="cell" data-label="Column">faClassification5_id</div>
<div class="cell" data-label="Arabic">تصنيف أصل ثابت 5</div>
<div class="cell" data-label="English">Fixed Asset Classification5</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FAClassification5](/entities/fixedassets/FAClassification5.md) 
</div>
</div>

<div class="row searchable" id="details.faType">
<div class="cell" data-label="Property">details.faType</div>
<div class="cell" data-label="Column">faType_id</div>
<div class="cell" data-label="Arabic"> نوع أصل</div>
<div class="cell" data-label="English"> Fixed Asset Type</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FAType](/entities/fixedassets/FAType.md) 
</div>
</div>

<div class="row searchable" id="details.fixedAsset">
<div class="cell" data-label="Property">details.fixedAsset</div>
<div class="cell" data-label="Column">fixedAsset_id</div>
<div class="cell" data-label="Arabic">الأصل الثابت</div>
<div class="cell" data-label="English">Fixed Asset</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FixedAsset](/entities/fixedassets/FixedAsset.md) 
</div>
</div>

<div class="row searchable" id="details.genericDimensions.analysisSet">
<div class="cell" data-label="Property">details.genericDimensions.analysisSet</div>
<div class="cell" data-label="Column">analysisSet_id</div>
<div class="cell" data-label="Arabic">المجموعة التحليلية</div>
<div class="cell" data-label="English">Analysis set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/entities/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="details.genericDimensions.branch">
<div class="cell" data-label="Property">details.genericDimensions.branch</div>
<div class="cell" data-label="Column">branch_id</div>
<div class="cell" data-label="Arabic">الفرع</div>
<div class="cell" data-label="English">Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/entities/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="details.genericDimensions.department">
<div class="cell" data-label="Property">details.genericDimensions.department</div>
<div class="cell" data-label="Column">department_id</div>
<div class="cell" data-label="Arabic">الإدارة</div>
<div class="cell" data-label="English">Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/entities/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="details.genericDimensions.legalEntity">
<div class="cell" data-label="Property">details.genericDimensions.legalEntity</div>
<div class="cell" data-label="Column">legalEntity_id</div>
<div class="cell" data-label="Arabic">الشركة</div>
<div class="cell" data-label="English">Legal Entity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [LegalEntity](/entities/basic/LegalEntity.md) 
</div>
</div>

<div class="row searchable" id="details.genericDimensions.sector">
<div class="cell" data-label="Property">details.genericDimensions.sector</div>
<div class="cell" data-label="Column">sector_id</div>
<div class="cell" data-label="Arabic">القطاع</div>
<div class="cell" data-label="English">Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/entities/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="details.group">
<div class="cell" data-label="Property">details.group</div>
<div class="cell" data-label="Column">group_id</div>
<div class="cell" data-label="Arabic">المجموعة</div>
<div class="cell" data-label="English">Group</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MasterGroup](/entities/basic/MasterGroup.md) 
</div>
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

<div class="row searchable" id="details.location">
<div class="cell" data-label="Property">details.location</div>
<div class="cell" data-label="Column">location_id</div>
<div class="cell" data-label="Arabic">الموقع المخزني</div>
<div class="cell" data-label="English">Location</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FALocation](/entities/fixedassets/FALocation.md) 
</div>
</div>

<div class="row searchable" id="details.locationEntry">
<div class="cell" data-label="Property">details.locationEntry</div>
<div class="cell" data-label="Column">locationEntry_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type"></div>
<div class="cell" data-label="Foreign Table">

 [FALocationEntry](/entities/system-tables/FALocationEntry.md) 
</div>
</div>

<div class="row searchable" id="details.manualRef1">
<div class="cell" data-label="Property">details.manualRef1</div>
<div class="cell" data-label="Column">manualRef1</div>
<div class="cell" data-label="Arabic">رقم المستند اليدوي</div>
<div class="cell" data-label="English">Manual Ref1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.marketValue">
<div class="cell" data-label="Property">details.marketValue</div>
<div class="cell" data-label="Column">marketValue</div>
<div class="cell" data-label="Arabic">القيمة السوقية</div>
<div class="cell" data-label="English">Market value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.n1">
<div class="cell" data-label="Property">details.n1</div>
<div class="cell" data-label="Column">n1</div>
<div class="cell" data-label="Arabic">رقم 1</div>
<div class="cell" data-label="English">Number 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.n2">
<div class="cell" data-label="Property">details.n2</div>
<div class="cell" data-label="Column">n2</div>
<div class="cell" data-label="Arabic">رقم 2</div>
<div class="cell" data-label="English">Number 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.n3">
<div class="cell" data-label="Property">details.n3</div>
<div class="cell" data-label="Column">n3</div>
<div class="cell" data-label="Arabic">رقم 3</div>
<div class="cell" data-label="English">Number 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.n4">
<div class="cell" data-label="Property">details.n4</div>
<div class="cell" data-label="Column">n4</div>
<div class="cell" data-label="Arabic">رقم 4</div>
<div class="cell" data-label="English">Number 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.n5">
<div class="cell" data-label="Property">details.n5</div>
<div class="cell" data-label="Column">n5</div>
<div class="cell" data-label="Arabic">رقم 5</div>
<div class="cell" data-label="English">Number 5</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.custom">
<div class="cell" data-label="Property">details.price.custom</div>
<div class="cell" data-label="Column">custom</div>
<div class="cell" data-label="Arabic">مخصص</div>
<div class="cell" data-label="English">Custom</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount1.afterValue">
<div class="cell" data-label="Property">details.price.discount1.afterValue</div>
<div class="cell" data-label="Column">dis1AfterValue</div>
<div class="cell" data-label="Arabic">خصم 1 | صافي</div>
<div class="cell" data-label="English">Discount 1 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount1.maxNormalPercent">
<div class="cell" data-label="Property">details.price.discount1.maxNormalPercent</div>
<div class="cell" data-label="Column">dis1MaxNormalPercent</div>
<div class="cell" data-label="Arabic">خصم 1 | النسبة العادية</div>
<div class="cell" data-label="English">Discount 1 | Normal Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount1.percentage">
<div class="cell" data-label="Property">details.price.discount1.percentage</div>
<div class="cell" data-label="Column">dis1Percentage</div>
<div class="cell" data-label="Arabic">خصم 1 | %</div>
<div class="cell" data-label="English">Discount 1 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount1.value">
<div class="cell" data-label="Property">details.price.discount1.value</div>
<div class="cell" data-label="Column">dis1Value</div>
<div class="cell" data-label="Arabic">خصم 1 | قيمة</div>
<div class="cell" data-label="English">Discount 1 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount2.afterValue">
<div class="cell" data-label="Property">details.price.discount2.afterValue</div>
<div class="cell" data-label="Column">dis2AfterValue</div>
<div class="cell" data-label="Arabic">خصم 2 | صافي</div>
<div class="cell" data-label="English">Discount 2 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount2.maxNormalPercent">
<div class="cell" data-label="Property">details.price.discount2.maxNormalPercent</div>
<div class="cell" data-label="Column">dis2MaxNormalPercent</div>
<div class="cell" data-label="Arabic">خصم 2 | النسبة العادية</div>
<div class="cell" data-label="English">Discount 2 | Normal Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount2.percentage">
<div class="cell" data-label="Property">details.price.discount2.percentage</div>
<div class="cell" data-label="Column">dis2Percentage</div>
<div class="cell" data-label="Arabic">خصم 2 | %</div>
<div class="cell" data-label="English">Discount 2 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount2.value">
<div class="cell" data-label="Property">details.price.discount2.value</div>
<div class="cell" data-label="Column">dis2Value</div>
<div class="cell" data-label="Arabic">خصم 2 | قيمة</div>
<div class="cell" data-label="English">Discount 2 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount3.afterValue">
<div class="cell" data-label="Property">details.price.discount3.afterValue</div>
<div class="cell" data-label="Column">dis3AfterValue</div>
<div class="cell" data-label="Arabic">خصم 3 | صافي</div>
<div class="cell" data-label="English">Discount 3 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount3.maxNormalPercent">
<div class="cell" data-label="Property">details.price.discount3.maxNormalPercent</div>
<div class="cell" data-label="Column">dis3MaxNormalPercent</div>
<div class="cell" data-label="Arabic">خصم 3 | النسبة العادية</div>
<div class="cell" data-label="English">Discount 3 | Normal Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount3.percentage">
<div class="cell" data-label="Property">details.price.discount3.percentage</div>
<div class="cell" data-label="Column">dis3Percentage</div>
<div class="cell" data-label="Arabic">خصم 3 | %</div>
<div class="cell" data-label="English">Discount 3 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount3.value">
<div class="cell" data-label="Property">details.price.discount3.value</div>
<div class="cell" data-label="Column">dis3Value</div>
<div class="cell" data-label="Arabic">خصم 3 | قيمة</div>
<div class="cell" data-label="English">Discount 3 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount4.afterValue">
<div class="cell" data-label="Property">details.price.discount4.afterValue</div>
<div class="cell" data-label="Column">dis4AfterValue</div>
<div class="cell" data-label="Arabic">خصم 4 | صافي</div>
<div class="cell" data-label="English">Discount 4 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount4.maxNormalPercent">
<div class="cell" data-label="Property">details.price.discount4.maxNormalPercent</div>
<div class="cell" data-label="Column">dis4MaxNormalPercent</div>
<div class="cell" data-label="Arabic">خصم 4 | النسبة العادية</div>
<div class="cell" data-label="English">Discount 4 | Normal Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount4.percentage">
<div class="cell" data-label="Property">details.price.discount4.percentage</div>
<div class="cell" data-label="Column">dis4Percentage</div>
<div class="cell" data-label="Arabic">خصم 4 | %</div>
<div class="cell" data-label="English">Discount 4 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount4.value">
<div class="cell" data-label="Property">details.price.discount4.value</div>
<div class="cell" data-label="Column">dis4Value</div>
<div class="cell" data-label="Arabic">خصم 4 | قيمة</div>
<div class="cell" data-label="English">Discount 4 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount5.afterValue">
<div class="cell" data-label="Property">details.price.discount5.afterValue</div>
<div class="cell" data-label="Column">dis5AfterValue</div>
<div class="cell" data-label="Arabic">خصم 5 | صافي</div>
<div class="cell" data-label="English">Discount 5 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount5.maxNormalPercent">
<div class="cell" data-label="Property">details.price.discount5.maxNormalPercent</div>
<div class="cell" data-label="Column">dis5MaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount5.percentage">
<div class="cell" data-label="Property">details.price.discount5.percentage</div>
<div class="cell" data-label="Column">dis5Percentage</div>
<div class="cell" data-label="Arabic">خصم 5 | %</div>
<div class="cell" data-label="English">Discount 5 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount5.value">
<div class="cell" data-label="Property">details.price.discount5.value</div>
<div class="cell" data-label="Column">dis5Value</div>
<div class="cell" data-label="Arabic">خصم 5 | قيمة</div>
<div class="cell" data-label="English">Discount 5 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount6.afterValue">
<div class="cell" data-label="Property">details.price.discount6.afterValue</div>
<div class="cell" data-label="Column">dis6AfterValue</div>
<div class="cell" data-label="Arabic">خصم 6 | صافي</div>
<div class="cell" data-label="English">Discount 6 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount6.maxNormalPercent">
<div class="cell" data-label="Property">details.price.discount6.maxNormalPercent</div>
<div class="cell" data-label="Column">dis6MaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount6.percentage">
<div class="cell" data-label="Property">details.price.discount6.percentage</div>
<div class="cell" data-label="Column">dis6Percentage</div>
<div class="cell" data-label="Arabic">خصم 6 | %</div>
<div class="cell" data-label="English">Discount 6 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount6.value">
<div class="cell" data-label="Property">details.price.discount6.value</div>
<div class="cell" data-label="Column">dis6Value</div>
<div class="cell" data-label="Arabic">خصم 6 | قيمة</div>
<div class="cell" data-label="English">Discount 6 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount7.afterValue">
<div class="cell" data-label="Property">details.price.discount7.afterValue</div>
<div class="cell" data-label="Column">dis7AfterValue</div>
<div class="cell" data-label="Arabic">خصم 7 | صافي</div>
<div class="cell" data-label="English">Discount 7 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount7.maxNormalPercent">
<div class="cell" data-label="Property">details.price.discount7.maxNormalPercent</div>
<div class="cell" data-label="Column">dis7MaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount7.percentage">
<div class="cell" data-label="Property">details.price.discount7.percentage</div>
<div class="cell" data-label="Column">dis7Percentage</div>
<div class="cell" data-label="Arabic">خصم 7 | %</div>
<div class="cell" data-label="English">Discount 7 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount7.value">
<div class="cell" data-label="Property">details.price.discount7.value</div>
<div class="cell" data-label="Column">dis7Value</div>
<div class="cell" data-label="Arabic">خصم 7 | قيمة</div>
<div class="cell" data-label="English">Discount 7 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount8.afterValue">
<div class="cell" data-label="Property">details.price.discount8.afterValue</div>
<div class="cell" data-label="Column">dis8AfterValue</div>
<div class="cell" data-label="Arabic">خصم 8 | صافي</div>
<div class="cell" data-label="English">Discount 8 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount8.maxNormalPercent">
<div class="cell" data-label="Property">details.price.discount8.maxNormalPercent</div>
<div class="cell" data-label="Column">dis8MaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount8.percentage">
<div class="cell" data-label="Property">details.price.discount8.percentage</div>
<div class="cell" data-label="Column">dis8Percentage</div>
<div class="cell" data-label="Arabic">خصم 8 | %</div>
<div class="cell" data-label="English">Discount 8 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount8.value">
<div class="cell" data-label="Property">details.price.discount8.value</div>
<div class="cell" data-label="Column">dis8Value</div>
<div class="cell" data-label="Arabic">خصم 8 | قيمة</div>
<div class="cell" data-label="English">Discount 8 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.headerDicount.afterValue">
<div class="cell" data-label="Property">details.price.headerDicount.afterValue</div>
<div class="cell" data-label="Column">hdrAfterValue</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.headerDicount.maxNormalPercent">
<div class="cell" data-label="Property">details.price.headerDicount.maxNormalPercent</div>
<div class="cell" data-label="Column">hdrMaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.headerDicount.percentage">
<div class="cell" data-label="Property">details.price.headerDicount.percentage</div>
<div class="cell" data-label="Column">hdrPercentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.headerDicount.value">
<div class="cell" data-label="Property">details.price.headerDicount.value</div>
<div class="cell" data-label="Column">hdrValue</div>
<div class="cell" data-label="Arabic">القيمة</div>
<div class="cell" data-label="English">Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.netValue">
<div class="cell" data-label="Property">details.price.netValue</div>
<div class="cell" data-label="Column">netValue</div>
<div class="cell" data-label="Arabic">الصافي</div>
<div class="cell" data-label="English">Net value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.price">
<div class="cell" data-label="Property">details.price.price</div>
<div class="cell" data-label="Column">price</div>
<div class="cell" data-label="Arabic">الأسعار | السعر الكلي</div>
<div class="cell" data-label="English">Prices | total price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.tax1.afterValue">
<div class="cell" data-label="Property">details.price.tax1.afterValue</div>
<div class="cell" data-label="Column">tax1AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | الصافي</div>
<div class="cell" data-label="English">Tax | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.tax1.maxNormalPercent">
<div class="cell" data-label="Property">details.price.tax1.maxNormalPercent</div>
<div class="cell" data-label="Column">tax1MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | %</div>
<div class="cell" data-label="English">Item Tax | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.tax1.percentage">
<div class="cell" data-label="Property">details.price.tax1.percentage</div>
<div class="cell" data-label="Column">tax1Percentage</div>
<div class="cell" data-label="Arabic">قيمة إضافية 1</div>
<div class="cell" data-label="English">Tax 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.tax1.value">
<div class="cell" data-label="Property">details.price.tax1.value</div>
<div class="cell" data-label="Column">tax1Value</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | القيمة</div>
<div class="cell" data-label="English">Tax value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.tax2.afterValue">
<div class="cell" data-label="Property">details.price.tax2.afterValue</div>
<div class="cell" data-label="Column">tax2AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | الصافي</div>
<div class="cell" data-label="English">Tax 2 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.tax2.maxNormalPercent">
<div class="cell" data-label="Property">details.price.tax2.maxNormalPercent</div>
<div class="cell" data-label="Column">tax2MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | %</div>
<div class="cell" data-label="English">Tax 2 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.tax2.percentage">
<div class="cell" data-label="Property">details.price.tax2.percentage</div>
<div class="cell" data-label="Column">tax2Percentage</div>
<div class="cell" data-label="Arabic">قيمة إضافية 2</div>
<div class="cell" data-label="English">Tax 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.tax2.value">
<div class="cell" data-label="Property">details.price.tax2.value</div>
<div class="cell" data-label="Column">tax2Value</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | القيمة</div>
<div class="cell" data-label="English">Tax 2 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.tax3.afterValue">
<div class="cell" data-label="Property">details.price.tax3.afterValue</div>
<div class="cell" data-label="Column">tax3AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة 3 | الصافي</div>
<div class="cell" data-label="English">Tax 3 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.tax3.maxNormalPercent">
<div class="cell" data-label="Property">details.price.tax3.maxNormalPercent</div>
<div class="cell" data-label="Column">tax3MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة 3 | %</div>
<div class="cell" data-label="English">Tax 3 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.tax3.percentage">
<div class="cell" data-label="Property">details.price.tax3.percentage</div>
<div class="cell" data-label="Column">tax3Percentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.tax3.value">
<div class="cell" data-label="Property">details.price.tax3.value</div>
<div class="cell" data-label="Column">tax3Value</div>
<div class="cell" data-label="Arabic">ضريبة 3 | القيمة</div>
<div class="cell" data-label="English">Tax 3 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.tax4.afterValue">
<div class="cell" data-label="Property">details.price.tax4.afterValue</div>
<div class="cell" data-label="Column">tax4AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة 4 | الصافي</div>
<div class="cell" data-label="English">Tax 4 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.tax4.maxNormalPercent">
<div class="cell" data-label="Property">details.price.tax4.maxNormalPercent</div>
<div class="cell" data-label="Column">tax4MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة 4 | %</div>
<div class="cell" data-label="English">Tax 4 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.tax4.percentage">
<div class="cell" data-label="Property">details.price.tax4.percentage</div>
<div class="cell" data-label="Column">tax4Percentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.tax4.value">
<div class="cell" data-label="Property">details.price.tax4.value</div>
<div class="cell" data-label="Column">tax4Value</div>
<div class="cell" data-label="Arabic">ضريبة 4 | القيمة</div>
<div class="cell" data-label="English">Tax 4 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.totalCashShare">
<div class="cell" data-label="Property">details.price.totalCashShare</div>
<div class="cell" data-label="Column">totalCashShare</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.totalPaymentMethodShare">
<div class="cell" data-label="Property">details.price.totalPaymentMethodShare</div>
<div class="cell" data-label="Column">totalPaymentMethodShare</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.unitPrice">
<div class="cell" data-label="Property">details.price.unitPrice</div>
<div class="cell" data-label="Column">unitPrice</div>
<div class="cell" data-label="Arabic">سعر الوحدة</div>
<div class="cell" data-label="English">Prices | Unit price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.properties.disposalDate">
<div class="cell" data-label="Property">details.properties.disposalDate</div>
<div class="cell" data-label="Column">disposalDate</div>
<div class="cell" data-label="Arabic">تاريخ التخلص من الأصل</div>
<div class="cell" data-label="English">Disposal Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.properties.remainigLifeValue">
<div class="cell" data-label="Property">details.properties.remainigLifeValue</div>
<div class="cell" data-label="Column">remainigLifeValue</div>
<div class="cell" data-label="Arabic">العمر المتبقي</div>
<div class="cell" data-label="English">Remaining Life</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="details.properties.salvageValue">
<div class="cell" data-label="Property">details.properties.salvageValue</div>
<div class="cell" data-label="Column">salvageValue</div>
<div class="cell" data-label="Arabic">قيمة الأصل كخردة</div>
<div class="cell" data-label="English">Salavge Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.properties.usefulLife">
<div class="cell" data-label="Property">details.properties.usefulLife</div>
<div class="cell" data-label="Column">usefulLife</div>
<div class="cell" data-label="Arabic">العمر الإفتراضي</div>
<div class="cell" data-label="English">Useful Life</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="details.propertiesEntry">
<div class="cell" data-label="Property">details.propertiesEntry</div>
<div class="cell" data-label="Column">propertiesEntry_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type"></div>
<div class="cell" data-label="Foreign Table">

 [FAPropertiesEntry](/entities/system-tables/FAPropertiesEntry.md) 
</div>
</div>

<div class="row searchable" id="details.quantity">
<div class="cell" data-label="Property">details.quantity</div>
<div class="cell" data-label="Column">quantity</div>
<div class="cell" data-label="Arabic">الكمية</div>
<div class="cell" data-label="English">Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.ref1">
<div class="cell" data-label="Property">details.ref1</div>
<div class="cell gen-ref-column" data-label="Column">ref1ActualCode,  ref1Code,  ref1EntityType,  ref1Id</div>
<div class="cell" data-label="Arabic">مرجع 1</div>
<div class="cell" data-label="English">Reference 1</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.ref2">
<div class="cell" data-label="Property">details.ref2</div>
<div class="cell gen-ref-column" data-label="Column">ref2ActualCode,  ref2Code,  ref2EntityType,  ref2Id</div>
<div class="cell" data-label="Arabic">مرجع 2</div>
<div class="cell" data-label="English">Reference 2</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.remarks">
<div class="cell" data-label="Property">details.remarks</div>
<div class="cell" data-label="Column">remarks</div>
<div class="cell" data-label="Arabic"> ملاحظات</div>
<div class="cell" data-label="English"> Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="details.serialNumber">
<div class="cell" data-label="Property">details.serialNumber</div>
<div class="cell" data-label="Column">serialNumber</div>
<div class="cell" data-label="Arabic">الرقم المسلسل</div>
<div class="cell" data-label="English">Serial Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.subsidiary">
<div class="cell" data-label="Property">details.subsidiary</div>
<div class="cell gen-ref-column" data-label="Column">subsidiaryActualCode,  subsidiaryCode,  subsidiaryEntityType,  subsidiaryId</div>
<div class="cell" data-label="Arabic">الذمة</div>
<div class="cell" data-label="English">Subsidiary</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.supplierCommercialRegNo">
<div class="cell" data-label="Property">details.supplierCommercialRegNo</div>
<div class="cell" data-label="Column">supplierCommercialRegNo</div>
<div class="cell" data-label="Arabic">رقم السجل التجاري للمورد</div>
<div class="cell" data-label="English">Supplier Commercial Registration Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.supplierName1">
<div class="cell" data-label="Property">details.supplierName1</div>
<div class="cell" data-label="Column">supplierName1</div>
<div class="cell" data-label="Arabic">اسم المورد العربي</div>
<div class="cell" data-label="English">Arabic Supplier Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.supplierName2">
<div class="cell" data-label="Property">details.supplierName2</div>
<div class="cell" data-label="Column">supplierName2</div>
<div class="cell" data-label="Arabic">اسم المورد الإنجليزي</div>
<div class="cell" data-label="English">English Supplier Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.supplierRef">
<div class="cell" data-label="Property">details.supplierRef</div>
<div class="cell" data-label="Column">supplierRef_id</div>
<div class="cell" data-label="Arabic"> مورد</div>
<div class="cell" data-label="English">  Supplier</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Supplier](/entities/basic/Supplier.md) 
</div>
</div>

<div class="row searchable" id="details.supplierTaxRegNo">
<div class="cell" data-label="Property">details.supplierTaxRegNo</div>
<div class="cell" data-label="Column">supplierTaxRegNo</div>
<div class="cell" data-label="Arabic">رقم التسجيل الضريبي للمورد</div>
<div class="cell" data-label="English">Supplier Tax Registration Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.text1">
<div class="cell" data-label="Property">details.text1</div>
<div class="cell" data-label="Column">text1</div>
<div class="cell" data-label="Arabic">نــــص 1</div>
<div class="cell" data-label="English">Text 1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.text2">
<div class="cell" data-label="Property">details.text2</div>
<div class="cell" data-label="Column">text2</div>
<div class="cell" data-label="Arabic">نـــــص 2</div>
<div class="cell" data-label="English">Text 2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.text3">
<div class="cell" data-label="Property">details.text3</div>
<div class="cell" data-label="Column">text3</div>
<div class="cell" data-label="Arabic">نص 3</div>
<div class="cell" data-label="English">text3</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.text4">
<div class="cell" data-label="Property">details.text4</div>
<div class="cell" data-label="Column">text4</div>
<div class="cell" data-label="Arabic">نص 4</div>
<div class="cell" data-label="English">text4</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.text5">
<div class="cell" data-label="Property">details.text5</div>
<div class="cell" data-label="Column">text5</div>
<div class="cell" data-label="Arabic">نص 5</div>
<div class="cell" data-label="English">text5</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.unDepreciable">
<div class="cell" data-label="Property">details.unDepreciable</div>
<div class="cell" data-label="Column">unDepreciable</div>
<div class="cell" data-label="Arabic">غير قابل للإهلاك</div>
<div class="cell" data-label="English">Undepreciable</div>
<div class="cell" data-label="Type">Boolean</div>

</div>


</div>

