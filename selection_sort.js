var value=new Array(100);
var value2=new Array(100);
var clk,s=0,clkt,clktm;
var t=new Array(100);
var l=new Array(100);
let i=0;
let clkj=new Array(2);
let minl,il,jl,prej;
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
    text+="<div class='variable'>&#8679;<br>J</div><div class='variable'>Min<br>&#8681;</div><div class='variable'>I<br>&#8681;</div>"
    c[0].innerHTML=text;
    const vara=document.getElementsByClassName("variable");
    for(let j=0;j<i;j++){
        const s=document.getElementsByClassName("node");
        s[j].style.top=50+"px";
        t[j]=50;
        s[j].style.left=25+j*40+"px";
        l[j]=25+j*40;
    }
    vara[0].style.top=(t[0]+20)+"px";
    vara[0].style.left=(l[0]+10)+"px";
    jl=prej=l[0]+10;
    vara[2].style.color="red";
    vara[2].style.top=(t[0]-40)+"px";
    vara[2].style.left=(l[0]-5)+"px";
    il=l[0]-5;
    vara[1].style.color="blue";
    vara[1].style.top=(t[0]-40)+"px";
    vara[1].style.left=(l[0]+10)+"px";
    minl=l[0]+10;
    vara[0].style.color="green";
}
async function sorting(){
    const vara=document.getElementsByClassName("variable");
    const cn=document.getElementsByClassName("node");
    text="";
    for(let k=0;k<i-1;k++){
        let min=k;
        if(k!=0){
            move_min(0,vara,0);
            move_j(0,vara);
            move_i(vara);
            await resolved(2000);
        }
        cn[value2[min]].style.backgroundColor="rgb(185, 167, 40)";
        for(let j=k;j<i;j++){
            //window.alert(i);
            if(value[j]<value[min]){
                cn[value2[min]].style.backgroundColor="rgb(57, 54, 122)";
                move_min(1,vara,j-min);
                await resolved(1500);
                min=j;
                cn[value2[min]].style.backgroundColor="rgb(185, 167, 40)";
            }
            if(j!=i-1){
            move_j(1,vara);
            await resolved(2000);
            }
        }
        prej+=40;
        if(min!=k){
            up_down(value2[min],1,0);
            up_down(value2[k],-1,1);
            await resolved(1600);
            sidewise(value2[min],1,0,min-k);
            sidewise(value2[k],-1,1,min-k);
            await resolved(1600);
            up_down(value2[k],1,0);
            up_down(value2[min],-1,1);
            await resolved(1600);
            cn[value2[min]].style.backgroundColor="rgb(57, 54, 122)";
            let t=value[k];
            value[k]=value[min];
            value[min]=t;
            t=value2[k];
            value2[k]=value2[min];
            value2[min]=t;
        }else
        cn[value2[min]].style.backgroundColor="rgb(57, 54, 122)";
        text+="The Array after "+(k+1)+" iteration : <br>";
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
function move_j(a,c){
    if(a==1){  
        let al=0;       
        clkt=setInterval(function(){
            if(al==100){
                clearInterval(clkt);
                return;
            }
            c[0].style.left=(jl+0.4)+"px";
            al=al+1;
            jl=jl+0.4;
            },0.6
        )
    }else{
        let d=jl-prej;
        d=d/100;
        let al=0;       
        clkt=setInterval(function(){
            if(al==100){
                clearInterval(clkt);
                return;
            }
            c[0].style.left=(jl-d)+"px";
            al=al+1;
            jl=jl-d;
            },0.6
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
        c[2].style.left=(il+0.4)+"px";
        al=al+1;
        il=il+0.4;
        },0.6
    )
}
function move_min(a,c,d){
    if(a==1){  
        let al=0;
        d=d*40;
        d=d/100;      
        clktm=setInterval(function(){
            if(al==100){
                clearInterval(clktm);
                return;
            }
            c[1].style.left=(minl+d)+"px";
            al=al+1;
            minl=minl+d;
            },0.6
        )
    }else{
        let d=minl-prej;
        d=d/100;
        let al=0;       
        clktm=setInterval(function(){
            if(al==100){
                clearInterval(clktm);
                return;
            }
            c[1].style.left=(minl-d)+"px";
            al=al+1;
            minl=minl-d;
            },0.6
        )
    }
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
        c[j].style.top=(t[j]-ud)+"px";
        al=al+1;
        t[j]=t[j]-ud;
        },0.3
    )
}
function sidewise(j,ud,vari,d){
    let al=0;
    c=document.getElementsByClassName("node");
    d=(d*40)/100;
    ud*=d; 
    clkj[vari]=setInterval(function(){
        if(al==100){
            clearInterval(clkj[vari]);
            return;
        }
        c[j].style.left=(l[j]-ud)+"px";
        al=al+1;
        l[j]=l[j]-ud;
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
