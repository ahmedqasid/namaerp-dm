# MAGMagentoSite
**Arabic:** Magento Site - Magento Sites
**English:** Magento Site - Magento Sites

<ContentFilter/>


<div class='searchable'>
<a href='#copyToEcommerceItemLines'>copyToEcommerceItemLines (MagCopyToEcommerceItemLine) </a> , <a href='#documentGenerationInfoLines'>documentGenerationInfoLines (EcommerceDocumentGenerationInfo) </a> , <a href='#ecommerceEventActionsLines'>ecommerceEventActionsLines (EcommerceEventActionsLine) </a> , <a href='#ecommerceWarehouseLines'>ecommerceWarehouseLines (EcommerceWarehouseLine) </a> , <a href='#graphQLLines'>graphQLLines (EcommerceGraphQLLine) </a> , <a href='#paymentMethods'>paymentMethods (MAGSitePaymentMethodsLine) </a> , <a href='#shippingItems'>shippingItems (MAGSiteShippingItemLine) </a> , <a href='#updateItemFor'>updateItemFor (MAGSiteItemUpdateCriteria) </a> , <a href='#updateOrderStatusTo'>updateOrderStatusTo (MagentoOrderUpdateStatus) </a> , <a href='#updateQtyFor'>updateQtyFor (MAGSiteQtyUpdateCriteria) </a>
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
</div><div class="row searchable" id="allowMultipleSKUsPerItemInLinkers">
<div class="cell" data-label="Property">allowMultipleSKUsPerItemInLinkers</div>
<div class="cell" data-label="Column">allowMultipleSKUsPerItemInLinkers</div>
<div class="cell" data-label="Arabic">السماح بأكثر من SKU لنفس الصنف بلمفات الربط</div>
<div class="cell" data-label="English">Allow Multiple SKUs Per Item In Linkers</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="analysisSet">
<div class="cell" data-label="Property">analysisSet</div>
<div class="cell" data-label="Column">analysisSet_id</div>
<div class="cell" data-label="Arabic">المجموعة التحليلية</div>
<div class="cell" data-label="English">Analysis set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/modules/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="analysisSetId">
<div class="cell" data-label="Property">analysisSetId</div>
<div class="cell" data-label="Column">analysisSet_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="authorizationCode">
<div class="cell" data-label="Property">authorizationCode</div>
<div class="cell" data-label="Column">authorizationCode</div>
<div class="cell" data-label="Arabic">Authorization Code</div>
<div class="cell" data-label="English">Authorization Code</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="authorizationNumberPath">
<div class="cell" data-label="Property">authorizationNumberPath</div>
<div class="cell" data-label="Column">authorizationNumberPath</div>
<div class="cell" data-label="Arabic">مسار حقل رقم العملية</div>
<div class="cell" data-label="English">Authorization Number Path</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="branch">
<div class="cell" data-label="Property">branch</div>
<div class="cell" data-label="Column">branch_id</div>
<div class="cell" data-label="Arabic">الفرع</div>
<div class="cell" data-label="English">Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/modules/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="branchId">
<div class="cell" data-label="Property">branchId</div>
<div class="cell" data-label="Column">branch_id</div>
<div class="cell" data-label="Arabic">Branch ID</div>
<div class="cell" data-label="English">Branch ID</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="calculateSerialsWhenUpdateQuantitiesSameAsEndStock">
<div class="cell" data-label="Property">calculateSerialsWhenUpdateQuantitiesSameAsEndStock</div>
<div class="cell" data-label="Column">calculateSerialsWhenUpdateQuantitiesSameAsEndStock</div>
<div class="cell" data-label="Arabic">حساب الأرقام المُسلسلة مثل طريقة الجرد عند تحديث الكميات</div>
<div class="cell" data-label="English">Calculate Serials When Update Quantities Same As End Stock</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="changReqStatusWithDocCommit">
<div class="cell" data-label="Property">changReqStatusWithDocCommit</div>
<div class="cell" data-label="Column">changReqStatusWithDocCommit</div>
<div class="cell" data-label="Arabic">تحديث حالة الطلب في ماجنتو بعد حفظ مستند المبيعات</div>
<div class="cell" data-label="English">Change Request Status With Sales Document Commit</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="changeItemStatusWithQty">
<div class="cell" data-label="Property">changeItemStatusWithQty</div>
<div class="cell" data-label="Column">changeItemStatusWithQty</div>
<div class="cell" data-label="Arabic">تغيير حالة الصنف مع تغيير الكمية</div>
<div class="cell" data-label="English">Change Item Status When Quantity Changes</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="codPaymentMethod">
<div class="cell" data-label="Property">codPaymentMethod</div>
<div class="cell" data-label="Column">codPaymentMethod_id</div>
<div class="cell" data-label="Arabic">طريقة الدفع عند الإستلام</div>
<div class="cell" data-label="English">Cash on delivery Payment Method</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [PaymentMethod](/modules/basic/PaymentMethod.md) 
</div>
</div>

<div class="row searchable" id="code">
<div class="cell" data-label="Property">code</div>
<div class="cell" data-label="Column">code</div>
<div class="cell" data-label="Arabic">الكود</div>
<div class="cell" data-label="English">Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="colorCode">
<div class="cell" data-label="Property">colorCode</div>
<div class="cell" data-label="Column">colorCode</div>
<div class="cell" data-label="Arabic">كود اللون</div>
<div class="cell" data-label="English">Color Code</div>
<div class="cell" data-label="Type">Color</div>

</div>

<div class="row searchable" id="colorMetaDataKey">
<div class="cell" data-label="Property">colorMetaDataKey</div>
<div class="cell" data-label="Column">colorMetaDataKey</div>
<div class="cell" data-label="Arabic">Color Meta Data Key</div>
<div class="cell" data-label="English">Color Meta Data Key</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="commitedBefore">
<div class="cell" data-label="Property">commitedBefore</div>
<div class="cell" data-label="Column">commitedBefore</div>
<div class="cell" data-label="Arabic">تم الحفظ مسبقا</div>
<div class="cell" data-label="English">Commited Before</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="considerActivPercOnUpdate">
<div class="cell" data-label="Property">considerActivPercOnUpdate</div>
<div class="cell" data-label="Column">considerActivPercOnUpdate</div>
<div class="cell" data-label="Arabic">إعتبار النسبة الفعالة مع التحديث للموقع</div>
<div class="cell" data-label="English">Consider Active Percentage On Update</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="considerBoxOnUpdate">
<div class="cell" data-label="Property">considerBoxOnUpdate</div>
<div class="cell" data-label="Column">considerBoxOnUpdate</div>
<div class="cell" data-label="Arabic">إعتبار الصندوق مع التحديث للموقع</div>
<div class="cell" data-label="English">Consider Box On Update</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="considerColorOnUpdate">
<div class="cell" data-label="Property">considerColorOnUpdate</div>
<div class="cell" data-label="Column">considerColorOnUpdate</div>
<div class="cell" data-label="Arabic">إعتبار اللون مع التحديث للموقع</div>
<div class="cell" data-label="English">Consider Color On Update</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="considerInActivPercOnUpdate">
<div class="cell" data-label="Property">considerInActivPercOnUpdate</div>
<div class="cell" data-label="Column">considerInActivPercOnUpdate</div>
<div class="cell" data-label="Arabic">إعتبار النسبة الغير فعالة مع التحديث للموقع</div>
<div class="cell" data-label="English">Consider In Active Percentage On Update</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="considerLotIdOnUpdate">
<div class="cell" data-label="Property">considerLotIdOnUpdate</div>
<div class="cell" data-label="Column">considerLotIdOnUpdate</div>
<div class="cell" data-label="Arabic">إعتبار الشحنة مع التحديث للموقع</div>
<div class="cell" data-label="English">Consider Lot Id On Update</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="considerMeasuresOnUpdate">
<div class="cell" data-label="Property">considerMeasuresOnUpdate</div>
<div class="cell" data-label="Column">considerMeasuresOnUpdate</div>
<div class="cell" data-label="Arabic">إعتبار المقاسات مع التحديث للموقع</div>
<div class="cell" data-label="English">Consider Measures On Update</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="considerRevisionIdOnUpdate">
<div class="cell" data-label="Property">considerRevisionIdOnUpdate</div>
<div class="cell" data-label="Column">considerRevisionIdOnUpdate</div>
<div class="cell" data-label="Arabic">إعتبار الإصدار مع التحديث للموقع</div>
<div class="cell" data-label="English">Consider Revision Id On Update</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="considerSecSerialOnUpdate">
<div class="cell" data-label="Property">considerSecSerialOnUpdate</div>
<div class="cell" data-label="Column">considerSecSerialOnUpdate</div>
<div class="cell" data-label="Arabic">إعتبار الرقم المسلسل الثاني مع التحديث للموقع</div>
<div class="cell" data-label="English">Consider Second Serial On Update</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="considerSerialOnUpdate">
<div class="cell" data-label="Property">considerSerialOnUpdate</div>
<div class="cell" data-label="Column">considerSerialOnUpdate</div>
<div class="cell" data-label="Arabic">إعتبار الرقم المسلسل مع التحديث للموقع</div>
<div class="cell" data-label="English">Consider Serial On Update</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="considerSizeOnUpdate">
<div class="cell" data-label="Property">considerSizeOnUpdate</div>
<div class="cell" data-label="Column">considerSizeOnUpdate</div>
<div class="cell" data-label="Arabic">إعتبار المقاس مع التحديث للموقع</div>
<div class="cell" data-label="English">Consider Size On Update</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="considerSubItemOnUpdate">
<div class="cell" data-label="Property">considerSubItemOnUpdate</div>
<div class="cell" data-label="Column">considerSubItemOnUpdate</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="considerUOMOnUpdate">
<div class="cell" data-label="Property">considerUOMOnUpdate</div>
<div class="cell" data-label="Column">considerUOMOnUpdate</div>
<div class="cell" data-label="Arabic">إعتبار وحدة الصنف مع التحديث للموقع</div>
<div class="cell" data-label="English">Consider Item UOM Percentage On Update</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="copyFieldMap">
<div class="cell" data-label="Property">copyFieldMap</div>
<div class="cell" data-label="Column">copyFieldMap</div>
<div class="cell" data-label="Arabic">نسخ الي حقول معينة في مستند المبيعات</div>
<div class="cell" data-label="English">Copy Sales Document Field Map</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="copyLineFieldMap">
<div class="cell" data-label="Property">copyLineFieldMap</div>
<div class="cell" data-label="Column">copyLineFieldMap</div>
<div class="cell" data-label="Arabic">نسخ الي حقول معينة في سطر المستند</div>
<div class="cell" data-label="English">Copy Sales Document Line Field Map</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="copyPaymentLineFieldMap">
<div class="cell" data-label="Property">copyPaymentLineFieldMap</div>
<div class="cell" data-label="Column">copyPaymentLineFieldMap</div>
<div class="cell" data-label="Arabic">نسخ حقول سطور الدفع</div>
<div class="cell" data-label="English">Copy Payment Line Field Map</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="copyToDetailsRemarks">
<div class="cell" data-label="Property">copyToDetailsRemarks</div>
<div class="cell" data-label="Column">copyToDetailsRemarks</div>
<div class="cell" data-label="Arabic">نسخ الي ملاحظات السطر(الحقول المعرفة للوصف منفصلة ب (,))</div>
<div class="cell" data-label="English">Copy To Details Remarks (Keys Seperated By Comma)</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="createCustomerIfNotExist">
<div class="cell" data-label="Property">createCustomerIfNotExist</div>
<div class="cell" data-label="Column">createCustomerIfNotExist</div>
<div class="cell" data-label="Arabic">إنشاء عميل في حاله عدم وجوده</div>
<div class="cell" data-label="English">Create Customer If Not Found</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="createInvoiceForReturnsIfInvoiceNotFound">
<div class="cell" data-label="Property">createInvoiceForReturnsIfInvoiceNotFound</div>
<div class="cell" data-label="Column">createInvoiceForReturnsIfInvoiceNotFound</div>
<div class="cell" data-label="Arabic">إنشاء فاتورة للمرتجعات إذا لم تكن الفاتورة موجودة</div>
<div class="cell" data-label="English">Create Invoice For Returns If Invoice Not Found</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="createTransactionId">
<div class="cell" data-label="Property">createTransactionId</div>
<div class="cell" data-label="Column">createTransactionId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="creationDate">
<div class="cell" data-label="Property">creationDate</div>
<div class="cell" data-label="Column">creationDate</div>
<div class="cell" data-label="Arabic">تاريخ الإنشاء</div>
<div class="cell" data-label="English">Creation Date</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="currentApprovalCase">
<div class="cell" data-label="Property">currentApprovalCase</div>
<div class="cell" data-label="Column">currentApprovalCase_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type"></div>
<div class="cell" data-label="Foreign Table">

 [ApprovalCase](/modules/system-tables/ApprovalCase.md) 
</div>
</div>

<div class="row searchable" id="currentVersion">
<div class="cell" data-label="Property">currentVersion</div>
<div class="cell" data-label="Column">currentVersion</div>
<div class="cell" data-label="Arabic">النسخة الحالية</div>
<div class="cell" data-label="English">Current Version</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="customViewName">
<div class="cell" data-label="Property">customViewName</div>
<div class="cell" data-label="Column">customViewName</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="customerFieldsMap">
<div class="cell" data-label="Property">customerFieldsMap</div>
<div class="cell" data-label="Column">customerFieldsMap</div>
<div class="cell" data-label="Arabic">Customer Fields Map</div>
<div class="cell" data-label="English">Customer Fields Map</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="date1">
<div class="cell" data-label="Property">date1</div>
<div class="cell" data-label="Column">date1</div>
<div class="cell" data-label="Arabic">تـــاريخ 1</div>
<div class="cell" data-label="English">Date 1</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="date2">
<div class="cell" data-label="Property">date2</div>
<div class="cell" data-label="Column">date2</div>
<div class="cell" data-label="Arabic">تـــاريخ 2</div>
<div class="cell" data-label="English">Date 2</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="date3">
<div class="cell" data-label="Property">date3</div>
<div class="cell" data-label="Column">date3</div>
<div class="cell" data-label="Arabic">تاريخ 3</div>
<div class="cell" data-label="English">Date3</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="date4">
<div class="cell" data-label="Property">date4</div>
<div class="cell" data-label="Column">date4</div>
<div class="cell" data-label="Arabic">تاريخ 4</div>
<div class="cell" data-label="English">Date4</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="date5">
<div class="cell" data-label="Property">date5</div>
<div class="cell" data-label="Column">date5</div>
<div class="cell" data-label="Arabic">تاريخ 5</div>
<div class="cell" data-label="English">Date5</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="datePattern">
<div class="cell" data-label="Property">datePattern</div>
<div class="cell" data-label="Column">datePattern</div>
<div class="cell" data-label="Arabic">Date Pattern</div>
<div class="cell" data-label="English">Date Pattern</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="deliveryServiceItem">
<div class="cell" data-label="Property">deliveryServiceItem</div>
<div class="cell" data-label="Column">deliveryServiceItem_id</div>
<div class="cell" data-label="Arabic">صنف خدمة الإستلام</div>
<div class="cell" data-label="English">Delivery Service Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/modules/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="department">
<div class="cell" data-label="Property">department</div>
<div class="cell" data-label="Column">department_id</div>
<div class="cell" data-label="Arabic">الإدارة</div>
<div class="cell" data-label="English">Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/modules/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="departmentId">
<div class="cell" data-label="Property">departmentId</div>
<div class="cell" data-label="Column">department_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="description1">
<div class="cell" data-label="Property">description1</div>
<div class="cell" data-label="Column">description1</div>
<div class="cell" data-label="Arabic">الوصف 1</div>
<div class="cell" data-label="English">description1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="description2">
<div class="cell" data-label="Property">description2</div>
<div class="cell" data-label="Column">description2</div>
<div class="cell" data-label="Arabic">الوصف 2</div>
<div class="cell" data-label="English">description2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="description3">
<div class="cell" data-label="Property">description3</div>
<div class="cell" data-label="Column">description3</div>
<div class="cell" data-label="Arabic">الوصف 3</div>
<div class="cell" data-label="English">description3</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="description4">
<div class="cell" data-label="Property">description4</div>
<div class="cell" data-label="Column">description4</div>
<div class="cell" data-label="Arabic">الوصف 4</div>
<div class="cell" data-label="English">description4</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="description5">
<div class="cell" data-label="Property">description5</div>
<div class="cell" data-label="Column">description5</div>
<div class="cell" data-label="Arabic">الوصف 5</div>
<div class="cell" data-label="English">description5</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="doNotUpdatePricesFromLists">
<div class="cell" data-label="Property">doNotUpdatePricesFromLists</div>
<div class="cell" data-label="Column">doNotUpdatePricesFromLists</div>
<div class="cell" data-label="Arabic">عدم تحديث أسعار الأوامر من قوائم الأسعار</div>
<div class="cell" data-label="English">Do Not Update Prices From Price Lists in Orders</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="docCategory">
<div class="cell" data-label="Property">docCategory</div>
<div class="cell" data-label="Column">docCategory_id</div>
<div class="cell" data-label="Arabic"> تصنيف سجل</div>
<div class="cell" data-label="English"> Record Category</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DocCategory](/modules/basic/DocCategory.md) 
</div>
</div>

<div class="row searchable" id="documentFileStatus">
<div class="cell" data-label="Property">documentFileStatus</div>
<div class="cell" data-label="Column">documentFileStatus</div>
<div class="cell" data-label="Arabic">حالة المستند</div>
<div class="cell" data-label="English">Document File Status</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="draftCreated">
<div class="cell" data-label="Property">draftCreated</div>
<div class="cell" data-label="Column">draftCreated</div>
<div class="cell" data-label="Arabic">تم إنشاء مسودة</div>
<div class="cell" data-label="English">Draft Created</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="draftXML">
<div class="cell" data-label="Property">draftXML</div>
<div class="cell" data-label="Column">draftXML</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="ecommerceGeneratedAppAccessToken">
<div class="cell" data-label="Property">ecommerceGeneratedAppAccessToken</div>
<div class="cell" data-label="Column">ecommerceGeneratedAppAccessToken</div>
<div class="cell" data-label="Arabic">Ecommerce Generated Application Access Token</div>
<div class="cell" data-label="English">Ecommerce Generated Application Access Token</div>
<div class="cell" data-label="Type">Password</div>

</div>

<div class="row searchable" id="ecommerceItemIdPath">
<div class="cell" data-label="Property">ecommerceItemIdPath</div>
<div class="cell" data-label="Column">ecommerceItemIdPath</div>
<div class="cell" data-label="Arabic">مسار حقل معرف الصنف</div>
<div class="cell" data-label="English">Ecommerce Item Id Path</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="editedBy">
<div class="cell" data-label="Property">editedBy</div>
<div class="cell" data-label="Column">editedBy_id</div>
<div class="cell" data-label="Arabic">بواسطة</div>
<div class="cell" data-label="English">Edited By</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [NaMaUser](/modules/system-tables/NaMaUser.md) 
</div>
</div>

<div class="row searchable" id="entitySystemEntryId">
<div class="cell" data-label="Property">entitySystemEntryId</div>
<div class="cell" data-label="Column">entitySystemEntry_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="entityType">
<div class="cell" data-label="Property">entityType</div>
<div class="cell" data-label="Column">entityType</div>
<div class="cell" data-label="Arabic">النوع</div>
<div class="cell" data-label="English">Entity Type</div>
<div class="cell" data-label="Type">EntityType</div>

</div>

<div class="row searchable" id="firstAppliedLine">
<div class="cell" data-label="Property">firstAppliedLine</div>
<div class="cell" data-label="Column">firstAppliedLine</div>
<div class="cell" data-label="Arabic">أول سطر مطابق</div>
<div class="cell" data-label="English">First Applied Line</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="firstAuthor">
<div class="cell" data-label="Property">firstAuthor</div>
<div class="cell" data-label="Column">firstAuthor_id</div>
<div class="cell" data-label="Arabic">منشئ السجل</div>
<div class="cell" data-label="English">First Author</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [NaMaUser](/modules/system-tables/NaMaUser.md) 
</div>
</div>

<div class="row searchable" id="firstAuthorId">
<div class="cell" data-label="Property">firstAuthorId</div>
<div class="cell" data-label="Column">firstAuthor_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="gatewayClientId">
<div class="cell" data-label="Property">gatewayClientId</div>
<div class="cell" data-label="Column">gatewayClientId</div>
<div class="cell" data-label="Arabic">Gateway Client ID</div>
<div class="cell" data-label="English">Gateway Client ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="gatewayClientSecret">
<div class="cell" data-label="Property">gatewayClientSecret</div>
<div class="cell" data-label="Column">gatewayClientSecret</div>
<div class="cell" data-label="Arabic">Gateway Client Secret</div>
<div class="cell" data-label="English">Gateway Client Secret</div>
<div class="cell" data-label="Type">Password</div>

</div>

<div class="row searchable" id="gatewayUrl">
<div class="cell" data-label="Property">gatewayUrl</div>
<div class="cell" data-label="Column">gatewayUrl</div>
<div class="cell" data-label="Arabic">Gateway URL (Server Url)</div>
<div class="cell" data-label="English">Gateway URL (Server Url)</div>
<div class="cell" data-label="Type">Link</div>

</div>

<div class="row searchable" id="generatedByLine">
<div class="cell" data-label="Property">generatedByLine</div>
<div class="cell" data-label="Column">generatedByLine</div>
<div class="cell" data-label="Arabic">كود سطر الإنشاء</div>
<div class="cell" data-label="English">generated By Line</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="generatedDocsCount">
<div class="cell" data-label="Property">generatedDocsCount</div>
<div class="cell" data-label="Column">generatedDocsCount</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="generatedFrom">
<div class="cell" data-label="Property">generatedFrom</div>
<div class="cell gen-ref-column" data-label="Column">generatedFromActualCode,  generatedFromCode,  generatedFromEntityType,  generatedFromId</div>
<div class="cell" data-label="Arabic">تم إنشاؤه من</div>
<div class="cell" data-label="English">Generated From</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="generationType">
<div class="cell" data-label="Property">generationType</div>
<div class="cell" data-label="Column">generationType</div>
<div class="cell" data-label="Arabic">نوع الإنشاء</div>
<div class="cell" data-label="English">Generation Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="giftWrappingServiceItem">
<div class="cell" data-label="Property">giftWrappingServiceItem</div>
<div class="cell" data-label="Column">giftWrappingServiceItem_id</div>
<div class="cell" data-label="Arabic">صنف خدمة تغليف</div>
<div class="cell" data-label="English">Gift Wrapping Service Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/modules/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="group">
<div class="cell" data-label="Property">group</div>
<div class="cell" data-label="Column">group_id</div>
<div class="cell" data-label="Arabic">المجموعة</div>
<div class="cell" data-label="English">Group</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MasterGroup](/modules/basic/MasterGroup.md) 
</div>
</div>

<div class="row searchable" id="hoursToCacheToken">
<div class="cell" data-label="Property">hoursToCacheToken</div>
<div class="cell" data-label="Column">hoursToCacheToken</div>
<div class="cell" data-label="Arabic">Hours To Cache Access Token</div>
<div class="cell" data-label="English">Hours To Cache Access Token</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="id">
<div class="cell" data-label="Property">id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="ignoreLinesWithParentProd">
<div class="cell" data-label="Property">ignoreLinesWithParentProd</div>
<div class="cell" data-label="Column">ignoreLinesWithParentProd</div>
<div class="cell" data-label="Arabic">تجاهل السطور الناتجة من خلال منتج أعلي</div>
<div class="cell" data-label="English">Ignore Lines With Parent Product</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="ignoreMatchedDocsCriteria">
<div class="cell" data-label="Property">ignoreMatchedDocsCriteria</div>
<div class="cell" data-label="Column">ignoreMatchedDocsCriteria_id</div>
<div class="cell" data-label="Arabic">تجاهل المبيعات المطابقة للمعايير</div>
<div class="cell" data-label="English">Ignore Matched Documents Criteria</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CriteriaDefinition](/modules/basic/CriteriaDefinition.md) 
</div>
</div>

<div class="row searchable" id="ignoreMatchedDocsQuery">
<div class="cell" data-label="Property">ignoreMatchedDocsQuery</div>
<div class="cell" data-label="Column">ignoreMatchedDocsQuery</div>
<div class="cell" data-label="Arabic">تجاهل المبيعات المطابقة للاستعلام</div>
<div class="cell" data-label="English">Ignore Matched Documents Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="inactive">
<div class="cell" data-label="Property">inactive</div>
<div class="cell" data-label="Column">inactive</div>
<div class="cell" data-label="Arabic"> غير نشط</div>
<div class="cell" data-label="English"> Inactive</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="indexInParent">
<div class="cell" data-label="Property">indexInParent</div>
<div class="cell" data-label="Column">indexInParent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="integratorName">
<div class="cell" data-label="Property">integratorName</div>
<div class="cell" data-label="Column">integratorName</div>
<div class="cell" data-label="Arabic">Integrator Name</div>
<div class="cell" data-label="English">Integrator Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="itemSendQuery">
<div class="cell" data-label="Property">itemSendQuery</div>
<div class="cell" data-label="Column">itemSendQuery</div>
<div class="cell" data-label="Arabic">استعلام إرسال الأصناف</div>
<div class="cell" data-label="English">Items Send Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="lastAccessTokenJSON">
<div class="cell" data-label="Property">lastAccessTokenJSON</div>
<div class="cell" data-label="Column">lastAccessTokenJSON</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="lastChangeVersion">
<div class="cell" data-label="Property">lastChangeVersion</div>
<div class="cell" data-label="Column">lastChangeVersion</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="lastModifyTransactionId">
<div class="cell" data-label="Property">lastModifyTransactionId</div>
<div class="cell" data-label="Column">LastModifyTransactionId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="lastUpdateDate">
<div class="cell" data-label="Property">lastUpdateDate</div>
<div class="cell" data-label="Column">lastUpdateDate</div>
<div class="cell" data-label="Arabic">تاريخ اخر تحديث</div>
<div class="cell" data-label="English">Last update Date</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="legalEntity">
<div class="cell" data-label="Property">legalEntity</div>
<div class="cell" data-label="Column">legalEntity_id</div>
<div class="cell" data-label="Arabic">الشركة</div>
<div class="cell" data-label="English">Legal Entity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [LegalEntity](/modules/basic/LegalEntity.md) 
</div>
</div>

<div class="row searchable" id="legalEntityId">
<div class="cell" data-label="Property">legalEntityId</div>
<div class="cell" data-label="Column">legalEntity_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="linkItems">
<div class="cell" data-label="Property">linkItems</div>
<div class="cell" data-label="Column">linkItems</div>
<div class="cell" data-label="Arabic">ربط الأصناف بهذا الموقع</div>
<div class="cell" data-label="English">Link Items To This Site</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="lockVersion">
<div class="cell" data-label="Property">lockVersion</div>
<div class="cell" data-label="Column">lockVersion</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="magInvoiceCreationCriteria">
<div class="cell" data-label="Property">magInvoiceCreationCriteria</div>
<div class="cell" data-label="Column">magInvoiceCreationCriteria_id</div>
<div class="cell" data-label="Arabic">معايير إنشاء فاتورة ماحنتو</div>
<div class="cell" data-label="English">Criteria For Magento Invoice Creation</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CriteriaDefinition](/modules/basic/CriteriaDefinition.md) 
</div>
</div>

<div class="row searchable" id="magInvoiceCreationQuery">
<div class="cell" data-label="Property">magInvoiceCreationQuery</div>
<div class="cell" data-label="Column">magInvoiceCreationQuery</div>
<div class="cell" data-label="Arabic">استعلام إنشاء فاتورة ماجنتو</div>
<div class="cell" data-label="English">Magento Invoice Creation Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="magShipCreationCriteria">
<div class="cell" data-label="Property">magShipCreationCriteria</div>
<div class="cell" data-label="Column">magShipCreationCriteria_id</div>
<div class="cell" data-label="Arabic">معايير إنشاء شحن فاتورة ماحنتو</div>
<div class="cell" data-label="English">Magento Invoice Shipping Creation Criteria</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CriteriaDefinition](/modules/basic/CriteriaDefinition.md) 
</div>
</div>

<div class="row searchable" id="magShipCreationQuery">
<div class="cell" data-label="Property">magShipCreationQuery</div>
<div class="cell" data-label="Column">magShipCreationQuery</div>
<div class="cell" data-label="Arabic">استعلام إنشاء شحن فاتورة ماحنتو</div>
<div class="cell" data-label="English">Magento Invoice Shipping Creation Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="magentoItemUnitType">
<div class="cell" data-label="Property">magentoItemUnitType</div>
<div class="cell" data-label="Column">magentoItemUnitType</div>
<div class="cell" data-label="Arabic">وحدة صنف الموقع</div>
<div class="cell" data-label="English">Magento Item UOM Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="magentoPriceType">
<div class="cell" data-label="Property">magentoPriceType</div>
<div class="cell" data-label="Column">magentoPriceType</div>
<div class="cell" data-label="Arabic">نوع السعر</div>
<div class="cell" data-label="English">Price Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="magentoQuantityType">
<div class="cell" data-label="Property">magentoQuantityType</div>
<div class="cell" data-label="Column">magentoQuantityType</div>
<div class="cell" data-label="Arabic">حساب الكمية المرسلة لماجنتو</div>
<div class="cell" data-label="English">Magento Sent Quantity</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="mainFile">
<div class="cell" data-label="Property">mainFile</div>
<div class="cell" data-label="Column">mainFile_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/modules/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="maxOrdersPerRead">
<div class="cell" data-label="Property">maxOrdersPerRead</div>
<div class="cell" data-label="Column">maxOrdersPerRead</div>
<div class="cell" data-label="Arabic">Max Orders Per Read</div>
<div class="cell" data-label="English">Max Orders Per Read</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="merchantId">
<div class="cell" data-label="Property">merchantId</div>
<div class="cell" data-label="Column">merchantId</div>
<div class="cell" data-label="Arabic">Merchant Id</div>
<div class="cell" data-label="English">Merchant Id</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="minQtyToSend">
<div class="cell" data-label="Property">minQtyToSend</div>
<div class="cell" data-label="Column">minQtyToSend</div>
<div class="cell" data-label="Arabic">اقل كمية للارسال(قيمة)</div>
<div class="cell" data-label="English">Minimum Quantity To Send(Value)</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="minQtyToSendPercent">
<div class="cell" data-label="Property">minQtyToSendPercent</div>
<div class="cell" data-label="Column">minQtyToSendPercent</div>
<div class="cell" data-label="Arabic">أقل كمية للإرسال(نسبة)</div>
<div class="cell" data-label="English">Minimum Quantity To Send(Percent)</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="mobileCorrectionQuery">
<div class="cell" data-label="Property">mobileCorrectionQuery</div>
<div class="cell" data-label="Column">mobileCorrectionQuery</div>
<div class="cell" data-label="Arabic">Mobile Correction Query</div>
<div class="cell" data-label="English">Mobile Correction Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="modifiedQuantityQuery">
<div class="cell" data-label="Property">modifiedQuantityQuery</div>
<div class="cell" data-label="Column">modifiedQuantityQuery</div>
<div class="cell" data-label="Arabic">استعلام تصحيح الكمية (تضاف إلي الكمية المحسوبة)</div>
<div class="cell" data-label="English">Modified Quantity Query(Added To Calculated Quantity)</div>
<div class="cell" data-label="Type">BigText</div>

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

<div class="row searchable" id="n4">
<div class="cell" data-label="Property">n4</div>
<div class="cell" data-label="Column">n4</div>
<div class="cell" data-label="Arabic">رقم 4</div>
<div class="cell" data-label="English">Number 4</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="n5">
<div class="cell" data-label="Property">n5</div>
<div class="cell" data-label="Column">n5</div>
<div class="cell" data-label="Arabic">رقم 5</div>
<div class="cell" data-label="English">Number 5</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="name1">
<div class="cell" data-label="Property">name1</div>
<div class="cell" data-label="Column">name1</div>
<div class="cell" data-label="Arabic">الاسم العربي</div>
<div class="cell" data-label="English">Name1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="name2">
<div class="cell" data-label="Property">name2</div>
<div class="cell" data-label="Column">name2</div>
<div class="cell" data-label="Arabic">الاسم الإنجليزي</div>
<div class="cell" data-label="English">Name2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="noErrorIfNoItemMatchesSKU">
<div class="cell" data-label="Property">noErrorIfNoItemMatchesSKU</div>
<div class="cell" data-label="Column">noErrorIfNoItemMatchesSKU</div>
<div class="cell" data-label="Arabic">Ignore Error If No Item Matches SKU</div>
<div class="cell" data-label="English">Ignore Error If No Item Matches SKU</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="orderComparedStatuses">
<div class="cell" data-label="Property">orderComparedStatuses</div>
<div class="cell" data-label="Column">orderComparedStatuses</div>
<div class="cell" data-label="Arabic">نقل فقط الأوامر التي حالتها احدي التالي</div>
<div class="cell" data-label="English">Only Transfer Orders With Status Equal to One of The Following</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="orderErrorNotification">
<div class="cell" data-label="Property">orderErrorNotification</div>
<div class="cell" data-label="Column">orderErrorNotification_id</div>
<div class="cell" data-label="Arabic">تنبيه حدوث خطأ عند قراءة أمر</div>
<div class="cell" data-label="English">Order Read Error Notification</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [NotificationDefinition](/modules/basic/NotificationDefinition.md) 
</div>
</div>

<div class="row searchable" id="orderInfo.book">
<div class="cell" data-label="Property">orderInfo.book</div>
<div class="cell" data-label="Column">orderInfoBook_id</div>
<div class="cell" data-label="Arabic">الدفتر</div>
<div class="cell" data-label="English">Book</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DocumentBook](/modules/basic/DocumentBook.md) 
</div>
</div>

<div class="row searchable" id="orderInfo.fromDiscount1">
<div class="cell" data-label="Property">orderInfo.fromDiscount1</div>
<div class="cell" data-label="Column">orderInfoFromDiscount1</div>
<div class="cell" data-label="Arabic">مصدر خصم 1</div>
<div class="cell" data-label="English">From Discount1</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="orderInfo.fromDiscount2">
<div class="cell" data-label="Property">orderInfo.fromDiscount2</div>
<div class="cell" data-label="Column">orderInfoFromDiscount2</div>
<div class="cell" data-label="Arabic">مصدر خصم 2</div>
<div class="cell" data-label="English">From Discount2</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="orderInfo.fromDiscount3">
<div class="cell" data-label="Property">orderInfo.fromDiscount3</div>
<div class="cell" data-label="Column">orderInfoFromDiscount3</div>
<div class="cell" data-label="Arabic">مصدر خصم 3</div>
<div class="cell" data-label="English">From Discount3</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="orderInfo.fromDiscount4">
<div class="cell" data-label="Property">orderInfo.fromDiscount4</div>
<div class="cell" data-label="Column">orderInfoFromDiscount4</div>
<div class="cell" data-label="Arabic">مصدر خصم 4</div>
<div class="cell" data-label="English">From Discount4</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="orderInfo.headerFieldsMap">
<div class="cell" data-label="Property">orderInfo.headerFieldsMap</div>
<div class="cell" data-label="Column">orderInfoHeaderFieldsMap</div>
<div class="cell" data-label="Arabic">Header Fields Map</div>
<div class="cell" data-label="English">Header Fields Map</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="orderInfo.importAs">
<div class="cell" data-label="Property">orderInfo.importAs</div>
<div class="cell" data-label="Column">orderInfoImportAs</div>
<div class="cell" data-label="Arabic">استيراد كـ</div>
<div class="cell" data-label="English">Import As</div>
<div class="cell" data-label="Type">EntityType</div>

</div>

<div class="row searchable" id="orderInfo.lineFieldsMap">
<div class="cell" data-label="Property">orderInfo.lineFieldsMap</div>
<div class="cell" data-label="Column">orderInfoLineFieldsMap</div>
<div class="cell" data-label="Arabic">Line Fields Map</div>
<div class="cell" data-label="English">Line Fields Map</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="orderInfo.term">
<div class="cell" data-label="Property">orderInfo.term</div>
<div class="cell" data-label="Column">orderInfoTerm_id</div>
<div class="cell" data-label="Arabic">توجيه المستند</div>
<div class="cell" data-label="English">Term</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DocumentTerm](/modules/basic/DocumentTerm.md) 
</div>
</div>

<div class="row searchable" id="orderInfo.toDiscount">
<div class="cell" data-label="Property">orderInfo.toDiscount</div>
<div class="cell" data-label="Column">orderInfoToDiscount</div>
<div class="cell" data-label="Arabic">الفرق إلى خصم</div>
<div class="cell" data-label="English">To Discount</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="originalPriceSource">
<div class="cell" data-label="Property">originalPriceSource</div>
<div class="cell" data-label="Column">originalPriceSource</div>
<div class="cell" data-label="Arabic">مصدر السعر الاساسى</div>
<div class="cell" data-label="English">Original Price Source</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="parentCode">
<div class="cell" data-label="Property">parentCode</div>
<div class="cell" data-label="Column">parentCode</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="password">
<div class="cell" data-label="Property">password</div>
<div class="cell" data-label="Column">password</div>
<div class="cell" data-label="Arabic">كلمة المرور (Consumer Secret)</div>
<div class="cell" data-label="English">Password (Consumer Secret)</div>
<div class="cell" data-label="Type">Password</div>

</div>

<div class="row searchable" id="paymentMethodCalcType">
<div class="cell" data-label="Property">paymentMethodCalcType</div>
<div class="cell" data-label="Column">paymentMethodCalcType</div>
<div class="cell" data-label="Arabic">طريقة حساب طرق الدفع بماجنتو</div>
<div class="cell" data-label="English">Payment Method Calculate Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="paymentMethodNameFieldId">
<div class="cell" data-label="Property">paymentMethodNameFieldId</div>
<div class="cell" data-label="Column">paymentMethodNameFieldId</div>
<div class="cell" data-label="Arabic">Payment Method Name Field ID</div>
<div class="cell" data-label="English">Payment Method Name Field ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="paymentMethodTypeFieldId">
<div class="cell" data-label="Property">paymentMethodTypeFieldId</div>
<div class="cell" data-label="Column">paymentMethodTypeFieldId</div>
<div class="cell" data-label="Arabic">Payment Method Name Type ID</div>
<div class="cell" data-label="English">Payment Method Name Type ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="posRegister">
<div class="cell" data-label="Property">posRegister</div>
<div class="cell gen-ref-column" data-label="Column">posRegisterActualCode,  posRegisterCode,  posRegisterEntityType,  posRegisterId</div>
<div class="cell" data-label="Arabic">POS Register</div>
<div class="cell" data-label="English">POS Register</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="preventUsage">
<div class="cell" data-label="Property">preventUsage</div>
<div class="cell" data-label="Column">preventUsage</div>
<div class="cell" data-label="Arabic">منع الاستعمال</div>
<div class="cell" data-label="English">Prevent Usage</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="printCount">
<div class="cell" data-label="Property">printCount</div>
<div class="cell" data-label="Column">printCount</div>
<div class="cell" data-label="Arabic">عدد مرات الطباعة</div>
<div class="cell" data-label="English">Print Count</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="pseudoInvoiceFieldsMapForCalculatingPrice">
<div class="cell" data-label="Property">pseudoInvoiceFieldsMapForCalculatingPrice</div>
<div class="cell" data-label="Column">pseudoInvoiceFieldsMapForCalculatingPrice</div>
<div class="cell" data-label="Arabic">Pseudo Invoice Fields Map</div>
<div class="cell" data-label="English">Pseudo Invoice Fields Map</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="pullWebhookEventsFromGateway">
<div class="cell" data-label="Property">pullWebhookEventsFromGateway</div>
<div class="cell" data-label="Column">pullWebhookEventsFromGateway</div>
<div class="cell" data-label="Arabic">Pull Webhook Events From Gateway</div>
<div class="cell" data-label="English">Pull Webhook Events From Gateway</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="putCouponDiscountTo">
<div class="cell" data-label="Property">putCouponDiscountTo</div>
<div class="cell" data-label="Column">putCouponDiscountTo</div>
<div class="cell" data-label="Arabic">وضع خصم الكوبون إلي خصم (نسبة)</div>
<div class="cell" data-label="English">Put Coupon Discount To (Percent)</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="putHeaderDiscountInLineDiscount">
<div class="cell" data-label="Property">putHeaderDiscountInLineDiscount</div>
<div class="cell" data-label="Column">putHeaderDiscountInLineDiscount</div>
<div class="cell" data-label="Arabic">نقل خصم الهيدر الي خصم السطور</div>
<div class="cell" data-label="English">Put Header Discount In Line Discount</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="putLinesDiscount2To">
<div class="cell" data-label="Property">putLinesDiscount2To</div>
<div class="cell" data-label="Column">putLinesDiscount2To</div>
<div class="cell" data-label="Arabic">وضع خصم السطور 2 إلي (نسبة)</div>
<div class="cell" data-label="English">Put Lines Discount 2 To (Percent)</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="putLinesDiscountTo">
<div class="cell" data-label="Property">putLinesDiscountTo</div>
<div class="cell" data-label="Column">putLinesDiscountTo</div>
<div class="cell" data-label="Arabic">وضع خصم السطور إلي (نسبة)</div>
<div class="cell" data-label="English">Put Lines Discount To (Percent)</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="putSKUInOrderDetailsItemCode">
<div class="cell" data-label="Property">putSKUInOrderDetailsItemCode</div>
<div class="cell" data-label="Column">putSKUInOrderDetailsItemCode</div>
<div class="cell" data-label="Arabic">Put SKU In Order Details Item Code</div>
<div class="cell" data-label="English">Put SKU In Order Details Item Code</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="quantityToSendType">
<div class="cell" data-label="Property">quantityToSendType</div>
<div class="cell" data-label="Column">quantityToSendType</div>
<div class="cell" data-label="Arabic">إرسال الكمية ب (عندما تكون اقل من  اقل كمية للإرسال او تساويها)</div>
<div class="cell" data-label="English">Send Quantity (If Quantity is less than minimum quantity to send)</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="readItemSpecsWithOrder">
<div class="cell" data-label="Property">readItemSpecsWithOrder</div>
<div class="cell" data-label="Column">readItemSpecsWithOrder</div>
<div class="cell" data-label="Arabic">قراءة مواصفات الصنف مع قراءة الأمر</div>
<div class="cell" data-label="English">Read Item Specifications With Order</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="readOrdersFromDate">
<div class="cell" data-label="Property">readOrdersFromDate</div>
<div class="cell" data-label="Column">readOrdersFromDate</div>
<div class="cell" data-label="Arabic">قراءة المبيعات من تاريخ</div>
<div class="cell" data-label="English">Read Orders From Date</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="readOrdersStatusesAsReturn">
<div class="cell" data-label="Property">readOrdersStatusesAsReturn</div>
<div class="cell" data-label="Column">readOrdersStatusesAsReturn</div>
<div class="cell" data-label="Arabic">قراءة الأوامر كمرتجع إذا كانت إحدى الحالات الأتية</div>
<div class="cell" data-label="English">Read Orders As Sales Return If Status Like One Of The Following</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="redirectUrl">
<div class="cell" data-label="Property">redirectUrl</div>
<div class="cell" data-label="Column">redirectUrl</div>
<div class="cell" data-label="Arabic">Redirect URL</div>
<div class="cell" data-label="English">Redirect URL</div>
<div class="cell" data-label="Type">Text</div>

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

<div class="row searchable" id="ref5">
<div class="cell" data-label="Property">ref5</div>
<div class="cell gen-ref-column" data-label="Column">ref5ActualCode,  ref5Code,  ref5EntityType,  ref5Id</div>
<div class="cell" data-label="Arabic">مرجع 5</div>
<div class="cell" data-label="English">Reference 5</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="refreshToken">
<div class="cell" data-label="Property">refreshToken</div>
<div class="cell" data-label="Column">refreshToken</div>
<div class="cell" data-label="Arabic">Refresh Token</div>
<div class="cell" data-label="English">Refresh Token</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="remarks">
<div class="cell" data-label="Property">remarks</div>
<div class="cell" data-label="Column">remark</div>
<div class="cell" data-label="Arabic">ملاحظات</div>
<div class="cell" data-label="English">Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="requestInfo.book">
<div class="cell" data-label="Property">requestInfo.book</div>
<div class="cell" data-label="Column">requestInfoBook_id</div>
<div class="cell" data-label="Arabic">الدفتر</div>
<div class="cell" data-label="English">Book</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DocumentBook](/modules/basic/DocumentBook.md) 
</div>
</div>

<div class="row searchable" id="requestInfo.fromDiscount1">
<div class="cell" data-label="Property">requestInfo.fromDiscount1</div>
<div class="cell" data-label="Column">requestInfoFromDiscount1</div>
<div class="cell" data-label="Arabic">مصدر خصم 1</div>
<div class="cell" data-label="English">From Discount1</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="requestInfo.fromDiscount2">
<div class="cell" data-label="Property">requestInfo.fromDiscount2</div>
<div class="cell" data-label="Column">requestInfoFromDiscount2</div>
<div class="cell" data-label="Arabic">مصدر خصم 2</div>
<div class="cell" data-label="English">From Discount2</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="requestInfo.fromDiscount3">
<div class="cell" data-label="Property">requestInfo.fromDiscount3</div>
<div class="cell" data-label="Column">requestInfoFromDiscount3</div>
<div class="cell" data-label="Arabic">مصدر خصم 3</div>
<div class="cell" data-label="English">From Discount3</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="requestInfo.fromDiscount4">
<div class="cell" data-label="Property">requestInfo.fromDiscount4</div>
<div class="cell" data-label="Column">requestInfoFromDiscount4</div>
<div class="cell" data-label="Arabic">مصدر خصم 4</div>
<div class="cell" data-label="English">From Discount4</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="requestInfo.headerFieldsMap">
<div class="cell" data-label="Property">requestInfo.headerFieldsMap</div>
<div class="cell" data-label="Column">requestInfoHeaderFieldsMap</div>
<div class="cell" data-label="Arabic">Header Fields Map</div>
<div class="cell" data-label="English">Header Fields Map</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="requestInfo.importAs">
<div class="cell" data-label="Property">requestInfo.importAs</div>
<div class="cell" data-label="Column">requestInfoImportAs</div>
<div class="cell" data-label="Arabic">استيراد كـ</div>
<div class="cell" data-label="English">Import As</div>
<div class="cell" data-label="Type">EntityType</div>

</div>

<div class="row searchable" id="requestInfo.lineFieldsMap">
<div class="cell" data-label="Property">requestInfo.lineFieldsMap</div>
<div class="cell" data-label="Column">requestInfoLineFieldsMap</div>
<div class="cell" data-label="Arabic">Line Fields Map</div>
<div class="cell" data-label="English">Line Fields Map</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="requestInfo.term">
<div class="cell" data-label="Property">requestInfo.term</div>
<div class="cell" data-label="Column">requestInfoTerm_id</div>
<div class="cell" data-label="Arabic">توجيه المستند</div>
<div class="cell" data-label="English">Term</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DocumentTerm](/modules/basic/DocumentTerm.md) 
</div>
</div>

<div class="row searchable" id="requestInfo.toDiscount">
<div class="cell" data-label="Property">requestInfo.toDiscount</div>
<div class="cell" data-label="Column">requestInfoToDiscount</div>
<div class="cell" data-label="Arabic">الفرق إلى خصم</div>
<div class="cell" data-label="English">To Discount</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="resetOrderLinkTempo">
<div class="cell" data-label="Property">resetOrderLinkTempo</div>
<div class="cell" data-label="Column">resetOrderLinkTempo</div>
<div class="cell" data-label="Arabic">Reset Order Link Template</div>
<div class="cell" data-label="English">Reset Order Link Template</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="returnInfo.book">
<div class="cell" data-label="Property">returnInfo.book</div>
<div class="cell" data-label="Column">returnInfoBook_id</div>
<div class="cell" data-label="Arabic">الدفتر</div>
<div class="cell" data-label="English">Book</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DocumentBook](/modules/basic/DocumentBook.md) 
</div>
</div>

<div class="row searchable" id="returnInfo.fromDiscount1">
<div class="cell" data-label="Property">returnInfo.fromDiscount1</div>
<div class="cell" data-label="Column">returnInfoFromDiscount1</div>
<div class="cell" data-label="Arabic">مصدر خصم 1</div>
<div class="cell" data-label="English">From Discount1</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="returnInfo.fromDiscount2">
<div class="cell" data-label="Property">returnInfo.fromDiscount2</div>
<div class="cell" data-label="Column">returnInfoFromDiscount2</div>
<div class="cell" data-label="Arabic">مصدر خصم 2</div>
<div class="cell" data-label="English">From Discount2</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="returnInfo.fromDiscount3">
<div class="cell" data-label="Property">returnInfo.fromDiscount3</div>
<div class="cell" data-label="Column">returnInfoFromDiscount3</div>
<div class="cell" data-label="Arabic">مصدر خصم 3</div>
<div class="cell" data-label="English">From Discount3</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="returnInfo.fromDiscount4">
<div class="cell" data-label="Property">returnInfo.fromDiscount4</div>
<div class="cell" data-label="Column">returnInfoFromDiscount4</div>
<div class="cell" data-label="Arabic">مصدر خصم 4</div>
<div class="cell" data-label="English">From Discount4</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="returnInfo.headerFieldsMap">
<div class="cell" data-label="Property">returnInfo.headerFieldsMap</div>
<div class="cell" data-label="Column">returnInfoHeaderFieldsMap</div>
<div class="cell" data-label="Arabic">Header Fields Map</div>
<div class="cell" data-label="English">Header Fields Map</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="returnInfo.importAs">
<div class="cell" data-label="Property">returnInfo.importAs</div>
<div class="cell" data-label="Column">returnInfoImportAs</div>
<div class="cell" data-label="Arabic">استيراد كـ</div>
<div class="cell" data-label="English">Import As</div>
<div class="cell" data-label="Type">EntityType</div>

</div>

<div class="row searchable" id="returnInfo.lineFieldsMap">
<div class="cell" data-label="Property">returnInfo.lineFieldsMap</div>
<div class="cell" data-label="Column">returnInfoLineFieldsMap</div>
<div class="cell" data-label="Arabic">Line Fields Map</div>
<div class="cell" data-label="English">Line Fields Map</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="returnInfo.term">
<div class="cell" data-label="Property">returnInfo.term</div>
<div class="cell" data-label="Column">returnInfoTerm_id</div>
<div class="cell" data-label="Arabic">توجيه المستند</div>
<div class="cell" data-label="English">Term</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DocumentTerm](/modules/basic/DocumentTerm.md) 
</div>
</div>

<div class="row searchable" id="returnInfo.toDiscount">
<div class="cell" data-label="Property">returnInfo.toDiscount</div>
<div class="cell" data-label="Column">returnInfoToDiscount</div>
<div class="cell" data-label="Arabic">الفرق إلى خصم</div>
<div class="cell" data-label="English">To Discount</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="reviseLevel">
<div class="cell" data-label="Property">reviseLevel</div>
<div class="cell" data-label="Column">reviseLevel</div>
<div class="cell" data-label="Arabic">مستوى المراجعة</div>
<div class="cell" data-label="English">Revise Level</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="revised">
<div class="cell" data-label="Property">revised</div>
<div class="cell" data-label="Column">primitiveValue</div>
<div class="cell" data-label="Arabic">تمت المراجعة</div>
<div class="cell" data-label="English">Revised</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="revisedBy">
<div class="cell" data-label="Property">revisedBy</div>
<div class="cell" data-label="Column">revisedBy_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [NaMaUser](/modules/system-tables/NaMaUser.md) 
</div>
</div>

<div class="row searchable" id="revisionMetaDataKey">
<div class="cell" data-label="Property">revisionMetaDataKey</div>
<div class="cell" data-label="Column">revisionMetaDataKey</div>
<div class="cell" data-label="Arabic">Revision Meta Data Key</div>
<div class="cell" data-label="English">Revision Meta Data Key</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="saveOrderAsDraft">
<div class="cell" data-label="Property">saveOrderAsDraft</div>
<div class="cell" data-label="Column">saveOrderAsDraft</div>
<div class="cell" data-label="Arabic">حفظ الأمر كمسودة</div>
<div class="cell" data-label="English">Save Order As Draft</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="saveOrderAsUser">
<div class="cell" data-label="Property">saveOrderAsUser</div>
<div class="cell" data-label="Column">saveOrderAsUser_id</div>
<div class="cell" data-label="Arabic">حفظ الأوامر كمستخدم</div>
<div class="cell" data-label="English">Save Order As User</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [NaMaUser](/modules/system-tables/NaMaUser.md) 
</div>
</div>

<div class="row searchable" id="saveOrdersAsDraftIfErrorOccurs">
<div class="cell" data-label="Property">saveOrdersAsDraftIfErrorOccurs</div>
<div class="cell" data-label="Column">saveOrdersAsDraftIfErrorOccurs</div>
<div class="cell" data-label="Arabic">حفظ الأوامر كمسودة في حالة حدوث أخطاء</div>
<div class="cell" data-label="English">Save Orders As Draft If Errors Occurs</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="searchCustomerByMobileOnly">
<div class="cell" data-label="Property">searchCustomerByMobileOnly</div>
<div class="cell" data-label="Column">searchCustomerByMobileOnly</div>
<div class="cell" data-label="Arabic">البحث عن العميل برقم التليفون فقط</div>
<div class="cell" data-label="English">Search For Customer Using Mobile Only</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="sector">
<div class="cell" data-label="Property">sector</div>
<div class="cell" data-label="Column">sector_id</div>
<div class="cell" data-label="Arabic">القطاع</div>
<div class="cell" data-label="English">Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/modules/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="sectorId">
<div class="cell" data-label="Property">sectorId</div>
<div class="cell" data-label="Column">sector_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="sellerNameZATCA">
<div class="cell" data-label="Property">sellerNameZATCA</div>
<div class="cell" data-label="Column">sellerNameZATCA</div>
<div class="cell" data-label="Arabic">Seller Name (ZATCA)</div>
<div class="cell" data-label="English">Seller Name (ZATCA)</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="sendItemWhenNewOnly">
<div class="cell" data-label="Property">sendItemWhenNewOnly</div>
<div class="cell" data-label="Column">sendItemWhenNewOnly</div>
<div class="cell" data-label="Arabic">إرسال الصنف عندما يكون حديثا فقط</div>
<div class="cell" data-label="English">Send Item When New Only</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="sendItemsToMagento">
<div class="cell" data-label="Property">sendItemsToMagento</div>
<div class="cell" data-label="Column">sendItemsToMagento</div>
<div class="cell" data-label="Arabic">إرسال الأصناف إلي ماجنتو</div>
<div class="cell" data-label="English">Send Items To Magento</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="sentQtyRoundingType">
<div class="cell" data-label="Property">sentQtyRoundingType</div>
<div class="cell" data-label="Column">sentQtyRoundingType</div>
<div class="cell" data-label="Arabic">تقريب الكمية المٌرسلة</div>
<div class="cell" data-label="English">Sent Quantity Rounding Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="sentQtyScale">
<div class="cell" data-label="Property">sentQtyScale</div>
<div class="cell" data-label="Column">sentQtyScale</div>
<div class="cell" data-label="Arabic">عدد كسور الكمية المٌرسلة</div>
<div class="cell" data-label="English">Send Quantity Scale</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="serviceItemsPriceFromNama">
<div class="cell" data-label="Property">serviceItemsPriceFromNama</div>
<div class="cell" data-label="Column">serviceItemsPriceFromNama</div>
<div class="cell" data-label="Arabic">حساب أسعار أصناف الخدمة من قوائم الأسعار</div>
<div class="cell" data-label="English">Calculate Service Items Price From Sales Price Lists</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="shipmentServiceItem">
<div class="cell" data-label="Property">shipmentServiceItem</div>
<div class="cell" data-label="Column">shipmentServiceItem_id</div>
<div class="cell" data-label="Arabic">صنف خدمة الشحن</div>
<div class="cell" data-label="English">Shipment Service Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/modules/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="siteType">
<div class="cell" data-label="Property">siteType</div>
<div class="cell" data-label="Column">siteType</div>
<div class="cell" data-label="Arabic">Site Type</div>
<div class="cell" data-label="English">Site Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="sizeMetaDataKey">
<div class="cell" data-label="Property">sizeMetaDataKey</div>
<div class="cell" data-label="Column">sizeMetaDataKey</div>
<div class="cell" data-label="Arabic">Size Meta Data Key</div>
<div class="cell" data-label="English">Size Meta Data Key</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="specDimsFromLinkerNotMeta">
<div class="cell" data-label="Property">specDimsFromLinkerNotMeta</div>
<div class="cell" data-label="Column">specDimsFromLinkerNotMeta</div>
<div class="cell" data-label="Arabic">تفضيل المواصفات الخاصة بالصنف من ملف الربط عن القادمة من الموقع</div>
<div class="cell" data-label="English">Prefer Specific Dimensions From Linker Than Metadata</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="specialPriceSource">
<div class="cell" data-label="Property">specialPriceSource</div>
<div class="cell" data-label="Column">specialPriceSource</div>
<div class="cell" data-label="Arabic">مصدر السعر الخاص</div>
<div class="cell" data-label="English">Special Price Source</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="syncSysFields">
<div class="cell" data-label="Property">syncSysFields</div>
<div class="cell" data-label="Column">syncSysFields_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type"></div>
<div class="cell" data-label="Foreign Table">

 [MagentoSyncSystemFields](/modules/system-tables/MagentoSyncSystemFields.md) 
</div>
</div>

<div class="row searchable" id="systemGeneratedCodePrefix">
<div class="cell" data-label="Property">systemGeneratedCodePrefix</div>
<div class="cell" data-label="Column">systemGeneratedCodePrefix</div>
<div class="cell" data-label="Arabic">System Generated Code Prefix</div>
<div class="cell" data-label="English">System Generated Code Prefix</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="updateCapability">
<div class="cell" data-label="Property">updateCapability</div>
<div class="cell" data-label="Column">updateCapability_id</div>
<div class="cell" data-label="Arabic">صلاحية التعديل</div>
<div class="cell" data-label="English">Update Capability</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SecurityCapability](/modules/basic/SecurityCapability.md) 
</div>
</div>

<div class="row searchable" id="updateCapabilityId">
<div class="cell" data-label="Property">updateCapabilityId</div>
<div class="cell" data-label="Column">updateCapability_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="updateCustomerIfExist">
<div class="cell" data-label="Property">updateCustomerIfExist</div>
<div class="cell" data-label="Column">updateCustomerIfExist</div>
<div class="cell" data-label="Arabic">تحديث بيانات العميل في حالة وجوده</div>
<div class="cell" data-label="English">Update Customer If Found</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="updateEcommerceItemThroughTranslationIds">
<div class="cell" data-label="Property">updateEcommerceItemThroughTranslationIds</div>
<div class="cell" data-label="Column">updateEcommerceItemThroughTranslationIds</div>
<div class="cell" data-label="Arabic">تحديث بيانات الصنف من خلال المعرفات الموجودة بالترجمات</div>
<div class="cell" data-label="English">Update Ecommerce Item Through Translation Ids</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="updateOrderIfFoundInNama">
<div class="cell" data-label="Property">updateOrderIfFoundInNama</div>
<div class="cell" data-label="Column">updateOrderIfFoundInNama</div>
<div class="cell" data-label="Arabic">تحديث مستند المبيعات حتي و ان كان تم قراءته سابقا</div>
<div class="cell" data-label="English">Update Sales Document Even If It was Read Before</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="updateProductBody">
<div class="cell" data-label="Property">updateProductBody</div>
<div class="cell" data-label="Column">updateProductBody</div>
<div class="cell" data-label="Arabic">Update Product Body</div>
<div class="cell" data-label="English">Update Product Body</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="updateProductEndpoint">
<div class="cell" data-label="Property">updateProductEndpoint</div>
<div class="cell" data-label="Column">updateProductEndpoint</div>
<div class="cell" data-label="Arabic">Update Product Endpoint</div>
<div class="cell" data-label="English">Update Product Endpoint</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="updateQuantityPerWarehouse">
<div class="cell" data-label="Property">updateQuantityPerWarehouse</div>
<div class="cell" data-label="Column">updateQuantityPerWarehouse</div>
<div class="cell" data-label="Arabic">تحديث الكميات لكل مخزن</div>
<div class="cell" data-label="English">Update Quantity Per Warehouse</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="url">
<div class="cell" data-label="Property">url</div>
<div class="cell" data-label="Column">url</div>
<div class="cell" data-label="Arabic">رابط</div>
<div class="cell" data-label="English">URL</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="usageCapability">
<div class="cell" data-label="Property">usageCapability</div>
<div class="cell" data-label="Column">usageCapability_id</div>
<div class="cell" data-label="Arabic">صلاحية الاستخدام</div>
<div class="cell" data-label="English">Usage Capability</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SecurityCapability](/modules/basic/SecurityCapability.md) 
</div>
</div>

<div class="row searchable" id="usageCapabilityId">
<div class="cell" data-label="Property">usageCapabilityId</div>
<div class="cell" data-label="Column">usageCapability_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="useGraphQL">
<div class="cell" data-label="Property">useGraphQL</div>
<div class="cell" data-label="Column">useGraphQL</div>
<div class="cell" data-label="Arabic">Use GraphQL Api</div>
<div class="cell" data-label="English">Use GraphQL Api</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="useQtyCalcQuery">
<div class="cell" data-label="Property">useQtyCalcQuery</div>
<div class="cell" data-label="Column">useQtyCalcQuery</div>
<div class="cell" data-label="Arabic">استخدام استعلام احتساب الكمية</div>
<div class="cell" data-label="English">Use Quantity Calculation Query</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="username">
<div class="cell" data-label="Property">username</div>
<div class="cell" data-label="Column">username</div>
<div class="cell" data-label="Arabic">إسم المستخدم (Consumer Key)</div>
<div class="cell" data-label="English">User Name (Consumer Key)</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="validatePaymentTransactions">
<div class="cell" data-label="Property">validatePaymentTransactions</div>
<div class="cell" data-label="Column">validatePaymentTransactions</div>
<div class="cell" data-label="Arabic">Validate Order Payment Transactions</div>
<div class="cell" data-label="English">Validate Order Payment Transactions</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="vatNumberZATCA">
<div class="cell" data-label="Property">vatNumberZATCA</div>
<div class="cell" data-label="Column">vatNumberZATCA</div>
<div class="cell" data-label="Arabic">Vat Number (ZATCA)</div>
<div class="cell" data-label="English">Vat Number (ZATCA)</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="viewCapability">
<div class="cell" data-label="Property">viewCapability</div>
<div class="cell" data-label="Column">viewCapability_id</div>
<div class="cell" data-label="Arabic">صلاحية المطالعة</div>
<div class="cell" data-label="English">View Capability</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SecurityCapability](/modules/basic/SecurityCapability.md) 
</div>
</div>

<div class="row searchable" id="viewCapabilityId">
<div class="cell" data-label="Property">viewCapabilityId</div>
<div class="cell" data-label="Column">viewCapability_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="visaPaymentMethod">
<div class="cell" data-label="Property">visaPaymentMethod</div>
<div class="cell" data-label="Column">visaPaymentMethod_id</div>
<div class="cell" data-label="Arabic">طريقة الدفع بالفيزا</div>
<div class="cell" data-label="English">Visa Payment Method</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [PaymentMethod](/modules/basic/PaymentMethod.md) 
</div>
</div>

<div class="row searchable" id="warehouseQuantitiesField">
<div class="cell" data-label="Property">warehouseQuantitiesField</div>
<div class="cell" data-label="Column">warehouseQuantitiesField</div>
<div class="cell" data-label="Arabic">Warehouse Quantities Field</div>
<div class="cell" data-label="English">Warehouse Quantities Field</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="webhookSecret">
<div class="cell" data-label="Property">webhookSecret</div>
<div class="cell" data-label="Column">webhookSecret</div>
<div class="cell" data-label="Arabic">Webhook Secret Header</div>
<div class="cell" data-label="English">Webhook Secret Header</div>
<div class="cell" data-label="Type">Password</div>

</div>

<div class="row searchable" id="webhookUrl">
<div class="cell" data-label="Property">webhookUrl</div>
<div class="cell" data-label="Column">webhookUrl</div>
<div class="cell" data-label="Arabic">Webhook URL</div>
<div class="cell" data-label="English">Webhook URL</div>
<div class="cell" data-label="Type">Link</div>

</div>

<div class="row searchable" id="zidManagerToken">
<div class="cell" data-label="Property">zidManagerToken</div>
<div class="cell" data-label="Column">zidManagerToken</div>
<div class="cell" data-label="Arabic">كلمة مرور التطبيق الإلكتروني</div>
<div class="cell" data-label="English">Ecommerce App Token</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="zidStoreId">
<div class="cell" data-label="Property">zidStoreId</div>
<div class="cell" data-label="Column">zidStoreId</div>
<div class="cell" data-label="Arabic">معرف المخزن الإلكتروني</div>
<div class="cell" data-label="English">Ecommerce Store ID</div>
<div class="cell" data-label="Type">Integer</div>

</div>


</div>
</div>

<div id='copyToEcommerceItemLines' title='copyToEcommerceItemLines' class='searchable'>

## copyToEcommerceItemLines (نسخ حقول المنتج من النظام الي المتجر الالكتروني - Copy Fields Value From The System To Ecommerce Site)
**Table Name:** MagCopyToEcommerceItemLine, **Join Column:** mAGMagentoSite_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="copyToEcommerceItemLines.groovyScript">
<div class="cell" data-label="Property">copyToEcommerceItemLines.groovyScript</div>
<div class="cell" data-label="Column">groovyScript</div>
<div class="cell" data-label="Arabic">Groovy Script</div>
<div class="cell" data-label="English">Groovy Script</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="copyToEcommerceItemLines.id">
<div class="cell" data-label="Property">copyToEcommerceItemLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="copyToEcommerceItemLines.lineNumber">
<div class="cell" data-label="Property">copyToEcommerceItemLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="copyToEcommerceItemLines.productFieldName">
<div class="cell" data-label="Property">copyToEcommerceItemLines.productFieldName</div>
<div class="cell" data-label="Column">productFieldName</div>
<div class="cell" data-label="Arabic">اسم الحقل بالمتجر</div>
<div class="cell" data-label="English">Product Field Name In Ecommerce Site</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="copyToEcommerceItemLines.productFieldType">
<div class="cell" data-label="Property">copyToEcommerceItemLines.productFieldType</div>
<div class="cell" data-label="Column">productFieldType</div>
<div class="cell" data-label="Arabic">نوع الحقل</div>
<div class="cell" data-label="English">Product Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="copyToEcommerceItemLines.productFieldValue">
<div class="cell" data-label="Property">copyToEcommerceItemLines.productFieldValue</div>
<div class="cell" data-label="Column">productFieldValue</div>
<div class="cell" data-label="Arabic">قيمة الحقل</div>
<div class="cell" data-label="English">Product Field Value</div>
<div class="cell" data-label="Type">Text</div>

</div>


</div>
</div>

<div id='documentGenerationInfoLines' title='documentGenerationInfoLines' class='searchable'>

## documentGenerationInfoLines (سطور إنشاء مستندات بناءا على تطابق من الأمر - Generate Document Based On Order Criteria Lines)
**Table Name:** EcommerceDocumentGenerationInfo, **Join Column:** mAGMagentoSite_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="documentGenerationInfoLines.applyWhenQuery">
<div class="cell" data-label="Property">documentGenerationInfoLines.applyWhenQuery</div>
<div class="cell" data-label="Column">applyWhenQuery</div>
<div class="cell" data-label="Arabic">تطبيق عند التوافق مع الاستعلام</div>
<div class="cell" data-label="English">Apply When Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="documentGenerationInfoLines.copyFieldMap">
<div class="cell" data-label="Property">documentGenerationInfoLines.copyFieldMap</div>
<div class="cell" data-label="Column">copyFieldMap</div>
<div class="cell" data-label="Arabic">نسخ الي حقول معينة في مستند المبيعات</div>
<div class="cell" data-label="English">Copy Sales Document Field Map</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="documentGenerationInfoLines.copyLineFieldMap">
<div class="cell" data-label="Property">documentGenerationInfoLines.copyLineFieldMap</div>
<div class="cell" data-label="Column">copyLineFieldMap</div>
<div class="cell" data-label="Arabic">نسخ الي حقول معينة في سطر المستند</div>
<div class="cell" data-label="English">Copy Sales Document Line Field Map</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="documentGenerationInfoLines.copyPaymentLineFieldMap">
<div class="cell" data-label="Property">documentGenerationInfoLines.copyPaymentLineFieldMap</div>
<div class="cell" data-label="Column">copyPaymentLineFieldMap</div>
<div class="cell" data-label="Arabic">نسخ حقول سطور الدفع</div>
<div class="cell" data-label="English">Copy Payment Line Field Map</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="documentGenerationInfoLines.customerFieldsMap">
<div class="cell" data-label="Property">documentGenerationInfoLines.customerFieldsMap</div>
<div class="cell" data-label="Column">customerFieldsMap</div>
<div class="cell" data-label="Arabic">Customer Fields Map</div>
<div class="cell" data-label="English">Customer Fields Map</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="documentGenerationInfoLines.ecommerceEntityType">
<div class="cell" data-label="Property">documentGenerationInfoLines.ecommerceEntityType</div>
<div class="cell" data-label="Column">ecommerceEntityType</div>
<div class="cell" data-label="Arabic">نوع مستند ماجنتو</div>
<div class="cell" data-label="English">Ecommerce Entity Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="documentGenerationInfoLines.generationInfo.book">
<div class="cell" data-label="Property">documentGenerationInfoLines.generationInfo.book</div>
<div class="cell" data-label="Column">book_id</div>
<div class="cell" data-label="Arabic">الدفتر</div>
<div class="cell" data-label="English">Book</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DocumentBook](/modules/basic/DocumentBook.md) 
</div>
</div>

<div class="row searchable" id="documentGenerationInfoLines.generationInfo.fromDiscount1">
<div class="cell" data-label="Property">documentGenerationInfoLines.generationInfo.fromDiscount1</div>
<div class="cell" data-label="Column">fromDiscount1</div>
<div class="cell" data-label="Arabic">مصدر خصم 1</div>
<div class="cell" data-label="English">From Discount1</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="documentGenerationInfoLines.generationInfo.fromDiscount2">
<div class="cell" data-label="Property">documentGenerationInfoLines.generationInfo.fromDiscount2</div>
<div class="cell" data-label="Column">fromDiscount2</div>
<div class="cell" data-label="Arabic">مصدر خصم 2</div>
<div class="cell" data-label="English">From Discount2</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="documentGenerationInfoLines.generationInfo.fromDiscount3">
<div class="cell" data-label="Property">documentGenerationInfoLines.generationInfo.fromDiscount3</div>
<div class="cell" data-label="Column">fromDiscount3</div>
<div class="cell" data-label="Arabic">مصدر خصم 3</div>
<div class="cell" data-label="English">From Discount3</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="documentGenerationInfoLines.generationInfo.fromDiscount4">
<div class="cell" data-label="Property">documentGenerationInfoLines.generationInfo.fromDiscount4</div>
<div class="cell" data-label="Column">fromDiscount4</div>
<div class="cell" data-label="Arabic">مصدر خصم 4</div>
<div class="cell" data-label="English">From Discount4</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="documentGenerationInfoLines.generationInfo.headerFieldsMap">
<div class="cell" data-label="Property">documentGenerationInfoLines.generationInfo.headerFieldsMap</div>
<div class="cell" data-label="Column">headerFieldsMap</div>
<div class="cell" data-label="Arabic">Header Fields Map</div>
<div class="cell" data-label="English">Header Fields Map</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="documentGenerationInfoLines.generationInfo.importAs">
<div class="cell" data-label="Property">documentGenerationInfoLines.generationInfo.importAs</div>
<div class="cell" data-label="Column">importAs</div>
<div class="cell" data-label="Arabic">استيراد كـ</div>
<div class="cell" data-label="English">Import As</div>
<div class="cell" data-label="Type">EntityType</div>

</div>

<div class="row searchable" id="documentGenerationInfoLines.generationInfo.lineFieldsMap">
<div class="cell" data-label="Property">documentGenerationInfoLines.generationInfo.lineFieldsMap</div>
<div class="cell" data-label="Column">lineFieldsMap</div>
<div class="cell" data-label="Arabic">Line Fields Map</div>
<div class="cell" data-label="English">Line Fields Map</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="documentGenerationInfoLines.generationInfo.term">
<div class="cell" data-label="Property">documentGenerationInfoLines.generationInfo.term</div>
<div class="cell" data-label="Column">term_id</div>
<div class="cell" data-label="Arabic">توجيه المستند</div>
<div class="cell" data-label="English">Term</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DocumentTerm](/modules/basic/DocumentTerm.md) 
</div>
</div>

<div class="row searchable" id="documentGenerationInfoLines.generationInfo.toDiscount">
<div class="cell" data-label="Property">documentGenerationInfoLines.generationInfo.toDiscount</div>
<div class="cell" data-label="Column">toDiscount</div>
<div class="cell" data-label="Arabic">الفرق إلى خصم</div>
<div class="cell" data-label="English">To Discount</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="documentGenerationInfoLines.id">
<div class="cell" data-label="Property">documentGenerationInfoLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="documentGenerationInfoLines.lineNumber">
<div class="cell" data-label="Property">documentGenerationInfoLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>


</div>
</div>

<div id='ecommerceEventActionsLines' title='ecommerceEventActionsLines' class='searchable'>

## ecommerceEventActionsLines (Ecommerce Event Actions Line - Ecommerce Event Actions Line)
**Table Name:** EcommerceEventActionsLine, **Join Column:** mAGMagentoSite_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="ecommerceEventActionsLines.ecommerceEventType">
<div class="cell" data-label="Property">ecommerceEventActionsLines.ecommerceEventType</div>
<div class="cell" data-label="Column">ecommerceEventType</div>
<div class="cell" data-label="Arabic">Ecommerce Event Type</div>
<div class="cell" data-label="English">Ecommerce Event Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="ecommerceEventActionsLines.id">
<div class="cell" data-label="Property">ecommerceEventActionsLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="ecommerceEventActionsLines.lineNumber">
<div class="cell" data-label="Property">ecommerceEventActionsLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="ecommerceEventActionsLines.onBlockNotification">
<div class="cell" data-label="Property">ecommerceEventActionsLines.onBlockNotification</div>
<div class="cell" data-label="Column">onBlockNotification_id</div>
<div class="cell" data-label="Arabic">On Block Notification</div>
<div class="cell" data-label="English">On Block Notification</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [NotificationDefinition](/modules/basic/NotificationDefinition.md) 
</div>
</div>

<div class="row searchable" id="ecommerceEventActionsLines.onFailNotification">
<div class="cell" data-label="Property">ecommerceEventActionsLines.onFailNotification</div>
<div class="cell" data-label="Column">onFailNotification_id</div>
<div class="cell" data-label="Arabic">On Fail Notification</div>
<div class="cell" data-label="English">On Fail Notification</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [NotificationDefinition](/modules/basic/NotificationDefinition.md) 
</div>
</div>

<div class="row searchable" id="ecommerceEventActionsLines.onSuccessAfterFailNotification">
<div class="cell" data-label="Property">ecommerceEventActionsLines.onSuccessAfterFailNotification</div>
<div class="cell" data-label="Column">onSuccessAfterFailNotification_id</div>
<div class="cell" data-label="Arabic">On Success After Trying More Than One Time</div>
<div class="cell" data-label="English">On Success After Trying More Than One Time</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [NotificationDefinition](/modules/basic/NotificationDefinition.md) 
</div>
</div>


</div>
</div>

<div id='ecommerceWarehouseLines' title='ecommerceWarehouseLines' class='searchable'>

## ecommerceWarehouseLines (ربط معرفات المخازن الإلكترونية بنما - Link Ecommerce Warehouses By Nama)
**Table Name:** EcommerceWarehouseLine, **Join Column:** mAGMagentoSite_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="ecommerceWarehouseLines.ecommerceWarehouseId">
<div class="cell" data-label="Property">ecommerceWarehouseLines.ecommerceWarehouseId</div>
<div class="cell" data-label="Column">ecommerceWarehouseId</div>
<div class="cell" data-label="Arabic">معرف مخزن الموقع</div>
<div class="cell" data-label="English">Ecommerce Warehouse Id</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="ecommerceWarehouseLines.id">
<div class="cell" data-label="Property">ecommerceWarehouseLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="ecommerceWarehouseLines.lineNumber">
<div class="cell" data-label="Property">ecommerceWarehouseLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="ecommerceWarehouseLines.warehouse">
<div class="cell" data-label="Property">ecommerceWarehouseLines.warehouse</div>
<div class="cell" data-label="Column">warehouse_id</div>
<div class="cell" data-label="Arabic">المخزن</div>
<div class="cell" data-label="English">Warehouse</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>


</div>
</div>

<div id='graphQLLines' title='graphQLLines' class='searchable'>

## graphQLLines (Graph QL Lines - Graph QL Lines)
**Table Name:** EcommerceGraphQLLine, **Join Column:** mAGMagentoSite_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="graphQLLines.ecommerceGraphEntityOperation">
<div class="cell" data-label="Property">graphQLLines.ecommerceGraphEntityOperation</div>
<div class="cell" data-label="Column">ecommerceGraphEntityOperation</div>
<div class="cell" data-label="Arabic">نوع العملية</div>
<div class="cell" data-label="English">Operation Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="graphQLLines.graphQuery">
<div class="cell" data-label="Property">graphQLLines.graphQuery</div>
<div class="cell" data-label="Column">graphQuery</div>
<div class="cell" data-label="Arabic">Graph Query</div>
<div class="cell" data-label="English">Graph Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="graphQLLines.id">
<div class="cell" data-label="Property">graphQLLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="graphQLLines.lineNumber">
<div class="cell" data-label="Property">graphQLLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="graphQLLines.variablesFieldsMapASJson">
<div class="cell" data-label="Property">graphQLLines.variablesFieldsMapASJson</div>
<div class="cell" data-label="Column">variablesFieldsMapASJson</div>
<div class="cell" data-label="Arabic">Variables Fields Map As JSON (Root Entity order/item)</div>
<div class="cell" data-label="English">Variables Fields Map As JSON (Root Entity order/item)</div>
<div class="cell" data-label="Type">BigText</div>

</div>


</div>
</div>

<div id='paymentMethods' title='paymentMethods' class='searchable'>

## paymentMethods (طرق الدفع - Payment Methods)
**Table Name:** MAGSitePaymentMethodsLine, **Join Column:** mAGMagentoSite_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="paymentMethods.allowedTransactionTypes">
<div class="cell" data-label="Property">paymentMethods.allowedTransactionTypes</div>
<div class="cell" data-label="Column">allowedTransactionTypes</div>
<div class="cell" data-label="Arabic">نسخ السطور التي بها أنواع العمليات</div>
<div class="cell" data-label="English">Copy Only Lines with Transaction Types</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="paymentMethods.applyWhenQuery">
<div class="cell" data-label="Property">paymentMethods.applyWhenQuery</div>
<div class="cell" data-label="Column">applyWhenQuery</div>
<div class="cell" data-label="Arabic">تطبيق عند التوافق مع الاستعلام</div>
<div class="cell" data-label="English">Apply When Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="paymentMethods.doNotAffectRemaining">
<div class="cell" data-label="Property">paymentMethods.doNotAffectRemaining</div>
<div class="cell" data-label="Column">doNotAffectRemaining</div>
<div class="cell" data-label="Arabic">عدم التأثير على المتبقي</div>
<div class="cell" data-label="English">Do Not Affect Remaining</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="paymentMethods.fromDate">
<div class="cell" data-label="Property">paymentMethods.fromDate</div>
<div class="cell" data-label="Column">fromDate</div>
<div class="cell" data-label="Arabic">من تاريخ</div>
<div class="cell" data-label="English">From Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="paymentMethods.id">
<div class="cell" data-label="Property">paymentMethods.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="paymentMethods.lineNumber">
<div class="cell" data-label="Property">paymentMethods.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="paymentMethods.paymentLineCopyFieldsMap">
<div class="cell" data-label="Property">paymentMethods.paymentLineCopyFieldsMap</div>
<div class="cell" data-label="Column">paymentLineCopyFieldsMap</div>
<div class="cell" data-label="Arabic">نسخ حقول معينه الي سطر الدفع</div>
<div class="cell" data-label="English">Copy Specific Fields To Payment Line</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="paymentMethods.paymentMethod">
<div class="cell" data-label="Property">paymentMethods.paymentMethod</div>
<div class="cell" data-label="Column">paymentMethod_id</div>
<div class="cell" data-label="Arabic">طريقة الدفع</div>
<div class="cell" data-label="English"> Payment Method</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [PaymentMethod](/modules/basic/PaymentMethod.md) 
</div>
</div>

<div class="row searchable" id="paymentMethods.paymentMethodName">
<div class="cell" data-label="Property">paymentMethods.paymentMethodName</div>
<div class="cell" data-label="Column">paymentMethodName</div>
<div class="cell" data-label="Arabic">إسم طريقة الدفع</div>
<div class="cell" data-label="English">Payment Method Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="paymentMethods.paymentMethodType">
<div class="cell" data-label="Property">paymentMethods.paymentMethodType</div>
<div class="cell" data-label="Column">paymentMethodType</div>
<div class="cell" data-label="Arabic">نوع طريقة الدفع</div>
<div class="cell" data-label="English">Payment Method Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="paymentMethods.toDate">
<div class="cell" data-label="Property">paymentMethods.toDate</div>
<div class="cell" data-label="Column">toDate</div>
<div class="cell" data-label="Arabic">إلى تاريخ</div>
<div class="cell" data-label="English">To Date</div>
<div class="cell" data-label="Type">Date</div>

</div>


</div>
</div>

<div id='shippingItems' title='shippingItems' class='searchable'>

## shippingItems (أصناف خدمة الشحن - Shipping Service Items)
**Table Name:** MAGSiteShippingItemLine, **Join Column:** mAGMagentoSite_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="shippingItems.applyWhenQuery">
<div class="cell" data-label="Property">shippingItems.applyWhenQuery</div>
<div class="cell" data-label="Column">applyWhenQuery</div>
<div class="cell" data-label="Arabic">تطبيق عند التوافق مع الاستعلام</div>
<div class="cell" data-label="English">Apply When Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="shippingItems.id">
<div class="cell" data-label="Property">shippingItems.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="shippingItems.invItem">
<div class="cell" data-label="Property">shippingItems.invItem</div>
<div class="cell" data-label="Column">invItem_id</div>
<div class="cell" data-label="Arabic"> الصنف</div>
<div class="cell" data-label="English"> Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/modules/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="shippingItems.lineNumber">
<div class="cell" data-label="Property">shippingItems.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="shippingItems.shippingMethodType">
<div class="cell" data-label="Property">shippingItems.shippingMethodType</div>
<div class="cell" data-label="Column">shippingMethodType</div>
<div class="cell" data-label="Arabic">نوع طريقة الشحن</div>
<div class="cell" data-label="English">Shipping Method Type</div>
<div class="cell" data-label="Type">Text</div>

</div>


</div>
</div>

<div id='updateItemFor' title='updateItemFor' class='searchable'>

## updateItemFor ( - )
**Table Name:** MAGSiteItemUpdateCriteria, **Join Column:** mAGMagentoSite_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="updateItemFor.category1">
<div class="cell" data-label="Property">updateItemFor.category1</div>
<div class="cell" data-label="Column">category1_id</div>
<div class="cell" data-label="Arabic">فئة الصنف1</div>
<div class="cell" data-label="English">Item Category1</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemCategory](/modules/supplychain/ItemCategory.md) 
</div>
</div>

<div class="row searchable" id="updateItemFor.category2">
<div class="cell" data-label="Property">updateItemFor.category2</div>
<div class="cell" data-label="Column">category2_id</div>
<div class="cell" data-label="Arabic">فئة الصنف2</div>
<div class="cell" data-label="English">Item Category2</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemCategory](/modules/supplychain/ItemCategory.md) 
</div>
</div>

<div class="row searchable" id="updateItemFor.category3">
<div class="cell" data-label="Property">updateItemFor.category3</div>
<div class="cell" data-label="Column">category3_id</div>
<div class="cell" data-label="Arabic">فئة الصنف3</div>
<div class="cell" data-label="English">Item Category3</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemCategory](/modules/supplychain/ItemCategory.md) 
</div>
</div>

<div class="row searchable" id="updateItemFor.category4">
<div class="cell" data-label="Property">updateItemFor.category4</div>
<div class="cell" data-label="Column">category4_id</div>
<div class="cell" data-label="Arabic">فئة الصنف4</div>
<div class="cell" data-label="English">Item Category4</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemCategory](/modules/supplychain/ItemCategory.md) 
</div>
</div>

<div class="row searchable" id="updateItemFor.category5">
<div class="cell" data-label="Property">updateItemFor.category5</div>
<div class="cell" data-label="Column">category5_id</div>
<div class="cell" data-label="Arabic">فئة الصنف5</div>
<div class="cell" data-label="English">Item Category5</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemCategory](/modules/supplychain/ItemCategory.md) 
</div>
</div>

<div class="row searchable" id="updateItemFor.id">
<div class="cell" data-label="Property">updateItemFor.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="updateItemFor.itemClass1">
<div class="cell" data-label="Property">updateItemFor.itemClass1</div>
<div class="cell" data-label="Column">itemClass1_id</div>
<div class="cell" data-label="Arabic">تصنيف 1</div>
<div class="cell" data-label="English">Class 1</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass1](/modules/supplychain/ItemClass1.md) 
</div>
</div>

<div class="row searchable" id="updateItemFor.itemClass10">
<div class="cell" data-label="Property">updateItemFor.itemClass10</div>
<div class="cell" data-label="Column">itemClass10_id</div>
<div class="cell" data-label="Arabic">تصنيف 10</div>
<div class="cell" data-label="English">Class 10</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass10](/modules/supplychain/ItemClass10.md) 
</div>
</div>

<div class="row searchable" id="updateItemFor.itemClass2">
<div class="cell" data-label="Property">updateItemFor.itemClass2</div>
<div class="cell" data-label="Column">itemClass2_id</div>
<div class="cell" data-label="Arabic">تصنيف 2</div>
<div class="cell" data-label="English">Class 2</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass2](/modules/supplychain/ItemClass2.md) 
</div>
</div>

<div class="row searchable" id="updateItemFor.itemClass3">
<div class="cell" data-label="Property">updateItemFor.itemClass3</div>
<div class="cell" data-label="Column">itemClass3_id</div>
<div class="cell" data-label="Arabic">تصنيف 3</div>
<div class="cell" data-label="English">Class 3</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass3](/modules/supplychain/ItemClass3.md) 
</div>
</div>

<div class="row searchable" id="updateItemFor.itemClass4">
<div class="cell" data-label="Property">updateItemFor.itemClass4</div>
<div class="cell" data-label="Column">itemClass4_id</div>
<div class="cell" data-label="Arabic">تصنيف 4</div>
<div class="cell" data-label="English">Class 4</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass4](/modules/supplychain/ItemClass4.md) 
</div>
</div>

<div class="row searchable" id="updateItemFor.itemClass5">
<div class="cell" data-label="Property">updateItemFor.itemClass5</div>
<div class="cell" data-label="Column">itemClass5_id</div>
<div class="cell" data-label="Arabic">تصنيف 5</div>
<div class="cell" data-label="English">Class 5</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass5](/modules/supplychain/ItemClass5.md) 
</div>
</div>

<div class="row searchable" id="updateItemFor.itemClass6">
<div class="cell" data-label="Property">updateItemFor.itemClass6</div>
<div class="cell" data-label="Column">itemClass6_id</div>
<div class="cell" data-label="Arabic">تصنيف 6</div>
<div class="cell" data-label="English">Class 6</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass6](/modules/supplychain/ItemClass6.md) 
</div>
</div>

<div class="row searchable" id="updateItemFor.itemClass7">
<div class="cell" data-label="Property">updateItemFor.itemClass7</div>
<div class="cell" data-label="Column">itemClass7_id</div>
<div class="cell" data-label="Arabic">تصنيف 7</div>
<div class="cell" data-label="English">Class 7</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass7](/modules/supplychain/ItemClass7.md) 
</div>
</div>

<div class="row searchable" id="updateItemFor.itemClass8">
<div class="cell" data-label="Property">updateItemFor.itemClass8</div>
<div class="cell" data-label="Column">itemClass8_id</div>
<div class="cell" data-label="Arabic">تصنيف 8</div>
<div class="cell" data-label="English">Class 8</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass8](/modules/supplychain/ItemClass8.md) 
</div>
</div>

<div class="row searchable" id="updateItemFor.itemClass9">
<div class="cell" data-label="Property">updateItemFor.itemClass9</div>
<div class="cell" data-label="Column">itemClass9_id</div>
<div class="cell" data-label="Arabic">تصنيف 9</div>
<div class="cell" data-label="English">Class 9</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass9](/modules/supplychain/ItemClass9.md) 
</div>
</div>

<div class="row searchable" id="updateItemFor.itemSection">
<div class="cell" data-label="Property">updateItemFor.itemSection</div>
<div class="cell" data-label="Column">itemSection_id</div>
<div class="cell" data-label="Arabic">قسم الصنف</div>
<div class="cell" data-label="English"> Item Section</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemSection](/modules/supplychain/ItemSection.md) 
</div>
</div>

<div class="row searchable" id="updateItemFor.lineNumber">
<div class="cell" data-label="Property">updateItemFor.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>


</div>
</div>

<div id='updateOrderStatusTo' title='updateOrderStatusTo' class='searchable'>

## updateOrderStatusTo (تحديث حالة طلب ماجنتو إلي - Update Magento Order Status To)
**Table Name:** MagentoOrderUpdateStatus, **Join Column:** mAGMagentoSite_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="updateOrderStatusTo.applyWhenQuery">
<div class="cell" data-label="Property">updateOrderStatusTo.applyWhenQuery</div>
<div class="cell" data-label="Column">applyWhenQuery</div>
<div class="cell" data-label="Arabic">تطبيق عند التوافق مع الاستعلام</div>
<div class="cell" data-label="English">Apply When Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="updateOrderStatusTo.comment">
<div class="cell" data-label="Property">updateOrderStatusTo.comment</div>
<div class="cell" data-label="Column">comment</div>
<div class="cell" data-label="Arabic">ملاحظة</div>
<div class="cell" data-label="English">Comment</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="updateOrderStatusTo.commentVisibleOnFront">
<div class="cell" data-label="Property">updateOrderStatusTo.commentVisibleOnFront</div>
<div class="cell" data-label="Column">commentVisibleOnFront</div>
<div class="cell" data-label="Arabic">عرض الملحوظه للعميل</div>
<div class="cell" data-label="English">Comment Visible To Customer</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="updateOrderStatusTo.criteriaDefinition">
<div class="cell" data-label="Property">updateOrderStatusTo.criteriaDefinition</div>
<div class="cell" data-label="Column">criteriaDefinition_id</div>
<div class="cell" data-label="Arabic"> المعايير</div>
<div class="cell" data-label="English"> Criteria</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CriteriaDefinition](/modules/basic/CriteriaDefinition.md) 
</div>
</div>

<div class="row searchable" id="updateOrderStatusTo.fieldsUpdateMap">
<div class="cell" data-label="Property">updateOrderStatusTo.fieldsUpdateMap</div>
<div class="cell" data-label="Column">fieldsUpdateMap</div>
<div class="cell" data-label="Arabic">Magento Order Fields Update Map</div>
<div class="cell" data-label="English">Magento Order Fields Update Map</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="updateOrderStatusTo.id">
<div class="cell" data-label="Property">updateOrderStatusTo.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="updateOrderStatusTo.lineNumber">
<div class="cell" data-label="Property">updateOrderStatusTo.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="updateOrderStatusTo.status">
<div class="cell" data-label="Property">updateOrderStatusTo.status</div>
<div class="cell" data-label="Column">status</div>
<div class="cell" data-label="Arabic">الحالة</div>
<div class="cell" data-label="English">Status</div>
<div class="cell" data-label="Type">Text</div>

</div>


</div>
</div>

<div id='updateQtyFor' title='updateQtyFor' class='searchable'>

## updateQtyFor ( - )
**Table Name:** MAGSiteQtyUpdateCriteria, **Join Column:** mAGMagentoSite_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="updateQtyFor.applyWhenQuery">
<div class="cell" data-label="Property">updateQtyFor.applyWhenQuery</div>
<div class="cell" data-label="Column">applyWhenQuery</div>
<div class="cell" data-label="Arabic">تطبيق عند التوافق مع الاستعلام</div>
<div class="cell" data-label="English">Apply When Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="updateQtyFor.calcQtySendTypeFromHeader">
<div class="cell" data-label="Property">updateQtyFor.calcQtySendTypeFromHeader</div>
<div class="cell" data-label="Column">calcQtySendTypeFromHeader</div>
<div class="cell" data-label="Arabic">حساب أقل كمية للإرسال ونوع الكمية من الهيدر</div>
<div class="cell" data-label="English">Calculate Minimum Quantity and Quantity Send Type From Header</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="updateQtyFor.category1">
<div class="cell" data-label="Property">updateQtyFor.category1</div>
<div class="cell" data-label="Column">category1_id</div>
<div class="cell" data-label="Arabic">فئة الصنف1</div>
<div class="cell" data-label="English">Item Category1</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemCategory](/modules/supplychain/ItemCategory.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.category2">
<div class="cell" data-label="Property">updateQtyFor.category2</div>
<div class="cell" data-label="Column">category2_id</div>
<div class="cell" data-label="Arabic">فئة الصنف2</div>
<div class="cell" data-label="English">Item Category2</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemCategory](/modules/supplychain/ItemCategory.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.category3">
<div class="cell" data-label="Property">updateQtyFor.category3</div>
<div class="cell" data-label="Column">category3_id</div>
<div class="cell" data-label="Arabic">فئة الصنف3</div>
<div class="cell" data-label="English">Item Category3</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemCategory](/modules/supplychain/ItemCategory.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.category4">
<div class="cell" data-label="Property">updateQtyFor.category4</div>
<div class="cell" data-label="Column">category4_id</div>
<div class="cell" data-label="Arabic">فئة الصنف4</div>
<div class="cell" data-label="English">Item Category4</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemCategory](/modules/supplychain/ItemCategory.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.category5">
<div class="cell" data-label="Property">updateQtyFor.category5</div>
<div class="cell" data-label="Column">category5_id</div>
<div class="cell" data-label="Arabic">فئة الصنف5</div>
<div class="cell" data-label="English">Item Category5</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemCategory](/modules/supplychain/ItemCategory.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.criteriaDefinition">
<div class="cell" data-label="Property">updateQtyFor.criteriaDefinition</div>
<div class="cell" data-label="Column">criteriaDefinition_id</div>
<div class="cell" data-label="Arabic"> المعايير</div>
<div class="cell" data-label="English"> Criteria</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CriteriaDefinition](/modules/basic/CriteriaDefinition.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.dimensions.analysisSet">
<div class="cell" data-label="Property">updateQtyFor.dimensions.analysisSet</div>
<div class="cell" data-label="Column">dimensionsAnalysisSet_id</div>
<div class="cell" data-label="Arabic">المجموعة التحليلية</div>
<div class="cell" data-label="English">Analysis set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/modules/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.dimensions.branch">
<div class="cell" data-label="Property">updateQtyFor.dimensions.branch</div>
<div class="cell" data-label="Column">dimensionsBranch_id</div>
<div class="cell" data-label="Arabic">الفرع</div>
<div class="cell" data-label="English">Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/modules/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.dimensions.department">
<div class="cell" data-label="Property">updateQtyFor.dimensions.department</div>
<div class="cell" data-label="Column">dimensionsDepartment_id</div>
<div class="cell" data-label="Arabic">الإدارة</div>
<div class="cell" data-label="English">Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/modules/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.dimensions.legalEntity">
<div class="cell" data-label="Property">updateQtyFor.dimensions.legalEntity</div>
<div class="cell" data-label="Column">dimensionsLegalEntity_id</div>
<div class="cell" data-label="Arabic">الشركة</div>
<div class="cell" data-label="English">Legal Entity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [LegalEntity](/modules/basic/LegalEntity.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.dimensions.sector">
<div class="cell" data-label="Property">updateQtyFor.dimensions.sector</div>
<div class="cell" data-label="Column">dimensionsSector_id</div>
<div class="cell" data-label="Arabic">القطاع</div>
<div class="cell" data-label="English">Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/modules/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.doNotApplyWhenQuery">
<div class="cell" data-label="Property">updateQtyFor.doNotApplyWhenQuery</div>
<div class="cell" data-label="Column">doNotApplyWhenQuery</div>
<div class="cell" data-label="Arabic">منع التطبيق عند التوافق مع الاستعلام</div>
<div class="cell" data-label="English">Do Not Apply When Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="updateQtyFor.id">
<div class="cell" data-label="Property">updateQtyFor.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="updateQtyFor.item">
<div class="cell" data-label="Property">updateQtyFor.item</div>
<div class="cell" data-label="Column">item_id</div>
<div class="cell" data-label="Arabic">الصنف</div>
<div class="cell" data-label="English">Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [InvItem](/modules/supplychain/InvItem.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.itemClass1">
<div class="cell" data-label="Property">updateQtyFor.itemClass1</div>
<div class="cell" data-label="Column">itemClass1_id</div>
<div class="cell" data-label="Arabic">تصنيف 1</div>
<div class="cell" data-label="English">Class 1</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass1](/modules/supplychain/ItemClass1.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.itemClass10">
<div class="cell" data-label="Property">updateQtyFor.itemClass10</div>
<div class="cell" data-label="Column">itemClass10_id</div>
<div class="cell" data-label="Arabic">تصنيف 10</div>
<div class="cell" data-label="English">Class 10</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass10](/modules/supplychain/ItemClass10.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.itemClass2">
<div class="cell" data-label="Property">updateQtyFor.itemClass2</div>
<div class="cell" data-label="Column">itemClass2_id</div>
<div class="cell" data-label="Arabic">تصنيف 2</div>
<div class="cell" data-label="English">Class 2</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass2](/modules/supplychain/ItemClass2.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.itemClass3">
<div class="cell" data-label="Property">updateQtyFor.itemClass3</div>
<div class="cell" data-label="Column">itemClass3_id</div>
<div class="cell" data-label="Arabic">تصنيف 3</div>
<div class="cell" data-label="English">Class 3</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass3](/modules/supplychain/ItemClass3.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.itemClass4">
<div class="cell" data-label="Property">updateQtyFor.itemClass4</div>
<div class="cell" data-label="Column">itemClass4_id</div>
<div class="cell" data-label="Arabic">تصنيف 4</div>
<div class="cell" data-label="English">Class 4</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass4](/modules/supplychain/ItemClass4.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.itemClass5">
<div class="cell" data-label="Property">updateQtyFor.itemClass5</div>
<div class="cell" data-label="Column">itemClass5_id</div>
<div class="cell" data-label="Arabic">تصنيف 5</div>
<div class="cell" data-label="English">Class 5</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass5](/modules/supplychain/ItemClass5.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.itemClass6">
<div class="cell" data-label="Property">updateQtyFor.itemClass6</div>
<div class="cell" data-label="Column">itemClass6_id</div>
<div class="cell" data-label="Arabic">تصنيف 6</div>
<div class="cell" data-label="English">Class 6</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass6](/modules/supplychain/ItemClass6.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.itemClass7">
<div class="cell" data-label="Property">updateQtyFor.itemClass7</div>
<div class="cell" data-label="Column">itemClass7_id</div>
<div class="cell" data-label="Arabic">تصنيف 7</div>
<div class="cell" data-label="English">Class 7</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass7](/modules/supplychain/ItemClass7.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.itemClass8">
<div class="cell" data-label="Property">updateQtyFor.itemClass8</div>
<div class="cell" data-label="Column">itemClass8_id</div>
<div class="cell" data-label="Arabic">تصنيف 8</div>
<div class="cell" data-label="English">Class 8</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass8](/modules/supplychain/ItemClass8.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.itemClass9">
<div class="cell" data-label="Property">updateQtyFor.itemClass9</div>
<div class="cell" data-label="Column">itemClass9_id</div>
<div class="cell" data-label="Arabic">تصنيف 9</div>
<div class="cell" data-label="English">Class 9</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemClass9](/modules/supplychain/ItemClass9.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.itemSection">
<div class="cell" data-label="Property">updateQtyFor.itemSection</div>
<div class="cell" data-label="Column">itemSection_id</div>
<div class="cell" data-label="Arabic">قسم الصنف</div>
<div class="cell" data-label="English"> Item Section</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ItemSection](/modules/supplychain/ItemSection.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.itemUom">
<div class="cell" data-label="Property">updateQtyFor.itemUom</div>
<div class="cell" data-label="Column">itemUom_id</div>
<div class="cell" data-label="Arabic">وحدة الصنف</div>
<div class="cell" data-label="English">Item UOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [UOM](/modules/supplychain/UOM.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.lineNumber">
<div class="cell" data-label="Property">updateQtyFor.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="updateQtyFor.minQtyToSend">
<div class="cell" data-label="Property">updateQtyFor.minQtyToSend</div>
<div class="cell" data-label="Column">minQtyToSend</div>
<div class="cell" data-label="Arabic">اقل كمية للارسال(قيمة)</div>
<div class="cell" data-label="English">Minimum Quantity To Send(Value)</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="updateQtyFor.minQtyToSendPercent">
<div class="cell" data-label="Property">updateQtyFor.minQtyToSendPercent</div>
<div class="cell" data-label="Column">minQtyToSendPercent</div>
<div class="cell" data-label="Arabic">أقل كمية للإرسال(نسبة)</div>
<div class="cell" data-label="English">Minimum Quantity To Send(Percent)</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="updateQtyFor.qtyCalcQuery">
<div class="cell" data-label="Property">updateQtyFor.qtyCalcQuery</div>
<div class="cell" data-label="Column">qtyCalcQuery</div>
<div class="cell" data-label="Arabic">استعلام احتساب الكمية</div>
<div class="cell" data-label="English">Quantity Calculation Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="updateQtyFor.quantityToSendType">
<div class="cell" data-label="Property">updateQtyFor.quantityToSendType</div>
<div class="cell" data-label="Column">quantityToSendType</div>
<div class="cell" data-label="Arabic">إرسال الكمية ب (عندما تكون اقل من  اقل كمية للإرسال او تساويها)</div>
<div class="cell" data-label="English">Send Quantity (If Quantity is less than minimum quantity to send)</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="updateQtyFor.reversedCriteriaDefinition">
<div class="cell" data-label="Property">updateQtyFor.reversedCriteriaDefinition</div>
<div class="cell" data-label="Column">reversedCriteriaDefinition_id</div>
<div class="cell" data-label="Arabic">معيار عدم التفيذ</div>
<div class="cell" data-label="English">Reversed Criteria Definition</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CriteriaDefinition](/modules/basic/CriteriaDefinition.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.specificDimensions.activePerc">
<div class="cell" data-label="Property">updateQtyFor.specificDimensions.activePerc</div>
<div class="cell" data-label="Column">activePerc</div>
<div class="cell" data-label="Arabic">النسبة الفعالة</div>
<div class="cell" data-label="English">Active Percentage</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="updateQtyFor.specificDimensions.box">
<div class="cell" data-label="Property">updateQtyFor.specificDimensions.box</div>
<div class="cell" data-label="Column">box</div>
<div class="cell" data-label="Arabic">صندوق</div>
<div class="cell" data-label="English">Box</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="updateQtyFor.specificDimensions.color">
<div class="cell" data-label="Property">updateQtyFor.specificDimensions.color</div>
<div class="cell" data-label="Column">color</div>
<div class="cell" data-label="Arabic">اللون</div>
<div class="cell" data-label="English">Color</div>
<div class="cell" data-label="Type">Color</div>

</div>

<div class="row searchable" id="updateQtyFor.specificDimensions.inactivePerc">
<div class="cell" data-label="Property">updateQtyFor.specificDimensions.inactivePerc</div>
<div class="cell" data-label="Column">inactivePerc</div>
<div class="cell" data-label="Arabic">النسبة الغير فعالة</div>
<div class="cell" data-label="English">Inactive Percentage</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="updateQtyFor.specificDimensions.locator">
<div class="cell" data-label="Property">updateQtyFor.specificDimensions.locator</div>
<div class="cell" data-label="Column">locator_id</div>
<div class="cell" data-label="Arabic">الموقع</div>
<div class="cell" data-label="English">Locator</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Locator](/modules/supplychain/Locator.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.specificDimensions.lotId">
<div class="cell" data-label="Property">updateQtyFor.specificDimensions.lotId</div>
<div class="cell" data-label="Column">lotId</div>
<div class="cell" data-label="Arabic">رقم الشحنه</div>
<div class="cell" data-label="English">Lot ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="updateQtyFor.specificDimensions.measures">
<div class="cell" data-label="Property">updateQtyFor.specificDimensions.measures</div>
<div class="cell" data-label="Column">measures</div>
<div class="cell" data-label="Arabic">الأبعاد</div>
<div class="cell" data-label="English">Measures</div>
<div class="cell" data-label="Type">Measures</div>

</div>

<div class="row searchable" id="updateQtyFor.specificDimensions.revisionId">
<div class="cell" data-label="Property">updateQtyFor.specificDimensions.revisionId</div>
<div class="cell" data-label="Column">revisionId</div>
<div class="cell" data-label="Arabic">الإصدار</div>
<div class="cell" data-label="English">Revision ID</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="updateQtyFor.specificDimensions.secondSerial">
<div class="cell" data-label="Property">updateQtyFor.specificDimensions.secondSerial</div>
<div class="cell" data-label="Column">secondSerial</div>
<div class="cell" data-label="Arabic">الرقم المسلسل الثاني</div>
<div class="cell" data-label="English">Second Serial</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="updateQtyFor.specificDimensions.serialNumber">
<div class="cell" data-label="Property">updateQtyFor.specificDimensions.serialNumber</div>
<div class="cell" data-label="Column">serialNumber</div>
<div class="cell" data-label="Arabic">الرقم المسلسل</div>
<div class="cell" data-label="English">Serial number</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="updateQtyFor.specificDimensions.size">
<div class="cell" data-label="Property">updateQtyFor.specificDimensions.size</div>
<div class="cell" data-label="Column">size</div>
<div class="cell" data-label="Arabic">المقاس</div>
<div class="cell" data-label="English">Size</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="updateQtyFor.specificDimensions.subItem">
<div class="cell" data-label="Property">updateQtyFor.specificDimensions.subItem</div>
<div class="cell" data-label="Column">subItem_id</div>
<div class="cell" data-label="Arabic"> صنف فرعى</div>
<div class="cell" data-label="English"> SubItem</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SubItem](/modules/srvcenter-subitems/SubItem.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.specificDimensions.warehouse">
<div class="cell" data-label="Property">updateQtyFor.specificDimensions.warehouse</div>
<div class="cell" data-label="Column">warehouse_id</div>
<div class="cell" data-label="Arabic">المخزن</div>
<div class="cell" data-label="English">Warehouse</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.warehouse10">
<div class="cell" data-label="Property">updateQtyFor.warehouse10</div>
<div class="cell" data-label="Column">warehouse10_id</div>
<div class="cell" data-label="Arabic">المخزن 10</div>
<div class="cell" data-label="English">Warehouse 10</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.warehouse11">
<div class="cell" data-label="Property">updateQtyFor.warehouse11</div>
<div class="cell" data-label="Column">warehouse11_id</div>
<div class="cell" data-label="Arabic">المخزن 11</div>
<div class="cell" data-label="English">Warehouse 11</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.warehouse12">
<div class="cell" data-label="Property">updateQtyFor.warehouse12</div>
<div class="cell" data-label="Column">warehouse12_id</div>
<div class="cell" data-label="Arabic">المخزن 12</div>
<div class="cell" data-label="English">Warehouse 12</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.warehouse13">
<div class="cell" data-label="Property">updateQtyFor.warehouse13</div>
<div class="cell" data-label="Column">warehouse13_id</div>
<div class="cell" data-label="Arabic">المخزن 13</div>
<div class="cell" data-label="English">Warehouse 13</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.warehouse14">
<div class="cell" data-label="Property">updateQtyFor.warehouse14</div>
<div class="cell" data-label="Column">warehouse14_id</div>
<div class="cell" data-label="Arabic">المخزن 14</div>
<div class="cell" data-label="English">Warehouse 14</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.warehouse15">
<div class="cell" data-label="Property">updateQtyFor.warehouse15</div>
<div class="cell" data-label="Column">warehouse15_id</div>
<div class="cell" data-label="Arabic">المخزن 15</div>
<div class="cell" data-label="English">Warehouse 15</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.warehouse16">
<div class="cell" data-label="Property">updateQtyFor.warehouse16</div>
<div class="cell" data-label="Column">warehouse16_id</div>
<div class="cell" data-label="Arabic">المخزن 16</div>
<div class="cell" data-label="English">Warehouse 16</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.warehouse17">
<div class="cell" data-label="Property">updateQtyFor.warehouse17</div>
<div class="cell" data-label="Column">warehouse17_id</div>
<div class="cell" data-label="Arabic">المخزن 17</div>
<div class="cell" data-label="English">Warehouse 17</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.warehouse18">
<div class="cell" data-label="Property">updateQtyFor.warehouse18</div>
<div class="cell" data-label="Column">warehouse18_id</div>
<div class="cell" data-label="Arabic">المخزن 18</div>
<div class="cell" data-label="English">Warehouse 18</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.warehouse19">
<div class="cell" data-label="Property">updateQtyFor.warehouse19</div>
<div class="cell" data-label="Column">warehouse19_id</div>
<div class="cell" data-label="Arabic">المخزن 19</div>
<div class="cell" data-label="English">Warehouse 19</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.warehouse2">
<div class="cell" data-label="Property">updateQtyFor.warehouse2</div>
<div class="cell" data-label="Column">warehouse2_id</div>
<div class="cell" data-label="Arabic">المخزن 2</div>
<div class="cell" data-label="English">Warehouse 2</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.warehouse20">
<div class="cell" data-label="Property">updateQtyFor.warehouse20</div>
<div class="cell" data-label="Column">warehouse20_id</div>
<div class="cell" data-label="Arabic">المخزن 20</div>
<div class="cell" data-label="English">Warehouse 20</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.warehouse3">
<div class="cell" data-label="Property">updateQtyFor.warehouse3</div>
<div class="cell" data-label="Column">warehouse3_id</div>
<div class="cell" data-label="Arabic">المخزن 3</div>
<div class="cell" data-label="English">Warehouse 3</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.warehouse4">
<div class="cell" data-label="Property">updateQtyFor.warehouse4</div>
<div class="cell" data-label="Column">warehouse4_id</div>
<div class="cell" data-label="Arabic">المخزن 4</div>
<div class="cell" data-label="English">Warehouse 4</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.warehouse5">
<div class="cell" data-label="Property">updateQtyFor.warehouse5</div>
<div class="cell" data-label="Column">warehouse5_id</div>
<div class="cell" data-label="Arabic">المخزن 5</div>
<div class="cell" data-label="English">Warehouse 5</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.warehouse6">
<div class="cell" data-label="Property">updateQtyFor.warehouse6</div>
<div class="cell" data-label="Column">warehouse6_id</div>
<div class="cell" data-label="Arabic">المخزن 6</div>
<div class="cell" data-label="English">Warehouse 6</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.warehouse7">
<div class="cell" data-label="Property">updateQtyFor.warehouse7</div>
<div class="cell" data-label="Column">warehouse7_id</div>
<div class="cell" data-label="Arabic">المخزن 7</div>
<div class="cell" data-label="English">Warehouse 7</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.warehouse8">
<div class="cell" data-label="Property">updateQtyFor.warehouse8</div>
<div class="cell" data-label="Column">warehouse8_id</div>
<div class="cell" data-label="Arabic">المخزن 8</div>
<div class="cell" data-label="English">Warehouse 8</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.warehouse9">
<div class="cell" data-label="Property">updateQtyFor.warehouse9</div>
<div class="cell" data-label="Column">warehouse9_id</div>
<div class="cell" data-label="Arabic">المخزن 9</div>
<div class="cell" data-label="English">Warehouse 9</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Warehouse](/modules/supplychain/Warehouse.md) 
</div>
</div>

<div class="row searchable" id="updateQtyFor.warehouseApplyType">
<div class="cell" data-label="Property">updateQtyFor.warehouseApplyType</div>
<div class="cell" data-label="Column">warehouseApplyType</div>
<div class="cell" data-label="Arabic">نوع التطبيق على المخازن</div>
<div class="cell" data-label="English">Warehouse Apply Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>


</div>
</div>

