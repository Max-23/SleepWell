/*Cordova
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
*/

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

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

$(function() {
    FastClick.attach(document.body);
});

$(function(){
    $('.iconNav').click(function(e) {
        $('.iconNav').hide();
        $('#navMenu').removeAttr('display');
        $('#navMenu').addClass('slide');
        $('#navMenu').show();
        $('#navMenu').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
            $('.iconNavRev').click(function(e) {
        // $(this).hide();
        // $('#navMenu').removeClass('slideIn');
                $('.slide').css('animation', '');
                $('.slide').css('animation', 'navSlideBack 0.5s ease');
                $('#navMenu').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
                    $('.slide').css('animation', '');
                    $('#navMenu').removeClass('slide');
                    $('.slide').css('animation', 'navSlide 1s ease');
                    $('#navMenu').attr('display', 'none');
                    $('#navMenu').hide();
                    $('.iconNav').show();
                });
            });
        });
    });
});

$(document).ready(function() {
    // updates 'clock' in real-time
    setInterval('updateTime()', 1000);

    // insert placeholder default icons
    $('.iconSample1,.iconSample2,.iconSample3,.iconSample4').prepend('<img src="img/iconSample.png" width="15%"/><img class="soundAdd" src="img/iconAdd.png"/>');
    $('.arrow').prepend('<img src="img/iconMore.png" height="10 %"/>');

    function show_homeScreen(){
        $('.page').hide();
        $('#homeScreen').show();
        $('.appContainer').css('background', '');
        $('.appContainer').css('background', 'linear-gradient(to bottom, #C5E5D3 0%, #C5E5D3 7%, #58B8D6 100%)');
        $('.iconNav, .iconSearch, .iconFav').hide().css('opacity', '0');
    };

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

    show_homeScreen();

    // $('.iconNav').click(function(event){
    //  show_navMenu();
    // });

    $('.iconSearch').click(function(event){
        show_searchSounds();
    });

    $('#homeScreen, .iconFav, #linkFav').click(function(event){
        show_favSounds();
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

    // sound board
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

    function play(noise) {
        var audio = document.getElementById(noise);

        if (audio.paused) {
            audio.play();
            console.log(noise.split("snd")[1] + " audio played");
        } else {
            audio.pause();
            audio.currentTime = 0;
            console.log(noise.split("snd")[1] + " audio stopped");
        };
    };
    
    $('.sounds img').click(function() {
        var sound = $(this).attr('class');
        var noise = "snd" + sound.split("icon")[1];
        sound = '.' + sound;
        console.log(sound.split("icon")[1] + " icon selected")
        changeImage(sound);
        play(noise);
        console.log('sound class reset to ' + sound)
    });
});