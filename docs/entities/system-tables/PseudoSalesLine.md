# PseudoSalesLine

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
</div><div class="row searchable" id="activeDoc">
<div class="cell" data-label="Property">activeDoc</div>
<div class="cell" data-label="Column">activeDoc</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="addedFreeInvoiceValue">
<div class="cell" data-label="Property">addedFreeInvoiceValue</div>
<div class="cell" data-label="Column">addedFreeInvoiceValue</div>
<div class="cell" data-label="Arabic">نصيب السطر من مجاني الفاتورة</div>
<div class="cell" data-label="English">Invoice Free Share</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="addedFreeLineValue">
<div class="cell" data-label="Property">addedFreeLineValue</div>
<div class="cell" data-label="Column">addedFreeLineValue</div>
<div class="cell" data-label="Arabic">تكلفة المجاني</div>
<div class="cell" data-label="English">Item Free Share</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="allowOverdraft">
<div class="cell" data-label="Property">allowOverdraft</div>
<div class="cell" data-label="Column">allowOverdraft</div>
<div class="cell" data-label="Arabic">السماح بالسحب على المكشوف</div>
<div class="cell" data-label="English">Allow Overdraft</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="calculationFormula">
<div class="cell" data-label="Property">calculationFormula</div>
<div class="cell" data-label="Column">calculationFormula_id</div>
<div class="cell" data-label="Arabic"> الصيغة الحسابية</div>
<div class="cell" data-label="English"> Calculation Formula</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CalculationFormula](/entities/supplychain/CalculationFormula.md) 
</div>
</div>

<div class="row searchable" id="canceledDeliveredQty">
<div class="cell" data-label="Property">canceledDeliveredQty</div>
<div class="cell" data-label="Column">canceledDeliveredQty</div>
<div class="cell" data-label="Arabic">كمية التوصيل المُلغاة</div>
<div class="cell" data-label="English">Canceled Delivered Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="canceledReservedQty">
<div class="cell" data-label="Property">canceledReservedQty</div>
<div class="cell" data-label="Column">canceledReservedQty</div>
<div class="cell" data-label="Arabic">كمية الحجز المُلغاة</div>
<div class="cell" data-label="English">Canceled Reserved Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="car">
<div class="cell" data-label="Property">car</div>
<div class="cell" data-label="Column">car_id</div>
<div class="cell" data-label="Arabic">السيارة</div>
<div class="cell" data-label="English">Car</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DeliveryCar](/entities/basic/DeliveryCar.md) 
</div>
</div>

<div class="row searchable" id="colorName">
<div class="cell" data-label="Property">colorName</div>
<div class="cell" data-label="Column">colorName</div>
<div class="cell" data-label="Arabic">اسم اللون</div>
<div class="cell" data-label="English">Color Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="comp">
<div class="cell" data-label="Property">comp</div>
<div class="cell" data-label="Column">comp_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AssemblyComponent](/entities/supplychain-assembly/AssemblyComponent.md) 
</div>
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

<div class="row searchable" id="deleteOnSave">
<div class="cell" data-label="Property">deleteOnSave</div>
<div class="cell" data-label="Column">deleteOnSave</div>
<div class="cell" data-label="Arabic">مسح عند الحفظ</div>
<div class="cell" data-label="English">Delete On Save</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="delivStatus">
<div class="cell" data-label="Property">delivStatus</div>
<div class="cell" data-label="Column">delivStatus</div>
<div class="cell" data-label="Arabic">حالة التوصيل</div>
<div class="cell" data-label="English">deliveryStatus</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="deliveringQty">
<div class="cell" data-label="Property">deliveringQty</div>
<div class="cell" data-label="Column">deliveringQty</div>
<div class="cell" data-label="Arabic">الكمية الجاري توصيلها</div>
<div class="cell" data-label="English">Delivering Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="deliveryDate">
<div class="cell" data-label="Property">deliveryDate</div>
<div class="cell" data-label="Column">deliveryDate</div>
<div class="cell" data-label="Arabic">تاريخ التوصيل</div>
<div class="cell" data-label="English">Delivery Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="deliveryRate.period.uom">
<div class="cell" data-label="Property">deliveryRate.period.uom</div>
<div class="cell" data-label="Column">drPeriodUom</div>
<div class="cell" data-label="Arabic">معدل التوريد|نوع الفترة</div>
<div class="cell" data-label="English">Delivery Rate|Period Unit</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="deliveryRate.period.value">
<div class="cell" data-label="Property">deliveryRate.period.value</div>
<div class="cell" data-label="Column">drPeriodValue</div>
<div class="cell" data-label="Arabic">معدل التوريد | الفترة</div>
<div class="cell" data-label="English">Delivery Rate|Period Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="deliveryRate.qty">
<div class="cell" data-label="Property">deliveryRate.qty</div>
<div class="cell" data-label="Column">drQty</div>
<div class="cell" data-label="Arabic">معدل التوريد|الكمية</div>
<div class="cell" data-label="English">Delivery Rate|Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="deliveryRate.startDate">
<div class="cell" data-label="Property">deliveryRate.startDate</div>
<div class="cell" data-label="Column">drStartDate</div>
<div class="cell" data-label="Arabic">معدل التوريد|تاريخ البداية</div>
<div class="cell" data-label="English">Delivery Rate|Start Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="deliveryTime">
<div class="cell" data-label="Property">deliveryTime</div>
<div class="cell" data-label="Column">deliveryTime</div>
<div class="cell" data-label="Arabic">وقت التوصيل</div>
<div class="cell" data-label="English">Time</div>
<div class="cell" data-label="Type">Time</div>

</div>

<div class="row searchable" id="documentId">
<div class="cell" data-label="Property">documentId</div>
<div class="cell" data-label="Column">documentId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="driver">
<div class="cell" data-label="Property">driver</div>
<div class="cell" data-label="Column">driver_id</div>
<div class="cell" data-label="Arabic">السائق</div>
<div class="cell" data-label="English">Driver</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/entities/basic/Employee.md) 
</div>
</div>

<div class="row searchable" id="emptyWeight">
<div class="cell" data-label="Property">emptyWeight</div>
<div class="cell" data-label="Column">emptyWeight</div>
<div class="cell" data-label="Arabic">وزن الفارغ</div>
<div class="cell" data-label="English">Empty Weight</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="expiryDate">
<div class="cell" data-label="Property">expiryDate</div>
<div class="cell" data-label="Column">expiryDate</div>
<div class="cell" data-label="Arabic">تاريخ الإنتهاء</div>
<div class="cell" data-label="English">Expiry Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="freeFromItemsCountOffer">
<div class="cell" data-label="Property">freeFromItemsCountOffer</div>
<div class="cell" data-label="Column">freeFromItemsCountOffer</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="freeGroupId">
<div class="cell" data-label="Property">freeGroupId</div>
<div class="cell" data-label="Column">freeGroupId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="freeItemGroup">
<div class="cell" data-label="Property">freeItemGroup</div>
<div class="cell" data-label="Column">freeItemGroup_id</div>
<div class="cell" data-label="Arabic">مجموعة أصناف مجانية</div>
<div class="cell" data-label="English">Free Item Group</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FreeItemGroup](/entities/supplychain-sales/FreeItemGroup.md) 
</div>
</div>

<div class="row searchable" id="freeItemId">
<div class="cell" data-label="Property">freeItemId</div>
<div class="cell" data-label="Column">freeItemId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="freeLine">
<div class="cell" data-label="Property">freeLine</div>
<div class="cell" data-label="Column">freeLine</div>
<div class="cell" data-label="Arabic"> صنف مجاني</div>
<div class="cell" data-label="English"> Free Item</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="freeOfferLineId">
<div class="cell" data-label="Property">freeOfferLineId</div>
<div class="cell" data-label="Column">freeOfferLineId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="genericDimensions.analysisSet">
<div class="cell" data-label="Property">genericDimensions.analysisSet</div>
<div class="cell" data-label="Column">analysisSet_id</div>
<div class="cell" data-label="Arabic">المجموعة التحليلية</div>
<div class="cell" data-label="English">Analysis set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/entities/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="genericDimensions.branch">
<div class="cell" data-label="Property">genericDimensions.branch</div>
<div class="cell" data-label="Column">branch_id</div>
<div class="cell" data-label="Arabic">الفرع</div>
<div class="cell" data-label="English">Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/entities/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="genericDimensions.department">
<div class="cell" data-label="Property">genericDimensions.department</div>
<div class="cell" data-label="Column">department_id</div>
<div class="cell" data-label="Arabic">الإدارة</div>
<div class="cell" data-label="English">Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/entities/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="genericDimensions.legalEntity">
<div class="cell" data-label="Property">genericDimensions.legalEntity</div>
<div class="cell" data-label="Column">legalEntity_id</div>
<div class="cell" data-label="Arabic">الشركة</div>
<div class="cell" data-label="English">Legal Entity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [LegalEntity](/entities/basic/LegalEntity.md) 
</div>
</div>

<div class="row searchable" id="genericDimensions.sector">
<div class="cell" data-label="Property">genericDimensions.sector</div>
<div class="cell" data-label="Column">sector_id</div>
<div class="cell" data-label="Arabic">القطاع</div>
<div class="cell" data-label="English">Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/entities/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="grossWeight">
<div class="cell" data-label="Property">grossWeight</div>
<div class="cell" data-label="Column">grossWeight</div>
<div class="cell" data-label="Arabic">الوزن القائم</div>
<div class="cell" data-label="English">Gross Weight</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="id">
<div class="cell" data-label="Property">id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="inPoints">
<div class="cell" data-label="Property">inPoints</div>
<div class="cell" data-label="Column">inPoints</div>
<div class="cell" data-label="Arabic">بالنقاط</div>
<div class="cell" data-label="English">in points</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="invoiceOfferID">
<div class="cell" data-label="Property">invoiceOfferID</div>
<div class="cell" data-label="Column">invoiceOfferID</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="item.item">
<div class="cell" data-label="Property">item.item</div>
<div class="cell" data-label="Column">item_id</div>
<div class="cell" data-label="Arabic">الصنف</div>
<div class="cell" data-label="English">Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/entities/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="item.itemCode">
<div class="cell" data-label="Property">item.itemCode</div>
<div class="cell" data-label="Column">itemCode</div>
<div class="cell" data-label="Arabic"> الكود</div>
<div class="cell" data-label="English"> Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="item.itemName1">
<div class="cell" data-label="Property">item.itemName1</div>
<div class="cell" data-label="Column">itemName1</div>
<div class="cell" data-label="Arabic">اسم الصنف</div>
<div class="cell" data-label="English">Item Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="item.itemName2">
<div class="cell" data-label="Property">item.itemName2</div>
<div class="cell" data-label="Column">itemName2</div>
<div class="cell" data-label="Arabic">اسم الصنف الإنجليزي</div>
<div class="cell" data-label="English">Item English Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="masterRowId">
<div class="cell" data-label="Property">masterRowId</div>
<div class="cell" data-label="Column">masterRowId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

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

<div class="row searchable" id="orginDoc">
<div class="cell" data-label="Property">orginDoc</div>
<div class="cell gen-ref-column" data-label="Column">orginDocActualCode,  orginDocCode,  orginDocEntityType,  orginDocId</div>
<div class="cell" data-label="Arabic">تم النسخ من سند</div>
<div class="cell" data-label="English">Copied From Doc</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="pickLineId">
<div class="cell" data-label="Property">pickLineId</div>
<div class="cell" data-label="Column">pickLineId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="price.custom">
<div class="cell" data-label="Property">price.custom</div>
<div class="cell" data-label="Column">custom</div>
<div class="cell" data-label="Arabic">مخصص</div>
<div class="cell" data-label="English">Custom</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount1.afterValue">
<div class="cell" data-label="Property">price.discount1.afterValue</div>
<div class="cell" data-label="Column">dis1AfterValue</div>
<div class="cell" data-label="Arabic">خصم 1 | صافي</div>
<div class="cell" data-label="English">Discount 1 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount1.maxNormalPercent">
<div class="cell" data-label="Property">price.discount1.maxNormalPercent</div>
<div class="cell" data-label="Column">dis1MaxNormalPercent</div>
<div class="cell" data-label="Arabic">خصم 1 | النسبة العادية</div>
<div class="cell" data-label="English">Discount 1 | Normal Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount1.percentage">
<div class="cell" data-label="Property">price.discount1.percentage</div>
<div class="cell" data-label="Column">dis1Percentage</div>
<div class="cell" data-label="Arabic">خصم 1 | %</div>
<div class="cell" data-label="English">Discount 1 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount1.value">
<div class="cell" data-label="Property">price.discount1.value</div>
<div class="cell" data-label="Column">dis1Value</div>
<div class="cell" data-label="Arabic">خصم 1 | قيمة</div>
<div class="cell" data-label="English">Discount 1 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount2.afterValue">
<div class="cell" data-label="Property">price.discount2.afterValue</div>
<div class="cell" data-label="Column">dis2AfterValue</div>
<div class="cell" data-label="Arabic">خصم 2 | صافي</div>
<div class="cell" data-label="English">Discount 2 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount2.maxNormalPercent">
<div class="cell" data-label="Property">price.discount2.maxNormalPercent</div>
<div class="cell" data-label="Column">dis2MaxNormalPercent</div>
<div class="cell" data-label="Arabic">خصم 2 | النسبة العادية</div>
<div class="cell" data-label="English">Discount 2 | Normal Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount2.percentage">
<div class="cell" data-label="Property">price.discount2.percentage</div>
<div class="cell" data-label="Column">dis2Percentage</div>
<div class="cell" data-label="Arabic">خصم 2 | %</div>
<div class="cell" data-label="English">Discount 2 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount2.value">
<div class="cell" data-label="Property">price.discount2.value</div>
<div class="cell" data-label="Column">dis2Value</div>
<div class="cell" data-label="Arabic">خصم 2 | قيمة</div>
<div class="cell" data-label="English">Discount 2 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount3.afterValue">
<div class="cell" data-label="Property">price.discount3.afterValue</div>
<div class="cell" data-label="Column">dis3AfterValue</div>
<div class="cell" data-label="Arabic">خصم 3 | صافي</div>
<div class="cell" data-label="English">Discount 3 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount3.maxNormalPercent">
<div class="cell" data-label="Property">price.discount3.maxNormalPercent</div>
<div class="cell" data-label="Column">dis3MaxNormalPercent</div>
<div class="cell" data-label="Arabic">خصم 3 | النسبة العادية</div>
<div class="cell" data-label="English">Discount 3 | Normal Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount3.percentage">
<div class="cell" data-label="Property">price.discount3.percentage</div>
<div class="cell" data-label="Column">dis3Percentage</div>
<div class="cell" data-label="Arabic">خصم 3 | %</div>
<div class="cell" data-label="English">Discount 3 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount3.value">
<div class="cell" data-label="Property">price.discount3.value</div>
<div class="cell" data-label="Column">dis3Value</div>
<div class="cell" data-label="Arabic">خصم 3 | قيمة</div>
<div class="cell" data-label="English">Discount 3 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount4.afterValue">
<div class="cell" data-label="Property">price.discount4.afterValue</div>
<div class="cell" data-label="Column">dis4AfterValue</div>
<div class="cell" data-label="Arabic">خصم 4 | صافي</div>
<div class="cell" data-label="English">Discount 4 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount4.maxNormalPercent">
<div class="cell" data-label="Property">price.discount4.maxNormalPercent</div>
<div class="cell" data-label="Column">dis4MaxNormalPercent</div>
<div class="cell" data-label="Arabic">خصم 4 | النسبة العادية</div>
<div class="cell" data-label="English">Discount 4 | Normal Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount4.percentage">
<div class="cell" data-label="Property">price.discount4.percentage</div>
<div class="cell" data-label="Column">dis4Percentage</div>
<div class="cell" data-label="Arabic">خصم 4 | %</div>
<div class="cell" data-label="English">Discount 4 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount4.value">
<div class="cell" data-label="Property">price.discount4.value</div>
<div class="cell" data-label="Column">dis4Value</div>
<div class="cell" data-label="Arabic">خصم 4 | قيمة</div>
<div class="cell" data-label="English">Discount 4 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount5.afterValue">
<div class="cell" data-label="Property">price.discount5.afterValue</div>
<div class="cell" data-label="Column">dis5AfterValue</div>
<div class="cell" data-label="Arabic">خصم 5 | صافي</div>
<div class="cell" data-label="English">Discount 5 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount5.maxNormalPercent">
<div class="cell" data-label="Property">price.discount5.maxNormalPercent</div>
<div class="cell" data-label="Column">dis5MaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount5.percentage">
<div class="cell" data-label="Property">price.discount5.percentage</div>
<div class="cell" data-label="Column">dis5Percentage</div>
<div class="cell" data-label="Arabic">خصم 5 | %</div>
<div class="cell" data-label="English">Discount 5 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount5.value">
<div class="cell" data-label="Property">price.discount5.value</div>
<div class="cell" data-label="Column">dis5Value</div>
<div class="cell" data-label="Arabic">خصم 5 | قيمة</div>
<div class="cell" data-label="English">Discount 5 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount6.afterValue">
<div class="cell" data-label="Property">price.discount6.afterValue</div>
<div class="cell" data-label="Column">dis6AfterValue</div>
<div class="cell" data-label="Arabic">خصم 6 | صافي</div>
<div class="cell" data-label="English">Discount 6 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount6.maxNormalPercent">
<div class="cell" data-label="Property">price.discount6.maxNormalPercent</div>
<div class="cell" data-label="Column">dis6MaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount6.percentage">
<div class="cell" data-label="Property">price.discount6.percentage</div>
<div class="cell" data-label="Column">dis6Percentage</div>
<div class="cell" data-label="Arabic">خصم 6 | %</div>
<div class="cell" data-label="English">Discount 6 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount6.value">
<div class="cell" data-label="Property">price.discount6.value</div>
<div class="cell" data-label="Column">dis6Value</div>
<div class="cell" data-label="Arabic">خصم 6 | قيمة</div>
<div class="cell" data-label="English">Discount 6 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount7.afterValue">
<div class="cell" data-label="Property">price.discount7.afterValue</div>
<div class="cell" data-label="Column">dis7AfterValue</div>
<div class="cell" data-label="Arabic">خصم 7 | صافي</div>
<div class="cell" data-label="English">Discount 7 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount7.maxNormalPercent">
<div class="cell" data-label="Property">price.discount7.maxNormalPercent</div>
<div class="cell" data-label="Column">dis7MaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount7.percentage">
<div class="cell" data-label="Property">price.discount7.percentage</div>
<div class="cell" data-label="Column">dis7Percentage</div>
<div class="cell" data-label="Arabic">خصم 7 | %</div>
<div class="cell" data-label="English">Discount 7 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount7.value">
<div class="cell" data-label="Property">price.discount7.value</div>
<div class="cell" data-label="Column">dis7Value</div>
<div class="cell" data-label="Arabic">خصم 7 | قيمة</div>
<div class="cell" data-label="English">Discount 7 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount8.afterValue">
<div class="cell" data-label="Property">price.discount8.afterValue</div>
<div class="cell" data-label="Column">dis8AfterValue</div>
<div class="cell" data-label="Arabic">خصم 8 | صافي</div>
<div class="cell" data-label="English">Discount 8 | After value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount8.maxNormalPercent">
<div class="cell" data-label="Property">price.discount8.maxNormalPercent</div>
<div class="cell" data-label="Column">dis8MaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount8.percentage">
<div class="cell" data-label="Property">price.discount8.percentage</div>
<div class="cell" data-label="Column">dis8Percentage</div>
<div class="cell" data-label="Arabic">خصم 8 | %</div>
<div class="cell" data-label="English">Discount 8 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.discount8.value">
<div class="cell" data-label="Property">price.discount8.value</div>
<div class="cell" data-label="Column">dis8Value</div>
<div class="cell" data-label="Arabic">خصم 8 | قيمة</div>
<div class="cell" data-label="English">Discount 8 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.headerDicount.afterValue">
<div class="cell" data-label="Property">price.headerDicount.afterValue</div>
<div class="cell" data-label="Column">hdrAfterValue</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.headerDicount.maxNormalPercent">
<div class="cell" data-label="Property">price.headerDicount.maxNormalPercent</div>
<div class="cell" data-label="Column">hdrMaxNormalPercent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.headerDicount.percentage">
<div class="cell" data-label="Property">price.headerDicount.percentage</div>
<div class="cell" data-label="Column">hdrPercentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.headerDicount.value">
<div class="cell" data-label="Property">price.headerDicount.value</div>
<div class="cell" data-label="Column">hdrValue</div>
<div class="cell" data-label="Arabic">القيمة</div>
<div class="cell" data-label="English">Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.netValue">
<div class="cell" data-label="Property">price.netValue</div>
<div class="cell" data-label="Column">netValue</div>
<div class="cell" data-label="Arabic">الصافي</div>
<div class="cell" data-label="English">Net value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.price">
<div class="cell" data-label="Property">price.price</div>
<div class="cell" data-label="Column">price</div>
<div class="cell" data-label="Arabic">الأسعار | السعر الكلي</div>
<div class="cell" data-label="English">Prices | total price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.tax1.afterValue">
<div class="cell" data-label="Property">price.tax1.afterValue</div>
<div class="cell" data-label="Column">tax1AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | الصافي</div>
<div class="cell" data-label="English">Tax | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.tax1.maxNormalPercent">
<div class="cell" data-label="Property">price.tax1.maxNormalPercent</div>
<div class="cell" data-label="Column">tax1MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | %</div>
<div class="cell" data-label="English">Item Tax | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.tax1.percentage">
<div class="cell" data-label="Property">price.tax1.percentage</div>
<div class="cell" data-label="Column">tax1Percentage</div>
<div class="cell" data-label="Arabic">قيمة إضافية 1</div>
<div class="cell" data-label="English">Tax 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.tax1.value">
<div class="cell" data-label="Property">price.tax1.value</div>
<div class="cell" data-label="Column">tax1Value</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات | القيمة</div>
<div class="cell" data-label="English">Tax value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.tax2.afterValue">
<div class="cell" data-label="Property">price.tax2.afterValue</div>
<div class="cell" data-label="Column">tax2AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | الصافي</div>
<div class="cell" data-label="English">Tax 2 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.tax2.maxNormalPercent">
<div class="cell" data-label="Property">price.tax2.maxNormalPercent</div>
<div class="cell" data-label="Column">tax2MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | %</div>
<div class="cell" data-label="English">Tax 2 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.tax2.percentage">
<div class="cell" data-label="Property">price.tax2.percentage</div>
<div class="cell" data-label="Column">tax2Percentage</div>
<div class="cell" data-label="Arabic">قيمة إضافية 2</div>
<div class="cell" data-label="English">Tax 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.tax2.value">
<div class="cell" data-label="Property">price.tax2.value</div>
<div class="cell" data-label="Column">tax2Value</div>
<div class="cell" data-label="Arabic">ضريبة مبيعات 2 | القيمة</div>
<div class="cell" data-label="English">Tax 2 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.tax3.afterValue">
<div class="cell" data-label="Property">price.tax3.afterValue</div>
<div class="cell" data-label="Column">tax3AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة 3 | الصافي</div>
<div class="cell" data-label="English">Tax 3 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.tax3.maxNormalPercent">
<div class="cell" data-label="Property">price.tax3.maxNormalPercent</div>
<div class="cell" data-label="Column">tax3MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة 3 | %</div>
<div class="cell" data-label="English">Tax 3 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.tax3.percentage">
<div class="cell" data-label="Property">price.tax3.percentage</div>
<div class="cell" data-label="Column">tax3Percentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.tax3.value">
<div class="cell" data-label="Property">price.tax3.value</div>
<div class="cell" data-label="Column">tax3Value</div>
<div class="cell" data-label="Arabic">ضريبة 3 | القيمة</div>
<div class="cell" data-label="English">Tax 3 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.tax4.afterValue">
<div class="cell" data-label="Property">price.tax4.afterValue</div>
<div class="cell" data-label="Column">tax4AfterValue</div>
<div class="cell" data-label="Arabic">ضريبة 4 | الصافي</div>
<div class="cell" data-label="English">Tax 4 | After Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.tax4.maxNormalPercent">
<div class="cell" data-label="Property">price.tax4.maxNormalPercent</div>
<div class="cell" data-label="Column">tax4MaxNormalPercent</div>
<div class="cell" data-label="Arabic">ضريبة 4 | %</div>
<div class="cell" data-label="English">Tax 4 | %</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.tax4.percentage">
<div class="cell" data-label="Property">price.tax4.percentage</div>
<div class="cell" data-label="Column">tax4Percentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.tax4.value">
<div class="cell" data-label="Property">price.tax4.value</div>
<div class="cell" data-label="Column">tax4Value</div>
<div class="cell" data-label="Arabic">ضريبة 4 | القيمة</div>
<div class="cell" data-label="English">Tax 4 | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.totalCashShare">
<div class="cell" data-label="Property">price.totalCashShare</div>
<div class="cell" data-label="Column">totalCashShare</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.totalPaymentMethodShare">
<div class="cell" data-label="Property">price.totalPaymentMethodShare</div>
<div class="cell" data-label="Column">totalPaymentMethodShare</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="price.unitPrice">
<div class="cell" data-label="Property">price.unitPrice</div>
<div class="cell" data-label="Column">unitPrice</div>
<div class="cell" data-label="Arabic">سعر الوحدة</div>
<div class="cell" data-label="English">Prices | Unit price</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="pricingQty">
<div class="cell" data-label="Property">pricingQty</div>
<div class="cell" data-label="Column">pricingQty</div>
<div class="cell" data-label="Arabic">كمية التسعير</div>
<div class="cell" data-label="English">Pricing Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="productionDate">
<div class="cell" data-label="Property">productionDate</div>
<div class="cell" data-label="Column">productionDate</div>
<div class="cell" data-label="Arabic">تاريخ الإنتاج</div>
<div class="cell" data-label="English">Production Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="qtyAtInsert">
<div class="cell" data-label="Property">qtyAtInsert</div>
<div class="cell" data-label="Column">qtyAtInsert</div>
<div class="cell" data-label="Arabic">الكمية عند الإنشاء</div>
<div class="cell" data-label="English">Qty At Insert</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="qtyAtInsertWithReserv">
<div class="cell" data-label="Property">qtyAtInsertWithReserv</div>
<div class="cell" data-label="Column">qtyAtInsertWithReserv</div>
<div class="cell" data-label="Arabic">الكمية عند الإنشاء مع الحجز</div>
<div class="cell" data-label="English">Qty At Insert With Reserv</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="quantity.baseQty.uom">
<div class="cell" data-label="Property">quantity.baseQty.uom</div>
<div class="cell" data-label="Column">quantityBaseUom_id</div>
<div class="cell" data-label="Arabic">الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/entities/supplychain/UOM.md) 
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

 [ItemAssortment](/entities/supplychain/ItemAssortment.md) 
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

 [UOM](/entities/supplychain/UOM.md) 
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

 [UOM](/entities/supplychain/UOM.md) 
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

<div class="row searchable" id="remaining">
<div class="cell" data-label="Property">remaining</div>
<div class="cell" data-label="Column">remaining</div>
<div class="cell" data-label="Arabic">المتبقي</div>
<div class="cell" data-label="English">Remaining</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="remainingQtyFromDelivery">
<div class="cell" data-label="Property">remainingQtyFromDelivery</div>
<div class="cell" data-label="Column">remainingQtyFromDelivery</div>
<div class="cell" data-label="Arabic">الكمية المتبقية من التوصيل</div>
<div class="cell" data-label="English">Remaining Quantity From Delivery</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="remarks">
<div class="cell" data-label="Property">remarks</div>
<div class="cell" data-label="Column">remarks</div>
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

<div class="row searchable" id="reservationLocator">
<div class="cell" data-label="Property">reservationLocator</div>
<div class="cell" data-label="Column">reservationLocator_id</div>
<div class="cell" data-label="Arabic">موقع الحجز</div>
<div class="cell" data-label="English">Reservation Locator</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Locator](/entities/supplychain/Locator.md) 
</div>
</div>

<div class="row searchable" id="reservationStatus">
<div class="cell" data-label="Property">reservationStatus</div>
<div class="cell" data-label="Column">reservationStatus</div>
<div class="cell" data-label="Arabic">حالة الحجز</div>
<div class="cell" data-label="English">Reservation Status</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="reservationWareHouse">
<div class="cell" data-label="Property">reservationWareHouse</div>
<div class="cell" data-label="Column">reservationWareHouse_id</div>
<div class="cell" data-label="Arabic">مخزن الحجز</div>
<div class="cell" data-label="English">Reservation WareHouse</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/entities/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="reserveLineId">
<div class="cell" data-label="Property">reserveLineId</div>
<div class="cell" data-label="Column">reserveLineId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="reservedQty">
<div class="cell" data-label="Property">reservedQty</div>
<div class="cell" data-label="Column">reservedQty</div>
<div class="cell" data-label="Arabic">الكمية المحجوزة</div>
<div class="cell" data-label="English">Reserved Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="retFromSeq">
<div class="cell" data-label="Property">retFromSeq</div>
<div class="cell" data-label="Column">retFromSeq</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Long</div>

</div>

<div class="row searchable" id="retestDate">
<div class="cell" data-label="Property">retestDate</div>
<div class="cell" data-label="Column">retestDate</div>
<div class="cell" data-label="Arabic">تاريخ إعادة الاختبار</div>
<div class="cell" data-label="English">retest Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="retunLine">
<div class="cell" data-label="Property">retunLine</div>
<div class="cell" data-label="Column">retunLine</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="returnedQty">
<div class="cell" data-label="Property">returnedQty</div>
<div class="cell" data-label="Column">returnedQty</div>
<div class="cell" data-label="Arabic">المرتجع</div>
<div class="cell" data-label="English">Return Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="revisionName">
<div class="cell" data-label="Property">revisionName</div>
<div class="cell" data-label="Column">revisionName</div>
<div class="cell" data-label="Arabic">اسم الإصدار</div>
<div class="cell" data-label="English">Revision Name</div>
<div class="cell" data-label="Type">Text</div>

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

<div class="row searchable" id="satisfiedQty">
<div class="cell" data-label="Property">satisfiedQty</div>
<div class="cell" data-label="Column">satisfiedQty</div>
<div class="cell" data-label="Arabic">نفذت</div>
<div class="cell" data-label="English">Satisfied Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="satisfiedQty2">
<div class="cell" data-label="Property">satisfiedQty2</div>
<div class="cell" data-label="Column">satisfiedQty2</div>
<div class="cell" data-label="Arabic">نفذت 2</div>
<div class="cell" data-label="English">Satisfied Qty 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="shippingAddress.address1">
<div class="cell" data-label="Property">shippingAddress.address1</div>
<div class="cell" data-label="Column">address1</div>
<div class="cell" data-label="Arabic">عنوان 1</div>
<div class="cell" data-label="English">Address 1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="shippingAddress.address2">
<div class="cell" data-label="Property">shippingAddress.address2</div>
<div class="cell" data-label="Column">address2</div>
<div class="cell" data-label="Arabic">رقم المبني</div>
<div class="cell" data-label="English">Building Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="shippingAddress.area">
<div class="cell" data-label="Property">shippingAddress.area</div>
<div class="cell" data-label="Column">addressArea</div>
<div class="cell" data-label="Arabic">المنطقة</div>
<div class="cell" data-label="English">Area</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="shippingAddress.buildingNumber">
<div class="cell" data-label="Property">shippingAddress.buildingNumber</div>
<div class="cell" data-label="Column">buildingNumber</div>
<div class="cell" data-label="Arabic">رقم المبني</div>
<div class="cell" data-label="English">Building Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="shippingAddress.city">
<div class="cell" data-label="Property">shippingAddress.city</div>
<div class="cell" data-label="Column">addressCity</div>
<div class="cell" data-label="Arabic">المدينة</div>
<div class="cell" data-label="English">City</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="shippingAddress.country">
<div class="cell" data-label="Property">shippingAddress.country</div>
<div class="cell" data-label="Column">addressCountry</div>
<div class="cell" data-label="Arabic">الدولة</div>
<div class="cell" data-label="English">Country</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="shippingAddress.countryCode">
<div class="cell" data-label="Property">shippingAddress.countryCode</div>
<div class="cell" data-label="Column">countryCode</div>
<div class="cell" data-label="Arabic">كود الدولة</div>
<div class="cell" data-label="English">Country Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="shippingAddress.district">
<div class="cell" data-label="Property">shippingAddress.district</div>
<div class="cell" data-label="Column">district</div>
<div class="cell" data-label="Arabic">الحي</div>
<div class="cell" data-label="English">District</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="shippingAddress.landPlotNumber">
<div class="cell" data-label="Property">shippingAddress.landPlotNumber</div>
<div class="cell" data-label="Column">landPlotNumber</div>
<div class="cell" data-label="Arabic">رقم تعريفي للأرض</div>
<div class="cell" data-label="English">Land Plot Number</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="shippingAddress.mapLocation">
<div class="cell" data-label="Property">shippingAddress.mapLocation</div>
<div class="cell" data-label="Column">mapLocation</div>
<div class="cell" data-label="Arabic">الموقع على الخريطة</div>
<div class="cell" data-label="English">Map Location</div>
<div class="cell" data-label="Type">LatLng</div>

</div>

<div class="row searchable" id="shippingAddress.postalCode">
<div class="cell" data-label="Property">shippingAddress.postalCode</div>
<div class="cell" data-label="Column">postalCode</div>
<div class="cell" data-label="Arabic">الكود البريدي</div>
<div class="cell" data-label="English">Postal Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="shippingAddress.region">
<div class="cell" data-label="Property">shippingAddress.region</div>
<div class="cell" data-label="Column">region_id</div>
<div class="cell" data-label="Arabic">منطقة جغرافيه</div>
<div class="cell" data-label="English">Region</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AddressRegion](/entities/basic/AddressRegion.md) 
</div>
</div>

<div class="row searchable" id="shippingAddress.state">
<div class="cell" data-label="Property">shippingAddress.state</div>
<div class="cell" data-label="Column">addressState</div>
<div class="cell" data-label="Arabic">المحافظة</div>
<div class="cell" data-label="English">State</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="shippingAddress.street">
<div class="cell" data-label="Property">shippingAddress.street</div>
<div class="cell" data-label="Column">street</div>
<div class="cell" data-label="Arabic"> شارع</div>
<div class="cell" data-label="English"> Street</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="sizeName">
<div class="cell" data-label="Property">sizeName</div>
<div class="cell" data-label="Column">sizeName</div>
<div class="cell" data-label="Arabic">اسم المقاس</div>
<div class="cell" data-label="English">Size Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="sourceLineId">
<div class="cell" data-label="Property">sourceLineId</div>
<div class="cell" data-label="Column">sourceLineId</div>
<div class="cell" data-label="Arabic">معرف سطر المصدر</div>
<div class="cell" data-label="English">Source Line Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="sourceType">
<div class="cell" data-label="Property">sourceType</div>
<div class="cell" data-label="Column">sourceType</div>
<div class="cell" data-label="Arabic">Source Type</div>
<div class="cell" data-label="English">Source Type</div>
<div class="cell" data-label="Type">EntityType</div>

</div>

<div class="row searchable" id="specialDiscount1">
<div class="cell" data-label="Property">specialDiscount1</div>
<div class="cell" data-label="Column">specialDiscount1</div>
<div class="cell" data-label="Arabic">الخصم 1 الخاص</div>
<div class="cell" data-label="English">Special Discount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="specialDiscount2">
<div class="cell" data-label="Property">specialDiscount2</div>
<div class="cell" data-label="Column">specialDiscount2</div>
<div class="cell" data-label="Arabic">الخصم 2 الخاص</div>
<div class="cell" data-label="English">Special Add. Discount1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="specialDiscount3">
<div class="cell" data-label="Property">specialDiscount3</div>
<div class="cell" data-label="Column">specialDiscount3</div>
<div class="cell" data-label="Arabic">الخصم 3 الخاص</div>
<div class="cell" data-label="English">Special Add. Discount2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="specificDimensions.activePerc">
<div class="cell" data-label="Property">specificDimensions.activePerc</div>
<div class="cell" data-label="Column">activePerc</div>
<div class="cell" data-label="Arabic">النسبة الفعالة</div>
<div class="cell" data-label="English">Active Percentage</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="specificDimensions.box">
<div class="cell" data-label="Property">specificDimensions.box</div>
<div class="cell" data-label="Column">box</div>
<div class="cell" data-label="Arabic">صندوق</div>
<div class="cell" data-label="English">Box</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="specificDimensions.color">
<div class="cell" data-label="Property">specificDimensions.color</div>
<div class="cell" data-label="Column">color</div>
<div class="cell" data-label="Arabic">اللون</div>
<div class="cell" data-label="English">Color</div>
<div class="cell" data-label="Type">Color</div>

</div>

<div class="row searchable" id="specificDimensions.inactivePerc">
<div class="cell" data-label="Property">specificDimensions.inactivePerc</div>
<div class="cell" data-label="Column">inactivePerc</div>
<div class="cell" data-label="Arabic">النسبة الغير فعالة</div>
<div class="cell" data-label="English">Inactive Percentage</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="specificDimensions.locator">
<div class="cell" data-label="Property">specificDimensions.locator</div>
<div class="cell" data-label="Column">locator_id</div>
<div class="cell" data-label="Arabic">الموقع</div>
<div class="cell" data-label="English">Locator</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Locator](/entities/supplychain/Locator.md) 
</div>
</div>

<div class="row searchable" id="specificDimensions.lotId">
<div class="cell" data-label="Property">specificDimensions.lotId</div>
<div class="cell" data-label="Column">lotId</div>
<div class="cell" data-label="Arabic">رقم الشحنه</div>
<div class="cell" data-label="English">Lot ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="specificDimensions.measures">
<div class="cell" data-label="Property">specificDimensions.measures</div>
<div class="cell" data-label="Column">measures</div>
<div class="cell" data-label="Arabic">الأبعاد</div>
<div class="cell" data-label="English">Measures</div>
<div class="cell" data-label="Type">Measures</div>

</div>

<div class="row searchable" id="specificDimensions.revisionId">
<div class="cell" data-label="Property">specificDimensions.revisionId</div>
<div class="cell" data-label="Column">revisionId</div>
<div class="cell" data-label="Arabic">الإصدار</div>
<div class="cell" data-label="English">Revision ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="specificDimensions.secondSerial">
<div class="cell" data-label="Property">specificDimensions.secondSerial</div>
<div class="cell" data-label="Column">secondSerial</div>
<div class="cell" data-label="Arabic">الرقم المسلسل الثاني</div>
<div class="cell" data-label="English">Second Serial</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="specificDimensions.serialNumber">
<div class="cell" data-label="Property">specificDimensions.serialNumber</div>
<div class="cell" data-label="Column">serialNumber</div>
<div class="cell" data-label="Arabic">الرقم المسلسل</div>
<div class="cell" data-label="English">Serial number</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="specificDimensions.size">
<div class="cell" data-label="Property">specificDimensions.size</div>
<div class="cell" data-label="Column">size</div>
<div class="cell" data-label="Arabic">المقاس</div>
<div class="cell" data-label="English">Size</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="specificDimensions.subItem">
<div class="cell" data-label="Property">specificDimensions.subItem</div>
<div class="cell" data-label="Column">subItem_id</div>
<div class="cell" data-label="Arabic"> صنف فرعى</div>
<div class="cell" data-label="English"> SubItem</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SubItem](/entities/srvcenter-subitems/SubItem.md) 
</div>
</div>

<div class="row searchable" id="specificDimensions.warehouse">
<div class="cell" data-label="Property">specificDimensions.warehouse</div>
<div class="cell" data-label="Column">warehouse_id</div>
<div class="cell" data-label="Arabic">المخزن</div>
<div class="cell" data-label="English">Warehouse</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/entities/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="subsidiary">
<div class="cell" data-label="Property">subsidiary</div>
<div class="cell gen-ref-column" data-label="Column">subsidiaryActualCode,  subsidiaryCode,  subsidiaryEntityType,  subsidiaryId</div>
<div class="cell" data-label="Arabic">الذمة</div>
<div class="cell" data-label="English">Subsidiary</div>
<div class="cell" data-label="Type">Genericreference</div>

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

<div class="row searchable" id="text1">
<div class="cell" data-label="Property">text1</div>
<div class="cell" data-label="Column">text1</div>
<div class="cell" data-label="Arabic">نــــص 1</div>
<div class="cell" data-label="English">Text 1</div>
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

<div class="row searchable" id="theSize">
<div class="cell" data-label="Property">theSize</div>
<div class="cell" data-label="Column">size</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="transItemType">
<div class="cell" data-label="Property">transItemType</div>
<div class="cell" data-label="Column">transItemType</div>
<div class="cell" data-label="Arabic">نوع السطر</div>
<div class="cell" data-label="English">Line Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="unReservedQty">
<div class="cell" data-label="Property">unReservedQty</div>
<div class="cell" data-label="Column">unReservedQty</div>
<div class="cell" data-label="Arabic">الكمية العير محجوزة</div>
<div class="cell" data-label="English">Un Reserved Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="unsatisfiedQty">
<div class="cell" data-label="Property">unsatisfiedQty</div>
<div class="cell" data-label="Column">unsatisfiedQty</div>
<div class="cell" data-label="Arabic">الكمية الغير مستلمة</div>
<div class="cell" data-label="English">Unsatisfied Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="unsatisfiedQty2">
<div class="cell" data-label="Property">unsatisfiedQty2</div>
<div class="cell" data-label="Column">unsatisfiedQty2</div>
<div class="cell" data-label="Arabic">الكمية الغير مستلمة 2</div>
<div class="cell" data-label="English">Unsatisfied Quantity 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="userSatisfiedQty">
<div class="cell" data-label="Property">userSatisfiedQty</div>
<div class="cell" data-label="Column">userSatisfiedQty</div>
<div class="cell" data-label="Arabic">الكمية المسلمة يدويا</div>
<div class="cell" data-label="English">Manually Satisfied Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="userSatisfiedQty2">
<div class="cell" data-label="Property">userSatisfiedQty2</div>
<div class="cell" data-label="Column">userSatisfiedQty2</div>
<div class="cell" data-label="Arabic">الكمية المسلمة يدويا 2</div>
<div class="cell" data-label="English">Manually Satisfied Qty 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="valueDate">
<div class="cell" data-label="Property">valueDate</div>
<div class="cell" data-label="Column">valueDate</div>
<div class="cell" data-label="Arabic">التاريخ الفعلي</div>
<div class="cell" data-label="English">Value Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="warrantyCode">
<div class="cell" data-label="Property">warrantyCode</div>
<div class="cell" data-label="Column">warrantyCode</div>
<div class="cell" data-label="Arabic">كود الضمان</div>
<div class="cell" data-label="English">Warranty Code</div>
<div class="cell" data-label="Type">BigText</div>

</div>


</div>

