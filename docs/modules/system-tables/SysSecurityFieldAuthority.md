
<div class='tableName'>


# SysSecurityFieldAuthority
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
</div><div class="row searchable" id="applicabeWhen">
<div class="cell" data-label="Property">applicabeWhen</div>
<div class="cell" data-label="Column">applicabeWhen</div>
<div class="cell" data-label="Arabic">تطبق عند</div>
<div class="cell" data-label="English">Applied when</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="applicableWithDraftMode">
<div class="cell" data-label="Property">applicableWithDraftMode</div>
<div class="cell" data-label="Column">applicableWithDraftMode</div>
<div class="cell" data-label="Arabic">تطبق عند | مسودm</div>
<div class="cell" data-label="English">ApplicableWith | Draft Mode</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="applicableWithNewMode">
<div class="cell" data-label="Property">applicableWithNewMode</div>
<div class="cell" data-label="Column">applicableWithNewMode</div>
<div class="cell" data-label="Arabic">تطبق عند | جديد</div>
<div class="cell" data-label="English">ApplicableWith | New Mode</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="applicableWithUpdateMode">
<div class="cell" data-label="Property">applicableWithUpdateMode</div>
<div class="cell" data-label="Column">applicableWithUpdateMode</div>
<div class="cell" data-label="Arabic">تطبق عند | تعديل</div>
<div class="cell" data-label="English">ApplicableWith | Update Mode</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="authorityType">
<div class="cell" data-label="Property">authorityType</div>
<div class="cell" data-label="Column">authorityType</div>
<div class="cell" data-label="Arabic">نوع التحكم</div>
<div class="cell" data-label="English">Preview Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="entityType">
<div class="cell" data-label="Property">entityType</div>
<div class="cell" data-label="Column">entityType</div>
<div class="cell" data-label="Arabic">النوع</div>
<div class="cell" data-label="English">Entity Type</div>
<div class="cell" data-label="Type">EntityType</div>

</div>

<div class="row searchable" id="fieldId">
<div class="cell" data-label="Property">fieldId</div>
<div class="cell" data-label="Column">fieldId</div>
<div class="cell" data-label="Arabic"> الحقل</div>
<div class="cell" data-label="English"> On Field</div>
<div class="cell" data-label="Type">FieldID</div>

</div>

<div class="row searchable" id="id">
<div class="cell" data-label="Property">id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="lineNumber">
<div class="cell" data-label="Property">lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="preventCopyLine">
<div class="cell" data-label="Property">preventCopyLine</div>
<div class="cell" data-label="Column">preventCopyLine</div>
<div class="cell" data-label="Arabic">منع نسخ سطر</div>
<div class="cell" data-label="English">Prevent Copy Line</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="preventDeleteLine">
<div class="cell" data-label="Property">preventDeleteLine</div>
<div class="cell" data-label="Column">preventDeleteLine</div>
<div class="cell" data-label="Arabic">منع حذف سطر</div>
<div class="cell" data-label="English">Prevent Delete Line</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="preventInsertLine">
<div class="cell" data-label="Property">preventInsertLine</div>
<div class="cell" data-label="Column">preventInsertLine</div>
<div class="cell" data-label="Arabic">منع ادراج سطر</div>
<div class="cell" data-label="English">Prevent Insert Line</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="refId">
<div class="cell" data-label="Property">refId</div>
<div class="cell" data-label="Column">refId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="remove">
<div class="cell" data-label="Property">remove</div>
<div class="cell" data-label="Column">remove</div>
<div class="cell" data-label="Arabic">حذف</div>
<div class="cell" data-label="English">Remove</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="securityProfile">
<div class="cell" data-label="Property">securityProfile</div>
<div class="cell" data-label="Column">securityProfile_id</div>
<div class="cell" data-label="Arabic">الصلاحيات</div>
<div class="cell" data-label="English">SecurityProfile</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SecurityProfile](/modules/basic/SecurityProfile.md) 
</div>
</div>

<div class="row searchable" id="targetEntities">
<div class="cell" data-label="Property">targetEntities</div>
<div class="cell" data-label="Column">targetEntities_id</div>
<div class="cell" data-label="Arabic">قائمة الأنواع</div>
<div class="cell" data-label="English">Entity Type List</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [EntityTypeList](/modules/basic/EntityTypeList.md) 
</div>
</div>


</div>
</div>

