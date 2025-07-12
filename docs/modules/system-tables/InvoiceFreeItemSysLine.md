# InvoiceFreeItemSysLine

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
</div><div class="row searchable" id="capabilityId">
<div class="cell" data-label="Property">capabilityId</div>
<div class="cell" data-label="Column">capabilityId</div>
<div class="cell" data-label="Arabic">معرف الصلاحية</div>
<div class="cell" data-label="English">Capability Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="considerStopOtherDiscounts">
<div class="cell" data-label="Property">considerStopOtherDiscounts</div>
<div class="cell" data-label="Column">considerStopOtherDiscounts</div>
<div class="cell" data-label="Arabic">عدم التطبيق في حال وجود عروض بها ايقاف التخفيضات الأخرى</div>
<div class="cell" data-label="English">Consider Stop Other Discounts When Applying Coupon</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="currency">
<div class="cell" data-label="Property">currency</div>
<div class="cell" data-label="Column">currency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/modules/basic/Currency.md) 
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

<div class="row searchable" id="empTargetId">
<div class="cell" data-label="Property">empTargetId</div>
<div class="cell" data-label="Column">empTargetId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="empTargetType">
<div class="cell" data-label="Property">empTargetType</div>
<div class="cell" data-label="Column">empTargetType</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">EntityType</div>

</div>

<div class="row searchable" id="emptyAnalysisSet">
<div class="cell" data-label="Property">emptyAnalysisSet</div>
<div class="cell" data-label="Column">emptyAnalysisSet</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="emptyBranch">
<div class="cell" data-label="Property">emptyBranch</div>
<div class="cell" data-label="Column">emptyBranch</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="emptyDepartment">
<div class="cell" data-label="Property">emptyDepartment</div>
<div class="cell" data-label="Column">emptyDepartment</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="emptySector">
<div class="cell" data-label="Property">emptySector</div>
<div class="cell" data-label="Column">emptySector</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="freeItemData.freeItem">
<div class="cell" data-label="Property">freeItemData.freeItem</div>
<div class="cell gen-ref-column" data-label="Column">tActualCode,  tCode,  tEntityType,  tId</div>
<div class="cell" data-label="Arabic">الصنف المجانى</div>
<div class="cell" data-label="English">Free Item</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="freeItemData.freeItemDimensions.activePerc">
<div class="cell" data-label="Property">freeItemData.freeItemDimensions.activePerc</div>
<div class="cell" data-label="Column">freeActivePerc</div>
<div class="cell" data-label="Arabic">النسبة الفعالة</div>
<div class="cell" data-label="English">Active Percentage</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="freeItemData.freeItemDimensions.box">
<div class="cell" data-label="Property">freeItemData.freeItemDimensions.box</div>
<div class="cell" data-label="Column">freeBox</div>
<div class="cell" data-label="Arabic">صندوق</div>
<div class="cell" data-label="English">Box</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="freeItemData.freeItemDimensions.color">
<div class="cell" data-label="Property">freeItemData.freeItemDimensions.color</div>
<div class="cell" data-label="Column">freeColor</div>
<div class="cell" data-label="Arabic">اللون</div>
<div class="cell" data-label="English">Color</div>
<div class="cell" data-label="Type">Color</div>

</div>

<div class="row searchable" id="freeItemData.freeItemDimensions.inactivePerc">
<div class="cell" data-label="Property">freeItemData.freeItemDimensions.inactivePerc</div>
<div class="cell" data-label="Column">freeInactivePerc</div>
<div class="cell" data-label="Arabic">النسبة الغير فعالة</div>
<div class="cell" data-label="English">Inactive Percentage</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="freeItemData.freeItemDimensions.locator">
<div class="cell" data-label="Property">freeItemData.freeItemDimensions.locator</div>
<div class="cell" data-label="Column">freeLocator_id</div>
<div class="cell" data-label="Arabic">الموقع</div>
<div class="cell" data-label="English">Locator</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Locator](/modules/supplychain/Locator.md) 
</div>
</div>

<div class="row searchable" id="freeItemData.freeItemDimensions.lotId">
<div class="cell" data-label="Property">freeItemData.freeItemDimensions.lotId</div>
<div class="cell" data-label="Column">freeLotId</div>
<div class="cell" data-label="Arabic">كود الشحنة</div>
<div class="cell" data-label="English">Lot ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="freeItemData.freeItemDimensions.measures">
<div class="cell" data-label="Property">freeItemData.freeItemDimensions.measures</div>
<div class="cell" data-label="Column">freeMeasures</div>
<div class="cell" data-label="Arabic">الأبعاد</div>
<div class="cell" data-label="English">Measures</div>
<div class="cell" data-label="Type">Measures</div>

</div>

<div class="row searchable" id="freeItemData.freeItemDimensions.revisionId">
<div class="cell" data-label="Property">freeItemData.freeItemDimensions.revisionId</div>
<div class="cell" data-label="Column">freeRevisionId</div>
<div class="cell" data-label="Arabic">الإصدار</div>
<div class="cell" data-label="English">ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="freeItemData.freeItemDimensions.secondSerial">
<div class="cell" data-label="Property">freeItemData.freeItemDimensions.secondSerial</div>
<div class="cell" data-label="Column">freeSecondSerial</div>
<div class="cell" data-label="Arabic">الرقم المسلسل الثاني</div>
<div class="cell" data-label="English">Second Serial</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="freeItemData.freeItemDimensions.serialNumber">
<div class="cell" data-label="Property">freeItemData.freeItemDimensions.serialNumber</div>
<div class="cell" data-label="Column">freeSerialNumber</div>
<div class="cell" data-label="Arabic">الرقم المسلسل</div>
<div class="cell" data-label="English">Serial Number</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="freeItemData.freeItemDimensions.size">
<div class="cell" data-label="Property">freeItemData.freeItemDimensions.size</div>
<div class="cell" data-label="Column">freeSize</div>
<div class="cell" data-label="Arabic">المقاس</div>
<div class="cell" data-label="English">Size</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="freeItemData.freeItemDimensions.subItem">
<div class="cell" data-label="Property">freeItemData.freeItemDimensions.subItem</div>
<div class="cell" data-label="Column">freeSubItem_id</div>
<div class="cell" data-label="Arabic"> صنف فرعى</div>
<div class="cell" data-label="English"> SubItem</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SubItem](/modules/srvcenter-subitems/SubItem.md) 
</div>
</div>

<div class="row searchable" id="freeItemData.freeItemDimensions.warehouse">
<div class="cell" data-label="Property">freeItemData.freeItemDimensions.warehouse</div>
<div class="cell" data-label="Column">freeWarehouse_id</div>
<div class="cell" data-label="Arabic">المخزن</div>
<div class="cell" data-label="English">Warehouse</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="freeItemData.freeItemGenericDimension.analysisSet">
<div class="cell" data-label="Property">freeItemData.freeItemGenericDimension.analysisSet</div>
<div class="cell" data-label="Column">freeAnalysisSet_id</div>
<div class="cell" data-label="Arabic">المجموعة التحليلية</div>
<div class="cell" data-label="English">Analysis set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/modules/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="freeItemData.freeItemGenericDimension.branch">
<div class="cell" data-label="Property">freeItemData.freeItemGenericDimension.branch</div>
<div class="cell" data-label="Column">freeBranch_id</div>
<div class="cell" data-label="Arabic">الفرع</div>
<div class="cell" data-label="English">Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/modules/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="freeItemData.freeItemGenericDimension.department">
<div class="cell" data-label="Property">freeItemData.freeItemGenericDimension.department</div>
<div class="cell" data-label="Column">freeDepartment_id</div>
<div class="cell" data-label="Arabic">الإدارة</div>
<div class="cell" data-label="English">Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/modules/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="freeItemData.freeItemGenericDimension.legalEntity">
<div class="cell" data-label="Property">freeItemData.freeItemGenericDimension.legalEntity</div>
<div class="cell" data-label="Column">freeLegalEntity_id</div>
<div class="cell" data-label="Arabic">الشركة</div>
<div class="cell" data-label="English">Legal Entity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [LegalEntity](/modules/basic/LegalEntity.md) 
</div>
</div>

<div class="row searchable" id="freeItemData.freeItemGenericDimension.sector">
<div class="cell" data-label="Property">freeItemData.freeItemGenericDimension.sector</div>
<div class="cell" data-label="Column">freeSector_id</div>
<div class="cell" data-label="Arabic">القطاع</div>
<div class="cell" data-label="English">Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/modules/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="freeItemData.freePolicy">
<div class="cell" data-label="Property">freeItemData.freePolicy</div>
<div class="cell" data-label="Column">freePolicy</div>
<div class="cell" data-label="Arabic"> السياسة</div>
<div class="cell" data-label="English"> Policy</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="freeItemData.freeQty.uom">
<div class="cell" data-label="Property">freeItemData.freeQty.uom</div>
<div class="cell" data-label="Column">freeQtyUom_id</div>
<div class="cell" data-label="Arabic">الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="freeItemData.freeQty.value">
<div class="cell" data-label="Property">freeItemData.freeQty.value</div>
<div class="cell" data-label="Column">freeQtyValue</div>
<div class="cell" data-label="Arabic">الكمية</div>
<div class="cell" data-label="English"> Quantity</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="freeItemData.manual">
<div class="cell" data-label="Property">freeItemData.manual</div>
<div class="cell" data-label="Column">manual</div>
<div class="cell" data-label="Arabic">يدوي</div>
<div class="cell" data-label="English">Manual</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="freeItemData.maxQty">
<div class="cell" data-label="Property">freeItemData.maxQty</div>
<div class="cell" data-label="Column">maxQty</div>
<div class="cell" data-label="Arabic">اقصي كمية</div>
<div class="cell" data-label="English">Max Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="freeItemData.offerApplyRules">
<div class="cell" data-label="Property">freeItemData.offerApplyRules</div>
<div class="cell" data-label="Column">offerApplyRules_id</div>
<div class="cell" data-label="Arabic">يطبق على</div>
<div class="cell" data-label="English">Applied On</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [OfferApplyRules](/modules/supplychain-purchases/OfferApplyRules.md) 
</div>
</div>

<div class="row searchable" id="freeItemData.replacePolicy">
<div class="cell" data-label="Property">freeItemData.replacePolicy</div>
<div class="cell" data-label="Column">replacePolicy</div>
<div class="cell" data-label="Arabic">سياسة الإستبدال</div>
<div class="cell" data-label="English">Replacement Policy</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="freeItemData.soldQty">
<div class="cell" data-label="Property">freeItemData.soldQty</div>
<div class="cell" data-label="Column">soldQty</div>
<div class="cell" data-label="Arabic">المباع</div>
<div class="cell" data-label="English">Sold Qty</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="freeItemData.taxable">
<div class="cell" data-label="Property">freeItemData.taxable</div>
<div class="cell" data-label="Column">taxable</div>
<div class="cell" data-label="Arabic">خاضع للضريبة</div>
<div class="cell" data-label="English">Taxable</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="fromDate">
<div class="cell" data-label="Property">fromDate</div>
<div class="cell" data-label="Column">fromDate</div>
<div class="cell" data-label="Arabic">من تاريخ</div>
<div class="cell" data-label="English">From Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="id">
<div class="cell" data-label="Property">id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="ignoreOtherOffers">
<div class="cell" data-label="Property">ignoreOtherOffers</div>
<div class="cell" data-label="Column">ignoreOtherOffers</div>
<div class="cell" data-label="Arabic">لا يُعتد بعروض الأصناف مع هذا العرض</div>
<div class="cell" data-label="English">Ignore Item Offers</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="lineNumber">
<div class="cell" data-label="Property">lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="maxInvoiceValue">
<div class="cell" data-label="Property">maxInvoiceValue</div>
<div class="cell" data-label="Column">maxInvoiceValue</div>
<div class="cell" data-label="Arabic">قيمة الفاتوره | اقل من</div>
<div class="cell" data-label="English">Invoice Value | less than</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="priority">
<div class="cell" data-label="Property">priority</div>
<div class="cell" data-label="Column">priority</div>
<div class="cell" data-label="Arabic">الأولوية</div>
<div class="cell" data-label="English">Priority</div>
<div class="cell" data-label="Type">Long</div>

</div>

<div class="row searchable" id="refId">
<div class="cell" data-label="Property">refId</div>
<div class="cell" data-label="Column">refId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="stopOtherDiscounts">
<div class="cell" data-label="Property">stopOtherDiscounts</div>
<div class="cell" data-label="Column">stopOtherDiscounts</div>
<div class="cell" data-label="Arabic">إيقاف التخفبضات الآخرى</div>
<div class="cell" data-label="English">stop other discounts</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="subsidiary">
<div class="cell" data-label="Property">subsidiary</div>
<div class="cell gen-ref-column" data-label="Column">subsidiaryActualCode,  subsidiaryCode,  subsidiaryEntityType,  subsidiaryId</div>
<div class="cell" data-label="Arabic">الذمة</div>
<div class="cell" data-label="English">Subsidiary</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="targetId">
<div class="cell" data-label="Property">targetId</div>
<div class="cell" data-label="Column">targetId</div>
<div class="cell" data-label="Arabic">Target ID</div>
<div class="cell" data-label="English">Target ID</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="targetType">
<div class="cell" data-label="Property">targetType</div>
<div class="cell" data-label="Column">targetType</div>
<div class="cell" data-label="Arabic"> النوع المستهدف</div>
<div class="cell" data-label="English"> Tooltip Target Type</div>
<div class="cell" data-label="Type">EntityType</div>

</div>

<div class="row searchable" id="toDate">
<div class="cell" data-label="Property">toDate</div>
<div class="cell" data-label="Column">toDate</div>
<div class="cell" data-label="Arabic">إلى تاريخ</div>
<div class="cell" data-label="English">To Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="totalValue">
<div class="cell" data-label="Property">totalValue</div>
<div class="cell" data-label="Column">totalValue</div>
<div class="cell" data-label="Arabic">الإجمالي | القيمة</div>
<div class="cell" data-label="English">Total Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>


</div>
</div>

