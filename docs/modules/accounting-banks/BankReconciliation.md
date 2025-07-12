# BankReconciliation
**Arabic:** مذكرة تسوية بنكية - مذكرات التسويات البنكية
**English:** Bank Reconciliation - Bank Reconciliations

<ContentFilter/>


<div class='searchable'>
<a href='#subsidiaryLines'>subsidiaryLines (BRCBankLine) </a> , <a href='#systemLines'>systemLines (BRCSystemLine) </a> , <a href='#unmatchedSubsidiaryLines'>unmatchedSubsidiaryLines (BRCUnMatchedBankLine) </a> , <a href='#unmatchedSystemLines'>unmatchedSystemLines (BRCUnMatchedSystemLine) </a>
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
</div><div class="row searchable" id="account">
<div class="cell" data-label="Property">account</div>
<div class="cell" data-label="Column">account_id</div>
<div class="cell" data-label="Arabic"> حساب</div>
<div class="cell" data-label="English"> Account</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Account](/modules/accounting/Account.md) 
</div>
</div>

<div class="row searchable" id="allowedDifferenceInDate">
<div class="cell" data-label="Property">allowedDifferenceInDate</div>
<div class="cell" data-label="Column">allowedDifferenceInDate</div>
<div class="cell" data-label="Arabic">المدى المسموح به لاختلاف التاريخ</div>
<div class="cell" data-label="English">Allowed Difference In Date</div>
<div class="cell" data-label="Type">Integer</div>

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

<div class="row searchable" id="bankAccount">
<div class="cell" data-label="Property">bankAccount</div>
<div class="cell" data-label="Column">bankAccount_id</div>
<div class="cell" data-label="Arabic">رقم حساب البنك</div>
<div class="cell" data-label="English">Bank account</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [BankAccount](/modules/accounting-banks/BankAccount.md) 
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

<div class="row searchable" id="collectSysLinesInLocal">
<div class="cell" data-label="Property">collectSysLinesInLocal</div>
<div class="cell" data-label="Column">collectSysLinesInLocal</div>
<div class="cell" data-label="Arabic">تجميع حركات النظام بالعملة المحلية وليس عملة الحساب</div>
<div class="cell" data-label="English">Collect System Lines With Local Currency Not Account Currency</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="importFromDate">
<div class="cell" data-label="Property">importFromDate</div>
<div class="cell" data-label="Column">importFromDate</div>
<div class="cell" data-label="Arabic">إستيراد من تاريخ</div>
<div class="cell" data-label="English">Import From Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="importToDate">
<div class="cell" data-label="Property">importToDate</div>
<div class="cell" data-label="Column">importToDate</div>
<div class="cell" data-label="Arabic">إستيراد الى تاريخ</div>
<div class="cell" data-label="English">Import To Date</div>
<div class="cell" data-label="Type">Date</div>

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

<div class="row searchable" id="matchFromSubsidiaryLines">
<div class="cell" data-label="Property">matchFromSubsidiaryLines</div>
<div class="cell" data-label="Column">matchFromSubsidiaryLines</div>
<div class="cell" data-label="Arabic">المطابقة تبدأ بالحركات البنكية</div>
<div class="cell" data-label="English">Match from Bank Lines</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="narrationMatchSequence">
<div class="cell" data-label="Property">narrationMatchSequence</div>
<div class="cell" data-label="Column">narrationMatchSequence</div>
<div class="cell" data-label="Arabic">عدد الحروف الواجب تطابقها في الشرح</div>
<div class="cell" data-label="English">Narration Match Sequence</div>
<div class="cell" data-label="Type">Integer</div>

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

<div class="row searchable" id="prevReconciliation">
<div class="cell" data-label="Property">prevReconciliation</div>
<div class="cell" data-label="Column">prevReconciliation_id</div>
<div class="cell" data-label="Arabic">المذكرة السابقة</div>
<div class="cell" data-label="English">Previous Reconciliation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [BankReconciliation](/modules/accounting-banks/BankReconciliation.md) 
</div>
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

<div class="row searchable" id="reconciliationStep">
<div class="cell" data-label="Property">reconciliationStep</div>
<div class="cell" data-label="Column">reconciliationStep</div>
<div class="cell" data-label="Arabic">المرحلة</div>
<div class="cell" data-label="English">Reconciliation Step</div>
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

<div class="row searchable" id="restrictEdit">
<div class="cell" data-label="Property">restrictEdit</div>
<div class="cell" data-label="Column">restrictEdit</div>
<div class="cell" data-label="Arabic">يمنع التعديل</div>
<div class="cell" data-label="English">Restrict Edit</div>
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

<div class="row searchable" id="subsidiaryFormulaID">
<div class="cell" data-label="Property">subsidiaryFormulaID</div>
<div class="cell" data-label="Column">subsidiaryFormulaID</div>
<div class="cell" data-label="Arabic"> بنك</div>
<div class="cell" data-label="English"> Bank</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="subsidiaryTotalCredit">
<div class="cell" data-label="Property">subsidiaryTotalCredit</div>
<div class="cell" data-label="Column">subsidiaryTotalCredit</div>
<div class="cell" data-label="Arabic">إجمالى دائن الحركات البنكية</div>
<div class="cell" data-label="English">Total Credit Subsidiary</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="subsidiaryTotalDebit">
<div class="cell" data-label="Property">subsidiaryTotalDebit</div>
<div class="cell" data-label="Column">subsidiaryTotalDebit</div>
<div class="cell" data-label="Arabic">إجمالى مدين الحركات البنكية</div>
<div class="cell" data-label="English">Total Debit Subsidiary</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="systemTotalCredit">
<div class="cell" data-label="Property">systemTotalCredit</div>
<div class="cell" data-label="Column">systemTotalCredit</div>
<div class="cell" data-label="Arabic">إجمالى دائن حركات النظام</div>
<div class="cell" data-label="English">Total Credit System</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="systemTotalDebit">
<div class="cell" data-label="Property">systemTotalDebit</div>
<div class="cell" data-label="Column">systemTotalDebit</div>
<div class="cell" data-label="Arabic">إجمالى مدين حركات النظام</div>
<div class="cell" data-label="English">Total Debit System</div>
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

<div class="row searchable" id="toDate">
<div class="cell" data-label="Property">toDate</div>
<div class="cell" data-label="Column">toDate</div>
<div class="cell" data-label="Arabic">إلى تاريخ</div>
<div class="cell" data-label="English">To Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="toleranceInValue">
<div class="cell" data-label="Property">toleranceInValue</div>
<div class="cell" data-label="Column">toleranceInValue</div>
<div class="cell" data-label="Arabic">أقصى قيمة للسماحية للمبلغ</div>
<div class="cell" data-label="English">Max. Tolerated Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalDiff">
<div class="cell" data-label="Property">totalDiff</div>
<div class="cell" data-label="Column">totalDiff</div>
<div class="cell" data-label="Arabic">إجمالي الفرق</div>
<div class="cell" data-label="English">Total Difference</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="unmatchedSubsidTotalCredit">
<div class="cell" data-label="Property">unmatchedSubsidTotalCredit</div>
<div class="cell" data-label="Column">unmatchedSubsidTotalCredit</div>
<div class="cell" data-label="Arabic">إجمالى دائن الحركات البنكيةالمعلقة</div>
<div class="cell" data-label="English">Total Credit Unmatched Subsidiary</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="unmatchedSubsidTotalDebit">
<div class="cell" data-label="Property">unmatchedSubsidTotalDebit</div>
<div class="cell" data-label="Column">unmatchedSubsidTotalDebit</div>
<div class="cell" data-label="Arabic">إجمالى مدين الحركات البنكية المعلقة</div>
<div class="cell" data-label="English">Total Debit Unmatched Subsidiary</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="unmatchedSysTotalCredit">
<div class="cell" data-label="Property">unmatchedSysTotalCredit</div>
<div class="cell" data-label="Column">unmatchedSysTotalCredit</div>
<div class="cell" data-label="Arabic">إجمالى دائن الحركات النظامية المعلقة</div>
<div class="cell" data-label="English">Total Credit Unmatched System</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="unmatchedSysTotalDebit">
<div class="cell" data-label="Property">unmatchedSysTotalDebit</div>
<div class="cell" data-label="Column">unmatchedSysTotalDebit</div>
<div class="cell" data-label="Arabic">إجمالى مدين الحركات النظامية المعلقة</div>
<div class="cell" data-label="English">Total Debit Unmatched System</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div id='subsidiaryLines' title='subsidiaryLines' class='searchable'>

## subsidiaryLines ( - )
**Table Name:** BRCBankLine, **Join Column:** bankReconciliation_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="subsidiaryLines.account">
<div class="cell" data-label="Property">subsidiaryLines.account</div>
<div class="cell" data-label="Column">account_id</div>
<div class="cell" data-label="Arabic"> حساب</div>
<div class="cell" data-label="English"> Account</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Account](/modules/accounting/Account.md) 
</div>
</div>

<div class="row searchable" id="subsidiaryLines.analysisSet">
<div class="cell" data-label="Property">subsidiaryLines.analysisSet</div>
<div class="cell" data-label="Column">analysisSet_id</div>
<div class="cell" data-label="Arabic">المجموعة التحليلية</div>
<div class="cell" data-label="English">Analysis set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/modules/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="subsidiaryLines.branch">
<div class="cell" data-label="Property">subsidiaryLines.branch</div>
<div class="cell" data-label="Column">branch_id</div>
<div class="cell" data-label="Arabic">الفرع</div>
<div class="cell" data-label="English">Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/modules/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="subsidiaryLines.credit.localAmount">
<div class="cell" data-label="Property">subsidiaryLines.credit.localAmount</div>
<div class="cell" data-label="Column">creditLocalAmount</div>
<div class="cell" data-label="Arabic">محلي|دائن</div>
<div class="cell" data-label="English">Local|Credit</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="subsidiaryLines.credit.rate">
<div class="cell" data-label="Property">subsidiaryLines.credit.rate</div>
<div class="cell" data-label="Column">creditRate</div>
<div class="cell" data-label="Arabic">المعدل</div>
<div class="cell" data-label="English">Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="subsidiaryLines.credit.value.amount">
<div class="cell" data-label="Property">subsidiaryLines.credit.value.amount</div>
<div class="cell" data-label="Column">creditValueAmount</div>
<div class="cell" data-label="Arabic">المبلغ|دائن</div>
<div class="cell" data-label="English">Amount|Credit</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="subsidiaryLines.credit.value.currency">
<div class="cell" data-label="Property">subsidiaryLines.credit.value.currency</div>
<div class="cell" data-label="Column">creditValueCurrency_id</div>
<div class="cell" data-label="Arabic"> العملة</div>
<div class="cell" data-label="English"> Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/modules/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="subsidiaryLines.debit.localAmount">
<div class="cell" data-label="Property">subsidiaryLines.debit.localAmount</div>
<div class="cell" data-label="Column">debitLocalAmount</div>
<div class="cell" data-label="Arabic">محلي|مدين</div>
<div class="cell" data-label="English">Local|Debit</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="subsidiaryLines.debit.rate">
<div class="cell" data-label="Property">subsidiaryLines.debit.rate</div>
<div class="cell" data-label="Column">debitRate</div>
<div class="cell" data-label="Arabic">المعدل</div>
<div class="cell" data-label="English">Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="subsidiaryLines.debit.value.amount">
<div class="cell" data-label="Property">subsidiaryLines.debit.value.amount</div>
<div class="cell" data-label="Column">debitValueAmount</div>
<div class="cell" data-label="Arabic">المبلغ|مدين</div>
<div class="cell" data-label="English">Amount|Debit</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="subsidiaryLines.debit.value.currency">
<div class="cell" data-label="Property">subsidiaryLines.debit.value.currency</div>
<div class="cell" data-label="Column">debitValueCurrency_id</div>
<div class="cell" data-label="Arabic"> العملة</div>
<div class="cell" data-label="English"> Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/modules/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="subsidiaryLines.department">
<div class="cell" data-label="Property">subsidiaryLines.department</div>
<div class="cell" data-label="Column">department_id</div>
<div class="cell" data-label="Arabic">الإدارة</div>
<div class="cell" data-label="English">Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/modules/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="subsidiaryLines.difference">
<div class="cell" data-label="Property">subsidiaryLines.difference</div>
<div class="cell" data-label="Column">difference</div>
<div class="cell" data-label="Arabic">الفرق</div>
<div class="cell" data-label="English">Difference</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="subsidiaryLines.entityDimension">
<div class="cell" data-label="Property">subsidiaryLines.entityDimension</div>
<div class="cell gen-ref-column" data-label="Column">entityDimensionActualCode,  entityDimensionCode,  entityDimensionEntityType,  entityDimensionId</div>
<div class="cell" data-label="Arabic">السجل</div>
<div class="cell" data-label="English">Entity Dimension</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="subsidiaryLines.fromPrevDoc">
<div class="cell" data-label="Property">subsidiaryLines.fromPrevDoc</div>
<div class="cell" data-label="Column">fromPrevDoc</div>
<div class="cell" data-label="Arabic">من المستند السابق</div>
<div class="cell" data-label="English">From Previous Document</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="subsidiaryLines.fromReverse">
<div class="cell" data-label="Property">subsidiaryLines.fromReverse</div>
<div class="cell" data-label="Column">fromReverse</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="subsidiaryLines.id">
<div class="cell" data-label="Property">subsidiaryLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="subsidiaryLines.lineNumber">
<div class="cell" data-label="Property">subsidiaryLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="subsidiaryLines.matchNarrationBy">
<div class="cell" data-label="Property">subsidiaryLines.matchNarrationBy</div>
<div class="cell" data-label="Column">matchNarrationBy</div>
<div class="cell" data-label="Arabic">مطابقة الشرح ب</div>
<div class="cell" data-label="English">Match Narration By</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="subsidiaryLines.matchedWith">
<div class="cell" data-label="Property">subsidiaryLines.matchedWith</div>
<div class="cell" data-label="Column">matchedWith</div>
<div class="cell" data-label="Arabic">مطابق ل</div>
<div class="cell" data-label="English">Matched with</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="subsidiaryLines.narration">
<div class="cell" data-label="Property">subsidiaryLines.narration</div>
<div class="cell" data-label="Column">narration</div>
<div class="cell" data-label="Arabic">الشرح</div>
<div class="cell" data-label="English">Narration</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="subsidiaryLines.originDoc">
<div class="cell" data-label="Property">subsidiaryLines.originDoc</div>
<div class="cell gen-ref-column" data-label="Column">originDocActualCode,  originDocCode,  originDocEntityType,  originDocId</div>
<div class="cell" data-label="Arabic"> # المستند</div>
<div class="cell" data-label="English"> Document #</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="subsidiaryLines.reverseOf">
<div class="cell" data-label="Property">subsidiaryLines.reverseOf</div>
<div class="cell" data-label="Column">reverseOf</div>
<div class="cell" data-label="Arabic">قيد عكسي ل</div>
<div class="cell" data-label="English">Reverse Ledger For</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="subsidiaryLines.satisfiedValue">
<div class="cell" data-label="Property">subsidiaryLines.satisfiedValue</div>
<div class="cell" data-label="Column">satisfiedValue</div>
<div class="cell" data-label="Arabic">القيمة المطابقة</div>
<div class="cell" data-label="English">Satisfied Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="subsidiaryLines.sector">
<div class="cell" data-label="Property">subsidiaryLines.sector</div>
<div class="cell" data-label="Column">sector_id</div>
<div class="cell" data-label="Arabic">القطاع</div>
<div class="cell" data-label="English">Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/modules/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="subsidiaryLines.subsidiary">
<div class="cell" data-label="Property">subsidiaryLines.subsidiary</div>
<div class="cell gen-ref-column" data-label="Column">subsidiaryActualCode,  subsidiaryCode,  subsidiaryEntityType,  subsidiaryId</div>
<div class="cell" data-label="Arabic">الذمة</div>
<div class="cell" data-label="English">Subsidiary</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="subsidiaryLines.unSatisfiedValue">
<div class="cell" data-label="Property">subsidiaryLines.unSatisfiedValue</div>
<div class="cell" data-label="Column">unSatisfiedValue</div>
<div class="cell" data-label="Arabic">القيمة المتبقيه</div>
<div class="cell" data-label="English">UnSatisfied Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="subsidiaryLines.valueDate">
<div class="cell" data-label="Property">subsidiaryLines.valueDate</div>
<div class="cell" data-label="Column">valueDate</div>
<div class="cell" data-label="Arabic">التاريخ الفعلي</div>
<div class="cell" data-label="English">Value Date</div>
<div class="cell" data-label="Type">Date</div>

</div>


</div>
</div>

<div id='systemLines' title='systemLines' class='searchable'>

## systemLines (حركات النظام - System Lines)
**Table Name:** BRCSystemLine, **Join Column:** bankReconciliation_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="systemLines.account">
<div class="cell" data-label="Property">systemLines.account</div>
<div class="cell" data-label="Column">account_id</div>
<div class="cell" data-label="Arabic"> حساب</div>
<div class="cell" data-label="English"> Account</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Account](/modules/accounting/Account.md) 
</div>
</div>

<div class="row searchable" id="systemLines.analysisSet">
<div class="cell" data-label="Property">systemLines.analysisSet</div>
<div class="cell" data-label="Column">analysisSet_id</div>
<div class="cell" data-label="Arabic">المجموعة التحليلية</div>
<div class="cell" data-label="English">Analysis set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/modules/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="systemLines.branch">
<div class="cell" data-label="Property">systemLines.branch</div>
<div class="cell" data-label="Column">branch_id</div>
<div class="cell" data-label="Arabic">الفرع</div>
<div class="cell" data-label="English">Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/modules/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="systemLines.credit.localAmount">
<div class="cell" data-label="Property">systemLines.credit.localAmount</div>
<div class="cell" data-label="Column">creditLocalAmount</div>
<div class="cell" data-label="Arabic">المبلغ|دائن</div>
<div class="cell" data-label="English">Amount|Credit</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="systemLines.credit.rate">
<div class="cell" data-label="Property">systemLines.credit.rate</div>
<div class="cell" data-label="Column">creditRate</div>
<div class="cell" data-label="Arabic">المعدل</div>
<div class="cell" data-label="English">Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="systemLines.credit.value.amount">
<div class="cell" data-label="Property">systemLines.credit.value.amount</div>
<div class="cell" data-label="Column">creditValueAmount</div>
<div class="cell" data-label="Arabic">المبلغ|دائن</div>
<div class="cell" data-label="English">Amount|Credit</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="systemLines.credit.value.currency">
<div class="cell" data-label="Property">systemLines.credit.value.currency</div>
<div class="cell" data-label="Column">creditValueCurrency_id</div>
<div class="cell" data-label="Arabic"> العملة</div>
<div class="cell" data-label="English"> Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/modules/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="systemLines.debit.localAmount">
<div class="cell" data-label="Property">systemLines.debit.localAmount</div>
<div class="cell" data-label="Column">debitLocalAmount</div>
<div class="cell" data-label="Arabic">المبلغ|مدين</div>
<div class="cell" data-label="English">Amount|Debit</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="systemLines.debit.rate">
<div class="cell" data-label="Property">systemLines.debit.rate</div>
<div class="cell" data-label="Column">debitRate</div>
<div class="cell" data-label="Arabic">المعدل</div>
<div class="cell" data-label="English">Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="systemLines.debit.value.amount">
<div class="cell" data-label="Property">systemLines.debit.value.amount</div>
<div class="cell" data-label="Column">debitValueAmount</div>
<div class="cell" data-label="Arabic">المبلغ|مدين</div>
<div class="cell" data-label="English">Amount|Debit</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="systemLines.debit.value.currency">
<div class="cell" data-label="Property">systemLines.debit.value.currency</div>
<div class="cell" data-label="Column">debitValueCurrency_id</div>
<div class="cell" data-label="Arabic"> العملة</div>
<div class="cell" data-label="English"> Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/modules/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="systemLines.department">
<div class="cell" data-label="Property">systemLines.department</div>
<div class="cell" data-label="Column">department_id</div>
<div class="cell" data-label="Arabic">الإدارة</div>
<div class="cell" data-label="English">Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/modules/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="systemLines.difference">
<div class="cell" data-label="Property">systemLines.difference</div>
<div class="cell" data-label="Column">difference</div>
<div class="cell" data-label="Arabic">الفرق</div>
<div class="cell" data-label="English">Difference</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="systemLines.entityDimension">
<div class="cell" data-label="Property">systemLines.entityDimension</div>
<div class="cell gen-ref-column" data-label="Column">entityDimensionActualCode,  entityDimensionCode,  entityDimensionEntityType,  entityDimensionId</div>
<div class="cell" data-label="Arabic">السجل</div>
<div class="cell" data-label="English">Entity Dimension</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="systemLines.fromPrevDoc">
<div class="cell" data-label="Property">systemLines.fromPrevDoc</div>
<div class="cell" data-label="Column">fromPrevDoc</div>
<div class="cell" data-label="Arabic">من المستند السابق</div>
<div class="cell" data-label="English">From Previous Document</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="systemLines.fromReverse">
<div class="cell" data-label="Property">systemLines.fromReverse</div>
<div class="cell" data-label="Column">fromReverse</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="systemLines.id">
<div class="cell" data-label="Property">systemLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="systemLines.lineNumber">
<div class="cell" data-label="Property">systemLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="systemLines.matchNarrationBy">
<div class="cell" data-label="Property">systemLines.matchNarrationBy</div>
<div class="cell" data-label="Column">matchNarrationBy</div>
<div class="cell" data-label="Arabic">مطابقة الشرح ب</div>
<div class="cell" data-label="English">Match Narration By</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="systemLines.matchedWith">
<div class="cell" data-label="Property">systemLines.matchedWith</div>
<div class="cell" data-label="Column">matchedWith</div>
<div class="cell" data-label="Arabic">مطابق ل</div>
<div class="cell" data-label="English">Matched with</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="systemLines.narration">
<div class="cell" data-label="Property">systemLines.narration</div>
<div class="cell" data-label="Column">narration</div>
<div class="cell" data-label="Arabic">الشرح</div>
<div class="cell" data-label="English">Narration</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="systemLines.originDoc">
<div class="cell" data-label="Property">systemLines.originDoc</div>
<div class="cell gen-ref-column" data-label="Column">originDocActualCode,  originDocCode,  originDocEntityType,  originDocId</div>
<div class="cell" data-label="Arabic"> # المستند</div>
<div class="cell" data-label="English"> Document #</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="systemLines.reverseOf">
<div class="cell" data-label="Property">systemLines.reverseOf</div>
<div class="cell" data-label="Column">reverseOf</div>
<div class="cell" data-label="Arabic">قيد عكسي ل</div>
<div class="cell" data-label="English">Reverse Ledger For</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="systemLines.satisfiedValue">
<div class="cell" data-label="Property">systemLines.satisfiedValue</div>
<div class="cell" data-label="Column">satisfiedValue</div>
<div class="cell" data-label="Arabic">القيمة المطابقة</div>
<div class="cell" data-label="English">Satisfied Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="systemLines.sector">
<div class="cell" data-label="Property">systemLines.sector</div>
<div class="cell" data-label="Column">sector_id</div>
<div class="cell" data-label="Arabic">القطاع</div>
<div class="cell" data-label="English">Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/modules/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="systemLines.sourceLedgerLine">
<div class="cell" data-label="Property">systemLines.sourceLedgerLine</div>
<div class="cell" data-label="Column">sourceLedgerLine</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="systemLines.subsidiary">
<div class="cell" data-label="Property">systemLines.subsidiary</div>
<div class="cell gen-ref-column" data-label="Column">subsidiaryActualCode,  subsidiaryCode,  subsidiaryEntityType,  subsidiaryId</div>
<div class="cell" data-label="Arabic">الذمة</div>
<div class="cell" data-label="English">Subsidiary</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="systemLines.unSatisfiedValue">
<div class="cell" data-label="Property">systemLines.unSatisfiedValue</div>
<div class="cell" data-label="Column">unSatisfiedValue</div>
<div class="cell" data-label="Arabic">القيمة المتبقيه</div>
<div class="cell" data-label="English">UnSatisfied Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="systemLines.valueDate">
<div class="cell" data-label="Property">systemLines.valueDate</div>
<div class="cell" data-label="Column">valueDate</div>
<div class="cell" data-label="Arabic">التاريخ الفعلي</div>
<div class="cell" data-label="English">Value Date</div>
<div class="cell" data-label="Type">Date</div>

</div>


</div>
</div>

<div id='unmatchedSubsidiaryLines' title='unmatchedSubsidiaryLines' class='searchable'>

## unmatchedSubsidiaryLines (حركات الذمة المعلقة - Unmatched Subsidiary Lines)
**Table Name:** BRCUnMatchedBankLine, **Join Column:** bankReconciliation_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="unmatchedSubsidiaryLines.account">
<div class="cell" data-label="Property">unmatchedSubsidiaryLines.account</div>
<div class="cell" data-label="Column">account_id</div>
<div class="cell" data-label="Arabic"> حساب</div>
<div class="cell" data-label="English"> Account</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Account](/modules/accounting/Account.md) 
</div>
</div>

<div class="row searchable" id="unmatchedSubsidiaryLines.analysisSet">
<div class="cell" data-label="Property">unmatchedSubsidiaryLines.analysisSet</div>
<div class="cell" data-label="Column">analysisSet_id</div>
<div class="cell" data-label="Arabic">المجموعة التحليلية</div>
<div class="cell" data-label="English">Analysis set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/modules/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="unmatchedSubsidiaryLines.branch">
<div class="cell" data-label="Property">unmatchedSubsidiaryLines.branch</div>
<div class="cell" data-label="Column">branch_id</div>
<div class="cell" data-label="Arabic">الفرع</div>
<div class="cell" data-label="English">Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/modules/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="unmatchedSubsidiaryLines.credit.localAmount">
<div class="cell" data-label="Property">unmatchedSubsidiaryLines.credit.localAmount</div>
<div class="cell" data-label="Column">creditLocalAmount</div>
<div class="cell" data-label="Arabic">محلي|دائن</div>
<div class="cell" data-label="English">Local|Credit</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="unmatchedSubsidiaryLines.credit.rate">
<div class="cell" data-label="Property">unmatchedSubsidiaryLines.credit.rate</div>
<div class="cell" data-label="Column">creditRate</div>
<div class="cell" data-label="Arabic">المعدل</div>
<div class="cell" data-label="English">Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="unmatchedSubsidiaryLines.credit.value.amount">
<div class="cell" data-label="Property">unmatchedSubsidiaryLines.credit.value.amount</div>
<div class="cell" data-label="Column">creditValueAmount</div>
<div class="cell" data-label="Arabic">المبلغ|دائن</div>
<div class="cell" data-label="English">Amount|Credit</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="unmatchedSubsidiaryLines.credit.value.currency">
<div class="cell" data-label="Property">unmatchedSubsidiaryLines.credit.value.currency</div>
<div class="cell" data-label="Column">creditValueCurrency_id</div>
<div class="cell" data-label="Arabic"> العملة</div>
<div class="cell" data-label="English"> Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/modules/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="unmatchedSubsidiaryLines.debit.localAmount">
<div class="cell" data-label="Property">unmatchedSubsidiaryLines.debit.localAmount</div>
<div class="cell" data-label="Column">debitLocalAmount</div>
<div class="cell" data-label="Arabic">محلي|مدين</div>
<div class="cell" data-label="English">Local|Debit</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="unmatchedSubsidiaryLines.debit.rate">
<div class="cell" data-label="Property">unmatchedSubsidiaryLines.debit.rate</div>
<div class="cell" data-label="Column">debitRate</div>
<div class="cell" data-label="Arabic">المعدل</div>
<div class="cell" data-label="English">Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="unmatchedSubsidiaryLines.debit.value.amount">
<div class="cell" data-label="Property">unmatchedSubsidiaryLines.debit.value.amount</div>
<div class="cell" data-label="Column">debitValueAmount</div>
<div class="cell" data-label="Arabic">المبلغ|مدين</div>
<div class="cell" data-label="English">Amount|Debit</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="unmatchedSubsidiaryLines.debit.value.currency">
<div class="cell" data-label="Property">unmatchedSubsidiaryLines.debit.value.currency</div>
<div class="cell" data-label="Column">debitValueCurrency_id</div>
<div class="cell" data-label="Arabic"> العملة</div>
<div class="cell" data-label="English"> Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/modules/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="unmatchedSubsidiaryLines.department">
<div class="cell" data-label="Property">unmatchedSubsidiaryLines.department</div>
<div class="cell" data-label="Column">department_id</div>
<div class="cell" data-label="Arabic">الإدارة</div>
<div class="cell" data-label="English">Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/modules/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="unmatchedSubsidiaryLines.difference">
<div class="cell" data-label="Property">unmatchedSubsidiaryLines.difference</div>
<div class="cell" data-label="Column">difference</div>
<div class="cell" data-label="Arabic">الفرق</div>
<div class="cell" data-label="English">Difference</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="unmatchedSubsidiaryLines.entityDimension">
<div class="cell" data-label="Property">unmatchedSubsidiaryLines.entityDimension</div>
<div class="cell gen-ref-column" data-label="Column">entityDimensionActualCode,  entityDimensionCode,  entityDimensionEntityType,  entityDimensionId</div>
<div class="cell" data-label="Arabic">السجل</div>
<div class="cell" data-label="English">Entity Dimension</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="unmatchedSubsidiaryLines.fromPrevDoc">
<div class="cell" data-label="Property">unmatchedSubsidiaryLines.fromPrevDoc</div>
<div class="cell" data-label="Column">fromPrevDoc</div>
<div class="cell" data-label="Arabic">من المستند السابق</div>
<div class="cell" data-label="English">From Previous Document</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="unmatchedSubsidiaryLines.fromReverse">
<div class="cell" data-label="Property">unmatchedSubsidiaryLines.fromReverse</div>
<div class="cell" data-label="Column">fromReverse</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="unmatchedSubsidiaryLines.id">
<div class="cell" data-label="Property">unmatchedSubsidiaryLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="unmatchedSubsidiaryLines.lineNumber">
<div class="cell" data-label="Property">unmatchedSubsidiaryLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="unmatchedSubsidiaryLines.matchNarrationBy">
<div class="cell" data-label="Property">unmatchedSubsidiaryLines.matchNarrationBy</div>
<div class="cell" data-label="Column">matchNarrationBy</div>
<div class="cell" data-label="Arabic">مطابقة الشرح ب</div>
<div class="cell" data-label="English">Match Narration By</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="unmatchedSubsidiaryLines.matchedWith">
<div class="cell" data-label="Property">unmatchedSubsidiaryLines.matchedWith</div>
<div class="cell" data-label="Column">matchedWith</div>
<div class="cell" data-label="Arabic">مطابق ل</div>
<div class="cell" data-label="English">Matched with</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="unmatchedSubsidiaryLines.narration">
<div class="cell" data-label="Property">unmatchedSubsidiaryLines.narration</div>
<div class="cell" data-label="Column">narration</div>
<div class="cell" data-label="Arabic">الشرح</div>
<div class="cell" data-label="English">Narration</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="unmatchedSubsidiaryLines.originDoc">
<div class="cell" data-label="Property">unmatchedSubsidiaryLines.originDoc</div>
<div class="cell gen-ref-column" data-label="Column">originDocActualCode,  originDocCode,  originDocEntityType,  originDocId</div>
<div class="cell" data-label="Arabic"> # المستند</div>
<div class="cell" data-label="English"> Document #</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="unmatchedSubsidiaryLines.reverseOf">
<div class="cell" data-label="Property">unmatchedSubsidiaryLines.reverseOf</div>
<div class="cell" data-label="Column">reverseOf</div>
<div class="cell" data-label="Arabic">قيد عكسي ل</div>
<div class="cell" data-label="English">Reverse Ledger For</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="unmatchedSubsidiaryLines.satisfiedValue">
<div class="cell" data-label="Property">unmatchedSubsidiaryLines.satisfiedValue</div>
<div class="cell" data-label="Column">satisfiedValue</div>
<div class="cell" data-label="Arabic">القيمة المطابقة</div>
<div class="cell" data-label="English">Satisfied Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="unmatchedSubsidiaryLines.sector">
<div class="cell" data-label="Property">unmatchedSubsidiaryLines.sector</div>
<div class="cell" data-label="Column">sector_id</div>
<div class="cell" data-label="Arabic">القطاع</div>
<div class="cell" data-label="English">Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/modules/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="unmatchedSubsidiaryLines.sourceLineNumber">
<div class="cell" data-label="Property">unmatchedSubsidiaryLines.sourceLineNumber</div>
<div class="cell" data-label="Column">sourceLineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="unmatchedSubsidiaryLines.subsidiary">
<div class="cell" data-label="Property">unmatchedSubsidiaryLines.subsidiary</div>
<div class="cell gen-ref-column" data-label="Column">subsidiaryActualCode,  subsidiaryCode,  subsidiaryEntityType,  subsidiaryId</div>
<div class="cell" data-label="Arabic">الذمة</div>
<div class="cell" data-label="English">Subsidiary</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="unmatchedSubsidiaryLines.unSatisfiedValue">
<div class="cell" data-label="Property">unmatchedSubsidiaryLines.unSatisfiedValue</div>
<div class="cell" data-label="Column">unSatisfiedValue</div>
<div class="cell" data-label="Arabic">القيمة المتبقيه</div>
<div class="cell" data-label="English">UnSatisfied Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="unmatchedSubsidiaryLines.valueDate">
<div class="cell" data-label="Property">unmatchedSubsidiaryLines.valueDate</div>
<div class="cell" data-label="Column">valueDate</div>
<div class="cell" data-label="Arabic">التاريخ الفعلي</div>
<div class="cell" data-label="English">Value Date</div>
<div class="cell" data-label="Type">Date</div>

</div>


</div>
</div>

<div id='unmatchedSystemLines' title='unmatchedSystemLines' class='searchable'>

## unmatchedSystemLines (حركات النظام المعلقة - Unmatched System Lines)
**Table Name:** BRCUnMatchedSystemLine, **Join Column:** bankReconciliation_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="unmatchedSystemLines.account">
<div class="cell" data-label="Property">unmatchedSystemLines.account</div>
<div class="cell" data-label="Column">account_id</div>
<div class="cell" data-label="Arabic"> حساب</div>
<div class="cell" data-label="English"> Account</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Account](/modules/accounting/Account.md) 
</div>
</div>

<div class="row searchable" id="unmatchedSystemLines.analysisSet">
<div class="cell" data-label="Property">unmatchedSystemLines.analysisSet</div>
<div class="cell" data-label="Column">analysisSet_id</div>
<div class="cell" data-label="Arabic">المجموعة التحليلية</div>
<div class="cell" data-label="English">Analysis set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/modules/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="unmatchedSystemLines.branch">
<div class="cell" data-label="Property">unmatchedSystemLines.branch</div>
<div class="cell" data-label="Column">branch_id</div>
<div class="cell" data-label="Arabic">الفرع</div>
<div class="cell" data-label="English">Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/modules/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="unmatchedSystemLines.credit.localAmount">
<div class="cell" data-label="Property">unmatchedSystemLines.credit.localAmount</div>
<div class="cell" data-label="Column">creditLocalAmount</div>
<div class="cell" data-label="Arabic">المبلغ|دائن</div>
<div class="cell" data-label="English">Amount|Credit</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="unmatchedSystemLines.credit.rate">
<div class="cell" data-label="Property">unmatchedSystemLines.credit.rate</div>
<div class="cell" data-label="Column">creditRate</div>
<div class="cell" data-label="Arabic">المعدل</div>
<div class="cell" data-label="English">Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="unmatchedSystemLines.credit.value.amount">
<div class="cell" data-label="Property">unmatchedSystemLines.credit.value.amount</div>
<div class="cell" data-label="Column">creditValueAmount</div>
<div class="cell" data-label="Arabic">المبلغ|دائن</div>
<div class="cell" data-label="English">Amount|Credit</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="unmatchedSystemLines.credit.value.currency">
<div class="cell" data-label="Property">unmatchedSystemLines.credit.value.currency</div>
<div class="cell" data-label="Column">creditValueCurrency_id</div>
<div class="cell" data-label="Arabic"> العملة</div>
<div class="cell" data-label="English"> Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/modules/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="unmatchedSystemLines.debit.localAmount">
<div class="cell" data-label="Property">unmatchedSystemLines.debit.localAmount</div>
<div class="cell" data-label="Column">debitLocalAmount</div>
<div class="cell" data-label="Arabic">المبلغ|مدين</div>
<div class="cell" data-label="English">Amount|Debit</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="unmatchedSystemLines.debit.rate">
<div class="cell" data-label="Property">unmatchedSystemLines.debit.rate</div>
<div class="cell" data-label="Column">debitRate</div>
<div class="cell" data-label="Arabic">المعدل</div>
<div class="cell" data-label="English">Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="unmatchedSystemLines.debit.value.amount">
<div class="cell" data-label="Property">unmatchedSystemLines.debit.value.amount</div>
<div class="cell" data-label="Column">debitValueAmount</div>
<div class="cell" data-label="Arabic">المبلغ|مدين</div>
<div class="cell" data-label="English">Amount|Debit</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="unmatchedSystemLines.debit.value.currency">
<div class="cell" data-label="Property">unmatchedSystemLines.debit.value.currency</div>
<div class="cell" data-label="Column">debitValueCurrency_id</div>
<div class="cell" data-label="Arabic"> العملة</div>
<div class="cell" data-label="English"> Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/modules/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="unmatchedSystemLines.department">
<div class="cell" data-label="Property">unmatchedSystemLines.department</div>
<div class="cell" data-label="Column">department_id</div>
<div class="cell" data-label="Arabic">الإدارة</div>
<div class="cell" data-label="English">Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/modules/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="unmatchedSystemLines.difference">
<div class="cell" data-label="Property">unmatchedSystemLines.difference</div>
<div class="cell" data-label="Column">difference</div>
<div class="cell" data-label="Arabic">الفرق</div>
<div class="cell" data-label="English">Difference</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="unmatchedSystemLines.entityDimension">
<div class="cell" data-label="Property">unmatchedSystemLines.entityDimension</div>
<div class="cell gen-ref-column" data-label="Column">entityDimensionActualCode,  entityDimensionCode,  entityDimensionEntityType,  entityDimensionId</div>
<div class="cell" data-label="Arabic">السجل</div>
<div class="cell" data-label="English">Entity Dimension</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="unmatchedSystemLines.fromPrevDoc">
<div class="cell" data-label="Property">unmatchedSystemLines.fromPrevDoc</div>
<div class="cell" data-label="Column">fromPrevDoc</div>
<div class="cell" data-label="Arabic">من المستند السابق</div>
<div class="cell" data-label="English">From Previous Document</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="unmatchedSystemLines.fromReverse">
<div class="cell" data-label="Property">unmatchedSystemLines.fromReverse</div>
<div class="cell" data-label="Column">fromReverse</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="unmatchedSystemLines.id">
<div class="cell" data-label="Property">unmatchedSystemLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="unmatchedSystemLines.lineNumber">
<div class="cell" data-label="Property">unmatchedSystemLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="unmatchedSystemLines.matchNarrationBy">
<div class="cell" data-label="Property">unmatchedSystemLines.matchNarrationBy</div>
<div class="cell" data-label="Column">matchNarrationBy</div>
<div class="cell" data-label="Arabic">مطابقة الشرح ب</div>
<div class="cell" data-label="English">Match Narration By</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="unmatchedSystemLines.matchedWith">
<div class="cell" data-label="Property">unmatchedSystemLines.matchedWith</div>
<div class="cell" data-label="Column">matchedWith</div>
<div class="cell" data-label="Arabic">مطابق ل</div>
<div class="cell" data-label="English">Matched with</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="unmatchedSystemLines.narration">
<div class="cell" data-label="Property">unmatchedSystemLines.narration</div>
<div class="cell" data-label="Column">narration</div>
<div class="cell" data-label="Arabic">الشرح</div>
<div class="cell" data-label="English">Narration</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="unmatchedSystemLines.originDoc">
<div class="cell" data-label="Property">unmatchedSystemLines.originDoc</div>
<div class="cell gen-ref-column" data-label="Column">originDocActualCode,  originDocCode,  originDocEntityType,  originDocId</div>
<div class="cell" data-label="Arabic"> # المستند</div>
<div class="cell" data-label="English"> Document #</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="unmatchedSystemLines.reverseOf">
<div class="cell" data-label="Property">unmatchedSystemLines.reverseOf</div>
<div class="cell" data-label="Column">reverseOf</div>
<div class="cell" data-label="Arabic">قيد عكسي ل</div>
<div class="cell" data-label="English">Reverse Ledger For</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="unmatchedSystemLines.satisfiedValue">
<div class="cell" data-label="Property">unmatchedSystemLines.satisfiedValue</div>
<div class="cell" data-label="Column">satisfiedValue</div>
<div class="cell" data-label="Arabic">القيمة المطابقة</div>
<div class="cell" data-label="English">Satisfied Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="unmatchedSystemLines.sector">
<div class="cell" data-label="Property">unmatchedSystemLines.sector</div>
<div class="cell" data-label="Column">sector_id</div>
<div class="cell" data-label="Arabic">القطاع</div>
<div class="cell" data-label="English">Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/modules/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="unmatchedSystemLines.sourceLedgerLine">
<div class="cell" data-label="Property">unmatchedSystemLines.sourceLedgerLine</div>
<div class="cell" data-label="Column">sourceLedgerLine</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="unmatchedSystemLines.sourceLineNumber">
<div class="cell" data-label="Property">unmatchedSystemLines.sourceLineNumber</div>
<div class="cell" data-label="Column">sourceLineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="unmatchedSystemLines.subsidiary">
<div class="cell" data-label="Property">unmatchedSystemLines.subsidiary</div>
<div class="cell gen-ref-column" data-label="Column">subsidiaryActualCode,  subsidiaryCode,  subsidiaryEntityType,  subsidiaryId</div>
<div class="cell" data-label="Arabic">الذمة</div>
<div class="cell" data-label="English">Subsidiary</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="unmatchedSystemLines.unSatisfiedValue">
<div class="cell" data-label="Property">unmatchedSystemLines.unSatisfiedValue</div>
<div class="cell" data-label="Column">unSatisfiedValue</div>
<div class="cell" data-label="Arabic">القيمة المتبقيه</div>
<div class="cell" data-label="English">UnSatisfied Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="unmatchedSystemLines.valueDate">
<div class="cell" data-label="Property">unmatchedSystemLines.valueDate</div>
<div class="cell" data-label="Column">valueDate</div>
<div class="cell" data-label="Arabic">التاريخ الفعلي</div>
<div class="cell" data-label="English">Value Date</div>
<div class="cell" data-label="Type">Date</div>

</div>


</div>
</div>

