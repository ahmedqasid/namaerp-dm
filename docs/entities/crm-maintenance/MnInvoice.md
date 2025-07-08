# MnInvoice
**Arabic:** فاتورة صيانة - فواتير الصيانة
**English:** Maintenance Invoice - Maintenance Invoices

<ContentFilter/>


<div class='searchable'>
<a href='#dysfunctions'>dysfunctions (MnInvoiceDysfunction) </a> , <a href='#externalPaymentLines'>externalPaymentLines (MnInvoiceExternalPaymentLine) </a> , <a href='#machines'>machines (MnInvoiceMachine) </a> , <a href='#maintenanceGroups'>maintenanceGroups (MnInvoiceGroup) </a> , <a href='#orders'>orders (MnInvoiceOrders) </a> , <a href='#paymentLines'>paymentLines (MnInvoicePaymentLine) </a> , <a href='#returnedSpareParts'>returnedSpareParts (MnInvoiceRetSparePart) </a> , <a href='#scheduleLines'>scheduleLines (MnInvoiceSchedulePaymentLine) </a> , <a href='#services'>services (MnInvoiceSerivce) </a> , <a href='#spareParts'>spareParts (MnInvoiceSparePart) </a> , <a href='#technicians'>technicians (MnInvoiceTechnician) </a> , <a href='#tools'>tools (MnInvoiceTool) </a>
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
</div><div class="row searchable" id="allowEditingHdrTaxInDetails">
<div class="cell" data-label="Property">allowEditingHdrTaxInDetails</div>
<div class="cell" data-label="Column">allowEditingHdrTaxInDetails</div>
<div class="cell" data-label="Arabic">السماح بتعديل ضريبة الفاتورة في السطر</div>
<div class="cell" data-label="English">Allow Editing Header Tax In Details</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="attachment1">
<div class="cell" data-label="Property">attachment1</div>
<div class="cell" data-label="Column">attachment1_id</div>
<div class="cell" data-label="Arabic">مرفق 1</div>
<div class="cell" data-label="English">Attachment 1</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/entities/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="attachment10">
<div class="cell" data-label="Property">attachment10</div>
<div class="cell" data-label="Column">attachment10_id</div>
<div class="cell" data-label="Arabic">مرفق 10</div>
<div class="cell" data-label="English">Attachment10</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/entities/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="attachment2">
<div class="cell" data-label="Property">attachment2</div>
<div class="cell" data-label="Column">attachment2_id</div>
<div class="cell" data-label="Arabic">مرفق 2</div>
<div class="cell" data-label="English">Attachment 2</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/entities/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="attachment3">
<div class="cell" data-label="Property">attachment3</div>
<div class="cell" data-label="Column">attachment3_id</div>
<div class="cell" data-label="Arabic">مرفق 3</div>
<div class="cell" data-label="English">Attachment 3</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/entities/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="attachment4">
<div class="cell" data-label="Property">attachment4</div>
<div class="cell" data-label="Column">attachment4_id</div>
<div class="cell" data-label="Arabic">مرفق 4</div>
<div class="cell" data-label="English">Attachment 4</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/entities/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="attachment5">
<div class="cell" data-label="Property">attachment5</div>
<div class="cell" data-label="Column">attachment5_id</div>
<div class="cell" data-label="Arabic">مرفق 5</div>
<div class="cell" data-label="English">Attachment 5</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/entities/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="attachment6">
<div class="cell" data-label="Property">attachment6</div>
<div class="cell" data-label="Column">attachment6_id</div>
<div class="cell" data-label="Arabic">مرفق 6</div>
<div class="cell" data-label="English">Attachment6</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/entities/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="attachment7">
<div class="cell" data-label="Property">attachment7</div>
<div class="cell" data-label="Column">attachment7_id</div>
<div class="cell" data-label="Arabic">مرفق 7</div>
<div class="cell" data-label="English">Attachment7</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/entities/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="attachment8">
<div class="cell" data-label="Property">attachment8</div>
<div class="cell" data-label="Column">attachment8_id</div>
<div class="cell" data-label="Arabic">مرفق 8</div>
<div class="cell" data-label="English">Attachment8</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/entities/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="attachment9">
<div class="cell" data-label="Property">attachment9</div>
<div class="cell" data-label="Column">attachment9_id</div>
<div class="cell" data-label="Arabic">مرفق 9</div>
<div class="cell" data-label="English">Attachment9</div>
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

<div class="row searchable" id="b10">
<div class="cell" data-label="Property">b10</div>
<div class="cell" data-label="Column">b10</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="b11">
<div class="cell" data-label="Property">b11</div>
<div class="cell" data-label="Column">b11</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="b12">
<div class="cell" data-label="Property">b12</div>
<div class="cell" data-label="Column">b12</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="b13">
<div class="cell" data-label="Property">b13</div>
<div class="cell" data-label="Column">b13</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="b14">
<div class="cell" data-label="Property">b14</div>
<div class="cell" data-label="Column">b14</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="b15">
<div class="cell" data-label="Property">b15</div>
<div class="cell" data-label="Column">b15</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="b16">
<div class="cell" data-label="Property">b16</div>
<div class="cell" data-label="Column">b16</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="b17">
<div class="cell" data-label="Property">b17</div>
<div class="cell" data-label="Column">b17</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="b18">
<div class="cell" data-label="Property">b18</div>
<div class="cell" data-label="Column">b18</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="b19">
<div class="cell" data-label="Property">b19</div>
<div class="cell" data-label="Column">b19</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="b2">
<div class="cell" data-label="Property">b2</div>
<div class="cell" data-label="Column">b2</div>
<div class="cell" data-label="Arabic">Boolean 2</div>
<div class="cell" data-label="English">Boolean 2</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="b20">
<div class="cell" data-label="Property">b20</div>
<div class="cell" data-label="Column">b20</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
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

<div class="row searchable" id="b6">
<div class="cell" data-label="Property">b6</div>
<div class="cell" data-label="Column">b6</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="b7">
<div class="cell" data-label="Property">b7</div>
<div class="cell" data-label="Column">b7</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="b8">
<div class="cell" data-label="Property">b8</div>
<div class="cell" data-label="Column">b8</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="b9">
<div class="cell" data-label="Property">b9</div>
<div class="cell" data-label="Column">b9</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
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

<div class="row searchable" id="contact">
<div class="cell" data-label="Property">contact</div>
<div class="cell" data-label="Column">contact_id</div>
<div class="cell" data-label="Arabic">جهة إتصال</div>
<div class="cell" data-label="English">Contact</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Contact](/entities/basic/Contact.md) 
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

<div class="row searchable" id="currentStatus">
<div class="cell" data-label="Property">currentStatus</div>
<div class="cell" data-label="Column">currentStatus_id</div>
<div class="cell" data-label="Arabic">الحالة الحالية</div>
<div class="cell" data-label="English">Current Status</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnMaintenanceOrderStatus](/entities/crm-maintenance/MnMaintenanceOrderStatus.md) 
</div>
</div>

<div class="row searchable" id="currentStatusType">
<div class="cell" data-label="Property">currentStatusType</div>
<div class="cell" data-label="Column">currentStatusType</div>
<div class="cell" data-label="Arabic">نوع الحالة الحالية</div>
<div class="cell" data-label="English">Current Status Type</div>
<div class="cell" data-label="Type">Enum</div>

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

<div class="row searchable" id="description10">
<div class="cell" data-label="Property">description10</div>
<div class="cell" data-label="Column">description10</div>
<div class="cell" data-label="Arabic">الوصف 10</div>
<div class="cell" data-label="English">description 10</div>
<div class="cell" data-label="Type">BigText</div>

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

<div class="row searchable" id="description6">
<div class="cell" data-label="Property">description6</div>
<div class="cell" data-label="Column">description6</div>
<div class="cell" data-label="Arabic">الوصف 6</div>
<div class="cell" data-label="English">description 6</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="description7">
<div class="cell" data-label="Property">description7</div>
<div class="cell" data-label="Column">description7</div>
<div class="cell" data-label="Arabic">الوصف 7</div>
<div class="cell" data-label="English">description 7</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="description8">
<div class="cell" data-label="Property">description8</div>
<div class="cell" data-label="Column">description8</div>
<div class="cell" data-label="Arabic">الوصف 8</div>
<div class="cell" data-label="English">description 8</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="description9">
<div class="cell" data-label="Property">description9</div>
<div class="cell" data-label="Column">description9</div>
<div class="cell" data-label="Arabic">الوصف 9</div>
<div class="cell" data-label="English">description 9</div>
<div class="cell" data-label="Type">BigText</div>

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

<div class="row searchable" id="issueLocator">
<div class="cell" data-label="Property">issueLocator</div>
<div class="cell" data-label="Column">issueLocator_id</div>
<div class="cell" data-label="Arabic">موقع الصرف</div>
<div class="cell" data-label="English">Issue Locator</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Locator](/entities/supplychain/Locator.md) 
</div>
</div>

<div class="row searchable" id="issueWarehouse">
<div class="cell" data-label="Property">issueWarehouse</div>
<div class="cell" data-label="Column">issueWarehouse_id</div>
<div class="cell" data-label="Arabic">مخزن الصرف</div>
<div class="cell" data-label="English">Issue Warehouse</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/entities/supplychain/Warehouse.md) 
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

<div class="row searchable" id="locator">
<div class="cell" data-label="Property">locator</div>
<div class="cell" data-label="Column">locator_id</div>
<div class="cell" data-label="Arabic">الموقع</div>
<div class="cell" data-label="English">Locator</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Locator](/entities/supplychain/Locator.md) 
</div>
</div>

<div class="row searchable" id="lockVersion">
<div class="cell" data-label="Property">lockVersion</div>
<div class="cell" data-label="Column">lockVersion</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="machine">
<div class="cell" data-label="Property">machine</div>
<div class="cell" data-label="Column">machine_id</div>
<div class="cell" data-label="Arabic">الالة</div>
<div class="cell" data-label="English">machine</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnMachine](/entities/crm-maintenance/MnMachine.md) 
</div>
</div>

<div class="row searchable" id="machineCategory">
<div class="cell" data-label="Property">machineCategory</div>
<div class="cell" data-label="Column">machineCategory_id</div>
<div class="cell" data-label="Arabic">تصنيف آلة</div>
<div class="cell" data-label="English">Machine Category</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnMachineCategory](/entities/crm-maintenance/MnMachineCategory.md) 
</div>
</div>

<div class="row searchable" id="machineCategory1">
<div class="cell" data-label="Property">machineCategory1</div>
<div class="cell" data-label="Column">machineCategory1_id</div>
<div class="cell" data-label="Arabic">تصنيف آلة 1</div>
<div class="cell" data-label="English">Machine Category 1</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnMachineCategory](/entities/crm-maintenance/MnMachineCategory.md) 
</div>
</div>

<div class="row searchable" id="machineCategory2">
<div class="cell" data-label="Property">machineCategory2</div>
<div class="cell" data-label="Column">machineCategory2_id</div>
<div class="cell" data-label="Arabic">تصنيف آلة 2</div>
<div class="cell" data-label="English">Machine Category 2</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnMachineCategory](/entities/crm-maintenance/MnMachineCategory.md) 
</div>
</div>

<div class="row searchable" id="machineCategory3">
<div class="cell" data-label="Property">machineCategory3</div>
<div class="cell" data-label="Column">machineCategory3_id</div>
<div class="cell" data-label="Arabic">تصنيف آلة 3</div>
<div class="cell" data-label="English">Machine Category 3</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnMachineCategory](/entities/crm-maintenance/MnMachineCategory.md) 
</div>
</div>

<div class="row searchable" id="machineCategory4">
<div class="cell" data-label="Property">machineCategory4</div>
<div class="cell" data-label="Column">machineCategory4_id</div>
<div class="cell" data-label="Arabic">تصنيف آلة 4</div>
<div class="cell" data-label="English">Machine Category 4</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnMachineCategory](/entities/crm-maintenance/MnMachineCategory.md) 
</div>
</div>

<div class="row searchable" id="machineCategory5">
<div class="cell" data-label="Property">machineCategory5</div>
<div class="cell" data-label="Column">machineCategory5_id</div>
<div class="cell" data-label="Arabic">تصنيف آلة 5</div>
<div class="cell" data-label="English">Machine Category 5</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnMachineCategory](/entities/crm-maintenance/MnMachineCategory.md) 
</div>
</div>

<div class="row searchable" id="machineClassification1">
<div class="cell" data-label="Property">machineClassification1</div>
<div class="cell" data-label="Column">machineClassification1_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnClassification1](/entities/crm-maintenance/MnClassification1.md) 
</div>
</div>

<div class="row searchable" id="machineClassification2">
<div class="cell" data-label="Property">machineClassification2</div>
<div class="cell" data-label="Column">machineClassification2_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnClassification2](/entities/crm-maintenance/MnClassification2.md) 
</div>
</div>

<div class="row searchable" id="machineClassification3">
<div class="cell" data-label="Property">machineClassification3</div>
<div class="cell" data-label="Column">machineClassification3_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnClassification3](/entities/crm-maintenance/MnClassification3.md) 
</div>
</div>

<div class="row searchable" id="machineClassification4">
<div class="cell" data-label="Property">machineClassification4</div>
<div class="cell" data-label="Column">machineClassification4_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnClassification4](/entities/crm-maintenance/MnClassification4.md) 
</div>
</div>

<div class="row searchable" id="machineClassification5">
<div class="cell" data-label="Property">machineClassification5</div>
<div class="cell" data-label="Column">machineClassification5_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnClassification5](/entities/crm-maintenance/MnClassification5.md) 
</div>
</div>

<div class="row searchable" id="machineType">
<div class="cell" data-label="Property">machineType</div>
<div class="cell" data-label="Column">machineType_id</div>
<div class="cell" data-label="Arabic">نوع الآلة</div>
<div class="cell" data-label="English">Machine Type</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnMachineType](/entities/crm-maintenance/MnMachineType.md) 
</div>
</div>

<div class="row searchable" id="maintenanceGroup">
<div class="cell" data-label="Property">maintenanceGroup</div>
<div class="cell" data-label="Column">maintenanceGroup_id</div>
<div class="cell" data-label="Arabic">مجموعة الصيانة</div>
<div class="cell" data-label="English">Maintenance Group</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnMaintenanceGroup](/entities/crm-maintenance/MnMaintenanceGroup.md) 
</div>
</div>

<div class="row searchable" id="manualRef1">
<div class="cell" data-label="Property">manualRef1</div>
<div class="cell" data-label="Column">manualRef1</div>
<div class="cell" data-label="Arabic">رقم المستند اليدوي</div>
<div class="cell" data-label="English">Manual Ref1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="mnContract">
<div class="cell" data-label="Property">mnContract</div>
<div class="cell" data-label="Column">mnContract_id</div>
<div class="cell" data-label="Arabic">عقد الصيانة</div>
<div class="cell" data-label="English">Maintenance Contract</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnContract](/entities/crm-maintenance/MnContract.md) 
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

<div class="row searchable" id="numberOfPeriodicMaintenance">
<div class="cell" data-label="Property">numberOfPeriodicMaintenance</div>
<div class="cell" data-label="Column">numberOfPeriodicMaintenance</div>
<div class="cell" data-label="Arabic">عدد الصيانات الدورية</div>
<div class="cell" data-label="English">Number of Periodic Maintenance</div>
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

<div class="row searchable" id="orderType">
<div class="cell" data-label="Property">orderType</div>
<div class="cell" data-label="Column">orderType</div>
<div class="cell" data-label="Arabic">نوع الإذن</div>
<div class="cell" data-label="English">Order Type</div>
<div class="cell" data-label="Type">Enum</div>

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

<div class="row searchable" id="plannedVisitDate">
<div class="cell" data-label="Property">plannedVisitDate</div>
<div class="cell" data-label="Column">plannedVisitDate</div>
<div class="cell" data-label="Arabic">تاريخ الزيارة المخطط</div>
<div class="cell" data-label="English">Planned Visit Date</div>
<div class="cell" data-label="Type">Date</div>

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

<div class="row searchable" id="priceClassifier1">
<div class="cell" data-label="Property">priceClassifier1</div>
<div class="cell" data-label="Column">priceClassifier1_id</div>
<div class="cell" data-label="Arabic">محدد سعر 1</div>
<div class="cell" data-label="English">Price Classifier 1</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SalesPriceClassifier1](/entities/basic/SalesPriceClassifier1.md) 
</div>
</div>

<div class="row searchable" id="priceClassifier2">
<div class="cell" data-label="Property">priceClassifier2</div>
<div class="cell" data-label="Column">priceClassifier2_id</div>
<div class="cell" data-label="Arabic">محدد سعر 2</div>
<div class="cell" data-label="English">Price Classifier 2</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SalesPriceClassifier2](/entities/basic/SalesPriceClassifier2.md) 
</div>
</div>

<div class="row searchable" id="priceClassifier3">
<div class="cell" data-label="Property">priceClassifier3</div>
<div class="cell" data-label="Column">priceClassifier3_id</div>
<div class="cell" data-label="Arabic">محدد سعر 3</div>
<div class="cell" data-label="English">Price Classifier 3</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SalesPriceClassifier3](/entities/basic/SalesPriceClassifier3.md) 
</div>
</div>

<div class="row searchable" id="priceClassifier4">
<div class="cell" data-label="Property">priceClassifier4</div>
<div class="cell" data-label="Column">priceClassifier4_id</div>
<div class="cell" data-label="Arabic">محدد سعر 4</div>
<div class="cell" data-label="English">Price Classifier 4</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SalesPriceClassifier4](/entities/basic/SalesPriceClassifier4.md) 
</div>
</div>

<div class="row searchable" id="priceClassifier5">
<div class="cell" data-label="Property">priceClassifier5</div>
<div class="cell" data-label="Column">priceClassifier5_id</div>
<div class="cell" data-label="Arabic">محدد سعر 5</div>
<div class="cell" data-label="English">Price Classifier 5</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SalesPriceClassifier5](/entities/basic/SalesPriceClassifier5.md) 
</div>
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

<div class="row searchable" id="receiptLocator">
<div class="cell" data-label="Property">receiptLocator</div>
<div class="cell" data-label="Column">receiptLocator_id</div>
<div class="cell" data-label="Arabic">موقع التوريد</div>
<div class="cell" data-label="English">Receipt Locator</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Locator](/entities/supplychain/Locator.md) 
</div>
</div>

<div class="row searchable" id="receiptWarehouse">
<div class="cell" data-label="Property">receiptWarehouse</div>
<div class="cell" data-label="Column">receiptWarehouse_id</div>
<div class="cell" data-label="Arabic">مخزن التوريد</div>
<div class="cell" data-label="English">Reciept Warehouse</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/entities/supplychain/Warehouse.md) 
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

<div class="row searchable" id="responseTime">
<div class="cell" data-label="Property">responseTime</div>
<div class="cell" data-label="Column">responseTime</div>
<div class="cell" data-label="Arabic">وقت الاستجابة</div>
<div class="cell" data-label="English">Response Time</div>
<div class="cell" data-label="Type">Time</div>

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

<div class="row searchable" id="rspMoney.afterDiscount1">
<div class="cell" data-label="Property">rspMoney.afterDiscount1</div>
<div class="cell" data-label="Column">rspAfterDiscount1</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 1</div>
<div class="cell" data-label="English">Net after Discount 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.afterDiscount2">
<div class="cell" data-label="Property">rspMoney.afterDiscount2</div>
<div class="cell" data-label="Column">rspAfterDiscount2</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 2</div>
<div class="cell" data-label="English">Net after Discount 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.afterDiscount3">
<div class="cell" data-label="Property">rspMoney.afterDiscount3</div>
<div class="cell" data-label="Column">rspAfterDiscount3</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 3</div>
<div class="cell" data-label="English">Net after Discount 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.afterDiscount4">
<div class="cell" data-label="Property">rspMoney.afterDiscount4</div>
<div class="cell" data-label="Column">rspAfterDiscount4</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 4</div>
<div class="cell" data-label="English">Net after Discount 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.afterDiscount5">
<div class="cell" data-label="Property">rspMoney.afterDiscount5</div>
<div class="cell" data-label="Column">rspAfterDiscount5</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 5</div>
<div class="cell" data-label="English">Net after Discount 5</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.afterDiscount6">
<div class="cell" data-label="Property">rspMoney.afterDiscount6</div>
<div class="cell" data-label="Column">rspAfterDiscount6</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 6</div>
<div class="cell" data-label="English">Net after Discount 6</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.afterDiscount7">
<div class="cell" data-label="Property">rspMoney.afterDiscount7</div>
<div class="cell" data-label="Column">rspAfterDiscount7</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 7</div>
<div class="cell" data-label="English">Net after Discount 7</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.afterDiscount8">
<div class="cell" data-label="Property">rspMoney.afterDiscount8</div>
<div class="cell" data-label="Column">rspAfterDiscount8</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 8</div>
<div class="cell" data-label="English">Net after Discount 8</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.afterHTaxValue">
<div class="cell" data-label="Property">rspMoney.afterHTaxValue</div>
<div class="cell" data-label="Column">rspAfterHTaxValue</div>
<div class="cell" data-label="Arabic">بعد ضريبة الفاتورة</div>
<div class="cell" data-label="English">After Tax Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.afterTaxValue">
<div class="cell" data-label="Property">rspMoney.afterTaxValue</div>
<div class="cell" data-label="Column">rspAfterTaxValue</div>
<div class="cell" data-label="Arabic">القيمة بعد الضريبة</div>
<div class="cell" data-label="English">After Tax Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.cashAmount">
<div class="cell" data-label="Property">rspMoney.cashAmount</div>
<div class="cell" data-label="Column">rspCashAmount</div>
<div class="cell" data-label="Arabic">المدفوع نقدا</div>
<div class="cell" data-label="English">Paid</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.currency">
<div class="cell" data-label="Property">rspMoney.currency</div>
<div class="cell" data-label="Column">rspCurrency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/entities/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="rspMoney.currencyRate">
<div class="cell" data-label="Property">rspMoney.currencyRate</div>
<div class="cell" data-label="Column">rspCurrencyRate</div>
<div class="cell" data-label="Arabic">المعدل</div>
<div class="cell" data-label="English">Currency Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.discount1Total">
<div class="cell" data-label="Property">rspMoney.discount1Total</div>
<div class="cell" data-label="Column">rspDiscount1Total</div>
<div class="cell" data-label="Arabic">إجمالي الخصم</div>
<div class="cell" data-label="English">Discount Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.discount2Total">
<div class="cell" data-label="Property">rspMoney.discount2Total</div>
<div class="cell" data-label="Column">rspDiscount2Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 2</div>
<div class="cell" data-label="English">Discount 1 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.discount3Total">
<div class="cell" data-label="Property">rspMoney.discount3Total</div>
<div class="cell" data-label="Column">rspDiscount3Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 3</div>
<div class="cell" data-label="English">Discount 2 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.discount4Total">
<div class="cell" data-label="Property">rspMoney.discount4Total</div>
<div class="cell" data-label="Column">rspDiscount4Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 4</div>
<div class="cell" data-label="English">Discount 3 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.discount5Total">
<div class="cell" data-label="Property">rspMoney.discount5Total</div>
<div class="cell" data-label="Column">rspDiscount5Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 5</div>
<div class="cell" data-label="English">Discount 4 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.discount6Total">
<div class="cell" data-label="Property">rspMoney.discount6Total</div>
<div class="cell" data-label="Column">rspDiscount6Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 6</div>
<div class="cell" data-label="English">Discount 5 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.discount7Total">
<div class="cell" data-label="Property">rspMoney.discount7Total</div>
<div class="cell" data-label="Column">rspDiscount7Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 7</div>
<div class="cell" data-label="English">Discount 6 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.discount8Total">
<div class="cell" data-label="Property">rspMoney.discount8Total</div>
<div class="cell" data-label="Column">rspDiscount8Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 8</div>
<div class="cell" data-label="English">Discount 7 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.headerDiscount.afterValue">
<div class="cell" data-label="Property">rspMoney.headerDiscount.afterValue</div>
<div class="cell" data-label="Column">rspHeaderDiscountAfterValue</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.headerDiscount.maxNormalPercent">
<div class="cell" data-label="Property">rspMoney.headerDiscount.maxNormalPercent</div>
<div class="cell" data-label="Column">rspHdrDscuntMaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.headerDiscount.percentage">
<div class="cell" data-label="Property">rspMoney.headerDiscount.percentage</div>
<div class="cell" data-label="Column">rspHeaderDiscountPercentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.headerDiscount.value">
<div class="cell" data-label="Property">rspMoney.headerDiscount.value</div>
<div class="cell" data-label="Column">rspHeaderDiscountValue</div>
<div class="cell" data-label="Arabic">القيمة</div>
<div class="cell" data-label="English">Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.localCurrency">
<div class="cell" data-label="Property">rspMoney.localCurrency</div>
<div class="cell" data-label="Column">rspLocalCurrency_id</div>
<div class="cell" data-label="Arabic"> العملة</div>
<div class="cell" data-label="English">Local Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/entities/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="rspMoney.netValue">
<div class="cell" data-label="Property">rspMoney.netValue</div>
<div class="cell" data-label="Column">rspNetValue</div>
<div class="cell" data-label="Arabic">الصافي</div>
<div class="cell" data-label="English">Net value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.paidCash">
<div class="cell" data-label="Property">rspMoney.paidCash</div>
<div class="cell" data-label="Column">rspPaidCash</div>
<div class="cell" data-label="Arabic">النقدية المدفوعة</div>
<div class="cell" data-label="English">Paid Cash</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.remaining">
<div class="cell" data-label="Property">rspMoney.remaining</div>
<div class="cell" data-label="Column">rspRemaining</div>
<div class="cell" data-label="Arabic">المتبقي</div>
<div class="cell" data-label="English">Remaining</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.remainingCash">
<div class="cell" data-label="Property">rspMoney.remainingCash</div>
<div class="cell" data-label="Column">rspRemainingCash</div>
<div class="cell" data-label="Arabic">النقديه المتبقيه</div>
<div class="cell" data-label="English">Remaining Cash</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.service1Fees">
<div class="cell" data-label="Property">rspMoney.service1Fees</div>
<div class="cell" data-label="Column">rspService1Fees</div>
<div class="cell" data-label="Arabic">مصاريف خدمة 1</div>
<div class="cell" data-label="English">Service Fees 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.service2Fees">
<div class="cell" data-label="Property">rspMoney.service2Fees</div>
<div class="cell" data-label="Column">rspService2Fees</div>
<div class="cell" data-label="Arabic">مصاريف خدمة 2</div>
<div class="cell" data-label="English">Service Fees 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.service3Fees">
<div class="cell" data-label="Property">rspMoney.service3Fees</div>
<div class="cell" data-label="Column">rspService3Fees</div>
<div class="cell" data-label="Arabic">مصاريف خدمة 3</div>
<div class="cell" data-label="English">Service Fees 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.service4Fees">
<div class="cell" data-label="Property">rspMoney.service4Fees</div>
<div class="cell" data-label="Column">rspService4Fees</div>
<div class="cell" data-label="Arabic">مصاريف خدمة 4</div>
<div class="cell" data-label="English">Service Fees 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.tax1Total">
<div class="cell" data-label="Property">rspMoney.tax1Total</div>
<div class="cell" data-label="Column">rspTax1Total</div>
<div class="cell" data-label="Arabic">إجمالي ضريبة مبيعات 1</div>
<div class="cell" data-label="English">Tax 1 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.tax2Total">
<div class="cell" data-label="Property">rspMoney.tax2Total</div>
<div class="cell" data-label="Column">rspTax2Total</div>
<div class="cell" data-label="Arabic">إجمالي ضريبة مبيعات 2</div>
<div class="cell" data-label="English">Tax 2 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.tax3Per">
<div class="cell" data-label="Property">rspMoney.tax3Per</div>
<div class="cell" data-label="Column">rspTax3Per</div>
<div class="cell" data-label="Arabic">ضريبة 3 %</div>
<div class="cell" data-label="English">Invoice Tax 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.tax3Total">
<div class="cell" data-label="Property">rspMoney.tax3Total</div>
<div class="cell" data-label="Column">rspTax3Total</div>
<div class="cell" data-label="Arabic">إجمالي ضريبة 3</div>
<div class="cell" data-label="English">Tax 3 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.tax4Per">
<div class="cell" data-label="Property">rspMoney.tax4Per</div>
<div class="cell" data-label="Column">rspTax4Per</div>
<div class="cell" data-label="Arabic">ضريبة الفاتورة 4 %</div>
<div class="cell" data-label="English">Invoice Tax 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.tax4Total">
<div class="cell" data-label="Property">rspMoney.tax4Total</div>
<div class="cell" data-label="Column">rspTax4Total</div>
<div class="cell" data-label="Arabic">إجمالي ضريبة 4</div>
<div class="cell" data-label="English">Tax 4 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.total">
<div class="cell" data-label="Property">rspMoney.total</div>
<div class="cell" data-label="Column">rspTotal</div>
<div class="cell" data-label="Arabic">الإجمالي</div>
<div class="cell" data-label="English">Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.totalPaid">
<div class="cell" data-label="Property">rspMoney.totalPaid</div>
<div class="cell" data-label="Column">rspTotalPaid</div>
<div class="cell" data-label="Arabic">إجمالي المدفوع</div>
<div class="cell" data-label="English">Total paid</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.totalPaymentMethods">
<div class="cell" data-label="Property">rspMoney.totalPaymentMethods</div>
<div class="cell" data-label="Column">rspTotalPaymentMethods</div>
<div class="cell" data-label="Arabic">إجمالى طرق الدفع الآخرى</div>
<div class="cell" data-label="English">Other Payments Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rspMoney.vouchersPayments">
<div class="cell" data-label="Property">rspMoney.vouchersPayments</div>
<div class="cell" data-label="Column">rspVouchersPayments</div>
<div class="cell" data-label="Arabic">إجمالي المدفوع من السندات</div>
<div class="cell" data-label="English">Total of Vouchers Payments</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="serialNumber">
<div class="cell" data-label="Property">serialNumber</div>
<div class="cell" data-label="Column">serialNumber</div>
<div class="cell" data-label="Arabic">الرقم المسلسل</div>
<div class="cell" data-label="English">Serial Number</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="spMoney.afterDiscount1">
<div class="cell" data-label="Property">spMoney.afterDiscount1</div>
<div class="cell" data-label="Column">spAfterDiscount1</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 1</div>
<div class="cell" data-label="English">Net after Discount 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.afterDiscount2">
<div class="cell" data-label="Property">spMoney.afterDiscount2</div>
<div class="cell" data-label="Column">spAfterDiscount2</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 2</div>
<div class="cell" data-label="English">Net after Discount 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.afterDiscount3">
<div class="cell" data-label="Property">spMoney.afterDiscount3</div>
<div class="cell" data-label="Column">spAfterDiscount3</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 3</div>
<div class="cell" data-label="English">Net after Discount 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.afterDiscount4">
<div class="cell" data-label="Property">spMoney.afterDiscount4</div>
<div class="cell" data-label="Column">spAfterDiscount4</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 4</div>
<div class="cell" data-label="English">Net after Discount 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.afterDiscount5">
<div class="cell" data-label="Property">spMoney.afterDiscount5</div>
<div class="cell" data-label="Column">spAfterDiscount5</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 5</div>
<div class="cell" data-label="English">Net after Discount 5</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.afterDiscount6">
<div class="cell" data-label="Property">spMoney.afterDiscount6</div>
<div class="cell" data-label="Column">spAfterDiscount6</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 6</div>
<div class="cell" data-label="English">Net after Discount 6</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.afterDiscount7">
<div class="cell" data-label="Property">spMoney.afterDiscount7</div>
<div class="cell" data-label="Column">spAfterDiscount7</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 7</div>
<div class="cell" data-label="English">Net after Discount 7</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.afterDiscount8">
<div class="cell" data-label="Property">spMoney.afterDiscount8</div>
<div class="cell" data-label="Column">spAfterDiscount8</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 8</div>
<div class="cell" data-label="English">Net after Discount 8</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.afterHTaxValue">
<div class="cell" data-label="Property">spMoney.afterHTaxValue</div>
<div class="cell" data-label="Column">spAfterHTaxValue</div>
<div class="cell" data-label="Arabic">بعد ضريبة الفاتورة</div>
<div class="cell" data-label="English">After Tax Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.afterTaxValue">
<div class="cell" data-label="Property">spMoney.afterTaxValue</div>
<div class="cell" data-label="Column">spAfterTaxValue</div>
<div class="cell" data-label="Arabic">القيمة بعد الضريبة</div>
<div class="cell" data-label="English">After Tax Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.cashAmount">
<div class="cell" data-label="Property">spMoney.cashAmount</div>
<div class="cell" data-label="Column">spCashAmount</div>
<div class="cell" data-label="Arabic">المدفوع نقدا</div>
<div class="cell" data-label="English">Paid</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.currency">
<div class="cell" data-label="Property">spMoney.currency</div>
<div class="cell" data-label="Column">spCurrency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/entities/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="spMoney.currencyRate">
<div class="cell" data-label="Property">spMoney.currencyRate</div>
<div class="cell" data-label="Column">spCurrencyRate</div>
<div class="cell" data-label="Arabic">المعدل</div>
<div class="cell" data-label="English">Currency Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.discount1Total">
<div class="cell" data-label="Property">spMoney.discount1Total</div>
<div class="cell" data-label="Column">spDiscount1Total</div>
<div class="cell" data-label="Arabic">إجمالي الخصم</div>
<div class="cell" data-label="English">Discount Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.discount2Total">
<div class="cell" data-label="Property">spMoney.discount2Total</div>
<div class="cell" data-label="Column">spDiscount2Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 2</div>
<div class="cell" data-label="English">Discount 1 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.discount3Total">
<div class="cell" data-label="Property">spMoney.discount3Total</div>
<div class="cell" data-label="Column">spDiscount3Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 3</div>
<div class="cell" data-label="English">Discount 2 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.discount4Total">
<div class="cell" data-label="Property">spMoney.discount4Total</div>
<div class="cell" data-label="Column">spDiscount4Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 4</div>
<div class="cell" data-label="English">Discount 3 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.discount5Total">
<div class="cell" data-label="Property">spMoney.discount5Total</div>
<div class="cell" data-label="Column">spDiscount5Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 5</div>
<div class="cell" data-label="English">Discount 4 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.discount6Total">
<div class="cell" data-label="Property">spMoney.discount6Total</div>
<div class="cell" data-label="Column">spDiscount6Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 6</div>
<div class="cell" data-label="English">Discount 5 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.discount7Total">
<div class="cell" data-label="Property">spMoney.discount7Total</div>
<div class="cell" data-label="Column">spDiscount7Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 7</div>
<div class="cell" data-label="English">Discount 6 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.discount8Total">
<div class="cell" data-label="Property">spMoney.discount8Total</div>
<div class="cell" data-label="Column">spDiscount8Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 8</div>
<div class="cell" data-label="English">Discount 7 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.headerDiscount.afterValue">
<div class="cell" data-label="Property">spMoney.headerDiscount.afterValue</div>
<div class="cell" data-label="Column">spHeaderDiscountAfterValue</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.headerDiscount.maxNormalPercent">
<div class="cell" data-label="Property">spMoney.headerDiscount.maxNormalPercent</div>
<div class="cell" data-label="Column">spHdrDscountMaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.headerDiscount.percentage">
<div class="cell" data-label="Property">spMoney.headerDiscount.percentage</div>
<div class="cell" data-label="Column">spHeaderDiscountPercentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.headerDiscount.value">
<div class="cell" data-label="Property">spMoney.headerDiscount.value</div>
<div class="cell" data-label="Column">spHeaderDiscountValue</div>
<div class="cell" data-label="Arabic">القيمة</div>
<div class="cell" data-label="English">Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.localCurrency">
<div class="cell" data-label="Property">spMoney.localCurrency</div>
<div class="cell" data-label="Column">spLocalCurrency_id</div>
<div class="cell" data-label="Arabic"> العملة</div>
<div class="cell" data-label="English">Local Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/entities/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="spMoney.netValue">
<div class="cell" data-label="Property">spMoney.netValue</div>
<div class="cell" data-label="Column">spNetValue</div>
<div class="cell" data-label="Arabic">الصافي</div>
<div class="cell" data-label="English">Net value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.paidCash">
<div class="cell" data-label="Property">spMoney.paidCash</div>
<div class="cell" data-label="Column">spPaidCash</div>
<div class="cell" data-label="Arabic">النقدية المدفوعة</div>
<div class="cell" data-label="English">Paid Cash</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.remaining">
<div class="cell" data-label="Property">spMoney.remaining</div>
<div class="cell" data-label="Column">spRemaining</div>
<div class="cell" data-label="Arabic">المتبقي</div>
<div class="cell" data-label="English">Remaining</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.remainingCash">
<div class="cell" data-label="Property">spMoney.remainingCash</div>
<div class="cell" data-label="Column">spRemainingCash</div>
<div class="cell" data-label="Arabic">النقديه المتبقيه</div>
<div class="cell" data-label="English">Remaining Cash</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.service1Fees">
<div class="cell" data-label="Property">spMoney.service1Fees</div>
<div class="cell" data-label="Column">spService1Fees</div>
<div class="cell" data-label="Arabic">مصاريف خدمة 1</div>
<div class="cell" data-label="English">Service Fees 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.service2Fees">
<div class="cell" data-label="Property">spMoney.service2Fees</div>
<div class="cell" data-label="Column">spService2Fees</div>
<div class="cell" data-label="Arabic">مصاريف خدمة 2</div>
<div class="cell" data-label="English">Service Fees 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.service3Fees">
<div class="cell" data-label="Property">spMoney.service3Fees</div>
<div class="cell" data-label="Column">spService3Fees</div>
<div class="cell" data-label="Arabic">مصاريف خدمة 3</div>
<div class="cell" data-label="English">Service Fees 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.service4Fees">
<div class="cell" data-label="Property">spMoney.service4Fees</div>
<div class="cell" data-label="Column">spService4Fees</div>
<div class="cell" data-label="Arabic">مصاريف خدمة 4</div>
<div class="cell" data-label="English">Service Fees 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.tax1Total">
<div class="cell" data-label="Property">spMoney.tax1Total</div>
<div class="cell" data-label="Column">spTax1Total</div>
<div class="cell" data-label="Arabic">إجمالي ضريبة مبيعات 1</div>
<div class="cell" data-label="English">Tax 1 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.tax2Total">
<div class="cell" data-label="Property">spMoney.tax2Total</div>
<div class="cell" data-label="Column">spTax2Total</div>
<div class="cell" data-label="Arabic">إجمالي ضريبة مبيعات 2</div>
<div class="cell" data-label="English">Tax 2 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.tax3Per">
<div class="cell" data-label="Property">spMoney.tax3Per</div>
<div class="cell" data-label="Column">spTax3Per</div>
<div class="cell" data-label="Arabic">ضريبة 3 %</div>
<div class="cell" data-label="English">Invoice Tax 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.tax3Total">
<div class="cell" data-label="Property">spMoney.tax3Total</div>
<div class="cell" data-label="Column">spTax3Total</div>
<div class="cell" data-label="Arabic">إجمالي ضريبة 3</div>
<div class="cell" data-label="English">Tax 3 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.tax4Per">
<div class="cell" data-label="Property">spMoney.tax4Per</div>
<div class="cell" data-label="Column">spTax4Per</div>
<div class="cell" data-label="Arabic">ضريبة الفاتورة 4 %</div>
<div class="cell" data-label="English">Invoice Tax 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.tax4Total">
<div class="cell" data-label="Property">spMoney.tax4Total</div>
<div class="cell" data-label="Column">spTax4Total</div>
<div class="cell" data-label="Arabic">إجمالي ضريبة 4</div>
<div class="cell" data-label="English">Tax 4 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.total">
<div class="cell" data-label="Property">spMoney.total</div>
<div class="cell" data-label="Column">spTotal</div>
<div class="cell" data-label="Arabic">الإجمالي</div>
<div class="cell" data-label="English">Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.totalPaid">
<div class="cell" data-label="Property">spMoney.totalPaid</div>
<div class="cell" data-label="Column">spTotalPaid</div>
<div class="cell" data-label="Arabic">إجمالي المدفوع</div>
<div class="cell" data-label="English">Total paid</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.totalPaymentMethods">
<div class="cell" data-label="Property">spMoney.totalPaymentMethods</div>
<div class="cell" data-label="Column">spTotalPaymentMethods</div>
<div class="cell" data-label="Arabic">إجمالى طرق الدفع الآخرى</div>
<div class="cell" data-label="English">Other Payments Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spMoney.vouchersPayments">
<div class="cell" data-label="Property">spMoney.vouchersPayments</div>
<div class="cell" data-label="Column">spVouchersPayments</div>
<div class="cell" data-label="Arabic">إجمالي المدفوع من السندات</div>
<div class="cell" data-label="English">Total of Vouchers Payments</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.afterDiscount1">
<div class="cell" data-label="Property">srvMoney.afterDiscount1</div>
<div class="cell" data-label="Column">srvAfterDiscount1</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 1</div>
<div class="cell" data-label="English">Net after Discount 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.afterDiscount2">
<div class="cell" data-label="Property">srvMoney.afterDiscount2</div>
<div class="cell" data-label="Column">srvAfterDiscount2</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 2</div>
<div class="cell" data-label="English">Net after Discount 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.afterDiscount3">
<div class="cell" data-label="Property">srvMoney.afterDiscount3</div>
<div class="cell" data-label="Column">srvAfterDiscount3</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 3</div>
<div class="cell" data-label="English">Net after Discount 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.afterDiscount4">
<div class="cell" data-label="Property">srvMoney.afterDiscount4</div>
<div class="cell" data-label="Column">srvAfterDiscount4</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 4</div>
<div class="cell" data-label="English">Net after Discount 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.afterDiscount5">
<div class="cell" data-label="Property">srvMoney.afterDiscount5</div>
<div class="cell" data-label="Column">srvAfterDiscount5</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 5</div>
<div class="cell" data-label="English">Net after Discount 5</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.afterDiscount6">
<div class="cell" data-label="Property">srvMoney.afterDiscount6</div>
<div class="cell" data-label="Column">srvAfterDiscount6</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 6</div>
<div class="cell" data-label="English">Net after Discount 6</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.afterDiscount7">
<div class="cell" data-label="Property">srvMoney.afterDiscount7</div>
<div class="cell" data-label="Column">srvAfterDiscount7</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 7</div>
<div class="cell" data-label="English">Net after Discount 7</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.afterDiscount8">
<div class="cell" data-label="Property">srvMoney.afterDiscount8</div>
<div class="cell" data-label="Column">srvAfterDiscount8</div>
<div class="cell" data-label="Arabic">صافي بعد الخصم 8</div>
<div class="cell" data-label="English">Net after Discount 8</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.afterHTaxValue">
<div class="cell" data-label="Property">srvMoney.afterHTaxValue</div>
<div class="cell" data-label="Column">srvAfterHTaxValue</div>
<div class="cell" data-label="Arabic">بعد ضريبة الفاتورة</div>
<div class="cell" data-label="English">After Tax Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.afterTaxValue">
<div class="cell" data-label="Property">srvMoney.afterTaxValue</div>
<div class="cell" data-label="Column">srvAfterTaxValue</div>
<div class="cell" data-label="Arabic">القيمة بعد الضريبة</div>
<div class="cell" data-label="English">After Tax Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.cashAmount">
<div class="cell" data-label="Property">srvMoney.cashAmount</div>
<div class="cell" data-label="Column">srvCashAmount</div>
<div class="cell" data-label="Arabic">المدفوع نقدا</div>
<div class="cell" data-label="English">Paid</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.currency">
<div class="cell" data-label="Property">srvMoney.currency</div>
<div class="cell" data-label="Column">srvCurrency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/entities/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="srvMoney.currencyRate">
<div class="cell" data-label="Property">srvMoney.currencyRate</div>
<div class="cell" data-label="Column">srvCurrencyRate</div>
<div class="cell" data-label="Arabic">المعدل</div>
<div class="cell" data-label="English">Currency Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.discount1Total">
<div class="cell" data-label="Property">srvMoney.discount1Total</div>
<div class="cell" data-label="Column">srvDiscount1Total</div>
<div class="cell" data-label="Arabic">إجمالي الخصم</div>
<div class="cell" data-label="English">Discount Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.discount2Total">
<div class="cell" data-label="Property">srvMoney.discount2Total</div>
<div class="cell" data-label="Column">srvDiscount2Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 2</div>
<div class="cell" data-label="English">Discount 1 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.discount3Total">
<div class="cell" data-label="Property">srvMoney.discount3Total</div>
<div class="cell" data-label="Column">srvDiscount3Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 3</div>
<div class="cell" data-label="English">Discount 2 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.discount4Total">
<div class="cell" data-label="Property">srvMoney.discount4Total</div>
<div class="cell" data-label="Column">srvDiscount4Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 4</div>
<div class="cell" data-label="English">Discount 3 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.discount5Total">
<div class="cell" data-label="Property">srvMoney.discount5Total</div>
<div class="cell" data-label="Column">srvDiscount5Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 5</div>
<div class="cell" data-label="English">Discount 4 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.discount6Total">
<div class="cell" data-label="Property">srvMoney.discount6Total</div>
<div class="cell" data-label="Column">srvDiscount6Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 6</div>
<div class="cell" data-label="English">Discount 5 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.discount7Total">
<div class="cell" data-label="Property">srvMoney.discount7Total</div>
<div class="cell" data-label="Column">srvDiscount7Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 7</div>
<div class="cell" data-label="English">Discount 6 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.discount8Total">
<div class="cell" data-label="Property">srvMoney.discount8Total</div>
<div class="cell" data-label="Column">srvDiscount8Total</div>
<div class="cell" data-label="Arabic">إجمالي خصم 8</div>
<div class="cell" data-label="English">Discount 7 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.headerDiscount.afterValue">
<div class="cell" data-label="Property">srvMoney.headerDiscount.afterValue</div>
<div class="cell" data-label="Column">srvHeaderDiscountAfterValue</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.headerDiscount.maxNormalPercent">
<div class="cell" data-label="Property">srvMoney.headerDiscount.maxNormalPercent</div>
<div class="cell" data-label="Column">srvHdrDscuntMaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.headerDiscount.percentage">
<div class="cell" data-label="Property">srvMoney.headerDiscount.percentage</div>
<div class="cell" data-label="Column">srvHeaderDiscountPercentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.headerDiscount.value">
<div class="cell" data-label="Property">srvMoney.headerDiscount.value</div>
<div class="cell" data-label="Column">srvHeaderDiscountValue</div>
<div class="cell" data-label="Arabic">القيمة</div>
<div class="cell" data-label="English">Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.localCurrency">
<div class="cell" data-label="Property">srvMoney.localCurrency</div>
<div class="cell" data-label="Column">srvLocalCurrency_id</div>
<div class="cell" data-label="Arabic"> العملة</div>
<div class="cell" data-label="English">Local Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/entities/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="srvMoney.netValue">
<div class="cell" data-label="Property">srvMoney.netValue</div>
<div class="cell" data-label="Column">srvNetValue</div>
<div class="cell" data-label="Arabic">الصافي</div>
<div class="cell" data-label="English">Net value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.paidCash">
<div class="cell" data-label="Property">srvMoney.paidCash</div>
<div class="cell" data-label="Column">srvPaidCash</div>
<div class="cell" data-label="Arabic">النقدية المدفوعة</div>
<div class="cell" data-label="English">Paid Cash</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.remaining">
<div class="cell" data-label="Property">srvMoney.remaining</div>
<div class="cell" data-label="Column">srvRemaining</div>
<div class="cell" data-label="Arabic">المتبقي</div>
<div class="cell" data-label="English">Remaining</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.remainingCash">
<div class="cell" data-label="Property">srvMoney.remainingCash</div>
<div class="cell" data-label="Column">srvRemainingCash</div>
<div class="cell" data-label="Arabic">النقديه المتبقيه</div>
<div class="cell" data-label="English">Remaining Cash</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.service1Fees">
<div class="cell" data-label="Property">srvMoney.service1Fees</div>
<div class="cell" data-label="Column">srvService1Fees</div>
<div class="cell" data-label="Arabic">مصاريف خدمة 1</div>
<div class="cell" data-label="English">Service Fees 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.service2Fees">
<div class="cell" data-label="Property">srvMoney.service2Fees</div>
<div class="cell" data-label="Column">srvService2Fees</div>
<div class="cell" data-label="Arabic">مصاريف خدمة 2</div>
<div class="cell" data-label="English">Service Fees 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.service3Fees">
<div class="cell" data-label="Property">srvMoney.service3Fees</div>
<div class="cell" data-label="Column">srvService3Fees</div>
<div class="cell" data-label="Arabic">مصاريف خدمة 3</div>
<div class="cell" data-label="English">Service Fees 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.service4Fees">
<div class="cell" data-label="Property">srvMoney.service4Fees</div>
<div class="cell" data-label="Column">srvService4Fees</div>
<div class="cell" data-label="Arabic">مصاريف خدمة 4</div>
<div class="cell" data-label="English">Service Fees 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.tax1Total">
<div class="cell" data-label="Property">srvMoney.tax1Total</div>
<div class="cell" data-label="Column">srvTax1Total</div>
<div class="cell" data-label="Arabic">إجمالي ضريبة مبيعات 1</div>
<div class="cell" data-label="English">Tax 1 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.tax2Total">
<div class="cell" data-label="Property">srvMoney.tax2Total</div>
<div class="cell" data-label="Column">srvTax2Total</div>
<div class="cell" data-label="Arabic">إجمالي ضريبة مبيعات 2</div>
<div class="cell" data-label="English">Tax 2 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.tax3Per">
<div class="cell" data-label="Property">srvMoney.tax3Per</div>
<div class="cell" data-label="Column">srvTax3Per</div>
<div class="cell" data-label="Arabic">ضريبة 3 %</div>
<div class="cell" data-label="English">Invoice Tax 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.tax3Total">
<div class="cell" data-label="Property">srvMoney.tax3Total</div>
<div class="cell" data-label="Column">srvTax3Total</div>
<div class="cell" data-label="Arabic">إجمالي ضريبة 3</div>
<div class="cell" data-label="English">Tax 3 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.tax4Per">
<div class="cell" data-label="Property">srvMoney.tax4Per</div>
<div class="cell" data-label="Column">srvTax4Per</div>
<div class="cell" data-label="Arabic">ضريبة الفاتورة 4 %</div>
<div class="cell" data-label="English">Invoice Tax 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.tax4Total">
<div class="cell" data-label="Property">srvMoney.tax4Total</div>
<div class="cell" data-label="Column">srvTax4Total</div>
<div class="cell" data-label="Arabic">إجمالي ضريبة 4</div>
<div class="cell" data-label="English">Tax 4 Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.total">
<div class="cell" data-label="Property">srvMoney.total</div>
<div class="cell" data-label="Column">srvTotal</div>
<div class="cell" data-label="Arabic">الإجمالي</div>
<div class="cell" data-label="English">Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.totalPaid">
<div class="cell" data-label="Property">srvMoney.totalPaid</div>
<div class="cell" data-label="Column">srvTotalPaid</div>
<div class="cell" data-label="Arabic">إجمالي المدفوع</div>
<div class="cell" data-label="English">Total paid</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.totalPaymentMethods">
<div class="cell" data-label="Property">srvMoney.totalPaymentMethods</div>
<div class="cell" data-label="Column">srvTotalPaymentMethods</div>
<div class="cell" data-label="Arabic">إجمالى طرق الدفع الآخرى</div>
<div class="cell" data-label="English">Other Payments Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="srvMoney.vouchersPayments">
<div class="cell" data-label="Property">srvMoney.vouchersPayments</div>
<div class="cell" data-label="Column">srvVouchersPayments</div>
<div class="cell" data-label="Arabic">إجمالي المدفوع من السندات</div>
<div class="cell" data-label="English">Total of Vouchers Payments</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="statusChangeRemark">
<div class="cell" data-label="Property">statusChangeRemark</div>
<div class="cell" data-label="Column">statusChangeRemark</div>
<div class="cell" data-label="Arabic">ملحوظة تغيير الحالة</div>
<div class="cell" data-label="English">Status Change Remark</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="statusType">
<div class="cell" data-label="Property">statusType</div>
<div class="cell" data-label="Column">statusType</div>
<div class="cell" data-label="Arabic">الحالة</div>
<div class="cell" data-label="English">Status</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="stockIssue">
<div class="cell" data-label="Property">stockIssue</div>
<div class="cell gen-ref-column" data-label="Column">stockIssueActualCode,  stockIssueCode,  stockIssueEntityType,  stockIssueId</div>
<div class="cell" data-label="Arabic"> صرف مخزني</div>
<div class="cell" data-label="English"> Stock Issue</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="subsidiary">
<div class="cell" data-label="Property">subsidiary</div>
<div class="cell gen-ref-column" data-label="Column">subsidiaryActualCode,  subsidiaryCode,  subsidiaryEntityType,  subsidiaryId</div>
<div class="cell" data-label="Arabic">الذمة</div>
<div class="cell" data-label="English">Subsidiary</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="taskTemplate">
<div class="cell" data-label="Property">taskTemplate</div>
<div class="cell" data-label="Column">taskTemplate_id</div>
<div class="cell" data-label="Arabic">قالب مهام</div>
<div class="cell" data-label="English">Task Template</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnTaskTemplate](/entities/crm-maintenance/MnTaskTemplate.md) 
</div>
</div>

<div class="row searchable" id="taxable">
<div class="cell" data-label="Property">taxable</div>
<div class="cell" data-label="Column">taxable</div>
<div class="cell" data-label="Arabic">خاضع للضريبة</div>
<div class="cell" data-label="English">Taxable</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="technician">
<div class="cell" data-label="Property">technician</div>
<div class="cell" data-label="Column">technician_id</div>
<div class="cell" data-label="Arabic">الفني</div>
<div class="cell" data-label="English">Technician</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/entities/basic/Employee.md) 
</div>
</div>

<div class="row searchable" id="techniciansReward">
<div class="cell" data-label="Property">techniciansReward</div>
<div class="cell" data-label="Column">techniciansReward</div>
<div class="cell" data-label="Arabic">مكأفاة الصيانة</div>
<div class="cell" data-label="English">Maintenance Reward</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="text10">
<div class="cell" data-label="Property">text10</div>
<div class="cell" data-label="Column">text10</div>
<div class="cell" data-label="Arabic">10 نص</div>
<div class="cell" data-label="English">text 10</div>
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

<div class="row searchable" id="text6">
<div class="cell" data-label="Property">text6</div>
<div class="cell" data-label="Column">text6</div>
<div class="cell" data-label="Arabic">6 نص</div>
<div class="cell" data-label="English">Text 6</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="text7">
<div class="cell" data-label="Property">text7</div>
<div class="cell" data-label="Column">text7</div>
<div class="cell" data-label="Arabic">7 نص</div>
<div class="cell" data-label="English">Text 7</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="text8">
<div class="cell" data-label="Property">text8</div>
<div class="cell" data-label="Column">text8</div>
<div class="cell" data-label="Arabic">8 نص</div>
<div class="cell" data-label="English">Text 8</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="text9">
<div class="cell" data-label="Property">text9</div>
<div class="cell" data-label="Column">text9</div>
<div class="cell" data-label="Arabic">9 نص</div>
<div class="cell" data-label="English">Text 9</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="troubleDescription">
<div class="cell" data-label="Property">troubleDescription</div>
<div class="cell" data-label="Column">troubleDescription_id</div>
<div class="cell" data-label="Arabic">وصف المشكلة</div>
<div class="cell" data-label="English">Trouble Description</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnTroubleDescription](/entities/crm-maintenance/MnTroubleDescription.md) 
</div>
</div>

<div class="row searchable" id="troubleLevel">
<div class="cell" data-label="Property">troubleLevel</div>
<div class="cell" data-label="Column">troubleLevel_id</div>
<div class="cell" data-label="Arabic">مستوى المشكلة</div>
<div class="cell" data-label="English">Trouble Level</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnTroubleLevel](/entities/crm-maintenance/MnTroubleLevel.md) 
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

<div class="row searchable" id="visitType1">
<div class="cell" data-label="Property">visitType1</div>
<div class="cell" data-label="Column">visitType1</div>
<div class="cell" data-label="Arabic">نوع الزيارة 1</div>
<div class="cell" data-label="English">Visit Type 1</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="visitType2">
<div class="cell" data-label="Property">visitType2</div>
<div class="cell" data-label="Column">visitType2</div>
<div class="cell" data-label="Arabic">نوع الزيارة 2</div>
<div class="cell" data-label="English">Visit Type 2</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="visitType3">
<div class="cell" data-label="Property">visitType3</div>
<div class="cell" data-label="Column">visitType3</div>
<div class="cell" data-label="Arabic">نوع الزيارة 3</div>
<div class="cell" data-label="English">Visit Type 3</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="visitType4">
<div class="cell" data-label="Property">visitType4</div>
<div class="cell" data-label="Column">visitType4</div>
<div class="cell" data-label="Arabic">نوع الزيارة 4</div>
<div class="cell" data-label="English">Visit Type 4</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="visitType5">
<div class="cell" data-label="Property">visitType5</div>
<div class="cell" data-label="Column">visitType5</div>
<div class="cell" data-label="Arabic">نوع الزيارة 5</div>
<div class="cell" data-label="English">Visit Type 5</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="visitType6">
<div class="cell" data-label="Property">visitType6</div>
<div class="cell" data-label="Column">visitType6</div>
<div class="cell" data-label="Arabic">نوع الزيارة 6</div>
<div class="cell" data-label="English">Visit Type 6</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="visitType7">
<div class="cell" data-label="Property">visitType7</div>
<div class="cell" data-label="Column">visitType7</div>
<div class="cell" data-label="Arabic">نوع الزيارة 7</div>
<div class="cell" data-label="English">Visit Type 7</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="warehouse">
<div class="cell" data-label="Property">warehouse</div>
<div class="cell" data-label="Column">warehouse_id</div>
<div class="cell" data-label="Arabic">المخزن</div>
<div class="cell" data-label="English">Warehouse</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/entities/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="warrantyContract">
<div class="cell" data-label="Property">warrantyContract</div>
<div class="cell" data-label="Column">warrantyContract_id</div>
<div class="cell" data-label="Arabic">عقد الضمان</div>
<div class="cell" data-label="English">Warranty Contract</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnContract](/entities/crm-maintenance/MnContract.md) 
</div>
</div>

<div class="row searchable" id="warrantyDoc.end">
<div class="cell" data-label="Property">warrantyDoc.end</div>
<div class="cell" data-label="Column">warrantyDocEnd</div>
<div class="cell" data-label="Arabic">تاريخ نهاية الضمان</div>
<div class="cell" data-label="English">Warranty End Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="warrantyDoc.issue">
<div class="cell" data-label="Property">warrantyDoc.issue</div>
<div class="cell" data-label="Column">warrantyDocIssue</div>
<div class="cell" data-label="Arabic">تاريخ بداية الضمان</div>
<div class="cell" data-label="English">Warranty Start Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="warrantyDoc.number">
<div class="cell" data-label="Property">warrantyDoc.number</div>
<div class="cell" data-label="Column">warrantyDocNumber</div>
<div class="cell" data-label="Arabic">رقم</div>
<div class="cell" data-label="English">Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="warrantyPeriod.uom">
<div class="cell" data-label="Property">warrantyPeriod.uom</div>
<div class="cell" data-label="Column">warrantyUom</div>
<div class="cell" data-label="Arabic">الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="warrantyPeriod.value">
<div class="cell" data-label="Property">warrantyPeriod.value</div>
<div class="cell" data-label="Column">warrantyValue</div>
<div class="cell" data-label="Arabic">فترة الضمان</div>
<div class="cell" data-label="English">Warranty Period</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="warrantyPeriodType">
<div class="cell" data-label="Property">warrantyPeriodType</div>
<div class="cell" data-label="Column">warrantyPeriodType_id</div>
<div class="cell" data-label="Arabic">نوع فترة الضمان</div>
<div class="cell" data-label="English">Warranty Period Type</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [WarrantyPeriodType](/entities/crm-maintenance/WarrantyPeriodType.md) 
</div>
</div>


</div>

<div id='dysfunctions' title='dysfunctions' class='searchable'>

## dysfunctions ( الأعطال -  Dysfunctions)
**Table Name:** MnInvoiceDysfunction, **Join Column:** mnInvoice_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="dysfunctions.date1">
<div class="cell" data-label="Property">dysfunctions.date1</div>
<div class="cell" data-label="Column">date1</div>
<div class="cell" data-label="Arabic">تـــاريخ 1</div>
<div class="cell" data-label="English">Date 1</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="dysfunctions.date2">
<div class="cell" data-label="Property">dysfunctions.date2</div>
<div class="cell" data-label="Column">date2</div>
<div class="cell" data-label="Arabic">تـــاريخ 2</div>
<div class="cell" data-label="English">Date 2</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="dysfunctions.description1">
<div class="cell" data-label="Property">dysfunctions.description1</div>
<div class="cell" data-label="Column">description1</div>
<div class="cell" data-label="Arabic">الوصف 1</div>
<div class="cell" data-label="English">description1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="dysfunctions.description2">
<div class="cell" data-label="Property">dysfunctions.description2</div>
<div class="cell" data-label="Column">description2</div>
<div class="cell" data-label="Arabic">الوصف 2</div>
<div class="cell" data-label="English">description2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="dysfunctions.description3">
<div class="cell" data-label="Property">dysfunctions.description3</div>
<div class="cell" data-label="Column">description3</div>
<div class="cell" data-label="Arabic">الوصف 3</div>
<div class="cell" data-label="English">description3</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="dysfunctions.description4">
<div class="cell" data-label="Property">dysfunctions.description4</div>
<div class="cell" data-label="Column">description4</div>
<div class="cell" data-label="Arabic">الوصف 4</div>
<div class="cell" data-label="English">description4</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="dysfunctions.description5">
<div class="cell" data-label="Property">dysfunctions.description5</div>
<div class="cell" data-label="Column">description5</div>
<div class="cell" data-label="Arabic">الوصف 5</div>
<div class="cell" data-label="English">description5</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="dysfunctions.dysfunction">
<div class="cell" data-label="Property">dysfunctions.dysfunction</div>
<div class="cell" data-label="Column">dysfunction_id</div>
<div class="cell" data-label="Arabic"> عطل</div>
<div class="cell" data-label="English"> Dysfunction</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnDysfunction](/entities/crm-maintenance/MnDysfunction.md) 
</div>
</div>

<div class="row searchable" id="dysfunctions.dysfunctionDetails">
<div class="cell" data-label="Property">dysfunctions.dysfunctionDetails</div>
<div class="cell" data-label="Column">dysfunctionDetails</div>
<div class="cell" data-label="Arabic">تفاصيل العطل</div>
<div class="cell" data-label="English">DysFunction Details</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="dysfunctions.id">
<div class="cell" data-label="Property">dysfunctions.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="dysfunctions.lineNumber">
<div class="cell" data-label="Property">dysfunctions.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="dysfunctions.machine">
<div class="cell" data-label="Property">dysfunctions.machine</div>
<div class="cell" data-label="Column">machine_id</div>
<div class="cell" data-label="Arabic">الالة</div>
<div class="cell" data-label="English">machine</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnMachine](/entities/crm-maintenance/MnMachine.md) 
</div>
</div>

<div class="row searchable" id="dysfunctions.n1">
<div class="cell" data-label="Property">dysfunctions.n1</div>
<div class="cell" data-label="Column">n1</div>
<div class="cell" data-label="Arabic">رقم 1</div>
<div class="cell" data-label="English">Number 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="dysfunctions.n2">
<div class="cell" data-label="Property">dysfunctions.n2</div>
<div class="cell" data-label="Column">n2</div>
<div class="cell" data-label="Arabic">رقم 2</div>
<div class="cell" data-label="English">Number 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="dysfunctions.newWarrantyEndDate">
<div class="cell" data-label="Property">dysfunctions.newWarrantyEndDate</div>
<div class="cell" data-label="Column">newWarrantyEndDate</div>
<div class="cell" data-label="Arabic">تاريخ نهاية الضمان الجديد</div>
<div class="cell" data-label="English">New Warranty End Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="dysfunctions.newWarrantyPeriodType">
<div class="cell" data-label="Property">dysfunctions.newWarrantyPeriodType</div>
<div class="cell" data-label="Column">newWarrantyPeriodType_id</div>
<div class="cell" data-label="Arabic">نوع فترة الضمان الجديد</div>
<div class="cell" data-label="English">New Warranty Period Type</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [WarrantyPeriodType](/entities/crm-maintenance/WarrantyPeriodType.md) 
</div>
</div>

<div class="row searchable" id="dysfunctions.newWarrantyStartDate">
<div class="cell" data-label="Property">dysfunctions.newWarrantyStartDate</div>
<div class="cell" data-label="Column">newWarrantyStartDate</div>
<div class="cell" data-label="Arabic">تاريخ بداية الضمان الجديد</div>
<div class="cell" data-label="English">New Warranty Start Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="dysfunctions.oldWarrantyEndDate">
<div class="cell" data-label="Property">dysfunctions.oldWarrantyEndDate</div>
<div class="cell" data-label="Column">oldWarrantyEndDate</div>
<div class="cell" data-label="Arabic">تاريخ نهاية الضمان السابق</div>
<div class="cell" data-label="English">Previous Warranty End Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="dysfunctions.oldWarrantyPeriodType">
<div class="cell" data-label="Property">dysfunctions.oldWarrantyPeriodType</div>
<div class="cell" data-label="Column">oldWarrantyPeriodType_id</div>
<div class="cell" data-label="Arabic">نوع فترة الضمان السابق</div>
<div class="cell" data-label="English">Previous Warranty Period Type</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [WarrantyPeriodType](/entities/crm-maintenance/WarrantyPeriodType.md) 
</div>
</div>

<div class="row searchable" id="dysfunctions.oldWarrantyRemainingDays">
<div class="cell" data-label="Property">dysfunctions.oldWarrantyRemainingDays</div>
<div class="cell" data-label="Column">oldWarrantyRemainingDays</div>
<div class="cell" data-label="Arabic">الأيام الباقية في الضمان السابق</div>
<div class="cell" data-label="English">Previous Warranty Remaining Days</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="dysfunctions.oldWarrantyStartDate">
<div class="cell" data-label="Property">dysfunctions.oldWarrantyStartDate</div>
<div class="cell" data-label="Column">oldWarrantyStartDate</div>
<div class="cell" data-label="Arabic">تاريخ بداية الضمان السابق</div>
<div class="cell" data-label="English">Previous Warranty Start Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="dysfunctions.originDoc">
<div class="cell" data-label="Property">dysfunctions.originDoc</div>
<div class="cell gen-ref-column" data-label="Column">originDocActualCode,  originDocCode,  originDocEntityType,  originDocId</div>
<div class="cell" data-label="Arabic"> # المستند</div>
<div class="cell" data-label="English"> Document #</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="dysfunctions.proposedSolution">
<div class="cell" data-label="Property">dysfunctions.proposedSolution</div>
<div class="cell" data-label="Column">proposedSolution</div>
<div class="cell" data-label="Arabic">الحل المقترح</div>
<div class="cell" data-label="English">Proposed Solution</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="dysfunctions.ref1">
<div class="cell" data-label="Property">dysfunctions.ref1</div>
<div class="cell gen-ref-column" data-label="Column">ref1ActualCode,  ref1Code,  ref1EntityType,  ref1Id</div>
<div class="cell" data-label="Arabic">مرجع 1</div>
<div class="cell" data-label="English">Reference 1</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="dysfunctions.ref2">
<div class="cell" data-label="Property">dysfunctions.ref2</div>
<div class="cell gen-ref-column" data-label="Column">ref2ActualCode,  ref2Code,  ref2EntityType,  ref2Id</div>
<div class="cell" data-label="Arabic">مرجع 2</div>
<div class="cell" data-label="English">Reference 2</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="dysfunctions.ref3">
<div class="cell" data-label="Property">dysfunctions.ref3</div>
<div class="cell gen-ref-column" data-label="Column">ref3ActualCode,  ref3Code,  ref3EntityType,  ref3Id</div>
<div class="cell" data-label="Arabic">مرجع 3</div>
<div class="cell" data-label="English">Reference 3</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="dysfunctions.ref4">
<div class="cell" data-label="Property">dysfunctions.ref4</div>
<div class="cell gen-ref-column" data-label="Column">ref4ActualCode,  ref4Code,  ref4EntityType,  ref4Id</div>
<div class="cell" data-label="Arabic">مرجع 4</div>
<div class="cell" data-label="English">Reference 4</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="dysfunctions.ref5">
<div class="cell" data-label="Property">dysfunctions.ref5</div>
<div class="cell gen-ref-column" data-label="Column">ref5ActualCode,  ref5Code,  ref5EntityType,  ref5Id</div>
<div class="cell" data-label="Arabic">مرجع 5</div>
<div class="cell" data-label="English">Reference 5</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>


</div>

<div id='externalPaymentLines' title='externalPaymentLines' class='searchable'>

## externalPaymentLines (السداد بسندات خارجية - External Payment Lines)
**Table Name:** MnInvoiceExternalPaymentLine, **Join Column:** mnInvoice_id
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

<div id='machines' title='machines' class='searchable'>

## machines (ألآت - Machines)
**Table Name:** MnInvoiceMachine, **Join Column:** mnInvoice_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="machines.b1">
<div class="cell" data-label="Property">machines.b1</div>
<div class="cell" data-label="Column">b1</div>
<div class="cell" data-label="Arabic">Boolean 1</div>
<div class="cell" data-label="English">Boolean 1</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="machines.b2">
<div class="cell" data-label="Property">machines.b2</div>
<div class="cell" data-label="Column">b2</div>
<div class="cell" data-label="Arabic">Boolean 2</div>
<div class="cell" data-label="English">Boolean 2</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="machines.b3">
<div class="cell" data-label="Property">machines.b3</div>
<div class="cell" data-label="Column">b3</div>
<div class="cell" data-label="Arabic">Boolean 3</div>
<div class="cell" data-label="English">Boolean 3</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="machines.building">
<div class="cell" data-label="Property">machines.building</div>
<div class="cell" data-label="Column">building_id</div>
<div class="cell" data-label="Arabic">المبنى</div>
<div class="cell" data-label="English">Building</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnBuilding](/entities/crm-maintenance/MnBuilding.md) 
</div>
</div>

<div class="row searchable" id="machines.call">
<div class="cell" data-label="Property">machines.call</div>
<div class="cell" data-label="Column">call_id</div>
<div class="cell" data-label="Arabic">الاتصال</div>
<div class="cell" data-label="English">Call</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CRMCall](/entities/crm/CRMCall.md) 
</div>
</div>

<div class="row searchable" id="machines.classification1">
<div class="cell" data-label="Property">machines.classification1</div>
<div class="cell" data-label="Column">classification1_id</div>
<div class="cell" data-label="Arabic">تصنيف آلة1</div>
<div class="cell" data-label="English">Machine Classification1</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnClassification1](/entities/crm-maintenance/MnClassification1.md) 
</div>
</div>

<div class="row searchable" id="machines.classification2">
<div class="cell" data-label="Property">machines.classification2</div>
<div class="cell" data-label="Column">classification2_id</div>
<div class="cell" data-label="Arabic">تصنيف آلة2</div>
<div class="cell" data-label="English">Machine Classification2</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnClassification2](/entities/crm-maintenance/MnClassification2.md) 
</div>
</div>

<div class="row searchable" id="machines.classification3">
<div class="cell" data-label="Property">machines.classification3</div>
<div class="cell" data-label="Column">classification3_id</div>
<div class="cell" data-label="Arabic">تصنيف آلة3</div>
<div class="cell" data-label="English">Machine Classification3</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnClassification3](/entities/crm-maintenance/MnClassification3.md) 
</div>
</div>

<div class="row searchable" id="machines.classification4">
<div class="cell" data-label="Property">machines.classification4</div>
<div class="cell" data-label="Column">classification4_id</div>
<div class="cell" data-label="Arabic">تصنيف آلة4</div>
<div class="cell" data-label="English">Machine Classification4</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnClassification4](/entities/crm-maintenance/MnClassification4.md) 
</div>
</div>

<div class="row searchable" id="machines.classification5">
<div class="cell" data-label="Property">machines.classification5</div>
<div class="cell" data-label="Column">classification5_id</div>
<div class="cell" data-label="Arabic">تصنيف آلة5</div>
<div class="cell" data-label="English">Machine Classification5</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnClassification5](/entities/crm-maintenance/MnClassification5.md) 
</div>
</div>

<div class="row searchable" id="machines.currentOdoVSLastOdoMeter">
<div class="cell" data-label="Property">machines.currentOdoVSLastOdoMeter</div>
<div class="cell" data-label="Column">currentOdoVSLastOdoMeter</div>
<div class="cell" data-label="Arabic">الفرق بين القراءة الحالية وأخر قراءة</div>
<div class="cell" data-label="English">Difference Between Current OdoMeter and Last OdoMeter</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="machines.currentOdometer">
<div class="cell" data-label="Property">machines.currentOdometer</div>
<div class="cell" data-label="Column">currentOdometer</div>
<div class="cell" data-label="Arabic">قراءة العداد الحالية</div>
<div class="cell" data-label="English">Current Odometer</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="machines.currentOdometerDate">
<div class="cell" data-label="Property">machines.currentOdometerDate</div>
<div class="cell" data-label="Column">currentOdometerDate</div>
<div class="cell" data-label="Arabic">تاريخ قراءة العداد الحالية</div>
<div class="cell" data-label="English">Current Odometer Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="machines.damage">
<div class="cell" data-label="Property">machines.damage</div>
<div class="cell" data-label="Column">damage_id</div>
<div class="cell" data-label="Arabic">العطل</div>
<div class="cell" data-label="English">Damage</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnDysfunction](/entities/crm-maintenance/MnDysfunction.md) 
</div>
</div>

<div class="row searchable" id="machines.date1">
<div class="cell" data-label="Property">machines.date1</div>
<div class="cell" data-label="Column">date1</div>
<div class="cell" data-label="Arabic">تـــاريخ 1</div>
<div class="cell" data-label="English">Date 1</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="machines.date2">
<div class="cell" data-label="Property">machines.date2</div>
<div class="cell" data-label="Column">date2</div>
<div class="cell" data-label="Arabic">تـــاريخ 2</div>
<div class="cell" data-label="English">Date 2</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="machines.description1">
<div class="cell" data-label="Property">machines.description1</div>
<div class="cell" data-label="Column">description1</div>
<div class="cell" data-label="Arabic">الوصف 1</div>
<div class="cell" data-label="English">description1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="machines.description2">
<div class="cell" data-label="Property">machines.description2</div>
<div class="cell" data-label="Column">description2</div>
<div class="cell" data-label="Arabic">الوصف 2</div>
<div class="cell" data-label="English">description2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="machines.description3">
<div class="cell" data-label="Property">machines.description3</div>
<div class="cell" data-label="Column">description3</div>
<div class="cell" data-label="Arabic">الوصف 3</div>
<div class="cell" data-label="English">description3</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="machines.description4">
<div class="cell" data-label="Property">machines.description4</div>
<div class="cell" data-label="Column">description4</div>
<div class="cell" data-label="Arabic">الوصف 4</div>
<div class="cell" data-label="English">description4</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="machines.description5">
<div class="cell" data-label="Property">machines.description5</div>
<div class="cell" data-label="Column">description5</div>
<div class="cell" data-label="Arabic">الوصف 5</div>
<div class="cell" data-label="English">description5</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="machines.dimensions.analysisSet">
<div class="cell" data-label="Property">machines.dimensions.analysisSet</div>
<div class="cell" data-label="Column">dimensionsAnalysisSet_id</div>
<div class="cell" data-label="Arabic">المجموعة التحليلية</div>
<div class="cell" data-label="English">Analysis set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/entities/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="machines.dimensions.branch">
<div class="cell" data-label="Property">machines.dimensions.branch</div>
<div class="cell" data-label="Column">dimensionsBranch_id</div>
<div class="cell" data-label="Arabic">الفرع</div>
<div class="cell" data-label="English">Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/entities/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="machines.dimensions.department">
<div class="cell" data-label="Property">machines.dimensions.department</div>
<div class="cell" data-label="Column">dimensionsDepartment_id</div>
<div class="cell" data-label="Arabic">الإدارة</div>
<div class="cell" data-label="English">Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/entities/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="machines.dimensions.legalEntity">
<div class="cell" data-label="Property">machines.dimensions.legalEntity</div>
<div class="cell" data-label="Column">dimensionsLegalEntity_id</div>
<div class="cell" data-label="Arabic">الشركة</div>
<div class="cell" data-label="English">Legal Entity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [LegalEntity](/entities/basic/LegalEntity.md) 
</div>
</div>

<div class="row searchable" id="machines.dimensions.sector">
<div class="cell" data-label="Property">machines.dimensions.sector</div>
<div class="cell" data-label="Column">dimensionsSector_id</div>
<div class="cell" data-label="Arabic">القطاع</div>
<div class="cell" data-label="English">Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/entities/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="machines.executionStatus">
<div class="cell" data-label="Property">machines.executionStatus</div>
<div class="cell" data-label="Column">executionStatus</div>
<div class="cell" data-label="Arabic">حالة سند التنفيذ</div>
<div class="cell" data-label="English">Order Execution Status</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="machines.floor">
<div class="cell" data-label="Property">machines.floor</div>
<div class="cell" data-label="Column">floor_id</div>
<div class="cell" data-label="Arabic">الطابق</div>
<div class="cell" data-label="English">Floor</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnFloor](/entities/crm-maintenance/MnFloor.md) 
</div>
</div>

<div class="row searchable" id="machines.id">
<div class="cell" data-label="Property">machines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="machines.lastOdometer">
<div class="cell" data-label="Property">machines.lastOdometer</div>
<div class="cell" data-label="Column">lastOdometer</div>
<div class="cell" data-label="Arabic">قراءة العداد السابقة</div>
<div class="cell" data-label="English">Last Odometer</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="machines.lastOdometerDate">
<div class="cell" data-label="Property">machines.lastOdometerDate</div>
<div class="cell" data-label="Column">lastOdometerDate</div>
<div class="cell" data-label="Arabic">تاريخ قراءة العداد السابقة</div>
<div class="cell" data-label="English">Last Odometer Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="machines.lineNumber">
<div class="cell" data-label="Property">machines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="machines.machine">
<div class="cell" data-label="Property">machines.machine</div>
<div class="cell" data-label="Column">machine_id</div>
<div class="cell" data-label="Arabic">الالة</div>
<div class="cell" data-label="English">machine</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnMachine](/entities/crm-maintenance/MnMachine.md) 
</div>
</div>

<div class="row searchable" id="machines.maintenanceGroup">
<div class="cell" data-label="Property">machines.maintenanceGroup</div>
<div class="cell" data-label="Column">maintenanceGroup_id</div>
<div class="cell" data-label="Arabic">مجموعة الصيانة</div>
<div class="cell" data-label="English">Maintenance Group</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnMaintenanceGroup](/entities/crm-maintenance/MnMaintenanceGroup.md) 
</div>
</div>

<div class="row searchable" id="machines.maintenancePeriod">
<div class="cell" data-label="Property">machines.maintenancePeriod</div>
<div class="cell" data-label="Column">maintenancePeriod</div>
<div class="cell" data-label="Arabic">مدة الصيانة</div>
<div class="cell" data-label="English">Maintenance Period</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="machines.n1">
<div class="cell" data-label="Property">machines.n1</div>
<div class="cell" data-label="Column">n1</div>
<div class="cell" data-label="Arabic">رقم 1</div>
<div class="cell" data-label="English">Number 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="machines.n2">
<div class="cell" data-label="Property">machines.n2</div>
<div class="cell" data-label="Column">n2</div>
<div class="cell" data-label="Arabic">رقم 2</div>
<div class="cell" data-label="English">Number 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="machines.n3">
<div class="cell" data-label="Property">machines.n3</div>
<div class="cell" data-label="Column">n3</div>
<div class="cell" data-label="Arabic">رقم 3</div>
<div class="cell" data-label="English">Number 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="machines.n4">
<div class="cell" data-label="Property">machines.n4</div>
<div class="cell" data-label="Column">n4</div>
<div class="cell" data-label="Arabic">رقم 4</div>
<div class="cell" data-label="English">Number 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="machines.n5">
<div class="cell" data-label="Property">machines.n5</div>
<div class="cell" data-label="Column">n5</div>
<div class="cell" data-label="Arabic">رقم 5</div>
<div class="cell" data-label="English">Number 5</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="machines.numberOfVisits">
<div class="cell" data-label="Property">machines.numberOfVisits</div>
<div class="cell" data-label="Column">numberOfVisits</div>
<div class="cell" data-label="Arabic">عدد الزيارات</div>
<div class="cell" data-label="English">Number Of Visits</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="machines.orderExecutionDoc">
<div class="cell" data-label="Property">machines.orderExecutionDoc</div>
<div class="cell" data-label="Column">orderExecutionDoc_id</div>
<div class="cell" data-label="Arabic">سند التنفيذ المنشأ</div>
<div class="cell" data-label="English">Order Execution Document</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnOrderExecution](/entities/crm-maintenance/MnOrderExecution.md) 
</div>
</div>

<div class="row searchable" id="machines.originDoc">
<div class="cell" data-label="Property">machines.originDoc</div>
<div class="cell gen-ref-column" data-label="Column">originDocActualCode,  originDocCode,  originDocEntityType,  originDocId</div>
<div class="cell" data-label="Arabic"> # المستند</div>
<div class="cell" data-label="English"> Document #</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="machines.ownerDoc">
<div class="cell" data-label="Property">machines.ownerDoc</div>
<div class="cell gen-ref-column" data-label="Column">ownerDocActualCode,  ownerDocCode,  ownerDocEntityType,  ownerDocId</div>
<div class="cell" data-label="Arabic">المستند</div>
<div class="cell" data-label="English">Document</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="machines.plannedVisitDate">
<div class="cell" data-label="Property">machines.plannedVisitDate</div>
<div class="cell" data-label="Column">plannedVisitDate</div>
<div class="cell" data-label="Arabic">تاريخ الزيارة المخطط</div>
<div class="cell" data-label="English">Planned Visit Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="machines.questionnaire">
<div class="cell" data-label="Property">machines.questionnaire</div>
<div class="cell" data-label="Column">questionnaire_id</div>
<div class="cell" data-label="Arabic">الاستبيان</div>
<div class="cell" data-label="English">Questionnaire</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CRMQuestionair](/entities/crm/CRMQuestionair.md) 
</div>
</div>

<div class="row searchable" id="machines.ref1">
<div class="cell" data-label="Property">machines.ref1</div>
<div class="cell gen-ref-column" data-label="Column">ref1ActualCode,  ref1Code,  ref1EntityType,  ref1Id</div>
<div class="cell" data-label="Arabic">مرجع 1</div>
<div class="cell" data-label="English">Reference 1</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="machines.ref2">
<div class="cell" data-label="Property">machines.ref2</div>
<div class="cell gen-ref-column" data-label="Column">ref2ActualCode,  ref2Code,  ref2EntityType,  ref2Id</div>
<div class="cell" data-label="Arabic">مرجع 2</div>
<div class="cell" data-label="English">Reference 2</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="machines.ref3">
<div class="cell" data-label="Property">machines.ref3</div>
<div class="cell gen-ref-column" data-label="Column">ref3ActualCode,  ref3Code,  ref3EntityType,  ref3Id</div>
<div class="cell" data-label="Arabic">مرجع 3</div>
<div class="cell" data-label="English">Reference 3</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="machines.remarks">
<div class="cell" data-label="Property">machines.remarks</div>
<div class="cell" data-label="Column">remarks</div>
<div class="cell" data-label="Arabic">ملاحظات</div>
<div class="cell" data-label="English">Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="machines.room">
<div class="cell" data-label="Property">machines.room</div>
<div class="cell" data-label="Column">room_id</div>
<div class="cell" data-label="Arabic">الغرفة</div>
<div class="cell" data-label="English">Room</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnRoom](/entities/crm-maintenance/MnRoom.md) 
</div>
</div>

<div class="row searchable" id="machines.selected">
<div class="cell" data-label="Property">machines.selected</div>
<div class="cell" data-label="Column">selected</div>
<div class="cell" data-label="Arabic">اختيار</div>
<div class="cell" data-label="English">Selected</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="machines.serialNumber">
<div class="cell" data-label="Property">machines.serialNumber</div>
<div class="cell" data-label="Column">serialNumber</div>
<div class="cell" data-label="Arabic">الرقم المسلسل</div>
<div class="cell" data-label="English">Serial Number</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="machines.service">
<div class="cell" data-label="Property">machines.service</div>
<div class="cell" data-label="Column">service_id</div>
<div class="cell" data-label="Arabic">الخدمة</div>
<div class="cell" data-label="English">The Service</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnMaintenanceService](/entities/crm-maintenance/MnMaintenanceService.md) 
</div>
</div>

<div class="row searchable" id="machines.status">
<div class="cell" data-label="Property">machines.status</div>
<div class="cell" data-label="Column">status_id</div>
<div class="cell" data-label="Arabic">الحالة</div>
<div class="cell" data-label="English">Status</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnMaintenanceOrderStatus](/entities/crm-maintenance/MnMaintenanceOrderStatus.md) 
</div>
</div>

<div class="row searchable" id="machines.taskTemplate">
<div class="cell" data-label="Property">machines.taskTemplate</div>
<div class="cell" data-label="Column">taskTemplate_id</div>
<div class="cell" data-label="Arabic">قالب مهام</div>
<div class="cell" data-label="English">Task Template</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnTaskTemplate](/entities/crm-maintenance/MnTaskTemplate.md) 
</div>
</div>

<div class="row searchable" id="machines.technician">
<div class="cell" data-label="Property">machines.technician</div>
<div class="cell" data-label="Column">technician_id</div>
<div class="cell" data-label="Arabic">الفني</div>
<div class="cell" data-label="English">Technician</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/entities/basic/Employee.md) 
</div>
</div>

<div class="row searchable" id="machines.text1">
<div class="cell" data-label="Property">machines.text1</div>
<div class="cell" data-label="Column">text1</div>
<div class="cell" data-label="Arabic">نــــص 1</div>
<div class="cell" data-label="English">Text 1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="machines.text2">
<div class="cell" data-label="Property">machines.text2</div>
<div class="cell" data-label="Column">text2</div>
<div class="cell" data-label="Arabic">نـــــص 2</div>
<div class="cell" data-label="English">Text 2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="machines.text3">
<div class="cell" data-label="Property">machines.text3</div>
<div class="cell" data-label="Column">text3</div>
<div class="cell" data-label="Arabic">نص 3</div>
<div class="cell" data-label="English">text3</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="machines.totalPriceOfRetSpareParts">
<div class="cell" data-label="Property">machines.totalPriceOfRetSpareParts</div>
<div class="cell" data-label="Column">totalPriceOfRetSpareParts</div>
<div class="cell" data-label="Arabic">إجمالي سعر قطع الغيارالمرتجعة</div>
<div class="cell" data-label="English">Total Price Of Returned Spare Parts</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="machines.totalPriceOfServices">
<div class="cell" data-label="Property">machines.totalPriceOfServices</div>
<div class="cell" data-label="Column">totalPriceOfServices</div>
<div class="cell" data-label="Arabic">إجمالي سعر الخدمات</div>
<div class="cell" data-label="English">Total Price Of Services</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="machines.totalPriceOfSpareParts">
<div class="cell" data-label="Property">machines.totalPriceOfSpareParts</div>
<div class="cell" data-label="Column">totalPriceOfSpareParts</div>
<div class="cell" data-label="Arabic">إجمالي سعر قطع الغيار</div>
<div class="cell" data-label="English">Total Price Of Spare Parts</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="machines.visit1Template">
<div class="cell" data-label="Property">machines.visit1Template</div>
<div class="cell" data-label="Column">visit1Template_id</div>
<div class="cell" data-label="Arabic">قالب مهام 1</div>
<div class="cell" data-label="English">Visit 1 Template</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnTaskTemplate](/entities/crm-maintenance/MnTaskTemplate.md) 
</div>
</div>

<div class="row searchable" id="machines.visit2Template">
<div class="cell" data-label="Property">machines.visit2Template</div>
<div class="cell" data-label="Column">visit2Template_id</div>
<div class="cell" data-label="Arabic">قالب مهام 2</div>
<div class="cell" data-label="English">Visit 2 Template</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnTaskTemplate](/entities/crm-maintenance/MnTaskTemplate.md) 
</div>
</div>

<div class="row searchable" id="machines.visit3Template">
<div class="cell" data-label="Property">machines.visit3Template</div>
<div class="cell" data-label="Column">visit3Template_id</div>
<div class="cell" data-label="Arabic">قالب مهام 3</div>
<div class="cell" data-label="English">Visit 3 Template</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnTaskTemplate](/entities/crm-maintenance/MnTaskTemplate.md) 
</div>
</div>

<div class="row searchable" id="machines.visit4Template">
<div class="cell" data-label="Property">machines.visit4Template</div>
<div class="cell" data-label="Column">visit4Template_id</div>
<div class="cell" data-label="Arabic">قالب مهام 4</div>
<div class="cell" data-label="English">Visit 4 Template</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnTaskTemplate](/entities/crm-maintenance/MnTaskTemplate.md) 
</div>
</div>

<div class="row searchable" id="machines.visit5Template">
<div class="cell" data-label="Property">machines.visit5Template</div>
<div class="cell" data-label="Column">visit5Template_id</div>
<div class="cell" data-label="Arabic">قالب مهام 5</div>
<div class="cell" data-label="English">Visit 5 Template</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnTaskTemplate](/entities/crm-maintenance/MnTaskTemplate.md) 
</div>
</div>

<div class="row searchable" id="machines.visit6Template">
<div class="cell" data-label="Property">machines.visit6Template</div>
<div class="cell" data-label="Column">visit6Template_id</div>
<div class="cell" data-label="Arabic">قالب مهام 6</div>
<div class="cell" data-label="English">Visit 6 Template</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnTaskTemplate](/entities/crm-maintenance/MnTaskTemplate.md) 
</div>
</div>

<div class="row searchable" id="machines.visit7Template">
<div class="cell" data-label="Property">machines.visit7Template</div>
<div class="cell" data-label="Column">visit7Template_id</div>
<div class="cell" data-label="Arabic">قالب مهام 7</div>
<div class="cell" data-label="English">Visit 7 Template</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnTaskTemplate](/entities/crm-maintenance/MnTaskTemplate.md) 
</div>
</div>

<div class="row searchable" id="machines.visitType">
<div class="cell" data-label="Property">machines.visitType</div>
<div class="cell" data-label="Column">visitType</div>
<div class="cell" data-label="Arabic">نوع الزيارة</div>
<div class="cell" data-label="English">Visit Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="machines.visitType1">
<div class="cell" data-label="Property">machines.visitType1</div>
<div class="cell" data-label="Column">visitType1</div>
<div class="cell" data-label="Arabic">نوع الزيارة 1</div>
<div class="cell" data-label="English">Visit Type 1</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="machines.visitType2">
<div class="cell" data-label="Property">machines.visitType2</div>
<div class="cell" data-label="Column">visitType2</div>
<div class="cell" data-label="Arabic">نوع الزيارة 2</div>
<div class="cell" data-label="English">Visit Type 2</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="machines.visitType3">
<div class="cell" data-label="Property">machines.visitType3</div>
<div class="cell" data-label="Column">visitType3</div>
<div class="cell" data-label="Arabic">نوع الزيارة 3</div>
<div class="cell" data-label="English">Visit Type 3</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="machines.visitType4">
<div class="cell" data-label="Property">machines.visitType4</div>
<div class="cell" data-label="Column">visitType4</div>
<div class="cell" data-label="Arabic">نوع الزيارة 4</div>
<div class="cell" data-label="English">Visit Type 4</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="machines.visitType5">
<div class="cell" data-label="Property">machines.visitType5</div>
<div class="cell" data-label="Column">visitType5</div>
<div class="cell" data-label="Arabic">نوع الزيارة 5</div>
<div class="cell" data-label="English">Visit Type 5</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="machines.visitType6">
<div class="cell" data-label="Property">machines.visitType6</div>
<div class="cell" data-label="Column">visitType6</div>
<div class="cell" data-label="Arabic">نوع الزيارة 6</div>
<div class="cell" data-label="English">Visit Type 6</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="machines.visitType7">
<div class="cell" data-label="Property">machines.visitType7</div>
<div class="cell" data-label="Column">visitType7</div>
<div class="cell" data-label="Arabic">نوع الزيارة 7</div>
<div class="cell" data-label="English">Visit Type 7</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="machines.warrantyDoc.end">
<div class="cell" data-label="Property">machines.warrantyDoc.end</div>
<div class="cell" data-label="Column">warrantyDocEnd</div>
<div class="cell" data-label="Arabic">تاريخ نهاية الضمان</div>
<div class="cell" data-label="English">Warranty End Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="machines.warrantyDoc.issue">
<div class="cell" data-label="Property">machines.warrantyDoc.issue</div>
<div class="cell" data-label="Column">warrantyDocIssue</div>
<div class="cell" data-label="Arabic">تاريخ بداية الضمان</div>
<div class="cell" data-label="English">Warranty Start Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="machines.warrantyDoc.number">
<div class="cell" data-label="Property">machines.warrantyDoc.number</div>
<div class="cell" data-label="Column">warrantyDocNumber</div>
<div class="cell" data-label="Arabic">رقم</div>
<div class="cell" data-label="English">Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="machines.warrantyPeriod.uom">
<div class="cell" data-label="Property">machines.warrantyPeriod.uom</div>
<div class="cell" data-label="Column">warrantyUom</div>
<div class="cell" data-label="Arabic">مدة الضمان | وحدة</div>
<div class="cell" data-label="English">Warranty Period | UOM</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="machines.warrantyPeriod.value">
<div class="cell" data-label="Property">machines.warrantyPeriod.value</div>
<div class="cell" data-label="Column">warrantyValue</div>
<div class="cell" data-label="Arabic">مدة الضمان | قيمة</div>
<div class="cell" data-label="English">Warranty Period | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>


</div>

<div id='maintenanceGroups' title='maintenanceGroups' class='searchable'>

## maintenanceGroups (مجموعات الصيانة - Maintenance Groups)
**Table Name:** MnInvoiceGroup, **Join Column:** mnInvoice_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="maintenanceGroups.date1">
<div class="cell" data-label="Property">maintenanceGroups.date1</div>
<div class="cell" data-label="Column">date1</div>
<div class="cell" data-label="Arabic">تـــاريخ 1</div>
<div class="cell" data-label="English">Date 1</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="maintenanceGroups.date2">
<div class="cell" data-label="Property">maintenanceGroups.date2</div>
<div class="cell" data-label="Column">date2</div>
<div class="cell" data-label="Arabic">تـــاريخ 2</div>
<div class="cell" data-label="English">Date 2</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="maintenanceGroups.description1">
<div class="cell" data-label="Property">maintenanceGroups.description1</div>
<div class="cell" data-label="Column">description1</div>
<div class="cell" data-label="Arabic">الوصف 1</div>
<div class="cell" data-label="English">description1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="maintenanceGroups.description2">
<div class="cell" data-label="Property">maintenanceGroups.description2</div>
<div class="cell" data-label="Column">description2</div>
<div class="cell" data-label="Arabic">الوصف 2</div>
<div class="cell" data-label="English">description2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="maintenanceGroups.description3">
<div class="cell" data-label="Property">maintenanceGroups.description3</div>
<div class="cell" data-label="Column">description3</div>
<div class="cell" data-label="Arabic">الوصف 3</div>
<div class="cell" data-label="English">description3</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="maintenanceGroups.description4">
<div class="cell" data-label="Property">maintenanceGroups.description4</div>
<div class="cell" data-label="Column">description4</div>
<div class="cell" data-label="Arabic">الوصف 4</div>
<div class="cell" data-label="English">description4</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="maintenanceGroups.description5">
<div class="cell" data-label="Property">maintenanceGroups.description5</div>
<div class="cell" data-label="Column">description5</div>
<div class="cell" data-label="Arabic">الوصف 5</div>
<div class="cell" data-label="English">description5</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="maintenanceGroups.id">
<div class="cell" data-label="Property">maintenanceGroups.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="maintenanceGroups.lineNumber">
<div class="cell" data-label="Property">maintenanceGroups.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="maintenanceGroups.maintenanceGroup">
<div class="cell" data-label="Property">maintenanceGroups.maintenanceGroup</div>
<div class="cell" data-label="Column">maintenanceGroup_id</div>
<div class="cell" data-label="Arabic">مجموعة الصيانة</div>
<div class="cell" data-label="English">Maintenance Group</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnMaintenanceGroup](/entities/crm-maintenance/MnMaintenanceGroup.md) 
</div>
</div>

<div class="row searchable" id="maintenanceGroups.n1">
<div class="cell" data-label="Property">maintenanceGroups.n1</div>
<div class="cell" data-label="Column">n1</div>
<div class="cell" data-label="Arabic">رقم 1</div>
<div class="cell" data-label="English">Number 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="maintenanceGroups.n2">
<div class="cell" data-label="Property">maintenanceGroups.n2</div>
<div class="cell" data-label="Column">n2</div>
<div class="cell" data-label="Arabic">رقم 2</div>
<div class="cell" data-label="English">Number 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="maintenanceGroups.originDoc">
<div class="cell" data-label="Property">maintenanceGroups.originDoc</div>
<div class="cell gen-ref-column" data-label="Column">originDocActualCode,  originDocCode,  originDocEntityType,  originDocId</div>
<div class="cell" data-label="Arabic"> # المستند</div>
<div class="cell" data-label="English"> Document #</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>


</div>

<div id='orders' title='orders' class='searchable'>

## orders (الأوامر - Orders)
**Table Name:** MnInvoiceOrders, **Join Column:** mnInvoice_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="orders.id">
<div class="cell" data-label="Property">orders.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="orders.lineNumber">
<div class="cell" data-label="Property">orders.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="orders.order">
<div class="cell" data-label="Property">orders.order</div>
<div class="cell" data-label="Column">order_id</div>
<div class="cell" data-label="Arabic">الأمر</div>
<div class="cell" data-label="English">Order</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnOrder](/entities/crm-maintenance/MnOrder.md) 
</div>
</div>


</div>

<div id='paymentLines' title='paymentLines' class='searchable'>

## paymentLines (الســداد - Payment Lines)
**Table Name:** MnInvoicePaymentLine, **Join Column:** mnInvoice_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="paymentLines.afterFeesValue">
<div class="cell" data-label="Property">paymentLines.afterFeesValue</div>
<div class="cell" data-label="Column">afterFeesValue</div>
<div class="cell" data-label="Arabic">المبلغ بعد الرسوم</div>
<div class="cell" data-label="English">Value After Fees</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="paymentLines.authorizationNumber">
<div class="cell" data-label="Property">paymentLines.authorizationNumber</div>
<div class="cell" data-label="Column">authorizationNumber</div>
<div class="cell" data-label="Arabic">رقم العملية</div>
<div class="cell" data-label="English">Authorization Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="paymentLines.date1">
<div class="cell" data-label="Property">paymentLines.date1</div>
<div class="cell" data-label="Column">date1</div>
<div class="cell" data-label="Arabic">تـــاريخ 1</div>
<div class="cell" data-label="English">Date 1</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="paymentLines.date2">
<div class="cell" data-label="Property">paymentLines.date2</div>
<div class="cell" data-label="Column">date2</div>
<div class="cell" data-label="Arabic">تـــاريخ 2</div>
<div class="cell" data-label="English">Date 2</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="paymentLines.discountCoupon">
<div class="cell" data-label="Property">paymentLines.discountCoupon</div>
<div class="cell" data-label="Column">discountCoupon_id</div>
<div class="cell" data-label="Arabic">قسيمة شراء</div>
<div class="cell" data-label="English">Discount Coupon</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DiscountCoupon](/entities/supplychain-sales/DiscountCoupon.md) 
</div>
</div>

<div class="row searchable" id="paymentLines.doNotAffectRemaining">
<div class="cell" data-label="Property">paymentLines.doNotAffectRemaining</div>
<div class="cell" data-label="Column">doNotAffectRemaining</div>
<div class="cell" data-label="Arabic">عدم التأثير على المتبقي</div>
<div class="cell" data-label="English">Do Not Affect Remaining</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="paymentLines.feesTaxValue">
<div class="cell" data-label="Property">paymentLines.feesTaxValue</div>
<div class="cell" data-label="Column">feesTaxValue</div>
<div class="cell" data-label="Arabic">قيمة ضريبة الرسوم</div>
<div class="cell" data-label="English">Fees Tax Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="paymentLines.feesValue">
<div class="cell" data-label="Property">paymentLines.feesValue</div>
<div class="cell" data-label="Column">feesValue</div>
<div class="cell" data-label="Arabic">قيمة الرسوم</div>
<div class="cell" data-label="English">Fees Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="paymentLines.id">
<div class="cell" data-label="Property">paymentLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="paymentLines.issuer">
<div class="cell" data-label="Property">paymentLines.issuer</div>
<div class="cell" data-label="Column">issuer</div>
<div class="cell" data-label="Arabic">جهة الإصدار</div>
<div class="cell" data-label="English">Issuer</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="paymentLines.lineNumber">
<div class="cell" data-label="Property">paymentLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="paymentLines.n1">
<div class="cell" data-label="Property">paymentLines.n1</div>
<div class="cell" data-label="Column">n1</div>
<div class="cell" data-label="Arabic">رقم 1</div>
<div class="cell" data-label="English">Number 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="paymentLines.n2">
<div class="cell" data-label="Property">paymentLines.n2</div>
<div class="cell" data-label="Column">n2</div>
<div class="cell" data-label="Arabic">رقم 2</div>
<div class="cell" data-label="English">Number 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="paymentLines.paidCash">
<div class="cell" data-label="Property">paymentLines.paidCash</div>
<div class="cell" data-label="Column">paidCash</div>
<div class="cell" data-label="Arabic">النقدية المدفوعة</div>
<div class="cell" data-label="English">Paid Cash</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="paymentLines.paymentMethod">
<div class="cell" data-label="Property">paymentLines.paymentMethod</div>
<div class="cell" data-label="Column">paymentMethod_id</div>
<div class="cell" data-label="Arabic">طريقة الدفع</div>
<div class="cell" data-label="English"> Payment Method</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [PaymentMethod](/entities/basic/PaymentMethod.md) 
</div>
</div>

<div class="row searchable" id="paymentLines.paymentTransactionType">
<div class="cell" data-label="Property">paymentLines.paymentTransactionType</div>
<div class="cell" data-label="Column">paymentTransactionType</div>
<div class="cell" data-label="Arabic">نوع العملية</div>
<div class="cell" data-label="English">Transaction Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="paymentLines.paymentValue">
<div class="cell" data-label="Property">paymentLines.paymentValue</div>
<div class="cell" data-label="Column">paymentValue</div>
<div class="cell" data-label="Arabic">المبلغ</div>
<div class="cell" data-label="English">Payment Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="paymentLines.pgwProperties.authCode">
<div class="cell" data-label="Property">paymentLines.pgwProperties.authCode</div>
<div class="cell" data-label="Column">authCode</div>
<div class="cell" data-label="Arabic">Auth Code / Txn Id</div>
<div class="cell" data-label="English">Auth Code / Txn Id</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="paymentLines.pgwProperties.cardType">
<div class="cell" data-label="Property">paymentLines.pgwProperties.cardType</div>
<div class="cell" data-label="Column">cardType</div>
<div class="cell" data-label="Arabic">Card Type</div>
<div class="cell" data-label="English">Card Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="paymentLines.pgwProperties.de55Response">
<div class="cell" data-label="Property">paymentLines.pgwProperties.de55Response</div>
<div class="cell" data-label="Column">de55Response</div>
<div class="cell" data-label="Arabic">De55 Response</div>
<div class="cell" data-label="English">De55 Response</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="paymentLines.pgwProperties.ecrRefNum">
<div class="cell" data-label="Property">paymentLines.pgwProperties.ecrRefNum</div>
<div class="cell" data-label="Column">ecrRefNum</div>
<div class="cell" data-label="Arabic">ECR Ref Number / Local Reference Number</div>
<div class="cell" data-label="English">ECR Ref Number / Local Reference Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="paymentLines.pgwProperties.maskedCardNumber">
<div class="cell" data-label="Property">paymentLines.pgwProperties.maskedCardNumber</div>
<div class="cell" data-label="Column">maskedCardNumber</div>
<div class="cell" data-label="Arabic">Masked Card Number</div>
<div class="cell" data-label="English">Masked Card Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="paymentLines.pgwProperties.merchantId">
<div class="cell" data-label="Property">paymentLines.pgwProperties.merchantId</div>
<div class="cell" data-label="Column">merchantId</div>
<div class="cell" data-label="Arabic">Merchant Id</div>
<div class="cell" data-label="English">Merchant Id</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="paymentLines.pgwProperties.paidFromTerminal">
<div class="cell" data-label="Property">paymentLines.pgwProperties.paidFromTerminal</div>
<div class="cell" data-label="Column">paidFromTerminal</div>
<div class="cell" data-label="Arabic">مدفوعة بواسطة ال Terminal</div>
<div class="cell" data-label="English">Paid From Terminal</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="paymentLines.pgwProperties.panNum">
<div class="cell" data-label="Property">paymentLines.pgwProperties.panNum</div>
<div class="cell" data-label="Column">panNum</div>
<div class="cell" data-label="Arabic">PAN Number / ApprovalCode</div>
<div class="cell" data-label="English">PAN Number / ApprovalCode</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="paymentLines.pgwProperties.respCode">
<div class="cell" data-label="Property">paymentLines.pgwProperties.respCode</div>
<div class="cell" data-label="Column">respCode</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="paymentLines.pgwProperties.schemeId">
<div class="cell" data-label="Property">paymentLines.pgwProperties.schemeId</div>
<div class="cell" data-label="Column">schemeId</div>
<div class="cell" data-label="Arabic">Scheme Id / Card Scheme Name</div>
<div class="cell" data-label="English">Scheme Id / Card Scheme Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="paymentLines.pgwProperties.stanNum">
<div class="cell" data-label="Property">paymentLines.pgwProperties.stanNum</div>
<div class="cell" data-label="Column">stanNum</div>
<div class="cell" data-label="Arabic">STAN Number / rrNumber</div>
<div class="cell" data-label="English">STAN Number / rrNumber</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="paymentLines.pgwProperties.terminalId">
<div class="cell" data-label="Property">paymentLines.pgwProperties.terminalId</div>
<div class="cell" data-label="Column">terminalId</div>
<div class="cell" data-label="Arabic">Terminal Id / Device Serial No</div>
<div class="cell" data-label="English">Terminal Id / Device Serial No</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="paymentLines.remainingCash">
<div class="cell" data-label="Property">paymentLines.remainingCash</div>
<div class="cell" data-label="Column">remainingCash</div>
<div class="cell" data-label="Arabic">النقديه المتبقيه</div>
<div class="cell" data-label="English">Remaining Cash</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="paymentLines.text1">
<div class="cell" data-label="Property">paymentLines.text1</div>
<div class="cell" data-label="Column">text1</div>
<div class="cell" data-label="Arabic">نــــص 1</div>
<div class="cell" data-label="English">Text 1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="paymentLines.text2">
<div class="cell" data-label="Property">paymentLines.text2</div>
<div class="cell" data-label="Column">text2</div>
<div class="cell" data-label="Arabic">نـــــص 2</div>
<div class="cell" data-label="English">Text 2</div>
<div class="cell" data-label="Type">Text</div>

</div>


</div>

<div id='returnedSpareParts' title='returnedSpareParts' class='searchable'>

## returnedSpareParts (قطع الغيار المرتجعة - Returned Spare Parts)
**Table Name:** MnInvoiceRetSparePart, **Join Column:** mnInvoice_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="returnedSpareParts.activePerc">
<div class="cell" data-label="Property">returnedSpareParts.activePerc</div>
<div class="cell" data-label="Column">activePerc</div>
<div class="cell" data-label="Arabic">النسبة الفعالة</div>
<div class="cell" data-label="English">Active Percentage</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="returnedSpareParts.box">
<div class="cell" data-label="Property">returnedSpareParts.box</div>
<div class="cell" data-label="Column">box</div>
<div class="cell" data-label="Arabic">صندوق</div>
<div class="cell" data-label="English">Box</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="returnedSpareParts.color">
<div class="cell" data-label="Property">returnedSpareParts.color</div>
<div class="cell" data-label="Column">color</div>
<div class="cell" data-label="Arabic">اللون</div>
<div class="cell" data-label="English">Color</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="returnedSpareParts.currencyRate">
<div class="cell" data-label="Property">returnedSpareParts.currencyRate</div>
<div class="cell" data-label="Column">currencyRate</div>
<div class="cell" data-label="Arabic">المعدل</div>
<div class="cell" data-label="English">Currency Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.date1">
<div class="cell" data-label="Property">returnedSpareParts.date1</div>
<div class="cell" data-label="Column">date1</div>
<div class="cell" data-label="Arabic">تـــاريخ 1</div>
<div class="cell" data-label="English">Date 1</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="returnedSpareParts.date2">
<div class="cell" data-label="Property">returnedSpareParts.date2</div>
<div class="cell" data-label="Column">date2</div>
<div class="cell" data-label="Arabic">تـــاريخ 2</div>
<div class="cell" data-label="English">Date 2</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="returnedSpareParts.description1">
<div class="cell" data-label="Property">returnedSpareParts.description1</div>
<div class="cell" data-label="Column">description1</div>
<div class="cell" data-label="Arabic">الوصف 1</div>
<div class="cell" data-label="English">description1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="returnedSpareParts.description2">
<div class="cell" data-label="Property">returnedSpareParts.description2</div>
<div class="cell" data-label="Column">description2</div>
<div class="cell" data-label="Arabic">الوصف 2</div>
<div class="cell" data-label="English">description2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="returnedSpareParts.description3">
<div class="cell" data-label="Property">returnedSpareParts.description3</div>
<div class="cell" data-label="Column">description3</div>
<div class="cell" data-label="Arabic">الوصف 3</div>
<div class="cell" data-label="English">description3</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="returnedSpareParts.description4">
<div class="cell" data-label="Property">returnedSpareParts.description4</div>
<div class="cell" data-label="Column">description4</div>
<div class="cell" data-label="Arabic">الوصف 4</div>
<div class="cell" data-label="English">description4</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="returnedSpareParts.description5">
<div class="cell" data-label="Property">returnedSpareParts.description5</div>
<div class="cell" data-label="Column">description5</div>
<div class="cell" data-label="Arabic">الوصف 5</div>
<div class="cell" data-label="English">description5</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="returnedSpareParts.foreignCurrency">
<div class="cell" data-label="Property">returnedSpareParts.foreignCurrency</div>
<div class="cell" data-label="Column">foreignCurrency_id</div>
<div class="cell" data-label="Arabic">العملة الأجنبية</div>
<div class="cell" data-label="English">Foreign Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/entities/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="returnedSpareParts.foreignUnitPrice">
<div class="cell" data-label="Property">returnedSpareParts.foreignUnitPrice</div>
<div class="cell" data-label="Column">foreignUnitPrice</div>
<div class="cell" data-label="Arabic">سعر الوحدة بالعملة الأجنبية</div>
<div class="cell" data-label="English">Foreign Unit Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.id">
<div class="cell" data-label="Property">returnedSpareParts.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="returnedSpareParts.inactivePerc">
<div class="cell" data-label="Property">returnedSpareParts.inactivePerc</div>
<div class="cell" data-label="Column">inactivePerc</div>
<div class="cell" data-label="Arabic">النسبة الغير فعالة</div>
<div class="cell" data-label="English">Inactive Percentage</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="returnedSpareParts.lineNumber">
<div class="cell" data-label="Property">returnedSpareParts.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="returnedSpareParts.location">
<div class="cell" data-label="Property">returnedSpareParts.location</div>
<div class="cell" data-label="Column">location_id</div>
<div class="cell" data-label="Arabic">الموقع المخزني</div>
<div class="cell" data-label="English">Location</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Locator](/entities/supplychain/Locator.md) 
</div>
</div>

<div class="row searchable" id="returnedSpareParts.lotId">
<div class="cell" data-label="Property">returnedSpareParts.lotId</div>
<div class="cell" data-label="Column">lotId</div>
<div class="cell" data-label="Arabic">كود الشحنة</div>
<div class="cell" data-label="English">Lot ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="returnedSpareParts.machine">
<div class="cell" data-label="Property">returnedSpareParts.machine</div>
<div class="cell" data-label="Column">machine_id</div>
<div class="cell" data-label="Arabic">الالة</div>
<div class="cell" data-label="English">machine</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnMachine](/entities/crm-maintenance/MnMachine.md) 
</div>
</div>

<div class="row searchable" id="returnedSpareParts.measures">
<div class="cell" data-label="Property">returnedSpareParts.measures</div>
<div class="cell" data-label="Column">measures</div>
<div class="cell" data-label="Arabic">الأبعاد</div>
<div class="cell" data-label="English">Measures</div>
<div class="cell" data-label="Type">Measures</div>

</div>

<div class="row searchable" id="returnedSpareParts.n1">
<div class="cell" data-label="Property">returnedSpareParts.n1</div>
<div class="cell" data-label="Column">n1</div>
<div class="cell" data-label="Arabic">رقم 1</div>
<div class="cell" data-label="English">Number 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.n2">
<div class="cell" data-label="Property">returnedSpareParts.n2</div>
<div class="cell" data-label="Column">n2</div>
<div class="cell" data-label="Arabic">رقم 2</div>
<div class="cell" data-label="English">Number 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.originDoc">
<div class="cell" data-label="Property">returnedSpareParts.originDoc</div>
<div class="cell gen-ref-column" data-label="Column">originDocActualCode,  originDocCode,  originDocEntityType,  originDocId</div>
<div class="cell" data-label="Arabic"> # المستند</div>
<div class="cell" data-label="English"> Document #</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.custom">
<div class="cell" data-label="Property">returnedSpareParts.price.custom</div>
<div class="cell" data-label="Column">custom</div>
<div class="cell" data-label="Arabic">مخصص</div>
<div class="cell" data-label="English">Custom</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.discount1.afterValue">
<div class="cell" data-label="Property">returnedSpareParts.price.discount1.afterValue</div>
<div class="cell" data-label="Column">dis1AfterValue</div>
<div class="cell" data-label="Arabic">خصم 1 | صافي</div>
<div class="cell" data-label="English">Discount 1 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.discount1.maxNormalPercent">
<div class="cell" data-label="Property">returnedSpareParts.price.discount1.maxNormalPercent</div>
<div class="cell" data-label="Column">dis1MaxNormalPercent</div>
<div class="cell" data-label="Arabic">خصم 1 | النسبة العادية</div>
<div class="cell" data-label="English">Discount 1 | Normal Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.discount1.percentage">
<div class="cell" data-label="Property">returnedSpareParts.price.discount1.percentage</div>
<div class="cell" data-label="Column">dis1Percentage</div>
<div class="cell" data-label="Arabic">خصم 1 | %</div>
<div class="cell" data-label="English">Discount 1 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.discount1.value">
<div class="cell" data-label="Property">returnedSpareParts.price.discount1.value</div>
<div class="cell" data-label="Column">dis1Value</div>
<div class="cell" data-label="Arabic">خصم 1 | قيمة</div>
<div class="cell" data-label="English">Discount 1 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.discount2.afterValue">
<div class="cell" data-label="Property">returnedSpareParts.price.discount2.afterValue</div>
<div class="cell" data-label="Column">dis2AfterValue</div>
<div class="cell" data-label="Arabic">خصم 2 | صافي</div>
<div class="cell" data-label="English">Discount 2 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.discount2.maxNormalPercent">
<div class="cell" data-label="Property">returnedSpareParts.price.discount2.maxNormalPercent</div>
<div class="cell" data-label="Column">dis2MaxNormalPercent</div>
<div class="cell" data-label="Arabic">خصم 2 | النسبة العادية</div>
<div class="cell" data-label="English">Discount 2 | Normal Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.discount2.percentage">
<div class="cell" data-label="Property">returnedSpareParts.price.discount2.percentage</div>
<div class="cell" data-label="Column">dis2Percentage</div>
<div class="cell" data-label="Arabic">خصم 2 | %</div>
<div class="cell" data-label="English">Discount 2 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.discount2.value">
<div class="cell" data-label="Property">returnedSpareParts.price.discount2.value</div>
<div class="cell" data-label="Column">dis2Value</div>
<div class="cell" data-label="Arabic">خصم 2 | قيمة</div>
<div class="cell" data-label="English">Discount 2 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.discount3.afterValue">
<div class="cell" data-label="Property">returnedSpareParts.price.discount3.afterValue</div>
<div class="cell" data-label="Column">dis3AfterValue</div>
<div class="cell" data-label="Arabic">خصم 3 | صافي</div>
<div class="cell" data-label="English">Discount 3 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.discount3.maxNormalPercent">
<div class="cell" data-label="Property">returnedSpareParts.price.discount3.maxNormalPercent</div>
<div class="cell" data-label="Column">dis3MaxNormalPercent</div>
<div class="cell" data-label="Arabic">خصم 3 | النسبة العادية</div>
<div class="cell" data-label="English">Discount 3 | Normal Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.discount3.percentage">
<div class="cell" data-label="Property">returnedSpareParts.price.discount3.percentage</div>
<div class="cell" data-label="Column">dis3Percentage</div>
<div class="cell" data-label="Arabic">خصم 3 | %</div>
<div class="cell" data-label="English">Discount 3 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.discount3.value">
<div class="cell" data-label="Property">returnedSpareParts.price.discount3.value</div>
<div class="cell" data-label="Column">dis3Value</div>
<div class="cell" data-label="Arabic">خصم 3 | قيمة</div>
<div class="cell" data-label="English">Discount 3 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.discount4.afterValue">
<div class="cell" data-label="Property">returnedSpareParts.price.discount4.afterValue</div>
<div class="cell" data-label="Column">dis4AfterValue</div>
<div class="cell" data-label="Arabic">خصم 4 | صافي</div>
<div class="cell" data-label="English">Discount 4 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.discount4.maxNormalPercent">
<div class="cell" data-label="Property">returnedSpareParts.price.discount4.maxNormalPercent</div>
<div class="cell" data-label="Column">dis4MaxNormalPercent</div>
<div class="cell" data-label="Arabic">خصم 4 | النسبة العادية</div>
<div class="cell" data-label="English">Discount 4 | Normal Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.discount4.percentage">
<div class="cell" data-label="Property">returnedSpareParts.price.discount4.percentage</div>
<div class="cell" data-label="Column">dis4Percentage</div>
<div class="cell" data-label="Arabic">خصم 4 | %</div>
<div class="cell" data-label="English">Discount 4 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.discount4.value">
<div class="cell" data-label="Property">returnedSpareParts.price.discount4.value</div>
<div class="cell" data-label="Column">dis4Value</div>
<div class="cell" data-label="Arabic">خصم 4 | قيمة</div>
<div class="cell" data-label="English">Discount 4 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.discount5.afterValue">
<div class="cell" data-label="Property">returnedSpareParts.price.discount5.afterValue</div>
<div class="cell" data-label="Column">dis5AfterValue</div>
<div class="cell" data-label="Arabic">خصم 5 | صافي</div>
<div class="cell" data-label="English">Discount 5 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.discount5.maxNormalPercent">
<div class="cell" data-label="Property">returnedSpareParts.price.discount5.maxNormalPercent</div>
<div class="cell" data-label="Column">dis5MaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.discount5.percentage">
<div class="cell" data-label="Property">returnedSpareParts.price.discount5.percentage</div>
<div class="cell" data-label="Column">dis5Percentage</div>
<div class="cell" data-label="Arabic">خصم 5 | %</div>
<div class="cell" data-label="English">Discount 5 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.discount5.value">
<div class="cell" data-label="Property">returnedSpareParts.price.discount5.value</div>
<div class="cell" data-label="Column">dis5Value</div>
<div class="cell" data-label="Arabic">خصم 5 | قيمة</div>
<div class="cell" data-label="English">Discount 5 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.discount6.afterValue">
<div class="cell" data-label="Property">returnedSpareParts.price.discount6.afterValue</div>
<div class="cell" data-label="Column">dis6AfterValue</div>
<div class="cell" data-label="Arabic">خصم 6 | صافي</div>
<div class="cell" data-label="English">Discount 6 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.discount6.maxNormalPercent">
<div class="cell" data-label="Property">returnedSpareParts.price.discount6.maxNormalPercent</div>
<div class="cell" data-label="Column">dis6MaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.discount6.percentage">
<div class="cell" data-label="Property">returnedSpareParts.price.discount6.percentage</div>
<div class="cell" data-label="Column">dis6Percentage</div>
<div class="cell" data-label="Arabic">خصم 6 | %</div>
<div class="cell" data-label="English">Discount 6 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.discount6.value">
<div class="cell" data-label="Property">returnedSpareParts.price.discount6.value</div>
<div class="cell" data-label="Column">dis6Value</div>
<div class="cell" data-label="Arabic">خصم 6 | قيمة</div>
<div class="cell" data-label="English">Discount 6 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.discount7.afterValue">
<div class="cell" data-label="Property">returnedSpareParts.price.discount7.afterValue</div>
<div class="cell" data-label="Column">dis7AfterValue</div>
<div class="cell" data-label="Arabic">خصم 7 | صافي</div>
<div class="cell" data-label="English">Discount 7 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.discount7.maxNormalPercent">
<div class="cell" data-label="Property">returnedSpareParts.price.discount7.maxNormalPercent</div>
<div class="cell" data-label="Column">dis7MaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.discount7.percentage">
<div class="cell" data-label="Property">returnedSpareParts.price.discount7.percentage</div>
<div class="cell" data-label="Column">dis7Percentage</div>
<div class="cell" data-label="Arabic">خصم 7 | %</div>
<div class="cell" data-label="English">Discount 7 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.discount7.value">
<div class="cell" data-label="Property">returnedSpareParts.price.discount7.value</div>
<div class="cell" data-label="Column">dis7Value</div>
<div class="cell" data-label="Arabic">خصم 7 | قيمة</div>
<div class="cell" data-label="English">Discount 7 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.discount8.afterValue">
<div class="cell" data-label="Property">returnedSpareParts.price.discount8.afterValue</div>
<div class="cell" data-label="Column">dis8AfterValue</div>
<div class="cell" data-label="Arabic">خصم 8 | صافي</div>
<div class="cell" data-label="English">Discount 8 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.discount8.maxNormalPercent">
<div class="cell" data-label="Property">returnedSpareParts.price.discount8.maxNormalPercent</div>
<div class="cell" data-label="Column">dis8MaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.discount8.percentage">
<div class="cell" data-label="Property">returnedSpareParts.price.discount8.percentage</div>
<div class="cell" data-label="Column">dis8Percentage</div>
<div class="cell" data-label="Arabic">خصم 8 | %</div>
<div class="cell" data-label="English">Discount 8 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.discount8.value">
<div class="cell" data-label="Property">returnedSpareParts.price.discount8.value</div>
<div class="cell" data-label="Column">dis8Value</div>
<div class="cell" data-label="Arabic">خصم 8 | قيمة</div>
<div class="cell" data-label="English">Discount 8 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.headerDicount.afterValue">
<div class="cell" data-label="Property">returnedSpareParts.price.headerDicount.afterValue</div>
<div class="cell" data-label="Column">hdrAfterValue</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.headerDicount.maxNormalPercent">
<div class="cell" data-label="Property">returnedSpareParts.price.headerDicount.maxNormalPercent</div>
<div class="cell" data-label="Column">hdrMaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.headerDicount.percentage">
<div class="cell" data-label="Property">returnedSpareParts.price.headerDicount.percentage</div>
<div class="cell" data-label="Column">hdrPercentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.headerDicount.value">
<div class="cell" data-label="Property">returnedSpareParts.price.headerDicount.value</div>
<div class="cell" data-label="Column">hdrValue</div>
<div class="cell" data-label="Arabic">القيمة</div>
<div class="cell" data-label="English">Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.netValue">
<div class="cell" data-label="Property">returnedSpareParts.price.netValue</div>
<div class="cell" data-label="Column">netValue</div>
<div class="cell" data-label="Arabic">الصافي</div>
<div class="cell" data-label="English">Net value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.price">
<div class="cell" data-label="Property">returnedSpareParts.price.price</div>
<div class="cell" data-label="Column">price</div>
<div class="cell" data-label="Arabic">الأسعار | السعر الكلي</div>
<div class="cell" data-label="English">Prices | total price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.tax1.afterValue">
<div class="cell" data-label="Property">returnedSpareParts.price.tax1.afterValue</div>
<div class="cell" data-label="Column">tax1AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | الصافي</div>
<div class="cell" data-label="English">Tax | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.tax1.maxNormalPercent">
<div class="cell" data-label="Property">returnedSpareParts.price.tax1.maxNormalPercent</div>
<div class="cell" data-label="Column">tax1MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | %</div>
<div class="cell" data-label="English">Item Tax | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.tax1.percentage">
<div class="cell" data-label="Property">returnedSpareParts.price.tax1.percentage</div>
<div class="cell" data-label="Column">tax1Percentage</div>
<div class="cell" data-label="Arabic">قيمة إضافية 1</div>
<div class="cell" data-label="English">Tax 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.tax1.value">
<div class="cell" data-label="Property">returnedSpareParts.price.tax1.value</div>
<div class="cell" data-label="Column">tax1Value</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | القيمة</div>
<div class="cell" data-label="English">Tax value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.tax2.afterValue">
<div class="cell" data-label="Property">returnedSpareParts.price.tax2.afterValue</div>
<div class="cell" data-label="Column">tax2AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | الصافي</div>
<div class="cell" data-label="English">Tax 2 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.tax2.maxNormalPercent">
<div class="cell" data-label="Property">returnedSpareParts.price.tax2.maxNormalPercent</div>
<div class="cell" data-label="Column">tax2MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | %</div>
<div class="cell" data-label="English">Tax 2 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.tax2.percentage">
<div class="cell" data-label="Property">returnedSpareParts.price.tax2.percentage</div>
<div class="cell" data-label="Column">tax2Percentage</div>
<div class="cell" data-label="Arabic">قيمة إضافية 2</div>
<div class="cell" data-label="English">Tax 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.tax2.value">
<div class="cell" data-label="Property">returnedSpareParts.price.tax2.value</div>
<div class="cell" data-label="Column">tax2Value</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | القيمة</div>
<div class="cell" data-label="English">Tax 2 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.tax3.afterValue">
<div class="cell" data-label="Property">returnedSpareParts.price.tax3.afterValue</div>
<div class="cell" data-label="Column">tax3AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة 3 | الصافي</div>
<div class="cell" data-label="English">Tax 3 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.tax3.maxNormalPercent">
<div class="cell" data-label="Property">returnedSpareParts.price.tax3.maxNormalPercent</div>
<div class="cell" data-label="Column">tax3MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة 3 | %</div>
<div class="cell" data-label="English">Tax 3 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.tax3.percentage">
<div class="cell" data-label="Property">returnedSpareParts.price.tax3.percentage</div>
<div class="cell" data-label="Column">tax3Percentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.tax3.value">
<div class="cell" data-label="Property">returnedSpareParts.price.tax3.value</div>
<div class="cell" data-label="Column">tax3Value</div>
<div class="cell" data-label="Arabic">ضريبة 3 | القيمة</div>
<div class="cell" data-label="English">Tax 3 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.tax4.afterValue">
<div class="cell" data-label="Property">returnedSpareParts.price.tax4.afterValue</div>
<div class="cell" data-label="Column">tax4AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة 4 | الصافي</div>
<div class="cell" data-label="English">Tax 4 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.tax4.maxNormalPercent">
<div class="cell" data-label="Property">returnedSpareParts.price.tax4.maxNormalPercent</div>
<div class="cell" data-label="Column">tax4MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة 4 | %</div>
<div class="cell" data-label="English">Tax 4 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.tax4.percentage">
<div class="cell" data-label="Property">returnedSpareParts.price.tax4.percentage</div>
<div class="cell" data-label="Column">tax4Percentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.tax4.value">
<div class="cell" data-label="Property">returnedSpareParts.price.tax4.value</div>
<div class="cell" data-label="Column">tax4Value</div>
<div class="cell" data-label="Arabic">ضريبة 4 | القيمة</div>
<div class="cell" data-label="English">Tax 4 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.totalCashShare">
<div class="cell" data-label="Property">returnedSpareParts.price.totalCashShare</div>
<div class="cell" data-label="Column">totalCashShare</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.totalPaymentMethodShare">
<div class="cell" data-label="Property">returnedSpareParts.price.totalPaymentMethodShare</div>
<div class="cell" data-label="Column">totalPaymentMethodShare</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.price.unitPrice">
<div class="cell" data-label="Property">returnedSpareParts.price.unitPrice</div>
<div class="cell" data-label="Column">unitPrice</div>
<div class="cell" data-label="Arabic">سعر الوحدة</div>
<div class="cell" data-label="English">Prices | Unit price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.quantity">
<div class="cell" data-label="Property">returnedSpareParts.quantity</div>
<div class="cell" data-label="Column">quantity</div>
<div class="cell" data-label="Arabic">الكمية</div>
<div class="cell" data-label="English">Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="returnedSpareParts.ref1">
<div class="cell" data-label="Property">returnedSpareParts.ref1</div>
<div class="cell gen-ref-column" data-label="Column">ref1ActualCode,  ref1Code,  ref1EntityType,  ref1Id</div>
<div class="cell" data-label="Arabic">مرجع 1</div>
<div class="cell" data-label="English">Reference 1</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="returnedSpareParts.ref2">
<div class="cell" data-label="Property">returnedSpareParts.ref2</div>
<div class="cell gen-ref-column" data-label="Column">ref2ActualCode,  ref2Code,  ref2EntityType,  ref2Id</div>
<div class="cell" data-label="Arabic">مرجع 2</div>
<div class="cell" data-label="English">Reference 2</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="returnedSpareParts.ref3">
<div class="cell" data-label="Property">returnedSpareParts.ref3</div>
<div class="cell gen-ref-column" data-label="Column">ref3ActualCode,  ref3Code,  ref3EntityType,  ref3Id</div>
<div class="cell" data-label="Arabic">مرجع 3</div>
<div class="cell" data-label="English">Reference 3</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="returnedSpareParts.ref4">
<div class="cell" data-label="Property">returnedSpareParts.ref4</div>
<div class="cell gen-ref-column" data-label="Column">ref4ActualCode,  ref4Code,  ref4EntityType,  ref4Id</div>
<div class="cell" data-label="Arabic">مرجع 4</div>
<div class="cell" data-label="English">Reference 4</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="returnedSpareParts.ref5">
<div class="cell" data-label="Property">returnedSpareParts.ref5</div>
<div class="cell gen-ref-column" data-label="Column">ref5ActualCode,  ref5Code,  ref5EntityType,  ref5Id</div>
<div class="cell" data-label="Arabic">مرجع 5</div>
<div class="cell" data-label="English">Reference 5</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="returnedSpareParts.remarks">
<div class="cell" data-label="Property">returnedSpareParts.remarks</div>
<div class="cell" data-label="Column">remarks</div>
<div class="cell" data-label="Arabic">ملاحظات</div>
<div class="cell" data-label="English">Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="returnedSpareParts.revisionId">
<div class="cell" data-label="Property">returnedSpareParts.revisionId</div>
<div class="cell" data-label="Column">revisionId</div>
<div class="cell" data-label="Arabic">الإصدار</div>
<div class="cell" data-label="English">ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="returnedSpareParts.secondSerial">
<div class="cell" data-label="Property">returnedSpareParts.secondSerial</div>
<div class="cell" data-label="Column">secondSerial</div>
<div class="cell" data-label="Arabic">الرقم المسلسل الثاني</div>
<div class="cell" data-label="English">Second Serial</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="returnedSpareParts.serialNumber">
<div class="cell" data-label="Property">returnedSpareParts.serialNumber</div>
<div class="cell" data-label="Column">serialNumber</div>
<div class="cell" data-label="Arabic">الرقم المسلسل</div>
<div class="cell" data-label="English">Serial Number</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="returnedSpareParts.size">
<div class="cell" data-label="Property">returnedSpareParts.size</div>
<div class="cell" data-label="Column">size</div>
<div class="cell" data-label="Arabic">المقاس</div>
<div class="cell" data-label="English">Size</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="returnedSpareParts.sourceLineId">
<div class="cell" data-label="Property">returnedSpareParts.sourceLineId</div>
<div class="cell" data-label="Column">sourceLineId</div>
<div class="cell" data-label="Arabic">معرف سطر المصدر</div>
<div class="cell" data-label="English">Source Line Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="returnedSpareParts.sparePart">
<div class="cell" data-label="Property">returnedSpareParts.sparePart</div>
<div class="cell" data-label="Column">sparePart_id</div>
<div class="cell" data-label="Arabic">قطعة غيار</div>
<div class="cell" data-label="English">Spare Part</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/entities/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="returnedSpareParts.subItem">
<div class="cell" data-label="Property">returnedSpareParts.subItem</div>
<div class="cell" data-label="Column">subItem_id</div>
<div class="cell" data-label="Arabic"> صنف فرعى</div>
<div class="cell" data-label="English"> SubItem</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SubItem](/entities/srvcenter-subitems/SubItem.md) 
</div>
</div>

<div class="row searchable" id="returnedSpareParts.uom">
<div class="cell" data-label="Property">returnedSpareParts.uom</div>
<div class="cell" data-label="Column">uom_id</div>
<div class="cell" data-label="Arabic">الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/entities/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="returnedSpareParts.warehouse">
<div class="cell" data-label="Property">returnedSpareParts.warehouse</div>
<div class="cell" data-label="Column">warehouse_id</div>
<div class="cell" data-label="Arabic">المخزن</div>
<div class="cell" data-label="English">Warehouse</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/entities/supplychain/Warehouse.md) 
</div>
</div>


</div>

<div id='scheduleLines' title='scheduleLines' class='searchable'>

## scheduleLines (الدفعات - Payments)
**Table Name:** MnInvoiceSchedulePaymentLine, **Join Column:** mnInvoice_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="scheduleLines.attachment">
<div class="cell" data-label="Property">scheduleLines.attachment</div>
<div class="cell" data-label="Column">attachment_id</div>
<div class="cell" data-label="Arabic">مرفق</div>
<div class="cell" data-label="English">Attachment</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/entities/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="scheduleLines.attachment1">
<div class="cell" data-label="Property">scheduleLines.attachment1</div>
<div class="cell" data-label="Column">attachment1_id</div>
<div class="cell" data-label="Arabic">مرفق 1</div>
<div class="cell" data-label="English">Attachment 1</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/entities/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="scheduleLines.b1">
<div class="cell" data-label="Property">scheduleLines.b1</div>
<div class="cell" data-label="Column">b1</div>
<div class="cell" data-label="Arabic">Boolean 1</div>
<div class="cell" data-label="English">Boolean 1</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="scheduleLines.b2">
<div class="cell" data-label="Property">scheduleLines.b2</div>
<div class="cell" data-label="Column">b2</div>
<div class="cell" data-label="Arabic">Boolean 2</div>
<div class="cell" data-label="English">Boolean 2</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="scheduleLines.b3">
<div class="cell" data-label="Property">scheduleLines.b3</div>
<div class="cell" data-label="Column">b3</div>
<div class="cell" data-label="Arabic">Boolean 3</div>
<div class="cell" data-label="English">Boolean 3</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="scheduleLines.date1">
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

<div class="row searchable" id="scheduleLines.selected">
<div class="cell" data-label="Property">scheduleLines.selected</div>
<div class="cell" data-label="Column">selected</div>
<div class="cell" data-label="Arabic">اختيار</div>
<div class="cell" data-label="English">Selected</div>
<div class="cell" data-label="Type">Boolean</div>

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


</div>

<div id='services' title='services' class='searchable'>

## services (الخدمات - Services)
**Table Name:** MnInvoiceSerivce, **Join Column:** mnInvoice_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="services.date1">
<div class="cell" data-label="Property">services.date1</div>
<div class="cell" data-label="Column">date1</div>
<div class="cell" data-label="Arabic">تـــاريخ 1</div>
<div class="cell" data-label="English">Date 1</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="services.date2">
<div class="cell" data-label="Property">services.date2</div>
<div class="cell" data-label="Column">date2</div>
<div class="cell" data-label="Arabic">تـــاريخ 2</div>
<div class="cell" data-label="English">Date 2</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="services.description1">
<div class="cell" data-label="Property">services.description1</div>
<div class="cell" data-label="Column">description1</div>
<div class="cell" data-label="Arabic">الوصف 1</div>
<div class="cell" data-label="English">description1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="services.description2">
<div class="cell" data-label="Property">services.description2</div>
<div class="cell" data-label="Column">description2</div>
<div class="cell" data-label="Arabic">الوصف 2</div>
<div class="cell" data-label="English">description2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="services.description3">
<div class="cell" data-label="Property">services.description3</div>
<div class="cell" data-label="Column">description3</div>
<div class="cell" data-label="Arabic">الوصف 3</div>
<div class="cell" data-label="English">description3</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="services.description4">
<div class="cell" data-label="Property">services.description4</div>
<div class="cell" data-label="Column">description4</div>
<div class="cell" data-label="Arabic">الوصف 4</div>
<div class="cell" data-label="English">description4</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="services.description5">
<div class="cell" data-label="Property">services.description5</div>
<div class="cell" data-label="Column">description5</div>
<div class="cell" data-label="Arabic">الوصف 5</div>
<div class="cell" data-label="English">description5</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="services.id">
<div class="cell" data-label="Property">services.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="services.item">
<div class="cell" data-label="Property">services.item</div>
<div class="cell" data-label="Column">item_id</div>
<div class="cell" data-label="Arabic">الصنف</div>
<div class="cell" data-label="English">Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/entities/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="services.lineNumber">
<div class="cell" data-label="Property">services.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="services.machine">
<div class="cell" data-label="Property">services.machine</div>
<div class="cell" data-label="Column">machine_id</div>
<div class="cell" data-label="Arabic">الالة</div>
<div class="cell" data-label="English">machine</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnMachine](/entities/crm-maintenance/MnMachine.md) 
</div>
</div>

<div class="row searchable" id="services.n1">
<div class="cell" data-label="Property">services.n1</div>
<div class="cell" data-label="Column">n1</div>
<div class="cell" data-label="Arabic">رقم 1</div>
<div class="cell" data-label="English">Number 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.n2">
<div class="cell" data-label="Property">services.n2</div>
<div class="cell" data-label="Column">n2</div>
<div class="cell" data-label="Arabic">رقم 2</div>
<div class="cell" data-label="English">Number 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.originDoc">
<div class="cell" data-label="Property">services.originDoc</div>
<div class="cell gen-ref-column" data-label="Column">originDocActualCode,  originDocCode,  originDocEntityType,  originDocId</div>
<div class="cell" data-label="Arabic"> # المستند</div>
<div class="cell" data-label="English"> Document #</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="services.price.custom">
<div class="cell" data-label="Property">services.price.custom</div>
<div class="cell" data-label="Column">custom</div>
<div class="cell" data-label="Arabic">مخصص</div>
<div class="cell" data-label="English">Custom</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.discount1.afterValue">
<div class="cell" data-label="Property">services.price.discount1.afterValue</div>
<div class="cell" data-label="Column">dis1AfterValue</div>
<div class="cell" data-label="Arabic">خصم 1 | صافي</div>
<div class="cell" data-label="English">Discount 1 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.discount1.maxNormalPercent">
<div class="cell" data-label="Property">services.price.discount1.maxNormalPercent</div>
<div class="cell" data-label="Column">dis1MaxNormalPercent</div>
<div class="cell" data-label="Arabic">خصم 1 | النسبة العادية</div>
<div class="cell" data-label="English">Discount 1 | Normal Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.discount1.percentage">
<div class="cell" data-label="Property">services.price.discount1.percentage</div>
<div class="cell" data-label="Column">dis1Percentage</div>
<div class="cell" data-label="Arabic">خصم 1 | %</div>
<div class="cell" data-label="English">Discount 1 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.discount1.value">
<div class="cell" data-label="Property">services.price.discount1.value</div>
<div class="cell" data-label="Column">dis1Value</div>
<div class="cell" data-label="Arabic">خصم 1 | قيمة</div>
<div class="cell" data-label="English">Discount 1 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.discount2.afterValue">
<div class="cell" data-label="Property">services.price.discount2.afterValue</div>
<div class="cell" data-label="Column">dis2AfterValue</div>
<div class="cell" data-label="Arabic">خصم 2 | صافي</div>
<div class="cell" data-label="English">Discount 2 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.discount2.maxNormalPercent">
<div class="cell" data-label="Property">services.price.discount2.maxNormalPercent</div>
<div class="cell" data-label="Column">dis2MaxNormalPercent</div>
<div class="cell" data-label="Arabic">خصم 2 | النسبة العادية</div>
<div class="cell" data-label="English">Discount 2 | Normal Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.discount2.percentage">
<div class="cell" data-label="Property">services.price.discount2.percentage</div>
<div class="cell" data-label="Column">dis2Percentage</div>
<div class="cell" data-label="Arabic">خصم 2 | %</div>
<div class="cell" data-label="English">Discount 2 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.discount2.value">
<div class="cell" data-label="Property">services.price.discount2.value</div>
<div class="cell" data-label="Column">dis2Value</div>
<div class="cell" data-label="Arabic">خصم 2 | قيمة</div>
<div class="cell" data-label="English">Discount 2 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.discount3.afterValue">
<div class="cell" data-label="Property">services.price.discount3.afterValue</div>
<div class="cell" data-label="Column">dis3AfterValue</div>
<div class="cell" data-label="Arabic">خصم 3 | صافي</div>
<div class="cell" data-label="English">Discount 3 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.discount3.maxNormalPercent">
<div class="cell" data-label="Property">services.price.discount3.maxNormalPercent</div>
<div class="cell" data-label="Column">dis3MaxNormalPercent</div>
<div class="cell" data-label="Arabic">خصم 3 | النسبة العادية</div>
<div class="cell" data-label="English">Discount 3 | Normal Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.discount3.percentage">
<div class="cell" data-label="Property">services.price.discount3.percentage</div>
<div class="cell" data-label="Column">dis3Percentage</div>
<div class="cell" data-label="Arabic">خصم 3 | %</div>
<div class="cell" data-label="English">Discount 3 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.discount3.value">
<div class="cell" data-label="Property">services.price.discount3.value</div>
<div class="cell" data-label="Column">dis3Value</div>
<div class="cell" data-label="Arabic">خصم 3 | قيمة</div>
<div class="cell" data-label="English">Discount 3 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.discount4.afterValue">
<div class="cell" data-label="Property">services.price.discount4.afterValue</div>
<div class="cell" data-label="Column">dis4AfterValue</div>
<div class="cell" data-label="Arabic">خصم 4 | صافي</div>
<div class="cell" data-label="English">Discount 4 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.discount4.maxNormalPercent">
<div class="cell" data-label="Property">services.price.discount4.maxNormalPercent</div>
<div class="cell" data-label="Column">dis4MaxNormalPercent</div>
<div class="cell" data-label="Arabic">خصم 4 | النسبة العادية</div>
<div class="cell" data-label="English">Discount 4 | Normal Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.discount4.percentage">
<div class="cell" data-label="Property">services.price.discount4.percentage</div>
<div class="cell" data-label="Column">dis4Percentage</div>
<div class="cell" data-label="Arabic">خصم 4 | %</div>
<div class="cell" data-label="English">Discount 4 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.discount4.value">
<div class="cell" data-label="Property">services.price.discount4.value</div>
<div class="cell" data-label="Column">dis4Value</div>
<div class="cell" data-label="Arabic">خصم 4 | قيمة</div>
<div class="cell" data-label="English">Discount 4 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.discount5.afterValue">
<div class="cell" data-label="Property">services.price.discount5.afterValue</div>
<div class="cell" data-label="Column">dis5AfterValue</div>
<div class="cell" data-label="Arabic">خصم 5 | صافي</div>
<div class="cell" data-label="English">Discount 5 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.discount5.maxNormalPercent">
<div class="cell" data-label="Property">services.price.discount5.maxNormalPercent</div>
<div class="cell" data-label="Column">dis5MaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.discount5.percentage">
<div class="cell" data-label="Property">services.price.discount5.percentage</div>
<div class="cell" data-label="Column">dis5Percentage</div>
<div class="cell" data-label="Arabic">خصم 5 | %</div>
<div class="cell" data-label="English">Discount 5 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.discount5.value">
<div class="cell" data-label="Property">services.price.discount5.value</div>
<div class="cell" data-label="Column">dis5Value</div>
<div class="cell" data-label="Arabic">خصم 5 | قيمة</div>
<div class="cell" data-label="English">Discount 5 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.discount6.afterValue">
<div class="cell" data-label="Property">services.price.discount6.afterValue</div>
<div class="cell" data-label="Column">dis6AfterValue</div>
<div class="cell" data-label="Arabic">خصم 6 | صافي</div>
<div class="cell" data-label="English">Discount 6 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.discount6.maxNormalPercent">
<div class="cell" data-label="Property">services.price.discount6.maxNormalPercent</div>
<div class="cell" data-label="Column">dis6MaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.discount6.percentage">
<div class="cell" data-label="Property">services.price.discount6.percentage</div>
<div class="cell" data-label="Column">dis6Percentage</div>
<div class="cell" data-label="Arabic">خصم 6 | %</div>
<div class="cell" data-label="English">Discount 6 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.discount6.value">
<div class="cell" data-label="Property">services.price.discount6.value</div>
<div class="cell" data-label="Column">dis6Value</div>
<div class="cell" data-label="Arabic">خصم 6 | قيمة</div>
<div class="cell" data-label="English">Discount 6 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.discount7.afterValue">
<div class="cell" data-label="Property">services.price.discount7.afterValue</div>
<div class="cell" data-label="Column">dis7AfterValue</div>
<div class="cell" data-label="Arabic">خصم 7 | صافي</div>
<div class="cell" data-label="English">Discount 7 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.discount7.maxNormalPercent">
<div class="cell" data-label="Property">services.price.discount7.maxNormalPercent</div>
<div class="cell" data-label="Column">dis7MaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.discount7.percentage">
<div class="cell" data-label="Property">services.price.discount7.percentage</div>
<div class="cell" data-label="Column">dis7Percentage</div>
<div class="cell" data-label="Arabic">خصم 7 | %</div>
<div class="cell" data-label="English">Discount 7 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.discount7.value">
<div class="cell" data-label="Property">services.price.discount7.value</div>
<div class="cell" data-label="Column">dis7Value</div>
<div class="cell" data-label="Arabic">خصم 7 | قيمة</div>
<div class="cell" data-label="English">Discount 7 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.discount8.afterValue">
<div class="cell" data-label="Property">services.price.discount8.afterValue</div>
<div class="cell" data-label="Column">dis8AfterValue</div>
<div class="cell" data-label="Arabic">خصم 8 | صافي</div>
<div class="cell" data-label="English">Discount 8 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.discount8.maxNormalPercent">
<div class="cell" data-label="Property">services.price.discount8.maxNormalPercent</div>
<div class="cell" data-label="Column">dis8MaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.discount8.percentage">
<div class="cell" data-label="Property">services.price.discount8.percentage</div>
<div class="cell" data-label="Column">dis8Percentage</div>
<div class="cell" data-label="Arabic">خصم 8 | %</div>
<div class="cell" data-label="English">Discount 8 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.discount8.value">
<div class="cell" data-label="Property">services.price.discount8.value</div>
<div class="cell" data-label="Column">dis8Value</div>
<div class="cell" data-label="Arabic">خصم 8 | قيمة</div>
<div class="cell" data-label="English">Discount 8 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.headerDicount.afterValue">
<div class="cell" data-label="Property">services.price.headerDicount.afterValue</div>
<div class="cell" data-label="Column">hdrAfterValue</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.headerDicount.maxNormalPercent">
<div class="cell" data-label="Property">services.price.headerDicount.maxNormalPercent</div>
<div class="cell" data-label="Column">hdrMaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.headerDicount.percentage">
<div class="cell" data-label="Property">services.price.headerDicount.percentage</div>
<div class="cell" data-label="Column">hdrPercentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.headerDicount.value">
<div class="cell" data-label="Property">services.price.headerDicount.value</div>
<div class="cell" data-label="Column">hdrValue</div>
<div class="cell" data-label="Arabic">القيمة</div>
<div class="cell" data-label="English">Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.netValue">
<div class="cell" data-label="Property">services.price.netValue</div>
<div class="cell" data-label="Column">netValue</div>
<div class="cell" data-label="Arabic">الصافي</div>
<div class="cell" data-label="English">Net value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.price">
<div class="cell" data-label="Property">services.price.price</div>
<div class="cell" data-label="Column">price</div>
<div class="cell" data-label="Arabic">الأسعار | السعر الكلي</div>
<div class="cell" data-label="English">Prices | total price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.tax1.afterValue">
<div class="cell" data-label="Property">services.price.tax1.afterValue</div>
<div class="cell" data-label="Column">tax1AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | الصافي</div>
<div class="cell" data-label="English">Tax | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.tax1.maxNormalPercent">
<div class="cell" data-label="Property">services.price.tax1.maxNormalPercent</div>
<div class="cell" data-label="Column">tax1MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | %</div>
<div class="cell" data-label="English">Item Tax | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.tax1.percentage">
<div class="cell" data-label="Property">services.price.tax1.percentage</div>
<div class="cell" data-label="Column">tax1Percentage</div>
<div class="cell" data-label="Arabic">قيمة إضافية 1</div>
<div class="cell" data-label="English">Tax 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.tax1.value">
<div class="cell" data-label="Property">services.price.tax1.value</div>
<div class="cell" data-label="Column">tax1Value</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | القيمة</div>
<div class="cell" data-label="English">Tax value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.tax2.afterValue">
<div class="cell" data-label="Property">services.price.tax2.afterValue</div>
<div class="cell" data-label="Column">tax2AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | الصافي</div>
<div class="cell" data-label="English">Tax 2 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.tax2.maxNormalPercent">
<div class="cell" data-label="Property">services.price.tax2.maxNormalPercent</div>
<div class="cell" data-label="Column">tax2MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | %</div>
<div class="cell" data-label="English">Tax 2 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.tax2.percentage">
<div class="cell" data-label="Property">services.price.tax2.percentage</div>
<div class="cell" data-label="Column">tax2Percentage</div>
<div class="cell" data-label="Arabic">قيمة إضافية 2</div>
<div class="cell" data-label="English">Tax 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.tax2.value">
<div class="cell" data-label="Property">services.price.tax2.value</div>
<div class="cell" data-label="Column">tax2Value</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | القيمة</div>
<div class="cell" data-label="English">Tax 2 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.tax3.afterValue">
<div class="cell" data-label="Property">services.price.tax3.afterValue</div>
<div class="cell" data-label="Column">tax3AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة 3 | الصافي</div>
<div class="cell" data-label="English">Tax 3 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.tax3.maxNormalPercent">
<div class="cell" data-label="Property">services.price.tax3.maxNormalPercent</div>
<div class="cell" data-label="Column">tax3MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة 3 | %</div>
<div class="cell" data-label="English">Tax 3 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.tax3.percentage">
<div class="cell" data-label="Property">services.price.tax3.percentage</div>
<div class="cell" data-label="Column">tax3Percentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.tax3.value">
<div class="cell" data-label="Property">services.price.tax3.value</div>
<div class="cell" data-label="Column">tax3Value</div>
<div class="cell" data-label="Arabic">ضريبة 3 | القيمة</div>
<div class="cell" data-label="English">Tax 3 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.tax4.afterValue">
<div class="cell" data-label="Property">services.price.tax4.afterValue</div>
<div class="cell" data-label="Column">tax4AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة 4 | الصافي</div>
<div class="cell" data-label="English">Tax 4 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.tax4.maxNormalPercent">
<div class="cell" data-label="Property">services.price.tax4.maxNormalPercent</div>
<div class="cell" data-label="Column">tax4MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة 4 | %</div>
<div class="cell" data-label="English">Tax 4 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.tax4.percentage">
<div class="cell" data-label="Property">services.price.tax4.percentage</div>
<div class="cell" data-label="Column">tax4Percentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.tax4.value">
<div class="cell" data-label="Property">services.price.tax4.value</div>
<div class="cell" data-label="Column">tax4Value</div>
<div class="cell" data-label="Arabic">ضريبة 4 | القيمة</div>
<div class="cell" data-label="English">Tax 4 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.totalCashShare">
<div class="cell" data-label="Property">services.price.totalCashShare</div>
<div class="cell" data-label="Column">totalCashShare</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.totalPaymentMethodShare">
<div class="cell" data-label="Property">services.price.totalPaymentMethodShare</div>
<div class="cell" data-label="Column">totalPaymentMethodShare</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.price.unitPrice">
<div class="cell" data-label="Property">services.price.unitPrice</div>
<div class="cell" data-label="Column">unitPrice</div>
<div class="cell" data-label="Arabic">سعر الوحدة</div>
<div class="cell" data-label="English">Prices | Unit price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="services.quantity">
<div class="cell" data-label="Property">services.quantity</div>
<div class="cell" data-label="Column">quantity</div>
<div class="cell" data-label="Arabic">الكمية</div>
<div class="cell" data-label="English">Quantity</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="services.service">
<div class="cell" data-label="Property">services.service</div>
<div class="cell" data-label="Column">service_id</div>
<div class="cell" data-label="Arabic">الخدمة</div>
<div class="cell" data-label="English">Service</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnMaintenanceService](/entities/crm-maintenance/MnMaintenanceService.md) 
</div>
</div>

<div class="row searchable" id="services.sourceLineId">
<div class="cell" data-label="Property">services.sourceLineId</div>
<div class="cell" data-label="Column">sourceLineId</div>
<div class="cell" data-label="Arabic">معرف سطر المصدر</div>
<div class="cell" data-label="English">Source Line Id</div>
<div class="cell" data-label="Type">ID</div>

</div>


</div>

<div id='spareParts' title='spareParts' class='searchable'>

## spareParts (قطع الغيار - Spare Parts)
**Table Name:** MnInvoiceSparePart, **Join Column:** mnInvoice_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="spareParts.activePerc">
<div class="cell" data-label="Property">spareParts.activePerc</div>
<div class="cell" data-label="Column">activePerc</div>
<div class="cell" data-label="Arabic">النسبة الفعالة</div>
<div class="cell" data-label="English">Active Percentage</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="spareParts.box">
<div class="cell" data-label="Property">spareParts.box</div>
<div class="cell" data-label="Column">box</div>
<div class="cell" data-label="Arabic">صندوق</div>
<div class="cell" data-label="English">Box</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="spareParts.color">
<div class="cell" data-label="Property">spareParts.color</div>
<div class="cell" data-label="Column">color</div>
<div class="cell" data-label="Arabic">اللون</div>
<div class="cell" data-label="English">Color</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="spareParts.currencyRate">
<div class="cell" data-label="Property">spareParts.currencyRate</div>
<div class="cell" data-label="Column">currencyRate</div>
<div class="cell" data-label="Arabic">المعدل</div>
<div class="cell" data-label="English">Currency Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.date1">
<div class="cell" data-label="Property">spareParts.date1</div>
<div class="cell" data-label="Column">date1</div>
<div class="cell" data-label="Arabic">تـــاريخ 1</div>
<div class="cell" data-label="English">Date 1</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="spareParts.date2">
<div class="cell" data-label="Property">spareParts.date2</div>
<div class="cell" data-label="Column">date2</div>
<div class="cell" data-label="Arabic">تـــاريخ 2</div>
<div class="cell" data-label="English">Date 2</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="spareParts.description1">
<div class="cell" data-label="Property">spareParts.description1</div>
<div class="cell" data-label="Column">description1</div>
<div class="cell" data-label="Arabic">الوصف 1</div>
<div class="cell" data-label="English">description1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="spareParts.description2">
<div class="cell" data-label="Property">spareParts.description2</div>
<div class="cell" data-label="Column">description2</div>
<div class="cell" data-label="Arabic">الوصف 2</div>
<div class="cell" data-label="English">description2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="spareParts.description3">
<div class="cell" data-label="Property">spareParts.description3</div>
<div class="cell" data-label="Column">description3</div>
<div class="cell" data-label="Arabic">الوصف 3</div>
<div class="cell" data-label="English">description3</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="spareParts.description4">
<div class="cell" data-label="Property">spareParts.description4</div>
<div class="cell" data-label="Column">description4</div>
<div class="cell" data-label="Arabic">الوصف 4</div>
<div class="cell" data-label="English">description4</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="spareParts.description5">
<div class="cell" data-label="Property">spareParts.description5</div>
<div class="cell" data-label="Column">description5</div>
<div class="cell" data-label="Arabic">الوصف 5</div>
<div class="cell" data-label="English">description5</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="spareParts.foreignCurrency">
<div class="cell" data-label="Property">spareParts.foreignCurrency</div>
<div class="cell" data-label="Column">foreignCurrency_id</div>
<div class="cell" data-label="Arabic">العملة الأجنبية</div>
<div class="cell" data-label="English">Foreign Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/entities/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="spareParts.foreignUnitPrice">
<div class="cell" data-label="Property">spareParts.foreignUnitPrice</div>
<div class="cell" data-label="Column">foreignUnitPrice</div>
<div class="cell" data-label="Arabic">سعر الوحدة بالعملة الأجنبية</div>
<div class="cell" data-label="English">Foreign Unit Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.id">
<div class="cell" data-label="Property">spareParts.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="spareParts.inactivePerc">
<div class="cell" data-label="Property">spareParts.inactivePerc</div>
<div class="cell" data-label="Column">inactivePerc</div>
<div class="cell" data-label="Arabic">النسبة الغير فعالة</div>
<div class="cell" data-label="English">Inactive Percentage</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="spareParts.lineNumber">
<div class="cell" data-label="Property">spareParts.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="spareParts.location">
<div class="cell" data-label="Property">spareParts.location</div>
<div class="cell" data-label="Column">location_id</div>
<div class="cell" data-label="Arabic">الموقع المخزني</div>
<div class="cell" data-label="English">Location</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Locator](/entities/supplychain/Locator.md) 
</div>
</div>

<div class="row searchable" id="spareParts.lotId">
<div class="cell" data-label="Property">spareParts.lotId</div>
<div class="cell" data-label="Column">lotId</div>
<div class="cell" data-label="Arabic">كود الشحنة</div>
<div class="cell" data-label="English">Lot ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="spareParts.machine">
<div class="cell" data-label="Property">spareParts.machine</div>
<div class="cell" data-label="Column">machine_id</div>
<div class="cell" data-label="Arabic">الالة</div>
<div class="cell" data-label="English">machine</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnMachine](/entities/crm-maintenance/MnMachine.md) 
</div>
</div>

<div class="row searchable" id="spareParts.measures">
<div class="cell" data-label="Property">spareParts.measures</div>
<div class="cell" data-label="Column">measures</div>
<div class="cell" data-label="Arabic">الأبعاد</div>
<div class="cell" data-label="English">Measures</div>
<div class="cell" data-label="Type">Measures</div>

</div>

<div class="row searchable" id="spareParts.n1">
<div class="cell" data-label="Property">spareParts.n1</div>
<div class="cell" data-label="Column">n1</div>
<div class="cell" data-label="Arabic">رقم 1</div>
<div class="cell" data-label="English">Number 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.n2">
<div class="cell" data-label="Property">spareParts.n2</div>
<div class="cell" data-label="Column">n2</div>
<div class="cell" data-label="Arabic">رقم 2</div>
<div class="cell" data-label="English">Number 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.originDoc">
<div class="cell" data-label="Property">spareParts.originDoc</div>
<div class="cell gen-ref-column" data-label="Column">originDocActualCode,  originDocCode,  originDocEntityType,  originDocId</div>
<div class="cell" data-label="Arabic"> # المستند</div>
<div class="cell" data-label="English"> Document #</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="spareParts.price.custom">
<div class="cell" data-label="Property">spareParts.price.custom</div>
<div class="cell" data-label="Column">custom</div>
<div class="cell" data-label="Arabic">مخصص</div>
<div class="cell" data-label="English">Custom</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.discount1.afterValue">
<div class="cell" data-label="Property">spareParts.price.discount1.afterValue</div>
<div class="cell" data-label="Column">dis1AfterValue</div>
<div class="cell" data-label="Arabic">خصم 1 | صافي</div>
<div class="cell" data-label="English">Discount 1 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.discount1.maxNormalPercent">
<div class="cell" data-label="Property">spareParts.price.discount1.maxNormalPercent</div>
<div class="cell" data-label="Column">dis1MaxNormalPercent</div>
<div class="cell" data-label="Arabic">خصم 1 | النسبة العادية</div>
<div class="cell" data-label="English">Discount 1 | Normal Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.discount1.percentage">
<div class="cell" data-label="Property">spareParts.price.discount1.percentage</div>
<div class="cell" data-label="Column">dis1Percentage</div>
<div class="cell" data-label="Arabic">خصم 1 | %</div>
<div class="cell" data-label="English">Discount 1 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.discount1.value">
<div class="cell" data-label="Property">spareParts.price.discount1.value</div>
<div class="cell" data-label="Column">dis1Value</div>
<div class="cell" data-label="Arabic">خصم 1 | قيمة</div>
<div class="cell" data-label="English">Discount 1 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.discount2.afterValue">
<div class="cell" data-label="Property">spareParts.price.discount2.afterValue</div>
<div class="cell" data-label="Column">dis2AfterValue</div>
<div class="cell" data-label="Arabic">خصم 2 | صافي</div>
<div class="cell" data-label="English">Discount 2 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.discount2.maxNormalPercent">
<div class="cell" data-label="Property">spareParts.price.discount2.maxNormalPercent</div>
<div class="cell" data-label="Column">dis2MaxNormalPercent</div>
<div class="cell" data-label="Arabic">خصم 2 | النسبة العادية</div>
<div class="cell" data-label="English">Discount 2 | Normal Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.discount2.percentage">
<div class="cell" data-label="Property">spareParts.price.discount2.percentage</div>
<div class="cell" data-label="Column">dis2Percentage</div>
<div class="cell" data-label="Arabic">خصم 2 | %</div>
<div class="cell" data-label="English">Discount 2 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.discount2.value">
<div class="cell" data-label="Property">spareParts.price.discount2.value</div>
<div class="cell" data-label="Column">dis2Value</div>
<div class="cell" data-label="Arabic">خصم 2 | قيمة</div>
<div class="cell" data-label="English">Discount 2 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.discount3.afterValue">
<div class="cell" data-label="Property">spareParts.price.discount3.afterValue</div>
<div class="cell" data-label="Column">dis3AfterValue</div>
<div class="cell" data-label="Arabic">خصم 3 | صافي</div>
<div class="cell" data-label="English">Discount 3 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.discount3.maxNormalPercent">
<div class="cell" data-label="Property">spareParts.price.discount3.maxNormalPercent</div>
<div class="cell" data-label="Column">dis3MaxNormalPercent</div>
<div class="cell" data-label="Arabic">خصم 3 | النسبة العادية</div>
<div class="cell" data-label="English">Discount 3 | Normal Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.discount3.percentage">
<div class="cell" data-label="Property">spareParts.price.discount3.percentage</div>
<div class="cell" data-label="Column">dis3Percentage</div>
<div class="cell" data-label="Arabic">خصم 3 | %</div>
<div class="cell" data-label="English">Discount 3 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.discount3.value">
<div class="cell" data-label="Property">spareParts.price.discount3.value</div>
<div class="cell" data-label="Column">dis3Value</div>
<div class="cell" data-label="Arabic">خصم 3 | قيمة</div>
<div class="cell" data-label="English">Discount 3 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.discount4.afterValue">
<div class="cell" data-label="Property">spareParts.price.discount4.afterValue</div>
<div class="cell" data-label="Column">dis4AfterValue</div>
<div class="cell" data-label="Arabic">خصم 4 | صافي</div>
<div class="cell" data-label="English">Discount 4 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.discount4.maxNormalPercent">
<div class="cell" data-label="Property">spareParts.price.discount4.maxNormalPercent</div>
<div class="cell" data-label="Column">dis4MaxNormalPercent</div>
<div class="cell" data-label="Arabic">خصم 4 | النسبة العادية</div>
<div class="cell" data-label="English">Discount 4 | Normal Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.discount4.percentage">
<div class="cell" data-label="Property">spareParts.price.discount4.percentage</div>
<div class="cell" data-label="Column">dis4Percentage</div>
<div class="cell" data-label="Arabic">خصم 4 | %</div>
<div class="cell" data-label="English">Discount 4 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.discount4.value">
<div class="cell" data-label="Property">spareParts.price.discount4.value</div>
<div class="cell" data-label="Column">dis4Value</div>
<div class="cell" data-label="Arabic">خصم 4 | قيمة</div>
<div class="cell" data-label="English">Discount 4 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.discount5.afterValue">
<div class="cell" data-label="Property">spareParts.price.discount5.afterValue</div>
<div class="cell" data-label="Column">dis5AfterValue</div>
<div class="cell" data-label="Arabic">خصم 5 | صافي</div>
<div class="cell" data-label="English">Discount 5 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.discount5.maxNormalPercent">
<div class="cell" data-label="Property">spareParts.price.discount5.maxNormalPercent</div>
<div class="cell" data-label="Column">dis5MaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.discount5.percentage">
<div class="cell" data-label="Property">spareParts.price.discount5.percentage</div>
<div class="cell" data-label="Column">dis5Percentage</div>
<div class="cell" data-label="Arabic">خصم 5 | %</div>
<div class="cell" data-label="English">Discount 5 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.discount5.value">
<div class="cell" data-label="Property">spareParts.price.discount5.value</div>
<div class="cell" data-label="Column">dis5Value</div>
<div class="cell" data-label="Arabic">خصم 5 | قيمة</div>
<div class="cell" data-label="English">Discount 5 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.discount6.afterValue">
<div class="cell" data-label="Property">spareParts.price.discount6.afterValue</div>
<div class="cell" data-label="Column">dis6AfterValue</div>
<div class="cell" data-label="Arabic">خصم 6 | صافي</div>
<div class="cell" data-label="English">Discount 6 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.discount6.maxNormalPercent">
<div class="cell" data-label="Property">spareParts.price.discount6.maxNormalPercent</div>
<div class="cell" data-label="Column">dis6MaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.discount6.percentage">
<div class="cell" data-label="Property">spareParts.price.discount6.percentage</div>
<div class="cell" data-label="Column">dis6Percentage</div>
<div class="cell" data-label="Arabic">خصم 6 | %</div>
<div class="cell" data-label="English">Discount 6 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.discount6.value">
<div class="cell" data-label="Property">spareParts.price.discount6.value</div>
<div class="cell" data-label="Column">dis6Value</div>
<div class="cell" data-label="Arabic">خصم 6 | قيمة</div>
<div class="cell" data-label="English">Discount 6 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.discount7.afterValue">
<div class="cell" data-label="Property">spareParts.price.discount7.afterValue</div>
<div class="cell" data-label="Column">dis7AfterValue</div>
<div class="cell" data-label="Arabic">خصم 7 | صافي</div>
<div class="cell" data-label="English">Discount 7 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.discount7.maxNormalPercent">
<div class="cell" data-label="Property">spareParts.price.discount7.maxNormalPercent</div>
<div class="cell" data-label="Column">dis7MaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.discount7.percentage">
<div class="cell" data-label="Property">spareParts.price.discount7.percentage</div>
<div class="cell" data-label="Column">dis7Percentage</div>
<div class="cell" data-label="Arabic">خصم 7 | %</div>
<div class="cell" data-label="English">Discount 7 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.discount7.value">
<div class="cell" data-label="Property">spareParts.price.discount7.value</div>
<div class="cell" data-label="Column">dis7Value</div>
<div class="cell" data-label="Arabic">خصم 7 | قيمة</div>
<div class="cell" data-label="English">Discount 7 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.discount8.afterValue">
<div class="cell" data-label="Property">spareParts.price.discount8.afterValue</div>
<div class="cell" data-label="Column">dis8AfterValue</div>
<div class="cell" data-label="Arabic">خصم 8 | صافي</div>
<div class="cell" data-label="English">Discount 8 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.discount8.maxNormalPercent">
<div class="cell" data-label="Property">spareParts.price.discount8.maxNormalPercent</div>
<div class="cell" data-label="Column">dis8MaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.discount8.percentage">
<div class="cell" data-label="Property">spareParts.price.discount8.percentage</div>
<div class="cell" data-label="Column">dis8Percentage</div>
<div class="cell" data-label="Arabic">خصم 8 | %</div>
<div class="cell" data-label="English">Discount 8 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.discount8.value">
<div class="cell" data-label="Property">spareParts.price.discount8.value</div>
<div class="cell" data-label="Column">dis8Value</div>
<div class="cell" data-label="Arabic">خصم 8 | قيمة</div>
<div class="cell" data-label="English">Discount 8 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.headerDicount.afterValue">
<div class="cell" data-label="Property">spareParts.price.headerDicount.afterValue</div>
<div class="cell" data-label="Column">hdrAfterValue</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.headerDicount.maxNormalPercent">
<div class="cell" data-label="Property">spareParts.price.headerDicount.maxNormalPercent</div>
<div class="cell" data-label="Column">hdrMaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.headerDicount.percentage">
<div class="cell" data-label="Property">spareParts.price.headerDicount.percentage</div>
<div class="cell" data-label="Column">hdrPercentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.headerDicount.value">
<div class="cell" data-label="Property">spareParts.price.headerDicount.value</div>
<div class="cell" data-label="Column">hdrValue</div>
<div class="cell" data-label="Arabic">القيمة</div>
<div class="cell" data-label="English">Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.netValue">
<div class="cell" data-label="Property">spareParts.price.netValue</div>
<div class="cell" data-label="Column">netValue</div>
<div class="cell" data-label="Arabic">الصافي</div>
<div class="cell" data-label="English">Net value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.price">
<div class="cell" data-label="Property">spareParts.price.price</div>
<div class="cell" data-label="Column">price</div>
<div class="cell" data-label="Arabic">الأسعار | السعر الكلي</div>
<div class="cell" data-label="English">Prices | total price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.tax1.afterValue">
<div class="cell" data-label="Property">spareParts.price.tax1.afterValue</div>
<div class="cell" data-label="Column">tax1AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | الصافي</div>
<div class="cell" data-label="English">Tax | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.tax1.maxNormalPercent">
<div class="cell" data-label="Property">spareParts.price.tax1.maxNormalPercent</div>
<div class="cell" data-label="Column">tax1MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | %</div>
<div class="cell" data-label="English">Item Tax | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.tax1.percentage">
<div class="cell" data-label="Property">spareParts.price.tax1.percentage</div>
<div class="cell" data-label="Column">tax1Percentage</div>
<div class="cell" data-label="Arabic">قيمة إضافية 1</div>
<div class="cell" data-label="English">Tax 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.tax1.value">
<div class="cell" data-label="Property">spareParts.price.tax1.value</div>
<div class="cell" data-label="Column">tax1Value</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | القيمة</div>
<div class="cell" data-label="English">Tax value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.tax2.afterValue">
<div class="cell" data-label="Property">spareParts.price.tax2.afterValue</div>
<div class="cell" data-label="Column">tax2AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | الصافي</div>
<div class="cell" data-label="English">Tax 2 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.tax2.maxNormalPercent">
<div class="cell" data-label="Property">spareParts.price.tax2.maxNormalPercent</div>
<div class="cell" data-label="Column">tax2MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | %</div>
<div class="cell" data-label="English">Tax 2 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.tax2.percentage">
<div class="cell" data-label="Property">spareParts.price.tax2.percentage</div>
<div class="cell" data-label="Column">tax2Percentage</div>
<div class="cell" data-label="Arabic">قيمة إضافية 2</div>
<div class="cell" data-label="English">Tax 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.tax2.value">
<div class="cell" data-label="Property">spareParts.price.tax2.value</div>
<div class="cell" data-label="Column">tax2Value</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | القيمة</div>
<div class="cell" data-label="English">Tax 2 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.tax3.afterValue">
<div class="cell" data-label="Property">spareParts.price.tax3.afterValue</div>
<div class="cell" data-label="Column">tax3AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة 3 | الصافي</div>
<div class="cell" data-label="English">Tax 3 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.tax3.maxNormalPercent">
<div class="cell" data-label="Property">spareParts.price.tax3.maxNormalPercent</div>
<div class="cell" data-label="Column">tax3MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة 3 | %</div>
<div class="cell" data-label="English">Tax 3 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.tax3.percentage">
<div class="cell" data-label="Property">spareParts.price.tax3.percentage</div>
<div class="cell" data-label="Column">tax3Percentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.tax3.value">
<div class="cell" data-label="Property">spareParts.price.tax3.value</div>
<div class="cell" data-label="Column">tax3Value</div>
<div class="cell" data-label="Arabic">ضريبة 3 | القيمة</div>
<div class="cell" data-label="English">Tax 3 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.tax4.afterValue">
<div class="cell" data-label="Property">spareParts.price.tax4.afterValue</div>
<div class="cell" data-label="Column">tax4AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة 4 | الصافي</div>
<div class="cell" data-label="English">Tax 4 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.tax4.maxNormalPercent">
<div class="cell" data-label="Property">spareParts.price.tax4.maxNormalPercent</div>
<div class="cell" data-label="Column">tax4MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة 4 | %</div>
<div class="cell" data-label="English">Tax 4 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.tax4.percentage">
<div class="cell" data-label="Property">spareParts.price.tax4.percentage</div>
<div class="cell" data-label="Column">tax4Percentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.tax4.value">
<div class="cell" data-label="Property">spareParts.price.tax4.value</div>
<div class="cell" data-label="Column">tax4Value</div>
<div class="cell" data-label="Arabic">ضريبة 4 | القيمة</div>
<div class="cell" data-label="English">Tax 4 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.totalCashShare">
<div class="cell" data-label="Property">spareParts.price.totalCashShare</div>
<div class="cell" data-label="Column">totalCashShare</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.totalPaymentMethodShare">
<div class="cell" data-label="Property">spareParts.price.totalPaymentMethodShare</div>
<div class="cell" data-label="Column">totalPaymentMethodShare</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.price.unitPrice">
<div class="cell" data-label="Property">spareParts.price.unitPrice</div>
<div class="cell" data-label="Column">unitPrice</div>
<div class="cell" data-label="Arabic">سعر الوحدة</div>
<div class="cell" data-label="English">Prices | Unit price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.quantity">
<div class="cell" data-label="Property">spareParts.quantity</div>
<div class="cell" data-label="Column">quantity</div>
<div class="cell" data-label="Arabic">الكمية</div>
<div class="cell" data-label="English">Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="spareParts.ref1">
<div class="cell" data-label="Property">spareParts.ref1</div>
<div class="cell gen-ref-column" data-label="Column">ref1ActualCode,  ref1Code,  ref1EntityType,  ref1Id</div>
<div class="cell" data-label="Arabic">مرجع 1</div>
<div class="cell" data-label="English">Reference 1</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="spareParts.ref2">
<div class="cell" data-label="Property">spareParts.ref2</div>
<div class="cell gen-ref-column" data-label="Column">ref2ActualCode,  ref2Code,  ref2EntityType,  ref2Id</div>
<div class="cell" data-label="Arabic">مرجع 2</div>
<div class="cell" data-label="English">Reference 2</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="spareParts.ref3">
<div class="cell" data-label="Property">spareParts.ref3</div>
<div class="cell gen-ref-column" data-label="Column">ref3ActualCode,  ref3Code,  ref3EntityType,  ref3Id</div>
<div class="cell" data-label="Arabic">مرجع 3</div>
<div class="cell" data-label="English">Reference 3</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="spareParts.ref4">
<div class="cell" data-label="Property">spareParts.ref4</div>
<div class="cell gen-ref-column" data-label="Column">ref4ActualCode,  ref4Code,  ref4EntityType,  ref4Id</div>
<div class="cell" data-label="Arabic">مرجع 4</div>
<div class="cell" data-label="English">Reference 4</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="spareParts.ref5">
<div class="cell" data-label="Property">spareParts.ref5</div>
<div class="cell gen-ref-column" data-label="Column">ref5ActualCode,  ref5Code,  ref5EntityType,  ref5Id</div>
<div class="cell" data-label="Arabic">مرجع 5</div>
<div class="cell" data-label="English">Reference 5</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="spareParts.remarks">
<div class="cell" data-label="Property">spareParts.remarks</div>
<div class="cell" data-label="Column">remarks</div>
<div class="cell" data-label="Arabic">ملاحظات</div>
<div class="cell" data-label="English">Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="spareParts.revisionId">
<div class="cell" data-label="Property">spareParts.revisionId</div>
<div class="cell" data-label="Column">revisionId</div>
<div class="cell" data-label="Arabic">الإصدار</div>
<div class="cell" data-label="English">ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="spareParts.secondSerial">
<div class="cell" data-label="Property">spareParts.secondSerial</div>
<div class="cell" data-label="Column">secondSerial</div>
<div class="cell" data-label="Arabic">الرقم المسلسل الثاني</div>
<div class="cell" data-label="English">Second Serial</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="spareParts.serialNumber">
<div class="cell" data-label="Property">spareParts.serialNumber</div>
<div class="cell" data-label="Column">serialNumber</div>
<div class="cell" data-label="Arabic">الرقم المسلسل</div>
<div class="cell" data-label="English">Serial Number</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="spareParts.size">
<div class="cell" data-label="Property">spareParts.size</div>
<div class="cell" data-label="Column">size</div>
<div class="cell" data-label="Arabic">المقاس</div>
<div class="cell" data-label="English">Size</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="spareParts.sourceLineId">
<div class="cell" data-label="Property">spareParts.sourceLineId</div>
<div class="cell" data-label="Column">sourceLineId</div>
<div class="cell" data-label="Arabic">معرف سطر المصدر</div>
<div class="cell" data-label="English">Source Line Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="spareParts.sparePart">
<div class="cell" data-label="Property">spareParts.sparePart</div>
<div class="cell" data-label="Column">sparePart_id</div>
<div class="cell" data-label="Arabic">قطعة غيار</div>
<div class="cell" data-label="English">Spare Part</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/entities/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="spareParts.subItem">
<div class="cell" data-label="Property">spareParts.subItem</div>
<div class="cell" data-label="Column">subItem_id</div>
<div class="cell" data-label="Arabic"> صنف فرعى</div>
<div class="cell" data-label="English"> SubItem</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SubItem](/entities/srvcenter-subitems/SubItem.md) 
</div>
</div>

<div class="row searchable" id="spareParts.uom">
<div class="cell" data-label="Property">spareParts.uom</div>
<div class="cell" data-label="Column">uom_id</div>
<div class="cell" data-label="Arabic">الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/entities/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="spareParts.warehouse">
<div class="cell" data-label="Property">spareParts.warehouse</div>
<div class="cell" data-label="Column">warehouse_id</div>
<div class="cell" data-label="Arabic">المخزن</div>
<div class="cell" data-label="English">Warehouse</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/entities/supplychain/Warehouse.md) 
</div>
</div>


</div>

<div id='technicians' title='technicians' class='searchable'>

## technicians (الفنين - Technicians)
**Table Name:** MnInvoiceTechnician, **Join Column:** mnInvoice_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="technicians.date1">
<div class="cell" data-label="Property">technicians.date1</div>
<div class="cell" data-label="Column">date1</div>
<div class="cell" data-label="Arabic">تـــاريخ 1</div>
<div class="cell" data-label="English">Date 1</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="technicians.date2">
<div class="cell" data-label="Property">technicians.date2</div>
<div class="cell" data-label="Column">date2</div>
<div class="cell" data-label="Arabic">تـــاريخ 2</div>
<div class="cell" data-label="English">Date 2</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="technicians.description1">
<div class="cell" data-label="Property">technicians.description1</div>
<div class="cell" data-label="Column">description1</div>
<div class="cell" data-label="Arabic">الوصف 1</div>
<div class="cell" data-label="English">description1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="technicians.description2">
<div class="cell" data-label="Property">technicians.description2</div>
<div class="cell" data-label="Column">description2</div>
<div class="cell" data-label="Arabic">الوصف 2</div>
<div class="cell" data-label="English">description2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="technicians.description3">
<div class="cell" data-label="Property">technicians.description3</div>
<div class="cell" data-label="Column">description3</div>
<div class="cell" data-label="Arabic">الوصف 3</div>
<div class="cell" data-label="English">description3</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="technicians.description4">
<div class="cell" data-label="Property">technicians.description4</div>
<div class="cell" data-label="Column">description4</div>
<div class="cell" data-label="Arabic">الوصف 4</div>
<div class="cell" data-label="English">description4</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="technicians.description5">
<div class="cell" data-label="Property">technicians.description5</div>
<div class="cell" data-label="Column">description5</div>
<div class="cell" data-label="Arabic">الوصف 5</div>
<div class="cell" data-label="English">description5</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="technicians.id">
<div class="cell" data-label="Property">technicians.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="technicians.lineNumber">
<div class="cell" data-label="Property">technicians.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="technicians.n1">
<div class="cell" data-label="Property">technicians.n1</div>
<div class="cell" data-label="Column">n1</div>
<div class="cell" data-label="Arabic">رقم 1</div>
<div class="cell" data-label="English">Number 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="technicians.n2">
<div class="cell" data-label="Property">technicians.n2</div>
<div class="cell" data-label="Column">n2</div>
<div class="cell" data-label="Arabic">رقم 2</div>
<div class="cell" data-label="English">Number 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="technicians.originDoc">
<div class="cell" data-label="Property">technicians.originDoc</div>
<div class="cell gen-ref-column" data-label="Column">originDocActualCode,  originDocCode,  originDocEntityType,  originDocId</div>
<div class="cell" data-label="Arabic"> # المستند</div>
<div class="cell" data-label="English"> Document #</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="technicians.technician">
<div class="cell" data-label="Property">technicians.technician</div>
<div class="cell" data-label="Column">technician_id</div>
<div class="cell" data-label="Arabic">الفني</div>
<div class="cell" data-label="English">Technician</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/entities/basic/Employee.md) 
</div>
</div>

<div class="row searchable" id="technicians.technicianReward">
<div class="cell" data-label="Property">technicians.technicianReward</div>
<div class="cell" data-label="Column">technicianReward</div>
<div class="cell" data-label="Arabic">مكأفاة الفني</div>
<div class="cell" data-label="English">Technician Reward</div>
<div class="cell" data-label="Type">Decimal</div>

</div>


</div>

<div id='tools' title='tools' class='searchable'>

## tools (العِدد - Tools)
**Table Name:** MnInvoiceTool, **Join Column:** mnInvoice_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="tools.date1">
<div class="cell" data-label="Property">tools.date1</div>
<div class="cell" data-label="Column">date1</div>
<div class="cell" data-label="Arabic">تـــاريخ 1</div>
<div class="cell" data-label="English">Date 1</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="tools.date2">
<div class="cell" data-label="Property">tools.date2</div>
<div class="cell" data-label="Column">date2</div>
<div class="cell" data-label="Arabic">تـــاريخ 2</div>
<div class="cell" data-label="English">Date 2</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="tools.description1">
<div class="cell" data-label="Property">tools.description1</div>
<div class="cell" data-label="Column">description1</div>
<div class="cell" data-label="Arabic">الوصف 1</div>
<div class="cell" data-label="English">description1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="tools.description2">
<div class="cell" data-label="Property">tools.description2</div>
<div class="cell" data-label="Column">description2</div>
<div class="cell" data-label="Arabic">الوصف 2</div>
<div class="cell" data-label="English">description2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="tools.description3">
<div class="cell" data-label="Property">tools.description3</div>
<div class="cell" data-label="Column">description3</div>
<div class="cell" data-label="Arabic">الوصف 3</div>
<div class="cell" data-label="English">description3</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="tools.description4">
<div class="cell" data-label="Property">tools.description4</div>
<div class="cell" data-label="Column">description4</div>
<div class="cell" data-label="Arabic">الوصف 4</div>
<div class="cell" data-label="English">description4</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="tools.description5">
<div class="cell" data-label="Property">tools.description5</div>
<div class="cell" data-label="Column">description5</div>
<div class="cell" data-label="Arabic">الوصف 5</div>
<div class="cell" data-label="English">description5</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="tools.id">
<div class="cell" data-label="Property">tools.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="tools.lineNumber">
<div class="cell" data-label="Property">tools.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="tools.machine">
<div class="cell" data-label="Property">tools.machine</div>
<div class="cell" data-label="Column">machine_id</div>
<div class="cell" data-label="Arabic">الالة</div>
<div class="cell" data-label="English">machine</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MnMachine](/entities/crm-maintenance/MnMachine.md) 
</div>
</div>

<div class="row searchable" id="tools.n1">
<div class="cell" data-label="Property">tools.n1</div>
<div class="cell" data-label="Column">n1</div>
<div class="cell" data-label="Arabic">رقم 1</div>
<div class="cell" data-label="English">Number 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tools.n2">
<div class="cell" data-label="Property">tools.n2</div>
<div class="cell" data-label="Column">n2</div>
<div class="cell" data-label="Arabic">رقم 2</div>
<div class="cell" data-label="English">Number 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tools.originDoc">
<div class="cell" data-label="Property">tools.originDoc</div>
<div class="cell gen-ref-column" data-label="Column">originDocActualCode,  originDocCode,  originDocEntityType,  originDocId</div>
<div class="cell" data-label="Arabic"> # المستند</div>
<div class="cell" data-label="English"> Document #</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="tools.quantity">
<div class="cell" data-label="Property">tools.quantity</div>
<div class="cell" data-label="Column">quantity</div>
<div class="cell" data-label="Arabic">الكمية</div>
<div class="cell" data-label="English">Quantity</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="tools.tool">
<div class="cell" data-label="Property">tools.tool</div>
<div class="cell" data-label="Column">tool_id</div>
<div class="cell" data-label="Arabic">عِدة</div>
<div class="cell" data-label="English">Tool</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/entities/supplychain/InvItem.md) 
</div>
</div>


</div>

