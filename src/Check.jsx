let curDate=new Date(2021,5,5,5);
curDate=curDate.getHours();
let greeting= '';
const cssStyle={};

if (curDate>=1 && curDate < 12){
    greeting='Good morning';
   cssStyle.color='green';
}
else if (curDate>=12 && curDate <12)
{
    greeting='Good afternoon';
    cssStyle.color='yellow';
}else{
    greeting="Good night";
  cssStyle.color='black';
}

ReactDOM.render(
    <> <div>
<h1> Hello sir, <span style={cssStyle}> {greeting} </span> </h1>
</div>
</>,
document.getElementById("root")
);
