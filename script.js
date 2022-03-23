window.onload = function () {
    let day = (date => {
        return Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24)
    })(new Date())

    document.getElementById("number").innerHTML = day
};