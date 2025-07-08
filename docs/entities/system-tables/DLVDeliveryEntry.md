# DLVDeliveryEntry

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
</div><div class="row searchable" id="actualDeliveryDateTime">
<div class="cell" data-label="Property">actualDeliveryDateTime</div>
<div class="cell" data-label="Column">actualDeliveryDateTime</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="address">
<div class="cell" data-label="Property">address</div>
<div class="cell" data-label="Column">address</div>
<div class="cell" data-label="Arabic">العنوان</div>
<div class="cell" data-label="English">Address</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="classCd">
<div class="cell" data-label="Property">classCd</div>
<div class="cell gen-ref-column" data-label="Column">classCdActualCode,  classCdCode,  classCdEntityType,  classCdId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="deliverTo">
<div class="cell" data-label="Property">deliverTo</div>
<div class="cell gen-ref-column" data-label="Column">deliverToActualCode,  deliverToCode,  deliverToEntityType,  deliverToId</div>
<div class="cell" data-label="Arabic"> العميل</div>
<div class="cell" data-label="English"> Customer</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="deliveredBy">
<div class="cell" data-label="Property">deliveredBy</div>
<div class="cell" data-label="Column">deliveredBy_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/entities/basic/Employee.md) 
</div>
</div>

<div class="row searchable" id="deliveredByCar">
<div class="cell" data-label="Property">deliveredByCar</div>
<div class="cell" data-label="Column">deliveredByCar_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DeliveryCar](/entities/basic/DeliveryCar.md) 
</div>
</div>

<div class="row searchable" id="deliveryArea">
<div class="cell" data-label="Property">deliveryArea</div>
<div class="cell" data-label="Column">deliveryArea_id</div>
<div class="cell" data-label="Arabic">منطقة توصيل</div>
<div class="cell" data-label="English">Delivery Area</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DLVDeliveryArea](/entities/basic-mobile-shipment-delivery/DLVDeliveryArea.md) 
</div>
</div>

<div class="row searchable" id="deliveryDocument">
<div class="cell" data-label="Property">deliveryDocument</div>
<div class="cell gen-ref-column" data-label="Column">deliveryDocumentActualCode,  deliveryDocumentCode,  deliveryDocumentEntityType,  deliveryDocumentId</div>
<div class="cell" data-label="Arabic">المستند الموصل</div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="id">
<div class="cell" data-label="Property">id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="location">
<div class="cell" data-label="Property">location</div>
<div class="cell" data-label="Column">location</div>
<div class="cell" data-label="Arabic">الموقع المخزني</div>
<div class="cell" data-label="English">Location</div>
<div class="cell" data-label="Type">LatLng</div>

</div>

<div class="row searchable" id="originalPlannedDeliveryDateTime">
<div class="cell" data-label="Property">originalPlannedDeliveryDateTime</div>
<div class="cell" data-label="Column">originalPlannedDeliveryDateTime</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="owner">
<div class="cell" data-label="Property">owner</div>
<div class="cell gen-ref-column" data-label="Column">ownerActualCode,  ownerCode,  ownerEntityType,  ownerId</div>
<div class="cell" data-label="Arabic"> مالك المستند</div>
<div class="cell" data-label="English"> Document Owner</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="phoneNumber">
<div class="cell" data-label="Property">phoneNumber</div>
<div class="cell" data-label="Column">phoneNumber</div>
<div class="cell" data-label="Arabic">رقم الهاتف</div>
<div class="cell" data-label="English">Phone Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="plannedDeliveryDateTime">
<div class="cell" data-label="Property">plannedDeliveryDateTime</div>
<div class="cell" data-label="Column">plannedDeliveryDateTime</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="shipment">
<div class="cell" data-label="Property">shipment</div>
<div class="cell" data-label="Column">shipment</div>
<div class="cell" data-label="Arabic"> شحنة</div>
<div class="cell" data-label="English"> Shipment</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="status">
<div class="cell" data-label="Property">status</div>
<div class="cell" data-label="Column">status</div>
<div class="cell" data-label="Arabic">الحالة</div>
<div class="cell" data-label="English">Status</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="valueDate">
<div class="cell" data-label="Property">valueDate</div>
<div class="cell" data-label="Column">valueDate</div>
<div class="cell" data-label="Arabic">التاريخ الفعلي</div>
<div class="cell" data-label="English">Value Date</div>
<div class="cell" data-label="Type">Date</div>

</div>


</div>

