
var arr = [
    {'AssetName':'Apple','Invested':'1000','Current':'3000' },
    {'AssetName':'google','Invested':'2000','Current':'5000' },
]
buildTable(arr);


function buildTable(data){
    var table = document.getElementById('mytable')
    for(var i = 0;i<data.length;i++){
        var row =`<tr>
        <td>${data[i].AssetName}</td>
        <td>${data[i].Invested}</td>
        <td>${data[i].Current}</td>
</tr>`
table.innerHTML += row;
    }
}
let openpop = document.getElementById("popBox");

function addInvestment(){

    
    openpop.classList.add("open-popup");
    

}
function closeAddInv(){
    var Assetsection = document.getElementById('Asset-section').value;
    var Amountsection = document.getElementById('Amount-section').value;
    var Currentsection= document.getElementById('Current-section').value;
    var data = {["AssetName"]:Assetsection,["Invested"]:Amountsection,["Current"]:Currentsection};
    obj = { ...arr,data};
    // var arr3 ={...arr,["AssetName"]: AssetName,["Invested"]:Invested,["Current"]:Current};
    arr= [];
    arr.push(data);
    
    console.log(data,arr,"obj");
    buildTable(arr);
    openpop.classList.remove("open-popup");

}



    // function UpdateInvestment(){

    //     var Assetname = document.getElementById('Assetname').value;
    //     var AmountInvested = document.getElementById('AmountInvested').value;
    //     var CurrentValue = document.getElementById('CurrentValue').value;
    //     var data = {["Assetname"]:Assetname,["AmountInvested"]:AmountInvested,["CurrentValue"]:CurrentValue};
    //     obj = { ...arr,data};
    //     var arr4={...arr,["Assetname"]: Assetname,["AmountInvested"]:AmountInvested,["CurrentValue"]:CurrentValue};
    //     arr.push(data);
    //     console.log(arr,Assetname,"obj");
    // }





