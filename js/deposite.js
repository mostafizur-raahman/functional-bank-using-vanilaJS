document.getElementById('btn-deposite').addEventListener('click', function () {
    // get data from deposite input field
    const newDepositeAmount = getInputFieldValueById('deposite-field');
    // previous deposite total
    const previousDepositeTotal = getElementValueById('deposite-total');

    // calculate new depo total
    const newDepositeTotal = previousDepositeTotal + newDepositeAmount;

    // set
    setTextElementValueById('deposite-total', newDepositeTotal);


    // total blance

    const previousBlanceTotal = getElementValueById('blance-total');
    const newBlanceTotal = previousBlanceTotal + newDepositeAmount;

    setTextElementValueById('blance-total', newBlanceTotal);

})

