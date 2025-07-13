# PaymentMethod
**Arabic:** طريقة دفع - طرق الدفع
**English:** Payment Method - Payment Methods

<ContentFilter/>


<div class='searchable'>
<a href='#feeRanges'>feeRanges (PaymentMethodFee) </a>
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
</div><div class="row searchable" id="allowEditFeesValueManually">
<div class="cell" data-label="Property">allowEditFeesValueManually</div>
<div class="cell" data-label="Column">allowEditFeesValueManually</div>
<div class="cell" data-label="Arabic">السماح بتعديل قيمة الرسوم يدويا</div>
<div class="cell" data-label="English">Allow Edit Fees Value Manually</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="allowEditingFeesTaxManually">
<div class="cell" data-label="Property">allowEditingFeesTaxManually</div>
<div class="cell" data-label="Column">allowEditingFeesTaxManually</div>
<div class="cell" data-label="Arabic">السماح بتعديل قيمة ضريبة الرسوم يدوياً</div>
<div class="cell" data-label="English">Allow Editing Fees Tax Manually</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="allowFeeValueAndPercentage">
<div class="cell" data-label="Property">allowFeeValueAndPercentage</div>
<div class="cell" data-label="Column">allowFeeValueAndPercentage</div>
<div class="cell" data-label="Arabic">السماح بوجود قيمة رسوم ثابته بالإضافة الي نسبة رسوم</div>
<div class="cell" data-label="English">Allow Fee Value And Percentage</div>
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

<div class="row searchable" id="analysisSetId">
<div class="cell" data-label="Property">analysisSetId</div>
<div class="cell" data-label="Column">analysisSet_id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="applyFeesTaxFromDate">
<div class="cell" data-label="Property">applyFeesTaxFromDate</div>
<div class="cell" data-label="Column">applyFeesTaxFromDate</div>
<div class="cell" data-label="Arabic">تطبيق ضريبة الرسوم من تاريخ</div>
<div class="cell" data-label="English">Apply Fees Tax From Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="applyFeesTaxToDate">
<div class="cell" data-label="Property">applyFeesTaxToDate</div>
<div class="cell" data-label="Column">applyFeesTaxToDate</div>
<div class="cell" data-label="Arabic">تطبيق ضريبة الرسوم إلى تاريخ</div>
<div class="cell" data-label="English">Apply Fees Tax To Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="authorizationNumberRequire">
<div class="cell" data-label="Property">authorizationNumberRequire</div>
<div class="cell" data-label="Column">authorizationNumberRequire</div>
<div class="cell" data-label="Arabic">رقم العملية مطلوب</div>
<div class="cell" data-label="English">Authorization Number Required</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="bank">
<div class="cell" data-label="Property">bank</div>
<div class="cell" data-label="Column">bank_id</div>
<div class="cell" data-label="Arabic">البنك</div>
<div class="cell" data-label="English">Bank</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Bank](/modules/accounting-banks/Bank.md) 
</div>
</div>

<div class="row searchable" id="bankAccount">
<div class="cell" data-label="Property">bankAccount</div>
<div class="cell" data-label="Column">bankAccount_id</div>
<div class="cell" data-label="Arabic">رقم حساب البنك</div>
<div class="cell" data-label="English">Bank account</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [BankAccount](/modules/accounting-banks/BankAccount.md) 
</div>
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

<div class="row searchable" id="cashPaymentMethod">
<div class="cell" data-label="Property">cashPaymentMethod</div>
<div class="cell" data-label="Column">cashPaymentMethod</div>
<div class="cell" data-label="Arabic">طريقة دفع نقدي</div>
<div class="cell" data-label="English">Cash Payment Method</div>
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

<div class="row searchable" id="commitedBefore">
<div class="cell" data-label="Property">commitedBefore</div>
<div class="cell" data-label="Column">commitedBefore</div>
<div class="cell" data-label="Arabic">تم الحفظ مسبقا</div>
<div class="cell" data-label="English">Commited Before</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="companyPaysExpensesInPayment">
<div class="cell" data-label="Property">companyPaysExpensesInPayment</div>
<div class="cell" data-label="Column">companyPaysExpensesInPayment</div>
<div class="cell" data-label="Arabic">تتحمل الشركة المصاريف عند الصرف</div>
<div class="cell" data-label="English">Company Pays Expenses In Payment</div>
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

<div class="row searchable" id="criticalPosPaymentMethod">
<div class="cell" data-label="Property">criticalPosPaymentMethod</div>
<div class="cell" data-label="Column">criticalPosPaymentMethod</div>
<div class="cell" data-label="Arabic">طريقة دفع حرجه لنقاط البيع</div>
<div class="cell" data-label="English">Critical Pos Payment Method</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="disableActualBalanceInPOS">
<div class="cell" data-label="Property">disableActualBalanceInPOS</div>
<div class="cell" data-label="Column">disableActualBalanceInPOS</div>
<div class="cell" data-label="Arabic">تعطيل الرصيد الفعلي في نقطة البيع</div>
<div class="cell" data-label="English">Disable Actual Balance In POS</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="doNotAffectRemaining">
<div class="cell" data-label="Property">doNotAffectRemaining</div>
<div class="cell" data-label="Column">doNotAffectRemaining</div>
<div class="cell" data-label="Arabic">عدم التأثير على المتبقي</div>
<div class="cell" data-label="English">Do Not Affect Remaining</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="doNotUseInPosPayments">
<div class="cell" data-label="Property">doNotUseInPosPayments</div>
<div class="cell" data-label="Column">doNotUseInPosPayments</div>
<div class="cell" data-label="Arabic">لا تستخدم في مصروفات نقاط البيع</div>
<div class="cell" data-label="English">Do Not Use In POS Payments</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="doNotUseInPosReceipts">
<div class="cell" data-label="Property">doNotUseInPosReceipts</div>
<div class="cell" data-label="Column">doNotUseInPosReceipts</div>
<div class="cell" data-label="Arabic">لا تستخدم في مقبوضات نقاط البيع</div>
<div class="cell" data-label="English">Do Not Use In POS Receipts</div>
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

<div class="row searchable" id="expandPaymentMethodEffect">
<div class="cell" data-label="Property">expandPaymentMethodEffect</div>
<div class="cell" data-label="Column">expandPaymentMethodEffect</div>
<div class="cell" data-label="Arabic">عدم إختصار قيود مصروفات طرق الدفع</div>
<div class="cell" data-label="English">Expand Payment Method Effect</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="expenseReverseSide">
<div class="cell" data-label="Property">expenseReverseSide</div>
<div class="cell" data-label="Column">expenseReverseSide_id</div>
<div class="cell" data-label="Arabic">الجانب الآخر لقيمة المصاريف</div>
<div class="cell" data-label="English">Expense Reverse Side</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AccountingSideConfig](/modules/basic/AccountingSideConfig.md) 
</div>
</div>

<div class="row searchable" id="fees">
<div class="cell" data-label="Property">fees</div>
<div class="cell" data-label="Column">fees</div>
<div class="cell" data-label="Arabic">نسبة الرسوم</div>
<div class="cell" data-label="English">Fees Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="feesAccount">
<div class="cell" data-label="Property">feesAccount</div>
<div class="cell" data-label="Column">feesAccount_id</div>
<div class="cell" data-label="Arabic">حساب الرسوم</div>
<div class="cell" data-label="English">Fees Account</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Account](/modules/accounting/Account.md) 
</div>
</div>

<div class="row searchable" id="feesTaxCredit">
<div class="cell" data-label="Property">feesTaxCredit</div>
<div class="cell" data-label="Column">feesTaxCredit_id</div>
<div class="cell" data-label="Arabic">دائن ضريبة الرسوم</div>
<div class="cell" data-label="English">Fees Tax Credit</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AccountingSideConfig](/modules/basic/AccountingSideConfig.md) 
</div>
</div>

<div class="row searchable" id="feesTaxDebit">
<div class="cell" data-label="Property">feesTaxDebit</div>
<div class="cell" data-label="Column">feesTaxDebit_id</div>
<div class="cell" data-label="Arabic">مدين ضريبة الرسوم</div>
<div class="cell" data-label="English">Fees Tax Debit</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AccountingSideConfig](/modules/basic/AccountingSideConfig.md) 
</div>
</div>

<div class="row searchable" id="feesTaxPercentage">
<div class="cell" data-label="Property">feesTaxPercentage</div>
<div class="cell" data-label="Column">feesTaxPercentage</div>
<div class="cell" data-label="Arabic">نسبة ضريبة الرسوم</div>
<div class="cell" data-label="English">Fees Tax Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="feesValue">
<div class="cell" data-label="Property">feesValue</div>
<div class="cell" data-label="Column">feesValue</div>
<div class="cell" data-label="Arabic">قيمة الرسوم</div>
<div class="cell" data-label="English">Fees Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="feesValueSide">
<div class="cell" data-label="Property">feesValueSide</div>
<div class="cell" data-label="Column">feesValueSide_id</div>
<div class="cell" data-label="Arabic">التوجيه المباشر لقيمة الرسوم</div>
<div class="cell" data-label="English">Fees Value Direct Side</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AccountingSideConfig](/modules/basic/AccountingSideConfig.md) 
</div>
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

<div class="row searchable" id="hideInPOSPayment">
<div class="cell" data-label="Property">hideInPOSPayment</div>
<div class="cell" data-label="Column">hideInPOSPayment</div>
<div class="cell" data-label="Arabic">إخفاء في شاشة الدفع في نقاط البيع</div>
<div class="cell" data-label="English">Hide In POS Payment Dialog</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="hideInShifts">
<div class="cell" data-label="Property">hideInShifts</div>
<div class="cell" data-label="Column">hideInShifts</div>
<div class="cell" data-label="Arabic">اخفاء في شاشة الورديات</div>
<div class="cell" data-label="English">Hide In Shifts</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="id">
<div class="cell" data-label="Property">id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
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

<div class="row searchable" id="mustBeWithFeesPercentInReturn">
<div class="cell" data-label="Property">mustBeWithFeesPercentInReturn</div>
<div class="cell" data-label="Column">mustBeWithFeesPercentInReturn</div>
<div class="cell" data-label="Arabic">الأرتجاع بها مع عدم خفض العموله في الفاتورة الاصليه</div>
<div class="cell" data-label="English">Must Be With Fees Percentage In Return</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="paymentValueDirectSide">
<div class="cell" data-label="Property">paymentValueDirectSide</div>
<div class="cell" data-label="Column">paymentValueDirectSide_id</div>
<div class="cell" data-label="Arabic">التوجيه المباشر لقيمة الدفع</div>
<div class="cell" data-label="English">Payment Value Direct Side</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AccountingSideConfig](/modules/basic/AccountingSideConfig.md) 
</div>
</div>

<div class="row searchable" id="paymentValueSide">
<div class="cell" data-label="Property">paymentValueSide</div>
<div class="cell" data-label="Column">paymentValueSide_id</div>
<div class="cell" data-label="Arabic">توجيه قيمة الدفع (لمصدر المحددات و المراجع فقط)</div>
<div class="cell" data-label="English">Payment Value Side (For Dimensions and References Source Only)</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AccountingSideConfig](/modules/basic/AccountingSideConfig.md) 
</div>
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

<div class="row searchable" id="requireRewardDiscountCoupon">
<div class="cell" data-label="Property">requireRewardDiscountCoupon</div>
<div class="cell" data-label="Column">requireRewardDiscountCoupon</div>
<div class="cell" data-label="Arabic">يستخدم مع قسائم الخصومات الخاصة بنقاط المكأفاة</div>
<div class="cell" data-label="English">Used With Reward Point Discount Coupons</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="resetBalanceWithShiftClose">
<div class="cell" data-label="Property">resetBalanceWithShiftClose</div>
<div class="cell" data-label="Column">resetBalanceWithShiftClose</div>
<div class="cell" data-label="Arabic">تصفير الرصيد مع غلق الوردية</div>
<div class="cell" data-label="English">Reset Balance With Shift Close</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="reverseFeesTaxDebitAndCredit">
<div class="cell" data-label="Property">reverseFeesTaxDebitAndCredit</div>
<div class="cell" data-label="Column">reverseFeesTaxDebitAndCredit</div>
<div class="cell" data-label="Arabic">عكس مدين ودائن ضريبة الرسوم في المردودات والمشتريات</div>
<div class="cell" data-label="English">Reverse Fees Tax Debit And Credit In Returns And Purchase</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="rewardPointsConfig">
<div class="cell" data-label="Property">rewardPointsConfig</div>
<div class="cell" data-label="Column">rewardPointsConfig_id</div>
<div class="cell" data-label="Arabic"> إعدادات نقاط المكافأة</div>
<div class="cell" data-label="English">Reward Points Configuration</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [RewardPointsConfig](/modules/basic-external-reward-points/RewardPointsConfig.md) 
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

<div class="row searchable" id="shiftDiffCreditSide">
<div class="cell" data-label="Property">shiftDiffCreditSide</div>
<div class="cell" data-label="Column">shiftDiffCreditSide_id</div>
<div class="cell" data-label="Arabic">الجانب الدائن لفرق الورديه</div>
<div class="cell" data-label="English">Shift Difference Credit Side</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AccountingSideConfig](/modules/basic/AccountingSideConfig.md) 
</div>
</div>

<div class="row searchable" id="shiftDiffDebitSide">
<div class="cell" data-label="Property">shiftDiffDebitSide</div>
<div class="cell" data-label="Column">shiftDiffDebitSide_id</div>
<div class="cell" data-label="Arabic">الجانب المدين لفرق الورديه</div>
<div class="cell" data-label="English">Shift Difference Debit Side</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AccountingSideConfig](/modules/basic/AccountingSideConfig.md) 
</div>
</div>

<div class="row searchable" id="subsidiary">
<div class="cell" data-label="Property">subsidiary</div>
<div class="cell gen-ref-column" data-label="Column">subsidiaryActualCode,  subsidiaryCode,  subsidiaryEntityType,  subsidiaryId</div>
<div class="cell" data-label="Arabic">الخزينة - الذمة</div>
<div class="cell" data-label="English">Safe Deposite - Subsidiary</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="subsidiaryAccounts.account1">
<div class="cell" data-label="Property">subsidiaryAccounts.account1</div>
<div class="cell" data-label="Column">account1_id</div>
<div class="cell" data-label="Arabic"> حساب 01</div>
<div class="cell" data-label="English"> Account 01</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Account](/modules/accounting/Account.md) 
</div>
</div>

<div class="row searchable" id="subsidiaryAccounts.account10">
<div class="cell" data-label="Property">subsidiaryAccounts.account10</div>
<div class="cell" data-label="Column">account10_id</div>
<div class="cell" data-label="Arabic"> حساب 10</div>
<div class="cell" data-label="English"> Account 10</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Account](/modules/accounting/Account.md) 
</div>
</div>

<div class="row searchable" id="subsidiaryAccounts.account11">
<div class="cell" data-label="Property">subsidiaryAccounts.account11</div>
<div class="cell" data-label="Column">account11_id</div>
<div class="cell" data-label="Arabic"> حساب 11</div>
<div class="cell" data-label="English"> Account 11</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Account](/modules/accounting/Account.md) 
</div>
</div>

<div class="row searchable" id="subsidiaryAccounts.account12">
<div class="cell" data-label="Property">subsidiaryAccounts.account12</div>
<div class="cell" data-label="Column">account12_id</div>
<div class="cell" data-label="Arabic"> حساب 12</div>
<div class="cell" data-label="English"> Account 12</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Account](/modules/accounting/Account.md) 
</div>
</div>

<div class="row searchable" id="subsidiaryAccounts.account13">
<div class="cell" data-label="Property">subsidiaryAccounts.account13</div>
<div class="cell" data-label="Column">account13_id</div>
<div class="cell" data-label="Arabic"> حساب 13</div>
<div class="cell" data-label="English"> Account 13</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Account](/modules/accounting/Account.md) 
</div>
</div>

<div class="row searchable" id="subsidiaryAccounts.account14">
<div class="cell" data-label="Property">subsidiaryAccounts.account14</div>
<div class="cell" data-label="Column">account14_id</div>
<div class="cell" data-label="Arabic"> حساب 14</div>
<div class="cell" data-label="English"> Account 14</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Account](/modules/accounting/Account.md) 
</div>
</div>

<div class="row searchable" id="subsidiaryAccounts.account15">
<div class="cell" data-label="Property">subsidiaryAccounts.account15</div>
<div class="cell" data-label="Column">account15_id</div>
<div class="cell" data-label="Arabic"> حساب 15</div>
<div class="cell" data-label="English"> Account 15</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Account](/modules/accounting/Account.md) 
</div>
</div>

<div class="row searchable" id="subsidiaryAccounts.account16">
<div class="cell" data-label="Property">subsidiaryAccounts.account16</div>
<div class="cell" data-label="Column">account16_id</div>
<div class="cell" data-label="Arabic"> حساب 16</div>
<div class="cell" data-label="English"> Account 16</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Account](/modules/accounting/Account.md) 
</div>
</div>

<div class="row searchable" id="subsidiaryAccounts.account17">
<div class="cell" data-label="Property">subsidiaryAccounts.account17</div>
<div class="cell" data-label="Column">account17_id</div>
<div class="cell" data-label="Arabic"> حساب 17</div>
<div class="cell" data-label="English"> Account 17</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Account](/modules/accounting/Account.md) 
</div>
</div>

<div class="row searchable" id="subsidiaryAccounts.account18">
<div class="cell" data-label="Property">subsidiaryAccounts.account18</div>
<div class="cell" data-label="Column">account18_id</div>
<div class="cell" data-label="Arabic"> حساب 18</div>
<div class="cell" data-label="English"> Account 18</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Account](/modules/accounting/Account.md) 
</div>
</div>

<div class="row searchable" id="subsidiaryAccounts.account19">
<div class="cell" data-label="Property">subsidiaryAccounts.account19</div>
<div class="cell" data-label="Column">account19_id</div>
<div class="cell" data-label="Arabic"> حساب 19</div>
<div class="cell" data-label="English"> Account 19</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Account](/modules/accounting/Account.md) 
</div>
</div>

<div class="row searchable" id="subsidiaryAccounts.account2">
<div class="cell" data-label="Property">subsidiaryAccounts.account2</div>
<div class="cell" data-label="Column">account2_id</div>
<div class="cell" data-label="Arabic"> حساب 02</div>
<div class="cell" data-label="English"> Account 02</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Account](/modules/accounting/Account.md) 
</div>
</div>

<div class="row searchable" id="subsidiaryAccounts.account20">
<div class="cell" data-label="Property">subsidiaryAccounts.account20</div>
<div class="cell" data-label="Column">account20_id</div>
<div class="cell" data-label="Arabic"> حساب 20</div>
<div class="cell" data-label="English"> Account 20</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Account](/modules/accounting/Account.md) 
</div>
</div>

<div class="row searchable" id="subsidiaryAccounts.account3">
<div class="cell" data-label="Property">subsidiaryAccounts.account3</div>
<div class="cell" data-label="Column">account3_id</div>
<div class="cell" data-label="Arabic"> حساب 03</div>
<div class="cell" data-label="English"> Account 03</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Account](/modules/accounting/Account.md) 
</div>
</div>

<div class="row searchable" id="subsidiaryAccounts.account4">
<div class="cell" data-label="Property">subsidiaryAccounts.account4</div>
<div class="cell" data-label="Column">account4_id</div>
<div class="cell" data-label="Arabic"> حساب 04</div>
<div class="cell" data-label="English"> Account 04</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Account](/modules/accounting/Account.md) 
</div>
</div>

<div class="row searchable" id="subsidiaryAccounts.account5">
<div class="cell" data-label="Property">subsidiaryAccounts.account5</div>
<div class="cell" data-label="Column">account5_id</div>
<div class="cell" data-label="Arabic"> حساب 05</div>
<div class="cell" data-label="English"> Account 05</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Account](/modules/accounting/Account.md) 
</div>
</div>

<div class="row searchable" id="subsidiaryAccounts.account6">
<div class="cell" data-label="Property">subsidiaryAccounts.account6</div>
<div class="cell" data-label="Column">account6_id</div>
<div class="cell" data-label="Arabic"> حساب 06</div>
<div class="cell" data-label="English"> Account 06</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Account](/modules/accounting/Account.md) 
</div>
</div>

<div class="row searchable" id="subsidiaryAccounts.account7">
<div class="cell" data-label="Property">subsidiaryAccounts.account7</div>
<div class="cell" data-label="Column">account7_id</div>
<div class="cell" data-label="Arabic"> حساب 07</div>
<div class="cell" data-label="English"> Account 07</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Account](/modules/accounting/Account.md) 
</div>
</div>

<div class="row searchable" id="subsidiaryAccounts.account8">
<div class="cell" data-label="Property">subsidiaryAccounts.account8</div>
<div class="cell" data-label="Column">account8_id</div>
<div class="cell" data-label="Arabic"> حساب 08</div>
<div class="cell" data-label="English"> Account 08</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Account](/modules/accounting/Account.md) 
</div>
</div>

<div class="row searchable" id="subsidiaryAccounts.account9">
<div class="cell" data-label="Property">subsidiaryAccounts.account9</div>
<div class="cell" data-label="Column">account9_id</div>
<div class="cell" data-label="Arabic"> حساب 09</div>
<div class="cell" data-label="English"> Account 09</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Account](/modules/accounting/Account.md) 
</div>
</div>

<div class="row searchable" id="subsidiaryAccounts.accountsBag">
<div class="cell" data-label="Property">subsidiaryAccounts.accountsBag</div>
<div class="cell" data-label="Column">accountsBag_id</div>
<div class="cell" data-label="Arabic"> حقيبة حسابات</div>
<div class="cell" data-label="English"> Accounts Bag</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AccountsBag](/modules/basic/AccountsBag.md) 
</div>
</div>

<div class="row searchable" id="subsidiaryAccounts.currency">
<div class="cell" data-label="Property">subsidiaryAccounts.currency</div>
<div class="cell" data-label="Column">currency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/modules/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="subsidiaryAccounts.forceNoDebtAgesTracking">
<div class="cell" data-label="Property">subsidiaryAccounts.forceNoDebtAgesTracking</div>
<div class="cell" data-label="Column">forceNoDebtAgesTracking</div>
<div class="cell" data-label="Arabic">منع متابعة أعمار الديون لهذه الذمة - حتي و إن تم تفعيلها للحساب</div>
<div class="cell" data-label="English">Do Not Track Debt Ages For This Subsidiary - Even if it was activated in the account</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="subsidiaryAccounts.mainAccount">
<div class="cell" data-label="Property">subsidiaryAccounts.mainAccount</div>
<div class="cell" data-label="Column">mainAccount_id</div>
<div class="cell" data-label="Arabic"> الحساب الرئيسي</div>
<div class="cell" data-label="English"> Main Account</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Account](/modules/accounting/Account.md) 
</div>
</div>

<div class="row searchable" id="subsidiaryAccounts.parentParty">
<div class="cell" data-label="Property">subsidiaryAccounts.parentParty</div>
<div class="cell gen-ref-column" data-label="Column">parentPartyActualCode,  parentPartyCode,  parentPartyEntityType,  parentPartyId</div>
<div class="cell" data-label="Arabic">الجهة الأعلي (البديل المحاسبي)</div>
<div class="cell" data-label="English">Parent Party (Accounting Alternative)</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="subsidiaryAccounts.tax1Exempt">
<div class="cell" data-label="Property">subsidiaryAccounts.tax1Exempt</div>
<div class="cell" data-label="Column">tax1Exempt</div>
<div class="cell" data-label="Arabic">غير خاضع لضريبة 1</div>
<div class="cell" data-label="English">Tax 1 Exempt</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="subsidiaryAccounts.tax2Exempt">
<div class="cell" data-label="Property">subsidiaryAccounts.tax2Exempt</div>
<div class="cell" data-label="Column">tax2Exempt</div>
<div class="cell" data-label="Arabic">غير خاضع لضريبة 2</div>
<div class="cell" data-label="English">Tax 2 Exempt</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="subsidiaryAccounts.tax3Exempt">
<div class="cell" data-label="Property">subsidiaryAccounts.tax3Exempt</div>
<div class="cell" data-label="Column">tax3Exempt</div>
<div class="cell" data-label="Arabic">غير خاضع لضريبة 3</div>
<div class="cell" data-label="English">Tax 3 Exempt</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="subsidiaryAccounts.tax4Exempt">
<div class="cell" data-label="Property">subsidiaryAccounts.tax4Exempt</div>
<div class="cell" data-label="Column">tax4Exempt</div>
<div class="cell" data-label="Arabic">غير خاضع لضريبة 4</div>
<div class="cell" data-label="English">Tax 4 Exempt</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="systemGeneratedCodePrefix">
<div class="cell" data-label="Property">systemGeneratedCodePrefix</div>
<div class="cell" data-label="Column">systemGeneratedCodePrefix</div>
<div class="cell" data-label="Arabic">System Generated Code Prefix</div>
<div class="cell" data-label="English">System Generated Code Prefix</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxAuthorityCode">
<div class="cell" data-label="Property">taxAuthorityCode</div>
<div class="cell" data-label="Column">taxAuthorityCode</div>
<div class="cell" data-label="Arabic">كود مصلحة الضرائب</div>
<div class="cell" data-label="English">Tax Authority Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="taxPlan">
<div class="cell" data-label="Property">taxPlan</div>
<div class="cell" data-label="Column">taxPlan_id</div>
<div class="cell" data-label="Arabic"> سياسة الضريبة</div>
<div class="cell" data-label="English"> Tax Plan</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [TaxPlan](/modules/basic/TaxPlan.md) 
</div>
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

<div id='feeRanges' title='feeRanges' class='searchable'>

## feeRanges (شرائح الرسوم - Fee Ranges)
**Table Name:** PaymentMethodFee, **Join Column:** paymentMethod_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="feeRanges.entityType">
<div class="cell" data-label="Property">feeRanges.entityType</div>
<div class="cell" data-label="Column">entityType</div>
<div class="cell" data-label="Arabic">النوع</div>
<div class="cell" data-label="English">Entity Type</div>
<div class="cell" data-label="Type">EntityType</div>

</div>

<div class="row searchable" id="feeRanges.entityTypeList">
<div class="cell" data-label="Property">feeRanges.entityTypeList</div>
<div class="cell" data-label="Column">entityTypeList_id</div>
<div class="cell" data-label="Arabic">قائمة الأنواع</div>
<div class="cell" data-label="English">Entity Type List</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [EntityTypeList](/modules/basic/EntityTypeList.md) 
</div>
</div>

<div class="row searchable" id="feeRanges.feePercentage">
<div class="cell" data-label="Property">feeRanges.feePercentage</div>
<div class="cell" data-label="Column">feePercentage</div>
<div class="cell" data-label="Arabic">نسبة الرسوم</div>
<div class="cell" data-label="English">Fee Percentage</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="feeRanges.feeValue">
<div class="cell" data-label="Property">feeRanges.feeValue</div>
<div class="cell" data-label="Column">feeValue</div>
<div class="cell" data-label="Arabic">قيمة الرسوم الثابتة</div>
<div class="cell" data-label="English">Fixed Fee Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="feeRanges.fromDate">
<div class="cell" data-label="Property">feeRanges.fromDate</div>
<div class="cell" data-label="Column">fromDate</div>
<div class="cell" data-label="Arabic">من تاريخ</div>
<div class="cell" data-label="English">From Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="feeRanges.fromValue">
<div class="cell" data-label="Property">feeRanges.fromValue</div>
<div class="cell" data-label="Column">fromValue</div>
<div class="cell" data-label="Arabic">من قيمة</div>
<div class="cell" data-label="English">From Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="feeRanges.id">
<div class="cell" data-label="Property">feeRanges.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="feeRanges.lineNumber">
<div class="cell" data-label="Property">feeRanges.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="feeRanges.maxValue">
<div class="cell" data-label="Property">feeRanges.maxValue</div>
<div class="cell" data-label="Column">maxValue</div>
<div class="cell" data-label="Arabic">أقصي قيمة</div>
<div class="cell" data-label="English">Maximum Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="feeRanges.toDate">
<div class="cell" data-label="Property">feeRanges.toDate</div>
<div class="cell" data-label="Column">toDate</div>
<div class="cell" data-label="Arabic">إلى تاريخ</div>
<div class="cell" data-label="English">To Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="feeRanges.toValue">
<div class="cell" data-label="Property">feeRanges.toValue</div>
<div class="cell" data-label="Column">toValue</div>
<div class="cell" data-label="Arabic">إلي قيمة</div>
<div class="cell" data-label="English">To Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>


</div>
</div>

