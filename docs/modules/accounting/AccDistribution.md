# AccDistribution
**Arabic:** توزيع حسابات - توزيعات حسابات
**English:** Account Distribution - Account Distributions

<ContentFilter/>


<div class='searchable'>
<a href='#accountDistributions'>accountDistributions (AccountDistributionLine) </a> , <a href='#analysisSetDistributions'>analysisSetDistributions (AnalysisSetDistribution) </a> , <a href='#branchDistributions'>branchDistributions (BranchDistribution) </a> , <a href='#criteriaBasedDistributions'>criteriaBasedDistributions (CriteriaBasedDistrib) </a> , <a href='#departmentDistributions'>departmentDistributions (DepartmentDistribution) </a> , <a href='#entityDimensionDistributions'>entityDimensionDistributions (EntityDimensionDistribution) </a> , <a href='#ref1Distributions'>ref1Distributions (Ref2Distribution) </a> , <a href='#ref2Distributions'>ref2Distributions (Ref1Distribution) </a> , <a href='#ref3Distributions'>ref3Distributions (Ref3Distribution) </a> , <a href='#sectorDistributions'>sectorDistributions (SectorDistribution) </a> , <a href='#subsidiaryDistributions'>subsidiaryDistributions (SubsidiaryDistribution) </a>
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
</div><div class="row searchable" id="accountKeepAndInvert">
<div class="cell" data-label="Property">accountKeepAndInvert</div>
<div class="cell" data-label="Column">accountKeepAndInvert</div>
<div class="cell" data-label="Arabic">الاحتفاظ وعكس السطر للحساب</div>
<div class="cell" data-label="English">Keep And Invert Line For Account</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="accountMinUndistValue">
<div class="cell" data-label="Property">accountMinUndistValue</div>
<div class="cell" data-label="Column">accountMinUndistValue</div>
<div class="cell" data-label="Arabic">أقل قيمة يمكن توزيعها للحساب</div>
<div class="cell" data-label="English">Minimal Undistributable Value For Account</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="accountPolicy">
<div class="cell" data-label="Property">accountPolicy</div>
<div class="cell" data-label="Column">accountPolicy</div>
<div class="cell" data-label="Arabic">سياسة توزيع الحساب</div>
<div class="cell" data-label="English">Account Policy</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="accountQuery">
<div class="cell" data-label="Property">accountQuery</div>
<div class="cell" data-label="Column">accountQuery</div>
<div class="cell" data-label="Arabic">استعلام الحساب</div>
<div class="cell" data-label="English">Account Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="accountScript">
<div class="cell" data-label="Property">accountScript</div>
<div class="cell" data-label="Column">accountScript</div>
<div class="cell" data-label="Arabic">سيناريو الحساب</div>
<div class="cell" data-label="English">Account Script</div>
<div class="cell" data-label="Type">BigText</div>

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

<div class="row searchable" id="analysisSetKeepAndInvert">
<div class="cell" data-label="Property">analysisSetKeepAndInvert</div>
<div class="cell" data-label="Column">analysisSetKeepAndInvert</div>
<div class="cell" data-label="Arabic">الاحتفاظ وعكس السطر للمجموعة التحليلية</div>
<div class="cell" data-label="English">Keep And Invert Line For Analysis Set</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="analysisSetMinUndistValue">
<div class="cell" data-label="Property">analysisSetMinUndistValue</div>
<div class="cell" data-label="Column">analysisSetMinUndistValue</div>
<div class="cell" data-label="Arabic">أقل قيمة يمكن توزيعها للمجموعة التحليلية</div>
<div class="cell" data-label="English">Minimal Undistributable Value For AnalysisSet</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="analysisSetOrder">
<div class="cell" data-label="Property">analysisSetOrder</div>
<div class="cell" data-label="Column">analysisSetOrder</div>
<div class="cell" data-label="Arabic">ترتيب المجموعة التحليلية</div>
<div class="cell" data-label="English">Analysis Set Order</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="analysisSetPolicy">
<div class="cell" data-label="Property">analysisSetPolicy</div>
<div class="cell" data-label="Column">analysisSetPolicy</div>
<div class="cell" data-label="Arabic">سياسة توزيع المجموعة التحليلية</div>
<div class="cell" data-label="English">Analysis Set Policy</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="analysisSetQuery">
<div class="cell" data-label="Property">analysisSetQuery</div>
<div class="cell" data-label="Column">analysisSetQuery</div>
<div class="cell" data-label="Arabic">استعلام المجموعة التحليلية</div>
<div class="cell" data-label="English">AnalysisSet Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="analysisSetScript">
<div class="cell" data-label="Property">analysisSetScript</div>
<div class="cell" data-label="Column">analysisSetScript</div>
<div class="cell" data-label="Arabic">سيناريو المجموعة التحليلية</div>
<div class="cell" data-label="English">Analysis Set Script</div>
<div class="cell" data-label="Type">BigText</div>

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

<div class="row searchable" id="branchKeepAndInvert">
<div class="cell" data-label="Property">branchKeepAndInvert</div>
<div class="cell" data-label="Column">branchKeepAndInvert</div>
<div class="cell" data-label="Arabic">الاحتفاظ وعكس السطر للفرع</div>
<div class="cell" data-label="English">Keep And Invert Line For Branch</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="branchMinUndistValue">
<div class="cell" data-label="Property">branchMinUndistValue</div>
<div class="cell" data-label="Column">branchMinUndistValue</div>
<div class="cell" data-label="Arabic">أقل قيمة يمكن توزيعها للفرع</div>
<div class="cell" data-label="English">Minimal Undistributable Value For Branch</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="branchOrder">
<div class="cell" data-label="Property">branchOrder</div>
<div class="cell" data-label="Column">branchOrder</div>
<div class="cell" data-label="Arabic">ترتيب الفرع</div>
<div class="cell" data-label="English">Branch Order</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="branchPolicy">
<div class="cell" data-label="Property">branchPolicy</div>
<div class="cell" data-label="Column">branchPolicy</div>
<div class="cell" data-label="Arabic">سياسة توزيع الفرع</div>
<div class="cell" data-label="English">Branch Policy</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="branchQuery">
<div class="cell" data-label="Property">branchQuery</div>
<div class="cell" data-label="Column">branchQuery</div>
<div class="cell" data-label="Arabic">استعلام الفرع</div>
<div class="cell" data-label="English">Branch Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="branchScript">
<div class="cell" data-label="Property">branchScript</div>
<div class="cell" data-label="Column">branchScript</div>
<div class="cell" data-label="Arabic">سيناريو الفرع</div>
<div class="cell" data-label="English">Branch Script</div>
<div class="cell" data-label="Type">BigText</div>

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

<div class="row searchable" id="departmentKeepAndInvert">
<div class="cell" data-label="Property">departmentKeepAndInvert</div>
<div class="cell" data-label="Column">departmentKeepAndInvert</div>
<div class="cell" data-label="Arabic">الاحتفاظ وعكس السطر للقسم</div>
<div class="cell" data-label="English">Keep And Invert Line For Department</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="departmentMinUndistValue">
<div class="cell" data-label="Property">departmentMinUndistValue</div>
<div class="cell" data-label="Column">departmentMinUndistValue</div>
<div class="cell" data-label="Arabic">أقل قيمة يمكن توزيعها للقسم</div>
<div class="cell" data-label="English">Minimal Undistributable Value For Department</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="departmentOrder">
<div class="cell" data-label="Property">departmentOrder</div>
<div class="cell" data-label="Column">departmentOrder</div>
<div class="cell" data-label="Arabic">ترتيب القسم</div>
<div class="cell" data-label="English">Department Order</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="departmentPolicy">
<div class="cell" data-label="Property">departmentPolicy</div>
<div class="cell" data-label="Column">departmentPolicy</div>
<div class="cell" data-label="Arabic">سياسة توزيع القسم</div>
<div class="cell" data-label="English">Department Policy</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="departmentQuery">
<div class="cell" data-label="Property">departmentQuery</div>
<div class="cell" data-label="Column">departmentQuery</div>
<div class="cell" data-label="Arabic">استعلام القسم</div>
<div class="cell" data-label="English">Department Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="departmentScript">
<div class="cell" data-label="Property">departmentScript</div>
<div class="cell" data-label="Column">departmentScript</div>
<div class="cell" data-label="Arabic">سيناريو القسم</div>
<div class="cell" data-label="English">Department Script</div>
<div class="cell" data-label="Type">BigText</div>

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

<div class="row searchable" id="distributeBasedOnSideBranch">
<div class="cell" data-label="Property">distributeBasedOnSideBranch</div>
<div class="cell" data-label="Column">distributeBasedOnSideBranch</div>
<div class="cell" data-label="Arabic">توزيع على الفروع الموجودة في الجانب الآخر</div>
<div class="cell" data-label="English">Distribute Based On Side Branches</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="distributeBasedOnSideDep">
<div class="cell" data-label="Property">distributeBasedOnSideDep</div>
<div class="cell" data-label="Column">distributeBasedOnSideDep</div>
<div class="cell" data-label="Arabic">توزيع على الإدارات الموجودة في الجانب الآخر</div>
<div class="cell" data-label="English">Distribute Based On Side Departments</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="distributeBasedOnSideSector">
<div class="cell" data-label="Property">distributeBasedOnSideSector</div>
<div class="cell" data-label="Column">distributeBasedOnSideSector</div>
<div class="cell" data-label="Arabic">توزيع على القطاعات الموجودة في الجانب الآخر</div>
<div class="cell" data-label="English">Distribute Based On Side Sectors</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="distributeBasedOnTheSideRef1">
<div class="cell" data-label="Property">distributeBasedOnTheSideRef1</div>
<div class="cell" data-label="Column">distributeBasedOnTheSideRef1</div>
<div class="cell" data-label="Arabic">توزيع على المرجع رقم 1 في الجانب الآخر</div>
<div class="cell" data-label="English">Distribute Based On Side Ref 1</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="distributeBasedOnTheSideRef2">
<div class="cell" data-label="Property">distributeBasedOnTheSideRef2</div>
<div class="cell" data-label="Column">distributeBasedOnTheSideRef2</div>
<div class="cell" data-label="Arabic">توزيع على المرجع رقم 2 في الجانب الآخر</div>
<div class="cell" data-label="English">Distribute Based On Side Ref 2</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="distributeBasedOnTheSideRef3">
<div class="cell" data-label="Property">distributeBasedOnTheSideRef3</div>
<div class="cell" data-label="Column">distributeBasedOnTheSideRef3</div>
<div class="cell" data-label="Arabic">توزيع على المرجع رقم 3 في الجانب الآخر</div>
<div class="cell" data-label="English">Distribute Based On Side Ref 3</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="distributeBasedOnTheSideSubsidiary">
<div class="cell" data-label="Property">distributeBasedOnTheSideSubsidiary</div>
<div class="cell" data-label="Column">distributeBasedOnTheSideSubsidiary</div>
<div class="cell" data-label="Arabic">توزيع على الذمة في الجانب الآخر</div>
<div class="cell" data-label="English">Distribute Based On Side Subsidiary</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="distributeOnSideAnalysisSet">
<div class="cell" data-label="Property">distributeOnSideAnalysisSet</div>
<div class="cell" data-label="Column">distributeOnSideAnalysisSet</div>
<div class="cell" data-label="Arabic">توزيع على المجموعات التحليلية الموجودة في الجانب الآخر</div>
<div class="cell" data-label="English">Distribute Based On Side Analysis Sets</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="distributeOnSideEntityDim">
<div class="cell" data-label="Property">distributeOnSideEntityDim</div>
<div class="cell" data-label="Column">distributeOnSideEntityDim</div>
<div class="cell" data-label="Arabic">توزيع على السجلات الموجودة في الجانب الآخر</div>
<div class="cell" data-label="English">Distribute Based On Side Entity Dimensions</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="distributionType">
<div class="cell" data-label="Property">distributionType</div>
<div class="cell" data-label="Column">distributionType</div>
<div class="cell" data-label="Arabic">طريقة التوزيع</div>
<div class="cell" data-label="English">Distribution Type</div>
<div class="cell" data-label="Type">Enum</div>

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

<div class="row searchable" id="entityDimensionKeepAndInvert">
<div class="cell" data-label="Property">entityDimensionKeepAndInvert</div>
<div class="cell" data-label="Column">entityDimensionKeepAndInvert</div>
<div class="cell" data-label="Arabic">الاحتفاظ وعكس السطر للسجل</div>
<div class="cell" data-label="English">Keep And Invert Line For Entity Dimension</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="entityDimensionMinUndistValue">
<div class="cell" data-label="Property">entityDimensionMinUndistValue</div>
<div class="cell" data-label="Column">entityDimensionMinUndistValue</div>
<div class="cell" data-label="Arabic">أقل قيمة يمكن توزيعها للسجل</div>
<div class="cell" data-label="English">Minimal Undistributable Value For Entity Dimension</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="entityDimensionOrder">
<div class="cell" data-label="Property">entityDimensionOrder</div>
<div class="cell" data-label="Column">entityDimensionOrder</div>
<div class="cell" data-label="Arabic">ترتيب السجل</div>
<div class="cell" data-label="English">Entity Dimension Order</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="entityDimensionPolicy">
<div class="cell" data-label="Property">entityDimensionPolicy</div>
<div class="cell" data-label="Column">entityDimensionPolicy</div>
<div class="cell" data-label="Arabic">سياسة توزيع السجل</div>
<div class="cell" data-label="English">Entity Dimension Policy</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="entityDimensionQuery">
<div class="cell" data-label="Property">entityDimensionQuery</div>
<div class="cell" data-label="Column">entityDimensionQuery</div>
<div class="cell" data-label="Arabic">استعلام السجل</div>
<div class="cell" data-label="English">Entity Dimension Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="entityDimensionScript">
<div class="cell" data-label="Property">entityDimensionScript</div>
<div class="cell" data-label="Column">entityDimensionScript</div>
<div class="cell" data-label="Arabic">سيناريو السجل</div>
<div class="cell" data-label="English">Entity Dimension Script</div>
<div class="cell" data-label="Type">BigText</div>

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

<div class="row searchable" id="multiDistributeType">
<div class="cell" data-label="Property">multiDistributeType</div>
<div class="cell" data-label="Column">multiDistributeType</div>
<div class="cell" data-label="Arabic">طريقة التوزيع المتعدد</div>
<div class="cell" data-label="English">multi Distribution Type</div>
<div class="cell" data-label="Type">Enum</div>

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

<div class="row searchable" id="otherSideAnalysisSetCriteria">
<div class="cell" data-label="Property">otherSideAnalysisSetCriteria</div>
<div class="cell" data-label="Column">otherSideAnalysisSetCriteria_id</div>
<div class="cell" data-label="Arabic">معيار المجموعات التحليلية في سطور الجانب الآخر</div>
<div class="cell" data-label="English">Other Side Analysis Sets Criteria</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CriteriaDefinition](/modules/basic/CriteriaDefinition.md) 
</div>
</div>

<div class="row searchable" id="otherSideBranchCriteria">
<div class="cell" data-label="Property">otherSideBranchCriteria</div>
<div class="cell" data-label="Column">otherSideBranchCriteria_id</div>
<div class="cell" data-label="Arabic">معيار الفروع  في سطور الجانب الآخر</div>
<div class="cell" data-label="English">Other Side Branches Criteria</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CriteriaDefinition](/modules/basic/CriteriaDefinition.md) 
</div>
</div>

<div class="row searchable" id="otherSideDepartmentCriteria">
<div class="cell" data-label="Property">otherSideDepartmentCriteria</div>
<div class="cell" data-label="Column">otherSideDepartmentCriteria_id</div>
<div class="cell" data-label="Arabic">معيار الإدارات في سطور الجانب الآخر</div>
<div class="cell" data-label="English">Other Side Departments Criteria</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CriteriaDefinition](/modules/basic/CriteriaDefinition.md) 
</div>
</div>

<div class="row searchable" id="otherSideEntityDimCriteria">
<div class="cell" data-label="Property">otherSideEntityDimCriteria</div>
<div class="cell" data-label="Column">otherSideEntityDimCriteria_id</div>
<div class="cell" data-label="Arabic">معيار السجلات في سطور الجانب الآخر</div>
<div class="cell" data-label="English">Other Side Entity Dimensions Criteria</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CriteriaDefinition](/modules/basic/CriteriaDefinition.md) 
</div>
</div>

<div class="row searchable" id="otherSideRef1Criteria">
<div class="cell" data-label="Property">otherSideRef1Criteria</div>
<div class="cell" data-label="Column">otherSideRef1Criteria_id</div>
<div class="cell" data-label="Arabic">معيار مرجع 1 في سطور الجانب الآخر</div>
<div class="cell" data-label="English">Other Side Ref1 Criteria</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CriteriaDefinition](/modules/basic/CriteriaDefinition.md) 
</div>
</div>

<div class="row searchable" id="otherSideRef2Criteria">
<div class="cell" data-label="Property">otherSideRef2Criteria</div>
<div class="cell" data-label="Column">otherSideRef2Criteria_id</div>
<div class="cell" data-label="Arabic">معيار مرجع 2 في سطور الجانب الآخر</div>
<div class="cell" data-label="English">Other Side Ref 2 Criteria</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CriteriaDefinition](/modules/basic/CriteriaDefinition.md) 
</div>
</div>

<div class="row searchable" id="otherSideRef3Criteria">
<div class="cell" data-label="Property">otherSideRef3Criteria</div>
<div class="cell" data-label="Column">otherSideRef3Criteria_id</div>
<div class="cell" data-label="Arabic">معيار مرجع 3 في سطور الجانب الآخر</div>
<div class="cell" data-label="English">Other Side Ref 3 Criteria</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CriteriaDefinition](/modules/basic/CriteriaDefinition.md) 
</div>
</div>

<div class="row searchable" id="otherSideSectorCriteria">
<div class="cell" data-label="Property">otherSideSectorCriteria</div>
<div class="cell" data-label="Column">otherSideSectorCriteria_id</div>
<div class="cell" data-label="Arabic">معيار القطاعات في سطور الجانب الآخر</div>
<div class="cell" data-label="English">Other Side Sectors Criteria</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CriteriaDefinition](/modules/basic/CriteriaDefinition.md) 
</div>
</div>

<div class="row searchable" id="otherSideSubsidiaryCriteria">
<div class="cell" data-label="Property">otherSideSubsidiaryCriteria</div>
<div class="cell" data-label="Column">otherSideSubsidiaryCriteria_id</div>
<div class="cell" data-label="Arabic">معيار الذمة في سطور الجانب الآخر</div>
<div class="cell" data-label="English">Other Side Subsidiary Criteria</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CriteriaDefinition](/modules/basic/CriteriaDefinition.md) 
</div>
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

<div class="row searchable" id="ref1">
<div class="cell" data-label="Property">ref1</div>
<div class="cell gen-ref-column" data-label="Column">ref1ActualCode,  ref1Code,  ref1EntityType,  ref1Id</div>
<div class="cell" data-label="Arabic">مرجع 1</div>
<div class="cell" data-label="English">Reference 1</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="ref1KeepAndInvert">
<div class="cell" data-label="Property">ref1KeepAndInvert</div>
<div class="cell" data-label="Column">ref1KeepAndInvert</div>
<div class="cell" data-label="Arabic">الاحتفاظ وعكس السطر لمرجع 1</div>
<div class="cell" data-label="English">Keep And Invert Line For Ref 1</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="ref1MinUndistValue">
<div class="cell" data-label="Property">ref1MinUndistValue</div>
<div class="cell" data-label="Column">ref1MinUndistValue</div>
<div class="cell" data-label="Arabic">أقل قيمة يمكن توزيعها لمرجع 1</div>
<div class="cell" data-label="English">Minimal Undistributable Value For Ref 1</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="ref1Order">
<div class="cell" data-label="Property">ref1Order</div>
<div class="cell" data-label="Column">ref1Order</div>
<div class="cell" data-label="Arabic">ترتيب مرجع 1</div>
<div class="cell" data-label="English">Ref 1 Order</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="ref1Policy">
<div class="cell" data-label="Property">ref1Policy</div>
<div class="cell" data-label="Column">ref1Policy</div>
<div class="cell" data-label="Arabic">سياسة توزيع مرجع 1</div>
<div class="cell" data-label="English">Ref 1 Policy</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="ref1Query">
<div class="cell" data-label="Property">ref1Query</div>
<div class="cell" data-label="Column">ref1Query</div>
<div class="cell" data-label="Arabic">استعلام مرجع 1</div>
<div class="cell" data-label="English">Ref 1 Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="ref1Script">
<div class="cell" data-label="Property">ref1Script</div>
<div class="cell" data-label="Column">ref1Script</div>
<div class="cell" data-label="Arabic">سيناريو مرجع 1</div>
<div class="cell" data-label="English">Ref 1 Script</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="ref2">
<div class="cell" data-label="Property">ref2</div>
<div class="cell gen-ref-column" data-label="Column">ref2ActualCode,  ref2Code,  ref2EntityType,  ref2Id</div>
<div class="cell" data-label="Arabic">مرجع 2</div>
<div class="cell" data-label="English">Reference 2</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="ref2KeepAndInvert">
<div class="cell" data-label="Property">ref2KeepAndInvert</div>
<div class="cell" data-label="Column">ref2KeepAndInvert</div>
<div class="cell" data-label="Arabic">الاحتفاظ وعكس السطر لمرجع 2</div>
<div class="cell" data-label="English">Keep And Invert Line For Ref 2</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="ref2MinUndistValue">
<div class="cell" data-label="Property">ref2MinUndistValue</div>
<div class="cell" data-label="Column">ref2MinUndistValue</div>
<div class="cell" data-label="Arabic">أقل قيمة يمكن توزيعها لمرجع 2</div>
<div class="cell" data-label="English">Minimal Undistributable Value For Ref 2</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="ref2Order">
<div class="cell" data-label="Property">ref2Order</div>
<div class="cell" data-label="Column">ref2Order</div>
<div class="cell" data-label="Arabic">ترتيب مرجع 2</div>
<div class="cell" data-label="English">Ref 2 Order</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="ref2Policy">
<div class="cell" data-label="Property">ref2Policy</div>
<div class="cell" data-label="Column">ref2Policy</div>
<div class="cell" data-label="Arabic">سياسة توزيع مرجع 2</div>
<div class="cell" data-label="English">Ref 2 Policy</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="ref2Query">
<div class="cell" data-label="Property">ref2Query</div>
<div class="cell" data-label="Column">ref2Query</div>
<div class="cell" data-label="Arabic">استعلام مرجع 2</div>
<div class="cell" data-label="English">Ref 2 Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="ref2Script">
<div class="cell" data-label="Property">ref2Script</div>
<div class="cell" data-label="Column">ref2Script</div>
<div class="cell" data-label="Arabic">سيناريو مرجع 2</div>
<div class="cell" data-label="English">Ref 2 Script</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="ref3">
<div class="cell" data-label="Property">ref3</div>
<div class="cell gen-ref-column" data-label="Column">ref3ActualCode,  ref3Code,  ref3EntityType,  ref3Id</div>
<div class="cell" data-label="Arabic">مرجع 3</div>
<div class="cell" data-label="English">Reference 3</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="ref3KeepAndInvert">
<div class="cell" data-label="Property">ref3KeepAndInvert</div>
<div class="cell" data-label="Column">ref3KeepAndInvert</div>
<div class="cell" data-label="Arabic">الاحتفاظ وعكس السطر لمرجع 3</div>
<div class="cell" data-label="English">Keep And Invert Line For Ref 3</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="ref3MinUndistValue">
<div class="cell" data-label="Property">ref3MinUndistValue</div>
<div class="cell" data-label="Column">ref3MinUndistValue</div>
<div class="cell" data-label="Arabic">أقل قيمة يمكن توزيعها لمرجع 3</div>
<div class="cell" data-label="English">Minimal Undistributable Value For Ref 3</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="ref3Order">
<div class="cell" data-label="Property">ref3Order</div>
<div class="cell" data-label="Column">ref3Order</div>
<div class="cell" data-label="Arabic">ترتيب مرجع 3</div>
<div class="cell" data-label="English">Ref 3 Order</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="ref3Policy">
<div class="cell" data-label="Property">ref3Policy</div>
<div class="cell" data-label="Column">ref3Policy</div>
<div class="cell" data-label="Arabic">سياسة توزيع مرجع 3</div>
<div class="cell" data-label="English">Ref 3 Policy</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="ref3Query">
<div class="cell" data-label="Property">ref3Query</div>
<div class="cell" data-label="Column">ref3Query</div>
<div class="cell" data-label="Arabic">استعلام مرجع 3</div>
<div class="cell" data-label="English">Ref 3 Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="ref3Script">
<div class="cell" data-label="Property">ref3Script</div>
<div class="cell" data-label="Column">ref3Script</div>
<div class="cell" data-label="Arabic">سيناريو مرجع 3</div>
<div class="cell" data-label="English">Ref 3 Script</div>
<div class="cell" data-label="Type">BigText</div>

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

<div class="row searchable" id="sectorKeepAndInvert">
<div class="cell" data-label="Property">sectorKeepAndInvert</div>
<div class="cell" data-label="Column">sectorKeepAndInvert</div>
<div class="cell" data-label="Arabic">الاحتفاظ وعكس السطر للقطاع</div>
<div class="cell" data-label="English">Keep And Invert Line For Sector</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="sectorMinUndistValue">
<div class="cell" data-label="Property">sectorMinUndistValue</div>
<div class="cell" data-label="Column">sectorMinUndistValue</div>
<div class="cell" data-label="Arabic">أقل قيمة يمكن توزيعها للقطاع</div>
<div class="cell" data-label="English">Minimal Undistributable Value For Sector</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="sectorOrder">
<div class="cell" data-label="Property">sectorOrder</div>
<div class="cell" data-label="Column">sectorOrder</div>
<div class="cell" data-label="Arabic">ترتيب القطاع</div>
<div class="cell" data-label="English">Sector Order</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="sectorPolicy">
<div class="cell" data-label="Property">sectorPolicy</div>
<div class="cell" data-label="Column">sectorPolicy</div>
<div class="cell" data-label="Arabic">سياسة توزيع القطاع</div>
<div class="cell" data-label="English">Sector Policy</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="sectorQuery">
<div class="cell" data-label="Property">sectorQuery</div>
<div class="cell" data-label="Column">sectorQuery</div>
<div class="cell" data-label="Arabic">استعلام القطاع</div>
<div class="cell" data-label="English">Sector Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="sectorScript">
<div class="cell" data-label="Property">sectorScript</div>
<div class="cell" data-label="Column">sectorScript</div>
<div class="cell" data-label="Arabic">سيناريو القطاع</div>
<div class="cell" data-label="English">Sector Script</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="subsidiaryKeepAndInvert">
<div class="cell" data-label="Property">subsidiaryKeepAndInvert</div>
<div class="cell" data-label="Column">subsidiaryKeepAndInvert</div>
<div class="cell" data-label="Arabic">الاحتفاظ وعكس السطر للذمة</div>
<div class="cell" data-label="English">Keep And Invert Line For Subsidiary</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="subsidiaryMinUndistValue">
<div class="cell" data-label="Property">subsidiaryMinUndistValue</div>
<div class="cell" data-label="Column">subsidiaryMinUndistValue</div>
<div class="cell" data-label="Arabic">أقل قيمة يمكن توزيعها للذمة</div>
<div class="cell" data-label="English">Minimal Undistributable Value For Subsidiary</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="subsidiaryOrder">
<div class="cell" data-label="Property">subsidiaryOrder</div>
<div class="cell" data-label="Column">subsidiaryOrder</div>
<div class="cell" data-label="Arabic">ترتيب الذمة</div>
<div class="cell" data-label="English">Subsidiary Order</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="subsidiaryPolicy">
<div class="cell" data-label="Property">subsidiaryPolicy</div>
<div class="cell" data-label="Column">subsidiaryPolicy</div>
<div class="cell" data-label="Arabic">سياسة توزيع الذمة</div>
<div class="cell" data-label="English">Subsidiary Policy</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="subsidiaryQuery">
<div class="cell" data-label="Property">subsidiaryQuery</div>
<div class="cell" data-label="Column">subsidiaryQuery</div>
<div class="cell" data-label="Arabic">استعلام الذمة</div>
<div class="cell" data-label="English">Subsidiary Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="subsidiaryScript">
<div class="cell" data-label="Property">subsidiaryScript</div>
<div class="cell" data-label="Column">subsidiaryScript</div>
<div class="cell" data-label="Arabic">سيناريو الذمة</div>
<div class="cell" data-label="English">Subsidiary Script</div>
<div class="cell" data-label="Type">BigText</div>

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

<div id='accountDistributions' title='accountDistributions' class='searchable'>

## accountDistributions (نسب الحسابات - Account Distributions)
**Table Name:** AccountDistributionLine, **Join Column:** accDistribution_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="accountDistributions.account">
<div class="cell" data-label="Property">accountDistributions.account</div>
<div class="cell" data-label="Column">account_id</div>
<div class="cell" data-label="Arabic"> حساب</div>
<div class="cell" data-label="English"> Account</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Account](/modules/accounting/Account.md) 
</div>
</div>

<div class="row searchable" id="accountDistributions.id">
<div class="cell" data-label="Property">accountDistributions.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="accountDistributions.lineNumber">
<div class="cell" data-label="Property">accountDistributions.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="accountDistributions.percentage">
<div class="cell" data-label="Property">accountDistributions.percentage</div>
<div class="cell" data-label="Column">percentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="accountDistributions.useSameAsOrigin">
<div class="cell" data-label="Property">accountDistributions.useSameAsOrigin</div>
<div class="cell" data-label="Column">useSameAsOrigin</div>
<div class="cell" data-label="Arabic">استعمال المحدد الاصلي في السطر</div>
<div class="cell" data-label="English">Use Same As Origin</div>
<div class="cell" data-label="Type">Boolean</div>

</div>


</div>
</div>

<div id='analysisSetDistributions' title='analysisSetDistributions' class='searchable'>

## analysisSetDistributions (نسب المجموعات التحليلية - Analysis Set Distributions)
**Table Name:** AnalysisSetDistribution, **Join Column:** accDistribution_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="analysisSetDistributions.analysisSet">
<div class="cell" data-label="Property">analysisSetDistributions.analysisSet</div>
<div class="cell" data-label="Column">analysisSet_id</div>
<div class="cell" data-label="Arabic">المجموعة التحليلية</div>
<div class="cell" data-label="English">Analysis set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/modules/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="analysisSetDistributions.id">
<div class="cell" data-label="Property">analysisSetDistributions.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="analysisSetDistributions.lineNumber">
<div class="cell" data-label="Property">analysisSetDistributions.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="analysisSetDistributions.percentage">
<div class="cell" data-label="Property">analysisSetDistributions.percentage</div>
<div class="cell" data-label="Column">percentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="analysisSetDistributions.useSameAsOrigin">
<div class="cell" data-label="Property">analysisSetDistributions.useSameAsOrigin</div>
<div class="cell" data-label="Column">useSameAsOrigin</div>
<div class="cell" data-label="Arabic">استعمال المحدد الاصلي في السطر</div>
<div class="cell" data-label="English">Use Same As Origin</div>
<div class="cell" data-label="Type">Boolean</div>

</div>


</div>
</div>

<div id='branchDistributions' title='branchDistributions' class='searchable'>

## branchDistributions (نسب الفروع - Branch Distributions)
**Table Name:** BranchDistribution, **Join Column:** accDistribution_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="branchDistributions.branch">
<div class="cell" data-label="Property">branchDistributions.branch</div>
<div class="cell" data-label="Column">branch_id</div>
<div class="cell" data-label="Arabic">الفرع</div>
<div class="cell" data-label="English">Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/modules/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="branchDistributions.id">
<div class="cell" data-label="Property">branchDistributions.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="branchDistributions.lineNumber">
<div class="cell" data-label="Property">branchDistributions.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="branchDistributions.percentage">
<div class="cell" data-label="Property">branchDistributions.percentage</div>
<div class="cell" data-label="Column">percentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="branchDistributions.useSameAsOrigin">
<div class="cell" data-label="Property">branchDistributions.useSameAsOrigin</div>
<div class="cell" data-label="Column">useSameAsOrigin</div>
<div class="cell" data-label="Arabic">استعمال المحدد الاصلي في السطر</div>
<div class="cell" data-label="English">Use Same As Origin</div>
<div class="cell" data-label="Type">Boolean</div>

</div>


</div>
</div>

<div id='criteriaBasedDistributions' title='criteriaBasedDistributions' class='searchable'>

## criteriaBasedDistributions (التوزيعات و معاييرها - Criteria Based Distributions)
**Table Name:** CriteriaBasedDistrib, **Join Column:** accDistribution_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="criteriaBasedDistributions.applyWhenQuery">
<div class="cell" data-label="Property">criteriaBasedDistributions.applyWhenQuery</div>
<div class="cell" data-label="Column">applyWhenQuery</div>
<div class="cell" data-label="Arabic">تطبيق عند التوافق مع الاستعلام</div>
<div class="cell" data-label="English">Apply When Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="criteriaBasedDistributions.criteria">
<div class="cell" data-label="Property">criteriaBasedDistributions.criteria</div>
<div class="cell" data-label="Column">criteria_id</div>
<div class="cell" data-label="Arabic">المعايير</div>
<div class="cell" data-label="English">Criteria</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CriteriaDefinition](/modules/basic/CriteriaDefinition.md) 
</div>
</div>

<div class="row searchable" id="criteriaBasedDistributions.dimensions.analysisSet">
<div class="cell" data-label="Property">criteriaBasedDistributions.dimensions.analysisSet</div>
<div class="cell" data-label="Column">analysisSet_id</div>
<div class="cell" data-label="Arabic">المجموعة التحليلية</div>
<div class="cell" data-label="English">Analysis set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/modules/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="criteriaBasedDistributions.dimensions.branch">
<div class="cell" data-label="Property">criteriaBasedDistributions.dimensions.branch</div>
<div class="cell" data-label="Column">branch_id</div>
<div class="cell" data-label="Arabic">الفرع</div>
<div class="cell" data-label="English">Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/modules/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="criteriaBasedDistributions.dimensions.department">
<div class="cell" data-label="Property">criteriaBasedDistributions.dimensions.department</div>
<div class="cell" data-label="Column">department_id</div>
<div class="cell" data-label="Arabic">الإدارة</div>
<div class="cell" data-label="English">Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/modules/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="criteriaBasedDistributions.dimensions.legalEntity">
<div class="cell" data-label="Property">criteriaBasedDistributions.dimensions.legalEntity</div>
<div class="cell" data-label="Column">legalEntity_id</div>
<div class="cell" data-label="Arabic">الشركة</div>
<div class="cell" data-label="English">Legal Entity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [LegalEntity](/modules/basic/LegalEntity.md) 
</div>
</div>

<div class="row searchable" id="criteriaBasedDistributions.dimensions.sector">
<div class="cell" data-label="Property">criteriaBasedDistributions.dimensions.sector</div>
<div class="cell" data-label="Column">sector_id</div>
<div class="cell" data-label="Arabic">القطاع</div>
<div class="cell" data-label="English">Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/modules/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="criteriaBasedDistributions.distribution">
<div class="cell" data-label="Property">criteriaBasedDistributions.distribution</div>
<div class="cell" data-label="Column">distribution_id</div>
<div class="cell" data-label="Arabic">التوزيع على الحسابات</div>
<div class="cell" data-label="English">Distribution on Accounts</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AccDistribution](/modules/accounting/AccDistribution.md) 
</div>
</div>

<div class="row searchable" id="criteriaBasedDistributions.entityDimension">
<div class="cell" data-label="Property">criteriaBasedDistributions.entityDimension</div>
<div class="cell gen-ref-column" data-label="Column">entityDimensionActualCode,  entityDimensionCode,  entityDimensionEntityType,  entityDimensionId</div>
<div class="cell" data-label="Arabic">السجل</div>
<div class="cell" data-label="English">Entity Dimension</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="criteriaBasedDistributions.id">
<div class="cell" data-label="Property">criteriaBasedDistributions.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="criteriaBasedDistributions.lineNumber">
<div class="cell" data-label="Property">criteriaBasedDistributions.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="criteriaBasedDistributions.ref1">
<div class="cell" data-label="Property">criteriaBasedDistributions.ref1</div>
<div class="cell gen-ref-column" data-label="Column">ref1ActualCode,  ref1Code,  ref1EntityType,  ref1Id</div>
<div class="cell" data-label="Arabic">مرجع 1</div>
<div class="cell" data-label="English">Reference 1</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="criteriaBasedDistributions.ref2">
<div class="cell" data-label="Property">criteriaBasedDistributions.ref2</div>
<div class="cell gen-ref-column" data-label="Column">ref2ActualCode,  ref2Code,  ref2EntityType,  ref2Id</div>
<div class="cell" data-label="Arabic">مرجع 2</div>
<div class="cell" data-label="English">Reference 2</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="criteriaBasedDistributions.ref3">
<div class="cell" data-label="Property">criteriaBasedDistributions.ref3</div>
<div class="cell gen-ref-column" data-label="Column">ref3ActualCode,  ref3Code,  ref3EntityType,  ref3Id</div>
<div class="cell" data-label="Arabic">مرجع 3</div>
<div class="cell" data-label="English">Reference 3</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="criteriaBasedDistributions.subsidiary">
<div class="cell" data-label="Property">criteriaBasedDistributions.subsidiary</div>
<div class="cell gen-ref-column" data-label="Column">subsidiaryActualCode,  subsidiaryCode,  subsidiaryEntityType,  subsidiaryId</div>
<div class="cell" data-label="Arabic">الذمة</div>
<div class="cell" data-label="English">Subsidiary</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>


</div>
</div>

<div id='departmentDistributions' title='departmentDistributions' class='searchable'>

## departmentDistributions (نسب الأقسام - Department Distributions)
**Table Name:** DepartmentDistribution, **Join Column:** accDistribution_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="departmentDistributions.department">
<div class="cell" data-label="Property">departmentDistributions.department</div>
<div class="cell" data-label="Column">department_id</div>
<div class="cell" data-label="Arabic">الإدارة</div>
<div class="cell" data-label="English">Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/modules/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="departmentDistributions.id">
<div class="cell" data-label="Property">departmentDistributions.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="departmentDistributions.lineNumber">
<div class="cell" data-label="Property">departmentDistributions.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="departmentDistributions.percentage">
<div class="cell" data-label="Property">departmentDistributions.percentage</div>
<div class="cell" data-label="Column">percentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="departmentDistributions.useSameAsOrigin">
<div class="cell" data-label="Property">departmentDistributions.useSameAsOrigin</div>
<div class="cell" data-label="Column">useSameAsOrigin</div>
<div class="cell" data-label="Arabic">استعمال المحدد الاصلي في السطر</div>
<div class="cell" data-label="English">Use Same As Origin</div>
<div class="cell" data-label="Type">Boolean</div>

</div>


</div>
</div>

<div id='entityDimensionDistributions' title='entityDimensionDistributions' class='searchable'>

## entityDimensionDistributions (توزيع السجل - Entity Dimension Distributions)
**Table Name:** EntityDimensionDistribution, **Join Column:** accDistribution_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="entityDimensionDistributions.entityDimension">
<div class="cell" data-label="Property">entityDimensionDistributions.entityDimension</div>
<div class="cell gen-ref-column" data-label="Column">entityDimensionActualCode,  entityDimensionCode,  entityDimensionEntityType,  entityDimensionId</div>
<div class="cell" data-label="Arabic">السجل</div>
<div class="cell" data-label="English">Entity Dimension</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="entityDimensionDistributions.id">
<div class="cell" data-label="Property">entityDimensionDistributions.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="entityDimensionDistributions.lineNumber">
<div class="cell" data-label="Property">entityDimensionDistributions.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="entityDimensionDistributions.percentage">
<div class="cell" data-label="Property">entityDimensionDistributions.percentage</div>
<div class="cell" data-label="Column">percentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="entityDimensionDistributions.useSameAsOrigin">
<div class="cell" data-label="Property">entityDimensionDistributions.useSameAsOrigin</div>
<div class="cell" data-label="Column">useSameAsOrigin</div>
<div class="cell" data-label="Arabic">استعمال المحدد الاصلي في السطر</div>
<div class="cell" data-label="English">Use Same As Origin</div>
<div class="cell" data-label="Type">Boolean</div>

</div>


</div>
</div>

<div id='ref1Distributions' title='ref1Distributions' class='searchable'>

## ref1Distributions (توزيع مرجع 1 - Ref 1 Distributions)
**Table Name:** Ref2Distribution, **Join Column:** accDistribution_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="ref1Distributions.id">
<div class="cell" data-label="Property">ref1Distributions.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="ref1Distributions.lineNumber">
<div class="cell" data-label="Property">ref1Distributions.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="ref1Distributions.percentage">
<div class="cell" data-label="Property">ref1Distributions.percentage</div>
<div class="cell" data-label="Column">percentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="ref1Distributions.ref2">
<div class="cell" data-label="Property">ref1Distributions.ref2</div>
<div class="cell gen-ref-column" data-label="Column">ref2ActualCode,  ref2Code,  ref2EntityType,  ref2Id</div>
<div class="cell" data-label="Arabic">مرجع 2</div>
<div class="cell" data-label="English">Reference 2</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="ref1Distributions.useSameAsOrigin">
<div class="cell" data-label="Property">ref1Distributions.useSameAsOrigin</div>
<div class="cell" data-label="Column">useSameAsOrigin</div>
<div class="cell" data-label="Arabic">استعمال المحدد الاصلي في السطر</div>
<div class="cell" data-label="English">Use Same As Origin</div>
<div class="cell" data-label="Type">Boolean</div>

</div>


</div>
</div>

<div id='ref2Distributions' title='ref2Distributions' class='searchable'>

## ref2Distributions (توزيع مرجع 2 - Ref 2 Distributions)
**Table Name:** Ref1Distribution, **Join Column:** accDistribution_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="ref2Distributions.id">
<div class="cell" data-label="Property">ref2Distributions.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="ref2Distributions.lineNumber">
<div class="cell" data-label="Property">ref2Distributions.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="ref2Distributions.percentage">
<div class="cell" data-label="Property">ref2Distributions.percentage</div>
<div class="cell" data-label="Column">percentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="ref2Distributions.ref1">
<div class="cell" data-label="Property">ref2Distributions.ref1</div>
<div class="cell gen-ref-column" data-label="Column">ref1ActualCode,  ref1Code,  ref1EntityType,  ref1Id</div>
<div class="cell" data-label="Arabic">مرجع 1</div>
<div class="cell" data-label="English">Reference 1</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="ref2Distributions.useSameAsOrigin">
<div class="cell" data-label="Property">ref2Distributions.useSameAsOrigin</div>
<div class="cell" data-label="Column">useSameAsOrigin</div>
<div class="cell" data-label="Arabic">استعمال المحدد الاصلي في السطر</div>
<div class="cell" data-label="English">Use Same As Origin</div>
<div class="cell" data-label="Type">Boolean</div>

</div>


</div>
</div>

<div id='ref3Distributions' title='ref3Distributions' class='searchable'>

## ref3Distributions (توزيع مرجع 3 - Ref 3 Distributions)
**Table Name:** Ref3Distribution, **Join Column:** accDistribution_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="ref3Distributions.id">
<div class="cell" data-label="Property">ref3Distributions.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="ref3Distributions.lineNumber">
<div class="cell" data-label="Property">ref3Distributions.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="ref3Distributions.percentage">
<div class="cell" data-label="Property">ref3Distributions.percentage</div>
<div class="cell" data-label="Column">percentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="ref3Distributions.ref3">
<div class="cell" data-label="Property">ref3Distributions.ref3</div>
<div class="cell gen-ref-column" data-label="Column">ref3ActualCode,  ref3Code,  ref3EntityType,  ref3Id</div>
<div class="cell" data-label="Arabic">مرجع 3</div>
<div class="cell" data-label="English">Reference 3</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="ref3Distributions.useSameAsOrigin">
<div class="cell" data-label="Property">ref3Distributions.useSameAsOrigin</div>
<div class="cell" data-label="Column">useSameAsOrigin</div>
<div class="cell" data-label="Arabic">استعمال المحدد الاصلي في السطر</div>
<div class="cell" data-label="English">Use Same As Origin</div>
<div class="cell" data-label="Type">Boolean</div>

</div>


</div>
</div>

<div id='sectorDistributions' title='sectorDistributions' class='searchable'>

## sectorDistributions (نسب القطاعات - Sector Distributions)
**Table Name:** SectorDistribution, **Join Column:** accDistribution_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="sectorDistributions.id">
<div class="cell" data-label="Property">sectorDistributions.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="sectorDistributions.lineNumber">
<div class="cell" data-label="Property">sectorDistributions.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="sectorDistributions.percentage">
<div class="cell" data-label="Property">sectorDistributions.percentage</div>
<div class="cell" data-label="Column">percentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="sectorDistributions.sector">
<div class="cell" data-label="Property">sectorDistributions.sector</div>
<div class="cell" data-label="Column">sector_id</div>
<div class="cell" data-label="Arabic">القطاع</div>
<div class="cell" data-label="English">Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/modules/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="sectorDistributions.useSameAsOrigin">
<div class="cell" data-label="Property">sectorDistributions.useSameAsOrigin</div>
<div class="cell" data-label="Column">useSameAsOrigin</div>
<div class="cell" data-label="Arabic">استعمال المحدد الاصلي في السطر</div>
<div class="cell" data-label="English">Use Same As Origin</div>
<div class="cell" data-label="Type">Boolean</div>

</div>


</div>
</div>

<div id='subsidiaryDistributions' title='subsidiaryDistributions' class='searchable'>

## subsidiaryDistributions (توزيع الذمة - Subsidiary Distributions)
**Table Name:** SubsidiaryDistribution, **Join Column:** accDistribution_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="subsidiaryDistributions.id">
<div class="cell" data-label="Property">subsidiaryDistributions.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="subsidiaryDistributions.lineNumber">
<div class="cell" data-label="Property">subsidiaryDistributions.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="subsidiaryDistributions.percentage">
<div class="cell" data-label="Property">subsidiaryDistributions.percentage</div>
<div class="cell" data-label="Column">percentage</div>
<div class="cell" data-label="Arabic">النسبة</div>
<div class="cell" data-label="English">Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="subsidiaryDistributions.subsidiary">
<div class="cell" data-label="Property">subsidiaryDistributions.subsidiary</div>
<div class="cell gen-ref-column" data-label="Column">subsidiaryActualCode,  subsidiaryCode,  subsidiaryEntityType,  subsidiaryId</div>
<div class="cell" data-label="Arabic">الذمة</div>
<div class="cell" data-label="English">Subsidiary</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="subsidiaryDistributions.useSameAsOrigin">
<div class="cell" data-label="Property">subsidiaryDistributions.useSameAsOrigin</div>
<div class="cell" data-label="Column">useSameAsOrigin</div>
<div class="cell" data-label="Arabic">استعمال المحدد الاصلي في السطر</div>
<div class="cell" data-label="English">Use Same As Origin</div>
<div class="cell" data-label="Type">Boolean</div>

</div>


</div>
</div>

