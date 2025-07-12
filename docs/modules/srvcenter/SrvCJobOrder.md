# SrvCJobOrder
**Arabic:** أمر شغل - أوامر شغل
**English:** Service Center Job Order - Service Center Job Orders

<ContentFilter/>


<div class='searchable'>
<a href='#materials'>materials (SrvJOrderMaterialLine) </a> , <a href='#resources'>resources (SrvJobOrderResLine) </a> , <a href='#tasks'>tasks (SrvJOrderTaskLine) </a>
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
</div><div class="row searchable" id="accessories">
<div class="cell" data-label="Property">accessories</div>
<div class="cell" data-label="Column">accessories_id</div>
<div class="cell" data-label="Arabic">مجموعة المحلقات</div>
<div class="cell" data-label="English">Accessories</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AccessoriesKit](/modules/srvcenter/AccessoriesKit.md) 
</div>
</div>

<div class="row searchable" id="allowEditingHdrTaxInDetails">
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

<div class="row searchable" id="attachment1">
<div class="cell" data-label="Property">attachment1</div>
<div class="cell" data-label="Column">attachment1_id</div>
<div class="cell" data-label="Arabic">مرفق 1</div>
<div class="cell" data-label="English">Attachment 1</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/modules/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="batchNum">
<div class="cell" data-label="Property">batchNum</div>
<div class="cell" data-label="Column">batchNum</div>
<div class="cell" data-label="Arabic">رقم المتابعة</div>
<div class="cell" data-label="English">Batch Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="book">
<div class="cell" data-label="Property">book</div>
<div class="cell" data-label="Column">book_id</div>
<div class="cell" data-label="Arabic">الدفتر</div>
<div class="cell" data-label="English">Book</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DocumentBook](/modules/basic/DocumentBook.md) 
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

<div class="row searchable" id="brand">
<div class="cell" data-label="Property">brand</div>
<div class="cell" data-label="Column">brand_id</div>
<div class="cell" data-label="Arabic">الماركة</div>
<div class="cell" data-label="English">Item Brand</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SrvcBrand](/modules/srvcenter/SrvcBrand.md) 
</div>
</div>

<div class="row searchable" id="cancelledBy">
<div class="cell" data-label="Property">cancelledBy</div>
<div class="cell" data-label="Column">cancelledBy_id</div>
<div class="cell" data-label="Arabic">ألغي بواسطة</div>
<div class="cell" data-label="English">Cancelled By</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DocumentCancelDocument](/modules/basic/DocumentCancelDocument.md) 
</div>
</div>

<div class="row searchable" id="carPlateNum">
<div class="cell" data-label="Property">carPlateNum</div>
<div class="cell" data-label="Column">carPlateNum</div>
<div class="cell" data-label="Arabic">رقم لوحة السيارة</div>
<div class="cell" data-label="English">Car Plate Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="chassisNo">
<div class="cell" data-label="Property">chassisNo</div>
<div class="cell" data-label="Column">chassisNo</div>
<div class="cell" data-label="Arabic">رقم الشاسيه</div>
<div class="cell" data-label="English">Chassis No</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="code">
<div class="cell" data-label="Property">code</div>
<div class="cell" data-label="Column">code</div>
<div class="cell" data-label="Arabic">الكود</div>
<div class="cell" data-label="English">Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="color">
<div class="cell" data-label="Property">color</div>
<div class="cell" data-label="Column">color</div>
<div class="cell" data-label="Arabic">اللون</div>
<div class="cell" data-label="English">Color</div>
<div class="cell" data-label="Type">Enum</div>

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

<div class="row searchable" id="currentContact">
<div class="cell" data-label="Property">currentContact</div>
<div class="cell" data-label="Column">currentContact_id</div>
<div class="cell" data-label="Arabic">جهة اتصال العميل</div>
<div class="cell" data-label="English">Customer Contact</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Contact](/modules/basic/Contact.md) 
</div>
</div>

<div class="row searchable" id="currentOdoVSLastOdoMeter">
<div class="cell" data-label="Property">currentOdoVSLastOdoMeter</div>
<div class="cell" data-label="Column">currentOdoVSLastOdoMeter</div>
<div class="cell" data-label="Arabic">الفرق بين القراءة الحالية وأخر قراءة</div>
<div class="cell" data-label="English">Difference Between Current OdoMeter and Last OdoMeter</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="currentOdometer">
<div class="cell" data-label="Property">currentOdometer</div>
<div class="cell" data-label="Column">currentOdometer</div>
<div class="cell" data-label="Arabic">قراءة العداد الحالية</div>
<div class="cell" data-label="English">Current Odometer</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="currentOdometerDate">
<div class="cell" data-label="Property">currentOdometerDate</div>
<div class="cell" data-label="Column">currentOdometerDate</div>
<div class="cell" data-label="Arabic">تاريخ قراءة العداد الحالية</div>
<div class="cell" data-label="English">Current Odometer Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="currentOwner">
<div class="cell" data-label="Property">currentOwner</div>
<div class="cell" data-label="Column">currentOwner_id</div>
<div class="cell" data-label="Arabic">المالك الحالي</div>
<div class="cell" data-label="English">Current Car Owner</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Customer](/modules/basic/Customer.md) 
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

<div class="row searchable" id="customerInvoice">
<div class="cell" data-label="Property">customerInvoice</div>
<div class="cell gen-ref-column" data-label="Column">customerInvoiceActualCode,  customerInvoiceCode,  customerInvoiceEntityType,  customerInvoiceId</div>
<div class="cell" data-label="Arabic">فاتوره العميل</div>
<div class="cell" data-label="English">Customer Invoice</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="customerInvoiceStatus">
<div class="cell" data-label="Property">customerInvoiceStatus</div>
<div class="cell" data-label="Column">customerInvoiceStatus</div>
<div class="cell" data-label="Arabic">حالة فاتورة العميل</div>
<div class="cell" data-label="English">Customer Invoice Status</div>
<div class="cell" data-label="Type">Enum</div>

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

<div class="row searchable" id="description10">
<div class="cell" data-label="Property">description10</div>
<div class="cell" data-label="Column">description10</div>
<div class="cell" data-label="Arabic">الوصف 10</div>
<div class="cell" data-label="English">description 10</div>
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

<div class="row searchable" id="description6">
<div class="cell" data-label="Property">description6</div>
<div class="cell" data-label="Column">description6</div>
<div class="cell" data-label="Arabic">الوصف 6</div>
<div class="cell" data-label="English">description 6</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="description7">
<div class="cell" data-label="Property">description7</div>
<div class="cell" data-label="Column">description7</div>
<div class="cell" data-label="Arabic">الوصف 7</div>
<div class="cell" data-label="English">description 7</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="description8">
<div class="cell" data-label="Property">description8</div>
<div class="cell" data-label="Column">description8</div>
<div class="cell" data-label="Arabic">الوصف 8</div>
<div class="cell" data-label="English">description 8</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="description9">
<div class="cell" data-label="Property">description9</div>
<div class="cell" data-label="Column">description9</div>
<div class="cell" data-label="Arabic">الوصف 9</div>
<div class="cell" data-label="English">description 9</div>
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

<div class="row searchable" id="engineNo">
<div class="cell" data-label="Property">engineNo</div>
<div class="cell" data-label="Column">engineNo</div>
<div class="cell" data-label="Arabic">رقم المحرك</div>
<div class="cell" data-label="English">Engine No</div>
<div class="cell" data-label="Type">Text</div>

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

<div class="row searchable" id="expectedCompletionDate">
<div class="cell" data-label="Property">expectedCompletionDate</div>
<div class="cell" data-label="Column">expectedCompletionDate</div>
<div class="cell" data-label="Arabic">تاريخ انتهاء الحجز المتوقع</div>
<div class="cell" data-label="English">Expected Completion Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="expectedCompletionTime">
<div class="cell" data-label="Property">expectedCompletionTime</div>
<div class="cell" data-label="Column">expectedCompletionTime</div>
<div class="cell" data-label="Arabic">وقت انتهاء الحجز المتوقع</div>
<div class="cell" data-label="English">Expected Completion Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="expectedDeliveryDate">
<div class="cell" data-label="Property">expectedDeliveryDate</div>
<div class="cell" data-label="Column">expectedDeliveryDate</div>
<div class="cell" data-label="Arabic">تاريخ التسليم المتوقع</div>
<div class="cell" data-label="English">Expected Delivery Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="expectedDeliveryDateTime">
<div class="cell" data-label="Property">expectedDeliveryDateTime</div>
<div class="cell" data-label="Column">expectedDeliveryDateTime</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="expectedDeliveryTime">
<div class="cell" data-label="Property">expectedDeliveryTime</div>
<div class="cell" data-label="Column">expectedDeliveryTime</div>
<div class="cell" data-label="Arabic">وقت التسليم المتوقع</div>
<div class="cell" data-label="English">Expected Delivery Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="expectedNextVisitDate">
<div class="cell" data-label="Property">expectedNextVisitDate</div>
<div class="cell" data-label="Column">expectedNextVisitDate</div>
<div class="cell" data-label="Arabic">التاريخ المتوقع للزيارة القادمة</div>
<div class="cell" data-label="English">Expected Next Visit Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="expectedNextVisitType">
<div class="cell" data-label="Property">expectedNextVisitType</div>
<div class="cell" data-label="Column">expectedNextVisitType_id</div>
<div class="cell" data-label="Arabic">النوع المتوقع للزيارة القادمة</div>
<div class="cell" data-label="English">Expected Next Visit Type</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SrvCVisitType](/modules/srvcenter/SrvCVisitType.md) 
</div>
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

<div class="row searchable" id="fiscalPeriod">
<div class="cell" data-label="Property">fiscalPeriod</div>
<div class="cell" data-label="Column">fiscalPeriod_id</div>
<div class="cell" data-label="Arabic">الفترة</div>
<div class="cell" data-label="English">Fiscal Period</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FiscalPeriod](/modules/basic/FiscalPeriod.md) 
</div>
</div>

<div class="row searchable" id="fiscalYear">
<div class="cell" data-label="Property">fiscalYear</div>
<div class="cell" data-label="Column">fiscalYear_id</div>
<div class="cell" data-label="Arabic">السنة المالية</div>
<div class="cell" data-label="English">Fiscal Year</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FiscalYear](/modules/basic/FiscalYear.md) 
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

<div class="row searchable" id="gearBox">
<div class="cell" data-label="Property">gearBox</div>
<div class="cell" data-label="Column">gearBox</div>
<div class="cell" data-label="Arabic">ناقل الحركة</div>
<div class="cell" data-label="English">Gear Box</div>
<div class="cell" data-label="Type">Text</div>

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

<div class="row searchable" id="ignoreRecallCampaignValidation">
<div class="cell" data-label="Property">ignoreRecallCampaignValidation</div>
<div class="cell" data-label="Column">ignoreRecallCampaignValidation</div>
<div class="cell" data-label="Arabic">تجاهل التحقق من حملات الاستدعاء</div>
<div class="cell" data-label="English">Ignore Recall Campaign Validation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="indexInParent">
<div class="cell" data-label="Property">indexInParent</div>
<div class="cell" data-label="Column">indexInParent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="initialOwner">
<div class="cell" data-label="Property">initialOwner</div>
<div class="cell" data-label="Column">initialOwner_id</div>
<div class="cell" data-label="Arabic">المالك الأصلي</div>
<div class="cell" data-label="English">Initial Car Owner</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Customer](/modules/basic/Customer.md) 
</div>
</div>

<div class="row searchable" id="insuranceCompany">
<div class="cell" data-label="Property">insuranceCompany</div>
<div class="cell" data-label="Column">insuranceCompany_id</div>
<div class="cell" data-label="Arabic">شركة التأمين</div>
<div class="cell" data-label="English">Insurance Company</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ThirdParty](/modules/basic/ThirdParty.md) 
</div>
</div>

<div class="row searchable" id="insuranceEndDate">
<div class="cell" data-label="Property">insuranceEndDate</div>
<div class="cell" data-label="Column">insuranceEndDate</div>
<div class="cell" data-label="Arabic">تاريخ انتهاء الضمان</div>
<div class="cell" data-label="English">Insurance End Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="insuranceInvoice">
<div class="cell" data-label="Property">insuranceInvoice</div>
<div class="cell gen-ref-column" data-label="Column">insuranceInvoiceActualCode,  insuranceInvoiceCode,  insuranceInvoiceEntityType,  insuranceInvoiceId</div>
<div class="cell" data-label="Arabic">فاتوره التأمين</div>
<div class="cell" data-label="English">Insurance Invoice</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="insuranceInvoiceStatus">
<div class="cell" data-label="Property">insuranceInvoiceStatus</div>
<div class="cell" data-label="Column">insuranceInvoiceStatus</div>
<div class="cell" data-label="Arabic">حالة فاتورة التأمين</div>
<div class="cell" data-label="English">Insurance Invoice Status</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="insuranceKM">
<div class="cell" data-label="Property">insuranceKM</div>
<div class="cell" data-label="Column">insuranceKM</div>
<div class="cell" data-label="Arabic">كيلومتر الضمان</div>
<div class="cell" data-label="English">Insurance Kilometer</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="insurancePeriod.uom">
<div class="cell" data-label="Property">insurancePeriod.uom</div>
<div class="cell" data-label="Column">insurancePeriodUom</div>
<div class="cell" data-label="Arabic">الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="insurancePeriod.value">
<div class="cell" data-label="Property">insurancePeriod.value</div>
<div class="cell" data-label="Column">insurancePeriodValue</div>
<div class="cell" data-label="Arabic">القيمة</div>
<div class="cell" data-label="English">Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="insuranceStartDate">
<div class="cell" data-label="Property">insuranceStartDate</div>
<div class="cell" data-label="Column">insuranceStartDate</div>
<div class="cell" data-label="Arabic">تاريخ بداية التأمين</div>
<div class="cell" data-label="English">Insurance Start Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="invoicingStatus">
<div class="cell" data-label="Property">invoicingStatus</div>
<div class="cell" data-label="Column">invoicingStatus</div>
<div class="cell" data-label="Arabic">حالة الفوترة</div>
<div class="cell" data-label="English">Invoicing Status</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="issueDate">
<div class="cell" data-label="Property">issueDate</div>
<div class="cell" data-label="Column">issueDate</div>
<div class="cell" data-label="Arabic">تاريخ التحرير</div>
<div class="cell" data-label="English">Issue Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="km">
<div class="cell" data-label="Property">km</div>
<div class="cell" data-label="Column">km</div>
<div class="cell" data-label="Arabic">عدد كم</div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="lastOdometer">
<div class="cell" data-label="Property">lastOdometer</div>
<div class="cell" data-label="Column">lastOdometer</div>
<div class="cell" data-label="Arabic">قراءة العداد السابقة</div>
<div class="cell" data-label="English">Last Odometer</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="lastOdometerDate">
<div class="cell" data-label="Property">lastOdometerDate</div>
<div class="cell" data-label="Column">lastOdometerDate</div>
<div class="cell" data-label="Arabic">تاريخ قراءة العداد السابقة</div>
<div class="cell" data-label="English">Last Odometer Date</div>
<div class="cell" data-label="Type">Date</div>

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

<div class="row searchable" id="manualRef1">
<div class="cell" data-label="Property">manualRef1</div>
<div class="cell" data-label="Column">manualRef1</div>
<div class="cell" data-label="Arabic">رقم المستند اليدوي</div>
<div class="cell" data-label="English">Manual Ref1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="materialCustomerPercentage">
<div class="cell" data-label="Property">materialCustomerPercentage</div>
<div class="cell" data-label="Column">materialCustomerPercentage</div>
<div class="cell" data-label="Arabic">نسبة العميل فى قطع الغيار</div>
<div class="cell" data-label="English">Material Customer Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materialInsurancePercentage">
<div class="cell" data-label="Property">materialInsurancePercentage</div>
<div class="cell" data-label="Column">materialInsurancePercentage</div>
<div class="cell" data-label="Arabic">نسبة التأمين فى قطع الغيار</div>
<div class="cell" data-label="English">Material Insurance Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materialInternalPercentage">
<div class="cell" data-label="Property">materialInternalPercentage</div>
<div class="cell" data-label="Column">materialInternalPercentage</div>
<div class="cell" data-label="Arabic">نسبة الشركة فى قطع الغيار</div>
<div class="cell" data-label="English">Material Internal Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materialWarrantyPercentage">
<div class="cell" data-label="Property">materialWarrantyPercentage</div>
<div class="cell" data-label="Column">materialWarrantyPercentage</div>
<div class="cell" data-label="Arabic">نسبة الضمان فى قطع الغيار</div>
<div class="cell" data-label="English">Material Warranty Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materialsTotalAfterDiscounts">
<div class="cell" data-label="Property">materialsTotalAfterDiscounts</div>
<div class="cell" data-label="Column">materialsTotalAfterDiscounts</div>
<div class="cell" data-label="Arabic">إجمالي قطع الغيار بعد الخصم</div>
<div class="cell" data-label="English">Materials Total After Discounts</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materialsTotalCost">
<div class="cell" data-label="Property">materialsTotalCost</div>
<div class="cell" data-label="Column">materialsTotalCost</div>
<div class="cell" data-label="Arabic">إجمالي المواد المساعدة</div>
<div class="cell" data-label="English">Materials Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materialsTotalDiscount1">
<div class="cell" data-label="Property">materialsTotalDiscount1</div>
<div class="cell" data-label="Column">materialsTotalDiscount1</div>
<div class="cell" data-label="Arabic">إجمالي خصم 1 لقطع الغيار</div>
<div class="cell" data-label="English">Materials Total Discount 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materialsTotalDiscount2">
<div class="cell" data-label="Property">materialsTotalDiscount2</div>
<div class="cell" data-label="Column">materialsTotalDiscount2</div>
<div class="cell" data-label="Arabic">إجمالي خصم 2 لقطع الغيار</div>
<div class="cell" data-label="English">Materials Total Discount 2</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="modifiableTax">
<div class="cell" data-label="Property">modifiableTax</div>
<div class="cell" data-label="Column">modifiableTax</div>
<div class="cell" data-label="Arabic">يمكن تعديل الضريبة</div>
<div class="cell" data-label="English">Modifiable Tax</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="n1">
<div class="cell" data-label="Property">n1</div>
<div class="cell" data-label="Column">n1</div>
<div class="cell" data-label="Arabic">رقم 1</div>
<div class="cell" data-label="English">Number 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="n10">
<div class="cell" data-label="Property">n10</div>
<div class="cell" data-label="Column">n10</div>
<div class="cell" data-label="Arabic">رقم 10</div>
<div class="cell" data-label="English">Number 10</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="n11">
<div class="cell" data-label="Property">n11</div>
<div class="cell" data-label="Column">n11</div>
<div class="cell" data-label="Arabic">رقم 11</div>
<div class="cell" data-label="English">Number 11</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="n12">
<div class="cell" data-label="Property">n12</div>
<div class="cell" data-label="Column">n12</div>
<div class="cell" data-label="Arabic">رقم 12</div>
<div class="cell" data-label="English">Number 12</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="n13">
<div class="cell" data-label="Property">n13</div>
<div class="cell" data-label="Column">n13</div>
<div class="cell" data-label="Arabic">رقم 13</div>
<div class="cell" data-label="English">Number 13</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="n14">
<div class="cell" data-label="Property">n14</div>
<div class="cell" data-label="Column">n14</div>
<div class="cell" data-label="Arabic">رقم 14</div>
<div class="cell" data-label="English">Number 14</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="n15">
<div class="cell" data-label="Property">n15</div>
<div class="cell" data-label="Column">n15</div>
<div class="cell" data-label="Arabic">رقم 15</div>
<div class="cell" data-label="English">Number 15</div>
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

<div class="row searchable" id="n6">
<div class="cell" data-label="Property">n6</div>
<div class="cell" data-label="Column">n6</div>
<div class="cell" data-label="Arabic">رقم 6</div>
<div class="cell" data-label="English">Number 6</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="n7">
<div class="cell" data-label="Property">n7</div>
<div class="cell" data-label="Column">n7</div>
<div class="cell" data-label="Arabic">رقم 7</div>
<div class="cell" data-label="English">Number 7</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="n8">
<div class="cell" data-label="Property">n8</div>
<div class="cell" data-label="Column">n8</div>
<div class="cell" data-label="Arabic">رقم 8</div>
<div class="cell" data-label="English">Number 8</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="n9">
<div class="cell" data-label="Property">n9</div>
<div class="cell" data-label="Column">n9</div>
<div class="cell" data-label="Arabic">رقم 9</div>
<div class="cell" data-label="English">Number 9</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="openShift">
<div class="cell" data-label="Property">openShift</div>
<div class="cell" data-label="Column">openShift_id</div>
<div class="cell" data-label="Arabic">فتح وردية</div>
<div class="cell" data-label="English">Open Shift</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CSHOpenShift](/modules/accounting-cashier/CSHOpenShift.md) 
</div>
</div>

<div class="row searchable" id="operationRemarks">
<div class="cell" data-label="Property">operationRemarks</div>
<div class="cell" data-label="Column">operationRemarks</div>
<div class="cell" data-label="Arabic">ملاحظات التشغيل</div>
<div class="cell" data-label="English">Operation Remarks</div>
<div class="cell" data-label="Type">BigText</div>

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

<div class="row searchable" id="product">
<div class="cell" data-label="Property">product</div>
<div class="cell" data-label="Column">product_id</div>
<div class="cell" data-label="Arabic">المنتج</div>
<div class="cell" data-label="English">Product</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SrvCProduct](/modules/srvcenter/SrvCProduct.md) 
</div>
</div>

<div class="row searchable" id="productionYear">
<div class="cell" data-label="Property">productionYear</div>
<div class="cell" data-label="Column">productionYear</div>
<div class="cell" data-label="Arabic">سنة الموديل</div>
<div class="cell" data-label="English">Production Year</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="purged">
<div class="cell" data-label="Property">purged</div>
<div class="cell" data-label="Column">purged</div>
<div class="cell" data-label="Arabic">Purged</div>
<div class="cell" data-label="English">Purged</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="queueTicketsFields.ticketBranch">
<div class="cell" data-label="Property">queueTicketsFields.ticketBranch</div>
<div class="cell" data-label="Column">ticketBranch_id</div>
<div class="cell" data-label="Arabic">فرع الخدمة</div>
<div class="cell" data-label="English">Ticket Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [QueueServiceBranch](/modules/srvcenter-service-queues/QueueServiceBranch.md) 
</div>
</div>

<div class="row searchable" id="queueTicketsFields.ticketCode">
<div class="cell" data-label="Property">queueTicketsFields.ticketCode</div>
<div class="cell" data-label="Column">ticketCode</div>
<div class="cell" data-label="Arabic">كود طلب الدعم</div>
<div class="cell" data-label="English">Ticket Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="queueTicketsFields.ticketEntryId">
<div class="cell" data-label="Property">queueTicketsFields.ticketEntryId</div>
<div class="cell" data-label="Column">ticketEntryId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="rbook">
<div class="cell" data-label="Property">rbook</div>
<div class="cell" data-label="Column">rbook_id</div>
<div class="cell" data-label="Arabic">دفتر الايصالات</div>
<div class="cell" data-label="English">Receipt Book</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ReceiptBook](/modules/basic/ReceiptBook.md) 
</div>
</div>

<div class="row searchable" id="recallCampaign">
<div class="cell" data-label="Property">recallCampaign</div>
<div class="cell" data-label="Column">recallCampaign_id</div>
<div class="cell" data-label="Arabic">حملة الإستدعاء</div>
<div class="cell" data-label="English">Recall Campaign</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [RecallCampaign](/modules/srvcenter/RecallCampaign.md) 
</div>
</div>

<div class="row searchable" id="receptionEngineer">
<div class="cell" data-label="Property">receptionEngineer</div>
<div class="cell" data-label="Column">receptionEngineer_id</div>
<div class="cell" data-label="Arabic">مهندس الاستقبال</div>
<div class="cell" data-label="English">Reception Engineer</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/modules/basic/Employee.md) 
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

<div class="row searchable" id="reservationDate">
<div class="cell" data-label="Property">reservationDate</div>
<div class="cell" data-label="Column">reservationDate</div>
<div class="cell" data-label="Arabic">تاريخ الحجز</div>
<div class="cell" data-label="English">Reservation Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="reservationTime">
<div class="cell" data-label="Property">reservationTime</div>
<div class="cell" data-label="Column">reservationTime</div>
<div class="cell" data-label="Arabic">وقت الحجز</div>
<div class="cell" data-label="English">Reservation Time</div>
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

 [NaMaUser](/modules/system-tables/NaMaUser.md) 
</div>
</div>

<div class="row searchable" id="rpaper">
<div class="cell" data-label="Property">rpaper</div>
<div class="cell" data-label="Column">rpaper_id</div>
<div class="cell" data-label="Arabic">الايصال</div>
<div class="cell" data-label="English">Receipt Paper</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ReceiptPaper](/modules/basic/ReceiptPaper.md) 
</div>
</div>

<div class="row searchable" id="secondSerial">
<div class="cell" data-label="Property">secondSerial</div>
<div class="cell" data-label="Column">secondSerial</div>
<div class="cell" data-label="Arabic">الرقم المسلسل الثاني</div>
<div class="cell" data-label="English">Second Serial</div>
<div class="cell" data-label="Type">Text</div>

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

<div class="row searchable" id="serialNumber">
<div class="cell" data-label="Property">serialNumber</div>
<div class="cell" data-label="Column">serialNumber</div>
<div class="cell" data-label="Arabic">الرقم المسلسل</div>
<div class="cell" data-label="English">Serial Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="serviceContract">
<div class="cell" data-label="Property">serviceContract</div>
<div class="cell gen-ref-column" data-label="Column">serviceContractActualCode,  serviceContractCode,  serviceContractEntityType,  serviceContractId</div>
<div class="cell" data-label="Arabic">عقد خدمة</div>
<div class="cell" data-label="English">Service Contract</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="status">
<div class="cell" data-label="Property">status</div>
<div class="cell" data-label="Column">status</div>
<div class="cell" data-label="Arabic">الحالة</div>
<div class="cell" data-label="English">Status</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="supplierCode">
<div class="cell" data-label="Property">supplierCode</div>
<div class="cell" data-label="Column">supplierCode</div>
<div class="cell" data-label="Arabic">كود المورد</div>
<div class="cell" data-label="English">Supplier Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taskCustomerPercentage">
<div class="cell" data-label="Property">taskCustomerPercentage</div>
<div class="cell" data-label="Column">taskCustomerPercentage</div>
<div class="cell" data-label="Arabic">نسبة العميل فى العمليات</div>
<div class="cell" data-label="English">Task Customer Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="taskInsurancePercentage">
<div class="cell" data-label="Property">taskInsurancePercentage</div>
<div class="cell" data-label="Column">taskInsurancePercentage</div>
<div class="cell" data-label="Arabic">نسبة التأمين فى العمليات</div>
<div class="cell" data-label="English">Task Insurance Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="taskInternalPercentage">
<div class="cell" data-label="Property">taskInternalPercentage</div>
<div class="cell" data-label="Column">taskInternalPercentage</div>
<div class="cell" data-label="Arabic">نسبة الشركة فى العمليات</div>
<div class="cell" data-label="English">Task Internal Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="taskWarrantyPercentage">
<div class="cell" data-label="Property">taskWarrantyPercentage</div>
<div class="cell" data-label="Column">taskWarrantyPercentage</div>
<div class="cell" data-label="Arabic">نسبة الضمان فى العمليات</div>
<div class="cell" data-label="English">Task Warranty Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasksTotalAfterDiscounts">
<div class="cell" data-label="Property">tasksTotalAfterDiscounts</div>
<div class="cell" data-label="Column">tasksTotalAfterDiscounts</div>
<div class="cell" data-label="Arabic">إجمالي العمليات بعد الخصم</div>
<div class="cell" data-label="English">Tasks Total After Discounts</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasksTotalCost">
<div class="cell" data-label="Property">tasksTotalCost</div>
<div class="cell" data-label="Column">tasksTotalCost</div>
<div class="cell" data-label="Arabic">إجمالي العمليات</div>
<div class="cell" data-label="English">Tasks Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasksTotalDiscount1">
<div class="cell" data-label="Property">tasksTotalDiscount1</div>
<div class="cell" data-label="Column">tasksTotalDiscount1</div>
<div class="cell" data-label="Arabic">إجمالي خصم 1 للعمليات</div>
<div class="cell" data-label="English">Tasks Total Discount 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasksTotalDiscount2">
<div class="cell" data-label="Property">tasksTotalDiscount2</div>
<div class="cell" data-label="Column">tasksTotalDiscount2</div>
<div class="cell" data-label="Arabic">إجمالي خصم 2 للعمليات</div>
<div class="cell" data-label="English">Tasks Total Discount 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="taxPlan">
<div class="cell" data-label="Property">taxPlan</div>
<div class="cell" data-label="Column">taxPlan_id</div>
<div class="cell" data-label="Arabic"> سياسة الضريبة</div>
<div class="cell" data-label="English"> Tax Plan</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [TaxPlan](/modules/basic/TaxPlan.md) 
</div>
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

 [DocumentTerm](/modules/basic/DocumentTerm.md) 
</div>
</div>

<div class="row searchable" id="termConfigXml">
<div class="cell" data-label="Property">termConfigXml</div>
<div class="cell" data-label="Column">termConfigXml</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="total">
<div class="cell" data-label="Property">total</div>
<div class="cell" data-label="Column">total</div>
<div class="cell" data-label="Arabic">الإجمالي</div>
<div class="cell" data-label="English">Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalCost">
<div class="cell" data-label="Property">totalCost</div>
<div class="cell" data-label="Column">totalCost</div>
<div class="cell" data-label="Arabic">اجمالى التكلفة</div>
<div class="cell" data-label="English">Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalCostAfterDiscounts">
<div class="cell" data-label="Property">totalCostAfterDiscounts</div>
<div class="cell" data-label="Column">totalCostAfterDiscounts</div>
<div class="cell" data-label="Arabic">إجمالي التكلفة بعد الخصم</div>
<div class="cell" data-label="English">Total Cost After Discounts</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalHours">
<div class="cell" data-label="Property">totalHours</div>
<div class="cell" data-label="Column">totalHours</div>
<div class="cell" data-label="Arabic">المدة</div>
<div class="cell" data-label="English">Total Hours</div>
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

<div class="row searchable" id="visitType">
<div class="cell" data-label="Property">visitType</div>
<div class="cell" data-label="Column">visitType_id</div>
<div class="cell" data-label="Arabic">نوع الزيارة</div>
<div class="cell" data-label="English">Visit Type</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SrvCVisitType](/modules/srvcenter/SrvCVisitType.md) 
</div>
</div>

<div class="row searchable" id="warranteeInvoice">
<div class="cell" data-label="Property">warranteeInvoice</div>
<div class="cell gen-ref-column" data-label="Column">warranteeInvoiceActualCode,  warranteeInvoiceCode,  warranteeInvoiceEntityType,  warranteeInvoiceId</div>
<div class="cell" data-label="Arabic">فاتوره الضمان</div>
<div class="cell" data-label="English">Warranty Invoice</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="warranteeInvoiceStatus">
<div class="cell" data-label="Property">warranteeInvoiceStatus</div>
<div class="cell" data-label="Column">warranteeInvoiceStatus</div>
<div class="cell" data-label="Arabic">حالة فاتورة الضمان</div>
<div class="cell" data-label="English">Warrantee Invoice Status</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="warrantyCompany">
<div class="cell" data-label="Property">warrantyCompany</div>
<div class="cell" data-label="Column">warrantyCompany_id</div>
<div class="cell" data-label="Arabic">شركه الضمان</div>
<div class="cell" data-label="English">Warranty company</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ThirdParty](/modules/basic/ThirdParty.md) 
</div>
</div>

<div class="row searchable" id="wipLocator">
<div class="cell" data-label="Property">wipLocator</div>
<div class="cell" data-label="Column">wipLocator_id</div>
<div class="cell" data-label="Arabic">موقع مخزن التشغيل</div>
<div class="cell" data-label="English">Work In Progress Locator</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Locator](/modules/supplychain/Locator.md) 
</div>
</div>

<div class="row searchable" id="wipWareHouse">
<div class="cell" data-label="Property">wipWareHouse</div>
<div class="cell" data-label="Column">wipWareHouse_id</div>
<div class="cell" data-label="Arabic">مخزن التشغيل</div>
<div class="cell" data-label="English">Work In Progress Warehouse</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="workCenter">
<div class="cell" data-label="Property">workCenter</div>
<div class="cell" data-label="Column">workCenter_id</div>
<div class="cell" data-label="Arabic">صالة الإنتاج</div>
<div class="cell" data-label="English">Work Center</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SrvCWorkCenter](/modules/srvcenter/SrvCWorkCenter.md) 
</div>
</div>

<div class="row searchable" id="workCenterHourPrice">
<div class="cell" data-label="Property">workCenterHourPrice</div>
<div class="cell" data-label="Column">workCenterHourPrice</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>


</div>
</div>

<div id='materials' title='materials' class='searchable'>

## materials (قطع غيار - Spare Parts)
**Table Name:** SrvJOrderMaterialLine, **Join Column:** srvCJobOrder_id
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

<div class="row searchable" id="materials.customerPercentage">
<div class="cell" data-label="Property">materials.customerPercentage</div>
<div class="cell" data-label="Column">customerPercentage</div>
<div class="cell" data-label="Arabic">العميل | %</div>
<div class="cell" data-label="English">Customer | Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.customerValue">
<div class="cell" data-label="Property">materials.customerValue</div>
<div class="cell" data-label="Column">customerValue</div>
<div class="cell" data-label="Arabic">العميل | قيمة</div>
<div class="cell" data-label="English">Customer | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.discount1.afterValue">
<div class="cell" data-label="Property">materials.discount1.afterValue</div>
<div class="cell" data-label="Column">discount1AfterValue</div>
<div class="cell" data-label="Arabic">خصم 1 | صافي</div>
<div class="cell" data-label="English">Discount 1 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.discount1.maxNormalPercent">
<div class="cell" data-label="Property">materials.discount1.maxNormalPercent</div>
<div class="cell" data-label="Column">discount1MaxNormalPercent</div>
<div class="cell" data-label="Arabic">خصم 1 | النسبة العادية</div>
<div class="cell" data-label="English">Discount 1 | Normal Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.discount1.percentage">
<div class="cell" data-label="Property">materials.discount1.percentage</div>
<div class="cell" data-label="Column">discount1Percentage</div>
<div class="cell" data-label="Arabic">خصم 1 | %</div>
<div class="cell" data-label="English">Discount 1 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.discount1.value">
<div class="cell" data-label="Property">materials.discount1.value</div>
<div class="cell" data-label="Column">discount1Value</div>
<div class="cell" data-label="Arabic">خصم 1 | قيمة</div>
<div class="cell" data-label="English">Discount 1 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.discount2.afterValue">
<div class="cell" data-label="Property">materials.discount2.afterValue</div>
<div class="cell" data-label="Column">discount2AfterValue</div>
<div class="cell" data-label="Arabic">خصم 2 | صافي</div>
<div class="cell" data-label="English">Discount 2 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.discount2.maxNormalPercent">
<div class="cell" data-label="Property">materials.discount2.maxNormalPercent</div>
<div class="cell" data-label="Column">discount2MaxNormalPercent</div>
<div class="cell" data-label="Arabic">خصم 2 | النسبة العادية</div>
<div class="cell" data-label="English">Discount 2 | Normal Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.discount2.percentage">
<div class="cell" data-label="Property">materials.discount2.percentage</div>
<div class="cell" data-label="Column">discount2Percentage</div>
<div class="cell" data-label="Arabic">خصم 2 | %</div>
<div class="cell" data-label="English">Discount 2 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.discount2.value">
<div class="cell" data-label="Property">materials.discount2.value</div>
<div class="cell" data-label="Column">discount2Value</div>
<div class="cell" data-label="Arabic">خصم 2 | قيمة</div>
<div class="cell" data-label="English">Discount 2 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.id">
<div class="cell" data-label="Property">materials.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="materials.insurancePercentage">
<div class="cell" data-label="Property">materials.insurancePercentage</div>
<div class="cell" data-label="Column">insurancePercentage</div>
<div class="cell" data-label="Arabic">التأمين | %</div>
<div class="cell" data-label="English">Insurance | Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.insuranceValue">
<div class="cell" data-label="Property">materials.insuranceValue</div>
<div class="cell" data-label="Column">insuranceValue</div>
<div class="cell" data-label="Arabic">التأمين | قيمة</div>
<div class="cell" data-label="English">Insurance | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.internalPercentage">
<div class="cell" data-label="Property">materials.internalPercentage</div>
<div class="cell" data-label="Column">internalPercentage</div>
<div class="cell" data-label="Arabic">الشركة | %</div>
<div class="cell" data-label="English">Internal | Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.internalValue">
<div class="cell" data-label="Property">materials.internalValue</div>
<div class="cell" data-label="Column">internalValue</div>
<div class="cell" data-label="Arabic">الشركة | القيمة</div>
<div class="cell" data-label="English">Internal | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.issueType">
<div class="cell" data-label="Property">materials.issueType</div>
<div class="cell" data-label="Column">issueType</div>
<div class="cell" data-label="Arabic">طريقة الصرف</div>
<div class="cell" data-label="English">Issue Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="materials.itemSpecificDimensions.activePerc">
<div class="cell" data-label="Property">materials.itemSpecificDimensions.activePerc</div>
<div class="cell" data-label="Column">activePerc</div>
<div class="cell" data-label="Arabic">النسبة الفعالة</div>
<div class="cell" data-label="English">Active Percentage</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="materials.itemSpecificDimensions.box">
<div class="cell" data-label="Property">materials.itemSpecificDimensions.box</div>
<div class="cell" data-label="Column">box</div>
<div class="cell" data-label="Arabic">صندوق</div>
<div class="cell" data-label="English">Box</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="materials.itemSpecificDimensions.color">
<div class="cell" data-label="Property">materials.itemSpecificDimensions.color</div>
<div class="cell" data-label="Column">color</div>
<div class="cell" data-label="Arabic">اللون</div>
<div class="cell" data-label="English">Color</div>
<div class="cell" data-label="Type">Color</div>

</div>

<div class="row searchable" id="materials.itemSpecificDimensions.inactivePerc">
<div class="cell" data-label="Property">materials.itemSpecificDimensions.inactivePerc</div>
<div class="cell" data-label="Column">inactivePerc</div>
<div class="cell" data-label="Arabic">النسبة الغير فعالة</div>
<div class="cell" data-label="English">Inactive Percentage</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="materials.itemSpecificDimensions.locator">
<div class="cell" data-label="Property">materials.itemSpecificDimensions.locator</div>
<div class="cell" data-label="Column">locator_id</div>
<div class="cell" data-label="Arabic">الموقع</div>
<div class="cell" data-label="English">Locator</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Locator](/modules/supplychain/Locator.md) 
</div>
</div>

<div class="row searchable" id="materials.itemSpecificDimensions.lotId">
<div class="cell" data-label="Property">materials.itemSpecificDimensions.lotId</div>
<div class="cell" data-label="Column">lotId</div>
<div class="cell" data-label="Arabic">كود الشحنة</div>
<div class="cell" data-label="English">Lot ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="materials.itemSpecificDimensions.measures">
<div class="cell" data-label="Property">materials.itemSpecificDimensions.measures</div>
<div class="cell" data-label="Column">measures</div>
<div class="cell" data-label="Arabic">الأبعاد</div>
<div class="cell" data-label="English">Measures</div>
<div class="cell" data-label="Type">Measures</div>

</div>

<div class="row searchable" id="materials.itemSpecificDimensions.revisionId">
<div class="cell" data-label="Property">materials.itemSpecificDimensions.revisionId</div>
<div class="cell" data-label="Column">revisionId</div>
<div class="cell" data-label="Arabic">الإصدار</div>
<div class="cell" data-label="English">ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="materials.itemSpecificDimensions.secondSerial">
<div class="cell" data-label="Property">materials.itemSpecificDimensions.secondSerial</div>
<div class="cell" data-label="Column">secondSerial</div>
<div class="cell" data-label="Arabic">الرقم المسلسل الثاني</div>
<div class="cell" data-label="English">Second Serial</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="materials.itemSpecificDimensions.serialNumber">
<div class="cell" data-label="Property">materials.itemSpecificDimensions.serialNumber</div>
<div class="cell" data-label="Column">serialNumber</div>
<div class="cell" data-label="Arabic">الرقم المسلسل</div>
<div class="cell" data-label="English">Serial Number</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="materials.itemSpecificDimensions.size">
<div class="cell" data-label="Property">materials.itemSpecificDimensions.size</div>
<div class="cell" data-label="Column">size</div>
<div class="cell" data-label="Arabic">المقاس</div>
<div class="cell" data-label="English">Size</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="materials.itemSpecificDimensions.subItem">
<div class="cell" data-label="Property">materials.itemSpecificDimensions.subItem</div>
<div class="cell" data-label="Column">subItem_id</div>
<div class="cell" data-label="Arabic"> صنف فرعى</div>
<div class="cell" data-label="English"> SubItem</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SubItem](/modules/srvcenter-subitems/SubItem.md) 
</div>
</div>

<div class="row searchable" id="materials.itemSpecificDimensions.warehouse">
<div class="cell" data-label="Property">materials.itemSpecificDimensions.warehouse</div>
<div class="cell" data-label="Column">warehouse_id</div>
<div class="cell" data-label="Arabic">المخزن</div>
<div class="cell" data-label="English">Warehouse</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="materials.lineNumber">
<div class="cell" data-label="Property">materials.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
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

<div class="row searchable" id="materials.price">
<div class="cell" data-label="Property">materials.price</div>
<div class="cell" data-label="Column">price</div>
<div class="cell" data-label="Arabic">السعر</div>
<div class="cell" data-label="English">Price</div>
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

<div class="row searchable" id="materials.task">
<div class="cell" data-label="Property">materials.task</div>
<div class="cell" data-label="Column">task_id</div>
<div class="cell" data-label="Arabic">المهمة</div>
<div class="cell" data-label="English">Task</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SrvCTask](/modules/srvcenter/SrvCTask.md) 
</div>
</div>

<div class="row searchable" id="materials.tax1.afterValue">
<div class="cell" data-label="Property">materials.tax1.afterValue</div>
<div class="cell" data-label="Column">tax1AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | الصافي</div>
<div class="cell" data-label="English">Tax | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.tax1.maxNormalPercent">
<div class="cell" data-label="Property">materials.tax1.maxNormalPercent</div>
<div class="cell" data-label="Column">tax1MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | %</div>
<div class="cell" data-label="English">Item Tax | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.tax1.percentage">
<div class="cell" data-label="Property">materials.tax1.percentage</div>
<div class="cell" data-label="Column">tax1Percentage</div>
<div class="cell" data-label="Arabic">قيمة إضافية 1</div>
<div class="cell" data-label="English">Tax 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.tax1.value">
<div class="cell" data-label="Property">materials.tax1.value</div>
<div class="cell" data-label="Column">tax1Value</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | القيمة</div>
<div class="cell" data-label="English">Tax value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.tax2.afterValue">
<div class="cell" data-label="Property">materials.tax2.afterValue</div>
<div class="cell" data-label="Column">tax2AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | الصافي</div>
<div class="cell" data-label="English">Tax 2 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.tax2.maxNormalPercent">
<div class="cell" data-label="Property">materials.tax2.maxNormalPercent</div>
<div class="cell" data-label="Column">tax2MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | %</div>
<div class="cell" data-label="English">Tax 2 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.tax2.percentage">
<div class="cell" data-label="Property">materials.tax2.percentage</div>
<div class="cell" data-label="Column">tax2Percentage</div>
<div class="cell" data-label="Arabic">قيمة إضافية 2</div>
<div class="cell" data-label="English">Tax 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.tax2.value">
<div class="cell" data-label="Property">materials.tax2.value</div>
<div class="cell" data-label="Column">tax2Value</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | القيمة</div>
<div class="cell" data-label="English">Tax 2 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.tax3.afterValue">
<div class="cell" data-label="Property">materials.tax3.afterValue</div>
<div class="cell" data-label="Column">tax3AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة 3 | الصافي</div>
<div class="cell" data-label="English">Tax 3 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.tax3.maxNormalPercent">
<div class="cell" data-label="Property">materials.tax3.maxNormalPercent</div>
<div class="cell" data-label="Column">tax3MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة 3 | %</div>
<div class="cell" data-label="English">Tax 3 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.tax3.percentage">
<div class="cell" data-label="Property">materials.tax3.percentage</div>
<div class="cell" data-label="Column">tax3Percentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.tax3.value">
<div class="cell" data-label="Property">materials.tax3.value</div>
<div class="cell" data-label="Column">tax3Value</div>
<div class="cell" data-label="Arabic">ضريبة 3 | القيمة</div>
<div class="cell" data-label="English">Tax 3 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.tax4.afterValue">
<div class="cell" data-label="Property">materials.tax4.afterValue</div>
<div class="cell" data-label="Column">tax4AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة 4 | الصافي</div>
<div class="cell" data-label="English">Tax 4 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.tax4.maxNormalPercent">
<div class="cell" data-label="Property">materials.tax4.maxNormalPercent</div>
<div class="cell" data-label="Column">tax4MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة 4 | %</div>
<div class="cell" data-label="English">Tax 4 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.tax4.percentage">
<div class="cell" data-label="Property">materials.tax4.percentage</div>
<div class="cell" data-label="Column">tax4Percentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.tax4.value">
<div class="cell" data-label="Property">materials.tax4.value</div>
<div class="cell" data-label="Column">tax4Value</div>
<div class="cell" data-label="Arabic">ضريبة 4 | القيمة</div>
<div class="cell" data-label="English">Tax 4 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.totalAfterDiscounts">
<div class="cell" data-label="Property">materials.totalAfterDiscounts</div>
<div class="cell" data-label="Column">totalAfterDiscounts</div>
<div class="cell" data-label="Arabic">الإجمالي بعد الخصم</div>
<div class="cell" data-label="English">Total After Discounts</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.totalAfterTaxes">
<div class="cell" data-label="Property">materials.totalAfterTaxes</div>
<div class="cell" data-label="Column">totalAfterTaxes</div>
<div class="cell" data-label="Arabic">الصافي بعد الضريبة</div>
<div class="cell" data-label="English">Total After Taxes</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.unitPrice">
<div class="cell" data-label="Property">materials.unitPrice</div>
<div class="cell" data-label="Column">unitPrice</div>
<div class="cell" data-label="Arabic">سعر الوحدة</div>
<div class="cell" data-label="English">Unit Price</div>
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

<div class="row searchable" id="materials.warrantyPercentage">
<div class="cell" data-label="Property">materials.warrantyPercentage</div>
<div class="cell" data-label="Column">warrantyPercentage</div>
<div class="cell" data-label="Arabic">الضمان  | %</div>
<div class="cell" data-label="English">Warranty | Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materials.warrantyValue">
<div class="cell" data-label="Property">materials.warrantyValue</div>
<div class="cell" data-label="Column">warrantyValue</div>
<div class="cell" data-label="Arabic">الضمان  | قيمة</div>
<div class="cell" data-label="English">Warranty | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>


</div>
</div>

<div id='resources' title='resources' class='searchable'>

## resources ( موارد التشغيل -  Resources)
**Table Name:** SrvJobOrderResLine, **Join Column:** srvCJobOrder_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="resources.actualPeriod">
<div class="cell" data-label="Property">resources.actualPeriod</div>
<div class="cell" data-label="Column">actualPeriod</div>
<div class="cell" data-label="Arabic">المدة الفعلية</div>
<div class="cell" data-label="English">Actual Period</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="resources.id">
<div class="cell" data-label="Property">resources.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="resources.lineNumber">
<div class="cell" data-label="Property">resources.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="resources.plannedPeriod">
<div class="cell" data-label="Property">resources.plannedPeriod</div>
<div class="cell" data-label="Column">plannedPeriod</div>
<div class="cell" data-label="Arabic">المدة المخططة</div>
<div class="cell" data-label="English">Standard Flat Rate</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="resources.resourcesCount">
<div class="cell" data-label="Property">resources.resourcesCount</div>
<div class="cell" data-label="Column">resourcesCount</div>
<div class="cell" data-label="Arabic">العدد</div>
<div class="cell" data-label="English">Resources Count</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="resources.task">
<div class="cell" data-label="Property">resources.task</div>
<div class="cell" data-label="Column">task_id</div>
<div class="cell" data-label="Arabic">المهمة</div>
<div class="cell" data-label="English">Task</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SrvCTask](/modules/srvcenter/SrvCTask.md) 
</div>
</div>


</div>
</div>

<div id='tasks' title='tasks' class='searchable'>

## tasks (المهام - Tasks)
**Table Name:** SrvJOrderTaskLine, **Join Column:** srvCJobOrder_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="tasks.b1">
<div class="cell" data-label="Property">tasks.b1</div>
<div class="cell" data-label="Column">b1</div>
<div class="cell" data-label="Arabic">Boolean 1</div>
<div class="cell" data-label="English">Boolean 1</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="tasks.b2">
<div class="cell" data-label="Property">tasks.b2</div>
<div class="cell" data-label="Column">b2</div>
<div class="cell" data-label="Arabic">Boolean 2</div>
<div class="cell" data-label="English">Boolean 2</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="tasks.b3">
<div class="cell" data-label="Property">tasks.b3</div>
<div class="cell" data-label="Column">b3</div>
<div class="cell" data-label="Arabic">Boolean 3</div>
<div class="cell" data-label="English">Boolean 3</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="tasks.b4">
<div class="cell" data-label="Property">tasks.b4</div>
<div class="cell" data-label="Column">b4</div>
<div class="cell" data-label="Arabic">Boolean 4</div>
<div class="cell" data-label="English">Boolean 4</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="tasks.b5">
<div class="cell" data-label="Property">tasks.b5</div>
<div class="cell" data-label="Column">b5</div>
<div class="cell" data-label="Arabic">Boolean 5</div>
<div class="cell" data-label="English">Boolean 5</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="tasks.customerPercentage">
<div class="cell" data-label="Property">tasks.customerPercentage</div>
<div class="cell" data-label="Column">customerPercentage</div>
<div class="cell" data-label="Arabic">العميل | %</div>
<div class="cell" data-label="English">Customer | Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.customerValue">
<div class="cell" data-label="Property">tasks.customerValue</div>
<div class="cell" data-label="Column">customerValue</div>
<div class="cell" data-label="Arabic">العميل | قيمة</div>
<div class="cell" data-label="English">Customer | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.date1">
<div class="cell" data-label="Property">tasks.date1</div>
<div class="cell" data-label="Column">date1</div>
<div class="cell" data-label="Arabic">تـــاريخ 1</div>
<div class="cell" data-label="English">Date 1</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="tasks.date2">
<div class="cell" data-label="Property">tasks.date2</div>
<div class="cell" data-label="Column">date2</div>
<div class="cell" data-label="Arabic">تـــاريخ 2</div>
<div class="cell" data-label="English">Date 2</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="tasks.date3">
<div class="cell" data-label="Property">tasks.date3</div>
<div class="cell" data-label="Column">date3</div>
<div class="cell" data-label="Arabic">تاريخ 3</div>
<div class="cell" data-label="English">Date3</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="tasks.date4">
<div class="cell" data-label="Property">tasks.date4</div>
<div class="cell" data-label="Column">date4</div>
<div class="cell" data-label="Arabic">تاريخ 4</div>
<div class="cell" data-label="English">Date4</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="tasks.date5">
<div class="cell" data-label="Property">tasks.date5</div>
<div class="cell" data-label="Column">date5</div>
<div class="cell" data-label="Arabic">تاريخ 5</div>
<div class="cell" data-label="English">Date5</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="tasks.discount1.afterValue">
<div class="cell" data-label="Property">tasks.discount1.afterValue</div>
<div class="cell" data-label="Column">discount1AfterValue</div>
<div class="cell" data-label="Arabic">خصم 1 | صافي</div>
<div class="cell" data-label="English">Discount 1 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.discount1.maxNormalPercent">
<div class="cell" data-label="Property">tasks.discount1.maxNormalPercent</div>
<div class="cell" data-label="Column">discount1MaxNormalPercent</div>
<div class="cell" data-label="Arabic">خصم 1 | النسبة العادية</div>
<div class="cell" data-label="English">Discount 1 | Normal Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.discount1.percentage">
<div class="cell" data-label="Property">tasks.discount1.percentage</div>
<div class="cell" data-label="Column">discount1Percentage</div>
<div class="cell" data-label="Arabic">خصم 1 | %</div>
<div class="cell" data-label="English">Discount 1 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.discount1.value">
<div class="cell" data-label="Property">tasks.discount1.value</div>
<div class="cell" data-label="Column">discount1Value</div>
<div class="cell" data-label="Arabic">خصم 1 | قيمة</div>
<div class="cell" data-label="English">Discount 1 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.discount2.afterValue">
<div class="cell" data-label="Property">tasks.discount2.afterValue</div>
<div class="cell" data-label="Column">discount2AfterValue</div>
<div class="cell" data-label="Arabic">خصم 2 | صافي</div>
<div class="cell" data-label="English">Discount 2 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.discount2.maxNormalPercent">
<div class="cell" data-label="Property">tasks.discount2.maxNormalPercent</div>
<div class="cell" data-label="Column">discount2MaxNormalPercent</div>
<div class="cell" data-label="Arabic">خصم 2 | النسبة العادية</div>
<div class="cell" data-label="English">Discount 2 | Normal Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.discount2.percentage">
<div class="cell" data-label="Property">tasks.discount2.percentage</div>
<div class="cell" data-label="Column">discount2Percentage</div>
<div class="cell" data-label="Arabic">خصم 2 | %</div>
<div class="cell" data-label="English">Discount 2 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.discount2.value">
<div class="cell" data-label="Property">tasks.discount2.value</div>
<div class="cell" data-label="Column">discount2Value</div>
<div class="cell" data-label="Arabic">خصم 2 | قيمة</div>
<div class="cell" data-label="English">Discount 2 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.hourPrice">
<div class="cell" data-label="Property">tasks.hourPrice</div>
<div class="cell" data-label="Column">hourPrice</div>
<div class="cell" data-label="Arabic">سعر الساعة</div>
<div class="cell" data-label="English">Hour Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.id">
<div class="cell" data-label="Property">tasks.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="tasks.insurancePercentage">
<div class="cell" data-label="Property">tasks.insurancePercentage</div>
<div class="cell" data-label="Column">insurancePercentage</div>
<div class="cell" data-label="Arabic">التأمين | %</div>
<div class="cell" data-label="English">Insurance | Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.insuranceValue">
<div class="cell" data-label="Property">tasks.insuranceValue</div>
<div class="cell" data-label="Column">insuranceValue</div>
<div class="cell" data-label="Arabic">التأمين | قيمة التأمين</div>
<div class="cell" data-label="English">Insurance Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.internalPercentage">
<div class="cell" data-label="Property">tasks.internalPercentage</div>
<div class="cell" data-label="Column">internalPercentage</div>
<div class="cell" data-label="Arabic">الشركة | %</div>
<div class="cell" data-label="English">Internal | Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.internalValue">
<div class="cell" data-label="Property">tasks.internalValue</div>
<div class="cell" data-label="Column">internalValue</div>
<div class="cell" data-label="Arabic">الشركة | القيمة</div>
<div class="cell" data-label="English">Internal | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.lineNumber">
<div class="cell" data-label="Property">tasks.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="tasks.masterRowId">
<div class="cell" data-label="Property">tasks.masterRowId</div>
<div class="cell" data-label="Column">masterRowId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="tasks.n1">
<div class="cell" data-label="Property">tasks.n1</div>
<div class="cell" data-label="Column">n1</div>
<div class="cell" data-label="Arabic">رقم 1</div>
<div class="cell" data-label="English">Number 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.n2">
<div class="cell" data-label="Property">tasks.n2</div>
<div class="cell" data-label="Column">n2</div>
<div class="cell" data-label="Arabic">رقم 2</div>
<div class="cell" data-label="English">Number 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.n3">
<div class="cell" data-label="Property">tasks.n3</div>
<div class="cell" data-label="Column">n3</div>
<div class="cell" data-label="Arabic">رقم 3</div>
<div class="cell" data-label="English">Number 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.n4">
<div class="cell" data-label="Property">tasks.n4</div>
<div class="cell" data-label="Column">n4</div>
<div class="cell" data-label="Arabic">رقم 4</div>
<div class="cell" data-label="English">Number 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.n5">
<div class="cell" data-label="Property">tasks.n5</div>
<div class="cell" data-label="Column">n5</div>
<div class="cell" data-label="Arabic">رقم 5</div>
<div class="cell" data-label="English">Number 5</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.recallCampaign">
<div class="cell" data-label="Property">tasks.recallCampaign</div>
<div class="cell" data-label="Column">recallCampaign_id</div>
<div class="cell" data-label="Arabic">حملة الإستدعاء</div>
<div class="cell" data-label="English">Recall Campaign</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [RecallCampaign](/modules/srvcenter/RecallCampaign.md) 
</div>
</div>

<div class="row searchable" id="tasks.ref1">
<div class="cell" data-label="Property">tasks.ref1</div>
<div class="cell gen-ref-column" data-label="Column">ref1ActualCode,  ref1Code,  ref1EntityType,  ref1Id</div>
<div class="cell" data-label="Arabic">مرجع 1</div>
<div class="cell" data-label="English">Reference 1</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="tasks.ref2">
<div class="cell" data-label="Property">tasks.ref2</div>
<div class="cell gen-ref-column" data-label="Column">ref2ActualCode,  ref2Code,  ref2EntityType,  ref2Id</div>
<div class="cell" data-label="Arabic">مرجع 2</div>
<div class="cell" data-label="English">Reference 2</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="tasks.ref3">
<div class="cell" data-label="Property">tasks.ref3</div>
<div class="cell gen-ref-column" data-label="Column">ref3ActualCode,  ref3Code,  ref3EntityType,  ref3Id</div>
<div class="cell" data-label="Arabic">مرجع 3</div>
<div class="cell" data-label="English">Reference 3</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="tasks.ref4">
<div class="cell" data-label="Property">tasks.ref4</div>
<div class="cell gen-ref-column" data-label="Column">ref4ActualCode,  ref4Code,  ref4EntityType,  ref4Id</div>
<div class="cell" data-label="Arabic">مرجع 4</div>
<div class="cell" data-label="English">Reference 4</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="tasks.ref5">
<div class="cell" data-label="Property">tasks.ref5</div>
<div class="cell gen-ref-column" data-label="Column">ref5ActualCode,  ref5Code,  ref5EntityType,  ref5Id</div>
<div class="cell" data-label="Arabic">مرجع 5</div>
<div class="cell" data-label="English">Reference 5</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="tasks.remarks">
<div class="cell" data-label="Property">tasks.remarks</div>
<div class="cell" data-label="Column">remarks</div>
<div class="cell" data-label="Arabic">ملاحظات</div>
<div class="cell" data-label="English">Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="tasks.sourceLineId">
<div class="cell" data-label="Property">tasks.sourceLineId</div>
<div class="cell" data-label="Column">sourceLineId</div>
<div class="cell" data-label="Arabic">معرف سطر المصدر</div>
<div class="cell" data-label="English">Source Line Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="tasks.srvcOperation">
<div class="cell" data-label="Property">tasks.srvcOperation</div>
<div class="cell" data-label="Column">srvcOperation_id</div>
<div class="cell" data-label="Arabic">الخدمة</div>
<div class="cell" data-label="English">Service Center Operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SrvCOperation](/modules/srvcenter/SrvCOperation.md) 
</div>
</div>

<div class="row searchable" id="tasks.status">
<div class="cell" data-label="Property">tasks.status</div>
<div class="cell" data-label="Column">status</div>
<div class="cell" data-label="Arabic">الحالة</div>
<div class="cell" data-label="English">Status</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="tasks.task">
<div class="cell" data-label="Property">tasks.task</div>
<div class="cell" data-label="Column">task_id</div>
<div class="cell" data-label="Arabic">المهمة</div>
<div class="cell" data-label="English">Task</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SrvCTask](/modules/srvcenter/SrvCTask.md) 
</div>
</div>

<div class="row searchable" id="tasks.tax1.afterValue">
<div class="cell" data-label="Property">tasks.tax1.afterValue</div>
<div class="cell" data-label="Column">tax1AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | الصافي</div>
<div class="cell" data-label="English">Tax | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.tax1.maxNormalPercent">
<div class="cell" data-label="Property">tasks.tax1.maxNormalPercent</div>
<div class="cell" data-label="Column">tax1MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | %</div>
<div class="cell" data-label="English">Item Tax | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.tax1.percentage">
<div class="cell" data-label="Property">tasks.tax1.percentage</div>
<div class="cell" data-label="Column">tax1Percentage</div>
<div class="cell" data-label="Arabic">قيمة إضافية 1</div>
<div class="cell" data-label="English">Tax 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.tax1.value">
<div class="cell" data-label="Property">tasks.tax1.value</div>
<div class="cell" data-label="Column">tax1Value</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | القيمة</div>
<div class="cell" data-label="English">Tax value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.tax2.afterValue">
<div class="cell" data-label="Property">tasks.tax2.afterValue</div>
<div class="cell" data-label="Column">tax2AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | الصافي</div>
<div class="cell" data-label="English">Tax 2 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.tax2.maxNormalPercent">
<div class="cell" data-label="Property">tasks.tax2.maxNormalPercent</div>
<div class="cell" data-label="Column">tax2MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | %</div>
<div class="cell" data-label="English">Tax 2 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.tax2.percentage">
<div class="cell" data-label="Property">tasks.tax2.percentage</div>
<div class="cell" data-label="Column">tax2Percentage</div>
<div class="cell" data-label="Arabic">قيمة إضافية 2</div>
<div class="cell" data-label="English">Tax 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.tax2.value">
<div class="cell" data-label="Property">tasks.tax2.value</div>
<div class="cell" data-label="Column">tax2Value</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | القيمة</div>
<div class="cell" data-label="English">Tax 2 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.tax3.afterValue">
<div class="cell" data-label="Property">tasks.tax3.afterValue</div>
<div class="cell" data-label="Column">tax3AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة 3 | الصافي</div>
<div class="cell" data-label="English">Tax 3 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.tax3.maxNormalPercent">
<div class="cell" data-label="Property">tasks.tax3.maxNormalPercent</div>
<div class="cell" data-label="Column">tax3MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة 3 | %</div>
<div class="cell" data-label="English">Tax 3 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.tax3.percentage">
<div class="cell" data-label="Property">tasks.tax3.percentage</div>
<div class="cell" data-label="Column">tax3Percentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.tax3.value">
<div class="cell" data-label="Property">tasks.tax3.value</div>
<div class="cell" data-label="Column">tax3Value</div>
<div class="cell" data-label="Arabic">ضريبة 3 | القيمة</div>
<div class="cell" data-label="English">Tax 3 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.tax4.afterValue">
<div class="cell" data-label="Property">tasks.tax4.afterValue</div>
<div class="cell" data-label="Column">tax4AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة 4 | الصافي</div>
<div class="cell" data-label="English">Tax 4 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.tax4.maxNormalPercent">
<div class="cell" data-label="Property">tasks.tax4.maxNormalPercent</div>
<div class="cell" data-label="Column">tax4MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة 4 | %</div>
<div class="cell" data-label="English">Tax 4 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.tax4.percentage">
<div class="cell" data-label="Property">tasks.tax4.percentage</div>
<div class="cell" data-label="Column">tax4Percentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.tax4.value">
<div class="cell" data-label="Property">tasks.tax4.value</div>
<div class="cell" data-label="Column">tax4Value</div>
<div class="cell" data-label="Arabic">ضريبة 4 | القيمة</div>
<div class="cell" data-label="English">Tax 4 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.technician">
<div class="cell" data-label="Property">tasks.technician</div>
<div class="cell" data-label="Column">technician_id</div>
<div class="cell" data-label="Arabic">الفني</div>
<div class="cell" data-label="English">Technician</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/modules/basic/Employee.md) 
</div>
</div>

<div class="row searchable" id="tasks.text1">
<div class="cell" data-label="Property">tasks.text1</div>
<div class="cell" data-label="Column">text1</div>
<div class="cell" data-label="Arabic">نــــص 1</div>
<div class="cell" data-label="English">Text 1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="tasks.text2">
<div class="cell" data-label="Property">tasks.text2</div>
<div class="cell" data-label="Column">text2</div>
<div class="cell" data-label="Arabic">نـــــص 2</div>
<div class="cell" data-label="English">Text 2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="tasks.text3">
<div class="cell" data-label="Property">tasks.text3</div>
<div class="cell" data-label="Column">text3</div>
<div class="cell" data-label="Arabic">نص 3</div>
<div class="cell" data-label="English">text3</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="tasks.text4">
<div class="cell" data-label="Property">tasks.text4</div>
<div class="cell" data-label="Column">text4</div>
<div class="cell" data-label="Arabic">نص 4</div>
<div class="cell" data-label="English">text4</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="tasks.text5">
<div class="cell" data-label="Property">tasks.text5</div>
<div class="cell" data-label="Column">text5</div>
<div class="cell" data-label="Arabic">نص 5</div>
<div class="cell" data-label="English">text5</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="tasks.theCount">
<div class="cell" data-label="Property">tasks.theCount</div>
<div class="cell" data-label="Column">theCount</div>
<div class="cell" data-label="Arabic">عدد</div>
<div class="cell" data-label="English">Count</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.totalAfterDiscounts">
<div class="cell" data-label="Property">tasks.totalAfterDiscounts</div>
<div class="cell" data-label="Column">totalAfterDiscounts</div>
<div class="cell" data-label="Arabic">الإجمالي بعد الخصم</div>
<div class="cell" data-label="English">Total After Discounts</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.totalAfterTaxes">
<div class="cell" data-label="Property">tasks.totalAfterTaxes</div>
<div class="cell" data-label="Column">totalAfterTaxes</div>
<div class="cell" data-label="Arabic">الصافي بعد الضريبة</div>
<div class="cell" data-label="English">Total After Taxes</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.totalCustomer">
<div class="cell" data-label="Property">tasks.totalCustomer</div>
<div class="cell" data-label="Column">totalCustomer</div>
<div class="cell" data-label="Arabic">الإجمالى | العميل</div>
<div class="cell" data-label="English">Total | Customer</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.totalHours">
<div class="cell" data-label="Property">tasks.totalHours</div>
<div class="cell" data-label="Column">totalHours</div>
<div class="cell" data-label="Arabic">المدة</div>
<div class="cell" data-label="English">Total Hours</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.totalInsurance">
<div class="cell" data-label="Property">tasks.totalInsurance</div>
<div class="cell" data-label="Column">totalInsurance</div>
<div class="cell" data-label="Arabic">الإجمالى | التأمين</div>
<div class="cell" data-label="English">Total | Insurance</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.totalInternal">
<div class="cell" data-label="Property">tasks.totalInternal</div>
<div class="cell" data-label="Column">totalInternal</div>
<div class="cell" data-label="Arabic">الإجمالى | الشركة</div>
<div class="cell" data-label="English">Total | Internal</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.totalPrice">
<div class="cell" data-label="Property">tasks.totalPrice</div>
<div class="cell" data-label="Column">totalPrice</div>
<div class="cell" data-label="Arabic">إجمالي السعر</div>
<div class="cell" data-label="English">  Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.totalWarranty">
<div class="cell" data-label="Property">tasks.totalWarranty</div>
<div class="cell" data-label="Column">totalWarranty</div>
<div class="cell" data-label="Arabic">الإجمالى | الضمان</div>
<div class="cell" data-label="English">Total | Warranty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.warrantyPercentage">
<div class="cell" data-label="Property">tasks.warrantyPercentage</div>
<div class="cell" data-label="Column">warrantyPercentage</div>
<div class="cell" data-label="Arabic">الضمان  | %</div>
<div class="cell" data-label="English">Warranty | Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.warrantyValue">
<div class="cell" data-label="Property">tasks.warrantyValue</div>
<div class="cell" data-label="Column">warrantyValue</div>
<div class="cell" data-label="Arabic">الضمان  | قيمة</div>
<div class="cell" data-label="English">Warranty | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="tasks.workCenter">
<div class="cell" data-label="Property">tasks.workCenter</div>
<div class="cell" data-label="Column">workCenter_id</div>
<div class="cell" data-label="Arabic">صالة الإنتاج</div>
<div class="cell" data-label="English">Work Center</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SrvCWorkCenter](/modules/srvcenter/SrvCWorkCenter.md) 
</div>
</div>


</div>
</div>

