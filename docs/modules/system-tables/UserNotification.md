
<div class='tableName'>


# UserNotification
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
</div><div class="row searchable" id="body">
<div class="cell" data-label="Property">body</div>
<div class="cell" data-label="Column">body</div>
<div class="cell" data-label="Arabic">Body</div>
<div class="cell" data-label="English">Body</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="createdFrom">
<div class="cell" data-label="Property">createdFrom</div>
<div class="cell gen-ref-column" data-label="Column">createdFromActualCode,  createdFromCode,  createdFromEntityType,  createdFromId</div>
<div class="cell" data-label="Arabic">منشأة من</div>
<div class="cell" data-label="English">Created From</div>
<div class="cell" data-label="Type">Genericreference</div>

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

<div class="row searchable" id="doNotSendToFCM">
<div class="cell" data-label="Property">doNotSendToFCM</div>
<div class="cell" data-label="Column">doNotSendToFCM</div>
<div class="cell" data-label="Arabic">لا ترسل تنبيهات لتطبيقات الجوال</div>
<div class="cell" data-label="English">Do Not Send Notifications To Mobile Apps</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="fcmGoesTo">
<div class="cell" data-label="Property">fcmGoesTo</div>
<div class="cell" data-label="Column">fcmGoesTo</div>
<div class="cell" data-label="Arabic">FCM Goes To</div>
<div class="cell" data-label="English">FCM Goes To</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="id">
<div class="cell" data-label="Property">id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="notifRef1">
<div class="cell" data-label="Property">notifRef1</div>
<div class="cell gen-ref-column" data-label="Column">notifRef1ActualCode,  notifRef1Code,  notifRef1EntityType,  notifRef1Id</div>
<div class="cell" data-label="Arabic">مرجع 1</div>
<div class="cell" data-label="English">Notification Reference 1</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="notifRef2">
<div class="cell" data-label="Property">notifRef2</div>
<div class="cell gen-ref-column" data-label="Column">notifRef2ActualCode,  notifRef2Code,  notifRef2EntityType,  notifRef2Id</div>
<div class="cell" data-label="Arabic">مرجع 2</div>
<div class="cell" data-label="English">Notification Reference 2</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="owner">
<div class="cell" data-label="Property">owner</div>
<div class="cell gen-ref-column" data-label="Column">ownerActualCode,  ownerCode,  ownerEntityType,  ownerId</div>
<div class="cell" data-label="Arabic"> مالك المستند</div>
<div class="cell" data-label="English"> Document Owner</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="status">
<div class="cell" data-label="Property">status</div>
<div class="cell" data-label="Column">status</div>
<div class="cell" data-label="Arabic">الحالة</div>
<div class="cell" data-label="English">Status</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="subject">
<div class="cell" data-label="Property">subject</div>
<div class="cell" data-label="Column">subject</div>
<div class="cell" data-label="Arabic">العنوان</div>
<div class="cell" data-label="English">Subject</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="submittedOn">
<div class="cell" data-label="Property">submittedOn</div>
<div class="cell" data-label="Column">submittedOn</div>
<div class="cell" data-label="Arabic">التاريخ</div>
<div class="cell" data-label="English">Submitted On</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="target">
<div class="cell" data-label="Property">target</div>
<div class="cell gen-ref-column" data-label="Column">targetActualCode,  targetCode,  targetEntityType,  targetId</div>
<div class="cell" data-label="Arabic">الجهة</div>
<div class="cell" data-label="English">Taregt</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="viewedOn">
<div class="cell" data-label="Property">viewedOn</div>
<div class="cell" data-label="Column">viewedOn</div>
<div class="cell" data-label="Arabic">تاريخ المطالعة</div>
<div class="cell" data-label="English">Viewed On</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>


</div>
</div>

