
<div class='tableName'>


# SalaryDocument
</div>

**Arabic:** سند الراتب - سندات الرواتب
**English:** Salary Document - Salary Documents

<ContentFilter/>


<div class='searchable'>
<a href='#paidInstallments'>paidInstallments (PaidInstallmentLine) </a> , <a href='#rewardAndPenaltieLines'>rewardAndPenaltieLines (RewardPenaltyLine) </a> , <a href='#salaryDocumentLines'>salaryDocumentLines (SalaryDocumentLine) </a>
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
</div><div class="row searchable" id="analysisSet">
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

<div class="row searchable" id="blocked">
<div class="cell" data-label="Property">blocked</div>
<div class="cell" data-label="Column">blocked</div>
<div class="cell" data-label="Arabic">محجوب</div>
<div class="cell" data-label="English">Blocked</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="book">
<div class="cell" data-label="Property">book</div>
<div class="cell" data-label="Column">book_id</div>
<div class="cell" data-label="Arabic">الدفتر</div>
<div class="cell" data-label="English">Book</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DocumentBook](/modules/basic/DocumentBook.md) 
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

<div class="row searchable" id="cancelledBy">
<div class="cell" data-label="Property">cancelledBy</div>
<div class="cell" data-label="Column">cancelledBy_id</div>
<div class="cell" data-label="Arabic">ألغي بواسطة</div>
<div class="cell" data-label="English">Cancelled By</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DocumentCancelDocument](/modules/basic/DocumentCancelDocument.md) 
</div>
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

<div class="row searchable" id="currency">
<div class="cell" data-label="Property">currency</div>
<div class="cell" data-label="Column">currency_id</div>
<div class="cell" data-label="Arabic">العملة</div>
<div class="cell" data-label="English">Currency</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Currency](/modules/basic/Currency.md) 
</div>
</div>

<div class="row searchable" id="currencyRate">
<div class="cell" data-label="Property">currencyRate</div>
<div class="cell" data-label="Column">currencyRate</div>
<div class="cell" data-label="Arabic">المعدل</div>
<div class="cell" data-label="English">Currency Rate</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="currentMonthPenalties">
<div class="cell" data-label="Property">currentMonthPenalties</div>
<div class="cell" data-label="Column">currentMonthPenalties</div>
<div class="cell" data-label="Arabic">جزاءات الشهر الحالي</div>
<div class="cell" data-label="English">Current Month Penalties</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="dimensionsHistoryXml">
<div class="cell" data-label="Property">dimensionsHistoryXml</div>
<div class="cell" data-label="Column">dimensionsHistoryXml</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="doNotPayLoans">
<div class="cell" data-label="Property">doNotPayLoans</div>
<div class="cell" data-label="Column">doNotPayLoans</div>
<div class="cell" data-label="Arabic">عدم دفع السلف في السند</div>
<div class="cell" data-label="English">Do Not Pay Loans</div>
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

<div class="row searchable" id="employee">
<div class="cell" data-label="Property">employee</div>
<div class="cell" data-label="Column">employee_id</div>
<div class="cell" data-label="Arabic">الموظف</div>
<div class="cell" data-label="English">Employee</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/modules/basic/Employee.md) 
</div>
</div>

<div class="row searchable" id="employeeFiringDoc">
<div class="cell" data-label="Property">employeeFiringDoc</div>
<div class="cell" data-label="Column">employeeFiringDoc</div>
<div class="cell" data-label="Arabic">اخر سند راتب للموظف قبل انهاء الخدمة</div>
<div class="cell" data-label="English">Last Salary Doc for Employee before Firing</div>
<div class="cell" data-label="Type">Boolean</div>

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

<div class="row searchable" id="fiscalPeriod">
<div class="cell" data-label="Property">fiscalPeriod</div>
<div class="cell" data-label="Column">fiscalPeriod_id</div>
<div class="cell" data-label="Arabic">الفترة</div>
<div class="cell" data-label="English">Fiscal Period</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FiscalPeriod](/modules/basic/FiscalPeriod.md) 
</div>
</div>

<div class="row searchable" id="fiscalYear">
<div class="cell" data-label="Property">fiscalYear</div>
<div class="cell" data-label="Column">fiscalYear_id</div>
<div class="cell" data-label="Arabic">السنة المالية</div>
<div class="cell" data-label="English">Fiscal Year</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [FiscalYear](/modules/basic/FiscalYear.md) 
</div>
</div>

<div class="row searchable" id="fixedInsuranceBasisTotal">
<div class="cell" data-label="Property">fixedInsuranceBasisTotal</div>
<div class="cell" data-label="Column">fixedInsuranceBasisTotal</div>
<div class="cell" data-label="Arabic">إجمالي وعاء التأمينات الثابتة</div>
<div class="cell" data-label="English">Fixed Insurance Basis Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="fromDate">
<div class="cell" data-label="Property">fromDate</div>
<div class="cell" data-label="Column">fromDate</div>
<div class="cell" data-label="Arabic">من تاريخ</div>
<div class="cell" data-label="English">From Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="fromDoc">
<div class="cell" data-label="Property">fromDoc</div>
<div class="cell gen-ref-column" data-label="Column">fromDoc_ActualCode,  fromDoc_Code,  fromDoc_type,  fromDoc_id</div>
<div class="cell" data-label="Arabic">بناءا على</div>
<div class="cell" data-label="English">From Document</div>
<div class="cell" data-label="Type">Genericreference</div>

</div>

<div class="row searchable" id="fromDocsCount">
<div class="cell" data-label="Property">fromDocsCount</div>
<div class="cell" data-label="Column">fromDocsCount</div>
<div class="cell" data-label="Arabic">عدد سندات بناء على</div>
<div class="cell" data-label="English">From Docs Count</div>
<div class="cell" data-label="Type">Integer</div>

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

<div class="row searchable" id="hasMoreThanOneUpdate">
<div class="cell" data-label="Property">hasMoreThanOneUpdate</div>
<div class="cell" data-label="Column">hasMoreThanOneUpdate</div>
<div class="cell" data-label="Arabic">لها اكثر من سند تحديث بيانات في الفترة</div>
<div class="cell" data-label="English">Has More Than One Update Doc in Period</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="hasPV">
<div class="cell" data-label="Property">hasPV</div>
<div class="cell" data-label="Column">hasPV</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="hrCalendar">
<div class="cell" data-label="Property">hrCalendar</div>
<div class="cell" data-label="Column">hrCalendar_id</div>
<div class="cell" data-label="Arabic">تقويم الرواتب</div>
<div class="cell" data-label="English">HR Calendar</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [HRCalendar](/modules/humanresource-payroll/HRCalendar.md) 
</div>
</div>

<div class="row searchable" id="hrPeriod">
<div class="cell" data-label="Property">hrPeriod</div>
<div class="cell" data-label="Column">hrPeriod_id</div>
<div class="cell" data-label="Arabic">فترة الرواتب</div>
<div class="cell" data-label="English">HR Period</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [HRPeriod](/modules/humanresource-payroll/HRPeriod.md) 
</div>
</div>

<div class="row searchable" id="hrYear">
<div class="cell" data-label="Property">hrYear</div>
<div class="cell" data-label="Column">hrYear_id</div>
<div class="cell" data-label="Arabic">سنة الرواتب</div>
<div class="cell" data-label="English">HR Year</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [HRYear](/modules/humanresource-payroll/HRYear.md) 
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

<div class="row searchable" id="issuance">
<div class="cell" data-label="Property">issuance</div>
<div class="cell" data-label="Column">issuance_id</div>
<div class="cell" data-label="Arabic">الصرفية</div>
<div class="cell" data-label="English">Issuance</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [HRSalaryIssuance](/modules/humanresource-payroll/HRSalaryIssuance.md) 
</div>
</div>

<div class="row searchable" id="issueDate">
<div class="cell" data-label="Property">issueDate</div>
<div class="cell" data-label="Column">issueDate</div>
<div class="cell" data-label="Arabic">تاريخ التحرير</div>
<div class="cell" data-label="English">Issue Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="issuedValue">
<div class="cell" data-label="Property">issuedValue</div>
<div class="cell" data-label="Column">issuedValue</div>
<div class="cell" data-label="Arabic">ما تم صرفة</div>
<div class="cell" data-label="English">Issued Value</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="ledgerTransReqId">
<div class="cell" data-label="Property">ledgerTransReqId</div>
<div class="cell" data-label="Column">ledgerTransReqId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

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

<div class="row searchable" id="manualRef1">
<div class="cell" data-label="Property">manualRef1</div>
<div class="cell" data-label="Column">manualRef1</div>
<div class="cell" data-label="Arabic">رقم المستند اليدوي</div>
<div class="cell" data-label="English">Manual Ref1</div>
<div class="cell" data-label="Type">Text</div>

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

<div class="row searchable" id="netSalary">
<div class="cell" data-label="Property">netSalary</div>
<div class="cell" data-label="Column">netSalary</div>
<div class="cell" data-label="Arabic">المرتب النهائي</div>
<div class="cell" data-label="English">Net Salary</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="noneWorkingDays">
<div class="cell" data-label="Property">noneWorkingDays</div>
<div class="cell" data-label="Column">noneWorkingDays</div>
<div class="cell" data-label="Arabic">أيام عدم العمل</div>
<div class="cell" data-label="English">None Working Days</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="openShift">
<div class="cell" data-label="Property">openShift</div>
<div class="cell" data-label="Column">openShift_id</div>
<div class="cell" data-label="Arabic">فتح وردية</div>
<div class="cell" data-label="English">Open Shift</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [CSHOpenShift](/modules/accounting-cashier/CSHOpenShift.md) 
</div>
</div>

<div class="row searchable" id="paidVacationDays">
<div class="cell" data-label="Property">paidVacationDays</div>
<div class="cell" data-label="Column">paidVacationDays</div>
<div class="cell" data-label="Arabic">أيام أجازات مدفوعة الأجر</div>
<div class="cell" data-label="English">Paid Vacation Days</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="parentCode">
<div class="cell" data-label="Property">parentCode</div>
<div class="cell" data-label="Column">parentCode</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="partialPeriod">
<div class="cell" data-label="Property">partialPeriod</div>
<div class="cell" data-label="Column">partialPeriod</div>
<div class="cell" data-label="Arabic">فترة غير مكتملة (جزئية)</div>
<div class="cell" data-label="English">Partial Period</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="penaltiesPostponedPrevMonth">
<div class="cell" data-label="Property">penaltiesPostponedPrevMonth</div>
<div class="cell" data-label="Column">penaltiesPostponedPrevMonth</div>
<div class="cell" data-label="Arabic">الجزاءات المرحلة من الشهر السابق</div>
<div class="cell" data-label="English">Penalties Postponed From Previous Month</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="penaltiesPostponedToNextMonth">
<div class="cell" data-label="Property">penaltiesPostponedToNextMonth</div>
<div class="cell" data-label="Column">penaltiesPostponedToNextMonth</div>
<div class="cell" data-label="Arabic">الجزاءات المرحلة للشهر التالي</div>
<div class="cell" data-label="English">Penalties Postponed To Next Month</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="preventUsage">
<div class="cell" data-label="Property">preventUsage</div>
<div class="cell" data-label="Column">preventUsage</div>
<div class="cell" data-label="Arabic">منع الاستعمال</div>
<div class="cell" data-label="English">Prevent Usage</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="preventUseAsFromDoc">
<div class="cell" data-label="Property">preventUseAsFromDoc</div>
<div class="cell" data-label="Column">preventUseAsFromDoc</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="printCount">
<div class="cell" data-label="Property">printCount</div>
<div class="cell" data-label="Column">printCount</div>
<div class="cell" data-label="Arabic">عدد مرات الطباعة</div>
<div class="cell" data-label="English">Print Count</div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="purged">
<div class="cell" data-label="Property">purged</div>
<div class="cell" data-label="Column">purged</div>
<div class="cell" data-label="Arabic">Purged</div>
<div class="cell" data-label="English">Purged</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="rbook">
<div class="cell" data-label="Property">rbook</div>
<div class="cell" data-label="Column">rbook_id</div>
<div class="cell" data-label="Arabic">دفتر الايصالات</div>
<div class="cell" data-label="English">Receipt Book</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ReceiptBook](/modules/basic/ReceiptBook.md) 
</div>
</div>

<div class="row searchable" id="reason">
<div class="cell" data-label="Property">reason</div>
<div class="cell gen-ref-column" data-label="Column">reasonActualCode,  reasonCode,  reasonEntityType,  reasonId</div>
<div class="cell" data-label="Arabic">السبب</div>
<div class="cell" data-label="English">Reason</div>
<div class="cell" data-label="Type">Genericreference</div>

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

<div class="row searchable" id="remainingValue">
<div class="cell" data-label="Property">remainingValue</div>
<div class="cell" data-label="Column">remainingValue</div>
<div class="cell" data-label="Arabic">المتبقي من الراتب</div>
<div class="cell" data-label="English">Remaining Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="remarks">
<div class="cell" data-label="Property">remarks</div>
<div class="cell" data-label="Column">remark</div>
<div class="cell" data-label="Arabic">ملاحظات</div>
<div class="cell" data-label="English">Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="remarks2">
<div class="cell" data-label="Property">remarks2</div>
<div class="cell" data-label="Column">remarks2</div>
<div class="cell" data-label="Arabic">ملاحظات 2</div>
<div class="cell" data-label="English">Remarks 2</div>
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

<div class="row searchable" id="rpaper">
<div class="cell" data-label="Property">rpaper</div>
<div class="cell" data-label="Column">rpaper_id</div>
<div class="cell" data-label="Arabic">الايصال</div>
<div class="cell" data-label="English">Receipt Paper</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [ReceiptPaper](/modules/basic/ReceiptPaper.md) 
</div>
</div>

<div class="row searchable" id="salaryGenerationRange">
<div class="cell" data-label="Property">salaryGenerationRange</div>
<div class="cell" data-label="Column">salaryGenerationRange_id</div>
<div class="cell" data-label="Arabic">مجال اصدار الرواتب</div>
<div class="cell" data-label="English">Salary Generation Range</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SalaryGenerationRange](/modules/humanresource-payroll/SalaryGenerationRange.md) 
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

<div class="row searchable" id="suspensionDaysWithoutSalary">
<div class="cell" data-label="Property">suspensionDaysWithoutSalary</div>
<div class="cell" data-label="Column">suspensionDaysWithoutSalary</div>
<div class="cell" data-label="Arabic">أيام إيقاف عن العمل بدون مرتب</div>
<div class="cell" data-label="English">Suspension Days Without Salary</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="taxBasisTotal">
<div class="cell" data-label="Property">taxBasisTotal</div>
<div class="cell" data-label="Column">taxBasisTotal</div>
<div class="cell" data-label="Arabic">إجمالي وعاء الضريبة</div>
<div class="cell" data-label="English">Tax Basis Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="term">
<div class="cell" data-label="Property">term</div>
<div class="cell" data-label="Column">term_id</div>
<div class="cell" data-label="Arabic">توجيه المستند</div>
<div class="cell" data-label="English">Term</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [DocumentTerm](/modules/basic/DocumentTerm.md) 
</div>
</div>

<div class="row searchable" id="termConfigXml">
<div class="cell" data-label="Property">termConfigXml</div>
<div class="cell" data-label="Column">termConfigXml</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="toDate">
<div class="cell" data-label="Property">toDate</div>
<div class="cell" data-label="Column">toDate</div>
<div class="cell" data-label="Arabic">إلى تاريخ</div>
<div class="cell" data-label="English">To Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="totalAdditions">
<div class="cell" data-label="Property">totalAdditions</div>
<div class="cell" data-label="Column">totalAdditions</div>
<div class="cell" data-label="Arabic">إجمالي الإضافات</div>
<div class="cell" data-label="English">Total Additions</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalDeductions">
<div class="cell" data-label="Property">totalDeductions</div>
<div class="cell" data-label="Column">totalDeductions</div>
<div class="cell" data-label="Arabic">إجمالي الإستقطاعات</div>
<div class="cell" data-label="English">Total Deductions</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalOthers">
<div class="cell" data-label="Property">totalOthers</div>
<div class="cell" data-label="Column">totalOthers</div>
<div class="cell" data-label="Arabic">إجمالي الآخري</div>
<div class="cell" data-label="English">Others Total</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalPaidInstallments">
<div class="cell" data-label="Property">totalPaidInstallments</div>
<div class="cell" data-label="Column">totalPaidInstallments</div>
<div class="cell" data-label="Arabic">إجمالي الأقساط المدفوعة</div>
<div class="cell" data-label="English">Total Paid Installments</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalPenalties">
<div class="cell" data-label="Property">totalPenalties</div>
<div class="cell" data-label="Column">totalPenalties</div>
<div class="cell" data-label="Arabic">إجمالى الجزاءات</div>
<div class="cell" data-label="English">Total Penalties</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="totalRewards">
<div class="cell" data-label="Property">totalRewards</div>
<div class="cell" data-label="Column">totalRewards</div>
<div class="cell" data-label="Arabic">إجمالى المكافئات</div>
<div class="cell" data-label="English">Total Rewards</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="vacationDaysWithoutSalary">
<div class="cell" data-label="Property">vacationDaysWithoutSalary</div>
<div class="cell" data-label="Column">vacationDaysWithoutSalary</div>
<div class="cell" data-label="Arabic">أيام أجازات بدون مرتب</div>
<div class="cell" data-label="English">Vacation Days Without Salary</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="valueDate">
<div class="cell" data-label="Property">valueDate</div>
<div class="cell" data-label="Column">valueDate</div>
<div class="cell" data-label="Arabic">التاريخ الفعلي</div>
<div class="cell" data-label="English">Value Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="variableInsuranceBasisTotal">
<div class="cell" data-label="Property">variableInsuranceBasisTotal</div>
<div class="cell" data-label="Column">variableInsuranceBasisTotal</div>
<div class="cell" data-label="Arabic">إجمالي وعاء التأمينات المتغيرة</div>
<div class="cell" data-label="English">Variable Insurance Basis Total</div>
<div class="cell" data-label="Type">Decimal</div>

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

<div class="row searchable" id="workingDays">
<div class="cell" data-label="Property">workingDays</div>
<div class="cell" data-label="Column">workingDays</div>
<div class="cell" data-label="Arabic">أيام العمل</div>
<div class="cell" data-label="English">Working Days</div>
<div class="cell" data-label="Type">Decimal</div>

</div>


</div>
</div>

<div id='paidInstallments' title='paidInstallments' class='searchable'>

## paidInstallments (الأقساط المدفوعة - Paid Installments)

<div class='tableName'>

**Table Name:** PaidInstallmentLine, **Join Column:** salaryDocument_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="paidInstallments.analysisSet">
<div class="cell" data-label="Property">paidInstallments.analysisSet</div>
<div class="cell" data-label="Column">analysisSet_id</div>
<div class="cell" data-label="Arabic">المجموعة التحليلية</div>
<div class="cell" data-label="English">Analysis set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/modules/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="paidInstallments.branch">
<div class="cell" data-label="Property">paidInstallments.branch</div>
<div class="cell" data-label="Column">branch_id</div>
<div class="cell" data-label="Arabic">الفرع</div>
<div class="cell" data-label="English">Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/modules/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="paidInstallments.department">
<div class="cell" data-label="Property">paidInstallments.department</div>
<div class="cell" data-label="Column">department_id</div>
<div class="cell" data-label="Arabic">الإدارة</div>
<div class="cell" data-label="English">Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/modules/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="paidInstallments.id">
<div class="cell" data-label="Property">paidInstallments.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="paidInstallments.installmentCode">
<div class="cell" data-label="Property">paidInstallments.installmentCode</div>
<div class="cell" data-label="Column">installmentCode</div>
<div class="cell" data-label="Arabic">كود القسط</div>
<div class="cell" data-label="English">Installment Code</div>
<div class="cell" data-label="Type">Text</div>

</div>

<div class="row searchable" id="paidInstallments.issuance">
<div class="cell" data-label="Property">paidInstallments.issuance</div>
<div class="cell" data-label="Column">issuance_id</div>
<div class="cell" data-label="Arabic">الصرفية</div>
<div class="cell" data-label="English">Issuance</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [HRSalaryIssuance](/modules/humanresource-payroll/HRSalaryIssuance.md) 
</div>
</div>

<div class="row searchable" id="paidInstallments.legalEntity">
<div class="cell" data-label="Property">paidInstallments.legalEntity</div>
<div class="cell" data-label="Column">legalEntity_id</div>
<div class="cell" data-label="Arabic">الشركة</div>
<div class="cell" data-label="English">Legal Entity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [LegalEntity](/modules/basic/LegalEntity.md) 
</div>
</div>

<div class="row searchable" id="paidInstallments.lineNumber">
<div class="cell" data-label="Property">paidInstallments.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="paidInstallments.loanDocument">
<div class="cell" data-label="Property">paidInstallments.loanDocument</div>
<div class="cell" data-label="Column">loanDocument_id</div>
<div class="cell" data-label="Arabic">سند سلفة</div>
<div class="cell" data-label="English">Loan Document</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [HRLoanDocument](/modules/humanresource-payroll/HRLoanDocument.md) 
</div>
</div>

<div class="row searchable" id="paidInstallments.loanEntryId">
<div class="cell" data-label="Property">paidInstallments.loanEntryId</div>
<div class="cell" data-label="Column">loanEntryId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="paidInstallments.loanType">
<div class="cell" data-label="Property">paidInstallments.loanType</div>
<div class="cell" data-label="Column">loanType_id</div>
<div class="cell" data-label="Arabic"> نوع السلفة</div>
<div class="cell" data-label="English">Loan Type</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [HRLoanType](/modules/humanresource-payroll/HRLoanType.md) 
</div>
</div>

<div class="row searchable" id="paidInstallments.paidAmount">
<div class="cell" data-label="Property">paidInstallments.paidAmount</div>
<div class="cell" data-label="Column">paidAmount</div>
<div class="cell" data-label="Arabic">المبلغ المسدد</div>
<div class="cell" data-label="English">Paid Amount</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="paidInstallments.paymentDate">
<div class="cell" data-label="Property">paidInstallments.paymentDate</div>
<div class="cell" data-label="Column">paymentDate</div>
<div class="cell" data-label="Arabic">تاريخ الدفع</div>
<div class="cell" data-label="English">Payment Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="paidInstallments.paymentEntryId">
<div class="cell" data-label="Property">paidInstallments.paymentEntryId</div>
<div class="cell" data-label="Column">paymentEntryId</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="paidInstallments.paymentValue">
<div class="cell" data-label="Property">paidInstallments.paymentValue</div>
<div class="cell" data-label="Column">paymentValue</div>
<div class="cell" data-label="Arabic">المبلغ</div>
<div class="cell" data-label="English">Payment Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="paidInstallments.sector">
<div class="cell" data-label="Property">paidInstallments.sector</div>
<div class="cell" data-label="Column">sector_id</div>
<div class="cell" data-label="Arabic">القطاع</div>
<div class="cell" data-label="English">Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/modules/basic/Sector.md) 
</div>
</div>


</div>
</div>

<div id='rewardAndPenaltieLines' title='rewardAndPenaltieLines' class='searchable'>

## rewardAndPenaltieLines (المكافأت / الجزاءات - Rewards / Penalties)

<div class='tableName'>

**Table Name:** RewardPenaltyLine, **Join Column:** salaryDocument_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="rewardAndPenaltieLines.addition">
<div class="cell" data-label="Property">rewardAndPenaltieLines.addition</div>
<div class="cell" data-label="Column">addition</div>
<div class="cell" data-label="Arabic">إضافة</div>
<div class="cell" data-label="English">Addition</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rewardAndPenaltieLines.analysisSet">
<div class="cell" data-label="Property">rewardAndPenaltieLines.analysisSet</div>
<div class="cell" data-label="Column">analysisSet_id</div>
<div class="cell" data-label="Arabic">المجموعة التحليلية</div>
<div class="cell" data-label="English">Analysis set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/modules/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="rewardAndPenaltieLines.baseValue">
<div class="cell" data-label="Property">rewardAndPenaltieLines.baseValue</div>
<div class="cell" data-label="Column">baseValue</div>
<div class="cell" data-label="Arabic">القيمة الأصلية</div>
<div class="cell" data-label="English">Base Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rewardAndPenaltieLines.branch">
<div class="cell" data-label="Property">rewardAndPenaltieLines.branch</div>
<div class="cell" data-label="Column">branch_id</div>
<div class="cell" data-label="Arabic">الفرع</div>
<div class="cell" data-label="English">Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/modules/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="rewardAndPenaltieLines.deduction">
<div class="cell" data-label="Property">rewardAndPenaltieLines.deduction</div>
<div class="cell" data-label="Column">deduction</div>
<div class="cell" data-label="Arabic">إستقطاع</div>
<div class="cell" data-label="English">Deduction</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rewardAndPenaltieLines.department">
<div class="cell" data-label="Property">rewardAndPenaltieLines.department</div>
<div class="cell" data-label="Column">department_id</div>
<div class="cell" data-label="Arabic">الإدارة</div>
<div class="cell" data-label="English">Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/modules/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="rewardAndPenaltieLines.effectType">
<div class="cell" data-label="Property">rewardAndPenaltieLines.effectType</div>
<div class="cell" data-label="Column">effectType</div>
<div class="cell" data-label="Arabic">نوع التأثير</div>
<div class="cell" data-label="English">Component Effect Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="rewardAndPenaltieLines.empWorkPlace">
<div class="cell" data-label="Property">rewardAndPenaltieLines.empWorkPlace</div>
<div class="cell" data-label="Column">empWorkPlace_id</div>
<div class="cell" data-label="Arabic">مكان العمل الحالي</div>
<div class="cell" data-label="English">Current Work Place</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [EmpWorkPlace](/modules/basic/EmpWorkPlace.md) 
</div>
</div>

<div class="row searchable" id="rewardAndPenaltieLines.employee">
<div class="cell" data-label="Property">rewardAndPenaltieLines.employee</div>
<div class="cell" data-label="Column">employee_id</div>
<div class="cell" data-label="Arabic">الموظف</div>
<div class="cell" data-label="English">Employee</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/modules/basic/Employee.md) 
</div>
</div>

<div class="row searchable" id="rewardAndPenaltieLines.id">
<div class="cell" data-label="Property">rewardAndPenaltieLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="rewardAndPenaltieLines.indicatorValue">
<div class="cell" data-label="Property">rewardAndPenaltieLines.indicatorValue</div>
<div class="cell" data-label="Column">indicatorValue</div>
<div class="cell" data-label="Arabic">قيمة مؤشر الأداء</div>
<div class="cell" data-label="English">Indicator Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rewardAndPenaltieLines.issuance">
<div class="cell" data-label="Property">rewardAndPenaltieLines.issuance</div>
<div class="cell" data-label="Column">issuance_id</div>
<div class="cell" data-label="Arabic">الصرفية</div>
<div class="cell" data-label="English">Issuance</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [HRSalaryIssuance](/modules/humanresource-payroll/HRSalaryIssuance.md) 
</div>
</div>

<div class="row searchable" id="rewardAndPenaltieLines.legalEntity">
<div class="cell" data-label="Property">rewardAndPenaltieLines.legalEntity</div>
<div class="cell" data-label="Column">legalEntity_id</div>
<div class="cell" data-label="Arabic">الشركة</div>
<div class="cell" data-label="English">Legal Entity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [LegalEntity](/modules/basic/LegalEntity.md) 
</div>
</div>

<div class="row searchable" id="rewardAndPenaltieLines.lineNumber">
<div class="cell" data-label="Property">rewardAndPenaltieLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="rewardAndPenaltieLines.originalValue">
<div class="cell" data-label="Property">rewardAndPenaltieLines.originalValue</div>
<div class="cell" data-label="Column">originalValue</div>
<div class="cell" data-label="Arabic">قيمة القسط الأصلية</div>
<div class="cell" data-label="English">Original Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rewardAndPenaltieLines.other">
<div class="cell" data-label="Property">rewardAndPenaltieLines.other</div>
<div class="cell" data-label="Column">other</div>
<div class="cell" data-label="Arabic">آخري</div>
<div class="cell" data-label="English">other</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="rewardAndPenaltieLines.remarks">
<div class="cell" data-label="Property">rewardAndPenaltieLines.remarks</div>
<div class="cell" data-label="Column">remarks</div>
<div class="cell" data-label="Arabic">ملاحظات</div>
<div class="cell" data-label="English">Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="rewardAndPenaltieLines.rewardAndPenalty">
<div class="cell" data-label="Property">rewardAndPenaltieLines.rewardAndPenalty</div>
<div class="cell" data-label="Column">rewardAndPenalty_id</div>
<div class="cell" data-label="Arabic"> نوع مكافأة / جزاء</div>
<div class="cell" data-label="English"> Reward / Penalty</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [RewardAndPenalty](/modules/humanresource-payroll/RewardAndPenalty.md) 
</div>
</div>

<div class="row searchable" id="rewardAndPenaltieLines.sector">
<div class="cell" data-label="Property">rewardAndPenaltieLines.sector</div>
<div class="cell" data-label="Column">sector_id</div>
<div class="cell" data-label="Arabic">القطاع</div>
<div class="cell" data-label="English">Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/modules/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="rewardAndPenaltieLines.valueDate">
<div class="cell" data-label="Property">rewardAndPenaltieLines.valueDate</div>
<div class="cell" data-label="Column">valueDate</div>
<div class="cell" data-label="Arabic">التاريخ الفعلي</div>
<div class="cell" data-label="English">Value Date</div>
<div class="cell" data-label="Type">Date</div>

</div>


</div>
</div>

<div id='salaryDocumentLines' title='salaryDocumentLines' class='searchable'>

## salaryDocumentLines (المفردات - salary Document Lines)

<div class='tableName'>

**Table Name:** SalaryDocumentLine, **Join Column:** salaryDocument_id

</div>

<div class="nama-table">
<div class="row header-row">
<div class="cell">Property</div>
<div class="cell">Column</div>
<div class="cell">Arabic</div>
<div class="cell">English</div>
<div class="cell">Type</div>
<div class="cell">Foreign Table</div>
</div><div class="row searchable" id="salaryDocumentLines.addition">
<div class="cell" data-label="Property">salaryDocumentLines.addition</div>
<div class="cell" data-label="Column">addition</div>
<div class="cell" data-label="Arabic">إضافة</div>
<div class="cell" data-label="English">Addition</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="salaryDocumentLines.analysisSet">
<div class="cell" data-label="Property">salaryDocumentLines.analysisSet</div>
<div class="cell" data-label="Column">analysisSet_id</div>
<div class="cell" data-label="Arabic">المجموعة التحليلية</div>
<div class="cell" data-label="English">Analysis set</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [AnalysisSet](/modules/basic/AnalysisSet.md) 
</div>
</div>

<div class="row searchable" id="salaryDocumentLines.baseValue">
<div class="cell" data-label="Property">salaryDocumentLines.baseValue</div>
<div class="cell" data-label="Column">baseValue</div>
<div class="cell" data-label="Arabic">القيمة الأصلية | القيمة</div>
<div class="cell" data-label="English">Base Value | Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="salaryDocumentLines.branch">
<div class="cell" data-label="Property">salaryDocumentLines.branch</div>
<div class="cell" data-label="Column">branch_id</div>
<div class="cell" data-label="Arabic">الفرع</div>
<div class="cell" data-label="English">Branch</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Branch](/modules/basic/Branch.md) 
</div>
</div>

<div class="row searchable" id="salaryDocumentLines.component">
<div class="cell" data-label="Property">salaryDocumentLines.component</div>
<div class="cell" data-label="Column">component_id</div>
<div class="cell" data-label="Arabic">المفرد</div>
<div class="cell" data-label="English">Component</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [SalaryComponent](/modules/humanresource-payroll/SalaryComponent.md) 
</div>
</div>

<div class="row searchable" id="salaryDocumentLines.deduction">
<div class="cell" data-label="Property">salaryDocumentLines.deduction</div>
<div class="cell" data-label="Column">deduction</div>
<div class="cell" data-label="Arabic">إستقطاع</div>
<div class="cell" data-label="English">Deduction</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="salaryDocumentLines.department">
<div class="cell" data-label="Property">salaryDocumentLines.department</div>
<div class="cell" data-label="Column">department_id</div>
<div class="cell" data-label="Arabic">الإدارة</div>
<div class="cell" data-label="English">Department</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Department](/modules/basic/Department.md) 
</div>
</div>

<div class="row searchable" id="salaryDocumentLines.doNotChangeValueWithRegen">
<div class="cell" data-label="Property">salaryDocumentLines.doNotChangeValueWithRegen</div>
<div class="cell" data-label="Column">doNotChangeValueWithRegen</div>
<div class="cell" data-label="Arabic">عدم تعديل القيمة مع إعادة الإصدار</div>
<div class="cell" data-label="English">Do Not Change Value With Regenerate</div>
<div class="cell" data-label="Type">Boolean</div>

</div>

<div class="row searchable" id="salaryDocumentLines.effectType">
<div class="cell" data-label="Property">salaryDocumentLines.effectType</div>
<div class="cell" data-label="Column">effectType</div>
<div class="cell" data-label="Arabic">القيمة الأصلية | نوع التأثير</div>
<div class="cell" data-label="English">Base Value | Effect Type</div>
<div class="cell" data-label="Type">Enum</div>

</div>

<div class="row searchable" id="salaryDocumentLines.empWorkPlace">
<div class="cell" data-label="Property">salaryDocumentLines.empWorkPlace</div>
<div class="cell" data-label="Column">empWorkPlace_id</div>
<div class="cell" data-label="Arabic">مكان العمل الحالي</div>
<div class="cell" data-label="English">Current Work Place</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [EmpWorkPlace](/modules/basic/EmpWorkPlace.md) 
</div>
</div>

<div class="row searchable" id="salaryDocumentLines.employee">
<div class="cell" data-label="Property">salaryDocumentLines.employee</div>
<div class="cell" data-label="Column">employee_id</div>
<div class="cell" data-label="Arabic">الموظف</div>
<div class="cell" data-label="English">Employee</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Employee](/modules/basic/Employee.md) 
</div>
</div>

<div class="row searchable" id="salaryDocumentLines.fromDate">
<div class="cell" data-label="Property">salaryDocumentLines.fromDate</div>
<div class="cell" data-label="Column">fromDate</div>
<div class="cell" data-label="Arabic">من تاريخ</div>
<div class="cell" data-label="English">From Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="salaryDocumentLines.id">
<div class="cell" data-label="Property">salaryDocumentLines.id</div>
<div class="cell" data-label="Column">id</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">ID</div>

</div>

<div class="row searchable" id="salaryDocumentLines.indicatorValue">
<div class="cell" data-label="Property">salaryDocumentLines.indicatorValue</div>
<div class="cell" data-label="Column">indicatorValue</div>
<div class="cell" data-label="Arabic">قيمة مؤشر الأداء</div>
<div class="cell" data-label="English">Indicator Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="salaryDocumentLines.issuance">
<div class="cell" data-label="Property">salaryDocumentLines.issuance</div>
<div class="cell" data-label="Column">issuance_id</div>
<div class="cell" data-label="Arabic">الصرفية</div>
<div class="cell" data-label="English">Issuance</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [HRSalaryIssuance](/modules/humanresource-payroll/HRSalaryIssuance.md) 
</div>
</div>

<div class="row searchable" id="salaryDocumentLines.legalEntity">
<div class="cell" data-label="Property">salaryDocumentLines.legalEntity</div>
<div class="cell" data-label="Column">legalEntity_id</div>
<div class="cell" data-label="Arabic">الشركة</div>
<div class="cell" data-label="English">Legal Entity</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [LegalEntity](/modules/basic/LegalEntity.md) 
</div>
</div>

<div class="row searchable" id="salaryDocumentLines.lineNumber">
<div class="cell" data-label="Property">salaryDocumentLines.lineNumber</div>
<div class="cell" data-label="Column">lineNumber</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Integer</div>

</div>

<div class="row searchable" id="salaryDocumentLines.nonVacationDaysRestDays">
<div class="cell" data-label="Property">salaryDocumentLines.nonVacationDaysRestDays</div>
<div class="cell" data-label="Column">nonVacationDaysRestDays</div>
<div class="cell" data-label="Arabic">Non Vacation Days Rest Days</div>
<div class="cell" data-label="English">Non Vacation Days Rest Days</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="salaryDocumentLines.nonVacationDaysWeekEnd">
<div class="cell" data-label="Property">salaryDocumentLines.nonVacationDaysWeekEnd</div>
<div class="cell" data-label="Column">nonVacationDaysWeekEnd</div>
<div class="cell" data-label="Arabic">Non Vacation Days WeekEnd</div>
<div class="cell" data-label="English">Non Vacation Days WeekEnd</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="salaryDocumentLines.nonWorkDaysRestDays">
<div class="cell" data-label="Property">salaryDocumentLines.nonWorkDaysRestDays</div>
<div class="cell" data-label="Column">nonWorkDaysRestDays</div>
<div class="cell" data-label="Arabic">Non Work Days Rest Days</div>
<div class="cell" data-label="English">Non Work Days Rest Days</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="salaryDocumentLines.nonWorkDaysWeekEnd">
<div class="cell" data-label="Property">salaryDocumentLines.nonWorkDaysWeekEnd</div>
<div class="cell" data-label="Column">nonWorkDaysWeekEnd</div>
<div class="cell" data-label="Arabic">Non Work Days Week End</div>
<div class="cell" data-label="English">Non Work Days Week End</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="salaryDocumentLines.originalValue">
<div class="cell" data-label="Property">salaryDocumentLines.originalValue</div>
<div class="cell" data-label="Column">originalValue</div>
<div class="cell" data-label="Arabic">قيمة القسط الأصلية</div>
<div class="cell" data-label="English">Original Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="salaryDocumentLines.other">
<div class="cell" data-label="Property">salaryDocumentLines.other</div>
<div class="cell" data-label="Column">other</div>
<div class="cell" data-label="Arabic">آخري</div>
<div class="cell" data-label="English">other</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="salaryDocumentLines.remarks">
<div class="cell" data-label="Property">salaryDocumentLines.remarks</div>
<div class="cell" data-label="Column">remarks</div>
<div class="cell" data-label="Arabic">ملاحظات</div>
<div class="cell" data-label="English">Description</div>
<div class="cell" data-label="Type">BigText</div>

</div>

<div class="row searchable" id="salaryDocumentLines.sector">
<div class="cell" data-label="Property">salaryDocumentLines.sector</div>
<div class="cell" data-label="Column">sector_id</div>
<div class="cell" data-label="Arabic">القطاع</div>
<div class="cell" data-label="English">Sector</div>
<div class="cell" data-label="Type">Reference</div>
<div class="cell" data-label="Foreign Table">

 [Sector](/modules/basic/Sector.md) 
</div>
</div>

<div class="row searchable" id="salaryDocumentLines.suspensionDays">
<div class="cell" data-label="Property">salaryDocumentLines.suspensionDays</div>
<div class="cell" data-label="Column">suspensionDays</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="salaryDocumentLines.toDate">
<div class="cell" data-label="Property">salaryDocumentLines.toDate</div>
<div class="cell" data-label="Column">toDate</div>
<div class="cell" data-label="Arabic">إلى تاريخ</div>
<div class="cell" data-label="English">To Date</div>
<div class="cell" data-label="Type">Date</div>

</div>

<div class="row searchable" id="salaryDocumentLines.vacationDays">
<div class="cell" data-label="Property">salaryDocumentLines.vacationDays</div>
<div class="cell" data-label="Column">vacationDays</div>
<div class="cell" data-label="Arabic"></div>
<div class="cell" data-label="English"></div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="salaryDocumentLines.vacationDaysDeductionValue">
<div class="cell" data-label="Property">salaryDocumentLines.vacationDaysDeductionValue</div>
<div class="cell" data-label="Column">vacationDaysDeductionValue</div>
<div class="cell" data-label="Arabic">قيمة استقطاع أيام الإجازة</div>
<div class="cell" data-label="English">Vacation Days Deduction Value</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="salaryDocumentLines.vacationDaysRestDays">
<div class="cell" data-label="Property">salaryDocumentLines.vacationDaysRestDays</div>
<div class="cell" data-label="Column">vacationDaysRestDays</div>
<div class="cell" data-label="Arabic">Vacation Days Rest Days</div>
<div class="cell" data-label="English">Vacation Days Rest Days</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="salaryDocumentLines.vacationDaysWeekEnd">
<div class="cell" data-label="Property">salaryDocumentLines.vacationDaysWeekEnd</div>
<div class="cell" data-label="Column">vacationDaysWeekEnd</div>
<div class="cell" data-label="Arabic">Vacation Days WeekEnd</div>
<div class="cell" data-label="English">Vacation Days WeekEnd</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="salaryDocumentLines.workDaysRestDays">
<div class="cell" data-label="Property">salaryDocumentLines.workDaysRestDays</div>
<div class="cell" data-label="Column">workDaysRestDays</div>
<div class="cell" data-label="Arabic">Work Days Rest Days</div>
<div class="cell" data-label="English">Work Days Rest Days</div>
<div class="cell" data-label="Type">Decimal</div>

</div>

<div class="row searchable" id="salaryDocumentLines.workDaysWeekEnd">
<div class="cell" data-label="Property">salaryDocumentLines.workDaysWeekEnd</div>
<div class="cell" data-label="Column">workDaysWeekEnd</div>
<div class="cell" data-label="Arabic">Work Days Week End</div>
<div class="cell" data-label="English">Work Days Week End</div>
<div class="cell" data-label="Type">Decimal</div>

</div>


</div>
</div>

