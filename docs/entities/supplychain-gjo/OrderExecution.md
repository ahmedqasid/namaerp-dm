# OrderExecution
**Arabic:** تنفيذ تشغيلة
**English:** Service Execution - Service Executions

<ContentFilter/>


<div class='searchable'>
<a href='#batchInfo'>batchInfo (OrderExecutionBatchInfo) </a> , <a href='#details'>details (OrderExecutionLine) </a> , <a href='#orderMaterialLines'>orderMaterialLines (OrderExecutionMaterial) </a> , <a href='#resLines'>resLines (OrderExecutionResLine) </a>
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

<div class="row searchable" id="costRate">
<div class="cell" data-label="Property">costRate</div>
<div class="cell" data-label="Column">costRate</div>
<div class="cell" data-label="Arabic">معدل التكلفة</div>
<div class="cell" data-label="English">Cost Rate</div>
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

<div class="row searchable" id="duration.uom">
<div class="cell" data-label="Property">duration.uom</div>
<div class="cell" data-label="Column">durationUom</div>
<div class="cell" data-label="Arabic">الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="duration.value">
<div class="cell" data-label="Property">duration.value</div>
<div class="cell" data-label="Column">durationValue</div>
<div class="cell" data-label="Arabic">القيمة</div>
<div class="cell" data-label="English">Value</div>
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

<div class="row searchable" id="endTime">
<div class="cell" data-label="Property">endTime</div>
<div class="cell" data-label="Column">endTime</div>
<div class="cell" data-label="Arabic">إلى</div>
<div class="cell" data-label="English">End Time</div>
<div class="cell" data-label="Type">DateAndTime</div>

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

<div class="row searchable" id="fromDate">
<div class="cell" data-label="Property">fromDate</div>
<div class="cell" data-label="Column">fromDate</div>
<div class="cell" data-label="Arabic">من تاريخ</div>
<div class="cell" data-label="English">From Date</div>
<div class="cell" data-label="Type">Date</div>

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

<div class="row searchable" id="fromImportance">
<div class="cell" data-label="Property">fromImportance</div>
<div class="cell" data-label="Column">fromImportance</div>
<div class="cell" data-label="Arabic">من أهميه</div>
<div class="cell" data-label="English">From Importance</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="fromItem">
<div class="cell" data-label="Property">fromItem</div>
<div class="cell" data-label="Column">fromItem_id</div>
<div class="cell" data-label="Arabic">من صنف</div>
<div class="cell" data-label="English">From Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/entities/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="fromJobOrder">
<div class="cell" data-label="Property">fromJobOrder</div>
<div class="cell" data-label="Column">fromJobOrder_id</div>
<div class="cell" data-label="Arabic">من أمر شغل</div>
<div class="cell" data-label="English">From Job Order</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [GlassJobOrder](/entities/supplychain-gjo/GlassJobOrder.md) 
</div>
</div>

<div class="row searchable" id="fromJobOrderBook">
<div class="cell" data-label="Property">fromJobOrderBook</div>
<div class="cell" data-label="Column">fromJobOrderBook_id</div>
<div class="cell" data-label="Arabic">من دفتر أمر شغل</div>
<div class="cell" data-label="English">From Job Order Book</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DocumentBook](/entities/basic/DocumentBook.md) 
</div>
</div>

<div class="row searchable" id="fromWarehouse">
<div class="cell" data-label="Property">fromWarehouse</div>
<div class="cell" data-label="Column">fromWarehouse_id</div>
<div class="cell" data-label="Arabic">من مخزن</div>
<div class="cell" data-label="English">From Warehouse</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/entities/supplychain/Warehouse.md) 
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

<div class="row searchable" id="jobOrder">
<div class="cell" data-label="Property">jobOrder</div>
<div class="cell" data-label="Column">jobOrder_id</div>
<div class="cell" data-label="Arabic">أمر الشغل</div>
<div class="cell" data-label="English">Job Order</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [GlassJobOrder](/entities/supplychain-gjo/GlassJobOrder.md) 
</div>
</div>

<div class="row searchable" id="jobOrder10">
<div class="cell" data-label="Property">jobOrder10</div>
<div class="cell" data-label="Column">jobOrder10_id</div>
<div class="cell" data-label="Arabic">أمر الشغل10</div>
<div class="cell" data-label="English">Job Order10</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [GlassJobOrder](/entities/supplychain-gjo/GlassJobOrder.md) 
</div>
</div>

<div class="row searchable" id="jobOrder11">
<div class="cell" data-label="Property">jobOrder11</div>
<div class="cell" data-label="Column">jobOrder11_id</div>
<div class="cell" data-label="Arabic">أمر الشغل11</div>
<div class="cell" data-label="English">Job Order11</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [GlassJobOrder](/entities/supplychain-gjo/GlassJobOrder.md) 
</div>
</div>

<div class="row searchable" id="jobOrder12">
<div class="cell" data-label="Property">jobOrder12</div>
<div class="cell" data-label="Column">jobOrder12_id</div>
<div class="cell" data-label="Arabic">أمر الشغل12</div>
<div class="cell" data-label="English">Job Order12</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [GlassJobOrder](/entities/supplychain-gjo/GlassJobOrder.md) 
</div>
</div>

<div class="row searchable" id="jobOrder13">
<div class="cell" data-label="Property">jobOrder13</div>
<div class="cell" data-label="Column">jobOrder13_id</div>
<div class="cell" data-label="Arabic">أمر الشغل13</div>
<div class="cell" data-label="English">Job Order13</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [GlassJobOrder](/entities/supplychain-gjo/GlassJobOrder.md) 
</div>
</div>

<div class="row searchable" id="jobOrder14">
<div class="cell" data-label="Property">jobOrder14</div>
<div class="cell" data-label="Column">jobOrder14_id</div>
<div class="cell" data-label="Arabic">أمر الشغل14</div>
<div class="cell" data-label="English">Job Order14</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [GlassJobOrder](/entities/supplychain-gjo/GlassJobOrder.md) 
</div>
</div>

<div class="row searchable" id="jobOrder15">
<div class="cell" data-label="Property">jobOrder15</div>
<div class="cell" data-label="Column">jobOrder15_id</div>
<div class="cell" data-label="Arabic">أمر الشغل15</div>
<div class="cell" data-label="English">Job Order15</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [GlassJobOrder](/entities/supplychain-gjo/GlassJobOrder.md) 
</div>
</div>

<div class="row searchable" id="jobOrder16">
<div class="cell" data-label="Property">jobOrder16</div>
<div class="cell" data-label="Column">jobOrder16_id</div>
<div class="cell" data-label="Arabic">أمر الشغل16</div>
<div class="cell" data-label="English">Job Order16</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [GlassJobOrder](/entities/supplychain-gjo/GlassJobOrder.md) 
</div>
</div>

<div class="row searchable" id="jobOrder17">
<div class="cell" data-label="Property">jobOrder17</div>
<div class="cell" data-label="Column">jobOrder17_id</div>
<div class="cell" data-label="Arabic">أمر الشغل17</div>
<div class="cell" data-label="English">Job Order17</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [GlassJobOrder](/entities/supplychain-gjo/GlassJobOrder.md) 
</div>
</div>

<div class="row searchable" id="jobOrder18">
<div class="cell" data-label="Property">jobOrder18</div>
<div class="cell" data-label="Column">jobOrder18_id</div>
<div class="cell" data-label="Arabic">أمر الشغل18</div>
<div class="cell" data-label="English">Job Order18</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [GlassJobOrder](/entities/supplychain-gjo/GlassJobOrder.md) 
</div>
</div>

<div class="row searchable" id="jobOrder19">
<div class="cell" data-label="Property">jobOrder19</div>
<div class="cell" data-label="Column">jobOrder19_id</div>
<div class="cell" data-label="Arabic">أمر الشغل19</div>
<div class="cell" data-label="English">Job Order19</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [GlassJobOrder](/entities/supplychain-gjo/GlassJobOrder.md) 
</div>
</div>

<div class="row searchable" id="jobOrder2">
<div class="cell" data-label="Property">jobOrder2</div>
<div class="cell" data-label="Column">jobOrder2_id</div>
<div class="cell" data-label="Arabic">أمر الشغل2</div>
<div class="cell" data-label="English">Job Order2</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [GlassJobOrder](/entities/supplychain-gjo/GlassJobOrder.md) 
</div>
</div>

<div class="row searchable" id="jobOrder20">
<div class="cell" data-label="Property">jobOrder20</div>
<div class="cell" data-label="Column">jobOrder20_id</div>
<div class="cell" data-label="Arabic">أمر الشغل20</div>
<div class="cell" data-label="English">Job Order20</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [GlassJobOrder](/entities/supplychain-gjo/GlassJobOrder.md) 
</div>
</div>

<div class="row searchable" id="jobOrder3">
<div class="cell" data-label="Property">jobOrder3</div>
<div class="cell" data-label="Column">jobOrder3_id</div>
<div class="cell" data-label="Arabic">أمر الشغل3</div>
<div class="cell" data-label="English">Job Order3</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [GlassJobOrder](/entities/supplychain-gjo/GlassJobOrder.md) 
</div>
</div>

<div class="row searchable" id="jobOrder4">
<div class="cell" data-label="Property">jobOrder4</div>
<div class="cell" data-label="Column">jobOrder4_id</div>
<div class="cell" data-label="Arabic">أمر الشغل4</div>
<div class="cell" data-label="English">Job Order4</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [GlassJobOrder](/entities/supplychain-gjo/GlassJobOrder.md) 
</div>
</div>

<div class="row searchable" id="jobOrder5">
<div class="cell" data-label="Property">jobOrder5</div>
<div class="cell" data-label="Column">jobOrder5_id</div>
<div class="cell" data-label="Arabic">أمر الشغل5</div>
<div class="cell" data-label="English">Job Order5</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [GlassJobOrder](/entities/supplychain-gjo/GlassJobOrder.md) 
</div>
</div>

<div class="row searchable" id="jobOrder6">
<div class="cell" data-label="Property">jobOrder6</div>
<div class="cell" data-label="Column">jobOrder6_id</div>
<div class="cell" data-label="Arabic">أمر الشغل6</div>
<div class="cell" data-label="English">Job Order6</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [GlassJobOrder](/entities/supplychain-gjo/GlassJobOrder.md) 
</div>
</div>

<div class="row searchable" id="jobOrder7">
<div class="cell" data-label="Property">jobOrder7</div>
<div class="cell" data-label="Column">jobOrder7_id</div>
<div class="cell" data-label="Arabic">أمر الشغل7</div>
<div class="cell" data-label="English">Job Order7</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [GlassJobOrder](/entities/supplychain-gjo/GlassJobOrder.md) 
</div>
</div>

<div class="row searchable" id="jobOrder8">
<div class="cell" data-label="Property">jobOrder8</div>
<div class="cell" data-label="Column">jobOrder8_id</div>
<div class="cell" data-label="Arabic">أمر الشغل8</div>
<div class="cell" data-label="English">Job Order8</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [GlassJobOrder](/entities/supplychain-gjo/GlassJobOrder.md) 
</div>
</div>

<div class="row searchable" id="jobOrder9">
<div class="cell" data-label="Property">jobOrder9</div>
<div class="cell" data-label="Column">jobOrder9_id</div>
<div class="cell" data-label="Arabic">أمر الشغل9</div>
<div class="cell" data-label="English">Job Order9</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [GlassJobOrder](/entities/supplychain-gjo/GlassJobOrder.md) 
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

<div class="row searchable" id="netTimeInSeconds">
<div class="cell" data-label="Property">netTimeInSeconds</div>
<div class="cell" data-label="Column">netTimeInSeconds</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

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

<div class="row searchable" id="operation">
<div class="cell" data-label="Property">operation</div>
<div class="cell" data-label="Column">operation_id</div>
<div class="cell" data-label="Arabic">عملية</div>
<div class="cell" data-label="English">Operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [GlassOperationMap](/entities/supplychain-gjo/GlassOperationMap.md) 
</div>
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

<div class="row searchable" id="responsible">
<div class="cell" data-label="Property">responsible</div>
<div class="cell" data-label="Column">responsible_id</div>
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

<div class="row searchable" id="startTime">
<div class="cell" data-label="Property">startTime</div>
<div class="cell" data-label="Column">startTime</div>
<div class="cell" data-label="Arabic">من</div>
<div class="cell" data-label="English">Start Time</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="stockIssue">
<div class="cell" data-label="Property">stockIssue</div>
<div class="cell" data-label="Column">stockIssue_id</div>
<div class="cell" data-label="Arabic"> صرف مخزني</div>
<div class="cell" data-label="English"> Stock Issue</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [StockIssue](/entities/supplychain-inventory/StockIssue.md) 
</div>
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

<div class="row searchable" id="text1">
<div class="cell" data-label="Property">text1</div>
<div class="cell" data-label="Column">text1</div>
<div class="cell" data-label="Arabic">نــــص 1</div>
<div class="cell" data-label="English">Text 1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="text2">
<div class="cell" data-label="Property">text2</div>
<div class="cell" data-label="Column">text2</div>
<div class="cell" data-label="Arabic">نـــــص 2</div>
<div class="cell" data-label="English">Text 2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="text3">
<div class="cell" data-label="Property">text3</div>
<div class="cell" data-label="Column">text3</div>
<div class="cell" data-label="Arabic">نص 3</div>
<div class="cell" data-label="English">text3</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="text4">
<div class="cell" data-label="Property">text4</div>
<div class="cell" data-label="Column">text4</div>
<div class="cell" data-label="Arabic">نص 4</div>
<div class="cell" data-label="English">text4</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="text5">
<div class="cell" data-label="Property">text5</div>
<div class="cell" data-label="Column">text5</div>
<div class="cell" data-label="Arabic">نص 5</div>
<div class="cell" data-label="English">text5</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="toDate">
<div class="cell" data-label="Property">toDate</div>
<div class="cell" data-label="Column">toDate</div>
<div class="cell" data-label="Arabic">إلى تاريخ</div>
<div class="cell" data-label="English">To Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="toImportance">
<div class="cell" data-label="Property">toImportance</div>
<div class="cell" data-label="Column">toImportance</div>
<div class="cell" data-label="Arabic">إلي أهميه</div>
<div class="cell" data-label="English">To Importance</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="toItem">
<div class="cell" data-label="Property">toItem</div>
<div class="cell" data-label="Column">toItem_id</div>
<div class="cell" data-label="Arabic">إلي صنف</div>
<div class="cell" data-label="English">To Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/entities/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="toJobOrder">
<div class="cell" data-label="Property">toJobOrder</div>
<div class="cell" data-label="Column">toJobOrder_id</div>
<div class="cell" data-label="Arabic">إلى أمر شغل</div>
<div class="cell" data-label="English">To Job Order</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [GlassJobOrder](/entities/supplychain-gjo/GlassJobOrder.md) 
</div>
</div>

<div class="row searchable" id="toJobOrderBook">
<div class="cell" data-label="Property">toJobOrderBook</div>
<div class="cell" data-label="Column">toJobOrderBook_id</div>
<div class="cell" data-label="Arabic">إلى دفتر أمر شغل</div>
<div class="cell" data-label="English">To Job Order Book</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DocumentBook](/entities/basic/DocumentBook.md) 
</div>
</div>

<div class="row searchable" id="toWarehouse">
<div class="cell" data-label="Property">toWarehouse</div>
<div class="cell" data-label="Column">toWarehouse_id</div>
<div class="cell" data-label="Arabic">إلى مخزن</div>
<div class="cell" data-label="English">to Warehouse</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/entities/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="totalCost">
<div class="cell" data-label="Property">totalCost</div>
<div class="cell" data-label="Column">totalCost</div>
<div class="cell" data-label="Arabic">اجمالى التكلفة</div>
<div class="cell" data-label="English">Total Cost</div>
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


</div>

<div id='batchInfo' title='batchInfo' class='searchable'>

## batchInfo (معلومات الشحنة - Batch Information)
**Table Name:** OrderExecutionBatchInfo, **Join Column:** orderExecution_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="batchInfo.attachment">
<div class="cell" data-label="Property">batchInfo.attachment</div>
<div class="cell" data-label="Column">attachment_id</div>
<div class="cell" data-label="Arabic">مرفق</div>
<div class="cell" data-label="English">Attachment</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/entities/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="batchInfo.boxNumber">
<div class="cell" data-label="Property">batchInfo.boxNumber</div>
<div class="cell" data-label="Column">boxNumber</div>
<div class="cell" data-label="Arabic">رقم الصندوق</div>
<div class="cell" data-label="English">Box Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="batchInfo.description1">
<div class="cell" data-label="Property">batchInfo.description1</div>
<div class="cell" data-label="Column">description1</div>
<div class="cell" data-label="Arabic">الوصف 1</div>
<div class="cell" data-label="English">description1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="batchInfo.description10">
<div class="cell" data-label="Property">batchInfo.description10</div>
<div class="cell" data-label="Column">description10</div>
<div class="cell" data-label="Arabic">الوصف 10</div>
<div class="cell" data-label="English">description 10</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="batchInfo.description2">
<div class="cell" data-label="Property">batchInfo.description2</div>
<div class="cell" data-label="Column">description2</div>
<div class="cell" data-label="Arabic">الوصف 2</div>
<div class="cell" data-label="English">description2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="batchInfo.description3">
<div class="cell" data-label="Property">batchInfo.description3</div>
<div class="cell" data-label="Column">description3</div>
<div class="cell" data-label="Arabic">الوصف 3</div>
<div class="cell" data-label="English">description3</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="batchInfo.description4">
<div class="cell" data-label="Property">batchInfo.description4</div>
<div class="cell" data-label="Column">description4</div>
<div class="cell" data-label="Arabic">الوصف 4</div>
<div class="cell" data-label="English">description4</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="batchInfo.description5">
<div class="cell" data-label="Property">batchInfo.description5</div>
<div class="cell" data-label="Column">description5</div>
<div class="cell" data-label="Arabic">الوصف 5</div>
<div class="cell" data-label="English">description5</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="batchInfo.description6">
<div class="cell" data-label="Property">batchInfo.description6</div>
<div class="cell" data-label="Column">description6</div>
<div class="cell" data-label="Arabic">الوصف 6</div>
<div class="cell" data-label="English">description 6</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="batchInfo.description7">
<div class="cell" data-label="Property">batchInfo.description7</div>
<div class="cell" data-label="Column">description7</div>
<div class="cell" data-label="Arabic">الوصف 7</div>
<div class="cell" data-label="English">description 7</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="batchInfo.description8">
<div class="cell" data-label="Property">batchInfo.description8</div>
<div class="cell" data-label="Column">description8</div>
<div class="cell" data-label="Arabic">الوصف 8</div>
<div class="cell" data-label="English">description 8</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="batchInfo.description9">
<div class="cell" data-label="Property">batchInfo.description9</div>
<div class="cell" data-label="Column">description9</div>
<div class="cell" data-label="Arabic">الوصف 9</div>
<div class="cell" data-label="English">description 9</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="batchInfo.id">
<div class="cell" data-label="Property">batchInfo.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="batchInfo.length">
<div class="cell" data-label="Property">batchInfo.length</div>
<div class="cell" data-label="Column">length</div>
<div class="cell" data-label="Arabic">الأبعاد | الطول</div>
<div class="cell" data-label="English">Measures | Length</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="batchInfo.lineNumber">
<div class="cell" data-label="Property">batchInfo.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="batchInfo.numberOfPanels">
<div class="cell" data-label="Property">batchInfo.numberOfPanels</div>
<div class="cell" data-label="Column">numberOfPanels</div>
<div class="cell" data-label="Arabic">عدد الألواح</div>
<div class="cell" data-label="English">Number Of Panels</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="batchInfo.remarks">
<div class="cell" data-label="Property">batchInfo.remarks</div>
<div class="cell" data-label="Column">remarks</div>
<div class="cell" data-label="Arabic">ملاحظات</div>
<div class="cell" data-label="English">Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="batchInfo.width">
<div class="cell" data-label="Property">batchInfo.width</div>
<div class="cell" data-label="Column">width</div>
<div class="cell" data-label="Arabic">الأبعاد | العرض</div>
<div class="cell" data-label="English">Measures | Width</div>
<div class="cell" data-label="Type">Decimal</div>

</div>


</div>

<div id='details' title='details' class='searchable'>

## details (التفاصيل - Details)
**Table Name:** OrderExecutionLine, **Join Column:** orderExecution_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="details.currency">
<div class="cell" data-label="Property">details.currency</div>
<div class="cell" data-label="Column">currency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/entities/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="details.customer">
<div class="cell" data-label="Property">details.customer</div>
<div class="cell" data-label="Column">customer_id</div>
<div class="cell" data-label="Arabic">العميل</div>
<div class="cell" data-label="English">Customer</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Customer](/entities/basic/Customer.md) 
</div>
</div>

<div class="row searchable" id="details.description1">
<div class="cell" data-label="Property">details.description1</div>
<div class="cell" data-label="Column">description1</div>
<div class="cell" data-label="Arabic">الوصف 1</div>
<div class="cell" data-label="English">description1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.description2">
<div class="cell" data-label="Property">details.description2</div>
<div class="cell" data-label="Column">description2</div>
<div class="cell" data-label="Arabic">الوصف 2</div>
<div class="cell" data-label="English">description2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.duration.uom">
<div class="cell" data-label="Property">details.duration.uom</div>
<div class="cell" data-label="Column">durationUom</div>
<div class="cell" data-label="Arabic">الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="details.duration.value">
<div class="cell" data-label="Property">details.duration.value</div>
<div class="cell" data-label="Column">durationValue</div>
<div class="cell" data-label="Arabic">القيمة</div>
<div class="cell" data-label="English">Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.endTime">
<div class="cell" data-label="Property">details.endTime</div>
<div class="cell" data-label="Column">endTime</div>
<div class="cell" data-label="Arabic">وقت الحضور - الي ساعة</div>
<div class="cell" data-label="English"> End Time</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="details.executedServices">
<div class="cell" data-label="Property">details.executedServices</div>
<div class="cell" data-label="Column">executedServices</div>
<div class="cell" data-label="Arabic">التشغيلات المنفذة</div>
<div class="cell" data-label="English">ExecutedServices</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="details.executionCost">
<div class="cell" data-label="Property">details.executionCost</div>
<div class="cell" data-label="Column">executionCost</div>
<div class="cell" data-label="Arabic">تكلفة تنفيذ التشغيلة</div>
<div class="cell" data-label="English">Execution Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.freeItem">
<div class="cell" data-label="Property">details.freeItem</div>
<div class="cell" data-label="Column">freeItem</div>
<div class="cell" data-label="Arabic">الصنف المجانى</div>
<div class="cell" data-label="English">Free Item</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.fromPieceNumber">
<div class="cell" data-label="Property">details.fromPieceNumber</div>
<div class="cell" data-label="Column">fromPieceNumber</div>
<div class="cell" data-label="Arabic">من رقم قطعة</div>
<div class="cell" data-label="English">From Piece Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="details.id">
<div class="cell" data-label="Property">details.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="details.item">
<div class="cell" data-label="Property">details.item</div>
<div class="cell" data-label="Column">item_id</div>
<div class="cell" data-label="Arabic">الصنف</div>
<div class="cell" data-label="English">Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/entities/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="details.itemCost">
<div class="cell" data-label="Property">details.itemCost</div>
<div class="cell" data-label="Column">itemCost</div>
<div class="cell" data-label="Arabic">تكلفة الصنف</div>
<div class="cell" data-label="English">Item Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.itemNumber">
<div class="cell" data-label="Property">details.itemNumber</div>
<div class="cell" data-label="Column">itemNumber</div>
<div class="cell" data-label="Arabic">رقم</div>
<div class="cell" data-label="English">Number</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="details.lineId">
<div class="cell" data-label="Property">details.lineId</div>
<div class="cell" data-label="Column">lineId</div>
<div class="cell" data-label="Arabic">م</div>
<div class="cell" data-label="English">S</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="details.lineNumber">
<div class="cell" data-label="Property">details.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="details.lineQtyPercent">
<div class="cell" data-label="Property">details.lineQtyPercent</div>
<div class="cell" data-label="Column">lineQtyPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.materialCost">
<div class="cell" data-label="Property">details.materialCost</div>
<div class="cell" data-label="Column">materialCost</div>
<div class="cell" data-label="Arabic">تكلفة مواد التصنيع</div>
<div class="cell" data-label="English">Material Cost</div>
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

<div class="row searchable" id="details.netTimeInSeconds">
<div class="cell" data-label="Property">details.netTimeInSeconds</div>
<div class="cell" data-label="Column">netTimeInSeconds</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="details.operation">
<div class="cell" data-label="Property">details.operation</div>
<div class="cell" data-label="Column">operation_id</div>
<div class="cell" data-label="Arabic">عملية</div>
<div class="cell" data-label="English">Operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [GlassOperationMap](/entities/supplychain-gjo/GlassOperationMap.md) 
</div>
</div>

<div class="row searchable" id="details.order">
<div class="cell" data-label="Property">details.order</div>
<div class="cell" data-label="Column">order_id</div>
<div class="cell" data-label="Arabic">أمر الشغل</div>
<div class="cell" data-label="English">Job Order</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [GlassJobOrder](/entities/supplychain-gjo/GlassJobOrder.md) 
</div>
</div>

<div class="row searchable" id="details.pieceNumber">
<div class="cell" data-label="Property">details.pieceNumber</div>
<div class="cell" data-label="Column">pieceNumber</div>
<div class="cell" data-label="Arabic">رقم القطعة</div>
<div class="cell" data-label="English">Piece Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="details.quantity.baseQty.uom">
<div class="cell" data-label="Property">details.quantity.baseQty.uom</div>
<div class="cell" data-label="Column">baseUom_id</div>
<div class="cell" data-label="Arabic">الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/entities/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="details.quantity.baseQty.value">
<div class="cell" data-label="Property">details.quantity.baseQty.value</div>
<div class="cell" data-label="Column">baseValue</div>
<div class="cell" data-label="Arabic">الكمية</div>
<div class="cell" data-label="English">Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.quantity.itemAssortment">
<div class="cell" data-label="Property">details.quantity.itemAssortment</div>
<div class="cell" data-label="Column">itemAssortment_id</div>
<div class="cell" data-label="Arabic">التشكيلة</div>
<div class="cell" data-label="English">The Assortment</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemAssortment](/entities/supplychain/ItemAssortment.md) 
</div>
</div>

<div class="row searchable" id="details.quantity.measureQty">
<div class="cell" data-label="Property">details.quantity.measureQty</div>
<div class="cell" data-label="Column">measureQty</div>
<div class="cell" data-label="Arabic">الأبعاد | عدد</div>
<div class="cell" data-label="English">Measures | Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.quantity.measures.clippedLength1">
<div class="cell" data-label="Property">details.quantity.measures.clippedLength1</div>
<div class="cell" data-label="Column">clippedLength1</div>
<div class="cell" data-label="Arabic">أبعادالجزء المقصوص 1 | الطول</div>
<div class="cell" data-label="English">Clipped Part1 Measures | Length</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.quantity.measures.height">
<div class="cell" data-label="Property">details.quantity.measures.height</div>
<div class="cell" data-label="Column">height</div>
<div class="cell" data-label="Arabic">الأبعاد | ر</div>
<div class="cell" data-label="English">Measures | H</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.quantity.measures.length">
<div class="cell" data-label="Property">details.quantity.measures.length</div>
<div class="cell" data-label="Column">length</div>
<div class="cell" data-label="Arabic">الأبعاد | ط</div>
<div class="cell" data-label="English">Measures | L</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.quantity.measures.text">
<div class="cell" data-label="Property">details.quantity.measures.text</div>
<div class="cell" data-label="Column">text</div>
<div class="cell" data-label="Arabic">الأبعاد | الأبعاد</div>
<div class="cell" data-label="English">Measures | L * W * H</div>
<div class="cell" data-label="Type">Measures</div>

</div>

<div class="row searchable" id="details.quantity.measures.width">
<div class="cell" data-label="Property">details.quantity.measures.width</div>
<div class="cell" data-label="Column">width</div>
<div class="cell" data-label="Arabic">الأبعاد | ع</div>
<div class="cell" data-label="English">Measures | W</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.quantity.quantity.primeQty.uom">
<div class="cell" data-label="Property">details.quantity.quantity.primeQty.uom</div>
<div class="cell" data-label="Column">pUom_id</div>
<div class="cell" data-label="Arabic">كمية الصنف | وحدة</div>
<div class="cell" data-label="English">Item Quantity | UOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/entities/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="details.quantity.quantity.primeQty.value">
<div class="cell" data-label="Property">details.quantity.quantity.primeQty.value</div>
<div class="cell" data-label="Column">pValue</div>
<div class="cell" data-label="Arabic">كمية الصنف | قيمة</div>
<div class="cell" data-label="English">Item Quantity | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.quantity.quantity.secondQty.uom">
<div class="cell" data-label="Property">details.quantity.quantity.secondQty.uom</div>
<div class="cell" data-label="Column">sUom_id</div>
<div class="cell" data-label="Arabic">الوحدة الثانية | الوحدة</div>
<div class="cell" data-label="English">Secondary | UOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/entities/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="details.quantity.quantity.secondQty.value">
<div class="cell" data-label="Property">details.quantity.quantity.secondQty.value</div>
<div class="cell" data-label="Column">sValue</div>
<div class="cell" data-label="Arabic">الوحدة الثانية | الكمية</div>
<div class="cell" data-label="English">Secondary | Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.quantity.uomRate">
<div class="cell" data-label="Property">details.quantity.uomRate</div>
<div class="cell" data-label="Column">uomRate</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.remarks1">
<div class="cell" data-label="Property">details.remarks1</div>
<div class="cell" data-label="Column">remarks1</div>
<div class="cell" data-label="Arabic">ملاحظات 1</div>
<div class="cell" data-label="English">Remarks 1</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="details.remarks2">
<div class="cell" data-label="Property">details.remarks2</div>
<div class="cell" data-label="Column">remarks2</div>
<div class="cell" data-label="Arabic">ملاحظات 2</div>
<div class="cell" data-label="English">Remarks 2</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="details.resource">
<div class="cell" data-label="Property">details.resource</div>
<div class="cell" data-label="Column">resource_id</div>
<div class="cell" data-label="Arabic"> مورد تشغيل</div>
<div class="cell" data-label="English"> Resource</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Resource](/entities/supplychain/Resource.md) 
</div>
</div>

<div class="row searchable" id="details.serviceItem">
<div class="cell" data-label="Property">details.serviceItem</div>
<div class="cell" data-label="Column">serviceItem_id</div>
<div class="cell" data-label="Arabic">صنف الخدمة</div>
<div class="cell" data-label="English">Service Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/entities/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="details.serviceItemBOM">
<div class="cell" data-label="Property">details.serviceItemBOM</div>
<div class="cell" data-label="Column">serviceItemBOM_id</div>
<div class="cell" data-label="Arabic"> تفاصيل التشغيل</div>
<div class="cell" data-label="English"> Service Item BOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ServiceItemBOM](/entities/supplychain-gjo/ServiceItemBOM.md) 
</div>
</div>

<div class="row searchable" id="details.serviceQty.baseQty.uom">
<div class="cell" data-label="Property">details.serviceQty.baseQty.uom</div>
<div class="cell" data-label="Column">serviceQtyBaseUom_id</div>
<div class="cell" data-label="Arabic">الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/entities/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="details.serviceQty.baseQty.value">
<div class="cell" data-label="Property">details.serviceQty.baseQty.value</div>
<div class="cell" data-label="Column">serviceQtyBaseValue</div>
<div class="cell" data-label="Arabic">الكمية</div>
<div class="cell" data-label="English">Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.serviceQty.itemAssortment">
<div class="cell" data-label="Property">details.serviceQty.itemAssortment</div>
<div class="cell" data-label="Column">serviceQtyItemAssortment_id</div>
<div class="cell" data-label="Arabic">التشكيلة</div>
<div class="cell" data-label="English">The Assortment</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemAssortment](/entities/supplychain/ItemAssortment.md) 
</div>
</div>

<div class="row searchable" id="details.serviceQty.measureQty">
<div class="cell" data-label="Property">details.serviceQty.measureQty</div>
<div class="cell" data-label="Column">serviceQtyMeasureQty</div>
<div class="cell" data-label="Arabic">الأبعاد | عدد</div>
<div class="cell" data-label="English">Measures | Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.serviceQty.measures.clippedLength1">
<div class="cell" data-label="Property">details.serviceQty.measures.clippedLength1</div>
<div class="cell" data-label="Column">serviceQtyClippedLength1</div>
<div class="cell" data-label="Arabic">أبعادالجزء المقصوص 1 | الطول</div>
<div class="cell" data-label="English">Clipped Part1 Measures | Length</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.serviceQty.measures.height">
<div class="cell" data-label="Property">details.serviceQty.measures.height</div>
<div class="cell" data-label="Column">serviceQtyHeight</div>
<div class="cell" data-label="Arabic">الأبعاد | ر</div>
<div class="cell" data-label="English">Measures | H</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.serviceQty.measures.length">
<div class="cell" data-label="Property">details.serviceQty.measures.length</div>
<div class="cell" data-label="Column">serviceQtyLength</div>
<div class="cell" data-label="Arabic">الأبعاد | ط</div>
<div class="cell" data-label="English">Measures | L</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.serviceQty.measures.text">
<div class="cell" data-label="Property">details.serviceQty.measures.text</div>
<div class="cell" data-label="Column">serviceQtyText</div>
<div class="cell" data-label="Arabic">الأبعاد | الأبعاد</div>
<div class="cell" data-label="English">Measures | L * W * H</div>
<div class="cell" data-label="Type">Measures</div>

</div>

<div class="row searchable" id="details.serviceQty.measures.width">
<div class="cell" data-label="Property">details.serviceQty.measures.width</div>
<div class="cell" data-label="Column">serviceQtyWidth</div>
<div class="cell" data-label="Arabic">الأبعاد | ع</div>
<div class="cell" data-label="English">Measures | W</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.serviceQty.quantity.primeQty.uom">
<div class="cell" data-label="Property">details.serviceQty.quantity.primeQty.uom</div>
<div class="cell" data-label="Column">serviceQtyPUom_id</div>
<div class="cell" data-label="Arabic">الوحدة الرئيسية للتشغيلة | الوحدة</div>
<div class="cell" data-label="English">Primary UOM Service | UOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/entities/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="details.serviceQty.quantity.primeQty.value">
<div class="cell" data-label="Property">details.serviceQty.quantity.primeQty.value</div>
<div class="cell" data-label="Column">serviceQtyPValue</div>
<div class="cell" data-label="Arabic">الوحدة الرئيسية للتشغيلة | الكمية</div>
<div class="cell" data-label="English">Primary UOM Service | Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.serviceQty.quantity.secondQty.uom">
<div class="cell" data-label="Property">details.serviceQty.quantity.secondQty.uom</div>
<div class="cell" data-label="Column">serviceQtySUom_id</div>
<div class="cell" data-label="Arabic">الوحدة الثانية | الوحدة</div>
<div class="cell" data-label="English">Secondary | UOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/entities/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="details.serviceQty.quantity.secondQty.value">
<div class="cell" data-label="Property">details.serviceQty.quantity.secondQty.value</div>
<div class="cell" data-label="Column">serviceQtySValue</div>
<div class="cell" data-label="Arabic">الوحدة الثانية | الكمية</div>
<div class="cell" data-label="English">Secondary | Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.serviceQty.uomRate">
<div class="cell" data-label="Property">details.serviceQty.uomRate</div>
<div class="cell" data-label="Column">serviceQtyUomRate</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.startTime">
<div class="cell" data-label="Property">details.startTime</div>
<div class="cell" data-label="Column">startTime</div>
<div class="cell" data-label="Arabic">وقت الحضور - من ساعة</div>
<div class="cell" data-label="English"> Start Time</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="details.sysorderLineId">
<div class="cell" data-label="Property">details.sysorderLineId</div>
<div class="cell" data-label="Column">sysorderLineId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="details.toPieceNumber">
<div class="cell" data-label="Property">details.toPieceNumber</div>
<div class="cell" data-label="Column">toPieceNumber</div>
<div class="cell" data-label="Arabic">إلى رقم قطعة</div>
<div class="cell" data-label="English">To Piece Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="details.totalCost">
<div class="cell" data-label="Property">details.totalCost</div>
<div class="cell" data-label="Column">totalCost</div>
<div class="cell" data-label="Arabic">اجمالى التكلفة</div>
<div class="cell" data-label="English">Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>


</div>

<div id='orderMaterialLines' title='orderMaterialLines' class='searchable'>

## orderMaterialLines ( - )
**Table Name:** OrderExecutionMaterial, **Join Column:** orderExecution_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="orderMaterialLines.basicItem">
<div class="cell" data-label="Property">orderMaterialLines.basicItem</div>
<div class="cell" data-label="Column">basicItem</div>
<div class="cell" data-label="Arabic">الصنف الاساسي</div>
<div class="cell" data-label="English">Basic Item</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="orderMaterialLines.id">
<div class="cell" data-label="Property">orderMaterialLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="orderMaterialLines.item">
<div class="cell" data-label="Property">orderMaterialLines.item</div>
<div class="cell" data-label="Column">item_id</div>
<div class="cell" data-label="Arabic">الصنف</div>
<div class="cell" data-label="English">Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/entities/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="orderMaterialLines.itemNumber">
<div class="cell" data-label="Property">orderMaterialLines.itemNumber</div>
<div class="cell" data-label="Column">itemNumber</div>
<div class="cell" data-label="Arabic">رقم</div>
<div class="cell" data-label="English">Number</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="orderMaterialLines.lineNumber">
<div class="cell" data-label="Property">orderMaterialLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="orderMaterialLines.materialCost">
<div class="cell" data-label="Property">orderMaterialLines.materialCost</div>
<div class="cell" data-label="Column">materialCost</div>
<div class="cell" data-label="Arabic">تكلفة مواد التصنيع</div>
<div class="cell" data-label="English">Material Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="orderMaterialLines.ownerDocument">
<div class="cell" data-label="Property">orderMaterialLines.ownerDocument</div>
<div class="cell" data-label="Column">ownerDocument</div>
<div class="cell" data-label="Arabic">المستند</div>
<div class="cell" data-label="English">Document</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="orderMaterialLines.quantity.baseQty.uom">
<div class="cell" data-label="Property">orderMaterialLines.quantity.baseQty.uom</div>
<div class="cell" data-label="Column">quantityBaseUom_id</div>
<div class="cell" data-label="Arabic">الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/entities/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="orderMaterialLines.quantity.baseQty.value">
<div class="cell" data-label="Property">orderMaterialLines.quantity.baseQty.value</div>
<div class="cell" data-label="Column">quantityBaseValue</div>
<div class="cell" data-label="Arabic">الكمية</div>
<div class="cell" data-label="English">Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="orderMaterialLines.quantity.itemAssortment">
<div class="cell" data-label="Property">orderMaterialLines.quantity.itemAssortment</div>
<div class="cell" data-label="Column">quantityItemAssortment_id</div>
<div class="cell" data-label="Arabic">التشكيلة</div>
<div class="cell" data-label="English">The Assortment</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemAssortment](/entities/supplychain/ItemAssortment.md) 
</div>
</div>

<div class="row searchable" id="orderMaterialLines.quantity.measureQty">
<div class="cell" data-label="Property">orderMaterialLines.quantity.measureQty</div>
<div class="cell" data-label="Column">quantityMeasureQty</div>
<div class="cell" data-label="Arabic">الأبعاد | عدد</div>
<div class="cell" data-label="English">Measures | Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="orderMaterialLines.quantity.measures.clippedLength1">
<div class="cell" data-label="Property">orderMaterialLines.quantity.measures.clippedLength1</div>
<div class="cell" data-label="Column">quantityClippedLength1</div>
<div class="cell" data-label="Arabic">أبعادالجزء المقصوص 1 | الطول</div>
<div class="cell" data-label="English">Clipped Part1 Measures | Length</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="orderMaterialLines.quantity.measures.height">
<div class="cell" data-label="Property">orderMaterialLines.quantity.measures.height</div>
<div class="cell" data-label="Column">quantityHeight</div>
<div class="cell" data-label="Arabic">الأبعاد | ر</div>
<div class="cell" data-label="English">Measures | H</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="orderMaterialLines.quantity.measures.length">
<div class="cell" data-label="Property">orderMaterialLines.quantity.measures.length</div>
<div class="cell" data-label="Column">quantityLength</div>
<div class="cell" data-label="Arabic">الأبعاد | ط</div>
<div class="cell" data-label="English">Measures | L</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="orderMaterialLines.quantity.measures.text">
<div class="cell" data-label="Property">orderMaterialLines.quantity.measures.text</div>
<div class="cell" data-label="Column">quantityText</div>
<div class="cell" data-label="Arabic">الأبعاد | الأبعاد</div>
<div class="cell" data-label="English">Measures | L * W * H</div>
<div class="cell" data-label="Type">Measures</div>

</div>

<div class="row searchable" id="orderMaterialLines.quantity.measures.width">
<div class="cell" data-label="Property">orderMaterialLines.quantity.measures.width</div>
<div class="cell" data-label="Column">quantityWidth</div>
<div class="cell" data-label="Arabic">الأبعاد | ع</div>
<div class="cell" data-label="English">Measures | W</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="orderMaterialLines.quantity.quantity.primeQty.uom">
<div class="cell" data-label="Property">orderMaterialLines.quantity.quantity.primeQty.uom</div>
<div class="cell" data-label="Column">quantityPUom_id</div>
<div class="cell" data-label="Arabic">الوحدة الرئيسية | الوحدة</div>
<div class="cell" data-label="English">Primary | UOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/entities/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="orderMaterialLines.quantity.quantity.primeQty.value">
<div class="cell" data-label="Property">orderMaterialLines.quantity.quantity.primeQty.value</div>
<div class="cell" data-label="Column">quantityPValue</div>
<div class="cell" data-label="Arabic">الوحدة الرئيسية | الكمية</div>
<div class="cell" data-label="English">Primary | Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="orderMaterialLines.quantity.quantity.secondQty.uom">
<div class="cell" data-label="Property">orderMaterialLines.quantity.quantity.secondQty.uom</div>
<div class="cell" data-label="Column">quantitySUom_id</div>
<div class="cell" data-label="Arabic">الوحدة الثانية | الوحدة</div>
<div class="cell" data-label="English">Secondary | UOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/entities/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="orderMaterialLines.quantity.quantity.secondQty.value">
<div class="cell" data-label="Property">orderMaterialLines.quantity.quantity.secondQty.value</div>
<div class="cell" data-label="Column">quantitySValue</div>
<div class="cell" data-label="Arabic">الوحدة الثانية | الكمية</div>
<div class="cell" data-label="English">Secondary | Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="orderMaterialLines.quantity.uomRate">
<div class="cell" data-label="Property">orderMaterialLines.quantity.uomRate</div>
<div class="cell" data-label="Column">quantityUomRate</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="orderMaterialLines.reprocessNumber">
<div class="cell" data-label="Property">orderMaterialLines.reprocessNumber</div>
<div class="cell" data-label="Column">reprocessNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="orderMaterialLines.serviceItem">
<div class="cell" data-label="Property">orderMaterialLines.serviceItem</div>
<div class="cell" data-label="Column">serviceItem_id</div>
<div class="cell" data-label="Arabic">صنف الخدمة</div>
<div class="cell" data-label="English">Service Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/entities/supplychain/InvItem.md) 
</div>
</div>


</div>

<div id='resLines' title='resLines' class='searchable'>

## resLines ( - )
**Table Name:** OrderExecutionResLine, **Join Column:** orderExecution_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="resLines.duration.uom">
<div class="cell" data-label="Property">resLines.duration.uom</div>
<div class="cell" data-label="Column">durationUom</div>
<div class="cell" data-label="Arabic">الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="resLines.duration.value">
<div class="cell" data-label="Property">resLines.duration.value</div>
<div class="cell" data-label="Column">durationValue</div>
<div class="cell" data-label="Arabic">القيمة</div>
<div class="cell" data-label="English">Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="resLines.endTime">
<div class="cell" data-label="Property">resLines.endTime</div>
<div class="cell" data-label="Column">endTime</div>
<div class="cell" data-label="Arabic">إلى</div>
<div class="cell" data-label="English">End Time</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="resLines.id">
<div class="cell" data-label="Property">resLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="resLines.lineNumber">
<div class="cell" data-label="Property">resLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="resLines.netTimeInSeconds">
<div class="cell" data-label="Property">resLines.netTimeInSeconds</div>
<div class="cell" data-label="Column">netTimeInSeconds</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="resLines.resource">
<div class="cell" data-label="Property">resLines.resource</div>
<div class="cell" data-label="Column">resource_id</div>
<div class="cell" data-label="Arabic"> مورد تشغيل</div>
<div class="cell" data-label="English"> Resource</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Resource](/entities/supplychain/Resource.md) 
</div>
</div>

<div class="row searchable" id="resLines.startTime">
<div class="cell" data-label="Property">resLines.startTime</div>
<div class="cell" data-label="Column">startTime</div>
<div class="cell" data-label="Arabic">من</div>
<div class="cell" data-label="English">Start Time</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="resLines.totalCost">
<div class="cell" data-label="Property">resLines.totalCost</div>
<div class="cell" data-label="Column">totalCost</div>
<div class="cell" data-label="Arabic">اجمالى التكلفة</div>
<div class="cell" data-label="English">Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>


</div>

