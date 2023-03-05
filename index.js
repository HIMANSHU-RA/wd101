let userform=document.getElementById("user-form");
localStorage.clear();

const retrieveEntries=()=>{
    let entries=localStorage.getItem("user-entries");
    if(entries){
        entries=JSON.parse(entries);
    }else
    {
        entries=[];
    }
    return entries;
}


let userEntries=retrieveEntries();
const displayEntries=()=>{
    const entries=retrieveEntries();
    const tableEntries=entries.map((entry)=>{
        const nameCell=`<td>${entry.name}</td>`;
        const emailCell=`<td>${entry.email}</td>`;
        const passwordCell=`<td>${entry.password}</td>`;
        const dobCell=`<td>${entry.dob}</td>`;
        const acceptTermAndConditionCell=`<td>${entry.acceptTermAndCondition}</td>`;

        const row=`<tr class='l1'>${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${acceptTermAndConditionCell}</tr>`;
        return row;
    }).join("\n");
    const table= `<table class='border'><tr>
        <th class='l1 l2' >Name</th>
            <th class='l1'>Email</th>
            <th class='l1'>Password</th>
            <th class='l1'>DOB</th>
            <th class='l1'>Accepted terms</th>
        </tr>${tableEntries}
        </table>`;
        
    
    let details=document.getElementById("user-entries");
    details.innerHTML=table;

    
}
const saveUserForm=(event)=>{
    event.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const dob=document.getElementById("dob").value;

    const acceptTermAndCondition=document.getElementById("acceptTerms").checked;
  
    const entry ={
        name,
        email,
        password,
        dob,
        acceptTermAndCondition
    };
    userEntries.push(entry);
    localStorage.setItem("user-entries",JSON.stringify(userEntries));
    displayEntries();
    

}
userform.addEventListener("submit",saveUserForm);
displayEntries();

const dob=document.getElementById('dob');
dob.addEventListener("input",()=>validate(dob));
 
let numEle = document.querySelector('.num');
   document.querySelector(".btn").addEventListener("click", () => {
      if(numEle.validity.rangeOverflow){
         resEle.innerHTML = 'Number exceeds the range';
         
      }
      else if(numEle.validity.rangeUnderflow){
         resEle.innerHTML = 'Number is lower than the range ';
         
      }
      else{
         resEle.innerHTML = 'Number lies in the range';
         
      }
   });

 