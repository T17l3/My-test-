document.getElementById("transactionForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const prefix = document.getElementById("prefix").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
  
    const transactionList = document.getElementById("transaction-list");
    const newTransactionItem = document.createElement("div");
    newTransactionItem.classList.add("transaction-item");
    newTransactionItem.innerHTML = `
      <p>${prefix} ${firstName} ${lastName}</p>
      <p>วันเดือนปีเกิด: ${dob}</p>
    `;
    transactionList.appendChild(newTransactionItem);
  
    // ล้างฟอร์มหลังจากบันทึกข้อมูล
    document.getElementById("prefix").value = "";
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("dob").value = "";
  });
  