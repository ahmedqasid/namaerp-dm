# RECancelContract
**Arabic:** انهاء عقد ايجار - انهاء عقود ايجار
**English:** Cancel Contract - Cancel Contracts

<ContentFilter/>


<div class='searchable'>
<a href='#expenses'>expenses (RECancelContrPaymentLine) </a> , <a href='#termLines'>termLines (RECancelConStandardTermLine) </a>
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

<div class="row searchable" id="autoCancelPreviousContract">
<div class="cell" data-label="Property">autoCancelPreviousContract</div>
<div class="cell" data-label="Column">autoCancelPreviousContract</div>
<div class="cell" data-label="Arabic">إلغاء العقد السابق للعقار آليا</div>
<div class="cell" data-label="English">Auto Cancel Previous Contract</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="block">
<div class="cell" data-label="Property">block</div>
<div class="cell" data-label="Column">block_id</div>
<div class="cell" data-label="Arabic">البلوك</div>
<div class="cell" data-label="English">Block</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [REBlock](/modules/realestate/REBlock.md) 
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

<div class="row searchable" id="broker">
<div class="cell" data-label="Property">broker</div>
<div class="cell" data-label="Column">broker_id</div>
<div class="cell" data-label="Arabic">وسيط</div>
<div class="cell" data-label="English">Broker</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [REBroker](/modules/realestate/REBroker.md) 
</div>
</div>

<div class="row searchable" id="building">
<div class="cell" data-label="Property">building</div>
<div class="cell" data-label="Column">building_id</div>
<div class="cell" data-label="Arabic">المبنى</div>
<div class="cell" data-label="English">Building</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [REBuilding](/modules/realestate/REBuilding.md) 
</div>
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

<div class="row searchable" id="cancelled">
<div class="cell" data-label="Property">cancelled</div>
<div class="cell" data-label="Column">cancelled</div>
<div class="cell" data-label="Arabic">منتهي</div>
<div class="cell" data-label="English">cancelled</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="cancelledContract">
<div class="cell" data-label="Property">cancelledContract</div>
<div class="cell" data-label="Column">cancelledContract_id</div>
<div class="cell" data-label="Arabic">إنهاء عقد الإيجار</div>
<div class="cell" data-label="English">Cancel Rent Contract</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [RECancelContract](/modules/realestate-rent/RECancelContract.md) 
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

<div class="row searchable" id="discountValueInsurance">
<div class="cell" data-label="Property">discountValueInsurance</div>
<div class="cell" data-label="Column">discountValueInsurance</div>
<div class="cell" data-label="Arabic">خصم قيمة التامين</div>
<div class="cell" data-label="English">Discount Value Insurance</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="endReservationType">
<div class="cell" data-label="Property">endReservationType</div>
<div class="cell" data-label="Column">endReservationType</div>
<div class="cell" data-label="Arabic">نوع إلغاء العقد</div>
<div class="cell" data-label="English">Reason of canceling contract</div>
<div class="cell" data-label="Type">Enum</div>

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

<div class="row searchable" id="extendedInsuranceValue">
<div class="cell" data-label="Property">extendedInsuranceValue</div>
<div class="cell" data-label="Column">extendedInsuranceValue</div>
<div class="cell" data-label="Arabic">قيمة التأمين الممتدة من العقد السابق وغير موجودة بالإيجارات</div>
<div class="cell" data-label="English">Extended Insurance Value From Previous Contract And Not Found In Installments</div>
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

<div class="row searchable" id="floor">
<div class="cell" data-label="Property">floor</div>
<div class="cell" data-label="Column">floor_id</div>
<div class="cell" data-label="Arabic">الطابق</div>
<div class="cell" data-label="English">Floor</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [REFloor](/modules/realestate/REFloor.md) 
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

<div class="row searchable" id="genCancelContrReplId">
<div class="cell" data-label="Property">genCancelContrReplId</div>
<div class="cell" data-label="Column">genCancelContrReplId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="genCancelContract">
<div class="cell" data-label="Property">genCancelContract</div>
<div class="cell" data-label="Column">genCancelContract_id</div>
<div class="cell" data-label="Arabic">انهاء عقد الايجار السابق</div>
<div class="cell" data-label="English">Generated Cancel Contract</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [RECancelContract](/modules/realestate-rent/RECancelContract.md) 
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

<div class="row searchable" id="nextContract">
<div class="cell" data-label="Property">nextContract</div>
<div class="cell gen-ref-column" data-label="Column">nextContractActualCode,  nextContractCode,  nextContractEntityType,  nextContractId</div>
<div class="cell" data-label="Arabic">عقد الإيجار التالي</div>
<div class="cell" data-label="English">Next Contract</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="nextContractRenter">
<div class="cell" data-label="Property">nextContractRenter</div>
<div class="cell gen-ref-column" data-label="Column">nextContractRenterActualCode,  nextContractRenterCode,  nextContractRenterEntityType,  nextContractRenterId</div>
<div class="cell" data-label="Arabic">عقد الإيجار التالي للمستأجر</div>
<div class="cell" data-label="English">Next Contract For Renter</div>
<div class="cell" data-label="Type">Genericreference</div>

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

<div class="row searchable" id="otherDiscounts">
<div class="cell" data-label="Property">otherDiscounts</div>
<div class="cell" data-label="Column">otherDiscounts</div>
<div class="cell" data-label="Arabic">خصومات أخرى</div>
<div class="cell" data-label="English">other discounts</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="owner">
<div class="cell" data-label="Property">owner</div>
<div class="cell" data-label="Column">owner_id</div>
<div class="cell" data-label="Arabic"> مالك المستند</div>
<div class="cell" data-label="English"> Document Owner</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [REOwner](/modules/realestate/REOwner.md) 
</div>
</div>

<div class="row searchable" id="paidRentForNextYear">
<div class="cell" data-label="Property">paidRentForNextYear</div>
<div class="cell" data-label="Column">paidRentForNextYear</div>
<div class="cell" data-label="Arabic">قيمة المدفوع مقدم للعام التالي</div>
<div class="cell" data-label="English">Paid Rent For Next Year</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="parentCode">
<div class="cell" data-label="Property">parentCode</div>
<div class="cell" data-label="Column">parentCode</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="period.uom">
<div class="cell" data-label="Property">period.uom</div>
<div class="cell" data-label="Column">periodUom</div>
<div class="cell" data-label="Arabic">المدة | الوحدة</div>
<div class="cell" data-label="English">Duration | UOM</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="period.value">
<div class="cell" data-label="Property">period.value</div>
<div class="cell" data-label="Column">periodValue</div>
<div class="cell" data-label="Arabic">المدة | القيمة</div>
<div class="cell" data-label="English">Duration | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="prevContractRenter">
<div class="cell" data-label="Property">prevContractRenter</div>
<div class="cell gen-ref-column" data-label="Column">prevContractRenterActualCode,  prevContractRenterCode,  prevContractRenterEntityType,  prevContractRenterId</div>
<div class="cell" data-label="Arabic">عقد الإيجار السابق للمستأجر</div>
<div class="cell" data-label="English">Previous Contract For Renter</div>
<div class="cell" data-label="Type">Genericreference</div>

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

<div class="row searchable" id="previousContract">
<div class="cell" data-label="Property">previousContract</div>
<div class="cell gen-ref-column" data-label="Column">previousContractActualCode,  previousContractCode,  previousContractEntityType,  previousContractId</div>
<div class="cell" data-label="Arabic">العقد السابق</div>
<div class="cell" data-label="English">Previous Contract</div>
<div class="cell" data-label="Type">Genericreference</div>

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

 [REProject](/modules/realestate/REProject.md) 
</div>
</div>

<div class="row searchable" id="purged">
<div class="cell" data-label="Property">purged</div>
<div class="cell" data-label="Column">purged</div>
<div class="cell" data-label="Arabic">Purged</div>
<div class="cell" data-label="English">Purged</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="purpose">
<div class="cell" data-label="Property">purpose</div>
<div class="cell" data-label="Column">purpose</div>
<div class="cell" data-label="Arabic">الغرض</div>
<div class="cell" data-label="English">Purpose</div>
<div class="cell" data-label="Type">Text</div>

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

<div class="row searchable" id="relatedTo">
<div class="cell" data-label="Property">relatedTo</div>
<div class="cell gen-ref-column" data-label="Column">relatedToActualCode,  relatedToCode,  relatedToEntityType,  relatedToId</div>
<div class="cell" data-label="Arabic">يرتبط بـ</div>
<div class="cell" data-label="English">Related To</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="remaining">
<div class="cell" data-label="Property">remaining</div>
<div class="cell" data-label="Column">remaining</div>
<div class="cell" data-label="Arabic">المتبقي من الأقساط</div>
<div class="cell" data-label="English">Installment Remaining</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="remainingCommission">
<div class="cell" data-label="Property">remainingCommission</div>
<div class="cell" data-label="Column">remainingCommission</div>
<div class="cell" data-label="Arabic">المتبقي من السعي</div>
<div class="cell" data-label="English">Remaining Commission</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="remainingMaintenance">
<div class="cell" data-label="Property">remainingMaintenance</div>
<div class="cell" data-label="Column">remainingMaintenance</div>
<div class="cell" data-label="Arabic">المتبقي من الصيانة</div>
<div class="cell" data-label="English">Remaining Maintenance</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="remainingValueInsurance">
<div class="cell" data-label="Property">remainingValueInsurance</div>
<div class="cell" data-label="Column">remainingValueInsurance</div>
<div class="cell" data-label="Arabic">المتبقي من التأمين</div>
<div class="cell" data-label="English">Remaining Insurance Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="remainingWaterExpense">
<div class="cell" data-label="Property">remainingWaterExpense</div>
<div class="cell" data-label="Column">remainingWaterExpense</div>
<div class="cell" data-label="Arabic">المتبقي من تكاليف المياه</div>
<div class="cell" data-label="English">Remaining Water Expense</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="remarks">
<div class="cell" data-label="Property">remarks</div>
<div class="cell" data-label="Column">remark</div>
<div class="cell" data-label="Arabic">ملاحظات</div>
<div class="cell" data-label="English">Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="rentForCurrentYear">
<div class="cell" data-label="Property">rentForCurrentYear</div>
<div class="cell" data-label="Column">rentForCurrentYear</div>
<div class="cell" data-label="Arabic">قيمة المتبقي من الإيجار للعام الحالي</div>
<div class="cell" data-label="English">Remaining Rent Value For Current Year</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rentPurpose">
<div class="cell" data-label="Property">rentPurpose</div>
<div class="cell" data-label="Column">rentPurpose</div>
<div class="cell" data-label="Arabic">الغرض من الايجار</div>
<div class="cell" data-label="English">Rent purpose</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="rentedEstate">
<div class="cell" data-label="Property">rentedEstate</div>
<div class="cell gen-ref-column" data-label="Column">rentedEstateActualCode,  rentedEstateCode,  rentedEstateEntityType,  rentedEstateId</div>
<div class="cell" data-label="Arabic">العقار المؤجر</div>
<div class="cell" data-label="English">rented Estate</div>
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

<div class="row searchable" id="salesMan">
<div class="cell" data-label="Property">salesMan</div>
<div class="cell gen-ref-column" data-label="Column">salesManActualCode,  salesManCode,  salesManEntityType,  salesManId</div>
<div class="cell" data-label="Arabic">مندوب المبيعات</div>
<div class="cell" data-label="English">Salesman</div>
<div class="cell" data-label="Type">Genericreference</div>

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

<div class="row searchable" id="square">
<div class="cell" data-label="Property">square</div>
<div class="cell" data-label="Column">square_id</div>
<div class="cell" data-label="Arabic">مربع</div>
<div class="cell" data-label="English">Square</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [RESquare](/modules/realestate/RESquare.md) 
</div>
</div>

<div class="row searchable" id="standardTermsConditions">
<div class="cell" data-label="Property">standardTermsConditions</div>
<div class="cell" data-label="Column">standardTermsConditions_id</div>
<div class="cell" data-label="Arabic">بنود تعاقد</div>
<div class="cell" data-label="English">Standard Terms and Conditions</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [REStandardTermsConditions](/modules/realestate/REStandardTermsConditions.md) 
</div>
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
<div class="cell" data-label="Arabic">إجمالي ضريبة مبيعات 1</div>
<div class="cell" data-label="English">Tax 1 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tax2Total">
<div class="cell" data-label="Property">tax2Total</div>
<div class="cell" data-label="Column">tax2Total</div>
<div class="cell" data-label="Arabic">إجمالي ضريبة مبيعات 2</div>
<div class="cell" data-label="English">Tax 2 Total</div>
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

<div class="row searchable" id="totalAfterTaxes">
<div class="cell" data-label="Property">totalAfterTaxes</div>
<div class="cell" data-label="Column">totalAfterTaxes</div>
<div class="cell" data-label="Arabic">الصافي بعد الضريبة</div>
<div class="cell" data-label="English">Total After Taxes</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalCommission">
<div class="cell" data-label="Property">totalCommission</div>
<div class="cell" data-label="Column">totalCommission</div>
<div class="cell" data-label="Arabic">إجمالي السعي</div>
<div class="cell" data-label="English">Total Commission</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalInsuranceValue">
<div class="cell" data-label="Property">totalInsuranceValue</div>
<div class="cell" data-label="Column">totalInsuranceValue</div>
<div class="cell" data-label="Arabic">إجمالي التأمين</div>
<div class="cell" data-label="English">Total Insurance Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalMaintenance">
<div class="cell" data-label="Property">totalMaintenance</div>
<div class="cell" data-label="Column">totalMaintenance</div>
<div class="cell" data-label="Arabic">إجمالي الصيانة</div>
<div class="cell" data-label="English">Total Maintenance</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalWaterExpense">
<div class="cell" data-label="Property">totalWaterExpense</div>
<div class="cell" data-label="Column">totalWaterExpense</div>
<div class="cell" data-label="Arabic">إجمالي تكاليف المياه</div>
<div class="cell" data-label="English">Total Water Expense</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="type">
<div class="cell" data-label="Property">type</div>
<div class="cell" data-label="Column">type</div>
<div class="cell" data-label="Arabic">النوع</div>
<div class="cell" data-label="English">Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="unit">
<div class="cell" data-label="Property">unit</div>
<div class="cell" data-label="Column">unit_id</div>
<div class="cell" data-label="Arabic">وحدة سكنية</div>
<div class="cell" data-label="English">Housing units</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [RERentalUnit](/modules/realestate/RERentalUnit.md) 
</div>
</div>

<div class="row searchable" id="unitGroup">
<div class="cell" data-label="Property">unitGroup</div>
<div class="cell" data-label="Column">unitGroup_id</div>
<div class="cell" data-label="Arabic">وحدة مجمعة</div>
<div class="cell" data-label="English">Unit group</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [REUnitGroup](/modules/realestate/REUnitGroup.md) 
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

<div class="row searchable" id="valueInsurance">
<div class="cell" data-label="Property">valueInsurance</div>
<div class="cell" data-label="Column">valueInsurance</div>
<div class="cell" data-label="Arabic">قيمة التامين</div>
<div class="cell" data-label="English">Value insurance</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.addedYearPercentage10">
<div class="cell" data-label="Property">values.addedYearPercentage10</div>
<div class="cell" data-label="Column">addedYearPercentage10</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.addedYearPercentage2">
<div class="cell" data-label="Property">values.addedYearPercentage2</div>
<div class="cell" data-label="Column">addedYearPercentage2</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.addedYearPercentage3">
<div class="cell" data-label="Property">values.addedYearPercentage3</div>
<div class="cell" data-label="Column">addedYearPercentage3</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.addedYearPercentage4">
<div class="cell" data-label="Property">values.addedYearPercentage4</div>
<div class="cell" data-label="Column">addedYearPercentage4</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.addedYearPercentage5">
<div class="cell" data-label="Property">values.addedYearPercentage5</div>
<div class="cell" data-label="Column">addedYearPercentage5</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.addedYearPercentage6">
<div class="cell" data-label="Property">values.addedYearPercentage6</div>
<div class="cell" data-label="Column">addedYearPercentage6</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.addedYearPercentage7">
<div class="cell" data-label="Property">values.addedYearPercentage7</div>
<div class="cell" data-label="Column">addedYearPercentage7</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.addedYearPercentage8">
<div class="cell" data-label="Property">values.addedYearPercentage8</div>
<div class="cell" data-label="Column">addedYearPercentage8</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.addedYearPercentage9">
<div class="cell" data-label="Property">values.addedYearPercentage9</div>
<div class="cell" data-label="Column">addedYearPercentage9</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.addedYearValue10">
<div class="cell" data-label="Property">values.addedYearValue10</div>
<div class="cell" data-label="Column">addedYearValue10</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.addedYearValue2">
<div class="cell" data-label="Property">values.addedYearValue2</div>
<div class="cell" data-label="Column">addedYearValue2</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.addedYearValue3">
<div class="cell" data-label="Property">values.addedYearValue3</div>
<div class="cell" data-label="Column">addedYearValue3</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.addedYearValue4">
<div class="cell" data-label="Property">values.addedYearValue4</div>
<div class="cell" data-label="Column">addedYearValue4</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.addedYearValue5">
<div class="cell" data-label="Property">values.addedYearValue5</div>
<div class="cell" data-label="Column">addedYearValue5</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.addedYearValue6">
<div class="cell" data-label="Property">values.addedYearValue6</div>
<div class="cell" data-label="Column">addedYearValue6</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.addedYearValue7">
<div class="cell" data-label="Property">values.addedYearValue7</div>
<div class="cell" data-label="Column">addedYearValue7</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.addedYearValue8">
<div class="cell" data-label="Property">values.addedYearValue8</div>
<div class="cell" data-label="Column">addedYearValue8</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.addedYearValue9">
<div class="cell" data-label="Property">values.addedYearValue9</div>
<div class="cell" data-label="Column">addedYearValue9</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.commissionCollection">
<div class="cell" data-label="Property">values.commissionCollection</div>
<div class="cell" data-label="Column">commissionCollection</div>
<div class="cell" data-label="Arabic">عمولة التحصيل</div>
<div class="cell" data-label="English">Commission Collection Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.commissionCollectionPercentage">
<div class="cell" data-label="Property">values.commissionCollectionPercentage</div>
<div class="cell" data-label="Column">commissionCollectionPercentage</div>
<div class="cell" data-label="Arabic">نسبة عمولة التحصيل</div>
<div class="cell" data-label="English">Commission Collection Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.commissionPercentage">
<div class="cell" data-label="Property">values.commissionPercentage</div>
<div class="cell" data-label="Column">commissionPercentage</div>
<div class="cell" data-label="Arabic">السعي %</div>
<div class="cell" data-label="English">Commission %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.commissionValue">
<div class="cell" data-label="Property">values.commissionValue</div>
<div class="cell" data-label="Column">commissionValue</div>
<div class="cell" data-label="Arabic">قيمة السعي</div>
<div class="cell" data-label="English">Commission value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.compoundIncrease">
<div class="cell" data-label="Property">values.compoundIncrease</div>
<div class="cell" data-label="Column">compoundIncrease</div>
<div class="cell" data-label="Arabic">الزيادة السنوية مركبة</div>
<div class="cell" data-label="English">Compound Yearly Increase</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="values.currencyRate">
<div class="cell" data-label="Property">values.currencyRate</div>
<div class="cell" data-label="Column">currencyRate</div>
<div class="cell" data-label="Arabic">المعدل</div>
<div class="cell" data-label="English">Currency Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.insurancePercentage">
<div class="cell" data-label="Property">values.insurancePercentage</div>
<div class="cell" data-label="Column">insurancePercentage</div>
<div class="cell" data-label="Arabic">التأمين | %</div>
<div class="cell" data-label="English">Insurance | Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.insuranceValue">
<div class="cell" data-label="Property">values.insuranceValue</div>
<div class="cell" data-label="Column">insuranceValue</div>
<div class="cell" data-label="Arabic">التأمين | قيمة التأمين</div>
<div class="cell" data-label="English">Insurance Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.maintenancePercentage">
<div class="cell" data-label="Property">values.maintenancePercentage</div>
<div class="cell" data-label="Column">maintenancePercentage</div>
<div class="cell" data-label="Arabic">مصاريف الصيانة %</div>
<div class="cell" data-label="English">Maintenance %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.maintenanceValue">
<div class="cell" data-label="Property">values.maintenanceValue</div>
<div class="cell" data-label="Column">maintenanceValue</div>
<div class="cell" data-label="Arabic">القيمة</div>
<div class="cell" data-label="English">Maintenance Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.rentValuePerPeriod">
<div class="cell" data-label="Property">values.rentValuePerPeriod</div>
<div class="cell" data-label="Column">rentValuePerPeriod</div>
<div class="cell" data-label="Arabic">قيمة الإيجار بالفترة الواحدة</div>
<div class="cell" data-label="English">Rent Value per period</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.rentValuePerYear.amount">
<div class="cell" data-label="Property">values.rentValuePerYear.amount</div>
<div class="cell" data-label="Column">amount</div>
<div class="cell" data-label="Arabic">اساس العقد السنوي</div>
<div class="cell" data-label="English">Rent Value Per Year</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.rentValuePerYear.currency">
<div class="cell" data-label="Property">values.rentValuePerYear.currency</div>
<div class="cell" data-label="Column">currency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/modules/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="values.totalContractValue">
<div class="cell" data-label="Property">values.totalContractValue</div>
<div class="cell" data-label="Column">totalContractValue</div>
<div class="cell" data-label="Arabic">إجمالي قيمة التعاقد</div>
<div class="cell" data-label="English">Total Contract Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.totalRentValue">
<div class="cell" data-label="Property">values.totalRentValue</div>
<div class="cell" data-label="Column">totalRentValue</div>
<div class="cell" data-label="Arabic">إجمالي ايجارات العقد</div>
<div class="cell" data-label="English">total RentValue</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.waterExpensePercentage">
<div class="cell" data-label="Property">values.waterExpensePercentage</div>
<div class="cell" data-label="Column">waterExpensePercentage</div>
<div class="cell" data-label="Arabic">مصاريف المياة %</div>
<div class="cell" data-label="English">Water Expenses %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.waterExpenseValue">
<div class="cell" data-label="Property">values.waterExpenseValue</div>
<div class="cell" data-label="Column">waterExpenseValue</div>
<div class="cell" data-label="Arabic">قيمة مصاريف المياه</div>
<div class="cell" data-label="English">Water expense value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.year10Discount">
<div class="cell" data-label="Property">values.year10Discount</div>
<div class="cell" data-label="Column">year10Discount</div>
<div class="cell" data-label="Arabic">خصم السنة العاشرة %</div>
<div class="cell" data-label="English">Year 10 %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.year1Discount">
<div class="cell" data-label="Property">values.year1Discount</div>
<div class="cell" data-label="Column">year1Discount</div>
<div class="cell" data-label="Arabic">خصم السنة الأولى %</div>
<div class="cell" data-label="English">Year 1 %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.year2Discount">
<div class="cell" data-label="Property">values.year2Discount</div>
<div class="cell" data-label="Column">year2Discount</div>
<div class="cell" data-label="Arabic">خصم السنة الثانية %</div>
<div class="cell" data-label="English">Year 2 %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.year3Discount">
<div class="cell" data-label="Property">values.year3Discount</div>
<div class="cell" data-label="Column">year3Discount</div>
<div class="cell" data-label="Arabic">خصم السنة الثالثة %</div>
<div class="cell" data-label="English">Year 3 %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.year4Discount">
<div class="cell" data-label="Property">values.year4Discount</div>
<div class="cell" data-label="Column">year4Discount</div>
<div class="cell" data-label="Arabic">خصم السنة الرابعة %</div>
<div class="cell" data-label="English">Year 4 %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.year5Discount">
<div class="cell" data-label="Property">values.year5Discount</div>
<div class="cell" data-label="Column">year5Discount</div>
<div class="cell" data-label="Arabic">خصم السنة الخامسة %</div>
<div class="cell" data-label="English">Year 5 %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.year6Discount">
<div class="cell" data-label="Property">values.year6Discount</div>
<div class="cell" data-label="Column">year6Discount</div>
<div class="cell" data-label="Arabic">خصم السنة السادسة %</div>
<div class="cell" data-label="English">Year 6 %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.year7Discount">
<div class="cell" data-label="Property">values.year7Discount</div>
<div class="cell" data-label="Column">year7Discount</div>
<div class="cell" data-label="Arabic">خصم السنة السابعة %</div>
<div class="cell" data-label="English">Year 7 %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.year8Discount">
<div class="cell" data-label="Property">values.year8Discount</div>
<div class="cell" data-label="Column">year8Discount</div>
<div class="cell" data-label="Arabic">خصم السنة الثامنه %</div>
<div class="cell" data-label="English">Year 8 %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.year9Discount">
<div class="cell" data-label="Property">values.year9Discount</div>
<div class="cell" data-label="Column">year9Discount</div>
<div class="cell" data-label="Arabic">خصم السنة التاسعة %</div>
<div class="cell" data-label="English">Year 9 %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.yearlyAddedPercentage">
<div class="cell" data-label="Property">values.yearlyAddedPercentage</div>
<div class="cell" data-label="Column">yearlyAddedPercentage</div>
<div class="cell" data-label="Arabic">الزيادة السنوية %</div>
<div class="cell" data-label="English">Yearly Added %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="values.yearlyAddedValue">
<div class="cell" data-label="Property">values.yearlyAddedValue</div>
<div class="cell" data-label="Column">yearlyAddedValue</div>
<div class="cell" data-label="Arabic">القيمة المضافة سنويا</div>
<div class="cell" data-label="English">yearly added value percentage</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="yearlyAddedType">
<div class="cell" data-label="Property">yearlyAddedType</div>
<div class="cell" data-label="Column">yearlyAddedType</div>
<div class="cell" data-label="Arabic">طريقة الزيادة السنوية</div>
<div class="cell" data-label="English">Yearly added value type</div>
<div class="cell" data-label="Type">Enum</div>

</div>


</div>
</div>

<div id='expenses' title='expenses' class='searchable'>

## expenses (مصروفات - Expense)
**Table Name:** RECancelContrPaymentLine, **Join Column:** rECancelContract_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="expenses.amount">
<div class="cell" data-label="Property">expenses.amount</div>
<div class="cell" data-label="Column">amount</div>
<div class="cell" data-label="Arabic"> المبلغ</div>
<div class="cell" data-label="English"> Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expenses.collectedByFPValue">
<div class="cell" data-label="Property">expenses.collectedByFPValue</div>
<div class="cell" data-label="Column">collectedByFPValue</div>
<div class="cell" data-label="Arabic">محصل باوراق قبض</div>
<div class="cell" data-label="English">Collected By FP Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expenses.currencyRate">
<div class="cell" data-label="Property">expenses.currencyRate</div>
<div class="cell" data-label="Column">currencyRate</div>
<div class="cell" data-label="Arabic">المعدل</div>
<div class="cell" data-label="English">Currency Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expenses.date1">
<div class="cell" data-label="Property">expenses.date1</div>
<div class="cell" data-label="Column">date1</div>
<div class="cell" data-label="Arabic">تـــاريخ 1</div>
<div class="cell" data-label="English">Date 1</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="expenses.date2">
<div class="cell" data-label="Property">expenses.date2</div>
<div class="cell" data-label="Column">date2</div>
<div class="cell" data-label="Arabic">تـــاريخ 2</div>
<div class="cell" data-label="English">Date 2</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="expenses.date3">
<div class="cell" data-label="Property">expenses.date3</div>
<div class="cell" data-label="Column">date3</div>
<div class="cell" data-label="Arabic">تاريخ 3</div>
<div class="cell" data-label="English">Date3</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="expenses.date4">
<div class="cell" data-label="Property">expenses.date4</div>
<div class="cell" data-label="Column">date4</div>
<div class="cell" data-label="Arabic">تاريخ 4</div>
<div class="cell" data-label="English">Date4</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="expenses.date5">
<div class="cell" data-label="Property">expenses.date5</div>
<div class="cell" data-label="Column">date5</div>
<div class="cell" data-label="Arabic">تاريخ 5</div>
<div class="cell" data-label="English">Date5</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="expenses.discountPercentage">
<div class="cell" data-label="Property">expenses.discountPercentage</div>
<div class="cell" data-label="Column">discountPercentage</div>
<div class="cell" data-label="Arabic">نسبة التخفيض</div>
<div class="cell" data-label="English">Discount | Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expenses.discountValue">
<div class="cell" data-label="Property">expenses.discountValue</div>
<div class="cell" data-label="Column">discountValue</div>
<div class="cell" data-label="Arabic">قيمة الخصم</div>
<div class="cell" data-label="English">Discount Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expenses.dueDate">
<div class="cell" data-label="Property">expenses.dueDate</div>
<div class="cell" data-label="Column">dueDate</div>
<div class="cell" data-label="Arabic">تاريخ الاستحقاق</div>
<div class="cell" data-label="English">Due Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="expenses.expenseForCurrentYear">
<div class="cell" data-label="Property">expenses.expenseForCurrentYear</div>
<div class="cell" data-label="Column">expenseForCurrentYear</div>
<div class="cell" data-label="Arabic">قيمة المتبقي من المصروف للعام الحالي</div>
<div class="cell" data-label="English">Remaining Expense For Current Year</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expenses.expenseType">
<div class="cell" data-label="Property">expenses.expenseType</div>
<div class="cell" data-label="Column">expenseType_id</div>
<div class="cell" data-label="Arabic">نوع المصروف</div>
<div class="cell" data-label="English">Expense Type</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [REExpenseType](/modules/realestate/REExpenseType.md) 
</div>
</div>

<div class="row searchable" id="expenses.feeType">
<div class="cell" data-label="Property">expenses.feeType</div>
<div class="cell" data-label="Column">feeType_id</div>
<div class="cell" data-label="Arabic"> نوع رسم استثمار عقاري</div>
<div class="cell" data-label="English"> Real Estate Fee Type</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [REFeeType](/modules/realestate/REFeeType.md) 
</div>
</div>

<div class="row searchable" id="expenses.financialPaper">
<div class="cell" data-label="Property">expenses.financialPaper</div>
<div class="cell" data-label="Column">financialPaper_id</div>
<div class="cell" data-label="Arabic">الورقة التجارية</div>
<div class="cell" data-label="English">Commercial Paper</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FinancialPaper](/modules/accounting-banks/FinancialPaper.md) 
</div>
</div>

<div class="row searchable" id="expenses.id">
<div class="cell" data-label="Property">expenses.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="expenses.installmentCode">
<div class="cell" data-label="Property">expenses.installmentCode</div>
<div class="cell" data-label="Column">installmentCode</div>
<div class="cell" data-label="Arabic">كود القسط</div>
<div class="cell" data-label="English">Installment Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="expenses.installmentDescription">
<div class="cell" data-label="Property">expenses.installmentDescription</div>
<div class="cell" data-label="Column">installmentDescription</div>
<div class="cell" data-label="Arabic">وصف القسط</div>
<div class="cell" data-label="English">Installment Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="expenses.installmentDoc">
<div class="cell" data-label="Property">expenses.installmentDoc</div>
<div class="cell gen-ref-column" data-label="Column">installmentDocActualCode,  installmentDocCode,  installmentDocEntityType,  installmentDocId</div>
<div class="cell" data-label="Arabic">مستند القسط</div>
<div class="cell" data-label="English">Installment doc</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="expenses.lineNumber">
<div class="cell" data-label="Property">expenses.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="expenses.mergeValue1">
<div class="cell" data-label="Property">expenses.mergeValue1</div>
<div class="cell" data-label="Column">mergeValue1</div>
<div class="cell" data-label="Arabic">قيمة مدمجة 1</div>
<div class="cell" data-label="English">Merge Value 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expenses.mergeValue2">
<div class="cell" data-label="Property">expenses.mergeValue2</div>
<div class="cell" data-label="Column">mergeValue2</div>
<div class="cell" data-label="Arabic">قيمة مدمجة 2</div>
<div class="cell" data-label="English">Merge Value 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expenses.mergeValue3">
<div class="cell" data-label="Property">expenses.mergeValue3</div>
<div class="cell" data-label="Column">mergeValue3</div>
<div class="cell" data-label="Arabic">قيمة مدمجة 3</div>
<div class="cell" data-label="English">Merge Value 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expenses.mergeValue4">
<div class="cell" data-label="Property">expenses.mergeValue4</div>
<div class="cell" data-label="Column">mergeValue4</div>
<div class="cell" data-label="Arabic">قيمة مدمجة 4</div>
<div class="cell" data-label="English">Merge Value 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expenses.mergeValue5">
<div class="cell" data-label="Property">expenses.mergeValue5</div>
<div class="cell" data-label="Column">mergeValue5</div>
<div class="cell" data-label="Arabic">قيمة مدمجة 5</div>
<div class="cell" data-label="English">Merge Value 5</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expenses.n1">
<div class="cell" data-label="Property">expenses.n1</div>
<div class="cell" data-label="Column">n1</div>
<div class="cell" data-label="Arabic">رقم 1</div>
<div class="cell" data-label="English">Number 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expenses.n2">
<div class="cell" data-label="Property">expenses.n2</div>
<div class="cell" data-label="Column">n2</div>
<div class="cell" data-label="Arabic">رقم 2</div>
<div class="cell" data-label="English">Number 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expenses.n3">
<div class="cell" data-label="Property">expenses.n3</div>
<div class="cell" data-label="Column">n3</div>
<div class="cell" data-label="Arabic">رقم 3</div>
<div class="cell" data-label="English">Number 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expenses.netValue">
<div class="cell" data-label="Property">expenses.netValue</div>
<div class="cell" data-label="Column">netValue</div>
<div class="cell" data-label="Arabic">الصافي</div>
<div class="cell" data-label="English">Net value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expenses.paidExpenseForNextYear">
<div class="cell" data-label="Property">expenses.paidExpenseForNextYear</div>
<div class="cell" data-label="Column">paidExpenseForNextYear</div>
<div class="cell" data-label="Arabic">قيمة المصروف المدفوع مقدم للعام التالي</div>
<div class="cell" data-label="English">Paid Expense For Next Year</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expenses.paidValue">
<div class="cell" data-label="Property">expenses.paidValue</div>
<div class="cell" data-label="Column">paidValue</div>
<div class="cell" data-label="Arabic">القيمة المدفوعة</div>
<div class="cell" data-label="English">Paid Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expenses.payed">
<div class="cell" data-label="Property">expenses.payed</div>
<div class="cell" data-label="Column">payed</div>
<div class="cell" data-label="Arabic">تم الدفع</div>
<div class="cell" data-label="English">payed</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="expenses.penaletyValue">
<div class="cell" data-label="Property">expenses.penaletyValue</div>
<div class="cell" data-label="Column">penaletyValue</div>
<div class="cell" data-label="Arabic">قيمة الغرامة</div>
<div class="cell" data-label="English">Penalety value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expenses.penaltyPercentage">
<div class="cell" data-label="Property">expenses.penaltyPercentage</div>
<div class="cell" data-label="Column">penaltyPercentage</div>
<div class="cell" data-label="Arabic">من الراتب | %</div>
<div class="cell" data-label="English">From Salary|percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expenses.ref1">
<div class="cell" data-label="Property">expenses.ref1</div>
<div class="cell gen-ref-column" data-label="Column">ref1ActualCode,  ref1Code,  ref1EntityType,  ref1Id</div>
<div class="cell" data-label="Arabic">مرجع 1</div>
<div class="cell" data-label="English">Reference 1</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="expenses.ref2">
<div class="cell" data-label="Property">expenses.ref2</div>
<div class="cell gen-ref-column" data-label="Column">ref2ActualCode,  ref2Code,  ref2EntityType,  ref2Id</div>
<div class="cell" data-label="Arabic">مرجع 2</div>
<div class="cell" data-label="English">Reference 2</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="expenses.ref3">
<div class="cell" data-label="Property">expenses.ref3</div>
<div class="cell gen-ref-column" data-label="Column">ref3ActualCode,  ref3Code,  ref3EntityType,  ref3Id</div>
<div class="cell" data-label="Arabic">مرجع 3</div>
<div class="cell" data-label="English">Reference 3</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="expenses.refpCreationInfo.amount">
<div class="cell" data-label="Property">expenses.refpCreationInfo.amount</div>
<div class="cell" data-label="Column">fpAmount</div>
<div class="cell" data-label="Arabic"> المبلغ</div>
<div class="cell" data-label="English"> Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expenses.refpCreationInfo.bankAccount">
<div class="cell" data-label="Property">expenses.refpCreationInfo.bankAccount</div>
<div class="cell" data-label="Column">fpBankAccount_id</div>
<div class="cell" data-label="Arabic">رقم حساب البنك</div>
<div class="cell" data-label="English">Bank account</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [BankAccount](/modules/accounting-banks/BankAccount.md) 
</div>
</div>

<div class="row searchable" id="expenses.refpCreationInfo.beneficiary">
<div class="cell" data-label="Property">expenses.refpCreationInfo.beneficiary</div>
<div class="cell" data-label="Column">fpBeneficiary</div>
<div class="cell" data-label="Arabic">المستفيد</div>
<div class="cell" data-label="English">Beneficiary</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="expenses.refpCreationInfo.chequeNumber">
<div class="cell" data-label="Property">expenses.refpCreationInfo.chequeNumber</div>
<div class="cell" data-label="Column">fpChequeNumber</div>
<div class="cell" data-label="Arabic">رقم الشيك</div>
<div class="cell" data-label="English">Cheque Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="expenses.refpCreationInfo.concernedParty">
<div class="cell" data-label="Property">expenses.refpCreationInfo.concernedParty</div>
<div class="cell gen-ref-column" data-label="Column">fpConcernedPartyActualCode,  fpConcernedPartyCode,  fpConcernedPartyEntityType,  fpConcernedPartyId</div>
<div class="cell" data-label="Arabic">الجهة المختصة</div>
<div class="cell" data-label="English">Concerned Party</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="expenses.refpCreationInfo.currency">
<div class="cell" data-label="Property">expenses.refpCreationInfo.currency</div>
<div class="cell" data-label="Column">fpCurrency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/modules/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="expenses.refpCreationInfo.customerBank">
<div class="cell" data-label="Property">expenses.refpCreationInfo.customerBank</div>
<div class="cell" data-label="Column">fpCustomerBank_id</div>
<div class="cell" data-label="Arabic">بنك العميل</div>
<div class="cell" data-label="English">Customer Bank</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Bank](/modules/accounting-banks/Bank.md) 
</div>
</div>

<div class="row searchable" id="expenses.refpCreationInfo.dueDate">
<div class="cell" data-label="Property">expenses.refpCreationInfo.dueDate</div>
<div class="cell" data-label="Column">fpDueDate</div>
<div class="cell" data-label="Arabic">تاريخ الاستحقاق</div>
<div class="cell" data-label="English">Due Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="expenses.refpCreationInfo.fpbook">
<div class="cell" data-label="Property">expenses.refpCreationInfo.fpbook</div>
<div class="cell gen-ref-column" data-label="Column">fpFpbookActualCode,  fpFpbookCode,  fpFpbookEntityType,  fpFpbookId</div>
<div class="cell" data-label="Arabic"> الدفتر</div>
<div class="cell" data-label="English"> Book</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="expenses.refpCreationInfo.issuer">
<div class="cell" data-label="Property">expenses.refpCreationInfo.issuer</div>
<div class="cell" data-label="Column">fpIssuer</div>
<div class="cell" data-label="Arabic">الساحب</div>
<div class="cell" data-label="English">Issuer</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="expenses.refpCreationInfo.name1">
<div class="cell" data-label="Property">expenses.refpCreationInfo.name1</div>
<div class="cell" data-label="Column">fpName1</div>
<div class="cell" data-label="Arabic">الاسم العربي</div>
<div class="cell" data-label="English">Name1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="expenses.refpCreationInfo.name2">
<div class="cell" data-label="Property">expenses.refpCreationInfo.name2</div>
<div class="cell" data-label="Column">fpName2</div>
<div class="cell" data-label="Arabic">الاسم الإنجليزي</div>
<div class="cell" data-label="English">Name2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="expenses.refpCreationInfo.paperCode">
<div class="cell" data-label="Property">expenses.refpCreationInfo.paperCode</div>
<div class="cell" data-label="Column">fpPaperCode</div>
<div class="cell" data-label="Arabic">كود الورقة</div>
<div class="cell" data-label="English">Paper Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="expenses.refpCreationInfo.paperType">
<div class="cell" data-label="Property">expenses.refpCreationInfo.paperType</div>
<div class="cell" data-label="Column">fpPaperType</div>
<div class="cell" data-label="Arabic">نوع الورقة</div>
<div class="cell" data-label="English">Paper Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="expenses.refpCreationInfo.signedBy">
<div class="cell" data-label="Property">expenses.refpCreationInfo.signedBy</div>
<div class="cell" data-label="Column">fpSignedBy</div>
<div class="cell" data-label="Arabic">اسم الموقع</div>
<div class="cell" data-label="English">Signed By</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="expenses.refpCreationInfo.subsidiary">
<div class="cell" data-label="Property">expenses.refpCreationInfo.subsidiary</div>
<div class="cell gen-ref-column" data-label="Column">fpSubsidiaryActualCode,  fpSubsidiaryCode,  fpSubsidiaryEntityType,  fpSubsidiaryId</div>
<div class="cell" data-label="Arabic">الذمة</div>
<div class="cell" data-label="English">Subsidiary</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="expenses.refpCreationInfo.value.amount">
<div class="cell" data-label="Property">expenses.refpCreationInfo.value.amount</div>
<div class="cell" data-label="Column">fpValueAmount</div>
<div class="cell" data-label="Arabic"> المبلغ</div>
<div class="cell" data-label="English"> Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expenses.refpCreationInfo.value.currency">
<div class="cell" data-label="Property">expenses.refpCreationInfo.value.currency</div>
<div class="cell" data-label="Column">fpValueCurrency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/modules/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="expenses.remainingCollectVal">
<div class="cell" data-label="Property">expenses.remainingCollectVal</div>
<div class="cell" data-label="Column">remainingCollectVal</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expenses.remainingFPVal">
<div class="cell" data-label="Property">expenses.remainingFPVal</div>
<div class="cell" data-label="Column">remainingFPVal</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expenses.remainingValue">
<div class="cell" data-label="Property">expenses.remainingValue</div>
<div class="cell" data-label="Column">remainingValue</div>
<div class="cell" data-label="Arabic">المتبقي</div>
<div class="cell" data-label="English">Remaining Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expenses.remarks">
<div class="cell" data-label="Property">expenses.remarks</div>
<div class="cell" data-label="Column">remarks</div>
<div class="cell" data-label="Arabic">ملاحظات</div>
<div class="cell" data-label="English">Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="expenses.requestedCollectValue">
<div class="cell" data-label="Property">expenses.requestedCollectValue</div>
<div class="cell" data-label="Column">requestedCollectValue</div>
<div class="cell" data-label="Arabic">مطلوب تحصيله</div>
<div class="cell" data-label="English">Requested Collect Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expenses.selectedLine">
<div class="cell" data-label="Property">expenses.selectedLine</div>
<div class="cell" data-label="Column">selectedLine</div>
<div class="cell" data-label="Arabic">اختيار</div>
<div class="cell" data-label="English">Select</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="expenses.systemPaidValue">
<div class="cell" data-label="Property">expenses.systemPaidValue</div>
<div class="cell" data-label="Column">systemPaidValue</div>
<div class="cell" data-label="Arabic">المحصل نظاميا</div>
<div class="cell" data-label="English">System paid value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expenses.tax1.afterValue">
<div class="cell" data-label="Property">expenses.tax1.afterValue</div>
<div class="cell" data-label="Column">tax1AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | الصافي</div>
<div class="cell" data-label="English">Tax | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expenses.tax1.maxNormalPercent">
<div class="cell" data-label="Property">expenses.tax1.maxNormalPercent</div>
<div class="cell" data-label="Column">tax1MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | %</div>
<div class="cell" data-label="English">Item Tax | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expenses.tax1.percentage">
<div class="cell" data-label="Property">expenses.tax1.percentage</div>
<div class="cell" data-label="Column">tax1Percentage</div>
<div class="cell" data-label="Arabic">قيمة إضافية 1</div>
<div class="cell" data-label="English">Tax 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expenses.tax1.value">
<div class="cell" data-label="Property">expenses.tax1.value</div>
<div class="cell" data-label="Column">tax1Value</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | القيمة</div>
<div class="cell" data-label="English">Tax value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expenses.tax2.afterValue">
<div class="cell" data-label="Property">expenses.tax2.afterValue</div>
<div class="cell" data-label="Column">tax2AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | الصافي</div>
<div class="cell" data-label="English">Tax 2 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expenses.tax2.maxNormalPercent">
<div class="cell" data-label="Property">expenses.tax2.maxNormalPercent</div>
<div class="cell" data-label="Column">tax2MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | %</div>
<div class="cell" data-label="English">Tax 2 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expenses.tax2.percentage">
<div class="cell" data-label="Property">expenses.tax2.percentage</div>
<div class="cell" data-label="Column">tax2Percentage</div>
<div class="cell" data-label="Arabic">قيمة إضافية 2</div>
<div class="cell" data-label="English">Tax 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expenses.tax2.value">
<div class="cell" data-label="Property">expenses.tax2.value</div>
<div class="cell" data-label="Column">tax2Value</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | القيمة</div>
<div class="cell" data-label="English">Tax 2 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expenses.text1">
<div class="cell" data-label="Property">expenses.text1</div>
<div class="cell" data-label="Column">text1</div>
<div class="cell" data-label="Arabic">نــــص 1</div>
<div class="cell" data-label="English">Text 1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="expenses.text2">
<div class="cell" data-label="Property">expenses.text2</div>
<div class="cell" data-label="Column">text2</div>
<div class="cell" data-label="Arabic">نـــــص 2</div>
<div class="cell" data-label="English">Text 2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="expenses.text3">
<div class="cell" data-label="Property">expenses.text3</div>
<div class="cell" data-label="Column">text3</div>
<div class="cell" data-label="Arabic">نص 3</div>
<div class="cell" data-label="English">text3</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="expenses.toDate">
<div class="cell" data-label="Property">expenses.toDate</div>
<div class="cell" data-label="Column">toDate</div>
<div class="cell" data-label="Arabic">إلى تاريخ</div>
<div class="cell" data-label="English">To Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="expenses.totalAfterTaxes">
<div class="cell" data-label="Property">expenses.totalAfterTaxes</div>
<div class="cell" data-label="Column">totalAfterTaxes</div>
<div class="cell" data-label="Arabic">الصافي بعد الضريبة</div>
<div class="cell" data-label="English">Total After Taxes</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expenses.type">
<div class="cell" data-label="Property">expenses.type</div>
<div class="cell" data-label="Column">type</div>
<div class="cell" data-label="Arabic">النوع</div>
<div class="cell" data-label="English">Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>


</div>
</div>

<div id='termLines' title='termLines' class='searchable'>

## termLines (الينود القياسيه - Standard Terms)
**Table Name:** RECancelConStandardTermLine, **Join Column:** rECancelContract_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="termLines.date1">
<div class="cell" data-label="Property">termLines.date1</div>
<div class="cell" data-label="Column">date1</div>
<div class="cell" data-label="Arabic">تـــاريخ 1</div>
<div class="cell" data-label="English">Date 1</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="termLines.date2">
<div class="cell" data-label="Property">termLines.date2</div>
<div class="cell" data-label="Column">date2</div>
<div class="cell" data-label="Arabic">تـــاريخ 2</div>
<div class="cell" data-label="English">Date 2</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="termLines.date3">
<div class="cell" data-label="Property">termLines.date3</div>
<div class="cell" data-label="Column">date3</div>
<div class="cell" data-label="Arabic">تاريخ 3</div>
<div class="cell" data-label="English">Date3</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="termLines.date4">
<div class="cell" data-label="Property">termLines.date4</div>
<div class="cell" data-label="Column">date4</div>
<div class="cell" data-label="Arabic">تاريخ 4</div>
<div class="cell" data-label="English">Date4</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="termLines.date5">
<div class="cell" data-label="Property">termLines.date5</div>
<div class="cell" data-label="Column">date5</div>
<div class="cell" data-label="Arabic">تاريخ 5</div>
<div class="cell" data-label="English">Date5</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="termLines.extensionFines">
<div class="cell" data-label="Property">termLines.extensionFines</div>
<div class="cell" data-label="Column">extensionFines</div>
<div class="cell" data-label="Arabic">مجموع غرامات التمديد</div>
<div class="cell" data-label="English">Total Extension Fine</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="termLines.fulfillmentDate">
<div class="cell" data-label="Property">termLines.fulfillmentDate</div>
<div class="cell" data-label="Column">fulfillmentDate</div>
<div class="cell" data-label="Arabic">تاريخ التحقق</div>
<div class="cell" data-label="English">Fulfillment Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="termLines.fulfillmentDoc">
<div class="cell" data-label="Property">termLines.fulfillmentDoc</div>
<div class="cell" data-label="Column">fulfillmentDoc_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [StandardTermFulfillment](/modules/basic/StandardTermFulfillment.md) 
</div>
</div>

<div class="row searchable" id="termLines.id">
<div class="cell" data-label="Property">termLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="termLines.lineNumber">
<div class="cell" data-label="Property">termLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="termLines.n1">
<div class="cell" data-label="Property">termLines.n1</div>
<div class="cell" data-label="Column">n1</div>
<div class="cell" data-label="Arabic">رقم 1</div>
<div class="cell" data-label="English">Number 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="termLines.n2">
<div class="cell" data-label="Property">termLines.n2</div>
<div class="cell" data-label="Column">n2</div>
<div class="cell" data-label="Arabic">رقم 2</div>
<div class="cell" data-label="English">Number 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="termLines.n3">
<div class="cell" data-label="Property">termLines.n3</div>
<div class="cell" data-label="Column">n3</div>
<div class="cell" data-label="Arabic">رقم 3</div>
<div class="cell" data-label="English">Number 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="termLines.n4">
<div class="cell" data-label="Property">termLines.n4</div>
<div class="cell" data-label="Column">n4</div>
<div class="cell" data-label="Arabic">رقم 4</div>
<div class="cell" data-label="English">Number 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="termLines.n5">
<div class="cell" data-label="Property">termLines.n5</div>
<div class="cell" data-label="Column">n5</div>
<div class="cell" data-label="Arabic">رقم 5</div>
<div class="cell" data-label="English">Number 5</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="termLines.ref1">
<div class="cell" data-label="Property">termLines.ref1</div>
<div class="cell gen-ref-column" data-label="Column">ref1ActualCode,  ref1Code,  ref1EntityType,  ref1Id</div>
<div class="cell" data-label="Arabic">مرجع 1</div>
<div class="cell" data-label="English">Reference 1</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="termLines.ref2">
<div class="cell" data-label="Property">termLines.ref2</div>
<div class="cell gen-ref-column" data-label="Column">ref2ActualCode,  ref2Code,  ref2EntityType,  ref2Id</div>
<div class="cell" data-label="Arabic">مرجع 2</div>
<div class="cell" data-label="English">Reference 2</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="termLines.ref3">
<div class="cell" data-label="Property">termLines.ref3</div>
<div class="cell gen-ref-column" data-label="Column">ref3ActualCode,  ref3Code,  ref3EntityType,  ref3Id</div>
<div class="cell" data-label="Arabic">مرجع 3</div>
<div class="cell" data-label="English">Reference 3</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="termLines.ref4">
<div class="cell" data-label="Property">termLines.ref4</div>
<div class="cell gen-ref-column" data-label="Column">ref4ActualCode,  ref4Code,  ref4EntityType,  ref4Id</div>
<div class="cell" data-label="Arabic">مرجع 4</div>
<div class="cell" data-label="English">Reference 4</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="termLines.ref5">
<div class="cell" data-label="Property">termLines.ref5</div>
<div class="cell gen-ref-column" data-label="Column">ref5ActualCode,  ref5Code,  ref5EntityType,  ref5Id</div>
<div class="cell" data-label="Arabic">مرجع 5</div>
<div class="cell" data-label="English">Reference 5</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="termLines.remarks">
<div class="cell" data-label="Property">termLines.remarks</div>
<div class="cell" data-label="Column">remarks</div>
<div class="cell" data-label="Arabic">ملاحظات</div>
<div class="cell" data-label="English">Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="termLines.standardTerm">
<div class="cell" data-label="Property">termLines.standardTerm</div>
<div class="cell" data-label="Column">standardTerm_id</div>
<div class="cell" data-label="Arabic">البند القياسي</div>
<div class="cell" data-label="English">Standard Term</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SalesStandardTerm](/modules/basic/SalesStandardTerm.md) 
</div>
</div>

<div class="row searchable" id="termLines.termExtendedEndDate">
<div class="cell" data-label="Property">termLines.termExtendedEndDate</div>
<div class="cell" data-label="Column">termExtendedEndDate</div>
<div class="cell" data-label="Arabic">تاريخ نهاية عمل البند بعد التمديد</div>
<div class="cell" data-label="English">Standard Term End Date After Extension</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="termLines.termPlannedEndDate">
<div class="cell" data-label="Property">termLines.termPlannedEndDate</div>
<div class="cell" data-label="Column">termPlannedEndDate</div>
<div class="cell" data-label="Arabic">تاريخ نهاية عمل البند المخططة</div>
<div class="cell" data-label="English">Standard Term Planned End Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="termLines.text1">
<div class="cell" data-label="Property">termLines.text1</div>
<div class="cell" data-label="Column">text1</div>
<div class="cell" data-label="Arabic">نــــص 1</div>
<div class="cell" data-label="English">Text 1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="termLines.text2">
<div class="cell" data-label="Property">termLines.text2</div>
<div class="cell" data-label="Column">text2</div>
<div class="cell" data-label="Arabic">نـــــص 2</div>
<div class="cell" data-label="English">Text 2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="termLines.text3">
<div class="cell" data-label="Property">termLines.text3</div>
<div class="cell" data-label="Column">text3</div>
<div class="cell" data-label="Arabic">نص 3</div>
<div class="cell" data-label="English">text3</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="termLines.text4">
<div class="cell" data-label="Property">termLines.text4</div>
<div class="cell" data-label="Column">text4</div>
<div class="cell" data-label="Arabic">نص 4</div>
<div class="cell" data-label="English">text4</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="termLines.text5">
<div class="cell" data-label="Property">termLines.text5</div>
<div class="cell" data-label="Column">text5</div>
<div class="cell" data-label="Arabic">نص 5</div>
<div class="cell" data-label="English">text5</div>
<div class="cell" data-label="Type">Text</div>

</div>


</div>
</div>

