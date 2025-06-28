var value=new Array(10);
var value2=new Array(10);
var clk,clkt;
var t=new Array(10);
var l=new Array(10);
let i=0;
let clkj=new Array(2);
let j1l,il,jl,prej;
function start(){
    const c=document.getElementsByClassName("present");
    const d=document.getElementsByName("data");
    let text="<div class='button'><button onclick='sorting()'>Start Sorting</button></div>",s="";
    for(var x of d[0].value+" "){
        if(x==" "){
            text+="<div class='node'>"+s+"</div>";
            value[i]=parseInt(s);
            value2[i]=i;
            s="";
            i++;
        }else{
            s+=x;
        }
    }
    text+="<div class='variable'>&#8679;<br>J</div><div class='variable'>&#8679;<br>(j+1)</div><div class='variable'>Sorted<br></div><div class='variable'><br></div>"
    c[0].innerHTML=text;
    const vara=document.getElementsByClassName("variable");
    for(let j=0;j<i;j++){
        const s=document.getElementsByClassName("node");
        s[j].style.top=50+"px";
        t[j]=50;
        s[j].style.left=25+j*32+"px";
        l[j]=25+j*32;
    }
    vara[0].style.top=(t[0]+20)+"px";
    vara[0].style.left=(l[0]+10)+"px";
    jl=prej=l[0]+10;
    vara[2].style.color="red";
    vara[2].style.top=(t[0]-20)+"px";
    vara[3].style.top=(t[0]-20)+"px";
    vara[2].style.left=i*32+22+"px";
    vara[3].style.left=i*32+22+"px";
    vara[2].style.height=40+"px";
    vara[3].style.height=40+"px";
    vara[2].style.borderLeft="2px solid black";
    vara[3].style.border="1px solid black";
    il=i*32+20;
    vara[1].style.color="blue";
    vara[1].style.top=(t[0]+20)+"px";
    vara[1].style.left=(l[0]+32)+"px";
    j1l=l[0]+32;
    vara[0].style.color="blue";
}
async function sorting(){
    const vara=document.getElementsByClassName("variable");
    const vc=document.getElementsByClassName("node");
    for(let k=0;k<i-1;k++){
        let j;
        for(j=0;j<i-k-1;j++){
            vc[value2[j]].style.backgroundColor="rgb(185, 167, 40)";
            if(value[j+1]<value[j]){
                //up_down(value2[j],1,0);
                up_down(value2[j+1],1,1);
                await resolved(1500);
                sidewise(value2[j],-1,0,1);
                sidewise(value2[j+1],1,1,1);
                await resolved(2200);
                up_down(value2[j+1],-1,0);
                //up_down(value2[j],-1,1);
                await resolved(1500);
                let t=value[j+1];
                value[j+1]=value[j];
                value[j]=t;
                t=value2[j+1];
                value2[j+1]=value2[j];
                value2[j]=t;
            }
            vc[value2[j]].style.backgroundColor="rgb(57, 54, 122)";
            if(j+1!=i-1-k){
            move_j(1,vara);
            await resolved(2200);
            }
        }
        vc[value2[j]].style.backgroundColor="rgb(57, 54, 122)";
        move_j(0,vara);
        move_i(vara);
        await resolved(1800);
    }
    move_i(vara);
        await resolved(1800);
}
function move_j(a,c){
    if(a==1){  
        let al=0;
        let d=32/200;    
        clkt=setInterval(function(){
            if(al==200){
                clearInterval(clkt);
                return;
            }
            c[0].style.left=(jl+d)+"px";
            c[1].style.left=(j1l+d)+"px";
            al=al+1;
            jl=jl+d;
            j1l=j1l+d;
            },1
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
            c[1].style.left=(j1l-d)+"px";
            al=al+1;
            jl=jl-d;
            j1l=j1l-d;
            },1
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
        c[2].style.left=(il-0.31)+"px";
        al=al+1;
        il=il-0.31;
        },1
    )
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
        },0.5
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
        c[j].style.left=(l[j]-ud)+"px";
        al=al+1;
        l[j]=l[j]-ud;
        },2
    )
}
function resolved(s){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },s);
    });
}