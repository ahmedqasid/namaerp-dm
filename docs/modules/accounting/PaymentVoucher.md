# PaymentVoucher
**Arabic:** سند صرف - سندات صرف
**English:** Payment Voucher - Payment Vouchers

<ContentFilter/>


<div class='searchable'>
<a href='#costLines'>costLines (PaymentVoucherCostLine) </a> , <a href='#fblines'>fblines (PaymentFPDetailLine) </a> , <a href='#installmentLines'>installmentLines (PVInstallmentLine) </a> , <a href='#invoices'>invoices (PVInvoiceLine) </a> , <a href='#lines'>lines (PaymentDetailLine) </a> , <a href='#paymentLines'>paymentLines (PaymentVoucherPaymentLine) </a>
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
</div><div class="row searchable" id="RVremainigValue">
<div class="cell" data-label="Property">RVremainigValue</div>
<div class="cell" data-label="Column">rVremainigValue</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="amount.localAmount">
<div class="cell" data-label="Property">amount.localAmount</div>
<div class="cell" data-label="Column">amountLocalAmount</div>
<div class="cell" data-label="Arabic">المبلغ محلي</div>
<div class="cell" data-label="English">Local Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="amount.rate">
<div class="cell" data-label="Property">amount.rate</div>
<div class="cell" data-label="Column">amountRate</div>
<div class="cell" data-label="Arabic">المعدل</div>
<div class="cell" data-label="English">Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="amount.value.amount">
<div class="cell" data-label="Property">amount.value.amount</div>
<div class="cell" data-label="Column">amountValueAmount</div>
<div class="cell" data-label="Arabic"> المبلغ</div>
<div class="cell" data-label="English"> Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="amount.value.currency">
<div class="cell" data-label="Property">amount.value.currency</div>
<div class="cell" data-label="Column">amountValueCurrency_id</div>
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

<div class="row searchable" id="detailedVoucher">
<div class="cell" data-label="Property">detailedVoucher</div>
<div class="cell" data-label="Column">detailedVoucher</div>
<div class="cell" data-label="Arabic">سند تفصيلي</div>
<div class="cell" data-label="English">Detailed Voucher</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="entityDimension">
<div class="cell" data-label="Property">entityDimension</div>
<div class="cell gen-ref-column" data-label="Column">entityDimensionActualCode,  entityDimensionCode,  entityDimensionEntityType,  entityDimensionId</div>
<div class="cell" data-label="Arabic">السجل</div>
<div class="cell" data-label="English">Entity Dimension</div>
<div class="cell" data-label="Type">Genericreference</div>

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

<div class="row searchable" id="feesAccount">
<div class="cell" data-label="Property">feesAccount</div>
<div class="cell" data-label="Column">feesAccount_id</div>
<div class="cell" data-label="Arabic">حساب الرسوم</div>
<div class="cell" data-label="English">Fees Account</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Account](/modules/accounting/Account.md) 
</div>
</div>

<div class="row searchable" id="feesTaxValue">
<div class="cell" data-label="Property">feesTaxValue</div>
<div class="cell" data-label="Column">feesTaxValue</div>
<div class="cell" data-label="Arabic">قيمة ضريبة الرسوم</div>
<div class="cell" data-label="English">Fees Tax Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="feesValue">
<div class="cell" data-label="Property">feesValue</div>
<div class="cell" data-label="Column">feesValue</div>
<div class="cell" data-label="Arabic">قيمة الرسوم</div>
<div class="cell" data-label="English">Fees Value</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="firstSideAccount">
<div class="cell" data-label="Property">firstSideAccount</div>
<div class="cell" data-label="Column">firstSideAccount_id</div>
<div class="cell" data-label="Arabic"> حساب</div>
<div class="cell" data-label="English"> Account</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Account](/modules/accounting/Account.md) 
</div>
</div>

<div class="row searchable" id="firstSideAccountType">
<div class="cell" data-label="Property">firstSideAccountType</div>
<div class="cell" data-label="Column">firstSideAccountType</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="firstSideSubsidiary">
<div class="cell" data-label="Property">firstSideSubsidiary</div>
<div class="cell gen-ref-column" data-label="Column">firstSideSubsidiaryActualCode,  firstSideSubsidiaryCode,  firstSideSubsidiaryEntityType,  firstSideSubsidiaryId</div>
<div class="cell" data-label="Arabic">الذمة</div>
<div class="cell" data-label="English">Subsidiary</div>
<div class="cell" data-label="Type">Genericreference</div>

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

<div class="row searchable" id="installmentDoc">
<div class="cell" data-label="Property">installmentDoc</div>
<div class="cell gen-ref-column" data-label="Column">installmentDocActualCode,  installmentDocCode,  installmentDocEntityType,  installmentDocId</div>
<div class="cell" data-label="Arabic">مستند القسط</div>
<div class="cell" data-label="English">Installment doc</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="invoicesTotal">
<div class="cell" data-label="Property">invoicesTotal</div>
<div class="cell" data-label="Column">invoicesTotal</div>
<div class="cell" data-label="Arabic">إجمالي الفواتير</div>
<div class="cell" data-label="English">Invoices Total</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="ledger">
<div class="cell" data-label="Property">ledger</div>
<div class="cell" data-label="Column">ledger_id</div>
<div class="cell" data-label="Arabic">دفتر الحسابات</div>
<div class="cell" data-label="English">Ledger</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Ledger](/modules/accounting/Ledger.md) 
</div>
</div>

<div class="row searchable" id="ledgerTransReqId">
<div class="cell" data-label="Property">ledgerTransReqId</div>
<div class="cell" data-label="Column">ledgerTransReqId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="ledgerTransReqStatus">
<div class="cell" data-label="Property">ledgerTransReqStatus</div>
<div class="cell" data-label="Column">ledgerTransReqStatus</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Enum</div>

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

<div class="row searchable" id="localCurrency">
<div class="cell" data-label="Property">localCurrency</div>
<div class="cell" data-label="Column">localCurrency_id</div>
<div class="cell" data-label="Arabic"> العملة</div>
<div class="cell" data-label="English">Local Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/modules/basic/Currency.md) 
</div>
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

<div class="row searchable" id="narration2">
<div class="cell" data-label="Property">narration2</div>
<div class="cell" data-label="Column">narration2</div>
<div class="cell" data-label="Arabic">الشرح 2</div>
<div class="cell" data-label="English">Narration 2</div>
<div class="cell" data-label="Type">BigText</div>

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

<div class="row searchable" id="operationNumber">
<div class="cell" data-label="Property">operationNumber</div>
<div class="cell" data-label="Column">operationNumber</div>
<div class="cell" data-label="Arabic">رقم العملية</div>
<div class="cell" data-label="English">Operation Number</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="otherSideSubsidAccBagCode">
<div class="cell" data-label="Property">otherSideSubsidAccBagCode</div>
<div class="cell" data-label="Column">otherSideSubsidAccBagCode</div>
<div class="cell" data-label="Arabic">كود الحساب من الحقيبة</div>
<div class="cell" data-label="English">Account Bag Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="parentCode">
<div class="cell" data-label="Property">parentCode</div>
<div class="cell" data-label="Column">parentCode</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="partialSalaryPaymentRef">
<div class="cell" data-label="Property">partialSalaryPaymentRef</div>
<div class="cell" data-label="Column">partialSalaryPaymentRef_id</div>
<div class="cell" data-label="Arabic"> ملف صرف راتب جزئي</div>
<div class="cell" data-label="English"> Partial Salary Payment</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [PartialSalaryPayment](/modules/humanresource-payroll/PartialSalaryPayment.md) 
</div>
</div>

<div class="row searchable" id="paymentMethod">
<div class="cell" data-label="Property">paymentMethod</div>
<div class="cell" data-label="Column">paymentMethod_id</div>
<div class="cell" data-label="Arabic">طريقة الدفع</div>
<div class="cell" data-label="English"> Payment Method</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [PaymentMethod](/modules/basic/PaymentMethod.md) 
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

<div class="row searchable" id="projContract">
<div class="cell" data-label="Property">projContract</div>
<div class="cell gen-ref-column" data-label="Column">projContractActualCode,  projContractCode,  projContractEntityType,  projContractId</div>
<div class="cell" data-label="Arabic">عقد المشروع</div>
<div class="cell" data-label="English">Project Contract</div>
<div class="cell" data-label="Type">Genericreference</div>

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

<div class="row searchable" id="relatedSubsidiary">
<div class="cell" data-label="Property">relatedSubsidiary</div>
<div class="cell gen-ref-column" data-label="Column">relatedSubsidiaryActualCode,  relatedSubsidiaryCode,  relatedSubsidiaryEntityType,  relatedSubsidiaryId</div>
<div class="cell" data-label="Arabic">الذمة المتعلق</div>
<div class="cell" data-label="English">Related Subsidiary</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="remarks">
<div class="cell" data-label="Property">remarks</div>
<div class="cell" data-label="Column">remark</div>
<div class="cell" data-label="Arabic"> الشرح</div>
<div class="cell" data-label="English"> Narration</div>
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

<div class="row searchable" id="sideSubsidAccBagCode">
<div class="cell" data-label="Property">sideSubsidAccBagCode</div>
<div class="cell" data-label="Column">sideSubsidAccBagCode</div>
<div class="cell" data-label="Arabic">كود الحساب من الحقيبة</div>
<div class="cell" data-label="English">Account Bag Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="subsidiaryAccountType">
<div class="cell" data-label="Property">subsidiaryAccountType</div>
<div class="cell" data-label="Column">subsidiaryAccountType</div>
<div class="cell" data-label="Arabic">نوع الحافظة</div>
<div class="cell" data-label="English">Subsidiary account type</div>
<div class="cell" data-label="Type">Enum</div>

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

<div class="row searchable" id="totalCredit">
<div class="cell" data-label="Property">totalCredit</div>
<div class="cell" data-label="Column">totalCredit</div>
<div class="cell" data-label="Arabic">إجمالي الدائن</div>
<div class="cell" data-label="English">Credit Only</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalDebit">
<div class="cell" data-label="Property">totalDebit</div>
<div class="cell" data-label="Column">totalDebit</div>
<div class="cell" data-label="Arabic">إجمالي المدين</div>
<div class="cell" data-label="English">Debit Only</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalDiff">
<div class="cell" data-label="Property">totalDiff</div>
<div class="cell" data-label="Column">totalDiff</div>
<div class="cell" data-label="Arabic">إجمالي الفرق</div>
<div class="cell" data-label="English">Total Difference</div>
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

<div id='costLines' title='costLines' class='searchable'>

## costLines (توزيع التكلفة - Cost Allocation)
**Table Name:** PaymentVoucherCostLine, **Join Column:** paymentVoucher_id
<div class="nama-table">
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

<div class="row searchable" id="costLines.committedBefore">
<div class="cell" data-label="Property">costLines.committedBefore</div>
<div class="cell" data-label="Column">committedBefore</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="costLines.contract">
<div class="cell" data-label="Property">costLines.contract</div>
<div class="cell gen-ref-column" data-label="Column">contractActualCode,  contractCode,  contractEntityType,  contractId</div>
<div class="cell" data-label="Arabic">العقد</div>
<div class="cell" data-label="English">Contract</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="costLines.cost">
<div class="cell" data-label="Property">costLines.cost</div>
<div class="cell" data-label="Column">cost</div>
<div class="cell" data-label="Arabic">التكلفة</div>
<div class="cell" data-label="English">Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="costLines.costExecution">
<div class="cell" data-label="Property">costLines.costExecution</div>
<div class="cell gen-ref-column" data-label="Column">costExecutionActualCode,  costExecutionCode,  costExecutionEntityType,  costExecutionId</div>
<div class="cell" data-label="Arabic">حصر التكاليف</div>
<div class="cell" data-label="English">Cost Execution</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="costLines.estimatedTermCode">
<div class="cell" data-label="Property">costLines.estimatedTermCode</div>
<div class="cell" data-label="Column">estimatedTermCode</div>
<div class="cell" data-label="Arabic">كود بند الموازنة التقديرية</div>
<div class="cell" data-label="English">Estimated Term Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="costLines.estimatedTermRemark">
<div class="cell" data-label="Property">costLines.estimatedTermRemark</div>
<div class="cell" data-label="Column">estimatedTermRemark</div>
<div class="cell" data-label="Arabic">وصف بند الموازنة التقديرية</div>
<div class="cell" data-label="English">Estimated Term Remark</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="costLines.executiveTermCode">
<div class="cell" data-label="Property">costLines.executiveTermCode</div>
<div class="cell" data-label="Column">executiveTermCode</div>
<div class="cell" data-label="Arabic">كود بند الموازنة التنفيذية</div>
<div class="cell" data-label="English">Executive Term Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="costLines.executiveTermRemark">
<div class="cell" data-label="Property">costLines.executiveTermRemark</div>
<div class="cell" data-label="Column">executiveTermRemark</div>
<div class="cell" data-label="Arabic">وصف بند الموازنة التنفيذية</div>
<div class="cell" data-label="English">Executive Term Remark</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="costLines.id">
<div class="cell" data-label="Property">costLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="costLines.lineNumber">
<div class="cell" data-label="Property">costLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="costLines.narration">
<div class="cell" data-label="Property">costLines.narration</div>
<div class="cell" data-label="Column">narration</div>
<div class="cell" data-label="Arabic">الشرح</div>
<div class="cell" data-label="English">Narration</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="costLines.ref1">
<div class="cell" data-label="Property">costLines.ref1</div>
<div class="cell gen-ref-column" data-label="Column">ref1ActualCode,  ref1Code,  ref1EntityType,  ref1Id</div>
<div class="cell" data-label="Arabic">مرجع 1</div>
<div class="cell" data-label="English">Reference 1</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="costLines.ref2">
<div class="cell" data-label="Property">costLines.ref2</div>
<div class="cell gen-ref-column" data-label="Column">ref2ActualCode,  ref2Code,  ref2EntityType,  ref2Id</div>
<div class="cell" data-label="Arabic">مرجع 2</div>
<div class="cell" data-label="English">Reference 2</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="costLines.remarks">
<div class="cell" data-label="Property">costLines.remarks</div>
<div class="cell" data-label="Column">remarks</div>
<div class="cell" data-label="Arabic">ملاحظات</div>
<div class="cell" data-label="English">Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="costLines.standardTerm">
<div class="cell" data-label="Property">costLines.standardTerm</div>
<div class="cell" data-label="Column">standardTerm_id</div>
<div class="cell" data-label="Arabic">البند القياسي</div>
<div class="cell" data-label="English">Standard Term</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ContractingStandardTerm](/modules/contracting/ContractingStandardTerm.md) 
</div>
</div>

<div class="row searchable" id="costLines.termAnalysisCardRef">
<div class="cell" data-label="Property">costLines.termAnalysisCardRef</div>
<div class="cell" data-label="Column">termAnalysisCardRef_id</div>
<div class="cell" data-label="Arabic">كارت التحليل</div>
<div class="cell" data-label="English">Term Analysis Card</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [TermAnalysisCard](/modules/contracting/TermAnalysisCard.md) 
</div>
</div>

<div class="row searchable" id="costLines.termCategory">
<div class="cell" data-label="Property">costLines.termCategory</div>
<div class="cell" data-label="Column">termCategory_id</div>
<div class="cell" data-label="Arabic">تصنيف البند</div>
<div class="cell" data-label="English">Term Category</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ContrTermCategory](/modules/contracting/ContrTermCategory.md) 
</div>
</div>

<div class="row searchable" id="costLines.termCategory2">
<div class="cell" data-label="Property">costLines.termCategory2</div>
<div class="cell" data-label="Column">termCategory2_id</div>
<div class="cell" data-label="Arabic">تصنيف البند 2</div>
<div class="cell" data-label="English">Term Category 2</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ContrTermCategory2](/modules/basic/ContrTermCategory2.md) 
</div>
</div>

<div class="row searchable" id="costLines.termCode">
<div class="cell" data-label="Property">costLines.termCode</div>
<div class="cell" data-label="Column">termCode</div>
<div class="cell" data-label="Arabic">كود البند</div>
<div class="cell" data-label="English">Term Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="costLines.termRemarks">
<div class="cell" data-label="Property">costLines.termRemarks</div>
<div class="cell" data-label="Column">termRemarks</div>
<div class="cell" data-label="Arabic">وصف البند</div>
<div class="cell" data-label="English">Term Remarks</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="costLines.valueDate">
<div class="cell" data-label="Property">costLines.valueDate</div>
<div class="cell" data-label="Column">valueDate</div>
<div class="cell" data-label="Arabic">التاريخ الفعلي</div>
<div class="cell" data-label="English">Value Date</div>
<div class="cell" data-label="Type">Date</div>

</div>


</div>
</div>

<div id='fblines' title='fblines' class='searchable'>

## fblines ( - )
**Table Name:** PaymentFPDetailLine, **Join Column:** paymentVoucher_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="fblines.currencyRate">
<div class="cell" data-label="Property">fblines.currencyRate</div>
<div class="cell" data-label="Column">currencyRate</div>
<div class="cell" data-label="Arabic">المعدل</div>
<div class="cell" data-label="English">Currency Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="fblines.date1">
<div class="cell" data-label="Property">fblines.date1</div>
<div class="cell" data-label="Column">date1</div>
<div class="cell" data-label="Arabic">تـــاريخ 1</div>
<div class="cell" data-label="English">Date 1</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="fblines.date2">
<div class="cell" data-label="Property">fblines.date2</div>
<div class="cell" data-label="Column">date2</div>
<div class="cell" data-label="Arabic">تـــاريخ 2</div>
<div class="cell" data-label="English">Date 2</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="fblines.financialPaper">
<div class="cell" data-label="Property">fblines.financialPaper</div>
<div class="cell" data-label="Column">financialPaper_id</div>
<div class="cell" data-label="Arabic"> ورقة تجارية</div>
<div class="cell" data-label="English"> Commercial Paper</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FinancialPaper](/modules/accounting-banks/FinancialPaper.md) 
</div>
</div>

<div class="row searchable" id="fblines.fpCreationInfo.amount">
<div class="cell" data-label="Property">fblines.fpCreationInfo.amount</div>
<div class="cell" data-label="Column">fpcAmount</div>
<div class="cell" data-label="Arabic"> المبلغ</div>
<div class="cell" data-label="English"> Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="fblines.fpCreationInfo.bankAccount">
<div class="cell" data-label="Property">fblines.fpCreationInfo.bankAccount</div>
<div class="cell" data-label="Column">fpcBankAccount_id</div>
<div class="cell" data-label="Arabic">رقم حساب البنك</div>
<div class="cell" data-label="English">Bank account</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [BankAccount](/modules/accounting-banks/BankAccount.md) 
</div>
</div>

<div class="row searchable" id="fblines.fpCreationInfo.beneficiary">
<div class="cell" data-label="Property">fblines.fpCreationInfo.beneficiary</div>
<div class="cell" data-label="Column">fpcBeneficiary</div>
<div class="cell" data-label="Arabic">المستفيد</div>
<div class="cell" data-label="English">Beneficiary</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="fblines.fpCreationInfo.chequeNumber">
<div class="cell" data-label="Property">fblines.fpCreationInfo.chequeNumber</div>
<div class="cell" data-label="Column">fpcChequeNumber</div>
<div class="cell" data-label="Arabic">رقم الشيك</div>
<div class="cell" data-label="English">Cheque Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="fblines.fpCreationInfo.concernedParty">
<div class="cell" data-label="Property">fblines.fpCreationInfo.concernedParty</div>
<div class="cell gen-ref-column" data-label="Column">fpcConcernedPartyActualCode,  fpcConcernedPartyCode,  fpcConcernedPartyEntityType,  fpcConcernedPartyId</div>
<div class="cell" data-label="Arabic">الجهة المختصة</div>
<div class="cell" data-label="English">Concerned Party</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="fblines.fpCreationInfo.currency">
<div class="cell" data-label="Property">fblines.fpCreationInfo.currency</div>
<div class="cell" data-label="Column">fpcCurrency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/modules/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="fblines.fpCreationInfo.customerBank">
<div class="cell" data-label="Property">fblines.fpCreationInfo.customerBank</div>
<div class="cell" data-label="Column">fpcCustomerBank_id</div>
<div class="cell" data-label="Arabic">بنك العميل</div>
<div class="cell" data-label="English">Customer Bank</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Bank](/modules/accounting-banks/Bank.md) 
</div>
</div>

<div class="row searchable" id="fblines.fpCreationInfo.dueDate">
<div class="cell" data-label="Property">fblines.fpCreationInfo.dueDate</div>
<div class="cell" data-label="Column">fpcDueDate</div>
<div class="cell" data-label="Arabic">تاريخ الاستحقاق</div>
<div class="cell" data-label="English">Due Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="fblines.fpCreationInfo.fpbook">
<div class="cell" data-label="Property">fblines.fpCreationInfo.fpbook</div>
<div class="cell" data-label="Column">fpcFpbook_id</div>
<div class="cell" data-label="Arabic"> الدفتر</div>
<div class="cell" data-label="English"> Book</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FPBook](/modules/accounting-banks/FPBook.md) 
</div>
</div>

<div class="row searchable" id="fblines.fpCreationInfo.issuer">
<div class="cell" data-label="Property">fblines.fpCreationInfo.issuer</div>
<div class="cell" data-label="Column">fpcIssuer</div>
<div class="cell" data-label="Arabic">الساحب</div>
<div class="cell" data-label="English">Issuer</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="fblines.fpCreationInfo.name1">
<div class="cell" data-label="Property">fblines.fpCreationInfo.name1</div>
<div class="cell" data-label="Column">fpcName1</div>
<div class="cell" data-label="Arabic">الاسم العربي</div>
<div class="cell" data-label="English">Name1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="fblines.fpCreationInfo.name2">
<div class="cell" data-label="Property">fblines.fpCreationInfo.name2</div>
<div class="cell" data-label="Column">fpcName2</div>
<div class="cell" data-label="Arabic">الاسم الإنجليزي</div>
<div class="cell" data-label="English">Name2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="fblines.fpCreationInfo.paperCode">
<div class="cell" data-label="Property">fblines.fpCreationInfo.paperCode</div>
<div class="cell" data-label="Column">fpcPaperCode</div>
<div class="cell" data-label="Arabic">كود الورقة</div>
<div class="cell" data-label="English">Paper Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="fblines.fpCreationInfo.paperType">
<div class="cell" data-label="Property">fblines.fpCreationInfo.paperType</div>
<div class="cell" data-label="Column">fpcPaperType</div>
<div class="cell" data-label="Arabic">نوع الورقة</div>
<div class="cell" data-label="English">Paper Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="fblines.fpCreationInfo.signedBy">
<div class="cell" data-label="Property">fblines.fpCreationInfo.signedBy</div>
<div class="cell" data-label="Column">fpcSignedBy</div>
<div class="cell" data-label="Arabic">اسم الموقع</div>
<div class="cell" data-label="English">Signed By</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="fblines.fpCreationInfo.subsidiary">
<div class="cell" data-label="Property">fblines.fpCreationInfo.subsidiary</div>
<div class="cell gen-ref-column" data-label="Column">fpcSubsidiaryActualCode,  fpcSubsidiaryCode,  fpcSubsidiaryEntityType,  fpcSubsidiaryId</div>
<div class="cell" data-label="Arabic">الذمة</div>
<div class="cell" data-label="English">Subsidiary</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="fblines.fpCreationInfo.value.amount">
<div class="cell" data-label="Property">fblines.fpCreationInfo.value.amount</div>
<div class="cell" data-label="Column">fpcValueAmount</div>
<div class="cell" data-label="Arabic"> المبلغ</div>
<div class="cell" data-label="English"> Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="fblines.fpCreationInfo.value.currency">
<div class="cell" data-label="Property">fblines.fpCreationInfo.value.currency</div>
<div class="cell" data-label="Column">fpcValueCurrency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/modules/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="fblines.id">
<div class="cell" data-label="Property">fblines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="fblines.lineNumber">
<div class="cell" data-label="Property">fblines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="fblines.ref1">
<div class="cell" data-label="Property">fblines.ref1</div>
<div class="cell gen-ref-column" data-label="Column">ref1ActualCode,  ref1Code,  ref1EntityType,  ref1Id</div>
<div class="cell" data-label="Arabic">مرجع 1</div>
<div class="cell" data-label="English">Reference 1</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="fblines.ref2">
<div class="cell" data-label="Property">fblines.ref2</div>
<div class="cell gen-ref-column" data-label="Column">ref2ActualCode,  ref2Code,  ref2EntityType,  ref2Id</div>
<div class="cell" data-label="Arabic">مرجع 2</div>
<div class="cell" data-label="English">Reference 2</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="fblines.text1">
<div class="cell" data-label="Property">fblines.text1</div>
<div class="cell" data-label="Column">text1</div>
<div class="cell" data-label="Arabic">نــــص 1</div>
<div class="cell" data-label="English">Text 1</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="fblines.text2">
<div class="cell" data-label="Property">fblines.text2</div>
<div class="cell" data-label="Column">text2</div>
<div class="cell" data-label="Arabic">نـــــص 2</div>
<div class="cell" data-label="English">Text 2</div>
<div class="cell" data-label="Type">BigText</div>

</div>


</div>
</div>

<div id='installmentLines' title='installmentLines' class='searchable'>

## installmentLines (الأقساط - Installment Lines)
**Table Name:** PVInstallmentLine, **Join Column:** paymentVoucher_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="installmentLines.currencyRate">
<div class="cell" data-label="Property">installmentLines.currencyRate</div>
<div class="cell" data-label="Column">currencyRate</div>
<div class="cell" data-label="Arabic">المعدل</div>
<div class="cell" data-label="English">Currency Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="installmentLines.date1">
<div class="cell" data-label="Property">installmentLines.date1</div>
<div class="cell" data-label="Column">date1</div>
<div class="cell" data-label="Arabic">تـــاريخ 1</div>
<div class="cell" data-label="English">Date 1</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="installmentLines.date2">
<div class="cell" data-label="Property">installmentLines.date2</div>
<div class="cell" data-label="Column">date2</div>
<div class="cell" data-label="Arabic">تـــاريخ 2</div>
<div class="cell" data-label="English">Date 2</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="installmentLines.dueDate">
<div class="cell" data-label="Property">installmentLines.dueDate</div>
<div class="cell" data-label="Column">dueDate</div>
<div class="cell" data-label="Arabic">تاريخ الاستحقاق</div>
<div class="cell" data-label="English">Due Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="installmentLines.financialPaper">
<div class="cell" data-label="Property">installmentLines.financialPaper</div>
<div class="cell" data-label="Column">financialPaper_id</div>
<div class="cell" data-label="Arabic">الورقة التجارية</div>
<div class="cell" data-label="English">Commercial Paper</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FinancialPaper](/modules/accounting-banks/FinancialPaper.md) 
</div>
</div>

<div class="row searchable" id="installmentLines.id">
<div class="cell" data-label="Property">installmentLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="installmentLines.installmentCode">
<div class="cell" data-label="Property">installmentLines.installmentCode</div>
<div class="cell" data-label="Column">installmentCode</div>
<div class="cell" data-label="Arabic">كود القسط</div>
<div class="cell" data-label="English">Installment Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="installmentLines.installmentDescription">
<div class="cell" data-label="Property">installmentLines.installmentDescription</div>
<div class="cell" data-label="Column">installmentDescription</div>
<div class="cell" data-label="Arabic">وصف القسط</div>
<div class="cell" data-label="English">Installment Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="installmentLines.installmentDoc">
<div class="cell" data-label="Property">installmentLines.installmentDoc</div>
<div class="cell gen-ref-column" data-label="Column">installmentDocActualCode,  installmentDocCode,  installmentDocEntityType,  installmentDocId</div>
<div class="cell" data-label="Arabic">مستند القسط</div>
<div class="cell" data-label="English">Installment doc</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="installmentLines.lineNumber">
<div class="cell" data-label="Property">installmentLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="installmentLines.n1">
<div class="cell" data-label="Property">installmentLines.n1</div>
<div class="cell" data-label="Column">n1</div>
<div class="cell" data-label="Arabic">رقم 1</div>
<div class="cell" data-label="English">Number 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="installmentLines.n2">
<div class="cell" data-label="Property">installmentLines.n2</div>
<div class="cell" data-label="Column">n2</div>
<div class="cell" data-label="Arabic">رقم 2</div>
<div class="cell" data-label="English">Number 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="installmentLines.n3">
<div class="cell" data-label="Property">installmentLines.n3</div>
<div class="cell" data-label="Column">n3</div>
<div class="cell" data-label="Arabic">رقم 3</div>
<div class="cell" data-label="English">Number 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="installmentLines.n4">
<div class="cell" data-label="Property">installmentLines.n4</div>
<div class="cell" data-label="Column">n4</div>
<div class="cell" data-label="Arabic">رقم 4</div>
<div class="cell" data-label="English">Number 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="installmentLines.n5">
<div class="cell" data-label="Property">installmentLines.n5</div>
<div class="cell" data-label="Column">n5</div>
<div class="cell" data-label="Arabic">رقم 5</div>
<div class="cell" data-label="English">Number 5</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="installmentLines.netValue">
<div class="cell" data-label="Property">installmentLines.netValue</div>
<div class="cell" data-label="Column">netValue</div>
<div class="cell" data-label="Arabic">الصافي</div>
<div class="cell" data-label="English">Net value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="installmentLines.paidValue">
<div class="cell" data-label="Property">installmentLines.paidValue</div>
<div class="cell" data-label="Column">paidValue</div>
<div class="cell" data-label="Arabic">القيمة المدفوعة</div>
<div class="cell" data-label="English">Paid Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="installmentLines.ref1">
<div class="cell" data-label="Property">installmentLines.ref1</div>
<div class="cell gen-ref-column" data-label="Column">ref1ActualCode,  ref1Code,  ref1EntityType,  ref1Id</div>
<div class="cell" data-label="Arabic">مرجع 1</div>
<div class="cell" data-label="English">Reference 1</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="installmentLines.ref2">
<div class="cell" data-label="Property">installmentLines.ref2</div>
<div class="cell gen-ref-column" data-label="Column">ref2ActualCode,  ref2Code,  ref2EntityType,  ref2Id</div>
<div class="cell" data-label="Arabic">مرجع 2</div>
<div class="cell" data-label="English">Reference 2</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="installmentLines.remaining">
<div class="cell" data-label="Property">installmentLines.remaining</div>
<div class="cell" data-label="Column">remaining</div>
<div class="cell" data-label="Arabic">المتبقي</div>
<div class="cell" data-label="English">Remaining</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="installmentLines.text1">
<div class="cell" data-label="Property">installmentLines.text1</div>
<div class="cell" data-label="Column">text1</div>
<div class="cell" data-label="Arabic">نــــص 1</div>
<div class="cell" data-label="English">Text 1</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="installmentLines.text2">
<div class="cell" data-label="Property">installmentLines.text2</div>
<div class="cell" data-label="Column">text2</div>
<div class="cell" data-label="Arabic">نـــــص 2</div>
<div class="cell" data-label="English">Text 2</div>
<div class="cell" data-label="Type">BigText</div>

</div>


</div>
</div>

<div id='invoices' title='invoices' class='searchable'>

## invoices (الفواتير - Invoices)
**Table Name:** PVInvoiceLine, **Join Column:** paymentVoucher_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="invoices.account">
<div class="cell" data-label="Property">invoices.account</div>
<div class="cell" data-label="Column">account_id</div>
<div class="cell" data-label="Arabic"> حساب</div>
<div class="cell" data-label="English"> Account</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Account](/modules/accounting/Account.md) 
</div>
</div>

<div class="row searchable" id="invoices.date1">
<div class="cell" data-label="Property">invoices.date1</div>
<div class="cell" data-label="Column">date1</div>
<div class="cell" data-label="Arabic">تـــاريخ 1</div>
<div class="cell" data-label="English">Date 1</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="invoices.date2">
<div class="cell" data-label="Property">invoices.date2</div>
<div class="cell" data-label="Column">date2</div>
<div class="cell" data-label="Arabic">تـــاريخ 2</div>
<div class="cell" data-label="English">Date 2</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="invoices.id">
<div class="cell" data-label="Property">invoices.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="invoices.invoice">
<div class="cell" data-label="Property">invoices.invoice</div>
<div class="cell gen-ref-column" data-label="Column">invoiceActualCode,  invoiceCode,  invoiceEntityType,  invoiceId</div>
<div class="cell" data-label="Arabic">الفاتورة</div>
<div class="cell" data-label="English">Invoice</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="invoices.invoiceValue">
<div class="cell" data-label="Property">invoices.invoiceValue</div>
<div class="cell" data-label="Column">invoiceValue</div>
<div class="cell" data-label="Arabic">قيمة الفاتورة</div>
<div class="cell" data-label="English">Invoice Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="invoices.lineNumber">
<div class="cell" data-label="Property">invoices.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="invoices.n1">
<div class="cell" data-label="Property">invoices.n1</div>
<div class="cell" data-label="Column">n1</div>
<div class="cell" data-label="Arabic">رقم 1</div>
<div class="cell" data-label="English">Number 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="invoices.n2">
<div class="cell" data-label="Property">invoices.n2</div>
<div class="cell" data-label="Column">n2</div>
<div class="cell" data-label="Arabic">رقم 2</div>
<div class="cell" data-label="English">Number 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="invoices.net">
<div class="cell" data-label="Property">invoices.net</div>
<div class="cell" data-label="Column">net</div>
<div class="cell" data-label="Arabic">الصافي</div>
<div class="cell" data-label="English">Net</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="invoices.rate">
<div class="cell" data-label="Property">invoices.rate</div>
<div class="cell" data-label="Column">rate</div>
<div class="cell" data-label="Arabic">المعدل</div>
<div class="cell" data-label="English">Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="invoices.ref1">
<div class="cell" data-label="Property">invoices.ref1</div>
<div class="cell gen-ref-column" data-label="Column">ref1ActualCode,  ref1Code,  ref1EntityType,  ref1Id</div>
<div class="cell" data-label="Arabic">مرجع 1</div>
<div class="cell" data-label="English">Reference 1</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="invoices.ref2">
<div class="cell" data-label="Property">invoices.ref2</div>
<div class="cell gen-ref-column" data-label="Column">ref2ActualCode,  ref2Code,  ref2EntityType,  ref2Id</div>
<div class="cell" data-label="Arabic">مرجع 2</div>
<div class="cell" data-label="English">Reference 2</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="invoices.remaining">
<div class="cell" data-label="Property">invoices.remaining</div>
<div class="cell" data-label="Column">remaining</div>
<div class="cell" data-label="Arabic">المتبقي</div>
<div class="cell" data-label="English">Remaining</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="invoices.subsidiary">
<div class="cell" data-label="Property">invoices.subsidiary</div>
<div class="cell gen-ref-column" data-label="Column">subsidiaryActualCode,  subsidiaryCode,  subsidiaryEntityType,  subsidiaryId</div>
<div class="cell" data-label="Arabic">الذمة</div>
<div class="cell" data-label="English">Subsidiary</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="invoices.text1">
<div class="cell" data-label="Property">invoices.text1</div>
<div class="cell" data-label="Column">text1</div>
<div class="cell" data-label="Arabic">نــــص 1</div>
<div class="cell" data-label="English">Text 1</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="invoices.text2">
<div class="cell" data-label="Property">invoices.text2</div>
<div class="cell" data-label="Column">text2</div>
<div class="cell" data-label="Arabic">نـــــص 2</div>
<div class="cell" data-label="English">Text 2</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="invoices.value.amount">
<div class="cell" data-label="Property">invoices.value.amount</div>
<div class="cell" data-label="Column">valueAmount</div>
<div class="cell" data-label="Arabic"> المبلغ</div>
<div class="cell" data-label="English"> Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="invoices.value.currency">
<div class="cell" data-label="Property">invoices.value.currency</div>
<div class="cell" data-label="Column">valueCurrency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/modules/basic/Currency.md) 
</div>
</div>


</div>
</div>

<div id='lines' title='lines' class='searchable'>

## lines ( التفاصيل -  Details)
**Table Name:** PaymentDetailLine, **Join Column:** paymentVoucher_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="lines.account">
<div class="cell" data-label="Property">lines.account</div>
<div class="cell" data-label="Column">account_id</div>
<div class="cell" data-label="Arabic">الحساب</div>
<div class="cell" data-label="English">Account</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Account](/modules/accounting/Account.md) 
</div>
</div>

<div class="row searchable" id="lines.amount.localAmount">
<div class="cell" data-label="Property">lines.amount.localAmount</div>
<div class="cell" data-label="Column">amountLocalAmount</div>
<div class="cell" data-label="Arabic">المبلغ | المحلي</div>
<div class="cell" data-label="English">Amount | Local</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="lines.amount.rate">
<div class="cell" data-label="Property">lines.amount.rate</div>
<div class="cell" data-label="Column">amountRate</div>
<div class="cell" data-label="Arabic">المبلغ | المعدل</div>
<div class="cell" data-label="English">Amount | Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="lines.amount.value.amount">
<div class="cell" data-label="Property">lines.amount.value.amount</div>
<div class="cell" data-label="Column">amountValueAmount</div>
<div class="cell" data-label="Arabic">المبلغ | القيمة</div>
<div class="cell" data-label="English">Amount | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="lines.amount.value.currency">
<div class="cell" data-label="Property">lines.amount.value.currency</div>
<div class="cell" data-label="Column">amountValueCurrency_id</div>
<div class="cell" data-label="Arabic">المبلغ | العملة</div>
<div class="cell" data-label="English">Amount | Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/modules/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="lines.analysisSet">
<div class="cell" data-label="Property">lines.analysisSet</div>
<div class="cell" data-label="Column">analysisSet_id</div>
<div class="cell" data-label="Arabic">المجموعة التحليلية</div>
<div class="cell" data-label="English">AnalysisSet</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/modules/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="lines.attachment">
<div class="cell" data-label="Property">lines.attachment</div>
<div class="cell" data-label="Column">attachment_id</div>
<div class="cell" data-label="Arabic">مرفق</div>
<div class="cell" data-label="English">Attachment</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/modules/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="lines.attachment2">
<div class="cell" data-label="Property">lines.attachment2</div>
<div class="cell" data-label="Column">attachment2_id</div>
<div class="cell" data-label="Arabic">مرفق 2</div>
<div class="cell" data-label="English">Attachment 2</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/modules/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="lines.b1">
<div class="cell" data-label="Property">lines.b1</div>
<div class="cell" data-label="Column">b1</div>
<div class="cell" data-label="Arabic">Boolean 1</div>
<div class="cell" data-label="English">Boolean 1</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="lines.b2">
<div class="cell" data-label="Property">lines.b2</div>
<div class="cell" data-label="Column">b2</div>
<div class="cell" data-label="Arabic">Boolean 2</div>
<div class="cell" data-label="English">Boolean 2</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="lines.b3">
<div class="cell" data-label="Property">lines.b3</div>
<div class="cell" data-label="Column">b3</div>
<div class="cell" data-label="Arabic">Boolean 3</div>
<div class="cell" data-label="English">Boolean 3</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="lines.b4">
<div class="cell" data-label="Property">lines.b4</div>
<div class="cell" data-label="Column">b4</div>
<div class="cell" data-label="Arabic">Boolean 4</div>
<div class="cell" data-label="English">Boolean 4</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="lines.b5">
<div class="cell" data-label="Property">lines.b5</div>
<div class="cell" data-label="Column">b5</div>
<div class="cell" data-label="Arabic">Boolean 5</div>
<div class="cell" data-label="English">Boolean 5</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="lines.branch">
<div class="cell" data-label="Property">lines.branch</div>
<div class="cell" data-label="Column">branch_id</div>
<div class="cell" data-label="Arabic">الفرع</div>
<div class="cell" data-label="English">Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/modules/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="lines.date1">
<div class="cell" data-label="Property">lines.date1</div>
<div class="cell" data-label="Column">date1</div>
<div class="cell" data-label="Arabic">تـــاريخ 1</div>
<div class="cell" data-label="English">Date 1</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="lines.date2">
<div class="cell" data-label="Property">lines.date2</div>
<div class="cell" data-label="Column">date2</div>
<div class="cell" data-label="Arabic">تـــاريخ 2</div>
<div class="cell" data-label="English">Date 2</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="lines.department">
<div class="cell" data-label="Property">lines.department</div>
<div class="cell" data-label="Column">department_id</div>
<div class="cell" data-label="Arabic">الإدارة</div>
<div class="cell" data-label="English">Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/modules/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="lines.entityDimension">
<div class="cell" data-label="Property">lines.entityDimension</div>
<div class="cell gen-ref-column" data-label="Column">entityDimensionActualCode,  entityDimensionCode,  entityDimensionEntityType,  entityDimensionId</div>
<div class="cell" data-label="Arabic">السجل</div>
<div class="cell" data-label="English">Entity Dimension</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="lines.fromDoc">
<div class="cell" data-label="Property">lines.fromDoc</div>
<div class="cell gen-ref-column" data-label="Column">fromDocActualCode,  fromDocCode,  fromDocEntityType,  fromDocId</div>
<div class="cell" data-label="Arabic">بناءا على</div>
<div class="cell" data-label="English">From Document</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="lines.id">
<div class="cell" data-label="Property">lines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="lines.lineCostMustBeDistributed">
<div class="cell" data-label="Property">lines.lineCostMustBeDistributed</div>
<div class="cell" data-label="Column">lineCostMustBeDistributed</div>
<div class="cell" data-label="Arabic">يجب توزيع قيمة السطر في التكاليف</div>
<div class="cell" data-label="English">Line Cost Must Be Distributed</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="lines.lineNumber">
<div class="cell" data-label="Property">lines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="lines.n1">
<div class="cell" data-label="Property">lines.n1</div>
<div class="cell" data-label="Column">n1</div>
<div class="cell" data-label="Arabic">رقم 1</div>
<div class="cell" data-label="English">Number 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="lines.n2">
<div class="cell" data-label="Property">lines.n2</div>
<div class="cell" data-label="Column">n2</div>
<div class="cell" data-label="Arabic">رقم 2</div>
<div class="cell" data-label="English">Number 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="lines.n3">
<div class="cell" data-label="Property">lines.n3</div>
<div class="cell" data-label="Column">n3</div>
<div class="cell" data-label="Arabic">رقم 3</div>
<div class="cell" data-label="English">Number 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="lines.narration">
<div class="cell" data-label="Property">lines.narration</div>
<div class="cell" data-label="Column">narration</div>
<div class="cell" data-label="Arabic">الشرح</div>
<div class="cell" data-label="English">Narration</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="lines.narration2">
<div class="cell" data-label="Property">lines.narration2</div>
<div class="cell" data-label="Column">narration2</div>
<div class="cell" data-label="Arabic">الشرح 2</div>
<div class="cell" data-label="English">Narration 2</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="lines.netValue">
<div class="cell" data-label="Property">lines.netValue</div>
<div class="cell" data-label="Column">netValue</div>
<div class="cell" data-label="Arabic">الصافي</div>
<div class="cell" data-label="English">Net value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="lines.originDoc">
<div class="cell" data-label="Property">lines.originDoc</div>
<div class="cell gen-ref-column" data-label="Column">originDocActualCode,  originDocCode,  originDocEntityType,  originDocId</div>
<div class="cell" data-label="Arabic"> # المستند</div>
<div class="cell" data-label="English"> Document #</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="lines.otherAmount.localAmount">
<div class="cell" data-label="Property">lines.otherAmount.localAmount</div>
<div class="cell" data-label="Column">otherLocalAmount</div>
<div class="cell" data-label="Arabic">الدائن | المحلي</div>
<div class="cell" data-label="English">Credit Amount | Local</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="lines.otherAmount.rate">
<div class="cell" data-label="Property">lines.otherAmount.rate</div>
<div class="cell" data-label="Column">otherRate</div>
<div class="cell" data-label="Arabic">الدائن | المعدل</div>
<div class="cell" data-label="English">Credit Amount | Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="lines.otherAmount.value.amount">
<div class="cell" data-label="Property">lines.otherAmount.value.amount</div>
<div class="cell" data-label="Column">otherValueAmount</div>
<div class="cell" data-label="Arabic">الدائن | القيمة</div>
<div class="cell" data-label="English">Credit Amount | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="lines.otherAmount.value.currency">
<div class="cell" data-label="Property">lines.otherAmount.value.currency</div>
<div class="cell" data-label="Column">otherValueCurrency_id</div>
<div class="cell" data-label="Arabic">الدائن | العملة</div>
<div class="cell" data-label="English">Credit Amount | Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/modules/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="lines.quantity">
<div class="cell" data-label="Property">lines.quantity</div>
<div class="cell" data-label="Column">quantity</div>
<div class="cell" data-label="Arabic">الكمية</div>
<div class="cell" data-label="English">Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="lines.rbook">
<div class="cell" data-label="Property">lines.rbook</div>
<div class="cell" data-label="Column">rbook_id</div>
<div class="cell" data-label="Arabic">دفتر الايصالات</div>
<div class="cell" data-label="English">Receipt Book</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ReceiptBook](/modules/basic/ReceiptBook.md) 
</div>
</div>

<div class="row searchable" id="lines.ref1">
<div class="cell" data-label="Property">lines.ref1</div>
<div class="cell gen-ref-column" data-label="Column">ref1ActualCode,  ref1Code,  ref1EntityType,  ref1Id</div>
<div class="cell" data-label="Arabic">مرجع 1</div>
<div class="cell" data-label="English">Reference 1</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="lines.ref2">
<div class="cell" data-label="Property">lines.ref2</div>
<div class="cell gen-ref-column" data-label="Column">ref2ActualCode,  ref2Code,  ref2EntityType,  ref2Id</div>
<div class="cell" data-label="Arabic">مرجع 2</div>
<div class="cell" data-label="English">Reference 2</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="lines.ref3">
<div class="cell" data-label="Property">lines.ref3</div>
<div class="cell gen-ref-column" data-label="Column">ref3ActualCode,  ref3Code,  ref3EntityType,  ref3Id</div>
<div class="cell" data-label="Arabic">مرجع 3</div>
<div class="cell" data-label="English">Reference 3</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="lines.rpaper">
<div class="cell" data-label="Property">lines.rpaper</div>
<div class="cell" data-label="Column">rpaper_id</div>
<div class="cell" data-label="Arabic">الايصال</div>
<div class="cell" data-label="English">Receipt Paper</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ReceiptPaper](/modules/basic/ReceiptPaper.md) 
</div>
</div>

<div class="row searchable" id="lines.salaryDocument">
<div class="cell" data-label="Property">lines.salaryDocument</div>
<div class="cell gen-ref-column" data-label="Column">salaryDocumentActualCode,  salaryDocumentCode,  salaryDocumentEntityType,  salaryDocumentId</div>
<div class="cell" data-label="Arabic"> سند الراتب</div>
<div class="cell" data-label="English"> Salary Document</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="lines.sector">
<div class="cell" data-label="Property">lines.sector</div>
<div class="cell" data-label="Column">sector_id</div>
<div class="cell" data-label="Arabic">القطاع</div>
<div class="cell" data-label="English">Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/modules/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="lines.subsidiary">
<div class="cell" data-label="Property">lines.subsidiary</div>
<div class="cell gen-ref-column" data-label="Column">subsidiaryActualCode,  subsidiaryCode,  subsidiaryEntityType,  subsidiaryId</div>
<div class="cell" data-label="Arabic">الذمة</div>
<div class="cell" data-label="English">Subsidiary</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="lines.tax1Percentage">
<div class="cell" data-label="Property">lines.tax1Percentage</div>
<div class="cell" data-label="Column">tax1Percentage</div>
<div class="cell" data-label="Arabic">ضريبة 1 | نسبة</div>
<div class="cell" data-label="English">Tax 1 | Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="lines.tax1Value">
<div class="cell" data-label="Property">lines.tax1Value</div>
<div class="cell" data-label="Column">tax1Value</div>
<div class="cell" data-label="Arabic">ضريبة 1 | قيمة</div>
<div class="cell" data-label="English">Tax 1 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="lines.tax2Percentage">
<div class="cell" data-label="Property">lines.tax2Percentage</div>
<div class="cell" data-label="Column">tax2Percentage</div>
<div class="cell" data-label="Arabic">ضريبة 2 | نسبة</div>
<div class="cell" data-label="English">Tax 2 | Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="lines.tax2Value">
<div class="cell" data-label="Property">lines.tax2Value</div>
<div class="cell" data-label="Column">tax2Value</div>
<div class="cell" data-label="Arabic">ضريبة 2 | قيمة</div>
<div class="cell" data-label="English">Tax 2 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="lines.text1">
<div class="cell" data-label="Property">lines.text1</div>
<div class="cell" data-label="Column">text1</div>
<div class="cell" data-label="Arabic">نــــص 1</div>
<div class="cell" data-label="English">Text 1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="lines.text2">
<div class="cell" data-label="Property">lines.text2</div>
<div class="cell" data-label="Column">text2</div>
<div class="cell" data-label="Arabic">نـــــص 2</div>
<div class="cell" data-label="English">Text 2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="lines.text3">
<div class="cell" data-label="Property">lines.text3</div>
<div class="cell" data-label="Column">text3</div>
<div class="cell" data-label="Arabic">نص 3</div>
<div class="cell" data-label="English">text3</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="lines.text4">
<div class="cell" data-label="Property">lines.text4</div>
<div class="cell" data-label="Column">text4</div>
<div class="cell" data-label="Arabic">نص 4</div>
<div class="cell" data-label="English">text4</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="lines.text5">
<div class="cell" data-label="Property">lines.text5</div>
<div class="cell" data-label="Column">text5</div>
<div class="cell" data-label="Arabic">نص 5</div>
<div class="cell" data-label="English">text5</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="lines.totalPrice">
<div class="cell" data-label="Property">lines.totalPrice</div>
<div class="cell" data-label="Column">totalPrice</div>
<div class="cell" data-label="Arabic">إجمالي السعر</div>
<div class="cell" data-label="English">  Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="lines.unitPrice">
<div class="cell" data-label="Property">lines.unitPrice</div>
<div class="cell" data-label="Column">unitPrice</div>
<div class="cell" data-label="Arabic">سعر الوحدة</div>
<div class="cell" data-label="English">Unit Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>


</div>
</div>

<div id='paymentLines' title='paymentLines' class='searchable'>

## paymentLines (الســداد - Payment Lines)
**Table Name:** PaymentVoucherPaymentLine, **Join Column:** paymentVoucher_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="paymentLines.afterFeesValue">
<div class="cell" data-label="Property">paymentLines.afterFeesValue</div>
<div class="cell" data-label="Column">afterFeesValue</div>
<div class="cell" data-label="Arabic">المبلغ بعد الرسوم</div>
<div class="cell" data-label="English">Value After Fees</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="paymentLines.authorizationNumber">
<div class="cell" data-label="Property">paymentLines.authorizationNumber</div>
<div class="cell" data-label="Column">authorizationNumber</div>
<div class="cell" data-label="Arabic">رقم العملية</div>
<div class="cell" data-label="English">Authorization Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="paymentLines.date1">
<div class="cell" data-label="Property">paymentLines.date1</div>
<div class="cell" data-label="Column">date1</div>
<div class="cell" data-label="Arabic">تـــاريخ 1</div>
<div class="cell" data-label="English">Date 1</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="paymentLines.date2">
<div class="cell" data-label="Property">paymentLines.date2</div>
<div class="cell" data-label="Column">date2</div>
<div class="cell" data-label="Arabic">تـــاريخ 2</div>
<div class="cell" data-label="English">Date 2</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="paymentLines.discountCoupon">
<div class="cell" data-label="Property">paymentLines.discountCoupon</div>
<div class="cell" data-label="Column">discountCoupon_id</div>
<div class="cell" data-label="Arabic">قسيمة شراء</div>
<div class="cell" data-label="English">Discount Coupon</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DiscountCoupon](/modules/supplychain-sales/DiscountCoupon.md) 
</div>
</div>

<div class="row searchable" id="paymentLines.doNotAffectRemaining">
<div class="cell" data-label="Property">paymentLines.doNotAffectRemaining</div>
<div class="cell" data-label="Column">doNotAffectRemaining</div>
<div class="cell" data-label="Arabic">عدم التأثير على المتبقي</div>
<div class="cell" data-label="English">Do Not Affect Remaining</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="paymentLines.feesTaxValue">
<div class="cell" data-label="Property">paymentLines.feesTaxValue</div>
<div class="cell" data-label="Column">feesTaxValue</div>
<div class="cell" data-label="Arabic">قيمة ضريبة الرسوم</div>
<div class="cell" data-label="English">Fees Tax Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="paymentLines.feesValue">
<div class="cell" data-label="Property">paymentLines.feesValue</div>
<div class="cell" data-label="Column">feesValue</div>
<div class="cell" data-label="Arabic">قيمة الرسوم</div>
<div class="cell" data-label="English">Fees Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="paymentLines.id">
<div class="cell" data-label="Property">paymentLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="paymentLines.issuer">
<div class="cell" data-label="Property">paymentLines.issuer</div>
<div class="cell" data-label="Column">issuer</div>
<div class="cell" data-label="Arabic">جهة الإصدار</div>
<div class="cell" data-label="English">Issuer</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="paymentLines.lineNumber">
<div class="cell" data-label="Property">paymentLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="paymentLines.n1">
<div class="cell" data-label="Property">paymentLines.n1</div>
<div class="cell" data-label="Column">n1</div>
<div class="cell" data-label="Arabic">رقم 1</div>
<div class="cell" data-label="English">Number 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="paymentLines.n2">
<div class="cell" data-label="Property">paymentLines.n2</div>
<div class="cell" data-label="Column">n2</div>
<div class="cell" data-label="Arabic">رقم 2</div>
<div class="cell" data-label="English">Number 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="paymentLines.paidCash">
<div class="cell" data-label="Property">paymentLines.paidCash</div>
<div class="cell" data-label="Column">paidCash</div>
<div class="cell" data-label="Arabic">النقدية المدفوعة</div>
<div class="cell" data-label="English">Paid Cash</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="paymentLines.paymentMethod">
<div class="cell" data-label="Property">paymentLines.paymentMethod</div>
<div class="cell" data-label="Column">paymentMethod_id</div>
<div class="cell" data-label="Arabic">طريقة الدفع</div>
<div class="cell" data-label="English"> Payment Method</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [PaymentMethod](/modules/basic/PaymentMethod.md) 
</div>
</div>

<div class="row searchable" id="paymentLines.paymentTransactionType">
<div class="cell" data-label="Property">paymentLines.paymentTransactionType</div>
<div class="cell" data-label="Column">paymentTransactionType</div>
<div class="cell" data-label="Arabic">نوع العملية</div>
<div class="cell" data-label="English">Transaction Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="paymentLines.paymentValue">
<div class="cell" data-label="Property">paymentLines.paymentValue</div>
<div class="cell" data-label="Column">paymentValue</div>
<div class="cell" data-label="Arabic">المبلغ</div>
<div class="cell" data-label="English">Payment Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="paymentLines.pgwProperties.authCode">
<div class="cell" data-label="Property">paymentLines.pgwProperties.authCode</div>
<div class="cell" data-label="Column">authCode</div>
<div class="cell" data-label="Arabic">Auth Code / Txn Id</div>
<div class="cell" data-label="English">Auth Code / Txn Id</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="paymentLines.pgwProperties.cardType">
<div class="cell" data-label="Property">paymentLines.pgwProperties.cardType</div>
<div class="cell" data-label="Column">cardType</div>
<div class="cell" data-label="Arabic">Card Type</div>
<div class="cell" data-label="English">Card Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="paymentLines.pgwProperties.de55Response">
<div class="cell" data-label="Property">paymentLines.pgwProperties.de55Response</div>
<div class="cell" data-label="Column">de55Response</div>
<div class="cell" data-label="Arabic">De55 Response</div>
<div class="cell" data-label="English">De55 Response</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="paymentLines.pgwProperties.ecrRefNum">
<div class="cell" data-label="Property">paymentLines.pgwProperties.ecrRefNum</div>
<div class="cell" data-label="Column">ecrRefNum</div>
<div class="cell" data-label="Arabic">ECR Ref Number / Local Reference Number</div>
<div class="cell" data-label="English">ECR Ref Number / Local Reference Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="paymentLines.pgwProperties.maskedCardNumber">
<div class="cell" data-label="Property">paymentLines.pgwProperties.maskedCardNumber</div>
<div class="cell" data-label="Column">maskedCardNumber</div>
<div class="cell" data-label="Arabic">Masked Card Number</div>
<div class="cell" data-label="English">Masked Card Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="paymentLines.pgwProperties.merchantId">
<div class="cell" data-label="Property">paymentLines.pgwProperties.merchantId</div>
<div class="cell" data-label="Column">merchantId</div>
<div class="cell" data-label="Arabic">Merchant Id</div>
<div class="cell" data-label="English">Merchant Id</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="paymentLines.pgwProperties.paidFromTerminal">
<div class="cell" data-label="Property">paymentLines.pgwProperties.paidFromTerminal</div>
<div class="cell" data-label="Column">paidFromTerminal</div>
<div class="cell" data-label="Arabic">مدفوعة بواسطة ال Terminal</div>
<div class="cell" data-label="English">Paid From Terminal</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="paymentLines.pgwProperties.panNum">
<div class="cell" data-label="Property">paymentLines.pgwProperties.panNum</div>
<div class="cell" data-label="Column">panNum</div>
<div class="cell" data-label="Arabic">PAN Number / ApprovalCode</div>
<div class="cell" data-label="English">PAN Number / ApprovalCode</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="paymentLines.pgwProperties.respCode">
<div class="cell" data-label="Property">paymentLines.pgwProperties.respCode</div>
<div class="cell" data-label="Column">respCode</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="paymentLines.pgwProperties.schemeId">
<div class="cell" data-label="Property">paymentLines.pgwProperties.schemeId</div>
<div class="cell" data-label="Column">schemeId</div>
<div class="cell" data-label="Arabic">Scheme Id / Card Scheme Name</div>
<div class="cell" data-label="English">Scheme Id / Card Scheme Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="paymentLines.pgwProperties.stanNum">
<div class="cell" data-label="Property">paymentLines.pgwProperties.stanNum</div>
<div class="cell" data-label="Column">stanNum</div>
<div class="cell" data-label="Arabic">STAN Number / rrNumber</div>
<div class="cell" data-label="English">STAN Number / rrNumber</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="paymentLines.pgwProperties.terminalId">
<div class="cell" data-label="Property">paymentLines.pgwProperties.terminalId</div>
<div class="cell" data-label="Column">terminalId</div>
<div class="cell" data-label="Arabic">Terminal Id / Device Serial No</div>
<div class="cell" data-label="English">Terminal Id / Device Serial No</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="paymentLines.remainingCash">
<div class="cell" data-label="Property">paymentLines.remainingCash</div>
<div class="cell" data-label="Column">remainingCash</div>
<div class="cell" data-label="Arabic">النقديه المتبقيه</div>
<div class="cell" data-label="English">Remaining Cash</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="paymentLines.text1">
<div class="cell" data-label="Property">paymentLines.text1</div>
<div class="cell" data-label="Column">text1</div>
<div class="cell" data-label="Arabic">نــــص 1</div>
<div class="cell" data-label="English">Text 1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="paymentLines.text2">
<div class="cell" data-label="Property">paymentLines.text2</div>
<div class="cell" data-label="Column">text2</div>
<div class="cell" data-label="Arabic">نـــــص 2</div>
<div class="cell" data-label="English">Text 2</div>
<div class="cell" data-label="Type">Text</div>

</div>


</div>
</div>

