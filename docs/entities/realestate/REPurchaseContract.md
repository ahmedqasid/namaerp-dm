# REPurchaseContract
**Arabic:** عقد شراء عقار - عقود شراء عقار
**English:** Estate Purchase Contract - Estate Purchase Contracts

<ContentFilter/>


<div class='searchable'>
<a href='#details'>details (REPurchaseContractLine) </a> , <a href='#externalPaymentLines'>externalPaymentLines (REPurchaseContrExternalPayLine) </a> , <a href='#installmentInfoLines'>installmentInfoLines (REPurchaseInstInfoLine) </a>
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

<div class="row searchable" id="attachment3">
<div class="cell" data-label="Property">attachment3</div>
<div class="cell" data-label="Column">attachment3_id</div>
<div class="cell" data-label="Arabic">مرفق 3</div>
<div class="cell" data-label="English">Attachment 3</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/entities/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="attachment4">
<div class="cell" data-label="Property">attachment4</div>
<div class="cell" data-label="Column">attachment4_id</div>
<div class="cell" data-label="Arabic">مرفق 4</div>
<div class="cell" data-label="English">Attachment 4</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/entities/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="attachment5">
<div class="cell" data-label="Property">attachment5</div>
<div class="cell" data-label="Column">attachment5_id</div>
<div class="cell" data-label="Arabic">مرفق 5</div>
<div class="cell" data-label="English">Attachment 5</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/entities/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="block">
<div class="cell" data-label="Property">block</div>
<div class="cell" data-label="Column">block_id</div>
<div class="cell" data-label="Arabic">البلوك</div>
<div class="cell" data-label="English">Block</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [REBlock](/entities/realestate/REBlock.md) 
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

<div class="row searchable" id="broker">
<div class="cell" data-label="Property">broker</div>
<div class="cell" data-label="Column">broker_id</div>
<div class="cell" data-label="Arabic">وسيط</div>
<div class="cell" data-label="English">Broker</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [REBroker](/entities/realestate/REBroker.md) 
</div>
</div>

<div class="row searchable" id="building">
<div class="cell" data-label="Property">building</div>
<div class="cell" data-label="Column">building_id</div>
<div class="cell" data-label="Arabic">المبنى</div>
<div class="cell" data-label="English">Building</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [REBuilding](/entities/realestate/REBuilding.md) 
</div>
</div>

<div class="row searchable" id="buyer">
<div class="cell" data-label="Property">buyer</div>
<div class="cell" data-label="Column">buyer_id</div>
<div class="cell" data-label="Arabic">المشتري</div>
<div class="cell" data-label="English">Buyer</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [REOwner](/entities/realestate/REOwner.md) 
</div>
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

<div class="row searchable" id="currency">
<div class="cell" data-label="Property">currency</div>
<div class="cell" data-label="Column">currency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/entities/basic/Currency.md) 
</div>
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

<div class="row searchable" id="datesInHijri">
<div class="cell" data-label="Property">datesInHijri</div>
<div class="cell" data-label="Column">datesInHijri</div>
<div class="cell" data-label="Arabic">العمل بالتاريخ الهجري</div>
<div class="cell" data-label="English">Dates in hijri</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="floor">
<div class="cell" data-label="Property">floor</div>
<div class="cell" data-label="Column">floor_id</div>
<div class="cell" data-label="Arabic">الطابق</div>
<div class="cell" data-label="English">Floor</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [REFloor](/entities/realestate/REFloor.md) 
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

<div class="row searchable" id="handedOverState">
<div class="cell" data-label="Property">handedOverState</div>
<div class="cell" data-label="Column">handedOverState</div>
<div class="cell" data-label="Arabic">تم التسليم</div>
<div class="cell" data-label="English">HandOvered</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="handoverDocument">
<div class="cell" data-label="Property">handoverDocument</div>
<div class="cell gen-ref-column" data-label="Column">handoverDocumentActualCode,  handoverDocumentCode,  handoverDocumentEntityType,  handoverDocumentId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Genericreference</div>

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

<div class="row searchable" id="installmentInfo.distributeRemaining">
<div class="cell" data-label="Property">installmentInfo.distributeRemaining</div>
<div class="cell" data-label="Column">distributeRemaining</div>
<div class="cell" data-label="Arabic">توزيع كامل القيمة المتبقية على عدد الأقساط</div>
<div class="cell" data-label="English">Distribute Total Remaining Values on The numbers Of Total Installments</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="installmentInfo.firstInstallmentValue">
<div class="cell" data-label="Property">installmentInfo.firstInstallmentValue</div>
<div class="cell" data-label="Column">firstInstallmentValue</div>
<div class="cell" data-label="Arabic">قيمة أول قسط</div>
<div class="cell" data-label="English">First Installment Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="installmentInfo.installmentPercentage">
<div class="cell" data-label="Property">installmentInfo.installmentPercentage</div>
<div class="cell" data-label="Column">installmentPercentage</div>
<div class="cell" data-label="Arabic">نسبة القسط</div>
<div class="cell" data-label="English">Installment Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="installmentInfo.installmentPeriod">
<div class="cell" data-label="Property">installmentInfo.installmentPeriod</div>
<div class="cell" data-label="Column">installmentPeriod</div>
<div class="cell" data-label="Arabic">فترة الاقساط</div>
<div class="cell" data-label="English">Installment Period</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="installmentInfo.installmentStartDate">
<div class="cell" data-label="Property">installmentInfo.installmentStartDate</div>
<div class="cell" data-label="Column">installmentStartDate</div>
<div class="cell" data-label="Arabic">تاريخ بداية التقسيط</div>
<div class="cell" data-label="English">Installments Start Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="installmentInfo.installmentType">
<div class="cell" data-label="Property">installmentInfo.installmentType</div>
<div class="cell" data-label="Column">installmentType</div>
<div class="cell" data-label="Arabic">نوع القسط</div>
<div class="cell" data-label="English">Installment type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="installmentInfo.installmentValue">
<div class="cell" data-label="Property">installmentInfo.installmentValue</div>
<div class="cell" data-label="Column">installmentValue</div>
<div class="cell" data-label="Arabic">قيمة القسط</div>
<div class="cell" data-label="English">Installment Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="installmentInfo.installmentsMultiplesOf">
<div class="cell" data-label="Property">installmentInfo.installmentsMultiplesOf</div>
<div class="cell" data-label="Column">installmentsMultiplesOf</div>
<div class="cell" data-label="Arabic">جعل الأقساط مضاعفات للرقم</div>
<div class="cell" data-label="English">Installments Multiples Of</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="installmentInfo.lastInstallmentValue">
<div class="cell" data-label="Property">installmentInfo.lastInstallmentValue</div>
<div class="cell" data-label="Column">lastInstallmentValue</div>
<div class="cell" data-label="Arabic">قيمة أخر قسط</div>
<div class="cell" data-label="English">Last Installment Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="installmentInfo.maintenancePeriod.uom">
<div class="cell" data-label="Property">installmentInfo.maintenancePeriod.uom</div>
<div class="cell" data-label="Column">maintenancePeriodUom</div>
<div class="cell" data-label="Arabic">الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="installmentInfo.maintenancePeriod.value">
<div class="cell" data-label="Property">installmentInfo.maintenancePeriod.value</div>
<div class="cell" data-label="Column">maintenancePeriodValue</div>
<div class="cell" data-label="Arabic">القيمة</div>
<div class="cell" data-label="English">Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="installmentInfo.multiplesRoundingMode">
<div class="cell" data-label="Property">installmentInfo.multiplesRoundingMode</div>
<div class="cell" data-label="Column">multiplesRoundingMode</div>
<div class="cell" data-label="Arabic">طريقة تقريب المضاعفات</div>
<div class="cell" data-label="English">Multiples Rounding Mode</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="installmentInfo.numberofInstallments">
<div class="cell" data-label="Property">installmentInfo.numberofInstallments</div>
<div class="cell" data-label="Column">numberofInstallments</div>
<div class="cell" data-label="Arabic">عدد الاقساط</div>
<div class="cell" data-label="English">Number of Installments</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="installmentInfo.remainingProcessingPolicy">
<div class="cell" data-label="Property">installmentInfo.remainingProcessingPolicy</div>
<div class="cell" data-label="Column">remainingProcessingPolicy</div>
<div class="cell" data-label="Arabic">سياسة معالجة المبلغ المتبقي</div>
<div class="cell" data-label="English">Remaining Processing Policy</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="investmentFund">
<div class="cell" data-label="Property">investmentFund</div>
<div class="cell" data-label="Column">investmentFund_id</div>
<div class="cell" data-label="Arabic">الصندوق الاستثماري</div>
<div class="cell" data-label="English">Investment Fund</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [REInvestmentFund](/entities/realestate/REInvestmentFund.md) 
</div>
</div>

<div class="row searchable" id="issueDate">
<div class="cell" data-label="Property">issueDate</div>
<div class="cell" data-label="Column">issueDate</div>
<div class="cell" data-label="Arabic">تاريخ التحرير</div>
<div class="cell" data-label="English">Issue Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="land">
<div class="cell" data-label="Property">land</div>
<div class="cell" data-label="Column">land_id</div>
<div class="cell" data-label="Arabic">قطعة الارض</div>
<div class="cell" data-label="English">Land</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [RELand](/entities/realestate/RELand.md) 
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

<div class="row searchable" id="mediator">
<div class="cell" data-label="Property">mediator</div>
<div class="cell" data-label="Column">mediator_id</div>
<div class="cell" data-label="Arabic">الوسيط</div>
<div class="cell" data-label="English">Mediator</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ThirdParty](/entities/basic/ThirdParty.md) 
</div>
</div>

<div class="row searchable" id="n1">
<div class="cell" data-label="Property">n1</div>
<div class="cell" data-label="Column">n1</div>
<div class="cell" data-label="Arabic">رقم 1</div>
<div class="cell" data-label="English">Number 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="n10">
<div class="cell" data-label="Property">n10</div>
<div class="cell" data-label="Column">n10</div>
<div class="cell" data-label="Arabic">رقم 10</div>
<div class="cell" data-label="English">Number 10</div>
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

<div class="row searchable" id="n6">
<div class="cell" data-label="Property">n6</div>
<div class="cell" data-label="Column">n6</div>
<div class="cell" data-label="Arabic">رقم 6</div>
<div class="cell" data-label="English">Number 6</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="n7">
<div class="cell" data-label="Property">n7</div>
<div class="cell" data-label="Column">n7</div>
<div class="cell" data-label="Arabic">رقم 7</div>
<div class="cell" data-label="English">Number 7</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="n8">
<div class="cell" data-label="Property">n8</div>
<div class="cell" data-label="Column">n8</div>
<div class="cell" data-label="Arabic">رقم 8</div>
<div class="cell" data-label="English">Number 8</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="n9">
<div class="cell" data-label="Property">n9</div>
<div class="cell" data-label="Column">n9</div>
<div class="cell" data-label="Arabic">رقم 9</div>
<div class="cell" data-label="English">Number 9</div>
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

<div class="row searchable" id="owner">
<div class="cell" data-label="Property">owner</div>
<div class="cell" data-label="Column">owner_id</div>
<div class="cell" data-label="Arabic"> مالك المستند</div>
<div class="cell" data-label="English"> Document Owner</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [REOwner](/entities/realestate/REOwner.md) 
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

<div class="row searchable" id="price.advancePaymentAfterDiscount">
<div class="cell" data-label="Property">price.advancePaymentAfterDiscount</div>
<div class="cell" data-label="Column">advancePaymentAfterDiscount</div>
<div class="cell" data-label="Arabic">الدفعة المقدمة بعد احتساب الخصم</div>
<div class="cell" data-label="English">Advance Payment After Discount</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="price.downPayment">
<div class="cell" data-label="Property">price.downPayment</div>
<div class="cell" data-label="Column">downPayment</div>
<div class="cell" data-label="Arabic">الدفعة المقدمة</div>
<div class="cell" data-label="English">Down Payment</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.downPaymentDate">
<div class="cell" data-label="Property">price.downPaymentDate</div>
<div class="cell" data-label="Column">downPaymentDate</div>
<div class="cell" data-label="Arabic">تاريخ دفع الدفعة المقدمة</div>
<div class="cell" data-label="English">Down payment date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="price.downPaymentPercentage">
<div class="cell" data-label="Property">price.downPaymentPercentage</div>
<div class="cell" data-label="Column">downPaymentPercentage</div>
<div class="cell" data-label="Arabic">نسبة الدفعة المقدمة</div>
<div class="cell" data-label="English">Down Payment Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.downPaymentRemaining">
<div class="cell" data-label="Property">price.downPaymentRemaining</div>
<div class="cell" data-label="Column">downPaymentRemaining</div>
<div class="cell" data-label="Arabic">المتبقي من الدفعة المقدمة</div>
<div class="cell" data-label="English">Down payment remaining</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.feesAmountBuyer">
<div class="cell" data-label="Property">price.feesAmountBuyer</div>
<div class="cell" data-label="Column">feesAmountBuyer</div>
<div class="cell" data-label="Arabic">قيمة الرسوم من المشتري</div>
<div class="cell" data-label="English">Fees Amount Buyer</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.feesAmountOwner">
<div class="cell" data-label="Property">price.feesAmountOwner</div>
<div class="cell" data-label="Column">feesAmountOwner</div>
<div class="cell" data-label="Arabic">قيمة الرسوم من المالك</div>
<div class="cell" data-label="English">Fees Amount Owner</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.feesPercentageBuyer">
<div class="cell" data-label="Property">price.feesPercentageBuyer</div>
<div class="cell" data-label="Column">feesPercentageBuyer</div>
<div class="cell" data-label="Arabic">% نسبة الرسوم من المشتري</div>
<div class="cell" data-label="English">Fees Percentage Buyer</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.feesPercentageOwner">
<div class="cell" data-label="Property">price.feesPercentageOwner</div>
<div class="cell" data-label="Column">feesPercentageOwner</div>
<div class="cell" data-label="Arabic">نسبة الرسوم من المالك %</div>
<div class="cell" data-label="English">Fees Percentage Owner</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.gardenArea">
<div class="cell" data-label="Property">price.gardenArea</div>
<div class="cell" data-label="Column">gardenArea</div>
<div class="cell" data-label="Arabic">مساحة الحديقة</div>
<div class="cell" data-label="English">Garden area</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.gardenMeterPice">
<div class="cell" data-label="Property">price.gardenMeterPice</div>
<div class="cell" data-label="Column">gardenMeterPice</div>
<div class="cell" data-label="Arabic">سعر متر الحديقة</div>
<div class="cell" data-label="English">Garden meter pice</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.hdrDiscountPercentage">
<div class="cell" data-label="Property">price.hdrDiscountPercentage</div>
<div class="cell" data-label="Column">hdrDiscountPercentage</div>
<div class="cell" data-label="Arabic">نسبة التخفيض على السعر</div>
<div class="cell" data-label="English">Header Discount Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.hdrDiscountValue">
<div class="cell" data-label="Property">price.hdrDiscountValue</div>
<div class="cell" data-label="Column">hdrDiscountValue</div>
<div class="cell" data-label="Arabic">قيمة التخفيض على السعر</div>
<div class="cell" data-label="English">Header Discount Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.maintenanceDepositPaymentDate">
<div class="cell" data-label="Property">price.maintenanceDepositPaymentDate</div>
<div class="cell" data-label="Column">maintenanceDepositPaymentDate</div>
<div class="cell" data-label="Arabic">تاريخ دفع وديعة الصيانة</div>
<div class="cell" data-label="English">Maintenance Deposit Payment Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="price.maintenanceDepositPaymentType">
<div class="cell" data-label="Property">price.maintenanceDepositPaymentType</div>
<div class="cell" data-label="Column">maintenanceDepositPaymentType</div>
<div class="cell" data-label="Arabic">كيفية وديعة الصيانة</div>
<div class="cell" data-label="English">Maintenance Deposit Payment Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="price.maintenanceDepositPercentage">
<div class="cell" data-label="Property">price.maintenanceDepositPercentage</div>
<div class="cell" data-label="Column">maintenanceDepositPercentage</div>
<div class="cell" data-label="Arabic">% نسبة وديعة الصيانة</div>
<div class="cell" data-label="English">Maintenance Deposit Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.maintenanceDepositValue">
<div class="cell" data-label="Property">price.maintenanceDepositValue</div>
<div class="cell" data-label="Column">maintenanceDepositValue</div>
<div class="cell" data-label="Arabic">قيمة وديعة الصيانة</div>
<div class="cell" data-label="English">Maintenance Deposit Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.netInstallments">
<div class="cell" data-label="Property">price.netInstallments</div>
<div class="cell" data-label="Column">netInstallments</div>
<div class="cell" data-label="Arabic">إجمالي صافي الدفعات</div>
<div class="cell" data-label="English">Net Installments</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.paidWithReservation">
<div class="cell" data-label="Property">price.paidWithReservation</div>
<div class="cell" data-label="Column">paidWithReservation</div>
<div class="cell" data-label="Arabic">المدفوع من الحجز</div>
<div class="cell" data-label="English">Paid With Reservation</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.price">
<div class="cell" data-label="Property">price.price</div>
<div class="cell" data-label="Column">price</div>
<div class="cell" data-label="Arabic">الأسعار | السعر الكلي</div>
<div class="cell" data-label="English">Prices | total price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.receiptInstallment">
<div class="cell" data-label="Property">price.receiptInstallment</div>
<div class="cell" data-label="Column">receiptInstallment</div>
<div class="cell" data-label="Arabic">دفعة الاستلام</div>
<div class="cell" data-label="English">Receipt Installment</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.receiptInstallmentDate">
<div class="cell" data-label="Property">price.receiptInstallmentDate</div>
<div class="cell" data-label="Column">receiptInstallmentDate</div>
<div class="cell" data-label="Arabic">تاريخ دفعة الاستلام</div>
<div class="cell" data-label="English">Receipt Installment Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="price.receiptInstallmentPercentage">
<div class="cell" data-label="Property">price.receiptInstallmentPercentage</div>
<div class="cell" data-label="Column">receiptInstallmentPercentage</div>
<div class="cell" data-label="Arabic">نسبة دفعة الاستلام</div>
<div class="cell" data-label="English">Receipt Installment Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.remainingAfterInstallments">
<div class="cell" data-label="Property">price.remainingAfterInstallments</div>
<div class="cell" data-label="Column">remainingAfterInstallments</div>
<div class="cell" data-label="Arabic">الفرق بين إجمالي الاقساط والمتبقي</div>
<div class="cell" data-label="English">Remaining After Installments</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.remainingValue">
<div class="cell" data-label="Property">price.remainingValue</div>
<div class="cell" data-label="Column">remainingValue</div>
<div class="cell" data-label="Arabic">المتبقي</div>
<div class="cell" data-label="English">Remaining Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.totalDiscounts">
<div class="cell" data-label="Property">price.totalDiscounts</div>
<div class="cell" data-label="Column">totalDiscounts</div>
<div class="cell" data-label="Arabic">إجمالي الخصومات</div>
<div class="cell" data-label="English">Total discounts</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.totalDownPayments">
<div class="cell" data-label="Property">price.totalDownPayments</div>
<div class="cell" data-label="Column">totalDownPayments</div>
<div class="cell" data-label="Arabic">إجمالي الدفعات المقدمة</div>
<div class="cell" data-label="English">Total Down Payments</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.totalDueAmount">
<div class="cell" data-label="Property">price.totalDueAmount</div>
<div class="cell" data-label="Column">totalDueAmount</div>
<div class="cell" data-label="Arabic">إجمالي المستحق</div>
<div class="cell" data-label="English">Total due amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.totalInstallments">
<div class="cell" data-label="Property">price.totalInstallments</div>
<div class="cell" data-label="Column">totalInstallments</div>
<div class="cell" data-label="Arabic">إجمالي الدفعات</div>
<div class="cell" data-label="English">Total Installments</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.totalMaintenanceCosts">
<div class="cell" data-label="Property">price.totalMaintenanceCosts</div>
<div class="cell" data-label="Column">totalMaintenanceCosts</div>
<div class="cell" data-label="Arabic">إجمالي تكاليف الصيانة</div>
<div class="cell" data-label="English">Total Maintenance Costs</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.totalPaid">
<div class="cell" data-label="Property">price.totalPaid</div>
<div class="cell" data-label="Column">totalPaid</div>
<div class="cell" data-label="Arabic">إجمالي المدفوع</div>
<div class="cell" data-label="English">Total paid</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.totalPenalties">
<div class="cell" data-label="Property">price.totalPenalties</div>
<div class="cell" data-label="Column">totalPenalties</div>
<div class="cell" data-label="Arabic">إجمالي الغرامات</div>
<div class="cell" data-label="English">Total penalties</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.totalRemaining">
<div class="cell" data-label="Property">price.totalRemaining</div>
<div class="cell" data-label="Column">totalRemaining</div>
<div class="cell" data-label="Arabic">إجمالي المتبقي</div>
<div class="cell" data-label="English">Total remaining</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.totalRemainingFPVal">
<div class="cell" data-label="Property">price.totalRemainingFPVal</div>
<div class="cell" data-label="Column">totalRemainingFPVal</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.totalReminingCollectVal">
<div class="cell" data-label="Property">price.totalReminingCollectVal</div>
<div class="cell" data-label="Column">totalReminingCollectVal</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.unitArea">
<div class="cell" data-label="Property">price.unitArea</div>
<div class="cell" data-label="Column">unitArea</div>
<div class="cell" data-label="Arabic">مساحة الوحدة</div>
<div class="cell" data-label="English">Unit area</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.unitMeterPrice">
<div class="cell" data-label="Property">price.unitMeterPrice</div>
<div class="cell" data-label="Column">unitMeterPrice</div>
<div class="cell" data-label="Arabic">سعر متر الوحدة</div>
<div class="cell" data-label="English">Unit meter price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="printCount">
<div class="cell" data-label="Property">printCount</div>
<div class="cell" data-label="Column">printCount</div>
<div class="cell" data-label="Arabic">عدد مرات الطباعة</div>
<div class="cell" data-label="English">Print Count</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="project">
<div class="cell" data-label="Property">project</div>
<div class="cell" data-label="Column">project_id</div>
<div class="cell" data-label="Arabic">المشروع</div>
<div class="cell" data-label="English">Project</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [REProject](/entities/realestate/REProject.md) 
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

<div class="row searchable" id="reservation">
<div class="cell" data-label="Property">reservation</div>
<div class="cell gen-ref-column" data-label="Column">reservationActualCode,  reservationCode,  reservationEntityType,  reservationId</div>
<div class="cell" data-label="Arabic"> الحجز</div>
<div class="cell" data-label="English"> Reservation</div>
<div class="cell" data-label="Type">Genericreference</div>

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

<div class="row searchable" id="salesMan">
<div class="cell" data-label="Property">salesMan</div>
<div class="cell gen-ref-column" data-label="Column">salesManActualCode,  salesManCode,  salesManEntityType,  salesManId</div>
<div class="cell" data-label="Arabic">مندوب المبيعات</div>
<div class="cell" data-label="English">Salesman</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="salesPaymentMethod">
<div class="cell" data-label="Property">salesPaymentMethod</div>
<div class="cell" data-label="Column">salesPaymentMethod_id</div>
<div class="cell" data-label="Arabic">نموذج الدفع</div>
<div class="cell" data-label="English">Sales Payment Method</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [RESalesPaymentMethod](/entities/realestate-sales/RESalesPaymentMethod.md) 
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

<div class="row searchable" id="soldEstate">
<div class="cell" data-label="Property">soldEstate</div>
<div class="cell gen-ref-column" data-label="Column">soldEstateActualCode,  soldEstateCode,  soldEstateEntityType,  soldEstateId</div>
<div class="cell" data-label="Arabic">العقار</div>
<div class="cell" data-label="English">Sold estate</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="square">
<div class="cell" data-label="Property">square</div>
<div class="cell" data-label="Column">square_id</div>
<div class="cell" data-label="Arabic">مربع</div>
<div class="cell" data-label="English">Square</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [RESquare](/entities/realestate/RESquare.md) 
</div>
</div>

<div class="row searchable" id="standardTermsConditions">
<div class="cell" data-label="Property">standardTermsConditions</div>
<div class="cell" data-label="Column">standardTermsConditions_id</div>
<div class="cell" data-label="Arabic">بنود تعاقد</div>
<div class="cell" data-label="English">Standard Terms and Conditions</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [REStandardTermsConditions](/entities/realestate/REStandardTermsConditions.md) 
</div>
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

<div class="row searchable" id="totalAfterFees">
<div class="cell" data-label="Property">totalAfterFees</div>
<div class="cell" data-label="Column">totalAfterFees</div>
<div class="cell" data-label="Arabic">إجمالي المبلغ عند إضافة الرسوم</div>
<div class="cell" data-label="English">Total After Fees</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalMaintenanceDepositValue">
<div class="cell" data-label="Property">totalMaintenanceDepositValue</div>
<div class="cell" data-label="Column">totalMaintenanceDepositValue</div>
<div class="cell" data-label="Arabic">إجمالي المبلغ عند إضافة وديعة الصيانة</div>
<div class="cell" data-label="English">Total Price When Maintenance Deposit Value Added</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="unit">
<div class="cell" data-label="Property">unit</div>
<div class="cell" data-label="Column">unit_id</div>
<div class="cell" data-label="Arabic">وحدة سكنية</div>
<div class="cell" data-label="English">Housing units</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [RERentalUnit](/entities/realestate/RERentalUnit.md) 
</div>
</div>

<div class="row searchable" id="unitGroup">
<div class="cell" data-label="Property">unitGroup</div>
<div class="cell" data-label="Column">unitGroup_id</div>
<div class="cell" data-label="Arabic">وحدة مجمعة</div>
<div class="cell" data-label="English">Unit group</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [REUnitGroup](/entities/realestate/REUnitGroup.md) 
</div>
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

<div class="row searchable" id="vouchersPayments">
<div class="cell" data-label="Property">vouchersPayments</div>
<div class="cell" data-label="Column">vouchersPayments</div>
<div class="cell" data-label="Arabic">إجمالي المدفوع من السندات</div>
<div class="cell" data-label="English">Total of Vouchers Payments</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="waiverDoc">
<div class="cell" data-label="Property">waiverDoc</div>
<div class="cell" data-label="Column">waiverDoc_id</div>
<div class="cell" data-label="Arabic">سند التنازل</div>
<div class="cell" data-label="English">Waiver Doc</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [REWaiverDoc](/entities/realestate-sales/REWaiverDoc.md) 
</div>
</div>

<div class="row searchable" id="waivered">
<div class="cell" data-label="Property">waivered</div>
<div class="cell" data-label="Column">waivered</div>
<div class="cell" data-label="Arabic">تم التنازل عنها</div>
<div class="cell" data-label="English">Waivered</div>
<div class="cell" data-label="Type">Boolean</div>

</div>


</div>

<div id='details' title='details' class='searchable'>

## details (التفاصيل - Details)
**Table Name:** REPurchaseContractLine, **Join Column:** rEPurchaseContract_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="details.amount">
<div class="cell" data-label="Property">details.amount</div>
<div class="cell" data-label="Column">amount</div>
<div class="cell" data-label="Arabic"> المبلغ</div>
<div class="cell" data-label="English"> Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.collectedByFPValue">
<div class="cell" data-label="Property">details.collectedByFPValue</div>
<div class="cell" data-label="Column">collectedByFPValue</div>
<div class="cell" data-label="Arabic">محصل باوراق قبض</div>
<div class="cell" data-label="English">Collected By FP Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.currencyRate">
<div class="cell" data-label="Property">details.currencyRate</div>
<div class="cell" data-label="Column">currencyRate</div>
<div class="cell" data-label="Arabic">المعدل</div>
<div class="cell" data-label="English">Currency Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.date1">
<div class="cell" data-label="Property">details.date1</div>
<div class="cell" data-label="Column">date1</div>
<div class="cell" data-label="Arabic">تـــاريخ 1</div>
<div class="cell" data-label="English">Date 1</div>
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

<div class="row searchable" id="details.discountPercentage">
<div class="cell" data-label="Property">details.discountPercentage</div>
<div class="cell" data-label="Column">discountPercentage</div>
<div class="cell" data-label="Arabic">نسبة التخفيض</div>
<div class="cell" data-label="English">Discount | Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.discountValue">
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

<div class="row searchable" id="details.expenseType">
<div class="cell" data-label="Property">details.expenseType</div>
<div class="cell" data-label="Column">expenseType_id</div>
<div class="cell" data-label="Arabic">نوع المصروف</div>
<div class="cell" data-label="English">Expense Type</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [REExpenseType](/entities/realestate/REExpenseType.md) 
</div>
</div>

<div class="row searchable" id="details.feeType">
<div class="cell" data-label="Property">details.feeType</div>
<div class="cell" data-label="Column">feeType_id</div>
<div class="cell" data-label="Arabic"> نوع رسم استثمار عقاري</div>
<div class="cell" data-label="English"> Real Estate Fee Type</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [REFeeType](/entities/realestate/REFeeType.md) 
</div>
</div>

<div class="row searchable" id="details.financialPaper">
<div class="cell" data-label="Property">details.financialPaper</div>
<div class="cell" data-label="Column">financialPaper_id</div>
<div class="cell" data-label="Arabic">الورقة التجارية</div>
<div class="cell" data-label="English">Commercial Paper</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FinancialPaper](/entities/accounting-banks/FinancialPaper.md) 
</div>
</div>

<div class="row searchable" id="details.id">
<div class="cell" data-label="Property">details.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
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

<div class="row searchable" id="details.lineNumber">
<div class="cell" data-label="Property">details.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="details.mergeValue1">
<div class="cell" data-label="Property">details.mergeValue1</div>
<div class="cell" data-label="Column">mergeValue1</div>
<div class="cell" data-label="Arabic">قيمة مدمجة 1</div>
<div class="cell" data-label="English">Merge Value 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.mergeValue2">
<div class="cell" data-label="Property">details.mergeValue2</div>
<div class="cell" data-label="Column">mergeValue2</div>
<div class="cell" data-label="Arabic">قيمة مدمجة 2</div>
<div class="cell" data-label="English">Merge Value 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.mergeValue3">
<div class="cell" data-label="Property">details.mergeValue3</div>
<div class="cell" data-label="Column">mergeValue3</div>
<div class="cell" data-label="Arabic">قيمة مدمجة 3</div>
<div class="cell" data-label="English">Merge Value 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.mergeValue4">
<div class="cell" data-label="Property">details.mergeValue4</div>
<div class="cell" data-label="Column">mergeValue4</div>
<div class="cell" data-label="Arabic">قيمة مدمجة 4</div>
<div class="cell" data-label="English">Merge Value 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.mergeValue5">
<div class="cell" data-label="Property">details.mergeValue5</div>
<div class="cell" data-label="Column">mergeValue5</div>
<div class="cell" data-label="Arabic">قيمة مدمجة 5</div>
<div class="cell" data-label="English">Merge Value 5</div>
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

<div class="row searchable" id="details.netValue">
<div class="cell" data-label="Property">details.netValue</div>
<div class="cell" data-label="Column">netValue</div>
<div class="cell" data-label="Arabic">الصافي</div>
<div class="cell" data-label="English">Net value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.paidValue">
<div class="cell" data-label="Property">details.paidValue</div>
<div class="cell" data-label="Column">paidValue</div>
<div class="cell" data-label="Arabic">القيمة المدفوعة</div>
<div class="cell" data-label="English">Paid Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.payed">
<div class="cell" data-label="Property">details.payed</div>
<div class="cell" data-label="Column">payed</div>
<div class="cell" data-label="Arabic">تم الدفع</div>
<div class="cell" data-label="English">payed</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.penaletyValue">
<div class="cell" data-label="Property">details.penaletyValue</div>
<div class="cell" data-label="Column">penaletyValue</div>
<div class="cell" data-label="Arabic">قيمة الغرامة</div>
<div class="cell" data-label="English">Penalety value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.penaltyPercentage">
<div class="cell" data-label="Property">details.penaltyPercentage</div>
<div class="cell" data-label="Column">penaltyPercentage</div>
<div class="cell" data-label="Arabic">من الراتب | %</div>
<div class="cell" data-label="English">From Salary|percentage</div>
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

<div class="row searchable" id="details.ref3">
<div class="cell" data-label="Property">details.ref3</div>
<div class="cell gen-ref-column" data-label="Column">ref3ActualCode,  ref3Code,  ref3EntityType,  ref3Id</div>
<div class="cell" data-label="Arabic">مرجع 3</div>
<div class="cell" data-label="English">Reference 3</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.refpCreationInfo.amount">
<div class="cell" data-label="Property">details.refpCreationInfo.amount</div>
<div class="cell" data-label="Column">fpAmount</div>
<div class="cell" data-label="Arabic"> المبلغ</div>
<div class="cell" data-label="English"> Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.refpCreationInfo.bankAccount">
<div class="cell" data-label="Property">details.refpCreationInfo.bankAccount</div>
<div class="cell" data-label="Column">fpBankAccount_id</div>
<div class="cell" data-label="Arabic">رقم حساب البنك</div>
<div class="cell" data-label="English">Bank account</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [BankAccount](/entities/accounting-banks/BankAccount.md) 
</div>
</div>

<div class="row searchable" id="details.refpCreationInfo.beneficiary">
<div class="cell" data-label="Property">details.refpCreationInfo.beneficiary</div>
<div class="cell" data-label="Column">fpBeneficiary</div>
<div class="cell" data-label="Arabic">المستفيد</div>
<div class="cell" data-label="English">Beneficiary</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.refpCreationInfo.chequeNumber">
<div class="cell" data-label="Property">details.refpCreationInfo.chequeNumber</div>
<div class="cell" data-label="Column">fpChequeNumber</div>
<div class="cell" data-label="Arabic">رقم الشيك</div>
<div class="cell" data-label="English">Cheque Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.refpCreationInfo.concernedParty">
<div class="cell" data-label="Property">details.refpCreationInfo.concernedParty</div>
<div class="cell gen-ref-column" data-label="Column">fpConcernedPartyActualCode,  fpConcernedPartyCode,  fpConcernedPartyEntityType,  fpConcernedPartyId</div>
<div class="cell" data-label="Arabic">الجهة المختصة</div>
<div class="cell" data-label="English">Concerned Party</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.refpCreationInfo.currency">
<div class="cell" data-label="Property">details.refpCreationInfo.currency</div>
<div class="cell" data-label="Column">fpCurrency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/entities/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="details.refpCreationInfo.customerBank">
<div class="cell" data-label="Property">details.refpCreationInfo.customerBank</div>
<div class="cell" data-label="Column">fpCustomerBank_id</div>
<div class="cell" data-label="Arabic">بنك العميل</div>
<div class="cell" data-label="English">Customer Bank</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Bank](/entities/accounting-banks/Bank.md) 
</div>
</div>

<div class="row searchable" id="details.refpCreationInfo.dueDate">
<div class="cell" data-label="Property">details.refpCreationInfo.dueDate</div>
<div class="cell" data-label="Column">fpDueDate</div>
<div class="cell" data-label="Arabic">تاريخ الاستحقاق</div>
<div class="cell" data-label="English">Due Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.refpCreationInfo.fpbook">
<div class="cell" data-label="Property">details.refpCreationInfo.fpbook</div>
<div class="cell gen-ref-column" data-label="Column">fpFpbookActualCode,  fpFpbookCode,  fpFpbookEntityType,  fpFpbookId</div>
<div class="cell" data-label="Arabic"> الدفتر</div>
<div class="cell" data-label="English"> Book</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.refpCreationInfo.issuer">
<div class="cell" data-label="Property">details.refpCreationInfo.issuer</div>
<div class="cell" data-label="Column">fpIssuer</div>
<div class="cell" data-label="Arabic">الساحب</div>
<div class="cell" data-label="English">Issuer</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.refpCreationInfo.name1">
<div class="cell" data-label="Property">details.refpCreationInfo.name1</div>
<div class="cell" data-label="Column">fpName1</div>
<div class="cell" data-label="Arabic">الاسم العربي</div>
<div class="cell" data-label="English">Name1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.refpCreationInfo.name2">
<div class="cell" data-label="Property">details.refpCreationInfo.name2</div>
<div class="cell" data-label="Column">fpName2</div>
<div class="cell" data-label="Arabic">الاسم الإنجليزي</div>
<div class="cell" data-label="English">Name2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.refpCreationInfo.paperCode">
<div class="cell" data-label="Property">details.refpCreationInfo.paperCode</div>
<div class="cell" data-label="Column">fpPaperCode</div>
<div class="cell" data-label="Arabic">كود الورقة</div>
<div class="cell" data-label="English">Paper Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.refpCreationInfo.paperType">
<div class="cell" data-label="Property">details.refpCreationInfo.paperType</div>
<div class="cell" data-label="Column">fpPaperType</div>
<div class="cell" data-label="Arabic">نوع الورقة</div>
<div class="cell" data-label="English">Paper Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="details.refpCreationInfo.signedBy">
<div class="cell" data-label="Property">details.refpCreationInfo.signedBy</div>
<div class="cell" data-label="Column">fpSignedBy</div>
<div class="cell" data-label="Arabic">اسم الموقع</div>
<div class="cell" data-label="English">Signed By</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.refpCreationInfo.subsidiary">
<div class="cell" data-label="Property">details.refpCreationInfo.subsidiary</div>
<div class="cell gen-ref-column" data-label="Column">fpSubsidiaryActualCode,  fpSubsidiaryCode,  fpSubsidiaryEntityType,  fpSubsidiaryId</div>
<div class="cell" data-label="Arabic">الذمة</div>
<div class="cell" data-label="English">Subsidiary</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.refpCreationInfo.value.amount">
<div class="cell" data-label="Property">details.refpCreationInfo.value.amount</div>
<div class="cell" data-label="Column">fpValueAmount</div>
<div class="cell" data-label="Arabic"> المبلغ</div>
<div class="cell" data-label="English"> Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.refpCreationInfo.value.currency">
<div class="cell" data-label="Property">details.refpCreationInfo.value.currency</div>
<div class="cell" data-label="Column">fpValueCurrency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/entities/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="details.remainingCollectVal">
<div class="cell" data-label="Property">details.remainingCollectVal</div>
<div class="cell" data-label="Column">remainingCollectVal</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.remainingFPVal">
<div class="cell" data-label="Property">details.remainingFPVal</div>
<div class="cell" data-label="Column">remainingFPVal</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.remainingValue">
<div class="cell" data-label="Property">details.remainingValue</div>
<div class="cell" data-label="Column">remainingValue</div>
<div class="cell" data-label="Arabic">المتبقي</div>
<div class="cell" data-label="English">Remaining Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.remarks">
<div class="cell" data-label="Property">details.remarks</div>
<div class="cell" data-label="Column">remarks</div>
<div class="cell" data-label="Arabic"> ملاحظات</div>
<div class="cell" data-label="English"> Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="details.requestedCollectValue">
<div class="cell" data-label="Property">details.requestedCollectValue</div>
<div class="cell" data-label="Column">requestedCollectValue</div>
<div class="cell" data-label="Arabic">مطلوب تحصيله</div>
<div class="cell" data-label="English">Requested Collect Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.selectedLine">
<div class="cell" data-label="Property">details.selectedLine</div>
<div class="cell" data-label="Column">selectedLine</div>
<div class="cell" data-label="Arabic">اختيار</div>
<div class="cell" data-label="English">Select</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.systemPaidValue">
<div class="cell" data-label="Property">details.systemPaidValue</div>
<div class="cell" data-label="Column">systemPaidValue</div>
<div class="cell" data-label="Arabic">المحصل نظاميا</div>
<div class="cell" data-label="English">System paid value</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="details.toDate">
<div class="cell" data-label="Property">details.toDate</div>
<div class="cell" data-label="Column">toDate</div>
<div class="cell" data-label="Arabic">إلى تاريخ</div>
<div class="cell" data-label="English">To Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.totalAfterTaxes">
<div class="cell" data-label="Property">details.totalAfterTaxes</div>
<div class="cell" data-label="Column">totalAfterTaxes</div>
<div class="cell" data-label="Arabic">الصافي بعد الضريبة</div>
<div class="cell" data-label="English">Total After Taxes</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.type">
<div class="cell" data-label="Property">details.type</div>
<div class="cell" data-label="Column">type</div>
<div class="cell" data-label="Arabic">النوع</div>
<div class="cell" data-label="English">Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>


</div>

<div id='externalPaymentLines' title='externalPaymentLines' class='searchable'>

## externalPaymentLines (السداد بسندات خارجية - External Payment Lines)
**Table Name:** REPurchaseContrExternalPayLine, **Join Column:** rEPurchaseContract_id
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
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="externalPaymentLines.lineNumber">
<div class="cell" data-label="Property">externalPaymentLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="externalPaymentLines.n1">
<div class="cell" data-label="Property">externalPaymentLines.n1</div>
<div class="cell" data-label="Column">n1</div>
<div class="cell" data-label="Arabic">رقم 1</div>
<div class="cell" data-label="English">Number 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="externalPaymentLines.n2">
<div class="cell" data-label="Property">externalPaymentLines.n2</div>
<div class="cell" data-label="Column">n2</div>
<div class="cell" data-label="Arabic">رقم 2</div>
<div class="cell" data-label="English">Number 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="externalPaymentLines.n3">
<div class="cell" data-label="Property">externalPaymentLines.n3</div>
<div class="cell" data-label="Column">n3</div>
<div class="cell" data-label="Arabic">رقم 3</div>
<div class="cell" data-label="English">Number 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="externalPaymentLines.n4">
<div class="cell" data-label="Property">externalPaymentLines.n4</div>
<div class="cell" data-label="Column">n4</div>
<div class="cell" data-label="Arabic">رقم 4</div>
<div class="cell" data-label="English">Number 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="externalPaymentLines.n5">
<div class="cell" data-label="Property">externalPaymentLines.n5</div>
<div class="cell" data-label="Column">n5</div>
<div class="cell" data-label="Arabic">رقم 5</div>
<div class="cell" data-label="English">Number 5</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div id='installmentInfoLines' title='installmentInfoLines' class='searchable'>

## installmentInfoLines ( - )
**Table Name:** REPurchaseInstInfoLine, **Join Column:** rEPurchaseContract_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="installmentInfoLines.id">
<div class="cell" data-label="Property">installmentInfoLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="installmentInfoLines.installmentInfo.distributeRemaining">
<div class="cell" data-label="Property">installmentInfoLines.installmentInfo.distributeRemaining</div>
<div class="cell" data-label="Column">distributeRemaining</div>
<div class="cell" data-label="Arabic">توزيع كامل القيمة المتبقية على عدد الأقساط</div>
<div class="cell" data-label="English">Distribute Total Remaining Values on The numbers Of Total Installments</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="installmentInfoLines.installmentInfo.firstInstallmentValue">
<div class="cell" data-label="Property">installmentInfoLines.installmentInfo.firstInstallmentValue</div>
<div class="cell" data-label="Column">firstInstallmentValue</div>
<div class="cell" data-label="Arabic">قيمة أول قسط</div>
<div class="cell" data-label="English">First Installment Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="installmentInfoLines.installmentInfo.installmentPercentage">
<div class="cell" data-label="Property">installmentInfoLines.installmentInfo.installmentPercentage</div>
<div class="cell" data-label="Column">installmentPercentage</div>
<div class="cell" data-label="Arabic">نسبة القسط</div>
<div class="cell" data-label="English">Installment Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="installmentInfoLines.installmentInfo.installmentPeriod">
<div class="cell" data-label="Property">installmentInfoLines.installmentInfo.installmentPeriod</div>
<div class="cell" data-label="Column">installmentPeriod</div>
<div class="cell" data-label="Arabic">فترة الاقساط</div>
<div class="cell" data-label="English">Installment Period</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="installmentInfoLines.installmentInfo.installmentStartDate">
<div class="cell" data-label="Property">installmentInfoLines.installmentInfo.installmentStartDate</div>
<div class="cell" data-label="Column">installmentStartDate</div>
<div class="cell" data-label="Arabic">تاريخ بداية التقسيط</div>
<div class="cell" data-label="English">Installments Start Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="installmentInfoLines.installmentInfo.installmentType">
<div class="cell" data-label="Property">installmentInfoLines.installmentInfo.installmentType</div>
<div class="cell" data-label="Column">installmentType</div>
<div class="cell" data-label="Arabic">نوع القسط</div>
<div class="cell" data-label="English">Installment type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="installmentInfoLines.installmentInfo.installmentValue">
<div class="cell" data-label="Property">installmentInfoLines.installmentInfo.installmentValue</div>
<div class="cell" data-label="Column">installmentValue</div>
<div class="cell" data-label="Arabic">قيمة القسط</div>
<div class="cell" data-label="English">Installment Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="installmentInfoLines.installmentInfo.installmentsMultiplesOf">
<div class="cell" data-label="Property">installmentInfoLines.installmentInfo.installmentsMultiplesOf</div>
<div class="cell" data-label="Column">installmentsMultiplesOf</div>
<div class="cell" data-label="Arabic">جعل الأقساط مضاعفات للرقم</div>
<div class="cell" data-label="English">Installments Multiples Of</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="installmentInfoLines.installmentInfo.lastInstallmentValue">
<div class="cell" data-label="Property">installmentInfoLines.installmentInfo.lastInstallmentValue</div>
<div class="cell" data-label="Column">lastInstallmentValue</div>
<div class="cell" data-label="Arabic">قيمة أخر قسط</div>
<div class="cell" data-label="English">Last Installment Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="installmentInfoLines.installmentInfo.maintenancePeriod.uom">
<div class="cell" data-label="Property">installmentInfoLines.installmentInfo.maintenancePeriod.uom</div>
<div class="cell" data-label="Column">maintenancePeriodUom</div>
<div class="cell" data-label="Arabic">فترة الصيانة قبل بداية القسط | وحدة</div>
<div class="cell" data-label="English">Maintenance Period Before Installment Start Date | UOM</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="installmentInfoLines.installmentInfo.maintenancePeriod.value">
<div class="cell" data-label="Property">installmentInfoLines.installmentInfo.maintenancePeriod.value</div>
<div class="cell" data-label="Column">maintenancePeriodValue</div>
<div class="cell" data-label="Arabic">فترة الصيانة قبل بداية القسط | فيمة</div>
<div class="cell" data-label="English">Maintenance Period Before Installment Start Date | value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="installmentInfoLines.installmentInfo.multiplesRoundingMode">
<div class="cell" data-label="Property">installmentInfoLines.installmentInfo.multiplesRoundingMode</div>
<div class="cell" data-label="Column">multiplesRoundingMode</div>
<div class="cell" data-label="Arabic">طريقة تقريب المضاعفات</div>
<div class="cell" data-label="English">Multiples Rounding Mode</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="installmentInfoLines.installmentInfo.numberofInstallments">
<div class="cell" data-label="Property">installmentInfoLines.installmentInfo.numberofInstallments</div>
<div class="cell" data-label="Column">numberofInstallments</div>
<div class="cell" data-label="Arabic">عدد الاقساط</div>
<div class="cell" data-label="English">Number of Installments</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="installmentInfoLines.installmentInfo.remainingProcessingPolicy">
<div class="cell" data-label="Property">installmentInfoLines.installmentInfo.remainingProcessingPolicy</div>
<div class="cell" data-label="Column">remainingProcessingPolicy</div>
<div class="cell" data-label="Arabic">سياسة معالجة المبلغ المتبقي</div>
<div class="cell" data-label="English">Remaining Processing Policy</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="installmentInfoLines.lineNumber">
<div class="cell" data-label="Property">installmentInfoLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="installmentInfoLines.n1">
<div class="cell" data-label="Property">installmentInfoLines.n1</div>
<div class="cell" data-label="Column">n1</div>
<div class="cell" data-label="Arabic">رقم 1</div>
<div class="cell" data-label="English">Number 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="installmentInfoLines.n2">
<div class="cell" data-label="Property">installmentInfoLines.n2</div>
<div class="cell" data-label="Column">n2</div>
<div class="cell" data-label="Arabic">رقم 2</div>
<div class="cell" data-label="English">Number 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="installmentInfoLines.n3">
<div class="cell" data-label="Property">installmentInfoLines.n3</div>
<div class="cell" data-label="Column">n3</div>
<div class="cell" data-label="Arabic">رقم 3</div>
<div class="cell" data-label="English">Number 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="installmentInfoLines.n4">
<div class="cell" data-label="Property">installmentInfoLines.n4</div>
<div class="cell" data-label="Column">n4</div>
<div class="cell" data-label="Arabic">رقم 4</div>
<div class="cell" data-label="English">Number 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="installmentInfoLines.n5">
<div class="cell" data-label="Property">installmentInfoLines.n5</div>
<div class="cell" data-label="Column">n5</div>
<div class="cell" data-label="Arabic">رقم 5</div>
<div class="cell" data-label="English">Number 5</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="installmentInfoLines.ref0">
<div class="cell" data-label="Property">installmentInfoLines.ref0</div>
<div class="cell gen-ref-column" data-label="Column">ref0ActualCode,  ref0Code,  ref0EntityType,  ref0Id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="installmentInfoLines.ref1">
<div class="cell" data-label="Property">installmentInfoLines.ref1</div>
<div class="cell gen-ref-column" data-label="Column">ref1ActualCode,  ref1Code,  ref1EntityType,  ref1Id</div>
<div class="cell" data-label="Arabic">مرجع 1</div>
<div class="cell" data-label="English">Reference 1</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="installmentInfoLines.ref2">
<div class="cell" data-label="Property">installmentInfoLines.ref2</div>
<div class="cell gen-ref-column" data-label="Column">ref2ActualCode,  ref2Code,  ref2EntityType,  ref2Id</div>
<div class="cell" data-label="Arabic">مرجع 2</div>
<div class="cell" data-label="English">Reference 2</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="installmentInfoLines.ref3">
<div class="cell" data-label="Property">installmentInfoLines.ref3</div>
<div class="cell gen-ref-column" data-label="Column">ref3ActualCode,  ref3Code,  ref3EntityType,  ref3Id</div>
<div class="cell" data-label="Arabic">مرجع 3</div>
<div class="cell" data-label="English">Reference 3</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="installmentInfoLines.ref4">
<div class="cell" data-label="Property">installmentInfoLines.ref4</div>
<div class="cell gen-ref-column" data-label="Column">ref4ActualCode,  ref4Code,  ref4EntityType,  ref4Id</div>
<div class="cell" data-label="Arabic">مرجع 4</div>
<div class="cell" data-label="English">Reference 4</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="installmentInfoLines.ref5">
<div class="cell" data-label="Property">installmentInfoLines.ref5</div>
<div class="cell gen-ref-column" data-label="Column">ref5ActualCode,  ref5Code,  ref5EntityType,  ref5Id</div>
<div class="cell" data-label="Arabic">مرجع 5</div>
<div class="cell" data-label="English">Reference 5</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="installmentInfoLines.ref6">
<div class="cell" data-label="Property">installmentInfoLines.ref6</div>
<div class="cell gen-ref-column" data-label="Column">ref6ActualCode,  ref6Code,  ref6EntityType,  ref6Id</div>
<div class="cell" data-label="Arabic">مرجع 6</div>
<div class="cell" data-label="English">Reference 6</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="installmentInfoLines.ref7">
<div class="cell" data-label="Property">installmentInfoLines.ref7</div>
<div class="cell gen-ref-column" data-label="Column">ref7ActualCode,  ref7Code,  ref7EntityType,  ref7Id</div>
<div class="cell" data-label="Arabic">مرجع 7</div>
<div class="cell" data-label="English">Reference 7</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="installmentInfoLines.ref8">
<div class="cell" data-label="Property">installmentInfoLines.ref8</div>
<div class="cell gen-ref-column" data-label="Column">ref8ActualCode,  ref8Code,  ref8EntityType,  ref8Id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="installmentInfoLines.ref9">
<div class="cell" data-label="Property">installmentInfoLines.ref9</div>
<div class="cell gen-ref-column" data-label="Column">ref9ActualCode,  ref9Code,  ref9EntityType,  ref9Id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="installmentInfoLines.remarks">
<div class="cell" data-label="Property">installmentInfoLines.remarks</div>
<div class="cell" data-label="Column">remarks</div>
<div class="cell" data-label="Arabic">ملاحظات</div>
<div class="cell" data-label="English">Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="installmentInfoLines.text1">
<div class="cell" data-label="Property">installmentInfoLines.text1</div>
<div class="cell" data-label="Column">text1</div>
<div class="cell" data-label="Arabic">نــــص 1</div>
<div class="cell" data-label="English">Text 1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="installmentInfoLines.text2">
<div class="cell" data-label="Property">installmentInfoLines.text2</div>
<div class="cell" data-label="Column">text2</div>
<div class="cell" data-label="Arabic">نـــــص 2</div>
<div class="cell" data-label="English">Text 2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="installmentInfoLines.text3">
<div class="cell" data-label="Property">installmentInfoLines.text3</div>
<div class="cell" data-label="Column">text3</div>
<div class="cell" data-label="Arabic">نص 3</div>
<div class="cell" data-label="English">text3</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="installmentInfoLines.text4">
<div class="cell" data-label="Property">installmentInfoLines.text4</div>
<div class="cell" data-label="Column">text4</div>
<div class="cell" data-label="Arabic">نص 4</div>
<div class="cell" data-label="English">text4</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="installmentInfoLines.text5">
<div class="cell" data-label="Property">installmentInfoLines.text5</div>
<div class="cell" data-label="Column">text5</div>
<div class="cell" data-label="Arabic">نص 5</div>
<div class="cell" data-label="English">text5</div>
<div class="cell" data-label="Type">Text</div>

</div>


</div>

