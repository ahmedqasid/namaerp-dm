
<div class='tableName'>


# InvoiceDiscountSysLine
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

<div class="row searchable" id="discBasisFromMatchedLines">
<div class="cell" data-label="Property">discBasisFromMatchedLines</div>
<div class="cell" data-label="Column">discBasisFromMatchedLines</div>
<div class="cell" data-label="Arabic">اساس الخصم من إجمالى السطور المنطبقة فقط</div>
<div class="cell" data-label="English">Discount Basis From Total Of Only Matched Lines</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="discountMaxValue">
<div class="cell" data-label="Property">discountMaxValue</div>
<div class="cell" data-label="Column">discountMaxValue</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="discountMinValue">
<div class="cell" data-label="Property">discountMinValue</div>
<div class="cell" data-label="Column">discountMinValue</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="discountType">
<div class="cell" data-label="Property">discountType</div>
<div class="cell" data-label="Column">discountType</div>
<div class="cell" data-label="Arabic">الخصم | النوع</div>
<div class="cell" data-label="English">Discount Type</div>
<div class="cell" data-label="Type">Enum</div>

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
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="ignoreFreeItemsInCount">
<div class="cell" data-label="Property">ignoreFreeItemsInCount</div>
<div class="cell" data-label="Column">ignoreFreeItemsInCount</div>
<div class="cell" data-label="Arabic">عدم احتساب الأصناف المجانية</div>
<div class="cell" data-label="English">Ignore Free Items In Count</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="itemsCountMechanism">
<div class="cell" data-label="Property">itemsCountMechanism</div>
<div class="cell" data-label="Column">itemsCountMechanism</div>
<div class="cell" data-label="Arabic">آلية احتساب عدد الأصناف</div>
<div class="cell" data-label="English">Items Count Mechanism</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="lineNumber">
<div class="cell" data-label="Property">lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="maxInvoiceItems">
<div class="cell" data-label="Property">maxInvoiceItems</div>
<div class="cell" data-label="Column">maxInvoiceItems</div>
<div class="cell" data-label="Arabic">عدد الأصناف | أصغر من</div>
<div class="cell" data-label="English">Invoice Items | Less Than</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="maxInvoiceValue">
<div class="cell" data-label="Property">maxInvoiceValue</div>
<div class="cell" data-label="Column">maxInvoiceValue</div>
<div class="cell" data-label="Arabic">قيمة الفاتوره | اقل من</div>
<div class="cell" data-label="English">Invoice Value | less than</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="minInvoiceItems">
<div class="cell" data-label="Property">minInvoiceItems</div>
<div class="cell" data-label="Column">minInvoiceItems</div>
<div class="cell" data-label="Arabic">عدد الأصناف | أكبر من أو تساوي</div>
<div class="cell" data-label="English">Invoice Items | Greater Than Or Equal</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="offerApplyRules">
<div class="cell" data-label="Property">offerApplyRules</div>
<div class="cell gen-ref-column" data-label="Column">offerApplyRulesActualCode,  offerApplyRulesCode,  offerApplyRulesEntityType,  offerApplyRulesId</div>
<div class="cell" data-label="Arabic">يطبق على</div>
<div class="cell" data-label="English">Applied On</div>
<div class="cell" data-label="Type">Genericreference</div>

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

