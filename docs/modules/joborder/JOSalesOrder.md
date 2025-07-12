# JOSalesOrder
**Arabic:** أمر بيع زجاج جديد - أوامر بيع زجاج جديد
**English:** New Glass Sales Order - New Glass Sales Orders

<ContentFilter/>


<div class='searchable'>
<a href='#details'>details (JOSalesOrderLine) </a> , <a href='#joMeasures'>joMeasures (JOSalesOrderMeasureLine) </a> , <a href='#joOperations'>joOperations (JOOperationLine) </a> , <a href='#paymentLines'>paymentLines (JOSalesOrderPaymentLine) </a> , <a href='#productCosts'>productCosts (JOSalesOrderProductCostLine) </a>
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

<div class="row searchable" id="billingAddress.address1">
<div class="cell" data-label="Property">billingAddress.address1</div>
<div class="cell" data-label="Column">blAddress1</div>
<div class="cell" data-label="Arabic">عنوان 1</div>
<div class="cell" data-label="English">Address 1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="billingAddress.address2">
<div class="cell" data-label="Property">billingAddress.address2</div>
<div class="cell" data-label="Column">blAddress2</div>
<div class="cell" data-label="Arabic">رقم المبني</div>
<div class="cell" data-label="English">Building Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="billingAddress.area">
<div class="cell" data-label="Property">billingAddress.area</div>
<div class="cell" data-label="Column">blArea</div>
<div class="cell" data-label="Arabic">المنطقة</div>
<div class="cell" data-label="English">Area</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="billingAddress.buildingNumber">
<div class="cell" data-label="Property">billingAddress.buildingNumber</div>
<div class="cell" data-label="Column">blBuildingNumber</div>
<div class="cell" data-label="Arabic">رقم المبني</div>
<div class="cell" data-label="English">Building Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="billingAddress.city">
<div class="cell" data-label="Property">billingAddress.city</div>
<div class="cell" data-label="Column">blCity</div>
<div class="cell" data-label="Arabic">المدينة</div>
<div class="cell" data-label="English">City</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="billingAddress.country">
<div class="cell" data-label="Property">billingAddress.country</div>
<div class="cell" data-label="Column">blCountry</div>
<div class="cell" data-label="Arabic">الدولة</div>
<div class="cell" data-label="English">Country</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="billingAddress.countryCode">
<div class="cell" data-label="Property">billingAddress.countryCode</div>
<div class="cell" data-label="Column">blCountryCode</div>
<div class="cell" data-label="Arabic">كود الدولة</div>
<div class="cell" data-label="English">Country Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="billingAddress.district">
<div class="cell" data-label="Property">billingAddress.district</div>
<div class="cell" data-label="Column">blDistrict</div>
<div class="cell" data-label="Arabic">الحي</div>
<div class="cell" data-label="English">District</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="billingAddress.landPlotNumber">
<div class="cell" data-label="Property">billingAddress.landPlotNumber</div>
<div class="cell" data-label="Column">blLandPlotNumber</div>
<div class="cell" data-label="Arabic">رقم تعريفي للأرض</div>
<div class="cell" data-label="English">Land Plot Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="billingAddress.mapLocation">
<div class="cell" data-label="Property">billingAddress.mapLocation</div>
<div class="cell" data-label="Column">blMapLocation</div>
<div class="cell" data-label="Arabic">الموقع على الخريطة</div>
<div class="cell" data-label="English">Map Location</div>
<div class="cell" data-label="Type">LatLng</div>

</div>

<div class="row searchable" id="billingAddress.postalCode">
<div class="cell" data-label="Property">billingAddress.postalCode</div>
<div class="cell" data-label="Column">blPostalCode</div>
<div class="cell" data-label="Arabic">الكود البريدي</div>
<div class="cell" data-label="English">Postal Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="billingAddress.region">
<div class="cell" data-label="Property">billingAddress.region</div>
<div class="cell" data-label="Column">blRegion_id</div>
<div class="cell" data-label="Arabic">منطقة جغرافيه</div>
<div class="cell" data-label="English">Region</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AddressRegion](/modules/basic/AddressRegion.md) 
</div>
</div>

<div class="row searchable" id="billingAddress.state">
<div class="cell" data-label="Property">billingAddress.state</div>
<div class="cell" data-label="Column">blState</div>
<div class="cell" data-label="Arabic">المحافظة</div>
<div class="cell" data-label="English">State</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="billingAddress.street">
<div class="cell" data-label="Property">billingAddress.street</div>
<div class="cell" data-label="Column">blStreet</div>
<div class="cell" data-label="Arabic"> شارع</div>
<div class="cell" data-label="English"> Street</div>
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

<div class="row searchable" id="cancelReservation">
<div class="cell" data-label="Property">cancelReservation</div>
<div class="cell" data-label="Column">cancelReservation</div>
<div class="cell" data-label="Arabic">إلغاء الحجز</div>
<div class="cell" data-label="English">Cancel Reservation Of Related Docs</div>
<div class="cell" data-label="Type">Boolean</div>

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

 [Contact](/modules/basic/Contact.md) 
</div>
</div>

<div class="row searchable" id="createTransactionId">
<div class="cell" data-label="Property">createTransactionId</div>
<div class="cell" data-label="Column">createTransactionId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="createdFromCreationRules">
<div class="cell" data-label="Property">createdFromCreationRules</div>
<div class="cell" data-label="Column">createdFromCreationRules</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="creationDate">
<div class="cell" data-label="Property">creationDate</div>
<div class="cell" data-label="Column">creationDate</div>
<div class="cell" data-label="Arabic">تاريخ الإنشاء</div>
<div class="cell" data-label="English">Creation Date</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="creditInvoice">
<div class="cell" data-label="Property">creditInvoice</div>
<div class="cell" data-label="Column">creditInvoice</div>
<div class="cell" data-label="Arabic">اجلة</div>
<div class="cell" data-label="English">Credit</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="customerCommercialRegNo">
<div class="cell" data-label="Property">customerCommercialRegNo</div>
<div class="cell" data-label="Column">customerCommercialRegNo</div>
<div class="cell" data-label="Arabic">رقم السجل التجاري للعميل</div>
<div class="cell" data-label="English">Customer Commercial Registration Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="customerName1">
<div class="cell" data-label="Property">customerName1</div>
<div class="cell" data-label="Column">customerName1</div>
<div class="cell" data-label="Arabic">اسم العميل العربي</div>
<div class="cell" data-label="English">Arabic Customer Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="customerName2">
<div class="cell" data-label="Property">customerName2</div>
<div class="cell" data-label="Column">customerName2</div>
<div class="cell" data-label="Arabic">اسم العميل الإنجليزي</div>
<div class="cell" data-label="English">English Customer Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="customerReqNumber">
<div class="cell" data-label="Property">customerReqNumber</div>
<div class="cell" data-label="Column">customerReqNumber</div>
<div class="cell" data-label="Arabic">رقم طلب العميل</div>
<div class="cell" data-label="English">Customer Request Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="customerTaxRegNo">
<div class="cell" data-label="Property">customerTaxRegNo</div>
<div class="cell" data-label="Column">customerTaxRegNo</div>
<div class="cell" data-label="Arabic">رقم التسجيل الضريبي للعميل</div>
<div class="cell" data-label="English">Customer Tax Registration Number</div>
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

<div class="row searchable" id="date6">
<div class="cell" data-label="Property">date6</div>
<div class="cell" data-label="Column">date6</div>
<div class="cell" data-label="Arabic">تاريخ 6</div>
<div class="cell" data-label="English">Date6</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="delayStockDoc">
<div class="cell" data-label="Property">delayStockDoc</div>
<div class="cell" data-label="Column">delayStockDoc</div>
<div class="cell" data-label="Arabic">تأجيل إنشاء المستندات المخزنية</div>
<div class="cell" data-label="English">Delay Generating Stock Documents</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="delivStatus">
<div class="cell" data-label="Property">delivStatus</div>
<div class="cell" data-label="Column">delivStatus</div>
<div class="cell" data-label="Arabic">حالة التوصيل</div>
<div class="cell" data-label="English">deliveryStatus</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="deliveryCar">
<div class="cell" data-label="Property">deliveryCar</div>
<div class="cell" data-label="Column">deliveryCar_id</div>
<div class="cell" data-label="Arabic"> سيارة توصيل</div>
<div class="cell" data-label="English"> Delivery Car</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DeliveryCar](/modules/basic/DeliveryCar.md) 
</div>
</div>

<div class="row searchable" id="deliveryDate">
<div class="cell" data-label="Property">deliveryDate</div>
<div class="cell" data-label="Column">deliveryDate</div>
<div class="cell" data-label="Arabic">تاريخ التوصيل</div>
<div class="cell" data-label="English">Delivery Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="deliveryPeriod.uom">
<div class="cell" data-label="Property">deliveryPeriod.uom</div>
<div class="cell" data-label="Column">deliveryPeriodUom</div>
<div class="cell" data-label="Arabic">الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="deliveryPeriod.value">
<div class="cell" data-label="Property">deliveryPeriod.value</div>
<div class="cell" data-label="Column">deliveryPeriodValue</div>
<div class="cell" data-label="Arabic">القيمة</div>
<div class="cell" data-label="English">Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="deliveryTime">
<div class="cell" data-label="Property">deliveryTime</div>
<div class="cell" data-label="Column">deliveryTime</div>
<div class="cell" data-label="Arabic">وقت التوصيل</div>
<div class="cell" data-label="English">Time</div>
<div class="cell" data-label="Type">Time</div>

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

<div class="row searchable" id="destDimensions">
<div class="cell" data-label="Property">destDimensions</div>
<div class="cell" data-label="Column">destDimensions</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="dimensionsHistoryXml">
<div class="cell" data-label="Property">dimensionsHistoryXml</div>
<div class="cell" data-label="Column">dimensionsHistoryXml</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="discountCoupon">
<div class="cell" data-label="Property">discountCoupon</div>
<div class="cell" data-label="Column">discountCoupon_id</div>
<div class="cell" data-label="Arabic">قسيمة شراء</div>
<div class="cell" data-label="English">Discount Coupon</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DiscountCoupon](/modules/supplychain-sales/DiscountCoupon.md) 
</div>
</div>

<div class="row searchable" id="doNotCheckOverdraft">
<div class="cell" data-label="Property">doNotCheckOverdraft</div>
<div class="cell" data-label="Column">doNotCheckOverdraft</div>
<div class="cell" data-label="Arabic">عدم التأكد من السحب على المكشوف</div>
<div class="cell" data-label="English">Do Not Check Overdraft</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="doNotShowInStockDocs">
<div class="cell" data-label="Property">doNotShowInStockDocs</div>
<div class="cell" data-label="Column">doNotShowInStockDocs</div>
<div class="cell" data-label="Arabic">منع الظهور في بناءا على بالسندات المخزنية</div>
<div class="cell" data-label="English">Do Not Show In Stock Docs</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="doubleThickness">
<div class="cell" data-label="Property">doubleThickness</div>
<div class="cell" data-label="Column">doubleThickness</div>
<div class="cell" data-label="Arabic">سماكة الدبل</div>
<div class="cell" data-label="English">Double Thickness</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="downPaymentPercentage">
<div class="cell" data-label="Property">downPaymentPercentage</div>
<div class="cell" data-label="Column">downPaymentPercentage</div>
<div class="cell" data-label="Arabic">نسبة الدفعة المقدمة</div>
<div class="cell" data-label="English">Down Payment Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="downPaymentValue">
<div class="cell" data-label="Property">downPaymentValue</div>
<div class="cell" data-label="Column">downPaymentValue</div>
<div class="cell" data-label="Arabic">قيمة الدفعة المقدمة</div>
<div class="cell" data-label="English">Downpayment Value</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="driver">
<div class="cell" data-label="Property">driver</div>
<div class="cell" data-label="Column">driver_id</div>
<div class="cell" data-label="Arabic">السائق</div>
<div class="cell" data-label="English">Driver</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/modules/basic/Employee.md) 
</div>
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

<div class="row searchable" id="forcePriceList">
<div class="cell" data-label="Property">forcePriceList</div>
<div class="cell" data-label="Column">forcePriceList</div>
<div class="cell" data-label="Arabic">الالتزام بقوائم الأسعار</div>
<div class="cell" data-label="English">Force Price List</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="fromWarehouse">
<div class="cell" data-label="Property">fromWarehouse</div>
<div class="cell" data-label="Column">fromWarehouse_id</div>
<div class="cell" data-label="Arabic">من مخزن</div>
<div class="cell" data-label="English">From Warehouse</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="generatedByLine">
<div class="cell" data-label="Property">generatedByLine</div>
<div class="cell" data-label="Column">generatedByLine</div>
<div class="cell" data-label="Arabic">كود سطر الإنشاء</div>
<div class="cell" data-label="English">generated By Line</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="generatedDocCode">
<div class="cell" data-label="Property">generatedDocCode</div>
<div class="cell" data-label="Column">generatedDocCode</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="generatedDocsCount">
<div class="cell" data-label="Property">generatedDocsCount</div>
<div class="cell" data-label="Column">generatedDocsCount</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="generatedDocsXML">
<div class="cell" data-label="Property">generatedDocsXML</div>
<div class="cell" data-label="Column">generatedDocsXML</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

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

<div class="row searchable" id="hadOverdraft">
<div class="cell" data-label="Property">hadOverdraft</div>
<div class="cell" data-label="Column">hadOverdraft</div>
<div class="cell" data-label="Arabic">تسببت في مخزون مكشوف</div>
<div class="cell" data-label="English">Had Overdraft</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="hadOverdraftWithReserv">
<div class="cell" data-label="Property">hadOverdraftWithReserv</div>
<div class="cell" data-label="Column">hadOverdraftWithReserv</div>
<div class="cell" data-label="Arabic">تسببت في حجز مكشوف</div>
<div class="cell" data-label="English">Had Overdraft With Reserv</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="hakonaMatata">
<div class="cell" data-label="Property">hakonaMatata</div>
<div class="cell" data-label="Column">hakonaMatata</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

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

<div class="row searchable" id="invTransReqId">
<div class="cell" data-label="Property">invTransReqId</div>
<div class="cell" data-label="Column">invTransReqId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="invoiceClassification">
<div class="cell" data-label="Property">invoiceClassification</div>
<div class="cell" data-label="Column">invoiceClassification_id</div>
<div class="cell" data-label="Arabic">تصنيف الفاتورة</div>
<div class="cell" data-label="English">Invoice Classification</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvoiceClassification](/modules/supplychain/InvoiceClassification.md) 
</div>
</div>

<div class="row searchable" id="invoiceType">
<div class="cell" data-label="Property">invoiceType</div>
<div class="cell" data-label="Column">invoiceType</div>
<div class="cell" data-label="Arabic">نوع الفاتورة</div>
<div class="cell" data-label="English">Invoice Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="issueDate">
<div class="cell" data-label="Property">issueDate</div>
<div class="cell" data-label="Column">issueDate</div>
<div class="cell" data-label="Arabic">تاريخ التحرير</div>
<div class="cell" data-label="English">Issue Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="item1">
<div class="cell" data-label="Property">item1</div>
<div class="cell" data-label="Column">item1_id</div>
<div class="cell" data-label="Arabic">الصنف الأول</div>
<div class="cell" data-label="English">Item1</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/modules/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="item10">
<div class="cell" data-label="Property">item10</div>
<div class="cell" data-label="Column">item10_id</div>
<div class="cell" data-label="Arabic">الصنف العاشر</div>
<div class="cell" data-label="English">Item10</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/modules/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="item2">
<div class="cell" data-label="Property">item2</div>
<div class="cell" data-label="Column">item2_id</div>
<div class="cell" data-label="Arabic">الصنف التاني</div>
<div class="cell" data-label="English">Item2</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/modules/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="item3">
<div class="cell" data-label="Property">item3</div>
<div class="cell" data-label="Column">item3_id</div>
<div class="cell" data-label="Arabic">الصنف التالت</div>
<div class="cell" data-label="English">Item3</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/modules/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="item4">
<div class="cell" data-label="Property">item4</div>
<div class="cell" data-label="Column">item4_id</div>
<div class="cell" data-label="Arabic">الصنف الرابع</div>
<div class="cell" data-label="English">Item4</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/modules/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="item5">
<div class="cell" data-label="Property">item5</div>
<div class="cell" data-label="Column">item5_id</div>
<div class="cell" data-label="Arabic">الصنف الخامس</div>
<div class="cell" data-label="English">Item5</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/modules/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="item6">
<div class="cell" data-label="Property">item6</div>
<div class="cell" data-label="Column">item6_id</div>
<div class="cell" data-label="Arabic">الصنف السادس</div>
<div class="cell" data-label="English">Item6</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/modules/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="item7">
<div class="cell" data-label="Property">item7</div>
<div class="cell" data-label="Column">item7_id</div>
<div class="cell" data-label="Arabic">الصنف السابع</div>
<div class="cell" data-label="English">Item7</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/modules/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="item8">
<div class="cell" data-label="Property">item8</div>
<div class="cell" data-label="Column">item8_id</div>
<div class="cell" data-label="Arabic">الصنف التامن</div>
<div class="cell" data-label="English">Item8</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/modules/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="item9">
<div class="cell" data-label="Property">item9</div>
<div class="cell" data-label="Column">item9_id</div>
<div class="cell" data-label="Arabic">الصنف التاسع</div>
<div class="cell" data-label="English">Item9</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/modules/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="joBarcode">
<div class="cell" data-label="Property">joBarcode</div>
<div class="cell" data-label="Column">joBarcode</div>
<div class="cell" data-label="Arabic">الباركود</div>
<div class="cell" data-label="English">Barcode</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="joSalesType">
<div class="cell" data-label="Property">joSalesType</div>
<div class="cell" data-label="Column">joSalesType</div>
<div class="cell" data-label="Arabic">نوع أمر البيع</div>
<div class="cell" data-label="English">Job Order Sales Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="lastChangeVersion">
<div class="cell" data-label="Property">lastChangeVersion</div>
<div class="cell" data-label="Column">lastChangeVersion</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="lastMagentoComment">
<div class="cell" data-label="Property">lastMagentoComment</div>
<div class="cell" data-label="Column">lastMagentoComment</div>
<div class="cell" data-label="Arabic">Last Magento Comment</div>
<div class="cell" data-label="English">Last Magento Comment</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="lastMagentoStatus">
<div class="cell" data-label="Property">lastMagentoStatus</div>
<div class="cell" data-label="Column">lastMagentoStatus</div>
<div class="cell" data-label="Arabic">Last Magento Status</div>
<div class="cell" data-label="English">Last Magento Status</div>
<div class="cell" data-label="Type">Text</div>

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

<div class="row searchable" id="lineWithOriginalDetailsId">
<div class="cell" data-label="Property">lineWithOriginalDetailsId</div>
<div class="cell" data-label="Column">lineWithOriginalDetailsId</div>
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

 [Locator](/modules/supplychain/Locator.md) 
</div>
</div>

<div class="row searchable" id="lockVersion">
<div class="cell" data-label="Property">lockVersion</div>
<div class="cell" data-label="Column">lockVersion</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="magentoInvoiceCreated">
<div class="cell" data-label="Property">magentoInvoiceCreated</div>
<div class="cell" data-label="Column">magentoInvoiceCreated</div>
<div class="cell" data-label="Arabic">Magento Invoice Created</div>
<div class="cell" data-label="English">Magento Invoice Created</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="magentoInvoiceShipCreated">
<div class="cell" data-label="Property">magentoInvoiceShipCreated</div>
<div class="cell" data-label="Column">magentoInvoiceShipCreated</div>
<div class="cell" data-label="Arabic">Magento Invoice Shipping Created</div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="magentoSiteRef">
<div class="cell" data-label="Property">magentoSiteRef</div>
<div class="cell" data-label="Column">magentoSiteRef_id</div>
<div class="cell" data-label="Arabic">Magetno Site</div>
<div class="cell" data-label="English">Magetno Site</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MAGMagentoSite](/modules/magento/MAGMagentoSite.md) 
</div>
</div>

<div class="row searchable" id="magentoSourceEntityId">
<div class="cell" data-label="Property">magentoSourceEntityId</div>
<div class="cell" data-label="Column">magentoSourceEntityId</div>
<div class="cell" data-label="Arabic">Magento Source Entity ID</div>
<div class="cell" data-label="English">Magento Source Entity ID</div>
<div class="cell" data-label="Type">Long</div>

</div>

<div class="row searchable" id="magentoSourceId">
<div class="cell" data-label="Property">magentoSourceId</div>
<div class="cell" data-label="Column">magentoSourceId</div>
<div class="cell" data-label="Arabic">Magento Source Increament ID</div>
<div class="cell" data-label="English">Magento Source Increament ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="manualRef1">
<div class="cell" data-label="Property">manualRef1</div>
<div class="cell" data-label="Column">manualRef1</div>
<div class="cell" data-label="Arabic">رقم المستند اليدوي</div>
<div class="cell" data-label="English">Manual Ref1</div>
<div class="cell" data-label="Type">Text</div>

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

 [Currency](/modules/basic/Currency.md) 
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

 [Currency](/modules/basic/Currency.md) 
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

<div class="row searchable" id="nearestDeliveryDatesInfo">
<div class="cell" data-label="Property">nearestDeliveryDatesInfo</div>
<div class="cell" data-label="Column">nearestDeliveryDatesInfo</div>
<div class="cell" data-label="Arabic">معلومات اقرب تاريخ توصيل</div>
<div class="cell" data-label="English">Nearest Delivery Date Information</div>
<div class="cell" data-label="Type">Text</div>

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

<div class="row searchable" id="operation1.calculationFormula">
<div class="cell" data-label="Property">operation1.calculationFormula</div>
<div class="cell" data-label="Column">op1CalculationFormula_id</div>
<div class="cell" data-label="Arabic">تشغيلة 1 | الصيغه الحسابيه</div>
<div class="cell" data-label="English">Operation 1 | Calculation Formula</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CalculationFormula](/modules/supplychain/CalculationFormula.md) 
</div>
</div>

<div class="row searchable" id="operation1.executed">
<div class="cell" data-label="Property">operation1.executed</div>
<div class="cell" data-label="Column">op1Executed</div>
<div class="cell" data-label="Arabic">تشغيلة 1 | تم التنفيذ</div>
<div class="cell" data-label="English">Operation 1 | Executed</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation1.freeJOOperation">
<div class="cell" data-label="Property">operation1.freeJOOperation</div>
<div class="cell" data-label="Column">op1FreeJOOperation</div>
<div class="cell" data-label="Arabic">تشغيلة 1 | تشغيلة مجانية</div>
<div class="cell" data-label="English">Operation 1 | Free JOOperation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation1.minSalesQty">
<div class="cell" data-label="Property">operation1.minSalesQty</div>
<div class="cell" data-label="Column">op1MinSalesQty</div>
<div class="cell" data-label="Arabic">تشغيلة 1 | أقل كمية بيع</div>
<div class="cell" data-label="English">Operation 1 | min Sales Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation1.operation">
<div class="cell" data-label="Property">operation1.operation</div>
<div class="cell" data-label="Column">op1Operation_id</div>
<div class="cell" data-label="Arabic">تشغيلة 1 | تشغيلة</div>
<div class="cell" data-label="English">Operation 1 | Operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [JOOperation](/modules/joborder/JOOperation.md) 
</div>
</div>

<div class="row searchable" id="operation1.operationQty">
<div class="cell" data-label="Property">operation1.operationQty</div>
<div class="cell" data-label="Column">op1OperationQty</div>
<div class="cell" data-label="Arabic">تشغيلة 1 | كمية التشغيله</div>
<div class="cell" data-label="English">Operation 1 | Operation Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation1.salesPrice">
<div class="cell" data-label="Property">operation1.salesPrice</div>
<div class="cell" data-label="Column">op1SalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 1 | سعر البيع</div>
<div class="cell" data-label="English">Operation 1 | Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation1.thickText">
<div class="cell" data-label="Property">operation1.thickText</div>
<div class="cell" data-label="Column">op1ThickText</div>
<div class="cell" data-label="Arabic">تشغيلة 1 | سماكة</div>
<div class="cell" data-label="English">Operation 1 | Thick Text</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="operation1.totalCost">
<div class="cell" data-label="Property">operation1.totalCost</div>
<div class="cell" data-label="Column">op1TotalCost</div>
<div class="cell" data-label="Arabic">تشغيلة 1 | إجمالي تكلفة التشغيلة</div>
<div class="cell" data-label="English">Operation 1 | Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation1.totalSalesPrice">
<div class="cell" data-label="Property">operation1.totalSalesPrice</div>
<div class="cell" data-label="Column">op1TotalSalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 1 | إجمالي بيع التشغيلة</div>
<div class="cell" data-label="English">Operation 1 | Total Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation1.underProcedure">
<div class="cell" data-label="Property">operation1.underProcedure</div>
<div class="cell" data-label="Column">op1UnderProcedure</div>
<div class="cell" data-label="Arabic">تشغيلة 1 | تحت الإجراء</div>
<div class="cell" data-label="English">Operation 1 | Under Procedure</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation1.unitCost">
<div class="cell" data-label="Property">operation1.unitCost</div>
<div class="cell" data-label="Column">op1UnitCost</div>
<div class="cell" data-label="Arabic">تشغيلة 1 | تكلفة الوحده</div>
<div class="cell" data-label="English">Operation 1 | Unit Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation1.uom">
<div class="cell" data-label="Property">operation1.uom</div>
<div class="cell" data-label="Column">op1Uom_id</div>
<div class="cell" data-label="Arabic">تشغيلة 1 | الوحدة</div>
<div class="cell" data-label="English">Operation 1 | Uom</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="operation10.calculationFormula">
<div class="cell" data-label="Property">operation10.calculationFormula</div>
<div class="cell" data-label="Column">op10CalculationFormula_id</div>
<div class="cell" data-label="Arabic">تشغيلة 10 | الصيغه الحسابيه</div>
<div class="cell" data-label="English">Operation 10 | Calculation Formula</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CalculationFormula](/modules/supplychain/CalculationFormula.md) 
</div>
</div>

<div class="row searchable" id="operation10.executed">
<div class="cell" data-label="Property">operation10.executed</div>
<div class="cell" data-label="Column">op10Executed</div>
<div class="cell" data-label="Arabic">تشغيلة 10 | تم التنفيذ</div>
<div class="cell" data-label="English">Operation 10 | Executed</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation10.freeJOOperation">
<div class="cell" data-label="Property">operation10.freeJOOperation</div>
<div class="cell" data-label="Column">op10FreeJOOperation</div>
<div class="cell" data-label="Arabic">تشغيلة 10 | تشغيلة مجانية</div>
<div class="cell" data-label="English">Operation 10 | Free JOOperation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation10.minSalesQty">
<div class="cell" data-label="Property">operation10.minSalesQty</div>
<div class="cell" data-label="Column">op10MinSalesQty</div>
<div class="cell" data-label="Arabic">تشغيلة 10 | أقل كمية بيع</div>
<div class="cell" data-label="English">Operation 10 | min Sales Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation10.operation">
<div class="cell" data-label="Property">operation10.operation</div>
<div class="cell" data-label="Column">op10Operation_id</div>
<div class="cell" data-label="Arabic">تشغيلة 10 | تشغيلة</div>
<div class="cell" data-label="English">Operation 10 | Operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [JOOperation](/modules/joborder/JOOperation.md) 
</div>
</div>

<div class="row searchable" id="operation10.operationQty">
<div class="cell" data-label="Property">operation10.operationQty</div>
<div class="cell" data-label="Column">op10OperationQty</div>
<div class="cell" data-label="Arabic">تشغيلة 10 | كمية التشغيله</div>
<div class="cell" data-label="English">Operation 10 | Operation Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation10.salesPrice">
<div class="cell" data-label="Property">operation10.salesPrice</div>
<div class="cell" data-label="Column">op10SalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 10 | سعر البيع</div>
<div class="cell" data-label="English">Operation 10 | Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation10.thickText">
<div class="cell" data-label="Property">operation10.thickText</div>
<div class="cell" data-label="Column">op10ThickText</div>
<div class="cell" data-label="Arabic">تشغيلة 10 | سماكة</div>
<div class="cell" data-label="English">Operation 10 | Thick Text</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="operation10.totalCost">
<div class="cell" data-label="Property">operation10.totalCost</div>
<div class="cell" data-label="Column">op10TotalCost</div>
<div class="cell" data-label="Arabic">تشغيلة 10 | إجمالي تكلفة التشغيلة</div>
<div class="cell" data-label="English">Operation 10 | Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation10.totalSalesPrice">
<div class="cell" data-label="Property">operation10.totalSalesPrice</div>
<div class="cell" data-label="Column">op10TotalSalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 10 | إجمالي بيع التشغيلة</div>
<div class="cell" data-label="English">Operation 10 | Total Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation10.underProcedure">
<div class="cell" data-label="Property">operation10.underProcedure</div>
<div class="cell" data-label="Column">op10UnderProcedure</div>
<div class="cell" data-label="Arabic">تشغيلة 10 | تحت الإجراء</div>
<div class="cell" data-label="English">Operation 10 | Under Procedure</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation10.unitCost">
<div class="cell" data-label="Property">operation10.unitCost</div>
<div class="cell" data-label="Column">op10UnitCost</div>
<div class="cell" data-label="Arabic">تشغيلة 10 | تكلفة الوحده</div>
<div class="cell" data-label="English">Operation 10 | Unit Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation10.uom">
<div class="cell" data-label="Property">operation10.uom</div>
<div class="cell" data-label="Column">op10Uom_id</div>
<div class="cell" data-label="Arabic">تشغيلة 10 | الوحدة</div>
<div class="cell" data-label="English">Operation 10 | Uom</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="operation11.calculationFormula">
<div class="cell" data-label="Property">operation11.calculationFormula</div>
<div class="cell" data-label="Column">op11CalculationFormula_id</div>
<div class="cell" data-label="Arabic">تشغيلة 11 | الصيغه الحسابيه</div>
<div class="cell" data-label="English">Operation 11 | Calculation Formula</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CalculationFormula](/modules/supplychain/CalculationFormula.md) 
</div>
</div>

<div class="row searchable" id="operation11.executed">
<div class="cell" data-label="Property">operation11.executed</div>
<div class="cell" data-label="Column">op11Executed</div>
<div class="cell" data-label="Arabic">تشغيلة 11 | تم التنفيذ</div>
<div class="cell" data-label="English">Operation 11 | Executed</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation11.freeJOOperation">
<div class="cell" data-label="Property">operation11.freeJOOperation</div>
<div class="cell" data-label="Column">op11FreeJOOperation</div>
<div class="cell" data-label="Arabic">تشغيلة 11 | تشغيلة مجانية</div>
<div class="cell" data-label="English">Operation 11 | Free JOOperation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation11.minSalesQty">
<div class="cell" data-label="Property">operation11.minSalesQty</div>
<div class="cell" data-label="Column">op11MinSalesQty</div>
<div class="cell" data-label="Arabic">تشغيلة 11 | أقل كمية بيع</div>
<div class="cell" data-label="English">Operation 11 | min Sales Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation11.operation">
<div class="cell" data-label="Property">operation11.operation</div>
<div class="cell" data-label="Column">op11Operation_id</div>
<div class="cell" data-label="Arabic">تشغيلة 11 | تشغيلة</div>
<div class="cell" data-label="English">Operation 11 | Operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [JOOperation](/modules/joborder/JOOperation.md) 
</div>
</div>

<div class="row searchable" id="operation11.operationQty">
<div class="cell" data-label="Property">operation11.operationQty</div>
<div class="cell" data-label="Column">op11OperationQty</div>
<div class="cell" data-label="Arabic">تشغيلة 11 | كمية التشغيله</div>
<div class="cell" data-label="English">Operation 11 | Operation Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation11.salesPrice">
<div class="cell" data-label="Property">operation11.salesPrice</div>
<div class="cell" data-label="Column">op11SalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 11 | سعر البيع</div>
<div class="cell" data-label="English">Operation 11 | SalesPrice</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation11.thickText">
<div class="cell" data-label="Property">operation11.thickText</div>
<div class="cell" data-label="Column">op11ThickText</div>
<div class="cell" data-label="Arabic">تشغيلة 11 | سماكة</div>
<div class="cell" data-label="English">Operation 11 | Thick Text</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="operation11.totalCost">
<div class="cell" data-label="Property">operation11.totalCost</div>
<div class="cell" data-label="Column">op11TotalCost</div>
<div class="cell" data-label="Arabic">تشغيلة 11 | إجمالي تكلفة التشغيلة</div>
<div class="cell" data-label="English">Operation 11 | Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation11.totalSalesPrice">
<div class="cell" data-label="Property">operation11.totalSalesPrice</div>
<div class="cell" data-label="Column">op11TotalSalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 11 | إجمالي بيع التشغيلة</div>
<div class="cell" data-label="English">Operation 11 | Total Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation11.underProcedure">
<div class="cell" data-label="Property">operation11.underProcedure</div>
<div class="cell" data-label="Column">op11UnderProcedure</div>
<div class="cell" data-label="Arabic">تشغيلة 11 | تحت الإجراء</div>
<div class="cell" data-label="English">Operation 11 | Under Procedure</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation11.unitCost">
<div class="cell" data-label="Property">operation11.unitCost</div>
<div class="cell" data-label="Column">op11UnitCost</div>
<div class="cell" data-label="Arabic">تشغيلة 11 | تكلفة الوحده</div>
<div class="cell" data-label="English">Operation 11 | Unit Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation11.uom">
<div class="cell" data-label="Property">operation11.uom</div>
<div class="cell" data-label="Column">op11Uom_id</div>
<div class="cell" data-label="Arabic">تشغيلة 11 | الوحدة</div>
<div class="cell" data-label="English">Operation 11 | Uom</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="operation12.calculationFormula">
<div class="cell" data-label="Property">operation12.calculationFormula</div>
<div class="cell" data-label="Column">op12CalculationFormula_id</div>
<div class="cell" data-label="Arabic">تشغيلة 12 | الصيغه الحسابيه</div>
<div class="cell" data-label="English">Operation 12 | Calculation Formula</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CalculationFormula](/modules/supplychain/CalculationFormula.md) 
</div>
</div>

<div class="row searchable" id="operation12.executed">
<div class="cell" data-label="Property">operation12.executed</div>
<div class="cell" data-label="Column">op12Executed</div>
<div class="cell" data-label="Arabic">تشغيلة 12 | تم التنفيذ</div>
<div class="cell" data-label="English">Operation 12 | Executed</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation12.freeJOOperation">
<div class="cell" data-label="Property">operation12.freeJOOperation</div>
<div class="cell" data-label="Column">op12FreeJOOperation</div>
<div class="cell" data-label="Arabic">تشغيلة 12 | تشغيلة مجانية</div>
<div class="cell" data-label="English">Operation 12 | Free JOOperation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation12.minSalesQty">
<div class="cell" data-label="Property">operation12.minSalesQty</div>
<div class="cell" data-label="Column">op12MinSalesQty</div>
<div class="cell" data-label="Arabic">تشغيلة 12 | أقل كمية بيع</div>
<div class="cell" data-label="English">Operation 12 | min Sales Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation12.operation">
<div class="cell" data-label="Property">operation12.operation</div>
<div class="cell" data-label="Column">op12Operation_id</div>
<div class="cell" data-label="Arabic">تشغيلة 12 | تشغيلة</div>
<div class="cell" data-label="English">Operation 12 | Operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [JOOperation](/modules/joborder/JOOperation.md) 
</div>
</div>

<div class="row searchable" id="operation12.operationQty">
<div class="cell" data-label="Property">operation12.operationQty</div>
<div class="cell" data-label="Column">op12OperationQty</div>
<div class="cell" data-label="Arabic">تشغيلة 12 | كمية التشغيله</div>
<div class="cell" data-label="English">Operation 12 | Operation Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation12.salesPrice">
<div class="cell" data-label="Property">operation12.salesPrice</div>
<div class="cell" data-label="Column">op12SalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 12 | سعر البيع</div>
<div class="cell" data-label="English">Operation 12 | Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation12.thickText">
<div class="cell" data-label="Property">operation12.thickText</div>
<div class="cell" data-label="Column">op12ThickText</div>
<div class="cell" data-label="Arabic">تشغيلة 12 | سماكة</div>
<div class="cell" data-label="English">Operation 12 | Thick Text</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="operation12.totalCost">
<div class="cell" data-label="Property">operation12.totalCost</div>
<div class="cell" data-label="Column">op12TotalCost</div>
<div class="cell" data-label="Arabic">تشغيلة 12 | إجمالي تكلفة التشغيلة</div>
<div class="cell" data-label="English">Operation 12 | Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation12.totalSalesPrice">
<div class="cell" data-label="Property">operation12.totalSalesPrice</div>
<div class="cell" data-label="Column">op12TotalSalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 12 | إجمالي بيع التشغيلة</div>
<div class="cell" data-label="English">Operation 12 | Total Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation12.underProcedure">
<div class="cell" data-label="Property">operation12.underProcedure</div>
<div class="cell" data-label="Column">op12UnderProcedure</div>
<div class="cell" data-label="Arabic">تشغيلة 12 | تحت الإجراء</div>
<div class="cell" data-label="English">Operation 12 | Under Procedure</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation12.unitCost">
<div class="cell" data-label="Property">operation12.unitCost</div>
<div class="cell" data-label="Column">op12UnitCost</div>
<div class="cell" data-label="Arabic">تشغيلة 12 | تكلفة الوحده</div>
<div class="cell" data-label="English">Operation 12 | Unit Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation12.uom">
<div class="cell" data-label="Property">operation12.uom</div>
<div class="cell" data-label="Column">op12Uom_id</div>
<div class="cell" data-label="Arabic">تشغيلة 12 | الوحدة</div>
<div class="cell" data-label="English">Operation 12 | Uom</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="operation13.calculationFormula">
<div class="cell" data-label="Property">operation13.calculationFormula</div>
<div class="cell" data-label="Column">op13CalculationFormula_id</div>
<div class="cell" data-label="Arabic">تشغيلة 13 | الصيغه الحسابيه</div>
<div class="cell" data-label="English">Operation 13 | Calculation Formula</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CalculationFormula](/modules/supplychain/CalculationFormula.md) 
</div>
</div>

<div class="row searchable" id="operation13.executed">
<div class="cell" data-label="Property">operation13.executed</div>
<div class="cell" data-label="Column">op13Executed</div>
<div class="cell" data-label="Arabic">تشغيلة 13 | تم التنفيذ</div>
<div class="cell" data-label="English">Operation 13 | Executed</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation13.freeJOOperation">
<div class="cell" data-label="Property">operation13.freeJOOperation</div>
<div class="cell" data-label="Column">op13FreeJOOperation</div>
<div class="cell" data-label="Arabic">تشغيلة 13 | تشغيلة مجانية</div>
<div class="cell" data-label="English">Operation 13 | Free JOOperation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation13.minSalesQty">
<div class="cell" data-label="Property">operation13.minSalesQty</div>
<div class="cell" data-label="Column">op13MinSalesQty</div>
<div class="cell" data-label="Arabic">تشغيلة 13 | أقل كمية بيع</div>
<div class="cell" data-label="English">Operation 13 | min Sales Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation13.operation">
<div class="cell" data-label="Property">operation13.operation</div>
<div class="cell" data-label="Column">op13Operation_id</div>
<div class="cell" data-label="Arabic">تشغيلة 13 | تشغيلة</div>
<div class="cell" data-label="English">Operation 13 | Operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [JOOperation](/modules/joborder/JOOperation.md) 
</div>
</div>

<div class="row searchable" id="operation13.operationQty">
<div class="cell" data-label="Property">operation13.operationQty</div>
<div class="cell" data-label="Column">op13OperationQty</div>
<div class="cell" data-label="Arabic">تشغيلة 13 | كمية التشغيله</div>
<div class="cell" data-label="English">Operation 13 | Operation Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation13.salesPrice">
<div class="cell" data-label="Property">operation13.salesPrice</div>
<div class="cell" data-label="Column">op13SalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 13 | سعر البيع</div>
<div class="cell" data-label="English">Operation 13 | Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation13.thickText">
<div class="cell" data-label="Property">operation13.thickText</div>
<div class="cell" data-label="Column">op13ThickText</div>
<div class="cell" data-label="Arabic">تشغيلة 13 | سماكة</div>
<div class="cell" data-label="English">Operation 13 | Thick Text</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="operation13.totalCost">
<div class="cell" data-label="Property">operation13.totalCost</div>
<div class="cell" data-label="Column">op13TotalCost</div>
<div class="cell" data-label="Arabic">تشغيلة 13 | إجمالي تكلفة التشغيلة</div>
<div class="cell" data-label="English">Operation 13 | Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation13.totalSalesPrice">
<div class="cell" data-label="Property">operation13.totalSalesPrice</div>
<div class="cell" data-label="Column">op13TotalSalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 13 | إجمالي بيع التشغيلة</div>
<div class="cell" data-label="English">Operation 13 | Total Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation13.underProcedure">
<div class="cell" data-label="Property">operation13.underProcedure</div>
<div class="cell" data-label="Column">op13UnderProcedure</div>
<div class="cell" data-label="Arabic">تشغيلة 13 | تحت الإجراء</div>
<div class="cell" data-label="English">Operation 13 | Under Procedure</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation13.unitCost">
<div class="cell" data-label="Property">operation13.unitCost</div>
<div class="cell" data-label="Column">op13UnitCost</div>
<div class="cell" data-label="Arabic">تشغيلة 13 | تكلفة الوحده</div>
<div class="cell" data-label="English">Operation 13 | Unit Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation13.uom">
<div class="cell" data-label="Property">operation13.uom</div>
<div class="cell" data-label="Column">op13Uom_id</div>
<div class="cell" data-label="Arabic">تشغيلة 13 | الوحدة</div>
<div class="cell" data-label="English">Operation 13 | Uom</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="operation14.calculationFormula">
<div class="cell" data-label="Property">operation14.calculationFormula</div>
<div class="cell" data-label="Column">op14CalculationFormula_id</div>
<div class="cell" data-label="Arabic">تشغيلة 14 | الصيغه الحسابيه</div>
<div class="cell" data-label="English">Operation 14 | Calculation Formula</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CalculationFormula](/modules/supplychain/CalculationFormula.md) 
</div>
</div>

<div class="row searchable" id="operation14.executed">
<div class="cell" data-label="Property">operation14.executed</div>
<div class="cell" data-label="Column">op14Executed</div>
<div class="cell" data-label="Arabic">تشغيلة 14 | تم التنفيذ</div>
<div class="cell" data-label="English">Operation 14 | Executed</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation14.freeJOOperation">
<div class="cell" data-label="Property">operation14.freeJOOperation</div>
<div class="cell" data-label="Column">op14FreeJOOperation</div>
<div class="cell" data-label="Arabic">تشغيلة 14 | تشغيلة مجانية</div>
<div class="cell" data-label="English">Operation 14 | Free JOOperation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation14.minSalesQty">
<div class="cell" data-label="Property">operation14.minSalesQty</div>
<div class="cell" data-label="Column">op14MinSalesQty</div>
<div class="cell" data-label="Arabic">تشغيلة 14 | أقل كمية بيع</div>
<div class="cell" data-label="English">Operation 14 | min Sales Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation14.operation">
<div class="cell" data-label="Property">operation14.operation</div>
<div class="cell" data-label="Column">op14Operation_id</div>
<div class="cell" data-label="Arabic">تشغيلة 14 | تشغيلة</div>
<div class="cell" data-label="English">Operation 14 | Operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [JOOperation](/modules/joborder/JOOperation.md) 
</div>
</div>

<div class="row searchable" id="operation14.operationQty">
<div class="cell" data-label="Property">operation14.operationQty</div>
<div class="cell" data-label="Column">op14OperationQty</div>
<div class="cell" data-label="Arabic">تشغيلة 14 | كمية التشغيله</div>
<div class="cell" data-label="English">Operation 14 | Operation Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation14.salesPrice">
<div class="cell" data-label="Property">operation14.salesPrice</div>
<div class="cell" data-label="Column">op14SalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 14 | سعر البيع</div>
<div class="cell" data-label="English">Operation 14 | Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation14.thickText">
<div class="cell" data-label="Property">operation14.thickText</div>
<div class="cell" data-label="Column">op14ThickText</div>
<div class="cell" data-label="Arabic">تشغيلة 14 | سماكة</div>
<div class="cell" data-label="English">Operation 14 | Thick Text</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="operation14.totalCost">
<div class="cell" data-label="Property">operation14.totalCost</div>
<div class="cell" data-label="Column">op14TotalCost</div>
<div class="cell" data-label="Arabic">تشغيلة 14 | إجمالي تكلفة التشغيلة</div>
<div class="cell" data-label="English">Operation 14 | Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation14.totalSalesPrice">
<div class="cell" data-label="Property">operation14.totalSalesPrice</div>
<div class="cell" data-label="Column">op14TotalSalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 14 | إجمالي بيع التشغيلة</div>
<div class="cell" data-label="English">Operation 14 | Total Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation14.underProcedure">
<div class="cell" data-label="Property">operation14.underProcedure</div>
<div class="cell" data-label="Column">op14UnderProcedure</div>
<div class="cell" data-label="Arabic">تشغيلة 14 | تحت الإجراء</div>
<div class="cell" data-label="English">Operation 14 | Under Procedure</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation14.unitCost">
<div class="cell" data-label="Property">operation14.unitCost</div>
<div class="cell" data-label="Column">op14UnitCost</div>
<div class="cell" data-label="Arabic">تشغيلة 14 | تكلفة الوحده</div>
<div class="cell" data-label="English">Operation 14 | Unit Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation14.uom">
<div class="cell" data-label="Property">operation14.uom</div>
<div class="cell" data-label="Column">op14Uom_id</div>
<div class="cell" data-label="Arabic">تشغيلة 14 | الوحدة</div>
<div class="cell" data-label="English">Operation 14 | Uom</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="operation15.calculationFormula">
<div class="cell" data-label="Property">operation15.calculationFormula</div>
<div class="cell" data-label="Column">op15CalculationFormula_id</div>
<div class="cell" data-label="Arabic">تشغيلة 15 | الصيغه الحسابيه</div>
<div class="cell" data-label="English">Operation 15 | Calculation Formula</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CalculationFormula](/modules/supplychain/CalculationFormula.md) 
</div>
</div>

<div class="row searchable" id="operation15.executed">
<div class="cell" data-label="Property">operation15.executed</div>
<div class="cell" data-label="Column">op15Executed</div>
<div class="cell" data-label="Arabic">تم التنفيذ</div>
<div class="cell" data-label="English">Operation 15 | Executed</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation15.freeJOOperation">
<div class="cell" data-label="Property">operation15.freeJOOperation</div>
<div class="cell" data-label="Column">op15FreeJOOperation</div>
<div class="cell" data-label="Arabic">تشغيلة 15 | تشغيلة مجانية</div>
<div class="cell" data-label="English">Operation 15 | Free JOOperation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation15.minSalesQty">
<div class="cell" data-label="Property">operation15.minSalesQty</div>
<div class="cell" data-label="Column">op15MinSalesQty</div>
<div class="cell" data-label="Arabic">تشغيلة 15 | أقل كمية بيع</div>
<div class="cell" data-label="English">Operation 15 | min Sales Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation15.operation">
<div class="cell" data-label="Property">operation15.operation</div>
<div class="cell" data-label="Column">op15Operation_id</div>
<div class="cell" data-label="Arabic">تشغيلة 15 | تشغيلة</div>
<div class="cell" data-label="English">Operation 15 | Operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [JOOperation](/modules/joborder/JOOperation.md) 
</div>
</div>

<div class="row searchable" id="operation15.operationQty">
<div class="cell" data-label="Property">operation15.operationQty</div>
<div class="cell" data-label="Column">op15OperationQty</div>
<div class="cell" data-label="Arabic">تشغيلة 15 | كمية التشغيله</div>
<div class="cell" data-label="English">Operation 15 | Operation Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation15.salesPrice">
<div class="cell" data-label="Property">operation15.salesPrice</div>
<div class="cell" data-label="Column">op15SalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 15 | سعر البيع</div>
<div class="cell" data-label="English">Operation 15 | Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation15.thickText">
<div class="cell" data-label="Property">operation15.thickText</div>
<div class="cell" data-label="Column">op15ThickText</div>
<div class="cell" data-label="Arabic">تشغيلة 15 | سماكة</div>
<div class="cell" data-label="English">Operation 15 | Thick Text</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="operation15.totalCost">
<div class="cell" data-label="Property">operation15.totalCost</div>
<div class="cell" data-label="Column">op15TotalCost</div>
<div class="cell" data-label="Arabic">تشغيلة 15 | إجمالي تكلفة التشغيلة</div>
<div class="cell" data-label="English">Operation 15 | Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation15.totalSalesPrice">
<div class="cell" data-label="Property">operation15.totalSalesPrice</div>
<div class="cell" data-label="Column">op15TotalSalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 15 | إجمالي بيع التشغيلة</div>
<div class="cell" data-label="English">Operation 15 | Total Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation15.underProcedure">
<div class="cell" data-label="Property">operation15.underProcedure</div>
<div class="cell" data-label="Column">op15UnderProcedure</div>
<div class="cell" data-label="Arabic">تشغيلة 15 | تحت الإجراء</div>
<div class="cell" data-label="English">Operation 15 | Under Procedure</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation15.unitCost">
<div class="cell" data-label="Property">operation15.unitCost</div>
<div class="cell" data-label="Column">op15UnitCost</div>
<div class="cell" data-label="Arabic">تشغيلة 15 | تكلفة الوحده</div>
<div class="cell" data-label="English">Operation 15 | Unit Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation15.uom">
<div class="cell" data-label="Property">operation15.uom</div>
<div class="cell" data-label="Column">op15Uom_id</div>
<div class="cell" data-label="Arabic">تشغيلة 15 | الوحدة</div>
<div class="cell" data-label="English">Operation 15 | Uom</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="operation2.calculationFormula">
<div class="cell" data-label="Property">operation2.calculationFormula</div>
<div class="cell" data-label="Column">op2CalculationFormula_id</div>
<div class="cell" data-label="Arabic">تشغيلة 2 | الصيغه الحسابيه</div>
<div class="cell" data-label="English">Operation 2 | Calculation Formula</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CalculationFormula](/modules/supplychain/CalculationFormula.md) 
</div>
</div>

<div class="row searchable" id="operation2.executed">
<div class="cell" data-label="Property">operation2.executed</div>
<div class="cell" data-label="Column">op2Executed</div>
<div class="cell" data-label="Arabic">تشغيلة 2 | تم التنفيذ</div>
<div class="cell" data-label="English">Operation 2 | Executed</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation2.freeJOOperation">
<div class="cell" data-label="Property">operation2.freeJOOperation</div>
<div class="cell" data-label="Column">op2FreeJOOperation</div>
<div class="cell" data-label="Arabic">تشغيلة 2 | تشغيلة مجاني</div>
<div class="cell" data-label="English">Operation 2 | Free JOOperation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation2.minSalesQty">
<div class="cell" data-label="Property">operation2.minSalesQty</div>
<div class="cell" data-label="Column">op2MinSalesQty</div>
<div class="cell" data-label="Arabic">تشغيلة 2 | أقل كمية بيع</div>
<div class="cell" data-label="English">Operation 2 | min Sales Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation2.operation">
<div class="cell" data-label="Property">operation2.operation</div>
<div class="cell" data-label="Column">op2Operation_id</div>
<div class="cell" data-label="Arabic">تشغيلة 2 | تشغيلة</div>
<div class="cell" data-label="English">Operation 2 | Operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [JOOperation](/modules/joborder/JOOperation.md) 
</div>
</div>

<div class="row searchable" id="operation2.operationQty">
<div class="cell" data-label="Property">operation2.operationQty</div>
<div class="cell" data-label="Column">op2OperationQty</div>
<div class="cell" data-label="Arabic">تشغيلة 2 | كمية التشغيله</div>
<div class="cell" data-label="English">Operation 2 | Operation Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation2.salesPrice">
<div class="cell" data-label="Property">operation2.salesPrice</div>
<div class="cell" data-label="Column">op2SalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 2 | سعر البيع</div>
<div class="cell" data-label="English">Operation 2 | Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation2.thickText">
<div class="cell" data-label="Property">operation2.thickText</div>
<div class="cell" data-label="Column">op2ThickText</div>
<div class="cell" data-label="Arabic">تشغيلة 2 | سماكة</div>
<div class="cell" data-label="English">Operation 2 | Thick Text</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="operation2.totalCost">
<div class="cell" data-label="Property">operation2.totalCost</div>
<div class="cell" data-label="Column">op2TotalCost</div>
<div class="cell" data-label="Arabic">تشغيلة 2 | إجمالي تكلفة التشغيلة</div>
<div class="cell" data-label="English">Operation 2 | Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation2.totalSalesPrice">
<div class="cell" data-label="Property">operation2.totalSalesPrice</div>
<div class="cell" data-label="Column">op2TotalSalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 2 | إجمالي بيع التشغيلة</div>
<div class="cell" data-label="English">Operation 2 | Total Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation2.underProcedure">
<div class="cell" data-label="Property">operation2.underProcedure</div>
<div class="cell" data-label="Column">op2UnderProcedure</div>
<div class="cell" data-label="Arabic">تشغيلة 2 | تحت الإجراء</div>
<div class="cell" data-label="English">Operation 2 | Under Procedure</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation2.unitCost">
<div class="cell" data-label="Property">operation2.unitCost</div>
<div class="cell" data-label="Column">op2UnitCost</div>
<div class="cell" data-label="Arabic">تشغيلة 2 | تكلفة الوحده</div>
<div class="cell" data-label="English">Operation 2 | Unit Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation2.uom">
<div class="cell" data-label="Property">operation2.uom</div>
<div class="cell" data-label="Column">op2Uom_id</div>
<div class="cell" data-label="Arabic">تشغيلة 2 | الوحدة</div>
<div class="cell" data-label="English">Operation 2 | Uom</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="operation3.calculationFormula">
<div class="cell" data-label="Property">operation3.calculationFormula</div>
<div class="cell" data-label="Column">op3CalculationFormula_id</div>
<div class="cell" data-label="Arabic">تشغيلة 3 | الصيغه الحسابيه</div>
<div class="cell" data-label="English">Operation 3 | Calculation Formula</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CalculationFormula](/modules/supplychain/CalculationFormula.md) 
</div>
</div>

<div class="row searchable" id="operation3.executed">
<div class="cell" data-label="Property">operation3.executed</div>
<div class="cell" data-label="Column">op3Executed</div>
<div class="cell" data-label="Arabic">تشغيلة 3 | تم التنفيذ</div>
<div class="cell" data-label="English">Operation 3 | Executed</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation3.freeJOOperation">
<div class="cell" data-label="Property">operation3.freeJOOperation</div>
<div class="cell" data-label="Column">op3FreeJOOperation</div>
<div class="cell" data-label="Arabic">تشغيلة 3 | تشغيلة مجانية</div>
<div class="cell" data-label="English">Operation 3 | Free JOOperation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation3.minSalesQty">
<div class="cell" data-label="Property">operation3.minSalesQty</div>
<div class="cell" data-label="Column">op3MinSalesQty</div>
<div class="cell" data-label="Arabic">تشغيلة 3 | أقل كمية بيع</div>
<div class="cell" data-label="English">Operation 3 | min Sales Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation3.operation">
<div class="cell" data-label="Property">operation3.operation</div>
<div class="cell" data-label="Column">op3Operation_id</div>
<div class="cell" data-label="Arabic">تشغيلة 3 | تشغيلة</div>
<div class="cell" data-label="English">Operation 3 | Operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [JOOperation](/modules/joborder/JOOperation.md) 
</div>
</div>

<div class="row searchable" id="operation3.operationQty">
<div class="cell" data-label="Property">operation3.operationQty</div>
<div class="cell" data-label="Column">op3OperationQty</div>
<div class="cell" data-label="Arabic">تشغيلة 3 | كمية التشغيله</div>
<div class="cell" data-label="English">Operation 3 | Operation Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation3.salesPrice">
<div class="cell" data-label="Property">operation3.salesPrice</div>
<div class="cell" data-label="Column">op3SalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 3 | سعر البيع</div>
<div class="cell" data-label="English">Operation 3 | Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation3.thickText">
<div class="cell" data-label="Property">operation3.thickText</div>
<div class="cell" data-label="Column">op3ThickText</div>
<div class="cell" data-label="Arabic">تشغيلة 3 | سماكة</div>
<div class="cell" data-label="English">Operation 3 | Thick Text</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="operation3.totalCost">
<div class="cell" data-label="Property">operation3.totalCost</div>
<div class="cell" data-label="Column">op3TotalCost</div>
<div class="cell" data-label="Arabic">تشغيلة 3 | إجمالي تكلفة التشغيلة</div>
<div class="cell" data-label="English">Operation 3 | Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation3.totalSalesPrice">
<div class="cell" data-label="Property">operation3.totalSalesPrice</div>
<div class="cell" data-label="Column">op3TotalSalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 3 | إجمالي بيع التشغيلة</div>
<div class="cell" data-label="English">Operation 3 | Total Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation3.underProcedure">
<div class="cell" data-label="Property">operation3.underProcedure</div>
<div class="cell" data-label="Column">op3UnderProcedure</div>
<div class="cell" data-label="Arabic">تشغيلة 3 | تحت الإجراء</div>
<div class="cell" data-label="English">Operation 3 | Under Procedure</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation3.unitCost">
<div class="cell" data-label="Property">operation3.unitCost</div>
<div class="cell" data-label="Column">op3UnitCost</div>
<div class="cell" data-label="Arabic">تشغيلة 3 | تكلفة الوحده</div>
<div class="cell" data-label="English">Operation 3 | Unit Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation3.uom">
<div class="cell" data-label="Property">operation3.uom</div>
<div class="cell" data-label="Column">op3Uom_id</div>
<div class="cell" data-label="Arabic">تشغيلة 3 | الوحدة</div>
<div class="cell" data-label="English">Operation 3 | Uom</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="operation4.calculationFormula">
<div class="cell" data-label="Property">operation4.calculationFormula</div>
<div class="cell" data-label="Column">op4CalculationFormula_id</div>
<div class="cell" data-label="Arabic">تشغيلة 4 | الصيغه الحسابيه</div>
<div class="cell" data-label="English">Operation 4 | Calculation Formula</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CalculationFormula](/modules/supplychain/CalculationFormula.md) 
</div>
</div>

<div class="row searchable" id="operation4.executed">
<div class="cell" data-label="Property">operation4.executed</div>
<div class="cell" data-label="Column">op4Executed</div>
<div class="cell" data-label="Arabic">تشغيلة 4 | تم التنفيذ</div>
<div class="cell" data-label="English">Operation 4 | Executed</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation4.freeJOOperation">
<div class="cell" data-label="Property">operation4.freeJOOperation</div>
<div class="cell" data-label="Column">op4FreeJOOperation</div>
<div class="cell" data-label="Arabic">تشغيلة 4 | تشغيلة مجانية</div>
<div class="cell" data-label="English">Operation 4 | Free JOOperation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation4.minSalesQty">
<div class="cell" data-label="Property">operation4.minSalesQty</div>
<div class="cell" data-label="Column">op4MinSalesQty</div>
<div class="cell" data-label="Arabic">تشغيلة 4 | أقل كمية بيع</div>
<div class="cell" data-label="English">Operation 4 | min Sales Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation4.operation">
<div class="cell" data-label="Property">operation4.operation</div>
<div class="cell" data-label="Column">op4Operation_id</div>
<div class="cell" data-label="Arabic">تشغيلة 4 | تشغيلة</div>
<div class="cell" data-label="English">Operation 4 | Operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [JOOperation](/modules/joborder/JOOperation.md) 
</div>
</div>

<div class="row searchable" id="operation4.operationQty">
<div class="cell" data-label="Property">operation4.operationQty</div>
<div class="cell" data-label="Column">op4OperationQty</div>
<div class="cell" data-label="Arabic">تشغيلة 4 | كمية التشغيله</div>
<div class="cell" data-label="English">Operation 4 | Operation Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation4.salesPrice">
<div class="cell" data-label="Property">operation4.salesPrice</div>
<div class="cell" data-label="Column">op4SalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 4 | سعر البيع</div>
<div class="cell" data-label="English">Operation 4 | Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation4.thickText">
<div class="cell" data-label="Property">operation4.thickText</div>
<div class="cell" data-label="Column">op4ThickText</div>
<div class="cell" data-label="Arabic">تشغيلة 4 | سماكة</div>
<div class="cell" data-label="English">Operation 4 | Thick Text</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="operation4.totalCost">
<div class="cell" data-label="Property">operation4.totalCost</div>
<div class="cell" data-label="Column">op4TotalCost</div>
<div class="cell" data-label="Arabic">تشغيلة 4 | إجمالي تكلفة التشغيلة</div>
<div class="cell" data-label="English">Operation 4 | Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation4.totalSalesPrice">
<div class="cell" data-label="Property">operation4.totalSalesPrice</div>
<div class="cell" data-label="Column">op4TotalSalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 4 | إجمالي بيع التشغيلة</div>
<div class="cell" data-label="English">Operation 4 | Total Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation4.underProcedure">
<div class="cell" data-label="Property">operation4.underProcedure</div>
<div class="cell" data-label="Column">op4UnderProcedure</div>
<div class="cell" data-label="Arabic">تشغيلة 4 | تحت الإجراء</div>
<div class="cell" data-label="English">Operation 4 | Under Procedure</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation4.unitCost">
<div class="cell" data-label="Property">operation4.unitCost</div>
<div class="cell" data-label="Column">op4UnitCost</div>
<div class="cell" data-label="Arabic">تشغيلة 4 | تكلفة الوحده</div>
<div class="cell" data-label="English">Operation 4 | Unit Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation4.uom">
<div class="cell" data-label="Property">operation4.uom</div>
<div class="cell" data-label="Column">op4Uom_id</div>
<div class="cell" data-label="Arabic">تشغيلة 4 | الوحدة</div>
<div class="cell" data-label="English">Operation 4 | Uom</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="operation5.calculationFormula">
<div class="cell" data-label="Property">operation5.calculationFormula</div>
<div class="cell" data-label="Column">op5CalculationFormula_id</div>
<div class="cell" data-label="Arabic">تشغيلة 5 | الصيغه الحسابيه</div>
<div class="cell" data-label="English">Operation 5 | Calculation Formula</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CalculationFormula](/modules/supplychain/CalculationFormula.md) 
</div>
</div>

<div class="row searchable" id="operation5.executed">
<div class="cell" data-label="Property">operation5.executed</div>
<div class="cell" data-label="Column">op5Executed</div>
<div class="cell" data-label="Arabic">تشغيلة 5 | تم التنفيذ</div>
<div class="cell" data-label="English">Operation 5 | Executed</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation5.freeJOOperation">
<div class="cell" data-label="Property">operation5.freeJOOperation</div>
<div class="cell" data-label="Column">op5FreeJOOperation</div>
<div class="cell" data-label="Arabic">تشغيلة 5 | تشغيلة مجانية</div>
<div class="cell" data-label="English">Operation 5 | Free JOOperation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation5.minSalesQty">
<div class="cell" data-label="Property">operation5.minSalesQty</div>
<div class="cell" data-label="Column">op5MinSalesQty</div>
<div class="cell" data-label="Arabic">تشغيلة 5 | أقل كمية بيع</div>
<div class="cell" data-label="English">Operation 5 | min Sales Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation5.operation">
<div class="cell" data-label="Property">operation5.operation</div>
<div class="cell" data-label="Column">op5Operation_id</div>
<div class="cell" data-label="Arabic">تشغيلة 5 | تشغيلة</div>
<div class="cell" data-label="English">Operation 5 | Operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [JOOperation](/modules/joborder/JOOperation.md) 
</div>
</div>

<div class="row searchable" id="operation5.operationQty">
<div class="cell" data-label="Property">operation5.operationQty</div>
<div class="cell" data-label="Column">op5OperationQty</div>
<div class="cell" data-label="Arabic">تشغيلة 5 | كمية التشغيله</div>
<div class="cell" data-label="English">Operation 5 | Operation Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation5.salesPrice">
<div class="cell" data-label="Property">operation5.salesPrice</div>
<div class="cell" data-label="Column">op5SalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 5 | سعر البيع</div>
<div class="cell" data-label="English">Operation 5 | Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation5.thickText">
<div class="cell" data-label="Property">operation5.thickText</div>
<div class="cell" data-label="Column">op5ThickText</div>
<div class="cell" data-label="Arabic">تشغيلة 5 | سماكة</div>
<div class="cell" data-label="English">Operation 5 | Thick Text</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="operation5.totalCost">
<div class="cell" data-label="Property">operation5.totalCost</div>
<div class="cell" data-label="Column">op5TotalCost</div>
<div class="cell" data-label="Arabic">تشغيلة 5 | إجمالي تكلفة التشغيلة</div>
<div class="cell" data-label="English">Operation 5 | Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation5.totalSalesPrice">
<div class="cell" data-label="Property">operation5.totalSalesPrice</div>
<div class="cell" data-label="Column">op5TotalSalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 5 | إجمالي بيع التشغيلة</div>
<div class="cell" data-label="English">Operation 5 | Total Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation5.underProcedure">
<div class="cell" data-label="Property">operation5.underProcedure</div>
<div class="cell" data-label="Column">op5UnderProcedure</div>
<div class="cell" data-label="Arabic">تشغيلة 5 | تحت الإجراء</div>
<div class="cell" data-label="English">Operation 5 | Under Procedure</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation5.unitCost">
<div class="cell" data-label="Property">operation5.unitCost</div>
<div class="cell" data-label="Column">op5UnitCost</div>
<div class="cell" data-label="Arabic">تشغيلة 5 | تكلفة الوحده</div>
<div class="cell" data-label="English">Operation 5 | Unit Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation5.uom">
<div class="cell" data-label="Property">operation5.uom</div>
<div class="cell" data-label="Column">op5Uom_id</div>
<div class="cell" data-label="Arabic">تشغيلة 5 | الوحدة</div>
<div class="cell" data-label="English">Operation 5 | Uom</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="operation6.calculationFormula">
<div class="cell" data-label="Property">operation6.calculationFormula</div>
<div class="cell" data-label="Column">op6CalculationFormula_id</div>
<div class="cell" data-label="Arabic">تشغيلة 6 | الصيغه الحسابيه</div>
<div class="cell" data-label="English">Operation 6 | Calculation Formula</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CalculationFormula](/modules/supplychain/CalculationFormula.md) 
</div>
</div>

<div class="row searchable" id="operation6.executed">
<div class="cell" data-label="Property">operation6.executed</div>
<div class="cell" data-label="Column">op6Executed</div>
<div class="cell" data-label="Arabic">تشغيلة 6 | تم التنفيذ</div>
<div class="cell" data-label="English">Operation 6 | Executed</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation6.freeJOOperation">
<div class="cell" data-label="Property">operation6.freeJOOperation</div>
<div class="cell" data-label="Column">op6FreeJOOperation</div>
<div class="cell" data-label="Arabic">تشغيلة 6 | تشغيلة مجانية</div>
<div class="cell" data-label="English">Operation 6 | Free JOOperation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation6.minSalesQty">
<div class="cell" data-label="Property">operation6.minSalesQty</div>
<div class="cell" data-label="Column">op6MinSalesQty</div>
<div class="cell" data-label="Arabic">تشغيلة 6 | أقل كمية بيع</div>
<div class="cell" data-label="English">Operation 6 | min Sales Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation6.operation">
<div class="cell" data-label="Property">operation6.operation</div>
<div class="cell" data-label="Column">op6Operation_id</div>
<div class="cell" data-label="Arabic">تشغيلة 6 | تشغيلة</div>
<div class="cell" data-label="English">Operation 6 | Operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [JOOperation](/modules/joborder/JOOperation.md) 
</div>
</div>

<div class="row searchable" id="operation6.operationQty">
<div class="cell" data-label="Property">operation6.operationQty</div>
<div class="cell" data-label="Column">op6OperationQty</div>
<div class="cell" data-label="Arabic">تشغيلة 6 | كمية التشغيله</div>
<div class="cell" data-label="English">Operation 6 | Operation Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation6.salesPrice">
<div class="cell" data-label="Property">operation6.salesPrice</div>
<div class="cell" data-label="Column">op6SalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 6 | سعر البيع</div>
<div class="cell" data-label="English">Operation 6 | Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation6.thickText">
<div class="cell" data-label="Property">operation6.thickText</div>
<div class="cell" data-label="Column">op6ThickText</div>
<div class="cell" data-label="Arabic">تشغيلة 6 | سماكة</div>
<div class="cell" data-label="English">Operation 6 | Thick Text</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="operation6.totalCost">
<div class="cell" data-label="Property">operation6.totalCost</div>
<div class="cell" data-label="Column">op6TotalCost</div>
<div class="cell" data-label="Arabic">تشغيلة 6 | إجمالي تكلفة التشغيلة</div>
<div class="cell" data-label="English">Operation 6 | Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation6.totalSalesPrice">
<div class="cell" data-label="Property">operation6.totalSalesPrice</div>
<div class="cell" data-label="Column">op6TotalSalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 6 | إجمالي بيع التشغيلة</div>
<div class="cell" data-label="English">Operation 6 | Total Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation6.underProcedure">
<div class="cell" data-label="Property">operation6.underProcedure</div>
<div class="cell" data-label="Column">op6UnderProcedure</div>
<div class="cell" data-label="Arabic">تشغيلة 6 | تحت الإجراء</div>
<div class="cell" data-label="English">Operation 6 | Under Procedure</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation6.unitCost">
<div class="cell" data-label="Property">operation6.unitCost</div>
<div class="cell" data-label="Column">op6UnitCost</div>
<div class="cell" data-label="Arabic">تشغيلة 6 | تكلفة الوحده</div>
<div class="cell" data-label="English">Operation 6 | Unit Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation6.uom">
<div class="cell" data-label="Property">operation6.uom</div>
<div class="cell" data-label="Column">op6Uom_id</div>
<div class="cell" data-label="Arabic">تشغيلة 6 | الوحدة</div>
<div class="cell" data-label="English">Operation 6 | Uom</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="operation7.calculationFormula">
<div class="cell" data-label="Property">operation7.calculationFormula</div>
<div class="cell" data-label="Column">op7CalculationFormula_id</div>
<div class="cell" data-label="Arabic">تشغيلة 7 | الصيغه الحسابيه</div>
<div class="cell" data-label="English">Operation 7 | Calculation Formula</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CalculationFormula](/modules/supplychain/CalculationFormula.md) 
</div>
</div>

<div class="row searchable" id="operation7.executed">
<div class="cell" data-label="Property">operation7.executed</div>
<div class="cell" data-label="Column">op7Executed</div>
<div class="cell" data-label="Arabic">تشغيلة 7 | تم التنفيذ</div>
<div class="cell" data-label="English">Operation 7 | Executed</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation7.freeJOOperation">
<div class="cell" data-label="Property">operation7.freeJOOperation</div>
<div class="cell" data-label="Column">op7FreeJOOperation</div>
<div class="cell" data-label="Arabic">تشغيلة 7 | تشغيلة مجانية</div>
<div class="cell" data-label="English">Operation 7 | Free JOOperation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation7.minSalesQty">
<div class="cell" data-label="Property">operation7.minSalesQty</div>
<div class="cell" data-label="Column">op7MinSalesQty</div>
<div class="cell" data-label="Arabic">تشغيلة 7 | أقل كمية بيع</div>
<div class="cell" data-label="English">Operation 7 | min Sales Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation7.operation">
<div class="cell" data-label="Property">operation7.operation</div>
<div class="cell" data-label="Column">op7Operation_id</div>
<div class="cell" data-label="Arabic">تشغيلة 7 | تشغيلة</div>
<div class="cell" data-label="English">Operation 7 | Operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [JOOperation](/modules/joborder/JOOperation.md) 
</div>
</div>

<div class="row searchable" id="operation7.operationQty">
<div class="cell" data-label="Property">operation7.operationQty</div>
<div class="cell" data-label="Column">op7OperationQty</div>
<div class="cell" data-label="Arabic">تشغيلة 7 | كمية التشغيله</div>
<div class="cell" data-label="English">Operation 7 | Operation Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation7.salesPrice">
<div class="cell" data-label="Property">operation7.salesPrice</div>
<div class="cell" data-label="Column">op7SalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 7 | سعر البيع</div>
<div class="cell" data-label="English">Operation 7 | Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation7.thickText">
<div class="cell" data-label="Property">operation7.thickText</div>
<div class="cell" data-label="Column">op7ThickText</div>
<div class="cell" data-label="Arabic">تشغيلة 7 | سماكة</div>
<div class="cell" data-label="English">Operation 7 | Thick Text</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="operation7.totalCost">
<div class="cell" data-label="Property">operation7.totalCost</div>
<div class="cell" data-label="Column">op7TotalCost</div>
<div class="cell" data-label="Arabic">تشغيلة 7 | إجمالي تكلفة التشغيلة</div>
<div class="cell" data-label="English">Operation 7 | Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation7.totalSalesPrice">
<div class="cell" data-label="Property">operation7.totalSalesPrice</div>
<div class="cell" data-label="Column">op7TotalSalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 7 | إجمالي بيع التشغيلة</div>
<div class="cell" data-label="English">Operation 7 | Total Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation7.underProcedure">
<div class="cell" data-label="Property">operation7.underProcedure</div>
<div class="cell" data-label="Column">op7UnderProcedure</div>
<div class="cell" data-label="Arabic">تشغيلة 7 | تحت الإجراء</div>
<div class="cell" data-label="English">Operation 7 | Under Procedure</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation7.unitCost">
<div class="cell" data-label="Property">operation7.unitCost</div>
<div class="cell" data-label="Column">op7UnitCost</div>
<div class="cell" data-label="Arabic">تشغيلة 7 | تكلفة الوحده</div>
<div class="cell" data-label="English">Operation 7 | Unit Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation7.uom">
<div class="cell" data-label="Property">operation7.uom</div>
<div class="cell" data-label="Column">op7Uom_id</div>
<div class="cell" data-label="Arabic">تشغيلة 7 | الوحدة</div>
<div class="cell" data-label="English">Operation 7 | Uom</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="operation8.calculationFormula">
<div class="cell" data-label="Property">operation8.calculationFormula</div>
<div class="cell" data-label="Column">op8CalculationFormula_id</div>
<div class="cell" data-label="Arabic">تشغيلة 8 | الصيغه الحسابيه</div>
<div class="cell" data-label="English">Operation 8 | Calculation Formula</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CalculationFormula](/modules/supplychain/CalculationFormula.md) 
</div>
</div>

<div class="row searchable" id="operation8.executed">
<div class="cell" data-label="Property">operation8.executed</div>
<div class="cell" data-label="Column">op8Executed</div>
<div class="cell" data-label="Arabic">تشغيلة 8 | تم التنفيذ</div>
<div class="cell" data-label="English">Operation 8 | Executed</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation8.freeJOOperation">
<div class="cell" data-label="Property">operation8.freeJOOperation</div>
<div class="cell" data-label="Column">op8FreeJOOperation</div>
<div class="cell" data-label="Arabic">تشغيلة 8 | تشغيلة مجانية</div>
<div class="cell" data-label="English">Operation 8 | Free JOOperation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation8.minSalesQty">
<div class="cell" data-label="Property">operation8.minSalesQty</div>
<div class="cell" data-label="Column">op8MinSalesQty</div>
<div class="cell" data-label="Arabic">تشغيلة 8 | أقل كمية بيع</div>
<div class="cell" data-label="English">Operation 8 | min Sales Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation8.operation">
<div class="cell" data-label="Property">operation8.operation</div>
<div class="cell" data-label="Column">op8Operation_id</div>
<div class="cell" data-label="Arabic">تشغيلة 8 | تشغيلة</div>
<div class="cell" data-label="English">Operation 8 | Operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [JOOperation](/modules/joborder/JOOperation.md) 
</div>
</div>

<div class="row searchable" id="operation8.operationQty">
<div class="cell" data-label="Property">operation8.operationQty</div>
<div class="cell" data-label="Column">op8OperationQty</div>
<div class="cell" data-label="Arabic">تشغيلة 8 | كمية التشغيله</div>
<div class="cell" data-label="English">Operation 8 | Operation Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation8.salesPrice">
<div class="cell" data-label="Property">operation8.salesPrice</div>
<div class="cell" data-label="Column">op8SalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 8 | سعر البيع</div>
<div class="cell" data-label="English">Operation 8 | Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation8.thickText">
<div class="cell" data-label="Property">operation8.thickText</div>
<div class="cell" data-label="Column">op8ThickText</div>
<div class="cell" data-label="Arabic">تشغيلة 8 | سماكة</div>
<div class="cell" data-label="English">Operation 8 | Thick Text</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="operation8.totalCost">
<div class="cell" data-label="Property">operation8.totalCost</div>
<div class="cell" data-label="Column">op8TotalCost</div>
<div class="cell" data-label="Arabic">تشغيلة 8 | إجمالي تكلفة التشغيلة</div>
<div class="cell" data-label="English">Operation 8 | Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation8.totalSalesPrice">
<div class="cell" data-label="Property">operation8.totalSalesPrice</div>
<div class="cell" data-label="Column">op8TotalSalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 8 | إجمالي بيع التشغيلة</div>
<div class="cell" data-label="English">Operation 8 | Total Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation8.underProcedure">
<div class="cell" data-label="Property">operation8.underProcedure</div>
<div class="cell" data-label="Column">op8UnderProcedure</div>
<div class="cell" data-label="Arabic">تشغيلة 8 | تحت الإجراء</div>
<div class="cell" data-label="English">Operation 8 | Under Procedure</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation8.unitCost">
<div class="cell" data-label="Property">operation8.unitCost</div>
<div class="cell" data-label="Column">op8UnitCost</div>
<div class="cell" data-label="Arabic">تشغيلة 8 | تكلفة الوحده</div>
<div class="cell" data-label="English">Operation 8 | Unit Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation8.uom">
<div class="cell" data-label="Property">operation8.uom</div>
<div class="cell" data-label="Column">op8Uom_id</div>
<div class="cell" data-label="Arabic">تشغيلة 8 | الوحدة</div>
<div class="cell" data-label="English">Operation 8 | Uom</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="operation9.calculationFormula">
<div class="cell" data-label="Property">operation9.calculationFormula</div>
<div class="cell" data-label="Column">op9CalculationFormula_id</div>
<div class="cell" data-label="Arabic">تشغيلة 9 | الصيغه الحسابيه</div>
<div class="cell" data-label="English">Operation 9 | Calculation Formula</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CalculationFormula](/modules/supplychain/CalculationFormula.md) 
</div>
</div>

<div class="row searchable" id="operation9.executed">
<div class="cell" data-label="Property">operation9.executed</div>
<div class="cell" data-label="Column">op9Executed</div>
<div class="cell" data-label="Arabic">تشغيلة 9 | تم التنفيذ</div>
<div class="cell" data-label="English">Operation 9 | Executed</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation9.freeJOOperation">
<div class="cell" data-label="Property">operation9.freeJOOperation</div>
<div class="cell" data-label="Column">op9FreeJOOperation</div>
<div class="cell" data-label="Arabic">تشغيلة 9 | تشغيلة مجانية</div>
<div class="cell" data-label="English">Operation 9 | Free JOOperation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation9.minSalesQty">
<div class="cell" data-label="Property">operation9.minSalesQty</div>
<div class="cell" data-label="Column">op9MinSalesQty</div>
<div class="cell" data-label="Arabic">تشغيلة 9 | أقل كمية بيع</div>
<div class="cell" data-label="English">Operation 9 | min Sales Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation9.operation">
<div class="cell" data-label="Property">operation9.operation</div>
<div class="cell" data-label="Column">op9Operation_id</div>
<div class="cell" data-label="Arabic">تشغيلة 9 | تشغيلة</div>
<div class="cell" data-label="English">Operation 9 | Operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [JOOperation](/modules/joborder/JOOperation.md) 
</div>
</div>

<div class="row searchable" id="operation9.operationQty">
<div class="cell" data-label="Property">operation9.operationQty</div>
<div class="cell" data-label="Column">op9OperationQty</div>
<div class="cell" data-label="Arabic">تشغيلة 9 | كمية التشغيله</div>
<div class="cell" data-label="English">Operation 9 | Operation Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation9.salesPrice">
<div class="cell" data-label="Property">operation9.salesPrice</div>
<div class="cell" data-label="Column">op9SalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 9 | سعر البيع</div>
<div class="cell" data-label="English">Operation 9 | Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation9.thickText">
<div class="cell" data-label="Property">operation9.thickText</div>
<div class="cell" data-label="Column">op9ThickText</div>
<div class="cell" data-label="Arabic">تشغيلة 9 | سماكة</div>
<div class="cell" data-label="English">Operation 9 | Thick Text</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="operation9.totalCost">
<div class="cell" data-label="Property">operation9.totalCost</div>
<div class="cell" data-label="Column">op9TotalCost</div>
<div class="cell" data-label="Arabic">تشغيلة 9 | إجمالي تكلفة التشغيلة</div>
<div class="cell" data-label="English">Operation 9 | Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation9.totalSalesPrice">
<div class="cell" data-label="Property">operation9.totalSalesPrice</div>
<div class="cell" data-label="Column">op9TotalSalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 9 | إجمالي بيع التشغيلة</div>
<div class="cell" data-label="English">Operation 9 | Total Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation9.underProcedure">
<div class="cell" data-label="Property">operation9.underProcedure</div>
<div class="cell" data-label="Column">op9UnderProcedure</div>
<div class="cell" data-label="Arabic">تشغيلة 9 | تحت الإجراء</div>
<div class="cell" data-label="English">Operation 9 | Under Procedure</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="operation9.unitCost">
<div class="cell" data-label="Property">operation9.unitCost</div>
<div class="cell" data-label="Column">op9UnitCost</div>
<div class="cell" data-label="Arabic">تشغيلة 9 | تكلفة الوحده</div>
<div class="cell" data-label="English">Operation 9 | Unit Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="operation9.uom">
<div class="cell" data-label="Property">operation9.uom</div>
<div class="cell" data-label="Column">op9Uom_id</div>
<div class="cell" data-label="Arabic">تشغيلة 9 | الوحدة</div>
<div class="cell" data-label="English">Operation 9 | Uom</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="operationsNotUnderProcedure">
<div class="cell" data-label="Property">operationsNotUnderProcedure</div>
<div class="cell" data-label="Column">operationsNotUnderProcedure</div>
<div class="cell" data-label="Arabic">التشغيلات المبدئية</div>
<div class="cell" data-label="English">Operations Not Under Procedure</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="orderDeliveryDate">
<div class="cell" data-label="Property">orderDeliveryDate</div>
<div class="cell" data-label="Column">orderDeliveryDate</div>
<div class="cell" data-label="Arabic">تاريخ التسليم</div>
<div class="cell" data-label="English">Delivery Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="parentCode">
<div class="cell" data-label="Property">parentCode</div>
<div class="cell" data-label="Column">parentCode</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="payDate">
<div class="cell" data-label="Property">payDate</div>
<div class="cell" data-label="Column">payDate</div>
<div class="cell" data-label="Arabic">تاريخ الأستحقاق</div>
<div class="cell" data-label="English">Payment date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="paymentTerminal">
<div class="cell" data-label="Property">paymentTerminal</div>
<div class="cell" data-label="Column">paymentTerminal_id</div>
<div class="cell" data-label="Arabic">Payment Terminal</div>
<div class="cell" data-label="English">Payment Terminal</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [PaymentTerminal](/modules/basic-payment-gateway/PaymentTerminal.md) 
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

<div class="row searchable" id="previousYear">
<div class="cell" data-label="Property">previousYear</div>
<div class="cell" data-label="Column">previousYear</div>
<div class="cell" data-label="Arabic">سنوات سابقة</div>
<div class="cell" data-label="English">For Previous Year</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="priceClassifier1">
<div class="cell" data-label="Property">priceClassifier1</div>
<div class="cell" data-label="Column">priceClassifier1_id</div>
<div class="cell" data-label="Arabic">محدد سعر 1</div>
<div class="cell" data-label="English">Price Classifier 1</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SalesPriceClassifier1](/modules/basic/SalesPriceClassifier1.md) 
</div>
</div>

<div class="row searchable" id="priceClassifier2">
<div class="cell" data-label="Property">priceClassifier2</div>
<div class="cell" data-label="Column">priceClassifier2_id</div>
<div class="cell" data-label="Arabic">محدد سعر 2</div>
<div class="cell" data-label="English">Price Classifier 2</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SalesPriceClassifier2](/modules/basic/SalesPriceClassifier2.md) 
</div>
</div>

<div class="row searchable" id="priceClassifier3">
<div class="cell" data-label="Property">priceClassifier3</div>
<div class="cell" data-label="Column">priceClassifier3_id</div>
<div class="cell" data-label="Arabic">محدد سعر 3</div>
<div class="cell" data-label="English">Price Classifier 3</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SalesPriceClassifier3](/modules/basic/SalesPriceClassifier3.md) 
</div>
</div>

<div class="row searchable" id="priceClassifier4">
<div class="cell" data-label="Property">priceClassifier4</div>
<div class="cell" data-label="Column">priceClassifier4_id</div>
<div class="cell" data-label="Arabic">محدد سعر 4</div>
<div class="cell" data-label="English">Price Classifier 4</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SalesPriceClassifier4](/modules/basic/SalesPriceClassifier4.md) 
</div>
</div>

<div class="row searchable" id="priceClassifier5">
<div class="cell" data-label="Property">priceClassifier5</div>
<div class="cell" data-label="Column">priceClassifier5_id</div>
<div class="cell" data-label="Arabic">محدد سعر 5</div>
<div class="cell" data-label="English">Price Classifier 5</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SalesPriceClassifier5](/modules/basic/SalesPriceClassifier5.md) 
</div>
</div>

<div class="row searchable" id="printCount">
<div class="cell" data-label="Property">printCount</div>
<div class="cell" data-label="Column">printCount</div>
<div class="cell" data-label="Arabic">عدد مرات الطباعة</div>
<div class="cell" data-label="English">Print Count</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="project">
<div class="cell" data-label="Property">project</div>
<div class="cell" data-label="Column">project_id</div>
<div class="cell" data-label="Arabic">المشروع</div>
<div class="cell" data-label="English">Project</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Project](/modules/contracting/Project.md) 
</div>
</div>

<div class="row searchable" id="purged">
<div class="cell" data-label="Property">purged</div>
<div class="cell" data-label="Column">purged</div>
<div class="cell" data-label="Arabic">Purged</div>
<div class="cell" data-label="English">Purged</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="quantity.baseQty.uom">
<div class="cell" data-label="Property">quantity.baseQty.uom</div>
<div class="cell" data-label="Column">quantityBaseUom_id</div>
<div class="cell" data-label="Arabic">الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="quantity.baseQty.value">
<div class="cell" data-label="Property">quantity.baseQty.value</div>
<div class="cell" data-label="Column">quantityBaseValue</div>
<div class="cell" data-label="Arabic">الكمية</div>
<div class="cell" data-label="English">Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="quantity.itemAssortment">
<div class="cell" data-label="Property">quantity.itemAssortment</div>
<div class="cell" data-label="Column">quantityItemAssortment_id</div>
<div class="cell" data-label="Arabic">التشكيلة</div>
<div class="cell" data-label="English">The Assortment</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemAssortment](/modules/supplychain/ItemAssortment.md) 
</div>
</div>

<div class="row searchable" id="quantity.measureQty">
<div class="cell" data-label="Property">quantity.measureQty</div>
<div class="cell" data-label="Column">quantityMeasureQty</div>
<div class="cell" data-label="Arabic">الأبعاد | عدد</div>
<div class="cell" data-label="English">Measures | Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="quantity.measures.clippedLength1">
<div class="cell" data-label="Property">quantity.measures.clippedLength1</div>
<div class="cell" data-label="Column">quantityClippedLength1</div>
<div class="cell" data-label="Arabic">أبعادالجزء المقصوص 1 | الطول</div>
<div class="cell" data-label="English">Clipped Part1 Measures | Length</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="quantity.measures.height">
<div class="cell" data-label="Property">quantity.measures.height</div>
<div class="cell" data-label="Column">quantityHeight</div>
<div class="cell" data-label="Arabic">الأبعاد | ر</div>
<div class="cell" data-label="English">Measures | H</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="quantity.measures.length">
<div class="cell" data-label="Property">quantity.measures.length</div>
<div class="cell" data-label="Column">quantityLength</div>
<div class="cell" data-label="Arabic">الأبعاد | ط</div>
<div class="cell" data-label="English">Measures | L</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="quantity.measures.text">
<div class="cell" data-label="Property">quantity.measures.text</div>
<div class="cell" data-label="Column">quantityText</div>
<div class="cell" data-label="Arabic">الأبعاد | الأبعاد</div>
<div class="cell" data-label="English">Measures | L * W * H</div>
<div class="cell" data-label="Type">Measures</div>

</div>

<div class="row searchable" id="quantity.measures.width">
<div class="cell" data-label="Property">quantity.measures.width</div>
<div class="cell" data-label="Column">quantityWidth</div>
<div class="cell" data-label="Arabic">الأبعاد | ع</div>
<div class="cell" data-label="English">Measures | W</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="quantity.quantity.primeQty.uom">
<div class="cell" data-label="Property">quantity.quantity.primeQty.uom</div>
<div class="cell" data-label="Column">quantityPUom_id</div>
<div class="cell" data-label="Arabic">الوحدة الرئيسية | الوحدة</div>
<div class="cell" data-label="English">Primary | UOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="quantity.quantity.primeQty.value">
<div class="cell" data-label="Property">quantity.quantity.primeQty.value</div>
<div class="cell" data-label="Column">quantityPValue</div>
<div class="cell" data-label="Arabic">الوحدة الرئيسية | الكمية</div>
<div class="cell" data-label="English">Primary | Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="quantity.quantity.secondQty.uom">
<div class="cell" data-label="Property">quantity.quantity.secondQty.uom</div>
<div class="cell" data-label="Column">quantitySUom_id</div>
<div class="cell" data-label="Arabic">الوحدة الثانية | الوحدة</div>
<div class="cell" data-label="English">Secondary | UOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="quantity.quantity.secondQty.value">
<div class="cell" data-label="Property">quantity.quantity.secondQty.value</div>
<div class="cell" data-label="Column">quantitySValue</div>
<div class="cell" data-label="Arabic">الوحدة الثانية | الكمية</div>
<div class="cell" data-label="English">Secondary | Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="quantity.uomRate">
<div class="cell" data-label="Property">quantity.uomRate</div>
<div class="cell" data-label="Column">quantityUomRate</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="reservDocId">
<div class="cell" data-label="Property">reservDocId</div>
<div class="cell" data-label="Column">reservDocId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="reservDocType">
<div class="cell" data-label="Property">reservDocType</div>
<div class="cell" data-label="Column">reservDocType</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">EntityType</div>

</div>

<div class="row searchable" id="returnDoc">
<div class="cell" data-label="Property">returnDoc</div>
<div class="cell" data-label="Column">returnDoc</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="rootDeliveryDocument">
<div class="cell" data-label="Property">rootDeliveryDocument</div>
<div class="cell" data-label="Column">rootDeliveryDocument</div>
<div class="cell" data-label="Arabic">مستند توصيل رئيسي</div>
<div class="cell" data-label="English">Root Delivery Document</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="salesMan">
<div class="cell" data-label="Property">salesMan</div>
<div class="cell" data-label="Column">salesMan_id</div>
<div class="cell" data-label="Arabic">مندوب المبيعات</div>
<div class="cell" data-label="English">Salesman</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/modules/basic/Employee.md) 
</div>
</div>

<div class="row searchable" id="sameShipingAddress">
<div class="cell" data-label="Property">sameShipingAddress</div>
<div class="cell" data-label="Column">sameShipingAddress</div>
<div class="cell" data-label="Arabic">نفس عنوان الشحن</div>
<div class="cell" data-label="English">Same shipping address</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="searchText1">
<div class="cell" data-label="Property">searchText1</div>
<div class="cell" data-label="Column">searchText1</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="searchText2">
<div class="cell" data-label="Property">searchText2</div>
<div class="cell" data-label="Column">searchText2</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

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

<div class="row searchable" id="shippingAddress.address1">
<div class="cell" data-label="Property">shippingAddress.address1</div>
<div class="cell" data-label="Column">shpAddress1</div>
<div class="cell" data-label="Arabic">عنوان 1</div>
<div class="cell" data-label="English">Address 1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="shippingAddress.address2">
<div class="cell" data-label="Property">shippingAddress.address2</div>
<div class="cell" data-label="Column">shpAddress2</div>
<div class="cell" data-label="Arabic">رقم المبني</div>
<div class="cell" data-label="English">Building Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="shippingAddress.area">
<div class="cell" data-label="Property">shippingAddress.area</div>
<div class="cell" data-label="Column">shpArea</div>
<div class="cell" data-label="Arabic">المنطقة</div>
<div class="cell" data-label="English">Area</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="shippingAddress.buildingNumber">
<div class="cell" data-label="Property">shippingAddress.buildingNumber</div>
<div class="cell" data-label="Column">shpBuildingNumber</div>
<div class="cell" data-label="Arabic">رقم المبني</div>
<div class="cell" data-label="English">Building Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="shippingAddress.city">
<div class="cell" data-label="Property">shippingAddress.city</div>
<div class="cell" data-label="Column">shpCity</div>
<div class="cell" data-label="Arabic">المدينة</div>
<div class="cell" data-label="English">City</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="shippingAddress.country">
<div class="cell" data-label="Property">shippingAddress.country</div>
<div class="cell" data-label="Column">shpCountry</div>
<div class="cell" data-label="Arabic">الدولة</div>
<div class="cell" data-label="English">Country</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="shippingAddress.countryCode">
<div class="cell" data-label="Property">shippingAddress.countryCode</div>
<div class="cell" data-label="Column">shpCountryCode</div>
<div class="cell" data-label="Arabic">كود الدولة</div>
<div class="cell" data-label="English">Country Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="shippingAddress.district">
<div class="cell" data-label="Property">shippingAddress.district</div>
<div class="cell" data-label="Column">shpDistrict</div>
<div class="cell" data-label="Arabic">الحي</div>
<div class="cell" data-label="English">District</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="shippingAddress.landPlotNumber">
<div class="cell" data-label="Property">shippingAddress.landPlotNumber</div>
<div class="cell" data-label="Column">shpLandPlotNumber</div>
<div class="cell" data-label="Arabic">رقم تعريفي للأرض</div>
<div class="cell" data-label="English">Land Plot Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="shippingAddress.mapLocation">
<div class="cell" data-label="Property">shippingAddress.mapLocation</div>
<div class="cell" data-label="Column">shpMapLocation</div>
<div class="cell" data-label="Arabic">الموقع على الخريطة</div>
<div class="cell" data-label="English">Map Location</div>
<div class="cell" data-label="Type">LatLng</div>

</div>

<div class="row searchable" id="shippingAddress.postalCode">
<div class="cell" data-label="Property">shippingAddress.postalCode</div>
<div class="cell" data-label="Column">shpPostalCode</div>
<div class="cell" data-label="Arabic">الكود البريدي</div>
<div class="cell" data-label="English">Postal Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="shippingAddress.region">
<div class="cell" data-label="Property">shippingAddress.region</div>
<div class="cell" data-label="Column">shpRegion_id</div>
<div class="cell" data-label="Arabic">منطقة جغرافيه</div>
<div class="cell" data-label="English">Region</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AddressRegion](/modules/basic/AddressRegion.md) 
</div>
</div>

<div class="row searchable" id="shippingAddress.state">
<div class="cell" data-label="Property">shippingAddress.state</div>
<div class="cell" data-label="Column">shpState</div>
<div class="cell" data-label="Arabic">المحافظة</div>
<div class="cell" data-label="English">State</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="shippingAddress.street">
<div class="cell" data-label="Property">shippingAddress.street</div>
<div class="cell" data-label="Column">shpStreet</div>
<div class="cell" data-label="Arabic"> شارع</div>
<div class="cell" data-label="English"> Street</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="shippingCompany">
<div class="cell" data-label="Property">shippingCompany</div>
<div class="cell" data-label="Column">shippingCompany_id</div>
<div class="cell" data-label="Arabic">شركة الشحن</div>
<div class="cell" data-label="English">Shipping Company</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ThirdParty](/modules/basic/ThirdParty.md) 
</div>
</div>

<div class="row searchable" id="shippingOrderId">
<div class="cell" data-label="Property">shippingOrderId</div>
<div class="cell" data-label="Column">shippingOrderId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="shippingOrderOtoId">
<div class="cell" data-label="Property">shippingOrderOtoId</div>
<div class="cell" data-label="Column">shippingOrderOtoId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Long</div>

</div>

<div class="row searchable" id="status">
<div class="cell" data-label="Property">status</div>
<div class="cell" data-label="Column">status</div>
<div class="cell" data-label="Arabic">الحالة</div>
<div class="cell" data-label="English">Status</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="subsidiary">
<div class="cell" data-label="Property">subsidiary</div>
<div class="cell gen-ref-column" data-label="Column">subsidiaryActualCode,  subsidiaryCode,  subsidiaryEntityType,  subsidiaryId</div>
<div class="cell" data-label="Arabic">الذمة</div>
<div class="cell" data-label="English">Subsidiary</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="suggestedPricePercentage">
<div class="cell" data-label="Property">suggestedPricePercentage</div>
<div class="cell" data-label="Column">suggestedPricePercentage</div>
<div class="cell" data-label="Arabic">السعر المقترح نسبة</div>
<div class="cell" data-label="English">Suggested Price Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="suggestedPriceValue">
<div class="cell" data-label="Property">suggestedPriceValue</div>
<div class="cell" data-label="Column">suggestedPriceValue</div>
<div class="cell" data-label="Arabic">السعر المقترح قيمة</div>
<div class="cell" data-label="English">Suggested Price Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="t1">
<div class="cell" data-label="Property">t1</div>
<div class="cell" data-label="Column">t1</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="t2">
<div class="cell" data-label="Property">t2</div>
<div class="cell" data-label="Column">t2</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Time</div>

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

<div class="row searchable" id="taxRegNo">
<div class="cell" data-label="Property">taxRegNo</div>
<div class="cell" data-label="Column">taxRegNo</div>
<div class="cell" data-label="Arabic">رقم التسجيل الضريبى</div>
<div class="cell" data-label="English">Tax Registeration NO</div>
<div class="cell" data-label="Type">Text</div>

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

 [Employee](/modules/basic/Employee.md) 
</div>
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

<div class="row searchable" id="termRemarks">
<div class="cell" data-label="Property">termRemarks</div>
<div class="cell" data-label="Column">termRemarks</div>
<div class="cell" data-label="Arabic">وصف البند</div>
<div class="cell" data-label="English">Term Remarks</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="toWarehouse">
<div class="cell" data-label="Property">toWarehouse</div>
<div class="cell" data-label="Column">toWarehouse_id</div>
<div class="cell" data-label="Arabic">إلى مخزن</div>
<div class="cell" data-label="English">to Warehouse</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="totalAccountQtyForMainLines">
<div class="cell" data-label="Property">totalAccountQtyForMainLines</div>
<div class="cell" data-label="Column">totalAccountQtyForMainLines</div>
<div class="cell" data-label="Arabic">إجمالي كمية المحاسبة للسطور الرئيسية</div>
<div class="cell" data-label="English">Total Account Quantity For Main Lines</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalAccountingQty">
<div class="cell" data-label="Property">totalAccountingQty</div>
<div class="cell" data-label="Column">totalAccountingQty</div>
<div class="cell" data-label="Arabic">إجمالي كمية المحاسبة</div>
<div class="cell" data-label="English">Total Accounting Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalArea">
<div class="cell" data-label="Property">totalArea</div>
<div class="cell" data-label="Column">totalArea</div>
<div class="cell" data-label="Arabic">المساحة  الإجمالية</div>
<div class="cell" data-label="English">Total Area</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalAreaForMainLines">
<div class="cell" data-label="Property">totalAreaForMainLines</div>
<div class="cell" data-label="Column">totalAreaForMainLines</div>
<div class="cell" data-label="Arabic">إجمالي المساحة للسطور الرئيسية</div>
<div class="cell" data-label="English">Total Area For Main Lines</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalAreaWithQtyForMainLines">
<div class="cell" data-label="Property">totalAreaWithQtyForMainLines</div>
<div class="cell" data-label="Column">totalAreaWithQtyForMainLines</div>
<div class="cell" data-label="Arabic">إجمالي المساحة بإعتبار الكمية للسطور الرئيسية</div>
<div class="cell" data-label="English">Total Area With Quantity For Main Lines</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalCost">
<div class="cell" data-label="Property">totalCost</div>
<div class="cell" data-label="Column">totalCost</div>
<div class="cell" data-label="Arabic">اجمالى التكلفة</div>
<div class="cell" data-label="English">Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalDeliveried">
<div class="cell" data-label="Property">totalDeliveried</div>
<div class="cell" data-label="Column">totalDeliveried</div>
<div class="cell" data-label="Arabic">مُسلم كلياً</div>
<div class="cell" data-label="English">Total Deliveried</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="totalMeasureQty">
<div class="cell" data-label="Property">totalMeasureQty</div>
<div class="cell" data-label="Column">totalMeasureQty</div>
<div class="cell" data-label="Arabic">إجمالي أعداد الابعاد</div>
<div class="cell" data-label="English">Total Measure Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalMeasureQtyForMainLines">
<div class="cell" data-label="Property">totalMeasureQtyForMainLines</div>
<div class="cell" data-label="Column">totalMeasureQtyForMainLines</div>
<div class="cell" data-label="Arabic">إجمالي عدد الأبعاد للسطور الرئيسية</div>
<div class="cell" data-label="English">Total Measure Quantity For Main Lines</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalPrices">
<div class="cell" data-label="Property">totalPrices</div>
<div class="cell" data-label="Column">totalPrices</div>
<div class="cell" data-label="Arabic">إجمالي السعر الكلي</div>
<div class="cell" data-label="English">Total Prices</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalProductCost">
<div class="cell" data-label="Property">totalProductCost</div>
<div class="cell" data-label="Column">totalProductCost</div>
<div class="cell" data-label="Arabic">إجمالي تكلفة المنتج</div>
<div class="cell" data-label="English">Total Product Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalQties">
<div class="cell" data-label="Property">totalQties</div>
<div class="cell" data-label="Column">totalQties</div>
<div class="cell" data-label="Arabic">إجمالي الكميات</div>
<div class="cell" data-label="English">Total Quantities</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalQty">
<div class="cell" data-label="Property">totalQty</div>
<div class="cell" data-label="Column">totalQty</div>
<div class="cell" data-label="Arabic">الكمية الإجمالية</div>
<div class="cell" data-label="English">Total Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalSalesPricesOperations">
<div class="cell" data-label="Property">totalSalesPricesOperations</div>
<div class="cell" data-label="Column">totalSalesPricesOperations</div>
<div class="cell" data-label="Arabic">إجمالي أسعار البيع للتشغيلات</div>
<div class="cell" data-label="English">Total Sales Prices For Operations</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalSatisfiedQty">
<div class="cell" data-label="Property">totalSatisfiedQty</div>
<div class="cell" data-label="Column">totalSatisfiedQty</div>
<div class="cell" data-label="Arabic">إجمالي المسلم</div>
<div class="cell" data-label="English">Total Satisfied Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalSatisfiedQty2">
<div class="cell" data-label="Property">totalSatisfiedQty2</div>
<div class="cell" data-label="Column">totalSatisfiedQty2</div>
<div class="cell" data-label="Arabic">إجمالي المسلم 2</div>
<div class="cell" data-label="English">Total Satisfied Qty 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalUnsatisfiedQty">
<div class="cell" data-label="Property">totalUnsatisfiedQty</div>
<div class="cell" data-label="Column">totalUnsatisfiedQty</div>
<div class="cell" data-label="Arabic">إجمالي الغير مسلم</div>
<div class="cell" data-label="English">Total Unsatisfied Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalUnsatisfiedQty2">
<div class="cell" data-label="Property">totalUnsatisfiedQty2</div>
<div class="cell" data-label="Column">totalUnsatisfiedQty2</div>
<div class="cell" data-label="Arabic">إجمالي الغير مسلم 2</div>
<div class="cell" data-label="English">Total Unsatisfied Qty 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalsSalesItems">
<div class="cell" data-label="Property">totalsSalesItems</div>
<div class="cell" data-label="Column">totalsSalesItems</div>
<div class="cell" data-label="Arabic">إجمالي المبيعات للأصناف</div>
<div class="cell" data-label="English">Totals Sales Items</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalsSalesPrices">
<div class="cell" data-label="Property">totalsSalesPrices</div>
<div class="cell" data-label="Column">totalsSalesPrices</div>
<div class="cell" data-label="Arabic">إجمالي أسعار البيع الكلي</div>
<div class="cell" data-label="English">Totals Sales Prices</div>
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

<div class="row searchable" id="usedIn">
<div class="cell" data-label="Property">usedIn</div>
<div class="cell gen-ref-column" data-label="Column">usedInActualCode,  usedInCode,  usedInEntityType,  usedInId</div>
<div class="cell" data-label="Arabic">مستخدم في</div>
<div class="cell" data-label="English">Used In</div>
<div class="cell" data-label="Type">Genericreference</div>

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

<div class="row searchable" id="warehouse">
<div class="cell" data-label="Property">warehouse</div>
<div class="cell" data-label="Column">warehouse_id</div>
<div class="cell" data-label="Arabic">المخزن</div>
<div class="cell" data-label="English">Warehouse</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>


</div>
</div>

<div id='details' title='details' class='searchable'>

## details (التفاصيل - Details)
**Table Name:** JOSalesOrderLine, **Join Column:** jOSalesOrder_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="details.accountingQty">
<div class="cell" data-label="Property">details.accountingQty</div>
<div class="cell" data-label="Column">accountingQty</div>
<div class="cell" data-label="Arabic">كمية المحاسبة</div>
<div class="cell" data-label="English">Accounting Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.activeDoc">
<div class="cell" data-label="Property">details.activeDoc</div>
<div class="cell" data-label="Column">activeDoc</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.addedFreeInvoiceValue">
<div class="cell" data-label="Property">details.addedFreeInvoiceValue</div>
<div class="cell" data-label="Column">addedFreeInvoiceValue</div>
<div class="cell" data-label="Arabic">نصيب السطر من مجاني الفاتورة</div>
<div class="cell" data-label="English">Invoice Free Share</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.addedFreeLineValue">
<div class="cell" data-label="Property">details.addedFreeLineValue</div>
<div class="cell" data-label="Column">addedFreeLineValue</div>
<div class="cell" data-label="Arabic">تكلفة المجاني</div>
<div class="cell" data-label="English">Item Free Share</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.allowOverdraft">
<div class="cell" data-label="Property">details.allowOverdraft</div>
<div class="cell" data-label="Column">allowOverdraft</div>
<div class="cell" data-label="Arabic">السماح بالسحب على المكشوف</div>
<div class="cell" data-label="English">Allow Overdraft</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.area">
<div class="cell" data-label="Property">details.area</div>
<div class="cell" data-label="Column">area</div>
<div class="cell" data-label="Arabic">المساحة</div>
<div class="cell" data-label="English">Area</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.areaWithQty">
<div class="cell" data-label="Property">details.areaWithQty</div>
<div class="cell" data-label="Column">areaWithQty</div>
<div class="cell" data-label="Arabic">المساحة بإعتبار الكمية</div>
<div class="cell" data-label="English">Area With Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.attachment">
<div class="cell" data-label="Property">details.attachment</div>
<div class="cell" data-label="Column">attachment_id</div>
<div class="cell" data-label="Arabic">مرفق</div>
<div class="cell" data-label="English">Attachment</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/modules/system-tables/LargeData.md) 
</div>
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

<div class="row searchable" id="details.calculationFormula">
<div class="cell" data-label="Property">details.calculationFormula</div>
<div class="cell" data-label="Column">calculationFormula_id</div>
<div class="cell" data-label="Arabic"> الصيغة الحسابية</div>
<div class="cell" data-label="English"> Calculation Formula</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CalculationFormula](/modules/supplychain/CalculationFormula.md) 
</div>
</div>

<div class="row searchable" id="details.canceledDeliveredQty">
<div class="cell" data-label="Property">details.canceledDeliveredQty</div>
<div class="cell" data-label="Column">canceledDeliveredQty</div>
<div class="cell" data-label="Arabic">كمية التوصيل المُلغاة</div>
<div class="cell" data-label="English">Canceled Delivered Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.canceledReservedQty">
<div class="cell" data-label="Property">details.canceledReservedQty</div>
<div class="cell" data-label="Column">canceledReservedQty</div>
<div class="cell" data-label="Arabic">كمية الحجز المُلغاة</div>
<div class="cell" data-label="English">Canceled Reserved Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.car">
<div class="cell" data-label="Property">details.car</div>
<div class="cell" data-label="Column">car_id</div>
<div class="cell" data-label="Arabic">السيارة</div>
<div class="cell" data-label="English">Car</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DeliveryCar](/modules/basic/DeliveryCar.md) 
</div>
</div>

<div class="row searchable" id="details.colorName">
<div class="cell" data-label="Property">details.colorName</div>
<div class="cell" data-label="Column">colorName</div>
<div class="cell" data-label="Arabic">اسم اللون</div>
<div class="cell" data-label="English">Color Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.comp">
<div class="cell" data-label="Property">details.comp</div>
<div class="cell" data-label="Column">comp_id</div>
<div class="cell" data-label="Arabic">صنف /مكون</div>
<div class="cell" data-label="English">Item/Component</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AssemblyComponent](/modules/supplychain-assembly/AssemblyComponent.md) 
</div>
</div>

<div class="row searchable" id="details.customer">
<div class="cell" data-label="Property">details.customer</div>
<div class="cell" data-label="Column">customer_id</div>
<div class="cell" data-label="Arabic">العميل</div>
<div class="cell" data-label="English">Customer</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Customer](/modules/basic/Customer.md) 
</div>
</div>

<div class="row searchable" id="details.damageReason">
<div class="cell" data-label="Property">details.damageReason</div>
<div class="cell" data-label="Column">damageReason</div>
<div class="cell" data-label="Arabic">أسباب التلفيات</div>
<div class="cell" data-label="English">Damage Reason</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.damageType">
<div class="cell" data-label="Property">details.damageType</div>
<div class="cell" data-label="Column">damageType</div>
<div class="cell" data-label="Arabic">نوع التلف</div>
<div class="cell" data-label="English">DamageType</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="details.date1">
<div class="cell" data-label="Property">details.date1</div>
<div class="cell" data-label="Column">date1</div>
<div class="cell" data-label="Arabic">تـــاريخ 1</div>
<div class="cell" data-label="English">Date 1</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.deleteOnSave">
<div class="cell" data-label="Property">details.deleteOnSave</div>
<div class="cell" data-label="Column">deleteOnSave</div>
<div class="cell" data-label="Arabic">مسح عند الحفظ</div>
<div class="cell" data-label="English">Delete On Save</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.delivStatus">
<div class="cell" data-label="Property">details.delivStatus</div>
<div class="cell" data-label="Column">delivStatus</div>
<div class="cell" data-label="Arabic">حالة التوصيل</div>
<div class="cell" data-label="English">deliveryStatus</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="details.deliveringQty">
<div class="cell" data-label="Property">details.deliveringQty</div>
<div class="cell" data-label="Column">deliveringQty</div>
<div class="cell" data-label="Arabic">الكمية الجاري توصيلها</div>
<div class="cell" data-label="English">Delivering Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.deliveryDate">
<div class="cell" data-label="Property">details.deliveryDate</div>
<div class="cell" data-label="Column">deliveryDate</div>
<div class="cell" data-label="Arabic">تاريخ التوصيل</div>
<div class="cell" data-label="English">Delivery Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.deliveryRate.period.uom">
<div class="cell" data-label="Property">details.deliveryRate.period.uom</div>
<div class="cell" data-label="Column">drPeriodUom</div>
<div class="cell" data-label="Arabic">معدل التوريد|نوع الفترة</div>
<div class="cell" data-label="English">Delivery Rate|Period Unit</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="details.deliveryRate.period.value">
<div class="cell" data-label="Property">details.deliveryRate.period.value</div>
<div class="cell" data-label="Column">drPeriodValue</div>
<div class="cell" data-label="Arabic">معدل التوريد | الفترة</div>
<div class="cell" data-label="English">Delivery Rate|Period Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.deliveryRate.qty">
<div class="cell" data-label="Property">details.deliveryRate.qty</div>
<div class="cell" data-label="Column">drQty</div>
<div class="cell" data-label="Arabic">معدل التوريد|الكمية</div>
<div class="cell" data-label="English">Delivery Rate|Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.deliveryRate.startDate">
<div class="cell" data-label="Property">details.deliveryRate.startDate</div>
<div class="cell" data-label="Column">drStartDate</div>
<div class="cell" data-label="Arabic">معدل التوريد|تاريخ البداية</div>
<div class="cell" data-label="English">Delivery Rate|Start Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.deliveryTime">
<div class="cell" data-label="Property">details.deliveryTime</div>
<div class="cell" data-label="Column">deliveryTime</div>
<div class="cell" data-label="Arabic">وقت التوصيل</div>
<div class="cell" data-label="English">Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="details.documentId">
<div class="cell" data-label="Property">details.documentId</div>
<div class="cell" data-label="Column">documentId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="details.driver">
<div class="cell" data-label="Property">details.driver</div>
<div class="cell" data-label="Column">driver_id</div>
<div class="cell" data-label="Arabic">السائق</div>
<div class="cell" data-label="English">Driver</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/modules/basic/Employee.md) 
</div>
</div>

<div class="row searchable" id="details.emptyWeight">
<div class="cell" data-label="Property">details.emptyWeight</div>
<div class="cell" data-label="Column">emptyWeight</div>
<div class="cell" data-label="Arabic">وزن الفارغ</div>
<div class="cell" data-label="English">Empty Weight</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.expiryDate">
<div class="cell" data-label="Property">details.expiryDate</div>
<div class="cell" data-label="Column">expiryDate</div>
<div class="cell" data-label="Arabic">تواريخ الصلاحية | الإنتهاء</div>
<div class="cell" data-label="English">Date | Expiry</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.freeFromItemsCountOffer">
<div class="cell" data-label="Property">details.freeFromItemsCountOffer</div>
<div class="cell" data-label="Column">freeFromItemsCountOffer</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.freeGroupId">
<div class="cell" data-label="Property">details.freeGroupId</div>
<div class="cell" data-label="Column">freeGroupId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="details.freeItemGroup">
<div class="cell" data-label="Property">details.freeItemGroup</div>
<div class="cell" data-label="Column">freeItemGroup_id</div>
<div class="cell" data-label="Arabic">مجموعة أصناف مجانية</div>
<div class="cell" data-label="English">Free Item Group</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FreeItemGroup](/modules/supplychain-sales/FreeItemGroup.md) 
</div>
</div>

<div class="row searchable" id="details.freeItemId">
<div class="cell" data-label="Property">details.freeItemId</div>
<div class="cell" data-label="Column">freeItemId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="details.freeLine">
<div class="cell" data-label="Property">details.freeLine</div>
<div class="cell" data-label="Column">freeLine</div>
<div class="cell" data-label="Arabic"> صنف مجاني</div>
<div class="cell" data-label="English"> Free Item</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.freeOfferLineId">
<div class="cell" data-label="Property">details.freeOfferLineId</div>
<div class="cell" data-label="Column">freeOfferLineId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="details.genericDimensions.analysisSet">
<div class="cell" data-label="Property">details.genericDimensions.analysisSet</div>
<div class="cell" data-label="Column">analysisSet_id</div>
<div class="cell" data-label="Arabic">المجموعة التحليلية</div>
<div class="cell" data-label="English">Analysis set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/modules/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="details.genericDimensions.branch">
<div class="cell" data-label="Property">details.genericDimensions.branch</div>
<div class="cell" data-label="Column">branch_id</div>
<div class="cell" data-label="Arabic">الفرع</div>
<div class="cell" data-label="English">Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/modules/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="details.genericDimensions.department">
<div class="cell" data-label="Property">details.genericDimensions.department</div>
<div class="cell" data-label="Column">department_id</div>
<div class="cell" data-label="Arabic">الإدارة</div>
<div class="cell" data-label="English">Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/modules/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="details.genericDimensions.legalEntity">
<div class="cell" data-label="Property">details.genericDimensions.legalEntity</div>
<div class="cell" data-label="Column">legalEntity_id</div>
<div class="cell" data-label="Arabic">الشركة</div>
<div class="cell" data-label="English">Legal Entity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [LegalEntity](/modules/basic/LegalEntity.md) 
</div>
</div>

<div class="row searchable" id="details.genericDimensions.sector">
<div class="cell" data-label="Property">details.genericDimensions.sector</div>
<div class="cell" data-label="Column">sector_id</div>
<div class="cell" data-label="Arabic">القطاع</div>
<div class="cell" data-label="English">Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/modules/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="details.grossWeight">
<div class="cell" data-label="Property">details.grossWeight</div>
<div class="cell" data-label="Column">grossWeight</div>
<div class="cell" data-label="Arabic">الوزن القائم</div>
<div class="cell" data-label="English">Gross Weight</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.id">
<div class="cell" data-label="Property">details.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="details.inPoints">
<div class="cell" data-label="Property">details.inPoints</div>
<div class="cell" data-label="Column">inPoints</div>
<div class="cell" data-label="Arabic">بالنقاط</div>
<div class="cell" data-label="English">in points</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.invoiceOfferID">
<div class="cell" data-label="Property">details.invoiceOfferID</div>
<div class="cell" data-label="Column">invoiceOfferID</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="details.item.item">
<div class="cell" data-label="Property">details.item.item</div>
<div class="cell" data-label="Column">item_id</div>
<div class="cell" data-label="Arabic"> الصنف</div>
<div class="cell" data-label="English"> Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/modules/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="details.item.itemCode">
<div class="cell" data-label="Property">details.item.itemCode</div>
<div class="cell" data-label="Column">itemCode</div>
<div class="cell" data-label="Arabic"> الكود</div>
<div class="cell" data-label="English"> Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.item.itemName1">
<div class="cell" data-label="Property">details.item.itemName1</div>
<div class="cell" data-label="Column">itemName1</div>
<div class="cell" data-label="Arabic">اسم الصنف</div>
<div class="cell" data-label="English">Item Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.item.itemName2">
<div class="cell" data-label="Property">details.item.itemName2</div>
<div class="cell" data-label="Column">itemName2</div>
<div class="cell" data-label="Arabic">اسم الصنف الإنجليزي</div>
<div class="cell" data-label="English">Item English Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.joLineCode">
<div class="cell" data-label="Property">details.joLineCode</div>
<div class="cell" data-label="Column">joLineCode</div>
<div class="cell" data-label="Arabic">الباركود</div>
<div class="cell" data-label="English">Line Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.joOperationsCost">
<div class="cell" data-label="Property">details.joOperationsCost</div>
<div class="cell" data-label="Column">joOperationsCost</div>
<div class="cell" data-label="Arabic">تكاليف التشغيلات</div>
<div class="cell" data-label="English">JOOperations cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.joSalesType">
<div class="cell" data-label="Property">details.joSalesType</div>
<div class="cell" data-label="Column">joSalesType</div>
<div class="cell" data-label="Arabic">نوع أمر البيع</div>
<div class="cell" data-label="English">Job Order Sales Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="details.lineNumber">
<div class="cell" data-label="Property">details.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="details.lineOperations">
<div class="cell" data-label="Property">details.lineOperations</div>
<div class="cell" data-label="Column">lineOperations</div>
<div class="cell" data-label="Arabic">عمليات السطر</div>
<div class="cell" data-label="English">Line Operations</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="details.lineType">
<div class="cell" data-label="Property">details.lineType</div>
<div class="cell" data-label="Column">lineType</div>
<div class="cell" data-label="Arabic">نوع السطر</div>
<div class="cell" data-label="English">Line Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="details.lineWithOriginalDetailsId">
<div class="cell" data-label="Property">details.lineWithOriginalDetailsId</div>
<div class="cell" data-label="Column">lineWithOriginalDetailsId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="details.masterRowId">
<div class="cell" data-label="Property">details.masterRowId</div>
<div class="cell" data-label="Column">masterRowId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="details.minSalesMultiples">
<div class="cell" data-label="Property">details.minSalesMultiples</div>
<div class="cell" data-label="Column">minSalesMultiples</div>
<div class="cell" data-label="Arabic">أقل كمية بالمضاعفات</div>
<div class="cell" data-label="English">Min Sales in Multiples</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.minSalesQty">
<div class="cell" data-label="Property">details.minSalesQty</div>
<div class="cell" data-label="Column">minSalesQty</div>
<div class="cell" data-label="Arabic">أقل كمية بيع</div>
<div class="cell" data-label="English">Min Sales Qty</div>
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

<div class="row searchable" id="details.operation1.calculationFormula">
<div class="cell" data-label="Property">details.operation1.calculationFormula</div>
<div class="cell" data-label="Column">op1CalculationFormula_id</div>
<div class="cell" data-label="Arabic">تشغيلة 1 | الصيغه الحسابيه</div>
<div class="cell" data-label="English">Operation 1 | Calculation Formula</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CalculationFormula](/modules/supplychain/CalculationFormula.md) 
</div>
</div>

<div class="row searchable" id="details.operation1.executed">
<div class="cell" data-label="Property">details.operation1.executed</div>
<div class="cell" data-label="Column">op1Executed</div>
<div class="cell" data-label="Arabic">تشغيلة 1 | تم التنفيذ</div>
<div class="cell" data-label="English">Operation 1 | Executed</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation1.freeJOOperation">
<div class="cell" data-label="Property">details.operation1.freeJOOperation</div>
<div class="cell" data-label="Column">op1FreeJOOperation</div>
<div class="cell" data-label="Arabic">تشغيلة 1 | تشغيلة مجانية</div>
<div class="cell" data-label="English">Operation 1 | Free JOOperation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation1.minSalesQty">
<div class="cell" data-label="Property">details.operation1.minSalesQty</div>
<div class="cell" data-label="Column">op1MinSalesQty</div>
<div class="cell" data-label="Arabic">تشغيلة 1 | أقل كمية بيع</div>
<div class="cell" data-label="English">Operation 1 | min Sales Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation1.operation">
<div class="cell" data-label="Property">details.operation1.operation</div>
<div class="cell" data-label="Column">op1Operation_id</div>
<div class="cell" data-label="Arabic">تشغيلة 1 | تشغيلة</div>
<div class="cell" data-label="English">Operation 1 | Operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [JOOperation](/modules/joborder/JOOperation.md) 
</div>
</div>

<div class="row searchable" id="details.operation1.operationQty">
<div class="cell" data-label="Property">details.operation1.operationQty</div>
<div class="cell" data-label="Column">op1OperationQty</div>
<div class="cell" data-label="Arabic">تشغيلة 1 | كمية التشغيله</div>
<div class="cell" data-label="English">Operation 1 | Operation Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation1.salesPrice">
<div class="cell" data-label="Property">details.operation1.salesPrice</div>
<div class="cell" data-label="Column">op1SalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 1 | سعر البيع</div>
<div class="cell" data-label="English">Operation 1 | Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation1.thickText">
<div class="cell" data-label="Property">details.operation1.thickText</div>
<div class="cell" data-label="Column">op1ThickText</div>
<div class="cell" data-label="Arabic">تشغيلة 1 | سماكة</div>
<div class="cell" data-label="English">Operation 1 | Thick Text</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.operation1.totalCost">
<div class="cell" data-label="Property">details.operation1.totalCost</div>
<div class="cell" data-label="Column">op1TotalCost</div>
<div class="cell" data-label="Arabic">تشغيلة 1 | إجمالي تكلفة التشغيلة</div>
<div class="cell" data-label="English">Operation 1 | Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation1.totalSalesPrice">
<div class="cell" data-label="Property">details.operation1.totalSalesPrice</div>
<div class="cell" data-label="Column">op1TotalSalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 1 | إجمالي بيع التشغيلة</div>
<div class="cell" data-label="English">Operation 1 | Total Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation1.underProcedure">
<div class="cell" data-label="Property">details.operation1.underProcedure</div>
<div class="cell" data-label="Column">op1UnderProcedure</div>
<div class="cell" data-label="Arabic">تشغيلة 1 | تحت الإجراء</div>
<div class="cell" data-label="English">Operation 1 | Under Procedure</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation1.unitCost">
<div class="cell" data-label="Property">details.operation1.unitCost</div>
<div class="cell" data-label="Column">op1UnitCost</div>
<div class="cell" data-label="Arabic">تشغيلة 1 | تكلفة الوحده</div>
<div class="cell" data-label="English">Operation 1 | Unit Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation1.uom">
<div class="cell" data-label="Property">details.operation1.uom</div>
<div class="cell" data-label="Column">op1Uom_id</div>
<div class="cell" data-label="Arabic">تشغيلة 1 | الوحدة</div>
<div class="cell" data-label="English">Operation 1 | Uom</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="details.operation10.calculationFormula">
<div class="cell" data-label="Property">details.operation10.calculationFormula</div>
<div class="cell" data-label="Column">op10CalculationFormula_id</div>
<div class="cell" data-label="Arabic">تشغيلة 10 | الصيغه الحسابيه</div>
<div class="cell" data-label="English">Operation 10 | Calculation Formula</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CalculationFormula](/modules/supplychain/CalculationFormula.md) 
</div>
</div>

<div class="row searchable" id="details.operation10.executed">
<div class="cell" data-label="Property">details.operation10.executed</div>
<div class="cell" data-label="Column">op10Executed</div>
<div class="cell" data-label="Arabic">تشغيلة 10 | تم التنفيذ</div>
<div class="cell" data-label="English">Operation 10 | Executed</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation10.freeJOOperation">
<div class="cell" data-label="Property">details.operation10.freeJOOperation</div>
<div class="cell" data-label="Column">op10FreeJOOperation</div>
<div class="cell" data-label="Arabic">تشغيلة 10 | تشغيلة مجانية</div>
<div class="cell" data-label="English">Operation 10 | Free JOOperation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation10.minSalesQty">
<div class="cell" data-label="Property">details.operation10.minSalesQty</div>
<div class="cell" data-label="Column">op10MinSalesQty</div>
<div class="cell" data-label="Arabic">تشغيلة 10 | أقل كمية بيع</div>
<div class="cell" data-label="English">Operation 10 | min Sales Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation10.operation">
<div class="cell" data-label="Property">details.operation10.operation</div>
<div class="cell" data-label="Column">op10Operation_id</div>
<div class="cell" data-label="Arabic">تشغيلة 10 | تشغيلة</div>
<div class="cell" data-label="English">Operation 10 | Operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [JOOperation](/modules/joborder/JOOperation.md) 
</div>
</div>

<div class="row searchable" id="details.operation10.operationQty">
<div class="cell" data-label="Property">details.operation10.operationQty</div>
<div class="cell" data-label="Column">op10OperationQty</div>
<div class="cell" data-label="Arabic">تشغيلة 10 | كمية التشغيله</div>
<div class="cell" data-label="English">Operation 10 | Operation Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation10.salesPrice">
<div class="cell" data-label="Property">details.operation10.salesPrice</div>
<div class="cell" data-label="Column">op10SalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 10 | سعر البيع</div>
<div class="cell" data-label="English">Operation 10 | Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation10.thickText">
<div class="cell" data-label="Property">details.operation10.thickText</div>
<div class="cell" data-label="Column">op10ThickText</div>
<div class="cell" data-label="Arabic">تشغيلة 10 | سماكة</div>
<div class="cell" data-label="English">Operation 10 | Thick Text</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.operation10.totalCost">
<div class="cell" data-label="Property">details.operation10.totalCost</div>
<div class="cell" data-label="Column">op10TotalCost</div>
<div class="cell" data-label="Arabic">تشغيلة 10 | إجمالي تكلفة التشغيلة</div>
<div class="cell" data-label="English">Operation 10 | Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation10.totalSalesPrice">
<div class="cell" data-label="Property">details.operation10.totalSalesPrice</div>
<div class="cell" data-label="Column">op10TotalSalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 10 | إجمالي بيع التشغيلة</div>
<div class="cell" data-label="English">Operation 10 | Total Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation10.underProcedure">
<div class="cell" data-label="Property">details.operation10.underProcedure</div>
<div class="cell" data-label="Column">op10UnderProcedure</div>
<div class="cell" data-label="Arabic">تشغيلة 10 | تحت الإجراء</div>
<div class="cell" data-label="English">Operation 10 | Under Procedure</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation10.unitCost">
<div class="cell" data-label="Property">details.operation10.unitCost</div>
<div class="cell" data-label="Column">op10UnitCost</div>
<div class="cell" data-label="Arabic">تشغيلة 10 | تكلفة الوحده</div>
<div class="cell" data-label="English">Operation 10 | Unit Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation10.uom">
<div class="cell" data-label="Property">details.operation10.uom</div>
<div class="cell" data-label="Column">op10Uom_id</div>
<div class="cell" data-label="Arabic">تشغيلة 10 | الوحدة</div>
<div class="cell" data-label="English">Operation 10 | Uom</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="details.operation11.calculationFormula">
<div class="cell" data-label="Property">details.operation11.calculationFormula</div>
<div class="cell" data-label="Column">op11CalculationFormula_id</div>
<div class="cell" data-label="Arabic">تشغيلة 11 | الصيغه الحسابيه</div>
<div class="cell" data-label="English">Operation 11 | Calculation Formula</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CalculationFormula](/modules/supplychain/CalculationFormula.md) 
</div>
</div>

<div class="row searchable" id="details.operation11.executed">
<div class="cell" data-label="Property">details.operation11.executed</div>
<div class="cell" data-label="Column">op11Executed</div>
<div class="cell" data-label="Arabic">تشغيلة 11 | تم التنفيذ</div>
<div class="cell" data-label="English">Operation 11 | Executed</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation11.freeJOOperation">
<div class="cell" data-label="Property">details.operation11.freeJOOperation</div>
<div class="cell" data-label="Column">op11FreeJOOperation</div>
<div class="cell" data-label="Arabic">تشغيلة 11 | تشغيلة مجانية</div>
<div class="cell" data-label="English">Operation 11 | Free JOOperation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation11.minSalesQty">
<div class="cell" data-label="Property">details.operation11.minSalesQty</div>
<div class="cell" data-label="Column">op11MinSalesQty</div>
<div class="cell" data-label="Arabic">تشغيلة 11 | أقل كمية بيع</div>
<div class="cell" data-label="English">Operation 11 | min Sales Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation11.operation">
<div class="cell" data-label="Property">details.operation11.operation</div>
<div class="cell" data-label="Column">op11Operation_id</div>
<div class="cell" data-label="Arabic">تشغيلة 11 | تشغيلة</div>
<div class="cell" data-label="English">Operation 11 | Operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [JOOperation](/modules/joborder/JOOperation.md) 
</div>
</div>

<div class="row searchable" id="details.operation11.operationQty">
<div class="cell" data-label="Property">details.operation11.operationQty</div>
<div class="cell" data-label="Column">op11OperationQty</div>
<div class="cell" data-label="Arabic">تشغيلة 11 | كمية التشغيله</div>
<div class="cell" data-label="English">Operation 11 | Operation Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation11.salesPrice">
<div class="cell" data-label="Property">details.operation11.salesPrice</div>
<div class="cell" data-label="Column">op11SalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 11 | سعر البيع</div>
<div class="cell" data-label="English">Operation 11 | SalesPrice</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation11.thickText">
<div class="cell" data-label="Property">details.operation11.thickText</div>
<div class="cell" data-label="Column">op11ThickText</div>
<div class="cell" data-label="Arabic">تشغيلة 11 | سماكة</div>
<div class="cell" data-label="English">Operation 11 | Thick Text</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.operation11.totalCost">
<div class="cell" data-label="Property">details.operation11.totalCost</div>
<div class="cell" data-label="Column">op11TotalCost</div>
<div class="cell" data-label="Arabic">تشغيلة 11 | إجمالي تكلفة التشغيلة</div>
<div class="cell" data-label="English">Operation 11 | Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation11.totalSalesPrice">
<div class="cell" data-label="Property">details.operation11.totalSalesPrice</div>
<div class="cell" data-label="Column">op11TotalSalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 11 | إجمالي بيع التشغيلة</div>
<div class="cell" data-label="English">Operation 11 | Total Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation11.underProcedure">
<div class="cell" data-label="Property">details.operation11.underProcedure</div>
<div class="cell" data-label="Column">op11UnderProcedure</div>
<div class="cell" data-label="Arabic">تشغيلة 11 | تحت الإجراء</div>
<div class="cell" data-label="English">Operation 11 | Under Procedure</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation11.unitCost">
<div class="cell" data-label="Property">details.operation11.unitCost</div>
<div class="cell" data-label="Column">op11UnitCost</div>
<div class="cell" data-label="Arabic">تشغيلة 11 | تكلفة الوحده</div>
<div class="cell" data-label="English">Operation 11 | Unit Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation11.uom">
<div class="cell" data-label="Property">details.operation11.uom</div>
<div class="cell" data-label="Column">op11Uom_id</div>
<div class="cell" data-label="Arabic">تشغيلة 11 | الوحدة</div>
<div class="cell" data-label="English">Operation 11 | Uom</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="details.operation12.calculationFormula">
<div class="cell" data-label="Property">details.operation12.calculationFormula</div>
<div class="cell" data-label="Column">op12CalculationFormula_id</div>
<div class="cell" data-label="Arabic">تشغيلة 12 | الصيغه الحسابيه</div>
<div class="cell" data-label="English">Operation 12 | Calculation Formula</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CalculationFormula](/modules/supplychain/CalculationFormula.md) 
</div>
</div>

<div class="row searchable" id="details.operation12.executed">
<div class="cell" data-label="Property">details.operation12.executed</div>
<div class="cell" data-label="Column">op12Executed</div>
<div class="cell" data-label="Arabic">تشغيلة 12 | تم التنفيذ</div>
<div class="cell" data-label="English">Operation 12 | Executed</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation12.freeJOOperation">
<div class="cell" data-label="Property">details.operation12.freeJOOperation</div>
<div class="cell" data-label="Column">op12FreeJOOperation</div>
<div class="cell" data-label="Arabic">تشغيلة 12 | تشغيلة مجانية</div>
<div class="cell" data-label="English">Operation 12 | Free JOOperation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation12.minSalesQty">
<div class="cell" data-label="Property">details.operation12.minSalesQty</div>
<div class="cell" data-label="Column">op12MinSalesQty</div>
<div class="cell" data-label="Arabic">تشغيلة 12 | أقل كمية بيع</div>
<div class="cell" data-label="English">Operation 12 | min Sales Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation12.operation">
<div class="cell" data-label="Property">details.operation12.operation</div>
<div class="cell" data-label="Column">op12Operation_id</div>
<div class="cell" data-label="Arabic">تشغيلة 12 | تشغيلة</div>
<div class="cell" data-label="English">Operation 12 | Operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [JOOperation](/modules/joborder/JOOperation.md) 
</div>
</div>

<div class="row searchable" id="details.operation12.operationQty">
<div class="cell" data-label="Property">details.operation12.operationQty</div>
<div class="cell" data-label="Column">op12OperationQty</div>
<div class="cell" data-label="Arabic">تشغيلة 12 | كمية التشغيله</div>
<div class="cell" data-label="English">Operation 12 | Operation Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation12.salesPrice">
<div class="cell" data-label="Property">details.operation12.salesPrice</div>
<div class="cell" data-label="Column">op12SalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 12 | سعر البيع</div>
<div class="cell" data-label="English">Operation 12 | Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation12.thickText">
<div class="cell" data-label="Property">details.operation12.thickText</div>
<div class="cell" data-label="Column">op12ThickText</div>
<div class="cell" data-label="Arabic">تشغيلة 12 | سماكة</div>
<div class="cell" data-label="English">Operation 12 | Thick Text</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.operation12.totalCost">
<div class="cell" data-label="Property">details.operation12.totalCost</div>
<div class="cell" data-label="Column">op12TotalCost</div>
<div class="cell" data-label="Arabic">تشغيلة 12 | إجمالي تكلفة التشغيلة</div>
<div class="cell" data-label="English">Operation 12 | Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation12.totalSalesPrice">
<div class="cell" data-label="Property">details.operation12.totalSalesPrice</div>
<div class="cell" data-label="Column">op12TotalSalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 12 | إجمالي بيع التشغيلة</div>
<div class="cell" data-label="English">Operation 12 | Total Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation12.underProcedure">
<div class="cell" data-label="Property">details.operation12.underProcedure</div>
<div class="cell" data-label="Column">op12UnderProcedure</div>
<div class="cell" data-label="Arabic">تشغيلة 12 | تحت الإجراء</div>
<div class="cell" data-label="English">Operation 12 | Under Procedure</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation12.unitCost">
<div class="cell" data-label="Property">details.operation12.unitCost</div>
<div class="cell" data-label="Column">op12UnitCost</div>
<div class="cell" data-label="Arabic">تشغيلة 12 | تكلفة الوحده</div>
<div class="cell" data-label="English">Operation 12 | Unit Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation12.uom">
<div class="cell" data-label="Property">details.operation12.uom</div>
<div class="cell" data-label="Column">op12Uom_id</div>
<div class="cell" data-label="Arabic">تشغيلة 12 | الوحدة</div>
<div class="cell" data-label="English">Operation 12 | Uom</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="details.operation13.calculationFormula">
<div class="cell" data-label="Property">details.operation13.calculationFormula</div>
<div class="cell" data-label="Column">op13CalculationFormula_id</div>
<div class="cell" data-label="Arabic">تشغيلة 13 | الصيغه الحسابيه</div>
<div class="cell" data-label="English">Operation 13 | Calculation Formula</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CalculationFormula](/modules/supplychain/CalculationFormula.md) 
</div>
</div>

<div class="row searchable" id="details.operation13.executed">
<div class="cell" data-label="Property">details.operation13.executed</div>
<div class="cell" data-label="Column">op13Executed</div>
<div class="cell" data-label="Arabic">تشغيلة 13 | تم التنفيذ</div>
<div class="cell" data-label="English">Operation 13 | Executed</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation13.freeJOOperation">
<div class="cell" data-label="Property">details.operation13.freeJOOperation</div>
<div class="cell" data-label="Column">op13FreeJOOperation</div>
<div class="cell" data-label="Arabic">تشغيلة 13 | تشغيلة مجانية</div>
<div class="cell" data-label="English">Operation 13 | Free JOOperation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation13.minSalesQty">
<div class="cell" data-label="Property">details.operation13.minSalesQty</div>
<div class="cell" data-label="Column">op13MinSalesQty</div>
<div class="cell" data-label="Arabic">تشغيلة 13 | أقل كمية بيع</div>
<div class="cell" data-label="English">Operation 13 | min Sales Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation13.operation">
<div class="cell" data-label="Property">details.operation13.operation</div>
<div class="cell" data-label="Column">op13Operation_id</div>
<div class="cell" data-label="Arabic">تشغيلة 13 | تشغيلة</div>
<div class="cell" data-label="English">Operation 13 | Operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [JOOperation](/modules/joborder/JOOperation.md) 
</div>
</div>

<div class="row searchable" id="details.operation13.operationQty">
<div class="cell" data-label="Property">details.operation13.operationQty</div>
<div class="cell" data-label="Column">op13OperationQty</div>
<div class="cell" data-label="Arabic">تشغيلة 13 | كمية التشغيله</div>
<div class="cell" data-label="English">Operation 13 | Operation Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation13.salesPrice">
<div class="cell" data-label="Property">details.operation13.salesPrice</div>
<div class="cell" data-label="Column">op13SalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 13 | سعر البيع</div>
<div class="cell" data-label="English">Operation 13 | Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation13.thickText">
<div class="cell" data-label="Property">details.operation13.thickText</div>
<div class="cell" data-label="Column">op13ThickText</div>
<div class="cell" data-label="Arabic">تشغيلة 13 | سماكة</div>
<div class="cell" data-label="English">Operation 13 | Thick Text</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.operation13.totalCost">
<div class="cell" data-label="Property">details.operation13.totalCost</div>
<div class="cell" data-label="Column">op13TotalCost</div>
<div class="cell" data-label="Arabic">تشغيلة 13 | إجمالي تكلفة التشغيلة</div>
<div class="cell" data-label="English">Operation 13 | Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation13.totalSalesPrice">
<div class="cell" data-label="Property">details.operation13.totalSalesPrice</div>
<div class="cell" data-label="Column">op13TotalSalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 13 | إجمالي بيع التشغيلة</div>
<div class="cell" data-label="English">Operation 13 | Total Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation13.underProcedure">
<div class="cell" data-label="Property">details.operation13.underProcedure</div>
<div class="cell" data-label="Column">op13UnderProcedure</div>
<div class="cell" data-label="Arabic">تشغيلة 13 | تحت الإجراء</div>
<div class="cell" data-label="English">Operation 13 | Under Procedure</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation13.unitCost">
<div class="cell" data-label="Property">details.operation13.unitCost</div>
<div class="cell" data-label="Column">op13UnitCost</div>
<div class="cell" data-label="Arabic">تشغيلة 13 | تكلفة الوحده</div>
<div class="cell" data-label="English">Operation 13 | Unit Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation13.uom">
<div class="cell" data-label="Property">details.operation13.uom</div>
<div class="cell" data-label="Column">op13Uom_id</div>
<div class="cell" data-label="Arabic">تشغيلة 13 | الوحدة</div>
<div class="cell" data-label="English">Operation 13 | Uom</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="details.operation14.calculationFormula">
<div class="cell" data-label="Property">details.operation14.calculationFormula</div>
<div class="cell" data-label="Column">op14CalculationFormula_id</div>
<div class="cell" data-label="Arabic">تشغيلة 14 | الصيغه الحسابيه</div>
<div class="cell" data-label="English">Operation 14 | Calculation Formula</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CalculationFormula](/modules/supplychain/CalculationFormula.md) 
</div>
</div>

<div class="row searchable" id="details.operation14.executed">
<div class="cell" data-label="Property">details.operation14.executed</div>
<div class="cell" data-label="Column">op14Executed</div>
<div class="cell" data-label="Arabic">تشغيلة 14 | تم التنفيذ</div>
<div class="cell" data-label="English">Operation 14 | Executed</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation14.freeJOOperation">
<div class="cell" data-label="Property">details.operation14.freeJOOperation</div>
<div class="cell" data-label="Column">op14FreeJOOperation</div>
<div class="cell" data-label="Arabic">تشغيلة 14 | تشغيلة مجانية</div>
<div class="cell" data-label="English">Operation 14 | Free JOOperation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation14.minSalesQty">
<div class="cell" data-label="Property">details.operation14.minSalesQty</div>
<div class="cell" data-label="Column">op14MinSalesQty</div>
<div class="cell" data-label="Arabic">تشغيلة 14 | أقل كمية بيع</div>
<div class="cell" data-label="English">Operation 14 | min Sales Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation14.operation">
<div class="cell" data-label="Property">details.operation14.operation</div>
<div class="cell" data-label="Column">op14Operation_id</div>
<div class="cell" data-label="Arabic">تشغيلة 14 | تشغيلة</div>
<div class="cell" data-label="English">Operation 14 | Operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [JOOperation](/modules/joborder/JOOperation.md) 
</div>
</div>

<div class="row searchable" id="details.operation14.operationQty">
<div class="cell" data-label="Property">details.operation14.operationQty</div>
<div class="cell" data-label="Column">op14OperationQty</div>
<div class="cell" data-label="Arabic">تشغيلة 14 | كمية التشغيله</div>
<div class="cell" data-label="English">Operation 14 | Operation Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation14.salesPrice">
<div class="cell" data-label="Property">details.operation14.salesPrice</div>
<div class="cell" data-label="Column">op14SalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 14 | سعر البيع</div>
<div class="cell" data-label="English">Operation 14 | Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation14.thickText">
<div class="cell" data-label="Property">details.operation14.thickText</div>
<div class="cell" data-label="Column">op14ThickText</div>
<div class="cell" data-label="Arabic">تشغيلة 14 | سماكة</div>
<div class="cell" data-label="English">Operation 14 | Thick Text</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.operation14.totalCost">
<div class="cell" data-label="Property">details.operation14.totalCost</div>
<div class="cell" data-label="Column">op14TotalCost</div>
<div class="cell" data-label="Arabic">تشغيلة 14 | إجمالي تكلفة التشغيلة</div>
<div class="cell" data-label="English">Operation 14 | Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation14.totalSalesPrice">
<div class="cell" data-label="Property">details.operation14.totalSalesPrice</div>
<div class="cell" data-label="Column">op14TotalSalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 14 | إجمالي بيع التشغيلة</div>
<div class="cell" data-label="English">Operation 14 | Total Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation14.underProcedure">
<div class="cell" data-label="Property">details.operation14.underProcedure</div>
<div class="cell" data-label="Column">op14UnderProcedure</div>
<div class="cell" data-label="Arabic">تشغيلة 14 | تحت الإجراء</div>
<div class="cell" data-label="English">Operation 14 | Under Procedure</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation14.unitCost">
<div class="cell" data-label="Property">details.operation14.unitCost</div>
<div class="cell" data-label="Column">op14UnitCost</div>
<div class="cell" data-label="Arabic">تشغيلة 14 | تكلفة الوحده</div>
<div class="cell" data-label="English">Operation 14 | Unit Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation14.uom">
<div class="cell" data-label="Property">details.operation14.uom</div>
<div class="cell" data-label="Column">op14Uom_id</div>
<div class="cell" data-label="Arabic">تشغيلة 14 | الوحدة</div>
<div class="cell" data-label="English">Operation 14 | Uom</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="details.operation15.calculationFormula">
<div class="cell" data-label="Property">details.operation15.calculationFormula</div>
<div class="cell" data-label="Column">op15CalculationFormula_id</div>
<div class="cell" data-label="Arabic">تشغيلة 15 | الصيغه الحسابيه</div>
<div class="cell" data-label="English">Operation 15 | Calculation Formula</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CalculationFormula](/modules/supplychain/CalculationFormula.md) 
</div>
</div>

<div class="row searchable" id="details.operation15.executed">
<div class="cell" data-label="Property">details.operation15.executed</div>
<div class="cell" data-label="Column">op15Executed</div>
<div class="cell" data-label="Arabic">تم التنفيذ</div>
<div class="cell" data-label="English">Operation 15 | Executed</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation15.freeJOOperation">
<div class="cell" data-label="Property">details.operation15.freeJOOperation</div>
<div class="cell" data-label="Column">op15FreeJOOperation</div>
<div class="cell" data-label="Arabic">تشغيلة 15 | تشغيلة مجانية</div>
<div class="cell" data-label="English">Operation 15 | Free JOOperation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation15.minSalesQty">
<div class="cell" data-label="Property">details.operation15.minSalesQty</div>
<div class="cell" data-label="Column">op15MinSalesQty</div>
<div class="cell" data-label="Arabic">تشغيلة 15 | أقل كمية بيع</div>
<div class="cell" data-label="English">Operation 15 | min Sales Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation15.operation">
<div class="cell" data-label="Property">details.operation15.operation</div>
<div class="cell" data-label="Column">op15Operation_id</div>
<div class="cell" data-label="Arabic">تشغيلة 15 | تشغيلة</div>
<div class="cell" data-label="English">Operation 15 | Operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [JOOperation](/modules/joborder/JOOperation.md) 
</div>
</div>

<div class="row searchable" id="details.operation15.operationQty">
<div class="cell" data-label="Property">details.operation15.operationQty</div>
<div class="cell" data-label="Column">op15OperationQty</div>
<div class="cell" data-label="Arabic">تشغيلة 15 | كمية التشغيله</div>
<div class="cell" data-label="English">Operation 15 | Operation Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation15.salesPrice">
<div class="cell" data-label="Property">details.operation15.salesPrice</div>
<div class="cell" data-label="Column">op15SalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 15 | سعر البيع</div>
<div class="cell" data-label="English">Operation 15 | Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation15.thickText">
<div class="cell" data-label="Property">details.operation15.thickText</div>
<div class="cell" data-label="Column">op15ThickText</div>
<div class="cell" data-label="Arabic">تشغيلة 15 | سماكة</div>
<div class="cell" data-label="English">Operation 15 | Thick Text</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.operation15.totalCost">
<div class="cell" data-label="Property">details.operation15.totalCost</div>
<div class="cell" data-label="Column">op15TotalCost</div>
<div class="cell" data-label="Arabic">تشغيلة 15 | إجمالي تكلفة التشغيلة</div>
<div class="cell" data-label="English">Operation 15 | Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation15.totalSalesPrice">
<div class="cell" data-label="Property">details.operation15.totalSalesPrice</div>
<div class="cell" data-label="Column">op15TotalSalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 15 | إجمالي بيع التشغيلة</div>
<div class="cell" data-label="English">Operation 15 | Total Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation15.underProcedure">
<div class="cell" data-label="Property">details.operation15.underProcedure</div>
<div class="cell" data-label="Column">op15UnderProcedure</div>
<div class="cell" data-label="Arabic">تشغيلة 15 | تحت الإجراء</div>
<div class="cell" data-label="English">Operation 15 | Under Procedure</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation15.unitCost">
<div class="cell" data-label="Property">details.operation15.unitCost</div>
<div class="cell" data-label="Column">op15UnitCost</div>
<div class="cell" data-label="Arabic">تشغيلة 15 | تكلفة الوحده</div>
<div class="cell" data-label="English">Operation 15 | Unit Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation15.uom">
<div class="cell" data-label="Property">details.operation15.uom</div>
<div class="cell" data-label="Column">op15Uom_id</div>
<div class="cell" data-label="Arabic">تشغيلة 15 | الوحدة</div>
<div class="cell" data-label="English">Operation 15 | Uom</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="details.operation2.calculationFormula">
<div class="cell" data-label="Property">details.operation2.calculationFormula</div>
<div class="cell" data-label="Column">op2CalculationFormula_id</div>
<div class="cell" data-label="Arabic">تشغيلة 2 | الصيغه الحسابيه</div>
<div class="cell" data-label="English">Operation 2 | Calculation Formula</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CalculationFormula](/modules/supplychain/CalculationFormula.md) 
</div>
</div>

<div class="row searchable" id="details.operation2.executed">
<div class="cell" data-label="Property">details.operation2.executed</div>
<div class="cell" data-label="Column">op2Executed</div>
<div class="cell" data-label="Arabic">تشغيلة 2 | تم التنفيذ</div>
<div class="cell" data-label="English">Operation 2 | Executed</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation2.freeJOOperation">
<div class="cell" data-label="Property">details.operation2.freeJOOperation</div>
<div class="cell" data-label="Column">op2FreeJOOperation</div>
<div class="cell" data-label="Arabic">تشغيلة 2 | تشغيلة مجاني</div>
<div class="cell" data-label="English">Operation 2 | Free JOOperation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation2.minSalesQty">
<div class="cell" data-label="Property">details.operation2.minSalesQty</div>
<div class="cell" data-label="Column">op2MinSalesQty</div>
<div class="cell" data-label="Arabic">تشغيلة 2 | أقل كمية بيع</div>
<div class="cell" data-label="English">Operation 2 | min Sales Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation2.operation">
<div class="cell" data-label="Property">details.operation2.operation</div>
<div class="cell" data-label="Column">op2Operation_id</div>
<div class="cell" data-label="Arabic">تشغيلة 2 | تشغيلة</div>
<div class="cell" data-label="English">Operation 2 | Operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [JOOperation](/modules/joborder/JOOperation.md) 
</div>
</div>

<div class="row searchable" id="details.operation2.operationQty">
<div class="cell" data-label="Property">details.operation2.operationQty</div>
<div class="cell" data-label="Column">op2OperationQty</div>
<div class="cell" data-label="Arabic">تشغيلة 2 | كمية التشغيله</div>
<div class="cell" data-label="English">Operation 2 | Operation Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation2.salesPrice">
<div class="cell" data-label="Property">details.operation2.salesPrice</div>
<div class="cell" data-label="Column">op2SalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 2 | سعر البيع</div>
<div class="cell" data-label="English">Operation 2 | Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation2.thickText">
<div class="cell" data-label="Property">details.operation2.thickText</div>
<div class="cell" data-label="Column">op2ThickText</div>
<div class="cell" data-label="Arabic">تشغيلة 2 | سماكة</div>
<div class="cell" data-label="English">Operation 2 | Thick Text</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.operation2.totalCost">
<div class="cell" data-label="Property">details.operation2.totalCost</div>
<div class="cell" data-label="Column">op2TotalCost</div>
<div class="cell" data-label="Arabic">تشغيلة 2 | إجمالي تكلفة التشغيلة</div>
<div class="cell" data-label="English">Operation 2 | Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation2.totalSalesPrice">
<div class="cell" data-label="Property">details.operation2.totalSalesPrice</div>
<div class="cell" data-label="Column">op2TotalSalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 2 | إجمالي بيع التشغيلة</div>
<div class="cell" data-label="English">Operation 2 | Total Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation2.underProcedure">
<div class="cell" data-label="Property">details.operation2.underProcedure</div>
<div class="cell" data-label="Column">op2UnderProcedure</div>
<div class="cell" data-label="Arabic">تشغيلة 2 | تحت الإجراء</div>
<div class="cell" data-label="English">Operation 2 | Under Procedure</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation2.unitCost">
<div class="cell" data-label="Property">details.operation2.unitCost</div>
<div class="cell" data-label="Column">op2UnitCost</div>
<div class="cell" data-label="Arabic">تشغيلة 2 | تكلفة الوحده</div>
<div class="cell" data-label="English">Operation 2 | Unit Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation2.uom">
<div class="cell" data-label="Property">details.operation2.uom</div>
<div class="cell" data-label="Column">op2Uom_id</div>
<div class="cell" data-label="Arabic">تشغيلة 2 | الوحدة</div>
<div class="cell" data-label="English">Operation 2 | Uom</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="details.operation3.calculationFormula">
<div class="cell" data-label="Property">details.operation3.calculationFormula</div>
<div class="cell" data-label="Column">op3CalculationFormula_id</div>
<div class="cell" data-label="Arabic">تشغيلة 3 | الصيغه الحسابيه</div>
<div class="cell" data-label="English">Operation 3 | Calculation Formula</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CalculationFormula](/modules/supplychain/CalculationFormula.md) 
</div>
</div>

<div class="row searchable" id="details.operation3.executed">
<div class="cell" data-label="Property">details.operation3.executed</div>
<div class="cell" data-label="Column">op3Executed</div>
<div class="cell" data-label="Arabic">تشغيلة 3 | تم التنفيذ</div>
<div class="cell" data-label="English">Operation 3 | Executed</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation3.freeJOOperation">
<div class="cell" data-label="Property">details.operation3.freeJOOperation</div>
<div class="cell" data-label="Column">op3FreeJOOperation</div>
<div class="cell" data-label="Arabic">تشغيلة 3 | تشغيلة مجانية</div>
<div class="cell" data-label="English">Operation 3 | Free JOOperation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation3.minSalesQty">
<div class="cell" data-label="Property">details.operation3.minSalesQty</div>
<div class="cell" data-label="Column">op3MinSalesQty</div>
<div class="cell" data-label="Arabic">تشغيلة 3 | أقل كمية بيع</div>
<div class="cell" data-label="English">Operation 3 | min Sales Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation3.operation">
<div class="cell" data-label="Property">details.operation3.operation</div>
<div class="cell" data-label="Column">op3Operation_id</div>
<div class="cell" data-label="Arabic">تشغيلة 3 | تشغيلة</div>
<div class="cell" data-label="English">Operation 3 | Operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [JOOperation](/modules/joborder/JOOperation.md) 
</div>
</div>

<div class="row searchable" id="details.operation3.operationQty">
<div class="cell" data-label="Property">details.operation3.operationQty</div>
<div class="cell" data-label="Column">op3OperationQty</div>
<div class="cell" data-label="Arabic">تشغيلة 3 | كمية التشغيله</div>
<div class="cell" data-label="English">Operation 3 | Operation Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation3.salesPrice">
<div class="cell" data-label="Property">details.operation3.salesPrice</div>
<div class="cell" data-label="Column">op3SalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 3 | سعر البيع</div>
<div class="cell" data-label="English">Operation 3 | Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation3.thickText">
<div class="cell" data-label="Property">details.operation3.thickText</div>
<div class="cell" data-label="Column">op3ThickText</div>
<div class="cell" data-label="Arabic">تشغيلة 3 | سماكة</div>
<div class="cell" data-label="English">Operation 3 | Thick Text</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.operation3.totalCost">
<div class="cell" data-label="Property">details.operation3.totalCost</div>
<div class="cell" data-label="Column">op3TotalCost</div>
<div class="cell" data-label="Arabic">تشغيلة 3 | إجمالي تكلفة التشغيلة</div>
<div class="cell" data-label="English">Operation 3 | Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation3.totalSalesPrice">
<div class="cell" data-label="Property">details.operation3.totalSalesPrice</div>
<div class="cell" data-label="Column">op3TotalSalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 3 | إجمالي بيع التشغيلة</div>
<div class="cell" data-label="English">Operation 3 | Total Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation3.underProcedure">
<div class="cell" data-label="Property">details.operation3.underProcedure</div>
<div class="cell" data-label="Column">op3UnderProcedure</div>
<div class="cell" data-label="Arabic">تشغيلة 3 | تحت الإجراء</div>
<div class="cell" data-label="English">Operation 3 | Under Procedure</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation3.unitCost">
<div class="cell" data-label="Property">details.operation3.unitCost</div>
<div class="cell" data-label="Column">op3UnitCost</div>
<div class="cell" data-label="Arabic">تشغيلة 3 | تكلفة الوحده</div>
<div class="cell" data-label="English">Operation 3 | Unit Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation3.uom">
<div class="cell" data-label="Property">details.operation3.uom</div>
<div class="cell" data-label="Column">op3Uom_id</div>
<div class="cell" data-label="Arabic">تشغيلة 3 | الوحدة</div>
<div class="cell" data-label="English">Operation 3 | Uom</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="details.operation4.calculationFormula">
<div class="cell" data-label="Property">details.operation4.calculationFormula</div>
<div class="cell" data-label="Column">op4CalculationFormula_id</div>
<div class="cell" data-label="Arabic">تشغيلة 4 | الصيغه الحسابيه</div>
<div class="cell" data-label="English">Operation 4 | Calculation Formula</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CalculationFormula](/modules/supplychain/CalculationFormula.md) 
</div>
</div>

<div class="row searchable" id="details.operation4.executed">
<div class="cell" data-label="Property">details.operation4.executed</div>
<div class="cell" data-label="Column">op4Executed</div>
<div class="cell" data-label="Arabic">تشغيلة 4 | تم التنفيذ</div>
<div class="cell" data-label="English">Operation 4 | Executed</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation4.freeJOOperation">
<div class="cell" data-label="Property">details.operation4.freeJOOperation</div>
<div class="cell" data-label="Column">op4FreeJOOperation</div>
<div class="cell" data-label="Arabic">تشغيلة 4 | تشغيلة مجانية</div>
<div class="cell" data-label="English">Operation 4 | Free JOOperation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation4.minSalesQty">
<div class="cell" data-label="Property">details.operation4.minSalesQty</div>
<div class="cell" data-label="Column">op4MinSalesQty</div>
<div class="cell" data-label="Arabic">تشغيلة 4 | أقل كمية بيع</div>
<div class="cell" data-label="English">Operation 4 | min Sales Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation4.operation">
<div class="cell" data-label="Property">details.operation4.operation</div>
<div class="cell" data-label="Column">op4Operation_id</div>
<div class="cell" data-label="Arabic">تشغيلة 4 | تشغيلة</div>
<div class="cell" data-label="English">Operation 4 | Operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [JOOperation](/modules/joborder/JOOperation.md) 
</div>
</div>

<div class="row searchable" id="details.operation4.operationQty">
<div class="cell" data-label="Property">details.operation4.operationQty</div>
<div class="cell" data-label="Column">op4OperationQty</div>
<div class="cell" data-label="Arabic">تشغيلة 4 | كمية التشغيله</div>
<div class="cell" data-label="English">Operation 4 | Operation Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation4.salesPrice">
<div class="cell" data-label="Property">details.operation4.salesPrice</div>
<div class="cell" data-label="Column">op4SalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 4 | سعر البيع</div>
<div class="cell" data-label="English">Operation 4 | Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation4.thickText">
<div class="cell" data-label="Property">details.operation4.thickText</div>
<div class="cell" data-label="Column">op4ThickText</div>
<div class="cell" data-label="Arabic">تشغيلة 4 | سماكة</div>
<div class="cell" data-label="English">Operation 4 | Thick Text</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.operation4.totalCost">
<div class="cell" data-label="Property">details.operation4.totalCost</div>
<div class="cell" data-label="Column">op4TotalCost</div>
<div class="cell" data-label="Arabic">تشغيلة 4 | إجمالي تكلفة التشغيلة</div>
<div class="cell" data-label="English">Operation 4 | Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation4.totalSalesPrice">
<div class="cell" data-label="Property">details.operation4.totalSalesPrice</div>
<div class="cell" data-label="Column">op4TotalSalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 4 | إجمالي بيع التشغيلة</div>
<div class="cell" data-label="English">Operation 4 | Total Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation4.underProcedure">
<div class="cell" data-label="Property">details.operation4.underProcedure</div>
<div class="cell" data-label="Column">op4UnderProcedure</div>
<div class="cell" data-label="Arabic">تشغيلة 4 | تحت الإجراء</div>
<div class="cell" data-label="English">Operation 4 | Under Procedure</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation4.unitCost">
<div class="cell" data-label="Property">details.operation4.unitCost</div>
<div class="cell" data-label="Column">op4UnitCost</div>
<div class="cell" data-label="Arabic">تشغيلة 4 | تكلفة الوحده</div>
<div class="cell" data-label="English">Operation 4 | Unit Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation4.uom">
<div class="cell" data-label="Property">details.operation4.uom</div>
<div class="cell" data-label="Column">op4Uom_id</div>
<div class="cell" data-label="Arabic">تشغيلة 4 | الوحدة</div>
<div class="cell" data-label="English">Operation 4 | Uom</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="details.operation5.calculationFormula">
<div class="cell" data-label="Property">details.operation5.calculationFormula</div>
<div class="cell" data-label="Column">op5CalculationFormula_id</div>
<div class="cell" data-label="Arabic">تشغيلة 5 | الصيغه الحسابيه</div>
<div class="cell" data-label="English">Operation 5 | Calculation Formula</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CalculationFormula](/modules/supplychain/CalculationFormula.md) 
</div>
</div>

<div class="row searchable" id="details.operation5.executed">
<div class="cell" data-label="Property">details.operation5.executed</div>
<div class="cell" data-label="Column">op5Executed</div>
<div class="cell" data-label="Arabic">تشغيلة 5 | تم التنفيذ</div>
<div class="cell" data-label="English">Operation 5 | Executed</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation5.freeJOOperation">
<div class="cell" data-label="Property">details.operation5.freeJOOperation</div>
<div class="cell" data-label="Column">op5FreeJOOperation</div>
<div class="cell" data-label="Arabic">تشغيلة 5 | تشغيلة مجانية</div>
<div class="cell" data-label="English">Operation 5 | Free JOOperation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation5.minSalesQty">
<div class="cell" data-label="Property">details.operation5.minSalesQty</div>
<div class="cell" data-label="Column">op5MinSalesQty</div>
<div class="cell" data-label="Arabic">تشغيلة 5 | أقل كمية بيع</div>
<div class="cell" data-label="English">Operation 5 | min Sales Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation5.operation">
<div class="cell" data-label="Property">details.operation5.operation</div>
<div class="cell" data-label="Column">op5Operation_id</div>
<div class="cell" data-label="Arabic">تشغيلة 5 | تشغيلة</div>
<div class="cell" data-label="English">Operation 5 | Operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [JOOperation](/modules/joborder/JOOperation.md) 
</div>
</div>

<div class="row searchable" id="details.operation5.operationQty">
<div class="cell" data-label="Property">details.operation5.operationQty</div>
<div class="cell" data-label="Column">op5OperationQty</div>
<div class="cell" data-label="Arabic">تشغيلة 5 | كمية التشغيله</div>
<div class="cell" data-label="English">Operation 5 | Operation Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation5.salesPrice">
<div class="cell" data-label="Property">details.operation5.salesPrice</div>
<div class="cell" data-label="Column">op5SalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 5 | سعر البيع</div>
<div class="cell" data-label="English">Operation 5 | Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation5.thickText">
<div class="cell" data-label="Property">details.operation5.thickText</div>
<div class="cell" data-label="Column">op5ThickText</div>
<div class="cell" data-label="Arabic">تشغيلة 5 | سماكة</div>
<div class="cell" data-label="English">Operation 5 | Thick Text</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.operation5.totalCost">
<div class="cell" data-label="Property">details.operation5.totalCost</div>
<div class="cell" data-label="Column">op5TotalCost</div>
<div class="cell" data-label="Arabic">تشغيلة 5 | إجمالي تكلفة التشغيلة</div>
<div class="cell" data-label="English">Operation 5 | Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation5.totalSalesPrice">
<div class="cell" data-label="Property">details.operation5.totalSalesPrice</div>
<div class="cell" data-label="Column">op5TotalSalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 5 | إجمالي بيع التشغيلة</div>
<div class="cell" data-label="English">Operation 5 | Total Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation5.underProcedure">
<div class="cell" data-label="Property">details.operation5.underProcedure</div>
<div class="cell" data-label="Column">op5UnderProcedure</div>
<div class="cell" data-label="Arabic">تشغيلة 5 | تحت الإجراء</div>
<div class="cell" data-label="English">Operation 5 | Under Procedure</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation5.unitCost">
<div class="cell" data-label="Property">details.operation5.unitCost</div>
<div class="cell" data-label="Column">op5UnitCost</div>
<div class="cell" data-label="Arabic">تشغيلة 5 | تكلفة الوحده</div>
<div class="cell" data-label="English">Operation 5 | Unit Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation5.uom">
<div class="cell" data-label="Property">details.operation5.uom</div>
<div class="cell" data-label="Column">op5Uom_id</div>
<div class="cell" data-label="Arabic">تشغيلة 5 | الوحدة</div>
<div class="cell" data-label="English">Operation 5 | Uom</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="details.operation6.calculationFormula">
<div class="cell" data-label="Property">details.operation6.calculationFormula</div>
<div class="cell" data-label="Column">op6CalculationFormula_id</div>
<div class="cell" data-label="Arabic">تشغيلة 6 | الصيغه الحسابيه</div>
<div class="cell" data-label="English">Operation 6 | Calculation Formula</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CalculationFormula](/modules/supplychain/CalculationFormula.md) 
</div>
</div>

<div class="row searchable" id="details.operation6.executed">
<div class="cell" data-label="Property">details.operation6.executed</div>
<div class="cell" data-label="Column">op6Executed</div>
<div class="cell" data-label="Arabic">تشغيلة 6 | تم التنفيذ</div>
<div class="cell" data-label="English">Operation 6 | Executed</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation6.freeJOOperation">
<div class="cell" data-label="Property">details.operation6.freeJOOperation</div>
<div class="cell" data-label="Column">op6FreeJOOperation</div>
<div class="cell" data-label="Arabic">تشغيلة 6 | تشغيلة مجانية</div>
<div class="cell" data-label="English">Operation 6 | Free JOOperation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation6.minSalesQty">
<div class="cell" data-label="Property">details.operation6.minSalesQty</div>
<div class="cell" data-label="Column">op6MinSalesQty</div>
<div class="cell" data-label="Arabic">تشغيلة 6 | أقل كمية بيع</div>
<div class="cell" data-label="English">Operation 6 | min Sales Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation6.operation">
<div class="cell" data-label="Property">details.operation6.operation</div>
<div class="cell" data-label="Column">op6Operation_id</div>
<div class="cell" data-label="Arabic">تشغيلة 6 | تشغيلة</div>
<div class="cell" data-label="English">Operation 6 | Operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [JOOperation](/modules/joborder/JOOperation.md) 
</div>
</div>

<div class="row searchable" id="details.operation6.operationQty">
<div class="cell" data-label="Property">details.operation6.operationQty</div>
<div class="cell" data-label="Column">op6OperationQty</div>
<div class="cell" data-label="Arabic">تشغيلة 6 | كمية التشغيله</div>
<div class="cell" data-label="English">Operation 6 | Operation Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation6.salesPrice">
<div class="cell" data-label="Property">details.operation6.salesPrice</div>
<div class="cell" data-label="Column">op6SalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 6 | سعر البيع</div>
<div class="cell" data-label="English">Operation 6 | Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation6.thickText">
<div class="cell" data-label="Property">details.operation6.thickText</div>
<div class="cell" data-label="Column">op6ThickText</div>
<div class="cell" data-label="Arabic">تشغيلة 6 | سماكة</div>
<div class="cell" data-label="English">Operation 6 | Thick Text</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.operation6.totalCost">
<div class="cell" data-label="Property">details.operation6.totalCost</div>
<div class="cell" data-label="Column">op6TotalCost</div>
<div class="cell" data-label="Arabic">تشغيلة 6 | إجمالي تكلفة التشغيلة</div>
<div class="cell" data-label="English">Operation 6 | Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation6.totalSalesPrice">
<div class="cell" data-label="Property">details.operation6.totalSalesPrice</div>
<div class="cell" data-label="Column">op6TotalSalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 6 | إجمالي بيع التشغيلة</div>
<div class="cell" data-label="English">Operation 6 | Total Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation6.underProcedure">
<div class="cell" data-label="Property">details.operation6.underProcedure</div>
<div class="cell" data-label="Column">op6UnderProcedure</div>
<div class="cell" data-label="Arabic">تشغيلة 6 | تحت الإجراء</div>
<div class="cell" data-label="English">Operation 6 | Under Procedure</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation6.unitCost">
<div class="cell" data-label="Property">details.operation6.unitCost</div>
<div class="cell" data-label="Column">op6UnitCost</div>
<div class="cell" data-label="Arabic">تشغيلة 6 | تكلفة الوحده</div>
<div class="cell" data-label="English">Operation 6 | Unit Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation6.uom">
<div class="cell" data-label="Property">details.operation6.uom</div>
<div class="cell" data-label="Column">op6Uom_id</div>
<div class="cell" data-label="Arabic">تشغيلة 6 | الوحدة</div>
<div class="cell" data-label="English">Operation 6 | Uom</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="details.operation7.calculationFormula">
<div class="cell" data-label="Property">details.operation7.calculationFormula</div>
<div class="cell" data-label="Column">op7CalculationFormula_id</div>
<div class="cell" data-label="Arabic">تشغيلة 7 | الصيغه الحسابيه</div>
<div class="cell" data-label="English">Operation 7 | Calculation Formula</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CalculationFormula](/modules/supplychain/CalculationFormula.md) 
</div>
</div>

<div class="row searchable" id="details.operation7.executed">
<div class="cell" data-label="Property">details.operation7.executed</div>
<div class="cell" data-label="Column">op7Executed</div>
<div class="cell" data-label="Arabic">تشغيلة 7 | تم التنفيذ</div>
<div class="cell" data-label="English">Operation 7 | Executed</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation7.freeJOOperation">
<div class="cell" data-label="Property">details.operation7.freeJOOperation</div>
<div class="cell" data-label="Column">op7FreeJOOperation</div>
<div class="cell" data-label="Arabic">تشغيلة 7 | تشغيلة مجانية</div>
<div class="cell" data-label="English">Operation 7 | Free JOOperation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation7.minSalesQty">
<div class="cell" data-label="Property">details.operation7.minSalesQty</div>
<div class="cell" data-label="Column">op7MinSalesQty</div>
<div class="cell" data-label="Arabic">تشغيلة 7 | أقل كمية بيع</div>
<div class="cell" data-label="English">Operation 7 | min Sales Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation7.operation">
<div class="cell" data-label="Property">details.operation7.operation</div>
<div class="cell" data-label="Column">op7Operation_id</div>
<div class="cell" data-label="Arabic">تشغيلة 7 | تشغيلة</div>
<div class="cell" data-label="English">Operation 7 | Operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [JOOperation](/modules/joborder/JOOperation.md) 
</div>
</div>

<div class="row searchable" id="details.operation7.operationQty">
<div class="cell" data-label="Property">details.operation7.operationQty</div>
<div class="cell" data-label="Column">op7OperationQty</div>
<div class="cell" data-label="Arabic">تشغيلة 7 | كمية التشغيله</div>
<div class="cell" data-label="English">Operation 7 | Operation Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation7.salesPrice">
<div class="cell" data-label="Property">details.operation7.salesPrice</div>
<div class="cell" data-label="Column">op7SalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 7 | سعر البيع</div>
<div class="cell" data-label="English">Operation 7 | Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation7.thickText">
<div class="cell" data-label="Property">details.operation7.thickText</div>
<div class="cell" data-label="Column">op7ThickText</div>
<div class="cell" data-label="Arabic">تشغيلة 7 | سماكة</div>
<div class="cell" data-label="English">Operation 7 | Thick Text</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.operation7.totalCost">
<div class="cell" data-label="Property">details.operation7.totalCost</div>
<div class="cell" data-label="Column">op7TotalCost</div>
<div class="cell" data-label="Arabic">تشغيلة 7 | إجمالي تكلفة التشغيلة</div>
<div class="cell" data-label="English">Operation 7 | Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation7.totalSalesPrice">
<div class="cell" data-label="Property">details.operation7.totalSalesPrice</div>
<div class="cell" data-label="Column">op7TotalSalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 7 | إجمالي بيع التشغيلة</div>
<div class="cell" data-label="English">Operation 7 | Total Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation7.underProcedure">
<div class="cell" data-label="Property">details.operation7.underProcedure</div>
<div class="cell" data-label="Column">op7UnderProcedure</div>
<div class="cell" data-label="Arabic">تشغيلة 7 | تحت الإجراء</div>
<div class="cell" data-label="English">Operation 7 | Under Procedure</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation7.unitCost">
<div class="cell" data-label="Property">details.operation7.unitCost</div>
<div class="cell" data-label="Column">op7UnitCost</div>
<div class="cell" data-label="Arabic">تشغيلة 7 | تكلفة الوحده</div>
<div class="cell" data-label="English">Operation 7 | Unit Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation7.uom">
<div class="cell" data-label="Property">details.operation7.uom</div>
<div class="cell" data-label="Column">op7Uom_id</div>
<div class="cell" data-label="Arabic">تشغيلة 7 | الوحدة</div>
<div class="cell" data-label="English">Operation 7 | Uom</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="details.operation8.calculationFormula">
<div class="cell" data-label="Property">details.operation8.calculationFormula</div>
<div class="cell" data-label="Column">op8CalculationFormula_id</div>
<div class="cell" data-label="Arabic">تشغيلة 8 | الصيغه الحسابيه</div>
<div class="cell" data-label="English">Operation 8 | Calculation Formula</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CalculationFormula](/modules/supplychain/CalculationFormula.md) 
</div>
</div>

<div class="row searchable" id="details.operation8.executed">
<div class="cell" data-label="Property">details.operation8.executed</div>
<div class="cell" data-label="Column">op8Executed</div>
<div class="cell" data-label="Arabic">تشغيلة 8 | تم التنفيذ</div>
<div class="cell" data-label="English">Operation 8 | Executed</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation8.freeJOOperation">
<div class="cell" data-label="Property">details.operation8.freeJOOperation</div>
<div class="cell" data-label="Column">op8FreeJOOperation</div>
<div class="cell" data-label="Arabic">تشغيلة 8 | تشغيلة مجانية</div>
<div class="cell" data-label="English">Operation 8 | Free JOOperation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation8.minSalesQty">
<div class="cell" data-label="Property">details.operation8.minSalesQty</div>
<div class="cell" data-label="Column">op8MinSalesQty</div>
<div class="cell" data-label="Arabic">تشغيلة 8 | أقل كمية بيع</div>
<div class="cell" data-label="English">Operation 8 | min Sales Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation8.operation">
<div class="cell" data-label="Property">details.operation8.operation</div>
<div class="cell" data-label="Column">op8Operation_id</div>
<div class="cell" data-label="Arabic">تشغيلة 8 | تشغيلة</div>
<div class="cell" data-label="English">Operation 8 | Operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [JOOperation](/modules/joborder/JOOperation.md) 
</div>
</div>

<div class="row searchable" id="details.operation8.operationQty">
<div class="cell" data-label="Property">details.operation8.operationQty</div>
<div class="cell" data-label="Column">op8OperationQty</div>
<div class="cell" data-label="Arabic">تشغيلة 8 | كمية التشغيله</div>
<div class="cell" data-label="English">Operation 8 | Operation Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation8.salesPrice">
<div class="cell" data-label="Property">details.operation8.salesPrice</div>
<div class="cell" data-label="Column">op8SalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 8 | سعر البيع</div>
<div class="cell" data-label="English">Operation 8 | Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation8.thickText">
<div class="cell" data-label="Property">details.operation8.thickText</div>
<div class="cell" data-label="Column">op8ThickText</div>
<div class="cell" data-label="Arabic">تشغيلة 8 | سماكة</div>
<div class="cell" data-label="English">Operation 8 | Thick Text</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.operation8.totalCost">
<div class="cell" data-label="Property">details.operation8.totalCost</div>
<div class="cell" data-label="Column">op8TotalCost</div>
<div class="cell" data-label="Arabic">تشغيلة 8 | إجمالي تكلفة التشغيلة</div>
<div class="cell" data-label="English">Operation 8 | Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation8.totalSalesPrice">
<div class="cell" data-label="Property">details.operation8.totalSalesPrice</div>
<div class="cell" data-label="Column">op8TotalSalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 8 | إجمالي بيع التشغيلة</div>
<div class="cell" data-label="English">Operation 8 | Total Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation8.underProcedure">
<div class="cell" data-label="Property">details.operation8.underProcedure</div>
<div class="cell" data-label="Column">op8UnderProcedure</div>
<div class="cell" data-label="Arabic">تشغيلة 8 | تحت الإجراء</div>
<div class="cell" data-label="English">Operation 8 | Under Procedure</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation8.unitCost">
<div class="cell" data-label="Property">details.operation8.unitCost</div>
<div class="cell" data-label="Column">op8UnitCost</div>
<div class="cell" data-label="Arabic">تشغيلة 8 | تكلفة الوحده</div>
<div class="cell" data-label="English">Operation 8 | Unit Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation8.uom">
<div class="cell" data-label="Property">details.operation8.uom</div>
<div class="cell" data-label="Column">op8Uom_id</div>
<div class="cell" data-label="Arabic">تشغيلة 8 | الوحدة</div>
<div class="cell" data-label="English">Operation 8 | Uom</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="details.operation9.calculationFormula">
<div class="cell" data-label="Property">details.operation9.calculationFormula</div>
<div class="cell" data-label="Column">op9CalculationFormula_id</div>
<div class="cell" data-label="Arabic">تشغيلة 9 | الصيغه الحسابيه</div>
<div class="cell" data-label="English">Operation 9 | Calculation Formula</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CalculationFormula](/modules/supplychain/CalculationFormula.md) 
</div>
</div>

<div class="row searchable" id="details.operation9.executed">
<div class="cell" data-label="Property">details.operation9.executed</div>
<div class="cell" data-label="Column">op9Executed</div>
<div class="cell" data-label="Arabic">تشغيلة 9 | تم التنفيذ</div>
<div class="cell" data-label="English">Operation 9 | Executed</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation9.freeJOOperation">
<div class="cell" data-label="Property">details.operation9.freeJOOperation</div>
<div class="cell" data-label="Column">op9FreeJOOperation</div>
<div class="cell" data-label="Arabic">تشغيلة 9 | تشغيلة مجانية</div>
<div class="cell" data-label="English">Operation 9 | Free JOOperation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation9.minSalesQty">
<div class="cell" data-label="Property">details.operation9.minSalesQty</div>
<div class="cell" data-label="Column">op9MinSalesQty</div>
<div class="cell" data-label="Arabic">تشغيلة 9 | أقل كمية بيع</div>
<div class="cell" data-label="English">Operation 9 | min Sales Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation9.operation">
<div class="cell" data-label="Property">details.operation9.operation</div>
<div class="cell" data-label="Column">op9Operation_id</div>
<div class="cell" data-label="Arabic">تشغيلة 9 | تشغيلة</div>
<div class="cell" data-label="English">Operation 9 | Operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [JOOperation](/modules/joborder/JOOperation.md) 
</div>
</div>

<div class="row searchable" id="details.operation9.operationQty">
<div class="cell" data-label="Property">details.operation9.operationQty</div>
<div class="cell" data-label="Column">op9OperationQty</div>
<div class="cell" data-label="Arabic">تشغيلة 9 | كمية التشغيله</div>
<div class="cell" data-label="English">Operation 9 | Operation Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation9.salesPrice">
<div class="cell" data-label="Property">details.operation9.salesPrice</div>
<div class="cell" data-label="Column">op9SalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 9 | سعر البيع</div>
<div class="cell" data-label="English">Operation 9 | Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation9.thickText">
<div class="cell" data-label="Property">details.operation9.thickText</div>
<div class="cell" data-label="Column">op9ThickText</div>
<div class="cell" data-label="Arabic">تشغيلة 9 | سماكة</div>
<div class="cell" data-label="English">Operation 9 | Thick Text</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.operation9.totalCost">
<div class="cell" data-label="Property">details.operation9.totalCost</div>
<div class="cell" data-label="Column">op9TotalCost</div>
<div class="cell" data-label="Arabic">تشغيلة 9 | إجمالي تكلفة التشغيلة</div>
<div class="cell" data-label="English">Operation 9 | Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation9.totalSalesPrice">
<div class="cell" data-label="Property">details.operation9.totalSalesPrice</div>
<div class="cell" data-label="Column">op9TotalSalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة 9 | إجمالي بيع التشغيلة</div>
<div class="cell" data-label="English">Operation 9 | Total Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation9.underProcedure">
<div class="cell" data-label="Property">details.operation9.underProcedure</div>
<div class="cell" data-label="Column">op9UnderProcedure</div>
<div class="cell" data-label="Arabic">تشغيلة 9 | تحت الإجراء</div>
<div class="cell" data-label="English">Operation 9 | Under Procedure</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.operation9.unitCost">
<div class="cell" data-label="Property">details.operation9.unitCost</div>
<div class="cell" data-label="Column">op9UnitCost</div>
<div class="cell" data-label="Arabic">تشغيلة 9 | تكلفة الوحده</div>
<div class="cell" data-label="English">Operation 9 | Unit Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.operation9.uom">
<div class="cell" data-label="Property">details.operation9.uom</div>
<div class="cell" data-label="Column">op9Uom_id</div>
<div class="cell" data-label="Arabic">تشغيلة 9 | الوحدة</div>
<div class="cell" data-label="English">Operation 9 | Uom</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="details.orginDoc">
<div class="cell" data-label="Property">details.orginDoc</div>
<div class="cell gen-ref-column" data-label="Column">orginDocActualCode,  orginDocCode,  orginDocEntityType,  orginDocId</div>
<div class="cell" data-label="Arabic">تم النسخ من سند</div>
<div class="cell" data-label="English">Copied From Doc</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.originalLinesJSON">
<div class="cell" data-label="Property">details.originalLinesJSON</div>
<div class="cell" data-label="Column">originalLinesJSON</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="details.owner">
<div class="cell" data-label="Property">details.owner</div>
<div class="cell gen-ref-column" data-label="Column">ownerActualCode,  ownerCode,  ownerEntityType,  ownerId</div>
<div class="cell" data-label="Arabic">المالك</div>
<div class="cell" data-label="English">owner</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.pickLineId">
<div class="cell" data-label="Property">details.pickLineId</div>
<div class="cell" data-label="Column">pickLineId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

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
<div class="cell" data-label="Arabic">إجمالي أسعار البيع للتشغيلات</div>
<div class="cell" data-label="English">Total Sales Prices For Operations</div>
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
<div class="cell" data-label="Arabic">إجمالي أسعار البيع للأصناف</div>
<div class="cell" data-label="English">Total Sales Prices For Items</div>
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
<div class="cell" data-label="Arabic">إجمالي أسعار البيع للتشغيلات</div>
<div class="cell" data-label="English">Total Sales Prices For Operations</div>
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

<div class="row searchable" id="details.priceClassifier1">
<div class="cell" data-label="Property">details.priceClassifier1</div>
<div class="cell" data-label="Column">priceClassifier1_id</div>
<div class="cell" data-label="Arabic">محدد سعر 1</div>
<div class="cell" data-label="English">Price Classifier 1</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SalesPriceClassifier1](/modules/basic/SalesPriceClassifier1.md) 
</div>
</div>

<div class="row searchable" id="details.priceClassifier2">
<div class="cell" data-label="Property">details.priceClassifier2</div>
<div class="cell" data-label="Column">priceClassifier2_id</div>
<div class="cell" data-label="Arabic">محدد سعر 2</div>
<div class="cell" data-label="English">Price Classifier 2</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SalesPriceClassifier2](/modules/basic/SalesPriceClassifier2.md) 
</div>
</div>

<div class="row searchable" id="details.priceClassifier3">
<div class="cell" data-label="Property">details.priceClassifier3</div>
<div class="cell" data-label="Column">priceClassifier3_id</div>
<div class="cell" data-label="Arabic">محدد سعر 3</div>
<div class="cell" data-label="English">Price Classifier 3</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SalesPriceClassifier3](/modules/basic/SalesPriceClassifier3.md) 
</div>
</div>

<div class="row searchable" id="details.priceClassifier4">
<div class="cell" data-label="Property">details.priceClassifier4</div>
<div class="cell" data-label="Column">priceClassifier4_id</div>
<div class="cell" data-label="Arabic">محدد سعر 4</div>
<div class="cell" data-label="English">Price Classifier 4</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SalesPriceClassifier4](/modules/basic/SalesPriceClassifier4.md) 
</div>
</div>

<div class="row searchable" id="details.priceClassifier5">
<div class="cell" data-label="Property">details.priceClassifier5</div>
<div class="cell" data-label="Column">priceClassifier5_id</div>
<div class="cell" data-label="Arabic">محدد سعر 5</div>
<div class="cell" data-label="English">Price Classifier 5</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SalesPriceClassifier5](/modules/basic/SalesPriceClassifier5.md) 
</div>
</div>

<div class="row searchable" id="details.pricingQty">
<div class="cell" data-label="Property">details.pricingQty</div>
<div class="cell" data-label="Column">pricingQty</div>
<div class="cell" data-label="Arabic">كمية التسعير</div>
<div class="cell" data-label="English">Pricing Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.productionDate">
<div class="cell" data-label="Property">details.productionDate</div>
<div class="cell" data-label="Column">productionDate</div>
<div class="cell" data-label="Arabic">تواريخ الصلاحية | الإنتاج</div>
<div class="cell" data-label="English">Date | Production</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.qtyAtInsert">
<div class="cell" data-label="Property">details.qtyAtInsert</div>
<div class="cell" data-label="Column">qtyAtInsert</div>
<div class="cell" data-label="Arabic">الكمية عند الإنشاء</div>
<div class="cell" data-label="English">Qty At Insert</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.qtyAtInsertWithReserv">
<div class="cell" data-label="Property">details.qtyAtInsertWithReserv</div>
<div class="cell" data-label="Column">qtyAtInsertWithReserv</div>
<div class="cell" data-label="Arabic">الكمية عند الإنشاء مع الحجز</div>
<div class="cell" data-label="English">Qty At Insert With Reserv</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.quantity.baseQty.uom">
<div class="cell" data-label="Property">details.quantity.baseQty.uom</div>
<div class="cell" data-label="Column">quantityBaseUom_id</div>
<div class="cell" data-label="Arabic">الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="details.quantity.baseQty.value">
<div class="cell" data-label="Property">details.quantity.baseQty.value</div>
<div class="cell" data-label="Column">quantityBaseValue</div>
<div class="cell" data-label="Arabic">الكمية</div>
<div class="cell" data-label="English">Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.quantity.itemAssortment">
<div class="cell" data-label="Property">details.quantity.itemAssortment</div>
<div class="cell" data-label="Column">quantityItemAssortment_id</div>
<div class="cell" data-label="Arabic">التشكيلة</div>
<div class="cell" data-label="English">The Assortment</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemAssortment](/modules/supplychain/ItemAssortment.md) 
</div>
</div>

<div class="row searchable" id="details.quantity.measureQty">
<div class="cell" data-label="Property">details.quantity.measureQty</div>
<div class="cell" data-label="Column">quantityMeasureQty</div>
<div class="cell" data-label="Arabic">الأبعاد | عدد</div>
<div class="cell" data-label="English">Measures | Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.quantity.measures.clippedLength1">
<div class="cell" data-label="Property">details.quantity.measures.clippedLength1</div>
<div class="cell" data-label="Column">quantityClippedLength1</div>
<div class="cell" data-label="Arabic">أبعادالجزء المقصوص 1 | الطول</div>
<div class="cell" data-label="English">Clipped Part1 Measures | Length</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.quantity.measures.height">
<div class="cell" data-label="Property">details.quantity.measures.height</div>
<div class="cell" data-label="Column">quantityHeight</div>
<div class="cell" data-label="Arabic">الأبعاد | ر</div>
<div class="cell" data-label="English">Measures | H</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.quantity.measures.length">
<div class="cell" data-label="Property">details.quantity.measures.length</div>
<div class="cell" data-label="Column">quantityLength</div>
<div class="cell" data-label="Arabic">الأبعاد | ط</div>
<div class="cell" data-label="English">Measures | L</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.quantity.measures.text">
<div class="cell" data-label="Property">details.quantity.measures.text</div>
<div class="cell" data-label="Column">quantityText</div>
<div class="cell" data-label="Arabic">الأبعاد | الأبعاد</div>
<div class="cell" data-label="English">Measures | L * W * H</div>
<div class="cell" data-label="Type">Measures</div>

</div>

<div class="row searchable" id="details.quantity.measures.width">
<div class="cell" data-label="Property">details.quantity.measures.width</div>
<div class="cell" data-label="Column">quantityWidth</div>
<div class="cell" data-label="Arabic">الأبعاد | ع</div>
<div class="cell" data-label="English">Measures | W</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.quantity.quantity.primeQty.uom">
<div class="cell" data-label="Property">details.quantity.quantity.primeQty.uom</div>
<div class="cell" data-label="Column">quantityPUom_id</div>
<div class="cell" data-label="Arabic">كمية الصنف | وحدة</div>
<div class="cell" data-label="English">Item Quantity | UOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="details.quantity.quantity.primeQty.value">
<div class="cell" data-label="Property">details.quantity.quantity.primeQty.value</div>
<div class="cell" data-label="Column">quantityPValue</div>
<div class="cell" data-label="Arabic">كمية الصنف | قيمة</div>
<div class="cell" data-label="English">Item Quantity | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.quantity.quantity.secondQty.uom">
<div class="cell" data-label="Property">details.quantity.quantity.secondQty.uom</div>
<div class="cell" data-label="Column">quantitySUom_id</div>
<div class="cell" data-label="Arabic">الوحدة الثانية | الوحدة</div>
<div class="cell" data-label="English">Secondary | UOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="details.quantity.quantity.secondQty.value">
<div class="cell" data-label="Property">details.quantity.quantity.secondQty.value</div>
<div class="cell" data-label="Column">quantitySValue</div>
<div class="cell" data-label="Arabic">الوحدة الثانية | الكمية</div>
<div class="cell" data-label="English">Secondary | Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.quantity.uomRate">
<div class="cell" data-label="Property">details.quantity.uomRate</div>
<div class="cell" data-label="Column">quantityUomRate</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="details.remaining">
<div class="cell" data-label="Property">details.remaining</div>
<div class="cell" data-label="Column">remaining</div>
<div class="cell" data-label="Arabic">المتبقي</div>
<div class="cell" data-label="English">Remaining</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.remainingQtyFromDelivery">
<div class="cell" data-label="Property">details.remainingQtyFromDelivery</div>
<div class="cell" data-label="Column">remainingQtyFromDelivery</div>
<div class="cell" data-label="Arabic">الكمية المتبقية من التوصيل</div>
<div class="cell" data-label="English">Remaining Quantity From Delivery</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.remarks">
<div class="cell" data-label="Property">details.remarks</div>
<div class="cell" data-label="Column">remarks</div>
<div class="cell" data-label="Arabic"> ملاحظات</div>
<div class="cell" data-label="English"> Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="details.reservationDate">
<div class="cell" data-label="Property">details.reservationDate</div>
<div class="cell" data-label="Column">reservationDate</div>
<div class="cell" data-label="Arabic">تاريخ الحجز</div>
<div class="cell" data-label="English">Reservation Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.reservationLocator">
<div class="cell" data-label="Property">details.reservationLocator</div>
<div class="cell" data-label="Column">reservationLocator_id</div>
<div class="cell" data-label="Arabic">موقع الحجز</div>
<div class="cell" data-label="English">Reservation Locator</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Locator](/modules/supplychain/Locator.md) 
</div>
</div>

<div class="row searchable" id="details.reservationStatus">
<div class="cell" data-label="Property">details.reservationStatus</div>
<div class="cell" data-label="Column">reservationStatus</div>
<div class="cell" data-label="Arabic">حالة الحجز</div>
<div class="cell" data-label="English">Reservation Status</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="details.reservationWareHouse">
<div class="cell" data-label="Property">details.reservationWareHouse</div>
<div class="cell" data-label="Column">reservationWareHouse_id</div>
<div class="cell" data-label="Arabic">مخزن الحجز</div>
<div class="cell" data-label="English">Reservation WareHouse</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="details.reserveLineId">
<div class="cell" data-label="Property">details.reserveLineId</div>
<div class="cell" data-label="Column">reserveLineId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="details.reservedQty">
<div class="cell" data-label="Property">details.reservedQty</div>
<div class="cell" data-label="Column">reservedQty</div>
<div class="cell" data-label="Arabic">الكمية المحجوزة</div>
<div class="cell" data-label="English">Reserved Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.retFromSeq">
<div class="cell" data-label="Property">details.retFromSeq</div>
<div class="cell" data-label="Column">retFromSeq</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Long</div>

</div>

<div class="row searchable" id="details.retestDate">
<div class="cell" data-label="Property">details.retestDate</div>
<div class="cell" data-label="Column">retestDate</div>
<div class="cell" data-label="Arabic">تاريخ إعادة الاختبار</div>
<div class="cell" data-label="English">retest Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.retunLine">
<div class="cell" data-label="Property">details.retunLine</div>
<div class="cell" data-label="Column">retunLine</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.returnedQty">
<div class="cell" data-label="Property">details.returnedQty</div>
<div class="cell" data-label="Column">returnedQty</div>
<div class="cell" data-label="Arabic">المرتجع</div>
<div class="cell" data-label="English">Return Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.revisionName">
<div class="cell" data-label="Property">details.revisionName</div>
<div class="cell" data-label="Column">revisionName</div>
<div class="cell" data-label="Arabic">اسم الإصدار</div>
<div class="cell" data-label="English">Revision Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.salesMan">
<div class="cell" data-label="Property">details.salesMan</div>
<div class="cell" data-label="Column">salesMan_id</div>
<div class="cell" data-label="Arabic">مندوب المبيعات</div>
<div class="cell" data-label="English">Salesman</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/modules/basic/Employee.md) 
</div>
</div>

<div class="row searchable" id="details.salesTotal">
<div class="cell" data-label="Property">details.salesTotal</div>
<div class="cell" data-label="Column">salesTotal</div>
<div class="cell" data-label="Arabic">إجمالي المبيعات</div>
<div class="cell" data-label="English">Sales Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.satisfiedQty">
<div class="cell" data-label="Property">details.satisfiedQty</div>
<div class="cell" data-label="Column">satisfiedQty</div>
<div class="cell" data-label="Arabic">نفذت</div>
<div class="cell" data-label="English">Satisfied Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.satisfiedQty2">
<div class="cell" data-label="Property">details.satisfiedQty2</div>
<div class="cell" data-label="Column">satisfiedQty2</div>
<div class="cell" data-label="Arabic">نفذت 2</div>
<div class="cell" data-label="English">Satisfied Qty 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.serialLineNumber">
<div class="cell" data-label="Property">details.serialLineNumber</div>
<div class="cell" data-label="Column">serialLineNumber</div>
<div class="cell" data-label="Arabic">الرقم التسلسلي للسطر</div>
<div class="cell" data-label="English">Serial Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="details.shippingAddress.address1">
<div class="cell" data-label="Property">details.shippingAddress.address1</div>
<div class="cell" data-label="Column">address1</div>
<div class="cell" data-label="Arabic">عنوان 1</div>
<div class="cell" data-label="English">Address 1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.shippingAddress.address2">
<div class="cell" data-label="Property">details.shippingAddress.address2</div>
<div class="cell" data-label="Column">address2</div>
<div class="cell" data-label="Arabic">رقم المبني</div>
<div class="cell" data-label="English">Building Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.shippingAddress.area">
<div class="cell" data-label="Property">details.shippingAddress.area</div>
<div class="cell" data-label="Column">addressArea</div>
<div class="cell" data-label="Arabic">المنطقة</div>
<div class="cell" data-label="English">Area</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.shippingAddress.buildingNumber">
<div class="cell" data-label="Property">details.shippingAddress.buildingNumber</div>
<div class="cell" data-label="Column">buildingNumber</div>
<div class="cell" data-label="Arabic">رقم المبني</div>
<div class="cell" data-label="English">Building Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.shippingAddress.city">
<div class="cell" data-label="Property">details.shippingAddress.city</div>
<div class="cell" data-label="Column">addressCity</div>
<div class="cell" data-label="Arabic">المدينة</div>
<div class="cell" data-label="English">City</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.shippingAddress.country">
<div class="cell" data-label="Property">details.shippingAddress.country</div>
<div class="cell" data-label="Column">addressCountry</div>
<div class="cell" data-label="Arabic">الدولة</div>
<div class="cell" data-label="English">Country</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.shippingAddress.countryCode">
<div class="cell" data-label="Property">details.shippingAddress.countryCode</div>
<div class="cell" data-label="Column">countryCode</div>
<div class="cell" data-label="Arabic">كود الدولة</div>
<div class="cell" data-label="English">Country Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.shippingAddress.district">
<div class="cell" data-label="Property">details.shippingAddress.district</div>
<div class="cell" data-label="Column">district</div>
<div class="cell" data-label="Arabic">الحي</div>
<div class="cell" data-label="English">District</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.shippingAddress.landPlotNumber">
<div class="cell" data-label="Property">details.shippingAddress.landPlotNumber</div>
<div class="cell" data-label="Column">landPlotNumber</div>
<div class="cell" data-label="Arabic">رقم تعريفي للأرض</div>
<div class="cell" data-label="English">Land Plot Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.shippingAddress.mapLocation">
<div class="cell" data-label="Property">details.shippingAddress.mapLocation</div>
<div class="cell" data-label="Column">mapLocation</div>
<div class="cell" data-label="Arabic">الموقع على الخريطة</div>
<div class="cell" data-label="English">Map Location</div>
<div class="cell" data-label="Type">LatLng</div>

</div>

<div class="row searchable" id="details.shippingAddress.postalCode">
<div class="cell" data-label="Property">details.shippingAddress.postalCode</div>
<div class="cell" data-label="Column">postalCode</div>
<div class="cell" data-label="Arabic">الكود البريدي</div>
<div class="cell" data-label="English">Postal Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.shippingAddress.region">
<div class="cell" data-label="Property">details.shippingAddress.region</div>
<div class="cell" data-label="Column">region_id</div>
<div class="cell" data-label="Arabic">منطقة جغرافيه</div>
<div class="cell" data-label="English">Region</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AddressRegion](/modules/basic/AddressRegion.md) 
</div>
</div>

<div class="row searchable" id="details.shippingAddress.state">
<div class="cell" data-label="Property">details.shippingAddress.state</div>
<div class="cell" data-label="Column">addressState</div>
<div class="cell" data-label="Arabic">المحافظة</div>
<div class="cell" data-label="English">State</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.shippingAddress.street">
<div class="cell" data-label="Property">details.shippingAddress.street</div>
<div class="cell" data-label="Column">street</div>
<div class="cell" data-label="Arabic"> شارع</div>
<div class="cell" data-label="English"> Street</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.sizeName">
<div class="cell" data-label="Property">details.sizeName</div>
<div class="cell" data-label="Column">sizeName</div>
<div class="cell" data-label="Arabic">اسم المقاس</div>
<div class="cell" data-label="English">Size Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.sourceLineId">
<div class="cell" data-label="Property">details.sourceLineId</div>
<div class="cell" data-label="Column">sourceLineId</div>
<div class="cell" data-label="Arabic">معرف سطر المصدر</div>
<div class="cell" data-label="English">Source Line Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="details.sourceType">
<div class="cell" data-label="Property">details.sourceType</div>
<div class="cell" data-label="Column">sourceType</div>
<div class="cell" data-label="Arabic">Source Type</div>
<div class="cell" data-label="English">Source Type</div>
<div class="cell" data-label="Type">EntityType</div>

</div>

<div class="row searchable" id="details.specialDiscount1">
<div class="cell" data-label="Property">details.specialDiscount1</div>
<div class="cell" data-label="Column">specialDiscount1</div>
<div class="cell" data-label="Arabic">الخصم 1 الخاص</div>
<div class="cell" data-label="English">Special Discount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.specialDiscount2">
<div class="cell" data-label="Property">details.specialDiscount2</div>
<div class="cell" data-label="Column">specialDiscount2</div>
<div class="cell" data-label="Arabic">الخصم 2 الخاص</div>
<div class="cell" data-label="English">Special Add. Discount1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.specialDiscount3">
<div class="cell" data-label="Property">details.specialDiscount3</div>
<div class="cell" data-label="Column">specialDiscount3</div>
<div class="cell" data-label="Arabic">الخصم 3 الخاص</div>
<div class="cell" data-label="English">Special Add. Discount2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.specificCode">
<div class="cell" data-label="Property">details.specificCode</div>
<div class="cell" data-label="Column">specificCode</div>
<div class="cell" data-label="Arabic">رمز خاص</div>
<div class="cell" data-label="English">Specific Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.specificDimensions.activePerc">
<div class="cell" data-label="Property">details.specificDimensions.activePerc</div>
<div class="cell" data-label="Column">activePerc</div>
<div class="cell" data-label="Arabic">النسبة الفعالة</div>
<div class="cell" data-label="English">Active Percentage</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.specificDimensions.box">
<div class="cell" data-label="Property">details.specificDimensions.box</div>
<div class="cell" data-label="Column">box</div>
<div class="cell" data-label="Arabic">صندوق</div>
<div class="cell" data-label="English">Box</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.specificDimensions.color">
<div class="cell" data-label="Property">details.specificDimensions.color</div>
<div class="cell" data-label="Column">color</div>
<div class="cell" data-label="Arabic">اللون</div>
<div class="cell" data-label="English">Color</div>
<div class="cell" data-label="Type">Color</div>

</div>

<div class="row searchable" id="details.specificDimensions.inactivePerc">
<div class="cell" data-label="Property">details.specificDimensions.inactivePerc</div>
<div class="cell" data-label="Column">inactivePerc</div>
<div class="cell" data-label="Arabic">النسبة الغير فعالة</div>
<div class="cell" data-label="English">Inactive Percentage</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.specificDimensions.locator">
<div class="cell" data-label="Property">details.specificDimensions.locator</div>
<div class="cell" data-label="Column">locator_id</div>
<div class="cell" data-label="Arabic">الموقع</div>
<div class="cell" data-label="English">Locator</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Locator](/modules/supplychain/Locator.md) 
</div>
</div>

<div class="row searchable" id="details.specificDimensions.lotId">
<div class="cell" data-label="Property">details.specificDimensions.lotId</div>
<div class="cell" data-label="Column">lotId</div>
<div class="cell" data-label="Arabic">رقم الشحنه</div>
<div class="cell" data-label="English">Lot ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.specificDimensions.measures">
<div class="cell" data-label="Property">details.specificDimensions.measures</div>
<div class="cell" data-label="Column">measures</div>
<div class="cell" data-label="Arabic">الأبعاد</div>
<div class="cell" data-label="English">Measures</div>
<div class="cell" data-label="Type">Measures</div>

</div>

<div class="row searchable" id="details.specificDimensions.revisionId">
<div class="cell" data-label="Property">details.specificDimensions.revisionId</div>
<div class="cell" data-label="Column">revisionId</div>
<div class="cell" data-label="Arabic">الإصدار</div>
<div class="cell" data-label="English">Revision ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.specificDimensions.secondSerial">
<div class="cell" data-label="Property">details.specificDimensions.secondSerial</div>
<div class="cell" data-label="Column">secondSerial</div>
<div class="cell" data-label="Arabic">الرقم المسلسل الثاني</div>
<div class="cell" data-label="English">Second Serial</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="details.specificDimensions.serialNumber">
<div class="cell" data-label="Property">details.specificDimensions.serialNumber</div>
<div class="cell" data-label="Column">serialNumber</div>
<div class="cell" data-label="Arabic">الرقم المسلسل</div>
<div class="cell" data-label="English">Serial number</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="details.specificDimensions.size">
<div class="cell" data-label="Property">details.specificDimensions.size</div>
<div class="cell" data-label="Column">size</div>
<div class="cell" data-label="Arabic">المقاس</div>
<div class="cell" data-label="English">Size</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.specificDimensions.subItem">
<div class="cell" data-label="Property">details.specificDimensions.subItem</div>
<div class="cell" data-label="Column">subItem_id</div>
<div class="cell" data-label="Arabic"> صنف فرعى</div>
<div class="cell" data-label="English"> SubItem</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SubItem](/modules/srvcenter-subitems/SubItem.md) 
</div>
</div>

<div class="row searchable" id="details.specificDimensions.warehouse">
<div class="cell" data-label="Property">details.specificDimensions.warehouse</div>
<div class="cell" data-label="Column">warehouse_id</div>
<div class="cell" data-label="Arabic">المخزن</div>
<div class="cell" data-label="English">Warehouse</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="details.standardTerm">
<div class="cell" data-label="Property">details.standardTerm</div>
<div class="cell" data-label="Column">standardTerm_id</div>
<div class="cell" data-label="Arabic">البند القياسي</div>
<div class="cell" data-label="English">Standard Term</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ContractingStandardTerm](/modules/contracting/ContractingStandardTerm.md) 
</div>
</div>

<div class="row searchable" id="details.subsidiary">
<div class="cell" data-label="Property">details.subsidiary</div>
<div class="cell gen-ref-column" data-label="Column">subsidiaryActualCode,  subsidiaryCode,  subsidiaryEntityType,  subsidiaryId</div>
<div class="cell" data-label="Arabic">الذمة</div>
<div class="cell" data-label="English">Subsidiary</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.technician">
<div class="cell" data-label="Property">details.technician</div>
<div class="cell" data-label="Column">technician_id</div>
<div class="cell" data-label="Arabic">الفني</div>
<div class="cell" data-label="English">Technician</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/modules/basic/Employee.md) 
</div>
</div>

<div class="row searchable" id="details.termCode">
<div class="cell" data-label="Property">details.termCode</div>
<div class="cell" data-label="Column">termCode</div>
<div class="cell" data-label="Arabic">كود البند</div>
<div class="cell" data-label="English">Term Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.termRemarks">
<div class="cell" data-label="Property">details.termRemarks</div>
<div class="cell" data-label="Column">termRemarks</div>
<div class="cell" data-label="Arabic">وصف البند</div>
<div class="cell" data-label="English">Term Remarks</div>
<div class="cell" data-label="Type">BigText</div>

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

<div class="row searchable" id="details.theSize">
<div class="cell" data-label="Property">details.theSize</div>
<div class="cell" data-label="Column">size</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.totalSalesPriceOperations">
<div class="cell" data-label="Property">details.totalSalesPriceOperations</div>
<div class="cell" data-label="Column">totalSalesPriceOperations</div>
<div class="cell" data-label="Arabic">إجمالي أسعار البيع للتشغيلات</div>
<div class="cell" data-label="English">Total Sales Prices For Operations</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.totalUnitPrice">
<div class="cell" data-label="Property">details.totalUnitPrice</div>
<div class="cell" data-label="Column">totalUnitPrice</div>
<div class="cell" data-label="Arabic">سعر الوحدة الشامل</div>
<div class="cell" data-label="English">Total Unit Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.transItemType">
<div class="cell" data-label="Property">details.transItemType</div>
<div class="cell" data-label="Column">transItemType</div>
<div class="cell" data-label="Arabic">نوع السطر</div>
<div class="cell" data-label="English">Line Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="details.unReservedQty">
<div class="cell" data-label="Property">details.unReservedQty</div>
<div class="cell" data-label="Column">unReservedQty</div>
<div class="cell" data-label="Arabic">الكمية العير محجوزة</div>
<div class="cell" data-label="English">Un Reserved Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.unsatisfiedQty">
<div class="cell" data-label="Property">details.unsatisfiedQty</div>
<div class="cell" data-label="Column">unsatisfiedQty</div>
<div class="cell" data-label="Arabic">الكمية الغير مستلمة</div>
<div class="cell" data-label="English">Unsatisfied Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.unsatisfiedQty2">
<div class="cell" data-label="Property">details.unsatisfiedQty2</div>
<div class="cell" data-label="Column">unsatisfiedQty2</div>
<div class="cell" data-label="Arabic">الكمية الغير مستلمة 2</div>
<div class="cell" data-label="English">Unsatisfied Quantity 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.userSatisfiedQty">
<div class="cell" data-label="Property">details.userSatisfiedQty</div>
<div class="cell" data-label="Column">userSatisfiedQty</div>
<div class="cell" data-label="Arabic">الكمية المسلمة يدويا</div>
<div class="cell" data-label="English">Manually Satisfied Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.userSatisfiedQty2">
<div class="cell" data-label="Property">details.userSatisfiedQty2</div>
<div class="cell" data-label="Column">userSatisfiedQty2</div>
<div class="cell" data-label="Arabic">الكمية المسلمة يدويا 2</div>
<div class="cell" data-label="English">Manually Satisfied Qty 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.valueDate">
<div class="cell" data-label="Property">details.valueDate</div>
<div class="cell" data-label="Column">valueDate</div>
<div class="cell" data-label="Arabic">التاريخ الفعلي</div>
<div class="cell" data-label="English">Value Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.warrantyCode">
<div class="cell" data-label="Property">details.warrantyCode</div>
<div class="cell" data-label="Column">warrantyCode</div>
<div class="cell" data-label="Arabic">كود الضمان</div>
<div class="cell" data-label="English">Warranty Code</div>
<div class="cell" data-label="Type">BigText</div>

</div>


</div>
</div>

<div id='joMeasures' title='joMeasures' class='searchable'>

## joMeasures (الأبعاد - Measures)
**Table Name:** JOSalesOrderMeasureLine, **Join Column:** jOSalesOrder_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="joMeasures.id">
<div class="cell" data-label="Property">joMeasures.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="joMeasures.lineNumber">
<div class="cell" data-label="Property">joMeasures.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="joMeasures.quantity.baseQty.uom">
<div class="cell" data-label="Property">joMeasures.quantity.baseQty.uom</div>
<div class="cell" data-label="Column">quantityBaseUom_id</div>
<div class="cell" data-label="Arabic">الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="joMeasures.quantity.baseQty.value">
<div class="cell" data-label="Property">joMeasures.quantity.baseQty.value</div>
<div class="cell" data-label="Column">quantityBaseValue</div>
<div class="cell" data-label="Arabic">الكمية</div>
<div class="cell" data-label="English">Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="joMeasures.quantity.itemAssortment">
<div class="cell" data-label="Property">joMeasures.quantity.itemAssortment</div>
<div class="cell" data-label="Column">quantityItemAssortment_id</div>
<div class="cell" data-label="Arabic">التشكيلة</div>
<div class="cell" data-label="English">The Assortment</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemAssortment](/modules/supplychain/ItemAssortment.md) 
</div>
</div>

<div class="row searchable" id="joMeasures.quantity.measureQty">
<div class="cell" data-label="Property">joMeasures.quantity.measureQty</div>
<div class="cell" data-label="Column">quantityMeasureQty</div>
<div class="cell" data-label="Arabic">الأبعاد | عدد</div>
<div class="cell" data-label="English">Measures | Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="joMeasures.quantity.measures.clippedLength1">
<div class="cell" data-label="Property">joMeasures.quantity.measures.clippedLength1</div>
<div class="cell" data-label="Column">quantityClippedLength1</div>
<div class="cell" data-label="Arabic">أبعادالجزء المقصوص 1 | الطول</div>
<div class="cell" data-label="English">Clipped Part1 Measures | Length</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="joMeasures.quantity.measures.height">
<div class="cell" data-label="Property">joMeasures.quantity.measures.height</div>
<div class="cell" data-label="Column">quantityHeight</div>
<div class="cell" data-label="Arabic">الأبعاد | ر</div>
<div class="cell" data-label="English">Measures | H</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="joMeasures.quantity.measures.length">
<div class="cell" data-label="Property">joMeasures.quantity.measures.length</div>
<div class="cell" data-label="Column">quantityLength</div>
<div class="cell" data-label="Arabic">الأبعاد | ط</div>
<div class="cell" data-label="English">Measures | L</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="joMeasures.quantity.measures.text">
<div class="cell" data-label="Property">joMeasures.quantity.measures.text</div>
<div class="cell" data-label="Column">quantityText</div>
<div class="cell" data-label="Arabic">الأبعاد | الأبعاد</div>
<div class="cell" data-label="English">Measures | L * W * H</div>
<div class="cell" data-label="Type">Measures</div>

</div>

<div class="row searchable" id="joMeasures.quantity.measures.width">
<div class="cell" data-label="Property">joMeasures.quantity.measures.width</div>
<div class="cell" data-label="Column">quantityWidth</div>
<div class="cell" data-label="Arabic">الأبعاد | ع</div>
<div class="cell" data-label="English">Measures | W</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="joMeasures.quantity.quantity.primeQty.uom">
<div class="cell" data-label="Property">joMeasures.quantity.quantity.primeQty.uom</div>
<div class="cell" data-label="Column">quantityPUom_id</div>
<div class="cell" data-label="Arabic">الوحدة الرئيسية | الوحدة</div>
<div class="cell" data-label="English">Primary | UOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="joMeasures.quantity.quantity.primeQty.value">
<div class="cell" data-label="Property">joMeasures.quantity.quantity.primeQty.value</div>
<div class="cell" data-label="Column">quantityPValue</div>
<div class="cell" data-label="Arabic">الوحدة الرئيسية | الكمية</div>
<div class="cell" data-label="English">Primary | Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="joMeasures.quantity.quantity.secondQty.uom">
<div class="cell" data-label="Property">joMeasures.quantity.quantity.secondQty.uom</div>
<div class="cell" data-label="Column">quantitySUom_id</div>
<div class="cell" data-label="Arabic">الوحدة الثانية | الوحدة</div>
<div class="cell" data-label="English">Secondary | UOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="joMeasures.quantity.quantity.secondQty.value">
<div class="cell" data-label="Property">joMeasures.quantity.quantity.secondQty.value</div>
<div class="cell" data-label="Column">quantitySValue</div>
<div class="cell" data-label="Arabic">الوحدة الثانية | الكمية</div>
<div class="cell" data-label="English">Secondary | Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="joMeasures.quantity.uomRate">
<div class="cell" data-label="Property">joMeasures.quantity.uomRate</div>
<div class="cell" data-label="Column">quantityUomRate</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="joMeasures.specificCode">
<div class="cell" data-label="Property">joMeasures.specificCode</div>
<div class="cell" data-label="Column">specificCode</div>
<div class="cell" data-label="Arabic">رمز خاص</div>
<div class="cell" data-label="English">Specific Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="joMeasures.totalArea">
<div class="cell" data-label="Property">joMeasures.totalArea</div>
<div class="cell" data-label="Column">totalArea</div>
<div class="cell" data-label="Arabic">المساحة  الإجمالية</div>
<div class="cell" data-label="English">Total Area</div>
<div class="cell" data-label="Type">Decimal</div>

</div>


</div>
</div>

<div id='joOperations' title='joOperations' class='searchable'>

## joOperations (تشغيلات - JOOperations)
**Table Name:** JOOperationLine, **Join Column:** jOSalesOrder_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="joOperations.addWithItem1">
<div class="cell" data-label="Property">joOperations.addWithItem1</div>
<div class="cell" data-label="Column">addWithItem1</div>
<div class="cell" data-label="Arabic">إضافة إلي الصنف 1</div>
<div class="cell" data-label="English">Add With Item1</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="joOperations.addWithItem10">
<div class="cell" data-label="Property">joOperations.addWithItem10</div>
<div class="cell" data-label="Column">addWithItem10</div>
<div class="cell" data-label="Arabic">إضافة إلي الصنف 10</div>
<div class="cell" data-label="English">Add With Item10</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="joOperations.addWithItem2">
<div class="cell" data-label="Property">joOperations.addWithItem2</div>
<div class="cell" data-label="Column">addWithItem2</div>
<div class="cell" data-label="Arabic">إضافة إلي الصنف 2</div>
<div class="cell" data-label="English">Add With Item2</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="joOperations.addWithItem3">
<div class="cell" data-label="Property">joOperations.addWithItem3</div>
<div class="cell" data-label="Column">addWithItem3</div>
<div class="cell" data-label="Arabic">إضافة إلي الصنف 3</div>
<div class="cell" data-label="English">Add With Item3</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="joOperations.addWithItem4">
<div class="cell" data-label="Property">joOperations.addWithItem4</div>
<div class="cell" data-label="Column">addWithItem4</div>
<div class="cell" data-label="Arabic">إضافة إلي الصنف 4</div>
<div class="cell" data-label="English">Add With Item4</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="joOperations.addWithItem5">
<div class="cell" data-label="Property">joOperations.addWithItem5</div>
<div class="cell" data-label="Column">addWithItem5</div>
<div class="cell" data-label="Arabic">إضافة إلي الصنف 5</div>
<div class="cell" data-label="English">Add With Item5</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="joOperations.addWithItem6">
<div class="cell" data-label="Property">joOperations.addWithItem6</div>
<div class="cell" data-label="Column">addWithItem6</div>
<div class="cell" data-label="Arabic">إضافة إلي الصنف 6</div>
<div class="cell" data-label="English">Add With Item6</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="joOperations.addWithItem7">
<div class="cell" data-label="Property">joOperations.addWithItem7</div>
<div class="cell" data-label="Column">addWithItem7</div>
<div class="cell" data-label="Arabic">إضافة إلي الصنف 7</div>
<div class="cell" data-label="English">Add With Item7</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="joOperations.addWithItem8">
<div class="cell" data-label="Property">joOperations.addWithItem8</div>
<div class="cell" data-label="Column">addWithItem8</div>
<div class="cell" data-label="Arabic">إضافة إلي الصنف 8</div>
<div class="cell" data-label="English">Add With Item8</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="joOperations.addWithItem9">
<div class="cell" data-label="Property">joOperations.addWithItem9</div>
<div class="cell" data-label="Column">addWithItem9</div>
<div class="cell" data-label="Arabic">إضافة إلي الصنف 9</div>
<div class="cell" data-label="English">Add With Item9</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="joOperations.id">
<div class="cell" data-label="Property">joOperations.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="joOperations.item">
<div class="cell" data-label="Property">joOperations.item</div>
<div class="cell" data-label="Column">item_id</div>
<div class="cell" data-label="Arabic">الصنف</div>
<div class="cell" data-label="English">Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/modules/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="joOperations.itemCost">
<div class="cell" data-label="Property">joOperations.itemCost</div>
<div class="cell" data-label="Column">itemCost</div>
<div class="cell" data-label="Arabic">تكلفة الصنف</div>
<div class="cell" data-label="English">Item Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="joOperations.lineNumber">
<div class="cell" data-label="Property">joOperations.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="joOperations.operation.calculationFormula">
<div class="cell" data-label="Property">joOperations.operation.calculationFormula</div>
<div class="cell" data-label="Column">calculationFormula_id</div>
<div class="cell" data-label="Arabic">تشغيلة | الصيغه الحسابيه</div>
<div class="cell" data-label="English">Operation | Calculation Formula</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CalculationFormula](/modules/supplychain/CalculationFormula.md) 
</div>
</div>

<div class="row searchable" id="joOperations.operation.executed">
<div class="cell" data-label="Property">joOperations.operation.executed</div>
<div class="cell" data-label="Column">executed</div>
<div class="cell" data-label="Arabic">تشغيلة | تم التنفيذ</div>
<div class="cell" data-label="English">Operation | Executed</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="joOperations.operation.freeJOOperation">
<div class="cell" data-label="Property">joOperations.operation.freeJOOperation</div>
<div class="cell" data-label="Column">freeJOOperation</div>
<div class="cell" data-label="Arabic">تشغيلة | تشغيلة مجانية</div>
<div class="cell" data-label="English">Operation | Free JOOperation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="joOperations.operation.minSalesQty">
<div class="cell" data-label="Property">joOperations.operation.minSalesQty</div>
<div class="cell" data-label="Column">minSalesQty</div>
<div class="cell" data-label="Arabic">أقل كمية بيع</div>
<div class="cell" data-label="English">Min Sales Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="joOperations.operation.operation">
<div class="cell" data-label="Property">joOperations.operation.operation</div>
<div class="cell" data-label="Column">operation_id</div>
<div class="cell" data-label="Arabic">تشغيلة</div>
<div class="cell" data-label="English">operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [JOOperation](/modules/joborder/JOOperation.md) 
</div>
</div>

<div class="row searchable" id="joOperations.operation.operationQty">
<div class="cell" data-label="Property">joOperations.operation.operationQty</div>
<div class="cell" data-label="Column">operationQty</div>
<div class="cell" data-label="Arabic">تشغيلة  | كمية التشغيله</div>
<div class="cell" data-label="English">Operation | Operation Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="joOperations.operation.salesPrice">
<div class="cell" data-label="Property">joOperations.operation.salesPrice</div>
<div class="cell" data-label="Column">salesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة  | سعر البيع</div>
<div class="cell" data-label="English">Operation | Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="joOperations.operation.thickText">
<div class="cell" data-label="Property">joOperations.operation.thickText</div>
<div class="cell" data-label="Column">thickText</div>
<div class="cell" data-label="Arabic">تشغيلة | وصف العملية</div>
<div class="cell" data-label="English">Operation | Operation Description</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="joOperations.operation.totalCost">
<div class="cell" data-label="Property">joOperations.operation.totalCost</div>
<div class="cell" data-label="Column">totalCost</div>
<div class="cell" data-label="Arabic">تشغيلة | إجمالي تكلفة التشغيلة</div>
<div class="cell" data-label="English">Operation | Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="joOperations.operation.totalSalesPrice">
<div class="cell" data-label="Property">joOperations.operation.totalSalesPrice</div>
<div class="cell" data-label="Column">totalSalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة | إجمالي بيع التشغيلة</div>
<div class="cell" data-label="English">Operation | Total Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="joOperations.operation.underProcedure">
<div class="cell" data-label="Property">joOperations.operation.underProcedure</div>
<div class="cell" data-label="Column">underProcedure</div>
<div class="cell" data-label="Arabic">تشغيلة | تحت الإجراء</div>
<div class="cell" data-label="English">Operation | Under Procedure</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="joOperations.operation.unitCost">
<div class="cell" data-label="Property">joOperations.operation.unitCost</div>
<div class="cell" data-label="Column">unitCost</div>
<div class="cell" data-label="Arabic">تشغيلة | تكلفة الوحده</div>
<div class="cell" data-label="English">Operation | Unit Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="joOperations.operation.uom">
<div class="cell" data-label="Property">joOperations.operation.uom</div>
<div class="cell" data-label="Column">uom_id</div>
<div class="cell" data-label="Arabic">تشغيلة  | الوحدة</div>
<div class="cell" data-label="English">Operation | Uom</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="joOperations.productCost">
<div class="cell" data-label="Property">joOperations.productCost</div>
<div class="cell" data-label="Column">productCost</div>
<div class="cell" data-label="Arabic">تكاليف المنتج</div>
<div class="cell" data-label="English">Product Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="joOperations.productQty">
<div class="cell" data-label="Property">joOperations.productQty</div>
<div class="cell" data-label="Column">productQty</div>
<div class="cell" data-label="Arabic">كمية المنتج</div>
<div class="cell" data-label="English">Product Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="joOperations.quantity.baseQty.uom">
<div class="cell" data-label="Property">joOperations.quantity.baseQty.uom</div>
<div class="cell" data-label="Column">quantityBaseUom_id</div>
<div class="cell" data-label="Arabic">الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="joOperations.quantity.baseQty.value">
<div class="cell" data-label="Property">joOperations.quantity.baseQty.value</div>
<div class="cell" data-label="Column">quantityBaseValue</div>
<div class="cell" data-label="Arabic">الكمية</div>
<div class="cell" data-label="English">Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="joOperations.quantity.itemAssortment">
<div class="cell" data-label="Property">joOperations.quantity.itemAssortment</div>
<div class="cell" data-label="Column">quantityItemAssortment_id</div>
<div class="cell" data-label="Arabic">التشكيلة</div>
<div class="cell" data-label="English">The Assortment</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemAssortment](/modules/supplychain/ItemAssortment.md) 
</div>
</div>

<div class="row searchable" id="joOperations.quantity.measureQty">
<div class="cell" data-label="Property">joOperations.quantity.measureQty</div>
<div class="cell" data-label="Column">quantityMeasureQty</div>
<div class="cell" data-label="Arabic">الأبعاد | عدد</div>
<div class="cell" data-label="English">Measures | Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="joOperations.quantity.measures.clippedLength1">
<div class="cell" data-label="Property">joOperations.quantity.measures.clippedLength1</div>
<div class="cell" data-label="Column">quantityClippedLength1</div>
<div class="cell" data-label="Arabic">أبعادالجزء المقصوص 1 | الطول</div>
<div class="cell" data-label="English">Clipped Part1 Measures | Length</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="joOperations.quantity.measures.height">
<div class="cell" data-label="Property">joOperations.quantity.measures.height</div>
<div class="cell" data-label="Column">quantityHeight</div>
<div class="cell" data-label="Arabic">الأبعاد | ر</div>
<div class="cell" data-label="English">Measures | H</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="joOperations.quantity.measures.length">
<div class="cell" data-label="Property">joOperations.quantity.measures.length</div>
<div class="cell" data-label="Column">quantityLength</div>
<div class="cell" data-label="Arabic">الأبعاد | ط</div>
<div class="cell" data-label="English">Measures | L</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="joOperations.quantity.measures.text">
<div class="cell" data-label="Property">joOperations.quantity.measures.text</div>
<div class="cell" data-label="Column">quantityText</div>
<div class="cell" data-label="Arabic">الأبعاد | الأبعاد</div>
<div class="cell" data-label="English">Measures | L * W * H</div>
<div class="cell" data-label="Type">Measures</div>

</div>

<div class="row searchable" id="joOperations.quantity.measures.width">
<div class="cell" data-label="Property">joOperations.quantity.measures.width</div>
<div class="cell" data-label="Column">quantityWidth</div>
<div class="cell" data-label="Arabic">الأبعاد | ع</div>
<div class="cell" data-label="English">Measures | W</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="joOperations.quantity.quantity.primeQty.uom">
<div class="cell" data-label="Property">joOperations.quantity.quantity.primeQty.uom</div>
<div class="cell" data-label="Column">quantityPUom_id</div>
<div class="cell" data-label="Arabic">الوحدة الرئيسية | الوحدة</div>
<div class="cell" data-label="English">Primary | UOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="joOperations.quantity.quantity.primeQty.value">
<div class="cell" data-label="Property">joOperations.quantity.quantity.primeQty.value</div>
<div class="cell" data-label="Column">quantityPValue</div>
<div class="cell" data-label="Arabic">الوحدة الرئيسية | الكمية</div>
<div class="cell" data-label="English">Primary | Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="joOperations.quantity.quantity.secondQty.uom">
<div class="cell" data-label="Property">joOperations.quantity.quantity.secondQty.uom</div>
<div class="cell" data-label="Column">quantitySUom_id</div>
<div class="cell" data-label="Arabic">الوحدة الثانية | الوحدة</div>
<div class="cell" data-label="English">Secondary | UOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="joOperations.quantity.quantity.secondQty.value">
<div class="cell" data-label="Property">joOperations.quantity.quantity.secondQty.value</div>
<div class="cell" data-label="Column">quantitySValue</div>
<div class="cell" data-label="Arabic">الوحدة الثانية | الكمية</div>
<div class="cell" data-label="English">Secondary | Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="joOperations.quantity.uomRate">
<div class="cell" data-label="Property">joOperations.quantity.uomRate</div>
<div class="cell" data-label="Column">quantityUomRate</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="joOperations.requiredSlabsQty">
<div class="cell" data-label="Property">joOperations.requiredSlabsQty</div>
<div class="cell" data-label="Column">requiredSlabsQty</div>
<div class="cell" data-label="Arabic">كمية الألواح المطلوبة</div>
<div class="cell" data-label="English">Required Slabs Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>


</div>
</div>

<div id='paymentLines' title='paymentLines' class='searchable'>

## paymentLines (الســداد - Payment Lines)
**Table Name:** JOSalesOrderPaymentLine, **Join Column:** jOSalesOrder_id
<div class="nama-table">
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

 [DiscountCoupon](/modules/supplychain-sales/DiscountCoupon.md) 
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

 [PaymentMethod](/modules/basic/PaymentMethod.md) 
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
</div>

<div id='productCosts' title='productCosts' class='searchable'>

## productCosts (تكاليف المنتج - Product Costs)
**Table Name:** JOSalesOrderProductCostLine, **Join Column:** jOSalesOrder_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="productCosts.addWithItem1">
<div class="cell" data-label="Property">productCosts.addWithItem1</div>
<div class="cell" data-label="Column">addWithItem1</div>
<div class="cell" data-label="Arabic">إضافة إلي الصنف 1</div>
<div class="cell" data-label="English">Add With Item1</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="productCosts.addWithItem10">
<div class="cell" data-label="Property">productCosts.addWithItem10</div>
<div class="cell" data-label="Column">addWithItem10</div>
<div class="cell" data-label="Arabic">إضافة إلي الصنف 10</div>
<div class="cell" data-label="English">Add With Item10</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="productCosts.addWithItem2">
<div class="cell" data-label="Property">productCosts.addWithItem2</div>
<div class="cell" data-label="Column">addWithItem2</div>
<div class="cell" data-label="Arabic">إضافة إلي الصنف 2</div>
<div class="cell" data-label="English">Add With Item2</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="productCosts.addWithItem3">
<div class="cell" data-label="Property">productCosts.addWithItem3</div>
<div class="cell" data-label="Column">addWithItem3</div>
<div class="cell" data-label="Arabic">إضافة إلي الصنف 3</div>
<div class="cell" data-label="English">Add With Item3</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="productCosts.addWithItem4">
<div class="cell" data-label="Property">productCosts.addWithItem4</div>
<div class="cell" data-label="Column">addWithItem4</div>
<div class="cell" data-label="Arabic">إضافة إلي الصنف 4</div>
<div class="cell" data-label="English">Add With Item4</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="productCosts.addWithItem5">
<div class="cell" data-label="Property">productCosts.addWithItem5</div>
<div class="cell" data-label="Column">addWithItem5</div>
<div class="cell" data-label="Arabic">إضافة إلي الصنف 5</div>
<div class="cell" data-label="English">Add With Item5</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="productCosts.addWithItem6">
<div class="cell" data-label="Property">productCosts.addWithItem6</div>
<div class="cell" data-label="Column">addWithItem6</div>
<div class="cell" data-label="Arabic">إضافة إلي الصنف 6</div>
<div class="cell" data-label="English">Add With Item6</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="productCosts.addWithItem7">
<div class="cell" data-label="Property">productCosts.addWithItem7</div>
<div class="cell" data-label="Column">addWithItem7</div>
<div class="cell" data-label="Arabic">إضافة إلي الصنف 7</div>
<div class="cell" data-label="English">Add With Item7</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="productCosts.addWithItem8">
<div class="cell" data-label="Property">productCosts.addWithItem8</div>
<div class="cell" data-label="Column">addWithItem8</div>
<div class="cell" data-label="Arabic">إضافة إلي الصنف 8</div>
<div class="cell" data-label="English">Add With Item8</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="productCosts.addWithItem9">
<div class="cell" data-label="Property">productCosts.addWithItem9</div>
<div class="cell" data-label="Column">addWithItem9</div>
<div class="cell" data-label="Arabic">إضافة إلي الصنف 9</div>
<div class="cell" data-label="English">Add With Item9</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="productCosts.id">
<div class="cell" data-label="Property">productCosts.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="productCosts.item">
<div class="cell" data-label="Property">productCosts.item</div>
<div class="cell" data-label="Column">item_id</div>
<div class="cell" data-label="Arabic">الصنف</div>
<div class="cell" data-label="English">Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/modules/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="productCosts.itemCost">
<div class="cell" data-label="Property">productCosts.itemCost</div>
<div class="cell" data-label="Column">itemCost</div>
<div class="cell" data-label="Arabic">تكلفة الصنف</div>
<div class="cell" data-label="English">Item Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="productCosts.lineNumber">
<div class="cell" data-label="Property">productCosts.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="productCosts.operation.calculationFormula">
<div class="cell" data-label="Property">productCosts.operation.calculationFormula</div>
<div class="cell" data-label="Column">calculationFormula_id</div>
<div class="cell" data-label="Arabic">تشغيلة | الصيغه الحسابيه</div>
<div class="cell" data-label="English">Operation | Calculation Formula</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CalculationFormula](/modules/supplychain/CalculationFormula.md) 
</div>
</div>

<div class="row searchable" id="productCosts.operation.executed">
<div class="cell" data-label="Property">productCosts.operation.executed</div>
<div class="cell" data-label="Column">executed</div>
<div class="cell" data-label="Arabic">تشغيلة | تم التنفيذ</div>
<div class="cell" data-label="English">Operation | Executed</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="productCosts.operation.freeJOOperation">
<div class="cell" data-label="Property">productCosts.operation.freeJOOperation</div>
<div class="cell" data-label="Column">freeJOOperation</div>
<div class="cell" data-label="Arabic">تشغيلة | تشغيلة مجانية</div>
<div class="cell" data-label="English">Operation | Free JOOperation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="productCosts.operation.minSalesQty">
<div class="cell" data-label="Property">productCosts.operation.minSalesQty</div>
<div class="cell" data-label="Column">minSalesQty</div>
<div class="cell" data-label="Arabic">أقل كمية بيع</div>
<div class="cell" data-label="English">Min Sales Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="productCosts.operation.operation">
<div class="cell" data-label="Property">productCosts.operation.operation</div>
<div class="cell" data-label="Column">operation_id</div>
<div class="cell" data-label="Arabic">تشغيلة</div>
<div class="cell" data-label="English">operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [JOOperation](/modules/joborder/JOOperation.md) 
</div>
</div>

<div class="row searchable" id="productCosts.operation.operationQty">
<div class="cell" data-label="Property">productCosts.operation.operationQty</div>
<div class="cell" data-label="Column">operationQty</div>
<div class="cell" data-label="Arabic">تشغيلة  | كمية التشغيله</div>
<div class="cell" data-label="English">Operation | Operation Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="productCosts.operation.salesPrice">
<div class="cell" data-label="Property">productCosts.operation.salesPrice</div>
<div class="cell" data-label="Column">salesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة  | سعر البيع</div>
<div class="cell" data-label="English">Operation | Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="productCosts.operation.thickText">
<div class="cell" data-label="Property">productCosts.operation.thickText</div>
<div class="cell" data-label="Column">thickText</div>
<div class="cell" data-label="Arabic">تشغيلة | وصف العملية</div>
<div class="cell" data-label="English">Operation | Operation Description</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="productCosts.operation.totalCost">
<div class="cell" data-label="Property">productCosts.operation.totalCost</div>
<div class="cell" data-label="Column">totalCost</div>
<div class="cell" data-label="Arabic">تشغيلة | إجمالي تكلفة التشغيلة</div>
<div class="cell" data-label="English">Operation | Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="productCosts.operation.totalSalesPrice">
<div class="cell" data-label="Property">productCosts.operation.totalSalesPrice</div>
<div class="cell" data-label="Column">totalSalesPrice</div>
<div class="cell" data-label="Arabic">تشغيلة | إجمالي بيع التشغيلة</div>
<div class="cell" data-label="English">Operation | Total Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="productCosts.operation.underProcedure">
<div class="cell" data-label="Property">productCosts.operation.underProcedure</div>
<div class="cell" data-label="Column">underProcedure</div>
<div class="cell" data-label="Arabic">تشغيلة | تحت الإجراء</div>
<div class="cell" data-label="English">Operation | Under Procedure</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="productCosts.operation.unitCost">
<div class="cell" data-label="Property">productCosts.operation.unitCost</div>
<div class="cell" data-label="Column">unitCost</div>
<div class="cell" data-label="Arabic">تشغيلة | تكلفة الوحده</div>
<div class="cell" data-label="English">Operation | Unit Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="productCosts.operation.uom">
<div class="cell" data-label="Property">productCosts.operation.uom</div>
<div class="cell" data-label="Column">uom_id</div>
<div class="cell" data-label="Arabic">تشغيلة  | الوحدة</div>
<div class="cell" data-label="English">Operation | Uom</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="productCosts.productCost">
<div class="cell" data-label="Property">productCosts.productCost</div>
<div class="cell" data-label="Column">productCost</div>
<div class="cell" data-label="Arabic">تكاليف المنتج</div>
<div class="cell" data-label="English">Product Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="productCosts.productQty">
<div class="cell" data-label="Property">productCosts.productQty</div>
<div class="cell" data-label="Column">productQty</div>
<div class="cell" data-label="Arabic">كمية المنتج</div>
<div class="cell" data-label="English">Product Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="productCosts.quantity.baseQty.uom">
<div class="cell" data-label="Property">productCosts.quantity.baseQty.uom</div>
<div class="cell" data-label="Column">quantityBaseUom_id</div>
<div class="cell" data-label="Arabic">الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="productCosts.quantity.baseQty.value">
<div class="cell" data-label="Property">productCosts.quantity.baseQty.value</div>
<div class="cell" data-label="Column">quantityBaseValue</div>
<div class="cell" data-label="Arabic">الكمية</div>
<div class="cell" data-label="English">Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="productCosts.quantity.itemAssortment">
<div class="cell" data-label="Property">productCosts.quantity.itemAssortment</div>
<div class="cell" data-label="Column">quantityItemAssortment_id</div>
<div class="cell" data-label="Arabic">التشكيلة</div>
<div class="cell" data-label="English">The Assortment</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemAssortment](/modules/supplychain/ItemAssortment.md) 
</div>
</div>

<div class="row searchable" id="productCosts.quantity.measureQty">
<div class="cell" data-label="Property">productCosts.quantity.measureQty</div>
<div class="cell" data-label="Column">quantityMeasureQty</div>
<div class="cell" data-label="Arabic">الأبعاد | عدد</div>
<div class="cell" data-label="English">Measures | Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="productCosts.quantity.measures.clippedLength1">
<div class="cell" data-label="Property">productCosts.quantity.measures.clippedLength1</div>
<div class="cell" data-label="Column">quantityClippedLength1</div>
<div class="cell" data-label="Arabic">أبعادالجزء المقصوص 1 | الطول</div>
<div class="cell" data-label="English">Clipped Part1 Measures | Length</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="productCosts.quantity.measures.height">
<div class="cell" data-label="Property">productCosts.quantity.measures.height</div>
<div class="cell" data-label="Column">quantityHeight</div>
<div class="cell" data-label="Arabic">الأبعاد | ر</div>
<div class="cell" data-label="English">Measures | H</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="productCosts.quantity.measures.length">
<div class="cell" data-label="Property">productCosts.quantity.measures.length</div>
<div class="cell" data-label="Column">quantityLength</div>
<div class="cell" data-label="Arabic">الأبعاد | ط</div>
<div class="cell" data-label="English">Measures | L</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="productCosts.quantity.measures.text">
<div class="cell" data-label="Property">productCosts.quantity.measures.text</div>
<div class="cell" data-label="Column">quantityText</div>
<div class="cell" data-label="Arabic">الأبعاد | الأبعاد</div>
<div class="cell" data-label="English">Measures | L * W * H</div>
<div class="cell" data-label="Type">Measures</div>

</div>

<div class="row searchable" id="productCosts.quantity.measures.width">
<div class="cell" data-label="Property">productCosts.quantity.measures.width</div>
<div class="cell" data-label="Column">quantityWidth</div>
<div class="cell" data-label="Arabic">الأبعاد | ع</div>
<div class="cell" data-label="English">Measures | W</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="productCosts.quantity.quantity.primeQty.uom">
<div class="cell" data-label="Property">productCosts.quantity.quantity.primeQty.uom</div>
<div class="cell" data-label="Column">quantityPUom_id</div>
<div class="cell" data-label="Arabic">الوحدة الرئيسية | الوحدة</div>
<div class="cell" data-label="English">Primary | UOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="productCosts.quantity.quantity.primeQty.value">
<div class="cell" data-label="Property">productCosts.quantity.quantity.primeQty.value</div>
<div class="cell" data-label="Column">quantityPValue</div>
<div class="cell" data-label="Arabic">الوحدة الرئيسية | الكمية</div>
<div class="cell" data-label="English">Primary | Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="productCosts.quantity.quantity.secondQty.uom">
<div class="cell" data-label="Property">productCosts.quantity.quantity.secondQty.uom</div>
<div class="cell" data-label="Column">quantitySUom_id</div>
<div class="cell" data-label="Arabic">الوحدة الثانية | الوحدة</div>
<div class="cell" data-label="English">Secondary | UOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="productCosts.quantity.quantity.secondQty.value">
<div class="cell" data-label="Property">productCosts.quantity.quantity.secondQty.value</div>
<div class="cell" data-label="Column">quantitySValue</div>
<div class="cell" data-label="Arabic">الوحدة الثانية | الكمية</div>
<div class="cell" data-label="English">Secondary | Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="productCosts.quantity.uomRate">
<div class="cell" data-label="Property">productCosts.quantity.uomRate</div>
<div class="cell" data-label="Column">quantityUomRate</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="productCosts.requiredSlabsQty">
<div class="cell" data-label="Property">productCosts.requiredSlabsQty</div>
<div class="cell" data-label="Column">requiredSlabsQty</div>
<div class="cell" data-label="Arabic">كمية الألواح المطلوبة</div>
<div class="cell" data-label="English">Required Slabs Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>


</div>
</div>

