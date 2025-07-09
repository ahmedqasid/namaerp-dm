# POS.POSItem (Table Name: POSItem)

<ContentFilter/>


<div class='searchable'>
<a href='#customerCodes'>customerCodes (POSCustomerItemCode) </a> , <a href='#details'>details (POSItemDimsDetail) </a> , <a href='#manfCodes'>manfCodes (POSManufacturerItemCode) </a> , <a href='#revisions'>revisions (POSItemRevision) </a> , <a href='#sizesAndColors'>sizesAndColors (POSSizesAndColors) </a> , <a href='#units'>units (POSItemUnit) </a>
</div>

<div class='searchable'>

## Fields

<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="altCode">
<div class="cell" data-label="Property">altCode</div>
<div class="cell" data-label="Column">altCode</div>
<div class="cell" data-label="Arabic">الكود الإنجليزي</div>
<div class="cell" data-label="English">English Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="baseUnit">
<div class="cell" data-label="Property">baseUnit</div>
<div class="cell" data-label="Column">baseUnit_id</div>
<div class="cell" data-label="Arabic">الوحدة الأساسية(الأصغر)</div>
<div class="cell" data-label="English">Base Unit(Smallest)</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [POS.POSUnit](/entities/pos-app/POS.POSUnit.md) 
</div>
</div>

<div class="row searchable" id="brand">
<div class="cell" data-label="Property">brand</div>
<div class="cell" data-label="Column">brand_id</div>
<div class="cell" data-label="Arabic">الماركة</div>
<div class="cell" data-label="English">Item Brand</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [POS.POSItemBrand](/entities/pos-app/POS.POSItemBrand.md) 
</div>
</div>

<div class="row searchable" id="category1">
<div class="cell" data-label="Property">category1</div>
<div class="cell" data-label="Column">category1_id</div>
<div class="cell" data-label="Arabic">فئة الصنف1</div>
<div class="cell" data-label="English">Item Category1</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [POS.POSItemCategory](/entities/pos-app/POS.POSItemCategory.md) 
</div>
</div>

<div class="row searchable" id="category2">
<div class="cell" data-label="Property">category2</div>
<div class="cell" data-label="Column">category2_id</div>
<div class="cell" data-label="Arabic">فئة الصنف2</div>
<div class="cell" data-label="English">Item Category2</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [POS.POSItemCategory](/entities/pos-app/POS.POSItemCategory.md) 
</div>
</div>

<div class="row searchable" id="category3">
<div class="cell" data-label="Property">category3</div>
<div class="cell" data-label="Column">category3_id</div>
<div class="cell" data-label="Arabic">فئة الصنف3</div>
<div class="cell" data-label="English">Item Category3</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [POS.POSItemCategory](/entities/pos-app/POS.POSItemCategory.md) 
</div>
</div>

<div class="row searchable" id="category4">
<div class="cell" data-label="Property">category4</div>
<div class="cell" data-label="Column">category4_id</div>
<div class="cell" data-label="Arabic">فئة الصنف4</div>
<div class="cell" data-label="English">Item Category4</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [POS.POSItemCategory](/entities/pos-app/POS.POSItemCategory.md) 
</div>
</div>

<div class="row searchable" id="category5">
<div class="cell" data-label="Property">category5</div>
<div class="cell" data-label="Column">category5_id</div>
<div class="cell" data-label="Arabic">فئة الصنف5</div>
<div class="cell" data-label="English">Item Category5</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [POS.POSItemCategory](/entities/pos-app/POS.POSItemCategory.md) 
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
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="comitBefore">
<div class="cell" data-label="Property">comitBefore</div>
<div class="cell" data-label="Column">comitBefore</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="creationDate">
<div class="cell" data-label="Property">creationDate</div>
<div class="cell" data-label="Column">creationDate</div>
<div class="cell" data-label="Arabic">تاريخ الإنشاء</div>
<div class="cell" data-label="English">Creation Date</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="defaultSalesUnit">
<div class="cell" data-label="Property">defaultSalesUnit</div>
<div class="cell" data-label="Column">defaultSalesUnit_id</div>
<div class="cell" data-label="Arabic">وحدة البيع</div>
<div class="cell" data-label="English">Default Sales Unit</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [POS.POSUnit](/entities/pos-app/POS.POSUnit.md) 
</div>
</div>

<div class="row searchable" id="defaultSupplier">
<div class="cell" data-label="Property">defaultSupplier</div>
<div class="cell" data-label="Column">defaultSupplier_id</div>
<div class="cell" data-label="Arabic">المورد الافتراضي</div>
<div class="cell" data-label="English">Default Supplier</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [POS.POSVendor](/entities/pos-app/POS.POSVendor.md) 
</div>
</div>

<div class="row searchable" id="genericDims.analysisSet.code">
<div class="cell" data-label="Property">genericDims.analysisSet.code</div>
<div class="cell" data-label="Column">analysisSetCode</div>
<div class="cell" data-label="Arabic">الكود</div>
<div class="cell" data-label="English">Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="genericDims.analysisSet.id">
<div class="cell" data-label="Property">genericDims.analysisSet.id</div>
<div class="cell" data-label="Column">analysisSetId</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="genericDims.branch.code">
<div class="cell" data-label="Property">genericDims.branch.code</div>
<div class="cell" data-label="Column">branchCode</div>
<div class="cell" data-label="Arabic">الكود</div>
<div class="cell" data-label="English">Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="genericDims.branch.id">
<div class="cell" data-label="Property">genericDims.branch.id</div>
<div class="cell" data-label="Column">branchId</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="genericDims.department.code">
<div class="cell" data-label="Property">genericDims.department.code</div>
<div class="cell" data-label="Column">departmentCode</div>
<div class="cell" data-label="Arabic">الكود</div>
<div class="cell" data-label="English">Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="genericDims.department.id">
<div class="cell" data-label="Property">genericDims.department.id</div>
<div class="cell" data-label="Column">departmentId</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="genericDims.legalEntity.code">
<div class="cell" data-label="Property">genericDims.legalEntity.code</div>
<div class="cell" data-label="Column">legalEntityCode</div>
<div class="cell" data-label="Arabic">الكود</div>
<div class="cell" data-label="English">Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="genericDims.legalEntity.id">
<div class="cell" data-label="Property">genericDims.legalEntity.id</div>
<div class="cell" data-label="Column">legalEntityId</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="genericDims.sector.code">
<div class="cell" data-label="Property">genericDims.sector.code</div>
<div class="cell" data-label="Column">sectorCode</div>
<div class="cell" data-label="Arabic">الكود</div>
<div class="cell" data-label="English">Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="genericDims.sector.id">
<div class="cell" data-label="Property">genericDims.sector.id</div>
<div class="cell" data-label="Column">sectorId</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="hasColor">
<div class="cell" data-label="Property">hasColor</div>
<div class="cell" data-label="Column">hasColor</div>
<div class="cell" data-label="Arabic">له ألوان</div>
<div class="cell" data-label="English">Has Colors</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="hasImage">
<div class="cell" data-label="Property">hasImage</div>
<div class="cell" data-label="Column">hasImage</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="hasLot">
<div class="cell" data-label="Property">hasLot</div>
<div class="cell" data-label="Column">hasLot</div>
<div class="cell" data-label="Arabic">له شحنات</div>
<div class="cell" data-label="English">Has Lot</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="hasPackages">
<div class="cell" data-label="Property">hasPackages</div>
<div class="cell" data-label="Column">hasPackages</div>
<div class="cell" data-label="Arabic">يوضع بصناديق</div>
<div class="cell" data-label="English">Has Packages</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="hasRevisions">
<div class="cell" data-label="Property">hasRevisions</div>
<div class="cell" data-label="Column">hasRevisions</div>
<div class="cell" data-label="Arabic">له إصدارات</div>
<div class="cell" data-label="English">Has Revisions</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="hasSerial">
<div class="cell" data-label="Property">hasSerial</div>
<div class="cell" data-label="Column">hasSerial</div>
<div class="cell" data-label="Arabic">له رقم مسلسل</div>
<div class="cell" data-label="English">Has Serial</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="hasSize">
<div class="cell" data-label="Property">hasSize</div>
<div class="cell" data-label="Column">hasSize</div>
<div class="cell" data-label="Arabic">له مقاسات</div>
<div class="cell" data-label="English">Has Size</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="id">
<div class="cell" data-label="Property">id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="imgDownloadLink">
<div class="cell" data-label="Property">imgDownloadLink</div>
<div class="cell" data-label="Column">imgDownloadLink</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="itemClass1">
<div class="cell" data-label="Property">itemClass1</div>
<div class="cell" data-label="Column">itemClass1_id</div>
<div class="cell" data-label="Arabic">تصنيف 1</div>
<div class="cell" data-label="English">Class 1</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [POS.POSItemClass1](/entities/pos-app/POS.POSItemClass1.md) 
</div>
</div>

<div class="row searchable" id="itemClass10">
<div class="cell" data-label="Property">itemClass10</div>
<div class="cell" data-label="Column">itemClass10_id</div>
<div class="cell" data-label="Arabic">تصنيف 10</div>
<div class="cell" data-label="English">Class 10</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [POS.POSItemClass10](/entities/pos-app/POS.POSItemClass10.md) 
</div>
</div>

<div class="row searchable" id="itemClass2">
<div class="cell" data-label="Property">itemClass2</div>
<div class="cell" data-label="Column">itemClass2_id</div>
<div class="cell" data-label="Arabic">تصنيف 2</div>
<div class="cell" data-label="English">Class 2</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [POS.POSItemClass2](/entities/pos-app/POS.POSItemClass2.md) 
</div>
</div>

<div class="row searchable" id="itemClass3">
<div class="cell" data-label="Property">itemClass3</div>
<div class="cell" data-label="Column">itemClass3_id</div>
<div class="cell" data-label="Arabic">تصنيف 3</div>
<div class="cell" data-label="English">Class 3</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [POS.POSItemClass3](/entities/pos-app/POS.POSItemClass3.md) 
</div>
</div>

<div class="row searchable" id="itemClass4">
<div class="cell" data-label="Property">itemClass4</div>
<div class="cell" data-label="Column">itemClass4_id</div>
<div class="cell" data-label="Arabic">تصنيف 4</div>
<div class="cell" data-label="English">Class 4</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [POS.POSItemClass4](/entities/pos-app/POS.POSItemClass4.md) 
</div>
</div>

<div class="row searchable" id="itemClass5">
<div class="cell" data-label="Property">itemClass5</div>
<div class="cell" data-label="Column">itemClass5_id</div>
<div class="cell" data-label="Arabic">تصنيف 5</div>
<div class="cell" data-label="English">Class 5</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [POS.POSItemClass5](/entities/pos-app/POS.POSItemClass5.md) 
</div>
</div>

<div class="row searchable" id="itemClass6">
<div class="cell" data-label="Property">itemClass6</div>
<div class="cell" data-label="Column">itemClass6_id</div>
<div class="cell" data-label="Arabic">تصنيف 6</div>
<div class="cell" data-label="English">Class 6</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [POS.POSItemClass6](/entities/pos-app/POS.POSItemClass6.md) 
</div>
</div>

<div class="row searchable" id="itemClass7">
<div class="cell" data-label="Property">itemClass7</div>
<div class="cell" data-label="Column">itemClass7_id</div>
<div class="cell" data-label="Arabic">تصنيف 7</div>
<div class="cell" data-label="English">Class 7</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [POS.POSItemClass7](/entities/pos-app/POS.POSItemClass7.md) 
</div>
</div>

<div class="row searchable" id="itemClass8">
<div class="cell" data-label="Property">itemClass8</div>
<div class="cell" data-label="Column">itemClass8_id</div>
<div class="cell" data-label="Arabic">تصنيف 8</div>
<div class="cell" data-label="English">Class 8</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [POS.POSItemClass8](/entities/pos-app/POS.POSItemClass8.md) 
</div>
</div>

<div class="row searchable" id="itemClass9">
<div class="cell" data-label="Property">itemClass9</div>
<div class="cell" data-label="Column">itemClass9_id</div>
<div class="cell" data-label="Arabic">تصنيف 9</div>
<div class="cell" data-label="English">Class 9</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [POS.POSItemClass9](/entities/pos-app/POS.POSItemClass9.md) 
</div>
</div>

<div class="row searchable" id="itemConfig">
<div class="cell" data-label="Property">itemConfig</div>
<div class="cell" data-label="Column">itemConfig_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [POS.POSItemConfig](/entities/pos-app/POS.POSItemConfig.md) 
</div>
</div>

<div class="row searchable" id="itemType">
<div class="cell" data-label="Property">itemType</div>
<div class="cell" data-label="Column">itemType</div>
<div class="cell" data-label="Arabic">النوع</div>
<div class="cell" data-label="English">Type</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="lastUpdateDate">
<div class="cell" data-label="Property">lastUpdateDate</div>
<div class="cell" data-label="Column">lastUpdateDate</div>
<div class="cell" data-label="Arabic">تاريخ اخر تحديث</div>
<div class="cell" data-label="English">Last update Date</div>
<div class="cell" data-label="Type">DateAndTime</div>

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

<div class="row searchable" id="racksCodes">
<div class="cell" data-label="Property">racksCodes</div>
<div class="cell" data-label="Column">racksCodes</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="replaceable">
<div class="cell" data-label="Property">replaceable</div>
<div class="cell" data-label="Column">replaceable</div>
<div class="cell" data-label="Arabic">يمكن إستبداله</div>
<div class="cell" data-label="English">Replaceable</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="returnable">
<div class="cell" data-label="Property">returnable</div>
<div class="cell" data-label="Column">returnable</div>
<div class="cell" data-label="Arabic">مرتجع</div>
<div class="cell" data-label="English">Returnable</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="section">
<div class="cell" data-label="Property">section</div>
<div class="cell" data-label="Column">section_id</div>
<div class="cell" data-label="Arabic">قسم الصنف</div>
<div class="cell" data-label="English">Item Section</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [POS.POSItemSection](/entities/pos-app/POS.POSItemSection.md) 
</div>
</div>

<div class="row searchable" id="selected">
<div class="cell" data-label="Property">selected</div>
<div class="cell" data-label="Column">selected</div>
<div class="cell" data-label="Arabic">اختيار</div>
<div class="cell" data-label="English">Selected</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="sellable">
<div class="cell" data-label="Property">sellable</div>
<div class="cell" data-label="Column">sellable</div>
<div class="cell" data-label="Arabic">يمكن بيعه</div>
<div class="cell" data-label="English">Sellable</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="taxPlan">
<div class="cell" data-label="Property">taxPlan</div>
<div class="cell" data-label="Column">taxPlan_id</div>
<div class="cell" data-label="Arabic"> سياسة الضريبة</div>
<div class="cell" data-label="English"> Tax Plan</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [POS.POSTaxPlan](/entities/pos-app/POS.POSTaxPlan.md) 
</div>
</div>

<div class="row searchable" id="writeFailures">
<div class="cell" data-label="Property">writeFailures</div>
<div class="cell" data-label="Column">writeFailures</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>


</div>

<div id='customerCodes' title='customerCodes' class='searchable'>

## customerCodes (أكواد العملاء - Customer Codes)
**Table Name:** POSCustomerItemCode, **Join Column:** posItem
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="customerCodes.code">
<div class="cell" data-label="Property">customerCodes.code</div>
<div class="cell" data-label="Column">code</div>
<div class="cell" data-label="Arabic">الكود</div>
<div class="cell" data-label="English">Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="customerCodes.id">
<div class="cell" data-label="Property">customerCodes.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="customerCodes.lineNumber">
<div class="cell" data-label="Property">customerCodes.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="customerCodes.posItem">
<div class="cell" data-label="Property">customerCodes.posItem</div>
<div class="cell" data-label="Column">posItem</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [POS.POSItem](/entities/pos-app/POS.POSItem.md) 
</div>
</div>


</div>

<div id='details' title='details' class='searchable'>

## details (التفاصيل - Details)
**Table Name:** POSItemDimsDetail, **Join Column:** posItem
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="details.defaultLocator">
<div class="cell" data-label="Property">details.defaultLocator</div>
<div class="cell" data-label="Column">defaultLocator</div>
<div class="cell" data-label="Arabic">الموقع الإفتراضي</div>
<div class="cell" data-label="English">Locator</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="details.id">
<div class="cell" data-label="Property">details.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="details.lineNumber">
<div class="cell" data-label="Property">details.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="details.location">
<div class="cell" data-label="Property">details.location</div>
<div class="cell" data-label="Column">location_id</div>
<div class="cell" data-label="Arabic">الموقع المخزني</div>
<div class="cell" data-label="English">Location</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [POS.POSLocation](/entities/pos-app/POS.POSLocation.md) 
</div>
</div>

<div class="row searchable" id="details.posItem">
<div class="cell" data-label="Property">details.posItem</div>
<div class="cell" data-label="Column">posItem</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [POS.POSItem](/entities/pos-app/POS.POSItem.md) 
</div>
</div>

<div class="row searchable" id="details.warehouse">
<div class="cell" data-label="Property">details.warehouse</div>
<div class="cell" data-label="Column">warehouse_id</div>
<div class="cell" data-label="Arabic">المخزن</div>
<div class="cell" data-label="English">Warehouse</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [POS.POSWarehouse](/entities/pos-app/POS.POSWarehouse.md) 
</div>
</div>


</div>

<div id='manfCodes' title='manfCodes' class='searchable'>

## manfCodes (أكواد الموردين - Supplier Codes)
**Table Name:** POSManufacturerItemCode, **Join Column:** posItem
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="manfCodes.code">
<div class="cell" data-label="Property">manfCodes.code</div>
<div class="cell" data-label="Column">code</div>
<div class="cell" data-label="Arabic">الكود</div>
<div class="cell" data-label="English">Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="manfCodes.id">
<div class="cell" data-label="Property">manfCodes.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="manfCodes.lineNumber">
<div class="cell" data-label="Property">manfCodes.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="manfCodes.posItem">
<div class="cell" data-label="Property">manfCodes.posItem</div>
<div class="cell" data-label="Column">posItem</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [POS.POSItem](/entities/pos-app/POS.POSItem.md) 
</div>
</div>


</div>

<div id='revisions' title='revisions' class='searchable'>

## revisions (إصدارات - Revisions)
**Table Name:** POSItemRevision, **Join Column:** posItem
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="revisions.code">
<div class="cell" data-label="Property">revisions.code</div>
<div class="cell" data-label="Column">code</div>
<div class="cell" data-label="Arabic">الكود</div>
<div class="cell" data-label="English">Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="revisions.defaultPrice">
<div class="cell" data-label="Property">revisions.defaultPrice</div>
<div class="cell" data-label="Column">defaultPrice</div>
<div class="cell" data-label="Arabic">السعر الافتراضي</div>
<div class="cell" data-label="English">Default Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="revisions.defaultRevision">
<div class="cell" data-label="Property">revisions.defaultRevision</div>
<div class="cell" data-label="Column">defaultRevision</div>
<div class="cell" data-label="Arabic"> الإفتراضي</div>
<div class="cell" data-label="English"> Default</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="revisions.defaultUnit">
<div class="cell" data-label="Property">revisions.defaultUnit</div>
<div class="cell" data-label="Column">defaultUnit_id</div>
<div class="cell" data-label="Arabic">الوحدة الافتراضية</div>
<div class="cell" data-label="English">Default Unit</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [POS.POSUnit](/entities/pos-app/POS.POSUnit.md) 
</div>
</div>

<div class="row searchable" id="revisions.id">
<div class="cell" data-label="Property">revisions.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="revisions.lineNumber">
<div class="cell" data-label="Property">revisions.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="revisions.name1">
<div class="cell" data-label="Property">revisions.name1</div>
<div class="cell" data-label="Column">name1</div>
<div class="cell" data-label="Arabic">الاسم العربي</div>
<div class="cell" data-label="English">Name1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="revisions.name2">
<div class="cell" data-label="Property">revisions.name2</div>
<div class="cell" data-label="Column">name2</div>
<div class="cell" data-label="Arabic">الاسم الإنجليزي</div>
<div class="cell" data-label="English">Name2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="revisions.posItem">
<div class="cell" data-label="Property">revisions.posItem</div>
<div class="cell" data-label="Column">posItem</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [POS.POSItem](/entities/pos-app/POS.POSItem.md) 
</div>
</div>

<div class="row searchable" id="revisions.revisionId">
<div class="cell" data-label="Property">revisions.revisionId</div>
<div class="cell" data-label="Column">revisionId</div>
<div class="cell" data-label="Arabic">الإصدار | الإصدار</div>
<div class="cell" data-label="English">Revision | Revision</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="revisions.revisionName">
<div class="cell" data-label="Property">revisions.revisionName</div>
<div class="cell" data-label="Column">revisionName</div>
<div class="cell" data-label="Arabic">الإصدار | اسم الإصدار</div>
<div class="cell" data-label="English">Revision | Revision Name</div>
<div class="cell" data-label="Type">Text</div>

</div>


</div>

<div id='sizesAndColors' title='sizesAndColors' class='searchable'>

## sizesAndColors (مقاسات و ألوان - Sizes and Colors)
**Table Name:** POSSizesAndColors, **Join Column:** posItem
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="sizesAndColors.code">
<div class="cell" data-label="Property">sizesAndColors.code</div>
<div class="cell" data-label="Column">code</div>
<div class="cell" data-label="Arabic">الكود</div>
<div class="cell" data-label="English">Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="sizesAndColors.color">
<div class="cell" data-label="Property">sizesAndColors.color</div>
<div class="cell" data-label="Column">color</div>
<div class="cell" data-label="Arabic">اللون | الكود</div>
<div class="cell" data-label="English">Color | Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="sizesAndColors.colorName">
<div class="cell" data-label="Property">sizesAndColors.colorName</div>
<div class="cell" data-label="Column">colorName</div>
<div class="cell" data-label="Arabic">اللون | الأسم</div>
<div class="cell" data-label="English">Color | Name</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="sizesAndColors.defaultPrice">
<div class="cell" data-label="Property">sizesAndColors.defaultPrice</div>
<div class="cell" data-label="Column">defaultPrice</div>
<div class="cell" data-label="Arabic">السعر الافتراضي</div>
<div class="cell" data-label="English">Default Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="sizesAndColors.id">
<div class="cell" data-label="Property">sizesAndColors.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="sizesAndColors.lineNumber">
<div class="cell" data-label="Property">sizesAndColors.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="sizesAndColors.name1">
<div class="cell" data-label="Property">sizesAndColors.name1</div>
<div class="cell" data-label="Column">name1</div>
<div class="cell" data-label="Arabic">الاسم العربي</div>
<div class="cell" data-label="English">Name1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="sizesAndColors.name2">
<div class="cell" data-label="Property">sizesAndColors.name2</div>
<div class="cell" data-label="Column">name2</div>
<div class="cell" data-label="Arabic">الاسم الإنجليزي</div>
<div class="cell" data-label="English">Name2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="sizesAndColors.posItem">
<div class="cell" data-label="Property">sizesAndColors.posItem</div>
<div class="cell" data-label="Column">posItem</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [POS.POSItem](/entities/pos-app/POS.POSItem.md) 
</div>
</div>

<div class="row searchable" id="sizesAndColors.size">
<div class="cell" data-label="Property">sizesAndColors.size</div>
<div class="cell" data-label="Column">size</div>
<div class="cell" data-label="Arabic">المقاس | الكود</div>
<div class="cell" data-label="English">Size | Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="sizesAndColors.sizeName">
<div class="cell" data-label="Property">sizesAndColors.sizeName</div>
<div class="cell" data-label="Column">sizeName</div>
<div class="cell" data-label="Arabic">المقاس | الأسم</div>
<div class="cell" data-label="English">Size | Name</div>
<div class="cell" data-label="Type">Text</div>

</div>


</div>

<div id='units' title='units' class='searchable'>

## units ( - )
**Table Name:** POSItemUnit, **Join Column:** posItem
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="units.code">
<div class="cell" data-label="Property">units.code</div>
<div class="cell" data-label="Column">code</div>
<div class="cell" data-label="Arabic">الكود</div>
<div class="cell" data-label="English">Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="units.defaultPrice">
<div class="cell" data-label="Property">units.defaultPrice</div>
<div class="cell" data-label="Column">defaultPrice</div>
<div class="cell" data-label="Arabic">السعر الافتراضي</div>
<div class="cell" data-label="English">Default Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="units.id">
<div class="cell" data-label="Property">units.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="units.lineNumber">
<div class="cell" data-label="Property">units.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="units.minPrice">
<div class="cell" data-label="Property">units.minPrice</div>
<div class="cell" data-label="Column">minPrice</div>
<div class="cell" data-label="Arabic">أقل سعر</div>
<div class="cell" data-label="English">Min Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="units.posItem">
<div class="cell" data-label="Property">units.posItem</div>
<div class="cell" data-label="Column">posItem</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [POS.POSItem](/entities/pos-app/POS.POSItem.md) 
</div>
</div>

<div class="row searchable" id="units.rateToBase">
<div class="cell" data-label="Property">units.rateToBase</div>
<div class="cell" data-label="Column">rateToBase</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="units.unit">
<div class="cell" data-label="Property">units.unit</div>
<div class="cell" data-label="Column">unit_id</div>
<div class="cell" data-label="Arabic">وحدة سكنية</div>
<div class="cell" data-label="English">Housing units</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [POS.POSUnit](/entities/pos-app/POS.POSUnit.md) 
</div>
</div>


</div>

