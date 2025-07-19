
<div class='tableName'>


# ApprovalDefinition
</div>

**Arabic:** تعريف موافقه - تعريف موافقات
**English:** Approval Definition - Approval Definitions

<ContentFilter/>


<div class='searchable'>
<a href='#criticalFields'>criticalFields (ApprovalCriticalField) </a> , <a href='#inputs'>inputs (ApprovalDefinition_inputs) </a> , <a href='#rules'>rules (ApprovalDefinition_rules) </a> , <a href='#selectors'>selectors (ApprovalDefinition_selectors) </a> , <a href='#stepRespnsible'>stepRespnsible (AppDefStepResponsible) </a> , <a href='#steps'>steps (ApprovalDefinition_steps) </a>
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
</div><div class="row searchable" id="allowEditAfterUsage">
<div class="cell" data-label="Property">allowEditAfterUsage</div>
<div class="cell" data-label="Column">allowEditAfterUsage</div>
<div class="cell" data-label="Arabic">السماح بالتعديل بعد الاستخدام</div>
<div class="cell" data-label="English">Allow Edit After Usage</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="allowModifyWhileUnderApproval">
<div class="cell" data-label="Property">allowModifyWhileUnderApproval</div>
<div class="cell" data-label="Column">allowModifyWhileUnderApproval</div>
<div class="cell" data-label="Arabic">السماح بالتعديل اثناء انتظار الموافقة</div>
<div class="cell" data-label="English">Allow Modification While Waiting Approval</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="alternate">
<div class="cell" data-label="Property">alternate</div>
<div class="cell" data-label="Column">alternate_id</div>
<div class="cell" data-label="Arabic">الموظف البديل</div>
<div class="cell" data-label="English">Alternate Employee</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/modules/basic/Employee.md) 
</div>
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

<div class="row searchable" id="analysisSetMustMatchRecord">
<div class="cell" data-label="Property">analysisSetMustMatchRecord</div>
<div class="cell" data-label="Column">analysisSetMustMatchRecord</div>
<div class="cell" data-label="Arabic">يجب تطابق المجموعة التحليلية مع المجموعة التحليلية للسجل عند البحث عن موظفين</div>
<div class="cell" data-label="English">Analysis Set Must Match Record</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="applyAlsoTo">
<div class="cell" data-label="Property">applyAlsoTo</div>
<div class="cell" data-label="Column">applyAlsoTo_id</div>
<div class="cell" data-label="Arabic">تطبق ايضا علي</div>
<div class="cell" data-label="English">Apply Also To</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [EntityTypeList](/modules/basic/EntityTypeList.md) 
</div>
</div>

<div class="row searchable" id="applyWhenQuery">
<div class="cell" data-label="Property">applyWhenQuery</div>
<div class="cell" data-label="Column">applyWhenQuery</div>
<div class="cell" data-label="Arabic">تطبيق عند التوافق مع الاستعلام</div>
<div class="cell" data-label="English">Apply When Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="approvalEmailSubject">
<div class="cell" data-label="Property">approvalEmailSubject</div>
<div class="cell" data-label="Column">approvalEmailSubject</div>
<div class="cell" data-label="Arabic">قالب عنوان الايميل (مع التقرير)</div>
<div class="cell" data-label="English">Approval Email Subject (With Report)</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="approvalEntity">
<div class="cell" data-label="Property">approvalEntity</div>
<div class="cell" data-label="Column">approvalEntity</div>
<div class="cell" data-label="Arabic">نوع الملف/المستند</div>
<div class="cell" data-label="English">Approval Entity</div>
<div class="cell" data-label="Type">EntityType</div>

</div>

<div class="row searchable" id="approveLines">
<div class="cell" data-label="Property">approveLines</div>
<div class="cell" data-label="Column">approveLines</div>
<div class="cell" data-label="Arabic">الموافقة للسطور</div>
<div class="cell" data-label="English">Approve Lines</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="arabicConfirmation">
<div class="cell" data-label="Property">arabicConfirmation</div>
<div class="cell" data-label="Column">arabicConfirmation</div>
<div class="cell" data-label="Arabic"> عنوان عربي</div>
<div class="cell" data-label="English"> Arabic</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="autoEscalateAfter.uom">
<div class="cell" data-label="Property">autoEscalateAfter.uom</div>
<div class="cell" data-label="Column">autoEscalateAfterUom</div>
<div class="cell" data-label="Arabic">الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="autoEscalateAfter.value">
<div class="cell" data-label="Property">autoEscalateAfter.value</div>
<div class="cell" data-label="Column">autoEscalateAfterValue</div>
<div class="cell" data-label="Arabic">القيمة</div>
<div class="cell" data-label="English">Value</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="branchMustMatchRecord">
<div class="cell" data-label="Property">branchMustMatchRecord</div>
<div class="cell" data-label="Column">branchMustMatchRecord</div>
<div class="cell" data-label="Arabic">يجب تطابق الفرع مع فرع السجل عند البحث عن موظفين</div>
<div class="cell" data-label="English">Branch Must Match Record</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="commentRequired">
<div class="cell" data-label="Property">commentRequired</div>
<div class="cell" data-label="Column">commentRequired</div>
<div class="cell" data-label="Arabic">يجب إدخال ملحوظة</div>
<div class="cell" data-label="English">Comment Required</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="commitedBefore">
<div class="cell" data-label="Property">commitedBefore</div>
<div class="cell" data-label="Column">commitedBefore</div>
<div class="cell" data-label="Arabic">تم الحفظ مسبقا</div>
<div class="cell" data-label="English">Commited Before</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="confirmBeforeStarting">
<div class="cell" data-label="Property">confirmBeforeStarting</div>
<div class="cell" data-label="Column">confirmBeforeStarting</div>
<div class="cell" data-label="Arabic">التأكيد قبل البدء</div>
<div class="cell" data-label="English">Confirm Before Starting</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="considerRequestDateAsCreationDate">
<div class="cell" data-label="Property">considerRequestDateAsCreationDate</div>
<div class="cell" data-label="Column">considerRequestDateAsCreationDate</div>
<div class="cell" data-label="Arabic">اعتبار تاريخ طلب الموافقة هو تاريخ الإنشاء</div>
<div class="cell" data-label="English">Consider ِApproval Request Date As Creation Date</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="convertRequestAfterApproval">
<div class="cell" data-label="Property">convertRequestAfterApproval</div>
<div class="cell" data-label="Column">convertRequestAfterApproval</div>
<div class="cell" data-label="Arabic">تحوبل الطلب بعد الموافقة</div>
<div class="cell" data-label="English">Convert Request After Approval</div>
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

<div class="row searchable" id="departmentMustMatchRecord">
<div class="cell" data-label="Property">departmentMustMatchRecord</div>
<div class="cell" data-label="Column">departmentMustMatchRecord</div>
<div class="cell" data-label="Arabic">يجب تطابق القسم مع قسم السجل عند البحث عن موظفين</div>
<div class="cell" data-label="English">Department Must Match Record</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="doNotSendToFCM">
<div class="cell" data-label="Property">doNotSendToFCM</div>
<div class="cell" data-label="Column">doNotSendToFCM</div>
<div class="cell" data-label="Arabic">لا ترسل تنبيهات لتطبيقات الجوال</div>
<div class="cell" data-label="English">Do Not Send Notifications To Mobile Apps</div>
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

<div class="row searchable" id="emailTemplate">
<div class="cell" data-label="Property">emailTemplate</div>
<div class="cell" data-label="Column">emailTemplate_id</div>
<div class="cell" data-label="Arabic">قالب الإيميل</div>
<div class="cell" data-label="English">Email Template</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ReportDefinition](/modules/basic/ReportDefinition.md) 
</div>
</div>

<div class="row searchable" id="englishConfirmation">
<div class="cell" data-label="Property">englishConfirmation</div>
<div class="cell" data-label="Column">englishConfirmation</div>
<div class="cell" data-label="Arabic"> عنوان إنجليزي</div>
<div class="cell" data-label="English"> English</div>
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

<div class="row searchable" id="fallBack">
<div class="cell" data-label="Property">fallBack</div>
<div class="cell" data-label="Column">fallBack_id</div>
<div class="cell" data-label="Arabic">الموظف الاحتياطي</div>
<div class="cell" data-label="English">Fallback Employee</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/modules/basic/Employee.md) 
</div>
</div>

<div class="row searchable" id="fcmNotificationBodyTemplate">
<div class="cell" data-label="Property">fcmNotificationBodyTemplate</div>
<div class="cell" data-label="Column">fcmNotificationBodyTemplate</div>
<div class="cell" data-label="Arabic">قالب محتوى التنبيه</div>
<div class="cell" data-label="English">Notification Body Template</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="fcmNotificationTitleTemplate">
<div class="cell" data-label="Property">fcmNotificationTitleTemplate</div>
<div class="cell" data-label="Column">fcmNotificationTitleTemplate</div>
<div class="cell" data-label="Arabic">قالب عنوان التنبيه (إختيارى)</div>
<div class="cell" data-label="English">Notification Title Template (Optional)</div>
<div class="cell" data-label="Type">BigText</div>

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

<div class="row searchable" id="flushBeforeSummary">
<div class="cell" data-label="Property">flushBeforeSummary</div>
<div class="cell" data-label="Column">flushBeforeSummary</div>
<div class="cell" data-label="Arabic">Flush Before Summary</div>
<div class="cell" data-label="English">Flush Before Summary</div>
<div class="cell" data-label="Type">Boolean</div>

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
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="ignoreUsageCapabilityOnAppr">
<div class="cell" data-label="Property">ignoreUsageCapabilityOnAppr</div>
<div class="cell" data-label="Column">ignoreUsageCapabilityOnAppr</div>
<div class="cell" data-label="Arabic">تجاهل صلاحيات الاستخدام عند الموافقة</div>
<div class="cell" data-label="English">Ignore Usage Capability When Approving</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="inActive">
<div class="cell" data-label="Property">inActive</div>
<div class="cell" data-label="Column">inActive</div>
<div class="cell" data-label="Arabic">غير نشط</div>
<div class="cell" data-label="English">Inactive</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="legalEntityMustMatchRecord">
<div class="cell" data-label="Property">legalEntityMustMatchRecord</div>
<div class="cell" data-label="Column">legalEntityMustMatchRecord</div>
<div class="cell" data-label="Arabic">يجب تطابق الشركة مع شركة السجل عند البحث عن موظفين</div>
<div class="cell" data-label="English">Legal Entity Must Match Record</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="modifyWhileUnderApprovalPolicy">
<div class="cell" data-label="Property">modifyWhileUnderApprovalPolicy</div>
<div class="cell" data-label="Column">modifyWhileUnderApprovalPolicy</div>
<div class="cell" data-label="Arabic">سياسة التعديل أثناء الموافقة</div>
<div class="cell" data-label="English">Modify While Under Approval Policy</div>
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

<div class="row searchable" id="notificationTemplate">
<div class="cell" data-label="Property">notificationTemplate</div>
<div class="cell" data-label="Column">notificationTemplate_id</div>
<div class="cell" data-label="Arabic">قالب التنبيهات</div>
<div class="cell" data-label="English">Notification Template</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ReportDefinition](/modules/basic/ReportDefinition.md) 
</div>
</div>

<div class="row searchable" id="onRejectLineDelete">
<div class="cell" data-label="Property">onRejectLineDelete</div>
<div class="cell" data-label="Column">onRejectLineDelete</div>
<div class="cell" data-label="Arabic">عند رفض سطر يتم حذفه</div>
<div class="cell" data-label="English">Reject Line Delete It</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="otherAlternates">
<div class="cell" data-label="Property">otherAlternates</div>
<div class="cell" data-label="Column">otherAlternates_id</div>
<div class="cell" data-label="Arabic">البدلاء الآخرين</div>
<div class="cell" data-label="English">Other Alternates</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SpecialResponsible](/modules/basic/SpecialResponsible.md) 
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

<div class="row searchable" id="priority">
<div class="cell" data-label="Property">priority</div>
<div class="cell" data-label="Column">priority</div>
<div class="cell" data-label="Arabic">الأولوية</div>
<div class="cell" data-label="English">Priority</div>
<div class="cell" data-label="Type">Long</div>

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

<div class="row searchable" id="reqCommentInApprovalLinks">
<div class="cell" data-label="Property">reqCommentInApprovalLinks</div>
<div class="cell" data-label="Column">reqCommentInApprovalLinks</div>
<div class="cell" data-label="Arabic">طلب ملاحظة في روابط الموافقة</div>
<div class="cell" data-label="English">Request Comment In Approval Links</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="requireExecution">
<div class="cell" data-label="Property">requireExecution</div>
<div class="cell" data-label="Column">requireExecution</div>
<div class="cell" data-label="Arabic">بجاجة لتنفيذ</div>
<div class="cell" data-label="English">Require Execution</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="requireOtpForAllSteps">
<div class="cell" data-label="Property">requireOtpForAllSteps</div>
<div class="cell" data-label="Column">requireOtpForAllSteps</div>
<div class="cell" data-label="Arabic">Require OTP For All Steps</div>
<div class="cell" data-label="English">Require OTP For All Steps</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="reviseLevel">
<div class="cell" data-label="Property">reviseLevel</div>
<div class="cell" data-label="Column">reviseLevel</div>
<div class="cell" data-label="Arabic">مستوى المراجعة</div>
<div class="cell" data-label="English">Revise Level</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="reviseOnCompletion">
<div class="cell" data-label="Property">reviseOnCompletion</div>
<div class="cell" data-label="Column">reviseOnCompletion</div>
<div class="cell" data-label="Arabic">مراجعة السجل مع اكتمال الموافقة</div>
<div class="cell" data-label="English">Revise Record On Approval Completion</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="sectorMustMatchRecord">
<div class="cell" data-label="Property">sectorMustMatchRecord</div>
<div class="cell" data-label="Column">sectorMustMatchRecord</div>
<div class="cell" data-label="Arabic">يجب تطابق القطاع مع قطاع السجل عند البحث عن موظفين</div>
<div class="cell" data-label="English">Sector Must Match Record</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="smsTemplate">
<div class="cell" data-label="Property">smsTemplate</div>
<div class="cell" data-label="Column">smsTemplate_id</div>
<div class="cell" data-label="Arabic">قالب الرسائل النصية</div>
<div class="cell" data-label="English">SMS Template</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ReportDefinition](/modules/basic/ReportDefinition.md) 
</div>
</div>

<div class="row searchable" id="summaryQuery">
<div class="cell" data-label="Property">summaryQuery</div>
<div class="cell" data-label="Column">summaryQuery</div>
<div class="cell" data-label="Arabic">استعلام الملخص</div>
<div class="cell" data-label="English">Summary Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="summaryTemplate">
<div class="cell" data-label="Property">summaryTemplate</div>
<div class="cell" data-label="Column">summaryTemplate</div>
<div class="cell" data-label="Arabic">قالب الملخص</div>
<div class="cell" data-label="English">Summary Template</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="systemGeneratedCodePrefix">
<div class="cell" data-label="Property">systemGeneratedCodePrefix</div>
<div class="cell" data-label="Column">systemGeneratedCodePrefix</div>
<div class="cell" data-label="Arabic">System Generated Code Prefix</div>
<div class="cell" data-label="English">System Generated Code Prefix</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="templates.copyEmailFrom">
<div class="cell" data-label="Property">templates.copyEmailFrom</div>
<div class="cell" data-label="Column">copyEmailFrom</div>
<div class="cell" data-label="Arabic">نسخ الايميل من</div>
<div class="cell" data-label="English">Copy Email From</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="templates.copyNotificationFrom">
<div class="cell" data-label="Property">templates.copyNotificationFrom</div>
<div class="cell" data-label="Column">copyNotificationFrom</div>
<div class="cell" data-label="Arabic">نسخ التنبيهات من</div>
<div class="cell" data-label="English">Copy Notification From</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="templates.copySMSFrom">
<div class="cell" data-label="Property">templates.copySMSFrom</div>
<div class="cell" data-label="Column">copySMSFrom</div>
<div class="cell" data-label="Arabic">نسخ الرسائل من</div>
<div class="cell" data-label="English">Copy SMS From</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="templates.emailReport">
<div class="cell" data-label="Property">templates.emailReport</div>
<div class="cell" data-label="Column">emailReport_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ReportDefinition](/modules/basic/ReportDefinition.md) 
</div>
</div>

<div class="row searchable" id="templates.emailTemplate">
<div class="cell" data-label="Property">templates.emailTemplate</div>
<div class="cell" data-label="Column">emailTemplate</div>
<div class="cell" data-label="Arabic">قالب الإيميل</div>
<div class="cell" data-label="English">Email Template</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="templates.notificationReport">
<div class="cell" data-label="Property">templates.notificationReport</div>
<div class="cell" data-label="Column">notificationReport_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ReportDefinition](/modules/basic/ReportDefinition.md) 
</div>
</div>

<div class="row searchable" id="templates.notificationTemplate">
<div class="cell" data-label="Property">templates.notificationTemplate</div>
<div class="cell" data-label="Column">notificationTemplate</div>
<div class="cell" data-label="Arabic">قالب التنبيهات</div>
<div class="cell" data-label="English">Notification Template</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="templates.preferredEmailSender">
<div class="cell" data-label="Property">templates.preferredEmailSender</div>
<div class="cell" data-label="Column">preferredEmailSender</div>
<div class="cell" data-label="Arabic">مرسل الايميل المفضل</div>
<div class="cell" data-label="English">Preferred Email Sender</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="templates.preferredSMSSender">
<div class="cell" data-label="Property">templates.preferredSMSSender</div>
<div class="cell" data-label="Column">preferredSMSSender</div>
<div class="cell" data-label="Arabic">مرسل الرسائل المفضل</div>
<div class="cell" data-label="English">Preferred SMS Sender</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="templates.smsReport">
<div class="cell" data-label="Property">templates.smsReport</div>
<div class="cell" data-label="Column">smsReport_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ReportDefinition](/modules/basic/ReportDefinition.md) 
</div>
</div>

<div class="row searchable" id="templates.smsTemplate">
<div class="cell" data-label="Property">templates.smsTemplate</div>
<div class="cell" data-label="Column">smsTemplate</div>
<div class="cell" data-label="Arabic">قالب الرسائل النصية</div>
<div class="cell" data-label="English">SMS Template</div>
<div class="cell" data-label="Type">BigText</div>

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

<div class="row searchable" id="useWithBudgetExceeded">
<div class="cell" data-label="Property">useWithBudgetExceeded</div>
<div class="cell" data-label="Column">useWithBudgetExceeded</div>
<div class="cell" data-label="Arabic">يستعمل مع تخطي الموازنات</div>
<div class="cell" data-label="English">useWithBudgetExceeded</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="useWithDelete">
<div class="cell" data-label="Property">useWithDelete</div>
<div class="cell" data-label="Column">useWithDelete</div>
<div class="cell" data-label="Arabic">مع الحذف</div>
<div class="cell" data-label="English">Use With Delete</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="useWithInsert">
<div class="cell" data-label="Property">useWithInsert</div>
<div class="cell" data-label="Column">useWithInsert</div>
<div class="cell" data-label="Arabic">مع الإدخال</div>
<div class="cell" data-label="English">Use With Insert</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="useWithUpdate">
<div class="cell" data-label="Property">useWithUpdate</div>
<div class="cell" data-label="Column">useWithUpdate</div>
<div class="cell" data-label="Arabic">مع التعديل</div>
<div class="cell" data-label="English">Use With Update</div>
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

<div id='criticalFields' title='criticalFields' class='searchable'>

## criticalFields (عندما تتغير الحقول الاتية - Critical Fields)

<div class='tableName'>

**Table Name:** ApprovalCriticalField, **Join Column:** approvalDefinition_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="criticalFields.fieldID">
<div class="cell" data-label="Property">criticalFields.fieldID</div>
<div class="cell" data-label="Column">fieldID</div>
<div class="cell" data-label="Arabic"> الحقل</div>
<div class="cell" data-label="English"> On Field</div>
<div class="cell" data-label="Type">FieldID</div>

</div>

<div class="row searchable" id="criticalFields.id">
<div class="cell" data-label="Property">criticalFields.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="criticalFields.lineNumber">
<div class="cell" data-label="Property">criticalFields.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>


</div>
</div>

<div id='inputs' title='inputs' class='searchable'>

## inputs (المدخلات - Inputs)

<div class='tableName'>

**Table Name:** ApprovalDefinition_inputs, **Join Column:** ApprovalDefinition_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="inputs.id">
<div class="cell" data-label="Property">inputs.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="inputs.inputId">
<div class="cell" data-label="Property">inputs.inputId</div>
<div class="cell" data-label="Column">inputId</div>
<div class="cell" data-label="Arabic">الحقل</div>
<div class="cell" data-label="English">Field Id</div>
<div class="cell" data-label="Type">FieldID</div>

</div>

<div class="row searchable" id="inputs.lineNumber">
<div class="cell" data-label="Property">inputs.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="inputs.name1">
<div class="cell" data-label="Property">inputs.name1</div>
<div class="cell" data-label="Column">name1</div>
<div class="cell" data-label="Arabic">الاسم العربي</div>
<div class="cell" data-label="English">Name1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="inputs.name2">
<div class="cell" data-label="Property">inputs.name2</div>
<div class="cell" data-label="Column">name2</div>
<div class="cell" data-label="Arabic">الاسم الإنجليزي</div>
<div class="cell" data-label="English">Name2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="inputs.requiredInput">
<div class="cell" data-label="Property">inputs.requiredInput</div>
<div class="cell" data-label="Column">requiredInput</div>
<div class="cell" data-label="Arabic">مطلوب</div>
<div class="cell" data-label="English">Required</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="inputs.stepSeq">
<div class="cell" data-label="Property">inputs.stepSeq</div>
<div class="cell" data-label="Column">stepSeq</div>
<div class="cell" data-label="Arabic">مسلسل</div>
<div class="cell" data-label="English">Sequence</div>
<div class="cell" data-label="Type">Long</div>

</div>


</div>
</div>

<div id='rules' title='rules' class='searchable'>

## rules (القواعد الواجب توافرها - Rules)

<div class='tableName'>

**Table Name:** ApprovalDefinition_rules, **Join Column:** ApprovalDefinition_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="rules.id">
<div class="cell" data-label="Property">rules.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="rules.lineNumber">
<div class="cell" data-label="Property">rules.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="rules.ruleId">
<div class="cell" data-label="Property">rules.ruleId</div>
<div class="cell" data-label="Column">ruleId</div>
<div class="cell" data-label="Arabic">اسم القاعدة</div>
<div class="cell" data-label="English">Rule ID</div>
<div class="cell" data-label="Type">FieldID</div>

</div>


</div>
</div>

<div id='selectors' title='selectors' class='searchable'>

## selectors ( - )

<div class='tableName'>

**Table Name:** ApprovalDefinition_selectors, **Join Column:** ApprovalDefinition_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="selectors.applyWhenQuery">
<div class="cell" data-label="Property">selectors.applyWhenQuery</div>
<div class="cell" data-label="Column">applyWhenQuery</div>
<div class="cell" data-label="Arabic">تطبيق عند التوافق مع الاستعلام</div>
<div class="cell" data-label="English">Apply When Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="selectors.criteria">
<div class="cell" data-label="Property">selectors.criteria</div>
<div class="cell" data-label="Column">criteria_id</div>
<div class="cell" data-label="Arabic">المعايير</div>
<div class="cell" data-label="English">Criteria</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CriteriaDefinition](/modules/basic/CriteriaDefinition.md) 
</div>
</div>

<div class="row searchable" id="selectors.id">
<div class="cell" data-label="Property">selectors.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="selectors.lineNumber">
<div class="cell" data-label="Property">selectors.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="selectors.priority">
<div class="cell" data-label="Property">selectors.priority</div>
<div class="cell" data-label="Column">priority</div>
<div class="cell" data-label="Arabic">الأولوية</div>
<div class="cell" data-label="English">Priority</div>
<div class="cell" data-label="Type">Long</div>

</div>

<div class="row searchable" id="selectors.stepSeq">
<div class="cell" data-label="Property">selectors.stepSeq</div>
<div class="cell" data-label="Column">stepSeq</div>
<div class="cell" data-label="Arabic">مسلسل</div>
<div class="cell" data-label="English">Sequence</div>
<div class="cell" data-label="Type">Long</div>

</div>


</div>
</div>

<div id='stepRespnsible' title='stepRespnsible' class='searchable'>

## stepRespnsible (المسئولين بمعايير - Steps Responsible)

<div class='tableName'>

**Table Name:** AppDefStepResponsible, **Join Column:** ApprovalDefinition_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="stepRespnsible.applyWhenQuery">
<div class="cell" data-label="Property">stepRespnsible.applyWhenQuery</div>
<div class="cell" data-label="Column">applyWhenQuery</div>
<div class="cell" data-label="Arabic">تطبيق عند التوافق مع الاستعلام</div>
<div class="cell" data-label="English">Apply When Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="stepRespnsible.criteria">
<div class="cell" data-label="Property">stepRespnsible.criteria</div>
<div class="cell" data-label="Column">criteria_id</div>
<div class="cell" data-label="Arabic">المعايير</div>
<div class="cell" data-label="English">Criteria</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CriteriaDefinition](/modules/basic/CriteriaDefinition.md) 
</div>
</div>

<div class="row searchable" id="stepRespnsible.id">
<div class="cell" data-label="Property">stepRespnsible.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="stepRespnsible.lineNumber">
<div class="cell" data-label="Property">stepRespnsible.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="stepRespnsible.name1">
<div class="cell" data-label="Property">stepRespnsible.name1</div>
<div class="cell" data-label="Column">name1</div>
<div class="cell" data-label="Arabic">الاسم العربي</div>
<div class="cell" data-label="English">Name1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="stepRespnsible.name2">
<div class="cell" data-label="Property">stepRespnsible.name2</div>
<div class="cell" data-label="Column">name2</div>
<div class="cell" data-label="Arabic">الاسم الإنجليزي</div>
<div class="cell" data-label="English">Name2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="stepRespnsible.priority">
<div class="cell" data-label="Property">stepRespnsible.priority</div>
<div class="cell" data-label="Column">priority</div>
<div class="cell" data-label="Arabic">الأولوية</div>
<div class="cell" data-label="English">Priority</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="stepRespnsible.responsible.fieldId">
<div class="cell" data-label="Property">stepRespnsible.responsible.fieldId</div>
<div class="cell" data-label="Column">fieldId</div>
<div class="cell" data-label="Arabic"> الحقل</div>
<div class="cell" data-label="English"> On Field</div>
<div class="cell" data-label="Type">FieldID</div>

</div>

<div class="row searchable" id="stepRespnsible.responsible.query">
<div class="cell" data-label="Property">stepRespnsible.responsible.query</div>
<div class="cell" data-label="Column">query</div>
<div class="cell" data-label="Arabic">الاستعلام</div>
<div class="cell" data-label="English">Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="stepRespnsible.responsible.responsible">
<div class="cell" data-label="Property">stepRespnsible.responsible.responsible</div>
<div class="cell gen-ref-column" data-label="Column">responsibleActualCode,  responsibleCode,  responsibleEntityType,  responsibleId</div>
<div class="cell" data-label="Arabic">الموظف المسئول</div>
<div class="cell" data-label="English">Responsible Employee</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="stepRespnsible.responsible.responsibleType">
<div class="cell" data-label="Property">stepRespnsible.responsible.responsibleType</div>
<div class="cell" data-label="Column">responsibleType</div>
<div class="cell" data-label="Arabic">نوع المسئول</div>
<div class="cell" data-label="English">Responsible Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="stepRespnsible.stepSeq">
<div class="cell" data-label="Property">stepRespnsible.stepSeq</div>
<div class="cell" data-label="Column">stepSeq</div>
<div class="cell" data-label="Arabic">مسلسل</div>
<div class="cell" data-label="English">Sequence</div>
<div class="cell" data-label="Type">Long</div>

</div>


</div>
</div>

<div id='steps' title='steps' class='searchable'>

## steps (الخطوات - Steps)

<div class='tableName'>

**Table Name:** ApprovalDefinition_steps, **Join Column:** ApprovalDefinition_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="steps.allowEditingFields">
<div class="cell" data-label="Property">steps.allowEditingFields</div>
<div class="cell" data-label="Column">allowEditingFields</div>
<div class="cell" data-label="Arabic">الحقول المسموح بتعديلها</div>
<div class="cell" data-label="English">Allow Editing Fields</div>
<div class="cell" data-label="Type">FieldID</div>

</div>

<div class="row searchable" id="steps.alternate.fieldId">
<div class="cell" data-label="Property">steps.alternate.fieldId</div>
<div class="cell" data-label="Column">alternateFieldId</div>
<div class="cell" data-label="Arabic">البدلاء | الحقل</div>
<div class="cell" data-label="English">Alternates | Field Id</div>
<div class="cell" data-label="Type">FieldID</div>

</div>

<div class="row searchable" id="steps.alternate.query">
<div class="cell" data-label="Property">steps.alternate.query</div>
<div class="cell" data-label="Column">alternateQuery</div>
<div class="cell" data-label="Arabic">الاستعلام</div>
<div class="cell" data-label="English">Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="steps.alternate.responsible">
<div class="cell" data-label="Property">steps.alternate.responsible</div>
<div class="cell gen-ref-column" data-label="Column">alternateResponsibleActualCode,  alternateResponsibleCode,  alternateResponsibleEntityType,  alternateResponsibleId</div>
<div class="cell" data-label="Arabic">البدلاء | الموظف</div>
<div class="cell" data-label="English">Alternates | Employee</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="steps.alternate.responsibleType">
<div class="cell" data-label="Property">steps.alternate.responsibleType</div>
<div class="cell" data-label="Column">alternateResponsibleType</div>
<div class="cell" data-label="Arabic">البدلاء | نوع المسئول</div>
<div class="cell" data-label="English">Alternates | Responsible Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="steps.commentRequired">
<div class="cell" data-label="Property">steps.commentRequired</div>
<div class="cell" data-label="Column">commentRequired</div>
<div class="cell" data-label="Arabic">يجب إدخال ملحوظة</div>
<div class="cell" data-label="English">Comment Required</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="steps.commentRequiredWithApproving">
<div class="cell" data-label="Property">steps.commentRequiredWithApproving</div>
<div class="cell" data-label="Column">commentRequiredWithApproving</div>
<div class="cell" data-label="Arabic">يجب إدخال ملحوظة مع الموافقة</div>
<div class="cell" data-label="English">Comment Required With Approving</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="steps.commentRequiredWithEscalationToSupervisor">
<div class="cell" data-label="Property">steps.commentRequiredWithEscalationToSupervisor</div>
<div class="cell" data-label="Column">commentRequiredWithEscalationToSupervisor</div>
<div class="cell" data-label="Arabic">يجب إدخال ملحوظة مع التصعيد إلى المدير المباشر</div>
<div class="cell" data-label="English">Comment Required With Escalation To Supervisor</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="steps.commentRequiredWithRejecting">
<div class="cell" data-label="Property">steps.commentRequiredWithRejecting</div>
<div class="cell" data-label="Column">commentRequiredWithRejecting</div>
<div class="cell" data-label="Arabic">يجب إدخال ملحوظة مع الرفض</div>
<div class="cell" data-label="English">Comment Required With Rejecting</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="steps.commentRequiredWithReturning">
<div class="cell" data-label="Property">steps.commentRequiredWithReturning</div>
<div class="cell" data-label="Column">commentRequiredWithReturning</div>
<div class="cell" data-label="Arabic">يجب إدخال ملحوظة مع الإرجاع</div>
<div class="cell" data-label="English">Comment Required With Returning</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="steps.commentRequiredWithReturningToPreviousStep">
<div class="cell" data-label="Property">steps.commentRequiredWithReturningToPreviousStep</div>
<div class="cell" data-label="Column">commentRequiredWithReturningToPreviousStep</div>
<div class="cell" data-label="Arabic">يجب إدخال ملحوظة مع الإرجاع للخطوة السابقة</div>
<div class="cell" data-label="English">Comment Required With Returning To Previous Step</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="steps.id">
<div class="cell" data-label="Property">steps.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="steps.lineNumber">
<div class="cell" data-label="Property">steps.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="steps.modifyWhileUnderApprovalPolicy">
<div class="cell" data-label="Property">steps.modifyWhileUnderApprovalPolicy</div>
<div class="cell" data-label="Column">modifyWhileUnderApprovalPolicy</div>
<div class="cell" data-label="Arabic">سياسة التعديل أثناء الموافقة</div>
<div class="cell" data-label="English">Modify While Under Approval Policy</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="steps.name1">
<div class="cell" data-label="Property">steps.name1</div>
<div class="cell" data-label="Column">name1</div>
<div class="cell" data-label="Arabic">الاسم العربي</div>
<div class="cell" data-label="English">Name1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="steps.name2">
<div class="cell" data-label="Property">steps.name2</div>
<div class="cell" data-label="Column">name2</div>
<div class="cell" data-label="Arabic">الاسم الإنجليزي</div>
<div class="cell" data-label="English">Name2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="steps.notificationRemark">
<div class="cell" data-label="Property">steps.notificationRemark</div>
<div class="cell" data-label="Column">notificationRemark</div>
<div class="cell" data-label="Arabic">ملحوظة للتنبيه</div>
<div class="cell" data-label="English">Notification Remark</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="steps.notifyEmails">
<div class="cell" data-label="Property">steps.notifyEmails</div>
<div class="cell" data-label="Column">notifyEmails</div>
<div class="cell" data-label="Arabic">ارسال الايميلات الي العناوين</div>
<div class="cell" data-label="English">Send Emails To Addresses</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="steps.notifyFields">
<div class="cell" data-label="Property">steps.notifyFields</div>
<div class="cell" data-label="Column">notifyFields</div>
<div class="cell" data-label="Arabic">ارسال التنبيهات و الرسائل و الايميلات الي الحقول</div>
<div class="cell" data-label="English">Send Notifications, SMS, and Emails To Fields</div>
<div class="cell" data-label="Type">FieldID</div>

</div>

<div class="row searchable" id="steps.requireOtp">
<div class="cell" data-label="Property">steps.requireOtp</div>
<div class="cell" data-label="Column">requireOtp</div>
<div class="cell" data-label="Arabic">Require OTP</div>
<div class="cell" data-label="English">Require OTP</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="steps.requiredStatus">
<div class="cell" data-label="Property">steps.requiredStatus</div>
<div class="cell" data-label="Column">requiredStatus</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="steps.responsible.fieldId">
<div class="cell" data-label="Property">steps.responsible.fieldId</div>
<div class="cell" data-label="Column">fieldId</div>
<div class="cell" data-label="Arabic"> الحقل</div>
<div class="cell" data-label="English"> On Field</div>
<div class="cell" data-label="Type">FieldID</div>

</div>

<div class="row searchable" id="steps.responsible.query">
<div class="cell" data-label="Property">steps.responsible.query</div>
<div class="cell" data-label="Column">query</div>
<div class="cell" data-label="Arabic">الاستعلام</div>
<div class="cell" data-label="English">Query</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="steps.responsible.responsible">
<div class="cell" data-label="Property">steps.responsible.responsible</div>
<div class="cell gen-ref-column" data-label="Column">responsibleActualCode,  responsibleCode,  responsibleEntityType,  responsibleId</div>
<div class="cell" data-label="Arabic">الموظف المسئول</div>
<div class="cell" data-label="English">Responsible Employee</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="steps.responsible.responsibleType">
<div class="cell" data-label="Property">steps.responsible.responsibleType</div>
<div class="cell" data-label="Column">responsibleType</div>
<div class="cell" data-label="Arabic">نوع المسئول</div>
<div class="cell" data-label="English">Responsible Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="steps.stepSeq">
<div class="cell" data-label="Property">steps.stepSeq</div>
<div class="cell" data-label="Column">stepSeq</div>
<div class="cell" data-label="Arabic">مسلسل</div>
<div class="cell" data-label="English">Sequence</div>
<div class="cell" data-label="Type">Long</div>

</div>

<div class="row searchable" id="steps.updatedFields">
<div class="cell" data-label="Property">steps.updatedFields</div>
<div class="cell" data-label="Column">updatedFields</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>


</div>
</div>

