 function calculate() {
     var i = parseFloat(document.getElementById("num1").value); //获取第一个数字
     var j = parseFloat(document.getElementById("num2").value); //获取第二个数字
     var method = parseInt(document.getElementById("method").value); //获取计算方法
     var s = 0;
     if (isNaN(i) || isNaN(j)) { //判断输入是否为数字
         alert("请输入数字进行计算");
     } else {
         if (method == 1) { //加法
             s = (i*10 + j*10)/10;
         } else if (method == 2) { //减法
             s = (i*10 - j*10)/10;
         } else if (method == 3) { //乘法
             s = i * j;
         } else if (method == 4 && j != 0) { //除数不为零时，除法
             s = i / j;
         } else { //除数为0，提醒重新输入
             s = NaN;
             alert("除数不能为零,请重新输入");
         }
         document.getElementById("result").innerText = s; //输出计算结果
     }

 }
