function populateChart(transactions) {
  // copy array and reverse it
  const reversed = transactions.slice().reverse();
  let sum = 0;

  // create date labels for chart
  const labels = reversed.map(t => {
    const date = new Date(t.date);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  });

  // create incremental amounts for chart
  const data = reversed.map( t => {
    if (t.category == 'in') {
      sum += parseInt(t.amount);
      
    } else {
      
      sum -= parseInt(t.amount);
    }
    return sum;
  });
  let myChart = null;

  // remove old chart if it exists
  if (myChart) {
    myChart.destroy();
  }

  const ctx = document.getElementById("my-chart").getContext("2d");

  myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "Total Over Time",
          fill: true,
          // backgroundColor: "#6666ff",
          backgroundColor: "#62c462",
          data
        }
      ]
    }
  });
}

// ref: mdn docs
fetch('/api/transaction/demo')
  .then(response => response.json())
  .then(data => populateChart(data));
