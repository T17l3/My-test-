// ข้อมูลตัวอย่างสำหรับกราฟ
const ageData = {
    labels: ['0-10', '11-20', '21-30', '31-40', '41-50'],
    datasets: [{
      label: 'จำนวนสมาชิก',
      data: [10, 20, 30, 40, 50],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1
    }]
  };
  
  // การสร้างกราฟแสดงจำนวนสมาชิกตามอายุ
  const ageChartCanvas = document.getElementById('ageChart').getContext('2d');
  const ageChart = new Chart(ageChartCanvas, {
    type: 'bar',
    data: ageData,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  
  // การสร้างรายงานรายจำนวนสมาชิกตามอายุ
  const ageReportCanvas = document.getElementById('ageReport').getContext('2d');
  const ageReport = new Chart(ageReportCanvas, {
    type: 'pie',
    data: ageData
  });
  