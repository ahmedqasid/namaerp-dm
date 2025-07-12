# CreditFacilityPayEntry
**Arabic:** الجدول النظامى لسداد التسهيل الائتمانى
**English:** Credit Facility Payment Entry

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
</div><div class="row searchable" id="calculatedInterestValue">
<div class="cell" data-label="Property">calculatedInterestValue</div>
<div class="cell" data-label="Column">calculatedInterestValue</div>
<div class="cell" data-label="Arabic">الفائدة المحسوبة</div>
<div class="cell" data-label="English">Calculated Interest Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="creationDate">
<div class="cell" data-label="Property">creationDate</div>
<div class="cell" data-label="Column">creationDate</div>
<div class="cell" data-label="Arabic">تاريخ الإنشاء</div>
<div class="cell" data-label="English">Creation Date</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="creditFacility">
<div class="cell" data-label="Property">creditFacility</div>
<div class="cell" data-label="Column">creditFacility_id</div>
<div class="cell" data-label="Arabic">التسهيل الائتمانى</div>
<div class="cell" data-label="English">Credit Facility</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CreditFacility](/modules/accounting-loans/CreditFacility.md) 
</div>
</div>

<div class="row searchable" id="creditFacilityRemainingAfterPayment">
<div class="cell" data-label="Property">creditFacilityRemainingAfterPayment</div>
<div class="cell" data-label="Column">creditFacilityRemainingAfterPayment</div>
<div class="cell" data-label="Arabic">المتبقي من التسهيل بعد الدفع</div>
<div class="cell" data-label="English">Credit Facility Remaining After Payment</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="creditFacilityRemainingBeforePayment">
<div class="cell" data-label="Property">creditFacilityRemainingBeforePayment</div>
<div class="cell" data-label="Column">creditFacilityRemainingBeforePayment</div>
<div class="cell" data-label="Arabic">المتبقي من التسهيل الائتمانى قبل الدفع</div>
<div class="cell" data-label="English">Credit Facility Remaining Before Payment</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="id">
<div class="cell" data-label="Property">id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic">المعرف</div>
<div class="cell" data-label="English">Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="interestRemainingAfterPayment">
<div class="cell" data-label="Property">interestRemainingAfterPayment</div>
<div class="cell" data-label="Column">interestRemainingAfterPayment</div>
<div class="cell" data-label="Arabic">المتبقي من الفائدة بعد الدفع</div>
<div class="cell" data-label="English">Interest Remaining After Payment</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="interestRemainingBeforePayment">
<div class="cell" data-label="Property">interestRemainingBeforePayment</div>
<div class="cell" data-label="Column">interestRemainingBeforePayment</div>
<div class="cell" data-label="Arabic">المتبقي من الفائدة قبل الدفع</div>
<div class="cell" data-label="English">Interest Remaining Before Payment</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="numOfDaysFromPreviousPayment">
<div class="cell" data-label="Property">numOfDaysFromPreviousPayment</div>
<div class="cell" data-label="Column">numOfDaysFromPreviousPayment</div>
<div class="cell" data-label="Arabic">عدد الأيام من السداد السابق</div>
<div class="cell" data-label="English">Number Of Days From Previous Payment</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="paymentDoc">
<div class="cell" data-label="Property">paymentDoc</div>
<div class="cell gen-ref-column" data-label="Column">paymentDocActualCode,  paymentDocCode,  paymentDocEntityType,  paymentDocId</div>
<div class="cell" data-label="Arabic">مستند الدفع</div>
<div class="cell" data-label="English">Payment document</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="paymentOfCreditFacilityValue">
<div class="cell" data-label="Property">paymentOfCreditFacilityValue</div>
<div class="cell" data-label="Column">paymentOfCreditFacilityValue</div>
<div class="cell" data-label="Arabic">المسدد من قيمة التسهيل الائتمانى</div>
<div class="cell" data-label="English">Payment Of Credit Facility Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="paymentOfInterestValue">
<div class="cell" data-label="Property">paymentOfInterestValue</div>
<div class="cell" data-label="Column">paymentOfInterestValue</div>
<div class="cell" data-label="Arabic">المسدد من قيمة الفائدة</div>
<div class="cell" data-label="English">Payment Of Interest Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="paymentValue">
<div class="cell" data-label="Property">paymentValue</div>
<div class="cell" data-label="Column">paymentValue</div>
<div class="cell" data-label="Arabic">المبلغ</div>
<div class="cell" data-label="English">Payment Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="previousPaymentDate">
<div class="cell" data-label="Property">previousPaymentDate</div>
<div class="cell" data-label="Column">previousPaymentDate</div>
<div class="cell" data-label="Arabic">تاريخ السداد السابق</div>
<div class="cell" data-label="English">Previous Payment Date</div>
<div class="cell" data-label="Type">Date</div>

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

