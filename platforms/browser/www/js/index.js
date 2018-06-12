/*Cordova - Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0. Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.*/

//________APP CONSTRUCTOR________//
var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    //'Deviceready' Event Handler
    //Bind any cordova events here. Common events are: 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    //Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

//Initialise app
app.initialize();

//________DEFINE TIME PARAMETERS________//
function updateTime() {
    // get current date/time --> convert hours and minutes
    var currentTime = new Date();
    var hours = currentTime.getHours()  > 12 ? currentTime.getHours() - 12 : currentTime.getHours(); //12hr time
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var suffix = currentTime.getHours() >= 12 ? 'pm' : 'am'; //12hr time suffix (AM/PM)

    //define display format
    if (hours == 0) {hours = 12} //display midnight ('00:xx') as 12
    minutes = ((minutes < 10 ? "0" : "") + minutes).slice(-2); //pad minutes to 2 digits
    seconds = ((seconds < 10 ? "0" : "") + seconds).slice(-2); //pad seconds to 2 digits

    // create 'clock' variable string
    var displayTime = hours + ':' + minutes/* + ':' + seconds*/;
    
    // replace id contents with 'clock'
    $('.currentTime').html(displayTime);
    $('.currentTimeSuffix').html(suffix);   
};

//________FASTCLICK JS ACTIVE________// 
//removes 300ms delay when clicking on mobile devices
$(function() {
    FastClick.attach(document.body);
});

//________SHOW/HIDE NAV OVERLAY________//
$(function(){
    $('* .iconNav').click(function(e) {
        // var currentPage = $(this).closest(".page")
        // currentPage == currentPage
        console.log("currentPage = " + JSON.stringify(this))
        $('#navMenu').removeAttr('display');
        $('#navMenu').addClass('slide');
        $('* .iconNav').hide();
        $('#navMenu').show();
        $('#navMenu').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
            $('.iconNavRev').click(function(e) {
                // $(currentPage).show();
                $('.slide').css('animation', '');
                $('.slide').css('animation', 'navSlideBack 0.5s ease');
                $('#navMenu').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
                // window.history.back();
                    $('.slide').css('animation', '');
                    $('#navMenu').removeClass('slide');
                    $('.slide').css('animation', 'navSlide 1s ease');
                    $('#navMenu').attr('display', 'none');
                    $('#navMenu').hide();
                    $('* .iconNav').show();
                });
            });
        });
    });
});


//________EXECUTE FUNCTIONS ON DOC.READY________//
$(document).ready(function() {

    //Update 'clock' in real-time (i.e., set clock millisecond interval)
    setInterval('updateTime()', 1000);


    // $('img[src="img/iconSampleDim.png"]').each(function(i) {
        // this.src = siteURL + this.src;
    // }); 

    // if ($('.gridSearchSounds img').attr('src') == "img/iconSampleDim.png") {
    //     $(this).next('.soundAdd').attr('opacity', '0')
    // }



    //Placeholder default icons
    // $('.iconSample1,.iconSample2,.iconSample3,.iconSample4').prepend('<img src="img/iconSample.png" height="10.9375vh"/>');
    


    //________NAVIGATION BETWEEN SCREENS________//

        //Define nav functions
        function show_homeScreen(){
            $('.page').hide();
            $('#homeScreen').show();
            $('.appContainer').css('background', '');
            $('.appContainer').css('background', 'linear-gradient(to bottom, #C5E5D3 0%, #C5E5D3 7%, #58B8D6 100%)');
            $('.iconNav, .iconSearch, .iconFav').hide().css('opacity', '0');
        };

            // show_all_task();
            // enable_task_click(); 
            // $('.action-back-btn').css('opacity', '0');
            // $('.action-btn').css('opacity', '1');
            // $('.header .title h1').text('All Tasks');
    
        function show_favSounds(){
            $('.page').hide();
            $('#favSounds').show();
            $('.appContainer').css('background', '');
            $('.appContainer').css('background', 'linear-gradient(#58B8D6 0%, #58B8D6 7%, #7AB1DF 100%)');
            $('.iconFav').hide().css('opacity', '0');
            $('.iconNav, .iconSearch').show().css('opacity', '1');
        };
    
        function show_searchSounds(){
            $('.page').hide();
            $('#searchSounds').show();
            $('.appContainer').css('background', '');
            $('.appContainer').css('background', 'linear-gradient(to bottom, #58B8D6 0%, #58B8D6 7%, #7AB1DF 100%)');
            $('.iconSearch').hide().css('opacity', '0');
            $('.iconFav').show().css('opacity', '1');
        };
    
        function show_sleepTrends(){
            $('.page').hide();
            $('#sleepTrends').show();
            $('.appContainer').css('background', '');
            $('.appContainer').css('background', 'linear-gradient(to bottom, #5F8ED2 0%, #5F8ED2 7%, #5F5FC2 100%)');
            $('.iconSearch').hide().css('opacity', '0');
            $('.iconFav').show().css('opacity', '1');
        };
    
        function show_remCycle(){
            $('.page').hide();
            $('#remCycle').show();
            $('.appContainer').css('background', '');
            $('.appContainer').css('background', 'linear-gradient(to bottom, #5F8ED2 0%, #5F8ED2 7%, #5F5FC2 100%)');
            $('.iconSearch').hide().css('opacity', '0');
            $('.iconFav').show().css('opacity', '1');
        };
    
        function show_mayTrends(){
            $('.page').hide();
            $('#mayTrends').show();
            $('.appContainer').css('background', '');
            $('.appContainer').css('background', 'linear-gradient(to bottom, #5F8ED2 0%, #5F8ED2 7%, #5F5FC2 100%)');
            $('.iconSearch').hide().css('opacity', '0');
            $('.iconFav').show().css('opacity', '1');
        };

        //Open app on Home Screen
        show_homeScreen();
        // fadeFX.home();
          //Debugging
            // show_favSounds();
            // show_searchSounds();
            // show_remCycle();
            // show_sleepTrends();
            // show_mayTrends();

        //Assign nav functions to icons
        // $('.iconNav').click(function(event){
        //  show_navMenu();
        // });
    
        $('.iconSearch').click(function(event){
            show_searchSounds();
        });
    
        $('#homeScreen').click(function(event){
            show_favSounds();
            fadeFX.initialFavSounds();
        });

        $('.iconFav, #linkFav').click(function(event){
            show_favSounds();
            fadeFX.defaultFavSounds();
        });
    
        $('.btnGoToSleep, .btnTrend').click(function(event){
            show_sleepTrends();
        });
    
        $('.btnREM').click(function(event){
            show_remCycle();
        });
    
        $('#linkDTrends, #linkMTrends, #may18').click(function(event){
            show_mayTrends();
        });


    //________FADE-IN EFFECTS________//
        var fadeFX = {
          //Home Screen
            home: function() {
                x
            },

          //Fav-Sounds Screen
            initialFavSounds: function() {
                $("#favSounds *").css('visibility','hidden');
                $(".timeRing *, #time *").css('visibility','visible');
              //"Currently"
                $("#favSounds>h2").delay(1200).css('visibility','visible').fadeTo(1000, 1);
              //Time
                $("#time *").delay(3300).css('visibility','visible').fadeTo(1000, 1);
              //"Your Favourite Sounds"
                $("#favSounds>h4").delay(1200).css('visibility','visible').fadeTo(1000, 1);
              //Icons
                setTimeout(function() {
                    $("#gridFavSounds div img:not(.iconEmpty").each(function(i){
                        $(this).delay(i*100).css('visibility','visible').fadeTo(1000, 1);
                    });
                }, 1000);
              //GoToSleep Button
                $(".btnGoToSleep").delay(1200).css('visibility','visible').fadeTo(1000, 1);
              //Information Popup
                setTimeout(function() {welcomePrompt().delay(5000);}, 2000);
            },
            defaultFavSounds: function() {
                $("#favSounds *").css('visibility','hidden');
                $(".timeRing *, #time *").css('visibility','visible');
              //"Currently"
                $("#favSounds>h2").delay(200).css('visibility','visible').fadeTo(300, 1);
              //Time
                $("#time *").delay(300).css('visibility','visible').fadeTo(300, 1);
              //"Your Favourite Sounds"
                $("#favSounds>h4").delay(200).css('visibility','visible').fadeTo(300, 1);
              //Icons
                setTimeout(function() {
                    // $("#gridFavSounds div img:not(.iconEmpty").each(function(i){
                    $("#gridFavSounds div img").each(function(i){
                        $(this).delay(i*50).css('visibility','visible').fadeTo(300, 1);
                    });
                }, 100);
              //GoToSleep Button
                $(".btnGoToSleep").delay(200).css('visibility','visible').fadeTo(300, 1);
            },
        };


    //________POPUP MESSAGES (TOAST.JS)________//

      //'Coming Soon' alert
        // $(".arrow").click(function() {
        //         alert("Coming Soon");
        // });

        //Using 'toast' plugin
        function welcomePrompt() {
            window.plugins.toast.showWithOptions(
            {
                message: "Welcome to SleepWell! \n \n On this screen you'll find your favourite sounds. \n \n How to: \n 1. Tap on any number of your favourite sounds to create a custom mix \n 2. Hit 'GO TO SLEEP' \n 3. Lock your device and place at the top of your bed above your head. \n 4. Sleep Well",
                duration: "15000", // which is 2000 ms. "long" is 4000. Or specify the nr of ms yourself.
                position: "top",
            });
        };

        function favAddedPrompt() {
            window.plugins.toast.showWithOptions(
            {
                message: "Sound added to Favourites",
                duration: "2000", // which is 2000 ms. "long" is 4000. Or specify the nr of ms yourself.
                position: "top",
            });
        };

        function favRemovedPrompt() {
            window.plugins.toast.showWithOptions(
            {
                message: "Sound removed from Favourites",
                duration: "2000", // which is 2000 ms. "long" is 4000. Or specify the nr of ms yourself.
                position: "top",
            });
        };
        
        //Fav sounds array        
        var favsArray = function () {
        var favsSoundsArray = [];
            $("#gridFavSounds img").each(function() {
                var arrayItem = { class: $(this).attr('class'), image: $(this).attr('src'), title: $(this).attr('alt') };
                // console.log(arrayItem)
                favsSoundsArray.push(arrayItem);
            })
            console.log("Your favourite sounds are: " + favsSoundsArray)
            return favsSoundsArray;
        };
        
    //________ARRAYS________//
        

//         var image = new Array();
// for(int i=0;i<20;i++){
//   image[i] = new Image();
//   image[i].src = "images/names" + i + ".jpg";
// // }

// forest, crickets

        var categoryNature = ["Ocean", "Rain", "Wind", "Trees", "Leaf", "Fire"];

        var categoryAnimal = ["Bird"];

        var categoryInstrumental = ["Piano"];

        var categoryMisc = ["Melody"];

        var audioSrc = [
            {name: "Ocean", class: "sndOcean", src: "sound/ocean.mp3"}, 
            {name: "Rain", class: "sndRain", src: "sound/rain.mp3"}, 
            {name: "Wind", class: "sndWind", src: "sound/wind.mp3"}, 
            {name: "Trees", class: "sndTrees", src: "sound/trees.mp3"}, 
            {name: "Leaf", class: "sndLeaf", src: "sound/leaf.mp3"}, 
            {name: "Fire", class: "sndFire", src: "sound/fire.mp3"},
            {name: "Bird", class: "sndBird", src: "sound/bird.mp3"},
            {name: "Piano", class: "sndPiano", src: "sound/piano.mp3"},
            {name: "Melody", class: "sndMelody", src: "sound/melody.mp3"}
        ];

        var defaultArray = [];
        // var defaultSelector = document.getElementsByClassName("#gridFavSounds div img[class^='icon']");    // Select 'soundAdd' icon (reference element)
        // for(let i = 0; i < defaultSelector.length; i++) {    // Iterate through selected elements
        // $("#gridFavSounds div img[class^='icon']").each(function() {
        $(".gridSearchSounds img[class^='icon']:not(.iconEmpty)").each(function() {
            var defArrayItem = { class: $(this).attr('class'), image: $(this).attr('src'), title: $(this).attr('alt') };
            defaultArray.push(defArrayItem);
        });
        // console.log(defaultArray) 
        // return defaultArray

        


      // Alert if favs full (9 sounds max)
        // var favsLimit = $("#gridFavSounds").find("img[class^='icon']");
        //     $("#gridFavSounds").find("img[class$='Empty']", favsLimit).remove();
        // // var elems = $("*[class*='-highlight datepick-other-month']");
        // console.log("Limit length = " + favsLimit.length)

        // var favsArray = [];
        // var divSnd = document.getElementsByClassName("div[class^='snd']").toString();
        // // var divSnd = "div[class^='snd']";
        // // for (var i = 0; i < divSnd.length; i++); {
        //     favsArray.push(divSnd);
        
        // console.log("array" + favsArray)

        // var favsLimit = $("#gridFavSounds").find("img[class^='icon']");
        // console.log("Limit length = " + favsLimit)

        // $("#gridFavSounds").find("img[class$='Empty']", favsLimit).remove();

        // var audSearch = $(".gridSearchSounds img[class^='icon']:not(.iconEmpty)");
        // var addxSound = document.querySelectorAll(".gridSearchSounds img[class^='icon']:not(.iconEmpty)");    // Select 'soundAdd' icon (reference element)
        // var audSearch = $(".gridSearchSounds img[class^='icon']:not(.iconEmpty)");
        // Hammer(audSearch, {event: 'tap', pointer: 1, taps: 1, threshold: 2, time: 250}).on("tap", function(e) {
        //     var insertAud = $(this).class().slice[4];
        //     console.log(insertAud)
        // });

    //________SOUND BOARD________//
    //________SOUND BOARD________//

        // function play(noise2) { //Play(sndSound)
        //     var audImgSrc = "sound/" + noise2.slice(3) + ".mp3"; //sound/(sound).mp3
        //     audImgSrc == audImgSrc;
        //         console.log("snd?????? = " + noise2)
        //         console.log("src = " + audImgSrc)
            
        //     var createTempObj = document.createElement('audio'); //new element
        //         createTempObj.setAttribute('id', 'tempObj'); //id="tempObj"
        //         createTempObj.setAttribute('src', audImgSrc); //src="sound/(sound).mp3"
        //         // createTempObj.loop = true; //loop audio
        //     $('.btnGoToSleep').after(createTempObj);
        //         createTempObj.setAttribute('loop', 'loop'); //src="sound/(sound).mp3"
        //         // createTempObj.setAttribute('loop', 'loop');
        //         // createTempObj == createTempObj
        //             console.log("xx" + createTempObj)
            
        //     // var audio = document.getElementById(noise);
        //     var tempSnd = document.getElementById('tempObj'); //#sndSound
        //     //     console.log("audio = " + audio)

        //     if (tempSnd.currentTime = 0) {
        //         tempSnd.play();
        //         console.log(noise2.split("snd")[1] + " audio played");
        //     } else if (tempSnd.currentTime != 0) {
        //         tempSnd.pause();
        //         tempSnd.currentTime = 0;
        //         console.log(noise2.split("snd")[1] + " audio stopped");
        //     };
        //     // return
        // };

        // $('.gridSearchSounds img[class^="icon"]:not(.iconEmpty)').click(function() {
        //     var sound2 = $(this).attr('class'); //iconSound
        //     var noise2 = "snd" + sound2.split("icon")[1]; //sndSound
        //     sound2 = '.' + sound2; //.iconSound
        //         console.log(sound2.split("icon")[1] + " icon selected")
        //     changeImage(sound2); //changeImage(iconSound)
        //     play(noise2); //Play(sndSound)
        //         console.log('sound class reset to ' + sound2)
        // });


                // var tappedImgToAud = $(hmrImgToAud).attr("class");
                // console.log("Sound tapped to add: " + tappedImgToAud)

                // selectorImgAud = tappedImgToAud.slice(4);
                // selectorImgAud == selectorImgAud;
                // console.log("Sound to be added to favs = " + selectorImgAud)
                // var audImgSrc = "sound/" + selectorImgAud.toLowerCase() + ".mp3";
                // console.log("Sound = " + audImgSrc)


                // var createTempObj = document.createElement('audio');
                // createTempObj.setAttribute('id', "tempObj");
                // createTempObj.setAttribute('src', audImgSrc);

                // // createTempObj.className = "tempObj";
                // // var oo = $(".createTempObj").attr('src', audImgSrc)
                // ooo = JSON.stringify($("#tempObj").attr('src'))
                // console.log("Sound src = " + ooo)

                
                // var tempObjPlay = document.getElementById("tempObj"); 
                
                // if (tempObjPlay.paused) {
                //     tempObjPlay.play();
                //     console.log(selectorImgAud + " audio played");
                // } else {
                //     tempObjPlay.pause();
                //     tempObjPlay.currentTime = 0;
                //     console.log(selectorImgAud + " audio stopped");
                // };

                // $("#div1").remove();
                // this).after()


        

        // $('.gridSearchSounds').find('img[src="iconSampleDim.png"]').next().attr('opacity', '0');

        // var addxSound = document.getElementById(".gridSearchSounds img[class^='icon']:not(.iconEmpty)");    // Select 'soundAdd' icon (reference element)
        // var addxSound = document.getElementsByClassName(".gridSearchSounds img[class^='icon']:not(.iconEmpty)");    // Select 'soundAdd' icon (reference element)
        // console.log("cheeeeese" + JSON.stringify(addsssSound))
        // var addSearchs = new Hammer(addxSound, {event: 'tap', pointer: 1, taps: 1, threshold: 2, time: 250});
        // addSearchs.on('tap', function(ev) {
        //     console.log("hello" + ev);
        // });

        // var addxSound = document.getElementById(".gridSearchSounds img[class^='icon']:not(.iconEmpty)");    // Select 'soundAdd' icon (reference element)
        // var addcSound = new Hammer(addxSound);
        // mc.on("panleft panright tap press", function(ev) {
        //     ID.textContent = ev.type +" gesture detected.";
        // });

      //Add sounds to favourites
        var addSound = document.querySelectorAll(".soundAdd");    // Select 'soundAdd' icon (reference element)
        for(let i = 0; i < addSound.length; i++) {    // Iterate through selected elements
            let hmrAdd = addSound.item(i);    // Represents current selected element in NodeList
            Hammer(hmrAdd, {event: 'tap', pointer: 1, taps: 1, threshold: 2, time: 250}).on("tap", function(e) {    //Define Hammer.js 'Press' function
                var tapped = $(hmrAdd).prev("img").attr("class");
                    console.log("Sound tapped to add: " + tapped)
                if (!$("#gridFavSounds *").hasClass(tapped)) {
                  // Execute add function on tap
                    $("#gridFavSounds .iconEmpty").first().parent().attr('id', 'tempActive');    // Select next available free slot (i.e., iconSampleDim)
                    var changeValue = $("#tempActive").attr('id');
                        console.log("Obj changing = " + changeValue)
                    selectorAdd = tapped.slice(4);
                    selectorAdd == selectorAdd;
                        console.log("Sound to be added to favs = " + selectorAdd)
                    FavSounds();
    
                    function FavSounds() {
                        var imgClass = "icon" + selectorAdd.toString();
                        var imgSrc = "img/icon" + selectorAdd.toString() + ".png";
                        var imgAlt = selectorAdd.toString();
                        var audId = "snd" + selectorAdd.toString();
                        var audSrc = "sound/" + selectorAdd.toString().toLowerCase() + ".mp3";
                            console.log("Variable check:" + '\n' + "    imgClass = " + imgClass + '\n' + "    imgSrc = " + imgSrc + '\n' + "    imgAlt = " + imgAlt + '\n' + "    audId = " + audId + '\n' + "    audSrc = " + audSrc)
                      //Replace active img
                        $("#" + changeValue).children("img").attr({class: "", src: "", alt: ""});
                        $("#" + changeValue).children("img").attr({class: imgClass, src: imgSrc, alt: imgAlt});
                      //Replace active audio
                        $("#" + changeValue).children("audio").attr({id: "", src: ""});
                        $("#" + changeValue).children("audio").attr({id: audId, src: audSrc});
                            console.log(selectorAdd + " moved to Favs")
                      //Reset selector
                        $("#" + changeValue).attr('id', '');
                    };

                    favAddedPrompt();
                        console.log("Sound added successfully")
                    favsArray();
                };

            });
                
        };

    // Execute remove function on hold
        var removeSound = document.querySelectorAll("#gridFavSounds img[class^='icon']");    // Select 'soundAdd' icon (reference element)
        for(let i = 0; i < removeSound.length; i++) {    // Iterate through selected elements
            let hmrRemove = removeSound.item(i);    // Represents current selected element in NodeList
            Hammer(hmrRemove, {event: 'press', pointer: 1, threshold: 5, time: 500}).on("press", function(e) {    //Define Hammer.js 'Press' function
                var pressed = $(hmrRemove).attr("class");
                    console.log("Sound pressed for removal: " + pressed)
                if (!$(".gridSearchSounds *").hasClass(pressed)) {
                  // Execute remove function on press
                    var searchId = $(".gridSearchSounds .iconEmpty").first().attr('id');
                        console.log("originalID.Check = " + searchId)
                    $(".gridSearchSounds .iconEmpty").first().attr('id', '');
                    $(".gridSearchSounds .iconEmpty").first().attr('id', 'tempActive');    // Select next available free slot (i.e., iconSampleDim)
                        console.log("tempID.Changed = " + $(".gridSearchSounds .iconEmpty").first().attr('id'))
                    var changeValue = $("#tempActive").attr('id');
                        console.log("Obj changing = " + changeValue)
                    selectorRemove = pressed.slice(4);
                    selectorRemove == selectorRemove;
                        console.log("Sound to be removed from favs = " + selectorRemove)
                    SearchSounds();
    
                        console.log("searchid = " + $(".gridSearchSounds .iconEmpty").first().attr('id'))
                    $(".gridSearchSounds .iconEmpty").first().attr('id', '');
                        console.log("originalID.Restore = " + $(".gridSearchSounds .iconEmpty").first().attr('id'))
                    $(".gridSearchSounds .iconEmpty").first().attr('id', searchId);
                        console.log("searchid = " + $(".gridSearchSounds .iconEmpty").first().attr('id'))
    
                  // Replace icon with iconEmpty
                    // $("." + pressed).parent().children("img").attr({class: "", src: "", alt: ""});
                    $("#gridFavSounds").append($("#gridFavSounds ." + pressed).parent());
                    $("#gridFavSounds ." + pressed).parent().children("img").attr({class: "iconEmpty", src: "img/iconSampleDim.png",});
                    // $("." + pressed).parent().children("audio").attr({id: "", src: ""});
                    // $("#gridFavSounds ." + pressed).parent().remove();
                    // $("#gridFavSounds").append('<div><img class="iconWind" src="img/iconWind.png" alt="Empty"><audio id="" src="" loop></audio></div>');
                    // $("#gridFavSounds img, audio").each(function() {
                    //     $(this).insertBefore($(this).parent());
                    // $(this).insertBefore($(this).parent());
                    // });
                    // $(".snd9").append('<audio id="" src="" loop></audio>');
                    // for(let i = 0; i < shiftDivs.length; i++) {    // Iterate through selected elements
                    // let hmrRemove = removeSound.item(i);
                    // [].forEach.call(shiftDivs, function (el) {
                    //     $(this).attr("class").push()
                    // });
                    // var snd1test = document.getElementsByClassName("snd1")[0].innerHTML;
                    // var snd8test = document.getElementsByClassName("snd8")[0].innerHTML;
                    // var snd9test = document.getElementsByClassName("snd9")[0].innerHTML;
                    // console.log("snd1 POST SHIFT = " + snd1test)

                    // var shiftDivs = document.querySelectorAll("#gridFavSounds>div")
                    // var Fg = []
                    // for (var i = 1; i < shiftDivs.length; i++ ) {
                    //   //Shift icons (i.e., move up one div)
                    //     $("img, audio").append($(this).prev());
                    // };

                  //Replace icon with iconEmpty
                    // console.log("sn1 PRE remove = " + snd1test)
                    // console.log("sn8 PRE remove = " + snd8test)
                    // console.log("sn9 PRE remove = " + snd9test)
                    // console.log("PRESSED TO REMOVE = " + pressed)

                    // $("#gridFavSounds ." + pressed).parent().children().css('border', '1px solid red');
                    // $("#gridFavSounds ." + pressed).parent().children().remove();
                    // console.log("snd1 POST remove = " + snd1test)
                    // console.log("sn8 POST remove = " + snd8test)
                    // console.log("sn9 POST remove = " + snd9test)

                    // console.log("snd1 POST SHIFT = " + snd1test)
                    // console.log("sn8 POST SHIFT = " + snd8test)
                    // console.log("sn9 POST SHIFT = " + snd9test)

                  //Replace empty spot
                    // $(".snd9").append('<img class="iconWind" src="img/iconWind.png" alt="Empty">');
                    // $(".snd9").append('<audio id="" src="" loop></audio>');
                    // console.log("sn8 POST APPEND = " + snd8test)
                    // console.log("sn9 POST APPEND = " + snd9test)


                    function SearchSounds() {
                        var imgClass = "icon" + selectorRemove.toString();
                        var imgSrc = "img/icon" + selectorRemove.toString() + ".png";
                        var imgAlt = selectorRemove.toString();
                        var audClass = "snd" + selectorRemove.toString();
                        var audSrc = "sound/" + selectorRemove.toString().toLowerCase() + ".mp3";
                            console.log("Variable check:" + '\n' + "    imgClass = " + imgClass + '\n' + "    imgSrc = " + imgSrc + '\n' + "    imgAlt = " + imgAlt + '\n' + "    audClass = " + audClass + '\n' + "    audSrc = " + audSrc)
                      //Replace active img
                        $("#" + changeValue).attr({class: "", src: "", alt: ""});
                        $("#" + changeValue).attr({class: imgClass, src: imgSrc, alt: imgAlt});
                      //Replace active audio
                        $("#" + changeValue).nextAll().eq(1).attr({class: "", src: ""});
                        $("#" + changeValue).nextAll().eq(1).attr({class: audClass, src: audSrc});
                            console.log(selectorRemove + " removed from Favs")
                      //Reset selector
                        $("#" + changeValue).attr('id', '');
                    };
                    // favRemovedPrompt();
                        console.log("Sound removed successfully")
                    // favsArray();
                };

                
            });
                
        };

      //Change active img when audio plays
        function changeImage(sound) {
            var icon = $(sound);
            if(icon.attr('src') == "img/iconBird.png"){
                icon.attr('src', "img/iconBird1.png");
                console.log('Bird icon changed');
            } else if(icon.attr('src') == "img/iconBird1.png"){
                icon.attr('src', "img/iconBird.png");
                console.log('Bird icon reset');
            } else if(icon.attr('src') == "img/iconLeaf.png"){
                icon.attr('src', "img/iconLeaf1.png");
                console.log('Leaf icon changed');
            } else if(icon.attr('src') == "img/iconLeaf1.png"){
                icon.attr('src', "img/iconLeaf.png");
                console.log('Leaf icon reset');
            } else if(icon.attr('src') == "img/iconTrees.png"){
                icon.attr('src', "img/iconTrees1.png");
                console.log('Trees icon changed');
            } else if(icon.attr('src') == "img/iconTrees1.png"){
                icon.attr('src', "img/iconTrees.png");
                console.log('Trees icon reset');
            } else if(icon.attr('src') == "img/iconRain.png"){
                icon.attr('src', "img/iconRain1.png");
                console.log('Rain icon changed');
            } else if(icon.attr('src') == "img/iconRain1.png"){
                icon.attr('src', "img/iconRain.png");
                console.log('Rain icon reset');
            } else if(icon.attr('src') == "img/iconOcean.png"){
                icon.attr('src', "img/iconOcean1.png");
                console.log('Ocean icon changed');
            } else if(icon.attr('src') == "img/iconOcean1.png"){
                icon.attr('src', "img/iconOcean.png");
                console.log('Ocean icon reset');
            } else if(icon.attr('src') == "img/iconWind.png"){
                icon.attr('src', "img/iconWind1.png");
                console.log('Wind icon changed');
            } else if(icon.attr('src') == "img/iconWind1.png"){
                icon.attr('src', "img/iconWind.png");
                console.log('Wind icon reset');
            } else if(icon.attr('src') == "img/iconFire.png"){
                icon.attr('src', "img/iconFire1.png");
                console.log('Fire icon changed');
            } else if(icon.attr('src') == "img/iconFire1.png"){
                icon.attr('src', "img/iconFire.png");
                console.log('Fire icon reset');
            } else if(icon.attr('src') == "img/iconMelody.png"){
                icon.attr('src', "img/iconMelody1.png");
                console.log('Melody icon changed');
            } else if(icon.attr('src') == "img/iconMelody1.png"){
                icon.attr('src', "img/iconMelody.png");
                console.log('Melody icon reset');
            } else if(icon.attr('src') == "img/iconPiano.png"){
                icon.attr('src', "img/iconPiano1.png");
                console.log('Piano icon changed');
            } else if(icon.attr('src') == "img/iconPiano1.png"){
                icon.attr('src', "img/iconPiano.png");
                console.log('Piano icon reset');
            }
        };

      //Favs: Toggle audio play/pause
        function playFavs(noise) {
            var audio = document.getElementById(noise);
                console.log("xx1" + audio)            
            if (audio.paused) {
                audio.play();
                console.log(noise.split("snd")[1] + " audio played");
            } else {
                audio.pause();
                audio.currentTime = 0;
                console.log(noise.split("snd")[1] + " audio stopped");
            };
        };
      //Favs: Change icon & toggle play/pause on click (i.e., execute 'changeImage(sound)' & 'play(noise)')
        var changeImg = document.querySelectorAll(".sounds img");    // Select 'soundAdd' icon (reference element)
        for(let i = 0; i < changeImg.length; i++) {    // Iterate through selected elements
            let hmrImg = changeImg.item(i);    // Represents current selected element in NodeList
            Hammer(hmrImg, {event: 'tap', pointer: 1, taps: 1, threshold: 2, time: 250}).on("tap", function(e) {    //Define Hammer.js 'Press' function
                var sound = $(hmrImg).attr('class');
                    console.log("Image to be changed  = " + sound)
                var noise = "snd" + sound.slice(4);
                sound = '.' + sound;
                    console.log(sound.split("icon")[1] + " icon selected")
                changeImage(sound);
                playFavs(noise);
                    console.log('sound class reset to ' + sound)
            });
        };

      //Search: Toggle audio play/pause
        function playSearch(noise2) {
            var audio2 = document.querySelector(".gridSearchSounds ." + noise2);
                console.log("audio2 check = ...... " + JSON.stringify(audio2))            
                console.log("xx2" + audio2)            
    
            if (audio2.paused) {
                audio2.play();
                console.log(noise2.split("snd")[1] + " audio2 played");
            } else {
                audio2.pause();
                audio2.currentTime = 0;
                console.log(noise2.split("snd")[1] + " audio2 stopped");
            };
        };
      //Search: Change icon & toggle play/pause on click (i.e., execute 'changeImage(sound)' & 'play(noise2)')
        var changeImg = document.querySelectorAll(".gridSearchSounds img[class^='icon']:not(.iconEmpty)");    // Select 'soundAdd' icon (reference element)
        for(let i = 0; i < changeImg.length; i++) {    // Iterate through selected elements
            let hmrImg = changeImg.item(i);    // Represents current selected element in NodeList
            Hammer(hmrImg, {event: 'tap', pointer: 1, taps: 1, threshold: 2, time: 250}).on("tap", function(e) {    //Define Hammer.js 'Press' function
                var sound = $(hmrImg).attr('class');
                    console.log("Image to be changed  = " + sound)
                var noise2 = "snd" + sound.slice(4);
                    console.log("var noise2 = " + noise2)
                sound = '.' + sound;
                    console.log(sound.split("icon")[1] + " icon selected")
                changeImage(sound);
                playSearch(noise2);
                    console.log("sound class reset to " + sound)
            });
        };


    //________SNAP TO SCROLL ________//



    //________ACCELEROMETER SLEEP DETECTION ________//
    window.ondevicemotion = function(event) {
        var accelerationX = event.accelerationIncludingGravity.x;
        var accelerationY = event.accelerationIncludingGravity.y;
        var accelerationZ = event.accelerationIncludingGravity.z;
    }

    //________ ...end... ________//
});









