# FRMSalesPriceList
**Arabic:** قائمة أسعار مبيعات خدمات - قوائم أسعار مبيعات خدمات
**English:** Service Sales Price List - Service Sales Price Lists

<ContentFilter/>


<div class='searchable'>
<a href='#customClearanceDetails'>customClearanceDetails (FRMSPLCustomClearanceLine) </a> , <a href='#gensetDetails'>gensetDetails (FRMSPLGensetLine) </a> , <a href='#oceanFreightDetails'>oceanFreightDetails (FRMSPLOceanFreightLine) </a> , <a href='#othersDetails'>othersDetails (FRMSPLOthersLine) </a> , <a href='#truckingDetails'>truckingDetails (FRMSPLTruckingLine) </a>
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
</div><div class="row searchable" id="agencyFees">
<div class="cell" data-label="Property">agencyFees</div>
<div class="cell" data-label="Column">agencyFees</div>
<div class="cell" data-label="Arabic">رسوم الوكيل</div>
<div class="cell" data-label="English">Agency Fees</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="allInRate">
<div class="cell" data-label="Property">allInRate</div>
<div class="cell" data-label="Column">allInRate</div>
<div class="cell" data-label="Arabic">All In Rate</div>
<div class="cell" data-label="English">All In Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="analysisSet">
<div class="cell" data-label="Property">analysisSet</div>
<div class="cell" data-label="Column">analysisSet_id</div>
<div class="cell" data-label="Arabic">المجموعة التحليلية</div>
<div class="cell" data-label="English">Analysis set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/entities/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="analysisSetId">
<div class="cell" data-label="Property">analysisSetId</div>
<div class="cell" data-label="Column">analysisSet_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="branch">
<div class="cell" data-label="Property">branch</div>
<div class="cell" data-label="Column">branch_id</div>
<div class="cell" data-label="Arabic">الفرع</div>
<div class="cell" data-label="English">Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/entities/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="branchId">
<div class="cell" data-label="Property">branchId</div>
<div class="cell" data-label="Column">branch_id</div>
<div class="cell" data-label="Arabic">Branch ID</div>
<div class="cell" data-label="English">Branch ID</div>
<div class="cell" data-label="Type">ID</div>

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

<div class="row searchable" id="commitedBefore">
<div class="cell" data-label="Property">commitedBefore</div>
<div class="cell" data-label="Column">commitedBefore</div>
<div class="cell" data-label="Arabic">تم الحفظ مسبقا</div>
<div class="cell" data-label="English">Commited Before</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="commodity">
<div class="cell" data-label="Property">commodity</div>
<div class="cell" data-label="Column">commodity_id</div>
<div class="cell" data-label="Arabic">السلعة</div>
<div class="cell" data-label="English">Commodity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FRMCommodity](/entities/frm/FRMCommodity.md) 
</div>
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

<div class="row searchable" id="currency">
<div class="cell" data-label="Property">currency</div>
<div class="cell" data-label="Column">currency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/entities/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="currentApprovalCase">
<div class="cell" data-label="Property">currentApprovalCase</div>
<div class="cell" data-label="Column">currentApprovalCase_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type"></div>
<div class="cell" data-label="Foreign Table">

 [ApprovalCase](/entities/system-tables/ApprovalCase.md) 
</div>
</div>

<div class="row searchable" id="currentVersion">
<div class="cell" data-label="Property">currentVersion</div>
<div class="cell" data-label="Column">currentVersion</div>
<div class="cell" data-label="Arabic">النسخة الحالية</div>
<div class="cell" data-label="English">Current Version</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="customClearanceConditions">
<div class="cell" data-label="Property">customClearanceConditions</div>
<div class="cell" data-label="Column">customClearanceConditions</div>
<div class="cell" data-label="Arabic">شروط التخليص الجمركى</div>
<div class="cell" data-label="English">Custom Clearance Conditions</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="customClearanceMarkup.percentage">
<div class="cell" data-label="Property">customClearanceMarkup.percentage</div>
<div class="cell" data-label="Column">ccmPercentage</div>
<div class="cell" data-label="Arabic">نسبة هامش ربح التخليص الجمركي</div>
<div class="cell" data-label="English">Custom Clearance Markup Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="customClearanceMarkup.value">
<div class="cell" data-label="Property">customClearanceMarkup.value</div>
<div class="cell" data-label="Column">ccmValue</div>
<div class="cell" data-label="Arabic">قيمة هامش ربح التخليص الجمركي</div>
<div class="cell" data-label="English">Custom Clearance Markup Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="customViewName">
<div class="cell" data-label="Property">customViewName</div>
<div class="cell" data-label="Column">customViewName</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

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

<div class="row searchable" id="department">
<div class="cell" data-label="Property">department</div>
<div class="cell" data-label="Column">department_id</div>
<div class="cell" data-label="Arabic">الإدارة</div>
<div class="cell" data-label="English">Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/entities/basic/Department.md) 
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

<div class="row searchable" id="docCategory">
<div class="cell" data-label="Property">docCategory</div>
<div class="cell" data-label="Column">docCategory_id</div>
<div class="cell" data-label="Arabic"> تصنيف سجل</div>
<div class="cell" data-label="English"> Record Category</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DocCategory](/entities/basic/DocCategory.md) 
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

<div class="row searchable" id="editedBy">
<div class="cell" data-label="Property">editedBy</div>
<div class="cell" data-label="Column">editedBy_id</div>
<div class="cell" data-label="Arabic">بواسطة</div>
<div class="cell" data-label="English">Edited By</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [NaMaUser](/entities/system-tables/NaMaUser.md) 
</div>
</div>

<div class="row searchable" id="elementMasterGroup">
<div class="cell" data-label="Property">elementMasterGroup</div>
<div class="cell" data-label="Column">elementMasterGroup_id</div>
<div class="cell" data-label="Arabic">مجموعة عناصر قوائم أسعار الشراء</div>
<div class="cell" data-label="English">Price Lists Elements Master Group</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MasterGroup](/entities/basic/MasterGroup.md) 
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

<div class="row searchable" id="firstAuthor">
<div class="cell" data-label="Property">firstAuthor</div>
<div class="cell" data-label="Column">firstAuthor_id</div>
<div class="cell" data-label="Arabic">منشئ السجل</div>
<div class="cell" data-label="English">First Author</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [NaMaUser](/entities/system-tables/NaMaUser.md) 
</div>
</div>

<div class="row searchable" id="firstAuthorId">
<div class="cell" data-label="Property">firstAuthorId</div>
<div class="cell" data-label="Column">firstAuthor_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="frmValidFrom">
<div class="cell" data-label="Property">frmValidFrom</div>
<div class="cell" data-label="Column">frmValidFrom</div>
<div class="cell" data-label="Arabic">صالح | من</div>
<div class="cell" data-label="English">Validity | From</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="frmValidTo">
<div class="cell" data-label="Property">frmValidTo</div>
<div class="cell" data-label="Column">frmValidTo</div>
<div class="cell" data-label="Arabic">صالح | إلى</div>
<div class="cell" data-label="English">Validity | To</div>
<div class="cell" data-label="Type">Date</div>

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

<div class="row searchable" id="gensetConditions">
<div class="cell" data-label="Property">gensetConditions</div>
<div class="cell" data-label="Column">gensetConditions</div>
<div class="cell" data-label="Arabic">شروط المولدات</div>
<div class="cell" data-label="English">Genset Conditions</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="gensetMarkup.percentage">
<div class="cell" data-label="Property">gensetMarkup.percentage</div>
<div class="cell" data-label="Column">gensetMarkupPercentage</div>
<div class="cell" data-label="Arabic">نسبة هامش ربح المولدات</div>
<div class="cell" data-label="English">Genset Markup Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="gensetMarkup.value">
<div class="cell" data-label="Property">gensetMarkup.value</div>
<div class="cell" data-label="Column">gensetMarkupValue</div>
<div class="cell" data-label="Arabic">قيمة هامش ربح المولدات</div>
<div class="cell" data-label="English">Genset Markup Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="group">
<div class="cell" data-label="Property">group</div>
<div class="cell" data-label="Column">group_id</div>
<div class="cell" data-label="Arabic">المجموعة</div>
<div class="cell" data-label="English">Group</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [MasterGroup](/entities/basic/MasterGroup.md) 
</div>
</div>

<div class="row searchable" id="id">
<div class="cell" data-label="Property">id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="indexInParent">
<div class="cell" data-label="Property">indexInParent</div>
<div class="cell" data-label="Column">indexInParent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="isAllIn">
<div class="cell" data-label="Property">isAllIn</div>
<div class="cell" data-label="Column">isAllIn</div>
<div class="cell" data-label="Arabic">All In</div>
<div class="cell" data-label="English">All In</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="isCollect">
<div class="cell" data-label="Property">isCollect</div>
<div class="cell" data-label="Column">isCollect</div>
<div class="cell" data-label="Arabic">Is Collect</div>
<div class="cell" data-label="English">Is Collect</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="isCustomClearance">
<div class="cell" data-label="Property">isCustomClearance</div>
<div class="cell" data-label="Column">isCustomClearance</div>
<div class="cell" data-label="Arabic">تخليص جمركى</div>
<div class="cell" data-label="English">Custom Clearance</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="isExport">
<div class="cell" data-label="Property">isExport</div>
<div class="cell" data-label="Column">isExport</div>
<div class="cell" data-label="Arabic">تصدير</div>
<div class="cell" data-label="English">Export</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="isGenset">
<div class="cell" data-label="Property">isGenset</div>
<div class="cell" data-label="Column">isGenset</div>
<div class="cell" data-label="Arabic">مولدات</div>
<div class="cell" data-label="English">Genset</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="isImport">
<div class="cell" data-label="Property">isImport</div>
<div class="cell" data-label="Column">isImport</div>
<div class="cell" data-label="Arabic">استيراد</div>
<div class="cell" data-label="English">Import</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="isOceanFreight">
<div class="cell" data-label="Property">isOceanFreight</div>
<div class="cell" data-label="Column">isOceanFreight</div>
<div class="cell" data-label="Arabic">شحن بحرى</div>
<div class="cell" data-label="English">Ocean Freight</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="isOther">
<div class="cell" data-label="Property">isOther</div>
<div class="cell" data-label="Column">isOther</div>
<div class="cell" data-label="Arabic">آخرى</div>
<div class="cell" data-label="English">Other</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="isPrepaid">
<div class="cell" data-label="Property">isPrepaid</div>
<div class="cell" data-label="Column">isPrepaid</div>
<div class="cell" data-label="Arabic">Is Prepaid</div>
<div class="cell" data-label="English">Is Prepaid</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="isTrucking">
<div class="cell" data-label="Property">isTrucking</div>
<div class="cell" data-label="Column">isTrucking</div>
<div class="cell" data-label="Arabic">نقل بالشاحنات</div>
<div class="cell" data-label="English">Trucking</div>
<div class="cell" data-label="Type">Boolean</div>

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

 [LegalEntity](/entities/basic/LegalEntity.md) 
</div>
</div>

<div class="row searchable" id="legalEntityId">
<div class="cell" data-label="Property">legalEntityId</div>
<div class="cell" data-label="Column">legalEntity_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="lockVersion">
<div class="cell" data-label="Property">lockVersion</div>
<div class="cell" data-label="Column">lockVersion</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="mainFile">
<div class="cell" data-label="Property">mainFile</div>
<div class="cell" data-label="Column">mainFile_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/entities/system-tables/LargeData.md) 
</div>
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

<div class="row searchable" id="oceanFreightConditions">
<div class="cell" data-label="Property">oceanFreightConditions</div>
<div class="cell" data-label="Column">oceanFreightConditions</div>
<div class="cell" data-label="Arabic">شروط الشحن البحرى</div>
<div class="cell" data-label="English">Ocean Freight Conditions</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="oceanFreightMarkup.percentage">
<div class="cell" data-label="Property">oceanFreightMarkup.percentage</div>
<div class="cell" data-label="Column">oceanFreightMarkupPercentage</div>
<div class="cell" data-label="Arabic">نسبة هامش ربح الشحن البحري</div>
<div class="cell" data-label="English">Ocean Freight Markup Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="oceanFreightMarkup.value">
<div class="cell" data-label="Property">oceanFreightMarkup.value</div>
<div class="cell" data-label="Column">oceanFreightMarkupValue</div>
<div class="cell" data-label="Arabic">قيمة هامش ربح الشحن البحري</div>
<div class="cell" data-label="English">Ocean Freight Markup Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="othersMarkup.percentage">
<div class="cell" data-label="Property">othersMarkup.percentage</div>
<div class="cell" data-label="Column">othersMarkupPercentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="othersMarkup.value">
<div class="cell" data-label="Property">othersMarkup.value</div>
<div class="cell" data-label="Column">othersMarkupValue</div>
<div class="cell" data-label="Arabic">القيمة</div>
<div class="cell" data-label="English">Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="parentCode">
<div class="cell" data-label="Property">parentCode</div>
<div class="cell" data-label="Column">parentCode</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
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

<div class="row searchable" id="rate">
<div class="cell" data-label="Property">rate</div>
<div class="cell" data-label="Column">rate</div>
<div class="cell" data-label="Arabic">المعدل</div>
<div class="cell" data-label="English">Rate</div>
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

<div class="row searchable" id="ref5">
<div class="cell" data-label="Property">ref5</div>
<div class="cell gen-ref-column" data-label="Column">ref5ActualCode,  ref5Code,  ref5EntityType,  ref5Id</div>
<div class="cell" data-label="Arabic">مرجع 5</div>
<div class="cell" data-label="English">Reference 5</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="remarks">
<div class="cell" data-label="Property">remarks</div>
<div class="cell" data-label="Column">remark</div>
<div class="cell" data-label="Arabic">ملاحظات</div>
<div class="cell" data-label="English">Description</div>
<div class="cell" data-label="Type">BigText</div>

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

 [NaMaUser](/entities/system-tables/NaMaUser.md) 
</div>
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

<div class="row searchable" id="sector">
<div class="cell" data-label="Property">sector</div>
<div class="cell" data-label="Column">sector_id</div>
<div class="cell" data-label="Arabic">القطاع</div>
<div class="cell" data-label="English">Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/entities/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="sectorId">
<div class="cell" data-label="Property">sectorId</div>
<div class="cell" data-label="Column">sector_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="systemGeneratedCodePrefix">
<div class="cell" data-label="Property">systemGeneratedCodePrefix</div>
<div class="cell" data-label="Column">systemGeneratedCodePrefix</div>
<div class="cell" data-label="Arabic">System Generated Code Prefix</div>
<div class="cell" data-label="English">System Generated Code Prefix</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="truckingConditions">
<div class="cell" data-label="Property">truckingConditions</div>
<div class="cell" data-label="Column">truckingConditions</div>
<div class="cell" data-label="Arabic">شروط النقل بالشاحنات</div>
<div class="cell" data-label="English">Trucking Conditions</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="truckingMarkup.percentage">
<div class="cell" data-label="Property">truckingMarkup.percentage</div>
<div class="cell" data-label="Column">truckingMarkupPercentage</div>
<div class="cell" data-label="Arabic">نسبة هامش ربح النقل بالشاحنات</div>
<div class="cell" data-label="English">Trucking Markup Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="truckingMarkup.value">
<div class="cell" data-label="Property">truckingMarkup.value</div>
<div class="cell" data-label="Column">truckingMarkupValue</div>
<div class="cell" data-label="Arabic">قيمة هامش ربح النقل بالشاحنات</div>
<div class="cell" data-label="English">Trucking Markup Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="updateCapability">
<div class="cell" data-label="Property">updateCapability</div>
<div class="cell" data-label="Column">updateCapability_id</div>
<div class="cell" data-label="Arabic">صلاحية التعديل</div>
<div class="cell" data-label="English">Update Capability</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SecurityCapability](/entities/basic/SecurityCapability.md) 
</div>
</div>

<div class="row searchable" id="updateCapabilityId">
<div class="cell" data-label="Property">updateCapabilityId</div>
<div class="cell" data-label="Column">updateCapability_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="usageCapability">
<div class="cell" data-label="Property">usageCapability</div>
<div class="cell" data-label="Column">usageCapability_id</div>
<div class="cell" data-label="Arabic">صلاحية الاستخدام</div>
<div class="cell" data-label="English">Usage Capability</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SecurityCapability](/entities/basic/SecurityCapability.md) 
</div>
</div>

<div class="row searchable" id="usageCapabilityId">
<div class="cell" data-label="Property">usageCapabilityId</div>
<div class="cell" data-label="Column">usageCapability_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="viewCapability">
<div class="cell" data-label="Property">viewCapability</div>
<div class="cell" data-label="Column">viewCapability_id</div>
<div class="cell" data-label="Arabic">صلاحية المطالعة</div>
<div class="cell" data-label="English">View Capability</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SecurityCapability](/entities/basic/SecurityCapability.md) 
</div>
</div>

<div class="row searchable" id="viewCapabilityId">
<div class="cell" data-label="Property">viewCapabilityId</div>
<div class="cell" data-label="Column">viewCapability_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>


</div>

<div id='customClearanceDetails' title='customClearanceDetails' class='searchable'>

## customClearanceDetails (سطور التخليص الجمركى - Custom Clearance Details)
**Table Name:** FRMSPLCustomClearanceLine, **Join Column:** fRMSalesPriceList_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="customClearanceDetails.attachment">
<div class="cell" data-label="Property">customClearanceDetails.attachment</div>
<div class="cell" data-label="Column">attachment_id</div>
<div class="cell" data-label="Arabic">مرفق</div>
<div class="cell" data-label="English">Attachment</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/entities/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="customClearanceDetails.customer">
<div class="cell" data-label="Property">customClearanceDetails.customer</div>
<div class="cell" data-label="Column">customer_id</div>
<div class="cell" data-label="Arabic">العميل</div>
<div class="cell" data-label="English">Customer</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Customer](/entities/basic/Customer.md) 
</div>
</div>

<div class="row searchable" id="customClearanceDetails.genSalesElement">
<div class="cell" data-label="Property">customClearanceDetails.genSalesElement</div>
<div class="cell" data-label="Column">genSalesElement_id</div>
<div class="cell" data-label="Arabic">بند البيع المنشأ</div>
<div class="cell" data-label="English">Gen Sales Element</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FRMSPriceListElement](/entities/frm/FRMSPriceListElement.md) 
</div>
</div>

<div class="row searchable" id="customClearanceDetails.id">
<div class="cell" data-label="Property">customClearanceDetails.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="customClearanceDetails.lineNumber">
<div class="cell" data-label="Property">customClearanceDetails.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="customClearanceDetails.priceListLine.commodity">
<div class="cell" data-label="Property">customClearanceDetails.priceListLine.commodity</div>
<div class="cell" data-label="Column">commodity_id</div>
<div class="cell" data-label="Arabic">السلعة</div>
<div class="cell" data-label="English">Commodity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FRMCommodity](/entities/frm/FRMCommodity.md) 
</div>
</div>

<div class="row searchable" id="customClearanceDetails.priceListLine.container">
<div class="cell" data-label="Property">customClearanceDetails.priceListLine.container</div>
<div class="cell" data-label="Column">container_id</div>
<div class="cell" data-label="Arabic">الحاوية</div>
<div class="cell" data-label="English">Container</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FRMContainer](/entities/frm/FRMContainer.md) 
</div>
</div>

<div class="row searchable" id="customClearanceDetails.priceListLine.currency">
<div class="cell" data-label="Property">customClearanceDetails.priceListLine.currency</div>
<div class="cell" data-label="Column">currency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/entities/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="customClearanceDetails.priceListLine.estimatedTime">
<div class="cell" data-label="Property">customClearanceDetails.priceListLine.estimatedTime</div>
<div class="cell" data-label="Column">estimatedTime</div>
<div class="cell" data-label="Arabic">الوقت المتوقع (يوم)</div>
<div class="cell" data-label="English">Estimated Time (day/s)</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="customClearanceDetails.priceListLine.frequency">
<div class="cell" data-label="Property">customClearanceDetails.priceListLine.frequency</div>
<div class="cell" data-label="Column">frequency</div>
<div class="cell" data-label="Arabic">الموعد الدورى</div>
<div class="cell" data-label="English">Frequency</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="customClearanceDetails.priceListLine.frmServiceItem">
<div class="cell" data-label="Property">customClearanceDetails.priceListLine.frmServiceItem</div>
<div class="cell" data-label="Column">frmServiceItem_id</div>
<div class="cell" data-label="Arabic">بند الخدمة</div>
<div class="cell" data-label="English">Service Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FRMServiceItem](/entities/frm/FRMServiceItem.md) 
</div>
</div>

<div class="row searchable" id="customClearanceDetails.priceListLine.frmValidFrom">
<div class="cell" data-label="Property">customClearanceDetails.priceListLine.frmValidFrom</div>
<div class="cell" data-label="Column">frmValidFrom</div>
<div class="cell" data-label="Arabic">صالح | من</div>
<div class="cell" data-label="English">Validity | From</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="customClearanceDetails.priceListLine.frmValidTo">
<div class="cell" data-label="Property">customClearanceDetails.priceListLine.frmValidTo</div>
<div class="cell" data-label="Column">frmValidTo</div>
<div class="cell" data-label="Arabic">صالح | إلى</div>
<div class="cell" data-label="English">Validity | To</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="customClearanceDetails.priceListLine.gateInPort">
<div class="cell" data-label="Property">customClearanceDetails.priceListLine.gateInPort</div>
<div class="cell" data-label="Column">gateInPort_id</div>
<div class="cell" data-label="Arabic">ميناء الدخول</div>
<div class="cell" data-label="English">Gate In Port</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ShippingPort](/entities/frm/ShippingPort.md) 
</div>
</div>

<div class="row searchable" id="customClearanceDetails.priceListLine.gateOutPort">
<div class="cell" data-label="Property">customClearanceDetails.priceListLine.gateOutPort</div>
<div class="cell" data-label="Column">gateOutPort_id</div>
<div class="cell" data-label="Arabic">ميناء الخروج</div>
<div class="cell" data-label="English">Gate Out Port</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ShippingPort](/entities/frm/ShippingPort.md) 
</div>
</div>

<div class="row searchable" id="customClearanceDetails.priceListLine.lineCode">
<div class="cell" data-label="Property">customClearanceDetails.priceListLine.lineCode</div>
<div class="cell" data-label="Column">lineCode</div>
<div class="cell" data-label="Arabic">كود السطر</div>
<div class="cell" data-label="English">Line Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="customClearanceDetails.priceListLine.loadingPoint">
<div class="cell" data-label="Property">customClearanceDetails.priceListLine.loadingPoint</div>
<div class="cell" data-label="Column">loadingPoint_id</div>
<div class="cell" data-label="Arabic">نقطه التحميل</div>
<div class="cell" data-label="English">Loading Point</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ShippingPort](/entities/frm/ShippingPort.md) 
</div>
</div>

<div class="row searchable" id="customClearanceDetails.priceListLine.manualSalesPrice">
<div class="cell" data-label="Property">customClearanceDetails.priceListLine.manualSalesPrice</div>
<div class="cell" data-label="Column">manualSalesPrice</div>
<div class="cell" data-label="Arabic">سعر البيع | تعديل يدوى</div>
<div class="cell" data-label="English">SalesPrice | Manual Edit</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="customClearanceDetails.priceListLine.portOfDischarge">
<div class="cell" data-label="Property">customClearanceDetails.priceListLine.portOfDischarge</div>
<div class="cell" data-label="Column">portOfDischarge_id</div>
<div class="cell" data-label="Arabic">ميناء التفريغ</div>
<div class="cell" data-label="English">Port of Discharge</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ShippingPort](/entities/frm/ShippingPort.md) 
</div>
</div>

<div class="row searchable" id="customClearanceDetails.priceListLine.portOfLoading">
<div class="cell" data-label="Property">customClearanceDetails.priceListLine.portOfLoading</div>
<div class="cell" data-label="Column">portOfLoading_id</div>
<div class="cell" data-label="Arabic">ميناء التحميل</div>
<div class="cell" data-label="English">Port of Loading</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ShippingPort](/entities/frm/ShippingPort.md) 
</div>
</div>

<div class="row searchable" id="customClearanceDetails.priceListLine.pricingCost">
<div class="cell" data-label="Property">customClearanceDetails.priceListLine.pricingCost</div>
<div class="cell" data-label="Column">pricingCost</div>
<div class="cell" data-label="Arabic">تكلفة التسعير</div>
<div class="cell" data-label="English">Pricing Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="customClearanceDetails.priceListLine.purchasePrice">
<div class="cell" data-label="Property">customClearanceDetails.priceListLine.purchasePrice</div>
<div class="cell" data-label="Column">purchasePrice</div>
<div class="cell" data-label="Arabic">سعر الشراء</div>
<div class="cell" data-label="English">Purchase Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="customClearanceDetails.priceListLine.qty.uom">
<div class="cell" data-label="Property">customClearanceDetails.priceListLine.qty.uom</div>
<div class="cell" data-label="Column">qtyUom_id</div>
<div class="cell" data-label="Arabic">الكمية | وحدة</div>
<div class="cell" data-label="English">Quantity | UOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FRMUOM](/entities/frm/FRMUOM.md) 
</div>
</div>

<div class="row searchable" id="customClearanceDetails.priceListLine.qty.value">
<div class="cell" data-label="Property">customClearanceDetails.priceListLine.qty.value</div>
<div class="cell" data-label="Column">qtyValue</div>
<div class="cell" data-label="Arabic">الكمية | قيمة</div>
<div class="cell" data-label="English">Quantity | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="customClearanceDetails.priceListLine.rate">
<div class="cell" data-label="Property">customClearanceDetails.priceListLine.rate</div>
<div class="cell" data-label="Column">rate</div>
<div class="cell" data-label="Arabic">المعدل</div>
<div class="cell" data-label="English">Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="customClearanceDetails.priceListLine.salesPrice">
<div class="cell" data-label="Property">customClearanceDetails.priceListLine.salesPrice</div>
<div class="cell" data-label="Column">salesPrice</div>
<div class="cell" data-label="Arabic">سعر البيع | القيمة</div>
<div class="cell" data-label="English">SalesPrice | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="customClearanceDetails.priceListLine.selected">
<div class="cell" data-label="Property">customClearanceDetails.priceListLine.selected</div>
<div class="cell" data-label="Column">selected</div>
<div class="cell" data-label="Arabic">اختيار</div>
<div class="cell" data-label="English">Selected</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="customClearanceDetails.priceListLine.serviceProvider">
<div class="cell" data-label="Property">customClearanceDetails.priceListLine.serviceProvider</div>
<div class="cell gen-ref-column" data-label="Column">serviceProviderActualCode,  serviceProviderCode,  serviceProviderEntityType,  serviceProviderId</div>
<div class="cell" data-label="Arabic">مقدم الخدمة</div>
<div class="cell" data-label="English">Service Provider</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="customClearanceDetails.priceListLine.totalPricingCost">
<div class="cell" data-label="Property">customClearanceDetails.priceListLine.totalPricingCost</div>
<div class="cell" data-label="Column">totalPricingCost</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="customClearanceDetails.priceListLine.totalSalesPrice">
<div class="cell" data-label="Property">customClearanceDetails.priceListLine.totalSalesPrice</div>
<div class="cell" data-label="Column">totalSalesPrice</div>
<div class="cell" data-label="Arabic">إجمالى البيع</div>
<div class="cell" data-label="English">Total Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="customClearanceDetails.priceListType">
<div class="cell" data-label="Property">customClearanceDetails.priceListType</div>
<div class="cell" data-label="Column">priceListType</div>
<div class="cell" data-label="Arabic">نوع قائمة الأسعار</div>
<div class="cell" data-label="English">Price List Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="customClearanceDetails.printSalesQuotation">
<div class="cell" data-label="Property">customClearanceDetails.printSalesQuotation</div>
<div class="cell" data-label="Column">printSalesQuotation</div>
<div class="cell" data-label="Arabic">طباعة عرض سعر</div>
<div class="cell" data-label="English">Print Sales Quotation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="customClearanceDetails.purchaseElement">
<div class="cell" data-label="Property">customClearanceDetails.purchaseElement</div>
<div class="cell" data-label="Column">purchaseElement_id</div>
<div class="cell" data-label="Arabic"> بند شراء</div>
<div class="cell" data-label="English"> Purchase Element</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FRMPPriceListElement](/entities/frm/FRMPPriceListElement.md) 
</div>
</div>

<div class="row searchable" id="customClearanceDetails.purchasePriceList">
<div class="cell" data-label="Property">customClearanceDetails.purchasePriceList</div>
<div class="cell" data-label="Column">purchasePriceList_id</div>
<div class="cell" data-label="Arabic">قائمة أسعار شراء</div>
<div class="cell" data-label="English">Purchase Price List</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FRMPurchasePriceList](/entities/frm/FRMPurchasePriceList.md) 
</div>
</div>

<div class="row searchable" id="customClearanceDetails.remark">
<div class="cell" data-label="Property">customClearanceDetails.remark</div>
<div class="cell" data-label="Column">remark</div>
<div class="cell" data-label="Arabic">ملحوظة</div>
<div class="cell" data-label="English">Remark</div>
<div class="cell" data-label="Type">BigText</div>

</div>


</div>

<div id='gensetDetails' title='gensetDetails' class='searchable'>

## gensetDetails (سطور المولدات - Genset Details)
**Table Name:** FRMSPLGensetLine, **Join Column:** fRMSalesPriceList_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="gensetDetails.attachment">
<div class="cell" data-label="Property">gensetDetails.attachment</div>
<div class="cell" data-label="Column">attachment_id</div>
<div class="cell" data-label="Arabic">مرفق</div>
<div class="cell" data-label="English">Attachment</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/entities/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="gensetDetails.customer">
<div class="cell" data-label="Property">gensetDetails.customer</div>
<div class="cell" data-label="Column">customer_id</div>
<div class="cell" data-label="Arabic">العميل</div>
<div class="cell" data-label="English">Customer</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Customer](/entities/basic/Customer.md) 
</div>
</div>

<div class="row searchable" id="gensetDetails.genSalesElement">
<div class="cell" data-label="Property">gensetDetails.genSalesElement</div>
<div class="cell" data-label="Column">genSalesElement_id</div>
<div class="cell" data-label="Arabic">بند البيع المنشأ</div>
<div class="cell" data-label="English">Gen Sales Element</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FRMSPriceListElement](/entities/frm/FRMSPriceListElement.md) 
</div>
</div>

<div class="row searchable" id="gensetDetails.id">
<div class="cell" data-label="Property">gensetDetails.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="gensetDetails.lineNumber">
<div class="cell" data-label="Property">gensetDetails.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="gensetDetails.priceListLine.commodity">
<div class="cell" data-label="Property">gensetDetails.priceListLine.commodity</div>
<div class="cell" data-label="Column">commodity_id</div>
<div class="cell" data-label="Arabic">السلعة</div>
<div class="cell" data-label="English">Commodity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FRMCommodity](/entities/frm/FRMCommodity.md) 
</div>
</div>

<div class="row searchable" id="gensetDetails.priceListLine.container">
<div class="cell" data-label="Property">gensetDetails.priceListLine.container</div>
<div class="cell" data-label="Column">container_id</div>
<div class="cell" data-label="Arabic">الحاوية</div>
<div class="cell" data-label="English">Container</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FRMContainer](/entities/frm/FRMContainer.md) 
</div>
</div>

<div class="row searchable" id="gensetDetails.priceListLine.currency">
<div class="cell" data-label="Property">gensetDetails.priceListLine.currency</div>
<div class="cell" data-label="Column">currency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/entities/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="gensetDetails.priceListLine.estimatedTime">
<div class="cell" data-label="Property">gensetDetails.priceListLine.estimatedTime</div>
<div class="cell" data-label="Column">estimatedTime</div>
<div class="cell" data-label="Arabic">الوقت المتوقع (يوم)</div>
<div class="cell" data-label="English">Estimated Time (day/s)</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="gensetDetails.priceListLine.frequency">
<div class="cell" data-label="Property">gensetDetails.priceListLine.frequency</div>
<div class="cell" data-label="Column">frequency</div>
<div class="cell" data-label="Arabic">الموعد الدورى</div>
<div class="cell" data-label="English">Frequency</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="gensetDetails.priceListLine.frmServiceItem">
<div class="cell" data-label="Property">gensetDetails.priceListLine.frmServiceItem</div>
<div class="cell" data-label="Column">frmServiceItem_id</div>
<div class="cell" data-label="Arabic">بند الخدمة</div>
<div class="cell" data-label="English">Service Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FRMServiceItem](/entities/frm/FRMServiceItem.md) 
</div>
</div>

<div class="row searchable" id="gensetDetails.priceListLine.frmValidFrom">
<div class="cell" data-label="Property">gensetDetails.priceListLine.frmValidFrom</div>
<div class="cell" data-label="Column">frmValidFrom</div>
<div class="cell" data-label="Arabic">صالح | من</div>
<div class="cell" data-label="English">Validity | From</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="gensetDetails.priceListLine.frmValidTo">
<div class="cell" data-label="Property">gensetDetails.priceListLine.frmValidTo</div>
<div class="cell" data-label="Column">frmValidTo</div>
<div class="cell" data-label="Arabic">صالح | إلى</div>
<div class="cell" data-label="English">Validity | To</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="gensetDetails.priceListLine.gateInPort">
<div class="cell" data-label="Property">gensetDetails.priceListLine.gateInPort</div>
<div class="cell" data-label="Column">gateInPort_id</div>
<div class="cell" data-label="Arabic">ميناء الدخول</div>
<div class="cell" data-label="English">Gate In Port</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ShippingPort](/entities/frm/ShippingPort.md) 
</div>
</div>

<div class="row searchable" id="gensetDetails.priceListLine.gateOutPort">
<div class="cell" data-label="Property">gensetDetails.priceListLine.gateOutPort</div>
<div class="cell" data-label="Column">gateOutPort_id</div>
<div class="cell" data-label="Arabic">ميناء الخروج</div>
<div class="cell" data-label="English">Gate Out Port</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ShippingPort](/entities/frm/ShippingPort.md) 
</div>
</div>

<div class="row searchable" id="gensetDetails.priceListLine.lineCode">
<div class="cell" data-label="Property">gensetDetails.priceListLine.lineCode</div>
<div class="cell" data-label="Column">lineCode</div>
<div class="cell" data-label="Arabic">كود السطر</div>
<div class="cell" data-label="English">Line Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="gensetDetails.priceListLine.loadingPoint">
<div class="cell" data-label="Property">gensetDetails.priceListLine.loadingPoint</div>
<div class="cell" data-label="Column">loadingPoint_id</div>
<div class="cell" data-label="Arabic">نقطه التحميل</div>
<div class="cell" data-label="English">Loading Point</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ShippingPort](/entities/frm/ShippingPort.md) 
</div>
</div>

<div class="row searchable" id="gensetDetails.priceListLine.manualSalesPrice">
<div class="cell" data-label="Property">gensetDetails.priceListLine.manualSalesPrice</div>
<div class="cell" data-label="Column">manualSalesPrice</div>
<div class="cell" data-label="Arabic">سعر البيع | تعديل يدوى</div>
<div class="cell" data-label="English">SalesPrice | Manual Edit</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="gensetDetails.priceListLine.portOfDischarge">
<div class="cell" data-label="Property">gensetDetails.priceListLine.portOfDischarge</div>
<div class="cell" data-label="Column">portOfDischarge_id</div>
<div class="cell" data-label="Arabic">ميناء التفريغ</div>
<div class="cell" data-label="English">Port of Discharge</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ShippingPort](/entities/frm/ShippingPort.md) 
</div>
</div>

<div class="row searchable" id="gensetDetails.priceListLine.portOfLoading">
<div class="cell" data-label="Property">gensetDetails.priceListLine.portOfLoading</div>
<div class="cell" data-label="Column">portOfLoading_id</div>
<div class="cell" data-label="Arabic">ميناء التحميل</div>
<div class="cell" data-label="English">Port of Loading</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ShippingPort](/entities/frm/ShippingPort.md) 
</div>
</div>

<div class="row searchable" id="gensetDetails.priceListLine.pricingCost">
<div class="cell" data-label="Property">gensetDetails.priceListLine.pricingCost</div>
<div class="cell" data-label="Column">pricingCost</div>
<div class="cell" data-label="Arabic">تكلفة التسعير</div>
<div class="cell" data-label="English">Pricing Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="gensetDetails.priceListLine.purchasePrice">
<div class="cell" data-label="Property">gensetDetails.priceListLine.purchasePrice</div>
<div class="cell" data-label="Column">purchasePrice</div>
<div class="cell" data-label="Arabic">سعر الشراء</div>
<div class="cell" data-label="English">Purchase Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="gensetDetails.priceListLine.qty.uom">
<div class="cell" data-label="Property">gensetDetails.priceListLine.qty.uom</div>
<div class="cell" data-label="Column">qtyUom_id</div>
<div class="cell" data-label="Arabic">الكمية | وحدة</div>
<div class="cell" data-label="English">Quantity | UOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FRMUOM](/entities/frm/FRMUOM.md) 
</div>
</div>

<div class="row searchable" id="gensetDetails.priceListLine.qty.value">
<div class="cell" data-label="Property">gensetDetails.priceListLine.qty.value</div>
<div class="cell" data-label="Column">qtyValue</div>
<div class="cell" data-label="Arabic">الكمية | قيمة</div>
<div class="cell" data-label="English">Quantity | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="gensetDetails.priceListLine.rate">
<div class="cell" data-label="Property">gensetDetails.priceListLine.rate</div>
<div class="cell" data-label="Column">rate</div>
<div class="cell" data-label="Arabic">المعدل</div>
<div class="cell" data-label="English">Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="gensetDetails.priceListLine.salesPrice">
<div class="cell" data-label="Property">gensetDetails.priceListLine.salesPrice</div>
<div class="cell" data-label="Column">salesPrice</div>
<div class="cell" data-label="Arabic">سعر البيع | القيمة</div>
<div class="cell" data-label="English">SalesPrice | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="gensetDetails.priceListLine.selected">
<div class="cell" data-label="Property">gensetDetails.priceListLine.selected</div>
<div class="cell" data-label="Column">selected</div>
<div class="cell" data-label="Arabic">اختيار</div>
<div class="cell" data-label="English">Selected</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="gensetDetails.priceListLine.serviceProvider">
<div class="cell" data-label="Property">gensetDetails.priceListLine.serviceProvider</div>
<div class="cell gen-ref-column" data-label="Column">serviceProviderActualCode,  serviceProviderCode,  serviceProviderEntityType,  serviceProviderId</div>
<div class="cell" data-label="Arabic">مقدم الخدمة</div>
<div class="cell" data-label="English">Service Provider</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="gensetDetails.priceListLine.totalPricingCost">
<div class="cell" data-label="Property">gensetDetails.priceListLine.totalPricingCost</div>
<div class="cell" data-label="Column">totalPricingCost</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="gensetDetails.priceListLine.totalSalesPrice">
<div class="cell" data-label="Property">gensetDetails.priceListLine.totalSalesPrice</div>
<div class="cell" data-label="Column">totalSalesPrice</div>
<div class="cell" data-label="Arabic">إجمالى البيع</div>
<div class="cell" data-label="English">Total Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="gensetDetails.priceListType">
<div class="cell" data-label="Property">gensetDetails.priceListType</div>
<div class="cell" data-label="Column">priceListType</div>
<div class="cell" data-label="Arabic">نوع قائمة الأسعار</div>
<div class="cell" data-label="English">Price List Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="gensetDetails.printSalesQuotation">
<div class="cell" data-label="Property">gensetDetails.printSalesQuotation</div>
<div class="cell" data-label="Column">printSalesQuotation</div>
<div class="cell" data-label="Arabic">طباعة عرض سعر</div>
<div class="cell" data-label="English">Print Sales Quotation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="gensetDetails.purchaseElement">
<div class="cell" data-label="Property">gensetDetails.purchaseElement</div>
<div class="cell" data-label="Column">purchaseElement_id</div>
<div class="cell" data-label="Arabic"> بند شراء</div>
<div class="cell" data-label="English"> Purchase Element</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FRMPPriceListElement](/entities/frm/FRMPPriceListElement.md) 
</div>
</div>

<div class="row searchable" id="gensetDetails.purchasePriceList">
<div class="cell" data-label="Property">gensetDetails.purchasePriceList</div>
<div class="cell" data-label="Column">purchasePriceList_id</div>
<div class="cell" data-label="Arabic">قائمة أسعار شراء</div>
<div class="cell" data-label="English">Purchase Price List</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FRMPurchasePriceList](/entities/frm/FRMPurchasePriceList.md) 
</div>
</div>

<div class="row searchable" id="gensetDetails.remark">
<div class="cell" data-label="Property">gensetDetails.remark</div>
<div class="cell" data-label="Column">remark</div>
<div class="cell" data-label="Arabic">ملحوظة</div>
<div class="cell" data-label="English">Remark</div>
<div class="cell" data-label="Type">BigText</div>

</div>


</div>

<div id='oceanFreightDetails' title='oceanFreightDetails' class='searchable'>

## oceanFreightDetails (سطور الشحن البحرى - Ocean Freight Details)
**Table Name:** FRMSPLOceanFreightLine, **Join Column:** fRMSalesPriceList_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="oceanFreightDetails.amountENSCDD">
<div class="cell" data-label="Property">oceanFreightDetails.amountENSCDD</div>
<div class="cell" data-label="Column">amountENSCDD</div>
<div class="cell" data-label="Arabic">ENS-CDD</div>
<div class="cell" data-label="English">ENS-CDD</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="oceanFreightDetails.amountISPS">
<div class="cell" data-label="Property">oceanFreightDetails.amountISPS</div>
<div class="cell" data-label="Column">amountISPS</div>
<div class="cell" data-label="Arabic">ISPS</div>
<div class="cell" data-label="English">ISPS</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="oceanFreightDetails.attachment">
<div class="cell" data-label="Property">oceanFreightDetails.attachment</div>
<div class="cell" data-label="Column">attachment_id</div>
<div class="cell" data-label="Arabic">مرفق</div>
<div class="cell" data-label="English">Attachment</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/entities/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="oceanFreightDetails.customer">
<div class="cell" data-label="Property">oceanFreightDetails.customer</div>
<div class="cell" data-label="Column">customer_id</div>
<div class="cell" data-label="Arabic">العميل</div>
<div class="cell" data-label="English">Customer</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Customer](/entities/basic/Customer.md) 
</div>
</div>

<div class="row searchable" id="oceanFreightDetails.genSalesElement">
<div class="cell" data-label="Property">oceanFreightDetails.genSalesElement</div>
<div class="cell" data-label="Column">genSalesElement_id</div>
<div class="cell" data-label="Arabic">بند البيع المنشأ</div>
<div class="cell" data-label="English">Gen Sales Element</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FRMSPriceListElement](/entities/frm/FRMSPriceListElement.md) 
</div>
</div>

<div class="row searchable" id="oceanFreightDetails.id">
<div class="cell" data-label="Property">oceanFreightDetails.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="oceanFreightDetails.lineNumber">
<div class="cell" data-label="Property">oceanFreightDetails.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="oceanFreightDetails.priceListLine.commodity">
<div class="cell" data-label="Property">oceanFreightDetails.priceListLine.commodity</div>
<div class="cell" data-label="Column">commodity_id</div>
<div class="cell" data-label="Arabic">السلعة</div>
<div class="cell" data-label="English">Commodity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FRMCommodity](/entities/frm/FRMCommodity.md) 
</div>
</div>

<div class="row searchable" id="oceanFreightDetails.priceListLine.container">
<div class="cell" data-label="Property">oceanFreightDetails.priceListLine.container</div>
<div class="cell" data-label="Column">container_id</div>
<div class="cell" data-label="Arabic">الحاوية</div>
<div class="cell" data-label="English">Container</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FRMContainer](/entities/frm/FRMContainer.md) 
</div>
</div>

<div class="row searchable" id="oceanFreightDetails.priceListLine.currency">
<div class="cell" data-label="Property">oceanFreightDetails.priceListLine.currency</div>
<div class="cell" data-label="Column">currency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/entities/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="oceanFreightDetails.priceListLine.estimatedTime">
<div class="cell" data-label="Property">oceanFreightDetails.priceListLine.estimatedTime</div>
<div class="cell" data-label="Column">estimatedTime</div>
<div class="cell" data-label="Arabic">الوقت المتوقع (يوم)</div>
<div class="cell" data-label="English">Estimated Time (day/s)</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="oceanFreightDetails.priceListLine.frequency">
<div class="cell" data-label="Property">oceanFreightDetails.priceListLine.frequency</div>
<div class="cell" data-label="Column">frequency</div>
<div class="cell" data-label="Arabic">الموعد الدورى</div>
<div class="cell" data-label="English">Frequency</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="oceanFreightDetails.priceListLine.frmServiceItem">
<div class="cell" data-label="Property">oceanFreightDetails.priceListLine.frmServiceItem</div>
<div class="cell" data-label="Column">frmServiceItem_id</div>
<div class="cell" data-label="Arabic">بند الخدمة</div>
<div class="cell" data-label="English">Service Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FRMServiceItem](/entities/frm/FRMServiceItem.md) 
</div>
</div>

<div class="row searchable" id="oceanFreightDetails.priceListLine.frmValidFrom">
<div class="cell" data-label="Property">oceanFreightDetails.priceListLine.frmValidFrom</div>
<div class="cell" data-label="Column">frmValidFrom</div>
<div class="cell" data-label="Arabic">صالح | من</div>
<div class="cell" data-label="English">Validity | From</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="oceanFreightDetails.priceListLine.frmValidTo">
<div class="cell" data-label="Property">oceanFreightDetails.priceListLine.frmValidTo</div>
<div class="cell" data-label="Column">frmValidTo</div>
<div class="cell" data-label="Arabic">صالح | إلى</div>
<div class="cell" data-label="English">Validity | To</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="oceanFreightDetails.priceListLine.gateInPort">
<div class="cell" data-label="Property">oceanFreightDetails.priceListLine.gateInPort</div>
<div class="cell" data-label="Column">gateInPort_id</div>
<div class="cell" data-label="Arabic">ميناء الدخول</div>
<div class="cell" data-label="English">Gate In Port</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ShippingPort](/entities/frm/ShippingPort.md) 
</div>
</div>

<div class="row searchable" id="oceanFreightDetails.priceListLine.gateOutPort">
<div class="cell" data-label="Property">oceanFreightDetails.priceListLine.gateOutPort</div>
<div class="cell" data-label="Column">gateOutPort_id</div>
<div class="cell" data-label="Arabic">ميناء الخروج</div>
<div class="cell" data-label="English">Gate Out Port</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ShippingPort](/entities/frm/ShippingPort.md) 
</div>
</div>

<div class="row searchable" id="oceanFreightDetails.priceListLine.lineCode">
<div class="cell" data-label="Property">oceanFreightDetails.priceListLine.lineCode</div>
<div class="cell" data-label="Column">lineCode</div>
<div class="cell" data-label="Arabic">كود السطر</div>
<div class="cell" data-label="English">Line Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="oceanFreightDetails.priceListLine.loadingPoint">
<div class="cell" data-label="Property">oceanFreightDetails.priceListLine.loadingPoint</div>
<div class="cell" data-label="Column">loadingPoint_id</div>
<div class="cell" data-label="Arabic">نقطه التحميل</div>
<div class="cell" data-label="English">Loading Point</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ShippingPort](/entities/frm/ShippingPort.md) 
</div>
</div>

<div class="row searchable" id="oceanFreightDetails.priceListLine.manualSalesPrice">
<div class="cell" data-label="Property">oceanFreightDetails.priceListLine.manualSalesPrice</div>
<div class="cell" data-label="Column">manualSalesPrice</div>
<div class="cell" data-label="Arabic">سعر البيع | تعديل يدوى</div>
<div class="cell" data-label="English">SalesPrice | Manual Edit</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="oceanFreightDetails.priceListLine.portOfDischarge">
<div class="cell" data-label="Property">oceanFreightDetails.priceListLine.portOfDischarge</div>
<div class="cell" data-label="Column">portOfDischarge_id</div>
<div class="cell" data-label="Arabic">ميناء التفريغ</div>
<div class="cell" data-label="English">Port of Discharge</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ShippingPort](/entities/frm/ShippingPort.md) 
</div>
</div>

<div class="row searchable" id="oceanFreightDetails.priceListLine.portOfLoading">
<div class="cell" data-label="Property">oceanFreightDetails.priceListLine.portOfLoading</div>
<div class="cell" data-label="Column">portOfLoading_id</div>
<div class="cell" data-label="Arabic">ميناء التحميل</div>
<div class="cell" data-label="English">Port of Loading</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ShippingPort](/entities/frm/ShippingPort.md) 
</div>
</div>

<div class="row searchable" id="oceanFreightDetails.priceListLine.pricingCost">
<div class="cell" data-label="Property">oceanFreightDetails.priceListLine.pricingCost</div>
<div class="cell" data-label="Column">pricingCost</div>
<div class="cell" data-label="Arabic">تكلفة التسعير</div>
<div class="cell" data-label="English">Pricing Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="oceanFreightDetails.priceListLine.purchasePrice">
<div class="cell" data-label="Property">oceanFreightDetails.priceListLine.purchasePrice</div>
<div class="cell" data-label="Column">purchasePrice</div>
<div class="cell" data-label="Arabic">سعر الشراء</div>
<div class="cell" data-label="English">Purchase Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="oceanFreightDetails.priceListLine.qty.uom">
<div class="cell" data-label="Property">oceanFreightDetails.priceListLine.qty.uom</div>
<div class="cell" data-label="Column">qtyUom_id</div>
<div class="cell" data-label="Arabic">الكمية | وحدة</div>
<div class="cell" data-label="English">Quantity | UOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FRMUOM](/entities/frm/FRMUOM.md) 
</div>
</div>

<div class="row searchable" id="oceanFreightDetails.priceListLine.qty.value">
<div class="cell" data-label="Property">oceanFreightDetails.priceListLine.qty.value</div>
<div class="cell" data-label="Column">qtyValue</div>
<div class="cell" data-label="Arabic">الكمية | قيمة</div>
<div class="cell" data-label="English">Quantity | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="oceanFreightDetails.priceListLine.rate">
<div class="cell" data-label="Property">oceanFreightDetails.priceListLine.rate</div>
<div class="cell" data-label="Column">rate</div>
<div class="cell" data-label="Arabic">المعدل</div>
<div class="cell" data-label="English">Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="oceanFreightDetails.priceListLine.salesPrice">
<div class="cell" data-label="Property">oceanFreightDetails.priceListLine.salesPrice</div>
<div class="cell" data-label="Column">salesPrice</div>
<div class="cell" data-label="Arabic">سعر البيع | القيمة</div>
<div class="cell" data-label="English">SalesPrice | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="oceanFreightDetails.priceListLine.selected">
<div class="cell" data-label="Property">oceanFreightDetails.priceListLine.selected</div>
<div class="cell" data-label="Column">selected</div>
<div class="cell" data-label="Arabic">اختيار</div>
<div class="cell" data-label="English">Selected</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="oceanFreightDetails.priceListLine.serviceProvider">
<div class="cell" data-label="Property">oceanFreightDetails.priceListLine.serviceProvider</div>
<div class="cell gen-ref-column" data-label="Column">serviceProviderActualCode,  serviceProviderCode,  serviceProviderEntityType,  serviceProviderId</div>
<div class="cell" data-label="Arabic">مقدم الخدمة</div>
<div class="cell" data-label="English">Service Provider</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="oceanFreightDetails.priceListLine.totalPricingCost">
<div class="cell" data-label="Property">oceanFreightDetails.priceListLine.totalPricingCost</div>
<div class="cell" data-label="Column">totalPricingCost</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="oceanFreightDetails.priceListLine.totalSalesPrice">
<div class="cell" data-label="Property">oceanFreightDetails.priceListLine.totalSalesPrice</div>
<div class="cell" data-label="Column">totalSalesPrice</div>
<div class="cell" data-label="Arabic">إجمالى البيع</div>
<div class="cell" data-label="English">Total Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="oceanFreightDetails.priceListType">
<div class="cell" data-label="Property">oceanFreightDetails.priceListType</div>
<div class="cell" data-label="Column">priceListType</div>
<div class="cell" data-label="Arabic">نوع قائمة الأسعار</div>
<div class="cell" data-label="English">Price List Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="oceanFreightDetails.printSalesQuotation">
<div class="cell" data-label="Property">oceanFreightDetails.printSalesQuotation</div>
<div class="cell" data-label="Column">printSalesQuotation</div>
<div class="cell" data-label="Arabic">طباعة عرض سعر</div>
<div class="cell" data-label="English">Print Sales Quotation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="oceanFreightDetails.purchaseElement">
<div class="cell" data-label="Property">oceanFreightDetails.purchaseElement</div>
<div class="cell" data-label="Column">purchaseElement_id</div>
<div class="cell" data-label="Arabic"> بند شراء</div>
<div class="cell" data-label="English"> Purchase Element</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FRMPPriceListElement](/entities/frm/FRMPPriceListElement.md) 
</div>
</div>

<div class="row searchable" id="oceanFreightDetails.purchasePriceList">
<div class="cell" data-label="Property">oceanFreightDetails.purchasePriceList</div>
<div class="cell" data-label="Column">purchasePriceList_id</div>
<div class="cell" data-label="Arabic">قائمة أسعار شراء</div>
<div class="cell" data-label="English">Purchase Price List</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FRMPurchasePriceList](/entities/frm/FRMPurchasePriceList.md) 
</div>
</div>

<div class="row searchable" id="oceanFreightDetails.remark">
<div class="cell" data-label="Property">oceanFreightDetails.remark</div>
<div class="cell" data-label="Column">remark</div>
<div class="cell" data-label="Arabic">ملحوظة</div>
<div class="cell" data-label="English">Remark</div>
<div class="cell" data-label="Type">BigText</div>

</div>


</div>

<div id='othersDetails' title='othersDetails' class='searchable'>

## othersDetails ( - )
**Table Name:** FRMSPLOthersLine, **Join Column:** fRMSalesPriceList_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="othersDetails.attachment">
<div class="cell" data-label="Property">othersDetails.attachment</div>
<div class="cell" data-label="Column">attachment_id</div>
<div class="cell" data-label="Arabic">مرفق</div>
<div class="cell" data-label="English">Attachment</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/entities/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="othersDetails.customer">
<div class="cell" data-label="Property">othersDetails.customer</div>
<div class="cell" data-label="Column">customer_id</div>
<div class="cell" data-label="Arabic">العميل</div>
<div class="cell" data-label="English">Customer</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Customer](/entities/basic/Customer.md) 
</div>
</div>

<div class="row searchable" id="othersDetails.genSalesElement">
<div class="cell" data-label="Property">othersDetails.genSalesElement</div>
<div class="cell" data-label="Column">genSalesElement_id</div>
<div class="cell" data-label="Arabic">بند البيع المنشأ</div>
<div class="cell" data-label="English">Gen Sales Element</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FRMSPriceListElement](/entities/frm/FRMSPriceListElement.md) 
</div>
</div>

<div class="row searchable" id="othersDetails.id">
<div class="cell" data-label="Property">othersDetails.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="othersDetails.lineNumber">
<div class="cell" data-label="Property">othersDetails.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="othersDetails.priceListLine.commodity">
<div class="cell" data-label="Property">othersDetails.priceListLine.commodity</div>
<div class="cell" data-label="Column">commodity_id</div>
<div class="cell" data-label="Arabic">السلعة</div>
<div class="cell" data-label="English">Commodity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FRMCommodity](/entities/frm/FRMCommodity.md) 
</div>
</div>

<div class="row searchable" id="othersDetails.priceListLine.container">
<div class="cell" data-label="Property">othersDetails.priceListLine.container</div>
<div class="cell" data-label="Column">container_id</div>
<div class="cell" data-label="Arabic">الحاوية</div>
<div class="cell" data-label="English">Container</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FRMContainer](/entities/frm/FRMContainer.md) 
</div>
</div>

<div class="row searchable" id="othersDetails.priceListLine.currency">
<div class="cell" data-label="Property">othersDetails.priceListLine.currency</div>
<div class="cell" data-label="Column">currency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/entities/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="othersDetails.priceListLine.estimatedTime">
<div class="cell" data-label="Property">othersDetails.priceListLine.estimatedTime</div>
<div class="cell" data-label="Column">estimatedTime</div>
<div class="cell" data-label="Arabic">الوقت المتوقع (يوم)</div>
<div class="cell" data-label="English">Estimated Time (day/s)</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="othersDetails.priceListLine.frequency">
<div class="cell" data-label="Property">othersDetails.priceListLine.frequency</div>
<div class="cell" data-label="Column">frequency</div>
<div class="cell" data-label="Arabic">الموعد الدورى</div>
<div class="cell" data-label="English">Frequency</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="othersDetails.priceListLine.frmServiceItem">
<div class="cell" data-label="Property">othersDetails.priceListLine.frmServiceItem</div>
<div class="cell" data-label="Column">frmServiceItem_id</div>
<div class="cell" data-label="Arabic">بند الخدمة</div>
<div class="cell" data-label="English">Service Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FRMServiceItem](/entities/frm/FRMServiceItem.md) 
</div>
</div>

<div class="row searchable" id="othersDetails.priceListLine.frmValidFrom">
<div class="cell" data-label="Property">othersDetails.priceListLine.frmValidFrom</div>
<div class="cell" data-label="Column">frmValidFrom</div>
<div class="cell" data-label="Arabic">صالح | من</div>
<div class="cell" data-label="English">Validity | From</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="othersDetails.priceListLine.frmValidTo">
<div class="cell" data-label="Property">othersDetails.priceListLine.frmValidTo</div>
<div class="cell" data-label="Column">frmValidTo</div>
<div class="cell" data-label="Arabic">صالح | إلى</div>
<div class="cell" data-label="English">Validity | To</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="othersDetails.priceListLine.gateInPort">
<div class="cell" data-label="Property">othersDetails.priceListLine.gateInPort</div>
<div class="cell" data-label="Column">gateInPort_id</div>
<div class="cell" data-label="Arabic">ميناء الدخول</div>
<div class="cell" data-label="English">Gate In Port</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ShippingPort](/entities/frm/ShippingPort.md) 
</div>
</div>

<div class="row searchable" id="othersDetails.priceListLine.gateOutPort">
<div class="cell" data-label="Property">othersDetails.priceListLine.gateOutPort</div>
<div class="cell" data-label="Column">gateOutPort_id</div>
<div class="cell" data-label="Arabic">ميناء الخروج</div>
<div class="cell" data-label="English">Gate Out Port</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ShippingPort](/entities/frm/ShippingPort.md) 
</div>
</div>

<div class="row searchable" id="othersDetails.priceListLine.lineCode">
<div class="cell" data-label="Property">othersDetails.priceListLine.lineCode</div>
<div class="cell" data-label="Column">lineCode</div>
<div class="cell" data-label="Arabic">كود السطر</div>
<div class="cell" data-label="English">Line Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="othersDetails.priceListLine.loadingPoint">
<div class="cell" data-label="Property">othersDetails.priceListLine.loadingPoint</div>
<div class="cell" data-label="Column">loadingPoint_id</div>
<div class="cell" data-label="Arabic">نقطه التحميل</div>
<div class="cell" data-label="English">Loading Point</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ShippingPort](/entities/frm/ShippingPort.md) 
</div>
</div>

<div class="row searchable" id="othersDetails.priceListLine.manualSalesPrice">
<div class="cell" data-label="Property">othersDetails.priceListLine.manualSalesPrice</div>
<div class="cell" data-label="Column">manualSalesPrice</div>
<div class="cell" data-label="Arabic">سعر البيع | تعديل يدوى</div>
<div class="cell" data-label="English">SalesPrice | Manual Edit</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="othersDetails.priceListLine.portOfDischarge">
<div class="cell" data-label="Property">othersDetails.priceListLine.portOfDischarge</div>
<div class="cell" data-label="Column">portOfDischarge_id</div>
<div class="cell" data-label="Arabic">ميناء التفريغ</div>
<div class="cell" data-label="English">Port of Discharge</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ShippingPort](/entities/frm/ShippingPort.md) 
</div>
</div>

<div class="row searchable" id="othersDetails.priceListLine.portOfLoading">
<div class="cell" data-label="Property">othersDetails.priceListLine.portOfLoading</div>
<div class="cell" data-label="Column">portOfLoading_id</div>
<div class="cell" data-label="Arabic">ميناء التحميل</div>
<div class="cell" data-label="English">Port of Loading</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ShippingPort](/entities/frm/ShippingPort.md) 
</div>
</div>

<div class="row searchable" id="othersDetails.priceListLine.pricingCost">
<div class="cell" data-label="Property">othersDetails.priceListLine.pricingCost</div>
<div class="cell" data-label="Column">pricingCost</div>
<div class="cell" data-label="Arabic">تكلفة التسعير</div>
<div class="cell" data-label="English">Pricing Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="othersDetails.priceListLine.purchasePrice">
<div class="cell" data-label="Property">othersDetails.priceListLine.purchasePrice</div>
<div class="cell" data-label="Column">purchasePrice</div>
<div class="cell" data-label="Arabic">سعر الشراء</div>
<div class="cell" data-label="English">Purchase Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="othersDetails.priceListLine.qty.uom">
<div class="cell" data-label="Property">othersDetails.priceListLine.qty.uom</div>
<div class="cell" data-label="Column">qtyUom_id</div>
<div class="cell" data-label="Arabic">الكمية | وحدة</div>
<div class="cell" data-label="English">Quantity | UOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FRMUOM](/entities/frm/FRMUOM.md) 
</div>
</div>

<div class="row searchable" id="othersDetails.priceListLine.qty.value">
<div class="cell" data-label="Property">othersDetails.priceListLine.qty.value</div>
<div class="cell" data-label="Column">qtyValue</div>
<div class="cell" data-label="Arabic">الكمية | قيمة</div>
<div class="cell" data-label="English">Quantity | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="othersDetails.priceListLine.rate">
<div class="cell" data-label="Property">othersDetails.priceListLine.rate</div>
<div class="cell" data-label="Column">rate</div>
<div class="cell" data-label="Arabic">المعدل</div>
<div class="cell" data-label="English">Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="othersDetails.priceListLine.salesPrice">
<div class="cell" data-label="Property">othersDetails.priceListLine.salesPrice</div>
<div class="cell" data-label="Column">salesPrice</div>
<div class="cell" data-label="Arabic">سعر البيع | القيمة</div>
<div class="cell" data-label="English">SalesPrice | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="othersDetails.priceListLine.selected">
<div class="cell" data-label="Property">othersDetails.priceListLine.selected</div>
<div class="cell" data-label="Column">selected</div>
<div class="cell" data-label="Arabic">اختيار</div>
<div class="cell" data-label="English">Selected</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="othersDetails.priceListLine.serviceProvider">
<div class="cell" data-label="Property">othersDetails.priceListLine.serviceProvider</div>
<div class="cell gen-ref-column" data-label="Column">serviceProviderActualCode,  serviceProviderCode,  serviceProviderEntityType,  serviceProviderId</div>
<div class="cell" data-label="Arabic">مقدم الخدمة</div>
<div class="cell" data-label="English">Service Provider</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="othersDetails.priceListLine.totalPricingCost">
<div class="cell" data-label="Property">othersDetails.priceListLine.totalPricingCost</div>
<div class="cell" data-label="Column">totalPricingCost</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="othersDetails.priceListLine.totalSalesPrice">
<div class="cell" data-label="Property">othersDetails.priceListLine.totalSalesPrice</div>
<div class="cell" data-label="Column">totalSalesPrice</div>
<div class="cell" data-label="Arabic">إجمالى البيع</div>
<div class="cell" data-label="English">Total Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="othersDetails.priceListType">
<div class="cell" data-label="Property">othersDetails.priceListType</div>
<div class="cell" data-label="Column">priceListType</div>
<div class="cell" data-label="Arabic">نوع قائمة الأسعار</div>
<div class="cell" data-label="English">Price List Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="othersDetails.printSalesQuotation">
<div class="cell" data-label="Property">othersDetails.printSalesQuotation</div>
<div class="cell" data-label="Column">printSalesQuotation</div>
<div class="cell" data-label="Arabic">طباعة عرض سعر</div>
<div class="cell" data-label="English">Print Sales Quotation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="othersDetails.purchaseElement">
<div class="cell" data-label="Property">othersDetails.purchaseElement</div>
<div class="cell" data-label="Column">purchaseElement_id</div>
<div class="cell" data-label="Arabic"> بند شراء</div>
<div class="cell" data-label="English"> Purchase Element</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FRMPPriceListElement](/entities/frm/FRMPPriceListElement.md) 
</div>
</div>

<div class="row searchable" id="othersDetails.purchasePriceList">
<div class="cell" data-label="Property">othersDetails.purchasePriceList</div>
<div class="cell" data-label="Column">purchasePriceList_id</div>
<div class="cell" data-label="Arabic">قائمة أسعار شراء</div>
<div class="cell" data-label="English">Purchase Price List</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FRMPurchasePriceList](/entities/frm/FRMPurchasePriceList.md) 
</div>
</div>

<div class="row searchable" id="othersDetails.remark">
<div class="cell" data-label="Property">othersDetails.remark</div>
<div class="cell" data-label="Column">remark</div>
<div class="cell" data-label="Arabic">ملحوظة</div>
<div class="cell" data-label="English">Remark</div>
<div class="cell" data-label="Type">BigText</div>

</div>


</div>

<div id='truckingDetails' title='truckingDetails' class='searchable'>

## truckingDetails (سطور الشاحنات - Trucking Details)
**Table Name:** FRMSPLTruckingLine, **Join Column:** fRMSalesPriceList_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="truckingDetails.attachment">
<div class="cell" data-label="Property">truckingDetails.attachment</div>
<div class="cell" data-label="Column">attachment_id</div>
<div class="cell" data-label="Arabic">مرفق</div>
<div class="cell" data-label="English">Attachment</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/entities/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="truckingDetails.customer">
<div class="cell" data-label="Property">truckingDetails.customer</div>
<div class="cell" data-label="Column">customer_id</div>
<div class="cell" data-label="Arabic">العميل</div>
<div class="cell" data-label="English">Customer</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Customer](/entities/basic/Customer.md) 
</div>
</div>

<div class="row searchable" id="truckingDetails.genSalesElement">
<div class="cell" data-label="Property">truckingDetails.genSalesElement</div>
<div class="cell" data-label="Column">genSalesElement_id</div>
<div class="cell" data-label="Arabic">بند البيع المنشأ</div>
<div class="cell" data-label="English">Gen Sales Element</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FRMSPriceListElement](/entities/frm/FRMSPriceListElement.md) 
</div>
</div>

<div class="row searchable" id="truckingDetails.id">
<div class="cell" data-label="Property">truckingDetails.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="truckingDetails.lineNumber">
<div class="cell" data-label="Property">truckingDetails.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="truckingDetails.priceListLine.commodity">
<div class="cell" data-label="Property">truckingDetails.priceListLine.commodity</div>
<div class="cell" data-label="Column">commodity_id</div>
<div class="cell" data-label="Arabic">السلعة</div>
<div class="cell" data-label="English">Commodity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FRMCommodity](/entities/frm/FRMCommodity.md) 
</div>
</div>

<div class="row searchable" id="truckingDetails.priceListLine.container">
<div class="cell" data-label="Property">truckingDetails.priceListLine.container</div>
<div class="cell" data-label="Column">container_id</div>
<div class="cell" data-label="Arabic">الحاوية</div>
<div class="cell" data-label="English">Container</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FRMContainer](/entities/frm/FRMContainer.md) 
</div>
</div>

<div class="row searchable" id="truckingDetails.priceListLine.currency">
<div class="cell" data-label="Property">truckingDetails.priceListLine.currency</div>
<div class="cell" data-label="Column">currency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/entities/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="truckingDetails.priceListLine.estimatedTime">
<div class="cell" data-label="Property">truckingDetails.priceListLine.estimatedTime</div>
<div class="cell" data-label="Column">estimatedTime</div>
<div class="cell" data-label="Arabic">الوقت المتوقع (يوم)</div>
<div class="cell" data-label="English">Estimated Time (day/s)</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="truckingDetails.priceListLine.frequency">
<div class="cell" data-label="Property">truckingDetails.priceListLine.frequency</div>
<div class="cell" data-label="Column">frequency</div>
<div class="cell" data-label="Arabic">الموعد الدورى</div>
<div class="cell" data-label="English">Frequency</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="truckingDetails.priceListLine.frmServiceItem">
<div class="cell" data-label="Property">truckingDetails.priceListLine.frmServiceItem</div>
<div class="cell" data-label="Column">frmServiceItem_id</div>
<div class="cell" data-label="Arabic">بند الخدمة</div>
<div class="cell" data-label="English">Service Item</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FRMServiceItem](/entities/frm/FRMServiceItem.md) 
</div>
</div>

<div class="row searchable" id="truckingDetails.priceListLine.frmValidFrom">
<div class="cell" data-label="Property">truckingDetails.priceListLine.frmValidFrom</div>
<div class="cell" data-label="Column">frmValidFrom</div>
<div class="cell" data-label="Arabic">صالح | من</div>
<div class="cell" data-label="English">Validity | From</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="truckingDetails.priceListLine.frmValidTo">
<div class="cell" data-label="Property">truckingDetails.priceListLine.frmValidTo</div>
<div class="cell" data-label="Column">frmValidTo</div>
<div class="cell" data-label="Arabic">صالح | إلى</div>
<div class="cell" data-label="English">Validity | To</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="truckingDetails.priceListLine.gateInPort">
<div class="cell" data-label="Property">truckingDetails.priceListLine.gateInPort</div>
<div class="cell" data-label="Column">gateInPort_id</div>
<div class="cell" data-label="Arabic">ميناء الدخول</div>
<div class="cell" data-label="English">Gate In Port</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ShippingPort](/entities/frm/ShippingPort.md) 
</div>
</div>

<div class="row searchable" id="truckingDetails.priceListLine.gateOutPort">
<div class="cell" data-label="Property">truckingDetails.priceListLine.gateOutPort</div>
<div class="cell" data-label="Column">gateOutPort_id</div>
<div class="cell" data-label="Arabic">ميناء الخروج</div>
<div class="cell" data-label="English">Gate Out Port</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ShippingPort](/entities/frm/ShippingPort.md) 
</div>
</div>

<div class="row searchable" id="truckingDetails.priceListLine.lineCode">
<div class="cell" data-label="Property">truckingDetails.priceListLine.lineCode</div>
<div class="cell" data-label="Column">lineCode</div>
<div class="cell" data-label="Arabic">كود السطر</div>
<div class="cell" data-label="English">Line Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="truckingDetails.priceListLine.loadingPoint">
<div class="cell" data-label="Property">truckingDetails.priceListLine.loadingPoint</div>
<div class="cell" data-label="Column">loadingPoint_id</div>
<div class="cell" data-label="Arabic">نقطه التحميل</div>
<div class="cell" data-label="English">Loading Point</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ShippingPort](/entities/frm/ShippingPort.md) 
</div>
</div>

<div class="row searchable" id="truckingDetails.priceListLine.manualSalesPrice">
<div class="cell" data-label="Property">truckingDetails.priceListLine.manualSalesPrice</div>
<div class="cell" data-label="Column">manualSalesPrice</div>
<div class="cell" data-label="Arabic">سعر البيع | تعديل يدوى</div>
<div class="cell" data-label="English">SalesPrice | Manual Edit</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="truckingDetails.priceListLine.portOfDischarge">
<div class="cell" data-label="Property">truckingDetails.priceListLine.portOfDischarge</div>
<div class="cell" data-label="Column">portOfDischarge_id</div>
<div class="cell" data-label="Arabic">ميناء التفريغ</div>
<div class="cell" data-label="English">Port of Discharge</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ShippingPort](/entities/frm/ShippingPort.md) 
</div>
</div>

<div class="row searchable" id="truckingDetails.priceListLine.portOfLoading">
<div class="cell" data-label="Property">truckingDetails.priceListLine.portOfLoading</div>
<div class="cell" data-label="Column">portOfLoading_id</div>
<div class="cell" data-label="Arabic">ميناء التحميل</div>
<div class="cell" data-label="English">Port of Loading</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ShippingPort](/entities/frm/ShippingPort.md) 
</div>
</div>

<div class="row searchable" id="truckingDetails.priceListLine.pricingCost">
<div class="cell" data-label="Property">truckingDetails.priceListLine.pricingCost</div>
<div class="cell" data-label="Column">pricingCost</div>
<div class="cell" data-label="Arabic">تكلفة التسعير</div>
<div class="cell" data-label="English">Pricing Cost</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="truckingDetails.priceListLine.purchasePrice">
<div class="cell" data-label="Property">truckingDetails.priceListLine.purchasePrice</div>
<div class="cell" data-label="Column">purchasePrice</div>
<div class="cell" data-label="Arabic">سعر الشراء</div>
<div class="cell" data-label="English">Purchase Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="truckingDetails.priceListLine.qty.uom">
<div class="cell" data-label="Property">truckingDetails.priceListLine.qty.uom</div>
<div class="cell" data-label="Column">qtyUom_id</div>
<div class="cell" data-label="Arabic">الكمية | وحدة</div>
<div class="cell" data-label="English">Quantity | UOM</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FRMUOM](/entities/frm/FRMUOM.md) 
</div>
</div>

<div class="row searchable" id="truckingDetails.priceListLine.qty.value">
<div class="cell" data-label="Property">truckingDetails.priceListLine.qty.value</div>
<div class="cell" data-label="Column">qtyValue</div>
<div class="cell" data-label="Arabic">الكمية | قيمة</div>
<div class="cell" data-label="English">Quantity | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="truckingDetails.priceListLine.rate">
<div class="cell" data-label="Property">truckingDetails.priceListLine.rate</div>
<div class="cell" data-label="Column">rate</div>
<div class="cell" data-label="Arabic">المعدل</div>
<div class="cell" data-label="English">Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="truckingDetails.priceListLine.salesPrice">
<div class="cell" data-label="Property">truckingDetails.priceListLine.salesPrice</div>
<div class="cell" data-label="Column">salesPrice</div>
<div class="cell" data-label="Arabic">سعر البيع | القيمة</div>
<div class="cell" data-label="English">SalesPrice | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="truckingDetails.priceListLine.selected">
<div class="cell" data-label="Property">truckingDetails.priceListLine.selected</div>
<div class="cell" data-label="Column">selected</div>
<div class="cell" data-label="Arabic">اختيار</div>
<div class="cell" data-label="English">Selected</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="truckingDetails.priceListLine.serviceProvider">
<div class="cell" data-label="Property">truckingDetails.priceListLine.serviceProvider</div>
<div class="cell gen-ref-column" data-label="Column">serviceProviderActualCode,  serviceProviderCode,  serviceProviderEntityType,  serviceProviderId</div>
<div class="cell" data-label="Arabic">مقدم الخدمة</div>
<div class="cell" data-label="English">Service Provider</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="truckingDetails.priceListLine.totalPricingCost">
<div class="cell" data-label="Property">truckingDetails.priceListLine.totalPricingCost</div>
<div class="cell" data-label="Column">totalPricingCost</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="truckingDetails.priceListLine.totalSalesPrice">
<div class="cell" data-label="Property">truckingDetails.priceListLine.totalSalesPrice</div>
<div class="cell" data-label="Column">totalSalesPrice</div>
<div class="cell" data-label="Arabic">إجمالى البيع</div>
<div class="cell" data-label="English">Total Sales Price</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="truckingDetails.priceListType">
<div class="cell" data-label="Property">truckingDetails.priceListType</div>
<div class="cell" data-label="Column">priceListType</div>
<div class="cell" data-label="Arabic">نوع قائمة الأسعار</div>
<div class="cell" data-label="English">Price List Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="truckingDetails.printSalesQuotation">
<div class="cell" data-label="Property">truckingDetails.printSalesQuotation</div>
<div class="cell" data-label="Column">printSalesQuotation</div>
<div class="cell" data-label="Arabic">طباعة عرض سعر</div>
<div class="cell" data-label="English">Print Sales Quotation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="truckingDetails.purchaseElement">
<div class="cell" data-label="Property">truckingDetails.purchaseElement</div>
<div class="cell" data-label="Column">purchaseElement_id</div>
<div class="cell" data-label="Arabic"> بند شراء</div>
<div class="cell" data-label="English"> Purchase Element</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FRMPPriceListElement](/entities/frm/FRMPPriceListElement.md) 
</div>
</div>

<div class="row searchable" id="truckingDetails.purchasePriceList">
<div class="cell" data-label="Property">truckingDetails.purchasePriceList</div>
<div class="cell" data-label="Column">purchasePriceList_id</div>
<div class="cell" data-label="Arabic">قائمة أسعار شراء</div>
<div class="cell" data-label="English">Purchase Price List</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FRMPurchasePriceList](/entities/frm/FRMPurchasePriceList.md) 
</div>
</div>

<div class="row searchable" id="truckingDetails.remark">
<div class="cell" data-label="Property">truckingDetails.remark</div>
<div class="cell" data-label="Column">remark</div>
<div class="cell" data-label="Arabic">ملحوظة</div>
<div class="cell" data-label="English">Remark</div>
<div class="cell" data-label="Type">BigText</div>

</div>


</div>

