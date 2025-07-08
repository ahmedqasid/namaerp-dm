# CRTNSpecification
**Arabic:** مواصفات الكرتونة -  مواصفات الكرتونة
**English:** CRTN Specification

<ContentFilter/>


<div class='searchable'>
<a href='#firstProductionStage'>firstProductionStage (CRTNSpecificationFirstProductionStage) </a> , <a href='#routings'>routings (CRTNSpecificationRouting) </a> , <a href='#secondProductionStage'>secondProductionStage (CRTNSpecificationSecondProductionStage) </a> , <a href='#thirdProductionStage'>thirdProductionStage (CRTNSpecificationThirdProductionStage) </a>
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

<div class="row searchable" id="bct">
<div class="cell" data-label="Property">bct</div>
<div class="cell" data-label="Column">bct</div>
<div class="cell" data-label="Arabic">B.C.T</div>
<div class="cell" data-label="English">B.C.T</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="cartonSpecs">
<div class="cell" data-label="Property">cartonSpecs</div>
<div class="cell" data-label="Column">cartonSpecs_id</div>
<div class="cell" data-label="Arabic">مواصفات الكرتونة</div>
<div class="cell" data-label="English">Carton Specs</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CRTNSpecification](/entities/manufacturing-crtn-pln/CRTNSpecification.md) 
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

<div class="row searchable" id="countOfCRTNInPackage">
<div class="cell" data-label="Property">countOfCRTNInPackage</div>
<div class="cell" data-label="Column">countOfCRTNInPackage</div>
<div class="cell" data-label="Arabic">عدد الكراتين في الرابطة</div>
<div class="cell" data-label="English">Count Of Carton In Package</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="countOfCRTNInPallet">
<div class="cell" data-label="Property">countOfCRTNInPallet</div>
<div class="cell" data-label="Column">countOfCRTNInPallet</div>
<div class="cell" data-label="Arabic">عدد الكراتين في الطبلية</div>
<div class="cell" data-label="English">Count Of Carton In Pallet</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="creaseMold">
<div class="cell" data-label="Property">creaseMold</div>
<div class="cell" data-label="Column">creaseMold_id</div>
<div class="cell" data-label="Arabic">قالب الطيات (فورم)</div>
<div class="cell" data-label="English">Crease Mold</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MFGMold](/entities/manufacturing-molds/MFGMold.md) 
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

<div class="row searchable" id="customer">
<div class="cell" data-label="Property">customer</div>
<div class="cell" data-label="Column">customer_id</div>
<div class="cell" data-label="Arabic">العميل</div>
<div class="cell" data-label="English">Customer</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Customer](/entities/basic/Customer.md) 
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

<div class="row searchable" id="ect">
<div class="cell" data-label="Property">ect</div>
<div class="cell" data-label="Column">ect</div>
<div class="cell" data-label="Arabic">E.C.T</div>
<div class="cell" data-label="English">E.C.T</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="flapValue">
<div class="cell" data-label="Property">flapValue</div>
<div class="cell" data-label="Column">flapValue</div>
<div class="cell" data-label="Arabic">اللسان</div>
<div class="cell" data-label="English">Flap Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="fluting">
<div class="cell" data-label="Property">fluting</div>
<div class="cell" data-label="Column">fluting_id</div>
<div class="cell" data-label="Arabic">الريجة</div>
<div class="cell" data-label="English">Fluting</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CRTNFluting](/entities/manufacturing-crtn-pln/CRTNFluting.md) 
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

<div class="row searchable" id="group">
<div class="cell" data-label="Property">group</div>
<div class="cell" data-label="Column">group_id</div>
<div class="cell" data-label="Arabic">المجموعة</div>
<div class="cell" data-label="English">Group</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MasterGroup](/entities/basic/MasterGroup.md) 
</div>
</div>

<div class="row searchable" id="hasBadge">
<div class="cell" data-label="Property">hasBadge</div>
<div class="cell" data-label="Column">hasBadge</div>
<div class="cell" data-label="Arabic">له بادج</div>
<div class="cell" data-label="English">Has Badge</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="height">
<div class="cell" data-label="Property">height</div>
<div class="cell" data-label="Column">height</div>
<div class="cell" data-label="Arabic">الأبعاد | الارتفاع</div>
<div class="cell" data-label="English">Measures | Height</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="item">
<div class="cell" data-label="Property">item</div>
<div class="cell" data-label="Column">item_id</div>
<div class="cell" data-label="Arabic">الصنف</div>
<div class="cell" data-label="English">Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/entities/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="joinType">
<div class="cell" data-label="Property">joinType</div>
<div class="cell" data-label="Column">joinType_id</div>
<div class="cell" data-label="Arabic">نوع التقفيل</div>
<div class="cell" data-label="English">Join Type</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CRTNJoinType](/entities/manufacturing-crtn-pln/CRTNJoinType.md) 
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

<div class="row searchable" id="length">
<div class="cell" data-label="Property">length</div>
<div class="cell" data-label="Column">length</div>
<div class="cell" data-label="Arabic">الأبعاد | الطول</div>
<div class="cell" data-label="English">Measures | Length</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="loadingType">
<div class="cell" data-label="Property">loadingType</div>
<div class="cell" data-label="Column">loadingType_id</div>
<div class="cell" data-label="Arabic">نوع التحميل</div>
<div class="cell" data-label="English">Loading Type</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CRTNLoadingType](/entities/manufacturing-crtn-pln/CRTNLoadingType.md) 
</div>
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

 [LargeData](/entities/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="multiplicationLength">
<div class="cell" data-label="Property">multiplicationLength</div>
<div class="cell" data-label="Column">multiplicationLength</div>
<div class="cell" data-label="Arabic">التضاعف طول</div>
<div class="cell" data-label="English">Multiplication Length</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="multiplicationWidth">
<div class="cell" data-label="Property">multiplicationWidth</div>
<div class="cell" data-label="Column">multiplicationWidth</div>
<div class="cell" data-label="Arabic">التضاعف عرض</div>
<div class="cell" data-label="English">Multiplication Width</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="packagedProductInfo.additionalAttachments">
<div class="cell" data-label="Property">packagedProductInfo.additionalAttachments</div>
<div class="cell" data-label="Column">additionalAttachments</div>
<div class="cell" data-label="Arabic">مرفقات اخرى</div>
<div class="cell" data-label="English">Additional Attachments</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="packagedProductInfo.cartonsHeightInTheStack">
<div class="cell" data-label="Property">packagedProductInfo.cartonsHeightInTheStack</div>
<div class="cell" data-label="Column">cartonsHeightInTheStack</div>
<div class="cell" data-label="Arabic">ارتفاع الكراتين في الرص</div>
<div class="cell" data-label="English">Cartons Height In The Stack</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="packagedProductInfo.forCooling">
<div class="cell" data-label="Property">packagedProductInfo.forCooling</div>
<div class="cell" data-label="Column">forCooling</div>
<div class="cell" data-label="Arabic">للتبريد</div>
<div class="cell" data-label="English">For Cooling</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="packagedProductInfo.forExport">
<div class="cell" data-label="Property">packagedProductInfo.forExport</div>
<div class="cell" data-label="Column">forExport</div>
<div class="cell" data-label="Arabic">للتصدير</div>
<div class="cell" data-label="English">For Export</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="packagedProductInfo.forFreezing">
<div class="cell" data-label="Property">packagedProductInfo.forFreezing</div>
<div class="cell" data-label="Column">forFreezing</div>
<div class="cell" data-label="Arabic">للتجميد</div>
<div class="cell" data-label="English">For Freezing</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="packagedProductInfo.packagingMethod">
<div class="cell" data-label="Property">packagedProductInfo.packagingMethod</div>
<div class="cell" data-label="Column">packagingMethod</div>
<div class="cell" data-label="Arabic">طريقة التعبئة</div>
<div class="cell" data-label="English">Packaging Method</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="packagedProductInfo.prodcutWeight">
<div class="cell" data-label="Property">packagedProductInfo.prodcutWeight</div>
<div class="cell" data-label="Column">prodcutWeight</div>
<div class="cell" data-label="Arabic">وزن المنتج</div>
<div class="cell" data-label="English">Product Weight</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="packagedProductInfo.productType">
<div class="cell" data-label="Property">packagedProductInfo.productType</div>
<div class="cell" data-label="Column">productType</div>
<div class="cell" data-label="Arabic">نوع المنتج</div>
<div class="cell" data-label="English">Product Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="packagedProductInfo.sampleAttached">
<div class="cell" data-label="Property">packagedProductInfo.sampleAttached</div>
<div class="cell" data-label="Column">sampleAttached</div>
<div class="cell" data-label="Arabic">مرفق عينة</div>
<div class="cell" data-label="English">Sample Attached</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="parentCode">
<div class="cell" data-label="Property">parentCode</div>
<div class="cell" data-label="Column">parentCode</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="pattern">
<div class="cell" data-label="Property">pattern</div>
<div class="cell" data-label="Column">pattern_id</div>
<div class="cell" data-label="Arabic">النمط</div>
<div class="cell" data-label="English">Pattern</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CRTNPattern](/entities/manufacturing-crtn-pln/CRTNPattern.md) 
</div>
</div>

<div class="row searchable" id="permittedPercentage">
<div class="cell" data-label="Property">permittedPercentage</div>
<div class="cell" data-label="Column">permittedPercentage</div>
<div class="cell" data-label="Arabic">نسبة السماحية</div>
<div class="cell" data-label="English">Permitted Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="preventUsage">
<div class="cell" data-label="Property">preventUsage</div>
<div class="cell" data-label="Column">preventUsage</div>
<div class="cell" data-label="Arabic">منع الاستعمال</div>
<div class="cell" data-label="English">Prevent Usage</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="price">
<div class="cell" data-label="Property">price</div>
<div class="cell" data-label="Column">price</div>
<div class="cell" data-label="Arabic">السعر</div>
<div class="cell" data-label="English">Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="printCount">
<div class="cell" data-label="Property">printCount</div>
<div class="cell" data-label="Column">printCount</div>
<div class="cell" data-label="Arabic">عدد مرات الطباعة</div>
<div class="cell" data-label="English">Print Count</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="printingMold">
<div class="cell" data-label="Property">printingMold</div>
<div class="cell" data-label="Column">printingMold_id</div>
<div class="cell" data-label="Arabic">قالب الطباعة (سريلة)</div>
<div class="cell" data-label="English">Printing Mold</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MFGMold](/entities/manufacturing-molds/MFGMold.md) 
</div>
</div>

<div class="row searchable" id="printingType">
<div class="cell" data-label="Property">printingType</div>
<div class="cell" data-label="Column">printingType_id</div>
<div class="cell" data-label="Arabic">نوع الطباعة</div>
<div class="cell" data-label="English">Printing Type</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CRTNPrintingType](/entities/manufacturing-crtn-pln/CRTNPrintingType.md) 
</div>
</div>

<div class="row searchable" id="quantity">
<div class="cell" data-label="Property">quantity</div>
<div class="cell" data-label="Column">quantity</div>
<div class="cell" data-label="Arabic">الكمية</div>
<div class="cell" data-label="English">Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="remarks1">
<div class="cell" data-label="Property">remarks1</div>
<div class="cell" data-label="Column">remarks1</div>
<div class="cell" data-label="Arabic">ملاحظات 1</div>
<div class="cell" data-label="English">Remarks 1</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="remarks2">
<div class="cell" data-label="Property">remarks2</div>
<div class="cell" data-label="Column">remarks2</div>
<div class="cell" data-label="Arabic">ملاحظات 2</div>
<div class="cell" data-label="English">Remarks 2</div>
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

<div class="row searchable" id="salesMan">
<div class="cell" data-label="Property">salesMan</div>
<div class="cell" data-label="Column">salesMan_id</div>
<div class="cell" data-label="Arabic">مندوب المبيعات</div>
<div class="cell" data-label="English">Salesman</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/entities/basic/Employee.md) 
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

<div class="row searchable" id="sheetLength">
<div class="cell" data-label="Property">sheetLength</div>
<div class="cell" data-label="Column">sheetLength</div>
<div class="cell" data-label="Arabic">طول الشيت</div>
<div class="cell" data-label="English">Sheet Length</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="sheetWidth">
<div class="cell" data-label="Property">sheetWidth</div>
<div class="cell" data-label="Column">sheetWidth</div>
<div class="cell" data-label="Arabic">عرض الشيت</div>
<div class="cell" data-label="English">Sheet Width</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="slottingType">
<div class="cell" data-label="Property">slottingType</div>
<div class="cell" data-label="Column">slottingType_id</div>
<div class="cell" data-label="Arabic">نوع التفتيح</div>
<div class="cell" data-label="English">Slotting Type</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CRTNSlottingType](/entities/manufacturing-crtn-pln/CRTNSlottingType.md) 
</div>
</div>

<div class="row searchable" id="specificationType">
<div class="cell" data-label="Property">specificationType</div>
<div class="cell" data-label="Column">specificationType</div>
<div class="cell" data-label="Arabic">نوع المواصفة</div>
<div class="cell" data-label="English">Specification Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="starchLevel">
<div class="cell" data-label="Property">starchLevel</div>
<div class="cell" data-label="Column">starchLevel</div>
<div class="cell" data-label="Arabic">منسوب النشا</div>
<div class="cell" data-label="English">Starch Level</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="systemGeneratedCodePrefix">
<div class="cell" data-label="Property">systemGeneratedCodePrefix</div>
<div class="cell" data-label="Column">systemGeneratedCodePrefix</div>
<div class="cell" data-label="Arabic">System Generated Code Prefix</div>
<div class="cell" data-label="English">System Generated Code Prefix</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="type">
<div class="cell" data-label="Property">type</div>
<div class="cell" data-label="Column">type_id</div>
<div class="cell" data-label="Arabic">النوع</div>
<div class="cell" data-label="English">Type</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CRTNType](/entities/manufacturing-crtn-pln/CRTNType.md) 
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

<div class="row searchable" id="weight">
<div class="cell" data-label="Property">weight</div>
<div class="cell" data-label="Column">weight</div>
<div class="cell" data-label="Arabic">الوزن</div>
<div class="cell" data-label="English">Weight</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="width">
<div class="cell" data-label="Property">width</div>
<div class="cell" data-label="Column">width</div>
<div class="cell" data-label="Arabic">الأبعاد | العرض</div>
<div class="cell" data-label="English">Measures | Width</div>
<div class="cell" data-label="Type">Decimal</div>

</div>


</div>

<div id='firstProductionStage' title='firstProductionStage' class='searchable'>

## firstProductionStage (مرحلة الإنتاج الأولى - First Production Stage)
**Table Name:** CRTNSpecificationFirstProductionStage, **Join Column:** cRTNSpecification_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="firstProductionStage.corrugatingFactor">
<div class="cell" data-label="Property">firstProductionStage.corrugatingFactor</div>
<div class="cell" data-label="Column">corrugatingFactor_id</div>
<div class="cell" data-label="Arabic">معامل التضليع</div>
<div class="cell" data-label="English">Corrugating Factor</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CRTNCorrugatingFactor](/entities/manufacturing-crtn-pln/CRTNCorrugatingFactor.md) 
</div>
</div>

<div class="row searchable" id="firstProductionStage.corrugatingType">
<div class="cell" data-label="Property">firstProductionStage.corrugatingType</div>
<div class="cell" data-label="Column">corrugatingType_id</div>
<div class="cell" data-label="Arabic">نوع التضليع</div>
<div class="cell" data-label="English">Corrugating Type</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CRTNCorrugatingType](/entities/manufacturing-crtn-pln/CRTNCorrugatingType.md) 
</div>
</div>

<div class="row searchable" id="firstProductionStage.finishedQty.uom">
<div class="cell" data-label="Property">firstProductionStage.finishedQty.uom</div>
<div class="cell" data-label="Column">finishedQtyUom_id</div>
<div class="cell" data-label="Arabic">كمية الصنف المصنع | الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/entities/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="firstProductionStage.finishedQty.value">
<div class="cell" data-label="Property">firstProductionStage.finishedQty.value</div>
<div class="cell" data-label="Column">finishedQtyValue</div>
<div class="cell" data-label="Arabic">كمية الصنف المصنع | الكمية</div>
<div class="cell" data-label="English">Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="firstProductionStage.id">
<div class="cell" data-label="Property">firstProductionStage.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="firstProductionStage.item">
<div class="cell" data-label="Property">firstProductionStage.item</div>
<div class="cell" data-label="Column">item_id</div>
<div class="cell" data-label="Arabic">الصنف</div>
<div class="cell" data-label="English">Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/entities/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="firstProductionStage.itemClass1">
<div class="cell" data-label="Property">firstProductionStage.itemClass1</div>
<div class="cell" data-label="Column">itemClass1_id</div>
<div class="cell" data-label="Arabic">تصنيف 1</div>
<div class="cell" data-label="English">Class 1</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass1](/entities/supplychain/ItemClass1.md) 
</div>
</div>

<div class="row searchable" id="firstProductionStage.itemClass10">
<div class="cell" data-label="Property">firstProductionStage.itemClass10</div>
<div class="cell" data-label="Column">itemClass10_id</div>
<div class="cell" data-label="Arabic">تصنيف 10</div>
<div class="cell" data-label="English">Class 10</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass10](/entities/supplychain/ItemClass10.md) 
</div>
</div>

<div class="row searchable" id="firstProductionStage.itemClass2">
<div class="cell" data-label="Property">firstProductionStage.itemClass2</div>
<div class="cell" data-label="Column">itemClass2_id</div>
<div class="cell" data-label="Arabic">تصنيف 2</div>
<div class="cell" data-label="English">Class 2</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass2](/entities/supplychain/ItemClass2.md) 
</div>
</div>

<div class="row searchable" id="firstProductionStage.itemClass3">
<div class="cell" data-label="Property">firstProductionStage.itemClass3</div>
<div class="cell" data-label="Column">itemClass3_id</div>
<div class="cell" data-label="Arabic">تصنيف 3</div>
<div class="cell" data-label="English">Class 3</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass3](/entities/supplychain/ItemClass3.md) 
</div>
</div>

<div class="row searchable" id="firstProductionStage.itemClass4">
<div class="cell" data-label="Property">firstProductionStage.itemClass4</div>
<div class="cell" data-label="Column">itemClass4_id</div>
<div class="cell" data-label="Arabic">تصنيف 4</div>
<div class="cell" data-label="English">Class 4</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass4](/entities/supplychain/ItemClass4.md) 
</div>
</div>

<div class="row searchable" id="firstProductionStage.itemClass5">
<div class="cell" data-label="Property">firstProductionStage.itemClass5</div>
<div class="cell" data-label="Column">itemClass5_id</div>
<div class="cell" data-label="Arabic">تصنيف 5</div>
<div class="cell" data-label="English">Class 5</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass5](/entities/supplychain/ItemClass5.md) 
</div>
</div>

<div class="row searchable" id="firstProductionStage.itemClass6">
<div class="cell" data-label="Property">firstProductionStage.itemClass6</div>
<div class="cell" data-label="Column">itemClass6_id</div>
<div class="cell" data-label="Arabic">تصنيف 6</div>
<div class="cell" data-label="English">Class 6</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass6](/entities/supplychain/ItemClass6.md) 
</div>
</div>

<div class="row searchable" id="firstProductionStage.itemClass7">
<div class="cell" data-label="Property">firstProductionStage.itemClass7</div>
<div class="cell" data-label="Column">itemClass7_id</div>
<div class="cell" data-label="Arabic">تصنيف 7</div>
<div class="cell" data-label="English">Class 7</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass7](/entities/supplychain/ItemClass7.md) 
</div>
</div>

<div class="row searchable" id="firstProductionStage.itemClass8">
<div class="cell" data-label="Property">firstProductionStage.itemClass8</div>
<div class="cell" data-label="Column">itemClass8_id</div>
<div class="cell" data-label="Arabic">تصنيف 8</div>
<div class="cell" data-label="English">Class 8</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass8](/entities/supplychain/ItemClass8.md) 
</div>
</div>

<div class="row searchable" id="firstProductionStage.itemClass9">
<div class="cell" data-label="Property">firstProductionStage.itemClass9</div>
<div class="cell" data-label="Column">itemClass9_id</div>
<div class="cell" data-label="Arabic">تصنيف 9</div>
<div class="cell" data-label="English">Class 9</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass9](/entities/supplychain/ItemClass9.md) 
</div>
</div>

<div class="row searchable" id="firstProductionStage.layerType">
<div class="cell" data-label="Property">firstProductionStage.layerType</div>
<div class="cell" data-label="Column">layerType</div>
<div class="cell" data-label="Arabic">نوع الطبقة</div>
<div class="cell" data-label="English">Layer Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="firstProductionStage.lineNumber">
<div class="cell" data-label="Property">firstProductionStage.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="firstProductionStage.materialQty.uom">
<div class="cell" data-label="Property">firstProductionStage.materialQty.uom</div>
<div class="cell" data-label="Column">materialQtyUom_id</div>
<div class="cell" data-label="Arabic">كمية الخامة | الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/entities/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="firstProductionStage.materialQty.value">
<div class="cell" data-label="Property">firstProductionStage.materialQty.value</div>
<div class="cell" data-label="Column">materialQtyValue</div>
<div class="cell" data-label="Arabic">كمية الخامة | الكمية</div>
<div class="cell" data-label="English">Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="firstProductionStage.section">
<div class="cell" data-label="Property">firstProductionStage.section</div>
<div class="cell" data-label="Column">section_id</div>
<div class="cell" data-label="Arabic">قسم الصنف</div>
<div class="cell" data-label="English">Item Section</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemSection](/entities/supplychain/ItemSection.md) 
</div>
</div>


</div>

<div id='routings' title='routings' class='searchable'>

## routings (عمليات التشغيل - Routings)
**Table Name:** CRTNSpecificationRouting, **Join Column:** cRTNSpecification_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="routings.id">
<div class="cell" data-label="Property">routings.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="routings.lineNumber">
<div class="cell" data-label="Property">routings.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="routings.operation">
<div class="cell" data-label="Property">routings.operation</div>
<div class="cell" data-label="Column">operation_id</div>
<div class="cell" data-label="Arabic">عملية</div>
<div class="cell" data-label="English">Operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [StandardOperation](/entities/manufacturing/StandardOperation.md) 
</div>
</div>

<div class="row searchable" id="routings.productionStage">
<div class="cell" data-label="Property">routings.productionStage</div>
<div class="cell" data-label="Column">productionStage</div>
<div class="cell" data-label="Arabic">مرحلة الإنتاج</div>
<div class="cell" data-label="English">Production Stage</div>
<div class="cell" data-label="Type">Enum</div>

</div>


</div>

<div id='secondProductionStage' title='secondProductionStage' class='searchable'>

## secondProductionStage (مرحلة الإنتاج الثانية - Second Production Stage)
**Table Name:** CRTNSpecificationSecondProductionStage, **Join Column:** cRTNSpecification_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="secondProductionStage.corrugatingFactor">
<div class="cell" data-label="Property">secondProductionStage.corrugatingFactor</div>
<div class="cell" data-label="Column">corrugatingFactor_id</div>
<div class="cell" data-label="Arabic">معامل التضليع</div>
<div class="cell" data-label="English">Corrugating Factor</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CRTNCorrugatingFactor](/entities/manufacturing-crtn-pln/CRTNCorrugatingFactor.md) 
</div>
</div>

<div class="row searchable" id="secondProductionStage.corrugatingType">
<div class="cell" data-label="Property">secondProductionStage.corrugatingType</div>
<div class="cell" data-label="Column">corrugatingType_id</div>
<div class="cell" data-label="Arabic">نوع التضليع</div>
<div class="cell" data-label="English">Corrugating Type</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CRTNCorrugatingType](/entities/manufacturing-crtn-pln/CRTNCorrugatingType.md) 
</div>
</div>

<div class="row searchable" id="secondProductionStage.finishedQty.uom">
<div class="cell" data-label="Property">secondProductionStage.finishedQty.uom</div>
<div class="cell" data-label="Column">finishedQtyUom_id</div>
<div class="cell" data-label="Arabic">كمية الصنف المصنع | الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/entities/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="secondProductionStage.finishedQty.value">
<div class="cell" data-label="Property">secondProductionStage.finishedQty.value</div>
<div class="cell" data-label="Column">finishedQtyValue</div>
<div class="cell" data-label="Arabic">كمية الصنف المصنع | الكمية</div>
<div class="cell" data-label="English">Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="secondProductionStage.id">
<div class="cell" data-label="Property">secondProductionStage.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="secondProductionStage.item">
<div class="cell" data-label="Property">secondProductionStage.item</div>
<div class="cell" data-label="Column">item_id</div>
<div class="cell" data-label="Arabic">الصنف</div>
<div class="cell" data-label="English">Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/entities/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="secondProductionStage.itemClass1">
<div class="cell" data-label="Property">secondProductionStage.itemClass1</div>
<div class="cell" data-label="Column">itemClass1_id</div>
<div class="cell" data-label="Arabic">تصنيف 1</div>
<div class="cell" data-label="English">Class 1</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass1](/entities/supplychain/ItemClass1.md) 
</div>
</div>

<div class="row searchable" id="secondProductionStage.itemClass10">
<div class="cell" data-label="Property">secondProductionStage.itemClass10</div>
<div class="cell" data-label="Column">itemClass10_id</div>
<div class="cell" data-label="Arabic">تصنيف 10</div>
<div class="cell" data-label="English">Class 10</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass10](/entities/supplychain/ItemClass10.md) 
</div>
</div>

<div class="row searchable" id="secondProductionStage.itemClass2">
<div class="cell" data-label="Property">secondProductionStage.itemClass2</div>
<div class="cell" data-label="Column">itemClass2_id</div>
<div class="cell" data-label="Arabic">تصنيف 2</div>
<div class="cell" data-label="English">Class 2</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass2](/entities/supplychain/ItemClass2.md) 
</div>
</div>

<div class="row searchable" id="secondProductionStage.itemClass3">
<div class="cell" data-label="Property">secondProductionStage.itemClass3</div>
<div class="cell" data-label="Column">itemClass3_id</div>
<div class="cell" data-label="Arabic">تصنيف 3</div>
<div class="cell" data-label="English">Class 3</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass3](/entities/supplychain/ItemClass3.md) 
</div>
</div>

<div class="row searchable" id="secondProductionStage.itemClass4">
<div class="cell" data-label="Property">secondProductionStage.itemClass4</div>
<div class="cell" data-label="Column">itemClass4_id</div>
<div class="cell" data-label="Arabic">تصنيف 4</div>
<div class="cell" data-label="English">Class 4</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass4](/entities/supplychain/ItemClass4.md) 
</div>
</div>

<div class="row searchable" id="secondProductionStage.itemClass5">
<div class="cell" data-label="Property">secondProductionStage.itemClass5</div>
<div class="cell" data-label="Column">itemClass5_id</div>
<div class="cell" data-label="Arabic">تصنيف 5</div>
<div class="cell" data-label="English">Class 5</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass5](/entities/supplychain/ItemClass5.md) 
</div>
</div>

<div class="row searchable" id="secondProductionStage.itemClass6">
<div class="cell" data-label="Property">secondProductionStage.itemClass6</div>
<div class="cell" data-label="Column">itemClass6_id</div>
<div class="cell" data-label="Arabic">تصنيف 6</div>
<div class="cell" data-label="English">Class 6</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass6](/entities/supplychain/ItemClass6.md) 
</div>
</div>

<div class="row searchable" id="secondProductionStage.itemClass7">
<div class="cell" data-label="Property">secondProductionStage.itemClass7</div>
<div class="cell" data-label="Column">itemClass7_id</div>
<div class="cell" data-label="Arabic">تصنيف 7</div>
<div class="cell" data-label="English">Class 7</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass7](/entities/supplychain/ItemClass7.md) 
</div>
</div>

<div class="row searchable" id="secondProductionStage.itemClass8">
<div class="cell" data-label="Property">secondProductionStage.itemClass8</div>
<div class="cell" data-label="Column">itemClass8_id</div>
<div class="cell" data-label="Arabic">تصنيف 8</div>
<div class="cell" data-label="English">Class 8</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass8](/entities/supplychain/ItemClass8.md) 
</div>
</div>

<div class="row searchable" id="secondProductionStage.itemClass9">
<div class="cell" data-label="Property">secondProductionStage.itemClass9</div>
<div class="cell" data-label="Column">itemClass9_id</div>
<div class="cell" data-label="Arabic">تصنيف 9</div>
<div class="cell" data-label="English">Class 9</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass9](/entities/supplychain/ItemClass9.md) 
</div>
</div>

<div class="row searchable" id="secondProductionStage.lineNumber">
<div class="cell" data-label="Property">secondProductionStage.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="secondProductionStage.materialQty.uom">
<div class="cell" data-label="Property">secondProductionStage.materialQty.uom</div>
<div class="cell" data-label="Column">materialQtyUom_id</div>
<div class="cell" data-label="Arabic">كمية الخامة | الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/entities/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="secondProductionStage.materialQty.value">
<div class="cell" data-label="Property">secondProductionStage.materialQty.value</div>
<div class="cell" data-label="Column">materialQtyValue</div>
<div class="cell" data-label="Arabic">كمية الخامة | الكمية</div>
<div class="cell" data-label="English">Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="secondProductionStage.section">
<div class="cell" data-label="Property">secondProductionStage.section</div>
<div class="cell" data-label="Column">section_id</div>
<div class="cell" data-label="Arabic">قسم الصنف</div>
<div class="cell" data-label="English">Item Section</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemSection](/entities/supplychain/ItemSection.md) 
</div>
</div>


</div>

<div id='thirdProductionStage' title='thirdProductionStage' class='searchable'>

## thirdProductionStage (مرحلة الإنتاج الثالثة - Third Production Stage)
**Table Name:** CRTNSpecificationThirdProductionStage, **Join Column:** cRTNSpecification_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="thirdProductionStage.corrugatingFactor">
<div class="cell" data-label="Property">thirdProductionStage.corrugatingFactor</div>
<div class="cell" data-label="Column">corrugatingFactor_id</div>
<div class="cell" data-label="Arabic">معامل التضليع</div>
<div class="cell" data-label="English">Corrugating Factor</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CRTNCorrugatingFactor](/entities/manufacturing-crtn-pln/CRTNCorrugatingFactor.md) 
</div>
</div>

<div class="row searchable" id="thirdProductionStage.corrugatingType">
<div class="cell" data-label="Property">thirdProductionStage.corrugatingType</div>
<div class="cell" data-label="Column">corrugatingType_id</div>
<div class="cell" data-label="Arabic">نوع التضليع</div>
<div class="cell" data-label="English">Corrugating Type</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CRTNCorrugatingType](/entities/manufacturing-crtn-pln/CRTNCorrugatingType.md) 
</div>
</div>

<div class="row searchable" id="thirdProductionStage.finishedQty.uom">
<div class="cell" data-label="Property">thirdProductionStage.finishedQty.uom</div>
<div class="cell" data-label="Column">finishedQtyUom_id</div>
<div class="cell" data-label="Arabic">كمية الصنف المصنع | الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/entities/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="thirdProductionStage.finishedQty.value">
<div class="cell" data-label="Property">thirdProductionStage.finishedQty.value</div>
<div class="cell" data-label="Column">finishedQtyValue</div>
<div class="cell" data-label="Arabic">كمية الصنف المصنع | الكمية</div>
<div class="cell" data-label="English">Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="thirdProductionStage.id">
<div class="cell" data-label="Property">thirdProductionStage.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="thirdProductionStage.item">
<div class="cell" data-label="Property">thirdProductionStage.item</div>
<div class="cell" data-label="Column">item_id</div>
<div class="cell" data-label="Arabic">الصنف</div>
<div class="cell" data-label="English">Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/entities/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="thirdProductionStage.itemClass1">
<div class="cell" data-label="Property">thirdProductionStage.itemClass1</div>
<div class="cell" data-label="Column">itemClass1_id</div>
<div class="cell" data-label="Arabic">تصنيف 1</div>
<div class="cell" data-label="English">Class 1</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass1](/entities/supplychain/ItemClass1.md) 
</div>
</div>

<div class="row searchable" id="thirdProductionStage.itemClass10">
<div class="cell" data-label="Property">thirdProductionStage.itemClass10</div>
<div class="cell" data-label="Column">itemClass10_id</div>
<div class="cell" data-label="Arabic">تصنيف 10</div>
<div class="cell" data-label="English">Class 10</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass10](/entities/supplychain/ItemClass10.md) 
</div>
</div>

<div class="row searchable" id="thirdProductionStage.itemClass2">
<div class="cell" data-label="Property">thirdProductionStage.itemClass2</div>
<div class="cell" data-label="Column">itemClass2_id</div>
<div class="cell" data-label="Arabic">تصنيف 2</div>
<div class="cell" data-label="English">Class 2</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass2](/entities/supplychain/ItemClass2.md) 
</div>
</div>

<div class="row searchable" id="thirdProductionStage.itemClass3">
<div class="cell" data-label="Property">thirdProductionStage.itemClass3</div>
<div class="cell" data-label="Column">itemClass3_id</div>
<div class="cell" data-label="Arabic">تصنيف 3</div>
<div class="cell" data-label="English">Class 3</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass3](/entities/supplychain/ItemClass3.md) 
</div>
</div>

<div class="row searchable" id="thirdProductionStage.itemClass4">
<div class="cell" data-label="Property">thirdProductionStage.itemClass4</div>
<div class="cell" data-label="Column">itemClass4_id</div>
<div class="cell" data-label="Arabic">تصنيف 4</div>
<div class="cell" data-label="English">Class 4</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass4](/entities/supplychain/ItemClass4.md) 
</div>
</div>

<div class="row searchable" id="thirdProductionStage.itemClass5">
<div class="cell" data-label="Property">thirdProductionStage.itemClass5</div>
<div class="cell" data-label="Column">itemClass5_id</div>
<div class="cell" data-label="Arabic">تصنيف 5</div>
<div class="cell" data-label="English">Class 5</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass5](/entities/supplychain/ItemClass5.md) 
</div>
</div>

<div class="row searchable" id="thirdProductionStage.itemClass6">
<div class="cell" data-label="Property">thirdProductionStage.itemClass6</div>
<div class="cell" data-label="Column">itemClass6_id</div>
<div class="cell" data-label="Arabic">تصنيف 6</div>
<div class="cell" data-label="English">Class 6</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass6](/entities/supplychain/ItemClass6.md) 
</div>
</div>

<div class="row searchable" id="thirdProductionStage.itemClass7">
<div class="cell" data-label="Property">thirdProductionStage.itemClass7</div>
<div class="cell" data-label="Column">itemClass7_id</div>
<div class="cell" data-label="Arabic">تصنيف 7</div>
<div class="cell" data-label="English">Class 7</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass7](/entities/supplychain/ItemClass7.md) 
</div>
</div>

<div class="row searchable" id="thirdProductionStage.itemClass8">
<div class="cell" data-label="Property">thirdProductionStage.itemClass8</div>
<div class="cell" data-label="Column">itemClass8_id</div>
<div class="cell" data-label="Arabic">تصنيف 8</div>
<div class="cell" data-label="English">Class 8</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass8](/entities/supplychain/ItemClass8.md) 
</div>
</div>

<div class="row searchable" id="thirdProductionStage.itemClass9">
<div class="cell" data-label="Property">thirdProductionStage.itemClass9</div>
<div class="cell" data-label="Column">itemClass9_id</div>
<div class="cell" data-label="Arabic">تصنيف 9</div>
<div class="cell" data-label="English">Class 9</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass9](/entities/supplychain/ItemClass9.md) 
</div>
</div>

<div class="row searchable" id="thirdProductionStage.lineNumber">
<div class="cell" data-label="Property">thirdProductionStage.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="thirdProductionStage.materialQty.uom">
<div class="cell" data-label="Property">thirdProductionStage.materialQty.uom</div>
<div class="cell" data-label="Column">materialQtyUom_id</div>
<div class="cell" data-label="Arabic">كمية الخامة | الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/entities/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="thirdProductionStage.materialQty.value">
<div class="cell" data-label="Property">thirdProductionStage.materialQty.value</div>
<div class="cell" data-label="Column">materialQtyValue</div>
<div class="cell" data-label="Arabic">كمية الخامة | الكمية</div>
<div class="cell" data-label="English">Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="thirdProductionStage.section">
<div class="cell" data-label="Property">thirdProductionStage.section</div>
<div class="cell" data-label="Column">section_id</div>
<div class="cell" data-label="Arabic">قسم الصنف</div>
<div class="cell" data-label="English">Item Section</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemSection](/entities/supplychain/ItemSection.md) 
</div>
</div>


</div>

