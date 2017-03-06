var myJSON = { "operand1":'', "operator":'', "operand2":'' };
var x;
function myOperand(num)
    {
    if (myJSON.operand1 == eval(x) && (myJSON.operator != ''))
        {
            myJSON.operand2 += num;
            document.getElementById("display").value = myJSON.operand2;

        }
        
        
    else
        {
            if (myJSON.operator == "")
                {
                    myJSON.operand1 += num;
                    document.getElementById("display").value = myJSON.operand1;

                }
            else if ((myJSON.operand1 != '') && (myJSON.operator != '') )
                {
                    myJSON.operand2 += num;
                    document.getElementById("display").value = myJSON.operand2;

                }
            else{
                        document.getElementById("display").value = "Undefined";

        }
          
        }
    }
    


function myOperator(command)
    {
        document.getElementById("display").value = command;
        myJSON.operator = command;
    }

function calculation()
    {
         x = myJSON.operand1 + myJSON.operator + myJSON.operand2;
        document.getElementById("display").value = eval(x);
        
        myJSON.operand1 = eval(x);
        myJSON.operand2 = '';
        myJSON.operator = '';
    }
function clearAll()
    {
    document.getElementById("display").value = '';
        myJSON.operand1 = '';
        myJSON.operand2 = '';
        myJSON.operator = '';
    }