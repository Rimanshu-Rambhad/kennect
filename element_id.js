



document.getElementById('btn').onclick = function(){
    amount = +document.getElementById('x1').value; 
    roi = +document.getElementById('x2').value; 
    duration = +document.getElementById('x3').value; 

    console.log(amount);
    console.log(roi);
    console.log(duration);

    i=1;
    opening_balance=0;
    str=``;
    while(i<=duration){

        interest = Math.round( (opening_balance+amount) * roi/100 );
        closing_balance = opening_balance+amount+interest;

        console.log(i , opening_balance , amount , interest , closing_balance);
        str = str + `<tr>
            <td>${i}</td>
            <td>${opening_balance}</td>
            <td>${amount}</td>
            <td>${interest}</td>
            <td>${closing_balance}</td>
        </tr>`;

        opening_balance = closing_balance;
        i++;
    }
    console.log(str);
    document.getElementById('result').innerHTML = str;
}
