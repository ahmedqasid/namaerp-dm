
<div class='tableName'>


# EndStockTakingLineForList
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
</div><div class="row searchable" id="actualStockQty">
<div class="cell" data-label="Property">actualStockQty</div>
<div class="cell" data-label="Column">actualStockQty</div>
<div class="cell" data-label="Arabic">الكمية | الفعلي</div>
<div class="cell" data-label="English">Quantity | Actual</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="actualStockSecondQty">
<div class="cell" data-label="Property">actualStockSecondQty</div>
<div class="cell" data-label="Column">actualStockSecondQty</div>
<div class="cell" data-label="Arabic">الكمية الثانية | الفعلي</div>
<div class="cell" data-label="English">Second Quantity | Actual</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="dbSecondSerialNumber">
<div class="cell" data-label="Property">dbSecondSerialNumber</div>
<div class="cell" data-label="Column">dbSecondSerialNumber</div>
<div class="cell" data-label="Arabic">رقم مسلسل ثاني دفتري</div>
<div class="cell" data-label="English">DB Second Serial Number</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="dbSerialNumber">
<div class="cell" data-label="Property">dbSerialNumber</div>
<div class="cell" data-label="Column">dbSerialNumber</div>
<div class="cell" data-label="Arabic">رقم مسلسل دفتري</div>
<div class="cell" data-label="English">DB Serial Number</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="description1">
<div class="cell" data-label="Property">description1</div>
<div class="cell" data-label="Column">description1</div>
<div class="cell" data-label="Arabic">الوصف 1</div>
<div class="cell" data-label="English">description1</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="description2">
<div class="cell" data-label="Property">description2</div>
<div class="cell" data-label="Column">description2</div>
<div class="cell" data-label="Arabic">الوصف 2</div>
<div class="cell" data-label="English">description2</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="description3">
<div class="cell" data-label="Property">description3</div>
<div class="cell" data-label="Column">description3</div>
<div class="cell" data-label="Arabic">الوصف 3</div>
<div class="cell" data-label="English">description3</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="dimensions.genericDimensions.analysisSet">
<div class="cell" data-label="Property">dimensions.genericDimensions.analysisSet</div>
<div class="cell" data-label="Column">genDimAnalysisSet_id</div>
<div class="cell" data-label="Arabic">المجموعة التحليلية</div>
<div class="cell" data-label="English">Analysis set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/modules/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="dimensions.genericDimensions.branch">
<div class="cell" data-label="Property">dimensions.genericDimensions.branch</div>
<div class="cell" data-label="Column">genDimBranch_id</div>
<div class="cell" data-label="Arabic">الفرع</div>
<div class="cell" data-label="English">Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/modules/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="dimensions.genericDimensions.department">
<div class="cell" data-label="Property">dimensions.genericDimensions.department</div>
<div class="cell" data-label="Column">genDimDepartment_id</div>
<div class="cell" data-label="Arabic">الإدارة</div>
<div class="cell" data-label="English">Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/modules/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="dimensions.genericDimensions.legalEntity">
<div class="cell" data-label="Property">dimensions.genericDimensions.legalEntity</div>
<div class="cell" data-label="Column">genDimLegalEntity_id</div>
<div class="cell" data-label="Arabic">الشركة</div>
<div class="cell" data-label="English">Legal Entity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [LegalEntity](/modules/basic/LegalEntity.md) 
</div>
</div>

<div class="row searchable" id="dimensions.genericDimensions.sector">
<div class="cell" data-label="Property">dimensions.genericDimensions.sector</div>
<div class="cell" data-label="Column">genDimSector_id</div>
<div class="cell" data-label="Arabic">القطاع</div>
<div class="cell" data-label="English">Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/modules/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="dimensions.item">
<div class="cell" data-label="Property">dimensions.item</div>
<div class="cell" data-label="Column">item_id</div>
<div class="cell" data-label="Arabic">الصنف</div>
<div class="cell" data-label="English">Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/modules/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="dimensions.specificDimensions.activePerc">
<div class="cell" data-label="Property">dimensions.specificDimensions.activePerc</div>
<div class="cell" data-label="Column">activePerc</div>
<div class="cell" data-label="Arabic">النسبة الفعالة</div>
<div class="cell" data-label="English">Active Percentage</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="dimensions.specificDimensions.box">
<div class="cell" data-label="Property">dimensions.specificDimensions.box</div>
<div class="cell" data-label="Column">box</div>
<div class="cell" data-label="Arabic">صندوق</div>
<div class="cell" data-label="English">Box</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="dimensions.specificDimensions.color">
<div class="cell" data-label="Property">dimensions.specificDimensions.color</div>
<div class="cell" data-label="Column">color</div>
<div class="cell" data-label="Arabic">اللون</div>
<div class="cell" data-label="English">Color</div>
<div class="cell" data-label="Type">Color</div>

</div>

<div class="row searchable" id="dimensions.specificDimensions.inactivePerc">
<div class="cell" data-label="Property">dimensions.specificDimensions.inactivePerc</div>
<div class="cell" data-label="Column">inactivePerc</div>
<div class="cell" data-label="Arabic">النسبة الغير فعالة</div>
<div class="cell" data-label="English">Inactive Percentage</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="dimensions.specificDimensions.locator">
<div class="cell" data-label="Property">dimensions.specificDimensions.locator</div>
<div class="cell" data-label="Column">locator_id</div>
<div class="cell" data-label="Arabic">الموقع</div>
<div class="cell" data-label="English">Locator</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Locator](/modules/supplychain/Locator.md) 
</div>
</div>

<div class="row searchable" id="dimensions.specificDimensions.lotId">
<div class="cell" data-label="Property">dimensions.specificDimensions.lotId</div>
<div class="cell" data-label="Column">lotId</div>
<div class="cell" data-label="Arabic">رقم الشحنه</div>
<div class="cell" data-label="English">Lot ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="dimensions.specificDimensions.measures">
<div class="cell" data-label="Property">dimensions.specificDimensions.measures</div>
<div class="cell" data-label="Column">measures</div>
<div class="cell" data-label="Arabic">الأبعاد</div>
<div class="cell" data-label="English">Measures</div>
<div class="cell" data-label="Type">Measures</div>

</div>

<div class="row searchable" id="dimensions.specificDimensions.revisionId">
<div class="cell" data-label="Property">dimensions.specificDimensions.revisionId</div>
<div class="cell" data-label="Column">revisionId</div>
<div class="cell" data-label="Arabic">الإصدار</div>
<div class="cell" data-label="English">Revision ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="dimensions.specificDimensions.secondSerial">
<div class="cell" data-label="Property">dimensions.specificDimensions.secondSerial</div>
<div class="cell" data-label="Column">secondSerial</div>
<div class="cell" data-label="Arabic">الرقم المسلسل الثاني</div>
<div class="cell" data-label="English">Second Serial</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="dimensions.specificDimensions.serialNumber">
<div class="cell" data-label="Property">dimensions.specificDimensions.serialNumber</div>
<div class="cell" data-label="Column">serialNumber</div>
<div class="cell" data-label="Arabic">الرقم المسلسل</div>
<div class="cell" data-label="English">Serial number</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="dimensions.specificDimensions.size">
<div class="cell" data-label="Property">dimensions.specificDimensions.size</div>
<div class="cell" data-label="Column">size</div>
<div class="cell" data-label="Arabic">المقاس</div>
<div class="cell" data-label="English">Size</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="dimensions.specificDimensions.subItem">
<div class="cell" data-label="Property">dimensions.specificDimensions.subItem</div>
<div class="cell" data-label="Column">subItem_id</div>
<div class="cell" data-label="Arabic"> صنف فرعى</div>
<div class="cell" data-label="English"> SubItem</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SubItem](/modules/srvcenter-subitems/SubItem.md) 
</div>
</div>

<div class="row searchable" id="dimensions.specificDimensions.warehouse">
<div class="cell" data-label="Property">dimensions.specificDimensions.warehouse</div>
<div class="cell" data-label="Column">warehouse_id</div>
<div class="cell" data-label="Arabic">المخزن</div>
<div class="cell" data-label="English">Warehouse</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="endStockTaking">
<div class="cell" data-label="Property">endStockTaking</div>
<div class="cell" data-label="Column">endStockTaking_id</div>
<div class="cell" data-label="Arabic"> نهاية الجرد</div>
<div class="cell" data-label="English"> End Stock Taking</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [EndStockTaking](/modules/supplychain-inventory/EndStockTaking.md) 
</div>
</div>

<div class="row searchable" id="expiryDate">
<div class="cell" data-label="Property">expiryDate</div>
<div class="cell" data-label="Column">expiryDate</div>
<div class="cell" data-label="Arabic">تاريخ الإنتهاء</div>
<div class="cell" data-label="English">Expiry Date</div>
<div class="cell" data-label="Type">Date</div>

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

<div class="row searchable" id="productionDate">
<div class="cell" data-label="Property">productionDate</div>
<div class="cell" data-label="Column">productionDate</div>
<div class="cell" data-label="Arabic">تاريخ الإنتاج</div>
<div class="cell" data-label="English">Production Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="qtyDiff">
<div class="cell" data-label="Property">qtyDiff</div>
<div class="cell" data-label="Column">qtyDiff</div>
<div class="cell" data-label="Arabic">فرق الكمية</div>
<div class="cell" data-label="English">Quantity Difference</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="qtyDimensionId">
<div class="cell" data-label="Property">qtyDimensionId</div>
<div class="cell" data-label="Column">qtyDimensionId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

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

<div class="row searchable" id="retestDate">
<div class="cell" data-label="Property">retestDate</div>
<div class="cell" data-label="Column">retestDate</div>
<div class="cell" data-label="Arabic">تاريخ إعادة الاختبار</div>
<div class="cell" data-label="English">retest Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="secondQtyDiff">
<div class="cell" data-label="Property">secondQtyDiff</div>
<div class="cell" data-label="Column">secondQtyDiff</div>
<div class="cell" data-label="Arabic">الكمية الثانية | فرق الكمية</div>
<div class="cell" data-label="English">Second Quantity | Quantity Difference</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="stockSecondSerialNumber">
<div class="cell" data-label="Property">stockSecondSerialNumber</div>
<div class="cell" data-label="Column">stockSecondSerialNumber</div>
<div class="cell" data-label="Arabic">رقم مسلسل ثاني في لجنة الجرد</div>
<div class="cell" data-label="English">Stock Second Details Serial Number</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="stockSerialNumber">
<div class="cell" data-label="Property">stockSerialNumber</div>
<div class="cell" data-label="Column">stockSerialNumber</div>
<div class="cell" data-label="Arabic">رقم مسلسل في لجنة الجرد</div>
<div class="cell" data-label="English">Stock Details Serial Number</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="systemStockQty">
<div class="cell" data-label="Property">systemStockQty</div>
<div class="cell" data-label="Column">systemStockQty</div>
<div class="cell" data-label="Arabic">الكمية | الدفتري</div>
<div class="cell" data-label="English">Quantity | System</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="systemStockSecondQty">
<div class="cell" data-label="Property">systemStockSecondQty</div>
<div class="cell" data-label="Column">systemStockSecondQty</div>
<div class="cell" data-label="Arabic">الكمية الثانية | الدفتري</div>
<div class="cell" data-label="English">Second Quantity | System</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="totalCost">
<div class="cell" data-label="Property">totalCost</div>
<div class="cell" data-label="Column">totalCost</div>
<div class="cell" data-label="Arabic">اجمالى التكلفة</div>
<div class="cell" data-label="English">Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>


</div>
</div>

