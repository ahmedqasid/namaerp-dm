# TRTour
**Arabic:** رحلة سياحية - رحلات سياحية
**English:** Tour - Tours

<ContentFilter/>


<div class='searchable'>
<a href='#accommodationDetails'>accommodationDetails (TRTourAccommodationLine) </a> , <a href='#flights'>flights (TRTourFlightLine) </a> , <a href='#services'>services (TRTourServiceLine) </a>
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
</div><div class="row searchable" id="agent">
<div class="cell" data-label="Property">agent</div>
<div class="cell" data-label="Column">agent_id</div>
<div class="cell" data-label="Arabic">الوكيل</div>
<div class="cell" data-label="English">Agent</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Customer](/entities/basic/Customer.md) 
</div>
</div>

<div class="row searchable" id="agentName">
<div class="cell" data-label="Property">agentName</div>
<div class="cell" data-label="Column">agentName</div>
<div class="cell" data-label="Arabic">اسم العميل</div>
<div class="cell" data-label="English">Agent Name</div>
<div class="cell" data-label="Type">Text</div>

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

<div class="row searchable" id="arrivalAirport">
<div class="cell" data-label="Property">arrivalAirport</div>
<div class="cell" data-label="Column">arrivalAirport_id</div>
<div class="cell" data-label="Arabic">مطار الوصول</div>
<div class="cell" data-label="English">Arrival Airport</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [TRCity](/entities/travel/TRCity.md) 
</div>
</div>

<div class="row searchable" id="arrivalDate">
<div class="cell" data-label="Property">arrivalDate</div>
<div class="cell" data-label="Column">arrivalDate</div>
<div class="cell" data-label="Arabic">تاريخ الوصول</div>
<div class="cell" data-label="English">Arrival Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="arrivalFlight">
<div class="cell" data-label="Property">arrivalFlight</div>
<div class="cell" data-label="Column">arrivalFlight</div>
<div class="cell" data-label="Arabic">رحلة الوصول الجوية</div>
<div class="cell" data-label="English">Arrival Flight</div>
<div class="cell" data-label="Type">Text</div>

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

<div class="row searchable" id="careOf">
<div class="cell" data-label="Property">careOf</div>
<div class="cell" data-label="Column">careOf_id</div>
<div class="cell" data-label="Arabic">عناية</div>
<div class="cell" data-label="English">Care Of</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/entities/basic/Employee.md) 
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

<div class="row searchable" id="dbl">
<div class="cell" data-label="Property">dbl</div>
<div class="cell" data-label="Column">dbl</div>
<div class="cell" data-label="Arabic">DBL</div>
<div class="cell" data-label="English">DBL</div>
<div class="cell" data-label="Type">Integer</div>

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

<div class="row searchable" id="departureAirport">
<div class="cell" data-label="Property">departureAirport</div>
<div class="cell" data-label="Column">departureAirport_id</div>
<div class="cell" data-label="Arabic">مطار القيام</div>
<div class="cell" data-label="English">Departure Airport</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [TRCity](/entities/travel/TRCity.md) 
</div>
</div>

<div class="row searchable" id="departureDate">
<div class="cell" data-label="Property">departureDate</div>
<div class="cell" data-label="Column">departureDate</div>
<div class="cell" data-label="Arabic">تاريخ القيام</div>
<div class="cell" data-label="English">Departure date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="departureFlight">
<div class="cell" data-label="Property">departureFlight</div>
<div class="cell" data-label="Column">departureFlight</div>
<div class="cell" data-label="Arabic">رحلة القيام الجوية</div>
<div class="cell" data-label="English">Departure Flight</div>
<div class="cell" data-label="Type">Text</div>

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

<div class="row searchable" id="flightArrivalDate">
<div class="cell" data-label="Property">flightArrivalDate</div>
<div class="cell" data-label="Column">flightArrivalDate</div>
<div class="cell" data-label="Arabic">تاريخ رحلة الوصول</div>
<div class="cell" data-label="English">Flight Arrival Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="flightArrivalTime">
<div class="cell" data-label="Property">flightArrivalTime</div>
<div class="cell" data-label="Column">flightArrivalTime</div>
<div class="cell" data-label="Arabic">وقت رحلة الوصول</div>
<div class="cell" data-label="English">Flight Arrival Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="flightDepartureDate">
<div class="cell" data-label="Property">flightDepartureDate</div>
<div class="cell" data-label="Column">flightDepartureDate</div>
<div class="cell" data-label="Arabic">تاريخ رحلة القيام</div>
<div class="cell" data-label="English">Flight Departure Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="flightDepartureTime">
<div class="cell" data-label="Property">flightDepartureTime</div>
<div class="cell" data-label="Column">flightDepartureTime</div>
<div class="cell" data-label="Arabic">وقت رحلة القيام</div>
<div class="cell" data-label="English">Flight Departure Time</div>
<div class="cell" data-label="Type">Time</div>

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

<div class="row searchable" id="groupName">
<div class="cell" data-label="Property">groupName</div>
<div class="cell" data-label="Column">groupName</div>
<div class="cell" data-label="Arabic">اسم المجموعة</div>
<div class="cell" data-label="English">Group Name</div>
<div class="cell" data-label="Type">Text</div>

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

<div class="row searchable" id="nationality">
<div class="cell" data-label="Property">nationality</div>
<div class="cell" data-label="Column">nationality_id</div>
<div class="cell" data-label="Arabic">الجنسية</div>
<div class="cell" data-label="English">Nationality</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Nationality](/entities/basic/Nationality.md) 
</div>
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

<div class="row searchable" id="pax">
<div class="cell" data-label="Property">pax</div>
<div class="cell" data-label="Column">pax</div>
<div class="cell" data-label="Arabic">PAX</div>
<div class="cell" data-label="English">PAX</div>
<div class="cell" data-label="Type">Integer</div>

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

<div class="row searchable" id="sgl">
<div class="cell" data-label="Property">sgl</div>
<div class="cell" data-label="Column">sgl</div>
<div class="cell" data-label="Arabic">SGL</div>
<div class="cell" data-label="English">SGL</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="status">
<div class="cell" data-label="Property">status</div>
<div class="cell" data-label="Column">status</div>
<div class="cell" data-label="Arabic">الحالة</div>
<div class="cell" data-label="English">Status</div>
<div class="cell" data-label="Type">Enum</div>

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

<div class="row searchable" id="tourGuide">
<div class="cell" data-label="Property">tourGuide</div>
<div class="cell" data-label="Column">tourGuide_id</div>
<div class="cell" data-label="Arabic">المرشد السياحي</div>
<div class="cell" data-label="English">Tour Guide</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [TRTourGuide](/entities/travel/TRTourGuide.md) 
</div>
</div>

<div class="row searchable" id="tourLeader">
<div class="cell" data-label="Property">tourLeader</div>
<div class="cell" data-label="Column">tourLeader_id</div>
<div class="cell" data-label="Arabic">قائد الرحلة</div>
<div class="cell" data-label="English">Tour Leader</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/entities/basic/Employee.md) 
</div>
</div>

<div class="row searchable" id="tourOperator">
<div class="cell" data-label="Property">tourOperator</div>
<div class="cell" data-label="Column">tourOperator_id</div>
<div class="cell" data-label="Arabic">منظم الرحلة</div>
<div class="cell" data-label="English">Tour Operator</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/entities/basic/Employee.md) 
</div>
</div>

<div class="row searchable" id="tourProgram">
<div class="cell" data-label="Property">tourProgram</div>
<div class="cell" data-label="Column">tourProgram_id</div>
<div class="cell" data-label="Arabic">برنامج الرحلة</div>
<div class="cell" data-label="English">Tour Program</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [TRTourProgram](/entities/travel/TRTourProgram.md) 
</div>
</div>

<div class="row searchable" id="tpl">
<div class="cell" data-label="Property">tpl</div>
<div class="cell" data-label="Column">tpl</div>
<div class="cell" data-label="Arabic">TPL</div>
<div class="cell" data-label="English">TPL</div>
<div class="cell" data-label="Type">Integer</div>

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

<div class="row searchable" id="visa">
<div class="cell" data-label="Property">visa</div>
<div class="cell" data-label="Column">visa</div>
<div class="cell" data-label="Arabic">تأشيرة</div>
<div class="cell" data-label="English">VISA</div>
<div class="cell" data-label="Type">Integer</div>

</div>


</div>

<div id='accommodationDetails' title='accommodationDetails' class='searchable'>

## accommodationDetails (تفاصيل الإقامة - Accommodation Details)
**Table Name:** TRTourAccommodationLine, **Join Column:** tRTour_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="accommodationDetails.b1">
<div class="cell" data-label="Property">accommodationDetails.b1</div>
<div class="cell" data-label="Column">b1</div>
<div class="cell" data-label="Arabic">Boolean 1</div>
<div class="cell" data-label="English">Boolean 1</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="accommodationDetails.b2">
<div class="cell" data-label="Property">accommodationDetails.b2</div>
<div class="cell" data-label="Column">b2</div>
<div class="cell" data-label="Arabic">Boolean 2</div>
<div class="cell" data-label="English">Boolean 2</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="accommodationDetails.b3">
<div class="cell" data-label="Property">accommodationDetails.b3</div>
<div class="cell" data-label="Column">b3</div>
<div class="cell" data-label="Arabic">Boolean 3</div>
<div class="cell" data-label="English">Boolean 3</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="accommodationDetails.b4">
<div class="cell" data-label="Property">accommodationDetails.b4</div>
<div class="cell" data-label="Column">b4</div>
<div class="cell" data-label="Arabic">Boolean 4</div>
<div class="cell" data-label="English">Boolean 4</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="accommodationDetails.b5">
<div class="cell" data-label="Property">accommodationDetails.b5</div>
<div class="cell" data-label="Column">b5</div>
<div class="cell" data-label="Arabic">Boolean 5</div>
<div class="cell" data-label="English">Boolean 5</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="accommodationDetails.checkIn">
<div class="cell" data-label="Property">accommodationDetails.checkIn</div>
<div class="cell" data-label="Column">checkIn</div>
<div class="cell" data-label="Arabic">إدخال</div>
<div class="cell" data-label="English">Check In</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="accommodationDetails.checkOut">
<div class="cell" data-label="Property">accommodationDetails.checkOut</div>
<div class="cell" data-label="Column">checkOut</div>
<div class="cell" data-label="Arabic">إخراج</div>
<div class="cell" data-label="English">Check Out</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="accommodationDetails.city">
<div class="cell" data-label="Property">accommodationDetails.city</div>
<div class="cell" data-label="Column">city_id</div>
<div class="cell" data-label="Arabic">المدينة</div>
<div class="cell" data-label="English">City</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [TRCity](/entities/travel/TRCity.md) 
</div>
</div>

<div class="row searchable" id="accommodationDetails.country">
<div class="cell" data-label="Property">accommodationDetails.country</div>
<div class="cell" data-label="Column">country_id</div>
<div class="cell" data-label="Arabic">الدولة</div>
<div class="cell" data-label="English">Country</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [TRCountry](/entities/travel/TRCountry.md) 
</div>
</div>

<div class="row searchable" id="accommodationDetails.date1">
<div class="cell" data-label="Property">accommodationDetails.date1</div>
<div class="cell" data-label="Column">date1</div>
<div class="cell" data-label="Arabic">تـــاريخ 1</div>
<div class="cell" data-label="English">Date 1</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="accommodationDetails.date2">
<div class="cell" data-label="Property">accommodationDetails.date2</div>
<div class="cell" data-label="Column">date2</div>
<div class="cell" data-label="Arabic">تـــاريخ 2</div>
<div class="cell" data-label="English">Date 2</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="accommodationDetails.date3">
<div class="cell" data-label="Property">accommodationDetails.date3</div>
<div class="cell" data-label="Column">date3</div>
<div class="cell" data-label="Arabic">تاريخ 3</div>
<div class="cell" data-label="English">Date3</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="accommodationDetails.date4">
<div class="cell" data-label="Property">accommodationDetails.date4</div>
<div class="cell" data-label="Column">date4</div>
<div class="cell" data-label="Arabic">تاريخ 4</div>
<div class="cell" data-label="English">Date4</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="accommodationDetails.date5">
<div class="cell" data-label="Property">accommodationDetails.date5</div>
<div class="cell" data-label="Column">date5</div>
<div class="cell" data-label="Arabic">تاريخ 5</div>
<div class="cell" data-label="English">Date5</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="accommodationDetails.dbl">
<div class="cell" data-label="Property">accommodationDetails.dbl</div>
<div class="cell" data-label="Column">dbl</div>
<div class="cell" data-label="Arabic">DBL</div>
<div class="cell" data-label="English">DBL</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="accommodationDetails.hotel">
<div class="cell" data-label="Property">accommodationDetails.hotel</div>
<div class="cell" data-label="Column">hotel_id</div>
<div class="cell" data-label="Arabic">فندق</div>
<div class="cell" data-label="English">Hotel</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [TRHotel](/entities/travel/TRHotel.md) 
</div>
</div>

<div class="row searchable" id="accommodationDetails.hotelPurchaseOrder">
<div class="cell" data-label="Property">accommodationDetails.hotelPurchaseOrder</div>
<div class="cell" data-label="Column">hotelPurchaseOrder_id</div>
<div class="cell" data-label="Arabic">أمر شراء فندق</div>
<div class="cell" data-label="English">Hotel Purchase Order</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [TRPurchaseOrder](/entities/travel/TRPurchaseOrder.md) 
</div>
</div>

<div class="row searchable" id="accommodationDetails.hotelVoucher">
<div class="cell" data-label="Property">accommodationDetails.hotelVoucher</div>
<div class="cell" data-label="Column">hotelVoucher_id</div>
<div class="cell" data-label="Arabic">قسيمة الفندق</div>
<div class="cell" data-label="English">Hotel Voucher</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [TRHotelVoucher](/entities/travel/TRHotelVoucher.md) 
</div>
</div>

<div class="row searchable" id="accommodationDetails.id">
<div class="cell" data-label="Property">accommodationDetails.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="accommodationDetails.lineNumber">
<div class="cell" data-label="Property">accommodationDetails.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="accommodationDetails.meals">
<div class="cell" data-label="Property">accommodationDetails.meals</div>
<div class="cell" data-label="Column">meals</div>
<div class="cell" data-label="Arabic">وجبات</div>
<div class="cell" data-label="English">Meals</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="accommodationDetails.n1">
<div class="cell" data-label="Property">accommodationDetails.n1</div>
<div class="cell" data-label="Column">n1</div>
<div class="cell" data-label="Arabic">رقم 1</div>
<div class="cell" data-label="English">Number 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="accommodationDetails.n2">
<div class="cell" data-label="Property">accommodationDetails.n2</div>
<div class="cell" data-label="Column">n2</div>
<div class="cell" data-label="Arabic">رقم 2</div>
<div class="cell" data-label="English">Number 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="accommodationDetails.n3">
<div class="cell" data-label="Property">accommodationDetails.n3</div>
<div class="cell" data-label="Column">n3</div>
<div class="cell" data-label="Arabic">رقم 3</div>
<div class="cell" data-label="English">Number 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="accommodationDetails.n4">
<div class="cell" data-label="Property">accommodationDetails.n4</div>
<div class="cell" data-label="Column">n4</div>
<div class="cell" data-label="Arabic">رقم 4</div>
<div class="cell" data-label="English">Number 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="accommodationDetails.n5">
<div class="cell" data-label="Property">accommodationDetails.n5</div>
<div class="cell" data-label="Column">n5</div>
<div class="cell" data-label="Arabic">رقم 5</div>
<div class="cell" data-label="English">Number 5</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="accommodationDetails.nights">
<div class="cell" data-label="Property">accommodationDetails.nights</div>
<div class="cell" data-label="Column">nights</div>
<div class="cell" data-label="Arabic">عدد الليالي</div>
<div class="cell" data-label="English">Nights</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="accommodationDetails.pax">
<div class="cell" data-label="Property">accommodationDetails.pax</div>
<div class="cell" data-label="Column">pax</div>
<div class="cell" data-label="Arabic">PAX</div>
<div class="cell" data-label="English">PAX</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="accommodationDetails.ref1">
<div class="cell" data-label="Property">accommodationDetails.ref1</div>
<div class="cell gen-ref-column" data-label="Column">ref1ActualCode,  ref1Code,  ref1EntityType,  ref1Id</div>
<div class="cell" data-label="Arabic">مرجع 1</div>
<div class="cell" data-label="English">Reference 1</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="accommodationDetails.ref2">
<div class="cell" data-label="Property">accommodationDetails.ref2</div>
<div class="cell gen-ref-column" data-label="Column">ref2ActualCode,  ref2Code,  ref2EntityType,  ref2Id</div>
<div class="cell" data-label="Arabic">مرجع 2</div>
<div class="cell" data-label="English">Reference 2</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="accommodationDetails.ref3">
<div class="cell" data-label="Property">accommodationDetails.ref3</div>
<div class="cell gen-ref-column" data-label="Column">ref3ActualCode,  ref3Code,  ref3EntityType,  ref3Id</div>
<div class="cell" data-label="Arabic">مرجع 3</div>
<div class="cell" data-label="English">Reference 3</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="accommodationDetails.ref4">
<div class="cell" data-label="Property">accommodationDetails.ref4</div>
<div class="cell gen-ref-column" data-label="Column">ref4ActualCode,  ref4Code,  ref4EntityType,  ref4Id</div>
<div class="cell" data-label="Arabic">مرجع 4</div>
<div class="cell" data-label="English">Reference 4</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="accommodationDetails.ref5">
<div class="cell" data-label="Property">accommodationDetails.ref5</div>
<div class="cell gen-ref-column" data-label="Column">ref5ActualCode,  ref5Code,  ref5EntityType,  ref5Id</div>
<div class="cell" data-label="Arabic">مرجع 5</div>
<div class="cell" data-label="English">Reference 5</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="accommodationDetails.sgl">
<div class="cell" data-label="Property">accommodationDetails.sgl</div>
<div class="cell" data-label="Column">sgl</div>
<div class="cell" data-label="Arabic">SGL</div>
<div class="cell" data-label="English">SGL</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="accommodationDetails.situation">
<div class="cell" data-label="Property">accommodationDetails.situation</div>
<div class="cell" data-label="Column">situation</div>
<div class="cell" data-label="Arabic">الموقف</div>
<div class="cell" data-label="English">Situation</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="accommodationDetails.text1">
<div class="cell" data-label="Property">accommodationDetails.text1</div>
<div class="cell" data-label="Column">text1</div>
<div class="cell" data-label="Arabic">نــــص 1</div>
<div class="cell" data-label="English">Text 1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="accommodationDetails.text2">
<div class="cell" data-label="Property">accommodationDetails.text2</div>
<div class="cell" data-label="Column">text2</div>
<div class="cell" data-label="Arabic">نـــــص 2</div>
<div class="cell" data-label="English">Text 2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="accommodationDetails.text3">
<div class="cell" data-label="Property">accommodationDetails.text3</div>
<div class="cell" data-label="Column">text3</div>
<div class="cell" data-label="Arabic">نص 3</div>
<div class="cell" data-label="English">text3</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="accommodationDetails.text4">
<div class="cell" data-label="Property">accommodationDetails.text4</div>
<div class="cell" data-label="Column">text4</div>
<div class="cell" data-label="Arabic">نص 4</div>
<div class="cell" data-label="English">text4</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="accommodationDetails.text5">
<div class="cell" data-label="Property">accommodationDetails.text5</div>
<div class="cell" data-label="Column">text5</div>
<div class="cell" data-label="Arabic">نص 5</div>
<div class="cell" data-label="English">text5</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="accommodationDetails.tpl">
<div class="cell" data-label="Property">accommodationDetails.tpl</div>
<div class="cell" data-label="Column">tpl</div>
<div class="cell" data-label="Arabic">TPL</div>
<div class="cell" data-label="English">TPL</div>
<div class="cell" data-label="Type">Integer</div>

</div>


</div>

<div id='flights' title='flights' class='searchable'>

## flights (الرحلات الجوية - Flights)
**Table Name:** TRTourFlightLine, **Join Column:** tRTour_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="flights.b1">
<div class="cell" data-label="Property">flights.b1</div>
<div class="cell" data-label="Column">b1</div>
<div class="cell" data-label="Arabic">Boolean 1</div>
<div class="cell" data-label="English">Boolean 1</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="flights.b2">
<div class="cell" data-label="Property">flights.b2</div>
<div class="cell" data-label="Column">b2</div>
<div class="cell" data-label="Arabic">Boolean 2</div>
<div class="cell" data-label="English">Boolean 2</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="flights.b3">
<div class="cell" data-label="Property">flights.b3</div>
<div class="cell" data-label="Column">b3</div>
<div class="cell" data-label="Arabic">Boolean 3</div>
<div class="cell" data-label="English">Boolean 3</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="flights.b4">
<div class="cell" data-label="Property">flights.b4</div>
<div class="cell" data-label="Column">b4</div>
<div class="cell" data-label="Arabic">Boolean 4</div>
<div class="cell" data-label="English">Boolean 4</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="flights.b5">
<div class="cell" data-label="Property">flights.b5</div>
<div class="cell" data-label="Column">b5</div>
<div class="cell" data-label="Arabic">Boolean 5</div>
<div class="cell" data-label="English">Boolean 5</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="flights.date">
<div class="cell" data-label="Property">flights.date</div>
<div class="cell" data-label="Column">date</div>
<div class="cell" data-label="Arabic">التاريخ</div>
<div class="cell" data-label="English">Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="flights.flight">
<div class="cell" data-label="Property">flights.flight</div>
<div class="cell" data-label="Column">flight</div>
<div class="cell" data-label="Arabic">الرحلة الجوية</div>
<div class="cell" data-label="English">Flight</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="flights.flightPurchaseOrder">
<div class="cell" data-label="Property">flights.flightPurchaseOrder</div>
<div class="cell" data-label="Column">flightPurchaseOrder_id</div>
<div class="cell" data-label="Arabic">أمر شراء رحلة الطيران</div>
<div class="cell" data-label="English">Flight Purchase Order</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [TRPurchaseOrder](/entities/travel/TRPurchaseOrder.md) 
</div>
</div>

<div class="row searchable" id="flights.id">
<div class="cell" data-label="Property">flights.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="flights.lineNumber">
<div class="cell" data-label="Property">flights.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="flights.n1">
<div class="cell" data-label="Property">flights.n1</div>
<div class="cell" data-label="Column">n1</div>
<div class="cell" data-label="Arabic">رقم 1</div>
<div class="cell" data-label="English">Number 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="flights.n2">
<div class="cell" data-label="Property">flights.n2</div>
<div class="cell" data-label="Column">n2</div>
<div class="cell" data-label="Arabic">رقم 2</div>
<div class="cell" data-label="English">Number 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="flights.n3">
<div class="cell" data-label="Property">flights.n3</div>
<div class="cell" data-label="Column">n3</div>
<div class="cell" data-label="Arabic">رقم 3</div>
<div class="cell" data-label="English">Number 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="flights.n4">
<div class="cell" data-label="Property">flights.n4</div>
<div class="cell" data-label="Column">n4</div>
<div class="cell" data-label="Arabic">رقم 4</div>
<div class="cell" data-label="English">Number 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="flights.n5">
<div class="cell" data-label="Property">flights.n5</div>
<div class="cell" data-label="Column">n5</div>
<div class="cell" data-label="Arabic">رقم 5</div>
<div class="cell" data-label="English">Number 5</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="flights.pax">
<div class="cell" data-label="Property">flights.pax</div>
<div class="cell" data-label="Column">pax</div>
<div class="cell" data-label="Arabic">PAX</div>
<div class="cell" data-label="English">PAX</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="flights.ref1">
<div class="cell" data-label="Property">flights.ref1</div>
<div class="cell gen-ref-column" data-label="Column">ref1ActualCode,  ref1Code,  ref1EntityType,  ref1Id</div>
<div class="cell" data-label="Arabic">مرجع 1</div>
<div class="cell" data-label="English">Reference 1</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="flights.ref2">
<div class="cell" data-label="Property">flights.ref2</div>
<div class="cell gen-ref-column" data-label="Column">ref2ActualCode,  ref2Code,  ref2EntityType,  ref2Id</div>
<div class="cell" data-label="Arabic">مرجع 2</div>
<div class="cell" data-label="English">Reference 2</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="flights.ref3">
<div class="cell" data-label="Property">flights.ref3</div>
<div class="cell gen-ref-column" data-label="Column">ref3ActualCode,  ref3Code,  ref3EntityType,  ref3Id</div>
<div class="cell" data-label="Arabic">مرجع 3</div>
<div class="cell" data-label="English">Reference 3</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="flights.ref4">
<div class="cell" data-label="Property">flights.ref4</div>
<div class="cell gen-ref-column" data-label="Column">ref4ActualCode,  ref4Code,  ref4EntityType,  ref4Id</div>
<div class="cell" data-label="Arabic">مرجع 4</div>
<div class="cell" data-label="English">Reference 4</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="flights.ref5">
<div class="cell" data-label="Property">flights.ref5</div>
<div class="cell gen-ref-column" data-label="Column">ref5ActualCode,  ref5Code,  ref5EntityType,  ref5Id</div>
<div class="cell" data-label="Arabic">مرجع 5</div>
<div class="cell" data-label="English">Reference 5</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="flights.reference">
<div class="cell" data-label="Property">flights.reference</div>
<div class="cell" data-label="Column">reference</div>
<div class="cell" data-label="Arabic">مرجع</div>
<div class="cell" data-label="English">Reference</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="flights.remarks">
<div class="cell" data-label="Property">flights.remarks</div>
<div class="cell" data-label="Column">remarks</div>
<div class="cell" data-label="Arabic">ملاحظات</div>
<div class="cell" data-label="English">Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="flights.route">
<div class="cell" data-label="Property">flights.route</div>
<div class="cell" data-label="Column">route</div>
<div class="cell" data-label="Arabic">الطريق</div>
<div class="cell" data-label="English">Route</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="flights.situation">
<div class="cell" data-label="Property">flights.situation</div>
<div class="cell" data-label="Column">situation</div>
<div class="cell" data-label="Arabic">الموقف</div>
<div class="cell" data-label="English">Situation</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="flights.supplier">
<div class="cell" data-label="Property">flights.supplier</div>
<div class="cell" data-label="Column">supplier_id</div>
<div class="cell" data-label="Arabic">مورد</div>
<div class="cell" data-label="English"> Supplier</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Supplier](/entities/basic/Supplier.md) 
</div>
</div>

<div class="row searchable" id="flights.text1">
<div class="cell" data-label="Property">flights.text1</div>
<div class="cell" data-label="Column">text1</div>
<div class="cell" data-label="Arabic">نــــص 1</div>
<div class="cell" data-label="English">Text 1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="flights.text2">
<div class="cell" data-label="Property">flights.text2</div>
<div class="cell" data-label="Column">text2</div>
<div class="cell" data-label="Arabic">نـــــص 2</div>
<div class="cell" data-label="English">Text 2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="flights.text3">
<div class="cell" data-label="Property">flights.text3</div>
<div class="cell" data-label="Column">text3</div>
<div class="cell" data-label="Arabic">نص 3</div>
<div class="cell" data-label="English">text3</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="flights.text4">
<div class="cell" data-label="Property">flights.text4</div>
<div class="cell" data-label="Column">text4</div>
<div class="cell" data-label="Arabic">نص 4</div>
<div class="cell" data-label="English">text4</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="flights.text5">
<div class="cell" data-label="Property">flights.text5</div>
<div class="cell" data-label="Column">text5</div>
<div class="cell" data-label="Arabic">نص 5</div>
<div class="cell" data-label="English">text5</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="flights.time">
<div class="cell" data-label="Property">flights.time</div>
<div class="cell" data-label="Column">time</div>
<div class="cell" data-label="Arabic">الوقت</div>
<div class="cell" data-label="English">Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="flights.timeLimit">
<div class="cell" data-label="Property">flights.timeLimit</div>
<div class="cell" data-label="Column">timeLimit</div>
<div class="cell" data-label="Arabic">المهلة</div>
<div class="cell" data-label="English">Time Limit</div>
<div class="cell" data-label="Type">Date</div>

</div>


</div>

<div id='services' title='services' class='searchable'>

## services (الخدمات - Services)
**Table Name:** TRTourServiceLine, **Join Column:** tRTour_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="services.b1">
<div class="cell" data-label="Property">services.b1</div>
<div class="cell" data-label="Column">b1</div>
<div class="cell" data-label="Arabic">Boolean 1</div>
<div class="cell" data-label="English">Boolean 1</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="services.b2">
<div class="cell" data-label="Property">services.b2</div>
<div class="cell" data-label="Column">b2</div>
<div class="cell" data-label="Arabic">Boolean 2</div>
<div class="cell" data-label="English">Boolean 2</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="services.b3">
<div class="cell" data-label="Property">services.b3</div>
<div class="cell" data-label="Column">b3</div>
<div class="cell" data-label="Arabic">Boolean 3</div>
<div class="cell" data-label="English">Boolean 3</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="services.b4">
<div class="cell" data-label="Property">services.b4</div>
<div class="cell" data-label="Column">b4</div>
<div class="cell" data-label="Arabic">Boolean 4</div>
<div class="cell" data-label="English">Boolean 4</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="services.b5">
<div class="cell" data-label="Property">services.b5</div>
<div class="cell" data-label="Column">b5</div>
<div class="cell" data-label="Arabic">Boolean 5</div>
<div class="cell" data-label="English">Boolean 5</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="services.city">
<div class="cell" data-label="Property">services.city</div>
<div class="cell" data-label="Column">city_id</div>
<div class="cell" data-label="Arabic">المدينة</div>
<div class="cell" data-label="English">City</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [TRCity](/entities/travel/TRCity.md) 
</div>
</div>

<div class="row searchable" id="services.country">
<div class="cell" data-label="Property">services.country</div>
<div class="cell" data-label="Column">country_id</div>
<div class="cell" data-label="Arabic">الدولة</div>
<div class="cell" data-label="English">Country</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [TRCountry](/entities/travel/TRCountry.md) 
</div>
</div>

<div class="row searchable" id="services.date">
<div class="cell" data-label="Property">services.date</div>
<div class="cell" data-label="Column">date</div>
<div class="cell" data-label="Arabic">التاريخ</div>
<div class="cell" data-label="English">Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="services.date1">
<div class="cell" data-label="Property">services.date1</div>
<div class="cell" data-label="Column">date1</div>
<div class="cell" data-label="Arabic">تـــاريخ 1</div>
<div class="cell" data-label="English">Date 1</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="services.date2">
<div class="cell" data-label="Property">services.date2</div>
<div class="cell" data-label="Column">date2</div>
<div class="cell" data-label="Arabic">تـــاريخ 2</div>
<div class="cell" data-label="English">Date 2</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="services.date3">
<div class="cell" data-label="Property">services.date3</div>
<div class="cell" data-label="Column">date3</div>
<div class="cell" data-label="Arabic">تاريخ 3</div>
<div class="cell" data-label="English">Date3</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="services.date4">
<div class="cell" data-label="Property">services.date4</div>
<div class="cell" data-label="Column">date4</div>
<div class="cell" data-label="Arabic">تاريخ 4</div>
<div class="cell" data-label="English">Date4</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="services.date5">
<div class="cell" data-label="Property">services.date5</div>
<div class="cell" data-label="Column">date5</div>
<div class="cell" data-label="Arabic">تاريخ 5</div>
<div class="cell" data-label="English">Date5</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="services.description">
<div class="cell" data-label="Property">services.description</div>
<div class="cell" data-label="Column">description</div>
<div class="cell" data-label="Arabic">الوصف</div>
<div class="cell" data-label="English">Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="services.id">
<div class="cell" data-label="Property">services.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="services.lineNumber">
<div class="cell" data-label="Property">services.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="services.n1">
<div class="cell" data-label="Property">services.n1</div>
<div class="cell" data-label="Column">n1</div>
<div class="cell" data-label="Arabic">رقم 1</div>
<div class="cell" data-label="English">Number 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.n2">
<div class="cell" data-label="Property">services.n2</div>
<div class="cell" data-label="Column">n2</div>
<div class="cell" data-label="Arabic">رقم 2</div>
<div class="cell" data-label="English">Number 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.n3">
<div class="cell" data-label="Property">services.n3</div>
<div class="cell" data-label="Column">n3</div>
<div class="cell" data-label="Arabic">رقم 3</div>
<div class="cell" data-label="English">Number 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.n4">
<div class="cell" data-label="Property">services.n4</div>
<div class="cell" data-label="Column">n4</div>
<div class="cell" data-label="Arabic">رقم 4</div>
<div class="cell" data-label="English">Number 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.n5">
<div class="cell" data-label="Property">services.n5</div>
<div class="cell" data-label="Column">n5</div>
<div class="cell" data-label="Arabic">رقم 5</div>
<div class="cell" data-label="English">Number 5</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.pax">
<div class="cell" data-label="Property">services.pax</div>
<div class="cell" data-label="Column">pax</div>
<div class="cell" data-label="Arabic">PAX</div>
<div class="cell" data-label="English">PAX</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="services.ref1">
<div class="cell" data-label="Property">services.ref1</div>
<div class="cell gen-ref-column" data-label="Column">ref1ActualCode,  ref1Code,  ref1EntityType,  ref1Id</div>
<div class="cell" data-label="Arabic">مرجع 1</div>
<div class="cell" data-label="English">Reference 1</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="services.ref2">
<div class="cell" data-label="Property">services.ref2</div>
<div class="cell gen-ref-column" data-label="Column">ref2ActualCode,  ref2Code,  ref2EntityType,  ref2Id</div>
<div class="cell" data-label="Arabic">مرجع 2</div>
<div class="cell" data-label="English">Reference 2</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="services.ref3">
<div class="cell" data-label="Property">services.ref3</div>
<div class="cell gen-ref-column" data-label="Column">ref3ActualCode,  ref3Code,  ref3EntityType,  ref3Id</div>
<div class="cell" data-label="Arabic">مرجع 3</div>
<div class="cell" data-label="English">Reference 3</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="services.ref4">
<div class="cell" data-label="Property">services.ref4</div>
<div class="cell gen-ref-column" data-label="Column">ref4ActualCode,  ref4Code,  ref4EntityType,  ref4Id</div>
<div class="cell" data-label="Arabic">مرجع 4</div>
<div class="cell" data-label="English">Reference 4</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="services.ref5">
<div class="cell" data-label="Property">services.ref5</div>
<div class="cell gen-ref-column" data-label="Column">ref5ActualCode,  ref5Code,  ref5EntityType,  ref5Id</div>
<div class="cell" data-label="Arabic">مرجع 5</div>
<div class="cell" data-label="English">Reference 5</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="services.representative">
<div class="cell" data-label="Property">services.representative</div>
<div class="cell" data-label="Column">representative_id</div>
<div class="cell" data-label="Arabic">المندوب</div>
<div class="cell" data-label="English">Representative</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/entities/basic/Employee.md) 
</div>
</div>

<div class="row searchable" id="services.restaurant">
<div class="cell" data-label="Property">services.restaurant</div>
<div class="cell" data-label="Column">restaurant_id</div>
<div class="cell" data-label="Arabic">المطعم</div>
<div class="cell" data-label="English">Restaurant</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [TRRestaurant](/entities/travel/TRRestaurant.md) 
</div>
</div>

<div class="row searchable" id="services.restaurantPurchaseOrder">
<div class="cell" data-label="Property">services.restaurantPurchaseOrder</div>
<div class="cell" data-label="Column">restaurantPurchaseOrder_id</div>
<div class="cell" data-label="Arabic">أمر شراء المطعم</div>
<div class="cell" data-label="English">Restaurant Purchase Order</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [TRPurchaseOrder](/entities/travel/TRPurchaseOrder.md) 
</div>
</div>

<div class="row searchable" id="services.restaurantVoucher">
<div class="cell" data-label="Property">services.restaurantVoucher</div>
<div class="cell" data-label="Column">restaurantVoucher_id</div>
<div class="cell" data-label="Arabic">قسيمة المطعم</div>
<div class="cell" data-label="English">Restaurant Voucher</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [TRRestaurantVoucher](/entities/travel/TRRestaurantVoucher.md) 
</div>
</div>

<div class="row searchable" id="services.service">
<div class="cell" data-label="Property">services.service</div>
<div class="cell" data-label="Column">service_id</div>
<div class="cell" data-label="Arabic">الخدمة</div>
<div class="cell" data-label="English">Service</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [TRTourService](/entities/travel/TRTourService.md) 
</div>
</div>

<div class="row searchable" id="services.servicePurchaseOrder">
<div class="cell" data-label="Property">services.servicePurchaseOrder</div>
<div class="cell" data-label="Column">servicePurchaseOrder_id</div>
<div class="cell" data-label="Arabic">أمر شراء الخدمة السياحية</div>
<div class="cell" data-label="English">Service Purchase Order</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [TRPurchaseOrder](/entities/travel/TRPurchaseOrder.md) 
</div>
</div>

<div class="row searchable" id="services.supplier">
<div class="cell" data-label="Property">services.supplier</div>
<div class="cell" data-label="Column">supplier_id</div>
<div class="cell" data-label="Arabic">مورد</div>
<div class="cell" data-label="English"> Supplier</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Supplier](/entities/basic/Supplier.md) 
</div>
</div>

<div class="row searchable" id="services.text1">
<div class="cell" data-label="Property">services.text1</div>
<div class="cell" data-label="Column">text1</div>
<div class="cell" data-label="Arabic">نــــص 1</div>
<div class="cell" data-label="English">Text 1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="services.text2">
<div class="cell" data-label="Property">services.text2</div>
<div class="cell" data-label="Column">text2</div>
<div class="cell" data-label="Arabic">نـــــص 2</div>
<div class="cell" data-label="English">Text 2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="services.text3">
<div class="cell" data-label="Property">services.text3</div>
<div class="cell" data-label="Column">text3</div>
<div class="cell" data-label="Arabic">نص 3</div>
<div class="cell" data-label="English">text3</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="services.text4">
<div class="cell" data-label="Property">services.text4</div>
<div class="cell" data-label="Column">text4</div>
<div class="cell" data-label="Arabic">نص 4</div>
<div class="cell" data-label="English">text4</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="services.text5">
<div class="cell" data-label="Property">services.text5</div>
<div class="cell" data-label="Column">text5</div>
<div class="cell" data-label="Arabic">نص 5</div>
<div class="cell" data-label="English">text5</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="services.time">
<div class="cell" data-label="Property">services.time</div>
<div class="cell" data-label="Column">time</div>
<div class="cell" data-label="Arabic">الوقت</div>
<div class="cell" data-label="English">Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="services.tourGuide">
<div class="cell" data-label="Property">services.tourGuide</div>
<div class="cell" data-label="Column">tourGuide_id</div>
<div class="cell" data-label="Arabic">المرشد السياحي</div>
<div class="cell" data-label="English">Tour Guide</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [TRTourGuide](/entities/travel/TRTourGuide.md) 
</div>
</div>

<div class="row searchable" id="services.tourGuidePurchaseOrder">
<div class="cell" data-label="Property">services.tourGuidePurchaseOrder</div>
<div class="cell" data-label="Column">tourGuidePurchaseOrder_id</div>
<div class="cell" data-label="Arabic">أمر شراء المرشد السياحي</div>
<div class="cell" data-label="English">Tour Guide Purchase Order</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [TRPurchaseOrder](/entities/travel/TRPurchaseOrder.md) 
</div>
</div>

<div class="row searchable" id="services.tourLeader">
<div class="cell" data-label="Property">services.tourLeader</div>
<div class="cell" data-label="Column">tourLeader_id</div>
<div class="cell" data-label="Arabic">قائد الرحلة</div>
<div class="cell" data-label="English">Tour Leader</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/entities/basic/Employee.md) 
</div>
</div>


</div>

