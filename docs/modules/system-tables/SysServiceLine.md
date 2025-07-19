
<div class='tableName'>


# SysServiceLine
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
</div><div class="row searchable" id="customer">
<div class="cell" data-label="Property">customer</div>
<div class="cell" data-label="Column">customer_id</div>
<div class="cell" data-label="Arabic">العميل</div>
<div class="cell" data-label="English">Customer</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Customer](/modules/basic/Customer.md) 
</div>
</div>

<div class="row searchable" id="dimensions.analysisSet">
<div class="cell" data-label="Property">dimensions.analysisSet</div>
<div class="cell" data-label="Column">dimensionsAnalysisSet_id</div>
<div class="cell" data-label="Arabic">المجموعة التحليلية</div>
<div class="cell" data-label="English">Analysis set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/modules/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="dimensions.branch">
<div class="cell" data-label="Property">dimensions.branch</div>
<div class="cell" data-label="Column">dimensionsBranch_id</div>
<div class="cell" data-label="Arabic">الفرع</div>
<div class="cell" data-label="English">Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/modules/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="dimensions.department">
<div class="cell" data-label="Property">dimensions.department</div>
<div class="cell" data-label="Column">dimensionsDepartment_id</div>
<div class="cell" data-label="Arabic">الإدارة</div>
<div class="cell" data-label="English">Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/modules/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="dimensions.legalEntity">
<div class="cell" data-label="Property">dimensions.legalEntity</div>
<div class="cell" data-label="Column">dimensionsLegalEntity_id</div>
<div class="cell" data-label="Arabic">الشركة</div>
<div class="cell" data-label="English">Legal Entity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [LegalEntity](/modules/basic/LegalEntity.md) 
</div>
</div>

<div class="row searchable" id="dimensions.sector">
<div class="cell" data-label="Property">dimensions.sector</div>
<div class="cell" data-label="Column">dimensionsSector_id</div>
<div class="cell" data-label="Arabic">القطاع</div>
<div class="cell" data-label="English">Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/modules/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="executionCost">
<div class="cell" data-label="Property">executionCost</div>
<div class="cell" data-label="Column">executionCost</div>
<div class="cell" data-label="Arabic">تكلفة تنفيذ التشغيلة</div>
<div class="cell" data-label="English">Execution Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="executionCostDetails">
<div class="cell" data-label="Property">executionCostDetails</div>
<div class="cell" data-label="Column">executionCostDetails</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="executionType">
<div class="cell" data-label="Property">executionType</div>
<div class="cell" data-label="Column">executionType</div>
<div class="cell" data-label="Arabic">نوع التشغيلة</div>
<div class="cell" data-label="English">Execution Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="finishedItem">
<div class="cell" data-label="Property">finishedItem</div>
<div class="cell" data-label="Column">finishedItem_id</div>
<div class="cell" data-label="Arabic">الصنف النهائي</div>
<div class="cell" data-label="English">Finished Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/modules/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="freeItem">
<div class="cell" data-label="Property">freeItem</div>
<div class="cell" data-label="Column">freeItem</div>
<div class="cell" data-label="Arabic">الصنف المجانى</div>
<div class="cell" data-label="English">Free Item</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="id">
<div class="cell" data-label="Property">id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="itemNumber">
<div class="cell" data-label="Property">itemNumber</div>
<div class="cell" data-label="Column">itemNumber</div>
<div class="cell" data-label="Arabic">رقم</div>
<div class="cell" data-label="English">Number</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="lineNum">
<div class="cell" data-label="Property">lineNum</div>
<div class="cell" data-label="Column">lineNum</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="lineStatus">
<div class="cell" data-label="Property">lineStatus</div>
<div class="cell" data-label="Column">lineStatus</div>
<div class="cell" data-label="Arabic">حالة السطر</div>
<div class="cell" data-label="English">Line Status</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="materialCost">
<div class="cell" data-label="Property">materialCost</div>
<div class="cell" data-label="Column">materialCost</div>
<div class="cell" data-label="Arabic">تكلفة مواد التصنيع</div>
<div class="cell" data-label="English">Material Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="materialCostDetails">
<div class="cell" data-label="Property">materialCostDetails</div>
<div class="cell" data-label="Column">materialCostDetails</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="operation">
<div class="cell" data-label="Property">operation</div>
<div class="cell" data-label="Column">operation_id</div>
<div class="cell" data-label="Arabic">عملية</div>
<div class="cell" data-label="English">Operation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [GlassOperationMap](/modules/supplychain-gjo/GlassOperationMap.md) 
</div>
</div>

<div class="row searchable" id="orderId">
<div class="cell" data-label="Property">orderId</div>
<div class="cell" data-label="Column">orderId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="orderListId">
<div class="cell" data-label="Property">orderListId</div>
<div class="cell" data-label="Column">orderListId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="outSourcedPieces">
<div class="cell" data-label="Property">outSourcedPieces</div>
<div class="cell" data-label="Column">outSourcedPieces</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="outSourcedQty">
<div class="cell" data-label="Property">outSourcedQty</div>
<div class="cell" data-label="Column">outSourcedQty</div>
<div class="cell" data-label="Arabic">بالخارج</div>
<div class="cell" data-label="English">Outsourced Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="priority">
<div class="cell" data-label="Property">priority</div>
<div class="cell" data-label="Column">priority</div>
<div class="cell" data-label="Arabic">الأولوية</div>
<div class="cell" data-label="English">Priority</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="rejectedDetails">
<div class="cell" data-label="Property">rejectedDetails</div>
<div class="cell" data-label="Column">rejectedDetails</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="rejectedQty">
<div class="cell" data-label="Property">rejectedQty</div>
<div class="cell" data-label="Column">rejectedQty</div>
<div class="cell" data-label="Arabic">الكمية المرفوضة</div>
<div class="cell" data-label="English">Rejected Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="reprocessNumber">
<div class="cell" data-label="Property">reprocessNumber</div>
<div class="cell" data-label="Column">reprocessNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="reqServiceQty.uom">
<div class="cell" data-label="Property">reqServiceQty.uom</div>
<div class="cell" data-label="Column">reqServiceQtyUom_id</div>
<div class="cell" data-label="Arabic">الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="reqServiceQty.value">
<div class="cell" data-label="Property">reqServiceQty.value</div>
<div class="cell" data-label="Column">reqServiceQtyValue</div>
<div class="cell" data-label="Arabic">القيمة</div>
<div class="cell" data-label="English">Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="satisfiedPieces">
<div class="cell" data-label="Property">satisfiedPieces</div>
<div class="cell" data-label="Column">satisfiedPieces</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="satisfiedQty">
<div class="cell" data-label="Property">satisfiedQty</div>
<div class="cell" data-label="Column">satisfiedQty</div>
<div class="cell" data-label="Arabic">نفذت</div>
<div class="cell" data-label="English">Satisfied Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="serviceItem">
<div class="cell" data-label="Property">serviceItem</div>
<div class="cell" data-label="Column">serviceItem_id</div>
<div class="cell" data-label="Arabic">صنف الخدمة</div>
<div class="cell" data-label="English">Service Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/modules/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="showInSalesInvoice">
<div class="cell" data-label="Property">showInSalesInvoice</div>
<div class="cell" data-label="Column">showInSalesInvoice</div>
<div class="cell" data-label="Arabic">إظهار في فاتورة المبيعات</div>
<div class="cell" data-label="English">Show In Sales Invoice</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="systemLine">
<div class="cell" data-label="Property">systemLine</div>
<div class="cell" data-label="Column">systemLine_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type"></div>
<div class="cell" data-label="Foreign Table">

 [SysItemLine](/modules/system-tables/SysItemLine.md) 
</div>
</div>

<div class="row searchable" id="totalCost">
<div class="cell" data-label="Property">totalCost</div>
<div class="cell" data-label="Column">totalCost</div>
<div class="cell" data-label="Arabic">اجمالى التكلفة</div>
<div class="cell" data-label="English">Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalCostDetails">
<div class="cell" data-label="Property">totalCostDetails</div>
<div class="cell" data-label="Column">totalCostDetails</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="unSatisfiedPieces">
<div class="cell" data-label="Property">unSatisfiedPieces</div>
<div class="cell" data-label="Column">unSatisfiedPieces</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="unSatisfiedQty">
<div class="cell" data-label="Property">unSatisfiedQty</div>
<div class="cell" data-label="Column">unSatisfiedQty</div>
<div class="cell" data-label="Arabic">لم تبدأ</div>
<div class="cell" data-label="English">Unsatisfied Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>


</div>
</div>

