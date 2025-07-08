# FAOpeningDocument
**Arabic:** أفتتاح أصل ثابت
**English:** Fixed Asset Opening Document - Fixed Asset Opening Documents

<ContentFilter/>


<div class='searchable'>
<a href='#details'>details (FAOpeningDocLine) </a> , <a href='#externalPaymentLines'>externalPaymentLines (FAOpeningDocumentExternalPaymentLine) </a> , <a href='#scheduleLines'>scheduleLines (FAOpeningDocumentScheduleLine) </a>
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
</div><div class="row searchable" id="accDeprValueOpening">
<div class="cell" data-label="Property">accDeprValueOpening</div>
<div class="cell" data-label="Column">accDeprValueOpening</div>
<div class="cell" data-label="Arabic">قيمة الأهلاك التراكمي الأفتتاحية</div>
<div class="cell" data-label="English">Acc. Depreciation opening value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="acquireValueOpening">
<div class="cell" data-label="Property">acquireValueOpening</div>
<div class="cell" data-label="Column">acquireValueOpening</div>
<div class="cell" data-label="Arabic">قيمة الأقتناء الأفتتاحية</div>
<div class="cell" data-label="English">Acquire opening value</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="fromAnalysisSet">
<div class="cell" data-label="Property">fromAnalysisSet</div>
<div class="cell" data-label="Column">fromAnalysisSet_id</div>
<div class="cell" data-label="Arabic">من مجموعه تحليليه</div>
<div class="cell" data-label="English">From Analysis Set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/entities/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="fromBranch">
<div class="cell" data-label="Property">fromBranch</div>
<div class="cell" data-label="Column">fromBranch_id</div>
<div class="cell" data-label="Arabic">من فرع</div>
<div class="cell" data-label="English">From Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/entities/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="fromDept">
<div class="cell" data-label="Property">fromDept</div>
<div class="cell" data-label="Column">fromDept_id</div>
<div class="cell" data-label="Arabic"> من إدارة</div>
<div class="cell" data-label="English"> From Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/entities/basic/Department.md) 
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

<div class="row searchable" id="fromFAType">
<div class="cell" data-label="Property">fromFAType</div>
<div class="cell" data-label="Column">fromFAType_id</div>
<div class="cell" data-label="Arabic">من نوع أصل</div>
<div class="cell" data-label="English">From Fixed Asset Type</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FAType](/entities/fixedassets/FAType.md) 
</div>
</div>

<div class="row searchable" id="fromFixedAsset">
<div class="cell" data-label="Property">fromFixedAsset</div>
<div class="cell" data-label="Column">fromFixedAsset_id</div>
<div class="cell" data-label="Arabic">من أصل ثابت</div>
<div class="cell" data-label="English">From Fixed Assets</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FixedAsset](/entities/fixedassets/FixedAsset.md) 
</div>
</div>

<div class="row searchable" id="fromGroup">
<div class="cell" data-label="Property">fromGroup</div>
<div class="cell" data-label="Column">fromGroup_id</div>
<div class="cell" data-label="Arabic">من مجموعة</div>
<div class="cell" data-label="English">From Group</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MasterGroup](/entities/basic/MasterGroup.md) 
</div>
</div>

<div class="row searchable" id="fromLegalEntity">
<div class="cell" data-label="Property">fromLegalEntity</div>
<div class="cell" data-label="Column">fromLegalEntity_id</div>
<div class="cell" data-label="Arabic">من شركة</div>
<div class="cell" data-label="English">From LegalEntity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [LegalEntity](/entities/basic/LegalEntity.md) 
</div>
</div>

<div class="row searchable" id="fromSector">
<div class="cell" data-label="Property">fromSector</div>
<div class="cell" data-label="Column">fromSector_id</div>
<div class="cell" data-label="Arabic">من قطاع</div>
<div class="cell" data-label="English">From Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/entities/basic/Sector.md) 
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

<div class="row searchable" id="mediatorAccount">
<div class="cell" data-label="Property">mediatorAccount</div>
<div class="cell" data-label="Column">mediatorAccount_id</div>
<div class="cell" data-label="Arabic">الحساب الوسيط</div>
<div class="cell" data-label="English">Mediator account</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Account](/entities/accounting/Account.md) 
</div>
</div>

<div class="row searchable" id="money.afterDiscount1">
<div class="cell" data-label="Property">money.afterDiscount1</div>
<div class="cell" data-label="Column">moneyAfterDiscount1</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 1</div>
<div class="cell" data-label="English">Net after Discount 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.afterDiscount2">
<div class="cell" data-label="Property">money.afterDiscount2</div>
<div class="cell" data-label="Column">moneyAfterDiscount2</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 2</div>
<div class="cell" data-label="English">Net after Discount 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.afterDiscount3">
<div class="cell" data-label="Property">money.afterDiscount3</div>
<div class="cell" data-label="Column">moneyAfterDiscount3</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 3</div>
<div class="cell" data-label="English">Net after Discount 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.afterDiscount4">
<div class="cell" data-label="Property">money.afterDiscount4</div>
<div class="cell" data-label="Column">moneyAfterDiscount4</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 4</div>
<div class="cell" data-label="English">Net after Discount 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.afterDiscount5">
<div class="cell" data-label="Property">money.afterDiscount5</div>
<div class="cell" data-label="Column">moneyAfterDiscount5</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 5</div>
<div class="cell" data-label="English">Net after Discount 5</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.afterDiscount6">
<div class="cell" data-label="Property">money.afterDiscount6</div>
<div class="cell" data-label="Column">moneyAfterDiscount6</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 6</div>
<div class="cell" data-label="English">Net after Discount 6</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.afterDiscount7">
<div class="cell" data-label="Property">money.afterDiscount7</div>
<div class="cell" data-label="Column">moneyAfterDiscount7</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 7</div>
<div class="cell" data-label="English">Net after Discount 7</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.afterDiscount8">
<div class="cell" data-label="Property">money.afterDiscount8</div>
<div class="cell" data-label="Column">moneyAfterDiscount8</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 8</div>
<div class="cell" data-label="English">Net after Discount 8</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.afterHTaxValue">
<div class="cell" data-label="Property">money.afterHTaxValue</div>
<div class="cell" data-label="Column">moneyAfterHTaxValue</div>
<div class="cell" data-label="Arabic">بعد ضريبة الفاتورة</div>
<div class="cell" data-label="English">After Tax Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.afterTaxValue">
<div class="cell" data-label="Property">money.afterTaxValue</div>
<div class="cell" data-label="Column">moneyAfterTaxValue</div>
<div class="cell" data-label="Arabic">القيمة بعد الضريبة</div>
<div class="cell" data-label="English">After Tax Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.cashAmount">
<div class="cell" data-label="Property">money.cashAmount</div>
<div class="cell" data-label="Column">moneyCashAmount</div>
<div class="cell" data-label="Arabic">المدفوع نقدا</div>
<div class="cell" data-label="English">Paid</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.currency">
<div class="cell" data-label="Property">money.currency</div>
<div class="cell" data-label="Column">moneyCurrency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/entities/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="money.currencyRate">
<div class="cell" data-label="Property">money.currencyRate</div>
<div class="cell" data-label="Column">moneyCurrencyRate</div>
<div class="cell" data-label="Arabic">المعدل</div>
<div class="cell" data-label="English">Currency Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.discount1Total">
<div class="cell" data-label="Property">money.discount1Total</div>
<div class="cell" data-label="Column">moneyDiscount1Total</div>
<div class="cell" data-label="Arabic">إجمالي الخصم</div>
<div class="cell" data-label="English">Discount Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.discount2Total">
<div class="cell" data-label="Property">money.discount2Total</div>
<div class="cell" data-label="Column">moneyDiscount2Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 2</div>
<div class="cell" data-label="English">Discount 1 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.discount3Total">
<div class="cell" data-label="Property">money.discount3Total</div>
<div class="cell" data-label="Column">moneyDiscount3Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 3</div>
<div class="cell" data-label="English">Discount 2 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.discount4Total">
<div class="cell" data-label="Property">money.discount4Total</div>
<div class="cell" data-label="Column">moneyDiscount4Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 4</div>
<div class="cell" data-label="English">Discount 3 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.discount5Total">
<div class="cell" data-label="Property">money.discount5Total</div>
<div class="cell" data-label="Column">moneyDiscount5Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 5</div>
<div class="cell" data-label="English">Discount 4 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.discount6Total">
<div class="cell" data-label="Property">money.discount6Total</div>
<div class="cell" data-label="Column">moneyDiscount6Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 6</div>
<div class="cell" data-label="English">Discount 5 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.discount7Total">
<div class="cell" data-label="Property">money.discount7Total</div>
<div class="cell" data-label="Column">moneyDiscount7Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 7</div>
<div class="cell" data-label="English">Discount 6 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.discount8Total">
<div class="cell" data-label="Property">money.discount8Total</div>
<div class="cell" data-label="Column">moneyDiscount8Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 8</div>
<div class="cell" data-label="English">Discount 7 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.headerDiscount.afterValue">
<div class="cell" data-label="Property">money.headerDiscount.afterValue</div>
<div class="cell" data-label="Column">moneyHeaderDiscountAfterValue</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.headerDiscount.maxNormalPercent">
<div class="cell" data-label="Property">money.headerDiscount.maxNormalPercent</div>
<div class="cell" data-label="Column">mnyHdrDscuntMaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.headerDiscount.percentage">
<div class="cell" data-label="Property">money.headerDiscount.percentage</div>
<div class="cell" data-label="Column">moneyHeaderDiscountPercentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.headerDiscount.value">
<div class="cell" data-label="Property">money.headerDiscount.value</div>
<div class="cell" data-label="Column">moneyHeaderDiscountValue</div>
<div class="cell" data-label="Arabic">القيمة</div>
<div class="cell" data-label="English">Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.localCurrency">
<div class="cell" data-label="Property">money.localCurrency</div>
<div class="cell" data-label="Column">moneyLocalCurrency_id</div>
<div class="cell" data-label="Arabic"> العملة</div>
<div class="cell" data-label="English">Local Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/entities/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="money.netValue">
<div class="cell" data-label="Property">money.netValue</div>
<div class="cell" data-label="Column">moneyNetValue</div>
<div class="cell" data-label="Arabic">الصافي</div>
<div class="cell" data-label="English">Net value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.paidCash">
<div class="cell" data-label="Property">money.paidCash</div>
<div class="cell" data-label="Column">moneyPaidCash</div>
<div class="cell" data-label="Arabic">النقدية المدفوعة</div>
<div class="cell" data-label="English">Paid Cash</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.remaining">
<div class="cell" data-label="Property">money.remaining</div>
<div class="cell" data-label="Column">moneyRemaining</div>
<div class="cell" data-label="Arabic">المتبقي</div>
<div class="cell" data-label="English">Remaining</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.remainingCash">
<div class="cell" data-label="Property">money.remainingCash</div>
<div class="cell" data-label="Column">moneyRemainingCash</div>
<div class="cell" data-label="Arabic">النقديه المتبقيه</div>
<div class="cell" data-label="English">Remaining Cash</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.service1Fees">
<div class="cell" data-label="Property">money.service1Fees</div>
<div class="cell" data-label="Column">moneyService1Fees</div>
<div class="cell" data-label="Arabic">مصاريف خدمة 1</div>
<div class="cell" data-label="English">Service Fees 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.service2Fees">
<div class="cell" data-label="Property">money.service2Fees</div>
<div class="cell" data-label="Column">moneyService2Fees</div>
<div class="cell" data-label="Arabic">مصاريف خدمة 2</div>
<div class="cell" data-label="English">Service Fees 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.service3Fees">
<div class="cell" data-label="Property">money.service3Fees</div>
<div class="cell" data-label="Column">moneyService3Fees</div>
<div class="cell" data-label="Arabic">مصاريف خدمة 3</div>
<div class="cell" data-label="English">Service Fees 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.service4Fees">
<div class="cell" data-label="Property">money.service4Fees</div>
<div class="cell" data-label="Column">moneyService4Fees</div>
<div class="cell" data-label="Arabic">مصاريف خدمة 4</div>
<div class="cell" data-label="English">Service Fees 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.tax1Total">
<div class="cell" data-label="Property">money.tax1Total</div>
<div class="cell" data-label="Column">moneyTax1Total</div>
<div class="cell" data-label="Arabic">إجمالي ضريبة مبيعات 1</div>
<div class="cell" data-label="English">Tax 1 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.tax2Total">
<div class="cell" data-label="Property">money.tax2Total</div>
<div class="cell" data-label="Column">moneyTax2Total</div>
<div class="cell" data-label="Arabic">إجمالي ضريبة مبيعات 2</div>
<div class="cell" data-label="English">Tax 2 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.tax3Per">
<div class="cell" data-label="Property">money.tax3Per</div>
<div class="cell" data-label="Column">moneyTax3Per</div>
<div class="cell" data-label="Arabic">ضريبة 3 %</div>
<div class="cell" data-label="English">Invoice Tax 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.tax3Total">
<div class="cell" data-label="Property">money.tax3Total</div>
<div class="cell" data-label="Column">moneyTax3Total</div>
<div class="cell" data-label="Arabic">إجمالي ضريبة 3</div>
<div class="cell" data-label="English">Tax 3 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.tax4Per">
<div class="cell" data-label="Property">money.tax4Per</div>
<div class="cell" data-label="Column">moneyTax4Per</div>
<div class="cell" data-label="Arabic">ضريبة الفاتورة 4 %</div>
<div class="cell" data-label="English">Invoice Tax 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.tax4Total">
<div class="cell" data-label="Property">money.tax4Total</div>
<div class="cell" data-label="Column">moneyTax4Total</div>
<div class="cell" data-label="Arabic">إجمالي ضريبة 4</div>
<div class="cell" data-label="English">Tax 4 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.total">
<div class="cell" data-label="Property">money.total</div>
<div class="cell" data-label="Column">moneyTotal</div>
<div class="cell" data-label="Arabic">الإجمالي</div>
<div class="cell" data-label="English">Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.totalPaid">
<div class="cell" data-label="Property">money.totalPaid</div>
<div class="cell" data-label="Column">moneyTotalPaid</div>
<div class="cell" data-label="Arabic">إجمالي المدفوع</div>
<div class="cell" data-label="English">Total paid</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.totalPaymentMethods">
<div class="cell" data-label="Property">money.totalPaymentMethods</div>
<div class="cell" data-label="Column">moneyTotalPaymentMethods</div>
<div class="cell" data-label="Arabic">إجمالى طرق الدفع الآخرى</div>
<div class="cell" data-label="English">Other Payments Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.vouchersPayments">
<div class="cell" data-label="Property">money.vouchersPayments</div>
<div class="cell" data-label="Column">moneyVouchersPayments</div>
<div class="cell" data-label="Arabic">إجمالي المدفوع من السندات</div>
<div class="cell" data-label="English">Total of Vouchers Payments</div>
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

<div class="row searchable" id="paymentTemplate">
<div class="cell" data-label="Property">paymentTemplate</div>
<div class="cell" data-label="Column">paymentTemplate_id</div>
<div class="cell" data-label="Arabic">نموذج الدفع</div>
<div class="cell" data-label="English">Payment Template</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [PaymentScheduleTemplate](/entities/basic/PaymentScheduleTemplate.md) 
</div>
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

<div class="row searchable" id="toAnalysisSet">
<div class="cell" data-label="Property">toAnalysisSet</div>
<div class="cell" data-label="Column">toAnalysisSet_id</div>
<div class="cell" data-label="Arabic">إلي مجموعه تحليليه</div>
<div class="cell" data-label="English">To Snalysis Set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/entities/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="toBranch">
<div class="cell" data-label="Property">toBranch</div>
<div class="cell" data-label="Column">toBranch_id</div>
<div class="cell" data-label="Arabic">إلى فرع</div>
<div class="cell" data-label="English">To Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/entities/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="toDept">
<div class="cell" data-label="Property">toDept</div>
<div class="cell" data-label="Column">toDept_id</div>
<div class="cell" data-label="Arabic">إلي اداره</div>
<div class="cell" data-label="English">To Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/entities/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="toFAType">
<div class="cell" data-label="Property">toFAType</div>
<div class="cell" data-label="Column">toFAType_id</div>
<div class="cell" data-label="Arabic">إلي نوع أصل</div>
<div class="cell" data-label="English">To Fixed asset Type</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FAType](/entities/fixedassets/FAType.md) 
</div>
</div>

<div class="row searchable" id="toFixedAsset">
<div class="cell" data-label="Property">toFixedAsset</div>
<div class="cell" data-label="Column">toFixedAsset_id</div>
<div class="cell" data-label="Arabic">إلى أصل ثابت</div>
<div class="cell" data-label="English">To Fixed Assets</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FixedAsset](/entities/fixedassets/FixedAsset.md) 
</div>
</div>

<div class="row searchable" id="toGroup">
<div class="cell" data-label="Property">toGroup</div>
<div class="cell" data-label="Column">toGroup_id</div>
<div class="cell" data-label="Arabic">إلي مجموعة</div>
<div class="cell" data-label="English">To Group</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MasterGroup](/entities/basic/MasterGroup.md) 
</div>
</div>

<div class="row searchable" id="toLegalEntity">
<div class="cell" data-label="Property">toLegalEntity</div>
<div class="cell" data-label="Column">toLegalEntity_id</div>
<div class="cell" data-label="Arabic">الي شركة</div>
<div class="cell" data-label="English">To LegalEntity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [LegalEntity](/entities/basic/LegalEntity.md) 
</div>
</div>

<div class="row searchable" id="toSector">
<div class="cell" data-label="Property">toSector</div>
<div class="cell" data-label="Column">toSector_id</div>
<div class="cell" data-label="Arabic">إلي قطاع</div>
<div class="cell" data-label="English">To Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/entities/basic/Sector.md) 
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


</div>

<div id='details' title='details' class='searchable'>

## details (التفاصيل - Details)
**Table Name:** FAOpeningDocLine, **Join Column:** fAOpeningDocument_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="details.accDeprValueOpening">
<div class="cell" data-label="Property">details.accDeprValueOpening</div>
<div class="cell" data-label="Column">accDeprValueOpening</div>
<div class="cell" data-label="Arabic">قيمة الأهلاك التراكمي الأفتتاحية</div>
<div class="cell" data-label="English">Acc. Depreciation opening value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.acquireValueOpening">
<div class="cell" data-label="Property">details.acquireValueOpening</div>
<div class="cell" data-label="Column">acquireValueOpening</div>
<div class="cell" data-label="Arabic">قيمة الأقتناء الأفتتاحية</div>
<div class="cell" data-label="English">Acquire opening value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.assetName1">
<div class="cell" data-label="Property">details.assetName1</div>
<div class="cell" data-label="Column">assetName1</div>
<div class="cell" data-label="Arabic">الإسم العربي للأصل</div>
<div class="cell" data-label="English">Asset Name1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.assetName2">
<div class="cell" data-label="Property">details.assetName2</div>
<div class="cell" data-label="Column">assetName2</div>
<div class="cell" data-label="Arabic">الإسم الإنجليزي للأصل</div>
<div class="cell" data-label="English">Asset Name2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.assetsCount">
<div class="cell" data-label="Property">details.assetsCount</div>
<div class="cell" data-label="Column">assetsCount</div>
<div class="cell" data-label="Arabic">العدد</div>
<div class="cell" data-label="English">Count</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="details.b1">
<div class="cell" data-label="Property">details.b1</div>
<div class="cell" data-label="Column">b1</div>
<div class="cell" data-label="Arabic">Boolean 1</div>
<div class="cell" data-label="English">Boolean 1</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.b2">
<div class="cell" data-label="Property">details.b2</div>
<div class="cell" data-label="Column">b2</div>
<div class="cell" data-label="Arabic">Boolean 2</div>
<div class="cell" data-label="English">Boolean 2</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.b3">
<div class="cell" data-label="Property">details.b3</div>
<div class="cell" data-label="Column">b3</div>
<div class="cell" data-label="Arabic">Boolean 3</div>
<div class="cell" data-label="English">Boolean 3</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.b4">
<div class="cell" data-label="Property">details.b4</div>
<div class="cell" data-label="Column">b4</div>
<div class="cell" data-label="Arabic">Boolean 4</div>
<div class="cell" data-label="English">Boolean 4</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.b5">
<div class="cell" data-label="Property">details.b5</div>
<div class="cell" data-label="Column">b5</div>
<div class="cell" data-label="Arabic">Boolean 5</div>
<div class="cell" data-label="English">Boolean 5</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.depreciationStartDate">
<div class="cell" data-label="Property">details.depreciationStartDate</div>
<div class="cell" data-label="Column">depreciationStartDate</div>
<div class="cell" data-label="Arabic">تاريخ بداية الاهلاك</div>
<div class="cell" data-label="English">Depreciation Start Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.faLocation">
<div class="cell" data-label="Property">details.faLocation</div>
<div class="cell" data-label="Column">faLocation_id</div>
<div class="cell" data-label="Arabic"> موقع أصول</div>
<div class="cell" data-label="English"> Asset Location</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FALocation](/entities/fixedassets/FALocation.md) 
</div>
</div>

<div class="row searchable" id="details.faPropertiesOpening.disposalDate">
<div class="cell" data-label="Property">details.faPropertiesOpening.disposalDate</div>
<div class="cell" data-label="Column">opPropDisposalDate</div>
<div class="cell" data-label="Arabic">تاريخ التخلص من الأصل</div>
<div class="cell" data-label="English">Disposal Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.faPropertiesOpening.remainigLifeValue">
<div class="cell" data-label="Property">details.faPropertiesOpening.remainigLifeValue</div>
<div class="cell" data-label="Column">opPropRemainigLifeValue</div>
<div class="cell" data-label="Arabic">العمر المتبقي</div>
<div class="cell" data-label="English">Remaining Life</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="details.faPropertiesOpening.salvageValue">
<div class="cell" data-label="Property">details.faPropertiesOpening.salvageValue</div>
<div class="cell" data-label="Column">opPropSalvageValue</div>
<div class="cell" data-label="Arabic">الخصائص الأفتتاحية | قيمة الأصل كخردة الأفتتاحية</div>
<div class="cell" data-label="English">Salavge Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.faPropertiesOpening.usefulLife">
<div class="cell" data-label="Property">details.faPropertiesOpening.usefulLife</div>
<div class="cell" data-label="Column">opPropUsefulLife</div>
<div class="cell" data-label="Arabic">الخصائص الأفتتاحية | العمر الأفتراضي الأفتتاحي</div>
<div class="cell" data-label="English">Useful Life</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="details.faType">
<div class="cell" data-label="Property">details.faType</div>
<div class="cell" data-label="Column">faType_id</div>
<div class="cell" data-label="Arabic"> نوع أصل</div>
<div class="cell" data-label="English"> Fixed Asset Type</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FAType](/entities/fixedassets/FAType.md) 
</div>
</div>

<div class="row searchable" id="details.fixedAsset">
<div class="cell" data-label="Property">details.fixedAsset</div>
<div class="cell" data-label="Column">fixedAsset_id</div>
<div class="cell" data-label="Arabic">الأصل الثابت</div>
<div class="cell" data-label="English">Fixed Asset</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FixedAsset](/entities/fixedassets/FixedAsset.md) 
</div>
</div>

<div class="row searchable" id="details.id">
<div class="cell" data-label="Property">details.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="details.lineNumber">
<div class="cell" data-label="Property">details.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="details.locationEntry">
<div class="cell" data-label="Property">details.locationEntry</div>
<div class="cell" data-label="Column">locationEntry_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type"></div>
<div class="cell" data-label="Foreign Table">

 [FALocationEntry](/entities/system-tables/FALocationEntry.md) 
</div>
</div>

<div class="row searchable" id="details.marketValue">
<div class="cell" data-label="Property">details.marketValue</div>
<div class="cell" data-label="Column">marketValue</div>
<div class="cell" data-label="Arabic">القيمة السوقية</div>
<div class="cell" data-label="English">Market value</div>
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

<div class="row searchable" id="details.n4">
<div class="cell" data-label="Property">details.n4</div>
<div class="cell" data-label="Column">n4</div>
<div class="cell" data-label="Arabic">رقم 4</div>
<div class="cell" data-label="English">Number 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.n5">
<div class="cell" data-label="Property">details.n5</div>
<div class="cell" data-label="Column">n5</div>
<div class="cell" data-label="Arabic">رقم 5</div>
<div class="cell" data-label="English">Number 5</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.propertiesEntry">
<div class="cell" data-label="Property">details.propertiesEntry</div>
<div class="cell" data-label="Column">propertiesEntry_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type"></div>
<div class="cell" data-label="Foreign Table">

 [FAPropertiesEntry](/entities/system-tables/FAPropertiesEntry.md) 
</div>
</div>

<div class="row searchable" id="details.purchaseDate">
<div class="cell" data-label="Property">details.purchaseDate</div>
<div class="cell" data-label="Column">purchaseDate</div>
<div class="cell" data-label="Arabic">تاريخ الشراء</div>
<div class="cell" data-label="English">Purchase date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.serialNumber">
<div class="cell" data-label="Property">details.serialNumber</div>
<div class="cell" data-label="Column">serialNumber</div>
<div class="cell" data-label="Arabic">الرقم المسلسل</div>
<div class="cell" data-label="English">Serial Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.supplier">
<div class="cell" data-label="Property">details.supplier</div>
<div class="cell" data-label="Column">supplier_id</div>
<div class="cell" data-label="Arabic">مورد</div>
<div class="cell" data-label="English"> Supplier</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Supplier](/entities/basic/Supplier.md) 
</div>
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

<div class="row searchable" id="details.text4">
<div class="cell" data-label="Property">details.text4</div>
<div class="cell" data-label="Column">text4</div>
<div class="cell" data-label="Arabic">نص 4</div>
<div class="cell" data-label="English">text4</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.text5">
<div class="cell" data-label="Property">details.text5</div>
<div class="cell" data-label="Column">text5</div>
<div class="cell" data-label="Arabic">نص 5</div>
<div class="cell" data-label="English">text5</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.unDepreciable">
<div class="cell" data-label="Property">details.unDepreciable</div>
<div class="cell" data-label="Column">unDepreciable</div>
<div class="cell" data-label="Arabic">غير قابل للإهلاك</div>
<div class="cell" data-label="English">Undepreciable</div>
<div class="cell" data-label="Type">Boolean</div>

</div>


</div>

<div id='externalPaymentLines' title='externalPaymentLines' class='searchable'>

## externalPaymentLines (السداد بسندات خارجية - External Payment Lines)
**Table Name:** FAOpeningDocumentExternalPaymentLine, **Join Column:** fAOpeningDocument_id
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

<div id='scheduleLines' title='scheduleLines' class='searchable'>

## scheduleLines (الدفعات - Payments)
**Table Name:** FAOpeningDocumentScheduleLine, **Join Column:** fAOpeningDocument_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="scheduleLines.date1">
<div class="cell" data-label="Property">scheduleLines.date1</div>
<div class="cell" data-label="Column">date1</div>
<div class="cell" data-label="Arabic">تـــاريخ 1</div>
<div class="cell" data-label="English">Date 1</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="scheduleLines.date2">
<div class="cell" data-label="Property">scheduleLines.date2</div>
<div class="cell" data-label="Column">date2</div>
<div class="cell" data-label="Arabic">تـــاريخ 2</div>
<div class="cell" data-label="English">Date 2</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="scheduleLines.date3">
<div class="cell" data-label="Property">scheduleLines.date3</div>
<div class="cell" data-label="Column">date3</div>
<div class="cell" data-label="Arabic">تاريخ 3</div>
<div class="cell" data-label="English">Date3</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="scheduleLines.id">
<div class="cell" data-label="Property">scheduleLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="scheduleLines.installmentCode">
<div class="cell" data-label="Property">scheduleLines.installmentCode</div>
<div class="cell" data-label="Column">installmentCode</div>
<div class="cell" data-label="Arabic">كود القسط</div>
<div class="cell" data-label="English">Installment Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="scheduleLines.installmentDescription">
<div class="cell" data-label="Property">scheduleLines.installmentDescription</div>
<div class="cell" data-label="Column">installmentDescription</div>
<div class="cell" data-label="Arabic">وصف القسط</div>
<div class="cell" data-label="English">Installment Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="scheduleLines.installmentDoc">
<div class="cell" data-label="Property">scheduleLines.installmentDoc</div>
<div class="cell gen-ref-column" data-label="Column">installmentDocActualCode,  installmentDocCode,  installmentDocEntityType,  installmentDocId</div>
<div class="cell" data-label="Arabic">مستند القسط</div>
<div class="cell" data-label="English">Installment doc</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="scheduleLines.lineNumber">
<div class="cell" data-label="Property">scheduleLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="scheduleLines.n1">
<div class="cell" data-label="Property">scheduleLines.n1</div>
<div class="cell" data-label="Column">n1</div>
<div class="cell" data-label="Arabic">رقم 1</div>
<div class="cell" data-label="English">Number 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="scheduleLines.n2">
<div class="cell" data-label="Property">scheduleLines.n2</div>
<div class="cell" data-label="Column">n2</div>
<div class="cell" data-label="Arabic">رقم 2</div>
<div class="cell" data-label="English">Number 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="scheduleLines.n3">
<div class="cell" data-label="Property">scheduleLines.n3</div>
<div class="cell" data-label="Column">n3</div>
<div class="cell" data-label="Arabic">رقم 3</div>
<div class="cell" data-label="English">Number 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="scheduleLines.paid">
<div class="cell" data-label="Property">scheduleLines.paid</div>
<div class="cell" data-label="Column">paid</div>
<div class="cell" data-label="Arabic">مُسددة</div>
<div class="cell" data-label="English">Paid</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="scheduleLines.paidValue">
<div class="cell" data-label="Property">scheduleLines.paidValue</div>
<div class="cell" data-label="Column">paidValue</div>
<div class="cell" data-label="Arabic">القيمة المدفوعة</div>
<div class="cell" data-label="English">Paid Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="scheduleLines.paymentDate">
<div class="cell" data-label="Property">scheduleLines.paymentDate</div>
<div class="cell" data-label="Column">paymentDate</div>
<div class="cell" data-label="Arabic">تاريخ الدفع</div>
<div class="cell" data-label="English">Payment Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="scheduleLines.paymentPercent">
<div class="cell" data-label="Property">scheduleLines.paymentPercent</div>
<div class="cell" data-label="Column">paymentPercent</div>
<div class="cell" data-label="Arabic">نسبة الدفعة</div>
<div class="cell" data-label="English">Payment Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="scheduleLines.paymentValue">
<div class="cell" data-label="Property">scheduleLines.paymentValue</div>
<div class="cell" data-label="Column">paymentValue</div>
<div class="cell" data-label="Arabic">المبلغ</div>
<div class="cell" data-label="English">Payment Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="scheduleLines.ref1">
<div class="cell" data-label="Property">scheduleLines.ref1</div>
<div class="cell gen-ref-column" data-label="Column">ref1ActualCode,  ref1Code,  ref1EntityType,  ref1Id</div>
<div class="cell" data-label="Arabic">مرجع 1</div>
<div class="cell" data-label="English">Reference 1</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="scheduleLines.ref2">
<div class="cell" data-label="Property">scheduleLines.ref2</div>
<div class="cell gen-ref-column" data-label="Column">ref2ActualCode,  ref2Code,  ref2EntityType,  ref2Id</div>
<div class="cell" data-label="Arabic">مرجع 2</div>
<div class="cell" data-label="English">Reference 2</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="scheduleLines.remaining">
<div class="cell" data-label="Property">scheduleLines.remaining</div>
<div class="cell" data-label="Column">remaining</div>
<div class="cell" data-label="Arabic">المتبقي</div>
<div class="cell" data-label="English">Remaining</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="scheduleLines.remarks">
<div class="cell" data-label="Property">scheduleLines.remarks</div>
<div class="cell" data-label="Column">remarks</div>
<div class="cell" data-label="Arabic">ملاحظات</div>
<div class="cell" data-label="English">Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="scheduleLines.systemPaid">
<div class="cell" data-label="Property">scheduleLines.systemPaid</div>
<div class="cell" data-label="Column">systemPaid</div>
<div class="cell" data-label="Arabic">المحصل نظاميا</div>
<div class="cell" data-label="English">System paid</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="scheduleLines.text1">
<div class="cell" data-label="Property">scheduleLines.text1</div>
<div class="cell" data-label="Column">text1</div>
<div class="cell" data-label="Arabic">نــــص 1</div>
<div class="cell" data-label="English">Text 1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="scheduleLines.text2">
<div class="cell" data-label="Property">scheduleLines.text2</div>
<div class="cell" data-label="Column">text2</div>
<div class="cell" data-label="Arabic">نـــــص 2</div>
<div class="cell" data-label="English">Text 2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="scheduleLines.text3">
<div class="cell" data-label="Property">scheduleLines.text3</div>
<div class="cell" data-label="Column">text3</div>
<div class="cell" data-label="Arabic">نص 3</div>
<div class="cell" data-label="English">text3</div>
<div class="cell" data-label="Type">Text</div>

</div>


</div>

