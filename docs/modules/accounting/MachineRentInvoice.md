
<div class='tableName'>


# MachineRentInvoice
</div>

**Arabic:** فاتورة تشغيل معدات - فواتير تشغيل معدات
**English:** Machine Rent Invoice - Machine Rent Invoices

<ContentFilter/>


<div class='searchable'>
<a href='#details'>details (MachineRentInvLine) </a> , <a href='#externalPaymentLines'>externalPaymentLines (MiscRentExternalPaymentLine) </a> , <a href='#paymentLines'>paymentLines (MiscPurchaseInvPaymentLine) </a> , <a href='#scheduleLines'>scheduleLines (MiscRentScheduledPayLine) </a>
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

<div class="row searchable" id="isSalesNotPurchase">
<div class="cell" data-label="Property">isSalesNotPurchase</div>
<div class="cell" data-label="Column">isSalesNotPurchase</div>
<div class="cell" data-label="Arabic">تعمل مبيعات ليست مشتريات</div>
<div class="cell" data-label="English">Is Sales Not Purchase</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="modifiableTax">
<div class="cell" data-label="Property">modifiableTax</div>
<div class="cell" data-label="Column">modifiableTax</div>
<div class="cell" data-label="Arabic">يمكن تعديل الضريبة</div>
<div class="cell" data-label="English">Modifiable Tax</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="money.afterDiscount1">
<div class="cell" data-label="Property">money.afterDiscount1</div>
<div class="cell" data-label="Column">afterDiscount1</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 1</div>
<div class="cell" data-label="English">Net after Discount 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.afterDiscount2">
<div class="cell" data-label="Property">money.afterDiscount2</div>
<div class="cell" data-label="Column">afterDiscount2</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 2</div>
<div class="cell" data-label="English">Net after Discount 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.afterDiscount3">
<div class="cell" data-label="Property">money.afterDiscount3</div>
<div class="cell" data-label="Column">afterDiscount3</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 3</div>
<div class="cell" data-label="English">Net after Discount 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.afterDiscount4">
<div class="cell" data-label="Property">money.afterDiscount4</div>
<div class="cell" data-label="Column">afterDiscount4</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 4</div>
<div class="cell" data-label="English">Net after Discount 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.afterDiscount5">
<div class="cell" data-label="Property">money.afterDiscount5</div>
<div class="cell" data-label="Column">afterDiscount5</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 5</div>
<div class="cell" data-label="English">Net after Discount 5</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.afterDiscount6">
<div class="cell" data-label="Property">money.afterDiscount6</div>
<div class="cell" data-label="Column">afterDiscount6</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 6</div>
<div class="cell" data-label="English">Net after Discount 6</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.afterDiscount7">
<div class="cell" data-label="Property">money.afterDiscount7</div>
<div class="cell" data-label="Column">afterDiscount7</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 7</div>
<div class="cell" data-label="English">Net after Discount 7</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.afterDiscount8">
<div class="cell" data-label="Property">money.afterDiscount8</div>
<div class="cell" data-label="Column">afterDiscount8</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 8</div>
<div class="cell" data-label="English">Net after Discount 8</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.afterHTaxValue">
<div class="cell" data-label="Property">money.afterHTaxValue</div>
<div class="cell" data-label="Column">afterHTaxValue</div>
<div class="cell" data-label="Arabic">بعد ضريبة الفاتورة</div>
<div class="cell" data-label="English">After Tax Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.afterTaxValue">
<div class="cell" data-label="Property">money.afterTaxValue</div>
<div class="cell" data-label="Column">afterTaxValue</div>
<div class="cell" data-label="Arabic">القيمة بعد الضريبة</div>
<div class="cell" data-label="English">After Tax Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.cashAmount">
<div class="cell" data-label="Property">money.cashAmount</div>
<div class="cell" data-label="Column">cashAmount</div>
<div class="cell" data-label="Arabic">المدفوع نقدا</div>
<div class="cell" data-label="English">Paid</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.currency">
<div class="cell" data-label="Property">money.currency</div>
<div class="cell" data-label="Column">currency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/modules/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="money.currencyRate">
<div class="cell" data-label="Property">money.currencyRate</div>
<div class="cell" data-label="Column">currencyRate</div>
<div class="cell" data-label="Arabic">المعدل</div>
<div class="cell" data-label="English">Currency Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.discount1Total">
<div class="cell" data-label="Property">money.discount1Total</div>
<div class="cell" data-label="Column">discount1Total</div>
<div class="cell" data-label="Arabic">إجمالي الخصم</div>
<div class="cell" data-label="English">Discount Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.discount2Total">
<div class="cell" data-label="Property">money.discount2Total</div>
<div class="cell" data-label="Column">discount2Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 2</div>
<div class="cell" data-label="English">Discount 1 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.discount3Total">
<div class="cell" data-label="Property">money.discount3Total</div>
<div class="cell" data-label="Column">discount3Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 3</div>
<div class="cell" data-label="English">Discount 2 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.discount4Total">
<div class="cell" data-label="Property">money.discount4Total</div>
<div class="cell" data-label="Column">discount4Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 4</div>
<div class="cell" data-label="English">Discount 3 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.discount5Total">
<div class="cell" data-label="Property">money.discount5Total</div>
<div class="cell" data-label="Column">discount5Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 5</div>
<div class="cell" data-label="English">Discount 4 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.discount6Total">
<div class="cell" data-label="Property">money.discount6Total</div>
<div class="cell" data-label="Column">discount6Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 6</div>
<div class="cell" data-label="English">Discount 5 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.discount7Total">
<div class="cell" data-label="Property">money.discount7Total</div>
<div class="cell" data-label="Column">discount7Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 7</div>
<div class="cell" data-label="English">Discount 6 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.discount8Total">
<div class="cell" data-label="Property">money.discount8Total</div>
<div class="cell" data-label="Column">discount8Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 8</div>
<div class="cell" data-label="English">Discount 7 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.headerDiscount.afterValue">
<div class="cell" data-label="Property">money.headerDiscount.afterValue</div>
<div class="cell" data-label="Column">hdrDiscountAfterValue</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.headerDiscount.maxNormalPercent">
<div class="cell" data-label="Property">money.headerDiscount.maxNormalPercent</div>
<div class="cell" data-label="Column">hdrDiscountMaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.headerDiscount.percentage">
<div class="cell" data-label="Property">money.headerDiscount.percentage</div>
<div class="cell" data-label="Column">hdrDiscountPercentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.headerDiscount.value">
<div class="cell" data-label="Property">money.headerDiscount.value</div>
<div class="cell" data-label="Column">hdrDiscountValue</div>
<div class="cell" data-label="Arabic">القيمة</div>
<div class="cell" data-label="English">Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.localCurrency">
<div class="cell" data-label="Property">money.localCurrency</div>
<div class="cell" data-label="Column">localCurrency_id</div>
<div class="cell" data-label="Arabic"> العملة</div>
<div class="cell" data-label="English">Local Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/modules/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="money.netValue">
<div class="cell" data-label="Property">money.netValue</div>
<div class="cell" data-label="Column">netValue</div>
<div class="cell" data-label="Arabic">الصافي</div>
<div class="cell" data-label="English">Net value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.paidCash">
<div class="cell" data-label="Property">money.paidCash</div>
<div class="cell" data-label="Column">paidCash</div>
<div class="cell" data-label="Arabic">النقدية المدفوعة</div>
<div class="cell" data-label="English">Paid Cash</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.remaining">
<div class="cell" data-label="Property">money.remaining</div>
<div class="cell" data-label="Column">remaining</div>
<div class="cell" data-label="Arabic">المتبقي</div>
<div class="cell" data-label="English">Remaining</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.remainingCash">
<div class="cell" data-label="Property">money.remainingCash</div>
<div class="cell" data-label="Column">remainingCash</div>
<div class="cell" data-label="Arabic">النقديه المتبقيه</div>
<div class="cell" data-label="English">Remaining Cash</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.service1Fees">
<div class="cell" data-label="Property">money.service1Fees</div>
<div class="cell" data-label="Column">service1Fees</div>
<div class="cell" data-label="Arabic">مصاريف خدمة 1</div>
<div class="cell" data-label="English">Service Fees 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.service2Fees">
<div class="cell" data-label="Property">money.service2Fees</div>
<div class="cell" data-label="Column">service2Fees</div>
<div class="cell" data-label="Arabic">مصاريف خدمة 2</div>
<div class="cell" data-label="English">Service Fees 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.service3Fees">
<div class="cell" data-label="Property">money.service3Fees</div>
<div class="cell" data-label="Column">service3Fees</div>
<div class="cell" data-label="Arabic">مصاريف خدمة 3</div>
<div class="cell" data-label="English">Service Fees 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.service4Fees">
<div class="cell" data-label="Property">money.service4Fees</div>
<div class="cell" data-label="Column">service4Fees</div>
<div class="cell" data-label="Arabic">مصاريف خدمة 4</div>
<div class="cell" data-label="English">Service Fees 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.tax1Total">
<div class="cell" data-label="Property">money.tax1Total</div>
<div class="cell" data-label="Column">tax1Total</div>
<div class="cell" data-label="Arabic">إجمالي ضريبة مبيعات 1</div>
<div class="cell" data-label="English">Tax 1 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.tax2Total">
<div class="cell" data-label="Property">money.tax2Total</div>
<div class="cell" data-label="Column">tax2Total</div>
<div class="cell" data-label="Arabic">إجمالي ضريبة مبيعات 2</div>
<div class="cell" data-label="English">Tax 2 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.tax3Per">
<div class="cell" data-label="Property">money.tax3Per</div>
<div class="cell" data-label="Column">tax3Per</div>
<div class="cell" data-label="Arabic">ضريبة 3 %</div>
<div class="cell" data-label="English">Invoice Tax 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.tax3Total">
<div class="cell" data-label="Property">money.tax3Total</div>
<div class="cell" data-label="Column">tax3Total</div>
<div class="cell" data-label="Arabic">إجمالي ضريبة 3</div>
<div class="cell" data-label="English">Tax 3 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.tax4Per">
<div class="cell" data-label="Property">money.tax4Per</div>
<div class="cell" data-label="Column">tax4Per</div>
<div class="cell" data-label="Arabic">ضريبة الفاتورة 4 %</div>
<div class="cell" data-label="English">Invoice Tax 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.tax4Total">
<div class="cell" data-label="Property">money.tax4Total</div>
<div class="cell" data-label="Column">tax4Total</div>
<div class="cell" data-label="Arabic">إجمالي ضريبة 4</div>
<div class="cell" data-label="English">Tax 4 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.total">
<div class="cell" data-label="Property">money.total</div>
<div class="cell" data-label="Column">total</div>
<div class="cell" data-label="Arabic">الإجمالي</div>
<div class="cell" data-label="English">Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.totalPaid">
<div class="cell" data-label="Property">money.totalPaid</div>
<div class="cell" data-label="Column">totalPaid</div>
<div class="cell" data-label="Arabic">إجمالي المدفوع</div>
<div class="cell" data-label="English">Total paid</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.totalPaymentMethods">
<div class="cell" data-label="Property">money.totalPaymentMethods</div>
<div class="cell" data-label="Column">totalPaymentMethods</div>
<div class="cell" data-label="Arabic">إجمالى طرق الدفع الآخرى</div>
<div class="cell" data-label="English">Other Payments Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.vouchersPayments">
<div class="cell" data-label="Property">money.vouchersPayments</div>
<div class="cell" data-label="Column">vouchersPayments</div>
<div class="cell" data-label="Arabic">إجمالي المدفوع من السندات</div>
<div class="cell" data-label="English">Total of Vouchers Payments</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="paymentTemplate">
<div class="cell" data-label="Property">paymentTemplate</div>
<div class="cell" data-label="Column">paymentTemplate_id</div>
<div class="cell" data-label="Arabic">نموذج الدفع</div>
<div class="cell" data-label="English">Payment Template</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [PaymentScheduleTemplate](/modules/basic/PaymentScheduleTemplate.md) 
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

<div class="row searchable" id="purchasesMan">
<div class="cell" data-label="Property">purchasesMan</div>
<div class="cell" data-label="Column">purchasesMan_id</div>
<div class="cell" data-label="Arabic">مندوب المشتريات</div>
<div class="cell" data-label="English">Purchases man</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/modules/basic/Employee.md) 
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

<div class="row searchable" id="subsidiary">
<div class="cell" data-label="Property">subsidiary</div>
<div class="cell gen-ref-column" data-label="Column">subsidiaryActualCode,  subsidiaryCode,  subsidiaryEntityType,  subsidiaryId</div>
<div class="cell" data-label="Arabic">الذمة</div>
<div class="cell" data-label="English">Subsidiary</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="supplier">
<div class="cell" data-label="Property">supplier</div>
<div class="cell" data-label="Column">supplier_id</div>
<div class="cell" data-label="Arabic">مورد</div>
<div class="cell" data-label="English"> Supplier</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Supplier](/modules/basic/Supplier.md) 
</div>
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


</div>
</div>

<div id='details' title='details' class='searchable'>

## details (التفاصيل - Details)

<div class='tableName'>

**Table Name:** MachineRentInvLine, **Join Column:** machineRentInvoice_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="details.account">
<div class="cell" data-label="Property">details.account</div>
<div class="cell" data-label="Column">account_id</div>
<div class="cell" data-label="Arabic"> حساب</div>
<div class="cell" data-label="English"> Account</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Account](/modules/accounting/Account.md) 
</div>
</div>

<div class="row searchable" id="details.attachment">
<div class="cell" data-label="Property">details.attachment</div>
<div class="cell" data-label="Column">attachment_id</div>
<div class="cell" data-label="Arabic">مرفق</div>
<div class="cell" data-label="English">Attachment</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/modules/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="details.b1">
<div class="cell" data-label="Property">details.b1</div>
<div class="cell" data-label="Column">b1</div>
<div class="cell" data-label="Arabic">Boolean 1</div>
<div class="cell" data-label="English">Boolean 1</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.b2">
<div class="cell" data-label="Property">details.b2</div>
<div class="cell" data-label="Column">b2</div>
<div class="cell" data-label="Arabic">Boolean 2</div>
<div class="cell" data-label="English">Boolean 2</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.b3">
<div class="cell" data-label="Property">details.b3</div>
<div class="cell" data-label="Column">b3</div>
<div class="cell" data-label="Arabic">Boolean 3</div>
<div class="cell" data-label="English">Boolean 3</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.b4">
<div class="cell" data-label="Property">details.b4</div>
<div class="cell" data-label="Column">b4</div>
<div class="cell" data-label="Arabic">Boolean 4</div>
<div class="cell" data-label="English">Boolean 4</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.b5">
<div class="cell" data-label="Property">details.b5</div>
<div class="cell" data-label="Column">b5</div>
<div class="cell" data-label="Arabic">Boolean 5</div>
<div class="cell" data-label="English">Boolean 5</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.consumedQty1">
<div class="cell" data-label="Property">details.consumedQty1</div>
<div class="cell" data-label="Column">consumedQty1</div>
<div class="cell" data-label="Arabic">الكمية المنفذة 1</div>
<div class="cell" data-label="English">Consumed Quantity 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.consumedQty2">
<div class="cell" data-label="Property">details.consumedQty2</div>
<div class="cell" data-label="Column">consumedQty2</div>
<div class="cell" data-label="Arabic">الكمية المنفذة 2</div>
<div class="cell" data-label="English">Consumed Quantity 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.creditSide">
<div class="cell" data-label="Property">details.creditSide</div>
<div class="cell" data-label="Column">creditSide</div>
<div class="cell" data-label="Arabic">الجانب الدائن</div>
<div class="cell" data-label="English">Account</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="details.date1">
<div class="cell" data-label="Property">details.date1</div>
<div class="cell" data-label="Column">date1</div>
<div class="cell" data-label="Arabic">تـــاريخ 1</div>
<div class="cell" data-label="English">Date 1</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.date10">
<div class="cell" data-label="Property">details.date10</div>
<div class="cell" data-label="Column">date10</div>
<div class="cell" data-label="Arabic">تاريخ 10</div>
<div class="cell" data-label="English">Date10</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.date2">
<div class="cell" data-label="Property">details.date2</div>
<div class="cell" data-label="Column">date2</div>
<div class="cell" data-label="Arabic">تـــاريخ 2</div>
<div class="cell" data-label="English">Date 2</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.date3">
<div class="cell" data-label="Property">details.date3</div>
<div class="cell" data-label="Column">date3</div>
<div class="cell" data-label="Arabic">تاريخ 3</div>
<div class="cell" data-label="English">Date3</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.date4">
<div class="cell" data-label="Property">details.date4</div>
<div class="cell" data-label="Column">date4</div>
<div class="cell" data-label="Arabic">تاريخ 4</div>
<div class="cell" data-label="English">Date4</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.date5">
<div class="cell" data-label="Property">details.date5</div>
<div class="cell" data-label="Column">date5</div>
<div class="cell" data-label="Arabic">تاريخ 5</div>
<div class="cell" data-label="English">Date5</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.date6">
<div class="cell" data-label="Property">details.date6</div>
<div class="cell" data-label="Column">date6</div>
<div class="cell" data-label="Arabic">تاريخ 6</div>
<div class="cell" data-label="English">Date6</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.date7">
<div class="cell" data-label="Property">details.date7</div>
<div class="cell" data-label="Column">date7</div>
<div class="cell" data-label="Arabic">تاريخ 7</div>
<div class="cell" data-label="English">Date7</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.date8">
<div class="cell" data-label="Property">details.date8</div>
<div class="cell" data-label="Column">date8</div>
<div class="cell" data-label="Arabic">تاريخ 8</div>
<div class="cell" data-label="English">Date8</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.date9">
<div class="cell" data-label="Property">details.date9</div>
<div class="cell" data-label="Column">date9</div>
<div class="cell" data-label="Arabic">تاريخ 9</div>
<div class="cell" data-label="English">Date9</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.firstAuthor">
<div class="cell" data-label="Property">details.firstAuthor</div>
<div class="cell" data-label="Column">firstAuthor_id</div>
<div class="cell" data-label="Arabic">منشئ السجل</div>
<div class="cell" data-label="English">First Author</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [NaMaUser](/modules/system-tables/NaMaUser.md) 
</div>
</div>

<div class="row searchable" id="details.fromDate">
<div class="cell" data-label="Property">details.fromDate</div>
<div class="cell" data-label="Column">fromDate</div>
<div class="cell" data-label="Arabic">من تاريخ</div>
<div class="cell" data-label="English">From Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.fromTime">
<div class="cell" data-label="Property">details.fromTime</div>
<div class="cell" data-label="Column">fromTime</div>
<div class="cell" data-label="Arabic">الوقـت | من</div>
<div class="cell" data-label="English">Time | From</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="details.genericDimensions.analysisSet">
<div class="cell" data-label="Property">details.genericDimensions.analysisSet</div>
<div class="cell" data-label="Column">analysisSet_id</div>
<div class="cell" data-label="Arabic">المجموعة التحليلية</div>
<div class="cell" data-label="English">Analysis set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/modules/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="details.genericDimensions.branch">
<div class="cell" data-label="Property">details.genericDimensions.branch</div>
<div class="cell" data-label="Column">branch_id</div>
<div class="cell" data-label="Arabic">الفرع</div>
<div class="cell" data-label="English">Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/modules/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="details.genericDimensions.department">
<div class="cell" data-label="Property">details.genericDimensions.department</div>
<div class="cell" data-label="Column">department_id</div>
<div class="cell" data-label="Arabic">الإدارة</div>
<div class="cell" data-label="English">Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/modules/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="details.genericDimensions.legalEntity">
<div class="cell" data-label="Property">details.genericDimensions.legalEntity</div>
<div class="cell" data-label="Column">legalEntity_id</div>
<div class="cell" data-label="Arabic">الشركة</div>
<div class="cell" data-label="English">Legal Entity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [LegalEntity](/modules/basic/LegalEntity.md) 
</div>
</div>

<div class="row searchable" id="details.genericDimensions.sector">
<div class="cell" data-label="Property">details.genericDimensions.sector</div>
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

<div class="row searchable" id="details.lineNumber">
<div class="cell" data-label="Property">details.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="details.machine">
<div class="cell" data-label="Property">details.machine</div>
<div class="cell gen-ref-column" data-label="Column">machineActualCode,  machineCode,  machineEntityType,  machineId</div>
<div class="cell" data-label="Arabic">الالة</div>
<div class="cell" data-label="English">machine</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.machinesCount">
<div class="cell" data-label="Property">details.machinesCount</div>
<div class="cell" data-label="Column">machinesCount</div>
<div class="cell" data-label="Arabic">عدد الماكينات</div>
<div class="cell" data-label="English">Machines Count</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.manualRef1">
<div class="cell" data-label="Property">details.manualRef1</div>
<div class="cell" data-label="Column">manualRef1</div>
<div class="cell" data-label="Arabic">رقم المستند اليدوي</div>
<div class="cell" data-label="English">Manual Ref1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.n1">
<div class="cell" data-label="Property">details.n1</div>
<div class="cell" data-label="Column">n1</div>
<div class="cell" data-label="Arabic">رقم 1</div>
<div class="cell" data-label="English">Number 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.n10">
<div class="cell" data-label="Property">details.n10</div>
<div class="cell" data-label="Column">n10</div>
<div class="cell" data-label="Arabic">رقم 10</div>
<div class="cell" data-label="English">Number 10</div>
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

<div class="row searchable" id="details.n6">
<div class="cell" data-label="Property">details.n6</div>
<div class="cell" data-label="Column">n6</div>
<div class="cell" data-label="Arabic">رقم 6</div>
<div class="cell" data-label="English">Number 6</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.n7">
<div class="cell" data-label="Property">details.n7</div>
<div class="cell" data-label="Column">n7</div>
<div class="cell" data-label="Arabic">رقم 7</div>
<div class="cell" data-label="English">Number 7</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.n8">
<div class="cell" data-label="Property">details.n8</div>
<div class="cell" data-label="Column">n8</div>
<div class="cell" data-label="Arabic">رقم 8</div>
<div class="cell" data-label="English">Number 8</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.n9">
<div class="cell" data-label="Property">details.n9</div>
<div class="cell" data-label="Column">n9</div>
<div class="cell" data-label="Arabic">رقم 9</div>
<div class="cell" data-label="English">Number 9</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.originDoc">
<div class="cell" data-label="Property">details.originDoc</div>
<div class="cell gen-ref-column" data-label="Column">originDocActualCode,  originDocCode,  originDocEntityType,  originDocId</div>
<div class="cell" data-label="Arabic"> تم النسخ من سند</div>
<div class="cell" data-label="English"> Copied From Doc</div>
<div class="cell" data-label="Type">Genericreference</div>

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
<div class="cell" data-label="Arabic">سعر الساعة</div>
<div class="cell" data-label="English">Hour Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.purchaseElement">
<div class="cell" data-label="Property">details.purchaseElement</div>
<div class="cell" data-label="Column">purchaseElement_id</div>
<div class="cell" data-label="Arabic"> بند شراء</div>
<div class="cell" data-label="English"> Purchase Element</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [PurchaseElement](/modules/accounting/PurchaseElement.md) 
</div>
</div>

<div class="row searchable" id="details.purchasesMan">
<div class="cell" data-label="Property">details.purchasesMan</div>
<div class="cell" data-label="Column">purchasesMan_id</div>
<div class="cell" data-label="Arabic">مندوب المشتريات</div>
<div class="cell" data-label="English">Purchases man</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/modules/basic/Employee.md) 
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

<div class="row searchable" id="details.ref10">
<div class="cell" data-label="Property">details.ref10</div>
<div class="cell gen-ref-column" data-label="Column">ref10ActualCode,  ref10Code,  ref10EntityType,  ref10Id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.ref2">
<div class="cell" data-label="Property">details.ref2</div>
<div class="cell gen-ref-column" data-label="Column">ref2ActualCode,  ref2Code,  ref2EntityType,  ref2Id</div>
<div class="cell" data-label="Arabic">مرجع 2</div>
<div class="cell" data-label="English">Reference 2</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.ref3">
<div class="cell" data-label="Property">details.ref3</div>
<div class="cell gen-ref-column" data-label="Column">ref3ActualCode,  ref3Code,  ref3EntityType,  ref3Id</div>
<div class="cell" data-label="Arabic">مرجع 3</div>
<div class="cell" data-label="English">Reference 3</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.ref4">
<div class="cell" data-label="Property">details.ref4</div>
<div class="cell gen-ref-column" data-label="Column">ref4ActualCode,  ref4Code,  ref4EntityType,  ref4Id</div>
<div class="cell" data-label="Arabic">مرجع 4</div>
<div class="cell" data-label="English">Reference 4</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.ref5">
<div class="cell" data-label="Property">details.ref5</div>
<div class="cell gen-ref-column" data-label="Column">ref5ActualCode,  ref5Code,  ref5EntityType,  ref5Id</div>
<div class="cell" data-label="Arabic">مرجع 5</div>
<div class="cell" data-label="English">Reference 5</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.ref6">
<div class="cell" data-label="Property">details.ref6</div>
<div class="cell gen-ref-column" data-label="Column">ref6ActualCode,  ref6Code,  ref6EntityType,  ref6Id</div>
<div class="cell" data-label="Arabic">مرجع 6</div>
<div class="cell" data-label="English">Reference 6</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.ref7">
<div class="cell" data-label="Property">details.ref7</div>
<div class="cell gen-ref-column" data-label="Column">ref7ActualCode,  ref7Code,  ref7EntityType,  ref7Id</div>
<div class="cell" data-label="Arabic">مرجع 7</div>
<div class="cell" data-label="English">Reference 7</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.ref8">
<div class="cell" data-label="Property">details.ref8</div>
<div class="cell gen-ref-column" data-label="Column">ref8ActualCode,  ref8Code,  ref8EntityType,  ref8Id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.ref9">
<div class="cell" data-label="Property">details.ref9</div>
<div class="cell gen-ref-column" data-label="Column">ref9ActualCode,  ref9Code,  ref9EntityType,  ref9Id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.remarks">
<div class="cell" data-label="Property">details.remarks</div>
<div class="cell" data-label="Column">remarks</div>
<div class="cell" data-label="Arabic"> ملاحظات</div>
<div class="cell" data-label="English"> Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="details.rentedHours">
<div class="cell" data-label="Property">details.rentedHours</div>
<div class="cell" data-label="Column">rentedHours</div>
<div class="cell" data-label="Arabic">عدد ساعات التشغيل</div>
<div class="cell" data-label="English">Rented Hours</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.subsidiary">
<div class="cell" data-label="Property">details.subsidiary</div>
<div class="cell gen-ref-column" data-label="Column">subsidiaryActualCode,  subsidiaryCode,  subsidiaryEntityType,  subsidiaryId</div>
<div class="cell" data-label="Arabic">الذمة</div>
<div class="cell" data-label="English">Subsidiary</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.subsidiaryAccountType">
<div class="cell" data-label="Property">details.subsidiaryAccountType</div>
<div class="cell" data-label="Column">subsidiaryAccountType</div>
<div class="cell" data-label="Arabic">نوع الحافظة</div>
<div class="cell" data-label="English">Subsidiary account type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="details.supplier">
<div class="cell" data-label="Property">details.supplier</div>
<div class="cell" data-label="Column">supplier_id</div>
<div class="cell" data-label="Arabic">مورد</div>
<div class="cell" data-label="English"> Supplier</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Supplier](/modules/basic/Supplier.md) 
</div>
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

<div class="row searchable" id="details.toDate">
<div class="cell" data-label="Property">details.toDate</div>
<div class="cell" data-label="Column">toDate</div>
<div class="cell" data-label="Arabic">إلى تاريخ</div>
<div class="cell" data-label="English">To Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.toTime">
<div class="cell" data-label="Property">details.toTime</div>
<div class="cell" data-label="Column">toTime</div>
<div class="cell" data-label="Arabic">الوقـت | إلى</div>
<div class="cell" data-label="English">Time | To</div>
<div class="cell" data-label="Type">Time</div>

</div>


</div>
</div>

<div id='externalPaymentLines' title='externalPaymentLines' class='searchable'>

## externalPaymentLines (السداد بسندات خارجية - External Payment Lines)

<div class='tableName'>

**Table Name:** MiscRentExternalPaymentLine, **Join Column:** machineRentInvoice_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="externalPaymentLines.b1">
<div class="cell" data-label="Property">externalPaymentLines.b1</div>
<div class="cell" data-label="Column">b1</div>
<div class="cell" data-label="Arabic">Boolean 1</div>
<div class="cell" data-label="English">Boolean 1</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="externalPaymentLines.b2">
<div class="cell" data-label="Property">externalPaymentLines.b2</div>
<div class="cell" data-label="Column">b2</div>
<div class="cell" data-label="Arabic">Boolean 2</div>
<div class="cell" data-label="English">Boolean 2</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="externalPaymentLines.date1">
<div class="cell" data-label="Property">externalPaymentLines.date1</div>
<div class="cell" data-label="Column">date1</div>
<div class="cell" data-label="Arabic">تـــاريخ 1</div>
<div class="cell" data-label="English">Date 1</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="externalPaymentLines.date2">
<div class="cell" data-label="Property">externalPaymentLines.date2</div>
<div class="cell" data-label="Column">date2</div>
<div class="cell" data-label="Arabic">تـــاريخ 2</div>
<div class="cell" data-label="English">Date 2</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="externalPaymentLines.doNotAffectRemaining">
<div class="cell" data-label="Property">externalPaymentLines.doNotAffectRemaining</div>
<div class="cell" data-label="Column">doNotAffectRemaining</div>
<div class="cell" data-label="Arabic">عدم التأثير على المتبقي</div>
<div class="cell" data-label="English">Do Not Affect Remaining</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="externalPaymentLines.id">
<div class="cell" data-label="Property">externalPaymentLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="externalPaymentLines.lineNumber">
<div class="cell" data-label="Property">externalPaymentLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="externalPaymentLines.paymentDate">
<div class="cell" data-label="Property">externalPaymentLines.paymentDate</div>
<div class="cell" data-label="Column">paymentDate</div>
<div class="cell" data-label="Arabic">تاريخ الدفع</div>
<div class="cell" data-label="English">Payment Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="externalPaymentLines.paymentDocument">
<div class="cell" data-label="Property">externalPaymentLines.paymentDocument</div>
<div class="cell gen-ref-column" data-label="Column">paymentDocumentActualCode,  paymentDocumentCode,  paymentDocumentEntityType,  paymentDocumentId</div>
<div class="cell" data-label="Arabic">مستند الدفع</div>
<div class="cell" data-label="English">Document</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="externalPaymentLines.paymentValue">
<div class="cell" data-label="Property">externalPaymentLines.paymentValue</div>
<div class="cell" data-label="Column">paymentValue</div>
<div class="cell" data-label="Arabic">المبلغ</div>
<div class="cell" data-label="English">Payment Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>


</div>
</div>

<div id='paymentLines' title='paymentLines' class='searchable'>

## paymentLines (الســداد - Payment Lines)

<div class='tableName'>

**Table Name:** MiscPurchaseInvPaymentLine, **Join Column:** machineRentInvoice_id

</div>

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

<div id='scheduleLines' title='scheduleLines' class='searchable'>

## scheduleLines (الدفعات - Payments)

<div class='tableName'>

**Table Name:** MiscRentScheduledPayLine, **Join Column:** machineRentInvoice_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="scheduleLines.date1">
<div class="cell" data-label="Property">scheduleLines.date1</div>
<div class="cell" data-label="Column">date1</div>
<div class="cell" data-label="Arabic">تـــاريخ 1</div>
<div class="cell" data-label="English">Date 1</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="scheduleLines.date2">
<div class="cell" data-label="Property">scheduleLines.date2</div>
<div class="cell" data-label="Column">date2</div>
<div class="cell" data-label="Arabic">تـــاريخ 2</div>
<div class="cell" data-label="English">Date 2</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="scheduleLines.date3">
<div class="cell" data-label="Property">scheduleLines.date3</div>
<div class="cell" data-label="Column">date3</div>
<div class="cell" data-label="Arabic">تاريخ 3</div>
<div class="cell" data-label="English">Date3</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="scheduleLines.id">
<div class="cell" data-label="Property">scheduleLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="scheduleLines.installmentCode">
<div class="cell" data-label="Property">scheduleLines.installmentCode</div>
<div class="cell" data-label="Column">installmentCode</div>
<div class="cell" data-label="Arabic">كود القسط</div>
<div class="cell" data-label="English">Installment Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="scheduleLines.installmentDescription">
<div class="cell" data-label="Property">scheduleLines.installmentDescription</div>
<div class="cell" data-label="Column">installmentDescription</div>
<div class="cell" data-label="Arabic">وصف القسط</div>
<div class="cell" data-label="English">Installment Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="scheduleLines.installmentDoc">
<div class="cell" data-label="Property">scheduleLines.installmentDoc</div>
<div class="cell gen-ref-column" data-label="Column">installmentDocActualCode,  installmentDocCode,  installmentDocEntityType,  installmentDocId</div>
<div class="cell" data-label="Arabic">مستند القسط</div>
<div class="cell" data-label="English">Installment doc</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="scheduleLines.lineNumber">
<div class="cell" data-label="Property">scheduleLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="scheduleLines.n1">
<div class="cell" data-label="Property">scheduleLines.n1</div>
<div class="cell" data-label="Column">n1</div>
<div class="cell" data-label="Arabic">رقم 1</div>
<div class="cell" data-label="English">Number 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="scheduleLines.n2">
<div class="cell" data-label="Property">scheduleLines.n2</div>
<div class="cell" data-label="Column">n2</div>
<div class="cell" data-label="Arabic">رقم 2</div>
<div class="cell" data-label="English">Number 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="scheduleLines.n3">
<div class="cell" data-label="Property">scheduleLines.n3</div>
<div class="cell" data-label="Column">n3</div>
<div class="cell" data-label="Arabic">رقم 3</div>
<div class="cell" data-label="English">Number 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="scheduleLines.paid">
<div class="cell" data-label="Property">scheduleLines.paid</div>
<div class="cell" data-label="Column">paid</div>
<div class="cell" data-label="Arabic">مُسددة</div>
<div class="cell" data-label="English">Paid</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="scheduleLines.paidValue">
<div class="cell" data-label="Property">scheduleLines.paidValue</div>
<div class="cell" data-label="Column">paidValue</div>
<div class="cell" data-label="Arabic">القيمة المدفوعة</div>
<div class="cell" data-label="English">Paid Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="scheduleLines.paymentDate">
<div class="cell" data-label="Property">scheduleLines.paymentDate</div>
<div class="cell" data-label="Column">paymentDate</div>
<div class="cell" data-label="Arabic">تاريخ الدفع</div>
<div class="cell" data-label="English">Payment Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="scheduleLines.paymentPercent">
<div class="cell" data-label="Property">scheduleLines.paymentPercent</div>
<div class="cell" data-label="Column">paymentPercent</div>
<div class="cell" data-label="Arabic">نسبة الدفعة</div>
<div class="cell" data-label="English">Payment Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="scheduleLines.paymentValue">
<div class="cell" data-label="Property">scheduleLines.paymentValue</div>
<div class="cell" data-label="Column">paymentValue</div>
<div class="cell" data-label="Arabic">المبلغ</div>
<div class="cell" data-label="English">Payment Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="scheduleLines.ref1">
<div class="cell" data-label="Property">scheduleLines.ref1</div>
<div class="cell gen-ref-column" data-label="Column">ref1ActualCode,  ref1Code,  ref1EntityType,  ref1Id</div>
<div class="cell" data-label="Arabic">مرجع 1</div>
<div class="cell" data-label="English">Reference 1</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="scheduleLines.ref2">
<div class="cell" data-label="Property">scheduleLines.ref2</div>
<div class="cell gen-ref-column" data-label="Column">ref2ActualCode,  ref2Code,  ref2EntityType,  ref2Id</div>
<div class="cell" data-label="Arabic">مرجع 2</div>
<div class="cell" data-label="English">Reference 2</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="scheduleLines.remaining">
<div class="cell" data-label="Property">scheduleLines.remaining</div>
<div class="cell" data-label="Column">remaining</div>
<div class="cell" data-label="Arabic">المتبقي</div>
<div class="cell" data-label="English">Remaining</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="scheduleLines.remarks">
<div class="cell" data-label="Property">scheduleLines.remarks</div>
<div class="cell" data-label="Column">remarks</div>
<div class="cell" data-label="Arabic">ملاحظات</div>
<div class="cell" data-label="English">Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="scheduleLines.systemPaid">
<div class="cell" data-label="Property">scheduleLines.systemPaid</div>
<div class="cell" data-label="Column">systemPaid</div>
<div class="cell" data-label="Arabic">المحصل نظاميا</div>
<div class="cell" data-label="English">System paid</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="scheduleLines.text1">
<div class="cell" data-label="Property">scheduleLines.text1</div>
<div class="cell" data-label="Column">text1</div>
<div class="cell" data-label="Arabic">نــــص 1</div>
<div class="cell" data-label="English">Text 1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="scheduleLines.text2">
<div class="cell" data-label="Property">scheduleLines.text2</div>
<div class="cell" data-label="Column">text2</div>
<div class="cell" data-label="Arabic">نـــــص 2</div>
<div class="cell" data-label="English">Text 2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="scheduleLines.text3">
<div class="cell" data-label="Property">scheduleLines.text3</div>
<div class="cell" data-label="Column">text3</div>
<div class="cell" data-label="Arabic">نص 3</div>
<div class="cell" data-label="English">text3</div>
<div class="cell" data-label="Type">Text</div>

</div>


</div>
</div>

