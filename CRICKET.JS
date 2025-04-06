(function(){
   
    const hello=async()=>{


    console.log("hello there");
    

    let key='a5ad3af28576f3a7b034c32e4be426bc926d8f9d5c3a7565ec4a131b88945d53';
    let res = await fetch(`https://apiv2.api-cricket.com/?method=get_livescore&APIkey=${key}`);



    const jsonData= await res.json();

    console.log(jsonData);
    
    let name=jsonData.result;
    console.log(name);
    
    if (name) {
        // Accessing the third match's scores2
        let match = name[0];
        let homeTeam = match.event_home_team;
        let homeScore = match.event_home_final_result;
        let awayTeam = match.event_away_team;
        let awayScore = match.event_away_final_result;
        let startDay=match.event_date_start;
        let venue=match.event_stadium;
        let toss=match.event_toss;
        let typ=match.event_type;
        let series=match.league_name;
        let fast=match.comments.Live;
        console.log(fast);
        // let overs=(length-1).overs;
        // console.log(overs);
        let comlen=fast.length;
        let num=comlen-1;
        let liveer=match.comments.Live[num];
        let over=liveer.overs;
        
    


        let displayText = `${homeTeam} vs ${awayTeam}: ${homeScore} ${awayScore} in ${over}`;
        let matchvs=`${homeTeam} vs ${awayTeam}`;
        document.getElementById("matchvs").innerHTML=`${matchvs}`
        document.getElementById("maininfo").innerHTML=`${displayText}`;
        document.getElementById("startdate").innerHTML=`${startDay}`
        document.getElementById("venue").innerHTML=`${venue}`;
        document.getElementById("toss").innerHTML=`${toss}`;
        document.getElementById("typess").innerHTML=`${typ}`;
        document.getElementById("seriess").innerHTML=`${series}`;
        console.log(displayText);
        
    } else {
        console.error('Result property is not available in the response.');
    }

    }
hello();

}());