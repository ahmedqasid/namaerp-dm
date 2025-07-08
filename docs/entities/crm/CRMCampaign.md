# CRMCampaign
**Arabic:** حملة - الحملات
**English:** CRM Campaign - CRM Campaigns

<ContentFilter/>


<div class='searchable'>
<a href='#assignedTo'>assignedTo (CampaignEmployeeLine) </a> , <a href='#productdetails'>productdetails (ProductLines) </a>
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
</div><div class="row searchable" id="actualCost.amount">
<div class="cell" data-label="Property">actualCost.amount</div>
<div class="cell" data-label="Column">actualCostAmount</div>
<div class="cell" data-label="Arabic"> المبلغ</div>
<div class="cell" data-label="English"> Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="actualCost.currency">
<div class="cell" data-label="Property">actualCost.currency</div>
<div class="cell" data-label="Column">actualCostCurrency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/entities/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="actualROI">
<div class="cell" data-label="Property">actualROI</div>
<div class="cell" data-label="Column">actualROI</div>
<div class="cell" data-label="Arabic">العائد الفعلي على الأستثمار</div>
<div class="cell" data-label="English">Actual ROI</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="actualResponseCount">
<div class="cell" data-label="Property">actualResponseCount</div>
<div class="cell" data-label="Column">actualResponseCount</div>
<div class="cell" data-label="Arabic">العدد الفعلي للاستجابات</div>
<div class="cell" data-label="English">Actual Response Count</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="actualSalesCount">
<div class="cell" data-label="Property">actualSalesCount</div>
<div class="cell" data-label="Column">actualSalesCount</div>
<div class="cell" data-label="Arabic">العدد الفعلي للمبيعات</div>
<div class="cell" data-label="English">Actual Sales Count</div>
<div class="cell" data-label="Type">Integer</div>

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

<div class="row searchable" id="campaignSponsor">
<div class="cell" data-label="Property">campaignSponsor</div>
<div class="cell" data-label="Column">campaignSponsor</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English">Sponsor</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="campaignStatus">
<div class="cell" data-label="Property">campaignStatus</div>
<div class="cell" data-label="Column">campaignStatus</div>
<div class="cell" data-label="Arabic">حالة الحملة</div>
<div class="cell" data-label="English">Campaign Status</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="campaignType">
<div class="cell" data-label="Property">campaignType</div>
<div class="cell" data-label="Column">campaignType_id</div>
<div class="cell" data-label="Arabic">نوع الحملة</div>
<div class="cell" data-label="English">Campaign Type</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CRMCampaignType](/entities/crm/CRMCampaignType.md) 
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
<div class="cell" data-label="Arabic">الوصف</div>
<div class="cell" data-label="English">Description</div>
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

<div class="row searchable" id="employeeGroup">
<div class="cell" data-label="Property">employeeGroup</div>
<div class="cell" data-label="Column">employeeGroup_id</div>
<div class="cell" data-label="Arabic">مجموعة موظفين</div>
<div class="cell" data-label="English">Employee Group</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MasterGroup](/entities/basic/MasterGroup.md) 
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

<div class="row searchable" id="expectedClosingDate">
<div class="cell" data-label="Property">expectedClosingDate</div>
<div class="cell" data-label="Column">expectedClosingDate</div>
<div class="cell" data-label="Arabic">تاريخ الإغلاق المتوقع</div>
<div class="cell" data-label="English">Expected Closing Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="expectedCost.amount">
<div class="cell" data-label="Property">expectedCost.amount</div>
<div class="cell" data-label="Column">expectedCostAmount</div>
<div class="cell" data-label="Arabic"> المبلغ</div>
<div class="cell" data-label="English"> Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expectedCost.currency">
<div class="cell" data-label="Property">expectedCost.currency</div>
<div class="cell" data-label="Column">expectedCostCurrency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/entities/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="expectedROI">
<div class="cell" data-label="Property">expectedROI</div>
<div class="cell" data-label="Column">expectedROI</div>
<div class="cell" data-label="Arabic">العائد المتوقع على الأستثمار</div>
<div class="cell" data-label="English">Expected ROI</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expectedResponseCount">
<div class="cell" data-label="Property">expectedResponseCount</div>
<div class="cell" data-label="Column">expectedResponseCount</div>
<div class="cell" data-label="Arabic">عدد الإستجابات المتوقعة</div>
<div class="cell" data-label="English">Expected Response Count</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="expectedSalesCount">
<div class="cell" data-label="Property">expectedSalesCount</div>
<div class="cell" data-label="Column">expectedSalesCount</div>
<div class="cell" data-label="Arabic">عدد المبيعات المتوقعة</div>
<div class="cell" data-label="English">Expected Sales Count</div>
<div class="cell" data-label="Type">Integer</div>

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

<div class="row searchable" id="mediator">
<div class="cell" data-label="Property">mediator</div>
<div class="cell" data-label="Column">mediator_id</div>
<div class="cell" data-label="Arabic">الوسيط</div>
<div class="cell" data-label="English">Mediator</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CRMMediator](/entities/crm/CRMMediator.md) 
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

<div class="row searchable" id="responsibleEmployee">
<div class="cell" data-label="Property">responsibleEmployee</div>
<div class="cell" data-label="Column">responsibleEmployee_id</div>
<div class="cell" data-label="Arabic">الموظف المسئول</div>
<div class="cell" data-label="English">Responsible Employee</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/entities/basic/Employee.md) 
</div>
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

<div class="row searchable" id="sponsor">
<div class="cell" data-label="Property">sponsor</div>
<div class="cell" data-label="Column">sponsor</div>
<div class="cell" data-label="Arabic">الراعي</div>
<div class="cell" data-label="English">Sponsor</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="startDate">
<div class="cell" data-label="Property">startDate</div>
<div class="cell" data-label="Column">startDate</div>
<div class="cell" data-label="Arabic">تاريخ البداية</div>
<div class="cell" data-label="English">Start Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="systemGeneratedCodePrefix">
<div class="cell" data-label="Property">systemGeneratedCodePrefix</div>
<div class="cell" data-label="Column">systemGeneratedCodePrefix</div>
<div class="cell" data-label="Arabic">System Generated Code Prefix</div>
<div class="cell" data-label="English">System Generated Code Prefix</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="targetAudience">
<div class="cell" data-label="Property">targetAudience</div>
<div class="cell" data-label="Column">targetAudience</div>
<div class="cell" data-label="Arabic">الجمهور المستهدف</div>
<div class="cell" data-label="English">Audience</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="targetKind">
<div class="cell" data-label="Property">targetKind</div>
<div class="cell" data-label="Column">targetKind</div>
<div class="cell" data-label="Arabic">الجمهور المستهدف</div>
<div class="cell" data-label="English">Target audience</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="targetSize">
<div class="cell" data-label="Property">targetSize</div>
<div class="cell" data-label="Column">targetSize</div>
<div class="cell" data-label="Arabic">الحجم المستهدف</div>
<div class="cell" data-label="English">Target Size</div>
<div class="cell" data-label="Type">Text</div>

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


</div>

<div id='assignedTo' title='assignedTo' class='searchable'>

## assignedTo (مسند إلي - Assigned To)
**Table Name:** CampaignEmployeeLine, **Join Column:** cRMCampaign_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="assignedTo.date1">
<div class="cell" data-label="Property">assignedTo.date1</div>
<div class="cell" data-label="Column">date1</div>
<div class="cell" data-label="Arabic">تـــاريخ 1</div>
<div class="cell" data-label="English">Date 1</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="assignedTo.date2">
<div class="cell" data-label="Property">assignedTo.date2</div>
<div class="cell" data-label="Column">date2</div>
<div class="cell" data-label="Arabic">تـــاريخ 2</div>
<div class="cell" data-label="English">Date 2</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="assignedTo.date3">
<div class="cell" data-label="Property">assignedTo.date3</div>
<div class="cell" data-label="Column">date3</div>
<div class="cell" data-label="Arabic">تاريخ 3</div>
<div class="cell" data-label="English">Date3</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="assignedTo.date4">
<div class="cell" data-label="Property">assignedTo.date4</div>
<div class="cell" data-label="Column">date4</div>
<div class="cell" data-label="Arabic">تاريخ 4</div>
<div class="cell" data-label="English">Date4</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="assignedTo.date5">
<div class="cell" data-label="Property">assignedTo.date5</div>
<div class="cell" data-label="Column">date5</div>
<div class="cell" data-label="Arabic">تاريخ 5</div>
<div class="cell" data-label="English">Date5</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="assignedTo.employee">
<div class="cell" data-label="Property">assignedTo.employee</div>
<div class="cell" data-label="Column">employee_id</div>
<div class="cell" data-label="Arabic">الموظف</div>
<div class="cell" data-label="English">Employee</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/entities/basic/Employee.md) 
</div>
</div>

<div class="row searchable" id="assignedTo.id">
<div class="cell" data-label="Property">assignedTo.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="assignedTo.lineColor">
<div class="cell" data-label="Property">assignedTo.lineColor</div>
<div class="cell" data-label="Column">lineColor</div>
<div class="cell" data-label="Arabic">Line Color</div>
<div class="cell" data-label="English">Line Color</div>
<div class="cell" data-label="Type">Color</div>

</div>

<div class="row searchable" id="assignedTo.lineNumber">
<div class="cell" data-label="Property">assignedTo.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="assignedTo.n1">
<div class="cell" data-label="Property">assignedTo.n1</div>
<div class="cell" data-label="Column">n1</div>
<div class="cell" data-label="Arabic">رقم 1</div>
<div class="cell" data-label="English">Number 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="assignedTo.n2">
<div class="cell" data-label="Property">assignedTo.n2</div>
<div class="cell" data-label="Column">n2</div>
<div class="cell" data-label="Arabic">رقم 2</div>
<div class="cell" data-label="English">Number 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="assignedTo.n3">
<div class="cell" data-label="Property">assignedTo.n3</div>
<div class="cell" data-label="Column">n3</div>
<div class="cell" data-label="Arabic">رقم 3</div>
<div class="cell" data-label="English">Number 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="assignedTo.n4">
<div class="cell" data-label="Property">assignedTo.n4</div>
<div class="cell" data-label="Column">n4</div>
<div class="cell" data-label="Arabic">رقم 4</div>
<div class="cell" data-label="English">Number 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="assignedTo.n5">
<div class="cell" data-label="Property">assignedTo.n5</div>
<div class="cell" data-label="Column">n5</div>
<div class="cell" data-label="Arabic">رقم 5</div>
<div class="cell" data-label="English">Number 5</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="assignedTo.ref1">
<div class="cell" data-label="Property">assignedTo.ref1</div>
<div class="cell gen-ref-column" data-label="Column">ref1ActualCode,  ref1Code,  ref1EntityType,  ref1Id</div>
<div class="cell" data-label="Arabic">مرجع 1</div>
<div class="cell" data-label="English">Reference 1</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="assignedTo.ref2">
<div class="cell" data-label="Property">assignedTo.ref2</div>
<div class="cell gen-ref-column" data-label="Column">ref2ActualCode,  ref2Code,  ref2EntityType,  ref2Id</div>
<div class="cell" data-label="Arabic">مرجع 2</div>
<div class="cell" data-label="English">Reference 2</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="assignedTo.ref3">
<div class="cell" data-label="Property">assignedTo.ref3</div>
<div class="cell gen-ref-column" data-label="Column">ref3ActualCode,  ref3Code,  ref3EntityType,  ref3Id</div>
<div class="cell" data-label="Arabic">مرجع 3</div>
<div class="cell" data-label="English">Reference 3</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="assignedTo.ref4">
<div class="cell" data-label="Property">assignedTo.ref4</div>
<div class="cell gen-ref-column" data-label="Column">ref4ActualCode,  ref4Code,  ref4EntityType,  ref4Id</div>
<div class="cell" data-label="Arabic">مرجع 4</div>
<div class="cell" data-label="English">Reference 4</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="assignedTo.ref5">
<div class="cell" data-label="Property">assignedTo.ref5</div>
<div class="cell gen-ref-column" data-label="Column">ref5ActualCode,  ref5Code,  ref5EntityType,  ref5Id</div>
<div class="cell" data-label="Arabic">مرجع 5</div>
<div class="cell" data-label="English">Reference 5</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="assignedTo.remarks">
<div class="cell" data-label="Property">assignedTo.remarks</div>
<div class="cell" data-label="Column">remarks</div>
<div class="cell" data-label="Arabic">ملاحظات</div>
<div class="cell" data-label="English">Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="assignedTo.t1">
<div class="cell" data-label="Property">assignedTo.t1</div>
<div class="cell" data-label="Column">t1</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="assignedTo.t2">
<div class="cell" data-label="Property">assignedTo.t2</div>
<div class="cell" data-label="Column">t2</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="assignedTo.t3">
<div class="cell" data-label="Property">assignedTo.t3</div>
<div class="cell" data-label="Column">t3</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="assignedTo.t4">
<div class="cell" data-label="Property">assignedTo.t4</div>
<div class="cell" data-label="Column">t4</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="assignedTo.t5">
<div class="cell" data-label="Property">assignedTo.t5</div>
<div class="cell" data-label="Column">t5</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="assignedTo.text1">
<div class="cell" data-label="Property">assignedTo.text1</div>
<div class="cell" data-label="Column">text1</div>
<div class="cell" data-label="Arabic">نــــص 1</div>
<div class="cell" data-label="English">Text 1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="assignedTo.text2">
<div class="cell" data-label="Property">assignedTo.text2</div>
<div class="cell" data-label="Column">text2</div>
<div class="cell" data-label="Arabic">نـــــص 2</div>
<div class="cell" data-label="English">Text 2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="assignedTo.text3">
<div class="cell" data-label="Property">assignedTo.text3</div>
<div class="cell" data-label="Column">text3</div>
<div class="cell" data-label="Arabic">نص 3</div>
<div class="cell" data-label="English">text3</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="assignedTo.text4">
<div class="cell" data-label="Property">assignedTo.text4</div>
<div class="cell" data-label="Column">text4</div>
<div class="cell" data-label="Arabic">نص 4</div>
<div class="cell" data-label="English">text4</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="assignedTo.text5">
<div class="cell" data-label="Property">assignedTo.text5</div>
<div class="cell" data-label="Column">text5</div>
<div class="cell" data-label="Arabic">نص 5</div>
<div class="cell" data-label="English">text5</div>
<div class="cell" data-label="Type">Text</div>

</div>


</div>

<div id='productdetails' title='productdetails' class='searchable'>

## productdetails ( - )
**Table Name:** ProductLines, **Join Column:** cRMCampaign_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="productdetails.attachment">
<div class="cell" data-label="Property">productdetails.attachment</div>
<div class="cell" data-label="Column">attachment_id</div>
<div class="cell" data-label="Arabic">مرفق</div>
<div class="cell" data-label="English">Attachment</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/entities/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="productdetails.dimensions.analysisSet">
<div class="cell" data-label="Property">productdetails.dimensions.analysisSet</div>
<div class="cell" data-label="Column">analysisSet_id</div>
<div class="cell" data-label="Arabic">المجموعة التحليلية</div>
<div class="cell" data-label="English">Analysis set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/entities/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="productdetails.dimensions.branch">
<div class="cell" data-label="Property">productdetails.dimensions.branch</div>
<div class="cell" data-label="Column">branch_id</div>
<div class="cell" data-label="Arabic">الفرع</div>
<div class="cell" data-label="English">Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/entities/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="productdetails.dimensions.department">
<div class="cell" data-label="Property">productdetails.dimensions.department</div>
<div class="cell" data-label="Column">department_id</div>
<div class="cell" data-label="Arabic">الإدارة</div>
<div class="cell" data-label="English">Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/entities/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="productdetails.dimensions.legalEntity">
<div class="cell" data-label="Property">productdetails.dimensions.legalEntity</div>
<div class="cell" data-label="Column">legalEntity_id</div>
<div class="cell" data-label="Arabic">الشركة</div>
<div class="cell" data-label="English">Legal Entity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [LegalEntity](/entities/basic/LegalEntity.md) 
</div>
</div>

<div class="row searchable" id="productdetails.dimensions.sector">
<div class="cell" data-label="Property">productdetails.dimensions.sector</div>
<div class="cell" data-label="Column">sector_id</div>
<div class="cell" data-label="Arabic">القطاع</div>
<div class="cell" data-label="English">Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/entities/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="productdetails.id">
<div class="cell" data-label="Property">productdetails.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="productdetails.itemBrand">
<div class="cell" data-label="Property">productdetails.itemBrand</div>
<div class="cell" data-label="Column">itemBrand_id</div>
<div class="cell" data-label="Arabic"> الماركة</div>
<div class="cell" data-label="English"> Item Brand</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemBrand](/entities/supplychain/ItemBrand.md) 
</div>
</div>

<div class="row searchable" id="productdetails.itemCategory">
<div class="cell" data-label="Property">productdetails.itemCategory</div>
<div class="cell" data-label="Column">itemCategory_id</div>
<div class="cell" data-label="Arabic">فئة صنف</div>
<div class="cell" data-label="English">Item Category</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemCategory](/entities/supplychain/ItemCategory.md) 
</div>
</div>

<div class="row searchable" id="productdetails.itemClass1">
<div class="cell" data-label="Property">productdetails.itemClass1</div>
<div class="cell" data-label="Column">itemClass1_id</div>
<div class="cell" data-label="Arabic">تصنيف 1</div>
<div class="cell" data-label="English">Class 1</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass1](/entities/supplychain/ItemClass1.md) 
</div>
</div>

<div class="row searchable" id="productdetails.itemClass10">
<div class="cell" data-label="Property">productdetails.itemClass10</div>
<div class="cell" data-label="Column">itemClass10_id</div>
<div class="cell" data-label="Arabic">تصنيف 10</div>
<div class="cell" data-label="English">Class 10</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass10](/entities/supplychain/ItemClass10.md) 
</div>
</div>

<div class="row searchable" id="productdetails.itemClass2">
<div class="cell" data-label="Property">productdetails.itemClass2</div>
<div class="cell" data-label="Column">itemClass2_id</div>
<div class="cell" data-label="Arabic">تصنيف 2</div>
<div class="cell" data-label="English">Class 2</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass2](/entities/supplychain/ItemClass2.md) 
</div>
</div>

<div class="row searchable" id="productdetails.itemClass3">
<div class="cell" data-label="Property">productdetails.itemClass3</div>
<div class="cell" data-label="Column">itemClass3_id</div>
<div class="cell" data-label="Arabic">تصنيف 3</div>
<div class="cell" data-label="English">Class 3</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass3](/entities/supplychain/ItemClass3.md) 
</div>
</div>

<div class="row searchable" id="productdetails.itemClass4">
<div class="cell" data-label="Property">productdetails.itemClass4</div>
<div class="cell" data-label="Column">itemClass4_id</div>
<div class="cell" data-label="Arabic">تصنيف 4</div>
<div class="cell" data-label="English">Class 4</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass4](/entities/supplychain/ItemClass4.md) 
</div>
</div>

<div class="row searchable" id="productdetails.itemClass5">
<div class="cell" data-label="Property">productdetails.itemClass5</div>
<div class="cell" data-label="Column">itemClass5_id</div>
<div class="cell" data-label="Arabic">تصنيف 5</div>
<div class="cell" data-label="English">Class 5</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass5](/entities/supplychain/ItemClass5.md) 
</div>
</div>

<div class="row searchable" id="productdetails.itemClass6">
<div class="cell" data-label="Property">productdetails.itemClass6</div>
<div class="cell" data-label="Column">itemClass6_id</div>
<div class="cell" data-label="Arabic">تصنيف 6</div>
<div class="cell" data-label="English">Class 6</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass6](/entities/supplychain/ItemClass6.md) 
</div>
</div>

<div class="row searchable" id="productdetails.itemClass7">
<div class="cell" data-label="Property">productdetails.itemClass7</div>
<div class="cell" data-label="Column">itemClass7_id</div>
<div class="cell" data-label="Arabic">تصنيف 7</div>
<div class="cell" data-label="English">Class 7</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass7](/entities/supplychain/ItemClass7.md) 
</div>
</div>

<div class="row searchable" id="productdetails.itemClass8">
<div class="cell" data-label="Property">productdetails.itemClass8</div>
<div class="cell" data-label="Column">itemClass8_id</div>
<div class="cell" data-label="Arabic">تصنيف 8</div>
<div class="cell" data-label="English">Class 8</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass8](/entities/supplychain/ItemClass8.md) 
</div>
</div>

<div class="row searchable" id="productdetails.itemClass9">
<div class="cell" data-label="Property">productdetails.itemClass9</div>
<div class="cell" data-label="Column">itemClass9_id</div>
<div class="cell" data-label="Arabic">تصنيف 9</div>
<div class="cell" data-label="English">Class 9</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass9](/entities/supplychain/ItemClass9.md) 
</div>
</div>

<div class="row searchable" id="productdetails.itemSection">
<div class="cell" data-label="Property">productdetails.itemSection</div>
<div class="cell" data-label="Column">itemSection_id</div>
<div class="cell" data-label="Arabic">قسم الصنف</div>
<div class="cell" data-label="English"> Item Section</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemSection](/entities/supplychain/ItemSection.md) 
</div>
</div>

<div class="row searchable" id="productdetails.lineNumber">
<div class="cell" data-label="Property">productdetails.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="productdetails.product">
<div class="cell" data-label="Property">productdetails.product</div>
<div class="cell gen-ref-column" data-label="Column">productActualCode,  productCode,  productEntityType,  productId</div>
<div class="cell" data-label="Arabic">المنتج</div>
<div class="cell" data-label="English">Product</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>


</div>

