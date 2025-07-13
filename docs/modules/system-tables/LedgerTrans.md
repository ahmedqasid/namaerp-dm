# LedgerTrans
**Arabic:** قيود النظام
**English:** Ledger Transaction

<ContentFilter/>


<div class='searchable'>
<a href='#lines'>lines (LedgerTransLine) </a>
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
</div><div class="row searchable" id="id">
<div class="cell" data-label="Property">id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="ledger">
<div class="cell" data-label="Property">ledger</div>
<div class="cell" data-label="Column">ledger_id</div>
<div class="cell" data-label="Arabic">دفتر الحسابات</div>
<div class="cell" data-label="English">Ledger</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Ledger](/modules/accounting/Ledger.md) 
</div>
</div>

<div class="row searchable" id="localCurrency">
<div class="cell" data-label="Property">localCurrency</div>
<div class="cell" data-label="Column">localCurrency_id</div>
<div class="cell" data-label="Arabic"> العملة</div>
<div class="cell" data-label="English">Local Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/modules/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="secondLevelSource">
<div class="cell" data-label="Property">secondLevelSource</div>
<div class="cell" data-label="Column">secondLevelSource</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="serialRef">
<div class="cell" data-label="Property">serialRef</div>
<div class="cell" data-label="Column">serialRef</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="totalCredit">
<div class="cell" data-label="Property">totalCredit</div>
<div class="cell" data-label="Column">totalCredit</div>
<div class="cell" data-label="Arabic">إجمالي الدائن</div>
<div class="cell" data-label="English">Credit Only</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalDebit">
<div class="cell" data-label="Property">totalDebit</div>
<div class="cell" data-label="Column">totalDebit</div>
<div class="cell" data-label="Arabic">إجمالي المدين</div>
<div class="cell" data-label="English">Debit Only</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalDiff">
<div class="cell" data-label="Property">totalDiff</div>
<div class="cell" data-label="Column">totalDiff</div>
<div class="cell" data-label="Arabic">إجمالي الفرق</div>
<div class="cell" data-label="English">Total Difference</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="transCode">
<div class="cell" data-label="Property">transCode</div>
<div class="cell" data-label="Column">transCode</div>
<div class="cell" data-label="Arabic">مسلسل</div>
<div class="cell" data-label="English">Serial</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="trnsData.analysisSet">
<div class="cell" data-label="Property">trnsData.analysisSet</div>
<div class="cell" data-label="Column">analysisSet_id</div>
<div class="cell" data-label="Arabic">المجموعة التحليلية</div>
<div class="cell" data-label="English">Analysis set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/modules/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="trnsData.branch">
<div class="cell" data-label="Property">trnsData.branch</div>
<div class="cell" data-label="Column">branch_id</div>
<div class="cell" data-label="Arabic">الفرع</div>
<div class="cell" data-label="English">Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/modules/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="trnsData.creationDate">
<div class="cell" data-label="Property">trnsData.creationDate</div>
<div class="cell" data-label="Column">creationDate</div>
<div class="cell" data-label="Arabic">تاريخ الإنشاء</div>
<div class="cell" data-label="English">Creation Date</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="trnsData.department">
<div class="cell" data-label="Property">trnsData.department</div>
<div class="cell" data-label="Column">department_id</div>
<div class="cell" data-label="Arabic">الإدارة</div>
<div class="cell" data-label="English">Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/modules/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="trnsData.firstAuthor">
<div class="cell" data-label="Property">trnsData.firstAuthor</div>
<div class="cell" data-label="Column">firstAuthor_id</div>
<div class="cell" data-label="Arabic">منشئ السجل</div>
<div class="cell" data-label="English">First Author</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [NaMaUser](/modules/system-tables/NaMaUser.md) 
</div>
</div>

<div class="row searchable" id="trnsData.fiscalPeriod">
<div class="cell" data-label="Property">trnsData.fiscalPeriod</div>
<div class="cell" data-label="Column">fiscalPeriod_id</div>
<div class="cell" data-label="Arabic">الفترة</div>
<div class="cell" data-label="English">Fiscal Period</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FiscalPeriod](/modules/basic/FiscalPeriod.md) 
</div>
</div>

<div class="row searchable" id="trnsData.fiscalYear">
<div class="cell" data-label="Property">trnsData.fiscalYear</div>
<div class="cell" data-label="Column">fiscalYear_id</div>
<div class="cell" data-label="Arabic">السنة المالية</div>
<div class="cell" data-label="English">Fiscal Year</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FiscalYear](/modules/basic/FiscalYear.md) 
</div>
</div>

<div class="row searchable" id="trnsData.issueDate">
<div class="cell" data-label="Property">trnsData.issueDate</div>
<div class="cell" data-label="Column">issueDate</div>
<div class="cell" data-label="Arabic">تاريخ التحرير</div>
<div class="cell" data-label="English">Issue Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="trnsData.lastUpdateDate">
<div class="cell" data-label="Property">trnsData.lastUpdateDate</div>
<div class="cell" data-label="Column">lastUpdateDate</div>
<div class="cell" data-label="Arabic">تاريخ اخر تحديث</div>
<div class="cell" data-label="English">Last update Date</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="trnsData.legalEntity">
<div class="cell" data-label="Property">trnsData.legalEntity</div>
<div class="cell" data-label="Column">legalEntity_id</div>
<div class="cell" data-label="Arabic">الشركة</div>
<div class="cell" data-label="English">Legal Entity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [LegalEntity](/modules/basic/LegalEntity.md) 
</div>
</div>

<div class="row searchable" id="trnsData.origin">
<div class="cell" data-label="Property">trnsData.origin</div>
<div class="cell gen-ref-column" data-label="Column">originActualCode,  originCode,  originType,  originId</div>
<div class="cell" data-label="Arabic"> # المستند</div>
<div class="cell" data-label="English"> Document #</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="trnsData.originCode">
<div class="cell" data-label="Property">trnsData.originCode</div>
<div class="cell" data-label="Column">originCode</div>
<div class="cell" data-label="Arabic"> الكود</div>
<div class="cell" data-label="English"> Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="trnsData.originCreationDate">
<div class="cell" data-label="Property">trnsData.originCreationDate</div>
<div class="cell" data-label="Column">originCreationDate</div>
<div class="cell" data-label="Arabic"> تاريخ الإنشاء</div>
<div class="cell" data-label="English"> Creation Date</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="trnsData.originId">
<div class="cell" data-label="Property">trnsData.originId</div>
<div class="cell" data-label="Column">originId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="trnsData.originLastUpdateDate">
<div class="cell" data-label="Property">trnsData.originLastUpdateDate</div>
<div class="cell" data-label="Column">originLastUpdateDate</div>
<div class="cell" data-label="Arabic">تاريخ اخر تحديث للمستند</div>
<div class="cell" data-label="English">Origin Last Update Date</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="trnsData.originTransId">
<div class="cell" data-label="Property">trnsData.originTransId</div>
<div class="cell" data-label="Column">originTransId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="trnsData.originType">
<div class="cell" data-label="Property">trnsData.originType</div>
<div class="cell" data-label="Column">originType</div>
<div class="cell" data-label="Arabic"> النوع</div>
<div class="cell" data-label="English"> Entity Type</div>
<div class="cell" data-label="Type">EntityType</div>

</div>

<div class="row searchable" id="trnsData.replicationSequence">
<div class="cell" data-label="Property">trnsData.replicationSequence</div>
<div class="cell" data-label="Column">replicationSequence</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="trnsData.requestId">
<div class="cell" data-label="Property">trnsData.requestId</div>
<div class="cell" data-label="Column">requestId</div>
<div class="cell" data-label="Arabic">Request Id</div>
<div class="cell" data-label="English">Request Id</div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="trnsData.sector">
<div class="cell" data-label="Property">trnsData.sector</div>
<div class="cell" data-label="Column">sector_id</div>
<div class="cell" data-label="Arabic">القطاع</div>
<div class="cell" data-label="English">Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/modules/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="trnsData.valueDate">
<div class="cell" data-label="Property">trnsData.valueDate</div>
<div class="cell" data-label="Column">valueDate</div>
<div class="cell" data-label="Arabic">التاريخ الفعلي</div>
<div class="cell" data-label="English">Value Date</div>
<div class="cell" data-label="Type">Date</div>

</div>


</div>
</div>

<div id='lines' title='lines' class='searchable'>

## lines ( التفاصيل -  Details)
**Table Name:** LedgerTransLine, **Join Column:** ledgerTrans_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="lines.account">
<div class="cell" data-label="Property">lines.account</div>
<div class="cell" data-label="Column">account_id</div>
<div class="cell" data-label="Arabic">الحساب</div>
<div class="cell" data-label="English">Account</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Account](/modules/accounting/Account.md) 
</div>
</div>

<div class="row searchable" id="lines.analysisSet">
<div class="cell" data-label="Property">lines.analysisSet</div>
<div class="cell" data-label="Column">analysisSet_id</div>
<div class="cell" data-label="Arabic">المجموعة التحليلية</div>
<div class="cell" data-label="English">AnalysisSet</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/modules/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="lines.branch">
<div class="cell" data-label="Property">lines.branch</div>
<div class="cell" data-label="Column">branch_id</div>
<div class="cell" data-label="Arabic">الفرع</div>
<div class="cell" data-label="English">Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/modules/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="lines.creationDate">
<div class="cell" data-label="Property">lines.creationDate</div>
<div class="cell" data-label="Column">creationDate</div>
<div class="cell" data-label="Arabic">تاريخ الإنشاء</div>
<div class="cell" data-label="English">Creation Date</div>
<div class="cell" data-label="Type">DateAndTime</div>

</div>

<div class="row searchable" id="lines.credit.localAmount">
<div class="cell" data-label="Property">lines.credit.localAmount</div>
<div class="cell" data-label="Column">creditLocalAmount</div>
<div class="cell" data-label="Arabic">محلي|دائن</div>
<div class="cell" data-label="English">Local|Credit</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="lines.credit.rate">
<div class="cell" data-label="Property">lines.credit.rate</div>
<div class="cell" data-label="Column">creditRate</div>
<div class="cell" data-label="Arabic">المعدل</div>
<div class="cell" data-label="English">Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="lines.credit.value.amount">
<div class="cell" data-label="Property">lines.credit.value.amount</div>
<div class="cell" data-label="Column">creditValueAmount</div>
<div class="cell" data-label="Arabic">المبلغ|دائن</div>
<div class="cell" data-label="English">Amount|Credit</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="lines.credit.value.currency">
<div class="cell" data-label="Property">lines.credit.value.currency</div>
<div class="cell" data-label="Column">creditValueCurrency_id</div>
<div class="cell" data-label="Arabic"> العملة</div>
<div class="cell" data-label="English"> Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/modules/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="lines.creditTransAmount">
<div class="cell" data-label="Property">lines.creditTransAmount</div>
<div class="cell" data-label="Column">creditTransAmount</div>
<div class="cell" data-label="Arabic">القيمة بعملة الحركة | دائن</div>
<div class="cell" data-label="English">Trans | Credit Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="lines.debit.localAmount">
<div class="cell" data-label="Property">lines.debit.localAmount</div>
<div class="cell" data-label="Column">debitLocalAmount</div>
<div class="cell" data-label="Arabic">محلي|مدين</div>
<div class="cell" data-label="English">Local|Debit</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="lines.debit.rate">
<div class="cell" data-label="Property">lines.debit.rate</div>
<div class="cell" data-label="Column">debitRate</div>
<div class="cell" data-label="Arabic">المعدل</div>
<div class="cell" data-label="English">Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="lines.debit.value.amount">
<div class="cell" data-label="Property">lines.debit.value.amount</div>
<div class="cell" data-label="Column">debitValueAmount</div>
<div class="cell" data-label="Arabic">المبلغ|مدين</div>
<div class="cell" data-label="English">Amount|Debit</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="lines.debit.value.currency">
<div class="cell" data-label="Property">lines.debit.value.currency</div>
<div class="cell" data-label="Column">debitValueCurrency_id</div>
<div class="cell" data-label="Arabic"> العملة</div>
<div class="cell" data-label="English"> Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/modules/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="lines.department">
<div class="cell" data-label="Property">lines.department</div>
<div class="cell" data-label="Column">department_id</div>
<div class="cell" data-label="Arabic">الإدارة</div>
<div class="cell" data-label="English">Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/modules/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="lines.effectType">
<div class="cell" data-label="Property">lines.effectType</div>
<div class="cell" data-label="Column">effectType</div>
<div class="cell" data-label="Arabic">نوع التأثير</div>
<div class="cell" data-label="English">Component Effect Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="lines.entityDimension">
<div class="cell" data-label="Property">lines.entityDimension</div>
<div class="cell gen-ref-column" data-label="Column">entityDimensionActualCode,  entityDimensionCode,  entityDimensionEntityType,  entityDimensionId</div>
<div class="cell" data-label="Arabic">السجل</div>
<div class="cell" data-label="English">Entity Dimension</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="lines.fiscalPeriod">
<div class="cell" data-label="Property">lines.fiscalPeriod</div>
<div class="cell" data-label="Column">fiscalPeriod_id</div>
<div class="cell" data-label="Arabic">الفترة</div>
<div class="cell" data-label="English">Fiscal Period</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FiscalPeriod](/modules/basic/FiscalPeriod.md) 
</div>
</div>

<div class="row searchable" id="lines.fiscalYear">
<div class="cell" data-label="Property">lines.fiscalYear</div>
<div class="cell" data-label="Column">fiscalYear_id</div>
<div class="cell" data-label="Arabic">السنة المالية</div>
<div class="cell" data-label="English">Fiscal Year</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FiscalYear](/modules/basic/FiscalYear.md) 
</div>
</div>

<div class="row searchable" id="lines.fromAccDistribution">
<div class="cell" data-label="Property">lines.fromAccDistribution</div>
<div class="cell" data-label="Column">fromAccDistribution</div>
<div class="cell" data-label="Arabic">منشئ من التوزيع</div>
<div class="cell" data-label="English">From Account Distribution</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="lines.fromPurge">
<div class="cell" data-label="Property">lines.fromPurge</div>
<div class="cell" data-label="Column">fromPurge</div>
<div class="cell" data-label="Arabic">From Purge</div>
<div class="cell" data-label="English">From Purge</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="lines.id">
<div class="cell" data-label="Property">lines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="lines.ledger">
<div class="cell" data-label="Property">lines.ledger</div>
<div class="cell" data-label="Column">ledger_id</div>
<div class="cell" data-label="Arabic">دفتر الحسابات</div>
<div class="cell" data-label="English">Ledger</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Ledger](/modules/accounting/Ledger.md) 
</div>
</div>

<div class="row searchable" id="lines.legalEntity">
<div class="cell" data-label="Property">lines.legalEntity</div>
<div class="cell" data-label="Column">legalEntity_id</div>
<div class="cell" data-label="Arabic">الشركة</div>
<div class="cell" data-label="English">Legal Entity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [LegalEntity](/modules/basic/LegalEntity.md) 
</div>
</div>

<div class="row searchable" id="lines.lineNumber">
<div class="cell" data-label="Property">lines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="lines.localCurrency">
<div class="cell" data-label="Property">lines.localCurrency</div>
<div class="cell" data-label="Column">localCurrency_id</div>
<div class="cell" data-label="Arabic"> العملة</div>
<div class="cell" data-label="English">Local Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/modules/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="lines.narration">
<div class="cell" data-label="Property">lines.narration</div>
<div class="cell" data-label="Column">narration</div>
<div class="cell" data-label="Arabic">الشرح</div>
<div class="cell" data-label="English">Narration</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="lines.narration2">
<div class="cell" data-label="Property">lines.narration2</div>
<div class="cell" data-label="Column">narration2</div>
<div class="cell" data-label="Arabic">الشرح 2</div>
<div class="cell" data-label="English">Narration 2</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="lines.origin">
<div class="cell" data-label="Property">lines.origin</div>
<div class="cell gen-ref-column" data-label="Column">originActualCode,  originCode,  originType,  originId</div>
<div class="cell" data-label="Arabic"> # المستند</div>
<div class="cell" data-label="English"> Document #</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="lines.originCode">
<div class="cell" data-label="Property">lines.originCode</div>
<div class="cell" data-label="Column">originCode</div>
<div class="cell" data-label="Arabic"> الكود</div>
<div class="cell" data-label="English"> Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="lines.originId">
<div class="cell" data-label="Property">lines.originId</div>
<div class="cell" data-label="Column">originId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="lines.originLines">
<div class="cell" data-label="Property">lines.originLines</div>
<div class="cell" data-label="Column">originLines</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="lines.originTransId">
<div class="cell" data-label="Property">lines.originTransId</div>
<div class="cell" data-label="Column">originTransId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="lines.originType">
<div class="cell" data-label="Property">lines.originType</div>
<div class="cell" data-label="Column">originType</div>
<div class="cell" data-label="Arabic"> النوع</div>
<div class="cell" data-label="English"> Entity Type</div>
<div class="cell" data-label="Type">EntityType</div>

</div>

<div class="row searchable" id="lines.ref1">
<div class="cell" data-label="Property">lines.ref1</div>
<div class="cell gen-ref-column" data-label="Column">ref1ActualCode,  ref1Code,  ref1EntityType,  ref1Id</div>
<div class="cell" data-label="Arabic">مرجع 1</div>
<div class="cell" data-label="English">Reference 1</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="lines.ref2">
<div class="cell" data-label="Property">lines.ref2</div>
<div class="cell gen-ref-column" data-label="Column">ref2ActualCode,  ref2Code,  ref2EntityType,  ref2Id</div>
<div class="cell" data-label="Arabic">مرجع 2</div>
<div class="cell" data-label="English">Reference 2</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="lines.ref3">
<div class="cell" data-label="Property">lines.ref3</div>
<div class="cell gen-ref-column" data-label="Column">ref3ActualCode,  ref3Code,  ref3EntityType,  ref3Id</div>
<div class="cell" data-label="Arabic">مرجع 3</div>
<div class="cell" data-label="English">Reference 3</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="lines.relatedLines">
<div class="cell" data-label="Property">lines.relatedLines</div>
<div class="cell" data-label="Column">relatedLines</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="lines.secondLevelSource">
<div class="cell" data-label="Property">lines.secondLevelSource</div>
<div class="cell" data-label="Column">secondLevelSource</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="lines.sector">
<div class="cell" data-label="Property">lines.sector</div>
<div class="cell" data-label="Column">sector_id</div>
<div class="cell" data-label="Arabic">القطاع</div>
<div class="cell" data-label="English">Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/modules/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="lines.subsidiary">
<div class="cell" data-label="Property">lines.subsidiary</div>
<div class="cell gen-ref-column" data-label="Column">subsidiaryActualCode,  subsidiaryCode,  subsidiaryEntityType,  subsidiaryId</div>
<div class="cell" data-label="Arabic">الذمة</div>
<div class="cell" data-label="English">Subsidiary</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="lines.transAmount">
<div class="cell" data-label="Property">lines.transAmount</div>
<div class="cell" data-label="Column">transAmount</div>
<div class="cell" data-label="Arabic">القيمة بعملة الحركة | مدين</div>
<div class="cell" data-label="English">Trans | Debit Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="lines.transCurrency">
<div class="cell" data-label="Property">lines.transCurrency</div>
<div class="cell" data-label="Column">transCurrency_id</div>
<div class="cell" data-label="Arabic">الحركة | العملة</div>
<div class="cell" data-label="English">Trans | Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/modules/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="lines.transRate">
<div class="cell" data-label="Property">lines.transRate</div>
<div class="cell" data-label="Column">transRate</div>
<div class="cell" data-label="Arabic">الحركة | المعدل</div>
<div class="cell" data-label="English">Trans | Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="lines.valueDate">
<div class="cell" data-label="Property">lines.valueDate</div>
<div class="cell" data-label="Column">valueDate</div>
<div class="cell" data-label="Arabic">التاريخ الفعلي</div>
<div class="cell" data-label="English">Value Date</div>
<div class="cell" data-label="Type">Date</div>

</div>


</div>
</div>

