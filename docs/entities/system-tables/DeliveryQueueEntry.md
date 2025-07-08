# DeliveryQueueEntry

<ContentFilter/>

<div class='searchable'>

## Fields

<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="actualDeliveryDate">
<div class="cell" data-label="Property">actualDeliveryDate</div>
<div class="cell" data-label="Column">actualDeliveryDate</div>
<div class="cell" data-label="Arabic">تاريخ الإستلام الفعلى</div>
<div class="cell" data-label="English">Actual Delivery Date</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="deliveryDate">
<div class="cell" data-label="Property">deliveryDate</div>
<div class="cell" data-label="Column">deliveryDate</div>
<div class="cell" data-label="Arabic">تاريخ التوصيل</div>
<div class="cell" data-label="English">Delivery Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="deliveryStatus">
<div class="cell" data-label="Property">deliveryStatus</div>
<div class="cell" data-label="Column">deliveryStatus</div>
<div class="cell" data-label="Arabic">نوع الإجراء</div>
<div class="cell" data-label="English">Delivery Status</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="details">
<div class="cell" data-label="Property">details</div>
<div class="cell" data-label="Column">details</div>
<div class="cell" data-label="Arabic">التفاصيل</div>
<div class="cell" data-label="English">Details</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="id">
<div class="cell" data-label="Property">id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="origin">
<div class="cell" data-label="Property">origin</div>
<div class="cell gen-ref-column" data-label="Column">originActualCode,  originCode,  originEntityType,  originId</div>
<div class="cell" data-label="Arabic"> # المستند</div>
<div class="cell" data-label="English"> Document #</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="postponed">
<div class="cell" data-label="Property">postponed</div>
<div class="cell" data-label="Column">postponed</div>
<div class="cell" data-label="Arabic">مؤجل</div>
<div class="cell" data-label="English">Postponed</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="queue">
<div class="cell" data-label="Property">queue</div>
<div class="cell" data-label="Column">queue_id</div>
<div class="cell" data-label="Arabic">الطابور</div>
<div class="cell" data-label="English">Queue</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DeliveryQueue](/entities/supplychain-delivery-queues/DeliveryQueue.md) 
</div>
</div>

<div class="row searchable" id="summary">
<div class="cell" data-label="Property">summary</div>
<div class="cell" data-label="Column">summary</div>
<div class="cell" data-label="Arabic">الملخص</div>
<div class="cell" data-label="English">Summary</div>
<div class="cell" data-label="Type">BigText</div>

</div>


</div>

