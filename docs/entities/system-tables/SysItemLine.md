# SysItemLine

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
</div><div class="row searchable" id="approvalNotRequired">
<div class="cell" data-label="Property">approvalNotRequired</div>
<div class="cell" data-label="Column">approvalNotRequired</div>
<div class="cell" data-label="Arabic">لا يحتاج الى تشغيلة يوم</div>
<div class="cell" data-label="English">Approval Not Required</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="damagedDetails">
<div class="cell" data-label="Property">damagedDetails</div>
<div class="cell" data-label="Column">damagedDetails</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="deliveredDetails">
<div class="cell" data-label="Property">deliveredDetails</div>
<div class="cell" data-label="Column">deliveredDetails</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="deliveredQty">
<div class="cell" data-label="Property">deliveredQty</div>
<div class="cell" data-label="Column">deliveredQty</div>
<div class="cell" data-label="Arabic">حالة الكميات | المستلمة</div>
<div class="cell" data-label="English">Quantity Status | Delivered</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="deliveryExpenses">
<div class="cell" data-label="Property">deliveryExpenses</div>
<div class="cell" data-label="Column">deliveryExpenses</div>
<div class="cell" data-label="Arabic">تكاليف تسليم إضافية</div>
<div class="cell" data-label="English">Additional Delivery Expenses</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="dimensions.analysisSet">
<div class="cell" data-label="Property">dimensions.analysisSet</div>
<div class="cell" data-label="Column">dimensionsAnalysisSet_id</div>
<div class="cell" data-label="Arabic">المجموعة التحليلية</div>
<div class="cell" data-label="English">Analysis set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/entities/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="dimensions.branch">
<div class="cell" data-label="Property">dimensions.branch</div>
<div class="cell" data-label="Column">dimensionsBranch_id</div>
<div class="cell" data-label="Arabic">الفرع</div>
<div class="cell" data-label="English">Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/entities/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="dimensions.department">
<div class="cell" data-label="Property">dimensions.department</div>
<div class="cell" data-label="Column">dimensionsDepartment_id</div>
<div class="cell" data-label="Arabic">الإدارة</div>
<div class="cell" data-label="English">Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/entities/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="dimensions.legalEntity">
<div class="cell" data-label="Property">dimensions.legalEntity</div>
<div class="cell" data-label="Column">dimensionsLegalEntity_id</div>
<div class="cell" data-label="Arabic">الشركة</div>
<div class="cell" data-label="English">Legal Entity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [LegalEntity](/entities/basic/LegalEntity.md) 
</div>
</div>

<div class="row searchable" id="dimensions.sector">
<div class="cell" data-label="Property">dimensions.sector</div>
<div class="cell" data-label="Column">dimensionsSector_id</div>
<div class="cell" data-label="Arabic">القطاع</div>
<div class="cell" data-label="English">Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/entities/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="executionCost">
<div class="cell" data-label="Property">executionCost</div>
<div class="cell" data-label="Column">executionCost</div>
<div class="cell" data-label="Arabic">تكلفة تنفيذ التشغيلة</div>
<div class="cell" data-label="English">Execution Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="finishExpenses">
<div class="cell" data-label="Property">finishExpenses</div>
<div class="cell" data-label="Column">finishExpenses</div>
<div class="cell" data-label="Arabic">تكاليف إنتاج إضافية</div>
<div class="cell" data-label="English">Additional Finish Expenses</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="finishNotRequired">
<div class="cell" data-label="Property">finishNotRequired</div>
<div class="cell" data-label="Column">finishNotRequired</div>
<div class="cell" data-label="Arabic">لا يوجد تسليم لصالة التسليم</div>
<div class="cell" data-label="English">Finish Not Required</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="finishedDetails">
<div class="cell" data-label="Property">finishedDetails</div>
<div class="cell" data-label="Column">finishedDetails</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="finishedQty">
<div class="cell" data-label="Property">finishedQty</div>
<div class="cell" data-label="Column">finishedQty</div>
<div class="cell" data-label="Arabic">حالة الكميات | الكمية المنتهية</div>
<div class="cell" data-label="English">Quantity Status | Finished Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

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
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="invoicedDetails">
<div class="cell" data-label="Property">invoicedDetails</div>
<div class="cell" data-label="Column">invoicedDetails</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="invoicedQty">
<div class="cell" data-label="Property">invoicedQty</div>
<div class="cell" data-label="Column">invoicedQty</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="issuedDetails">
<div class="cell" data-label="Property">issuedDetails</div>
<div class="cell" data-label="Column">issuedDetails</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="item">
<div class="cell" data-label="Property">item</div>
<div class="cell" data-label="Column">item_id</div>
<div class="cell" data-label="Arabic">الصنف</div>
<div class="cell" data-label="English">Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/entities/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="itemCost">
<div class="cell" data-label="Property">itemCost</div>
<div class="cell" data-label="Column">itemCost</div>
<div class="cell" data-label="Arabic">تكلفة الصنف</div>
<div class="cell" data-label="English">Item Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="itemCostDetails">
<div class="cell" data-label="Property">itemCostDetails</div>
<div class="cell" data-label="Column">itemCostDetails</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

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

<div class="row searchable" id="order">
<div class="cell" data-label="Property">order</div>
<div class="cell" data-label="Column">order_id</div>
<div class="cell" data-label="Arabic">أمر الشغل</div>
<div class="cell" data-label="English">Job Order</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [GlassJobOrder](/entities/supplychain-gjo/GlassJobOrder.md) 
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

<div class="row searchable" id="orderType">
<div class="cell" data-label="Property">orderType</div>
<div class="cell" data-label="Column">orderType</div>
<div class="cell" data-label="Arabic">نوع الإذن</div>
<div class="cell" data-label="English">Order Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="outsourcedDetails">
<div class="cell" data-label="Property">outsourcedDetails</div>
<div class="cell" data-label="Column">outsourcedDetails</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="price">
<div class="cell" data-label="Property">price</div>
<div class="cell" data-label="Column">price</div>
<div class="cell" data-label="Arabic">السعر</div>
<div class="cell" data-label="English">Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="quantity.baseQty.uom">
<div class="cell" data-label="Property">quantity.baseQty.uom</div>
<div class="cell" data-label="Column">baseUom_id</div>
<div class="cell" data-label="Arabic">الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/entities/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="quantity.baseQty.value">
<div class="cell" data-label="Property">quantity.baseQty.value</div>
<div class="cell" data-label="Column">baseValue</div>
<div class="cell" data-label="Arabic">الكمية</div>
<div class="cell" data-label="English">Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="quantity.itemAssortment">
<div class="cell" data-label="Property">quantity.itemAssortment</div>
<div class="cell" data-label="Column">itemAssortment_id</div>
<div class="cell" data-label="Arabic">التشكيلة</div>
<div class="cell" data-label="English">The Assortment</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemAssortment](/entities/supplychain/ItemAssortment.md) 
</div>
</div>

<div class="row searchable" id="quantity.measureQty">
<div class="cell" data-label="Property">quantity.measureQty</div>
<div class="cell" data-label="Column">measureQty</div>
<div class="cell" data-label="Arabic">الأبعاد | عدد</div>
<div class="cell" data-label="English">Measures | Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="quantity.measures.clippedLength1">
<div class="cell" data-label="Property">quantity.measures.clippedLength1</div>
<div class="cell" data-label="Column">clippedLength1</div>
<div class="cell" data-label="Arabic">أبعادالجزء المقصوص 1 | الطول</div>
<div class="cell" data-label="English">Clipped Part1 Measures | Length</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="quantity.measures.height">
<div class="cell" data-label="Property">quantity.measures.height</div>
<div class="cell" data-label="Column">height</div>
<div class="cell" data-label="Arabic">الأبعاد | ر</div>
<div class="cell" data-label="English">Measures | H</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="quantity.measures.length">
<div class="cell" data-label="Property">quantity.measures.length</div>
<div class="cell" data-label="Column">length</div>
<div class="cell" data-label="Arabic">الأبعاد | ط</div>
<div class="cell" data-label="English">Measures | L</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="quantity.measures.text">
<div class="cell" data-label="Property">quantity.measures.text</div>
<div class="cell" data-label="Column">text</div>
<div class="cell" data-label="Arabic">الأبعاد | الأبعاد</div>
<div class="cell" data-label="English">Measures | L * W * H</div>
<div class="cell" data-label="Type">Measures</div>

</div>

<div class="row searchable" id="quantity.measures.width">
<div class="cell" data-label="Property">quantity.measures.width</div>
<div class="cell" data-label="Column">width</div>
<div class="cell" data-label="Arabic">الأبعاد | ع</div>
<div class="cell" data-label="English">Measures | W</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="quantity.quantity.primeQty.uom">
<div class="cell" data-label="Property">quantity.quantity.primeQty.uom</div>
<div class="cell" data-label="Column">pUom_id</div>
<div class="cell" data-label="Arabic">الوحدة الرئيسية | الوحدة</div>
<div class="cell" data-label="English">Primary | UOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/entities/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="quantity.quantity.primeQty.value">
<div class="cell" data-label="Property">quantity.quantity.primeQty.value</div>
<div class="cell" data-label="Column">pValue</div>
<div class="cell" data-label="Arabic">الوحدة الرئيسية | الكمية</div>
<div class="cell" data-label="English">Primary | Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="quantity.quantity.secondQty.uom">
<div class="cell" data-label="Property">quantity.quantity.secondQty.uom</div>
<div class="cell" data-label="Column">sUom_id</div>
<div class="cell" data-label="Arabic">الوحدة الثانية | الوحدة</div>
<div class="cell" data-label="English">Secondary | UOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/entities/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="quantity.quantity.secondQty.value">
<div class="cell" data-label="Property">quantity.quantity.secondQty.value</div>
<div class="cell" data-label="Column">sValue</div>
<div class="cell" data-label="Arabic">الوحدة الثانية | الكمية</div>
<div class="cell" data-label="English">Secondary | Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="quantity.uomRate">
<div class="cell" data-label="Property">quantity.uomRate</div>
<div class="cell" data-label="Column">uomRate</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="remarks">
<div class="cell" data-label="Property">remarks</div>
<div class="cell" data-label="Column">remarks</div>
<div class="cell" data-label="Arabic">ملاحظات</div>
<div class="cell" data-label="English">Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="reprocessNumber">
<div class="cell" data-label="Property">reprocessNumber</div>
<div class="cell" data-label="Column">reprocessNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="salesPriceWithServices">
<div class="cell" data-label="Property">salesPriceWithServices</div>
<div class="cell" data-label="Column">salesPriceWithServices</div>
<div class="cell" data-label="Arabic">سعر البيع بالتشغيلات</div>
<div class="cell" data-label="English">Sales Price With Services</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="serviceInInvoice">
<div class="cell" data-label="Property">serviceInInvoice</div>
<div class="cell" data-label="Column">serviceInInvoice</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="servicesDetails">
<div class="cell" data-label="Property">servicesDetails</div>
<div class="cell" data-label="Column">servicesDetails</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="sourceBOMLine">
<div class="cell" data-label="Property">sourceBOMLine</div>
<div class="cell" data-label="Column">sourceBOMLine</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="toBeFinishedDetails">
<div class="cell" data-label="Property">toBeFinishedDetails</div>
<div class="cell" data-label="Column">toBeFinishedDetails</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="totalCost">
<div class="cell" data-label="Property">totalCost</div>
<div class="cell" data-label="Column">totalCost</div>
<div class="cell" data-label="Arabic">اجمالى التكلفة</div>
<div class="cell" data-label="English">Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="valueDate">
<div class="cell" data-label="Property">valueDate</div>
<div class="cell" data-label="Column">valueDate</div>
<div class="cell" data-label="Arabic">التاريخ الفعلي</div>
<div class="cell" data-label="English">Value Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="wareDetails">
<div class="cell" data-label="Property">wareDetails</div>
<div class="cell" data-label="Column">wareDetails</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>


</div>

