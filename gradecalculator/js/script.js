function calculateGrade(){
let subject1= parseInt(prompt('Enter the marke of subject1 '))
let subject2= parseInt(prompt('Enter the marks of subject2'))
let subject3= parseInt(prompt('Enter the marke of subject3 '))
let subject4= parseInt(prompt('Enter the marks of subject4'))
let subject5= parseInt(prompt('Enter the marks of subject5'))


let totalMark= subject1+subject2+subject3+subject4+subject5

let average= totalMark/5

let grade;



if(average>=90){
    grade ='A+'

}else if(average>=80 ){
    grade='A'
}
else if(average>=70 ){
    grade='B'

}
else if(average>=60 )
{
    grade= 'C'
}
else if (average>=50 ){
    grade='D'
}
else
{
    grade= 'F'
}

alert('Total mark='+totalMark+'\baverage mark ='+average+'\nOverall Grade= '+grade);
}