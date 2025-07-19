
<div class='tableName'>


# AUTestDef
</div>

**Arabic:** تعريف اختبار - تعريف اختبارات
**English:** Test Definition - Test Definitions

<ContentFilter/>


<div class='searchable'>
<a href='#RWLDLines'>RWLDLines (AURelativeWeightsListDefLine) </a> , <a href='#indepDLines'>indepDLines (AUIndependencyDefLine) </a> , <a href='#inputsLines'>inputsLines (AUAnalysisDefInput) </a> , <a href='#p0Procedures'>p0Procedures (AUProcedureP0DefLine) </a> , <a href='#p1Procedures'>p1Procedures (AUProcedureP1DefLine) </a> , <a href='#p2BasicProcedures'>p2BasicProcedures (AUProcedureP2BasicDefLine) </a> , <a href='#p2CharProcedures'>p2CharProcedures (AUProcedureP2CharacterizationDefLine) </a> , <a href='#p2ControlProcedures'>p2ControlProcedures (AUProcedureP2ControlDefLine) </a> , <a href='#p3AnalyticalProcedures'>p3AnalyticalProcedures (AUProcedureP3AnalyticalDefLine) </a> , <a href='#p3DetailedProcedures'>p3DetailedProcedures (AUProcedureP3DetailedDefLine) </a> , <a href='#p4Procedures'>p4Procedures (AUProcedureP4DefLine) </a> , <a href='#p5CheckProcedures'>p5CheckProcedures (AUProcedureCheckDefLine) </a> , <a href='#p6ReportsProcedures'>p6ReportsProcedures (AUProcedureReportsDefLine) </a> , <a href='#resultsLines'>resultsLines (AUAnalysisDefResult) </a>
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
</div><div class="row searchable" id="accountGroup">
<div class="cell" data-label="Property">accountGroup</div>
<div class="cell" data-label="Column">accountGroup_id</div>
<div class="cell" data-label="Arabic">مجموعة حسابات</div>
<div class="cell" data-label="English">Accounts Group</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AUAccount](/modules/auditing/AUAccount.md) 
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

<div class="row searchable" id="cycle">
<div class="cell" data-label="Property">cycle</div>
<div class="cell" data-label="Column">cycle_id</div>
<div class="cell" data-label="Arabic">دورة محاسبيه</div>
<div class="cell" data-label="English">Cycle</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AUCycle](/modules/auditing/AUCycle.md) 
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

<div class="row searchable" id="isControlRisk">
<div class="cell" data-label="Property">isControlRisk</div>
<div class="cell" data-label="Column">isControlRisk</div>
<div class="cell" data-label="Arabic">له خطر رقابة</div>
<div class="cell" data-label="English">Has Control Risk</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="isNaturalDanger">
<div class="cell" data-label="Property">isNaturalDanger</div>
<div class="cell" data-label="Column">isNaturalDanger</div>
<div class="cell" data-label="Arabic">له خطر طبيعى</div>
<div class="cell" data-label="English">Has Natural Danger</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="linkingLetterData.agreedProcedures">
<div class="cell" data-label="Property">linkingLetterData.agreedProcedures</div>
<div class="cell" data-label="Column">agreedProcedures</div>
<div class="cell" data-label="Arabic">نص نموذج إجراءات متفق عليها</div>
<div class="cell" data-label="English">Agreed Procedures Text</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="linkingLetterData.agreedProceduresLang">
<div class="cell" data-label="Property">linkingLetterData.agreedProceduresLang</div>
<div class="cell" data-label="Column">agreedProceduresLang</div>
<div class="cell" data-label="Arabic">Agreed Procedures Text</div>
<div class="cell" data-label="English">Agreed Procedures Text</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="linkingLetterData.preparingLists">
<div class="cell" data-label="Property">linkingLetterData.preparingLists</div>
<div class="cell" data-label="Column">preparingLists</div>
<div class="cell" data-label="Arabic">نص نموذج إعداد قوائم</div>
<div class="cell" data-label="English">Preparing Lists Text</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="linkingLetterData.preparingListsLang">
<div class="cell" data-label="Property">linkingLetterData.preparingListsLang</div>
<div class="cell" data-label="Column">preparingListsLang</div>
<div class="cell" data-label="Arabic">Preparing Lists Text</div>
<div class="cell" data-label="English">Preparing Lists Text</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="linkingLetterData.taskPerformance">
<div class="cell" data-label="Property">linkingLetterData.taskPerformance</div>
<div class="cell" data-label="Column">taskPerformance</div>
<div class="cell" data-label="Arabic">نص نموذج أداء مهمة مراجعة</div>
<div class="cell" data-label="English">Task Performance Text</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="linkingLetterData.taskPerformanceLang">
<div class="cell" data-label="Property">linkingLetterData.taskPerformanceLang</div>
<div class="cell" data-label="Column">taskPerformanceLang</div>
<div class="cell" data-label="Arabic">Task Performance Text</div>
<div class="cell" data-label="English">Task Performance Text</div>
<div class="cell" data-label="Type">BigText</div>

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

<div class="row searchable" id="phase">
<div class="cell" data-label="Property">phase</div>
<div class="cell" data-label="Column">phase_id</div>
<div class="cell" data-label="Arabic">المرحلة</div>
<div class="cell" data-label="English">Phase or Cycle</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AUPhase](/modules/auditing/AUPhase.md) 
</div>
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

<div class="row searchable" id="procedureType">
<div class="cell" data-label="Property">procedureType</div>
<div class="cell" data-label="Column">procedureType</div>
<div class="cell" data-label="Arabic">نوع الإجراء</div>
<div class="cell" data-label="English">Procedure Type</div>
<div class="cell" data-label="Type">Enum</div>

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

<div class="row searchable" id="systemGeneratedCodePrefix">
<div class="cell" data-label="Property">systemGeneratedCodePrefix</div>
<div class="cell" data-label="Column">systemGeneratedCodePrefix</div>
<div class="cell" data-label="Arabic">System Generated Code Prefix</div>
<div class="cell" data-label="English">System Generated Code Prefix</div>
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

<div id='RWLDLines' title='RWLDLines' class='searchable'>

## RWLDLines ( - )

<div class='tableName'>

**Table Name:** AURelativeWeightsListDefLine, **Join Column:** aUTestDef_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="RWLDLines.auCycle">
<div class="cell" data-label="Property">RWLDLines.auCycle</div>
<div class="cell" data-label="Column">auCycle_id</div>
<div class="cell" data-label="Arabic">الدورة المحاسبيه</div>
<div class="cell" data-label="English">Cycle</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AUCycle](/modules/auditing/AUCycle.md) 
</div>
</div>

<div class="row searchable" id="RWLDLines.id">
<div class="cell" data-label="Property">RWLDLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="RWLDLines.lineNumber">
<div class="cell" data-label="Property">RWLDLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>


</div>
</div>

<div id='indepDLines' title='indepDLines' class='searchable'>

## indepDLines ( - )

<div class='tableName'>

**Table Name:** AUIndependencyDefLine, **Join Column:** aUTestDef_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="indepDLines.id">
<div class="cell" data-label="Property">indepDLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="indepDLines.indText">
<div class="cell" data-label="Property">indepDLines.indText</div>
<div class="cell" data-label="Column">indText</div>
<div class="cell" data-label="Arabic">السؤال</div>
<div class="cell" data-label="English">Question</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="indepDLines.indTextLang">
<div class="cell" data-label="Property">indepDLines.indTextLang</div>
<div class="cell" data-label="Column">indTextLang</div>
<div class="cell" data-label="Arabic">Question</div>
<div class="cell" data-label="English">Question</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="indepDLines.lineNumber">
<div class="cell" data-label="Property">indepDLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>


</div>
</div>

<div id='inputsLines' title='inputsLines' class='searchable'>

## inputsLines ( - )

<div class='tableName'>

**Table Name:** AUAnalysisDefInput, **Join Column:** aUTestDef_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="inputsLines.account">
<div class="cell" data-label="Property">inputsLines.account</div>
<div class="cell" data-label="Column">account_id</div>
<div class="cell" data-label="Arabic"> حساب</div>
<div class="cell" data-label="English"> Account</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AUAccount](/modules/auditing/AUAccount.md) 
</div>
</div>

<div class="row searchable" id="inputsLines.id">
<div class="cell" data-label="Property">inputsLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="inputsLines.lineNumber">
<div class="cell" data-label="Property">inputsLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>


</div>
</div>

<div id='p0Procedures' title='p0Procedures' class='searchable'>

## p0Procedures ( - )

<div class='tableName'>

**Table Name:** AUProcedureP0DefLine, **Join Column:** aUTestDef_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="p0Procedures.id">
<div class="cell" data-label="Property">p0Procedures.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="p0Procedures.lineNumber">
<div class="cell" data-label="Property">p0Procedures.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="p0Procedures.maxWeight">
<div class="cell" data-label="Property">p0Procedures.maxWeight</div>
<div class="cell" data-label="Column">maxWeight</div>
<div class="cell" data-label="Arabic">الدرجة العظمى للعنصر</div>
<div class="cell" data-label="English">maxWeight</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="p0Procedures.procedureText">
<div class="cell" data-label="Property">p0Procedures.procedureText</div>
<div class="cell" data-label="Column">procedureText</div>
<div class="cell" data-label="Arabic">الاجراءات المتعارف عليها</div>
<div class="cell" data-label="English">Customary Procedures</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="p0Procedures.procedureTextLang">
<div class="cell" data-label="Property">p0Procedures.procedureTextLang</div>
<div class="cell" data-label="Column">procedureTextLang</div>
<div class="cell" data-label="Arabic">Customary Procedures</div>
<div class="cell" data-label="English">Customary Procedures</div>
<div class="cell" data-label="Type">BigText</div>

</div>


</div>
</div>

<div id='p1Procedures' title='p1Procedures' class='searchable'>

## p1Procedures ( - )

<div class='tableName'>

**Table Name:** AUProcedureP1DefLine, **Join Column:** aUTestDef_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="p1Procedures.id">
<div class="cell" data-label="Property">p1Procedures.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="p1Procedures.lineNumber">
<div class="cell" data-label="Property">p1Procedures.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="p1Procedures.procedureText">
<div class="cell" data-label="Property">p1Procedures.procedureText</div>
<div class="cell" data-label="Column">procedureText</div>
<div class="cell" data-label="Arabic">الاجراءات المتعارف عليها</div>
<div class="cell" data-label="English">Customary Procedures</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="p1Procedures.procedureTextLang">
<div class="cell" data-label="Property">p1Procedures.procedureTextLang</div>
<div class="cell" data-label="Column">procedureTextLang</div>
<div class="cell" data-label="Arabic">Customary Procedures</div>
<div class="cell" data-label="English">Customary Procedures</div>
<div class="cell" data-label="Type">BigText</div>

</div>


</div>
</div>

<div id='p2BasicProcedures' title='p2BasicProcedures' class='searchable'>

## p2BasicProcedures ( - )

<div class='tableName'>

**Table Name:** AUProcedureP2BasicDefLine, **Join Column:** aUTestDef_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="p2BasicProcedures.GAccuracy">
<div class="cell" data-label="Property">p2BasicProcedures.GAccuracy</div>
<div class="cell" data-label="Column">gAccuracy</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="p2BasicProcedures.GCompletion">
<div class="cell" data-label="Property">p2BasicProcedures.GCompletion</div>
<div class="cell" data-label="Column">gCompletion</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="p2BasicProcedures.GEvaluation">
<div class="cell" data-label="Property">p2BasicProcedures.GEvaluation</div>
<div class="cell" data-label="Column">gEvaluation</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="p2BasicProcedures.GExistence">
<div class="cell" data-label="Property">p2BasicProcedures.GExistence</div>
<div class="cell" data-label="Column">gExistence</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="p2BasicProcedures.GHealth">
<div class="cell" data-label="Property">p2BasicProcedures.GHealth</div>
<div class="cell" data-label="Column">gHealth</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="p2BasicProcedures.GOccurrence">
<div class="cell" data-label="Property">p2BasicProcedures.GOccurrence</div>
<div class="cell" data-label="Column">gOccurrence</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="p2BasicProcedures.GShowAndTab">
<div class="cell" data-label="Property">p2BasicProcedures.GShowAndTab</div>
<div class="cell" data-label="Column">gShowAndTab</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="p2BasicProcedures.auditingBalanceTarget">
<div class="cell" data-label="Property">p2BasicProcedures.auditingBalanceTarget</div>
<div class="cell" data-label="Column">auditingBalanceTarget</div>
<div class="cell" data-label="Arabic">هدف المراجعة المرتبط بالرصيد</div>
<div class="cell" data-label="English">Auditing Target Related By Balance</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="p2BasicProcedures.auditingBalanceTargetLang">
<div class="cell" data-label="Property">p2BasicProcedures.auditingBalanceTargetLang</div>
<div class="cell" data-label="Column">auditingBalanceTargetLang</div>
<div class="cell" data-label="Arabic">Auditing Target Related By Balance</div>
<div class="cell" data-label="English">Auditing Target Related By Balance</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="p2BasicProcedures.id">
<div class="cell" data-label="Property">p2BasicProcedures.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="p2BasicProcedures.lineNumber">
<div class="cell" data-label="Property">p2BasicProcedures.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="p2BasicProcedures.procedureText">
<div class="cell" data-label="Property">p2BasicProcedures.procedureText</div>
<div class="cell" data-label="Column">procedureText</div>
<div class="cell" data-label="Arabic">الاجراءات المتعارف عليها</div>
<div class="cell" data-label="English">Customary Procedures</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="p2BasicProcedures.procedureTextLang">
<div class="cell" data-label="Property">p2BasicProcedures.procedureTextLang</div>
<div class="cell" data-label="Column">procedureTextLang</div>
<div class="cell" data-label="Arabic">Customary Procedures</div>
<div class="cell" data-label="English">Customary Procedures</div>
<div class="cell" data-label="Type">BigText</div>

</div>


</div>
</div>

<div id='p2CharProcedures' title='p2CharProcedures' class='searchable'>

## p2CharProcedures ( - )

<div class='tableName'>

**Table Name:** AUProcedureP2CharacterizationDefLine, **Join Column:** aUTestDef_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="p2CharProcedures.GAccuracy">
<div class="cell" data-label="Property">p2CharProcedures.GAccuracy</div>
<div class="cell" data-label="Column">gAccuracy</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="p2CharProcedures.GCompletion">
<div class="cell" data-label="Property">p2CharProcedures.GCompletion</div>
<div class="cell" data-label="Column">gCompletion</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="p2CharProcedures.GEvaluation">
<div class="cell" data-label="Property">p2CharProcedures.GEvaluation</div>
<div class="cell" data-label="Column">gEvaluation</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="p2CharProcedures.GExistence">
<div class="cell" data-label="Property">p2CharProcedures.GExistence</div>
<div class="cell" data-label="Column">gExistence</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="p2CharProcedures.GHealth">
<div class="cell" data-label="Property">p2CharProcedures.GHealth</div>
<div class="cell" data-label="Column">gHealth</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="p2CharProcedures.GOccurrence">
<div class="cell" data-label="Property">p2CharProcedures.GOccurrence</div>
<div class="cell" data-label="Column">gOccurrence</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="p2CharProcedures.GShowAndTab">
<div class="cell" data-label="Property">p2CharProcedures.GShowAndTab</div>
<div class="cell" data-label="Column">gShowAndTab</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="p2CharProcedures.accountGroup">
<div class="cell" data-label="Property">p2CharProcedures.accountGroup</div>
<div class="cell" data-label="Column">accountGroup_id</div>
<div class="cell" data-label="Arabic">مجموعة حسابات</div>
<div class="cell" data-label="English">Accounts Group</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AUAccount](/modules/auditing/AUAccount.md) 
</div>
</div>

<div class="row searchable" id="p2CharProcedures.businessFunctions">
<div class="cell" data-label="Property">p2CharProcedures.businessFunctions</div>
<div class="cell" data-label="Column">businessFunctions</div>
<div class="cell" data-label="Arabic">وظائف الأعمال</div>
<div class="cell" data-label="English">Business Functions</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="p2CharProcedures.businessFunctionsLang">
<div class="cell" data-label="Property">p2CharProcedures.businessFunctionsLang</div>
<div class="cell" data-label="Column">businessFunctionsLang</div>
<div class="cell" data-label="Arabic">Business Functions</div>
<div class="cell" data-label="English">Business Functions</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="p2CharProcedures.documentsAndTerms">
<div class="cell" data-label="Property">p2CharProcedures.documentsAndTerms</div>
<div class="cell" data-label="Column">documentsAndTerms</div>
<div class="cell" data-label="Arabic">مستندات ودفاتر</div>
<div class="cell" data-label="English">Documents And Terms</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="p2CharProcedures.documentsAndTermsLang">
<div class="cell" data-label="Property">p2CharProcedures.documentsAndTermsLang</div>
<div class="cell" data-label="Column">documentsAndTermsLang</div>
<div class="cell" data-label="Arabic">Documents And Terms</div>
<div class="cell" data-label="English">Documents And Terms</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="p2CharProcedures.id">
<div class="cell" data-label="Property">p2CharProcedures.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="p2CharProcedures.lineNumber">
<div class="cell" data-label="Property">p2CharProcedures.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="p2CharProcedures.operations">
<div class="cell" data-label="Property">p2CharProcedures.operations</div>
<div class="cell" data-label="Column">operations</div>
<div class="cell" data-label="Arabic">العمليات</div>
<div class="cell" data-label="English">Operations</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="p2CharProcedures.operationsLang">
<div class="cell" data-label="Property">p2CharProcedures.operationsLang</div>
<div class="cell" data-label="Column">operationsLang</div>
<div class="cell" data-label="Arabic">Operations</div>
<div class="cell" data-label="English">Operations</div>
<div class="cell" data-label="Type">BigText</div>

</div>


</div>
</div>

<div id='p2ControlProcedures' title='p2ControlProcedures' class='searchable'>

## p2ControlProcedures ( - )

<div class='tableName'>

**Table Name:** AUProcedureP2ControlDefLine, **Join Column:** aUTestDef_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="p2ControlProcedures.GAccuracy">
<div class="cell" data-label="Property">p2ControlProcedures.GAccuracy</div>
<div class="cell" data-label="Column">gAccuracy</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="p2ControlProcedures.GCompletion">
<div class="cell" data-label="Property">p2ControlProcedures.GCompletion</div>
<div class="cell" data-label="Column">gCompletion</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="p2ControlProcedures.GEvaluation">
<div class="cell" data-label="Property">p2ControlProcedures.GEvaluation</div>
<div class="cell" data-label="Column">gEvaluation</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="p2ControlProcedures.GExistence">
<div class="cell" data-label="Property">p2ControlProcedures.GExistence</div>
<div class="cell" data-label="Column">gExistence</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="p2ControlProcedures.GHealth">
<div class="cell" data-label="Property">p2ControlProcedures.GHealth</div>
<div class="cell" data-label="Column">gHealth</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="p2ControlProcedures.GOccurrence">
<div class="cell" data-label="Property">p2ControlProcedures.GOccurrence</div>
<div class="cell" data-label="Column">gOccurrence</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="p2ControlProcedures.GShowAndTab">
<div class="cell" data-label="Property">p2ControlProcedures.GShowAndTab</div>
<div class="cell" data-label="Column">gShowAndTab</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="p2ControlProcedures.auditFinancialObjectives">
<div class="cell" data-label="Property">p2ControlProcedures.auditFinancialObjectives</div>
<div class="cell" data-label="Column">auditFinancialObjectives</div>
<div class="cell" data-label="Arabic">الاهداف الاساسية للمراجعة</div>
<div class="cell" data-label="English">Financial Auditing Objectives</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="p2ControlProcedures.auditFinancialObjectivesLang">
<div class="cell" data-label="Property">p2ControlProcedures.auditFinancialObjectivesLang</div>
<div class="cell" data-label="Column">auditFinancialObjectivesLang</div>
<div class="cell" data-label="Arabic">Financial Auditing Objectives</div>
<div class="cell" data-label="English">Financial Auditing Objectives</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="p2ControlProcedures.controlTest">
<div class="cell" data-label="Property">p2ControlProcedures.controlTest</div>
<div class="cell" data-label="Column">controlTest</div>
<div class="cell" data-label="Arabic">إختبارات الرقابة</div>
<div class="cell" data-label="English">Control Test</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="p2ControlProcedures.controlTestLang">
<div class="cell" data-label="Property">p2ControlProcedures.controlTestLang</div>
<div class="cell" data-label="Column">controlTestLang</div>
<div class="cell" data-label="Arabic">Control Test</div>
<div class="cell" data-label="English">Control Test</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="p2ControlProcedures.controlTypes">
<div class="cell" data-label="Property">p2ControlProcedures.controlTypes</div>
<div class="cell" data-label="Column">controlTypes</div>
<div class="cell" data-label="Arabic">أنواع الرقابة</div>
<div class="cell" data-label="English">Control Types</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="p2ControlProcedures.controlTypesLang">
<div class="cell" data-label="Property">p2ControlProcedures.controlTypesLang</div>
<div class="cell" data-label="Column">controlTypesLang</div>
<div class="cell" data-label="Arabic">Control Types</div>
<div class="cell" data-label="English">Control Types</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="p2ControlProcedures.id">
<div class="cell" data-label="Property">p2ControlProcedures.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="p2ControlProcedures.lineNumber">
<div class="cell" data-label="Property">p2ControlProcedures.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>


</div>
</div>

<div id='p3AnalyticalProcedures' title='p3AnalyticalProcedures' class='searchable'>

## p3AnalyticalProcedures ( - )

<div class='tableName'>

**Table Name:** AUProcedureP3AnalyticalDefLine, **Join Column:** aUTestDef_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="p3AnalyticalProcedures.analyticalPercentage">
<div class="cell" data-label="Property">p3AnalyticalProcedures.analyticalPercentage</div>
<div class="cell" data-label="Column">analyticalPercentage</div>
<div class="cell" data-label="Arabic">النسب التحليلية</div>
<div class="cell" data-label="English">Analytical Percentages</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="p3AnalyticalProcedures.analyticalPercentageLang">
<div class="cell" data-label="Property">p3AnalyticalProcedures.analyticalPercentageLang</div>
<div class="cell" data-label="Column">analyticalPercentageLang</div>
<div class="cell" data-label="Arabic">Analytical Percentages</div>
<div class="cell" data-label="English">Analytical Percentages</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="p3AnalyticalProcedures.id">
<div class="cell" data-label="Property">p3AnalyticalProcedures.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="p3AnalyticalProcedures.lineNumber">
<div class="cell" data-label="Property">p3AnalyticalProcedures.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="p3AnalyticalProcedures.procedureText">
<div class="cell" data-label="Property">p3AnalyticalProcedures.procedureText</div>
<div class="cell" data-label="Column">procedureText</div>
<div class="cell" data-label="Arabic">الاجراءات المتعارف عليها</div>
<div class="cell" data-label="English">Customary Procedures</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="p3AnalyticalProcedures.procedureTextLang">
<div class="cell" data-label="Property">p3AnalyticalProcedures.procedureTextLang</div>
<div class="cell" data-label="Column">procedureTextLang</div>
<div class="cell" data-label="Arabic">Customary Procedures</div>
<div class="cell" data-label="English">Customary Procedures</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="p3AnalyticalProcedures.travesties">
<div class="cell" data-label="Property">p3AnalyticalProcedures.travesties</div>
<div class="cell" data-label="Column">travesties</div>
<div class="cell" data-label="Arabic">التحريفات الهامة والمؤثرة</div>
<div class="cell" data-label="English">Travesties</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="p3AnalyticalProcedures.travestiesLang">
<div class="cell" data-label="Property">p3AnalyticalProcedures.travestiesLang</div>
<div class="cell" data-label="Column">travestiesLang</div>
<div class="cell" data-label="Arabic">Travesties</div>
<div class="cell" data-label="English">Travesties</div>
<div class="cell" data-label="Type">BigText</div>

</div>


</div>
</div>

<div id='p3DetailedProcedures' title='p3DetailedProcedures' class='searchable'>

## p3DetailedProcedures ( - )

<div class='tableName'>

**Table Name:** AUProcedureP3DetailedDefLine, **Join Column:** aUTestDef_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="p3DetailedProcedures.auditingBalanceTarget">
<div class="cell" data-label="Property">p3DetailedProcedures.auditingBalanceTarget</div>
<div class="cell" data-label="Column">auditingBalanceTarget</div>
<div class="cell" data-label="Arabic">هدف المراجعة المرتبط بالرصيد</div>
<div class="cell" data-label="English">Auditing Target Related By Balance</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="p3DetailedProcedures.auditingBalanceTargetLang">
<div class="cell" data-label="Property">p3DetailedProcedures.auditingBalanceTargetLang</div>
<div class="cell" data-label="Column">auditingBalanceTargetLang</div>
<div class="cell" data-label="Arabic">Auditing Target Related By Balance</div>
<div class="cell" data-label="English">Auditing Target Related By Balance</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="p3DetailedProcedures.id">
<div class="cell" data-label="Property">p3DetailedProcedures.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="p3DetailedProcedures.lineNumber">
<div class="cell" data-label="Property">p3DetailedProcedures.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="p3DetailedProcedures.procedureText">
<div class="cell" data-label="Property">p3DetailedProcedures.procedureText</div>
<div class="cell" data-label="Column">procedureText</div>
<div class="cell" data-label="Arabic">الاجراءات المتعارف عليها</div>
<div class="cell" data-label="English">Customary Procedures</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="p3DetailedProcedures.procedureTextLang">
<div class="cell" data-label="Property">p3DetailedProcedures.procedureTextLang</div>
<div class="cell" data-label="Column">procedureTextLang</div>
<div class="cell" data-label="Arabic">Customary Procedures</div>
<div class="cell" data-label="English">Customary Procedures</div>
<div class="cell" data-label="Type">BigText</div>

</div>


</div>
</div>

<div id='p4Procedures' title='p4Procedures' class='searchable'>

## p4Procedures ( - )

<div class='tableName'>

**Table Name:** AUProcedureP4DefLine, **Join Column:** aUTestDef_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="p4Procedures.id">
<div class="cell" data-label="Property">p4Procedures.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="p4Procedures.lineNumber">
<div class="cell" data-label="Property">p4Procedures.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="p4Procedures.procedureText">
<div class="cell" data-label="Property">p4Procedures.procedureText</div>
<div class="cell" data-label="Column">procedureText</div>
<div class="cell" data-label="Arabic">الاجراءات المتعارف عليها</div>
<div class="cell" data-label="English">Customary Procedures</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="p4Procedures.procedureTextLang">
<div class="cell" data-label="Property">p4Procedures.procedureTextLang</div>
<div class="cell" data-label="Column">procedureTextLang</div>
<div class="cell" data-label="Arabic">Customary Procedures</div>
<div class="cell" data-label="English">Customary Procedures</div>
<div class="cell" data-label="Type">BigText</div>

</div>


</div>
</div>

<div id='p5CheckProcedures' title='p5CheckProcedures' class='searchable'>

## p5CheckProcedures ( - )

<div class='tableName'>

**Table Name:** AUProcedureCheckDefLine, **Join Column:** aUTestDef_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="p5CheckProcedures.id">
<div class="cell" data-label="Property">p5CheckProcedures.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="p5CheckProcedures.lineNumber">
<div class="cell" data-label="Property">p5CheckProcedures.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="p5CheckProcedures.procedureText">
<div class="cell" data-label="Property">p5CheckProcedures.procedureText</div>
<div class="cell" data-label="Column">procedureText</div>
<div class="cell" data-label="Arabic">الاجراءات المتعارف عليها</div>
<div class="cell" data-label="English">Customary Procedures</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="p5CheckProcedures.procedureTextLang">
<div class="cell" data-label="Property">p5CheckProcedures.procedureTextLang</div>
<div class="cell" data-label="Column">procedureTextLang</div>
<div class="cell" data-label="Arabic">Customary Procedures</div>
<div class="cell" data-label="English">Customary Procedures</div>
<div class="cell" data-label="Type">BigText</div>

</div>


</div>
</div>

<div id='p6ReportsProcedures' title='p6ReportsProcedures' class='searchable'>

## p6ReportsProcedures ( - )

<div class='tableName'>

**Table Name:** AUProcedureReportsDefLine, **Join Column:** aUTestDef_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="p6ReportsProcedures.id">
<div class="cell" data-label="Property">p6ReportsProcedures.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="p6ReportsProcedures.lineNumber">
<div class="cell" data-label="Property">p6ReportsProcedures.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="p6ReportsProcedures.procedureText">
<div class="cell" data-label="Property">p6ReportsProcedures.procedureText</div>
<div class="cell" data-label="Column">procedureText</div>
<div class="cell" data-label="Arabic">الاجراءات المتعارف عليها</div>
<div class="cell" data-label="English">Customary Procedures</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="p6ReportsProcedures.procedureTextLang">
<div class="cell" data-label="Property">p6ReportsProcedures.procedureTextLang</div>
<div class="cell" data-label="Column">procedureTextLang</div>
<div class="cell" data-label="Arabic">Customary Procedures</div>
<div class="cell" data-label="English">Customary Procedures</div>
<div class="cell" data-label="Type">BigText</div>

</div>


</div>
</div>

<div id='resultsLines' title='resultsLines' class='searchable'>

## resultsLines ( - )

<div class='tableName'>

**Table Name:** AUAnalysisDefResult, **Join Column:** aUTestDef_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="resultsLines.analysisPoint">
<div class="cell" data-label="Property">resultsLines.analysisPoint</div>
<div class="cell" data-label="Column">analysisPoint_id</div>
<div class="cell" data-label="Arabic">نقاط الوصف</div>
<div class="cell" data-label="English">Description Points</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AUAnalysisPoint](/modules/auditing/AUAnalysisPoint.md) 
</div>
</div>

<div class="row searchable" id="resultsLines.id">
<div class="cell" data-label="Property">resultsLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="resultsLines.lineNumber">
<div class="cell" data-label="Property">resultsLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>


</div>
</div>

