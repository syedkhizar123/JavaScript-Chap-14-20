document.write("<h1>Chap:14-16</h1>")
// // Question 1
document.write("<h3>Question 1</h3>")
var student1 = []
document.write(student1)


// // Question 2
document.write("<h3>Question 2</h3>")
var student2 = Array
document.write(student2)


// // Question 3
document.write("<h3>Question 3</h3>")
var str = ["Apple" , "Mango" , "Banana" , "Orange"]
document.write(str)


// // Question 4
document.write("<h3>Question 4</h3>")
var num = [1,2,3,4,5]
document.write(num)


// // Question 5
document.write("<h3>Question 5</h3>")
var bln = [true , false]
document.write(bln)


// // Question 6
document.write("<h3>Question 6</h3>")
var mix = ["Apple" , "Mango" , 1 , 2 , true , false]
document.write(mix)


// // Question 7 
document.write("<h3>Question 7</h3><h5>Qualification</h5>")
var dgrs = ['SSC','HCS','BCS','BS','BCOM','MS','M.Phil.','PhD']
for(i = 0 ; i < 8 ; i++){
    document.write( dgrs[i] + "<br>")
}

// // Question 8
document.write("<h3>Question 8</h3>")
var students = ["Michael","John","Tony"]
var obtmarks = [320,230,480]
var total = [500]
var perc = [(obtmarks[0]/total[0])*100,(obtmarks[1]/total[0])*100,(obtmarks[2]/total[0])*100]
document.write(`
    Score of ${students[0]} is ${obtmarks[0]}. Percentage: ${perc[0]}% </br>
    Score of ${students[1]} is ${obtmarks[1]}. Percentage: ${perc[1]}%</br>
    Score of ${students[2]} is ${obtmarks[2]}. Percentage: ${perc[2]}% </br>
    `)


// // Question 9
var colors = ["red","yellow","green","blue"]
document.write("<h3>Question 9 </h3>" + colors + "<br>")
var usercolor = prompt("Which color do you want to add in the beginning")
colors.unshift(usercolor)
document.write(colors + "<br>")
var usercolor2 = prompt("Which color do you want to add at the end")
colors.push(usercolor2)
document.write(colors + "<br>")
colors.unshift("black","brown")
document.write(colors + "<br>")
colors.shift()
document.write(colors + "<br>")
colors.pop()
document.write(colors + "<br>")
var userindex = prompt("At which index you want to add a color")
var usercolor3 = prompt("Which color you want to add ")
colors.splice(userindex,0,usercolor3)
document.write(colors+"<br>")
var userindex2 = prompt("At which index you want to delete a color")
var count = prompt("How many colors you want to delete ")
colors.splice(userindex2,count)
document.write(colors + "<br>")


// // Question 10
document.write("<h3>Question 10</h3>")
var stdntscore = [320,230,480,120]
document.write(stdntscore + "<br>")
stdntscore.sort()
document.write(stdntscore +"<br>")


// // Question 11
document.write("<h3>Question 11</h3>")
var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
document.write(cities + "<br>")
var copied = cities.slice(2,4)
document.write(copied + "<br>")


// // Question 12
document.write("<h3>Question 12</h3>")
var arr = ["This","is","my","cat"]
var arr_to_str = arr.join(" ")
document.write("<h3>Array</h3>" + arr + "<br>")
document.write("<h3>String</h3>" + arr_to_str + "<br>")


// // Question 13
document.write("<h3>Question 13</h3>")
var devices = ["Keyboard","Mouse","Printer","Monitor"]
document.write("<h3>Devices</h3>" + devices + "<br><br>")
for(var i = 0 ; i < 4 ; i++){
    var returnVal = devices.shift()
    document.write("Out <br>" + returnVal + "<br>")
}


// // Question 14
document.write("<h3>Question 14</h3>")
var devices2 = ["Keyboard","Mouse","Printer","Monitor"]
document.write("<h3>Devices</h3>" + devices2 + "<br><br>")
for(var i = 0 ; i < 4 ; i++){
    var a = devices2.pop()
    document.write("Out <br>" + a + "<br>")
}



document.write("<h1> Chap: 17-20 </h1>")

// Question 1
document.write("<h3>Question 1</h3>")
var emptyarr = [[] , [] , [] , []]
document.write(emptyarr + "<br>")


// Question 2
document.write("<h3>Question 2</h3>")
var matrixarr = [[0 , 1 , 2 , 3] , [1 , 0 , 1 , 2] , [2 , 1 , 0 , 1]]
for(var i = 0 ; i < matrixarr.length ; i++){
    document.write(matrixarr[i] + "<br>")
}


// Question 3
document.write("<h3>Question 3</h3>")
for(var i = 1 ; i < 11 ; i++){
    document.write(i + "<br>")
}


// Question 4
document.write("<h3> Question 4 </h3>")
var multiplication_num = +prompt("Enter a number for its multiplication table")
var length = +prompt("What should be the length of the table")
for (var i = 1 ; i <= length; i++){
    var table = multiplication_num * i
    document.write(`${multiplication_num} X ${i} = ${table} </br>` )
}


// Question 5
document.write("<h3> Question 5 </h3>")
var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
for(var i = 0 ; i < fruits.length ; i++){
    document.write(fruits[i] + "<br>")
}
for(var i = 0 ; i < fruits.length ; i++){
    document.write("Element at index " + i + " is " + fruits[i] + "<br>")
}


// Question 6 
document.write("<h3> Question 6 </h3>")
document.write("<h5>a: Counting</h5>")
for(var i = 1 ; i < 11 ; i++){
    document.write(i + "<br>")
}
document.write("<h5>b: Reverse Counting</h5>")
for(var i = 10 ; i > 0 ; i--){
    document.write(i + "<br>")
}
document.write("<h5>c: Even</h5>")
for(var i = 0 ; i <= 20 ; i++){
    if(i % 2 == 0){
        document.write(i + "<br>")
    }
}
document.write("<h5>d: Odd</h5>")
for(var i = 0 ; i <= 20 ; i++){
    if(i % 2 != 0){
        document.write(i + "<br>")
    }
}


// Question 7
document.write("<h3> Question 7 </h3>")
var bakery = ["cake" , "apple pie" , "cookie" , "chips" , "patties"]
var search = prompt("Welcome to ABC Bakery. What do you want to order?")
var item = false
for(i = 0 ; i < bakery.length ; i++){
    if(bakery[i] == search){
       item = true
       break
    }
}
if(item){
    document.write(search + " is available at index " + i + " in our bakery")
} else{
        document.write("We are sorry " + search + " is not available in our bakery.")
    }


// Question 8 
document.write("<h3> Question 8 </h3>")
var A = [24, 53, 78, 91, 12]
document.write("Array items: " + A + "<br>")
var largestnum = A[0]
for(var i = 0 ; i < A.length ; i++){
    if(A[i] > largestnum){
        largestnum = A[i]
    }
}
document.write("Largest number is: " + largestnum + "<br>")


// Question 9 
document.write("<h3> Question 9 </h3>")
document.write("Array items: " + A + "<br>")
var smallestnum = A[0]
for(var i = 0 ; i < A.length ; i++){
    if(A[i] < smallestnum){
        smallestnum = A[i]
    }
}
document.write("Smallest number is: " + smallestnum + "<br>")


// Question 10
document.write("<h3> Question 10 </h3>")
for(var i = 1 ; i > 0  ;i++){
    var five = 5
    var multiples = five * i
    if(multiples <= 100){
        document.write(multiples + "<br>")
    }
    else{
        break
    } 
}
