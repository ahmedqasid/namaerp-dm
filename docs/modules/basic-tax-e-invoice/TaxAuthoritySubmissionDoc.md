
<div class='tableName'>


# TaxAuthoritySubmissionDoc
</div>

**Arabic:** إرسال مستندات الي مصلحة الضرائب - مستندات إرسال مستندات الي مصلحة الضرائب
**English:** Tax Authority Submission Document - Tax Authority Submission Documents

<ContentFilter/>


<div class='searchable'>
<a href='#toSubmitLines'>toSubmitLines (TaxAuthoritySubmissionLine) </a>
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

<div class="row searchable" id="collectFromDoc">
<div class="cell" data-label="Property">collectFromDoc</div>
<div class="cell gen-ref-column" data-label="Column">collectFromDocActualCode,  collectFromDocCode,  collectFromDocEntityType,  collectFromDocId</div>
<div class="cell" data-label="Arabic">تجميع من مستند</div>
<div class="cell" data-label="English">Collect From Document</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="collectOnlyEntityType">
<div class="cell" data-label="Property">collectOnlyEntityType</div>
<div class="cell" data-label="Column">collectOnlyEntityType</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">EntityType</div>

</div>

<div class="row searchable" id="collectToDoc">
<div class="cell" data-label="Property">collectToDoc</div>
<div class="cell gen-ref-column" data-label="Column">collectToDocActualCode,  collectToDocCode,  collectToDocEntityType,  collectToDocId</div>
<div class="cell" data-label="Arabic">تجميع إلي مستند</div>
<div class="cell" data-label="English">Collect To Document</div>
<div class="cell" data-label="Type">Genericreference</div>

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

<div class="row searchable" id="creditNoteTotalDiscount">
<div class="cell" data-label="Property">creditNoteTotalDiscount</div>
<div class="cell" data-label="Column">creditNoteTotalDiscount</div>
<div class="cell" data-label="Arabic">إجمالي الخصم للنوع إشعار دائن</div>
<div class="cell" data-label="English">Credit Note Total Discount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="creditNoteTotalFinalNetValue">
<div class="cell" data-label="Property">creditNoteTotalFinalNetValue</div>
<div class="cell" data-label="Column">creditNoteTotalFinalNetValue</div>
<div class="cell" data-label="Arabic">إجمالي الصافي النهائي للنوع إشعار دائن</div>
<div class="cell" data-label="English">Credit Note Total Final Net Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="creditNoteTotalNetValue">
<div class="cell" data-label="Property">creditNoteTotalNetValue</div>
<div class="cell" data-label="Column">creditNoteTotalNetValue</div>
<div class="cell" data-label="Arabic">إجمالي الصافي للنوع إشعار دائن</div>
<div class="cell" data-label="English">Credit Note Total Net Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="creditNoteTotalPrice">
<div class="cell" data-label="Property">creditNoteTotalPrice</div>
<div class="cell" data-label="Column">creditNoteTotalPrice</div>
<div class="cell" data-label="Arabic">إجمالي السعر للنوع إشعار دائن</div>
<div class="cell" data-label="English">Credit Note Total Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="creditNoteTotalTaxValue">
<div class="cell" data-label="Property">creditNoteTotalTaxValue</div>
<div class="cell" data-label="Column">creditNoteTotalTaxValue</div>
<div class="cell" data-label="Arabic">إجمالي الضريبة للنوع إشعار دائن</div>
<div class="cell" data-label="English">Credit Note Total Tax Value</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="debitNoteTotalDiscount">
<div class="cell" data-label="Property">debitNoteTotalDiscount</div>
<div class="cell" data-label="Column">debitNoteTotalDiscount</div>
<div class="cell" data-label="Arabic">إجمالي الخصم للنوع إشعار مدين</div>
<div class="cell" data-label="English">Debit Note Total Discount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="debitNoteTotalFinalNetValue">
<div class="cell" data-label="Property">debitNoteTotalFinalNetValue</div>
<div class="cell" data-label="Column">debitNoteTotalFinalNetValue</div>
<div class="cell" data-label="Arabic">إجمالي الصافي النهائي للنوع إشعار مدين</div>
<div class="cell" data-label="English">Debit Note Total Final Net Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="debitNoteTotalNetValue">
<div class="cell" data-label="Property">debitNoteTotalNetValue</div>
<div class="cell" data-label="Column">debitNoteTotalNetValue</div>
<div class="cell" data-label="Arabic">إجمالي الصافي للنوع إشعار مدين</div>
<div class="cell" data-label="English">Debit Note Total Net Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="debitNoteTotalPrice">
<div class="cell" data-label="Property">debitNoteTotalPrice</div>
<div class="cell" data-label="Column">debitNoteTotalPrice</div>
<div class="cell" data-label="Arabic">إجمالي السعر للنوع إشعار مدين</div>
<div class="cell" data-label="English">Debit Note Total Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="debitNoteTotalTaxValue">
<div class="cell" data-label="Property">debitNoteTotalTaxValue</div>
<div class="cell" data-label="Column">debitNoteTotalTaxValue</div>
<div class="cell" data-label="Arabic">إجمالي الضريبة للنوع إشعار مدين</div>
<div class="cell" data-label="English">Debit Note Total Tax Value</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="docsWithoutSignatures">
<div class="cell" data-label="Property">docsWithoutSignatures</div>
<div class="cell" data-label="Column">docsWithoutSignatures</div>
<div class="cell" data-label="Arabic">المستندات بدون توقيع الكتروني (ما يتم نسخه لبرناج التوقيع)</div>
<div class="cell" data-label="English">Documents Without Signatures</div>
<div class="cell" data-label="Type">BigText</div>

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

<div class="row searchable" id="einvoiceSignerPin">
<div class="cell" data-label="Property">einvoiceSignerPin</div>
<div class="cell" data-label="Column">einvoiceSignerPin</div>
<div class="cell" data-label="Arabic">E Invoice Signer Pin</div>
<div class="cell" data-label="English">E Invoice Signer Pin</div>
<div class="cell" data-label="Type">Password</div>

</div>

<div class="row searchable" id="einvoiceSignerType">
<div class="cell" data-label="Property">einvoiceSignerType</div>
<div class="cell" data-label="Column">einvoiceSignerType</div>
<div class="cell" data-label="Arabic">E Invoice Signer Type</div>
<div class="cell" data-label="English">E Invoice Signer Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="einvoiceSignerUrl">
<div class="cell" data-label="Property">einvoiceSignerUrl</div>
<div class="cell" data-label="Column">einvoiceSignerUrl</div>
<div class="cell" data-label="Arabic">E Invoice Signer URL</div>
<div class="cell" data-label="English">E Invoice Signer URL</div>
<div class="cell" data-label="Type">Link</div>

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

<div class="row searchable" id="fromAnalysisSet">
<div class="cell" data-label="Property">fromAnalysisSet</div>
<div class="cell" data-label="Column">fromAnalysisSet_id</div>
<div class="cell" data-label="Arabic">من مجموعه تحليليه</div>
<div class="cell" data-label="English">From Analysis Set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/modules/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="fromBranch">
<div class="cell" data-label="Property">fromBranch</div>
<div class="cell" data-label="Column">fromBranch_id</div>
<div class="cell" data-label="Arabic">من فرع</div>
<div class="cell" data-label="English">From Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/modules/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="fromDepartment">
<div class="cell" data-label="Property">fromDepartment</div>
<div class="cell" data-label="Column">fromDepartment_id</div>
<div class="cell" data-label="Arabic">من إدارة</div>
<div class="cell" data-label="English">From Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/modules/basic/Department.md) 
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

<div class="row searchable" id="fromLegalEntity">
<div class="cell" data-label="Property">fromLegalEntity</div>
<div class="cell" data-label="Column">fromLegalEntity_id</div>
<div class="cell" data-label="Arabic">من شركة</div>
<div class="cell" data-label="English">From LegalEntity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [LegalEntity](/modules/basic/LegalEntity.md) 
</div>
</div>

<div class="row searchable" id="fromSector">
<div class="cell" data-label="Property">fromSector</div>
<div class="cell" data-label="Column">fromSector_id</div>
<div class="cell" data-label="Arabic">من قطاع</div>
<div class="cell" data-label="English">From Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/modules/basic/Sector.md) 
</div>
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

<div class="row searchable" id="invoiceTotalDiscount">
<div class="cell" data-label="Property">invoiceTotalDiscount</div>
<div class="cell" data-label="Column">invoiceTotalDiscount</div>
<div class="cell" data-label="Arabic">إجمالي الخصم للنوع فاتورة</div>
<div class="cell" data-label="English">Invoice Total Discount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="invoiceTotalFinalNetValue">
<div class="cell" data-label="Property">invoiceTotalFinalNetValue</div>
<div class="cell" data-label="Column">invoiceTotalFinalNetValue</div>
<div class="cell" data-label="Arabic">إجمالي الصافي النهائي للنوع فاتورة</div>
<div class="cell" data-label="English">Invoice Total Final Net Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="invoiceTotalNetValue">
<div class="cell" data-label="Property">invoiceTotalNetValue</div>
<div class="cell" data-label="Column">invoiceTotalNetValue</div>
<div class="cell" data-label="Arabic">إجمالي الصافي للنوع فاتورة</div>
<div class="cell" data-label="English">Invoice Total Net Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="invoiceTotalPrice">
<div class="cell" data-label="Property">invoiceTotalPrice</div>
<div class="cell" data-label="Column">invoiceTotalPrice</div>
<div class="cell" data-label="Arabic">إجمالي السعر للنوع فاتورة</div>
<div class="cell" data-label="English">Invoice Total Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="invoiceTotalTaxValue">
<div class="cell" data-label="Property">invoiceTotalTaxValue</div>
<div class="cell" data-label="Column">invoiceTotalTaxValue</div>
<div class="cell" data-label="Arabic">إجمالي الضريبة للنوع فاتورة</div>
<div class="cell" data-label="English">Invoice Total Tax Value</div>
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

<div class="row searchable" id="maxDateToCollectDocs">
<div class="cell" data-label="Property">maxDateToCollectDocs</div>
<div class="cell" data-label="Column">maxDateToCollectDocs</div>
<div class="cell" data-label="Arabic">تجميع المستندات حتي تاريخ</div>
<div class="cell" data-label="English">Collect Document To Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="minDateToCollectDocs">
<div class="cell" data-label="Property">minDateToCollectDocs</div>
<div class="cell" data-label="Column">minDateToCollectDocs</div>
<div class="cell" data-label="Arabic">تجميع المستندات من تاريخ</div>
<div class="cell" data-label="English">Collect Document From Date</div>
<div class="cell" data-label="Type">Date</div>

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

<div class="row searchable" id="taxConfiguration">
<div class="cell" data-label="Property">taxConfiguration</div>
<div class="cell" data-label="Column">taxConfiguration_id</div>
<div class="cell" data-label="Arabic">إعدادات الضريبة</div>
<div class="cell" data-label="English">Tax Configuration</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [TaxPayerConfiguration](/modules/basic-tax-e-invoice/TaxPayerConfiguration.md) 
</div>
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

<div class="row searchable" id="toAnalysisSet">
<div class="cell" data-label="Property">toAnalysisSet</div>
<div class="cell" data-label="Column">toAnalysisSet_id</div>
<div class="cell" data-label="Arabic">إلي مجموعه تحليليه</div>
<div class="cell" data-label="English">To Snalysis Set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/modules/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="toBranch">
<div class="cell" data-label="Property">toBranch</div>
<div class="cell" data-label="Column">toBranch_id</div>
<div class="cell" data-label="Arabic">إلى فرع</div>
<div class="cell" data-label="English">To Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/modules/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="toDepartment">
<div class="cell" data-label="Property">toDepartment</div>
<div class="cell" data-label="Column">toDepartment_id</div>
<div class="cell" data-label="Arabic">إلى إدارة</div>
<div class="cell" data-label="English">To Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/modules/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="toLegalEntity">
<div class="cell" data-label="Property">toLegalEntity</div>
<div class="cell" data-label="Column">toLegalEntity_id</div>
<div class="cell" data-label="Arabic">الي شركة</div>
<div class="cell" data-label="English">To LegalEntity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [LegalEntity](/modules/basic/LegalEntity.md) 
</div>
</div>

<div class="row searchable" id="toSector">
<div class="cell" data-label="Property">toSector</div>
<div class="cell" data-label="Column">toSector_id</div>
<div class="cell" data-label="Arabic">إلي قطاع</div>
<div class="cell" data-label="English">To Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/modules/basic/Sector.md) 
</div>
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

<div id='toSubmitLines' title='toSubmitLines' class='searchable'>

## toSubmitLines (ارسال المستندات - Send Documents)

<div class='tableName'>

**Table Name:** TaxAuthoritySubmissionLine, **Join Column:** taxAuthoritySubmissionDoc_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="toSubmitLines.doc">
<div class="cell" data-label="Property">toSubmitLines.doc</div>
<div class="cell" data-label="Column">doc_id</div>
<div class="cell" data-label="Arabic">المستند</div>
<div class="cell" data-label="English">Document</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [TaxAuthoritySubmissionDoc](/modules/basic-tax-e-invoice/TaxAuthoritySubmissionDoc.md) 
</div>
</div>

<div class="row searchable" id="toSubmitLines.docESignature">
<div class="cell" data-label="Property">toSubmitLines.docESignature</div>
<div class="cell" data-label="Column">docESignature</div>
<div class="cell" data-label="Arabic">التوقيع الإلكتروني للمستند</div>
<div class="cell" data-label="English">Document E Signature</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="toSubmitLines.document">
<div class="cell" data-label="Property">toSubmitLines.document</div>
<div class="cell gen-ref-column" data-label="Column">documentActualCode,  documentCode,  documentEntityType,  documentId</div>
<div class="cell" data-label="Arabic"> # المستند</div>
<div class="cell" data-label="English"> Document #</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="toSubmitLines.edocumentType">
<div class="cell" data-label="Property">toSubmitLines.edocumentType</div>
<div class="cell" data-label="Column">edocumentType</div>
<div class="cell" data-label="Arabic">نوع مستند مصلحة الضرائب</div>
<div class="cell" data-label="English">E Document Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="toSubmitLines.finalNetValue">
<div class="cell" data-label="Property">toSubmitLines.finalNetValue</div>
<div class="cell" data-label="Column">finalNetValue</div>
<div class="cell" data-label="Arabic">الصافي النهائي</div>
<div class="cell" data-label="English">Final Net Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="toSubmitLines.id">
<div class="cell" data-label="Property">toSubmitLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="toSubmitLines.lineNumber">
<div class="cell" data-label="Property">toSubmitLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="toSubmitLines.netValue">
<div class="cell" data-label="Property">toSubmitLines.netValue</div>
<div class="cell" data-label="Column">netValue</div>
<div class="cell" data-label="Arabic">الصافي</div>
<div class="cell" data-label="English">Net Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="toSubmitLines.qrCodeBase64">
<div class="cell" data-label="Property">toSubmitLines.qrCodeBase64</div>
<div class="cell" data-label="Column">qrCodeBase64</div>
<div class="cell" data-label="Arabic">Qr Code Base 64</div>
<div class="cell" data-label="English">Qr Code Base 64</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="toSubmitLines.receiver">
<div class="cell" data-label="Property">toSubmitLines.receiver</div>
<div class="cell gen-ref-column" data-label="Column">receiverActualCode,  receiverCode,  receiverEntityType,  receiverId</div>
<div class="cell" data-label="Arabic">العميل او المورد</div>
<div class="cell" data-label="English">Customer Or Supplier</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="toSubmitLines.selectedLine">
<div class="cell" data-label="Property">toSubmitLines.selectedLine</div>
<div class="cell" data-label="Column">selectedLine</div>
<div class="cell" data-label="Arabic">اختيار</div>
<div class="cell" data-label="English">Select</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="toSubmitLines.sentJson">
<div class="cell" data-label="Property">toSubmitLines.sentJson</div>
<div class="cell" data-label="Column">sentJson</div>
<div class="cell" data-label="Arabic">Sent Data</div>
<div class="cell" data-label="English">Sent Data</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="toSubmitLines.signedInvoiceBase64">
<div class="cell" data-label="Property">toSubmitLines.signedInvoiceBase64</div>
<div class="cell" data-label="Column">signedInvoiceBase64</div>
<div class="cell" data-label="Arabic">Signed Invoice Base 64</div>
<div class="cell" data-label="English">Signed Invoice Base 64</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="toSubmitLines.statusInTaxAuthority">
<div class="cell" data-label="Property">toSubmitLines.statusInTaxAuthority</div>
<div class="cell" data-label="Column">statusInTaxAuthority</div>
<div class="cell" data-label="Arabic">حالة المستند بمصلحة الضرائب</div>
<div class="cell" data-label="English">Status In Tax Authority</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="toSubmitLines.submissionUUID">
<div class="cell" data-label="Property">toSubmitLines.submissionUUID</div>
<div class="cell" data-label="Column">submissionUUID</div>
<div class="cell" data-label="Arabic">معرف مرحلة الارسال</div>
<div class="cell" data-label="English">Submission ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="toSubmitLines.submissionUUIDURL">
<div class="cell" data-label="Property">toSubmitLines.submissionUUIDURL</div>
<div class="cell" data-label="Column">submissionUUIDURL</div>
<div class="cell" data-label="Arabic">رابط مطالعة مجموعة فواتير مُرسلة معاَ</div>
<div class="cell" data-label="English">Submission URL</div>
<div class="cell" data-label="Type">Link</div>

</div>

<div class="row searchable" id="toSubmitLines.taxAuthEntityStatusType">
<div class="cell" data-label="Property">toSubmitLines.taxAuthEntityStatusType</div>
<div class="cell" data-label="Column">taxAuthEntityStatusType</div>
<div class="cell" data-label="Arabic">حالة المستند بالنسبة لمصلحة الضرائب</div>
<div class="cell" data-label="English">Tax Authority Document Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="toSubmitLines.taxAuthErrors">
<div class="cell" data-label="Property">toSubmitLines.taxAuthErrors</div>
<div class="cell" data-label="Column">taxAuthErrors</div>
<div class="cell" data-label="Arabic">اخطاء المستند من مصلحة الضرائب</div>
<div class="cell" data-label="English">Tax Authority Errors</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="toSubmitLines.taxAuthUUID">
<div class="cell" data-label="Property">toSubmitLines.taxAuthUUID</div>
<div class="cell" data-label="Column">taxAuthUUID</div>
<div class="cell" data-label="Arabic">معرف المستند داخل مصلحة الضرائب</div>
<div class="cell" data-label="English">Tax Authority Document View ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="toSubmitLines.taxAuthUUIDURL">
<div class="cell" data-label="Property">toSubmitLines.taxAuthUUIDURL</div>
<div class="cell" data-label="Column">taxAuthUUIDURL</div>
<div class="cell" data-label="Arabic">رابط مطالعة الفاتورة الإلكترونية</div>
<div class="cell" data-label="English">E Invoice URL</div>
<div class="cell" data-label="Type">Link</div>

</div>

<div class="row searchable" id="toSubmitLines.taxConfiguration">
<div class="cell" data-label="Property">toSubmitLines.taxConfiguration</div>
<div class="cell" data-label="Column">taxConfiguration_id</div>
<div class="cell" data-label="Arabic">إعدادات الضريبة</div>
<div class="cell" data-label="English">Tax Configuration</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [TaxPayerConfiguration](/modules/basic-tax-e-invoice/TaxPayerConfiguration.md) 
</div>
</div>

<div class="row searchable" id="toSubmitLines.temporaryId">
<div class="cell" data-label="Property">toSubmitLines.temporaryId</div>
<div class="cell" data-label="Column">temporaryId</div>
<div class="cell" data-label="Arabic">معرف لمطالعة المستند بدون تسجيل دخول</div>
<div class="cell" data-label="English">Tax Authority Not Registered Person Document View ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="toSubmitLines.temporaryIdURL">
<div class="cell" data-label="Property">toSubmitLines.temporaryIdURL</div>
<div class="cell" data-label="Column">temporaryIdURL</div>
<div class="cell" data-label="Arabic">رابط مطالعة الفاتورة الإلكترونية بدون تسجيل دخول</div>
<div class="cell" data-label="English">Not Logged In E Invoice URL</div>
<div class="cell" data-label="Type">Link</div>

</div>

<div class="row searchable" id="toSubmitLines.totalDiscount">
<div class="cell" data-label="Property">toSubmitLines.totalDiscount</div>
<div class="cell" data-label="Column">totalDiscount</div>
<div class="cell" data-label="Arabic">إجمالي الخصم</div>
<div class="cell" data-label="English">Total Discount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="toSubmitLines.totalPrice">
<div class="cell" data-label="Property">toSubmitLines.totalPrice</div>
<div class="cell" data-label="Column">totalPrice</div>
<div class="cell" data-label="Arabic">إجمالي السعر</div>
<div class="cell" data-label="English">  Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="toSubmitLines.totalTax1Value">
<div class="cell" data-label="Property">toSubmitLines.totalTax1Value</div>
<div class="cell" data-label="Column">totalTax1Value</div>
<div class="cell" data-label="Arabic">إجمالي الضريبة 1</div>
<div class="cell" data-label="English">Total Tax 1 Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="toSubmitLines.totalTax2Value">
<div class="cell" data-label="Property">toSubmitLines.totalTax2Value</div>
<div class="cell" data-label="Column">totalTax2Value</div>
<div class="cell" data-label="Arabic">إجمالي الضريبة 2</div>
<div class="cell" data-label="English">Total Tax 2 Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="toSubmitLines.totalTaxValue">
<div class="cell" data-label="Property">toSubmitLines.totalTaxValue</div>
<div class="cell" data-label="Column">totalTaxValue</div>
<div class="cell" data-label="Arabic">إجمالي الضريبة</div>
<div class="cell" data-label="English">Total Tax Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="toSubmitLines.validationResults">
<div class="cell" data-label="Property">toSubmitLines.validationResults</div>
<div class="cell" data-label="Column">validationResults</div>
<div class="cell" data-label="Arabic">التحذيرات والأخطاء</div>
<div class="cell" data-label="English">Validation And Errors Result</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="toSubmitLines.valueDate">
<div class="cell" data-label="Property">toSubmitLines.valueDate</div>
<div class="cell" data-label="Column">valueDate</div>
<div class="cell" data-label="Arabic">التاريخ الفعلي</div>
<div class="cell" data-label="English">Value Date</div>
<div class="cell" data-label="Type">Date</div>

</div>


</div>
</div>

