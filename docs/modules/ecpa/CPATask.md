
<div class='tableName'>


# CPATask
</div>

**Arabic:** مهمة مشروع - مهام مشروع
**English:** Task - Tasks

<ContentFilter/>


<div class='searchable'>
<a href='#executers'>executers (CPATaskLine) </a>
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
</div><div class="row searchable" id="actualCost">
<div class="cell" data-label="Property">actualCost</div>
<div class="cell" data-label="Column">actualCost</div>
<div class="cell" data-label="Arabic">التكلفة</div>
<div class="cell" data-label="English">Actual Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="actualResponsible">
<div class="cell" data-label="Property">actualResponsible</div>
<div class="cell" data-label="Column">actualResponsible_id</div>
<div class="cell" data-label="Arabic">المسئول</div>
<div class="cell" data-label="English">Responsible</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/modules/basic/Employee.md) 
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

<div class="row searchable" id="cpaProject">
<div class="cell" data-label="Property">cpaProject</div>
<div class="cell" data-label="Column">cpaProject_id</div>
<div class="cell" data-label="Arabic">مشروع</div>
<div class="cell" data-label="English">Project</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CPAProject](/modules/ecpa/CPAProject.md) 
</div>
</div>

<div class="row searchable" id="cpaProjectType">
<div class="cell" data-label="Property">cpaProjectType</div>
<div class="cell" data-label="Column">cpaProjectType_id</div>
<div class="cell" data-label="Arabic">نوع المشروع</div>
<div class="cell" data-label="English">Project Type</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CPAProjectType](/modules/ecpa/CPAProjectType.md) 
</div>
</div>

<div class="row searchable" id="cpaTaskType">
<div class="cell" data-label="Property">cpaTaskType</div>
<div class="cell" data-label="Column">cpaTaskType_id</div>
<div class="cell" data-label="Arabic">نوع المهمة</div>
<div class="cell" data-label="English">Task Type</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CPATaskType](/modules/ecpa/CPATaskType.md) 
</div>
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

<div class="row searchable" id="discipline">
<div class="cell" data-label="Property">discipline</div>
<div class="cell" data-label="Column">discipline_id</div>
<div class="cell" data-label="Arabic">التخصص</div>
<div class="cell" data-label="English">Discipline</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CPADiscipline](/modules/ecpa/CPADiscipline.md) 
</div>
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

<div class="row searchable" id="empIDs">
<div class="cell" data-label="Property">empIDs</div>
<div class="cell" data-label="Column">empIDs</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="endIn">
<div class="cell" data-label="Property">endIn</div>
<div class="cell" data-label="Column">endIn</div>
<div class="cell" data-label="Arabic">ينتهى</div>
<div class="cell" data-label="English">End In</div>
<div class="cell" data-label="Type">Date</div>

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

<div class="row searchable" id="finishedPercent">
<div class="cell" data-label="Property">finishedPercent</div>
<div class="cell" data-label="Column">finishedPercent</div>
<div class="cell" data-label="Arabic">نسبة التنفيذ</div>
<div class="cell" data-label="English">% OF Finished</div>
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

<div class="row searchable" id="milestone">
<div class="cell" data-label="Property">milestone</div>
<div class="cell" data-label="Column">milestone_id</div>
<div class="cell" data-label="Arabic">المرحلة</div>
<div class="cell" data-label="English">Milestone</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CPAProjectMileStone](/modules/ecpa/CPAProjectMileStone.md) 
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

<div class="row searchable" id="parentCode">
<div class="cell" data-label="Property">parentCode</div>
<div class="cell" data-label="Column">parentCode</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="plannedCost">
<div class="cell" data-label="Property">plannedCost</div>
<div class="cell" data-label="Column">plannedCost</div>
<div class="cell" data-label="Arabic">التكلفة</div>
<div class="cell" data-label="English">Planned Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="plannedEndIn">
<div class="cell" data-label="Property">plannedEndIn</div>
<div class="cell" data-label="Column">plannedEndIn</div>
<div class="cell" data-label="Arabic">تاريخ النهاية</div>
<div class="cell" data-label="English">Planned end in</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="plannedStartFrom">
<div class="cell" data-label="Property">plannedStartFrom</div>
<div class="cell" data-label="Column">plannedStartFrom</div>
<div class="cell" data-label="Arabic">تاريخ البداية</div>
<div class="cell" data-label="English">Planned start date</div>
<div class="cell" data-label="Type">Date</div>

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

<div class="row searchable" id="priority">
<div class="cell" data-label="Property">priority</div>
<div class="cell" data-label="Column">priority</div>
<div class="cell" data-label="Arabic">الأولوية</div>
<div class="cell" data-label="English">Priority</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="projectSubType">
<div class="cell" data-label="Property">projectSubType</div>
<div class="cell" data-label="Column">projectSubType_id</div>
<div class="cell" data-label="Arabic">نوع المشروع الفرعى</div>
<div class="cell" data-label="English">Proj Sub Type</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CPAProjectSubType](/modules/ecpa/CPAProjectSubType.md) 
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

<div class="row searchable" id="salesQuotation">
<div class="cell" data-label="Property">salesQuotation</div>
<div class="cell" data-label="Column">salesQuotation_id</div>
<div class="cell" data-label="Arabic">عرض السعر</div>
<div class="cell" data-label="English">Sales Quotation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CPASalesQuotation](/modules/ecpa/CPASalesQuotation.md) 
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

<div class="row searchable" id="startFrom">
<div class="cell" data-label="Property">startFrom</div>
<div class="cell" data-label="Column">startFrom</div>
<div class="cell" data-label="Arabic">يبدأ</div>
<div class="cell" data-label="English">Start From</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="systemGeneratedCodePrefix">
<div class="cell" data-label="Property">systemGeneratedCodePrefix</div>
<div class="cell" data-label="Column">systemGeneratedCodePrefix</div>
<div class="cell" data-label="Arabic">System Generated Code Prefix</div>
<div class="cell" data-label="English">System Generated Code Prefix</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taskPeriod.uom">
<div class="cell" data-label="Property">taskPeriod.uom</div>
<div class="cell" data-label="Column">taskPeriodUom</div>
<div class="cell" data-label="Arabic">الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="taskPeriod.value">
<div class="cell" data-label="Property">taskPeriod.value</div>
<div class="cell" data-label="Column">taskPeriodValue</div>
<div class="cell" data-label="Arabic">القيمة</div>
<div class="cell" data-label="English">Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="taskStatus">
<div class="cell" data-label="Property">taskStatus</div>
<div class="cell" data-label="Column">taskStatus</div>
<div class="cell" data-label="Arabic">الحالة</div>
<div class="cell" data-label="English">Task Status</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="totalActualTime">
<div class="cell" data-label="Property">totalActualTime</div>
<div class="cell" data-label="Column">totalActualTime</div>
<div class="cell" data-label="Arabic">إجمالي الوقت الفعلي</div>
<div class="cell" data-label="English">Total Actual Time</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalPlannedTime">
<div class="cell" data-label="Property">totalPlannedTime</div>
<div class="cell" data-label="Column">totalPlannedTime</div>
<div class="cell" data-label="Arabic">إجمالي الوقت المخطط بالساعة</div>
<div class="cell" data-label="English">Total Planned Time</div>
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

<div class="row searchable" id="usertaskStatus">
<div class="cell" data-label="Property">usertaskStatus</div>
<div class="cell" data-label="Column">usertaskStatus</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Enum</div>

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

<div id='executers' title='executers' class='searchable'>

## executers (المنفذين - Executers)

<div class='tableName'>

**Table Name:** CPATaskLine, **Join Column:** cPATask_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="executers.actualCost">
<div class="cell" data-label="Property">executers.actualCost</div>
<div class="cell" data-label="Column">actualCost</div>
<div class="cell" data-label="Arabic">التكلفة | الفعلية</div>
<div class="cell" data-label="English">Cost | Actual</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="executers.actualTimeInHours">
<div class="cell" data-label="Property">executers.actualTimeInHours</div>
<div class="cell" data-label="Column">actualTimeInHours</div>
<div class="cell" data-label="Arabic">الوقت بالساعات | فعلي</div>
<div class="cell" data-label="English">Time In Hours | Actual</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="executers.empRate">
<div class="cell" data-label="Property">executers.empRate</div>
<div class="cell" data-label="Column">empRate</div>
<div class="cell" data-label="Arabic">أجر الساعة</div>
<div class="cell" data-label="English">Employee Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="executers.employee">
<div class="cell" data-label="Property">executers.employee</div>
<div class="cell" data-label="Column">employee_id</div>
<div class="cell" data-label="Arabic">الموظف</div>
<div class="cell" data-label="English">Employee</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/modules/basic/Employee.md) 
</div>
</div>

<div class="row searchable" id="executers.finishedPercent">
<div class="cell" data-label="Property">executers.finishedPercent</div>
<div class="cell" data-label="Column">finishedPercent</div>
<div class="cell" data-label="Arabic">نسبة التنفيذ</div>
<div class="cell" data-label="English">% OF Finished</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="executers.fromDate">
<div class="cell" data-label="Property">executers.fromDate</div>
<div class="cell" data-label="Column">fromDate</div>
<div class="cell" data-label="Arabic">من تاريخ</div>
<div class="cell" data-label="English">From Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="executers.id">
<div class="cell" data-label="Property">executers.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="executers.lineNumber">
<div class="cell" data-label="Property">executers.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="executers.maxValuePerDay">
<div class="cell" data-label="Property">executers.maxValuePerDay</div>
<div class="cell" data-label="Column">maxValuePerDay</div>
<div class="cell" data-label="Arabic">أقصى عدد ساعات لليوم الواحد</div>
<div class="cell" data-label="English">Max Value Per Day</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="executers.maxValuePerMonth">
<div class="cell" data-label="Property">executers.maxValuePerMonth</div>
<div class="cell" data-label="Column">maxValuePerMonth</div>
<div class="cell" data-label="Arabic">أقصى عدد ساعات شهري</div>
<div class="cell" data-label="English">Max Value Per Month</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="executers.n1">
<div class="cell" data-label="Property">executers.n1</div>
<div class="cell" data-label="Column">n1</div>
<div class="cell" data-label="Arabic">رقم 1</div>
<div class="cell" data-label="English">Number 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="executers.n2">
<div class="cell" data-label="Property">executers.n2</div>
<div class="cell" data-label="Column">n2</div>
<div class="cell" data-label="Arabic">رقم 2</div>
<div class="cell" data-label="English">Number 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="executers.n3">
<div class="cell" data-label="Property">executers.n3</div>
<div class="cell" data-label="Column">n3</div>
<div class="cell" data-label="Arabic">رقم 3</div>
<div class="cell" data-label="English">Number 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="executers.n4">
<div class="cell" data-label="Property">executers.n4</div>
<div class="cell" data-label="Column">n4</div>
<div class="cell" data-label="Arabic">رقم 4</div>
<div class="cell" data-label="English">Number 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="executers.n5">
<div class="cell" data-label="Property">executers.n5</div>
<div class="cell" data-label="Column">n5</div>
<div class="cell" data-label="Arabic">رقم 5</div>
<div class="cell" data-label="English">Number 5</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="executers.plannedCost">
<div class="cell" data-label="Property">executers.plannedCost</div>
<div class="cell" data-label="Column">plannedCost</div>
<div class="cell" data-label="Arabic">التكلفة | المخططة</div>
<div class="cell" data-label="English">Cost | Planned</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="executers.plannedEndIn">
<div class="cell" data-label="Property">executers.plannedEndIn</div>
<div class="cell" data-label="Column">plannedEndIn</div>
<div class="cell" data-label="Arabic">تاريخ النهاية</div>
<div class="cell" data-label="English">Planned end in</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="executers.plannedStartFrom">
<div class="cell" data-label="Property">executers.plannedStartFrom</div>
<div class="cell" data-label="Column">plannedStartFrom</div>
<div class="cell" data-label="Arabic">تاريخ البداية</div>
<div class="cell" data-label="English">Planned start date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="executers.plannedTimeInHours">
<div class="cell" data-label="Property">executers.plannedTimeInHours</div>
<div class="cell" data-label="Column">plannedTimeInHours</div>
<div class="cell" data-label="Arabic">الوقت بالساعات | مخطط</div>
<div class="cell" data-label="English">Time In Hours | Planned</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="executers.registeredTimeInHours">
<div class="cell" data-label="Property">executers.registeredTimeInHours</div>
<div class="cell" data-label="Column">registeredTimeInHours</div>
<div class="cell" data-label="Arabic">الوقت بالساعات | الوقت المسجل</div>
<div class="cell" data-label="English">Time In Hours| Registered Time In Hours</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="executers.toDate">
<div class="cell" data-label="Property">executers.toDate</div>
<div class="cell" data-label="Column">toDate</div>
<div class="cell" data-label="Arabic">إلى تاريخ</div>
<div class="cell" data-label="English">To Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="executers.workDone">
<div class="cell" data-label="Property">executers.workDone</div>
<div class="cell" data-label="Column">workDone</div>
<div class="cell" data-label="Arabic">إنتهى من العمل</div>
<div class="cell" data-label="English">Work Done</div>
<div class="cell" data-label="Type">Boolean</div>

</div>


</div>
</div>

