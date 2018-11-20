// @info this is only fast check idea

const fs = require('fs-extra');
//var jsonQuery = require('json-query');
var slug = require("slug")

var oLand = false;

var contentPath = {
  'en': {
    'content' : '../content/english/codecombat/',
    'dungeon': 'kithgard-dungeon',
    'forest': 'backwoods-forest',
    'desert': 'sarven-desert',
    'mountain': 'cloudrip-mount'
  },
  'pl': {
    'content' : '../content/polish/codecombat/',
    'dungeon': 'loch-kithgarda',
    'forest': 'ostepy-lasu',
    'desert': 'pustynia-sarven',
    'mountain': 'pochmurna-gora'
  }
}


if (process.argv[2])
  var fslug = process.argv[2];
else
  process.exit(1);



// get level infomartion
fs.readJson('./data/level.json')
.then(packageObj => {

  /*
  var levels = jsonQuery('[**].levels', {data: packageObj});
  var llev =  levels.value[0];
  var result = jsonQuery('[**][slug=harrowland].name', {data: llev     });
  console.log(result.value);  
  */

  //check if exist
  for(var i =0; i<packageObj.length; ++i)
  {
    var countryLevels = packageObj[i].levels;
    for(var leverMd5sum in countryLevels)
    {
      if(countryLevels[leverMd5sum]["slug"] == fslug)
      {
        //funded, so save it!
        oLand = countryLevels[leverMd5sum];
        break;
      }
    }

  }

  if( oLand){
    //console.log(oLand);

 
    //created own structure
    var land = [];

    land.kind = oLand["kind"];
    land.campaign = oLand["campaign"];
    land.slug = oLand["slug"];

    land.name = [];
    land.description =[];
    land.name["en"] =  oLand["name"];
    land.description["en"] =  oLand["description"];

    if (oLand.i18n.pl) {
      land.name["pl"] = oLand["i18n"]["pl"]["name"];
      land.description["pl"] = oLand["i18n"]["pl"]["description"];
    }
    else
    {
      land.name["pl"] =  oLand["name"]+" #Poziom "+oLand["campaign"].substring(0,1)+"_"+oLand["campaignIndex"];
      land.description["pl"] = '';      
    }

    land.isPayable =  oLand["requiresSubscription"];
    land.aNeeded = oLand["requiredProperties"];
    land.levelnNumber = oLand["campaignIndex"];
    land.aScore = oLand["scoreTypes"];
    land.aRewards = oLand["rewards"];

    //console.log(land);


    //check if level code exist
    var fCode = "data/CodeCombat-solutions/"+land.campaign+"/"+land.slug+".js"
    fs.pathExists(fCode, 'utf8')
     .then(exists => {
      
      //created descr
       if (exists) {
         fs.readFile(fCode, 'utf8')
           .then(sCode => {
             savePage(land,sCode, "en");
             savePage(land,sCode, "pl");
           });
       }
       else {

        //created fake level code
         fs.outputFile(fCode, 'hero.say(\'Hello\');')
           .then(() => {
             console.log("add code: "+fCode);
           })
           .catch(err => {
             console.error(err)
           })
        
       }
    
    })


  }
  else
  {
    //no fund level information
    console.log("not slug")
  }

})
.catch(err => {
  console.error(err)
})

function savePage(land, sCode, lang) {
  var sText = getReadyText(land, sCode, lang);

  fPage = contentPath[lang]['content'] + contentPath[lang][land.campaign] + "/" + land.slug + "." + lang + ".md";
  console.log("page: " + fPage);
  fs.outputFile(fPage, sText, err => {
    //console.log(err) // => null
    console.log("created: " + lang)
  })

}

function getReadyText(land,sCode,lang)
{
  var tDate = new Date().toISOString();
  var i18n =[];
  i18n["mySolution"]  =[];
  i18n["mySolution"]["en"] ="Solution";
  i18n["mySolution"]["pl"] ="Rozwiązanie";
  i18n["pointsFor"]  =[];
  i18n["pointsFor"]["en"] ="Points for";
  i18n["pointsFor"]["pl"] ="Punkty za";
  i18n["needed"]  =[];
  i18n["needed"]["en"] ="Needed items with";
  i18n["needed"]["pl"] ="Potrzebne przedmioty z";


  var sText ="";
  sText +="---\r\n";
  sText +="title: \""+land.name[lang]+"\"\r\n";
  sText +="date: "+tDate+"\r\n";
  sText +="translationKey: \""+land.slug+"\"\r\n";
  sText +="slug: \""+slug(land.name[lang],{lower: true })+"\"\r\n";
  sText +="order: "+land.levelnNumber+"\r\n";  
  sText +="tags:\r\n";
  sText +="  - HelloWord\r\n";
  sText +="---\r\n";
  sText +="\r\n"; 
  sText +="> "+land.description[lang]+"\r\n";
  sText +="\r\n"; 
  sText +="https://codecombat.com/play/level/"+land.slug+"\r\n";
  sText +="\r\n"; 
  sText +=i18n["mySolution"][lang] +"\r\n";
  sText +="\r\n"; 
  sText +="```javascript\r\n";
  sText +=sCode+"\r\n"; 
  sText +="```\r\n"; 
  sText +="\r\n"; 
  if(lang =="en")
  sText += returTable(land.aScore,i18n["pointsFor"][lang]);
  sText += returTable(land.aNeeded,i18n["needed"][lang]);


  sText +="\r\n"; 


  return sText;
}


function returTable(aRows,sTableHeader)
{
  var sText ="";
  if(aRows && aRows.length)
  {
    sText +=sTableHeader +" |\r\n";
    sText +="--- |\r\n"; 
    for(var i =0; i< aRows.length; ++i)
    {
      sText +=aRows[i] +" |\r\n";
    }
    sText +="\r\n";
  }
  return sText;
}