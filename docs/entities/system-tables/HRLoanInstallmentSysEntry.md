# HRLoanInstallmentSysEntry

<ContentFilter/>


<div class='searchable'>
<a href='#installmentPayments'>installmentPayments (HRInstallmentPaymentSysEntry) </a>
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
</div><div class="row searchable" id="code">
<div class="cell" data-label="Property">code</div>
<div class="cell" data-label="Column">code</div>
<div class="cell" data-label="Arabic">الكود</div>
<div class="cell" data-label="English">Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="disableDoc">
<div class="cell" data-label="Property">disableDoc</div>
<div class="cell" data-label="Column">disableDoc_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [HRLoanDisableDocument](/entities/humanresource-payroll/HRLoanDisableDocument.md) 
</div>
</div>

<div class="row searchable" id="disablingDate">
<div class="cell" data-label="Property">disablingDate</div>
<div class="cell" data-label="Column">disablingDate</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="employee">
<div class="cell" data-label="Property">employee</div>
<div class="cell" data-label="Column">employee_id</div>
<div class="cell" data-label="Arabic">الموظف</div>
<div class="cell" data-label="English">Employee</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/entities/basic/Employee.md) 
</div>
</div>

<div class="row searchable" id="id">
<div class="cell" data-label="Property">id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="installmentDate">
<div class="cell" data-label="Property">installmentDate</div>
<div class="cell" data-label="Column">installmentDate</div>
<div class="cell" data-label="Arabic">تاريخ القسط</div>
<div class="cell" data-label="English">Installment Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="installmentState">
<div class="cell" data-label="Property">installmentState</div>
<div class="cell" data-label="Column">installmentState</div>
<div class="cell" data-label="Arabic">حالة القسط</div>
<div class="cell" data-label="English">Installment State</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="installmentValue">
<div class="cell" data-label="Property">installmentValue</div>
<div class="cell" data-label="Column">installmentValue</div>
<div class="cell" data-label="Arabic">قيمة القسط</div>
<div class="cell" data-label="English">Installment Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="isDisabled">
<div class="cell" data-label="Property">isDisabled</div>
<div class="cell" data-label="Column">isDisabled</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="issuance">
<div class="cell" data-label="Property">issuance</div>
<div class="cell" data-label="Column">issuance_id</div>
<div class="cell" data-label="Arabic">الصرفية</div>
<div class="cell" data-label="English">Issuance</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [HRSalaryIssuance](/entities/humanresource-payroll/HRSalaryIssuance.md) 
</div>
</div>

<div class="row searchable" id="origin">
<div class="cell" data-label="Property">origin</div>
<div class="cell gen-ref-column" data-label="Column">originActualCode,  originCode,  originEntityType,  originId</div>
<div class="cell" data-label="Arabic"> # المستند</div>
<div class="cell" data-label="English"> Document #</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="paidFromSalary">
<div class="cell" data-label="Property">paidFromSalary</div>
<div class="cell" data-label="Column">paidFromSalary</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="reliefValue">
<div class="cell" data-label="Property">reliefValue</div>
<div class="cell" data-label="Column">reliefValue</div>
<div class="cell" data-label="Arabic">قيمة الإعفاء</div>
<div class="cell" data-label="English">Relief Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="remaining">
<div class="cell" data-label="Property">remaining</div>
<div class="cell" data-label="Column">remaining</div>
<div class="cell" data-label="Arabic">المتبقي</div>
<div class="cell" data-label="English">Remaining</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalPaid">
<div class="cell" data-label="Property">totalPaid</div>
<div class="cell" data-label="Column">totalPaid</div>
<div class="cell" data-label="Arabic">إجمالي المدفوع</div>
<div class="cell" data-label="English">Total paid</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="valueDate">
<div class="cell" data-label="Property">valueDate</div>
<div class="cell" data-label="Column">valueDate</div>
<div class="cell" data-label="Arabic">التاريخ الفعلي</div>
<div class="cell" data-label="English">Value Date</div>
<div class="cell" data-label="Type">Date</div>

</div>


</div>

<div id='installmentPayments' title='installmentPayments' class='searchable'>

## installmentPayments (سندات سداد الدفعات - Installment Payments)
**Table Name:** HRInstallmentPaymentSysEntry, **Join Column:** hRLoanInstallmentSysEntry_id
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="installmentPayments.hrLoanInstallmentSysEntry_id">
<div class="cell" data-label="Property">installmentPayments.hrLoanInstallmentSysEntry_id</div>
<div class="cell" data-label="Column">hrLoanInstallmentSysEntry_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="installmentPayments.id">
<div class="cell" data-label="Property">installmentPayments.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="installmentPayments.lineNumber">
<div class="cell" data-label="Property">installmentPayments.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic">رقم السطر</div>
<div class="cell" data-label="English">Line Number</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="installmentPayments.origin">
<div class="cell" data-label="Property">installmentPayments.origin</div>
<div class="cell gen-ref-column" data-label="Column">originActualCode,  originCode,  originEntityType,  originId</div>
<div class="cell" data-label="Arabic"> # المستند</div>
<div class="cell" data-label="English"> Document #</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="installmentPayments.paidValue">
<div class="cell" data-label="Property">installmentPayments.paidValue</div>
<div class="cell" data-label="Column">paidValue</div>
<div class="cell" data-label="Arabic">القيمة المدفوعة</div>
<div class="cell" data-label="English">Paid Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="installmentPayments.paymentDate">
<div class="cell" data-label="Property">installmentPayments.paymentDate</div>
<div class="cell" data-label="Column">paymentDate</div>
<div class="cell" data-label="Arabic">تاريخ الدفع</div>
<div class="cell" data-label="English">Payment Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="installmentPayments.reliefValue">
<div class="cell" data-label="Property">installmentPayments.reliefValue</div>
<div class="cell" data-label="Column">reliefValue</div>
<div class="cell" data-label="Arabic">قيمة الإعفاء</div>
<div class="cell" data-label="English">Relief Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>


</div>

