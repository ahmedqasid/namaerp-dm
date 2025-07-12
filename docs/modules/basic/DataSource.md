# DataSource
**Arabic:** مصدر بيانات - مصادر بيانات
**English:** Data Source - Data Sources

<ContentFilter/>


<div class='searchable'>
<a href='#fields'>fields (DataSourceFieldLine) </a> , <a href='#parameters'>parameters (DataSourceParameterLine) </a> , <a href='#securityConstraints'>securityConstraints (DataSourceSecurityConstraints) </a> , <a href='#sortFields'>sortFields (DataSourceSortFieldLine) </a> , <a href='#unionTables'>unionTables (DataSourceUnionTablesLine) </a> , <a href='#userAliases'>userAliases (DataSourceUserAliasesLine) </a> , <a href='#whereLines'>whereLines (DataSourceWhereLine) </a>
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
</div><div class="row searchable" id="allowAllMainTableFieldsForUse">
<div class="cell" data-label="Property">allowAllMainTableFieldsForUse</div>
<div class="cell" data-label="Column">allowAllMainTableFieldsForUse</div>
<div class="cell" data-label="Arabic">إتاحة كل حقول الجدول الرئيسي للاستخدام</div>
<div class="cell" data-label="English">Allow All Main Table Fields For Use</div>
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

<div class="row searchable" id="dataModelXml">
<div class="cell" data-label="Property">dataModelXml</div>
<div class="cell" data-label="Column">dataModelXml</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

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

<div class="row searchable" id="finalStaticHavingCondition">
<div class="cell" data-label="Property">finalStaticHavingCondition</div>
<div class="cell" data-label="Column">finalStaticHavingCondition</div>
<div class="cell" data-label="Arabic">Final Static Having Condition</div>
<div class="cell" data-label="English">Final Static Having Condition</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="finalStaticWhereCondition">
<div class="cell" data-label="Property">finalStaticWhereCondition</div>
<div class="cell" data-label="Column">finalStaticWhereCondition</div>
<div class="cell" data-label="Arabic">Final Static Where Condition</div>
<div class="cell" data-label="English">Final Static Where Condition</div>
<div class="cell" data-label="Type">BigText</div>

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
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="includeDrafts">
<div class="cell" data-label="Property">includeDrafts</div>
<div class="cell" data-label="Column">includeDrafts</div>
<div class="cell" data-label="Arabic">يشمل المسودات</div>
<div class="cell" data-label="English">Include Drafts</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="mainTable">
<div class="cell" data-label="Property">mainTable</div>
<div class="cell" data-label="Column">mainTable</div>
<div class="cell" data-label="Arabic">الجدول الرئيسي</div>
<div class="cell" data-label="English">Main Table</div>
<div class="cell" data-label="Type">FieldID</div>

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

<div class="row searchable" id="selectQueryPartPrefix">
<div class="cell" data-label="Property">selectQueryPartPrefix</div>
<div class="cell" data-label="Column">selectQueryPartPrefix</div>
<div class="cell" data-label="Arabic">Select Query Part Prefix</div>
<div class="cell" data-label="English">Select Query Part Prefix</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="sqlQuery">
<div class="cell" data-label="Property">sqlQuery</div>
<div class="cell" data-label="Column">sqlQuery</div>
<div class="cell" data-label="Arabic">SQL Query</div>
<div class="cell" data-label="English">SQL Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="staticHavingCondition">
<div class="cell" data-label="Property">staticHavingCondition</div>
<div class="cell" data-label="Column">staticHavingCondition</div>
<div class="cell" data-label="Arabic">Static Having Condition</div>
<div class="cell" data-label="English">Static Having Condition</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="staticWhereCondition">
<div class="cell" data-label="Property">staticWhereCondition</div>
<div class="cell" data-label="Column">staticWhereCondition</div>
<div class="cell" data-label="Arabic">Static Where Condition</div>
<div class="cell" data-label="English">Static Where Condition</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="systemGeneratedCodePrefix">
<div class="cell" data-label="Property">systemGeneratedCodePrefix</div>
<div class="cell" data-label="Column">systemGeneratedCodePrefix</div>
<div class="cell" data-label="Arabic">System Generated Code Prefix</div>
<div class="cell" data-label="English">System Generated Code Prefix</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="tableType">
<div class="cell" data-label="Property">tableType</div>
<div class="cell" data-label="Column">tableType</div>
<div class="cell" data-label="Arabic">Table Type</div>
<div class="cell" data-label="English">Table Type</div>
<div class="cell" data-label="Type">Enum</div>

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

<div class="row searchable" id="usedInPOS">
<div class="cell" data-label="Property">usedInPOS</div>
<div class="cell" data-label="Column">usedInPOS</div>
<div class="cell" data-label="Arabic">مستخدم لنقاط البيع</div>
<div class="cell" data-label="English">Used In POS</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div id='fields' title='fields' class='searchable'>

## fields (الحقول - Fields)
**Table Name:** DataSourceFieldLine, **Join Column:** dataSource_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="fields.arabicTitle">
<div class="cell" data-label="Property">fields.arabicTitle</div>
<div class="cell" data-label="Column">arabicTitle</div>
<div class="cell" data-label="Arabic">العنوان بالعربية</div>
<div class="cell" data-label="English">Arabic Title</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="fields.barcodeType">
<div class="cell" data-label="Property">fields.barcodeType</div>
<div class="cell" data-label="Column">barcodeType</div>
<div class="cell" data-label="Arabic">نوع الباركود</div>
<div class="cell" data-label="English">Barcode Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="fields.conditionalStyleGrid">
<div class="cell" data-label="Property">fields.conditionalStyleGrid</div>
<div class="cell" data-label="Column">conditionalStyleGrid</div>
<div class="cell" data-label="Arabic">رقم جدول التنسيق الشرطي</div>
<div class="cell" data-label="English">Conditional Style Grid</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="fields.configuration">
<div class="cell" data-label="Property">fields.configuration</div>
<div class="cell" data-label="Column">configuration</div>
<div class="cell" data-label="Arabic">Configuration</div>
<div class="cell" data-label="English">Configuration</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="fields.currencyField">
<div class="cell" data-label="Property">fields.currencyField</div>
<div class="cell" data-label="Column">currencyField</div>
<div class="cell" data-label="Arabic">حقل العملة</div>
<div class="cell" data-label="English">Currency Field</div>
<div class="cell" data-label="Type">FieldID</div>

</div>

<div class="row searchable" id="fields.customHyperLinkExpression">
<div class="cell" data-label="Property">fields.customHyperLinkExpression</div>
<div class="cell" data-label="Column">customHyperLinkExpression</div>
<div class="cell" data-label="Arabic">Custom Hyper Link Expression</div>
<div class="cell" data-label="English">Custom Hyper Link Expression</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="fields.customJasperExpression">
<div class="cell" data-label="Property">fields.customJasperExpression</div>
<div class="cell" data-label="Column">customJasperExpression</div>
<div class="cell" data-label="Arabic">Custom Jasper Expression</div>
<div class="cell" data-label="English">Custom Jasper Expression</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="fields.customPattern">
<div class="cell" data-label="Property">fields.customPattern</div>
<div class="cell" data-label="Column">customPattern</div>
<div class="cell" data-label="Arabic">Custom Pattern</div>
<div class="cell" data-label="English">Custom Pattern</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="fields.customSqlExpression">
<div class="cell" data-label="Property">fields.customSqlExpression</div>
<div class="cell" data-label="Column">customSqlExpression</div>
<div class="cell" data-label="Arabic">Custom SQL Expression</div>
<div class="cell" data-label="English">Custom SQL Expression</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="fields.displayAttachmentAsImage">
<div class="cell" data-label="Property">fields.displayAttachmentAsImage</div>
<div class="cell" data-label="Column">displayAttachmentAsImage</div>
<div class="cell" data-label="Arabic">إظهار المرفق كصورة في التقرير</div>
<div class="cell" data-label="English">Display Attachment As Image</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="fields.displayFieldAs">
<div class="cell" data-label="Property">fields.displayFieldAs</div>
<div class="cell" data-label="Column">displayFieldAs</div>
<div class="cell" data-label="Arabic">إظهار الرقم كـ</div>
<div class="cell" data-label="English">Display Number As</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="fields.displayReferenceAs">
<div class="cell" data-label="Property">fields.displayReferenceAs</div>
<div class="cell" data-label="Column">displayReferenceAs</div>
<div class="cell" data-label="Arabic">إظهار المرجع كـ</div>
<div class="cell" data-label="English">Display Reference As</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="fields.doNotAddLinkToReferences">
<div class="cell" data-label="Property">fields.doNotAddLinkToReferences</div>
<div class="cell" data-label="Column">doNotAddLinkToReferences</div>
<div class="cell" data-label="Arabic">عدم إضافة لينك للمرجع</div>
<div class="cell" data-label="English">Do Not Add Link To References</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="fields.englishTitle">
<div class="cell" data-label="Property">fields.englishTitle</div>
<div class="cell" data-label="Column">englishTitle</div>
<div class="cell" data-label="Arabic">العنوان بالإنجليزية</div>
<div class="cell" data-label="English">English Title</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="fields.fieldId">
<div class="cell" data-label="Property">fields.fieldId</div>
<div class="cell" data-label="Column">fieldId</div>
<div class="cell" data-label="Arabic"> الحقل</div>
<div class="cell" data-label="English"> On Field</div>
<div class="cell" data-label="Type">FieldID</div>

</div>

<div class="row searchable" id="fields.fieldType">
<div class="cell" data-label="Property">fields.fieldType</div>
<div class="cell" data-label="Column">fieldType</div>
<div class="cell" data-label="Arabic">نوع الحقل</div>
<div class="cell" data-label="English">Field Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="fields.fieldWidth">
<div class="cell" data-label="Property">fields.fieldWidth</div>
<div class="cell" data-label="Column">fieldWidth</div>
<div class="cell" data-label="Arabic">العرض</div>
<div class="cell" data-label="English">Width</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="fields.finalHyperLinkExpression">
<div class="cell" data-label="Property">fields.finalHyperLinkExpression</div>
<div class="cell" data-label="Column">finalHyperLinkExpression</div>
<div class="cell" data-label="Arabic">Final Hyper Link Expression</div>
<div class="cell" data-label="English">Final Hyper Link Expression</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="fields.finalJasperExpression">
<div class="cell" data-label="Property">fields.finalJasperExpression</div>
<div class="cell" data-label="Column">finalJasperExpression</div>
<div class="cell" data-label="Arabic">Final Jasper Expression</div>
<div class="cell" data-label="English">Final Jasper Expression</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="fields.finalSqlExpression">
<div class="cell" data-label="Property">fields.finalSqlExpression</div>
<div class="cell" data-label="Column">finalSqlExpression</div>
<div class="cell" data-label="Arabic">Final Sql Expression</div>
<div class="cell" data-label="English">Final Sql Expression</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="fields.hasTotalInSummary">
<div class="cell" data-label="Property">fields.hasTotalInSummary</div>
<div class="cell" data-label="Column">hasTotalInSummary</div>
<div class="cell" data-label="Arabic">تجميع في الإجماليات</div>
<div class="cell" data-label="English">Has Total In Summary</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="fields.hidden">
<div class="cell" data-label="Property">fields.hidden</div>
<div class="cell" data-label="Column">hidden</div>
<div class="cell" data-label="Arabic">إخفاء</div>
<div class="cell" data-label="English">Hidden</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="fields.id">
<div class="cell" data-label="Property">fields.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="fields.lineNumber">
<div class="cell" data-label="Property">fields.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="fields.mainFieldId">
<div class="cell" data-label="Property">fields.mainFieldId</div>
<div class="cell" data-label="Column">mainFieldId</div>
<div class="cell" data-label="Arabic">الحقل الرئيسي (في حالة حقل بديل لحقل)</div>
<div class="cell" data-label="English">Main Field Id (In Case Alternative Field)</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="fields.mergedArabicTitle">
<div class="cell" data-label="Property">fields.mergedArabicTitle</div>
<div class="cell" data-label="Column">mergedArabicTitle</div>
<div class="cell" data-label="Arabic">Merged Arabic Title</div>
<div class="cell" data-label="English">Merged Arabic Title</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="fields.mergedEnglishTitle">
<div class="cell" data-label="Property">fields.mergedEnglishTitle</div>
<div class="cell" data-label="Column">mergedEnglishTitle</div>
<div class="cell" data-label="Arabic">Merged English Title</div>
<div class="cell" data-label="English">Merged English Title</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="fields.namaFieldType">
<div class="cell" data-label="Property">fields.namaFieldType</div>
<div class="cell" data-label="Column">namaFieldType</div>
<div class="cell" data-label="Arabic">Field Type</div>
<div class="cell" data-label="English">Field Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="fields.namaId">
<div class="cell" data-label="Property">fields.namaId</div>
<div class="cell" data-label="Column">namaId</div>
<div class="cell" data-label="Arabic">Nama Id</div>
<div class="cell" data-label="English">Nama Id</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="fields.patternField">
<div class="cell" data-label="Property">fields.patternField</div>
<div class="cell" data-label="Column">patternField</div>
<div class="cell" data-label="Arabic">Pattern Field</div>
<div class="cell" data-label="English">Pattern Field</div>
<div class="cell" data-label="Type">FieldID</div>

</div>

<div class="row searchable" id="fields.patternType">
<div class="cell" data-label="Property">fields.patternType</div>
<div class="cell" data-label="Column">patternType</div>
<div class="cell" data-label="Arabic">Pattern Type</div>
<div class="cell" data-label="English">Pattern Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="fields.referenceOrderBy">
<div class="cell" data-label="Property">fields.referenceOrderBy</div>
<div class="cell" data-label="Column">referenceOrderBy</div>
<div class="cell" data-label="Arabic">ترتيب المرجع بـ</div>
<div class="cell" data-label="English">Reference Order By</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="fields.showRunningTotalInsteadOfValue">
<div class="cell" data-label="Property">fields.showRunningTotalInsteadOfValue</div>
<div class="cell" data-label="Column">showRunningTotalInsteadOfValue</div>
<div class="cell" data-label="Arabic">إظهار الإجمالي الحالي في التفاصيل بدلا من القيمة</div>
<div class="cell" data-label="English">Show Running Total Instead Of Value</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="fields.showTotalInGroup1Section">
<div class="cell" data-label="Property">fields.showTotalInGroup1Section</div>
<div class="cell" data-label="Column">showTotalInGroup1Section</div>
<div class="cell" data-label="Arabic">Show Total In Group 1 Section</div>
<div class="cell" data-label="English">Show Total In Group 1 Section</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="fields.showTotalInGroup2Section">
<div class="cell" data-label="Property">fields.showTotalInGroup2Section</div>
<div class="cell" data-label="Column">showTotalInGroup2Section</div>
<div class="cell" data-label="Arabic">Show Total In Group 2 Section</div>
<div class="cell" data-label="English">Show Total In Group 2 Section</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="fields.showTotalInGroup3Section">
<div class="cell" data-label="Property">fields.showTotalInGroup3Section</div>
<div class="cell" data-label="Column">showTotalInGroup3Section</div>
<div class="cell" data-label="Arabic">Show Total In Group 3 Section</div>
<div class="cell" data-label="English">Show Total In Group 3 Section</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="fields.showTotalInGroup4Section">
<div class="cell" data-label="Property">fields.showTotalInGroup4Section</div>
<div class="cell" data-label="Column">showTotalInGroup4Section</div>
<div class="cell" data-label="Arabic">Show Total In Group 4 Section</div>
<div class="cell" data-label="English">Show Total In Group 4 Section</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="fields.showTotalInGroup5Section">
<div class="cell" data-label="Property">fields.showTotalInGroup5Section</div>
<div class="cell" data-label="Column">showTotalInGroup5Section</div>
<div class="cell" data-label="Arabic">Show Total In Group 5 Section</div>
<div class="cell" data-label="English">Show Total In Group 5 Section</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="fields.sqlAggregationType">
<div class="cell" data-label="Property">fields.sqlAggregationType</div>
<div class="cell" data-label="Column">sqlAggregationType</div>
<div class="cell" data-label="Arabic">SQL Aggregation Type</div>
<div class="cell" data-label="English">SQL Aggregation Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="fields.sqlColumns">
<div class="cell" data-label="Property">fields.sqlColumns</div>
<div class="cell" data-label="Column">sqlColumns</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="fields.style">
<div class="cell" data-label="Property">fields.style</div>
<div class="cell" data-label="Column">style_id</div>
<div class="cell" data-label="Arabic">Style</div>
<div class="cell" data-label="English">Style</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ReportStyle](/modules/basic/ReportStyle.md) 
</div>
</div>

<div class="row searchable" id="fields.summaryConditionalStyleGrid">
<div class="cell" data-label="Property">fields.summaryConditionalStyleGrid</div>
<div class="cell" data-label="Column">summaryConditionalStyleGrid</div>
<div class="cell" data-label="Arabic">رقم جدول التنسيق الشرطي للإجماليات</div>
<div class="cell" data-label="English">Summary Conditional Style Grid</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="fields.summaryStyle">
<div class="cell" data-label="Property">fields.summaryStyle</div>
<div class="cell" data-label="Column">summaryStyle_id</div>
<div class="cell" data-label="Arabic">Summary Style</div>
<div class="cell" data-label="English">Summary Style</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ReportStyle](/modules/basic/ReportStyle.md) 
</div>
</div>

<div class="row searchable" id="fields.totalPosition">
<div class="cell" data-label="Property">fields.totalPosition</div>
<div class="cell" data-label="Column">totalPosition</div>
<div class="cell" data-label="Arabic">Total Position</div>
<div class="cell" data-label="English">Total Position</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="fields.type">
<div class="cell" data-label="Property">fields.type</div>
<div class="cell" data-label="Column">type</div>
<div class="cell" data-label="Arabic">النوع</div>
<div class="cell" data-label="English">Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="fields.unionHandling">
<div class="cell" data-label="Property">fields.unionHandling</div>
<div class="cell" data-label="Column">unionHandling</div>
<div class="cell" data-label="Arabic">Union Handling</div>
<div class="cell" data-label="English">Union Handling</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="fields.userAlias">
<div class="cell" data-label="Property">fields.userAlias</div>
<div class="cell" data-label="Column">userAlias</div>
<div class="cell" data-label="Arabic">User Alias</div>
<div class="cell" data-label="English">User Alias</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="fields.widthSize">
<div class="cell" data-label="Property">fields.widthSize</div>
<div class="cell" data-label="Column">widthSize</div>
<div class="cell" data-label="Arabic">مقاس العرض</div>
<div class="cell" data-label="English">Width Size</div>
<div class="cell" data-label="Type">Enum</div>

</div>


</div>
</div>

<div id='parameters' title='parameters' class='searchable'>

## parameters (المدخلات - Parameters)
**Table Name:** DataSourceParameterLine, **Join Column:** dataSource_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="parameters.allowedValues">
<div class="cell" data-label="Property">parameters.allowedValues</div>
<div class="cell" data-label="Column">allowedValues</div>
<div class="cell" data-label="Arabic">القيم المسموح بها</div>
<div class="cell" data-label="English">Allowed Values</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="parameters.allowedValuesAr">
<div class="cell" data-label="Property">parameters.allowedValuesAr</div>
<div class="cell" data-label="Column">allowedValuesAr</div>
<div class="cell" data-label="Arabic">Arabic Allowed Values</div>
<div class="cell" data-label="English">Arabic Allowed Values</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="parameters.allowedValuesEn">
<div class="cell" data-label="Property">parameters.allowedValuesEn</div>
<div class="cell" data-label="Column">allowedValuesEn</div>
<div class="cell" data-label="Arabic">English Allowed Values</div>
<div class="cell" data-label="English">English Allowed Values</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="parameters.arabicTitle">
<div class="cell" data-label="Property">parameters.arabicTitle</div>
<div class="cell" data-label="Column">arabicTitle</div>
<div class="cell" data-label="Arabic">العنوان بالعربية</div>
<div class="cell" data-label="English">Arabic Title</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="parameters.barcodeType">
<div class="cell" data-label="Property">parameters.barcodeType</div>
<div class="cell" data-label="Column">barcodeType</div>
<div class="cell" data-label="Arabic">نوع الباركود</div>
<div class="cell" data-label="English">Barcode Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="parameters.conditionalStyleGrid">
<div class="cell" data-label="Property">parameters.conditionalStyleGrid</div>
<div class="cell" data-label="Column">conditionalStyleGrid</div>
<div class="cell" data-label="Arabic">رقم جدول التنسيق الشرطي</div>
<div class="cell" data-label="English">Conditional Style Grid</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="parameters.configuration">
<div class="cell" data-label="Property">parameters.configuration</div>
<div class="cell" data-label="Column">configuration</div>
<div class="cell" data-label="Arabic">Configuration</div>
<div class="cell" data-label="English">Configuration</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="parameters.currencyField">
<div class="cell" data-label="Property">parameters.currencyField</div>
<div class="cell" data-label="Column">currencyField</div>
<div class="cell" data-label="Arabic">حقل العملة</div>
<div class="cell" data-label="English">Currency Field</div>
<div class="cell" data-label="Type">FieldID</div>

</div>

<div class="row searchable" id="parameters.customHyperLinkExpression">
<div class="cell" data-label="Property">parameters.customHyperLinkExpression</div>
<div class="cell" data-label="Column">customHyperLinkExpression</div>
<div class="cell" data-label="Arabic">Custom Hyper Link Expression</div>
<div class="cell" data-label="English">Custom Hyper Link Expression</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="parameters.customJasperExpression">
<div class="cell" data-label="Property">parameters.customJasperExpression</div>
<div class="cell" data-label="Column">customJasperExpression</div>
<div class="cell" data-label="Arabic">Custom Jasper Expression</div>
<div class="cell" data-label="English">Custom Jasper Expression</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="parameters.customPattern">
<div class="cell" data-label="Property">parameters.customPattern</div>
<div class="cell" data-label="Column">customPattern</div>
<div class="cell" data-label="Arabic">Custom Pattern</div>
<div class="cell" data-label="English">Custom Pattern</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="parameters.customSqlExpression">
<div class="cell" data-label="Property">parameters.customSqlExpression</div>
<div class="cell" data-label="Column">customSqlExpression</div>
<div class="cell" data-label="Arabic">Custom SQL Expression</div>
<div class="cell" data-label="English">Custom SQL Expression</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="parameters.defaultValue">
<div class="cell" data-label="Property">parameters.defaultValue</div>
<div class="cell" data-label="Column">defaultValue</div>
<div class="cell" data-label="Arabic">القيمة الافتراضية</div>
<div class="cell" data-label="English">Default Value</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="parameters.defaultValueDate">
<div class="cell" data-label="Property">parameters.defaultValueDate</div>
<div class="cell" data-label="Column">defaultValueDate</div>
<div class="cell" data-label="Arabic">القيمة الافتراضية لحقل التاريخ</div>
<div class="cell" data-label="English">Date Default Value</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="parameters.defaultValueDateTime">
<div class="cell" data-label="Property">parameters.defaultValueDateTime</div>
<div class="cell" data-label="Column">defaultValueDateTime</div>
<div class="cell" data-label="Arabic">القيمة الافتراضية لحقل التاريخ والوقت</div>
<div class="cell" data-label="English">Date And Time Default Value</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="parameters.defaultValueDateTimeWithBetween">
<div class="cell" data-label="Property">parameters.defaultValueDateTimeWithBetween</div>
<div class="cell" data-label="Column">defaultValueDateTimeWithBetween</div>
<div class="cell" data-label="Arabic">القيمة الافتراضية لحقل التاريخ والوقت (تعمل مع Between)</div>
<div class="cell" data-label="English">Date And Time Default Value (works with Between)</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="parameters.defaultValueDateWithBetween">
<div class="cell" data-label="Property">parameters.defaultValueDateWithBetween</div>
<div class="cell" data-label="Column">defaultValueDateWithBetween</div>
<div class="cell" data-label="Arabic">القيمة الافتراضية لحقل التاريخ (تعمل مع Between)</div>
<div class="cell" data-label="English">Date Default Value (works with Between)</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="parameters.defaultValueTime">
<div class="cell" data-label="Property">parameters.defaultValueTime</div>
<div class="cell" data-label="Column">defaultValueTime</div>
<div class="cell" data-label="Arabic">القيمة الافتراضية لحقل الوقت</div>
<div class="cell" data-label="English">Time Default Value</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="parameters.defaultValueTimeWithBetween">
<div class="cell" data-label="Property">parameters.defaultValueTimeWithBetween</div>
<div class="cell" data-label="Column">defaultValueTimeWithBetween</div>
<div class="cell" data-label="Arabic">القيمة الافتراضية لحقل الوقت (تعمل مع Between)</div>
<div class="cell" data-label="English">Time Default Value (works with Between)</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="parameters.defaultValueWithBetween">
<div class="cell" data-label="Property">parameters.defaultValueWithBetween</div>
<div class="cell" data-label="Column">defaultValueWithBetween</div>
<div class="cell" data-label="Arabic">القيمة الافتراضية (تعمل مع Between)</div>
<div class="cell" data-label="English">Default Value (works with Between)</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="parameters.displayAttachmentAsImage">
<div class="cell" data-label="Property">parameters.displayAttachmentAsImage</div>
<div class="cell" data-label="Column">displayAttachmentAsImage</div>
<div class="cell" data-label="Arabic">إظهار المرفق كصورة في التقرير</div>
<div class="cell" data-label="English">Display Attachment As Image</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="parameters.displayFieldAs">
<div class="cell" data-label="Property">parameters.displayFieldAs</div>
<div class="cell" data-label="Column">displayFieldAs</div>
<div class="cell" data-label="Arabic">إظهار الرقم كـ</div>
<div class="cell" data-label="English">Display Number As</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="parameters.displayReferenceAs">
<div class="cell" data-label="Property">parameters.displayReferenceAs</div>
<div class="cell" data-label="Column">displayReferenceAs</div>
<div class="cell" data-label="Arabic">إظهار المرجع كـ</div>
<div class="cell" data-label="English">Display Reference As</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="parameters.doNotAddLinkToReferences">
<div class="cell" data-label="Property">parameters.doNotAddLinkToReferences</div>
<div class="cell" data-label="Column">doNotAddLinkToReferences</div>
<div class="cell" data-label="Arabic">عدم إضافة لينك للمرجع</div>
<div class="cell" data-label="English">Do Not Add Link To References</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="parameters.englishTitle">
<div class="cell" data-label="Property">parameters.englishTitle</div>
<div class="cell" data-label="Column">englishTitle</div>
<div class="cell" data-label="Arabic">العنوان بالإنجليزية</div>
<div class="cell" data-label="English">English Title</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="parameters.fieldId">
<div class="cell" data-label="Property">parameters.fieldId</div>
<div class="cell" data-label="Column">fieldId</div>
<div class="cell" data-label="Arabic"> الحقل</div>
<div class="cell" data-label="English"> On Field</div>
<div class="cell" data-label="Type">FieldID</div>

</div>

<div class="row searchable" id="parameters.fieldWidth">
<div class="cell" data-label="Property">parameters.fieldWidth</div>
<div class="cell" data-label="Column">fieldWidth</div>
<div class="cell" data-label="Arabic">العرض</div>
<div class="cell" data-label="English">Width</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="parameters.filter">
<div class="cell" data-label="Property">parameters.filter</div>
<div class="cell" data-label="Column">filter</div>
<div class="cell" data-label="Arabic">Filter</div>
<div class="cell" data-label="English">Filter</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="parameters.filterType">
<div class="cell" data-label="Property">parameters.filterType</div>
<div class="cell" data-label="Column">filterType</div>
<div class="cell" data-label="Arabic">نوع الفلتر</div>
<div class="cell" data-label="English">Filter Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="parameters.finalHyperLinkExpression">
<div class="cell" data-label="Property">parameters.finalHyperLinkExpression</div>
<div class="cell" data-label="Column">finalHyperLinkExpression</div>
<div class="cell" data-label="Arabic">Final Hyper Link Expression</div>
<div class="cell" data-label="English">Final Hyper Link Expression</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="parameters.finalJasperExpression">
<div class="cell" data-label="Property">parameters.finalJasperExpression</div>
<div class="cell" data-label="Column">finalJasperExpression</div>
<div class="cell" data-label="Arabic">Final Jasper Expression</div>
<div class="cell" data-label="English">Final Jasper Expression</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="parameters.finalSqlExpression">
<div class="cell" data-label="Property">parameters.finalSqlExpression</div>
<div class="cell" data-label="Column">finalSqlExpression</div>
<div class="cell" data-label="Arabic">Final Sql Expression</div>
<div class="cell" data-label="English">Final Sql Expression</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="parameters.generatedParameterName">
<div class="cell" data-label="Property">parameters.generatedParameterName</div>
<div class="cell" data-label="Column">generatedParameterName</div>
<div class="cell" data-label="Arabic">Generated Parameter Name</div>
<div class="cell" data-label="English">Generated Parameter Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="parameters.hasTotalInSummary">
<div class="cell" data-label="Property">parameters.hasTotalInSummary</div>
<div class="cell" data-label="Column">hasTotalInSummary</div>
<div class="cell" data-label="Arabic">تجميع في الإجماليات</div>
<div class="cell" data-label="English">Has Total In Summary</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="parameters.hidden">
<div class="cell" data-label="Property">parameters.hidden</div>
<div class="cell" data-label="Column">hidden</div>
<div class="cell" data-label="Arabic">إخفاء</div>
<div class="cell" data-label="English">Hidden</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="parameters.id">
<div class="cell" data-label="Property">parameters.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="parameters.layout">
<div class="cell" data-label="Property">parameters.layout</div>
<div class="cell" data-label="Column">layout</div>
<div class="cell" data-label="Arabic">طريقة العرض</div>
<div class="cell" data-label="English">Layout</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="parameters.lineNumber">
<div class="cell" data-label="Property">parameters.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="parameters.mainFieldId">
<div class="cell" data-label="Property">parameters.mainFieldId</div>
<div class="cell" data-label="Column">mainFieldId</div>
<div class="cell" data-label="Arabic">الحقل الرئيسي (في حالة حقل بديل لحقل)</div>
<div class="cell" data-label="English">Main Field Id (In Case Alternative Field)</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="parameters.mergedArabicTitle">
<div class="cell" data-label="Property">parameters.mergedArabicTitle</div>
<div class="cell" data-label="Column">mergedArabicTitle</div>
<div class="cell" data-label="Arabic">Merged Arabic Title</div>
<div class="cell" data-label="English">Merged Arabic Title</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="parameters.mergedEnglishTitle">
<div class="cell" data-label="Property">parameters.mergedEnglishTitle</div>
<div class="cell" data-label="Column">mergedEnglishTitle</div>
<div class="cell" data-label="Arabic">Merged English Title</div>
<div class="cell" data-label="English">Merged English Title</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="parameters.namaFieldType">
<div class="cell" data-label="Property">parameters.namaFieldType</div>
<div class="cell" data-label="Column">namaFieldType</div>
<div class="cell" data-label="Arabic">Field Type</div>
<div class="cell" data-label="English">Field Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="parameters.namaId">
<div class="cell" data-label="Property">parameters.namaId</div>
<div class="cell" data-label="Column">namaId</div>
<div class="cell" data-label="Arabic">Nama Id</div>
<div class="cell" data-label="English">Nama Id</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="parameters.paramType">
<div class="cell" data-label="Property">parameters.paramType</div>
<div class="cell" data-label="Column">paramType</div>
<div class="cell" data-label="Arabic">النوع</div>
<div class="cell" data-label="English">Param Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="parameters.parameterType">
<div class="cell" data-label="Property">parameters.parameterType</div>
<div class="cell" data-label="Column">parameterType</div>
<div class="cell" data-label="Arabic">نوع المدخل</div>
<div class="cell" data-label="English">Parameter Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="parameters.patternField">
<div class="cell" data-label="Property">parameters.patternField</div>
<div class="cell" data-label="Column">patternField</div>
<div class="cell" data-label="Arabic">Pattern Field</div>
<div class="cell" data-label="English">Pattern Field</div>
<div class="cell" data-label="Type">FieldID</div>

</div>

<div class="row searchable" id="parameters.patternType">
<div class="cell" data-label="Property">parameters.patternType</div>
<div class="cell" data-label="Column">patternType</div>
<div class="cell" data-label="Arabic">Pattern Type</div>
<div class="cell" data-label="English">Pattern Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="parameters.refDefaultValue">
<div class="cell" data-label="Property">parameters.refDefaultValue</div>
<div class="cell gen-ref-column" data-label="Column">refDefaultValueActualCode,  refDefaultValueCode,  refDefaultValueEntityType,  refDefaultValueId</div>
<div class="cell" data-label="Arabic">القيمة الافتراضية لحقل المرجع</div>
<div class="cell" data-label="English">Reference Default Value</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="parameters.refDefaultValueWithBetween">
<div class="cell" data-label="Property">parameters.refDefaultValueWithBetween</div>
<div class="cell gen-ref-column" data-label="Column">refDefaultValueWithBetweenActualCode,  refDefaultValueWithBetweenCode,  refDefaultValueWithBetweenEntityType,  refDefaultValueWithBetweenId</div>
<div class="cell" data-label="Arabic">القيمة الافتراضية لحقل المرجع (تعمل مع Between)</div>
<div class="cell" data-label="English">Reference Default Value (works with Between)</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="parameters.refEntityType">
<div class="cell" data-label="Property">parameters.refEntityType</div>
<div class="cell" data-label="Column">refEntityType</div>
<div class="cell" data-label="Arabic">نوع المرجع</div>
<div class="cell" data-label="English">Reference Entity Type</div>
<div class="cell" data-label="Type">EntityType</div>

</div>

<div class="row searchable" id="parameters.referenceOrderBy">
<div class="cell" data-label="Property">parameters.referenceOrderBy</div>
<div class="cell" data-label="Column">referenceOrderBy</div>
<div class="cell" data-label="Arabic">ترتيب المرجع بـ</div>
<div class="cell" data-label="English">Reference Order By</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="parameters.required">
<div class="cell" data-label="Property">parameters.required</div>
<div class="cell" data-label="Column">required</div>
<div class="cell" data-label="Arabic">إجبارى</div>
<div class="cell" data-label="English">Required</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="parameters.requiredGroup">
<div class="cell" data-label="Property">parameters.requiredGroup</div>
<div class="cell" data-label="Column">requiredGroup</div>
<div class="cell" data-label="Arabic">Required Group</div>
<div class="cell" data-label="English">Required Group</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="parameters.showInsideReport">
<div class="cell" data-label="Property">parameters.showInsideReport</div>
<div class="cell" data-label="Column">showInsideReport</div>
<div class="cell" data-label="Arabic">إظهار بداخل التقرير</div>
<div class="cell" data-label="English">Show Inside Report</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="parameters.showRunningTotalInsteadOfValue">
<div class="cell" data-label="Property">parameters.showRunningTotalInsteadOfValue</div>
<div class="cell" data-label="Column">showRunningTotalInsteadOfValue</div>
<div class="cell" data-label="Arabic">إظهار الإجمالي الحالي في التفاصيل بدلا من القيمة</div>
<div class="cell" data-label="English">Show Running Total Instead Of Value</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="parameters.showTotalInGroup1Section">
<div class="cell" data-label="Property">parameters.showTotalInGroup1Section</div>
<div class="cell" data-label="Column">showTotalInGroup1Section</div>
<div class="cell" data-label="Arabic">Show Total In Group 1 Section</div>
<div class="cell" data-label="English">Show Total In Group 1 Section</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="parameters.showTotalInGroup2Section">
<div class="cell" data-label="Property">parameters.showTotalInGroup2Section</div>
<div class="cell" data-label="Column">showTotalInGroup2Section</div>
<div class="cell" data-label="Arabic">Show Total In Group 2 Section</div>
<div class="cell" data-label="English">Show Total In Group 2 Section</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="parameters.showTotalInGroup3Section">
<div class="cell" data-label="Property">parameters.showTotalInGroup3Section</div>
<div class="cell" data-label="Column">showTotalInGroup3Section</div>
<div class="cell" data-label="Arabic">Show Total In Group 3 Section</div>
<div class="cell" data-label="English">Show Total In Group 3 Section</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="parameters.showTotalInGroup4Section">
<div class="cell" data-label="Property">parameters.showTotalInGroup4Section</div>
<div class="cell" data-label="Column">showTotalInGroup4Section</div>
<div class="cell" data-label="Arabic">Show Total In Group 4 Section</div>
<div class="cell" data-label="English">Show Total In Group 4 Section</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="parameters.showTotalInGroup5Section">
<div class="cell" data-label="Property">parameters.showTotalInGroup5Section</div>
<div class="cell" data-label="Column">showTotalInGroup5Section</div>
<div class="cell" data-label="Arabic">Show Total In Group 5 Section</div>
<div class="cell" data-label="English">Show Total In Group 5 Section</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="parameters.sourceParameter">
<div class="cell" data-label="Property">parameters.sourceParameter</div>
<div class="cell" data-label="Column">sourceParameter</div>
<div class="cell" data-label="Arabic">Source Parameter</div>
<div class="cell" data-label="English">Source Parameter</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="parameters.sourceProperty">
<div class="cell" data-label="Property">parameters.sourceProperty</div>
<div class="cell" data-label="Column">sourceProperty</div>
<div class="cell" data-label="Arabic">Source Property</div>
<div class="cell" data-label="English">Source Property</div>
<div class="cell" data-label="Type">FieldID</div>

</div>

<div class="row searchable" id="parameters.sqlAggregationType">
<div class="cell" data-label="Property">parameters.sqlAggregationType</div>
<div class="cell" data-label="Column">sqlAggregationType</div>
<div class="cell" data-label="Arabic">SQL Aggregation Type</div>
<div class="cell" data-label="English">SQL Aggregation Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="parameters.sqlColumns">
<div class="cell" data-label="Property">parameters.sqlColumns</div>
<div class="cell" data-label="Column">sqlColumns</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="parameters.style">
<div class="cell" data-label="Property">parameters.style</div>
<div class="cell" data-label="Column">style_id</div>
<div class="cell" data-label="Arabic">Style</div>
<div class="cell" data-label="English">Style</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ReportStyle](/modules/basic/ReportStyle.md) 
</div>
</div>

<div class="row searchable" id="parameters.summaryConditionalStyleGrid">
<div class="cell" data-label="Property">parameters.summaryConditionalStyleGrid</div>
<div class="cell" data-label="Column">summaryConditionalStyleGrid</div>
<div class="cell" data-label="Arabic">رقم جدول التنسيق الشرطي للإجماليات</div>
<div class="cell" data-label="English">Summary Conditional Style Grid</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="parameters.summaryStyle">
<div class="cell" data-label="Property">parameters.summaryStyle</div>
<div class="cell" data-label="Column">summaryStyle_id</div>
<div class="cell" data-label="Arabic">Summary Style</div>
<div class="cell" data-label="English">Summary Style</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ReportStyle](/modules/basic/ReportStyle.md) 
</div>
</div>

<div class="row searchable" id="parameters.totalPosition">
<div class="cell" data-label="Property">parameters.totalPosition</div>
<div class="cell" data-label="Column">totalPosition</div>
<div class="cell" data-label="Arabic">Total Position</div>
<div class="cell" data-label="English">Total Position</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="parameters.type">
<div class="cell" data-label="Property">parameters.type</div>
<div class="cell" data-label="Column">type</div>
<div class="cell" data-label="Arabic">النوع</div>
<div class="cell" data-label="English">Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="parameters.unionHandling">
<div class="cell" data-label="Property">parameters.unionHandling</div>
<div class="cell" data-label="Column">unionHandling</div>
<div class="cell" data-label="Arabic">Union Handling</div>
<div class="cell" data-label="English">Union Handling</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="parameters.userAlias">
<div class="cell" data-label="Property">parameters.userAlias</div>
<div class="cell" data-label="Column">userAlias</div>
<div class="cell" data-label="Arabic">User Alias (In Case SQL Expression)</div>
<div class="cell" data-label="English">User Alias (In Case SQL Expression)</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="parameters.widthSize">
<div class="cell" data-label="Property">parameters.widthSize</div>
<div class="cell" data-label="Column">widthSize</div>
<div class="cell" data-label="Arabic">مقاس العرض</div>
<div class="cell" data-label="English">Width Size</div>
<div class="cell" data-label="Type">Enum</div>

</div>


</div>
</div>

<div id='securityConstraints' title='securityConstraints' class='searchable'>

## securityConstraints (Security Constraints - Security Constraints)
**Table Name:** DataSourceSecurityConstraints, **Join Column:** dataSource_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="securityConstraints.fieldId">
<div class="cell" data-label="Property">securityConstraints.fieldId</div>
<div class="cell" data-label="Column">fieldId</div>
<div class="cell" data-label="Arabic"> الحقل</div>
<div class="cell" data-label="English"> On Field</div>
<div class="cell" data-label="Type">FieldID</div>

</div>

<div class="row searchable" id="securityConstraints.firstAuthor">
<div class="cell" data-label="Property">securityConstraints.firstAuthor</div>
<div class="cell" data-label="Column">firstAuthor</div>
<div class="cell" data-label="Arabic">منشئ السجل</div>
<div class="cell" data-label="English">First Author</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="securityConstraints.id">
<div class="cell" data-label="Property">securityConstraints.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="securityConstraints.lineNumber">
<div class="cell" data-label="Property">securityConstraints.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="securityConstraints.loginAnalysisSet">
<div class="cell" data-label="Property">securityConstraints.loginAnalysisSet</div>
<div class="cell" data-label="Column">loginAnalysisSet</div>
<div class="cell" data-label="Arabic">المجموعة التحليلية للدخول</div>
<div class="cell" data-label="English">Login Analysis Set</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="securityConstraints.loginBranch">
<div class="cell" data-label="Property">securityConstraints.loginBranch</div>
<div class="cell" data-label="Column">loginBranch</div>
<div class="cell" data-label="Arabic">فرع الدخول</div>
<div class="cell" data-label="English">Login Branch</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="securityConstraints.loginDepartment">
<div class="cell" data-label="Property">securityConstraints.loginDepartment</div>
<div class="cell" data-label="Column">loginDepartment</div>
<div class="cell" data-label="Arabic">قسم الدخول</div>
<div class="cell" data-label="English">Login Department</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="securityConstraints.loginLegalEntity">
<div class="cell" data-label="Property">securityConstraints.loginLegalEntity</div>
<div class="cell" data-label="Column">loginLegalEntity</div>
<div class="cell" data-label="Arabic">شركة الدخول</div>
<div class="cell" data-label="English">Login Legal Entity</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="securityConstraints.loginSector">
<div class="cell" data-label="Property">securityConstraints.loginSector</div>
<div class="cell" data-label="Column">loginSector</div>
<div class="cell" data-label="Arabic">قطاع الدخول</div>
<div class="cell" data-label="English">Login Sector</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="securityConstraints.updateCapability">
<div class="cell" data-label="Property">securityConstraints.updateCapability</div>
<div class="cell" data-label="Column">updateCapability</div>
<div class="cell" data-label="Arabic">صلاحية التعديل</div>
<div class="cell" data-label="English">Update Capability</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="securityConstraints.usageCapability">
<div class="cell" data-label="Property">securityConstraints.usageCapability</div>
<div class="cell" data-label="Column">usageCapability</div>
<div class="cell" data-label="Arabic">صلاحية الاستخدام</div>
<div class="cell" data-label="English">Usage Capability</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="securityConstraints.viewCapability">
<div class="cell" data-label="Property">securityConstraints.viewCapability</div>
<div class="cell" data-label="Column">viewCapability</div>
<div class="cell" data-label="Arabic">صلاحية المطالعة</div>
<div class="cell" data-label="English">View Capability</div>
<div class="cell" data-label="Type">Boolean</div>

</div>


</div>
</div>

<div id='sortFields' title='sortFields' class='searchable'>

## sortFields (حقول الترتيب - Sort Fields)
**Table Name:** DataSourceSortFieldLine, **Join Column:** dataSource_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="sortFields.arabicTitle">
<div class="cell" data-label="Property">sortFields.arabicTitle</div>
<div class="cell" data-label="Column">arabicTitle</div>
<div class="cell" data-label="Arabic">العنوان بالعربية</div>
<div class="cell" data-label="English">Arabic Title</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="sortFields.barcodeType">
<div class="cell" data-label="Property">sortFields.barcodeType</div>
<div class="cell" data-label="Column">barcodeType</div>
<div class="cell" data-label="Arabic">نوع الباركود</div>
<div class="cell" data-label="English">Barcode Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="sortFields.conditionalStyleGrid">
<div class="cell" data-label="Property">sortFields.conditionalStyleGrid</div>
<div class="cell" data-label="Column">conditionalStyleGrid</div>
<div class="cell" data-label="Arabic">رقم جدول التنسيق الشرطي</div>
<div class="cell" data-label="English">Conditional Style Grid</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="sortFields.configuration">
<div class="cell" data-label="Property">sortFields.configuration</div>
<div class="cell" data-label="Column">configuration</div>
<div class="cell" data-label="Arabic">Configuration</div>
<div class="cell" data-label="English">Configuration</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="sortFields.currencyField">
<div class="cell" data-label="Property">sortFields.currencyField</div>
<div class="cell" data-label="Column">currencyField</div>
<div class="cell" data-label="Arabic">حقل العملة</div>
<div class="cell" data-label="English">Currency Field</div>
<div class="cell" data-label="Type">FieldID</div>

</div>

<div class="row searchable" id="sortFields.customHyperLinkExpression">
<div class="cell" data-label="Property">sortFields.customHyperLinkExpression</div>
<div class="cell" data-label="Column">customHyperLinkExpression</div>
<div class="cell" data-label="Arabic">Custom Hyper Link Expression</div>
<div class="cell" data-label="English">Custom Hyper Link Expression</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="sortFields.customJasperExpression">
<div class="cell" data-label="Property">sortFields.customJasperExpression</div>
<div class="cell" data-label="Column">customJasperExpression</div>
<div class="cell" data-label="Arabic">Custom Jasper Expression</div>
<div class="cell" data-label="English">Custom Jasper Expression</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="sortFields.customPattern">
<div class="cell" data-label="Property">sortFields.customPattern</div>
<div class="cell" data-label="Column">customPattern</div>
<div class="cell" data-label="Arabic">Custom Pattern</div>
<div class="cell" data-label="English">Custom Pattern</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="sortFields.customSqlExpression">
<div class="cell" data-label="Property">sortFields.customSqlExpression</div>
<div class="cell" data-label="Column">customSqlExpression</div>
<div class="cell" data-label="Arabic">Custom SQL Expression</div>
<div class="cell" data-label="English">Custom SQL Expression</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="sortFields.displayAttachmentAsImage">
<div class="cell" data-label="Property">sortFields.displayAttachmentAsImage</div>
<div class="cell" data-label="Column">displayAttachmentAsImage</div>
<div class="cell" data-label="Arabic">إظهار المرفق كصورة في التقرير</div>
<div class="cell" data-label="English">Display Attachment As Image</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="sortFields.displayFieldAs">
<div class="cell" data-label="Property">sortFields.displayFieldAs</div>
<div class="cell" data-label="Column">displayFieldAs</div>
<div class="cell" data-label="Arabic">إظهار الرقم كـ</div>
<div class="cell" data-label="English">Display Number As</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="sortFields.displayReferenceAs">
<div class="cell" data-label="Property">sortFields.displayReferenceAs</div>
<div class="cell" data-label="Column">displayReferenceAs</div>
<div class="cell" data-label="Arabic">إظهار المرجع كـ</div>
<div class="cell" data-label="English">Display Reference As</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="sortFields.doNotAddLinkToReferences">
<div class="cell" data-label="Property">sortFields.doNotAddLinkToReferences</div>
<div class="cell" data-label="Column">doNotAddLinkToReferences</div>
<div class="cell" data-label="Arabic">عدم إضافة لينك للمرجع</div>
<div class="cell" data-label="English">Do Not Add Link To References</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="sortFields.englishTitle">
<div class="cell" data-label="Property">sortFields.englishTitle</div>
<div class="cell" data-label="Column">englishTitle</div>
<div class="cell" data-label="Arabic">العنوان بالإنجليزية</div>
<div class="cell" data-label="English">English Title</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="sortFields.fieldId">
<div class="cell" data-label="Property">sortFields.fieldId</div>
<div class="cell" data-label="Column">fieldId</div>
<div class="cell" data-label="Arabic"> الحقل</div>
<div class="cell" data-label="English"> On Field</div>
<div class="cell" data-label="Type">FieldID</div>

</div>

<div class="row searchable" id="sortFields.fieldWidth">
<div class="cell" data-label="Property">sortFields.fieldWidth</div>
<div class="cell" data-label="Column">fieldWidth</div>
<div class="cell" data-label="Arabic">العرض</div>
<div class="cell" data-label="English">Width</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="sortFields.finalHyperLinkExpression">
<div class="cell" data-label="Property">sortFields.finalHyperLinkExpression</div>
<div class="cell" data-label="Column">finalHyperLinkExpression</div>
<div class="cell" data-label="Arabic">Final Hyper Link Expression</div>
<div class="cell" data-label="English">Final Hyper Link Expression</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="sortFields.finalJasperExpression">
<div class="cell" data-label="Property">sortFields.finalJasperExpression</div>
<div class="cell" data-label="Column">finalJasperExpression</div>
<div class="cell" data-label="Arabic">Final Jasper Expression</div>
<div class="cell" data-label="English">Final Jasper Expression</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="sortFields.finalSqlExpression">
<div class="cell" data-label="Property">sortFields.finalSqlExpression</div>
<div class="cell" data-label="Column">finalSqlExpression</div>
<div class="cell" data-label="Arabic">Final Sql Expression</div>
<div class="cell" data-label="English">Final Sql Expression</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="sortFields.hasTotalInSummary">
<div class="cell" data-label="Property">sortFields.hasTotalInSummary</div>
<div class="cell" data-label="Column">hasTotalInSummary</div>
<div class="cell" data-label="Arabic">تجميع في الإجماليات</div>
<div class="cell" data-label="English">Has Total In Summary</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="sortFields.hidden">
<div class="cell" data-label="Property">sortFields.hidden</div>
<div class="cell" data-label="Column">hidden</div>
<div class="cell" data-label="Arabic">إخفاء</div>
<div class="cell" data-label="English">Hidden</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="sortFields.id">
<div class="cell" data-label="Property">sortFields.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="sortFields.lineNumber">
<div class="cell" data-label="Property">sortFields.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="sortFields.mainFieldId">
<div class="cell" data-label="Property">sortFields.mainFieldId</div>
<div class="cell" data-label="Column">mainFieldId</div>
<div class="cell" data-label="Arabic">الحقل الرئيسي (في حالة حقل بديل لحقل)</div>
<div class="cell" data-label="English">Main Field Id (In Case Alternative Field)</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="sortFields.mergedArabicTitle">
<div class="cell" data-label="Property">sortFields.mergedArabicTitle</div>
<div class="cell" data-label="Column">mergedArabicTitle</div>
<div class="cell" data-label="Arabic">Merged Arabic Title</div>
<div class="cell" data-label="English">Merged Arabic Title</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="sortFields.mergedEnglishTitle">
<div class="cell" data-label="Property">sortFields.mergedEnglishTitle</div>
<div class="cell" data-label="Column">mergedEnglishTitle</div>
<div class="cell" data-label="Arabic">Merged English Title</div>
<div class="cell" data-label="English">Merged English Title</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="sortFields.namaFieldType">
<div class="cell" data-label="Property">sortFields.namaFieldType</div>
<div class="cell" data-label="Column">namaFieldType</div>
<div class="cell" data-label="Arabic">Field Type</div>
<div class="cell" data-label="English">Field Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="sortFields.namaId">
<div class="cell" data-label="Property">sortFields.namaId</div>
<div class="cell" data-label="Column">namaId</div>
<div class="cell" data-label="Arabic">Nama Id</div>
<div class="cell" data-label="English">Nama Id</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="sortFields.patternField">
<div class="cell" data-label="Property">sortFields.patternField</div>
<div class="cell" data-label="Column">patternField</div>
<div class="cell" data-label="Arabic">Pattern Field</div>
<div class="cell" data-label="English">Pattern Field</div>
<div class="cell" data-label="Type">FieldID</div>

</div>

<div class="row searchable" id="sortFields.patternType">
<div class="cell" data-label="Property">sortFields.patternType</div>
<div class="cell" data-label="Column">patternType</div>
<div class="cell" data-label="Arabic">Pattern Type</div>
<div class="cell" data-label="English">Pattern Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="sortFields.referenceOrderBy">
<div class="cell" data-label="Property">sortFields.referenceOrderBy</div>
<div class="cell" data-label="Column">referenceOrderBy</div>
<div class="cell" data-label="Arabic">ترتيب المرجع بـ</div>
<div class="cell" data-label="English">Reference Order By</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="sortFields.showRunningTotalInsteadOfValue">
<div class="cell" data-label="Property">sortFields.showRunningTotalInsteadOfValue</div>
<div class="cell" data-label="Column">showRunningTotalInsteadOfValue</div>
<div class="cell" data-label="Arabic">إظهار الإجمالي الحالي في التفاصيل بدلا من القيمة</div>
<div class="cell" data-label="English">Show Running Total Instead Of Value</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="sortFields.showTotalInGroup1Section">
<div class="cell" data-label="Property">sortFields.showTotalInGroup1Section</div>
<div class="cell" data-label="Column">showTotalInGroup1Section</div>
<div class="cell" data-label="Arabic">Show Total In Group 1 Section</div>
<div class="cell" data-label="English">Show Total In Group 1 Section</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="sortFields.showTotalInGroup2Section">
<div class="cell" data-label="Property">sortFields.showTotalInGroup2Section</div>
<div class="cell" data-label="Column">showTotalInGroup2Section</div>
<div class="cell" data-label="Arabic">Show Total In Group 2 Section</div>
<div class="cell" data-label="English">Show Total In Group 2 Section</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="sortFields.showTotalInGroup3Section">
<div class="cell" data-label="Property">sortFields.showTotalInGroup3Section</div>
<div class="cell" data-label="Column">showTotalInGroup3Section</div>
<div class="cell" data-label="Arabic">Show Total In Group 3 Section</div>
<div class="cell" data-label="English">Show Total In Group 3 Section</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="sortFields.showTotalInGroup4Section">
<div class="cell" data-label="Property">sortFields.showTotalInGroup4Section</div>
<div class="cell" data-label="Column">showTotalInGroup4Section</div>
<div class="cell" data-label="Arabic">Show Total In Group 4 Section</div>
<div class="cell" data-label="English">Show Total In Group 4 Section</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="sortFields.showTotalInGroup5Section">
<div class="cell" data-label="Property">sortFields.showTotalInGroup5Section</div>
<div class="cell" data-label="Column">showTotalInGroup5Section</div>
<div class="cell" data-label="Arabic">Show Total In Group 5 Section</div>
<div class="cell" data-label="English">Show Total In Group 5 Section</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="sortFields.sortDirection">
<div class="cell" data-label="Property">sortFields.sortDirection</div>
<div class="cell" data-label="Column">sortDirection</div>
<div class="cell" data-label="Arabic">اتجاه الترتيب</div>
<div class="cell" data-label="English">Sort Direction</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="sortFields.sqlAggregationType">
<div class="cell" data-label="Property">sortFields.sqlAggregationType</div>
<div class="cell" data-label="Column">sqlAggregationType</div>
<div class="cell" data-label="Arabic">SQL Aggregation Type</div>
<div class="cell" data-label="English">SQL Aggregation Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="sortFields.sqlColumns">
<div class="cell" data-label="Property">sortFields.sqlColumns</div>
<div class="cell" data-label="Column">sqlColumns</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="sortFields.style">
<div class="cell" data-label="Property">sortFields.style</div>
<div class="cell" data-label="Column">style_id</div>
<div class="cell" data-label="Arabic">Style</div>
<div class="cell" data-label="English">Style</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ReportStyle](/modules/basic/ReportStyle.md) 
</div>
</div>

<div class="row searchable" id="sortFields.summaryConditionalStyleGrid">
<div class="cell" data-label="Property">sortFields.summaryConditionalStyleGrid</div>
<div class="cell" data-label="Column">summaryConditionalStyleGrid</div>
<div class="cell" data-label="Arabic">رقم جدول التنسيق الشرطي للإجماليات</div>
<div class="cell" data-label="English">Summary Conditional Style Grid</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="sortFields.summaryStyle">
<div class="cell" data-label="Property">sortFields.summaryStyle</div>
<div class="cell" data-label="Column">summaryStyle_id</div>
<div class="cell" data-label="Arabic">Summary Style</div>
<div class="cell" data-label="English">Summary Style</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ReportStyle](/modules/basic/ReportStyle.md) 
</div>
</div>

<div class="row searchable" id="sortFields.totalPosition">
<div class="cell" data-label="Property">sortFields.totalPosition</div>
<div class="cell" data-label="Column">totalPosition</div>
<div class="cell" data-label="Arabic">Total Position</div>
<div class="cell" data-label="English">Total Position</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="sortFields.type">
<div class="cell" data-label="Property">sortFields.type</div>
<div class="cell" data-label="Column">type</div>
<div class="cell" data-label="Arabic">النوع</div>
<div class="cell" data-label="English">Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="sortFields.unionHandling">
<div class="cell" data-label="Property">sortFields.unionHandling</div>
<div class="cell" data-label="Column">unionHandling</div>
<div class="cell" data-label="Arabic">Union Handling</div>
<div class="cell" data-label="English">Union Handling</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="sortFields.usedAsDefaultValueToParameterNumber">
<div class="cell" data-label="Property">sortFields.usedAsDefaultValueToParameterNumber</div>
<div class="cell" data-label="Column">usedAsDefaultValueToParameterNumber</div>
<div class="cell" data-label="Arabic">يستعمل كقيمة افتراضية للمدخل رقم</div>
<div class="cell" data-label="English">Used As Default Value To Parameter Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="sortFields.userAlias">
<div class="cell" data-label="Property">sortFields.userAlias</div>
<div class="cell" data-label="Column">userAlias</div>
<div class="cell" data-label="Arabic">User Alias</div>
<div class="cell" data-label="English">User Alias</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="sortFields.widthSize">
<div class="cell" data-label="Property">sortFields.widthSize</div>
<div class="cell" data-label="Column">widthSize</div>
<div class="cell" data-label="Arabic">مقاس العرض</div>
<div class="cell" data-label="English">Width Size</div>
<div class="cell" data-label="Type">Enum</div>

</div>


</div>
</div>

<div id='unionTables' title='unionTables' class='searchable'>

## unionTables (Union Tables - Union Tables)
**Table Name:** DataSourceUnionTablesLine, **Join Column:** dataSource_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="unionTables.id">
<div class="cell" data-label="Property">unionTables.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="unionTables.lineNumber">
<div class="cell" data-label="Property">unionTables.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="unionTables.unionTable">
<div class="cell" data-label="Property">unionTables.unionTable</div>
<div class="cell" data-label="Column">unionTable</div>
<div class="cell" data-label="Arabic">Union Table</div>
<div class="cell" data-label="English">Union Table</div>
<div class="cell" data-label="Type">FieldID</div>

</div>


</div>
</div>

<div id='userAliases' title='userAliases' class='searchable'>

## userAliases (User Aliases - User Aliases)
**Table Name:** DataSourceUserAliasesLine, **Join Column:** dataSource_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="userAliases.id">
<div class="cell" data-label="Property">userAliases.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="userAliases.lineNumber">
<div class="cell" data-label="Property">userAliases.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="userAliases.propertyName">
<div class="cell" data-label="Property">userAliases.propertyName</div>
<div class="cell" data-label="Column">propertyName</div>
<div class="cell" data-label="Arabic">Property Name</div>
<div class="cell" data-label="English">Property Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="userAliases.systemAlias">
<div class="cell" data-label="Property">userAliases.systemAlias</div>
<div class="cell" data-label="Column">systemAlias</div>
<div class="cell" data-label="Arabic">System Alias</div>
<div class="cell" data-label="English">System Alias</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="userAliases.tableName">
<div class="cell" data-label="Property">userAliases.tableName</div>
<div class="cell" data-label="Column">tableName</div>
<div class="cell" data-label="Arabic">Table Name</div>
<div class="cell" data-label="English">Table Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="userAliases.userAlias">
<div class="cell" data-label="Property">userAliases.userAlias</div>
<div class="cell" data-label="Column">userAlias</div>
<div class="cell" data-label="Arabic">User Alias</div>
<div class="cell" data-label="English">User Alias</div>
<div class="cell" data-label="Type">Text</div>

</div>


</div>
</div>

<div id='whereLines' title='whereLines' class='searchable'>

## whereLines (Where Lines - Where Lines)
**Table Name:** DataSourceWhereLine, **Join Column:** dataSource_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="whereLines.doNotQuote">
<div class="cell" data-label="Property">whereLines.doNotQuote</div>
<div class="cell" data-label="Column">doNotQuote</div>
<div class="cell" data-label="Arabic">Do Not Quote</div>
<div class="cell" data-label="English">Do Not Quote</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="whereLines.id">
<div class="cell" data-label="Property">whereLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="whereLines.lhsFieldId">
<div class="cell" data-label="Property">whereLines.lhsFieldId</div>
<div class="cell" data-label="Column">lhsFieldId</div>
<div class="cell" data-label="Arabic">LHS Field Id</div>
<div class="cell" data-label="English">LHS Field Id</div>
<div class="cell" data-label="Type">FieldID</div>

</div>

<div class="row searchable" id="whereLines.lineNumber">
<div class="cell" data-label="Property">whereLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="whereLines.operator">
<div class="cell" data-label="Property">whereLines.operator</div>
<div class="cell" data-label="Column">operator</div>
<div class="cell" data-label="Arabic">المعامل</div>
<div class="cell" data-label="English">Operator</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="whereLines.rhsDefaultValueDate">
<div class="cell" data-label="Property">whereLines.rhsDefaultValueDate</div>
<div class="cell" data-label="Column">rhsDefaultValueDate</div>
<div class="cell" data-label="Arabic">RHS Default Value Date</div>
<div class="cell" data-label="English">RHS Default Value Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="whereLines.rhsDefaultValueDateTime">
<div class="cell" data-label="Property">whereLines.rhsDefaultValueDateTime</div>
<div class="cell" data-label="Column">rhsDefaultValueDateTime</div>
<div class="cell" data-label="Arabic">RHS Default Value Date Time</div>
<div class="cell" data-label="English">RHS Default Value Date Time</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="whereLines.rhsDefaultValueDateTimeWithBetween">
<div class="cell" data-label="Property">whereLines.rhsDefaultValueDateTimeWithBetween</div>
<div class="cell" data-label="Column">rhsDefaultValueDateTimeWithBetween</div>
<div class="cell" data-label="Arabic">RHS Default Value Date Time (Works with Between)</div>
<div class="cell" data-label="English">RHS Default Value Date Time (Works with Between)</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="whereLines.rhsDefaultValueDateWithBetween">
<div class="cell" data-label="Property">whereLines.rhsDefaultValueDateWithBetween</div>
<div class="cell" data-label="Column">rhsDefaultValueDateWithBetween</div>
<div class="cell" data-label="Arabic">RHS Default Value Date (Works with Between)</div>
<div class="cell" data-label="English">RHS Default Value Date (Works with Between)</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="whereLines.rhsDefaultValueTime">
<div class="cell" data-label="Property">whereLines.rhsDefaultValueTime</div>
<div class="cell" data-label="Column">rhsDefaultValueTime</div>
<div class="cell" data-label="Arabic">RHS Default Value Time</div>
<div class="cell" data-label="English">RHS Default Value Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="whereLines.rhsDefaultValueTimeWithBetween">
<div class="cell" data-label="Property">whereLines.rhsDefaultValueTimeWithBetween</div>
<div class="cell" data-label="Column">rhsDefaultValueTimeWithBetween</div>
<div class="cell" data-label="Arabic">RHS Default Value Time (Works with Between)</div>
<div class="cell" data-label="English">RHS Default Value Time (Works with Between)</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="whereLines.rhsFieldId">
<div class="cell" data-label="Property">whereLines.rhsFieldId</div>
<div class="cell" data-label="Column">rhsFieldId</div>
<div class="cell" data-label="Arabic">RHS Field Id</div>
<div class="cell" data-label="English">RHS Field Id</div>
<div class="cell" data-label="Type">FieldID</div>

</div>

<div class="row searchable" id="whereLines.rhsRefDefaultValue">
<div class="cell" data-label="Property">whereLines.rhsRefDefaultValue</div>
<div class="cell gen-ref-column" data-label="Column">rhsRefDefaultValueActualCode,  rhsRefDefaultValueCode,  rhsRefDefaultValueEntityType,  rhsRefDefaultValueId</div>
<div class="cell" data-label="Arabic">RHS Reference Default Value</div>
<div class="cell" data-label="English">RHS Reference Default Value</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="whereLines.rhsRefDefaultValueWithBetween">
<div class="cell" data-label="Property">whereLines.rhsRefDefaultValueWithBetween</div>
<div class="cell gen-ref-column" data-label="Column">rhsRefDefaultValueWithBetweenActualCode,  rhsRefDefaultValueWithBetweenCode,  rhsRefDefaultValueWithBetweenEntityType,  rhsRefDefaultValueWithBetweenId</div>
<div class="cell" data-label="Arabic">RHS Reference Default Value (Works with Between)</div>
<div class="cell" data-label="English">RHS Reference Default Value (Works with Between)</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="whereLines.rhsValue">
<div class="cell" data-label="Property">whereLines.rhsValue</div>
<div class="cell" data-label="Column">rhsValue</div>
<div class="cell" data-label="Arabic">RHS Value</div>
<div class="cell" data-label="English">RHS Value</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="whereLines.rhsValueWithBetween">
<div class="cell" data-label="Property">whereLines.rhsValueWithBetween</div>
<div class="cell" data-label="Column">rhsValueWithBetween</div>
<div class="cell" data-label="Arabic">RHS Value (Works with Between)</div>
<div class="cell" data-label="English">RHS Value (Works with Between)</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="whereLines.specialValue">
<div class="cell" data-label="Property">whereLines.specialValue</div>
<div class="cell" data-label="Column">specialValue</div>
<div class="cell" data-label="Arabic">Special Value</div>
<div class="cell" data-label="English">Special Value</div>
<div class="cell" data-label="Type">Text</div>

</div>


</div>
</div>

