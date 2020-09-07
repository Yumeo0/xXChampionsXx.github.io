
function loadjscssfile(filename, filetype) {
    
    if (filetype=="js") { 

        var fileref=document.createElement('script');
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src", filename);
    }
    else if (filetype=="css") { 

        var fileref=document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", filename);
    }

    if (typeof fileref!="undefined") {
        document.getElementsByTagName("head")[0].appendChild(fileref);
    }
}



function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
       window.onload = func
    } else {
       window.onload = function() {
           if (oldonload) {
                  oldonload()
          }
          func()
       }
   }
} 


function loadResources(thisId) {

   var firstWaDiv = $('.wascript:first');
       
       var firstId = $(firstWaDiv).attr('id');
       
       if(firstId == thisId) {

            loadjscssfile("Logos_resources/WA.min.js", "js");
            loadjscssfile("Logos_resources/modernizr.custom.43133.min.js", "js");
            loadjscssfile("Logos_resources/spin.min.js", "js");

            loadjscssfile("Logos_resources/JQ_Textualizer.min.js", "js");
            loadjscssfile("Logos_resources/WA.min.css", "css");            
       }
	   
	   loadjscssfile("Logos_resources/ani.css", "css");                          
}
	// Global variables




function Logosstart() {    

    try
    {   
        if (navigator.userAgent.match(/msie/i))
		{			
            
		    return;            
		}

    var Logos = new WA();
Logos.custom = {
}

Logos.stage = [{            

            // SCENE 1
            'Oid': 'X6ed46be',
            'Name': 'SCENE_1',
            'Autostart': 'true',
            'SceneEnd': 2000,
            'Position': 'absolute',
            'Perspective': '800px',
            'Top': '0px',
            'Left': '0px',






                            'Timelines': [
            {
                'Oid': 'MAIN_TIMELINE',
                'Name': 'Hauptzeitleiste',
                'Objects': [
                
                    
                    
                {
                    'Oid': 'youtube_logo',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '607px',
                    'Left': '378px',
                    'Height': '135px',
                    'Width': '135px',
                    'ZIndex': '1','BackgroundImage': 'Logos_resources/youtube_logo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X6ed4ce2',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '607px',
                    'Left': '1406px',
                    'Height': '135px',
                    'Width': '135px',
                    'ZIndex': '2','BackgroundImage': 'Logos_resources/github_logo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X6ed4ce8',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '607px',
                    'Left': '892px',
                    'Height': '135px',
                    'Width': '135px',
                    'ZIndex': '3','BackgroundImage': 'Logos_resources/twitch_logo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'youtube_logo',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'1s',
                            'Delay':'0s',
                            'TimingFunc':'ease-out',
                            'EndValue': '472px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X6ed4ce2',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '607px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0'
                        }]
},
{
                            'ObjectId':'X6ed4ce8',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.5s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '607px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.5s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0'
                        }]
},
{
                            'ObjectId':'X6ed4ce8',
                            'StartTime':500,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '472px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X6ed4ce2',
                            'StartTime':1000,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '472px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},


			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            }]
}];

            Logos.init();
            Logos.stageHeight = 1080;
            Logos.stageWidth  = 1920;
            Logos.t  = '282004118200526247742828328696687449800';
            Logos.stageInitialTransition = 'instant';
            Logos.stageInitialTransitionDirection = 'left';
            Logos.stageInitialTransitionSpeed = 1000;

            Logos.responsiveStage = false;
            Logos.responsiveStageKeepRatio = false;
            Logos.scaleX = 1;
            Logos.scaleY = 1;
            Logos.scale = 1;

            Logos.showBrowserCompatibilityCheck = false;
                Logos.loaderType = 1;
                Logos.loaderBackgroundColor = '#000';
                Logos.loaderForegroundColor = '#fff';
            Logos.stageInitialScene = 'X6ed46be';
            Logos.debug = false;
            Logos.preloadImages = true;
Logos.imagesToPreload = [
'Logos_resources/youtube_logo.png',
'Logos_resources/github_logo.png',
'Logos_resources/twitch_logo.png'
];Logos.createWorkspace('LogosStage');

                }

                catch (e) 
                {
	                
                }
            }

loadResources('LogosStage');
addLoadEvent(Logosstart);

