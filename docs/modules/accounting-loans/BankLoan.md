# BankLoan
**Arabic:** قرض بنكي - قروض بنكية
**English:** Bank Loan - Bank Loans

<ContentFilter/>


<div class='searchable'>
<a href='#installments'>installments (BankLoanInstallmentLine) </a> , <a href='#interests'>interests (BankLoanInterestLine) </a>
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
</div><div class="row searchable" id="adjustLastInterest">
<div class="cell" data-label="Property">adjustLastInterest</div>
<div class="cell" data-label="Column">adjustLastInterest</div>
<div class="cell" data-label="Arabic">التعديل في قيمة أخر فائدة إن وجد</div>
<div class="cell" data-label="English">Adjust Last Interest If Needed</div>
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

<div class="row searchable" id="attachment1">
<div class="cell" data-label="Property">attachment1</div>
<div class="cell" data-label="Column">attachment1_id</div>
<div class="cell" data-label="Arabic">مرفق 1</div>
<div class="cell" data-label="English">Attachment 1</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/modules/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="attachment2">
<div class="cell" data-label="Property">attachment2</div>
<div class="cell" data-label="Column">attachment2_id</div>
<div class="cell" data-label="Arabic">مرفق 2</div>
<div class="cell" data-label="English">Attachment 2</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/modules/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="attachment3">
<div class="cell" data-label="Property">attachment3</div>
<div class="cell" data-label="Column">attachment3_id</div>
<div class="cell" data-label="Arabic">مرفق 3</div>
<div class="cell" data-label="English">Attachment 3</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/modules/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="attachment4">
<div class="cell" data-label="Property">attachment4</div>
<div class="cell" data-label="Column">attachment4_id</div>
<div class="cell" data-label="Arabic">مرفق 4</div>
<div class="cell" data-label="English">Attachment 4</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/modules/system-tables/LargeData.md) 
</div>
</div>

<div class="row searchable" id="attachment5">
<div class="cell" data-label="Property">attachment5</div>
<div class="cell" data-label="Column">attachment5_id</div>
<div class="cell" data-label="Arabic">مرفق 5</div>
<div class="cell" data-label="English">Attachment 5</div>
<div class="cell" data-label="Type">Binary</div>
<div class="cell" data-label="Foreign Table">

 [LargeData](/modules/system-tables/LargeData.md) 
</div>
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

<div class="row searchable" id="bankLoanRequest">
<div class="cell" data-label="Property">bankLoanRequest</div>
<div class="cell" data-label="Column">bankLoanRequest_id</div>
<div class="cell" data-label="Arabic">طلب القرض</div>
<div class="cell" data-label="English">Bank Loan Request</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [BankLoanRequest](/modules/accounting-loans/BankLoanRequest.md) 
</div>
</div>

<div class="row searchable" id="bankLoanType">
<div class="cell" data-label="Property">bankLoanType</div>
<div class="cell" data-label="Column">bankLoanType_id</div>
<div class="cell" data-label="Arabic"> نوع القرض</div>
<div class="cell" data-label="English"> Bank Loan Type</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [BankLoanType](/modules/accounting-loans/BankLoanType.md) 
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

<div class="row searchable" id="calcInterestsFromValue">
<div class="cell" data-label="Property">calcInterestsFromValue</div>
<div class="cell" data-label="Column">calcInterestsFromValue</div>
<div class="cell" data-label="Arabic">حساب الفوائد بناءا على القيمة وليس النسبة</div>
<div class="cell" data-label="English">Calculate Interests From Value</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="calcInterestsOnceAtEnd">
<div class="cell" data-label="Property">calcInterestsOnceAtEnd</div>
<div class="cell" data-label="Column">calcInterestsOnceAtEnd</div>
<div class="cell" data-label="Arabic">تحسب الفوائد مرة واحدة في نهاية الفترة</div>
<div class="cell" data-label="English">Calc Interests Once At End Of Period</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="calculatedPer.uom">
<div class="cell" data-label="Property">calculatedPer.uom</div>
<div class="cell" data-label="Column">calculatedPerUom</div>
<div class="cell" data-label="Arabic">الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="calculatedPer.value">
<div class="cell" data-label="Property">calculatedPer.value</div>
<div class="cell" data-label="Column">calculatedPerValue</div>
<div class="cell" data-label="Arabic">القيمة</div>
<div class="cell" data-label="English">Value</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="feesValue">
<div class="cell" data-label="Property">feesValue</div>
<div class="cell" data-label="Column">feesValue</div>
<div class="cell" data-label="Arabic">قيمة الرسوم</div>
<div class="cell" data-label="English">Fees Value</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="fromDate">
<div class="cell" data-label="Property">fromDate</div>
<div class="cell" data-label="Column">fromDate</div>
<div class="cell" data-label="Arabic">يبدأ في</div>
<div class="cell" data-label="English">Start In</div>
<div class="cell" data-label="Type">Date</div>

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

<div class="row searchable" id="indexInParent">
<div class="cell" data-label="Property">indexInParent</div>
<div class="cell" data-label="Column">indexInParent</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="installmentValue">
<div class="cell" data-label="Property">installmentValue</div>
<div class="cell" data-label="Column">installmentValue</div>
<div class="cell" data-label="Arabic">قيمة القسط</div>
<div class="cell" data-label="English">Installment Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="installmentsCount">
<div class="cell" data-label="Property">installmentsCount</div>
<div class="cell" data-label="Column">installmentsCount</div>
<div class="cell" data-label="Arabic">عدد الأقساط</div>
<div class="cell" data-label="English">Installments Count</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="installmentsStartIn">
<div class="cell" data-label="Property">installmentsStartIn</div>
<div class="cell" data-label="Column">installmentsStartIn</div>
<div class="cell" data-label="Arabic">الأقساط تبدأ من</div>
<div class="cell" data-label="English">Installments Start In</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="installmentsTemplate">
<div class="cell" data-label="Property">installmentsTemplate</div>
<div class="cell" data-label="Column">installmentsTemplate_id</div>
<div class="cell" data-label="Arabic">نموذج جدولة ألأقساط</div>
<div class="cell" data-label="English">Installments Template</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [PaymentScheduleTemplate](/modules/basic/PaymentScheduleTemplate.md) 
</div>
</div>

<div class="row searchable" id="interestStartSameAsFromDate">
<div class="cell" data-label="Property">interestStartSameAsFromDate</div>
<div class="cell" data-label="Column">interestStartSameAsFromDate</div>
<div class="cell" data-label="Arabic">تاريخ بداية الفوائد هو نفس تاريخ بداية القرض</div>
<div class="cell" data-label="English">Interests Start Date Same As Loan Start Date</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="interestType">
<div class="cell" data-label="Property">interestType</div>
<div class="cell" data-label="Column">interestType</div>
<div class="cell" data-label="Arabic">نوع الفائدة</div>
<div class="cell" data-label="English">Interest Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="interestValue">
<div class="cell" data-label="Property">interestValue</div>
<div class="cell" data-label="Column">interestValue</div>
<div class="cell" data-label="Arabic"> قيمة الفوائد</div>
<div class="cell" data-label="English"> Interest Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="interestsCalculatedPer.uom">
<div class="cell" data-label="Property">interestsCalculatedPer.uom</div>
<div class="cell" data-label="Column">interestsCalculatedPerUom</div>
<div class="cell" data-label="Arabic">الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="interestsCalculatedPer.value">
<div class="cell" data-label="Property">interestsCalculatedPer.value</div>
<div class="cell" data-label="Column">interestsCalculatedPerValue</div>
<div class="cell" data-label="Arabic">القيمة</div>
<div class="cell" data-label="English">Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="interestsPaymentPer.uom">
<div class="cell" data-label="Property">interestsPaymentPer.uom</div>
<div class="cell" data-label="Column">interestsPaymentPerUom</div>
<div class="cell" data-label="Arabic">الوحدة</div>
<div class="cell" data-label="English">Unit</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="interestsPaymentPer.value">
<div class="cell" data-label="Property">interestsPaymentPer.value</div>
<div class="cell" data-label="Column">interestsPaymentPerValue</div>
<div class="cell" data-label="Arabic">القيمة</div>
<div class="cell" data-label="English">Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="interestsPercent">
<div class="cell" data-label="Property">interestsPercent</div>
<div class="cell" data-label="Column">interestsPercent</div>
<div class="cell" data-label="Arabic">نسبة الفائدة السنوية</div>
<div class="cell" data-label="English">Yearly Interests Percent</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="interestsStartIn">
<div class="cell" data-label="Property">interestsStartIn</div>
<div class="cell" data-label="Column">interestsStartIn</div>
<div class="cell" data-label="Arabic">الفوائد تبدأ من</div>
<div class="cell" data-label="English">Interests Start In</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="interestsTemplate">
<div class="cell" data-label="Property">interestsTemplate</div>
<div class="cell" data-label="Column">interestsTemplate_id</div>
<div class="cell" data-label="Arabic">نموذج جدولة الفوائد</div>
<div class="cell" data-label="English">Interests Template</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [PaymentScheduleTemplate](/modules/basic/PaymentScheduleTemplate.md) 
</div>
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

<div class="row searchable" id="lateDays">
<div class="cell" data-label="Property">lateDays</div>
<div class="cell" data-label="Column">lateDays</div>
<div class="cell" data-label="Arabic">أيام التأخير</div>
<div class="cell" data-label="English">Late Days</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="lateFinePercent">
<div class="cell" data-label="Property">lateFinePercent</div>
<div class="cell" data-label="Column">lateFinePercent</div>
<div class="cell" data-label="Arabic">نسبة غرامة التأخير</div>
<div class="cell" data-label="English">Late Fine Percent</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="loanValue">
<div class="cell" data-label="Property">loanValue</div>
<div class="cell" data-label="Column">loanValue</div>
<div class="cell" data-label="Arabic">قيمة القرض</div>
<div class="cell" data-label="English">Loan Value</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="status">
<div class="cell" data-label="Property">status</div>
<div class="cell" data-label="Column">status</div>
<div class="cell" data-label="Arabic">الحالة</div>
<div class="cell" data-label="English">Status</div>
<div class="cell" data-label="Type">Enum</div>

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

<div class="row searchable" id="toDate">
<div class="cell" data-label="Property">toDate</div>
<div class="cell" data-label="Column">toDate</div>
<div class="cell" data-label="Arabic">ينتهي في</div>
<div class="cell" data-label="English">End In</div>
<div class="cell" data-label="Type">Date</div>

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

<div id='installments' title='installments' class='searchable'>

## installments (الاقساط - Installments)
**Table Name:** BankLoanInstallmentLine, **Join Column:** bankLoan_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="installments.bankAccount">
<div class="cell" data-label="Property">installments.bankAccount</div>
<div class="cell" data-label="Column">bankAccount_id</div>
<div class="cell" data-label="Arabic">رقم حساب البنك</div>
<div class="cell" data-label="English">Bank account</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [BankAccount](/modules/accounting-banks/BankAccount.md) 
</div>
</div>

<div class="row searchable" id="installments.bankLoan">
<div class="cell" data-label="Property">installments.bankLoan</div>
<div class="cell" data-label="Column">bankLoan_id</div>
<div class="cell" data-label="Arabic">القرض البنكي</div>
<div class="cell" data-label="English"> Bank Loan</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [BankLoan](/modules/accounting-loans/BankLoan.md) 
</div>
</div>

<div class="row searchable" id="installments.code">
<div class="cell" data-label="Property">installments.code</div>
<div class="cell" data-label="Column">code</div>
<div class="cell" data-label="Arabic">الكود</div>
<div class="cell" data-label="English">Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="installments.id">
<div class="cell" data-label="Property">installments.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="installments.installmentValue">
<div class="cell" data-label="Property">installments.installmentValue</div>
<div class="cell" data-label="Column">installmentValue</div>
<div class="cell" data-label="Arabic">قيمة القسط</div>
<div class="cell" data-label="English">Installment Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="installments.lateFineValue">
<div class="cell" data-label="Property">installments.lateFineValue</div>
<div class="cell" data-label="Column">lateFineValue</div>
<div class="cell" data-label="Arabic">قيمة غرامة التأخير</div>
<div class="cell" data-label="English">Late Fine Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="installments.lineNumber">
<div class="cell" data-label="Property">installments.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="installments.paid">
<div class="cell" data-label="Property">installments.paid</div>
<div class="cell" data-label="Column">paid</div>
<div class="cell" data-label="Arabic">القيمة المدفوعة</div>
<div class="cell" data-label="English">Paid</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="installments.paidAmount">
<div class="cell" data-label="Property">installments.paidAmount</div>
<div class="cell" data-label="Column">paidAmount</div>
<div class="cell" data-label="Arabic">المبلغ المسدد</div>
<div class="cell" data-label="English">Paid Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="installments.paymentDate">
<div class="cell" data-label="Property">installments.paymentDate</div>
<div class="cell" data-label="Column">paymentDate</div>
<div class="cell" data-label="Arabic">تاريخ الدفع</div>
<div class="cell" data-label="English">Payment Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="installments.remaining">
<div class="cell" data-label="Property">installments.remaining</div>
<div class="cell" data-label="Column">remaining</div>
<div class="cell" data-label="Arabic">المتبقي</div>
<div class="cell" data-label="English">Remaining</div>
<div class="cell" data-label="Type">Decimal</div>

</div>


</div>
</div>

<div id='interests' title='interests' class='searchable'>

## interests (الفوائد - Interests)
**Table Name:** BankLoanInterestLine, **Join Column:** bankLoan_id
<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="interests.bankAccount">
<div class="cell" data-label="Property">interests.bankAccount</div>
<div class="cell" data-label="Column">bankAccount_id</div>
<div class="cell" data-label="Arabic">رقم حساب البنك</div>
<div class="cell" data-label="English">Bank account</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [BankAccount](/modules/accounting-banks/BankAccount.md) 
</div>
</div>

<div class="row searchable" id="interests.bankLoan">
<div class="cell" data-label="Property">interests.bankLoan</div>
<div class="cell" data-label="Column">bankLoan_id</div>
<div class="cell" data-label="Arabic">القرض البنكي</div>
<div class="cell" data-label="English"> Bank Loan</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [BankLoan](/modules/accounting-loans/BankLoan.md) 
</div>
</div>

<div class="row searchable" id="interests.currency">
<div class="cell" data-label="Property">interests.currency</div>
<div class="cell" data-label="Column">currency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/modules/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="interests.id">
<div class="cell" data-label="Property">interests.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="interests.interestValue">
<div class="cell" data-label="Property">interests.interestValue</div>
<div class="cell" data-label="Column">interestValue</div>
<div class="cell" data-label="Arabic">قيمة الفائدة</div>
<div class="cell" data-label="English">Interest Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="interests.lineNumber">
<div class="cell" data-label="Property">interests.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="interests.paid">
<div class="cell" data-label="Property">interests.paid</div>
<div class="cell" data-label="Column">paid</div>
<div class="cell" data-label="Arabic">القيمة المدفوعة</div>
<div class="cell" data-label="English">Paid</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="interests.paidAmount">
<div class="cell" data-label="Property">interests.paidAmount</div>
<div class="cell" data-label="Column">paidAmount</div>
<div class="cell" data-label="Arabic">المبلغ المسدد</div>
<div class="cell" data-label="English">Paid Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="interests.paymentDate">
<div class="cell" data-label="Property">interests.paymentDate</div>
<div class="cell" data-label="Column">paymentDate</div>
<div class="cell" data-label="Arabic">تاريخ الدفع</div>
<div class="cell" data-label="English">Payment Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="interests.processedDocId">
<div class="cell" data-label="Property">interests.processedDocId</div>
<div class="cell" data-label="Column">processedDocId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="interests.rate">
<div class="cell" data-label="Property">interests.rate</div>
<div class="cell" data-label="Column">rate</div>
<div class="cell" data-label="Arabic">المعدل</div>
<div class="cell" data-label="English">Rate</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="interests.remaining">
<div class="cell" data-label="Property">interests.remaining</div>
<div class="cell" data-label="Column">remaining</div>
<div class="cell" data-label="Arabic">المتبقي</div>
<div class="cell" data-label="English">Remaining</div>
<div class="cell" data-label="Type">Decimal</div>

</div>


</div>
</div>

