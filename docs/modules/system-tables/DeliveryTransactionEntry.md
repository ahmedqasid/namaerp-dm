
<div class='tableName'>


# DeliveryTransactionEntry
</div>


<ContentFilter/>

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
</div><div class="row searchable" id="creationDate">
<div class="cell" data-label="Property">creationDate</div>
<div class="cell" data-label="Column">creationDate</div>
<div class="cell" data-label="Arabic">تاريخ الإنشاء</div>
<div class="cell" data-label="English">Creation Date</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="deliveryQty.cancelledQty">
<div class="cell" data-label="Property">deliveryQty.cancelledQty</div>
<div class="cell" data-label="Column">deliveryCancelledQty</div>
<div class="cell" data-label="Arabic">كمية التوصيل | الكمية الملغاة</div>
<div class="cell" data-label="English">Delivery Quantity | Cancelled</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="deliveryQty.finishedQty">
<div class="cell" data-label="Property">deliveryQty.finishedQty</div>
<div class="cell" data-label="Column">deliveryFinishedQty</div>
<div class="cell" data-label="Arabic">كمية التوصيل | الكمية المنتهي منها</div>
<div class="cell" data-label="English">Delivery Quantity | Finished</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="deliveryQty.requestedQty">
<div class="cell" data-label="Property">deliveryQty.requestedQty</div>
<div class="cell" data-label="Column">deliveryRequestedQty</div>
<div class="cell" data-label="Arabic">كمية التوصيل | الكمية المطلوبة</div>
<div class="cell" data-label="English">Delivery Quantity | Requested</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="id">
<div class="cell" data-label="Property">id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="itemDimensions.genericDimensions.analysisSet">
<div class="cell" data-label="Property">itemDimensions.genericDimensions.analysisSet</div>
<div class="cell" data-label="Column">genDimAnalysisSet_id</div>
<div class="cell" data-label="Arabic">المجموعة التحليلية</div>
<div class="cell" data-label="English">Analysis set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/modules/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="itemDimensions.genericDimensions.branch">
<div class="cell" data-label="Property">itemDimensions.genericDimensions.branch</div>
<div class="cell" data-label="Column">genDimBranch_id</div>
<div class="cell" data-label="Arabic">الفرع</div>
<div class="cell" data-label="English">Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/modules/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="itemDimensions.genericDimensions.department">
<div class="cell" data-label="Property">itemDimensions.genericDimensions.department</div>
<div class="cell" data-label="Column">genDimDepartment_id</div>
<div class="cell" data-label="Arabic">الإدارة</div>
<div class="cell" data-label="English">Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/modules/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="itemDimensions.genericDimensions.legalEntity">
<div class="cell" data-label="Property">itemDimensions.genericDimensions.legalEntity</div>
<div class="cell" data-label="Column">genDimLegalEntity_id</div>
<div class="cell" data-label="Arabic">الشركة</div>
<div class="cell" data-label="English">Legal Entity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [LegalEntity](/modules/basic/LegalEntity.md) 
</div>
</div>

<div class="row searchable" id="itemDimensions.genericDimensions.sector">
<div class="cell" data-label="Property">itemDimensions.genericDimensions.sector</div>
<div class="cell" data-label="Column">genDimSector_id</div>
<div class="cell" data-label="Arabic">القطاع</div>
<div class="cell" data-label="English">Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/modules/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="itemDimensions.item">
<div class="cell" data-label="Property">itemDimensions.item</div>
<div class="cell" data-label="Column">item_id</div>
<div class="cell" data-label="Arabic">الصنف</div>
<div class="cell" data-label="English">Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/modules/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="itemDimensions.specificDimensions.activePerc">
<div class="cell" data-label="Property">itemDimensions.specificDimensions.activePerc</div>
<div class="cell" data-label="Column">activePerc</div>
<div class="cell" data-label="Arabic">النسبة الفعالة</div>
<div class="cell" data-label="English">Active Percentage</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="itemDimensions.specificDimensions.box">
<div class="cell" data-label="Property">itemDimensions.specificDimensions.box</div>
<div class="cell" data-label="Column">box</div>
<div class="cell" data-label="Arabic">صندوق</div>
<div class="cell" data-label="English">Box</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="itemDimensions.specificDimensions.color">
<div class="cell" data-label="Property">itemDimensions.specificDimensions.color</div>
<div class="cell" data-label="Column">color</div>
<div class="cell" data-label="Arabic">اللون</div>
<div class="cell" data-label="English">Color</div>
<div class="cell" data-label="Type">Color</div>

</div>

<div class="row searchable" id="itemDimensions.specificDimensions.inactivePerc">
<div class="cell" data-label="Property">itemDimensions.specificDimensions.inactivePerc</div>
<div class="cell" data-label="Column">inactivePerc</div>
<div class="cell" data-label="Arabic">النسبة الغير فعالة</div>
<div class="cell" data-label="English">Inactive Percentage</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="itemDimensions.specificDimensions.locator">
<div class="cell" data-label="Property">itemDimensions.specificDimensions.locator</div>
<div class="cell" data-label="Column">locator_id</div>
<div class="cell" data-label="Arabic">الموقع</div>
<div class="cell" data-label="English">Locator</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Locator](/modules/supplychain/Locator.md) 
</div>
</div>

<div class="row searchable" id="itemDimensions.specificDimensions.lotId">
<div class="cell" data-label="Property">itemDimensions.specificDimensions.lotId</div>
<div class="cell" data-label="Column">lotId</div>
<div class="cell" data-label="Arabic">رقم الشحنه</div>
<div class="cell" data-label="English">Lot ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="itemDimensions.specificDimensions.measures">
<div class="cell" data-label="Property">itemDimensions.specificDimensions.measures</div>
<div class="cell" data-label="Column">measures</div>
<div class="cell" data-label="Arabic">الأبعاد</div>
<div class="cell" data-label="English">Measures</div>
<div class="cell" data-label="Type">Measures</div>

</div>

<div class="row searchable" id="itemDimensions.specificDimensions.revisionId">
<div class="cell" data-label="Property">itemDimensions.specificDimensions.revisionId</div>
<div class="cell" data-label="Column">revisionId</div>
<div class="cell" data-label="Arabic">الإصدار</div>
<div class="cell" data-label="English">Revision ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="itemDimensions.specificDimensions.secondSerial">
<div class="cell" data-label="Property">itemDimensions.specificDimensions.secondSerial</div>
<div class="cell" data-label="Column">secondSerial</div>
<div class="cell" data-label="Arabic">الرقم المسلسل الثاني</div>
<div class="cell" data-label="English">Second Serial</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="itemDimensions.specificDimensions.serialNumber">
<div class="cell" data-label="Property">itemDimensions.specificDimensions.serialNumber</div>
<div class="cell" data-label="Column">serialNumber</div>
<div class="cell" data-label="Arabic">الرقم المسلسل</div>
<div class="cell" data-label="English">Serial number</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="itemDimensions.specificDimensions.size">
<div class="cell" data-label="Property">itemDimensions.specificDimensions.size</div>
<div class="cell" data-label="Column">size</div>
<div class="cell" data-label="Arabic">المقاس</div>
<div class="cell" data-label="English">Size</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="itemDimensions.specificDimensions.subItem">
<div class="cell" data-label="Property">itemDimensions.specificDimensions.subItem</div>
<div class="cell" data-label="Column">subItem_id</div>
<div class="cell" data-label="Arabic"> صنف فرعى</div>
<div class="cell" data-label="English"> SubItem</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SubItem](/modules/srvcenter-subitems/SubItem.md) 
</div>
</div>

<div class="row searchable" id="itemDimensions.specificDimensions.warehouse">
<div class="cell" data-label="Property">itemDimensions.specificDimensions.warehouse</div>
<div class="cell" data-label="Column">warehouse_id</div>
<div class="cell" data-label="Arabic">المخزن</div>
<div class="cell" data-label="English">Warehouse</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="lineNumber">
<div class="cell" data-label="Property">lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="loadingQty.cancelledQty">
<div class="cell" data-label="Property">loadingQty.cancelledQty</div>
<div class="cell" data-label="Column">loadingCancelledQty</div>
<div class="cell" data-label="Arabic">كمية التحميل | الكمية الملغاة</div>
<div class="cell" data-label="English">Loading Quantity | Cancelled</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="loadingQty.finishedQty">
<div class="cell" data-label="Property">loadingQty.finishedQty</div>
<div class="cell" data-label="Column">loadingFinishedQty</div>
<div class="cell" data-label="Arabic">كمية التحميل | الكمية المنتهي منها</div>
<div class="cell" data-label="English">Loading Quantity | Finished</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="loadingQty.requestedQty">
<div class="cell" data-label="Property">loadingQty.requestedQty</div>
<div class="cell" data-label="Column">loadingRequestedQty</div>
<div class="cell" data-label="Arabic">كمية التحميل | الكمية المطلوبة</div>
<div class="cell" data-label="English">Loading Quantity | Requested</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="originDoc">
<div class="cell" data-label="Property">originDoc</div>
<div class="cell gen-ref-column" data-label="Column">originDocActualCode,  originDocCode,  originDocEntityType,  originDocId</div>
<div class="cell" data-label="Arabic"> # المستند</div>
<div class="cell" data-label="English"> Document #</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="other1Qty.cancelledQty">
<div class="cell" data-label="Property">other1Qty.cancelledQty</div>
<div class="cell" data-label="Column">other1CancelledQty</div>
<div class="cell" data-label="Arabic">كمية أخرى 1 | الكمية الملغاة</div>
<div class="cell" data-label="English">Other 1 Quantity | Cancelled</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="other1Qty.finishedQty">
<div class="cell" data-label="Property">other1Qty.finishedQty</div>
<div class="cell" data-label="Column">other1FinishedQty</div>
<div class="cell" data-label="Arabic">كمية أخرى 1 | الكمية المنتهي منها</div>
<div class="cell" data-label="English">Other 1 Quantity | Finished</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="other1Qty.requestedQty">
<div class="cell" data-label="Property">other1Qty.requestedQty</div>
<div class="cell" data-label="Column">other1RequestedQty</div>
<div class="cell" data-label="Arabic">كمية أخرى 1 | الكمية المطلوبة</div>
<div class="cell" data-label="English">Other 1 Quantity | Requested</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="other2Qty.cancelledQty">
<div class="cell" data-label="Property">other2Qty.cancelledQty</div>
<div class="cell" data-label="Column">other2CancelledQty</div>
<div class="cell" data-label="Arabic">كمية أخرى 2 | الكمية الملغاة</div>
<div class="cell" data-label="English">Other 2 Quantity | Cancelled</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="other2Qty.finishedQty">
<div class="cell" data-label="Property">other2Qty.finishedQty</div>
<div class="cell" data-label="Column">other2FinishedQty</div>
<div class="cell" data-label="Arabic">كمية أخرى 2 | الكمية المنتهي منها</div>
<div class="cell" data-label="English">Other 2 Quantity | Finished</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="other2Qty.requestedQty">
<div class="cell" data-label="Property">other2Qty.requestedQty</div>
<div class="cell" data-label="Column">other2RequestedQty</div>
<div class="cell" data-label="Arabic">كمية أخرى 2 | الكمية المطلوبة</div>
<div class="cell" data-label="English">Other 2 Quantity | Requested</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="reservationQty.cancelledQty">
<div class="cell" data-label="Property">reservationQty.cancelledQty</div>
<div class="cell" data-label="Column">reservationCancelledQty</div>
<div class="cell" data-label="Arabic">كمية الحجز | الكمية الملغاة</div>
<div class="cell" data-label="English">Reservation Quantity | Cancelled</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="reservationQty.finishedQty">
<div class="cell" data-label="Property">reservationQty.finishedQty</div>
<div class="cell" data-label="Column">reservationFinishedQty</div>
<div class="cell" data-label="Arabic">كمية الحجز | الكمية المنتهي منها</div>
<div class="cell" data-label="English">Reservation Quantity | Finished</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="reservationQty.requestedQty">
<div class="cell" data-label="Property">reservationQty.requestedQty</div>
<div class="cell" data-label="Column">reservationRequestedQty</div>
<div class="cell" data-label="Arabic">كمية الحجز | الكمية المطلوبة</div>
<div class="cell" data-label="English">Reservation Quantity | Requested</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rootDocument">
<div class="cell" data-label="Property">rootDocument</div>
<div class="cell gen-ref-column" data-label="Column">rootDocumentActualCode,  rootDocumentCode,  rootDocumentEntityType,  rootDocumentId</div>
<div class="cell" data-label="Arabic"> مستند توصيل رئيسي</div>
<div class="cell" data-label="English"> Root Delivery Document</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="searchIdx">
<div class="cell" data-label="Property">searchIdx</div>
<div class="cell" data-label="Column">searchIdx</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="sourceLineId">
<div class="cell" data-label="Property">sourceLineId</div>
<div class="cell" data-label="Column">sourceLineId</div>
<div class="cell" data-label="Arabic">معرف سطر المصدر</div>
<div class="cell" data-label="English">Source Line Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="valueDate">
<div class="cell" data-label="Property">valueDate</div>
<div class="cell" data-label="Column">valueDate</div>
<div class="cell" data-label="Arabic">التاريخ الفعلي</div>
<div class="cell" data-label="English">Value Date</div>
<div class="cell" data-label="Type">Date</div>

</div>


</div>
</div>

