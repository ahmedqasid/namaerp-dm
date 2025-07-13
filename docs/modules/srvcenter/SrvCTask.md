# SrvCTask
**Arabic:** المهمه - المهمات
**English:** Service Center Task - Service Center Tasks

<ContentFilter/>


<div class='searchable'>
<a href='#materials'>materials (SrvCTaskMaterialLine) </a> , <a href='#products'>products (SrvCTaskProductLine) </a> , <a href='#recurrenceRates'>recurrenceRates (SrvCTaskRecurrenceRate) </a> , <a href='#resources'>resources (SrvCTaskResourceLine) </a>
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

<div class="row searchable" id="avgPeriod">
<div class="cell" data-label="Property">avgPeriod</div>
<div class="cell" data-label="Column">avgPeriod</div>
<div class="cell" data-label="Arabic">متوسط مدة العملية</div>
<div class="cell" data-label="English">Average Period</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="brad">
<div class="cell" data-label="Property">brad</div>
<div class="cell" data-label="Column">brad_id</div>
<div class="cell" data-label="Arabic">الماركة</div>
<div class="cell" data-label="English">Brand</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SrvcBrand](/modules/srvcenter/SrvcBrand.md) 
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

<div class="row searchable" id="brandIds">
<div class="cell" data-label="Property">brandIds</div>
<div class="cell" data-label="Column">brandIds</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="classificationType">
<div class="cell" data-label="Property">classificationType</div>
<div class="cell" data-label="Column">classificationType_id</div>
<div class="cell" data-label="Arabic">التصنيف</div>
<div class="cell" data-label="English">classification</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SrvCOperationClassification](/modules/srvcenter/SrvCOperationClassification.md) 
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

<div class="row searchable" id="defaultRecurEveryKM">
<div class="cell" data-label="Property">defaultRecurEveryKM</div>
<div class="cell" data-label="Column">defaultRecurEveryKM</div>
<div class="cell" data-label="Arabic">القيمة الافتراضية لمدة تكرار الخدمة</div>
<div class="cell" data-label="English">Default Recur Every Kilometre</div>
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

<div class="row searchable" id="manufacturerSRTotalPrice">
<div class="cell" data-label="Property">manufacturerSRTotalPrice</div>
<div class="cell" data-label="Column">manufacturerSRTotalPrice</div>
<div class="cell" data-label="Arabic">إجمالي سعر المورد</div>
<div class="cell" data-label="English">Manufacturer Suggested Retail Total Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materialsIssueType">
<div class="cell" data-label="Property">materialsIssueType</div>
<div class="cell" data-label="Column">materialsIssueType</div>
<div class="cell" data-label="Arabic">طريقة صرف المواد الخام</div>
<div class="cell" data-label="English">Materials Issue Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="model">
<div class="cell" data-label="Property">model</div>
<div class="cell" data-label="Column">model_id</div>
<div class="cell" data-label="Arabic">الموديل</div>
<div class="cell" data-label="English">Item Model</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SrvProductModel](/modules/srvcenter/SrvProductModel.md) 
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

<div class="row searchable" id="productsIds">
<div class="cell" data-label="Property">productsIds</div>
<div class="cell" data-label="Column">productsIds</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

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

<div class="row searchable" id="serviceItem">
<div class="cell" data-label="Property">serviceItem</div>
<div class="cell" data-label="Column">serviceItem_id</div>
<div class="cell" data-label="Arabic">صنف الخدمة</div>
<div class="cell" data-label="English">Service Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/modules/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="systemGeneratedCodePrefix">
<div class="cell" data-label="Property">systemGeneratedCodePrefix</div>
<div class="cell" data-label="Column">systemGeneratedCodePrefix</div>
<div class="cell" data-label="Arabic">System Generated Code Prefix</div>
<div class="cell" data-label="English">System Generated Code Prefix</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="totalPrice">
<div class="cell" data-label="Property">totalPrice</div>
<div class="cell" data-label="Column">totalPrice</div>
<div class="cell" data-label="Arabic">إجمالي السعر</div>
<div class="cell" data-label="English">  Total</div>
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

<div id='materials' title='materials' class='searchable'>

## materials (قطع غيار - Spare Parts)
**Table Name:** SrvCTaskMaterialLine, **Join Column:** srvCTask_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="materials.b1">
<div class="cell" data-label="Property">materials.b1</div>
<div class="cell" data-label="Column">b1</div>
<div class="cell" data-label="Arabic">Boolean 1</div>
<div class="cell" data-label="English">Boolean 1</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="materials.b2">
<div class="cell" data-label="Property">materials.b2</div>
<div class="cell" data-label="Column">b2</div>
<div class="cell" data-label="Arabic">Boolean 2</div>
<div class="cell" data-label="English">Boolean 2</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="materials.b3">
<div class="cell" data-label="Property">materials.b3</div>
<div class="cell" data-label="Column">b3</div>
<div class="cell" data-label="Arabic">Boolean 3</div>
<div class="cell" data-label="English">Boolean 3</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="materials.b4">
<div class="cell" data-label="Property">materials.b4</div>
<div class="cell" data-label="Column">b4</div>
<div class="cell" data-label="Arabic">Boolean 4</div>
<div class="cell" data-label="English">Boolean 4</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="materials.b5">
<div class="cell" data-label="Property">materials.b5</div>
<div class="cell" data-label="Column">b5</div>
<div class="cell" data-label="Arabic">Boolean 5</div>
<div class="cell" data-label="English">Boolean 5</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="materials.brand">
<div class="cell" data-label="Property">materials.brand</div>
<div class="cell" data-label="Column">brand_id</div>
<div class="cell" data-label="Arabic">الماركة</div>
<div class="cell" data-label="English">Item Brand</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SrvcBrand](/modules/srvcenter/SrvcBrand.md) 
</div>
</div>

<div class="row searchable" id="materials.id">
<div class="cell" data-label="Property">materials.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="materials.issueType">
<div class="cell" data-label="Property">materials.issueType</div>
<div class="cell" data-label="Column">issueType</div>
<div class="cell" data-label="Arabic">طريقة الصرف</div>
<div class="cell" data-label="English">Issue Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="materials.lineNumber">
<div class="cell" data-label="Property">materials.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="materials.material">
<div class="cell" data-label="Property">materials.material</div>
<div class="cell" data-label="Column">material_id</div>
<div class="cell" data-label="Arabic">مادة خام</div>
<div class="cell" data-label="English">Material</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/modules/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="materials.materialQty.baseQty.uom">
<div class="cell" data-label="Property">materials.materialQty.baseQty.uom</div>
<div class="cell" data-label="Column">baseUom_id</div>
<div class="cell" data-label="Arabic">الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="materials.materialQty.baseQty.value">
<div class="cell" data-label="Property">materials.materialQty.baseQty.value</div>
<div class="cell" data-label="Column">baseValue</div>
<div class="cell" data-label="Arabic">الكمية</div>
<div class="cell" data-label="English">Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.materialQty.itemAssortment">
<div class="cell" data-label="Property">materials.materialQty.itemAssortment</div>
<div class="cell" data-label="Column">itemAssortment_id</div>
<div class="cell" data-label="Arabic">التشكيلة</div>
<div class="cell" data-label="English">The Assortment</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemAssortment](/modules/supplychain/ItemAssortment.md) 
</div>
</div>

<div class="row searchable" id="materials.materialQty.measureQty">
<div class="cell" data-label="Property">materials.materialQty.measureQty</div>
<div class="cell" data-label="Column">measureQty</div>
<div class="cell" data-label="Arabic">الأبعاد | عدد</div>
<div class="cell" data-label="English">Measures | Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.materialQty.measures.clippedLength1">
<div class="cell" data-label="Property">materials.materialQty.measures.clippedLength1</div>
<div class="cell" data-label="Column">clippedLength1</div>
<div class="cell" data-label="Arabic">أبعادالجزء المقصوص 1 | الطول</div>
<div class="cell" data-label="English">Clipped Part1 Measures | Length</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.materialQty.measures.height">
<div class="cell" data-label="Property">materials.materialQty.measures.height</div>
<div class="cell" data-label="Column">height</div>
<div class="cell" data-label="Arabic">الأبعاد | ر</div>
<div class="cell" data-label="English">Measures | H</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.materialQty.measures.length">
<div class="cell" data-label="Property">materials.materialQty.measures.length</div>
<div class="cell" data-label="Column">length</div>
<div class="cell" data-label="Arabic">الأبعاد | ط</div>
<div class="cell" data-label="English">Measures | L</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.materialQty.measures.text">
<div class="cell" data-label="Property">materials.materialQty.measures.text</div>
<div class="cell" data-label="Column">text</div>
<div class="cell" data-label="Arabic">الأبعاد | الأبعاد</div>
<div class="cell" data-label="English">Measures | L * W * H</div>
<div class="cell" data-label="Type">Measures</div>

</div>

<div class="row searchable" id="materials.materialQty.measures.width">
<div class="cell" data-label="Property">materials.materialQty.measures.width</div>
<div class="cell" data-label="Column">width</div>
<div class="cell" data-label="Arabic">الأبعاد | ع</div>
<div class="cell" data-label="English">Measures | W</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.materialQty.quantity.primeQty.uom">
<div class="cell" data-label="Property">materials.materialQty.quantity.primeQty.uom</div>
<div class="cell" data-label="Column">pUom_id</div>
<div class="cell" data-label="Arabic">الوحدة الرئيسية | الوحدة</div>
<div class="cell" data-label="English">Primary | UOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="materials.materialQty.quantity.primeQty.value">
<div class="cell" data-label="Property">materials.materialQty.quantity.primeQty.value</div>
<div class="cell" data-label="Column">pValue</div>
<div class="cell" data-label="Arabic">الوحدة الرئيسية | الكمية</div>
<div class="cell" data-label="English">Primary | Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.materialQty.quantity.secondQty.uom">
<div class="cell" data-label="Property">materials.materialQty.quantity.secondQty.uom</div>
<div class="cell" data-label="Column">sUom_id</div>
<div class="cell" data-label="Arabic">الوحدة الثانية | الوحدة</div>
<div class="cell" data-label="English">Secondary | UOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="materials.materialQty.quantity.secondQty.value">
<div class="cell" data-label="Property">materials.materialQty.quantity.secondQty.value</div>
<div class="cell" data-label="Column">sValue</div>
<div class="cell" data-label="Arabic">الوحدة الثانية | الكمية</div>
<div class="cell" data-label="English">Secondary | Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.materialQty.uomRate">
<div class="cell" data-label="Property">materials.materialQty.uomRate</div>
<div class="cell" data-label="Column">uomRate</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.model">
<div class="cell" data-label="Property">materials.model</div>
<div class="cell" data-label="Column">model_id</div>
<div class="cell" data-label="Arabic">الموديل</div>
<div class="cell" data-label="English">Item Model</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SrvProductModel](/modules/srvcenter/SrvProductModel.md) 
</div>
</div>

<div class="row searchable" id="materials.n1">
<div class="cell" data-label="Property">materials.n1</div>
<div class="cell" data-label="Column">n1</div>
<div class="cell" data-label="Arabic">رقم 1</div>
<div class="cell" data-label="English">Number 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.n2">
<div class="cell" data-label="Property">materials.n2</div>
<div class="cell" data-label="Column">n2</div>
<div class="cell" data-label="Arabic">رقم 2</div>
<div class="cell" data-label="English">Number 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.n3">
<div class="cell" data-label="Property">materials.n3</div>
<div class="cell" data-label="Column">n3</div>
<div class="cell" data-label="Arabic">رقم 3</div>
<div class="cell" data-label="English">Number 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.n4">
<div class="cell" data-label="Property">materials.n4</div>
<div class="cell" data-label="Column">n4</div>
<div class="cell" data-label="Arabic">رقم 4</div>
<div class="cell" data-label="English">Number 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.n5">
<div class="cell" data-label="Property">materials.n5</div>
<div class="cell" data-label="Column">n5</div>
<div class="cell" data-label="Arabic">رقم 5</div>
<div class="cell" data-label="English">Number 5</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.remarks">
<div class="cell" data-label="Property">materials.remarks</div>
<div class="cell" data-label="Column">remarks</div>
<div class="cell" data-label="Arabic">ملاحظات</div>
<div class="cell" data-label="English">Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="materials.restrictInIssuing">
<div class="cell" data-label="Property">materials.restrictInIssuing</div>
<div class="cell" data-label="Column">restrictInIssuing</div>
<div class="cell" data-label="Arabic">المطابقة في السحب</div>
<div class="cell" data-label="English">Restrict In Issuing</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="materials.satisfiedQty">
<div class="cell" data-label="Property">materials.satisfiedQty</div>
<div class="cell" data-label="Column">satisfiedQty</div>
<div class="cell" data-label="Arabic">نفذت</div>
<div class="cell" data-label="English">Satisfied Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.satisfiedQty2">
<div class="cell" data-label="Property">materials.satisfiedQty2</div>
<div class="cell" data-label="Column">satisfiedQty2</div>
<div class="cell" data-label="Arabic">نفذت 2</div>
<div class="cell" data-label="English">Satisfied Qty 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.unsatisfiedQty">
<div class="cell" data-label="Property">materials.unsatisfiedQty</div>
<div class="cell" data-label="Column">unsatisfiedQty</div>
<div class="cell" data-label="Arabic">الكمية الغير مستلمة</div>
<div class="cell" data-label="English">Unsatisfied Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.unsatisfiedQty2">
<div class="cell" data-label="Property">materials.unsatisfiedQty2</div>
<div class="cell" data-label="Column">unsatisfiedQty2</div>
<div class="cell" data-label="Arabic">الكمية الغير مستلمة 2</div>
<div class="cell" data-label="English">Unsatisfied Quantity 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.userSatisfiedQty">
<div class="cell" data-label="Property">materials.userSatisfiedQty</div>
<div class="cell" data-label="Column">userSatisfiedQty</div>
<div class="cell" data-label="Arabic">الكمية المسلمة يدويا</div>
<div class="cell" data-label="English">Manually Satisfied Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.userSatisfiedQty2">
<div class="cell" data-label="Property">materials.userSatisfiedQty2</div>
<div class="cell" data-label="Column">userSatisfiedQty2</div>
<div class="cell" data-label="Arabic">الكمية المسلمة يدويا 2</div>
<div class="cell" data-label="English">Manually Satisfied Qty 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>


</div>
</div>

<div id='products' title='products' class='searchable'>

## products (المنتجات - Products)
**Table Name:** SrvCTaskProductLine, **Join Column:** srvCTask_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="products.brad">
<div class="cell" data-label="Property">products.brad</div>
<div class="cell" data-label="Column">brad_id</div>
<div class="cell" data-label="Arabic">الماركه</div>
<div class="cell" data-label="English">Brand</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SrvcBrand](/modules/srvcenter/SrvcBrand.md) 
</div>
</div>

<div class="row searchable" id="products.description">
<div class="cell" data-label="Property">products.description</div>
<div class="cell" data-label="Column">description</div>
<div class="cell" data-label="Arabic">الوصف</div>
<div class="cell" data-label="English">Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="products.docCategory">
<div class="cell" data-label="Property">products.docCategory</div>
<div class="cell" data-label="Column">docCategory_id</div>
<div class="cell" data-label="Arabic"> تصنيف سجل</div>
<div class="cell" data-label="English"> Record Category</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DocCategory](/modules/basic/DocCategory.md) 
</div>
</div>

<div class="row searchable" id="products.genericDimensions.analysisSet">
<div class="cell" data-label="Property">products.genericDimensions.analysisSet</div>
<div class="cell" data-label="Column">analysisSet_id</div>
<div class="cell" data-label="Arabic">المجموعة التحليلية</div>
<div class="cell" data-label="English">Analysis set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/modules/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="products.genericDimensions.branch">
<div class="cell" data-label="Property">products.genericDimensions.branch</div>
<div class="cell" data-label="Column">branch_id</div>
<div class="cell" data-label="Arabic">الفرع</div>
<div class="cell" data-label="English">Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/modules/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="products.genericDimensions.department">
<div class="cell" data-label="Property">products.genericDimensions.department</div>
<div class="cell" data-label="Column">department_id</div>
<div class="cell" data-label="Arabic">الإدارة</div>
<div class="cell" data-label="English">Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/modules/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="products.genericDimensions.legalEntity">
<div class="cell" data-label="Property">products.genericDimensions.legalEntity</div>
<div class="cell" data-label="Column">legalEntity_id</div>
<div class="cell" data-label="Arabic">الشركة</div>
<div class="cell" data-label="English">Legal Entity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [LegalEntity](/modules/basic/LegalEntity.md) 
</div>
</div>

<div class="row searchable" id="products.genericDimensions.sector">
<div class="cell" data-label="Property">products.genericDimensions.sector</div>
<div class="cell" data-label="Column">sector_id</div>
<div class="cell" data-label="Arabic">القطاع</div>
<div class="cell" data-label="English">Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/modules/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="products.hourPrice">
<div class="cell" data-label="Property">products.hourPrice</div>
<div class="cell" data-label="Column">hourPrice</div>
<div class="cell" data-label="Arabic">سعر الساعة</div>
<div class="cell" data-label="English">Hour Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="products.id">
<div class="cell" data-label="Property">products.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="products.laborTime">
<div class="cell" data-label="Property">products.laborTime</div>
<div class="cell" data-label="Column">laborTime</div>
<div class="cell" data-label="Arabic">مدة التشغيل</div>
<div class="cell" data-label="English">Labor Time</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="products.lineNumber">
<div class="cell" data-label="Property">products.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="products.manufacturerSRHourPrice">
<div class="cell" data-label="Property">products.manufacturerSRHourPrice</div>
<div class="cell" data-label="Column">manufacturerSRHourPrice</div>
<div class="cell" data-label="Arabic">سعر ساعة المورد</div>
<div class="cell" data-label="English">Manufacturer Suggested Retail Hour Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="products.manufacturerSRTotalPrice">
<div class="cell" data-label="Property">products.manufacturerSRTotalPrice</div>
<div class="cell" data-label="Column">manufacturerSRTotalPrice</div>
<div class="cell" data-label="Arabic">إجمالي سعر المورد</div>
<div class="cell" data-label="English">Manufacturer Suggested Retail Total Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="products.model">
<div class="cell" data-label="Property">products.model</div>
<div class="cell" data-label="Column">model_id</div>
<div class="cell" data-label="Arabic">الموديل</div>
<div class="cell" data-label="English">Item Model</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SrvProductModel](/modules/srvcenter/SrvProductModel.md) 
</div>
</div>

<div class="row searchable" id="products.tax1.afterValue">
<div class="cell" data-label="Property">products.tax1.afterValue</div>
<div class="cell" data-label="Column">tax1AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | الصافي</div>
<div class="cell" data-label="English">Tax | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="products.tax1.maxNormalPercent">
<div class="cell" data-label="Property">products.tax1.maxNormalPercent</div>
<div class="cell" data-label="Column">tax1MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | %</div>
<div class="cell" data-label="English">Item Tax | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="products.tax1.percentage">
<div class="cell" data-label="Property">products.tax1.percentage</div>
<div class="cell" data-label="Column">tax1Percentage</div>
<div class="cell" data-label="Arabic">قيمة إضافية 1</div>
<div class="cell" data-label="English">Tax 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="products.tax1.value">
<div class="cell" data-label="Property">products.tax1.value</div>
<div class="cell" data-label="Column">tax1Value</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | القيمة</div>
<div class="cell" data-label="English">Tax value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="products.tax2.afterValue">
<div class="cell" data-label="Property">products.tax2.afterValue</div>
<div class="cell" data-label="Column">tax2AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | الصافي</div>
<div class="cell" data-label="English">Tax 2 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="products.tax2.maxNormalPercent">
<div class="cell" data-label="Property">products.tax2.maxNormalPercent</div>
<div class="cell" data-label="Column">tax2MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | %</div>
<div class="cell" data-label="English">Tax 2 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="products.tax2.percentage">
<div class="cell" data-label="Property">products.tax2.percentage</div>
<div class="cell" data-label="Column">tax2Percentage</div>
<div class="cell" data-label="Arabic">قيمة إضافية 2</div>
<div class="cell" data-label="English">Tax 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="products.tax2.value">
<div class="cell" data-label="Property">products.tax2.value</div>
<div class="cell" data-label="Column">tax2Value</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | القيمة</div>
<div class="cell" data-label="English">Tax 2 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="products.tax3.afterValue">
<div class="cell" data-label="Property">products.tax3.afterValue</div>
<div class="cell" data-label="Column">tax3AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة 3 | الصافي</div>
<div class="cell" data-label="English">Tax 3 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="products.tax3.maxNormalPercent">
<div class="cell" data-label="Property">products.tax3.maxNormalPercent</div>
<div class="cell" data-label="Column">tax3MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة 3 | %</div>
<div class="cell" data-label="English">Tax 3 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="products.tax3.percentage">
<div class="cell" data-label="Property">products.tax3.percentage</div>
<div class="cell" data-label="Column">tax3Percentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="products.tax3.value">
<div class="cell" data-label="Property">products.tax3.value</div>
<div class="cell" data-label="Column">tax3Value</div>
<div class="cell" data-label="Arabic">ضريبة 3 | القيمة</div>
<div class="cell" data-label="English">Tax 3 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="products.tax4.afterValue">
<div class="cell" data-label="Property">products.tax4.afterValue</div>
<div class="cell" data-label="Column">tax4AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة 4 | الصافي</div>
<div class="cell" data-label="English">Tax 4 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="products.tax4.maxNormalPercent">
<div class="cell" data-label="Property">products.tax4.maxNormalPercent</div>
<div class="cell" data-label="Column">tax4MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة 4 | %</div>
<div class="cell" data-label="English">Tax 4 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="products.tax4.percentage">
<div class="cell" data-label="Property">products.tax4.percentage</div>
<div class="cell" data-label="Column">tax4Percentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="products.tax4.value">
<div class="cell" data-label="Property">products.tax4.value</div>
<div class="cell" data-label="Column">tax4Value</div>
<div class="cell" data-label="Arabic">ضريبة 4 | القيمة</div>
<div class="cell" data-label="English">Tax 4 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="products.totalAfterTaxes">
<div class="cell" data-label="Property">products.totalAfterTaxes</div>
<div class="cell" data-label="Column">totalAfterTaxes</div>
<div class="cell" data-label="Arabic">الصافي بعد الضريبة</div>
<div class="cell" data-label="English">Total After Taxes</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="products.totalPrice">
<div class="cell" data-label="Property">products.totalPrice</div>
<div class="cell" data-label="Column">totalPrice</div>
<div class="cell" data-label="Arabic">إجمالي السعر</div>
<div class="cell" data-label="English">  Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>


</div>
</div>

<div id='recurrenceRates' title='recurrenceRates' class='searchable'>

## recurrenceRates (سطور معدلات التكرار - Recurrence Rates)
**Table Name:** SrvCTaskRecurrenceRate, **Join Column:** srvCTask_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="recurrenceRates.brand">
<div class="cell" data-label="Property">recurrenceRates.brand</div>
<div class="cell" data-label="Column">brand_id</div>
<div class="cell" data-label="Arabic">الماركة</div>
<div class="cell" data-label="English">Item Brand</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SrvcBrand](/modules/srvcenter/SrvcBrand.md) 
</div>
</div>

<div class="row searchable" id="recurrenceRates.id">
<div class="cell" data-label="Property">recurrenceRates.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="recurrenceRates.lineNumber">
<div class="cell" data-label="Property">recurrenceRates.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="recurrenceRates.model">
<div class="cell" data-label="Property">recurrenceRates.model</div>
<div class="cell" data-label="Column">model_id</div>
<div class="cell" data-label="Arabic">الموديل</div>
<div class="cell" data-label="English">Item Model</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SrvProductModel](/modules/srvcenter/SrvProductModel.md) 
</div>
</div>

<div class="row searchable" id="recurrenceRates.product">
<div class="cell" data-label="Property">recurrenceRates.product</div>
<div class="cell" data-label="Column">product_id</div>
<div class="cell" data-label="Arabic">المنتج</div>
<div class="cell" data-label="English">Product</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SrvCProduct](/modules/srvcenter/SrvCProduct.md) 
</div>
</div>

<div class="row searchable" id="recurrenceRates.recurEveryKM">
<div class="cell" data-label="Property">recurrenceRates.recurEveryKM</div>
<div class="cell" data-label="Column">recurEveryKM</div>
<div class="cell" data-label="Arabic">تكرر كل / كم</div>
<div class="cell" data-label="English">Recur Every KM</div>
<div class="cell" data-label="Type">Decimal</div>

</div>


</div>
</div>

<div id='resources' title='resources' class='searchable'>

## resources ( موارد التشغيل -  Resources)
**Table Name:** SrvCTaskResourceLine, **Join Column:** srvCTask_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="resources.id">
<div class="cell" data-label="Property">resources.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="resources.lineNumber">
<div class="cell" data-label="Property">resources.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="resources.remarks">
<div class="cell" data-label="Property">resources.remarks</div>
<div class="cell" data-label="Column">remarks</div>
<div class="cell" data-label="Arabic">ملاحظات</div>
<div class="cell" data-label="English">Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="resources.resource">
<div class="cell" data-label="Property">resources.resource</div>
<div class="cell" data-label="Column">resource_id</div>
<div class="cell" data-label="Arabic"> مورد تشغيل</div>
<div class="cell" data-label="English"> Resource</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Resource](/modules/supplychain/Resource.md) 
</div>
</div>

<div class="row searchable" id="resources.resourceRate">
<div class="cell" data-label="Property">resources.resourceRate</div>
<div class="cell" data-label="Column">resourceRate</div>
<div class="cell" data-label="Arabic">مدة عمل المورد</div>
<div class="cell" data-label="English">Resource Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="resources.resourcesCount">
<div class="cell" data-label="Property">resources.resourcesCount</div>
<div class="cell" data-label="Column">resourcesCount</div>
<div class="cell" data-label="Arabic">العدد</div>
<div class="cell" data-label="English">Resources Count</div>
<div class="cell" data-label="Type">Integer</div>

</div>


</div>
</div>

