
<div class='tableName'>


# REInvestmentFundInvestorTransaction
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
</div><div class="row searchable" id="creationDate">
<div class="cell" data-label="Property">creationDate</div>
<div class="cell" data-label="Column">creationDate</div>
<div class="cell" data-label="Arabic">تاريخ الإنشاء</div>
<div class="cell" data-label="English">Creation Date</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="doNotDeductManagementPercentage">
<div class="cell" data-label="Property">doNotDeductManagementPercentage</div>
<div class="cell" data-label="Column">doNotDeductManagementPercentage</div>
<div class="cell" data-label="Arabic">عدم خصم نسبة الإدارة</div>
<div class="cell" data-label="English">Do Not Deduct Management Percentage</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="id">
<div class="cell" data-label="Property">id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="investmentChange">
<div class="cell" data-label="Property">investmentChange</div>
<div class="cell" data-label="Column">investmentChange</div>
<div class="cell" data-label="Arabic">التغير في قيمة الاستثمار</div>
<div class="cell" data-label="English">Investment Change</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="investmentFund">
<div class="cell" data-label="Property">investmentFund</div>
<div class="cell" data-label="Column">investmentFund_id</div>
<div class="cell" data-label="Arabic">الصندوق الاستثماري</div>
<div class="cell" data-label="English">Investment Fund</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [REInvestmentFund](/modules/realestate/REInvestmentFund.md) 
</div>
</div>

<div class="row searchable" id="investor">
<div class="cell" data-label="Property">investor</div>
<div class="cell" data-label="Column">investor_id</div>
<div class="cell" data-label="Arabic">مستثمر</div>
<div class="cell" data-label="English">Investor</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [REOwner](/modules/realestate/REOwner.md) 
</div>
</div>

<div class="row searchable" id="mainInvestor">
<div class="cell" data-label="Property">mainInvestor</div>
<div class="cell" data-label="Column">mainInvestor_id</div>
<div class="cell" data-label="Arabic">المستثمر الرئيسي</div>
<div class="cell" data-label="English">Main Investor</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [REOwner](/modules/realestate/REOwner.md) 
</div>
</div>

<div class="row searchable" id="mainInvestorCommissionPercentage">
<div class="cell" data-label="Property">mainInvestorCommissionPercentage</div>
<div class="cell" data-label="Column">mainInvestorCommissionPercentage</div>
<div class="cell" data-label="Arabic">نسبة عمولة المستثمر الرئيسي</div>
<div class="cell" data-label="English">Main Investor Commission Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="owner">
<div class="cell" data-label="Property">owner</div>
<div class="cell gen-ref-column" data-label="Column">ownerActualCode,  ownerCode,  ownerEntityType,  ownerId</div>
<div class="cell" data-label="Arabic"> مالك المستند</div>
<div class="cell" data-label="English"> Document Owner</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="type">
<div class="cell" data-label="Property">type</div>
<div class="cell" data-label="Column">type</div>
<div class="cell" data-label="Arabic">النوع</div>
<div class="cell" data-label="English">Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="valueDate">
<div class="cell" data-label="Property">valueDate</div>
<div class="cell" data-label="Column">valueDate</div>
<div class="cell" data-label="Arabic">التاريخ الفعلي</div>
<div class="cell" data-label="English">Value Date</div>
<div class="cell" data-label="Type">Date</div>

</div>


</div>
</div>

