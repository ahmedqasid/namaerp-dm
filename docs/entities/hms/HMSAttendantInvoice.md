# HMSAttendantInvoice
**Arabic:** فاتورة مرافق - فواتير المرافقين
**English:** Attendant Invoice - Attendant Invoices

<ContentFilter/>


<div class='searchable'>
<a href='#overheadItems'>overheadItems (HMSAttendantInvoiceOverheadItem) </a>
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
</div><div class="row searchable" id="accomData.bed">
<div class="cell" data-label="Property">accomData.bed</div>
<div class="cell" data-label="Column">bed_id</div>
<div class="cell" data-label="Arabic"> سرير إسكان</div>
<div class="cell" data-label="English"> HO Bed</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [HMSBed](/entities/hms/HMSBed.md) 
</div>
</div>

<div class="row searchable" id="accomData.building">
<div class="cell" data-label="Property">accomData.building</div>
<div class="cell" data-label="Column">building_id</div>
<div class="cell" data-label="Arabic">المبنى</div>
<div class="cell" data-label="English">Building</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [HMSBuilding](/entities/hms/HMSBuilding.md) 
</div>
</div>

<div class="row searchable" id="accomData.floor">
<div class="cell" data-label="Property">accomData.floor</div>
<div class="cell" data-label="Column">floor_id</div>
<div class="cell" data-label="Arabic">الطابق</div>
<div class="cell" data-label="English">Floor</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [HMSFloor](/entities/hms/HMSFloor.md) 
</div>
</div>

<div class="row searchable" id="accomData.hmsSection">
<div class="cell" data-label="Property">accomData.hmsSection</div>
<div class="cell" data-label="Column">hmsSection_id</div>
<div class="cell" data-label="Arabic">القسم الطبى</div>
<div class="cell" data-label="English">Section</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [HMSSection](/entities/hms/HMSSection.md) 
</div>
</div>

<div class="row searchable" id="accomData.room">
<div class="cell" data-label="Property">accomData.room</div>
<div class="cell" data-label="Column">room_id</div>
<div class="cell" data-label="Arabic">الغرفة</div>
<div class="cell" data-label="English">Room</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [HMSRoom](/entities/hms/HMSRoom.md) 
</div>
</div>

<div class="row searchable" id="allowChangingMainPrices">
<div class="cell" data-label="Property">allowChangingMainPrices</div>
<div class="cell" data-label="Column">allowChangingMainPrices</div>
<div class="cell" data-label="Arabic">السماح بتعديل الأسعار الرئيسية</div>
<div class="cell" data-label="English">Allow Changing Main Prices</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="allowChangingServicesPrices">
<div class="cell" data-label="Property">allowChangingServicesPrices</div>
<div class="cell" data-label="Column">allowChangingServicesPrices</div>
<div class="cell" data-label="Arabic">السماح بتعديل أسعار الخدمات الطبية</div>
<div class="cell" data-label="English">Allow Changing Services Prices</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="allowChangingSuppliesPrices">
<div class="cell" data-label="Property">allowChangingSuppliesPrices</div>
<div class="cell" data-label="Column">allowChangingSuppliesPrices</div>
<div class="cell" data-label="Arabic">السماح بتعديل أسعار المستلزمات الطبية</div>
<div class="cell" data-label="English">Allow Changing Supplies Prices</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="analysisSet">
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

<div class="row searchable" id="attachment1">
<div class="cell" data-label="Property">attachment1</div>
<div class="cell" data-label="Column">attachment1_id</div>
<div class="cell" data-label="Arabic">مرفق 1</div>
<div class="cell" data-label="English">Attachment 1</div>
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

<div class="row searchable" id="attendantsCount">
<div class="cell" data-label="Property">attendantsCount</div>
<div class="cell" data-label="Column">attendantsCount</div>
<div class="cell" data-label="Arabic">عدد المرافقين</div>
<div class="cell" data-label="English">Attendants Count</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="companyEndurancePercent">
<div class="cell" data-label="Property">companyEndurancePercent</div>
<div class="cell" data-label="Column">companyEndurancePercent</div>
<div class="cell" data-label="Arabic">نسبة تحمل الشركة</div>
<div class="cell" data-label="English">Company Endurance Percent</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="doctor">
<div class="cell" data-label="Property">doctor</div>
<div class="cell" data-label="Column">doctor_id</div>
<div class="cell" data-label="Arabic">الطبيب</div>
<div class="cell" data-label="English">Doctor</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [HMSDoctor](/entities/hms/HMSDoctor.md) 
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

<div class="row searchable" id="generatedIssueDoc">
<div class="cell" data-label="Property">generatedIssueDoc</div>
<div class="cell gen-ref-column" data-label="Column">generatedIssueDocActualCode,  generatedIssueDocCode,  generatedIssueDocEntityType,  generatedIssueDocId</div>
<div class="cell" data-label="Arabic">مستند الصرف المنشأ</div>
<div class="cell" data-label="English">Generated Issue Document</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="generationType">
<div class="cell" data-label="Property">generationType</div>
<div class="cell" data-label="Column">generationType</div>
<div class="cell" data-label="Arabic">نوع الإنشاء</div>
<div class="cell" data-label="English">Generation Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="hmsDocCategory">
<div class="cell" data-label="Property">hmsDocCategory</div>
<div class="cell" data-label="Column">hmsDocCategory_id</div>
<div class="cell" data-label="Arabic">تصنيف طبى للمستند</div>
<div class="cell" data-label="English">Medical Document Category</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [HMSDocumentCategory](/entities/hms/HMSDocumentCategory.md) 
</div>
</div>

<div class="row searchable" id="id">
<div class="cell" data-label="Property">id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="inDate">
<div class="cell" data-label="Property">inDate</div>
<div class="cell" data-label="Column">inDate</div>
<div class="cell" data-label="Arabic">تاريخ الدخول</div>
<div class="cell" data-label="English">In Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="inTime">
<div class="cell" data-label="Property">inTime</div>
<div class="cell" data-label="Column">inTime</div>
<div class="cell" data-label="Arabic">وقت الدخول</div>
<div class="cell" data-label="English">In Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="indexInParent">
<div class="cell" data-label="Property">indexInParent</div>
<div class="cell" data-label="Column">indexInParent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="insuranceClass">
<div class="cell" data-label="Property">insuranceClass</div>
<div class="cell" data-label="Column">insuranceClass_id</div>
<div class="cell" data-label="Arabic">فئة التأمين</div>
<div class="cell" data-label="English">Insurance Class</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [HMSInsuranceClass](/entities/hms/HMSInsuranceClass.md) 
</div>
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

<div class="row searchable" id="medicalInsuranceCompany">
<div class="cell" data-label="Property">medicalInsuranceCompany</div>
<div class="cell" data-label="Column">medicalInsuranceCompany_id</div>
<div class="cell" data-label="Arabic">شركة التأمين الطبى</div>
<div class="cell" data-label="English">Medical Insurance Company</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [HMSInsuranceCompany](/entities/hms/HMSInsuranceCompany.md) 
</div>
</div>

<div class="row searchable" id="medicalSpecialty">
<div class="cell" data-label="Property">medicalSpecialty</div>
<div class="cell" data-label="Column">medicalSpecialty_id</div>
<div class="cell" data-label="Arabic">التخصص الطبي</div>
<div class="cell" data-label="English">Medical Specialty</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [HMSMedicalSpecialty](/entities/hms/HMSMedicalSpecialty.md) 
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

 [CSHOpenShift](/entities/accounting-cashier/CSHOpenShift.md) 
</div>
</div>

<div class="row searchable" id="outDate">
<div class="cell" data-label="Property">outDate</div>
<div class="cell" data-label="Column">outDate</div>
<div class="cell" data-label="Arabic">تاريخ الخروج</div>
<div class="cell" data-label="English">Out Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="outTime">
<div class="cell" data-label="Property">outTime</div>
<div class="cell" data-label="Column">outTime</div>
<div class="cell" data-label="Arabic">وقت الخروج</div>
<div class="cell" data-label="English">Out Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="parentCode">
<div class="cell" data-label="Property">parentCode</div>
<div class="cell" data-label="Column">parentCode</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="patient">
<div class="cell" data-label="Property">patient</div>
<div class="cell" data-label="Column">patient_id</div>
<div class="cell" data-label="Arabic">المريض</div>
<div class="cell" data-label="English">Patient</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [HMSPatient](/entities/hms/HMSPatient.md) 
</div>
</div>

<div class="row searchable" id="patientAdmission">
<div class="cell" data-label="Property">patientAdmission</div>
<div class="cell" data-label="Column">patientAdmission_id</div>
<div class="cell" data-label="Arabic">إستمارة دخول المريض</div>
<div class="cell" data-label="English">Patient Admission</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [HMSPatientAdmission](/entities/hms/HMSPatientAdmission.md) 
</div>
</div>

<div class="row searchable" id="patientEndurancePercent">
<div class="cell" data-label="Property">patientEndurancePercent</div>
<div class="cell" data-label="Column">patientEndurancePercent</div>
<div class="cell" data-label="Arabic">نسبة تحمل المريض</div>
<div class="cell" data-label="English">Patient Endurance Percent</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="price.additionalHourPrice">
<div class="cell" data-label="Property">price.additionalHourPrice</div>
<div class="cell" data-label="Column">additionalHourPrice</div>
<div class="cell" data-label="Arabic">سعر الساعة الزيادة عن عدد ساعات العملية</div>
<div class="cell" data-label="English">Additional Hour Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.additionalHours">
<div class="cell" data-label="Property">price.additionalHours</div>
<div class="cell" data-label="Column">additionalHours</div>
<div class="cell" data-label="Arabic">عدد الساعات الزيادة</div>
<div class="cell" data-label="English">Number Of Additional Hours</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.costPercentage">
<div class="cell" data-label="Property">price.costPercentage</div>
<div class="cell" data-label="Column">costPercentage</div>
<div class="cell" data-label="Arabic">% التكلفة</div>
<div class="cell" data-label="English">Cost Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.costValue">
<div class="cell" data-label="Property">price.costValue</div>
<div class="cell" data-label="Column">costValue</div>
<div class="cell" data-label="Arabic">قيمة التكلفة</div>
<div class="cell" data-label="English">Cost Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.currency">
<div class="cell" data-label="Property">price.currency</div>
<div class="cell" data-label="Column">currency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/entities/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="price.currencyRate">
<div class="cell" data-label="Property">price.currencyRate</div>
<div class="cell" data-label="Column">currencyRate</div>
<div class="cell" data-label="Arabic">المعدل</div>
<div class="cell" data-label="English">Currency Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount1.maxValue">
<div class="cell" data-label="Property">price.discount1.maxValue</div>
<div class="cell" data-label="Column">dis1MaxValue</div>
<div class="cell" data-label="Arabic">خصم 1 | أقصى قيمة</div>
<div class="cell" data-label="English">Discount 1 | Max Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount1.percentage">
<div class="cell" data-label="Property">price.discount1.percentage</div>
<div class="cell" data-label="Column">dis1Percentage</div>
<div class="cell" data-label="Arabic">خصم 1 | %</div>
<div class="cell" data-label="English">Discount 1 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount1.value">
<div class="cell" data-label="Property">price.discount1.value</div>
<div class="cell" data-label="Column">dis1Value</div>
<div class="cell" data-label="Arabic">خصم 1 | قيمة</div>
<div class="cell" data-label="English">Discount 1 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount2.maxValue">
<div class="cell" data-label="Property">price.discount2.maxValue</div>
<div class="cell" data-label="Column">dis2MaxValue</div>
<div class="cell" data-label="Arabic">خصم 2 | أقصى قيمة</div>
<div class="cell" data-label="English">Discount 2 | Max Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount2.percentage">
<div class="cell" data-label="Property">price.discount2.percentage</div>
<div class="cell" data-label="Column">dis2Percentage</div>
<div class="cell" data-label="Arabic">خصم 2 | %</div>
<div class="cell" data-label="English">Discount 2 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount2.value">
<div class="cell" data-label="Property">price.discount2.value</div>
<div class="cell" data-label="Column">dis2Value</div>
<div class="cell" data-label="Arabic">خصم 2 | قيمة</div>
<div class="cell" data-label="English">Discount 2 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.insurancMxValFromAdmision">
<div class="cell" data-label="Property">price.insurancMxValFromAdmision</div>
<div class="cell" data-label="Column">insurancMxValFromAdmision</div>
<div class="cell" data-label="Arabic">أقصى قيمة للتأمين من سند إستمارة الدخول</div>
<div class="cell" data-label="English">Insurance Max Value From Admission</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.insurancMxValFromApproval">
<div class="cell" data-label="Property">price.insurancMxValFromApproval</div>
<div class="cell" data-label="Column">insurancMxValFromApproval</div>
<div class="cell" data-label="Arabic">أقصى قيمة للتأمين من سند الموافقة</div>
<div class="cell" data-label="English">Insurance Max Value From Approval</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.insurancePercentage">
<div class="cell" data-label="Property">price.insurancePercentage</div>
<div class="cell" data-label="Column">insurancePercentage</div>
<div class="cell" data-label="Arabic">التأمين | %</div>
<div class="cell" data-label="English">Insurance | Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.insuranceTax1">
<div class="cell" data-label="Property">price.insuranceTax1</div>
<div class="cell" data-label="Column">insuranceTax1</div>
<div class="cell" data-label="Arabic">التأمين | قيمة ضريبة 1</div>
<div class="cell" data-label="English">Insurance Tax1 Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.insuranceTax2">
<div class="cell" data-label="Property">price.insuranceTax2</div>
<div class="cell" data-label="Column">insuranceTax2</div>
<div class="cell" data-label="Arabic">التأمين | قيمة ضريبة 2</div>
<div class="cell" data-label="English">Insurance Tax1 Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.insuranceValue">
<div class="cell" data-label="Property">price.insuranceValue</div>
<div class="cell" data-label="Column">insuranceValue</div>
<div class="cell" data-label="Arabic">التأمين | قيمة التأمين</div>
<div class="cell" data-label="English">Insurance Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.netValue">
<div class="cell" data-label="Property">price.netValue</div>
<div class="cell" data-label="Column">netValue</div>
<div class="cell" data-label="Arabic">الصافي</div>
<div class="cell" data-label="English">Net value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.patientPercentage">
<div class="cell" data-label="Property">price.patientPercentage</div>
<div class="cell" data-label="Column">patientPercentage</div>
<div class="cell" data-label="Arabic">المريض | %</div>
<div class="cell" data-label="English">Patient | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.patientTax1">
<div class="cell" data-label="Property">price.patientTax1</div>
<div class="cell" data-label="Column">patientTax1</div>
<div class="cell" data-label="Arabic">المريض | قيمة ضريبة 1</div>
<div class="cell" data-label="English">Patient Tax1 Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.patientTax2">
<div class="cell" data-label="Property">price.patientTax2</div>
<div class="cell" data-label="Column">patientTax2</div>
<div class="cell" data-label="Arabic">المريض | قيمة ضريبة 2</div>
<div class="cell" data-label="English">Patient Tax2 Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.patientValue">
<div class="cell" data-label="Property">price.patientValue</div>
<div class="cell" data-label="Column">patientValue</div>
<div class="cell" data-label="Arabic">المريض | قيمة</div>
<div class="cell" data-label="English">Patient | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.price">
<div class="cell" data-label="Property">price.price</div>
<div class="cell" data-label="Column">price</div>
<div class="cell" data-label="Arabic">الأسعار | السعر الكلي</div>
<div class="cell" data-label="English">Prices | total price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.priceAfterTax">
<div class="cell" data-label="Property">price.priceAfterTax</div>
<div class="cell" data-label="Column">priceAfterTax</div>
<div class="cell" data-label="Arabic">السعر بعد الضريبة</div>
<div class="cell" data-label="English">Price After Tax</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.priceBeforeTax">
<div class="cell" data-label="Property">price.priceBeforeTax</div>
<div class="cell" data-label="Column">priceBeforeTax</div>
<div class="cell" data-label="Arabic">السعر قبل الضريبة</div>
<div class="cell" data-label="English">Price Before Tax</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.standardHours">
<div class="cell" data-label="Property">price.standardHours</div>
<div class="cell" data-label="Column">standardHours</div>
<div class="cell" data-label="Arabic">عدد الساعات القياسي</div>
<div class="cell" data-label="English">Standard Hours Number</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="price.standardSurgeryPrice">
<div class="cell" data-label="Property">price.standardSurgeryPrice</div>
<div class="cell" data-label="Column">standardSurgeryPrice</div>
<div class="cell" data-label="Arabic">سعر العملية القياسي</div>
<div class="cell" data-label="English">Standard Surgery Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.subsidiary1Percentage">
<div class="cell" data-label="Property">price.subsidiary1Percentage</div>
<div class="cell" data-label="Column">subsidiary1Percentage</div>
<div class="cell" data-label="Arabic">تكلفة الذمة 1 | نسبة</div>
<div class="cell" data-label="English">Subsidiary 1 Cost | Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.subsidiary1Value">
<div class="cell" data-label="Property">price.subsidiary1Value</div>
<div class="cell" data-label="Column">subsidiary1Value</div>
<div class="cell" data-label="Arabic">تكلفة الذمة 1 | قيمة</div>
<div class="cell" data-label="English">Subsidiary 1 Cost | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.subsidiary2Percentage">
<div class="cell" data-label="Property">price.subsidiary2Percentage</div>
<div class="cell" data-label="Column">subsidiary2Percentage</div>
<div class="cell" data-label="Arabic">تكلفة الذمة 2 | نسبة</div>
<div class="cell" data-label="English">Subsidiary 2 Cost | Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.subsidiary2Value">
<div class="cell" data-label="Property">price.subsidiary2Value</div>
<div class="cell" data-label="Column">subsidiary2Value</div>
<div class="cell" data-label="Arabic">تكلفة الذمة 2 | قيمة</div>
<div class="cell" data-label="English">Subsidiary 2 Cost | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.subsidiaryPercentage">
<div class="cell" data-label="Property">price.subsidiaryPercentage</div>
<div class="cell" data-label="Column">subsidiaryPercentage</div>
<div class="cell" data-label="Arabic">تكلفة الذمة | نسبة</div>
<div class="cell" data-label="English">Subsidiary Cost | Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.subsidiaryValue">
<div class="cell" data-label="Property">price.subsidiaryValue</div>
<div class="cell" data-label="Column">subsidiaryValue</div>
<div class="cell" data-label="Arabic">تكلفة الذمة | قيمة</div>
<div class="cell" data-label="English">Subsidiary Cost | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.tax1.maxValue">
<div class="cell" data-label="Property">price.tax1.maxValue</div>
<div class="cell" data-label="Column">tax1MaxValue</div>
<div class="cell" data-label="Arabic">أقصي قيمة</div>
<div class="cell" data-label="English">Maximum Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.tax1.percentage">
<div class="cell" data-label="Property">price.tax1.percentage</div>
<div class="cell" data-label="Column">tax1Percentage</div>
<div class="cell" data-label="Arabic">قيمة إضافية 1</div>
<div class="cell" data-label="English">Tax 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.tax1.value">
<div class="cell" data-label="Property">price.tax1.value</div>
<div class="cell" data-label="Column">tax1Value</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | القيمة</div>
<div class="cell" data-label="English">Tax value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.tax2.maxValue">
<div class="cell" data-label="Property">price.tax2.maxValue</div>
<div class="cell" data-label="Column">tax2MaxValue</div>
<div class="cell" data-label="Arabic">أقصي قيمة</div>
<div class="cell" data-label="English">Maximum Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.tax2.percentage">
<div class="cell" data-label="Property">price.tax2.percentage</div>
<div class="cell" data-label="Column">tax2Percentage</div>
<div class="cell" data-label="Arabic">قيمة إضافية 2</div>
<div class="cell" data-label="English">Tax 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.tax2.value">
<div class="cell" data-label="Property">price.tax2.value</div>
<div class="cell" data-label="Column">tax2Value</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | القيمة</div>
<div class="cell" data-label="English">Tax 2 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.totalInsuranceDueAmount">
<div class="cell" data-label="Property">price.totalInsuranceDueAmount</div>
<div class="cell" data-label="Column">totalInsuranceDueAmount</div>
<div class="cell" data-label="Arabic">القيمة المستحقة من التأمين</div>
<div class="cell" data-label="English">Total Insurance Due Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.totalPatientDueAmount">
<div class="cell" data-label="Property">price.totalPatientDueAmount</div>
<div class="cell" data-label="Column">totalPatientDueAmount</div>
<div class="cell" data-label="Arabic">القيمة المستحقة من المريض</div>
<div class="cell" data-label="English">Total Patient Due Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.unitPrice">
<div class="cell" data-label="Property">price.unitPrice</div>
<div class="cell" data-label="Column">unitPrice</div>
<div class="cell" data-label="Arabic">سعر الوحدة</div>
<div class="cell" data-label="English">Prices | Unit price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="priceClassifier1">
<div class="cell" data-label="Property">priceClassifier1</div>
<div class="cell" data-label="Column">priceClassifier1_id</div>
<div class="cell" data-label="Arabic">محدد سعر 1</div>
<div class="cell" data-label="English">Price Classifier 1</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SalesPriceClassifier1](/entities/basic/SalesPriceClassifier1.md) 
</div>
</div>

<div class="row searchable" id="priceClassifier2">
<div class="cell" data-label="Property">priceClassifier2</div>
<div class="cell" data-label="Column">priceClassifier2_id</div>
<div class="cell" data-label="Arabic">محدد سعر 2</div>
<div class="cell" data-label="English">Price Classifier 2</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SalesPriceClassifier2](/entities/basic/SalesPriceClassifier2.md) 
</div>
</div>

<div class="row searchable" id="priceClassifier3">
<div class="cell" data-label="Property">priceClassifier3</div>
<div class="cell" data-label="Column">priceClassifier3_id</div>
<div class="cell" data-label="Arabic">محدد سعر 3</div>
<div class="cell" data-label="English">Price Classifier 3</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SalesPriceClassifier3](/entities/basic/SalesPriceClassifier3.md) 
</div>
</div>

<div class="row searchable" id="priceClassifier4">
<div class="cell" data-label="Property">priceClassifier4</div>
<div class="cell" data-label="Column">priceClassifier4_id</div>
<div class="cell" data-label="Arabic">محدد سعر 4</div>
<div class="cell" data-label="English">Price Classifier 4</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SalesPriceClassifier4](/entities/basic/SalesPriceClassifier4.md) 
</div>
</div>

<div class="row searchable" id="priceClassifier5">
<div class="cell" data-label="Property">priceClassifier5</div>
<div class="cell" data-label="Column">priceClassifier5_id</div>
<div class="cell" data-label="Arabic">محدد سعر 5</div>
<div class="cell" data-label="English">Price Classifier 5</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SalesPriceClassifier5](/entities/basic/SalesPriceClassifier5.md) 
</div>
</div>

<div class="row searchable" id="pricesTotal.discount1Total">
<div class="cell" data-label="Property">pricesTotal.discount1Total</div>
<div class="cell" data-label="Column">discount1Total</div>
<div class="cell" data-label="Arabic">إجمالي الخصم</div>
<div class="cell" data-label="English">Discount Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="pricesTotal.discount2Total">
<div class="cell" data-label="Property">pricesTotal.discount2Total</div>
<div class="cell" data-label="Column">discount2Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 2</div>
<div class="cell" data-label="English">Discount 1 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="pricesTotal.insuranceDueAmountTotal">
<div class="cell" data-label="Property">pricesTotal.insuranceDueAmountTotal</div>
<div class="cell" data-label="Column">insuranceDueAmountTotal</div>
<div class="cell" data-label="Arabic">إجمالى القيمة المستحقة من التأمين</div>
<div class="cell" data-label="English">Insurance Due Amount Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="pricesTotal.insuranceTax1Total">
<div class="cell" data-label="Property">pricesTotal.insuranceTax1Total</div>
<div class="cell" data-label="Column">insuranceTax1Total</div>
<div class="cell" data-label="Arabic">إجمالى ضريبة 1 للشركة</div>
<div class="cell" data-label="English">Insurance Tax 1 Total Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="pricesTotal.insuranceTax2Total">
<div class="cell" data-label="Property">pricesTotal.insuranceTax2Total</div>
<div class="cell" data-label="Column">insuranceTax2Total</div>
<div class="cell" data-label="Arabic">إجمالى ضريبة 2 للشركة</div>
<div class="cell" data-label="English">Insurance Tax 2 Total Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="pricesTotal.insuranceTotal">
<div class="cell" data-label="Property">pricesTotal.insuranceTotal</div>
<div class="cell" data-label="Column">insuranceTotal</div>
<div class="cell" data-label="Arabic">إجمالى الشركة</div>
<div class="cell" data-label="English">Insurance Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="pricesTotal.patientDueAmountTotal">
<div class="cell" data-label="Property">pricesTotal.patientDueAmountTotal</div>
<div class="cell" data-label="Column">patientDueAmountTotal</div>
<div class="cell" data-label="Arabic">إجمالى القيمة المستحقة من المريض</div>
<div class="cell" data-label="English">Patient Due Amount Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="pricesTotal.patientTax1Total">
<div class="cell" data-label="Property">pricesTotal.patientTax1Total</div>
<div class="cell" data-label="Column">patientTax1Total</div>
<div class="cell" data-label="Arabic">إجمالى ضريبة 1 للمريض</div>
<div class="cell" data-label="English">Patient Tax 1 Total Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="pricesTotal.patientTax2Total">
<div class="cell" data-label="Property">pricesTotal.patientTax2Total</div>
<div class="cell" data-label="Column">patientTax2Total</div>
<div class="cell" data-label="Arabic">إجمالى ضريبة 2 للمريض</div>
<div class="cell" data-label="English">Patient Tax 2 Total Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="pricesTotal.patientTotal">
<div class="cell" data-label="Property">pricesTotal.patientTotal</div>
<div class="cell" data-label="Column">patientTotal</div>
<div class="cell" data-label="Arabic">إجمالى المريض</div>
<div class="cell" data-label="English">Patient Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="pricesTotal.tax1Total">
<div class="cell" data-label="Property">pricesTotal.tax1Total</div>
<div class="cell" data-label="Column">tax1Total</div>
<div class="cell" data-label="Arabic">إجمالي ضريبة 1</div>
<div class="cell" data-label="English">Tax 1 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="pricesTotal.tax2Total">
<div class="cell" data-label="Property">pricesTotal.tax2Total</div>
<div class="cell" data-label="Column">tax2Total</div>
<div class="cell" data-label="Arabic">إجمالي ضريبة 2</div>
<div class="cell" data-label="English">Tax 2 Total</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="servicesTotal.discount1Total">
<div class="cell" data-label="Property">servicesTotal.discount1Total</div>
<div class="cell" data-label="Column">servDiscount1Total</div>
<div class="cell" data-label="Arabic">إجمالي الخصم</div>
<div class="cell" data-label="English">Discount Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="servicesTotal.discount2Total">
<div class="cell" data-label="Property">servicesTotal.discount2Total</div>
<div class="cell" data-label="Column">servDiscount2Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 2</div>
<div class="cell" data-label="English">Discount 1 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="servicesTotal.insuranceDueAmountTotal">
<div class="cell" data-label="Property">servicesTotal.insuranceDueAmountTotal</div>
<div class="cell" data-label="Column">servInsuranceDueAmountTotal</div>
<div class="cell" data-label="Arabic">إجمالى القيمة المستحقة من التأمين</div>
<div class="cell" data-label="English">Insurance Due Amount Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="servicesTotal.insuranceTax1Total">
<div class="cell" data-label="Property">servicesTotal.insuranceTax1Total</div>
<div class="cell" data-label="Column">servInsuranceTax1Total</div>
<div class="cell" data-label="Arabic">إجمالى ضريبة 1 للشركة</div>
<div class="cell" data-label="English">Insurance Tax 1 Total Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="servicesTotal.insuranceTax2Total">
<div class="cell" data-label="Property">servicesTotal.insuranceTax2Total</div>
<div class="cell" data-label="Column">servInsuranceTax2Total</div>
<div class="cell" data-label="Arabic">إجمالى ضريبة 2 للشركة</div>
<div class="cell" data-label="English">Insurance Tax 2 Total Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="servicesTotal.insuranceTotal">
<div class="cell" data-label="Property">servicesTotal.insuranceTotal</div>
<div class="cell" data-label="Column">servInsuranceTotal</div>
<div class="cell" data-label="Arabic">إجمالى الشركة</div>
<div class="cell" data-label="English">Insurance Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="servicesTotal.patientDueAmountTotal">
<div class="cell" data-label="Property">servicesTotal.patientDueAmountTotal</div>
<div class="cell" data-label="Column">servPatientDueAmountTotal</div>
<div class="cell" data-label="Arabic">إجمالى القيمة المستحقة من المريض</div>
<div class="cell" data-label="English">Patient Due Amount Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="servicesTotal.patientTax1Total">
<div class="cell" data-label="Property">servicesTotal.patientTax1Total</div>
<div class="cell" data-label="Column">servPatientTax1Total</div>
<div class="cell" data-label="Arabic">إجمالى ضريبة 1 للمريض</div>
<div class="cell" data-label="English">Patient Tax 1 Total Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="servicesTotal.patientTax2Total">
<div class="cell" data-label="Property">servicesTotal.patientTax2Total</div>
<div class="cell" data-label="Column">servPatientTax2Total</div>
<div class="cell" data-label="Arabic">إجمالى ضريبة 2 للمريض</div>
<div class="cell" data-label="English">Patient Tax 2 Total Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="servicesTotal.patientTotal">
<div class="cell" data-label="Property">servicesTotal.patientTotal</div>
<div class="cell" data-label="Column">servPatientTotal</div>
<div class="cell" data-label="Arabic">إجمالى المريض</div>
<div class="cell" data-label="English">Patient Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="servicesTotal.tax1Total">
<div class="cell" data-label="Property">servicesTotal.tax1Total</div>
<div class="cell" data-label="Column">servTax1Total</div>
<div class="cell" data-label="Arabic">إجمالي ضريبة مبيعات 1</div>
<div class="cell" data-label="English">Tax 1 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="servicesTotal.tax2Total">
<div class="cell" data-label="Property">servicesTotal.tax2Total</div>
<div class="cell" data-label="Column">servTax2Total</div>
<div class="cell" data-label="Arabic">إجمالي ضريبة مبيعات 2</div>
<div class="cell" data-label="English">Tax 2 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="subsidiary">
<div class="cell" data-label="Property">subsidiary</div>
<div class="cell gen-ref-column" data-label="Column">subsidiaryActualCode,  subsidiaryCode,  subsidiaryEntityType,  subsidiaryId</div>
<div class="cell" data-label="Arabic">الذمة</div>
<div class="cell" data-label="English">Subsidiary</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="subsidiary1">
<div class="cell" data-label="Property">subsidiary1</div>
<div class="cell gen-ref-column" data-label="Column">subsidiary1ActualCode,  subsidiary1Code,  subsidiary1EntityType,  subsidiary1Id</div>
<div class="cell" data-label="Arabic">ذمة 1</div>
<div class="cell" data-label="English">Subsidiary 1</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="subsidiary2">
<div class="cell" data-label="Property">subsidiary2</div>
<div class="cell gen-ref-column" data-label="Column">subsidiary2ActualCode,  subsidiary2Code,  subsidiary2EntityType,  subsidiary2Id</div>
<div class="cell" data-label="Arabic">ذمة 2</div>
<div class="cell" data-label="English">Subsidiary 2</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="suppliesTotal.discount1Total">
<div class="cell" data-label="Property">suppliesTotal.discount1Total</div>
<div class="cell" data-label="Column">supDiscount1Total</div>
<div class="cell" data-label="Arabic">إجمالي الخصم</div>
<div class="cell" data-label="English">Discount Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="suppliesTotal.discount2Total">
<div class="cell" data-label="Property">suppliesTotal.discount2Total</div>
<div class="cell" data-label="Column">supDiscount2Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 2</div>
<div class="cell" data-label="English">Discount 1 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="suppliesTotal.insuranceDueAmountTotal">
<div class="cell" data-label="Property">suppliesTotal.insuranceDueAmountTotal</div>
<div class="cell" data-label="Column">supInsuranceDueAmountTotal</div>
<div class="cell" data-label="Arabic">إجمالى القيمة المستحقة من التأمين</div>
<div class="cell" data-label="English">Insurance Due Amount Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="suppliesTotal.insuranceTax1Total">
<div class="cell" data-label="Property">suppliesTotal.insuranceTax1Total</div>
<div class="cell" data-label="Column">supInsuranceTax1Total</div>
<div class="cell" data-label="Arabic">إجمالى ضريبة 1 للشركة</div>
<div class="cell" data-label="English">Insurance Tax 1 Total Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="suppliesTotal.insuranceTax2Total">
<div class="cell" data-label="Property">suppliesTotal.insuranceTax2Total</div>
<div class="cell" data-label="Column">supInsuranceTax2Total</div>
<div class="cell" data-label="Arabic">إجمالى ضريبة 2 للشركة</div>
<div class="cell" data-label="English">Insurance Tax 2 Total Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="suppliesTotal.insuranceTotal">
<div class="cell" data-label="Property">suppliesTotal.insuranceTotal</div>
<div class="cell" data-label="Column">supInsuranceTotal</div>
<div class="cell" data-label="Arabic">إجمالى الشركة</div>
<div class="cell" data-label="English">Insurance Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="suppliesTotal.patientDueAmountTotal">
<div class="cell" data-label="Property">suppliesTotal.patientDueAmountTotal</div>
<div class="cell" data-label="Column">supPatientDueAmountTotal</div>
<div class="cell" data-label="Arabic">إجمالى القيمة المستحقة من المريض</div>
<div class="cell" data-label="English">Patient Due Amount Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="suppliesTotal.patientTax1Total">
<div class="cell" data-label="Property">suppliesTotal.patientTax1Total</div>
<div class="cell" data-label="Column">supPatientTax1Total</div>
<div class="cell" data-label="Arabic">إجمالى ضريبة 1 للمريض</div>
<div class="cell" data-label="English">Patient Tax 1 Total Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="suppliesTotal.patientTax2Total">
<div class="cell" data-label="Property">suppliesTotal.patientTax2Total</div>
<div class="cell" data-label="Column">supPatientTax2Total</div>
<div class="cell" data-label="Arabic">إجمالى ضريبة 2 للمريض</div>
<div class="cell" data-label="English">Patient Tax 2 Total Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="suppliesTotal.patientTotal">
<div class="cell" data-label="Property">suppliesTotal.patientTotal</div>
<div class="cell" data-label="Column">supPatientTotal</div>
<div class="cell" data-label="Arabic">إجمالى المريض</div>
<div class="cell" data-label="English">Patient Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="suppliesTotal.tax1Total">
<div class="cell" data-label="Property">suppliesTotal.tax1Total</div>
<div class="cell" data-label="Column">supTax1Total</div>
<div class="cell" data-label="Arabic">إجمالي ضريبة مبيعات 1</div>
<div class="cell" data-label="English">Tax 1 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="suppliesTotal.tax2Total">
<div class="cell" data-label="Property">suppliesTotal.tax2Total</div>
<div class="cell" data-label="Column">supTax2Total</div>
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

<div class="row searchable" id="totalOverheadActualValue">
<div class="cell" data-label="Property">totalOverheadActualValue</div>
<div class="cell" data-label="Column">totalOverheadActualValue</div>
<div class="cell" data-label="Arabic">إجمالي القيمة الفعلية للتكاليف الغير مباشرة</div>
<div class="cell" data-label="English">Total Overhead Actual Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalOverheadEstimatedValue">
<div class="cell" data-label="Property">totalOverheadEstimatedValue</div>
<div class="cell" data-label="Column">totalOverheadEstimatedValue</div>
<div class="cell" data-label="Arabic">إجمالي القيمة التقديرية للتكاليف الغير مباشرة</div>
<div class="cell" data-label="English">Total Overhead Estimated Value</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="warehouse">
<div class="cell" data-label="Property">warehouse</div>
<div class="cell" data-label="Column">warehouse_id</div>
<div class="cell" data-label="Arabic">المخزن</div>
<div class="cell" data-label="English">Warehouse</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/entities/supplychain/Warehouse.md) 
</div>
</div>


</div>

<div id='overheadItems' title='overheadItems' class='searchable'>

## overheadItems (بنود تكلفة طبية غير مباشرة - Overhead Items)
**Table Name:** HMSAttendantInvoiceOverheadItem, **Join Column:** hMSAttendantInvoice_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="overheadItems.actualValue">
<div class="cell" data-label="Property">overheadItems.actualValue</div>
<div class="cell" data-label="Column">actualValue</div>
<div class="cell" data-label="Arabic">القيمة الفعلية</div>
<div class="cell" data-label="English">Actual value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="overheadItems.calculationDoc">
<div class="cell" data-label="Property">overheadItems.calculationDoc</div>
<div class="cell gen-ref-column" data-label="Column">calculationDocActualCode,  calculationDocCode,  calculationDocEntityType,  calculationDocId</div>
<div class="cell" data-label="Arabic">سند حساب التكلفة الطبية الغير مباشرة</div>
<div class="cell" data-label="English">Actual Overhead Calculation Document</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="overheadItems.estimatedValue">
<div class="cell" data-label="Property">overheadItems.estimatedValue</div>
<div class="cell" data-label="Column">estimatedValue</div>
<div class="cell" data-label="Arabic">القيمة المقدرة</div>
<div class="cell" data-label="English">Estimated Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="overheadItems.id">
<div class="cell" data-label="Property">overheadItems.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="overheadItems.lineNumber">
<div class="cell" data-label="Property">overheadItems.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="overheadItems.manualEstimatedValue">
<div class="cell" data-label="Property">overheadItems.manualEstimatedValue</div>
<div class="cell" data-label="Column">manualEstimatedValue</div>
<div class="cell" data-label="Arabic">القيمة التقديرية يدوي</div>
<div class="cell" data-label="English">Manual Estimated Value</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="overheadItems.overheadItem">
<div class="cell" data-label="Property">overheadItems.overheadItem</div>
<div class="cell" data-label="Column">overheadItem_id</div>
<div class="cell" data-label="Arabic">بند تكلفة طبية غير مباشرة</div>
<div class="cell" data-label="English">Overhead Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [HMSOverheadItem](/entities/hms/HMSOverheadItem.md) 
</div>
</div>


</div>

