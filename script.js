/*----------------------------------------DATA----------------------------------------*/

/* NB: first and last must be the same*/

var imgs = [
    {
        title : "1" ,
        description : "an image" ,
        src : "img/img-1.jpg"
    } ,
    {
        title : "2" ,
        description : "an image" ,
        src : "img/img-2.jpg"
    } ,
    {
        title : "3" ,
        description : "an image" ,
        src : "img/img-3.jpg"
    } ,
    {
        title : "4" ,
        description : "an image" ,
        src : "img/img-4.jpg"
    } ,
    {
        title : "5" ,
        description : "an image" ,
        src : "img/img-5.jpg"
    } ,
    {
        title : "1" ,
        description : "an image" ,
        src : "img/img-1.jpg"
    } ,
];

/*----------------------------------------MODEL----------------------------------------*/
var model = {
    
    /*timeout of display per pic, mS*/
    timer : 2000 ,
    
    /* slider dimensions, set in the init function, we use BOOTSTRAP for responsive dims, so this type is string
       @TODO: choose one here -> http://getbootstrap.com/css/#grid-options, we use full-screen */
    sl_class_dim : "col-md-12 col-xs-12",
    
    /*set in the init function*/
    imgsNumber : 0 ,

    init : function(){
        this.imgsNumber = imgs.length;
    }
}

/*----------------------------------------CONTROLLER----------------------------------------*/
var controller = {   
    init : function() {
        model.init();
        view.init();
    } ,
    
    get_slider_dims_class : function (){
        return model.sl_class_dim;
    } ,
    
    get_timer : function(){
        return model.timer;
    }
}

/*----------------------------------------VIEW----------------------------------------*/
var view = {
    
    flag : true ,
    
    init : function() {
        
        var $slider = $('.carousel');
        var numberOfImages = imgs.length;
        
        $slider.addClass(controller.get_slider_dims_class);
        
        /*add imgs in the carousel*/
        for(var i = 0; i < numberOfImages; i++){
            /*add with three specs:
             * -class -> pics
             * -id -> # + sort 
             * src */
            $slider.append('<img class="pics" id="' + i + '-sort" src="' + imgs[i].src+ '">');
        }
        
        view.animate();
    } ,
    
    animate : function () {
        
        /*ALGORITH with words: 
         * - images are in order horizontally in a long block like this -> □□□□□□□□□□
         * - we can see only one photo at a time
         * - images are the same width
         * - move the first image to the left of its width, moving in turn all block of images
         * - now the first one is hide, and the second one is visible
         * - go on with the same on second image and so on 
         * - if the last photo position is  visible (we check that in that way: if its left position is back than the window size / 2) 
         *    move the first photo to the initial position 
         * - how do on resize? -> stop animation! 
         */
        
        var numberOfImages = imgs.length;
        
        /*get first and last image */
        var $fistSort = $('#0-sort');
        var $lastSort = $('#' + (numberOfImages-1) + '-sort');
        
        /*get the current lenght of slider, the same of images*/
        var lenghtOfSlider = $fistSort.width();
        
        /*get the current position of the last photo*/
        var lastPosLeft = $lastSort.position().left;
        
        /*get the current window width*/
        var windowWidth = $(window).width();
        
        /*if the last photo is visible*/
        if(lastPosLeft < windowWidth / 2){
            /*move, without animate, the first image to the initial position*/
            $fistSort.css('margin-left', 0 ) ;                 
        }
        
        /*on resize*/
        $(window).resize(function() {
            /*this is a great implementation finded here 
             *      -> http://stackoverflow.com/questions/5489946/jquery-how-to-wait-for-the-end-of-resize-event-and-only-then-perform-an-ac*/
            clearTimeout(window.resizedFinished);
            window.resizedFinished = setTimeout(function(){
                view.animate();
            }, 250);
            
            /*stop animation*/
            $fistSort.stop();
            /*move, without animate, the first image to the initial position to aovid bad things*/
            $fistSort.css('margin-left', 0 );
        });
        
        /*wait before animate*/
        $fistSort.delay(controller.get_timer());
        /*finally animate*/
        $fistSort.animate({marginLeft:"-=" + lenghtOfSlider }, "med", view.animate);
     
    } 
}


/*----------------------------------------Let's go----------------------------------------*/
$(document).ready(function(){
    controller.init();
});


