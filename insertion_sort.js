var value=new Array(10);
var value2=new Array(10);
var clk,clkt;
var t=new Array(10);
var l=new Array(10);
let i=0;
let clkj=new Array(2);
let il,jl,prej;
function start(){
    const c=document.getElementsByClassName("present");
    const d=document.getElementsByName("data");
    let text="<div class='button'><button onclick='sorting()'>Start Sorting</button></div>",s="";
    for(var x of d[0].value+" "){
        if((x==" "||x==",")&&s!=""){
            text+="<div class='node'>"+s+"</div>";
            value[i]=parseInt(s);
            value2[i]=i;
            s="";
            i++;
        }else{
            s+=x;
        }
    }
    text+="<div class='variable'>i</br>&#8681;</div><div class='variable'>j<br>&#8681;</div></div>"
    c[0].innerHTML=text;
    const vara=document.getElementsByClassName("variable");
    for(let j=0;j<i;j++){
        const s=document.getElementsByClassName("node");
        s[j].style.top=50+"px";
        t[j]=50;
        s[j].style.left=25+j*32+"px";
        l[j]=25+j*32;
    }
    vara[0].style.top=(t[0]-40)+"px";
    vara[0].style.left=(l[1]+10)+"px";
    il=l[1]+10;
    vara[1].style.color="blue";
    vara[1].style.top=(t[0]-40)+"px";
    vara[1].style.left=(l[0]+10)+"px";
    jl=l[0]+10;
    prej=jl+32;
    vara[0].style.color="red";
}
async function sorting(){
    const vara=document.getElementsByClassName("variable");
    const vc=document.getElementsByClassName("node");
    text="";
    for(let k=1;k<i;k++){
        let key = value[k];
        let id=value2[k];
        let j=k-1;
        vc[value2[k]].style.backgroundColor="rgb(5, 228, 242)";
        up_down(value2[k],-1,0);
        await resolved(1500);
        while(j>=0&&value[j]>key){
            value[j+1]=value[j];
            value2[j+1]=value2[j];
            sidewise(value2[j],-1,0,1);
            await resolved(1500);
            j-=1;
            move_j(1,vara,1);
            await resolved(1500);
        }
        move_j(1,vara,-1);
        await resolved(1500);
        value[j+1]=key;
        value2[j+1]=id;
        if(k-(j+1)!=0){
        sidewise(value2[j+1],1,0,(k-(j+1)));
        await resolved(1500);
        }
        up_down(value2[j+1],1,0);
        await resolved(1500);
        vc[value2[j+1]].style.backgroundColor="rgb(57, 54, 122)";
        move_i(vara);
        move_j(0,vara,1);
        await resolved(1500);
        prej+=32;
        text+="The Array after "+k+" iteration : <br>";
        for(let ste=0;ste<i;ste++){
            if(ste!=i-1)
            text+=value[ste]+", ";
            else
            text+=value[ste];
        }
        text+="<br><br>";
    }
    text+="Sorted Array : <br>";
    for(let ste=0;ste<i;ste++){
        if(ste!=i-1)
        text+=value[ste]+", ";
        else
        text+=value[ste];
    }
    const steps=document.getElementsByClassName('steps')[0];
    steps.innerHTML=text;
}
function move_j(a,c,lr){
    if(a==1){  
        let al=0;
        let d=32/200;
        d*=lr;  
        clkt=setInterval(function(){
            if(al==200){
                clearInterval(clkt);
                return;
            }
            c[1].style.left=(jl-d-d)+"px";
            al=al+2;
            jl=jl-d-d;
            },0.2
        )
    }else{
        let d=prej-jl;
        d=d/100;
        let al=0;       
        clkt=setInterval(function(){
            if(al==100){
                clearInterval(clkt);
                return;
            }
            c[1].style.left=(jl+d+d)+"px";
            al=al+2;
            jl=jl+d+d;
            },0.2
        )
    }
}
function move_i(c){ 
    let al=0;
    clk=setInterval(function(){
        if(al==100){
            clearInterval(clk);
            return;
        }
        c[0].style.left=(il+0.62)+"px";
        al=al+2;
        il=il+0.62;
        },0.42    )
}
function up_down(j,ud,vari){
    let al=0;
    c=document.getElementsByClassName("node");
    ud*=0.2;  
    clkj[vari]=setInterval(function(){
        if(al==100){
            clearInterval(clkj[vari]);
            return;
        }
        c[j].style.top=(t[j]-ud-ud)+"px";
        al=al+2;
        t[j]=t[j]-ud-ud;
        },0.1
    )
}
function sidewise(j,ud,vari,d){
    let al=0;
    c=document.getElementsByClassName("node");
    d=(d*32)/200;
    ud*=d; 
    clkj[vari]=setInterval(function(){
        if(al==200){
            clearInterval(clkj[vari]);
            return;
        }
        c[j].style.left=(l[j]-ud-ud)+"px";
        al=al+2;
        l[j]=l[j]-ud-ud;
        },0.5
    )
}
function resolved(s){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },s);
    });
}
