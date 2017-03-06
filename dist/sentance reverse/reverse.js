var output = [];

        function myFun()
            {            
            var string = document.getElementById("input").value;
            var array = string.split(' ');
            array.reverse();
            var out = array.join(' ');
            document.getElementById("dis").innerHTML = out;
            output.push(out);
            updateTableView();
            }
            
       function updateTableView()
            {
            var tableContent = '<th>No</th><th>Reserse Sentance !!!</th>';
                for(var i = 0; i < output.length; i++)
                {
                    if(output[i])
                        {
                        tableContent = tableContent + "<tr>";  
                        tableContent = tableContent + "<td>"+ (i+1) +"</td>"; 
                        tableContent = tableContent + "<td>"+ output[i] +"</td>"; 
                        tableContent = tableContent + "</tr>"; 
                        }
                }

            document.getElementById("userTable").innerHTML = tableContent;
            } 