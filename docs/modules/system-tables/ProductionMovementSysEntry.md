# ProductionMovementSysEntry

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

<div class="row searchable" id="id">
<div class="cell" data-label="Property">id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="lineNumber">
<div class="cell" data-label="Property">lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="operationSeq">
<div class="cell" data-label="Property">operationSeq</div>
<div class="cell" data-label="Column">operationSeq</div>
<div class="cell" data-label="Arabic">م. العملية</div>
<div class="cell" data-label="English">Operation Seq.</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="order">
<div class="cell" data-label="Property">order</div>
<div class="cell" data-label="Column">order_id</div>
<div class="cell" data-label="Arabic">أمر الشغل</div>
<div class="cell" data-label="English">Job Order</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ProductionOrder](/modules/manufacturing/ProductionOrder.md) 
</div>
</div>

<div class="row searchable" id="owner">
<div class="cell" data-label="Property">owner</div>
<div class="cell gen-ref-column" data-label="Column">ownerActualCode,  ownerCode,  ownerEntityType,  ownerId</div>
<div class="cell" data-label="Arabic"> مالك المستند</div>
<div class="cell" data-label="English"> Document Owner</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="quantity.uom">
<div class="cell" data-label="Property">quantity.uom</div>
<div class="cell" data-label="Column">quantityUom_id</div>
<div class="cell" data-label="Arabic">الكمية | الوحدة</div>
<div class="cell" data-label="English">Quantity | Uom</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="quantity.value">
<div class="cell" data-label="Property">quantity.value</div>
<div class="cell" data-label="Column">quantityValue</div>
<div class="cell" data-label="Arabic">الكمية  | القيمة</div>
<div class="cell" data-label="English">Quantity | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rateOperationSequence">
<div class="cell" data-label="Property">rateOperationSequence</div>
<div class="cell" data-label="Column">rateOperationSequence</div>
<div class="cell" data-label="Arabic">Rate Operation Sequence</div>
<div class="cell" data-label="English">Rate Operation Sequence</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="rejected">
<div class="cell" data-label="Property">rejected</div>
<div class="cell" data-label="Column">rejected</div>
<div class="cell" data-label="Arabic">مرفوض</div>
<div class="cell" data-label="English">Rejected</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="sample">
<div class="cell" data-label="Property">sample</div>
<div class="cell" data-label="Column">sample</div>
<div class="cell" data-label="Arabic"> سحب عينة</div>
<div class="cell" data-label="English"> Sample</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="scrap">
<div class="cell" data-label="Property">scrap</div>
<div class="cell" data-label="Column">scrap</div>
<div class="cell" data-label="Arabic">تالف</div>
<div class="cell" data-label="English">Scrap</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="step">
<div class="cell" data-label="Property">step</div>
<div class="cell" data-label="Column">step</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="toMove">
<div class="cell" data-label="Property">toMove</div>
<div class="cell" data-label="Column">toMove</div>
<div class="cell" data-label="Arabic">جاهز للحركة</div>
<div class="cell" data-label="English">To Move</div>
<div class="cell" data-label="Type">Decimal</div>

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

