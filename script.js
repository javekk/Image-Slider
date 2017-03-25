/*----------------------------------------DATA----------------------------------------*/

/* NB: first and last must be the same*/

var imgs = [
    {
        title : "narnia" ,
        description : "A great man with same thing" ,
        src : "img/img-1.jpg"
    } ,
    {
        title : "xanax" ,
        description : "aSupposta" ,
        src : "img/img-2.jpg"
    } ,
    {
        title : "3" ,
        description : "Orpo" ,
        src : "img/img-3.jpg"
    } ,
    {
        title : "4" ,
        description : "non mi ricordi più il mare" ,
        src : "img/img-4.jpg"
    } ,
    {
        title : "5" ,
        description : "an image" ,
        src : "img/img-5.jpg"
    } ,
    {
        title : "narnia" ,
        description : "A great man with same thing" ,
        src : "img/img-1.jpg"
    } ,
];

/*----------------------------------------MODEL----------------------------------------*/
var model = {
    
    /*timeout of display per pic, mS*/
    timer : 2000 ,
    
    /* slider dimensions, set in the init function, we use BOOTSTRAP for responsive dims, so this type is string
     *   @TODO: choose one here -> http://getbootstrap.com/css/#grid-options, we use full-screen */
    slClassSize: "col-md-6 col-xs-12 col-md-offset-3",
    
    /*set in the init function*/
    imgsNumber : 0 ,

    init : function(){
        this.imgsNumber = imgs.length;
    } ,
    
    get_src : function(numberOfImg){
        return imgs[numberOfImg].src;
    } ,
    
    get_title : function(numberOfImg){
        return imgs[numberOfImg].title;
    } ,
    
    get_description : function(numberOfImg){
        return imgs[numberOfImg].description;
    }
}

/*----------------------------------------CONTROLLER----------------------------------------*/
var controller = {   
    init : function() {
        model.init();
        view.init();
    } ,
    
    get_slider_dims_class : function (){
        return model.slClassSize;
    } ,
    
    get_timer : function(){
        return model.timer;
    } ,
    
    get_src : function(numberOfImg){
        return model.get_src(numberOfImg);
    } ,
    
    get_title : function(numberOfImg){
        return model.get_title(numberOfImg);
    } ,
    
    get_description : function(numberOfImg){
        return model.get_description(numberOfImg);
    } ,
    
    get_image_number(){
        return model.imgsNumber;
    }
}

/*----------------------------------------VIEW----------------------------------------*/
var view = {
    
    init : function() {
        
        /*Insert labels for title and description containers with is position 
         *
         * this is our tree:
         * SLIDERCONTAINER ┬-> SLIDER -> IMAGES
         *                 └-> upperRow ┬-> arrow l
         *                              ├-> labels
         *                              └-> arrow r
         * here we create label container with is css, and add decription of first photos
         */
        
        
        var $slider = $('.carousel');
        var $sliderContainer = $('.carouselContainer');
        var numberOfImages = imgs.length;
        
        /*get the size of our slider*/
        $sliderContainer.addClass(controller.get_slider_dims_class);
        
        /*add IMGS in the carousel*/
        for(var i = 0; i < numberOfImages; i++){
            /*add with three specs:
             * -class -> pics
             * -id -> # + sort 
             * src */
            $slider.append('<img class="pics" id="' + i + '-sort" src="' + controller.get_src(i) + '">');
        }
        
        
        $sliderContainer.append('<div class="row" id="upperRow"></div>');
        var $upperRow = $('#upperRow');
        
        /*add the LEFT ARROW*/
        $upperRow.append('<div class="over col-md-1 col-xs-1" id="leftArrow"><h2>◀</h2></div> ');
        var $leftArrow = $('#leftArrow');
        $leftArrow.css('top', '40%');
        $leftArrow.css('bottom', '60%');
        $leftArrow.css('padding-left', 22);
        $leftArrow.css('color', "black" );
        
        /*add the LABELS*/
        $upperRow.append('<div class="over jumbotron col-md-10 col-xs-10 col-md-offset-1 col-xs-offset-1" id="labelContainer"></div>');
        var $labelContainer = $('#labelContainer');
        $labelContainer.css('bottom', -20 ); 
        $labelContainer.css('color', "black" ); 
        $labelContainer.append('<h1 id="title">' + controller.get_title(0) + '</h1>');
        $labelContainer.append('<p id="description">' + controller.get_description(0) + '</p>');
        
        /*add the RIGHT ARROW*/
        $upperRow.append('<div class="over col-md-1 col-xs-1 col-md-offset-11 col-xs-offset-11" id="rightArrow"><h2>▶</h2S></div>');
        var $rightArrow = $('#rightArrow');
        $rightArrow.css('top', '40%');
        $rightArrow.css('bottom', '60%');
        $rightArrow.css('padding-right', 22);
        $rightArrow.css('color', "black" );
        
        /*let's animate*/
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
         * - if the last photo position is  visible (we check that in that way: if its left position is equal to the left position of slider) 
         *    move the first photo to the initial position 
         * - how do on resize? -> stop animation! 
         */
        
        var numberOfImages = imgs.length;
        
        /*get first and last image */
        var $firstSort = $('#0-sort');
        var $lastSort = $('#' + (numberOfImages-1) + '-sort');
        
        /*get the current lenght of slider, the same of images*/
        var lenghtOfSlider = $firstSort.width();
        
        /*get the current position of the last photo*/
        var lastPosLeft = $lastSort.position().left;
        
        /*get the current window width*/
        var sliderLeftPosition = $('.carousel').position().left;
        
        /*if the last photo is visible with 15px of accuration*/
        if(lastPosLeft < sliderLeftPosition + 15){
            /*move, without animate, the first image to the initial position*/
            $firstSort.css('margin-left', 0 );                 
        }
        
        /*on resize*/
        $(window).resize(function() {
            /*this is a great implementation finded here 
             *      -> http://stackoverflow.com/questions/5489946/jquery-how-to-wait-for-the-end-of-resize-event-and-only-then-perform-an-ac*/
            clearTimeout(window.resizedFinished);
            window.resizedFinished = setTimeout(function(){
                view.animate();
            }, 50);
            
            /*stop animation*/
            $firstSort.stop();
            /*move, without animate, the first image to the initial position to avoid bad things*/
            $firstSort.css('margin-left', 0 );
            
            /*adapt the title and description label for current image*/
            view.adaptLabelContainer(view.getCurrentImage(lastPosLeft, lenghtOfSlider));
        });
        
        /*wait before animate*/
        $firstSort.delay(controller.get_timer());
        /*finally animate*/
        $firstSort.animate({marginLeft: "-=" + lenghtOfSlider}, "med", view.animate);
        
        /*adapt the title and description label for current image*/
        view.adaptLabelContainer(view.getCurrentImage(lastPosLeft, lenghtOfSlider));
     
    } ,
    
    
    adaptLabelContainer : function (currentImage){
        
        var $title = $('#title');
        var $description = $('#description');
        
        $title.text(controller.get_title(currentImage));
        $description.text(controller.get_description(currentImage));
        
    } ,
    
    
    getCurrentImage : function (lastPosLeft, lenghtOfSlider) {
        
        var totalLenght = controller.get_image_number() * lenghtOfSlider;
        
         /* we have this:
         *  
         *               <- ⬛⬜⬜⬜⬜⬜⬜ 1st photo displayed
         *                 ⬜⬛⬜⬜⬜⬜⬜  2nd photo displayed
         *                ⬜⬜⬛⬜⬜⬜⬜   3rd photo displayed
         *
         * Y = marginLeft of last image
         * T = total lenght of images block 
         * t = image lenght
         * X = current image dysplayed
         *
         * FLOW: first image is displayed  (1) -> Y = T - (t * 1)
         *       second image is displayed (2) -> Y = T - (t * 2)
         *          .   .   .   .   .   .
         *       x-th image is displayed   (X) -> Y = T - (t * X)
         *
         *       SO ⤇ [X = (T-Y)/t] 
         *       (-1? -> Array....)
         **/
        var currentImage = (( totalLenght - lastPosLeft ) / lenghtOfSlider) - 1;
        
        return currentImage;
    }
    
    
}


/*----------------------------------------Let's go----------------------------------------*/
$(document).ready(function(){
    controller.init();
});


