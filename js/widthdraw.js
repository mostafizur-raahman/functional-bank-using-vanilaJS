document.getElementById('btn-widthdraw').addEventListener('click', function () {


    const newWidthdrawAmount = getInputFieldValueById('widthdraw-field');
    const previousWidthdrawTotal = getElementValueById('widthdraw-total');
    const newWidthdrawTotal = previousWidthdrawTotal + newWidthdrawAmount;


    setTextElementValueById('widthdraw-total', newWidthdrawTotal);


    const previousBlanceTotal = getElementValueById('blance-total');
    const newBlanceTotal = previousBlanceTotal - newWidthdrawAmount;
    setTextElementValueById('blance-total', newBlanceTotal);


})