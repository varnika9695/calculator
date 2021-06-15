function display(val)
{
  document.getElementById("result").value+=val
}
 function solve()
 {
   let x =document.getElementById("result").value
   let y = eval(x)
   document.getElementById("result").value = y
 }

 function clearvalue()
 {
   document.getElementById("result").value=""
 }
 document.addEventListener('keypress', (event) => {
  var name = event.key;
  
  if(isNaN(name) && name !== '+' && name !== '-' && name !== '*' && name !== '/' && name !=='=')
  {
  alert(`Key pressed ${name} 
  \n 
  Enter only numbers`);
}
 })