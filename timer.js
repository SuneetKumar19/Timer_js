var lefttimex=document.querySelector(".maindisplay");
var disptime=document.querySelector(".displaytime");
var button20sec=document.getElementById("20sec");
var button5min=document.getElementById("5min");
var button15min=document.getElementById("15min");
var button30min=document.getElementById("30min");
var audio=document.getElementById("player");
var resetx=document.getElementById("re");
var marker=0;


document.formx.addEventListener("submit",function(e)
{
    e.preventDefault(); 
    var sol;
    sol=this.minutes.value;
    console.log(sol);
    timer(sol*60);
    this.reset();
});

button15min.addEventListener("click",fun15m);

button5min.addEventListener("click",fun5m);

button30min.addEventListener("click",fun30m);

button20sec.addEventListener("click",fun20s);

resetx.addEventListener("click",resetxx);

var countdown;

function fun20s()
{
    timer(20);
};


function fun5m()
{
    timer(60*5);
};


function fun15m()
{
    timer(15*60);
};

function fun30m()
{
    timer(30*60);
};
console.log("attached");

//this is the main time counter and input is in seconds

//marker is here useless

function timer(seconds)
{
    clearInterval(countdown);
    //before we start a timer we must clear all existing timers
    marker=1;
    display(seconds); 
    var now=Date.now();
    var then= now+seconds*1000;
    marker=1;
    console.log({now,then});
    displayend(then);
    countdown=setInterval(function(){
        var lefttime;
        lefttime=Math.round((then-Date.now())/1000);
        if(lefttime<=0)
        {
            marker=0;
            clearInterval(countdown);
            timeend();
            audio.play();
          setTimeout(audiopp,9000);
        }
        display(lefttime);
    },1000);
};
// function to display time 
    function display(seconds)
    {
        var minutes,remseconds,hours,zero;
        hours=Math.floor(seconds/3600);
        minutes=Math.floor(seconds/60);
        minutes=minutes%60;
        remseconds=seconds%60;
        zero=0;
        console.log({minutes,remseconds});
        if(hours!=0)
        {
            if(remseconds>=10)
            {
                if(minutes>=10)
                {
                    var dispp= `${hours}:${minutes}:${remseconds}`;
                }
                else
                {
                    var dispp= `${hours}:${zero}${minutes}:${remseconds}`;
                }
            }
            // var dispp= `${hours}:${minutes}:${remseconds}`;
            else if(remseconds<10)
            {
                if(minutes>=10)
                {
                    var dispp= `${hours}:${minutes}:${zero}${remseconds}`;
                }
                else
                {
                    var dispp= `${hours}:${zero}${minutes}:${zero}${remseconds}`;
                }
                // var dispp= `${hours}:${minutes}:${zero}${remseconds}`;
            }
        }
        else
        {
        if(remseconds>=10)
        var dispp= `${minutes}:${remseconds}`;
        else if(remseconds<10)
        {
            var dispp= `${minutes}:${zero}${remseconds}`;
        }
          }
    if(remseconds===0&&minutes===0&&hours===0)
    {
        dispp=`TIME UP!!`;
    }
        document.title=dispp;
        lefttimex.textContent=dispp;
    };
function displayend(time)
{
    var zero=0;
    var end=new Date(time);
    var hours=end.getHours();
    var minutes=end.getMinutes();
    if(minutes<10)
    {
        disptime.textContent=`Be back at ${hours}:${zero}${minutes}`;  
    }
    else
    disptime.textContent=`Be back at ${hours}:${minutes}`;     
};
function timeend()
{
    var diss;
    diss=``;
    disptime.textContent=diss;
};
//reset function

function resetxx()
{
    clearInterval(countdown);
    console.log("reset called");
    lefttimex.textContent=`Set Time`;
    disptime.textContent=`Return time`;
    audio.pause();
    var lol=`Timer`;
    document.title=lol;
};
function audiopp()
{
    audio.pause();
};








