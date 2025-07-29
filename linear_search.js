var value=new Array(10);
var clk;
let i=0,target;
let j1l,jl;
function start(){
    i=0;
    document.getElementsByClassName("result")[0].innerHTML="";
    const c=document.getElementsByClassName("present");
    const d=document.getElementsByName("data");
    let text="<div class='button'><button onclick='searching()'>Start Searching</button></div>";
    target=d[1].value;
    let st="";
    if(target!=""&&d[0].value!=""){
    for(var x of d[0].value+" "){
        if((x==" " || x=="," )&& st!=""){
            text+="<div class='node'>"+st+"</div>";
            value[i]=parseInt(st);
            st="";
            i++;
        }else{
            st+=x;
        }
    }
    c[0].innerHTML=text;
    const s=document.getElementsByClassName("node");
    for(let j=0;j<i;j++){
        s[j].style.top=50+"px";
        s[j].style.left=25+j*32+"px";
    }
}
}
async function searching(){
    const c=document.getElementsByClassName("variable");
    const cd=document.getElementsByClassName("present");
    cd[0].innerHTML+="<div class='variable'>&#8679;<br>Pos : 1</div><div class='variable'>"+target+"<br>&#8681;</div>";
    c[0].style.top=(70)+"px";
    c[0].style.left=(17)+"px";
    jl=17;
    c[1].style.color="red";
    c[1].style.top=(10)+"px";
    c[1].style.left=(33)+"px";
    j1l=33;
    c[0].style.color="blue";
    let pos=-1,posl=-1;
    await resolved(2000);
    const s=document.getElementsByClassName("node");
    for(let j=0;j<i;j++){
        if(value[j]==target){
            if(pos==-1){
                pos=j;
                posl=j;
            }else{
                posl=j;
            }
            s[j].style.backgroundColor="rgb(213, 203, 3)";
        }
        move_j(c);
        c[0].innerHTML="&#8679;<br>Pos : "+(j+2);
        if(value[j]!=target)
        s[j].style.backgroundColor="rgba(57, 54, 122,0.5)";
        await resolved(3000);
    }
    if(pos==-1){
        const d=document.getElementsByClassName("result");
        d[0].innerHTML="Target element<spam style='color:red;'> "+target+" is not present</spam> in the array";
    }else if(pos==posl){
        const d=document.getElementsByClassName("result");
        d[0].innerHTML="Target element<spam style='color:green;'> "+target+" is present</spam> in the array <spam style='color:green;'> in position : "+(pos+1)+"<span>";
    }else if(posl!=pos){
        const d=document.getElementsByClassName("result");
        d[0].innerHTML="Target element <span style='color:green;'> "+target+" is present</span> in the array <span style='color:green;'> in first position : "+(pos+1)+"</span><br>"+
        "Target element<span style='color:green;'> "+target+" is present</span> in the array <span style='color:green;'> in last position : "+(posl+1)+"</span>";
    }
}
function move_j(c){ 
        let al=0;
        let d=32/200;      
        clk=setInterval(function(){
            if(al==200){
                clearInterval(clk);
                return;
            }
            c[0].style.left=(jl+d)+"px";
            c[1].style.left=(j1l+d)+"px";
            al=al+1;
            jl=jl+d;
            j1l=j1l+d;
            },1
        )
}
function resolved(s){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },s);
    });
}
