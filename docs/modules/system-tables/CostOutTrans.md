
<div class='tableName'>


# CostOutTrans
</div>

**Arabic:** قيد تكاليف الصرف
**English:**  Cost Transaction

<ContentFilter/>


<div class='searchable'>
<a href='#details'>details (CostOutTransLine) </a>
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
</div><div class="row searchable" id="adjustmentDetails">
<div class="cell" data-label="Property">adjustmentDetails</div>
<div class="cell" data-label="Column">adjustmentDetails</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="data.analysisSet">
<div class="cell" data-label="Property">data.analysisSet</div>
<div class="cell" data-label="Column">analysisSet_id</div>
<div class="cell" data-label="Arabic">المجموعة التحليلية</div>
<div class="cell" data-label="English">Analysis set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/modules/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="data.branch">
<div class="cell" data-label="Property">data.branch</div>
<div class="cell" data-label="Column">branch_id</div>
<div class="cell" data-label="Arabic">الفرع</div>
<div class="cell" data-label="English">Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/modules/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="data.creationDate">
<div class="cell" data-label="Property">data.creationDate</div>
<div class="cell" data-label="Column">creationDate</div>
<div class="cell" data-label="Arabic">تاريخ الإنشاء</div>
<div class="cell" data-label="English">Creation Date</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="data.department">
<div class="cell" data-label="Property">data.department</div>
<div class="cell" data-label="Column">department_id</div>
<div class="cell" data-label="Arabic">الإدارة</div>
<div class="cell" data-label="English">Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/modules/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="data.firstAuthor">
<div class="cell" data-label="Property">data.firstAuthor</div>
<div class="cell" data-label="Column">firstAuthor_id</div>
<div class="cell" data-label="Arabic">منشئ السجل</div>
<div class="cell" data-label="English">First Author</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [NaMaUser](/modules/system-tables/NaMaUser.md) 
</div>
</div>

<div class="row searchable" id="data.fiscalPeriod">
<div class="cell" data-label="Property">data.fiscalPeriod</div>
<div class="cell" data-label="Column">fiscalPeriod_id</div>
<div class="cell" data-label="Arabic">الفترة</div>
<div class="cell" data-label="English">Fiscal Period</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FiscalPeriod](/modules/basic/FiscalPeriod.md) 
</div>
</div>

<div class="row searchable" id="data.fiscalYear">
<div class="cell" data-label="Property">data.fiscalYear</div>
<div class="cell" data-label="Column">fiscalYear_id</div>
<div class="cell" data-label="Arabic">السنة المالية</div>
<div class="cell" data-label="English">Fiscal Year</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FiscalYear](/modules/basic/FiscalYear.md) 
</div>
</div>

<div class="row searchable" id="data.issueDate">
<div class="cell" data-label="Property">data.issueDate</div>
<div class="cell" data-label="Column">issueDate</div>
<div class="cell" data-label="Arabic">تاريخ التحرير</div>
<div class="cell" data-label="English">Issue Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="data.lastUpdateDate">
<div class="cell" data-label="Property">data.lastUpdateDate</div>
<div class="cell" data-label="Column">lastUpdateDate</div>
<div class="cell" data-label="Arabic">تاريخ اخر تحديث</div>
<div class="cell" data-label="English">Last update Date</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="data.legalEntity">
<div class="cell" data-label="Property">data.legalEntity</div>
<div class="cell" data-label="Column">legalEntity_id</div>
<div class="cell" data-label="Arabic">الشركة</div>
<div class="cell" data-label="English">Legal Entity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [LegalEntity](/modules/basic/LegalEntity.md) 
</div>
</div>

<div class="row searchable" id="data.origin">
<div class="cell" data-label="Property">data.origin</div>
<div class="cell gen-ref-column" data-label="Column">originActualCode,  originCode,  originType,  originId</div>
<div class="cell" data-label="Arabic"> # المستند</div>
<div class="cell" data-label="English"> Document #</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="data.originCode">
<div class="cell" data-label="Property">data.originCode</div>
<div class="cell" data-label="Column">originCode</div>
<div class="cell" data-label="Arabic"> الكود</div>
<div class="cell" data-label="English"> Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="data.originCreationDate">
<div class="cell" data-label="Property">data.originCreationDate</div>
<div class="cell" data-label="Column">originCreationDate</div>
<div class="cell" data-label="Arabic"> تاريخ الإنشاء</div>
<div class="cell" data-label="English"> Creation Date</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="data.originId">
<div class="cell" data-label="Property">data.originId</div>
<div class="cell" data-label="Column">originId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="data.originLastUpdateDate">
<div class="cell" data-label="Property">data.originLastUpdateDate</div>
<div class="cell" data-label="Column">originLastUpdateDate</div>
<div class="cell" data-label="Arabic">تاريخ اخر تحديث للمستند</div>
<div class="cell" data-label="English">Origin Last Update Date</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="data.originTransId">
<div class="cell" data-label="Property">data.originTransId</div>
<div class="cell" data-label="Column">originTransId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="data.originType">
<div class="cell" data-label="Property">data.originType</div>
<div class="cell" data-label="Column">originType</div>
<div class="cell" data-label="Arabic"> النوع</div>
<div class="cell" data-label="English"> Entity Type</div>
<div class="cell" data-label="Type">EntityType</div>

</div>

<div class="row searchable" id="data.replicationSequence">
<div class="cell" data-label="Property">data.replicationSequence</div>
<div class="cell" data-label="Column">replicationSequence</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="data.requestId">
<div class="cell" data-label="Property">data.requestId</div>
<div class="cell" data-label="Column">requestId</div>
<div class="cell" data-label="Arabic">Request Id</div>
<div class="cell" data-label="English">Request Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="data.sector">
<div class="cell" data-label="Property">data.sector</div>
<div class="cell" data-label="Column">sector_id</div>
<div class="cell" data-label="Arabic">القطاع</div>
<div class="cell" data-label="English">Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/modules/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="data.valueDate">
<div class="cell" data-label="Property">data.valueDate</div>
<div class="cell" data-label="Column">valueDate</div>
<div class="cell" data-label="Arabic">التاريخ الفعلي</div>
<div class="cell" data-label="English">Value Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="destDimensions">
<div class="cell" data-label="Property">destDimensions</div>
<div class="cell" data-label="Column">destDimensions</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="id">
<div class="cell" data-label="Property">id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="itemDimensions.activePerc">
<div class="cell" data-label="Property">itemDimensions.activePerc</div>
<div class="cell" data-label="Column">activePerc</div>
<div class="cell" data-label="Arabic">النسبة الفعالة</div>
<div class="cell" data-label="English">Active Percentage</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="itemDimensions.box">
<div class="cell" data-label="Property">itemDimensions.box</div>
<div class="cell" data-label="Column">box</div>
<div class="cell" data-label="Arabic">صندوق</div>
<div class="cell" data-label="English">Box</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="itemDimensions.color">
<div class="cell" data-label="Property">itemDimensions.color</div>
<div class="cell" data-label="Column">color</div>
<div class="cell" data-label="Arabic">اللون</div>
<div class="cell" data-label="English">Color</div>
<div class="cell" data-label="Type">Color</div>

</div>

<div class="row searchable" id="itemDimensions.inactivePerc">
<div class="cell" data-label="Property">itemDimensions.inactivePerc</div>
<div class="cell" data-label="Column">inactivePerc</div>
<div class="cell" data-label="Arabic">النسبة الغير فعالة</div>
<div class="cell" data-label="English">Inactive Percentage</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="itemDimensions.locator">
<div class="cell" data-label="Property">itemDimensions.locator</div>
<div class="cell" data-label="Column">locator_id</div>
<div class="cell" data-label="Arabic">الموقع</div>
<div class="cell" data-label="English">Locator</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Locator](/modules/supplychain/Locator.md) 
</div>
</div>

<div class="row searchable" id="itemDimensions.lotId">
<div class="cell" data-label="Property">itemDimensions.lotId</div>
<div class="cell" data-label="Column">lotId</div>
<div class="cell" data-label="Arabic">كود الشحنة</div>
<div class="cell" data-label="English">Lot ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="itemDimensions.measures">
<div class="cell" data-label="Property">itemDimensions.measures</div>
<div class="cell" data-label="Column">measures</div>
<div class="cell" data-label="Arabic">الأبعاد</div>
<div class="cell" data-label="English">Measures</div>
<div class="cell" data-label="Type">Measures</div>

</div>

<div class="row searchable" id="itemDimensions.revisionId">
<div class="cell" data-label="Property">itemDimensions.revisionId</div>
<div class="cell" data-label="Column">revisionId</div>
<div class="cell" data-label="Arabic">الإصدار</div>
<div class="cell" data-label="English">ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="itemDimensions.secondSerial">
<div class="cell" data-label="Property">itemDimensions.secondSerial</div>
<div class="cell" data-label="Column">secondSerial</div>
<div class="cell" data-label="Arabic">الرقم المسلسل الثاني</div>
<div class="cell" data-label="English">Second Serial</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="itemDimensions.serialNumber">
<div class="cell" data-label="Property">itemDimensions.serialNumber</div>
<div class="cell" data-label="Column">serialNumber</div>
<div class="cell" data-label="Arabic">الرقم المسلسل</div>
<div class="cell" data-label="English">Serial Number</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="itemDimensions.size">
<div class="cell" data-label="Property">itemDimensions.size</div>
<div class="cell" data-label="Column">size</div>
<div class="cell" data-label="Arabic">المقاس</div>
<div class="cell" data-label="English">Size</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="itemDimensions.subItem">
<div class="cell" data-label="Property">itemDimensions.subItem</div>
<div class="cell" data-label="Column">subItem_id</div>
<div class="cell" data-label="Arabic"> صنف فرعى</div>
<div class="cell" data-label="English"> SubItem</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SubItem](/modules/srvcenter-subitems/SubItem.md) 
</div>
</div>

<div class="row searchable" id="itemDimensions.warehouse">
<div class="cell" data-label="Property">itemDimensions.warehouse</div>
<div class="cell" data-label="Column">warehouse_id</div>
<div class="cell" data-label="Arabic">المخزن</div>
<div class="cell" data-label="English">Warehouse</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="ledgerTransReq2Id">
<div class="cell" data-label="Property">ledgerTransReq2Id</div>
<div class="cell" data-label="Column">ledgerTransReq2Id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="ledgerTransReqId">
<div class="cell" data-label="Property">ledgerTransReqId</div>
<div class="cell" data-label="Column">ledgerTransReqId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="productionLastCost">
<div class="cell" data-label="Property">productionLastCost</div>
<div class="cell" data-label="Column">productionLastCost</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="transferType">
<div class="cell" data-label="Property">transferType</div>
<div class="cell" data-label="Column">transferType</div>
<div class="cell" data-label="Arabic">نوع التحويل</div>
<div class="cell" data-label="English">Transfer Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>


</div>
</div>

<div id='details' title='details' class='searchable'>

## details (التفاصيل - Details)

<div class='tableName'>

**Table Name:** CostOutTransLine, **Join Column:** costOutTrans_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="details.additionalCost">
<div class="cell" data-label="Property">details.additionalCost</div>
<div class="cell" data-label="Column">additionalCost</div>
<div class="cell" data-label="Arabic">التكلفة الإضافية</div>
<div class="cell" data-label="English"> Expense item</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.commonData.analysisSet">
<div class="cell" data-label="Property">details.commonData.analysisSet</div>
<div class="cell" data-label="Column">analysisSet_id</div>
<div class="cell" data-label="Arabic">المجموعة التحليلية</div>
<div class="cell" data-label="English">Analysis set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/modules/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="details.commonData.branch">
<div class="cell" data-label="Property">details.commonData.branch</div>
<div class="cell" data-label="Column">branch_id</div>
<div class="cell" data-label="Arabic">الفرع</div>
<div class="cell" data-label="English">Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/modules/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="details.commonData.department">
<div class="cell" data-label="Property">details.commonData.department</div>
<div class="cell" data-label="Column">department_id</div>
<div class="cell" data-label="Arabic">الإدارة</div>
<div class="cell" data-label="English">Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/modules/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="details.commonData.firstAuthor">
<div class="cell" data-label="Property">details.commonData.firstAuthor</div>
<div class="cell" data-label="Column">firstAuthor_id</div>
<div class="cell" data-label="Arabic">منشئ السجل</div>
<div class="cell" data-label="English">First Author</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [NaMaUser](/modules/system-tables/NaMaUser.md) 
</div>
</div>

<div class="row searchable" id="details.commonData.fiscalPeriod">
<div class="cell" data-label="Property">details.commonData.fiscalPeriod</div>
<div class="cell" data-label="Column">fiscalPeriod_id</div>
<div class="cell" data-label="Arabic">الفترة</div>
<div class="cell" data-label="English">Fiscal Period</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FiscalPeriod](/modules/basic/FiscalPeriod.md) 
</div>
</div>

<div class="row searchable" id="details.commonData.fiscalYear">
<div class="cell" data-label="Property">details.commonData.fiscalYear</div>
<div class="cell" data-label="Column">fiscalYear_id</div>
<div class="cell" data-label="Arabic">السنة المالية</div>
<div class="cell" data-label="English">Fiscal Year</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FiscalYear](/modules/basic/FiscalYear.md) 
</div>
</div>

<div class="row searchable" id="details.commonData.legalEntity">
<div class="cell" data-label="Property">details.commonData.legalEntity</div>
<div class="cell" data-label="Column">legalEntity_id</div>
<div class="cell" data-label="Arabic">الشركة</div>
<div class="cell" data-label="English">Legal Entity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [LegalEntity](/modules/basic/LegalEntity.md) 
</div>
</div>

<div class="row searchable" id="details.commonData.origin">
<div class="cell" data-label="Property">details.commonData.origin</div>
<div class="cell gen-ref-column" data-label="Column">originActualCode,  originCode,  originType,  originId</div>
<div class="cell" data-label="Arabic"> # المستند</div>
<div class="cell" data-label="English"> Document #</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.commonData.originCode">
<div class="cell" data-label="Property">details.commonData.originCode</div>
<div class="cell" data-label="Column">originCode</div>
<div class="cell" data-label="Arabic"> الكود</div>
<div class="cell" data-label="English"> Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.commonData.originCreationDate">
<div class="cell" data-label="Property">details.commonData.originCreationDate</div>
<div class="cell" data-label="Column">originCreationDate</div>
<div class="cell" data-label="Arabic"> تاريخ الإنشاء</div>
<div class="cell" data-label="English"> Creation Date</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="details.commonData.originId">
<div class="cell" data-label="Property">details.commonData.originId</div>
<div class="cell" data-label="Column">originId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="details.commonData.originLineId">
<div class="cell" data-label="Property">details.commonData.originLineId</div>
<div class="cell" data-label="Column">originLineId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="details.commonData.originTransId">
<div class="cell" data-label="Property">details.commonData.originTransId</div>
<div class="cell" data-label="Column">originTransId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="details.commonData.originType">
<div class="cell" data-label="Property">details.commonData.originType</div>
<div class="cell" data-label="Column">originType</div>
<div class="cell" data-label="Arabic"> النوع</div>
<div class="cell" data-label="English"> Entity Type</div>
<div class="cell" data-label="Type">EntityType</div>

</div>

<div class="row searchable" id="details.commonData.requestId">
<div class="cell" data-label="Property">details.commonData.requestId</div>
<div class="cell" data-label="Column">requestId</div>
<div class="cell" data-label="Arabic">Request Id</div>
<div class="cell" data-label="English">Request Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="details.commonData.sector">
<div class="cell" data-label="Property">details.commonData.sector</div>
<div class="cell" data-label="Column">sector_id</div>
<div class="cell" data-label="Arabic">القطاع</div>
<div class="cell" data-label="English">Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/modules/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="details.commonData.valueDate">
<div class="cell" data-label="Property">details.commonData.valueDate</div>
<div class="cell" data-label="Column">valueDate</div>
<div class="cell" data-label="Arabic">التاريخ الفعلي</div>
<div class="cell" data-label="English">Value Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.costOfQtyDim">
<div class="cell" data-label="Property">details.costOfQtyDim</div>
<div class="cell" data-label="Column">costOfQtyDim</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.costValueDate">
<div class="cell" data-label="Property">details.costValueDate</div>
<div class="cell" data-label="Column">costValueDate</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="details.currentNetCost">
<div class="cell" data-label="Property">details.currentNetCost</div>
<div class="cell" data-label="Column">currentNetCost</div>
<div class="cell" data-label="Arabic">إ. تكاليف الصافي</div>
<div class="cell" data-label="English">ACC. Net Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.currentNetQty">
<div class="cell" data-label="Property">details.currentNetQty</div>
<div class="cell" data-label="Column">currentNetQty</div>
<div class="cell" data-label="Arabic">إ.كميات الصافي</div>
<div class="cell" data-label="English">ACC. Net Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.customerId">
<div class="cell" data-label="Property">details.customerId</div>
<div class="cell" data-label="Column">customerId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="details.dimensionCost">
<div class="cell" data-label="Property">details.dimensionCost</div>
<div class="cell" data-label="Column">dimensionCost</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="details.dimensionQty">
<div class="cell" data-label="Property">details.dimensionQty</div>
<div class="cell" data-label="Column">dimensionQty</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="details.documentSubsidiary">
<div class="cell" data-label="Property">details.documentSubsidiary</div>
<div class="cell gen-ref-column" data-label="Column">documentSubsidiaryActualCode,  documentSubsidiaryCode,  documentSubsidiaryEntityType,  documentSubsidiaryId</div>
<div class="cell" data-label="Arabic">ذمة المستند</div>
<div class="cell" data-label="English">Document Subsidiary</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.firstUnitCost">
<div class="cell" data-label="Property">details.firstUnitCost</div>
<div class="cell" data-label="Column">firstUnitCost</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.fromPurge">
<div class="cell" data-label="Property">details.fromPurge</div>
<div class="cell" data-label="Column">fromPurge</div>
<div class="cell" data-label="Arabic">From Purge</div>
<div class="cell" data-label="English">From Purge</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.id">
<div class="cell" data-label="Property">details.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="details.invoiceId">
<div class="cell" data-label="Property">details.invoiceId</div>
<div class="cell" data-label="Column">invoiceId</div>
<div class="cell" data-label="Arabic">Invoice Id</div>
<div class="cell" data-label="English">Invoice Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="details.invoiceType">
<div class="cell" data-label="Property">details.invoiceType</div>
<div class="cell" data-label="Column">invoiceType</div>
<div class="cell" data-label="Arabic">نوع الفاتورة</div>
<div class="cell" data-label="English">Invoice Type</div>
<div class="cell" data-label="Type">EntityType</div>

</div>

<div class="row searchable" id="details.itemDimensions.activePerc">
<div class="cell" data-label="Property">details.itemDimensions.activePerc</div>
<div class="cell" data-label="Column">activePerc</div>
<div class="cell" data-label="Arabic">النسبة الفعالة</div>
<div class="cell" data-label="English">Active Percentage</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.itemDimensions.box">
<div class="cell" data-label="Property">details.itemDimensions.box</div>
<div class="cell" data-label="Column">box</div>
<div class="cell" data-label="Arabic">صندوق</div>
<div class="cell" data-label="English">Box</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.itemDimensions.color">
<div class="cell" data-label="Property">details.itemDimensions.color</div>
<div class="cell" data-label="Column">color</div>
<div class="cell" data-label="Arabic">اللون</div>
<div class="cell" data-label="English">Color</div>
<div class="cell" data-label="Type">Color</div>

</div>

<div class="row searchable" id="details.itemDimensions.inactivePerc">
<div class="cell" data-label="Property">details.itemDimensions.inactivePerc</div>
<div class="cell" data-label="Column">inactivePerc</div>
<div class="cell" data-label="Arabic">النسبة الغير فعالة</div>
<div class="cell" data-label="English">Inactive Percentage</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.itemDimensions.locator">
<div class="cell" data-label="Property">details.itemDimensions.locator</div>
<div class="cell" data-label="Column">locator_id</div>
<div class="cell" data-label="Arabic">الموقع</div>
<div class="cell" data-label="English">Locator</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Locator](/modules/supplychain/Locator.md) 
</div>
</div>

<div class="row searchable" id="details.itemDimensions.lotId">
<div class="cell" data-label="Property">details.itemDimensions.lotId</div>
<div class="cell" data-label="Column">lotId</div>
<div class="cell" data-label="Arabic">كود الشحنة</div>
<div class="cell" data-label="English">Lot ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.itemDimensions.measures">
<div class="cell" data-label="Property">details.itemDimensions.measures</div>
<div class="cell" data-label="Column">measures</div>
<div class="cell" data-label="Arabic">الأبعاد</div>
<div class="cell" data-label="English">Measures</div>
<div class="cell" data-label="Type">Measures</div>

</div>

<div class="row searchable" id="details.itemDimensions.revisionId">
<div class="cell" data-label="Property">details.itemDimensions.revisionId</div>
<div class="cell" data-label="Column">revisionId</div>
<div class="cell" data-label="Arabic">الإصدار</div>
<div class="cell" data-label="English">ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.itemDimensions.secondSerial">
<div class="cell" data-label="Property">details.itemDimensions.secondSerial</div>
<div class="cell" data-label="Column">secondSerial</div>
<div class="cell" data-label="Arabic">الرقم المسلسل الثاني</div>
<div class="cell" data-label="English">Second Serial</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="details.itemDimensions.serialNumber">
<div class="cell" data-label="Property">details.itemDimensions.serialNumber</div>
<div class="cell" data-label="Column">serialNumber</div>
<div class="cell" data-label="Arabic">الرقم المسلسل</div>
<div class="cell" data-label="English">Serial Number</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="details.itemDimensions.size">
<div class="cell" data-label="Property">details.itemDimensions.size</div>
<div class="cell" data-label="Column">size</div>
<div class="cell" data-label="Arabic">المقاس</div>
<div class="cell" data-label="English">Size</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.itemDimensions.subItem">
<div class="cell" data-label="Property">details.itemDimensions.subItem</div>
<div class="cell" data-label="Column">subItem_id</div>
<div class="cell" data-label="Arabic"> صنف فرعى</div>
<div class="cell" data-label="English"> SubItem</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SubItem](/modules/srvcenter-subitems/SubItem.md) 
</div>
</div>

<div class="row searchable" id="details.itemDimensions.warehouse">
<div class="cell" data-label="Property">details.itemDimensions.warehouse</div>
<div class="cell" data-label="Column">warehouse_id</div>
<div class="cell" data-label="Arabic">المخزن</div>
<div class="cell" data-label="English">Warehouse</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="details.itemTransRef.item">
<div class="cell" data-label="Property">details.itemTransRef.item</div>
<div class="cell" data-label="Column">item_id</div>
<div class="cell" data-label="Arabic">الصنف</div>
<div class="cell" data-label="English">Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/modules/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="details.itemTransRef.itemCode">
<div class="cell" data-label="Property">details.itemTransRef.itemCode</div>
<div class="cell" data-label="Column">itemCode</div>
<div class="cell" data-label="Arabic"> الكود</div>
<div class="cell" data-label="English"> Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.itemTransRef.itemName1">
<div class="cell" data-label="Property">details.itemTransRef.itemName1</div>
<div class="cell" data-label="Column">itemName1</div>
<div class="cell" data-label="Arabic">اسم الصنف</div>
<div class="cell" data-label="English">Item Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.itemTransRef.itemName2">
<div class="cell" data-label="Property">details.itemTransRef.itemName2</div>
<div class="cell" data-label="Column">itemName2</div>
<div class="cell" data-label="Arabic">اسم الصنف الإنجليزي</div>
<div class="cell" data-label="English">Item English Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="details.lineNumber">
<div class="cell" data-label="Property">details.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="details.lineSubsidiary">
<div class="cell" data-label="Property">details.lineSubsidiary</div>
<div class="cell gen-ref-column" data-label="Column">lineSubsidiaryActualCode,  lineSubsidiaryCode,  lineSubsidiaryEntityType,  lineSubsidiaryId</div>
<div class="cell" data-label="Arabic">ذمة السطر</div>
<div class="cell" data-label="English">Line Subsidiary</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="details.netCost">
<div class="cell" data-label="Property">details.netCost</div>
<div class="cell" data-label="Column">netCost</div>
<div class="cell" data-label="Arabic">تكلفة الصافي</div>
<div class="cell" data-label="English">Net Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.netQty">
<div class="cell" data-label="Property">details.netQty</div>
<div class="cell" data-label="Column">netQty</div>
<div class="cell" data-label="Arabic">صافي الكمية</div>
<div class="cell" data-label="English">Net Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.originalSourceLine">
<div class="cell" data-label="Property">details.originalSourceLine</div>
<div class="cell" data-label="Column">originalSourceLine</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="details.overdraftCost">
<div class="cell" data-label="Property">details.overdraftCost</div>
<div class="cell" data-label="Column">overdraftCost</div>
<div class="cell" data-label="Arabic">تكلفة المكشوف</div>
<div class="cell" data-label="English">OverDraft Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.overdraftDetails">
<div class="cell" data-label="Property">details.overdraftDetails</div>
<div class="cell" data-label="Column">overdraftDetails</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="details.overdraftLine">
<div class="cell" data-label="Property">details.overdraftLine</div>
<div class="cell" data-label="Column">overdraftLine_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type"></div>
<div class="cell" data-label="Foreign Table">

 [CostOverdraftLine](/modules/system-tables/CostOverdraftLine.md) 
</div>
</div>

<div class="row searchable" id="details.overdraftQty">
<div class="cell" data-label="Property">details.overdraftQty</div>
<div class="cell" data-label="Column">overdraftQty</div>
<div class="cell" data-label="Arabic">كمية المكشوف</div>
<div class="cell" data-label="English">Over Draft Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.overdraftSatisCost">
<div class="cell" data-label="Property">details.overdraftSatisCost</div>
<div class="cell" data-label="Column">overdraftSatisCost</div>
<div class="cell" data-label="Arabic">تكلفة التغطية</div>
<div class="cell" data-label="English">Covered Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.overdraftSatisQty">
<div class="cell" data-label="Property">details.overdraftSatisQty</div>
<div class="cell" data-label="Column">overdraftSatisQty</div>
<div class="cell" data-label="Arabic">كمية التغطية</div>
<div class="cell" data-label="English">Covered Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.overdraftSeqDetails">
<div class="cell" data-label="Property">details.overdraftSeqDetails</div>
<div class="cell" data-label="Column">overdraftSeqDetails</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="details.purchasesManId">
<div class="cell" data-label="Property">details.purchasesManId</div>
<div class="cell" data-label="Column">purchasesManId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="details.purged">
<div class="cell" data-label="Property">details.purged</div>
<div class="cell" data-label="Column">purged</div>
<div class="cell" data-label="Arabic">Purged</div>
<div class="cell" data-label="English">Purged</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.qtyOfQtyDim">
<div class="cell" data-label="Property">details.qtyOfQtyDim</div>
<div class="cell" data-label="Column">qtyOfQtyDim</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.retUnitCost">
<div class="cell" data-label="Property">details.retUnitCost</div>
<div class="cell" data-label="Column">retUnitCost</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.retunTrans">
<div class="cell" data-label="Property">details.retunTrans</div>
<div class="cell" data-label="Column">retunTrans</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.returnFromSeq">
<div class="cell" data-label="Property">details.returnFromSeq</div>
<div class="cell" data-label="Column">returnFromSeq</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Long</div>

</div>

<div class="row searchable" id="details.returnedQty">
<div class="cell" data-label="Property">details.returnedQty</div>
<div class="cell" data-label="Column">returnedQty</div>
<div class="cell" data-label="Arabic">المرتجع</div>
<div class="cell" data-label="English">Return Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.returnedQtyDetails">
<div class="cell" data-label="Property">details.returnedQtyDetails</div>
<div class="cell" data-label="Column">returnedQtyDetails</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="details.salesManId">
<div class="cell" data-label="Property">details.salesManId</div>
<div class="cell" data-label="Column">salesManId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="details.strSequence">
<div class="cell" data-label="Property">details.strSequence</div>
<div class="cell" data-label="Column">strSequence</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Long</div>

</div>

<div class="row searchable" id="details.supplierId">
<div class="cell" data-label="Property">details.supplierId</div>
<div class="cell" data-label="Column">supplierId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="details.totalCost">
<div class="cell" data-label="Property">details.totalCost</div>
<div class="cell" data-label="Column">totalCost</div>
<div class="cell" data-label="Arabic">اجمالى التكلفة</div>
<div class="cell" data-label="English">Total Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.totalQty">
<div class="cell" data-label="Property">details.totalQty</div>
<div class="cell" data-label="Column">totalQty</div>
<div class="cell" data-label="Arabic">الكمية | إجمالي</div>
<div class="cell" data-label="English">Quantity | Total quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.transferDiff">
<div class="cell" data-label="Property">details.transferDiff</div>
<div class="cell" data-label="Column">transferDiff</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.transferType">
<div class="cell" data-label="Property">details.transferType</div>
<div class="cell" data-label="Column">transferType</div>
<div class="cell" data-label="Arabic">نوع التحويل</div>
<div class="cell" data-label="English">Transfer Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="details.unitCost">
<div class="cell" data-label="Property">details.unitCost</div>
<div class="cell" data-label="Column">unitCost</div>
<div class="cell" data-label="Arabic">تكلفة الوحده</div>
<div class="cell" data-label="English">Unit Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="details.unitCostBeforePeriodClose">
<div class="cell" data-label="Property">details.unitCostBeforePeriodClose</div>
<div class="cell" data-label="Column">unitCostBeforePeriodClose</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>


</div>
</div>

