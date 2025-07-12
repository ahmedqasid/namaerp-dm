# TaxEInvoice
**Arabic:** الفاتورة الإكترونية المستقبلة - الفواتير الإلكترونية المستقبلة
**English:** Tax Electronic Invoice - Tax Electronic Invoices

<ContentFilter/>


<div class='searchable'>
<a href='#signatureLines'>signatureLines (TaxEInvoiceSignatureLine) </a> , <a href='#taxEInvoiceItemLines'>taxEInvoiceItemLines (TaxEInvoiceItemLine) </a>
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

<div class="row searchable" id="dateTimeIssued">
<div class="cell" data-label="Property">dateTimeIssued</div>
<div class="cell" data-label="Column">dateTimeIssued</div>
<div class="cell" data-label="Arabic">تاريخ الإصدار</div>
<div class="cell" data-label="English">Date Time Issued</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="dateTimeReceived">
<div class="cell" data-label="Property">dateTimeReceived</div>
<div class="cell" data-label="Column">dateTimeReceived</div>
<div class="cell" data-label="Arabic">تاريخ الإرسال</div>
<div class="cell" data-label="English">Date And Time Received</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="delivery.approach">
<div class="cell" data-label="Property">delivery.approach</div>
<div class="cell" data-label="Column">deliveryApproach</div>
<div class="cell" data-label="Arabic">Delivery Approach</div>
<div class="cell" data-label="English">Delivery Approach</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="delivery.countryOfOrigin">
<div class="cell" data-label="Property">delivery.countryOfOrigin</div>
<div class="cell" data-label="Column">deliveryCountryOfOrigin</div>
<div class="cell" data-label="Arabic">بلد المنتج</div>
<div class="cell" data-label="English">Country Of Origin</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="delivery.dateValidity">
<div class="cell" data-label="Property">delivery.dateValidity</div>
<div class="cell" data-label="Column">deliveryDateValidity</div>
<div class="cell" data-label="Arabic">صلاحية التاريخ</div>
<div class="cell" data-label="English">Delivery Date Validity</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="delivery.exportPort">
<div class="cell" data-label="Property">delivery.exportPort</div>
<div class="cell" data-label="Column">deliveryExportPort</div>
<div class="cell" data-label="Arabic">منفذ التصدير</div>
<div class="cell" data-label="English">Export Port</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="delivery.grossWeight">
<div class="cell" data-label="Property">delivery.grossWeight</div>
<div class="cell" data-label="Column">deliveryGrossWeight</div>
<div class="cell" data-label="Arabic">الوزن الكلي</div>
<div class="cell" data-label="English">Gross Weight</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="delivery.netWeight">
<div class="cell" data-label="Property">delivery.netWeight</div>
<div class="cell" data-label="Column">deliveryNetWeight</div>
<div class="cell" data-label="Arabic">الوزن الصافي</div>
<div class="cell" data-label="English">Net Weight</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="delivery.packaging">
<div class="cell" data-label="Property">delivery.packaging</div>
<div class="cell" data-label="Column">deliveryPackaging</div>
<div class="cell" data-label="Arabic">تعبئة التوصيل</div>
<div class="cell" data-label="English">Delivery Packaging</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="delivery.terms">
<div class="cell" data-label="Property">delivery.terms</div>
<div class="cell" data-label="Column">deliveryTerms</div>
<div class="cell" data-label="Arabic">بنود التوصيل</div>
<div class="cell" data-label="English">Delivery Terms</div>
<div class="cell" data-label="Type">Text</div>

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

<div class="row searchable" id="detailsRead">
<div class="cell" data-label="Property">detailsRead</div>
<div class="cell" data-label="Column">detailsRead</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
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

<div class="row searchable" id="documentType">
<div class="cell" data-label="Property">documentType</div>
<div class="cell" data-label="Column">documentType</div>
<div class="cell" data-label="Arabic">نوع المستند</div>
<div class="cell" data-label="English">Document Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="documentTypeVersion">
<div class="cell" data-label="Property">documentTypeVersion</div>
<div class="cell" data-label="Column">documentTypeVersion</div>
<div class="cell" data-label="Arabic">نسخة المستند</div>
<div class="cell" data-label="English">Document Type Version</div>
<div class="cell" data-label="Type">Text</div>

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

<div class="row searchable" id="extraDiscountAmount">
<div class="cell" data-label="Property">extraDiscountAmount</div>
<div class="cell" data-label="Column">extraDiscountAmount</div>
<div class="cell" data-label="Arabic">خصم إضافي</div>
<div class="cell" data-label="English">Extra Discount Amount</div>
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

<div class="row searchable" id="internalID">
<div class="cell" data-label="Property">internalID</div>
<div class="cell" data-label="Column">internalID</div>
<div class="cell" data-label="Arabic">المعرف الداخلي للمستند</div>
<div class="cell" data-label="English">Internal ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="issueDate">
<div class="cell" data-label="Property">issueDate</div>
<div class="cell" data-label="Column">issueDate</div>
<div class="cell" data-label="Arabic">تاريخ التحرير</div>
<div class="cell" data-label="English">Issue Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="issuer.address.additionalInformation">
<div class="cell" data-label="Property">issuer.address.additionalInformation</div>
<div class="cell" data-label="Column">issuerAddressAdditionalInformation</div>
<div class="cell" data-label="Arabic">معلومات إضافية لمُصًدر الفاتورة</div>
<div class="cell" data-label="English">Issuer Additional Information</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="issuer.address.branchID">
<div class="cell" data-label="Property">issuer.address.branchID</div>
<div class="cell" data-label="Column">issuerAddressBranchID</div>
<div class="cell" data-label="Arabic">Branch ID</div>
<div class="cell" data-label="English">Branch ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="issuer.address.buildingNumber">
<div class="cell" data-label="Property">issuer.address.buildingNumber</div>
<div class="cell" data-label="Column">issuerAddressBuildingNumber</div>
<div class="cell" data-label="Arabic">رقم مبني مُصًدر الفاتورة</div>
<div class="cell" data-label="English">Issuer BuildingNumber</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="issuer.address.country">
<div class="cell" data-label="Property">issuer.address.country</div>
<div class="cell" data-label="Column">issuerAddressCountry</div>
<div class="cell" data-label="Arabic">دولة مُصًدر الفاتورة</div>
<div class="cell" data-label="English">Issuer Country</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="issuer.address.floor">
<div class="cell" data-label="Property">issuer.address.floor</div>
<div class="cell" data-label="Column">issuerAddressFloor</div>
<div class="cell" data-label="Arabic">طابق مُصًدر الفاتورة</div>
<div class="cell" data-label="English">Issuer Floor</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="issuer.address.governorate">
<div class="cell" data-label="Property">issuer.address.governorate</div>
<div class="cell" data-label="Column">issuerAddressGovernorate</div>
<div class="cell" data-label="Arabic">المحافظة</div>
<div class="cell" data-label="English">Governorate</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="issuer.address.landmark">
<div class="cell" data-label="Property">issuer.address.landmark</div>
<div class="cell" data-label="Column">issuerAddressLandmark</div>
<div class="cell" data-label="Arabic">موقع مُصًدر الفاتورة</div>
<div class="cell" data-label="English">Issuer Landmark</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="issuer.address.postalCode">
<div class="cell" data-label="Property">issuer.address.postalCode</div>
<div class="cell" data-label="Column">issuerAddressPostalCode</div>
<div class="cell" data-label="Arabic">رقم بريدي مُصًدر الفاتورة</div>
<div class="cell" data-label="English">Issuer PostalCode</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="issuer.address.regionCity">
<div class="cell" data-label="Property">issuer.address.regionCity</div>
<div class="cell" data-label="Column">issuerAddressRegionCity</div>
<div class="cell" data-label="Arabic">منطقة مُصًدر الفاتورة</div>
<div class="cell" data-label="English">Issuer RegionCity</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="issuer.address.room">
<div class="cell" data-label="Property">issuer.address.room</div>
<div class="cell" data-label="Column">issuerAddressRoom</div>
<div class="cell" data-label="Arabic">غرفة مُصًدر الفاتورة</div>
<div class="cell" data-label="English">Issuer Room</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="issuer.address.street">
<div class="cell" data-label="Property">issuer.address.street</div>
<div class="cell" data-label="Column">issuerAddressStreet</div>
<div class="cell" data-label="Arabic">شارع مُصًدر الفاتورة</div>
<div class="cell" data-label="English">Issuer Street</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="issuer.id">
<div class="cell" data-label="Property">issuer.id</div>
<div class="cell" data-label="Column">issuerId</div>
<div class="cell" data-label="Arabic">مُعرف مُصًدر الفاتورة</div>
<div class="cell" data-label="English">Issuer Id</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="issuer.name">
<div class="cell" data-label="Property">issuer.name</div>
<div class="cell" data-label="Column">issuerName</div>
<div class="cell" data-label="Arabic">اسم مُصًدر الفاتورة</div>
<div class="cell" data-label="English">Issuer Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="issuer.type">
<div class="cell" data-label="Property">issuer.type</div>
<div class="cell" data-label="Column">issuerType</div>
<div class="cell" data-label="Arabic">نوع مُصًدر الفاتورة</div>
<div class="cell" data-label="English">Issuer Type</div>
<div class="cell" data-label="Type">Text</div>

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

<div class="row searchable" id="longId">
<div class="cell" data-label="Property">longId</div>
<div class="cell" data-label="Column">longId</div>
<div class="cell" data-label="Arabic">المعرف الكامل للمستند</div>
<div class="cell" data-label="English">Long ID</div>
<div class="cell" data-label="Type">Text</div>

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

<div class="row searchable" id="netAmount">
<div class="cell" data-label="Property">netAmount</div>
<div class="cell" data-label="Column">netAmount</div>
<div class="cell" data-label="Arabic">الصافي</div>
<div class="cell" data-label="English">Net Amount</div>
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

<div class="row searchable" id="payment.bankAccountIBAN">
<div class="cell" data-label="Property">payment.bankAccountIBAN</div>
<div class="cell" data-label="Column">paymentBankAccountIBAN</div>
<div class="cell" data-label="Arabic">Account IBAN</div>
<div class="cell" data-label="English">Account IBAN</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="payment.bankAccountNo">
<div class="cell" data-label="Property">payment.bankAccountNo</div>
<div class="cell" data-label="Column">paymentBankAccountNo</div>
<div class="cell" data-label="Arabic">رقم حساب البنك</div>
<div class="cell" data-label="English">Account Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="payment.bankAddress">
<div class="cell" data-label="Property">payment.bankAddress</div>
<div class="cell" data-label="Column">paymentBankAddress</div>
<div class="cell" data-label="Arabic">عنوان البنك</div>
<div class="cell" data-label="English">Bank Address</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="payment.bankName">
<div class="cell" data-label="Property">payment.bankName</div>
<div class="cell" data-label="Column">paymentBankName</div>
<div class="cell" data-label="Arabic">إسم البنك</div>
<div class="cell" data-label="English">Bank Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="payment.swiftCode">
<div class="cell" data-label="Property">payment.swiftCode</div>
<div class="cell" data-label="Column">paymentSwiftCode</div>
<div class="cell" data-label="Arabic">Swift Code</div>
<div class="cell" data-label="English">Swift Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="payment.terms">
<div class="cell" data-label="Property">payment.terms</div>
<div class="cell" data-label="Column">paymentTerms</div>
<div class="cell" data-label="Arabic">بنود الدفع</div>
<div class="cell" data-label="English">Payment Terms</div>
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

<div class="row searchable" id="proformaInvoiceNumber">
<div class="cell" data-label="Property">proformaInvoiceNumber</div>
<div class="cell" data-label="Column">proformaInvoiceNumber</div>
<div class="cell" data-label="Arabic">رقم الفاتورة الأولي</div>
<div class="cell" data-label="English">Proforma Invoice Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="purchaseOrderDescription">
<div class="cell" data-label="Property">purchaseOrderDescription</div>
<div class="cell" data-label="Column">purchaseOrderDescription</div>
<div class="cell" data-label="Arabic">وصف أمر الشراء</div>
<div class="cell" data-label="English">Purchase Order Description</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="purchaseOrderReference">
<div class="cell" data-label="Property">purchaseOrderReference</div>
<div class="cell" data-label="Column">purchaseOrderReference</div>
<div class="cell" data-label="Arabic">مرجع أمر الشراء</div>
<div class="cell" data-label="English">Purchase Order Reference</div>
<div class="cell" data-label="Type">Text</div>

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

<div class="row searchable" id="receiver.address.additionalInformation">
<div class="cell" data-label="Property">receiver.address.additionalInformation</div>
<div class="cell" data-label="Column">receiverAddressAdditionalInformation</div>
<div class="cell" data-label="Arabic">معلومات إضافية لمُستلم الفاتورة</div>
<div class="cell" data-label="English">Receiver Additional Information</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="receiver.address.branchID">
<div class="cell" data-label="Property">receiver.address.branchID</div>
<div class="cell" data-label="Column">receiverAddressBranchID</div>
<div class="cell" data-label="Arabic">Branch ID</div>
<div class="cell" data-label="English">Receiver Branch Id</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="receiver.address.buildingNumber">
<div class="cell" data-label="Property">receiver.address.buildingNumber</div>
<div class="cell" data-label="Column">receiverAddressBuildingNumber</div>
<div class="cell" data-label="Arabic">رقم مبني مُستلم الفاتورة</div>
<div class="cell" data-label="English">Receiver BuildingNumber</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="receiver.address.country">
<div class="cell" data-label="Property">receiver.address.country</div>
<div class="cell" data-label="Column">receiverAddressCountry</div>
<div class="cell" data-label="Arabic">دولة مُستلم الفاتورة</div>
<div class="cell" data-label="English">Receiver Country</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="receiver.address.floor">
<div class="cell" data-label="Property">receiver.address.floor</div>
<div class="cell" data-label="Column">receiverAddressFloor</div>
<div class="cell" data-label="Arabic">طابق مُستلم الفاتورة</div>
<div class="cell" data-label="English">Receiver Floor</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="receiver.address.governorate">
<div class="cell" data-label="Property">receiver.address.governorate</div>
<div class="cell" data-label="Column">receiverAddressGovernorate</div>
<div class="cell" data-label="Arabic">المحافظة</div>
<div class="cell" data-label="English">Governorate</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="receiver.address.landmark">
<div class="cell" data-label="Property">receiver.address.landmark</div>
<div class="cell" data-label="Column">receiverAddressLandmark</div>
<div class="cell" data-label="Arabic">موقع مُستلم الفاتورة</div>
<div class="cell" data-label="English">Receiver Landmark</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="receiver.address.postalCode">
<div class="cell" data-label="Property">receiver.address.postalCode</div>
<div class="cell" data-label="Column">receiverAddressPostalCode</div>
<div class="cell" data-label="Arabic">رقم بريدي مُستلم الفاتورة</div>
<div class="cell" data-label="English">Receiver PostalCode</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="receiver.address.regionCity">
<div class="cell" data-label="Property">receiver.address.regionCity</div>
<div class="cell" data-label="Column">receiverAddressRegionCity</div>
<div class="cell" data-label="Arabic">منطقة مُستلم الفاتورة</div>
<div class="cell" data-label="English">Receiver RegionCity</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="receiver.address.room">
<div class="cell" data-label="Property">receiver.address.room</div>
<div class="cell" data-label="Column">receiverAddressRoom</div>
<div class="cell" data-label="Arabic">غرفة مُستلم الفاتورة</div>
<div class="cell" data-label="English">Receiver Room</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="receiver.address.street">
<div class="cell" data-label="Property">receiver.address.street</div>
<div class="cell" data-label="Column">receiverAddressStreet</div>
<div class="cell" data-label="Arabic">شارع مُستلم الفاتورة</div>
<div class="cell" data-label="English">Receiver Street</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="receiver.id">
<div class="cell" data-label="Property">receiver.id</div>
<div class="cell" data-label="Column">receiverId</div>
<div class="cell" data-label="Arabic">مُعرف مُستلم الفاتورة</div>
<div class="cell" data-label="English">Receiver Id</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="receiver.name">
<div class="cell" data-label="Property">receiver.name</div>
<div class="cell" data-label="Column">receiverName</div>
<div class="cell" data-label="Arabic">اسم مُستلم الفاتورة</div>
<div class="cell" data-label="English">Receiver Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="receiver.type">
<div class="cell" data-label="Property">receiver.type</div>
<div class="cell" data-label="Column">receiverType</div>
<div class="cell" data-label="Arabic">نوع مُستلم الفاتورة</div>
<div class="cell" data-label="English">Receiver Type</div>
<div class="cell" data-label="Type">Text</div>

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

<div class="row searchable" id="salesOrderDescription">
<div class="cell" data-label="Property">salesOrderDescription</div>
<div class="cell" data-label="Column">salesOrderDescription</div>
<div class="cell" data-label="Arabic">وصف أمر البيع</div>
<div class="cell" data-label="English">Sales Order Description</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="salesOrderReference">
<div class="cell" data-label="Property">salesOrderReference</div>
<div class="cell" data-label="Column">salesOrderReference</div>
<div class="cell" data-label="Arabic">مرجع أمر البيع</div>
<div class="cell" data-label="English">Sales Order Reference</div>
<div class="cell" data-label="Type">Text</div>

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

<div class="row searchable" id="status">
<div class="cell" data-label="Property">status</div>
<div class="cell" data-label="Column">status</div>
<div class="cell" data-label="Arabic">الحالة</div>
<div class="cell" data-label="English">Status</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="submissionUUID">
<div class="cell" data-label="Property">submissionUUID</div>
<div class="cell" data-label="Column">submissionUUID</div>
<div class="cell" data-label="Arabic">معرف مرحلة الارسال</div>
<div class="cell" data-label="English">Submission ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="tax1Total.amount">
<div class="cell" data-label="Property">tax1Total.amount</div>
<div class="cell" data-label="Column">tax1TotalAmount</div>
<div class="cell" data-label="Arabic"> المبلغ</div>
<div class="cell" data-label="English"> Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tax1Total.discount">
<div class="cell" data-label="Property">tax1Total.discount</div>
<div class="cell" data-label="Column">tax1TotalDiscount</div>
<div class="cell" data-label="Arabic">التخفيض</div>
<div class="cell" data-label="English">Discount</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="tax1Total.taxType">
<div class="cell" data-label="Property">tax1Total.taxType</div>
<div class="cell" data-label="Column">tax1TotalTaxType</div>
<div class="cell" data-label="Arabic">كود الضريبة</div>
<div class="cell" data-label="English">Tax Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="tax2Total.amount">
<div class="cell" data-label="Property">tax2Total.amount</div>
<div class="cell" data-label="Column">tax2TotalAmount</div>
<div class="cell" data-label="Arabic"> المبلغ</div>
<div class="cell" data-label="English"> Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tax2Total.discount">
<div class="cell" data-label="Property">tax2Total.discount</div>
<div class="cell" data-label="Column">tax2TotalDiscount</div>
<div class="cell" data-label="Arabic">التخفيض</div>
<div class="cell" data-label="English">Discount</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="tax2Total.taxType">
<div class="cell" data-label="Property">tax2Total.taxType</div>
<div class="cell" data-label="Column">tax2TotalTaxType</div>
<div class="cell" data-label="Arabic">كود الضريبة</div>
<div class="cell" data-label="English">Tax Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="tax3Total.amount">
<div class="cell" data-label="Property">tax3Total.amount</div>
<div class="cell" data-label="Column">tax3TotalAmount</div>
<div class="cell" data-label="Arabic"> المبلغ</div>
<div class="cell" data-label="English"> Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tax3Total.discount">
<div class="cell" data-label="Property">tax3Total.discount</div>
<div class="cell" data-label="Column">tax3TotalDiscount</div>
<div class="cell" data-label="Arabic">التخفيض</div>
<div class="cell" data-label="English">Discount</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="tax3Total.taxType">
<div class="cell" data-label="Property">tax3Total.taxType</div>
<div class="cell" data-label="Column">tax3TotalTaxType</div>
<div class="cell" data-label="Arabic">كود الضريبة</div>
<div class="cell" data-label="English">Tax Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="tax4Total.amount">
<div class="cell" data-label="Property">tax4Total.amount</div>
<div class="cell" data-label="Column">tax4TotalAmount</div>
<div class="cell" data-label="Arabic"> المبلغ</div>
<div class="cell" data-label="English"> Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tax4Total.discount">
<div class="cell" data-label="Property">tax4Total.discount</div>
<div class="cell" data-label="Column">tax4TotalDiscount</div>
<div class="cell" data-label="Arabic">التخفيض</div>
<div class="cell" data-label="English">Discount</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="tax4Total.taxType">
<div class="cell" data-label="Property">tax4Total.taxType</div>
<div class="cell" data-label="Column">tax4TotalTaxType</div>
<div class="cell" data-label="Arabic">كود الضريبة</div>
<div class="cell" data-label="English">Tax Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxPayerConfig">
<div class="cell" data-label="Property">taxPayerConfig</div>
<div class="cell" data-label="Column">taxPayerConfig_id</div>
<div class="cell" data-label="Arabic"> إعدادات مصلحة الضرائب</div>
<div class="cell" data-label="English"> Electronic Tax Authority Configuration</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [TaxPayerConfiguration](/modules/basic-tax-e-invoice/TaxPayerConfiguration.md) 
</div>
</div>

<div class="row searchable" id="taxpayerActivityCode">
<div class="cell" data-label="Property">taxpayerActivityCode</div>
<div class="cell" data-label="Column">taxpayerActivityCode</div>
<div class="cell" data-label="Arabic">كود النشاط</div>
<div class="cell" data-label="English">Taxpayer Activity Code</div>
<div class="cell" data-label="Type">Text</div>

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

<div class="row searchable" id="totalAmount">
<div class="cell" data-label="Property">totalAmount</div>
<div class="cell" data-label="Column">totalAmount</div>
<div class="cell" data-label="Arabic">إجمالي المبلغ</div>
<div class="cell" data-label="English">Total Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalDiscountAmount">
<div class="cell" data-label="Property">totalDiscountAmount</div>
<div class="cell" data-label="Column">totalDiscountAmount</div>
<div class="cell" data-label="Arabic">إجمالي الخصم</div>
<div class="cell" data-label="English">Total Discount Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalItemsDiscountAmount">
<div class="cell" data-label="Property">totalItemsDiscountAmount</div>
<div class="cell" data-label="Column">totalItemsDiscountAmount</div>
<div class="cell" data-label="Arabic">إجمالي خصم الأصناف</div>
<div class="cell" data-label="English">Total Items Discount Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalSalesAmount">
<div class="cell" data-label="Property">totalSalesAmount</div>
<div class="cell" data-label="Column">totalSalesAmount</div>
<div class="cell" data-label="Arabic">الإجمالي</div>
<div class="cell" data-label="English">Total Sales Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="transformationStatus">
<div class="cell" data-label="Property">transformationStatus</div>
<div class="cell" data-label="Column">transformationStatus</div>
<div class="cell" data-label="Arabic">حالة التحويل</div>
<div class="cell" data-label="English">Transformation Status</div>
<div class="cell" data-label="Type">Text</div>

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

<div class="row searchable" id="uuid">
<div class="cell" data-label="Property">uuid</div>
<div class="cell" data-label="Column">uuid</div>
<div class="cell" data-label="Arabic">معرف المستند داخل مصلحة الضرائب</div>
<div class="cell" data-label="English">UUID</div>
<div class="cell" data-label="Type">Text</div>

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

<div id='signatureLines' title='signatureLines' class='searchable'>

## signatureLines (التوقيعات - Signature Lines)
**Table Name:** TaxEInvoiceSignatureLine, **Join Column:** taxEInvoice_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="signatureLines.id">
<div class="cell" data-label="Property">signatureLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="signatureLines.lineNumber">
<div class="cell" data-label="Property">signatureLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="signatureLines.signatureType">
<div class="cell" data-label="Property">signatureLines.signatureType</div>
<div class="cell" data-label="Column">signatureType</div>
<div class="cell" data-label="Arabic">توقيع من طرف</div>
<div class="cell" data-label="English">Signature Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="signatureLines.value">
<div class="cell" data-label="Property">signatureLines.value</div>
<div class="cell" data-label="Column">value</div>
<div class="cell" data-label="Arabic">التوقيع</div>
<div class="cell" data-label="English">Signature</div>
<div class="cell" data-label="Type">BigText</div>

</div>


</div>
</div>

<div id='taxEInvoiceItemLines' title='taxEInvoiceItemLines' class='searchable'>

## taxEInvoiceItemLines (سطور العناصر - )
**Table Name:** TaxEInvoiceItemLine, **Join Column:** taxEInvoice_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="taxEInvoiceItemLines.description">
<div class="cell" data-label="Property">taxEInvoiceItemLines.description</div>
<div class="cell" data-label="Column">description</div>
<div class="cell" data-label="Arabic">الوصف</div>
<div class="cell" data-label="English">Description</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.discount.amount">
<div class="cell" data-label="Property">taxEInvoiceItemLines.discount.amount</div>
<div class="cell" data-label="Column">discountAmount</div>
<div class="cell" data-label="Arabic">قيمة الخصم</div>
<div class="cell" data-label="English">Discount Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.discount.rate">
<div class="cell" data-label="Property">taxEInvoiceItemLines.discount.rate</div>
<div class="cell" data-label="Column">discountRate</div>
<div class="cell" data-label="Arabic">نسبة الخصم</div>
<div class="cell" data-label="English">Discount Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.id">
<div class="cell" data-label="Property">taxEInvoiceItemLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.internalCode">
<div class="cell" data-label="Property">taxEInvoiceItemLines.internalCode</div>
<div class="cell" data-label="Column">internalCode</div>
<div class="cell" data-label="Arabic">الكود الداخلي للصنف</div>
<div class="cell" data-label="English">Internal Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.itemCode">
<div class="cell" data-label="Property">taxEInvoiceItemLines.itemCode</div>
<div class="cell" data-label="Column">itemCode</div>
<div class="cell" data-label="Arabic"> الكود</div>
<div class="cell" data-label="English"> Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.itemType">
<div class="cell" data-label="Property">taxEInvoiceItemLines.itemType</div>
<div class="cell" data-label="Column">itemType</div>
<div class="cell" data-label="Arabic">النوع</div>
<div class="cell" data-label="English">Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.itemsDiscount">
<div class="cell" data-label="Property">taxEInvoiceItemLines.itemsDiscount</div>
<div class="cell" data-label="Column">itemsDiscount</div>
<div class="cell" data-label="Arabic">خصم الأصناف</div>
<div class="cell" data-label="English">Items Discount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.lineNumber">
<div class="cell" data-label="Property">taxEInvoiceItemLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.netTotal">
<div class="cell" data-label="Property">taxEInvoiceItemLines.netTotal</div>
<div class="cell" data-label="Column">netTotal</div>
<div class="cell" data-label="Arabic">الصافي</div>
<div class="cell" data-label="English">Net Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.quantity">
<div class="cell" data-label="Property">taxEInvoiceItemLines.quantity</div>
<div class="cell" data-label="Column">quantity</div>
<div class="cell" data-label="Arabic">الكمية</div>
<div class="cell" data-label="English">Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.salesTotal">
<div class="cell" data-label="Property">taxEInvoiceItemLines.salesTotal</div>
<div class="cell" data-label="Column">salesTotal</div>
<div class="cell" data-label="Arabic">إجمالي المبيعات</div>
<div class="cell" data-label="English">Sales Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.tax1.amount">
<div class="cell" data-label="Property">taxEInvoiceItemLines.tax1.amount</div>
<div class="cell" data-label="Column">tax1Amount</div>
<div class="cell" data-label="Arabic">ضريبة 1 | المبلغ</div>
<div class="cell" data-label="English">Tax 1 | Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.tax1.discount">
<div class="cell" data-label="Property">taxEInvoiceItemLines.tax1.discount</div>
<div class="cell" data-label="Column">tax1Discount</div>
<div class="cell" data-label="Arabic">ضريبة 1 | الخصم</div>
<div class="cell" data-label="English">Tax 1 | Discount</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.tax1.rate">
<div class="cell" data-label="Property">taxEInvoiceItemLines.tax1.rate</div>
<div class="cell" data-label="Column">tax1Rate</div>
<div class="cell" data-label="Arabic">ضريبة 1 | نسبة الضريبة</div>
<div class="cell" data-label="English">Tax 1 | Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.tax1.subType">
<div class="cell" data-label="Property">taxEInvoiceItemLines.tax1.subType</div>
<div class="cell" data-label="Column">tax1SubType</div>
<div class="cell" data-label="Arabic">ضريبة 1 | كود الضريبة الفرعي</div>
<div class="cell" data-label="English">Tax 1 | Sub Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.tax1.taxType">
<div class="cell" data-label="Property">taxEInvoiceItemLines.tax1.taxType</div>
<div class="cell" data-label="Column">tax1TaxType</div>
<div class="cell" data-label="Arabic">ضريبة 1 | كود الضريبة</div>
<div class="cell" data-label="English">Tax 1 | Tax Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.tax2.amount">
<div class="cell" data-label="Property">taxEInvoiceItemLines.tax2.amount</div>
<div class="cell" data-label="Column">tax2Amount</div>
<div class="cell" data-label="Arabic">ضريبة 2 | المبلغ</div>
<div class="cell" data-label="English">Tax 2 | Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.tax2.discount">
<div class="cell" data-label="Property">taxEInvoiceItemLines.tax2.discount</div>
<div class="cell" data-label="Column">tax2Discount</div>
<div class="cell" data-label="Arabic">ضريبة 2 | الخصم</div>
<div class="cell" data-label="English">Tax 2 | Discount</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.tax2.rate">
<div class="cell" data-label="Property">taxEInvoiceItemLines.tax2.rate</div>
<div class="cell" data-label="Column">tax2Rate</div>
<div class="cell" data-label="Arabic">ضريبة 2 | نسبة الضريبة</div>
<div class="cell" data-label="English">Tax 2 | Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.tax2.subType">
<div class="cell" data-label="Property">taxEInvoiceItemLines.tax2.subType</div>
<div class="cell" data-label="Column">tax2SubType</div>
<div class="cell" data-label="Arabic">ضريبة 2 | كود الضريبة الفرعي</div>
<div class="cell" data-label="English">Tax 2 | Sub Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.tax2.taxType">
<div class="cell" data-label="Property">taxEInvoiceItemLines.tax2.taxType</div>
<div class="cell" data-label="Column">tax2TaxType</div>
<div class="cell" data-label="Arabic">ضريبة 2 | كود الضريبة</div>
<div class="cell" data-label="English">Tax 2 | Tax Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.tax3.amount">
<div class="cell" data-label="Property">taxEInvoiceItemLines.tax3.amount</div>
<div class="cell" data-label="Column">tax3Amount</div>
<div class="cell" data-label="Arabic">ضريبة 3 | المبلغ</div>
<div class="cell" data-label="English">Tax 3 | Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.tax3.discount">
<div class="cell" data-label="Property">taxEInvoiceItemLines.tax3.discount</div>
<div class="cell" data-label="Column">tax3Discount</div>
<div class="cell" data-label="Arabic">ضريبة 3 | الخصم</div>
<div class="cell" data-label="English">Tax 3 | Discount</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.tax3.rate">
<div class="cell" data-label="Property">taxEInvoiceItemLines.tax3.rate</div>
<div class="cell" data-label="Column">tax3Rate</div>
<div class="cell" data-label="Arabic">ضريبة 3 | نسبة الضريبة</div>
<div class="cell" data-label="English">Tax 3 | Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.tax3.subType">
<div class="cell" data-label="Property">taxEInvoiceItemLines.tax3.subType</div>
<div class="cell" data-label="Column">tax3SubType</div>
<div class="cell" data-label="Arabic">ضريبة 3 | كود الضريبة الفرعي</div>
<div class="cell" data-label="English">Tax 3 | Sub Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.tax3.taxType">
<div class="cell" data-label="Property">taxEInvoiceItemLines.tax3.taxType</div>
<div class="cell" data-label="Column">tax3TaxType</div>
<div class="cell" data-label="Arabic">ضريبة 3 | كود الضريبة</div>
<div class="cell" data-label="English">Tax 3 | Tax Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.tax4.amount">
<div class="cell" data-label="Property">taxEInvoiceItemLines.tax4.amount</div>
<div class="cell" data-label="Column">tax4Amount</div>
<div class="cell" data-label="Arabic">ضريبة 4 | المبلغ</div>
<div class="cell" data-label="English">Tax 4 | Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.tax4.discount">
<div class="cell" data-label="Property">taxEInvoiceItemLines.tax4.discount</div>
<div class="cell" data-label="Column">tax4Discount</div>
<div class="cell" data-label="Arabic">ضريبة 4 | الخصم</div>
<div class="cell" data-label="English">Tax 4 | Discount</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.tax4.rate">
<div class="cell" data-label="Property">taxEInvoiceItemLines.tax4.rate</div>
<div class="cell" data-label="Column">tax4Rate</div>
<div class="cell" data-label="Arabic">ضريبة 4 | نسبة الضريبة</div>
<div class="cell" data-label="English">Tax 4 | Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.tax4.subType">
<div class="cell" data-label="Property">taxEInvoiceItemLines.tax4.subType</div>
<div class="cell" data-label="Column">tax4SubType</div>
<div class="cell" data-label="Arabic">ضريبة 4 | كود الضريبة الفرعي</div>
<div class="cell" data-label="English">Tax 4 | Sub Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.tax4.taxType">
<div class="cell" data-label="Property">taxEInvoiceItemLines.tax4.taxType</div>
<div class="cell" data-label="Column">tax4TaxType</div>
<div class="cell" data-label="Arabic">ضريبة 4 | كود الضريبة</div>
<div class="cell" data-label="English">Tax 4 | Tax Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.total">
<div class="cell" data-label="Property">taxEInvoiceItemLines.total</div>
<div class="cell" data-label="Column">total</div>
<div class="cell" data-label="Arabic">الإجمالي</div>
<div class="cell" data-label="English">Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.totalTaxableFees">
<div class="cell" data-label="Property">taxEInvoiceItemLines.totalTaxableFees</div>
<div class="cell" data-label="Column">totalTaxableFees</div>
<div class="cell" data-label="Arabic">إجمالي الضرائب</div>
<div class="cell" data-label="English">Total Taxable Fees</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.unitType">
<div class="cell" data-label="Property">taxEInvoiceItemLines.unitType</div>
<div class="cell" data-label="Column">unitType</div>
<div class="cell" data-label="Arabic">نوع الوحدة</div>
<div class="cell" data-label="English">Unit type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.unitValue.amountEGP">
<div class="cell" data-label="Property">taxEInvoiceItemLines.unitValue.amountEGP</div>
<div class="cell" data-label="Column">unitValueAmountEGP</div>
<div class="cell" data-label="Arabic">المبلغ بالمصري</div>
<div class="cell" data-label="English">Amount EGP</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.unitValue.amountSold">
<div class="cell" data-label="Property">taxEInvoiceItemLines.unitValue.amountSold</div>
<div class="cell" data-label="Column">unitValueAmountSold</div>
<div class="cell" data-label="Arabic">المبلغ</div>
<div class="cell" data-label="English">Amount Sold</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.unitValue.currencyExchangeRate">
<div class="cell" data-label="Property">taxEInvoiceItemLines.unitValue.currencyExchangeRate</div>
<div class="cell" data-label="Column">unitValueCurrencyExchangeRate</div>
<div class="cell" data-label="Arabic">مُعدل تحويل العملة</div>
<div class="cell" data-label="English">Currency Exchange Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.unitValue.currencySold">
<div class="cell" data-label="Property">taxEInvoiceItemLines.unitValue.currencySold</div>
<div class="cell" data-label="Column">unitValueCurrencySold</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency Sold</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxEInvoiceItemLines.valueDifference">
<div class="cell" data-label="Property">taxEInvoiceItemLines.valueDifference</div>
<div class="cell" data-label="Column">valueDifference</div>
<div class="cell" data-label="Arabic">فرق القيمة</div>
<div class="cell" data-label="English">Value Difference</div>
<div class="cell" data-label="Type">Decimal</div>

</div>


</div>
</div>

