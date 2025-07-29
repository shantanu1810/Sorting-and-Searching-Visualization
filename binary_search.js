var value=new Array(15);
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
        if((x==" " || x==",")){
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
    let u=i-1,l=0;
    const cd=document.getElementsByClassName("present");
    let prev=Math.floor((u+l)/2);
    cd[0].innerHTML+="<div class='variable'>&#8679;<br>Pos :"+(prev+1)+"</div><div class='variable'>"+target+"<br>&#8681;</div>";
    const c=document.getElementsByClassName("variable");
    c[0].style.top=(70)+"px";
    c[0].style.left=17+32*Math.floor((i-1)/2)+"px";
    jl=17+32*Math.floor((i-1)/2);
    c[1].style.color="red";
    c[1].style.top=10+"px";
    c[1].style.left=(33+32*Math.floor((i-1)/2))+"px";
    j1l=33+32*Math.floor((i-1)/2);
    c[0].style.color="blue";
    let pos=-1;
    const s=document.getElementsByClassName("node");
    text="<ol>";
    let iter=1;
    while(l<=u){
        let m=Math.floor((u+l)/2);
        move_j(c,m-prev);
        c[0].innerHTML="&#8679;<br>Pos :"+(m+1);
        await resolved(4000);
        if(value[m]==target){
            s[m].style.backgroundColor="rgb(12,119,186)";
            pos=m;
            if(iter==1){
                text+="<li>In first search we directly get the target element.</li>";
            }else{
                text+="<li>We found the element after "+iter+" search operations.</li>";
            }
            break;
        }else if(value[m]>target){
            for(let k=m;k<=u;k++){
                s[k].style.backgroundColor="rgba(57, 54, 122,0.5)";
            } 
            u=m-1;
            text+="<li>We check in position "+(m+1)+" the element is not there and the target("+target+") is less then the value in "+(m+1)+" positon.</li>"
        }else{
            for(let k=l;k<=m;k++){
                s[k].style.backgroundColor="rgba(57, 54, 122,0.5)";
            }
            l=m+1;
            text+="<li>We check in position "+(m+1)+" the element is not there and the target("+target+") is greater then the value in "+(m+1)+" positon.</li>"
        }
        prev=m;
        iter+=1;
    }
    if(pos==-1){
        text+="<li>After "+iter+" operation we could not found the element.</li></ol><br>";
        const d=document.getElementsByClassName("result");
        d[0].innerHTML=text+"Target element<spam style='color:red;'> "+target+" is not present</spam> in the array";
    }else{
        text+="<li>After "+iter+" operation we found the element.</li></ol><br>";
        const d=document.getElementsByClassName("result");
        d[0].innerHTML=text+"Target element<spam style='color:green;'> "+target+" is present</spam> in the array <spam style='color:green;'> in position : "+(pos+1)+"<span>";
    }
}
function move_j(c,m){ 
        let al=0;
        let d=32/200;
        d*=m; 
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
