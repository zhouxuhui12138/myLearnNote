{
    let Week;
    (function (Week) {
        Week[Week["Monday"] = 1] = "Monday";
        Week[Week["Tuesday"] = 2] = "Tuesday";
        Week[Week["Wednesday"] = 3] = "Wednesday";
        Week[Week["Thursday"] = 4] = "Thursday";
        Week[Week["Friday"] = 5] = "Friday";
        Week[Week["Saturday"] = 6] = "Saturday";
        Week[Week["Sunday"] = 7] = "Sunday";
    })(Week || (Week = {}));
    const val = 1;
    if (val === Week.Monday) {
        console.log('gogogo');
    }
}
