//chart overview
const labels = ['January', 'February', 'March', 'April', 'May', 'June']
const data = [0, 25, 37, 31, 49, 53]

new Chart('myChart', {
    type: 'line',
    data:{
        labels: labels,
        datasets:[{
            backgroundColor: '#E3F4F4',
            borderColor: 'blue',
            data: data,
            fill: false
        }]
    },
    options: {
        legend: {display: false},
    }
})

// const data = {
//     labels: labels,
//     datasets:[
//         {
//             label: 'Doanh thu',
//             backgroundColor: '#E3F4F4',
//             fill: 'false',
//             borderColor: 'blue', 
            // data: [0, 25, 37, 31, 50, 53],
//         },
//     ],
// }

// const config = {
//     type: 'line', 
//     data: data,
// }
// const canvas = document.getElementById('canvas')
// const chart = new Chart(canvas, config)

//chart product
const category = ['T-shirt', 'Jean', 'Shoes', 'Jacket', 'Shuite']
const quantity = [65, 59, 80, 81, 56]
const barColors = ['rgba(255, 99, 132, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 205, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)']

new Chart('chartProduct', {
    type: 'horizontalBar',
    data: {
        labels: category,
        datasets: [
            {
                backgroundColor: barColors,
                data: quantity
            }
        ]
    }, 
    options: {
        legend: {display: false},
    }
})
