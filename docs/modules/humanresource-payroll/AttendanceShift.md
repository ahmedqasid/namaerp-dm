
<div class='tableName'>


# AttendanceShift
</div>

**Arabic:** ملف الدوام - ملفات الدوام
**English:** Shift - Shifts

<ContentFilter/>


<div class='searchable'>
<a href='#details'>details (AttendanceShiftLine) </a> , <a href='#groupDetails'>groupDetails (AttendanceShiftGroupLine) </a> , <a href='#rotationDetails'>rotationDetails (AttendanceShiftRotateLine) </a>
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
</div><div class="row searchable" id="allowSpecifyingTimeInWeekEnd">
<div class="cell" data-label="Property">allowSpecifyingTimeInWeekEnd</div>
<div class="cell" data-label="Column">allowSpecifyingTimeInWeekEnd</div>
<div class="cell" data-label="Arabic">السماح بتحديد مواعيد الحضور و الانصراف للعطلات الاسبوعية</div>
<div class="cell" data-label="English">Allow Specifying Times For Weekends</div>
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

<div class="row searchable" id="attachment1">
<div class="cell" data-label="Property">attachment1</div>
<div class="cell" data-label="Column">attachment1_id</div>
<div class="cell" data-label="Arabic">مرفق 1</div>
<div class="cell" data-label="English">Attachment 1</div>
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

<div class="row searchable" id="attendanceShiftType">
<div class="cell" data-label="Property">attendanceShiftType</div>
<div class="cell" data-label="Column">attendanceShiftType</div>
<div class="cell" data-label="Arabic">نوع دوام الحضور</div>
<div class="cell" data-label="English">AttendanceShiftType</div>
<div class="cell" data-label="Type">Enum</div>

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

<div class="row searchable" id="friday.weeklyRest">
<div class="cell" data-label="Property">friday.weeklyRest</div>
<div class="cell" data-label="Column">fridayWeeklyRest</div>
<div class="cell" data-label="Arabic">راحة إسبوعية</div>
<div class="cell" data-label="English">Weekly Rest</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="friday.workTime1.end">
<div class="cell" data-label="Property">friday.workTime1.end</div>
<div class="cell" data-label="Column">fridayTime1End</div>
<div class="cell" data-label="Arabic"> إلى</div>
<div class="cell" data-label="English"> End Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="friday.workTime1.start">
<div class="cell" data-label="Property">friday.workTime1.start</div>
<div class="cell" data-label="Column">fridayTime1Start</div>
<div class="cell" data-label="Arabic"> من</div>
<div class="cell" data-label="English"> Start Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="friday.workTime2.end">
<div class="cell" data-label="Property">friday.workTime2.end</div>
<div class="cell" data-label="Column">fridayTime2End</div>
<div class="cell" data-label="Arabic"> إلى</div>
<div class="cell" data-label="English"> End Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="friday.workTime2.start">
<div class="cell" data-label="Property">friday.workTime2.start</div>
<div class="cell" data-label="Column">fridayTime2Start</div>
<div class="cell" data-label="Arabic"> من</div>
<div class="cell" data-label="English"> Start Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="friday.workTime3.end">
<div class="cell" data-label="Property">friday.workTime3.end</div>
<div class="cell" data-label="Column">fridayTime3End</div>
<div class="cell" data-label="Arabic"> إلى</div>
<div class="cell" data-label="English"> End Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="friday.workTime3.start">
<div class="cell" data-label="Property">friday.workTime3.start</div>
<div class="cell" data-label="Column">fridayTime3Start</div>
<div class="cell" data-label="Arabic"> من</div>
<div class="cell" data-label="English"> Start Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="friday.workday">
<div class="cell" data-label="Property">friday.workday</div>
<div class="cell" data-label="Column">fridayWorkday</div>
<div class="cell" data-label="Arabic">يوم عمل</div>
<div class="cell" data-label="English">Work day</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="group">
<div class="cell" data-label="Property">group</div>
<div class="cell" data-label="Column">group_id</div>
<div class="cell" data-label="Arabic">المجموعة</div>
<div class="cell" data-label="English">Group</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MasterGroup](/modules/basic/MasterGroup.md) 
</div>
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

<div class="row searchable" id="mainFile">
<div class="cell" data-label="Property">mainFile</div>
<div class="cell" data-label="Column">mainFile_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/modules/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="monday.weeklyRest">
<div class="cell" data-label="Property">monday.weeklyRest</div>
<div class="cell" data-label="Column">mondayWeeklyRest</div>
<div class="cell" data-label="Arabic">راحة إسبوعية</div>
<div class="cell" data-label="English">Weekly Rest</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="monday.workTime1.end">
<div class="cell" data-label="Property">monday.workTime1.end</div>
<div class="cell" data-label="Column">mondayTime1End</div>
<div class="cell" data-label="Arabic"> إلى</div>
<div class="cell" data-label="English"> End Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="monday.workTime1.start">
<div class="cell" data-label="Property">monday.workTime1.start</div>
<div class="cell" data-label="Column">mondayTime1Start</div>
<div class="cell" data-label="Arabic"> من</div>
<div class="cell" data-label="English"> Start Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="monday.workTime2.end">
<div class="cell" data-label="Property">monday.workTime2.end</div>
<div class="cell" data-label="Column">mondayTime2End</div>
<div class="cell" data-label="Arabic"> إلى</div>
<div class="cell" data-label="English"> End Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="monday.workTime2.start">
<div class="cell" data-label="Property">monday.workTime2.start</div>
<div class="cell" data-label="Column">mondayTime2Start</div>
<div class="cell" data-label="Arabic"> من</div>
<div class="cell" data-label="English"> Start Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="monday.workTime3.end">
<div class="cell" data-label="Property">monday.workTime3.end</div>
<div class="cell" data-label="Column">mondayTime3End</div>
<div class="cell" data-label="Arabic"> إلى</div>
<div class="cell" data-label="English"> End Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="monday.workTime3.start">
<div class="cell" data-label="Property">monday.workTime3.start</div>
<div class="cell" data-label="Column">mondayTime3Start</div>
<div class="cell" data-label="Arabic"> من</div>
<div class="cell" data-label="English"> Start Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="monday.workday">
<div class="cell" data-label="Property">monday.workday</div>
<div class="cell" data-label="Column">mondayWorkday</div>
<div class="cell" data-label="Arabic">يوم عمل</div>
<div class="cell" data-label="English">Work day</div>
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

<div class="row searchable" id="name1">
<div class="cell" data-label="Property">name1</div>
<div class="cell" data-label="Column">name1</div>
<div class="cell" data-label="Arabic">الاسم العربي</div>
<div class="cell" data-label="English">Name1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="name2">
<div class="cell" data-label="Property">name2</div>
<div class="cell" data-label="Column">name2</div>
<div class="cell" data-label="Arabic">الاسم الإنجليزي</div>
<div class="cell" data-label="English">Name2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="numberOfHoursAllowedBeforePreventingCheckOut">
<div class="cell" data-label="Property">numberOfHoursAllowedBeforePreventingCheckOut</div>
<div class="cell" data-label="Column">numberOfHoursAllowedBeforePreventingCheckOut</div>
<div class="cell" data-label="Arabic">عدد الساعات المسموح بها قبل منع تسجيل الانصراف من خلال التطبيق</div>
<div class="cell" data-label="English">Number Of Hours Allowed Before Preventing CheckOut</div>
<div class="cell" data-label="Type">Integer</div>

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

<div class="row searchable" id="printCount">
<div class="cell" data-label="Property">printCount</div>
<div class="cell" data-label="Column">printCount</div>
<div class="cell" data-label="Arabic">عدد مرات الطباعة</div>
<div class="cell" data-label="English">Print Count</div>
<div class="cell" data-label="Type">Integer</div>

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

<div class="row searchable" id="saturday.weeklyRest">
<div class="cell" data-label="Property">saturday.weeklyRest</div>
<div class="cell" data-label="Column">saturdayWeeklyRest</div>
<div class="cell" data-label="Arabic">راحة إسبوعية</div>
<div class="cell" data-label="English">Weekly Rest</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="saturday.workTime1.end">
<div class="cell" data-label="Property">saturday.workTime1.end</div>
<div class="cell" data-label="Column">saturdayTime1End</div>
<div class="cell" data-label="Arabic"> إلى</div>
<div class="cell" data-label="English"> End Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="saturday.workTime1.start">
<div class="cell" data-label="Property">saturday.workTime1.start</div>
<div class="cell" data-label="Column">saturdayTime1Start</div>
<div class="cell" data-label="Arabic"> من</div>
<div class="cell" data-label="English"> Start Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="saturday.workTime2.end">
<div class="cell" data-label="Property">saturday.workTime2.end</div>
<div class="cell" data-label="Column">saturdayTime2End</div>
<div class="cell" data-label="Arabic"> إلى</div>
<div class="cell" data-label="English"> End Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="saturday.workTime2.start">
<div class="cell" data-label="Property">saturday.workTime2.start</div>
<div class="cell" data-label="Column">saturdayTime2Start</div>
<div class="cell" data-label="Arabic"> من</div>
<div class="cell" data-label="English"> Start Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="saturday.workTime3.end">
<div class="cell" data-label="Property">saturday.workTime3.end</div>
<div class="cell" data-label="Column">saturdayTime3End</div>
<div class="cell" data-label="Arabic"> إلى</div>
<div class="cell" data-label="English"> End Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="saturday.workTime3.start">
<div class="cell" data-label="Property">saturday.workTime3.start</div>
<div class="cell" data-label="Column">saturdayTime3Start</div>
<div class="cell" data-label="Arabic"> من</div>
<div class="cell" data-label="English"> Start Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="saturday.workday">
<div class="cell" data-label="Property">saturday.workday</div>
<div class="cell" data-label="Column">saturdayWorkday</div>
<div class="cell" data-label="Arabic">يوم عمل</div>
<div class="cell" data-label="English">Work day</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="sunday.weeklyRest">
<div class="cell" data-label="Property">sunday.weeklyRest</div>
<div class="cell" data-label="Column">sundayWeeklyRest</div>
<div class="cell" data-label="Arabic">راحة إسبوعية</div>
<div class="cell" data-label="English">Weekly Rest</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="sunday.workTime1.end">
<div class="cell" data-label="Property">sunday.workTime1.end</div>
<div class="cell" data-label="Column">sundayTime1End</div>
<div class="cell" data-label="Arabic"> إلى</div>
<div class="cell" data-label="English"> End Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="sunday.workTime1.start">
<div class="cell" data-label="Property">sunday.workTime1.start</div>
<div class="cell" data-label="Column">sundayTime1Start</div>
<div class="cell" data-label="Arabic"> من</div>
<div class="cell" data-label="English"> Start Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="sunday.workTime2.end">
<div class="cell" data-label="Property">sunday.workTime2.end</div>
<div class="cell" data-label="Column">sundayTime2End</div>
<div class="cell" data-label="Arabic"> إلى</div>
<div class="cell" data-label="English"> End Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="sunday.workTime2.start">
<div class="cell" data-label="Property">sunday.workTime2.start</div>
<div class="cell" data-label="Column">sundayTime2Start</div>
<div class="cell" data-label="Arabic"> من</div>
<div class="cell" data-label="English"> Start Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="sunday.workTime3.end">
<div class="cell" data-label="Property">sunday.workTime3.end</div>
<div class="cell" data-label="Column">sundayTime3End</div>
<div class="cell" data-label="Arabic"> إلى</div>
<div class="cell" data-label="English"> End Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="sunday.workTime3.start">
<div class="cell" data-label="Property">sunday.workTime3.start</div>
<div class="cell" data-label="Column">sundayTime3Start</div>
<div class="cell" data-label="Arabic"> من</div>
<div class="cell" data-label="English"> Start Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="sunday.workday">
<div class="cell" data-label="Property">sunday.workday</div>
<div class="cell" data-label="Column">sundayWorkday</div>
<div class="cell" data-label="Arabic">يوم عمل</div>
<div class="cell" data-label="English">Work day</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="systemGeneratedCodePrefix">
<div class="cell" data-label="Property">systemGeneratedCodePrefix</div>
<div class="cell" data-label="Column">systemGeneratedCodePrefix</div>
<div class="cell" data-label="Arabic">System Generated Code Prefix</div>
<div class="cell" data-label="English">System Generated Code Prefix</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="thursday.weeklyRest">
<div class="cell" data-label="Property">thursday.weeklyRest</div>
<div class="cell" data-label="Column">thursdayWeeklyRest</div>
<div class="cell" data-label="Arabic">راحة إسبوعية</div>
<div class="cell" data-label="English">Weekly Rest</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="thursday.workTime1.end">
<div class="cell" data-label="Property">thursday.workTime1.end</div>
<div class="cell" data-label="Column">thursdayTime1End</div>
<div class="cell" data-label="Arabic"> إلى</div>
<div class="cell" data-label="English"> End Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="thursday.workTime1.start">
<div class="cell" data-label="Property">thursday.workTime1.start</div>
<div class="cell" data-label="Column">thursdayTime1Start</div>
<div class="cell" data-label="Arabic"> من</div>
<div class="cell" data-label="English"> Start Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="thursday.workTime2.end">
<div class="cell" data-label="Property">thursday.workTime2.end</div>
<div class="cell" data-label="Column">thursdayTime2End</div>
<div class="cell" data-label="Arabic"> إلى</div>
<div class="cell" data-label="English"> End Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="thursday.workTime2.start">
<div class="cell" data-label="Property">thursday.workTime2.start</div>
<div class="cell" data-label="Column">thursdayTime2Start</div>
<div class="cell" data-label="Arabic"> من</div>
<div class="cell" data-label="English"> Start Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="thursday.workTime3.end">
<div class="cell" data-label="Property">thursday.workTime3.end</div>
<div class="cell" data-label="Column">thursdayTime3End</div>
<div class="cell" data-label="Arabic"> إلى</div>
<div class="cell" data-label="English"> End Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="thursday.workTime3.start">
<div class="cell" data-label="Property">thursday.workTime3.start</div>
<div class="cell" data-label="Column">thursdayTime3Start</div>
<div class="cell" data-label="Arabic"> من</div>
<div class="cell" data-label="English"> Start Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="thursday.workday">
<div class="cell" data-label="Property">thursday.workday</div>
<div class="cell" data-label="Column">thursdayWorkday</div>
<div class="cell" data-label="Arabic">يوم عمل</div>
<div class="cell" data-label="English">Work day</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="tuesday.weeklyRest">
<div class="cell" data-label="Property">tuesday.weeklyRest</div>
<div class="cell" data-label="Column">tuesdayWeeklyRest</div>
<div class="cell" data-label="Arabic">راحة إسبوعية</div>
<div class="cell" data-label="English">Weekly Rest</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="tuesday.workTime1.end">
<div class="cell" data-label="Property">tuesday.workTime1.end</div>
<div class="cell" data-label="Column">tuesdayTime1End</div>
<div class="cell" data-label="Arabic"> إلى</div>
<div class="cell" data-label="English"> End Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="tuesday.workTime1.start">
<div class="cell" data-label="Property">tuesday.workTime1.start</div>
<div class="cell" data-label="Column">tuesdayTime1Start</div>
<div class="cell" data-label="Arabic"> من</div>
<div class="cell" data-label="English"> Start Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="tuesday.workTime2.end">
<div class="cell" data-label="Property">tuesday.workTime2.end</div>
<div class="cell" data-label="Column">tuesdayTime2End</div>
<div class="cell" data-label="Arabic"> إلى</div>
<div class="cell" data-label="English"> End Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="tuesday.workTime2.start">
<div class="cell" data-label="Property">tuesday.workTime2.start</div>
<div class="cell" data-label="Column">tuesdayTime2Start</div>
<div class="cell" data-label="Arabic"> من</div>
<div class="cell" data-label="English"> Start Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="tuesday.workTime3.end">
<div class="cell" data-label="Property">tuesday.workTime3.end</div>
<div class="cell" data-label="Column">tuesdayTime3End</div>
<div class="cell" data-label="Arabic"> إلى</div>
<div class="cell" data-label="English"> End Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="tuesday.workTime3.start">
<div class="cell" data-label="Property">tuesday.workTime3.start</div>
<div class="cell" data-label="Column">tuesdayTime3Start</div>
<div class="cell" data-label="Arabic"> من</div>
<div class="cell" data-label="English"> Start Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="tuesday.workday">
<div class="cell" data-label="Property">tuesday.workday</div>
<div class="cell" data-label="Column">tuesdayWorkday</div>
<div class="cell" data-label="Arabic">يوم عمل</div>
<div class="cell" data-label="English">Work day</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="wednesday.weeklyRest">
<div class="cell" data-label="Property">wednesday.weeklyRest</div>
<div class="cell" data-label="Column">wednesdayWeeklyRest</div>
<div class="cell" data-label="Arabic">راحة إسبوعية</div>
<div class="cell" data-label="English">Weekly Rest</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="wednesday.workTime1.end">
<div class="cell" data-label="Property">wednesday.workTime1.end</div>
<div class="cell" data-label="Column">wednesdayTime1End</div>
<div class="cell" data-label="Arabic"> إلى</div>
<div class="cell" data-label="English"> End Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="wednesday.workTime1.start">
<div class="cell" data-label="Property">wednesday.workTime1.start</div>
<div class="cell" data-label="Column">wednesdayTime1Start</div>
<div class="cell" data-label="Arabic"> من</div>
<div class="cell" data-label="English"> Start Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="wednesday.workTime2.end">
<div class="cell" data-label="Property">wednesday.workTime2.end</div>
<div class="cell" data-label="Column">wednesdayTime2End</div>
<div class="cell" data-label="Arabic"> إلى</div>
<div class="cell" data-label="English"> End Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="wednesday.workTime2.start">
<div class="cell" data-label="Property">wednesday.workTime2.start</div>
<div class="cell" data-label="Column">wednesdayTime2Start</div>
<div class="cell" data-label="Arabic"> من</div>
<div class="cell" data-label="English"> Start Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="wednesday.workTime3.end">
<div class="cell" data-label="Property">wednesday.workTime3.end</div>
<div class="cell" data-label="Column">wednesdayTime3End</div>
<div class="cell" data-label="Arabic"> إلى</div>
<div class="cell" data-label="English"> End Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="wednesday.workTime3.start">
<div class="cell" data-label="Property">wednesday.workTime3.start</div>
<div class="cell" data-label="Column">wednesdayTime3Start</div>
<div class="cell" data-label="Arabic"> من</div>
<div class="cell" data-label="English"> Start Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="wednesday.workday">
<div class="cell" data-label="Property">wednesday.workday</div>
<div class="cell" data-label="Column">wednesdayWorkday</div>
<div class="cell" data-label="Arabic">يوم عمل</div>
<div class="cell" data-label="English">Work day</div>
<div class="cell" data-label="Type">Boolean</div>

</div>


</div>
</div>

<div id='details' title='details' class='searchable'>

## details (التفاصيل - Details)

<div class='tableName'>

**Table Name:** AttendanceShiftLine, **Join Column:** attendanceShift_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="details.checkOutEndTime">
<div class="cell" data-label="Property">details.checkOutEndTime</div>
<div class="cell" data-label="Column">checkOutEndTime</div>
<div class="cell" data-label="Arabic">وقت الانصراف | إلى وقت</div>
<div class="cell" data-label="English">Checkout | To Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="details.checkOutStartTime">
<div class="cell" data-label="Property">details.checkOutStartTime</div>
<div class="cell" data-label="Column">checkOutStartTime</div>
<div class="cell" data-label="Arabic">وقت الانصراف | من وقت</div>
<div class="cell" data-label="English">Checkout | From Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="details.defaultShift">
<div class="cell" data-label="Property">details.defaultShift</div>
<div class="cell" data-label="Column">defaultShift</div>
<div class="cell" data-label="Arabic">دوام إفتراضى</div>
<div class="cell" data-label="English">Default Shift</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.endTime">
<div class="cell" data-label="Property">details.endTime</div>
<div class="cell" data-label="Column">endTime</div>
<div class="cell" data-label="Arabic">وقت الحضور - الي ساعة</div>
<div class="cell" data-label="English"> End Time</div>
<div class="cell" data-label="Type">Time</div>

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

<div class="row searchable" id="details.shift">
<div class="cell" data-label="Property">details.shift</div>
<div class="cell" data-label="Column">shift_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English">Shift</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AttendanceShift](/modules/humanresource-payroll/AttendanceShift.md) 
</div>
</div>

<div class="row searchable" id="details.startTime">
<div class="cell" data-label="Property">details.startTime</div>
<div class="cell" data-label="Column">startTime</div>
<div class="cell" data-label="Arabic">وقت الحضور - من ساعة</div>
<div class="cell" data-label="English"> Start Time</div>
<div class="cell" data-label="Type">Time</div>

</div>


</div>
</div>

<div id='groupDetails' title='groupDetails' class='searchable'>

## groupDetails (تفاصيل خطة مجموعة عمالة - Group Details)

<div class='tableName'>

**Table Name:** AttendanceShiftGroupLine, **Join Column:** attendanceShift_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="groupDetails.attndanceShiftRotateGroupCode">
<div class="cell" data-label="Property">groupDetails.attndanceShiftRotateGroupCode</div>
<div class="cell" data-label="Column">attndanceShiftRotateGroupCode</div>
<div class="cell" data-label="Arabic">كود دوام مجموعة العمالة</div>
<div class="cell" data-label="English">Attendance Shift Rotate Group Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="groupDetails.calcTimeFromShift">
<div class="cell" data-label="Property">groupDetails.calcTimeFromShift</div>
<div class="cell" data-label="Column">calcTimeFromShift_id</div>
<div class="cell" data-label="Arabic">جلب الأوقات من الدوام</div>
<div class="cell" data-label="English">Calculate Time From Shift</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AttendanceShift](/modules/humanresource-payroll/AttendanceShift.md) 
</div>
</div>

<div class="row searchable" id="groupDetails.id">
<div class="cell" data-label="Property">groupDetails.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="groupDetails.lineNumber">
<div class="cell" data-label="Property">groupDetails.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="groupDetails.workDay.weeklyRest">
<div class="cell" data-label="Property">groupDetails.workDay.weeklyRest</div>
<div class="cell" data-label="Column">weeklyRest</div>
<div class="cell" data-label="Arabic">راحة إسبوعية</div>
<div class="cell" data-label="English">Weekly Rest</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="groupDetails.workDay.workTime1.end">
<div class="cell" data-label="Property">groupDetails.workDay.workTime1.end</div>
<div class="cell" data-label="Column">time1End</div>
<div class="cell" data-label="Arabic"> إلى</div>
<div class="cell" data-label="English"> End Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="groupDetails.workDay.workTime1.start">
<div class="cell" data-label="Property">groupDetails.workDay.workTime1.start</div>
<div class="cell" data-label="Column">time1Start</div>
<div class="cell" data-label="Arabic"> من</div>
<div class="cell" data-label="English"> Start Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="groupDetails.workDay.workTime2.end">
<div class="cell" data-label="Property">groupDetails.workDay.workTime2.end</div>
<div class="cell" data-label="Column">time2End</div>
<div class="cell" data-label="Arabic"> إلى</div>
<div class="cell" data-label="English"> End Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="groupDetails.workDay.workTime2.start">
<div class="cell" data-label="Property">groupDetails.workDay.workTime2.start</div>
<div class="cell" data-label="Column">time2Start</div>
<div class="cell" data-label="Arabic"> من</div>
<div class="cell" data-label="English"> Start Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="groupDetails.workDay.workTime3.end">
<div class="cell" data-label="Property">groupDetails.workDay.workTime3.end</div>
<div class="cell" data-label="Column">time3End</div>
<div class="cell" data-label="Arabic"> إلى</div>
<div class="cell" data-label="English"> End Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="groupDetails.workDay.workTime3.start">
<div class="cell" data-label="Property">groupDetails.workDay.workTime3.start</div>
<div class="cell" data-label="Column">time3Start</div>
<div class="cell" data-label="Arabic"> من</div>
<div class="cell" data-label="English"> Start Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="groupDetails.workDay.workday">
<div class="cell" data-label="Property">groupDetails.workDay.workday</div>
<div class="cell" data-label="Column">workday</div>
<div class="cell" data-label="Arabic">يوم عمل</div>
<div class="cell" data-label="English">Work day</div>
<div class="cell" data-label="Type">Boolean</div>

</div>


</div>
</div>

<div id='rotationDetails' title='rotationDetails' class='searchable'>

## rotationDetails (تفاصيل التدويير - Rotatation Details)

<div class='tableName'>

**Table Name:** AttendanceShiftRotateLine, **Join Column:** attendanceShift_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="rotationDetails.attendanceShiftRotateLineCode">
<div class="cell" data-label="Property">rotationDetails.attendanceShiftRotateLineCode</div>
<div class="cell" data-label="Column">attendanceShiftRotateLineCode</div>
<div class="cell" data-label="Arabic">كود الدوام الدوري</div>
<div class="cell" data-label="English">Attendance Shift Rotate Line Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="rotationDetails.id">
<div class="cell" data-label="Property">rotationDetails.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="rotationDetails.lineNumber">
<div class="cell" data-label="Property">rotationDetails.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="rotationDetails.rotateFromLine">
<div class="cell" data-label="Property">rotationDetails.rotateFromLine</div>
<div class="cell" data-label="Column">rotateFromLine</div>
<div class="cell" data-label="Arabic">تدويير بداً من سطر(يمكن تركه فارغا)</div>
<div class="cell" data-label="English">Rotate From Line (can be empty)</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="rotationDetails.startRotate">
<div class="cell" data-label="Property">rotationDetails.startRotate</div>
<div class="cell" data-label="Column">startRotate</div>
<div class="cell" data-label="Arabic">تاريخ بدء التدويير</div>
<div class="cell" data-label="English">Start Rotate Date</div>
<div class="cell" data-label="Type">Date</div>

</div>


</div>
</div>

