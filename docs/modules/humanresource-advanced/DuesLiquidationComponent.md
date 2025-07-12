# DuesLiquidationComponent
**Arabic:** مكون التصفية - مكونات التصفية
**English:** Liquidation Component - LiquidationComponents

<ContentFilter/>


<div class='searchable'>
<a href='#components'>components (DuesLiquidComponentLine) </a> , <a href='#effectLines'>effectLines (DuesLiquidationComponentEffectLine) </a> , <a href='#formulas'>formulas (DuesLiquidationCompFormula) </a>
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
</div><div class="row searchable" id="analysisSet">
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

<div class="row searchable" id="applyWhenQuery">
<div class="cell" data-label="Property">applyWhenQuery</div>
<div class="cell" data-label="Column">applyWhenQuery</div>
<div class="cell" data-label="Arabic">تطبيق عند التوافق مع الاستعلام</div>
<div class="cell" data-label="English">Apply When Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="autoWithAnnualVacation">
<div class="cell" data-label="Property">autoWithAnnualVacation</div>
<div class="cell" data-label="Column">autoWithAnnualVacation</div>
<div class="cell" data-label="Arabic">يستعمل اّليا مع تصفيات الأجازات السنوية</div>
<div class="cell" data-label="English">Used Automatic with Annual Vacation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="autoWithCompulsoryVacation">
<div class="cell" data-label="Property">autoWithCompulsoryVacation</div>
<div class="cell" data-label="Column">autoWithCompulsoryVacation</div>
<div class="cell" data-label="Arabic">بستعمل اّليا مع تصفيات الأجازات الإضطراريه</div>
<div class="cell" data-label="English">Used Automatic with Compulsory Vacation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="autoWithTermination">
<div class="cell" data-label="Property">autoWithTermination</div>
<div class="cell" data-label="Column">autoWithTermination</div>
<div class="cell" data-label="Arabic">يستعمل اّليا مع تصفيات إنهاء الخدمة</div>
<div class="cell" data-label="English">Used Automatic with Termination</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="componentCalcType">
<div class="cell" data-label="Property">componentCalcType</div>
<div class="cell" data-label="Column">componentCalcType</div>
<div class="cell" data-label="Arabic">طريقة حساب المكون</div>
<div class="cell" data-label="English">Component Calculation Type</div>
<div class="cell" data-label="Type">Enum</div>

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

<div class="row searchable" id="credit">
<div class="cell" data-label="Property">credit</div>
<div class="cell" data-label="Column">credit_id</div>
<div class="cell" data-label="Arabic">دائن</div>
<div class="cell" data-label="English">Credit</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AccountingSideConfig](/modules/basic/AccountingSideConfig.md) 
</div>
</div>

<div class="row searchable" id="criteriaDefinition">
<div class="cell" data-label="Property">criteriaDefinition</div>
<div class="cell" data-label="Column">criteriaDefinition_id</div>
<div class="cell" data-label="Arabic"> المعايير</div>
<div class="cell" data-label="English"> Criteria</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CriteriaDefinition](/modules/basic/CriteriaDefinition.md) 
</div>
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

<div class="row searchable" id="debit">
<div class="cell" data-label="Property">debit</div>
<div class="cell" data-label="Column">debit_id</div>
<div class="cell" data-label="Arabic">مدين</div>
<div class="cell" data-label="English">Debit</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AccountingSideConfig](/modules/basic/AccountingSideConfig.md) 
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

<div class="row searchable" id="doNotApplyWhenQuery">
<div class="cell" data-label="Property">doNotApplyWhenQuery</div>
<div class="cell" data-label="Column">doNotApplyWhenQuery</div>
<div class="cell" data-label="Arabic">منع التطبيق عند التوافق مع الاستعلام</div>
<div class="cell" data-label="English">Do Not Apply When Query</div>
<div class="cell" data-label="Type">BigText</div>

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

<div class="row searchable" id="duesComponentOrder">
<div class="cell" data-label="Property">duesComponentOrder</div>
<div class="cell" data-label="Column">duesComponentOrder</div>
<div class="cell" data-label="Arabic">ترتيب المكون</div>
<div class="cell" data-label="English">Component Order</div>
<div class="cell" data-label="Type">Integer</div>

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

<div class="row searchable" id="effectType">
<div class="cell" data-label="Property">effectType</div>
<div class="cell" data-label="Column">effectType</div>
<div class="cell" data-label="Arabic">نوع التأثير</div>
<div class="cell" data-label="English">Component Effect Type</div>
<div class="cell" data-label="Type">Enum</div>

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

<div class="row searchable" id="fixedValue">
<div class="cell" data-label="Property">fixedValue</div>
<div class="cell" data-label="Column">fixedValue</div>
<div class="cell" data-label="Arabic">القيمة الثابتة</div>
<div class="cell" data-label="English">Fixed Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="fractionalPlaces">
<div class="cell" data-label="Property">fractionalPlaces</div>
<div class="cell" data-label="Column">fractionalPlaces</div>
<div class="cell" data-label="Arabic">عدد خانات الكسر</div>
<div class="cell" data-label="English">Decimal Fractional Places</div>
<div class="cell" data-label="Type">Integer</div>

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

<div class="row searchable" id="id">
<div class="cell" data-label="Property">id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="includeComponentEffectsIn">
<div class="cell" data-label="Property">includeComponentEffectsIn</div>
<div class="cell" data-label="Column">includeComponentEffectsIn</div>
<div class="cell" data-label="Arabic">تضمين تأثير المكون مع</div>
<div class="cell" data-label="English">Include Component Effects In</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="indexInParent">
<div class="cell" data-label="Property">indexInParent</div>
<div class="cell" data-label="Column">indexInParent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

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

 [LargeData](/modules/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="maxValue">
<div class="cell" data-label="Property">maxValue</div>
<div class="cell" data-label="Column">maxValue</div>
<div class="cell" data-label="Arabic">أقصي قيمة</div>
<div class="cell" data-label="English">Maximum Value</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="query">
<div class="cell" data-label="Property">query</div>
<div class="cell" data-label="Column">query</div>
<div class="cell" data-label="Arabic">الاستعلام</div>
<div class="cell" data-label="English">Query</div>
<div class="cell" data-label="Type">BigText</div>

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

 [NaMaUser](/modules/system-tables/NaMaUser.md) 
</div>
</div>

<div class="row searchable" id="roundingMode">
<div class="cell" data-label="Property">roundingMode</div>
<div class="cell" data-label="Column">roundingMode</div>
<div class="cell" data-label="Arabic">طريقة التقريب</div>
<div class="cell" data-label="English">Rounding Mode</div>
<div class="cell" data-label="Type">Enum</div>

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

<div class="row searchable" id="usedWithContractingCost">
<div class="cell" data-label="Property">usedWithContractingCost</div>
<div class="cell" data-label="Column">usedWithContractingCost</div>
<div class="cell" data-label="Arabic">يستخدم مع تكلفة المقاولات</div>
<div class="cell" data-label="English">Used With Contracting Cost</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="usedWithTerminatLiquidation">
<div class="cell" data-label="Property">usedWithTerminatLiquidation</div>
<div class="cell" data-label="Column">usedWithTerminatLiquidation</div>
<div class="cell" data-label="Arabic">يستخدم مع تصفية نهاية الخدمة</div>
<div class="cell" data-label="English">Used With Termination Liquidation</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="usedWithVacationLiquidation">
<div class="cell" data-label="Property">usedWithVacationLiquidation</div>
<div class="cell" data-label="Column">usedWithVacationLiquidation</div>
<div class="cell" data-label="Arabic">يستخدم مع تصفية الأجازات</div>
<div class="cell" data-label="English">Used With Vacations Liquidation</div>
<div class="cell" data-label="Type">Boolean</div>

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


</div>
</div>

<div id='components' title='components' class='searchable'>

## components (المكونات - Components)
**Table Name:** DuesLiquidComponentLine, **Join Column:** duesLiquidationComponent_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="components.id">
<div class="cell" data-label="Property">components.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="components.lineNumber">
<div class="cell" data-label="Property">components.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="components.liquidationComponent">
<div class="cell" data-label="Property">components.liquidationComponent</div>
<div class="cell" data-label="Column">liquidationComponent_id</div>
<div class="cell" data-label="Arabic">مكونات التصفية</div>
<div class="cell" data-label="English">Liquidation Component</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DuesLiquidationComponent](/modules/humanresource-advanced/DuesLiquidationComponent.md) 
</div>
</div>

<div class="row searchable" id="components.salaryComponentType">
<div class="cell" data-label="Property">components.salaryComponentType</div>
<div class="cell" data-label="Column">salaryComponentType_id</div>
<div class="cell" data-label="Arabic"> نوع المفرد</div>
<div class="cell" data-label="English"> Salary Component Type</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SalaryComponentType](/modules/humanresource-payroll/SalaryComponentType.md) 
</div>
</div>


</div>
</div>

<div id='effectLines' title='effectLines' class='searchable'>

## effectLines (سطور التأثير المحاسبي - Accounting Effect Lines)
**Table Name:** DuesLiquidationComponentEffectLine, **Join Column:** duesLiquidationComponent_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="effectLines.credit">
<div class="cell" data-label="Property">effectLines.credit</div>
<div class="cell" data-label="Column">credit_id</div>
<div class="cell" data-label="Arabic">دائن</div>
<div class="cell" data-label="English">Credit</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AccountingSideConfig](/modules/basic/AccountingSideConfig.md) 
</div>
</div>

<div class="row searchable" id="effectLines.debit">
<div class="cell" data-label="Property">effectLines.debit</div>
<div class="cell" data-label="Column">debit_id</div>
<div class="cell" data-label="Arabic">مدين</div>
<div class="cell" data-label="English">Debit</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AccountingSideConfig](/modules/basic/AccountingSideConfig.md) 
</div>
</div>

<div class="row searchable" id="effectLines.duesDocApplyQuery">
<div class="cell" data-label="Property">effectLines.duesDocApplyQuery</div>
<div class="cell" data-label="Column">duesDocApplyQuery</div>
<div class="cell" data-label="Arabic">استعلام تطابق مستند التصفية</div>
<div class="cell" data-label="English">Dues Liquidation Document Apply When Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="effectLines.duesDocDoNotApplyQuery">
<div class="cell" data-label="Property">effectLines.duesDocDoNotApplyQuery</div>
<div class="cell" data-label="Column">duesDocDoNotApplyQuery</div>
<div class="cell" data-label="Arabic">استعلام عدم تطابق مستند التصفية</div>
<div class="cell" data-label="English">Dues Liquidation Document Do Not Apply When Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="effectLines.duesDocWhenMatched">
<div class="cell" data-label="Property">effectLines.duesDocWhenMatched</div>
<div class="cell" data-label="Column">duesDocWhenMatched_id</div>
<div class="cell" data-label="Arabic">عند تطابق مستند التصفية</div>
<div class="cell" data-label="English">Dues Liquidation Document When Matched</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CriteriaDefinition](/modules/basic/CriteriaDefinition.md) 
</div>
</div>

<div class="row searchable" id="effectLines.duesDocWhenNotMatched">
<div class="cell" data-label="Property">effectLines.duesDocWhenNotMatched</div>
<div class="cell" data-label="Column">duesDocWhenNotMatched_id</div>
<div class="cell" data-label="Arabic">عند عدم تطابق مستند التصفية</div>
<div class="cell" data-label="English">Dues Liquidation Document When Not Matched</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CriteriaDefinition](/modules/basic/CriteriaDefinition.md) 
</div>
</div>

<div class="row searchable" id="effectLines.employeeApplyQuery">
<div class="cell" data-label="Property">effectLines.employeeApplyQuery</div>
<div class="cell" data-label="Column">employeeApplyQuery</div>
<div class="cell" data-label="Arabic">استعلام تطابق الموظف</div>
<div class="cell" data-label="English">Employee Apply When Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="effectLines.employeeDoNotApplyQuery">
<div class="cell" data-label="Property">effectLines.employeeDoNotApplyQuery</div>
<div class="cell" data-label="Column">employeeDoNotApplyQuery</div>
<div class="cell" data-label="Arabic">استعلام عدم تطابق الموظف</div>
<div class="cell" data-label="English">Employee Do Not Apply When Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="effectLines.employeeWhenMatched">
<div class="cell" data-label="Property">effectLines.employeeWhenMatched</div>
<div class="cell" data-label="Column">employeeWhenMatched_id</div>
<div class="cell" data-label="Arabic">عند تطابق معيار الموظف</div>
<div class="cell" data-label="English">Employee When Matched Criteria</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CriteriaDefinition](/modules/basic/CriteriaDefinition.md) 
</div>
</div>

<div class="row searchable" id="effectLines.employeeWhenNotMatched">
<div class="cell" data-label="Property">effectLines.employeeWhenNotMatched</div>
<div class="cell" data-label="Column">employeeWhenNotMatched_id</div>
<div class="cell" data-label="Arabic">عند عدم تطابق معيار الموظف</div>
<div class="cell" data-label="English">Employee When Not Matched Criteria</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CriteriaDefinition](/modules/basic/CriteriaDefinition.md) 
</div>
</div>

<div class="row searchable" id="effectLines.id">
<div class="cell" data-label="Property">effectLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="effectLines.lineNumber">
<div class="cell" data-label="Property">effectLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>


</div>
</div>

<div id='formulas' title='formulas' class='searchable'>

## formulas (المعادلات - Formulas)
**Table Name:** DuesLiquidationCompFormula, **Join Column:** duesLiquidationComponent_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="formulas.applyWhenQuery">
<div class="cell" data-label="Property">formulas.applyWhenQuery</div>
<div class="cell" data-label="Column">applyWhenQuery</div>
<div class="cell" data-label="Arabic">تطبيق عند التوافق مع الاستعلام</div>
<div class="cell" data-label="English">Apply When Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="formulas.criteriaDefinition">
<div class="cell" data-label="Property">formulas.criteriaDefinition</div>
<div class="cell" data-label="Column">criteriaDefinition_id</div>
<div class="cell" data-label="Arabic"> المعايير</div>
<div class="cell" data-label="English"> Criteria</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CriteriaDefinition](/modules/basic/CriteriaDefinition.md) 
</div>
</div>

<div class="row searchable" id="formulas.divideOn">
<div class="cell" data-label="Property">formulas.divideOn</div>
<div class="cell" data-label="Column">divideOn</div>
<div class="cell" data-label="Arabic">مقسوما علي</div>
<div class="cell" data-label="English">Divide On</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="formulas.divideQuery">
<div class="cell" data-label="Property">formulas.divideQuery</div>
<div class="cell" data-label="Column">divideQuery</div>
<div class="cell" data-label="Arabic">استعلام مقسوما علي</div>
<div class="cell" data-label="English">Divide Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="formulas.doNotApplyWhenQuery">
<div class="cell" data-label="Property">formulas.doNotApplyWhenQuery</div>
<div class="cell" data-label="Column">doNotApplyWhenQuery</div>
<div class="cell" data-label="Arabic">منع التطبيق عند التوافق مع الاستعلام</div>
<div class="cell" data-label="English">Do Not Apply When Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="formulas.id">
<div class="cell" data-label="Property">formulas.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="formulas.lineNumber">
<div class="cell" data-label="Property">formulas.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="formulas.multiplyBy">
<div class="cell" data-label="Property">formulas.multiplyBy</div>
<div class="cell" data-label="Column">multiplyBy</div>
<div class="cell" data-label="Arabic">مضروب في</div>
<div class="cell" data-label="English">Multiply By</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="formulas.multiplyQuery">
<div class="cell" data-label="Property">formulas.multiplyQuery</div>
<div class="cell" data-label="Column">multiplyQuery</div>
<div class="cell" data-label="Arabic">استعلام مضروبا في</div>
<div class="cell" data-label="English">Multiply Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="formulas.rangeFrom">
<div class="cell" data-label="Property">formulas.rangeFrom</div>
<div class="cell" data-label="Column">rangeFrom</div>
<div class="cell" data-label="Arabic">المدي | من</div>
<div class="cell" data-label="English">Range | From</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="formulas.rangeTo">
<div class="cell" data-label="Property">formulas.rangeTo</div>
<div class="cell" data-label="Column">rangeTo</div>
<div class="cell" data-label="Arabic">المدي | إلي</div>
<div class="cell" data-label="English">Range | To</div>
<div class="cell" data-label="Type">Decimal</div>

</div>


</div>
</div>

