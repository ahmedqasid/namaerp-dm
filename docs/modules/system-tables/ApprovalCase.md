
<div class='tableName'>


# ApprovalCase
</div>

**Arabic:** Approval Case
**English:** Approval Case

<ContentFilter/>


<div class='searchable'>
<a href='#nextCandidates'>nextCandidates (AppCaseCandidates) </a> , <a href='#steps'>steps (AppCaseSteps) </a>
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
</div><div class="row searchable" id="allowEditingFields">
<div class="cell" data-label="Property">allowEditingFields</div>
<div class="cell" data-label="Column">allowEditingFields</div>
<div class="cell" data-label="Arabic">الحقول المسموح بتعديلها</div>
<div class="cell" data-label="English">Allow Editing Fields</div>
<div class="cell" data-label="Type">FieldID</div>

</div>

<div class="row searchable" id="allowModifyWhileUnderApproval">
<div class="cell" data-label="Property">allowModifyWhileUnderApproval</div>
<div class="cell" data-label="Column">allowModifyWhileUnderApproval</div>
<div class="cell" data-label="Arabic">السماح بالتعديل اثناء انتظار الموافقة</div>
<div class="cell" data-label="English">Allow Modification While Waiting Approval</div>
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

<div class="row searchable" id="approvalDefinition">
<div class="cell" data-label="Property">approvalDefinition</div>
<div class="cell" data-label="Column">approvalDefinition_id</div>
<div class="cell" data-label="Arabic"> تعريف موافقه</div>
<div class="cell" data-label="English"> Approval Definition</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ApprovalDefinition](/modules/basic/ApprovalDefinition.md) 
</div>
</div>

<div class="row searchable" id="approvedElement">
<div class="cell" data-label="Property">approvedElement</div>
<div class="cell gen-ref-column" data-label="Column">approvedElementActualCode,  approvedElementCode,  approvedElementEntityType,  approvedElementId</div>
<div class="cell" data-label="Arabic">السجل المعني</div>
<div class="cell" data-label="English">Approved Element</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="approvedVersion">
<div class="cell" data-label="Property">approvedVersion</div>
<div class="cell" data-label="Column">approvedVersion</div>
<div class="cell" data-label="Arabic">النسخة الموافق عليها</div>
<div class="cell" data-label="English">Approved Version</div>
<div class="cell" data-label="Type">Integer</div>

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

<div class="row searchable" id="completionDate">
<div class="cell" data-label="Property">completionDate</div>
<div class="cell" data-label="Column">completionDate</div>
<div class="cell" data-label="Arabic">تاريخ الاكتمال</div>
<div class="cell" data-label="English">Completion Date</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="concernedLines">
<div class="cell" data-label="Property">concernedLines</div>
<div class="cell" data-label="Column">concernedLines</div>
<div class="cell" data-label="Arabic">السطور المعنية</div>
<div class="cell" data-label="English">Concerned Lines</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="currentCandidates">
<div class="cell" data-label="Property">currentCandidates</div>
<div class="cell" data-label="Column">currentCandidates</div>
<div class="cell" data-label="Arabic">Current Candidates</div>
<div class="cell" data-label="English">Current Candidates</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="currentLines">
<div class="cell" data-label="Property">currentLines</div>
<div class="cell" data-label="Column">currentLines</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

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

<div class="row searchable" id="endOfCycleAction">
<div class="cell" data-label="Property">endOfCycleAction</div>
<div class="cell" data-label="Column">endOfCycleAction</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="id">
<div class="cell" data-label="Property">id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="initiator">
<div class="cell" data-label="Property">initiator</div>
<div class="cell" data-label="Column">initiator</div>
<div class="cell" data-label="Arabic">العملية</div>
<div class="cell" data-label="English">Initiator</div>
<div class="cell" data-label="Type">Enum</div>

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

<div class="row searchable" id="moduleId">
<div class="cell" data-label="Property">moduleId</div>
<div class="cell" data-label="Column">moduleId</div>
<div class="cell" data-label="Arabic">الوحدة</div>
<div class="cell" data-label="English">Module</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="nearestAutoEscalateDate">
<div class="cell" data-label="Property">nearestAutoEscalateDate</div>
<div class="cell" data-label="Column">nearestAutoEscalateDate</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="nextRequiredStatus">
<div class="cell" data-label="Property">nextRequiredStatus</div>
<div class="cell" data-label="Column">nextRequiredStatus</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="nextStepId">
<div class="cell" data-label="Property">nextStepId</div>
<div class="cell" data-label="Column">nextStepId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="nextStepName1">
<div class="cell" data-label="Property">nextStepName1</div>
<div class="cell" data-label="Column">nextStepName1</div>
<div class="cell" data-label="Arabic">الاسم العربي للخطوة الحالية</div>
<div class="cell" data-label="English">Next Step Name 1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="nextStepName2">
<div class="cell" data-label="Property">nextStepName2</div>
<div class="cell" data-label="Column">nextStepName2</div>
<div class="cell" data-label="Arabic">الاسم الإنجليزي للخطوة الحالية</div>
<div class="cell" data-label="English">Next Step Name 2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="nextStepResponsible">
<div class="cell" data-label="Property">nextStepResponsible</div>
<div class="cell" data-label="Column">nextStepResponsible</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="nextStepSequence">
<div class="cell" data-label="Property">nextStepSequence</div>
<div class="cell" data-label="Column">nextStepSequence</div>
<div class="cell" data-label="Arabic">رقم الخطوة الحالية</div>
<div class="cell" data-label="English">Next Step Sequence</div>
<div class="cell" data-label="Type">Long</div>

</div>

<div class="row searchable" id="nextUpdatedFields">
<div class="cell" data-label="Property">nextUpdatedFields</div>
<div class="cell" data-label="Column">nextUpdatedFields</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="requestedBy">
<div class="cell" data-label="Property">requestedBy</div>
<div class="cell gen-ref-column" data-label="Column">requestedByActualCode,  requestedByCode,  requestedByEntityType,  requestedById</div>
<div class="cell" data-label="Arabic">تم الطلب بواسطة</div>
<div class="cell" data-label="English">Requested By</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="secret">
<div class="cell" data-label="Property">secret</div>
<div class="cell" data-label="Column">secret</div>
<div class="cell" data-label="Arabic">Secret / Access Token</div>
<div class="cell" data-label="English">Secret / Access Token</div>
<div class="cell" data-label="Type">Long</div>

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

<div class="row searchable" id="state">
<div class="cell" data-label="Property">state</div>
<div class="cell" data-label="Column">state</div>
<div class="cell" data-label="Arabic">حالة الموافقة</div>
<div class="cell" data-label="English">State</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="summary">
<div class="cell" data-label="Property">summary</div>
<div class="cell" data-label="Column">summary</div>
<div class="cell" data-label="Arabic">الملخص</div>
<div class="cell" data-label="English">Summary</div>
<div class="cell" data-label="Type">BigText</div>

</div>


</div>
</div>

<div id='nextCandidates' title='nextCandidates' class='searchable'>

## nextCandidates (المطلوب منهم الموافقة - Next Candidates)

<div class='tableName'>

**Table Name:** AppCaseCandidates, **Join Column:** ApprovalCase_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="nextCandidates.candidate">
<div class="cell" data-label="Property">nextCandidates.candidate</div>
<div class="cell" data-label="Column">candidate_id</div>
<div class="cell" data-label="Arabic">المتقدم للعمل</div>
<div class="cell" data-label="English">Candidate</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/modules/basic/Employee.md) 
</div>
</div>

<div class="row searchable" id="nextCandidates.concernedLines">
<div class="cell" data-label="Property">nextCandidates.concernedLines</div>
<div class="cell" data-label="Column">concernedLines</div>
<div class="cell" data-label="Arabic">السطور المعنية</div>
<div class="cell" data-label="English">Concerned Lines</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="nextCandidates.escalateOn">
<div class="cell" data-label="Property">nextCandidates.escalateOn</div>
<div class="cell" data-label="Column">escalateOn</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="nextCandidates.escalated">
<div class="cell" data-label="Property">nextCandidates.escalated</div>
<div class="cell" data-label="Column">escalated</div>
<div class="cell" data-label="Arabic">مصعدة</div>
<div class="cell" data-label="English">Escalated</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="nextCandidates.escalatedFrom">
<div class="cell" data-label="Property">nextCandidates.escalatedFrom</div>
<div class="cell" data-label="Column">escalatedFrom_id</div>
<div class="cell" data-label="Arabic">مصعدة من</div>
<div class="cell" data-label="English">Escalated From</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/modules/basic/Employee.md) 
</div>
</div>

<div class="row searchable" id="nextCandidates.escalatedTo">
<div class="cell" data-label="Property">nextCandidates.escalatedTo</div>
<div class="cell" data-label="Column">escalatedTo_id</div>
<div class="cell" data-label="Arabic">مصعدة إلى</div>
<div class="cell" data-label="English">Escalated To</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/modules/basic/Employee.md) 
</div>
</div>

<div class="row searchable" id="nextCandidates.id">
<div class="cell" data-label="Property">nextCandidates.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="nextCandidates.id">
<div class="cell" data-label="Property">nextCandidates.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="nextCandidates.lineNumber">
<div class="cell" data-label="Property">nextCandidates.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="nextCandidates.otp">
<div class="cell" data-label="Property">nextCandidates.otp</div>
<div class="cell" data-label="Column">otp</div>
<div class="cell" data-label="Arabic">الرقم السري المؤقت</div>
<div class="cell" data-label="English">OTP</div>
<div class="cell" data-label="Type">Password</div>

</div>

<div class="row searchable" id="nextCandidates.requestedOn">
<div class="cell" data-label="Property">nextCandidates.requestedOn</div>
<div class="cell" data-label="Column">requestedOn</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="nextCandidates.responsibility">
<div class="cell" data-label="Property">nextCandidates.responsibility</div>
<div class="cell" data-label="Column">responsibility_id</div>
<div class="cell" data-label="Arabic">مسئولية</div>
<div class="cell" data-label="English">Responsibility</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Responsibility](/modules/basic/Responsibility.md) 
</div>
</div>

<div class="row searchable" id="nextCandidates.source">
<div class="cell" data-label="Property">nextCandidates.source</div>
<div class="cell" data-label="Column">source_id</div>
<div class="cell" data-label="Arabic">المصدر</div>
<div class="cell" data-label="English">Source</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SpecialResponsible](/modules/basic/SpecialResponsible.md) 
</div>
</div>


</div>
</div>

<div id='steps' title='steps' class='searchable'>

## steps (الخطوات - Steps)

<div class='tableName'>

**Table Name:** AppCaseSteps, **Join Column:** ApprovalCase_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="steps.actualResponsible">
<div class="cell" data-label="Property">steps.actualResponsible</div>
<div class="cell" data-label="Column">actualResponsible_id</div>
<div class="cell" data-label="Arabic">المسئول</div>
<div class="cell" data-label="English">Responsible</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/modules/basic/Employee.md) 
</div>
</div>

<div class="row searchable" id="steps.approvalDate">
<div class="cell" data-label="Property">steps.approvalDate</div>
<div class="cell" data-label="Column">approvalDate</div>
<div class="cell" data-label="Arabic">تاريخ الموافقة</div>
<div class="cell" data-label="English">Approval Date</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="steps.approvalReason">
<div class="cell" data-label="Property">steps.approvalReason</div>
<div class="cell" data-label="Column">approvalReason_id</div>
<div class="cell" data-label="Arabic"> سبب الموافقة</div>
<div class="cell" data-label="English"> Approval Reason</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ApprovalReason](/modules/basic/ApprovalReason.md) 
</div>
</div>

<div class="row searchable" id="steps.approvalStepName1">
<div class="cell" data-label="Property">steps.approvalStepName1</div>
<div class="cell" data-label="Column">approvalStepName1</div>
<div class="cell" data-label="Arabic"> الاسم العربي</div>
<div class="cell" data-label="English"> Name1</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="steps.approvalStepName2">
<div class="cell" data-label="Property">steps.approvalStepName2</div>
<div class="cell" data-label="Column">approvalStepName2</div>
<div class="cell" data-label="Arabic"> الاسم الإنجليزي</div>
<div class="cell" data-label="English"> Name2</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="steps.approvalStepSeq">
<div class="cell" data-label="Property">steps.approvalStepSeq</div>
<div class="cell" data-label="Column">approvalStepSeq</div>
<div class="cell" data-label="Arabic">رقم الخطوة</div>
<div class="cell" data-label="English">Step Sequence</div>
<div class="cell" data-label="Type">Long</div>

</div>

<div class="row searchable" id="steps.attachment">
<div class="cell" data-label="Property">steps.attachment</div>
<div class="cell" data-label="Column">attachment_id</div>
<div class="cell" data-label="Arabic">مرفق</div>
<div class="cell" data-label="English">Attachment</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/modules/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="steps.comment">
<div class="cell" data-label="Property">steps.comment</div>
<div class="cell" data-label="Column">comment</div>
<div class="cell" data-label="Arabic">ملاحظة</div>
<div class="cell" data-label="English">Comment</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="steps.concernedLines">
<div class="cell" data-label="Property">steps.concernedLines</div>
<div class="cell" data-label="Column">concernedLines</div>
<div class="cell" data-label="Arabic">السطور المعنية</div>
<div class="cell" data-label="English">Concerned Lines</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="steps.decision">
<div class="cell" data-label="Property">steps.decision</div>
<div class="cell" data-label="Column">decision</div>
<div class="cell" data-label="Arabic">القرار</div>
<div class="cell" data-label="English">Decision</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="steps.escalateTo">
<div class="cell" data-label="Property">steps.escalateTo</div>
<div class="cell gen-ref-column" data-label="Column">escalateToActualCode,  escalateToCode,  escalateToEntityType,  escalateToId</div>
<div class="cell" data-label="Arabic">تصعيد إلى</div>
<div class="cell" data-label="English">Escalate To</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="steps.escalated">
<div class="cell" data-label="Property">steps.escalated</div>
<div class="cell" data-label="Column">escalated</div>
<div class="cell" data-label="Arabic">مصعدة</div>
<div class="cell" data-label="English">Escalated</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="steps.escalatedFrom">
<div class="cell" data-label="Property">steps.escalatedFrom</div>
<div class="cell" data-label="Column">escalatedFrom_id</div>
<div class="cell" data-label="Arabic">مصعدة من</div>
<div class="cell" data-label="English">Escalated From</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/modules/basic/Employee.md) 
</div>
</div>

<div class="row searchable" id="steps.execution">
<div class="cell" data-label="Property">steps.execution</div>
<div class="cell" data-label="Column">execution</div>
<div class="cell" data-label="Arabic">تنفيذ</div>
<div class="cell" data-label="English">execution</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="steps.id">
<div class="cell" data-label="Property">steps.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="steps.id">
<div class="cell" data-label="Property">steps.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="steps.lineNumber">
<div class="cell" data-label="Property">steps.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="steps.requiredStatus">
<div class="cell" data-label="Property">steps.requiredStatus</div>
<div class="cell" data-label="Column">requiredStatus</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

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

