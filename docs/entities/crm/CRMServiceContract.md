# CRMServiceContract
**Arabic:** عقد خدمة -  عقد خدمة
**English:** CRM Service Contract -  CRM Service Contract

<ContentFilter/>


<div class='searchable'>
<a href='#additionLines'>additionLines (CRMAdditionsLine) </a> , <a href='#details'>details (ServiceContractLine) </a> , <a href='#externalPaymentLines'>externalPaymentLines (CRMServiceExPaymentLine) </a> , <a href='#freezingLines'>freezingLines (CRMFreezingLine) </a> , <a href='#lines'>lines (fixingContractLine) </a>
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
</div><div class="row searchable" id="agentServiceContrShare">
<div class="cell" data-label="Property">agentServiceContrShare</div>
<div class="cell" data-label="Column">agentServiceContrShare</div>
<div class="cell" data-label="Arabic">نصيب الوكيل</div>
<div class="cell" data-label="English">Agent Service Contract Share</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="agentServiceContract">
<div class="cell" data-label="Property">agentServiceContract</div>
<div class="cell" data-label="Column">agentServiceContract_id</div>
<div class="cell" data-label="Arabic">الوكيل</div>
<div class="cell" data-label="English">Agent</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CRMAgent](/entities/crm/CRMAgent.md) 
</div>
</div>

<div class="row searchable" id="allowEditingHdrTaxInDetails">
<div class="cell" data-label="Property">allowEditingHdrTaxInDetails</div>
<div class="cell" data-label="Column">allowEditingHdrTaxInDetails</div>
<div class="cell" data-label="Arabic">السماح بتعديل ضريبة الفاتورة في السطر</div>
<div class="cell" data-label="English">Allow Editing Header Tax In Details</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="amount.amount">
<div class="cell" data-label="Property">amount.amount</div>
<div class="cell" data-label="Column">amountAmount</div>
<div class="cell" data-label="Arabic"> المبلغ</div>
<div class="cell" data-label="English"> Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="amount.currency">
<div class="cell" data-label="Property">amount.currency</div>
<div class="cell" data-label="Column">amountCurrency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/entities/basic/Currency.md) 
</div>
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

<div class="row searchable" id="b1">
<div class="cell" data-label="Property">b1</div>
<div class="cell" data-label="Column">b1</div>
<div class="cell" data-label="Arabic">Boolean 1</div>
<div class="cell" data-label="English">Boolean 1</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="b2">
<div class="cell" data-label="Property">b2</div>
<div class="cell" data-label="Column">b2</div>
<div class="cell" data-label="Arabic">Boolean 2</div>
<div class="cell" data-label="English">Boolean 2</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="b3">
<div class="cell" data-label="Property">b3</div>
<div class="cell" data-label="Column">b3</div>
<div class="cell" data-label="Arabic">Boolean 3</div>
<div class="cell" data-label="English">Boolean 3</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="b4">
<div class="cell" data-label="Property">b4</div>
<div class="cell" data-label="Column">b4</div>
<div class="cell" data-label="Arabic">Boolean 4</div>
<div class="cell" data-label="English">Boolean 4</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="b5">
<div class="cell" data-label="Property">b5</div>
<div class="cell" data-label="Column">b5</div>
<div class="cell" data-label="Arabic">Boolean 5</div>
<div class="cell" data-label="English">Boolean 5</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="contractStatus">
<div class="cell" data-label="Property">contractStatus</div>
<div class="cell" data-label="Column">contractStatus</div>
<div class="cell" data-label="Arabic">حالة العقد</div>
<div class="cell" data-label="English">Service Contract Status</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="contractType">
<div class="cell" data-label="Property">contractType</div>
<div class="cell" data-label="Column">contractType</div>
<div class="cell" data-label="Arabic">نوع بند العقد</div>
<div class="cell" data-label="English">Service Contract Type</div>
<div class="cell" data-label="Type">Enum</div>

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
<div class="cell" data-label="Arabic">تصنيف العقد</div>
<div class="cell" data-label="English">Document category</div>
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

<div class="row searchable" id="fixingContCurrency">
<div class="cell" data-label="Property">fixingContCurrency</div>
<div class="cell" data-label="Column">fixingContCurrency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/entities/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="fixingContrAgentShare">
<div class="cell" data-label="Property">fixingContrAgentShare</div>
<div class="cell" data-label="Column">fixingContrAgentShare</div>
<div class="cell" data-label="Arabic">نصيب الوكيل</div>
<div class="cell" data-label="English">Agent share</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="fixingContrAmount">
<div class="cell" data-label="Property">fixingContrAmount</div>
<div class="cell" data-label="Column">fixingContrAmount</div>
<div class="cell" data-label="Arabic">المبلغ</div>
<div class="cell" data-label="English">Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="fixingContrCategory">
<div class="cell" data-label="Property">fixingContrCategory</div>
<div class="cell" data-label="Column">fixingContrCategory_id</div>
<div class="cell" data-label="Arabic">تصنيف المستند</div>
<div class="cell" data-label="English">Contr Category</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DocCategory](/entities/basic/DocCategory.md) 
</div>
</div>

<div class="row searchable" id="fixingContrCenter">
<div class="cell" data-label="Property">fixingContrCenter</div>
<div class="cell" data-label="Column">fixingContrCenter</div>
<div class="cell" data-label="Arabic">نصيب المركز الرئيسي</div>
<div class="cell" data-label="English">fixing Contract Center</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="fixingContrEndIn">
<div class="cell" data-label="Property">fixingContrEndIn</div>
<div class="cell" data-label="Column">fixingContrEndIn</div>
<div class="cell" data-label="Arabic">ينتهي في</div>
<div class="cell" data-label="English">End in</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="fixingContrStartIn">
<div class="cell" data-label="Property">fixingContrStartIn</div>
<div class="cell" data-label="Column">fixingContrStartIn</div>
<div class="cell" data-label="Arabic">يبدا في</div>
<div class="cell" data-label="English">Start in</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="fixingContragent">
<div class="cell" data-label="Property">fixingContragent</div>
<div class="cell" data-label="Column">fixingContragent_id</div>
<div class="cell" data-label="Arabic">وكيل الصيانة</div>
<div class="cell" data-label="English">Maintenance Agent</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CRMAgent](/entities/crm/CRMAgent.md) 
</div>
</div>

<div class="row searchable" id="fixingContrcustomer">
<div class="cell" data-label="Property">fixingContrcustomer</div>
<div class="cell" data-label="Column">fixingContrcustomer_id</div>
<div class="cell" data-label="Arabic">عميل الصيانة</div>
<div class="cell" data-label="English">Maintenance Customer</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Customer](/entities/basic/Customer.md) 
</div>
</div>

<div class="row searchable" id="fixingContrmediator">
<div class="cell" data-label="Property">fixingContrmediator</div>
<div class="cell" data-label="Column">fixingContrmediator_id</div>
<div class="cell" data-label="Arabic">وسيط الصيانة</div>
<div class="cell" data-label="English">Maintenance Mediator</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CRMMediator](/entities/crm/CRMMediator.md) 
</div>
</div>

<div class="row searchable" id="fixingContrmediatorShare">
<div class="cell" data-label="Property">fixingContrmediatorShare</div>
<div class="cell" data-label="Column">fixingContrmediatorShare</div>
<div class="cell" data-label="Arabic">نصيب الوسيط</div>
<div class="cell" data-label="English">Mediator share</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="fixingContrperiod.uom">
<div class="cell" data-label="Property">fixingContrperiod.uom</div>
<div class="cell" data-label="Column">fixingContrperiodUom</div>
<div class="cell" data-label="Arabic">الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="fixingContrperiod.value">
<div class="cell" data-label="Property">fixingContrperiod.value</div>
<div class="cell" data-label="Column">fixingContrperiodValue</div>
<div class="cell" data-label="Arabic">القيمة</div>
<div class="cell" data-label="English">Value</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="mainCenterServiceContrShare">
<div class="cell" data-label="Property">mainCenterServiceContrShare</div>
<div class="cell" data-label="Column">mainCenterServiceContrShare</div>
<div class="cell" data-label="Arabic">نصيب المركز الرئيسي</div>
<div class="cell" data-label="English">main center service contrShare</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="manualRef1">
<div class="cell" data-label="Property">manualRef1</div>
<div class="cell" data-label="Column">manualRef1</div>
<div class="cell" data-label="Arabic">رقم المستند اليدوي</div>
<div class="cell" data-label="English">Manual Ref1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="mediatorFixingContr">
<div class="cell" data-label="Property">mediatorFixingContr</div>
<div class="cell" data-label="Column">mediatorFixingContr_id</div>
<div class="cell" data-label="Arabic">الوسيط</div>
<div class="cell" data-label="English">mediator of Fixing Contract</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CRMMediator](/entities/crm/CRMMediator.md) 
</div>
</div>

<div class="row searchable" id="mediatorServiceContShare">
<div class="cell" data-label="Property">mediatorServiceContShare</div>
<div class="cell" data-label="Column">mediatorServiceContShare</div>
<div class="cell" data-label="Arabic">نصيب الوسيط</div>
<div class="cell" data-label="English">mediator Service Contract  Share</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="mediatorServiceContract">
<div class="cell" data-label="Property">mediatorServiceContract</div>
<div class="cell" data-label="Column">mediatorServiceContract_id</div>
<div class="cell" data-label="Arabic">الوسيط</div>
<div class="cell" data-label="English">Mediator</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CRMMediator](/entities/crm/CRMMediator.md) 
</div>
</div>

<div class="row searchable" id="modifiableTax">
<div class="cell" data-label="Property">modifiableTax</div>
<div class="cell" data-label="Column">modifiableTax</div>
<div class="cell" data-label="Arabic">يمكن تعديل الضريبة</div>
<div class="cell" data-label="English">Modifiable Tax</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="money.afterDiscount1">
<div class="cell" data-label="Property">money.afterDiscount1</div>
<div class="cell" data-label="Column">afterDiscount1</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 1</div>
<div class="cell" data-label="English">Net after Discount 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.afterDiscount2">
<div class="cell" data-label="Property">money.afterDiscount2</div>
<div class="cell" data-label="Column">afterDiscount2</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 2</div>
<div class="cell" data-label="English">Net after Discount 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.afterDiscount3">
<div class="cell" data-label="Property">money.afterDiscount3</div>
<div class="cell" data-label="Column">afterDiscount3</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 3</div>
<div class="cell" data-label="English">Net after Discount 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.afterDiscount4">
<div class="cell" data-label="Property">money.afterDiscount4</div>
<div class="cell" data-label="Column">afterDiscount4</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 4</div>
<div class="cell" data-label="English">Net after Discount 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.afterDiscount5">
<div class="cell" data-label="Property">money.afterDiscount5</div>
<div class="cell" data-label="Column">afterDiscount5</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 5</div>
<div class="cell" data-label="English">Net after Discount 5</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.afterDiscount6">
<div class="cell" data-label="Property">money.afterDiscount6</div>
<div class="cell" data-label="Column">afterDiscount6</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 6</div>
<div class="cell" data-label="English">Net after Discount 6</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.afterDiscount7">
<div class="cell" data-label="Property">money.afterDiscount7</div>
<div class="cell" data-label="Column">afterDiscount7</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 7</div>
<div class="cell" data-label="English">Net after Discount 7</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.afterDiscount8">
<div class="cell" data-label="Property">money.afterDiscount8</div>
<div class="cell" data-label="Column">afterDiscount8</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 8</div>
<div class="cell" data-label="English">Net after Discount 8</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.afterHTaxValue">
<div class="cell" data-label="Property">money.afterHTaxValue</div>
<div class="cell" data-label="Column">afterHTaxValue</div>
<div class="cell" data-label="Arabic">بعد ضريبة الفاتورة</div>
<div class="cell" data-label="English">After Tax Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.afterTaxValue">
<div class="cell" data-label="Property">money.afterTaxValue</div>
<div class="cell" data-label="Column">afterTaxValue</div>
<div class="cell" data-label="Arabic">القيمة بعد الضريبة</div>
<div class="cell" data-label="English">After Tax Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.cashAmount">
<div class="cell" data-label="Property">money.cashAmount</div>
<div class="cell" data-label="Column">cashAmount</div>
<div class="cell" data-label="Arabic">المدفوع نقدا</div>
<div class="cell" data-label="English">Paid</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.currency">
<div class="cell" data-label="Property">money.currency</div>
<div class="cell" data-label="Column">currency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/entities/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="money.currencyRate">
<div class="cell" data-label="Property">money.currencyRate</div>
<div class="cell" data-label="Column">currencyRate</div>
<div class="cell" data-label="Arabic">المعدل</div>
<div class="cell" data-label="English">Currency Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.discount1Total">
<div class="cell" data-label="Property">money.discount1Total</div>
<div class="cell" data-label="Column">discount1Total</div>
<div class="cell" data-label="Arabic">إجمالي الخصم</div>
<div class="cell" data-label="English">Discount Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.discount2Total">
<div class="cell" data-label="Property">money.discount2Total</div>
<div class="cell" data-label="Column">discount2Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 2</div>
<div class="cell" data-label="English">Discount 1 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.discount3Total">
<div class="cell" data-label="Property">money.discount3Total</div>
<div class="cell" data-label="Column">discount3Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 3</div>
<div class="cell" data-label="English">Discount 2 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.discount4Total">
<div class="cell" data-label="Property">money.discount4Total</div>
<div class="cell" data-label="Column">discount4Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 4</div>
<div class="cell" data-label="English">Discount 3 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.discount5Total">
<div class="cell" data-label="Property">money.discount5Total</div>
<div class="cell" data-label="Column">discount5Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 5</div>
<div class="cell" data-label="English">Discount 4 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.discount6Total">
<div class="cell" data-label="Property">money.discount6Total</div>
<div class="cell" data-label="Column">discount6Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 6</div>
<div class="cell" data-label="English">Discount 5 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.discount7Total">
<div class="cell" data-label="Property">money.discount7Total</div>
<div class="cell" data-label="Column">discount7Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 7</div>
<div class="cell" data-label="English">Discount 6 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.discount8Total">
<div class="cell" data-label="Property">money.discount8Total</div>
<div class="cell" data-label="Column">discount8Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 8</div>
<div class="cell" data-label="English">Discount 7 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.headerDiscount.afterValue">
<div class="cell" data-label="Property">money.headerDiscount.afterValue</div>
<div class="cell" data-label="Column">hdrDiscountAfterValue</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.headerDiscount.maxNormalPercent">
<div class="cell" data-label="Property">money.headerDiscount.maxNormalPercent</div>
<div class="cell" data-label="Column">hdrDiscountMaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.headerDiscount.percentage">
<div class="cell" data-label="Property">money.headerDiscount.percentage</div>
<div class="cell" data-label="Column">hdrDiscountPercentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.headerDiscount.value">
<div class="cell" data-label="Property">money.headerDiscount.value</div>
<div class="cell" data-label="Column">hdrDiscountValue</div>
<div class="cell" data-label="Arabic">القيمة</div>
<div class="cell" data-label="English">Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.localCurrency">
<div class="cell" data-label="Property">money.localCurrency</div>
<div class="cell" data-label="Column">localCurrency_id</div>
<div class="cell" data-label="Arabic"> العملة</div>
<div class="cell" data-label="English">Local Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/entities/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="money.netValue">
<div class="cell" data-label="Property">money.netValue</div>
<div class="cell" data-label="Column">netValue</div>
<div class="cell" data-label="Arabic">الصافي</div>
<div class="cell" data-label="English">Net value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.paidCash">
<div class="cell" data-label="Property">money.paidCash</div>
<div class="cell" data-label="Column">paidCash</div>
<div class="cell" data-label="Arabic">النقدية المدفوعة</div>
<div class="cell" data-label="English">Paid Cash</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.remaining">
<div class="cell" data-label="Property">money.remaining</div>
<div class="cell" data-label="Column">remaining</div>
<div class="cell" data-label="Arabic">المتبقي</div>
<div class="cell" data-label="English">Remaining</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.remainingCash">
<div class="cell" data-label="Property">money.remainingCash</div>
<div class="cell" data-label="Column">remainingCash</div>
<div class="cell" data-label="Arabic">النقديه المتبقيه</div>
<div class="cell" data-label="English">Remaining Cash</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.service1Fees">
<div class="cell" data-label="Property">money.service1Fees</div>
<div class="cell" data-label="Column">service1Fees</div>
<div class="cell" data-label="Arabic">مصاريف خدمة 1</div>
<div class="cell" data-label="English">Service Fees 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.service2Fees">
<div class="cell" data-label="Property">money.service2Fees</div>
<div class="cell" data-label="Column">service2Fees</div>
<div class="cell" data-label="Arabic">مصاريف خدمة 2</div>
<div class="cell" data-label="English">Service Fees 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.service3Fees">
<div class="cell" data-label="Property">money.service3Fees</div>
<div class="cell" data-label="Column">service3Fees</div>
<div class="cell" data-label="Arabic">مصاريف خدمة 3</div>
<div class="cell" data-label="English">Service Fees 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.service4Fees">
<div class="cell" data-label="Property">money.service4Fees</div>
<div class="cell" data-label="Column">service4Fees</div>
<div class="cell" data-label="Arabic">مصاريف خدمة 4</div>
<div class="cell" data-label="English">Service Fees 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.tax1Total">
<div class="cell" data-label="Property">money.tax1Total</div>
<div class="cell" data-label="Column">tax1Total</div>
<div class="cell" data-label="Arabic">إجمالي ضريبة مبيعات 1</div>
<div class="cell" data-label="English">Tax 1 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.tax2Total">
<div class="cell" data-label="Property">money.tax2Total</div>
<div class="cell" data-label="Column">tax2Total</div>
<div class="cell" data-label="Arabic">إجمالي ضريبة مبيعات 2</div>
<div class="cell" data-label="English">Tax 2 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.tax3Per">
<div class="cell" data-label="Property">money.tax3Per</div>
<div class="cell" data-label="Column">tax3Per</div>
<div class="cell" data-label="Arabic">ضريبة 3 %</div>
<div class="cell" data-label="English">Invoice Tax 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.tax3Total">
<div class="cell" data-label="Property">money.tax3Total</div>
<div class="cell" data-label="Column">tax3Total</div>
<div class="cell" data-label="Arabic">إجمالي ضريبة 3</div>
<div class="cell" data-label="English">Tax 3 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.tax4Per">
<div class="cell" data-label="Property">money.tax4Per</div>
<div class="cell" data-label="Column">tax4Per</div>
<div class="cell" data-label="Arabic">ضريبة الفاتورة 4 %</div>
<div class="cell" data-label="English">Invoice Tax 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.tax4Total">
<div class="cell" data-label="Property">money.tax4Total</div>
<div class="cell" data-label="Column">tax4Total</div>
<div class="cell" data-label="Arabic">إجمالي ضريبة 4</div>
<div class="cell" data-label="English">Tax 4 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.total">
<div class="cell" data-label="Property">money.total</div>
<div class="cell" data-label="Column">total</div>
<div class="cell" data-label="Arabic">الإجمالي</div>
<div class="cell" data-label="English">Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.totalPaid">
<div class="cell" data-label="Property">money.totalPaid</div>
<div class="cell" data-label="Column">totalPaid</div>
<div class="cell" data-label="Arabic">إجمالي المدفوع</div>
<div class="cell" data-label="English">Total paid</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.totalPaymentMethods">
<div class="cell" data-label="Property">money.totalPaymentMethods</div>
<div class="cell" data-label="Column">totalPaymentMethods</div>
<div class="cell" data-label="Arabic">إجمالى طرق الدفع الآخرى</div>
<div class="cell" data-label="English">Other Payments Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="money.vouchersPayments">
<div class="cell" data-label="Property">money.vouchersPayments</div>
<div class="cell" data-label="Column">vouchersPayments</div>
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

<div class="row searchable" id="period.uom">
<div class="cell" data-label="Property">period.uom</div>
<div class="cell" data-label="Column">periodUom</div>
<div class="cell" data-label="Arabic">المدة | الوحدة</div>
<div class="cell" data-label="English">Duration | UOM</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="period.value">
<div class="cell" data-label="Property">period.value</div>
<div class="cell" data-label="Column">periodValue</div>
<div class="cell" data-label="Arabic">المدة | القيمة</div>
<div class="cell" data-label="English">Duration | Value</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="ref10">
<div class="cell" data-label="Property">ref10</div>
<div class="cell gen-ref-column" data-label="Column">ref10ActualCode,  ref10Code,  ref10EntityType,  ref10Id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
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

<div class="row searchable" id="ref6">
<div class="cell" data-label="Property">ref6</div>
<div class="cell gen-ref-column" data-label="Column">ref6ActualCode,  ref6Code,  ref6EntityType,  ref6Id</div>
<div class="cell" data-label="Arabic">مرجع 6</div>
<div class="cell" data-label="English">Reference 6</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="ref7">
<div class="cell" data-label="Property">ref7</div>
<div class="cell gen-ref-column" data-label="Column">ref7ActualCode,  ref7Code,  ref7EntityType,  ref7Id</div>
<div class="cell" data-label="Arabic">مرجع 7</div>
<div class="cell" data-label="English">Reference 7</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="ref8">
<div class="cell" data-label="Property">ref8</div>
<div class="cell gen-ref-column" data-label="Column">ref8ActualCode,  ref8Code,  ref8EntityType,  ref8Id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="ref9">
<div class="cell" data-label="Property">ref9</div>
<div class="cell gen-ref-column" data-label="Column">ref9ActualCode,  ref9Code,  ref9EntityType,  ref9Id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
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

<div class="row searchable" id="startIn">
<div class="cell" data-label="Property">startIn</div>
<div class="cell" data-label="Column">startIn</div>
<div class="cell" data-label="Arabic">يبدأ في</div>
<div class="cell" data-label="English">Start In</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="taxAuthoritySysFields.submissionUUID">
<div class="cell" data-label="Property">taxAuthoritySysFields.submissionUUID</div>
<div class="cell" data-label="Column">submissionUUID</div>
<div class="cell" data-label="Arabic">معرف مرحلة الارسال</div>
<div class="cell" data-label="English">Submission ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxAuthoritySysFields.taxAuthEntityStatusType">
<div class="cell" data-label="Property">taxAuthoritySysFields.taxAuthEntityStatusType</div>
<div class="cell" data-label="Column">taxAuthEntityStatusType</div>
<div class="cell" data-label="Arabic">حالة المستند بالنسبة لمصلحة الضرائب</div>
<div class="cell" data-label="English">Tax Authority Document Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="taxAuthoritySysFields.taxAuthUUID">
<div class="cell" data-label="Property">taxAuthoritySysFields.taxAuthUUID</div>
<div class="cell" data-label="Column">taxAuthUUID</div>
<div class="cell" data-label="Arabic">معرف المستند داخل مصلحة الضرائب</div>
<div class="cell" data-label="English">Tax Authority Document View ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxAuthoritySysFields.temporaryId">
<div class="cell" data-label="Property">taxAuthoritySysFields.temporaryId</div>
<div class="cell" data-label="Column">temporaryId</div>
<div class="cell" data-label="Arabic">معرف لمطالعة المستند بدون تسجيل دخول</div>
<div class="cell" data-label="English">Tax Authority Not Registered Person Document View ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxable">
<div class="cell" data-label="Property">taxable</div>
<div class="cell" data-label="Column">taxable</div>
<div class="cell" data-label="Arabic">خاضع للضريبة</div>
<div class="cell" data-label="English">Taxable</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="termsAndConditions">
<div class="cell" data-label="Property">termsAndConditions</div>
<div class="cell" data-label="Column">termsAndConditions</div>
<div class="cell" data-label="Arabic">البنود و الشروط</div>
<div class="cell" data-label="English">Terms And Conditions</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="termsAndConditions2">
<div class="cell" data-label="Property">termsAndConditions2</div>
<div class="cell" data-label="Column">termsAndConditions2</div>
<div class="cell" data-label="Arabic">البنود والشروط</div>
<div class="cell" data-label="English">Terms and conditions</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="theMediator">
<div class="cell" data-label="Property">theMediator</div>
<div class="cell" data-label="Column">theMediator_id</div>
<div class="cell" data-label="Arabic">الوسيط</div>
<div class="cell" data-label="English">the Mediator</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CRMMediator](/entities/crm/CRMMediator.md) 
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

<div class="row searchable" id="updatedContract">
<div class="cell" data-label="Property">updatedContract</div>
<div class="cell" data-label="Column">updatedContract_id</div>
<div class="cell" data-label="Arabic">العقد المعدل</div>
<div class="cell" data-label="English">updated contract</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CRMServiceContract](/entities/crm/CRMServiceContract.md) 
</div>
</div>

<div class="row searchable" id="updaterContract">
<div class="cell" data-label="Property">updaterContract</div>
<div class="cell" data-label="Column">updaterContract_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CRMServiceContract](/entities/crm/CRMServiceContract.md) 
</div>
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

<div id='additionLines' title='additionLines' class='searchable'>

## additionLines ( - )
**Table Name:** CRMAdditionsLine, **Join Column:** cRMServiceContract_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="additionLines.additionAmount">
<div class="cell" data-label="Property">additionLines.additionAmount</div>
<div class="cell" data-label="Column">additionAmount</div>
<div class="cell" data-label="Arabic">المبلغ الاضافي</div>
<div class="cell" data-label="English">Addition amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="additionLines.agentShare">
<div class="cell" data-label="Property">additionLines.agentShare</div>
<div class="cell" data-label="Column">agentShare</div>
<div class="cell" data-label="Arabic">نصيب الوكيل</div>
<div class="cell" data-label="English">Agent share</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="additionLines.amount.amount">
<div class="cell" data-label="Property">additionLines.amount.amount</div>
<div class="cell" data-label="Column">amountAmount</div>
<div class="cell" data-label="Arabic"> المبلغ</div>
<div class="cell" data-label="English"> Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="additionLines.amount.currency">
<div class="cell" data-label="Property">additionLines.amount.currency</div>
<div class="cell" data-label="Column">amountCurrency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/entities/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="additionLines.attachment1">
<div class="cell" data-label="Property">additionLines.attachment1</div>
<div class="cell" data-label="Column">attachment1_id</div>
<div class="cell" data-label="Arabic">مرفق 1</div>
<div class="cell" data-label="English">Attachment 1</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/entities/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="additionLines.branchNetValue">
<div class="cell" data-label="Property">additionLines.branchNetValue</div>
<div class="cell" data-label="Column">branchNetValue</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="additionLines.endIn">
<div class="cell" data-label="Property">additionLines.endIn</div>
<div class="cell" data-label="Column">endIn</div>
<div class="cell" data-label="Arabic">ينتهى</div>
<div class="cell" data-label="English">End In</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="additionLines.id">
<div class="cell" data-label="Property">additionLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="additionLines.lineNumber">
<div class="cell" data-label="Property">additionLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="additionLines.mediatorShare">
<div class="cell" data-label="Property">additionLines.mediatorShare</div>
<div class="cell" data-label="Column">mediatorShare</div>
<div class="cell" data-label="Arabic">نصيب الوسيط</div>
<div class="cell" data-label="English">mediator Share</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="additionLines.product">
<div class="cell" data-label="Property">additionLines.product</div>
<div class="cell gen-ref-column" data-label="Column">productActualCode,  productCode,  productEntityType,  productId</div>
<div class="cell" data-label="Arabic">المنتج</div>
<div class="cell" data-label="English">Product</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="additionLines.startIn">
<div class="cell" data-label="Property">additionLines.startIn</div>
<div class="cell" data-label="Column">startIn</div>
<div class="cell" data-label="Arabic">يبدأ في</div>
<div class="cell" data-label="English">Start In</div>
<div class="cell" data-label="Type">Date</div>

</div>


</div>

<div id='details' title='details' class='searchable'>

## details (التفاصيل - Details)
**Table Name:** ServiceContractLine, **Join Column:** cRMServiceContract_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="details.actualEndTime">
<div class="cell" data-label="Property">details.actualEndTime</div>
<div class="cell" data-label="Column">actualEndTime</div>
<div class="cell" data-label="Arabic"> إلى</div>
<div class="cell" data-label="English"> To</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.attachment1">
<div class="cell" data-label="Property">details.attachment1</div>
<div class="cell" data-label="Column">attachment1_id</div>
<div class="cell" data-label="Arabic">مرفق 1</div>
<div class="cell" data-label="English">Attachment 1</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/entities/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="details.attachment2">
<div class="cell" data-label="Property">details.attachment2</div>
<div class="cell" data-label="Column">attachment2_id</div>
<div class="cell" data-label="Arabic">مرفق 2</div>
<div class="cell" data-label="English">Attachment 2</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/entities/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="details.commitedBefore">
<div class="cell" data-label="Property">details.commitedBefore</div>
<div class="cell" data-label="Column">commitedBefore</div>
<div class="cell" data-label="Arabic">تم الحفظ مسبقا</div>
<div class="cell" data-label="English">Commited Before</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.contractId">
<div class="cell" data-label="Property">details.contractId</div>
<div class="cell" data-label="Column">contractId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="details.creationDate">
<div class="cell" data-label="Property">details.creationDate</div>
<div class="cell" data-label="Column">creationDate</div>
<div class="cell" data-label="Arabic">تاريخ الإنشاء</div>
<div class="cell" data-label="English">Creation Date</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="details.date1">
<div class="cell" data-label="Property">details.date1</div>
<div class="cell" data-label="Column">date1</div>
<div class="cell" data-label="Arabic">تـــاريخ 1</div>
<div class="cell" data-label="English">Date 1</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.date2">
<div class="cell" data-label="Property">details.date2</div>
<div class="cell" data-label="Column">date2</div>
<div class="cell" data-label="Arabic">تـــاريخ 2</div>
<div class="cell" data-label="English">Date 2</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.date3">
<div class="cell" data-label="Property">details.date3</div>
<div class="cell" data-label="Column">date3</div>
<div class="cell" data-label="Arabic">تاريخ 3</div>
<div class="cell" data-label="English">Date3</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.date4">
<div class="cell" data-label="Property">details.date4</div>
<div class="cell" data-label="Column">date4</div>
<div class="cell" data-label="Arabic">تاريخ 4</div>
<div class="cell" data-label="English">Date4</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.date5">
<div class="cell" data-label="Property">details.date5</div>
<div class="cell" data-label="Column">date5</div>
<div class="cell" data-label="Arabic">تاريخ 5</div>
<div class="cell" data-label="English">Date5</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.dateTime1">
<div class="cell" data-label="Property">details.dateTime1</div>
<div class="cell" data-label="Column">dateTime1</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="details.dateTime2">
<div class="cell" data-label="Property">details.dateTime2</div>
<div class="cell" data-label="Column">dateTime2</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="details.dateTime3">
<div class="cell" data-label="Property">details.dateTime3</div>
<div class="cell" data-label="Column">dateTime3</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="details.dateTime4">
<div class="cell" data-label="Property">details.dateTime4</div>
<div class="cell" data-label="Column">dateTime4</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="details.dateTime5">
<div class="cell" data-label="Property">details.dateTime5</div>
<div class="cell" data-label="Column">dateTime5</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="details.discount">
<div class="cell" data-label="Property">details.discount</div>
<div class="cell" data-label="Column">discount</div>
<div class="cell" data-label="Arabic">التخفيض</div>
<div class="cell" data-label="English">Discount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.endIn">
<div class="cell" data-label="Property">details.endIn</div>
<div class="cell" data-label="Column">endIn</div>
<div class="cell" data-label="Arabic">ينتهى</div>
<div class="cell" data-label="English">End In</div>
<div class="cell" data-label="Type">Date</div>

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

<div class="row searchable" id="details.period.uom">
<div class="cell" data-label="Property">details.period.uom</div>
<div class="cell" data-label="Column">periodUom</div>
<div class="cell" data-label="Arabic">المدة | الوحدة</div>
<div class="cell" data-label="English">Duration | UOM</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="details.period.value">
<div class="cell" data-label="Property">details.period.value</div>
<div class="cell" data-label="Column">periodValue</div>
<div class="cell" data-label="Arabic">المدة | القيمة</div>
<div class="cell" data-label="English">Duration | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.custom">
<div class="cell" data-label="Property">details.price.custom</div>
<div class="cell" data-label="Column">custom</div>
<div class="cell" data-label="Arabic">مخصص</div>
<div class="cell" data-label="English">Custom</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount1.afterValue">
<div class="cell" data-label="Property">details.price.discount1.afterValue</div>
<div class="cell" data-label="Column">dis1AfterValue</div>
<div class="cell" data-label="Arabic">خصم 1 | صافي</div>
<div class="cell" data-label="English">Discount 1 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount1.maxNormalPercent">
<div class="cell" data-label="Property">details.price.discount1.maxNormalPercent</div>
<div class="cell" data-label="Column">dis1MaxNormalPercent</div>
<div class="cell" data-label="Arabic">خصم 1 | النسبة العادية</div>
<div class="cell" data-label="English">Discount 1 | Normal Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount1.percentage">
<div class="cell" data-label="Property">details.price.discount1.percentage</div>
<div class="cell" data-label="Column">dis1Percentage</div>
<div class="cell" data-label="Arabic">خصم 1 | %</div>
<div class="cell" data-label="English">Discount 1 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount1.value">
<div class="cell" data-label="Property">details.price.discount1.value</div>
<div class="cell" data-label="Column">dis1Value</div>
<div class="cell" data-label="Arabic">خصم 1 | قيمة</div>
<div class="cell" data-label="English">Discount 1 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount2.afterValue">
<div class="cell" data-label="Property">details.price.discount2.afterValue</div>
<div class="cell" data-label="Column">dis2AfterValue</div>
<div class="cell" data-label="Arabic">خصم 2 | صافي</div>
<div class="cell" data-label="English">Discount 2 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount2.maxNormalPercent">
<div class="cell" data-label="Property">details.price.discount2.maxNormalPercent</div>
<div class="cell" data-label="Column">dis2MaxNormalPercent</div>
<div class="cell" data-label="Arabic">خصم 2 | النسبة العادية</div>
<div class="cell" data-label="English">Discount 2 | Normal Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount2.percentage">
<div class="cell" data-label="Property">details.price.discount2.percentage</div>
<div class="cell" data-label="Column">dis2Percentage</div>
<div class="cell" data-label="Arabic">خصم 2 | %</div>
<div class="cell" data-label="English">Discount 2 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount2.value">
<div class="cell" data-label="Property">details.price.discount2.value</div>
<div class="cell" data-label="Column">dis2Value</div>
<div class="cell" data-label="Arabic">خصم 2 | قيمة</div>
<div class="cell" data-label="English">Discount 2 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount3.afterValue">
<div class="cell" data-label="Property">details.price.discount3.afterValue</div>
<div class="cell" data-label="Column">dis3AfterValue</div>
<div class="cell" data-label="Arabic">خصم 3 | صافي</div>
<div class="cell" data-label="English">Discount 3 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount3.maxNormalPercent">
<div class="cell" data-label="Property">details.price.discount3.maxNormalPercent</div>
<div class="cell" data-label="Column">dis3MaxNormalPercent</div>
<div class="cell" data-label="Arabic">خصم 3 | النسبة العادية</div>
<div class="cell" data-label="English">Discount 3 | Normal Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount3.percentage">
<div class="cell" data-label="Property">details.price.discount3.percentage</div>
<div class="cell" data-label="Column">dis3Percentage</div>
<div class="cell" data-label="Arabic">خصم 3 | %</div>
<div class="cell" data-label="English">Discount 3 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount3.value">
<div class="cell" data-label="Property">details.price.discount3.value</div>
<div class="cell" data-label="Column">dis3Value</div>
<div class="cell" data-label="Arabic">خصم 3 | قيمة</div>
<div class="cell" data-label="English">Discount 3 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount4.afterValue">
<div class="cell" data-label="Property">details.price.discount4.afterValue</div>
<div class="cell" data-label="Column">dis4AfterValue</div>
<div class="cell" data-label="Arabic">خصم 4 | صافي</div>
<div class="cell" data-label="English">Discount 4 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount4.maxNormalPercent">
<div class="cell" data-label="Property">details.price.discount4.maxNormalPercent</div>
<div class="cell" data-label="Column">dis4MaxNormalPercent</div>
<div class="cell" data-label="Arabic">خصم 4 | النسبة العادية</div>
<div class="cell" data-label="English">Discount 4 | Normal Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount4.percentage">
<div class="cell" data-label="Property">details.price.discount4.percentage</div>
<div class="cell" data-label="Column">dis4Percentage</div>
<div class="cell" data-label="Arabic">خصم 4 | %</div>
<div class="cell" data-label="English">Discount 4 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount4.value">
<div class="cell" data-label="Property">details.price.discount4.value</div>
<div class="cell" data-label="Column">dis4Value</div>
<div class="cell" data-label="Arabic">خصم 4 | قيمة</div>
<div class="cell" data-label="English">Discount 4 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount5.afterValue">
<div class="cell" data-label="Property">details.price.discount5.afterValue</div>
<div class="cell" data-label="Column">dis5AfterValue</div>
<div class="cell" data-label="Arabic">خصم 5 | صافي</div>
<div class="cell" data-label="English">Discount 5 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount5.maxNormalPercent">
<div class="cell" data-label="Property">details.price.discount5.maxNormalPercent</div>
<div class="cell" data-label="Column">dis5MaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount5.percentage">
<div class="cell" data-label="Property">details.price.discount5.percentage</div>
<div class="cell" data-label="Column">dis5Percentage</div>
<div class="cell" data-label="Arabic">خصم 5 | %</div>
<div class="cell" data-label="English">Discount 5 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount5.value">
<div class="cell" data-label="Property">details.price.discount5.value</div>
<div class="cell" data-label="Column">dis5Value</div>
<div class="cell" data-label="Arabic">خصم 5 | قيمة</div>
<div class="cell" data-label="English">Discount 5 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount6.afterValue">
<div class="cell" data-label="Property">details.price.discount6.afterValue</div>
<div class="cell" data-label="Column">dis6AfterValue</div>
<div class="cell" data-label="Arabic">خصم 6 | صافي</div>
<div class="cell" data-label="English">Discount 6 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount6.maxNormalPercent">
<div class="cell" data-label="Property">details.price.discount6.maxNormalPercent</div>
<div class="cell" data-label="Column">dis6MaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount6.percentage">
<div class="cell" data-label="Property">details.price.discount6.percentage</div>
<div class="cell" data-label="Column">dis6Percentage</div>
<div class="cell" data-label="Arabic">خصم 6 | %</div>
<div class="cell" data-label="English">Discount 6 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount6.value">
<div class="cell" data-label="Property">details.price.discount6.value</div>
<div class="cell" data-label="Column">dis6Value</div>
<div class="cell" data-label="Arabic">خصم 6 | قيمة</div>
<div class="cell" data-label="English">Discount 6 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount7.afterValue">
<div class="cell" data-label="Property">details.price.discount7.afterValue</div>
<div class="cell" data-label="Column">dis7AfterValue</div>
<div class="cell" data-label="Arabic">خصم 7 | صافي</div>
<div class="cell" data-label="English">Discount 7 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount7.maxNormalPercent">
<div class="cell" data-label="Property">details.price.discount7.maxNormalPercent</div>
<div class="cell" data-label="Column">dis7MaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount7.percentage">
<div class="cell" data-label="Property">details.price.discount7.percentage</div>
<div class="cell" data-label="Column">dis7Percentage</div>
<div class="cell" data-label="Arabic">خصم 7 | %</div>
<div class="cell" data-label="English">Discount 7 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount7.value">
<div class="cell" data-label="Property">details.price.discount7.value</div>
<div class="cell" data-label="Column">dis7Value</div>
<div class="cell" data-label="Arabic">خصم 7 | قيمة</div>
<div class="cell" data-label="English">Discount 7 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount8.afterValue">
<div class="cell" data-label="Property">details.price.discount8.afterValue</div>
<div class="cell" data-label="Column">dis8AfterValue</div>
<div class="cell" data-label="Arabic">خصم 8 | صافي</div>
<div class="cell" data-label="English">Discount 8 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount8.maxNormalPercent">
<div class="cell" data-label="Property">details.price.discount8.maxNormalPercent</div>
<div class="cell" data-label="Column">dis8MaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount8.percentage">
<div class="cell" data-label="Property">details.price.discount8.percentage</div>
<div class="cell" data-label="Column">dis8Percentage</div>
<div class="cell" data-label="Arabic">خصم 8 | %</div>
<div class="cell" data-label="English">Discount 8 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.discount8.value">
<div class="cell" data-label="Property">details.price.discount8.value</div>
<div class="cell" data-label="Column">dis8Value</div>
<div class="cell" data-label="Arabic">خصم 8 | قيمة</div>
<div class="cell" data-label="English">Discount 8 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.headerDicount.afterValue">
<div class="cell" data-label="Property">details.price.headerDicount.afterValue</div>
<div class="cell" data-label="Column">hdrAfterValue</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.headerDicount.maxNormalPercent">
<div class="cell" data-label="Property">details.price.headerDicount.maxNormalPercent</div>
<div class="cell" data-label="Column">hdrMaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.headerDicount.percentage">
<div class="cell" data-label="Property">details.price.headerDicount.percentage</div>
<div class="cell" data-label="Column">hdrPercentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.headerDicount.value">
<div class="cell" data-label="Property">details.price.headerDicount.value</div>
<div class="cell" data-label="Column">hdrValue</div>
<div class="cell" data-label="Arabic">القيمة</div>
<div class="cell" data-label="English">Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.netValue">
<div class="cell" data-label="Property">details.price.netValue</div>
<div class="cell" data-label="Column">netValue</div>
<div class="cell" data-label="Arabic">الصافي</div>
<div class="cell" data-label="English">Net value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.price">
<div class="cell" data-label="Property">details.price.price</div>
<div class="cell" data-label="Column">price</div>
<div class="cell" data-label="Arabic">الأسعار | السعر الكلي</div>
<div class="cell" data-label="English">Prices | total price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.tax1.afterValue">
<div class="cell" data-label="Property">details.price.tax1.afterValue</div>
<div class="cell" data-label="Column">tax1AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | الصافي</div>
<div class="cell" data-label="English">Tax | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.tax1.maxNormalPercent">
<div class="cell" data-label="Property">details.price.tax1.maxNormalPercent</div>
<div class="cell" data-label="Column">tax1MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | %</div>
<div class="cell" data-label="English">Item Tax | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.tax1.percentage">
<div class="cell" data-label="Property">details.price.tax1.percentage</div>
<div class="cell" data-label="Column">tax1Percentage</div>
<div class="cell" data-label="Arabic">قيمة إضافية 1</div>
<div class="cell" data-label="English">Tax 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.tax1.value">
<div class="cell" data-label="Property">details.price.tax1.value</div>
<div class="cell" data-label="Column">tax1Value</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | القيمة</div>
<div class="cell" data-label="English">Tax value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.tax2.afterValue">
<div class="cell" data-label="Property">details.price.tax2.afterValue</div>
<div class="cell" data-label="Column">tax2AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | الصافي</div>
<div class="cell" data-label="English">Tax 2 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.tax2.maxNormalPercent">
<div class="cell" data-label="Property">details.price.tax2.maxNormalPercent</div>
<div class="cell" data-label="Column">tax2MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | %</div>
<div class="cell" data-label="English">Tax 2 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.tax2.percentage">
<div class="cell" data-label="Property">details.price.tax2.percentage</div>
<div class="cell" data-label="Column">tax2Percentage</div>
<div class="cell" data-label="Arabic">قيمة إضافية 2</div>
<div class="cell" data-label="English">Tax 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.tax2.value">
<div class="cell" data-label="Property">details.price.tax2.value</div>
<div class="cell" data-label="Column">tax2Value</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | القيمة</div>
<div class="cell" data-label="English">Tax 2 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.tax3.afterValue">
<div class="cell" data-label="Property">details.price.tax3.afterValue</div>
<div class="cell" data-label="Column">tax3AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة 3 | الصافي</div>
<div class="cell" data-label="English">Tax 3 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.tax3.maxNormalPercent">
<div class="cell" data-label="Property">details.price.tax3.maxNormalPercent</div>
<div class="cell" data-label="Column">tax3MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة 3 | %</div>
<div class="cell" data-label="English">Tax 3 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.tax3.percentage">
<div class="cell" data-label="Property">details.price.tax3.percentage</div>
<div class="cell" data-label="Column">tax3Percentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.tax3.value">
<div class="cell" data-label="Property">details.price.tax3.value</div>
<div class="cell" data-label="Column">tax3Value</div>
<div class="cell" data-label="Arabic">ضريبة 3 | القيمة</div>
<div class="cell" data-label="English">Tax 3 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.tax4.afterValue">
<div class="cell" data-label="Property">details.price.tax4.afterValue</div>
<div class="cell" data-label="Column">tax4AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة 4 | الصافي</div>
<div class="cell" data-label="English">Tax 4 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.tax4.maxNormalPercent">
<div class="cell" data-label="Property">details.price.tax4.maxNormalPercent</div>
<div class="cell" data-label="Column">tax4MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة 4 | %</div>
<div class="cell" data-label="English">Tax 4 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.tax4.percentage">
<div class="cell" data-label="Property">details.price.tax4.percentage</div>
<div class="cell" data-label="Column">tax4Percentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.tax4.value">
<div class="cell" data-label="Property">details.price.tax4.value</div>
<div class="cell" data-label="Column">tax4Value</div>
<div class="cell" data-label="Arabic">ضريبة 4 | القيمة</div>
<div class="cell" data-label="English">Tax 4 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.totalCashShare">
<div class="cell" data-label="Property">details.price.totalCashShare</div>
<div class="cell" data-label="Column">totalCashShare</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.totalPaymentMethodShare">
<div class="cell" data-label="Property">details.price.totalPaymentMethodShare</div>
<div class="cell" data-label="Column">totalPaymentMethodShare</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.price.unitPrice">
<div class="cell" data-label="Property">details.price.unitPrice</div>
<div class="cell" data-label="Column">unitPrice</div>
<div class="cell" data-label="Arabic">سعر الوحدة</div>
<div class="cell" data-label="English">Prices | Unit price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.product">
<div class="cell" data-label="Property">details.product</div>
<div class="cell gen-ref-column" data-label="Column">productActualCode,  productCode,  productEntityType,  productId</div>
<div class="cell" data-label="Arabic">المنتج</div>
<div class="cell" data-label="English">Product</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.ref1">
<div class="cell" data-label="Property">details.ref1</div>
<div class="cell gen-ref-column" data-label="Column">ref1ActualCode,  ref1Code,  ref1EntityType,  ref1Id</div>
<div class="cell" data-label="Arabic">مرجع 1</div>
<div class="cell" data-label="English">Reference 1</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.ref2">
<div class="cell" data-label="Property">details.ref2</div>
<div class="cell gen-ref-column" data-label="Column">ref2ActualCode,  ref2Code,  ref2EntityType,  ref2Id</div>
<div class="cell" data-label="Arabic">مرجع 2</div>
<div class="cell" data-label="English">Reference 2</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.ref3">
<div class="cell" data-label="Property">details.ref3</div>
<div class="cell gen-ref-column" data-label="Column">ref3ActualCode,  ref3Code,  ref3EntityType,  ref3Id</div>
<div class="cell" data-label="Arabic">مرجع 3</div>
<div class="cell" data-label="English">Reference 3</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.ref4">
<div class="cell" data-label="Property">details.ref4</div>
<div class="cell gen-ref-column" data-label="Column">ref4ActualCode,  ref4Code,  ref4EntityType,  ref4Id</div>
<div class="cell" data-label="Arabic">مرجع 4</div>
<div class="cell" data-label="English">Reference 4</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.ref5">
<div class="cell" data-label="Property">details.ref5</div>
<div class="cell gen-ref-column" data-label="Column">ref5ActualCode,  ref5Code,  ref5EntityType,  ref5Id</div>
<div class="cell" data-label="Arabic">مرجع 5</div>
<div class="cell" data-label="English">Reference 5</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.remaining">
<div class="cell" data-label="Property">details.remaining</div>
<div class="cell" data-label="Column">remaining</div>
<div class="cell" data-label="Arabic">المتبقي</div>
<div class="cell" data-label="English">Remaining</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.serialNumber">
<div class="cell" data-label="Property">details.serialNumber</div>
<div class="cell" data-label="Column">serialNumber</div>
<div class="cell" data-label="Arabic">الرقم المسلسل</div>
<div class="cell" data-label="English">Serial Number</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="details.startIn">
<div class="cell" data-label="Property">details.startIn</div>
<div class="cell" data-label="Column">startIn</div>
<div class="cell" data-label="Arabic">يبدأ في</div>
<div class="cell" data-label="English">Start In</div>
<div class="cell" data-label="Type">Date</div>

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

<div class="row searchable" id="details.valueDate">
<div class="cell" data-label="Property">details.valueDate</div>
<div class="cell" data-label="Column">valueDate</div>
<div class="cell" data-label="Arabic">التاريخ الفعلي</div>
<div class="cell" data-label="English">Value Date</div>
<div class="cell" data-label="Type">Date</div>

</div>


</div>

<div id='externalPaymentLines' title='externalPaymentLines' class='searchable'>

## externalPaymentLines (السداد بسندات خارجية - External Payment Lines)
**Table Name:** CRMServiceExPaymentLine, **Join Column:** cRMServiceContract_id
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

<div id='freezingLines' title='freezingLines' class='searchable'>

## freezingLines ( - )
**Table Name:** CRMFreezingLine, **Join Column:** cRMServiceContract_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="freezingLines.endFreezingIn">
<div class="cell" data-label="Property">freezingLines.endFreezingIn</div>
<div class="cell" data-label="Column">endFreezingIn</div>
<div class="cell" data-label="Arabic">نهاية التجميد في</div>
<div class="cell" data-label="English">end freezing in</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="freezingLines.id">
<div class="cell" data-label="Property">freezingLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="freezingLines.lineNumber">
<div class="cell" data-label="Property">freezingLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="freezingLines.product">
<div class="cell" data-label="Property">freezingLines.product</div>
<div class="cell gen-ref-column" data-label="Column">productActualCode,  productCode,  productEntityType,  productId</div>
<div class="cell" data-label="Arabic">المنتج</div>
<div class="cell" data-label="English">Product</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="freezingLines.startFreezingIn">
<div class="cell" data-label="Property">freezingLines.startFreezingIn</div>
<div class="cell" data-label="Column">startFreezingIn</div>
<div class="cell" data-label="Arabic">بداية التجميد في</div>
<div class="cell" data-label="English">start freezing in</div>
<div class="cell" data-label="Type">Date</div>

</div>


</div>

<div id='lines' title='lines' class='searchable'>

## lines ( التفاصيل -  Details)
**Table Name:** fixingContractLine, **Join Column:** cRMServiceContract_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="lines.amount.amount">
<div class="cell" data-label="Property">lines.amount.amount</div>
<div class="cell" data-label="Column">amountAmount</div>
<div class="cell" data-label="Arabic"> المبلغ</div>
<div class="cell" data-label="English"> Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="lines.amount.currency">
<div class="cell" data-label="Property">lines.amount.currency</div>
<div class="cell" data-label="Column">amountCurrency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/entities/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="lines.attachment1">
<div class="cell" data-label="Property">lines.attachment1</div>
<div class="cell" data-label="Column">attachment1_id</div>
<div class="cell" data-label="Arabic">مرفق 1</div>
<div class="cell" data-label="English">Attachment 1</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/entities/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="lines.endIn">
<div class="cell" data-label="Property">lines.endIn</div>
<div class="cell" data-label="Column">endIn</div>
<div class="cell" data-label="Arabic">ينتهى</div>
<div class="cell" data-label="English">End In</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="lines.fixingContrctCenterValue">
<div class="cell" data-label="Property">lines.fixingContrctCenterValue</div>
<div class="cell" data-label="Column">fixingContrctCenterValue</div>
<div class="cell" data-label="Arabic">نصيب المركز الرئيسي</div>
<div class="cell" data-label="English">Fixing contract center Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="lines.fixingContrctPercentage">
<div class="cell" data-label="Property">lines.fixingContrctPercentage</div>
<div class="cell" data-label="Column">fixingContrctPercentage</div>
<div class="cell" data-label="Arabic">% نسبة عقد الصيانة</div>
<div class="cell" data-label="English">Fixing contract Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="lines.id">
<div class="cell" data-label="Property">lines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="lines.lineNumber">
<div class="cell" data-label="Property">lines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="lines.startIn">
<div class="cell" data-label="Property">lines.startIn</div>
<div class="cell" data-label="Column">startIn</div>
<div class="cell" data-label="Arabic">يبدأ في</div>
<div class="cell" data-label="English">Start In</div>
<div class="cell" data-label="Type">Date</div>

</div>


</div>

