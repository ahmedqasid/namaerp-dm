
<div class='tableName'>


# SrvCJobOrderClosing
</div>

**Arabic:** إغلاق أمر شغل
**English:** Job Order Closing

<ContentFilter/>


<div class='searchable'>
<a href='#materials'>materials (SrvCJOrderCloseMaterialLine) </a> , <a href='#operations'>operations (SrvCJOrderCloseOperationLine) </a>
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
</div><div class="row searchable" id="allowEditingHdrTaxInDetails">
<div class="cell" data-label="Property">allowEditingHdrTaxInDetails</div>
<div class="cell" data-label="Column">allowEditingHdrTaxInDetails</div>
<div class="cell" data-label="Arabic">السماح بتعديل ضريبة الفاتورة في السطر</div>
<div class="cell" data-label="English">Allow Editing Header Tax In Details</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="currentContact">
<div class="cell" data-label="Property">currentContact</div>
<div class="cell" data-label="Column">currentContact_id</div>
<div class="cell" data-label="Arabic">جهة اتصال العميل</div>
<div class="cell" data-label="English">Customer Contact</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Contact](/modules/basic/Contact.md) 
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

 [Customer](/modules/basic/Customer.md) 
</div>
</div>

<div class="row searchable" id="customerMoney.amount">
<div class="cell" data-label="Property">customerMoney.amount</div>
<div class="cell" data-label="Column">customerMoneyAmount</div>
<div class="cell" data-label="Arabic"> المبلغ</div>
<div class="cell" data-label="English"> Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="customerMoney.currency">
<div class="cell" data-label="Property">customerMoney.currency</div>
<div class="cell" data-label="Column">customerMoneyCurrency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/modules/basic/Currency.md) 
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

<div class="row searchable" id="expectedNextVisitDate">
<div class="cell" data-label="Property">expectedNextVisitDate</div>
<div class="cell" data-label="Column">expectedNextVisitDate</div>
<div class="cell" data-label="Arabic">التاريخ المتوقع للزيارة القادمة</div>
<div class="cell" data-label="English">Expected Next Visit Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="expectedNextVisitType">
<div class="cell" data-label="Property">expectedNextVisitType</div>
<div class="cell" data-label="Column">expectedNextVisitType_id</div>
<div class="cell" data-label="Arabic">النوع المتوقع للزيارة القادمة</div>
<div class="cell" data-label="English">Expected Next Visit Type</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SrvCVisitType](/modules/srvcenter/SrvCVisitType.md) 
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

<div class="row searchable" id="insuranceMoney.amount">
<div class="cell" data-label="Property">insuranceMoney.amount</div>
<div class="cell" data-label="Column">insuranceMoneyAmount</div>
<div class="cell" data-label="Arabic"> المبلغ</div>
<div class="cell" data-label="English"> Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="insuranceMoney.currency">
<div class="cell" data-label="Property">insuranceMoney.currency</div>
<div class="cell" data-label="Column">insuranceMoneyCurrency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/modules/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="internalMoney.amount">
<div class="cell" data-label="Property">internalMoney.amount</div>
<div class="cell" data-label="Column">internalMoneyAmount</div>
<div class="cell" data-label="Arabic"> المبلغ</div>
<div class="cell" data-label="English"> Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="internalMoney.currency">
<div class="cell" data-label="Property">internalMoney.currency</div>
<div class="cell" data-label="Column">internalMoneyCurrency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/modules/basic/Currency.md) 
</div>
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

 [SrvCJobOrder](/modules/srvcenter/SrvCJobOrder.md) 
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

<div class="row searchable" id="modifiableTax">
<div class="cell" data-label="Property">modifiableTax</div>
<div class="cell" data-label="Column">modifiableTax</div>
<div class="cell" data-label="Arabic">يمكن تعديل الضريبة</div>
<div class="cell" data-label="English">Modifiable Tax</div>
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

<div class="row searchable" id="product">
<div class="cell" data-label="Property">product</div>
<div class="cell" data-label="Column">product_id</div>
<div class="cell" data-label="Arabic">المنتج</div>
<div class="cell" data-label="English">Product</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SrvCProduct](/modules/srvcenter/SrvCProduct.md) 
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

<div class="row searchable" id="serviceRequest">
<div class="cell" data-label="Property">serviceRequest</div>
<div class="cell" data-label="Column">serviceRequest_id</div>
<div class="cell" data-label="Arabic">طلب الخدمة</div>
<div class="cell" data-label="English"> Service Request</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SrvCServiceRequest](/modules/srvcenter/SrvCServiceRequest.md) 
</div>
</div>

<div class="row searchable" id="taxPlan">
<div class="cell" data-label="Property">taxPlan</div>
<div class="cell" data-label="Column">taxPlan_id</div>
<div class="cell" data-label="Arabic"> سياسة الضريبة</div>
<div class="cell" data-label="English"> Tax Plan</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [TaxPlan](/modules/basic/TaxPlan.md) 
</div>
</div>

<div class="row searchable" id="taxable">
<div class="cell" data-label="Property">taxable</div>
<div class="cell" data-label="Column">taxable</div>
<div class="cell" data-label="Arabic">خاضع للضريبة</div>
<div class="cell" data-label="English">Taxable</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="warrantyMoney.amount">
<div class="cell" data-label="Property">warrantyMoney.amount</div>
<div class="cell" data-label="Column">warrantyMoneyAmount</div>
<div class="cell" data-label="Arabic"> المبلغ</div>
<div class="cell" data-label="English"> Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="warrantyMoney.currency">
<div class="cell" data-label="Property">warrantyMoney.currency</div>
<div class="cell" data-label="Column">warrantyMoneyCurrency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/modules/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="workCenter">
<div class="cell" data-label="Property">workCenter</div>
<div class="cell" data-label="Column">workCenter_id</div>
<div class="cell" data-label="Arabic">صالة الإنتاج</div>
<div class="cell" data-label="English">Work Center</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SrvCWorkCenter](/modules/srvcenter/SrvCWorkCenter.md) 
</div>
</div>


</div>
</div>

<div id='materials' title='materials' class='searchable'>

## materials (قطع غيار - Spare Parts)

<div class='tableName'>

**Table Name:** SrvCJOrderCloseMaterialLine, **Join Column:** srvCJobOrderClosing_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="materials.b1">
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

<div class="row searchable" id="materials.b4">
<div class="cell" data-label="Property">materials.b4</div>
<div class="cell" data-label="Column">b4</div>
<div class="cell" data-label="Arabic">Boolean 4</div>
<div class="cell" data-label="English">Boolean 4</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="materials.b5">
<div class="cell" data-label="Property">materials.b5</div>
<div class="cell" data-label="Column">b5</div>
<div class="cell" data-label="Arabic">Boolean 5</div>
<div class="cell" data-label="English">Boolean 5</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="materials.brand">
<div class="cell" data-label="Property">materials.brand</div>
<div class="cell" data-label="Column">brand_id</div>
<div class="cell" data-label="Arabic">الماركة</div>
<div class="cell" data-label="English">Item Brand</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SrvcBrand](/modules/srvcenter/SrvcBrand.md) 
</div>
</div>

<div class="row searchable" id="materials.customerPercentage">
<div class="cell" data-label="Property">materials.customerPercentage</div>
<div class="cell" data-label="Column">customerPercentage</div>
<div class="cell" data-label="Arabic">العميل | %</div>
<div class="cell" data-label="English">Customer | Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.customerValue">
<div class="cell" data-label="Property">materials.customerValue</div>
<div class="cell" data-label="Column">customerValue</div>
<div class="cell" data-label="Arabic">العميل | قيمة</div>
<div class="cell" data-label="English">Customer | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.discount1.afterValue">
<div class="cell" data-label="Property">materials.discount1.afterValue</div>
<div class="cell" data-label="Column">discount1AfterValue</div>
<div class="cell" data-label="Arabic">خصم 1 | صافي</div>
<div class="cell" data-label="English">Discount 1 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.discount1.maxNormalPercent">
<div class="cell" data-label="Property">materials.discount1.maxNormalPercent</div>
<div class="cell" data-label="Column">discount1MaxNormalPercent</div>
<div class="cell" data-label="Arabic">خصم 1 | النسبة العادية</div>
<div class="cell" data-label="English">Discount 1 | Normal Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.discount1.percentage">
<div class="cell" data-label="Property">materials.discount1.percentage</div>
<div class="cell" data-label="Column">discount1Percentage</div>
<div class="cell" data-label="Arabic">خصم 1 | %</div>
<div class="cell" data-label="English">Discount 1 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.discount1.value">
<div class="cell" data-label="Property">materials.discount1.value</div>
<div class="cell" data-label="Column">discount1Value</div>
<div class="cell" data-label="Arabic">خصم 1 | قيمة</div>
<div class="cell" data-label="English">Discount 1 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.discount2.afterValue">
<div class="cell" data-label="Property">materials.discount2.afterValue</div>
<div class="cell" data-label="Column">discount2AfterValue</div>
<div class="cell" data-label="Arabic">خصم 2 | صافي</div>
<div class="cell" data-label="English">Discount 2 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.discount2.maxNormalPercent">
<div class="cell" data-label="Property">materials.discount2.maxNormalPercent</div>
<div class="cell" data-label="Column">discount2MaxNormalPercent</div>
<div class="cell" data-label="Arabic">خصم 2 | النسبة العادية</div>
<div class="cell" data-label="English">Discount 2 | Normal Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.discount2.percentage">
<div class="cell" data-label="Property">materials.discount2.percentage</div>
<div class="cell" data-label="Column">discount2Percentage</div>
<div class="cell" data-label="Arabic">خصم 2 | %</div>
<div class="cell" data-label="English">Discount 2 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.discount2.value">
<div class="cell" data-label="Property">materials.discount2.value</div>
<div class="cell" data-label="Column">discount2Value</div>
<div class="cell" data-label="Arabic">خصم 2 | قيمة</div>
<div class="cell" data-label="English">Discount 2 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.id">
<div class="cell" data-label="Property">materials.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="materials.insurancePercentage">
<div class="cell" data-label="Property">materials.insurancePercentage</div>
<div class="cell" data-label="Column">insurancePercentage</div>
<div class="cell" data-label="Arabic">التأمين | %</div>
<div class="cell" data-label="English">Insurance | Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.insuranceValue">
<div class="cell" data-label="Property">materials.insuranceValue</div>
<div class="cell" data-label="Column">insuranceValue</div>
<div class="cell" data-label="Arabic">التأمين | قيمة</div>
<div class="cell" data-label="English">Insurance | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.internalPercentage">
<div class="cell" data-label="Property">materials.internalPercentage</div>
<div class="cell" data-label="Column">internalPercentage</div>
<div class="cell" data-label="Arabic">الشركة | %</div>
<div class="cell" data-label="English">Internal | Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.internalValue">
<div class="cell" data-label="Property">materials.internalValue</div>
<div class="cell" data-label="Column">internalValue</div>
<div class="cell" data-label="Arabic">الشركة | القيمة</div>
<div class="cell" data-label="English">Internal | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.issueType">
<div class="cell" data-label="Property">materials.issueType</div>
<div class="cell" data-label="Column">issueType</div>
<div class="cell" data-label="Arabic">طريقة الصرف</div>
<div class="cell" data-label="English">Issue Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="materials.itemSpecificDimensions.activePerc">
<div class="cell" data-label="Property">materials.itemSpecificDimensions.activePerc</div>
<div class="cell" data-label="Column">activePerc</div>
<div class="cell" data-label="Arabic">النسبة الفعالة</div>
<div class="cell" data-label="English">Active Percentage</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="materials.itemSpecificDimensions.box">
<div class="cell" data-label="Property">materials.itemSpecificDimensions.box</div>
<div class="cell" data-label="Column">box</div>
<div class="cell" data-label="Arabic">صندوق</div>
<div class="cell" data-label="English">Box</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="materials.itemSpecificDimensions.color">
<div class="cell" data-label="Property">materials.itemSpecificDimensions.color</div>
<div class="cell" data-label="Column">color</div>
<div class="cell" data-label="Arabic">اللون</div>
<div class="cell" data-label="English">Color</div>
<div class="cell" data-label="Type">Color</div>

</div>

<div class="row searchable" id="materials.itemSpecificDimensions.inactivePerc">
<div class="cell" data-label="Property">materials.itemSpecificDimensions.inactivePerc</div>
<div class="cell" data-label="Column">inactivePerc</div>
<div class="cell" data-label="Arabic">النسبة الغير فعالة</div>
<div class="cell" data-label="English">Inactive Percentage</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="materials.itemSpecificDimensions.locator">
<div class="cell" data-label="Property">materials.itemSpecificDimensions.locator</div>
<div class="cell" data-label="Column">locator_id</div>
<div class="cell" data-label="Arabic">الموقع</div>
<div class="cell" data-label="English">Locator</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Locator](/modules/supplychain/Locator.md) 
</div>
</div>

<div class="row searchable" id="materials.itemSpecificDimensions.lotId">
<div class="cell" data-label="Property">materials.itemSpecificDimensions.lotId</div>
<div class="cell" data-label="Column">lotId</div>
<div class="cell" data-label="Arabic">كود الشحنة</div>
<div class="cell" data-label="English">Lot ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="materials.itemSpecificDimensions.measures">
<div class="cell" data-label="Property">materials.itemSpecificDimensions.measures</div>
<div class="cell" data-label="Column">measures</div>
<div class="cell" data-label="Arabic">الأبعاد</div>
<div class="cell" data-label="English">Measures</div>
<div class="cell" data-label="Type">Measures</div>

</div>

<div class="row searchable" id="materials.itemSpecificDimensions.revisionId">
<div class="cell" data-label="Property">materials.itemSpecificDimensions.revisionId</div>
<div class="cell" data-label="Column">revisionId</div>
<div class="cell" data-label="Arabic">الإصدار</div>
<div class="cell" data-label="English">ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="materials.itemSpecificDimensions.secondSerial">
<div class="cell" data-label="Property">materials.itemSpecificDimensions.secondSerial</div>
<div class="cell" data-label="Column">secondSerial</div>
<div class="cell" data-label="Arabic">الرقم المسلسل الثاني</div>
<div class="cell" data-label="English">Second Serial</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="materials.itemSpecificDimensions.serialNumber">
<div class="cell" data-label="Property">materials.itemSpecificDimensions.serialNumber</div>
<div class="cell" data-label="Column">serialNumber</div>
<div class="cell" data-label="Arabic">الرقم المسلسل</div>
<div class="cell" data-label="English">Serial Number</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="materials.itemSpecificDimensions.size">
<div class="cell" data-label="Property">materials.itemSpecificDimensions.size</div>
<div class="cell" data-label="Column">size</div>
<div class="cell" data-label="Arabic">المقاس</div>
<div class="cell" data-label="English">Size</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="materials.itemSpecificDimensions.subItem">
<div class="cell" data-label="Property">materials.itemSpecificDimensions.subItem</div>
<div class="cell" data-label="Column">subItem_id</div>
<div class="cell" data-label="Arabic"> صنف فرعى</div>
<div class="cell" data-label="English"> SubItem</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SubItem](/modules/srvcenter-subitems/SubItem.md) 
</div>
</div>

<div class="row searchable" id="materials.itemSpecificDimensions.warehouse">
<div class="cell" data-label="Property">materials.itemSpecificDimensions.warehouse</div>
<div class="cell" data-label="Column">warehouse_id</div>
<div class="cell" data-label="Arabic">المخزن</div>
<div class="cell" data-label="English">Warehouse</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="materials.lineNumber">
<div class="cell" data-label="Property">materials.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="materials.material">
<div class="cell" data-label="Property">materials.material</div>
<div class="cell" data-label="Column">material_id</div>
<div class="cell" data-label="Arabic">مادة خام</div>
<div class="cell" data-label="English">Material</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/modules/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="materials.materialQty.baseQty.uom">
<div class="cell" data-label="Property">materials.materialQty.baseQty.uom</div>
<div class="cell" data-label="Column">baseUom_id</div>
<div class="cell" data-label="Arabic">الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="materials.materialQty.baseQty.value">
<div class="cell" data-label="Property">materials.materialQty.baseQty.value</div>
<div class="cell" data-label="Column">baseValue</div>
<div class="cell" data-label="Arabic">الكمية</div>
<div class="cell" data-label="English">Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.materialQty.itemAssortment">
<div class="cell" data-label="Property">materials.materialQty.itemAssortment</div>
<div class="cell" data-label="Column">itemAssortment_id</div>
<div class="cell" data-label="Arabic">التشكيلة</div>
<div class="cell" data-label="English">The Assortment</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemAssortment](/modules/supplychain/ItemAssortment.md) 
</div>
</div>

<div class="row searchable" id="materials.materialQty.measureQty">
<div class="cell" data-label="Property">materials.materialQty.measureQty</div>
<div class="cell" data-label="Column">measureQty</div>
<div class="cell" data-label="Arabic">الأبعاد | عدد</div>
<div class="cell" data-label="English">Measures | Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.materialQty.measures.clippedLength1">
<div class="cell" data-label="Property">materials.materialQty.measures.clippedLength1</div>
<div class="cell" data-label="Column">clippedLength1</div>
<div class="cell" data-label="Arabic">أبعادالجزء المقصوص 1 | الطول</div>
<div class="cell" data-label="English">Clipped Part1 Measures | Length</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.materialQty.measures.height">
<div class="cell" data-label="Property">materials.materialQty.measures.height</div>
<div class="cell" data-label="Column">height</div>
<div class="cell" data-label="Arabic">الأبعاد | ر</div>
<div class="cell" data-label="English">Measures | H</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.materialQty.measures.length">
<div class="cell" data-label="Property">materials.materialQty.measures.length</div>
<div class="cell" data-label="Column">length</div>
<div class="cell" data-label="Arabic">الأبعاد | ط</div>
<div class="cell" data-label="English">Measures | L</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.materialQty.measures.text">
<div class="cell" data-label="Property">materials.materialQty.measures.text</div>
<div class="cell" data-label="Column">text</div>
<div class="cell" data-label="Arabic">الأبعاد | الأبعاد</div>
<div class="cell" data-label="English">Measures | L * W * H</div>
<div class="cell" data-label="Type">Measures</div>

</div>

<div class="row searchable" id="materials.materialQty.measures.width">
<div class="cell" data-label="Property">materials.materialQty.measures.width</div>
<div class="cell" data-label="Column">width</div>
<div class="cell" data-label="Arabic">الأبعاد | ع</div>
<div class="cell" data-label="English">Measures | W</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.materialQty.quantity.primeQty.uom">
<div class="cell" data-label="Property">materials.materialQty.quantity.primeQty.uom</div>
<div class="cell" data-label="Column">pUom_id</div>
<div class="cell" data-label="Arabic">الوحدة الرئيسية | الوحدة</div>
<div class="cell" data-label="English">Primary | UOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="materials.materialQty.quantity.primeQty.value">
<div class="cell" data-label="Property">materials.materialQty.quantity.primeQty.value</div>
<div class="cell" data-label="Column">pValue</div>
<div class="cell" data-label="Arabic">الوحدة الرئيسية | الكمية</div>
<div class="cell" data-label="English">Primary | Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.materialQty.quantity.secondQty.uom">
<div class="cell" data-label="Property">materials.materialQty.quantity.secondQty.uom</div>
<div class="cell" data-label="Column">sUom_id</div>
<div class="cell" data-label="Arabic">الوحدة الثانية | الوحدة</div>
<div class="cell" data-label="English">Secondary | UOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="materials.materialQty.quantity.secondQty.value">
<div class="cell" data-label="Property">materials.materialQty.quantity.secondQty.value</div>
<div class="cell" data-label="Column">sValue</div>
<div class="cell" data-label="Arabic">الوحدة الثانية | الكمية</div>
<div class="cell" data-label="English">Secondary | Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.materialQty.uomRate">
<div class="cell" data-label="Property">materials.materialQty.uomRate</div>
<div class="cell" data-label="Column">uomRate</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.model">
<div class="cell" data-label="Property">materials.model</div>
<div class="cell" data-label="Column">model_id</div>
<div class="cell" data-label="Arabic">الموديل</div>
<div class="cell" data-label="English">Item Model</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SrvProductModel](/modules/srvcenter/SrvProductModel.md) 
</div>
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

<div class="row searchable" id="materials.n4">
<div class="cell" data-label="Property">materials.n4</div>
<div class="cell" data-label="Column">n4</div>
<div class="cell" data-label="Arabic">رقم 4</div>
<div class="cell" data-label="English">Number 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.n5">
<div class="cell" data-label="Property">materials.n5</div>
<div class="cell" data-label="Column">n5</div>
<div class="cell" data-label="Arabic">رقم 5</div>
<div class="cell" data-label="English">Number 5</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.price">
<div class="cell" data-label="Property">materials.price</div>
<div class="cell" data-label="Column">price</div>
<div class="cell" data-label="Arabic">السعر</div>
<div class="cell" data-label="English">Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.remarks">
<div class="cell" data-label="Property">materials.remarks</div>
<div class="cell" data-label="Column">remarks</div>
<div class="cell" data-label="Arabic">ملاحظات</div>
<div class="cell" data-label="English">Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="materials.restrictInIssuing">
<div class="cell" data-label="Property">materials.restrictInIssuing</div>
<div class="cell" data-label="Column">restrictInIssuing</div>
<div class="cell" data-label="Arabic">المطابقة في السحب</div>
<div class="cell" data-label="English">Restrict In Issuing</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="materials.task">
<div class="cell" data-label="Property">materials.task</div>
<div class="cell" data-label="Column">task_id</div>
<div class="cell" data-label="Arabic">المهمة</div>
<div class="cell" data-label="English">Task</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SrvCTask](/modules/srvcenter/SrvCTask.md) 
</div>
</div>

<div class="row searchable" id="materials.tax1.afterValue">
<div class="cell" data-label="Property">materials.tax1.afterValue</div>
<div class="cell" data-label="Column">tax1AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | الصافي</div>
<div class="cell" data-label="English">Tax | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.tax1.maxNormalPercent">
<div class="cell" data-label="Property">materials.tax1.maxNormalPercent</div>
<div class="cell" data-label="Column">tax1MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | %</div>
<div class="cell" data-label="English">Item Tax | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.tax1.percentage">
<div class="cell" data-label="Property">materials.tax1.percentage</div>
<div class="cell" data-label="Column">tax1Percentage</div>
<div class="cell" data-label="Arabic">قيمة إضافية 1</div>
<div class="cell" data-label="English">Tax 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.tax1.value">
<div class="cell" data-label="Property">materials.tax1.value</div>
<div class="cell" data-label="Column">tax1Value</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | القيمة</div>
<div class="cell" data-label="English">Tax value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.tax2.afterValue">
<div class="cell" data-label="Property">materials.tax2.afterValue</div>
<div class="cell" data-label="Column">tax2AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | الصافي</div>
<div class="cell" data-label="English">Tax 2 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.tax2.maxNormalPercent">
<div class="cell" data-label="Property">materials.tax2.maxNormalPercent</div>
<div class="cell" data-label="Column">tax2MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | %</div>
<div class="cell" data-label="English">Tax 2 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.tax2.percentage">
<div class="cell" data-label="Property">materials.tax2.percentage</div>
<div class="cell" data-label="Column">tax2Percentage</div>
<div class="cell" data-label="Arabic">قيمة إضافية 2</div>
<div class="cell" data-label="English">Tax 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.tax2.value">
<div class="cell" data-label="Property">materials.tax2.value</div>
<div class="cell" data-label="Column">tax2Value</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | القيمة</div>
<div class="cell" data-label="English">Tax 2 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.tax3.afterValue">
<div class="cell" data-label="Property">materials.tax3.afterValue</div>
<div class="cell" data-label="Column">tax3AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة 3 | الصافي</div>
<div class="cell" data-label="English">Tax 3 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.tax3.maxNormalPercent">
<div class="cell" data-label="Property">materials.tax3.maxNormalPercent</div>
<div class="cell" data-label="Column">tax3MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة 3 | %</div>
<div class="cell" data-label="English">Tax 3 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.tax3.percentage">
<div class="cell" data-label="Property">materials.tax3.percentage</div>
<div class="cell" data-label="Column">tax3Percentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.tax3.value">
<div class="cell" data-label="Property">materials.tax3.value</div>
<div class="cell" data-label="Column">tax3Value</div>
<div class="cell" data-label="Arabic">ضريبة 3 | القيمة</div>
<div class="cell" data-label="English">Tax 3 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.tax4.afterValue">
<div class="cell" data-label="Property">materials.tax4.afterValue</div>
<div class="cell" data-label="Column">tax4AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة 4 | الصافي</div>
<div class="cell" data-label="English">Tax 4 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.tax4.maxNormalPercent">
<div class="cell" data-label="Property">materials.tax4.maxNormalPercent</div>
<div class="cell" data-label="Column">tax4MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة 4 | %</div>
<div class="cell" data-label="English">Tax 4 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.tax4.percentage">
<div class="cell" data-label="Property">materials.tax4.percentage</div>
<div class="cell" data-label="Column">tax4Percentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.tax4.value">
<div class="cell" data-label="Property">materials.tax4.value</div>
<div class="cell" data-label="Column">tax4Value</div>
<div class="cell" data-label="Arabic">ضريبة 4 | القيمة</div>
<div class="cell" data-label="English">Tax 4 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.totalAfterDiscounts">
<div class="cell" data-label="Property">materials.totalAfterDiscounts</div>
<div class="cell" data-label="Column">totalAfterDiscounts</div>
<div class="cell" data-label="Arabic">الإجمالي بعد الخصم</div>
<div class="cell" data-label="English">Total After Discounts</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.totalAfterTaxes">
<div class="cell" data-label="Property">materials.totalAfterTaxes</div>
<div class="cell" data-label="Column">totalAfterTaxes</div>
<div class="cell" data-label="Arabic">الصافي بعد الضريبة</div>
<div class="cell" data-label="English">Total After Taxes</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.unitPrice">
<div class="cell" data-label="Property">materials.unitPrice</div>
<div class="cell" data-label="Column">unitPrice</div>
<div class="cell" data-label="Arabic">سعر الوحدة</div>
<div class="cell" data-label="English">Unit Price</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="materials.warrantyPercentage">
<div class="cell" data-label="Property">materials.warrantyPercentage</div>
<div class="cell" data-label="Column">warrantyPercentage</div>
<div class="cell" data-label="Arabic">الضمان  | %</div>
<div class="cell" data-label="English">Warranty | Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.warrantyValue">
<div class="cell" data-label="Property">materials.warrantyValue</div>
<div class="cell" data-label="Column">warrantyValue</div>
<div class="cell" data-label="Arabic">الضمان  | قيمة</div>
<div class="cell" data-label="English">Warranty | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>


</div>
</div>

<div id='operations' title='operations' class='searchable'>

## operations (العمليات - Operations)

<div class='tableName'>

**Table Name:** SrvCJOrderCloseOperationLine, **Join Column:** srvCJobOrderClosing_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="operations.b1">
<div class="cell" data-label="Property">operations.b1</div>
<div class="cell" data-label="Column">b1</div>
<div class="cell" data-label="Arabic">Boolean 1</div>
<div class="cell" data-label="English">Boolean 1</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operations.b2">
<div class="cell" data-label="Property">operations.b2</div>
<div class="cell" data-label="Column">b2</div>
<div class="cell" data-label="Arabic">Boolean 2</div>
<div class="cell" data-label="English">Boolean 2</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operations.b3">
<div class="cell" data-label="Property">operations.b3</div>
<div class="cell" data-label="Column">b3</div>
<div class="cell" data-label="Arabic">Boolean 3</div>
<div class="cell" data-label="English">Boolean 3</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operations.b4">
<div class="cell" data-label="Property">operations.b4</div>
<div class="cell" data-label="Column">b4</div>
<div class="cell" data-label="Arabic">Boolean 4</div>
<div class="cell" data-label="English">Boolean 4</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operations.b5">
<div class="cell" data-label="Property">operations.b5</div>
<div class="cell" data-label="Column">b5</div>
<div class="cell" data-label="Arabic">Boolean 5</div>
<div class="cell" data-label="English">Boolean 5</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operations.customerPercentage">
<div class="cell" data-label="Property">operations.customerPercentage</div>
<div class="cell" data-label="Column">customerPercentage</div>
<div class="cell" data-label="Arabic">العميل | %</div>
<div class="cell" data-label="English">Customer | Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.customerValue">
<div class="cell" data-label="Property">operations.customerValue</div>
<div class="cell" data-label="Column">customerValue</div>
<div class="cell" data-label="Arabic">العميل | قيمة</div>
<div class="cell" data-label="English">Customer | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.date1">
<div class="cell" data-label="Property">operations.date1</div>
<div class="cell" data-label="Column">date1</div>
<div class="cell" data-label="Arabic">تـــاريخ 1</div>
<div class="cell" data-label="English">Date 1</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="operations.date2">
<div class="cell" data-label="Property">operations.date2</div>
<div class="cell" data-label="Column">date2</div>
<div class="cell" data-label="Arabic">تـــاريخ 2</div>
<div class="cell" data-label="English">Date 2</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="operations.date3">
<div class="cell" data-label="Property">operations.date3</div>
<div class="cell" data-label="Column">date3</div>
<div class="cell" data-label="Arabic">تاريخ 3</div>
<div class="cell" data-label="English">Date3</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="operations.date4">
<div class="cell" data-label="Property">operations.date4</div>
<div class="cell" data-label="Column">date4</div>
<div class="cell" data-label="Arabic">تاريخ 4</div>
<div class="cell" data-label="English">Date4</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="operations.date5">
<div class="cell" data-label="Property">operations.date5</div>
<div class="cell" data-label="Column">date5</div>
<div class="cell" data-label="Arabic">تاريخ 5</div>
<div class="cell" data-label="English">Date5</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="operations.discount1.afterValue">
<div class="cell" data-label="Property">operations.discount1.afterValue</div>
<div class="cell" data-label="Column">discount1AfterValue</div>
<div class="cell" data-label="Arabic">خصم 1 | صافي</div>
<div class="cell" data-label="English">Discount 1 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.discount1.maxNormalPercent">
<div class="cell" data-label="Property">operations.discount1.maxNormalPercent</div>
<div class="cell" data-label="Column">discount1MaxNormalPercent</div>
<div class="cell" data-label="Arabic">خصم 1 | النسبة العادية</div>
<div class="cell" data-label="English">Discount 1 | Normal Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.discount1.percentage">
<div class="cell" data-label="Property">operations.discount1.percentage</div>
<div class="cell" data-label="Column">discount1Percentage</div>
<div class="cell" data-label="Arabic">خصم 1 | %</div>
<div class="cell" data-label="English">Discount 1 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.discount1.value">
<div class="cell" data-label="Property">operations.discount1.value</div>
<div class="cell" data-label="Column">discount1Value</div>
<div class="cell" data-label="Arabic">خصم 1 | قيمة</div>
<div class="cell" data-label="English">Discount 1 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.discount2.afterValue">
<div class="cell" data-label="Property">operations.discount2.afterValue</div>
<div class="cell" data-label="Column">discount2AfterValue</div>
<div class="cell" data-label="Arabic">خصم 2 | صافي</div>
<div class="cell" data-label="English">Discount 2 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.discount2.maxNormalPercent">
<div class="cell" data-label="Property">operations.discount2.maxNormalPercent</div>
<div class="cell" data-label="Column">discount2MaxNormalPercent</div>
<div class="cell" data-label="Arabic">خصم 2 | النسبة العادية</div>
<div class="cell" data-label="English">Discount 2 | Normal Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.discount2.percentage">
<div class="cell" data-label="Property">operations.discount2.percentage</div>
<div class="cell" data-label="Column">discount2Percentage</div>
<div class="cell" data-label="Arabic">خصم 2 | %</div>
<div class="cell" data-label="English">Discount 2 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.discount2.value">
<div class="cell" data-label="Property">operations.discount2.value</div>
<div class="cell" data-label="Column">discount2Value</div>
<div class="cell" data-label="Arabic">خصم 2 | قيمة</div>
<div class="cell" data-label="English">Discount 2 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.hourPrice">
<div class="cell" data-label="Property">operations.hourPrice</div>
<div class="cell" data-label="Column">hourPrice</div>
<div class="cell" data-label="Arabic">سعر الساعة</div>
<div class="cell" data-label="English">Hour Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.id">
<div class="cell" data-label="Property">operations.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="operations.insurancePercentage">
<div class="cell" data-label="Property">operations.insurancePercentage</div>
<div class="cell" data-label="Column">insurancePercentage</div>
<div class="cell" data-label="Arabic">التأمين | %</div>
<div class="cell" data-label="English">Insurance | Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.insuranceValue">
<div class="cell" data-label="Property">operations.insuranceValue</div>
<div class="cell" data-label="Column">insuranceValue</div>
<div class="cell" data-label="Arabic">التأمين | قيمة التأمين</div>
<div class="cell" data-label="English">Insurance Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.internalPercentage">
<div class="cell" data-label="Property">operations.internalPercentage</div>
<div class="cell" data-label="Column">internalPercentage</div>
<div class="cell" data-label="Arabic">الشركة | %</div>
<div class="cell" data-label="English">Internal | Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.internalValue">
<div class="cell" data-label="Property">operations.internalValue</div>
<div class="cell" data-label="Column">internalValue</div>
<div class="cell" data-label="Arabic">الشركة | القيمة</div>
<div class="cell" data-label="English">Internal | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.lineNumber">
<div class="cell" data-label="Property">operations.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="operations.masterRowId">
<div class="cell" data-label="Property">operations.masterRowId</div>
<div class="cell" data-label="Column">masterRowId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="operations.n1">
<div class="cell" data-label="Property">operations.n1</div>
<div class="cell" data-label="Column">n1</div>
<div class="cell" data-label="Arabic">رقم 1</div>
<div class="cell" data-label="English">Number 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.n2">
<div class="cell" data-label="Property">operations.n2</div>
<div class="cell" data-label="Column">n2</div>
<div class="cell" data-label="Arabic">رقم 2</div>
<div class="cell" data-label="English">Number 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.n3">
<div class="cell" data-label="Property">operations.n3</div>
<div class="cell" data-label="Column">n3</div>
<div class="cell" data-label="Arabic">رقم 3</div>
<div class="cell" data-label="English">Number 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.n4">
<div class="cell" data-label="Property">operations.n4</div>
<div class="cell" data-label="Column">n4</div>
<div class="cell" data-label="Arabic">رقم 4</div>
<div class="cell" data-label="English">Number 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.n5">
<div class="cell" data-label="Property">operations.n5</div>
<div class="cell" data-label="Column">n5</div>
<div class="cell" data-label="Arabic">رقم 5</div>
<div class="cell" data-label="English">Number 5</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.ref1">
<div class="cell" data-label="Property">operations.ref1</div>
<div class="cell gen-ref-column" data-label="Column">ref1ActualCode,  ref1Code,  ref1EntityType,  ref1Id</div>
<div class="cell" data-label="Arabic">مرجع 1</div>
<div class="cell" data-label="English">Reference 1</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="operations.ref2">
<div class="cell" data-label="Property">operations.ref2</div>
<div class="cell gen-ref-column" data-label="Column">ref2ActualCode,  ref2Code,  ref2EntityType,  ref2Id</div>
<div class="cell" data-label="Arabic">مرجع 2</div>
<div class="cell" data-label="English">Reference 2</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="operations.ref3">
<div class="cell" data-label="Property">operations.ref3</div>
<div class="cell gen-ref-column" data-label="Column">ref3ActualCode,  ref3Code,  ref3EntityType,  ref3Id</div>
<div class="cell" data-label="Arabic">مرجع 3</div>
<div class="cell" data-label="English">Reference 3</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="operations.ref4">
<div class="cell" data-label="Property">operations.ref4</div>
<div class="cell gen-ref-column" data-label="Column">ref4ActualCode,  ref4Code,  ref4EntityType,  ref4Id</div>
<div class="cell" data-label="Arabic">مرجع 4</div>
<div class="cell" data-label="English">Reference 4</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="operations.ref5">
<div class="cell" data-label="Property">operations.ref5</div>
<div class="cell gen-ref-column" data-label="Column">ref5ActualCode,  ref5Code,  ref5EntityType,  ref5Id</div>
<div class="cell" data-label="Arabic">مرجع 5</div>
<div class="cell" data-label="English">Reference 5</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="operations.remarks">
<div class="cell" data-label="Property">operations.remarks</div>
<div class="cell" data-label="Column">remarks</div>
<div class="cell" data-label="Arabic">ملاحظات</div>
<div class="cell" data-label="English">Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="operations.srvcOperation">
<div class="cell" data-label="Property">operations.srvcOperation</div>
<div class="cell" data-label="Column">srvcOperation_id</div>
<div class="cell" data-label="Arabic">الخدمة</div>
<div class="cell" data-label="English">Service Center Operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SrvCOperation](/modules/srvcenter/SrvCOperation.md) 
</div>
</div>

<div class="row searchable" id="operations.task">
<div class="cell" data-label="Property">operations.task</div>
<div class="cell" data-label="Column">task_id</div>
<div class="cell" data-label="Arabic">المهمة</div>
<div class="cell" data-label="English">Task</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SrvCTask](/modules/srvcenter/SrvCTask.md) 
</div>
</div>

<div class="row searchable" id="operations.tax1.afterValue">
<div class="cell" data-label="Property">operations.tax1.afterValue</div>
<div class="cell" data-label="Column">tax1AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | الصافي</div>
<div class="cell" data-label="English">Tax | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.tax1.maxNormalPercent">
<div class="cell" data-label="Property">operations.tax1.maxNormalPercent</div>
<div class="cell" data-label="Column">tax1MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | %</div>
<div class="cell" data-label="English">Item Tax | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.tax1.percentage">
<div class="cell" data-label="Property">operations.tax1.percentage</div>
<div class="cell" data-label="Column">tax1Percentage</div>
<div class="cell" data-label="Arabic">قيمة إضافية 1</div>
<div class="cell" data-label="English">Tax 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.tax1.value">
<div class="cell" data-label="Property">operations.tax1.value</div>
<div class="cell" data-label="Column">tax1Value</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | القيمة</div>
<div class="cell" data-label="English">Tax value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.tax2.afterValue">
<div class="cell" data-label="Property">operations.tax2.afterValue</div>
<div class="cell" data-label="Column">tax2AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | الصافي</div>
<div class="cell" data-label="English">Tax 2 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.tax2.maxNormalPercent">
<div class="cell" data-label="Property">operations.tax2.maxNormalPercent</div>
<div class="cell" data-label="Column">tax2MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | %</div>
<div class="cell" data-label="English">Tax 2 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.tax2.percentage">
<div class="cell" data-label="Property">operations.tax2.percentage</div>
<div class="cell" data-label="Column">tax2Percentage</div>
<div class="cell" data-label="Arabic">قيمة إضافية 2</div>
<div class="cell" data-label="English">Tax 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.tax2.value">
<div class="cell" data-label="Property">operations.tax2.value</div>
<div class="cell" data-label="Column">tax2Value</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | القيمة</div>
<div class="cell" data-label="English">Tax 2 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.tax3.afterValue">
<div class="cell" data-label="Property">operations.tax3.afterValue</div>
<div class="cell" data-label="Column">tax3AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة 3 | الصافي</div>
<div class="cell" data-label="English">Tax 3 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.tax3.maxNormalPercent">
<div class="cell" data-label="Property">operations.tax3.maxNormalPercent</div>
<div class="cell" data-label="Column">tax3MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة 3 | %</div>
<div class="cell" data-label="English">Tax 3 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.tax3.percentage">
<div class="cell" data-label="Property">operations.tax3.percentage</div>
<div class="cell" data-label="Column">tax3Percentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.tax3.value">
<div class="cell" data-label="Property">operations.tax3.value</div>
<div class="cell" data-label="Column">tax3Value</div>
<div class="cell" data-label="Arabic">ضريبة 3 | القيمة</div>
<div class="cell" data-label="English">Tax 3 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.tax4.afterValue">
<div class="cell" data-label="Property">operations.tax4.afterValue</div>
<div class="cell" data-label="Column">tax4AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة 4 | الصافي</div>
<div class="cell" data-label="English">Tax 4 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.tax4.maxNormalPercent">
<div class="cell" data-label="Property">operations.tax4.maxNormalPercent</div>
<div class="cell" data-label="Column">tax4MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة 4 | %</div>
<div class="cell" data-label="English">Tax 4 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.tax4.percentage">
<div class="cell" data-label="Property">operations.tax4.percentage</div>
<div class="cell" data-label="Column">tax4Percentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.tax4.value">
<div class="cell" data-label="Property">operations.tax4.value</div>
<div class="cell" data-label="Column">tax4Value</div>
<div class="cell" data-label="Arabic">ضريبة 4 | القيمة</div>
<div class="cell" data-label="English">Tax 4 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.text1">
<div class="cell" data-label="Property">operations.text1</div>
<div class="cell" data-label="Column">text1</div>
<div class="cell" data-label="Arabic">نــــص 1</div>
<div class="cell" data-label="English">Text 1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="operations.text2">
<div class="cell" data-label="Property">operations.text2</div>
<div class="cell" data-label="Column">text2</div>
<div class="cell" data-label="Arabic">نـــــص 2</div>
<div class="cell" data-label="English">Text 2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="operations.text3">
<div class="cell" data-label="Property">operations.text3</div>
<div class="cell" data-label="Column">text3</div>
<div class="cell" data-label="Arabic">نص 3</div>
<div class="cell" data-label="English">text3</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="operations.text4">
<div class="cell" data-label="Property">operations.text4</div>
<div class="cell" data-label="Column">text4</div>
<div class="cell" data-label="Arabic">نص 4</div>
<div class="cell" data-label="English">text4</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="operations.text5">
<div class="cell" data-label="Property">operations.text5</div>
<div class="cell" data-label="Column">text5</div>
<div class="cell" data-label="Arabic">نص 5</div>
<div class="cell" data-label="English">text5</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="operations.theCount">
<div class="cell" data-label="Property">operations.theCount</div>
<div class="cell" data-label="Column">theCount</div>
<div class="cell" data-label="Arabic">عدد</div>
<div class="cell" data-label="English">Count</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.totalAfterDiscounts">
<div class="cell" data-label="Property">operations.totalAfterDiscounts</div>
<div class="cell" data-label="Column">totalAfterDiscounts</div>
<div class="cell" data-label="Arabic">الإجمالي بعد الخصم</div>
<div class="cell" data-label="English">Total After Discounts</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.totalAfterTaxes">
<div class="cell" data-label="Property">operations.totalAfterTaxes</div>
<div class="cell" data-label="Column">totalAfterTaxes</div>
<div class="cell" data-label="Arabic">الصافي بعد الضريبة</div>
<div class="cell" data-label="English">Total After Taxes</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.totalCustomer">
<div class="cell" data-label="Property">operations.totalCustomer</div>
<div class="cell" data-label="Column">totalCustomer</div>
<div class="cell" data-label="Arabic">الإجمالى | العميل</div>
<div class="cell" data-label="English">Total | Customer</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.totalHours">
<div class="cell" data-label="Property">operations.totalHours</div>
<div class="cell" data-label="Column">totalHours</div>
<div class="cell" data-label="Arabic">المدة</div>
<div class="cell" data-label="English">Total Hours</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.totalInsurance">
<div class="cell" data-label="Property">operations.totalInsurance</div>
<div class="cell" data-label="Column">totalInsurance</div>
<div class="cell" data-label="Arabic">الإجمالى | التأمين</div>
<div class="cell" data-label="English">Total | Insurance</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.totalInternal">
<div class="cell" data-label="Property">operations.totalInternal</div>
<div class="cell" data-label="Column">totalInternal</div>
<div class="cell" data-label="Arabic">الإجمالى | الشركة</div>
<div class="cell" data-label="English">Total | Internal</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.totalPrice">
<div class="cell" data-label="Property">operations.totalPrice</div>
<div class="cell" data-label="Column">totalPrice</div>
<div class="cell" data-label="Arabic">إجمالي السعر</div>
<div class="cell" data-label="English">  Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.totalWarranty">
<div class="cell" data-label="Property">operations.totalWarranty</div>
<div class="cell" data-label="Column">totalWarranty</div>
<div class="cell" data-label="Arabic">الإجمالى | الضمان</div>
<div class="cell" data-label="English">Total | Warranty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.warrantyPercentage">
<div class="cell" data-label="Property">operations.warrantyPercentage</div>
<div class="cell" data-label="Column">warrantyPercentage</div>
<div class="cell" data-label="Arabic">الضمان  | %</div>
<div class="cell" data-label="English">Warranty | Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.warrantyValue">
<div class="cell" data-label="Property">operations.warrantyValue</div>
<div class="cell" data-label="Column">warrantyValue</div>
<div class="cell" data-label="Arabic">الضمان  | قيمة</div>
<div class="cell" data-label="English">Warranty | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operations.workCenter">
<div class="cell" data-label="Property">operations.workCenter</div>
<div class="cell" data-label="Column">workCenter_id</div>
<div class="cell" data-label="Arabic">صالة الإنتاج</div>
<div class="cell" data-label="English">Work Center</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SrvCWorkCenter](/modules/srvcenter/SrvCWorkCenter.md) 
</div>
</div>


</div>
</div>

