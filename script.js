
/*----------------------┏━━━━┓---┏━━━━━━┓--┏━━━━━━━┓--┏━━━━━━┓-------------*/
/*----------------------┃ ┏┓ ┗┓--┃ ┏━━┓ ┃--┗━━┓ ┏━━┛--┃ ┏━━┓ ┃-------------*/
/*----------------------┃ ┃┗┓ ┃--┃ ┗━━┛ ┃-----┃ ┃-----┃ ┗━━┛ ┃-------------*/
/*----------------------┃ ┃┏┛ ┃--┃ ┏━━┓ ┃-----┃ ┃-----┃ ┏━━┓ ┃-------------*/
/*----------------------┃ ┗┛ ┏┛--┃ ┃--┃ ┃-----┃ ┃-----┃ ┃--┃ ┃-------------*/
/*----------------------┗━━━━┛---┗━┛--┗━┛-----┗━┛-----┗━┛--┗━┛-------------*/

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


/*--------------------┏━━━━┓┏━━━━┓--┏━━━━━━━┓--┏━━━━┓---┏━━━━━━┓--┏━┓------------------*/
/*--------------------┃ ┏┓ ┃┃ ┏┓ ┃--┃ ┏━━━┓ ┃--┃ ┏┓ ┗┓--┃ ┏━━━━┛--┃ ┃------------------*/
/*--------------------┃ ┃┃ ┃┃ ┃┃ ┃--┃ ┃---┃ ┃--┃ ┃┗┓ ┃--┃ ┗━━━━┓--┃ ┃------------------*/
/*--------------------┃ ┃┃ ┃┃ ┃┃ ┃--┃ ┃---┃ ┃--┃ ┃┏┛ ┃--┃ ┏━━━━┛--┃ ┃------------------*/
/*--------------------┃ ┃┃ ┗┛ ┃┃ ┃--┃ ┗━━━┛ ┃--┃ ┗┛ ┏┛--┃ ┗━━━━┓--┃ ┗━━━━━┓------------*/
/*--------------------┗━┛┗━━━━┛┗━┛--┗━━━━━━━┛--┗━━━━┛---┗━━━━━━┛--┗━━━━━━━┛------------*/

/*SOME GENERALSETTINGS */

var btns = {
    is_visible : true ,
    btn_controll_src : "img/blackcircle.png"
};

var arrows = {
    is_visibile : true ,
    right_way_arrow_src : "img/right.png",
    left_way_arrow_src : "img/left.png"
};

var labels = {
    is_title_visible : true ,
    is_description_visible : true ,
    title_color : "black",
    description_color : "red"
}

var model = {
    
    /*timeout of display per pic, mS*/
    timer : 2000 ,
    
    /*set in the init function*/
    currentArrayOfImageObject  :  null,
    
    /* slider dimensions, set in the init function, we use BOOTSTRAP for responsive dims, so this type is string
     *   @TODO: choose one here -> http://getbootstrap.com/css/#grid-options, we use full-screen */
    slClassSize: "col-md-10 col-xs-12 col-md-offset-1",
    
    /*set in the init function*/
    imgsNumber : 0 ,

    init : function(){
        /*We could have more than one Array, here we can fetch one, or we can fetch more and next merge their*/
        this.currentArrayOfImageObject = imgs;
        
        /*set the number of images*/
        this.imgsNumber = this.currentArrayOfImageObject.length;
        
    } ,
    
    get_src : function(numberOfImg){
        return this.currentArrayOfImageObject[numberOfImg].src;
    } ,
    
    get_title : function(numberOfImg){
        return this.currentArrayOfImageObject[numberOfImg].title;
    } ,
    
    get_description : function(numberOfImg){
        return this.currentArrayOfImageObject[numberOfImg].description;
    } ,
    
    get_btn_controll_src(){
        return btns.btn_controll_src;
    } ,
    
    get_right_btn_src(){
        return arrows.right_way_arrow_src;
    } ,
    
    get_left_btn_src(){
        return arrows.left_way_arrow_src;
    } ,
    
    get_color_of_title(){
        return labels.title_color;
    } ,
    
    get_color_of_description(){
        return labels.description_color;
    } ,
    
    get_arrows_visibility(){
        return arrows.is_visibile;
    } ,
    
    get_btn_visibility(){
        return btns.is_visible;
    } ,
    
    get_title_visibility(){
        return labels.is_title_visible;
    } ,
    
    get_description_visibility(){
        return labels.is_description_visible;
    }
};


/*--------------------┏━━━━━━━┓--┏━━━━━━━┓--┏━━━━┓┏━┓--┏━━━━━━━┓--┏━━━━━━┓--┏━━━━━━━┓--┏━┓------------------*/
/*--------------------┃ ┏━━━━━┛--┃ ┏━━━┓ ┃--┃ ┏┓ ┃┃ ┃--┗━━┓ ┏━━┛--┃ ┏━━┓ ┃--┃ ┏━━━┓ ┃--┃ ┃------------------*/
/*--------------------┃ ┃--------┃ ┃---┃ ┃--┃ ┃┃ ┃┃ ┃-----┃ ┃-----┃ ┗━━┛ ┃--┃ ┃---┃ ┃--┃ ┃------------------*/
/*--------------------┃ ┃--------┃ ┃---┃ ┃--┃ ┃┃ ┃┃ ┃-----┃ ┃-----┃ ┏━┓ ┏┛--┃ ┃---┃ ┃--┃ ┃------------------*/
/*--------------------┃ ┗━━━━━┓--┃ ┗━━━┛ ┃--┃ ┃┃ ┗┛ ┃-----┃ ┃-----┃ ┃-┗┓┗┓--┃ ┗━━━┛ ┃--┃ ┗━━━━━┓------------*/
/*--------------------┗━━━━━━━┛--┗━━━━━━━┛--┗━┛┗━━━━┛-----┗━┛-----┗━┛--┗━┛--┗━━━━━━━┛--┗━━━━━━━┛------------*/
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
    } ,
    
    get_btn_controll_src(){
        return model.get_btn_controll_src();
    } ,
    
    get_right_btn_src(){
        return model.get_right_btn_src();
    } ,
    
    get_left_btn_src(){
        return model.get_left_btn_src();
    } ,
    
    get_color_of_title(){
        return model.get_color_of_title();
    } ,
    
    get_color_of_description(){
        return model.get_color_of_description();
    } ,
    
    get_arrows_visibility(){
        return model.get_arrows_visibility();
    } ,
    
    get_btn_visibility(){
        return model.get_btn_visibility();
    } ,
    
    get_title_visibility(){
        return model.get_title_visibility();
    } ,
    
    get_description_visibility(){
        return model.get_description_visibility();
    }
};

/*--------------------┏━┓---┏━┓--┏━┓--┏━━━━━━┓--┏━┓-----┏━┓--------------------------------*/
/*--------------------┃ ┃---┃ ┃--┃ ┃--┃ ┏━━━━┛--┃ ┃-----┃ ┃--------------------------------*/
/*--------------------┃ ┃---┃ ┃--┃ ┃--┃ ┗━━━━┓--┃ ┃-----┃ ┃--------------------------------*/
/*--------------------┃ ┃---┃ ┃--┃ ┃--┃ ┏━━━━┛--┃ ┃-┏━┓-┃ ┃--------------------------------*/
/*--------------------┃ ┗━━━┛ ┃--┃ ┃--┃ ┗━━━━┓--┃ ┗━┛ ┗━┛ ┃--------------------------------*/
/*--------------------┗━━━━━━━┛--┗━┛--┗━━━━━━┛--┗━━━━━━━━━┛--------------------------------*/
var view = {
    
    /*FLAGS*/
    isntAnimationNow: true ,
    isJustClicked : false,
    
    /*this is the object that managed the animation*/
    $firstSort : null ,
    
    
    
    init : function() {
        
        /* Some GUI settings
         *
         * this is the main GUI tree:
         *
         * SLIDERCONTAINER ┬-> SLIDER -> IMAGES
         *                 └-> upperRow ┬-> arrow left
         *                              ├-> secondLevel ┬-> labrow -> labels
         *                              │               └-> btnrow -> buttons 
         *                              └-> arrow right
         *
         * here we create label container with is css, and add decription of first photos
         */
        var $slider = $('.carousel');
        var $sliderContainer = $('.carouselContainer');
        var numberOfImages = imgs.length;
        
        /*get the size of our slider*/
        $sliderContainer.addClass(controller.get_slider_dims_class);
        
        /*    -----SLIDER-----
         * add IMGS in the carousel*/
        for(var i = 0; i < numberOfImages; i++){
            /*add with three specs:
             * -class -> pics
             * -id -> # + sort 
             * src */
            $slider.append('<img class="pics" id="' + i + '-sort" src="' + controller.get_src(i) + '">');
        }
        
        
        $sliderContainer.append('<div class="row" id="upperRow"></div>');
        var $upperRow = $('#upperRow');
        
        /*add the -----LEFT ARROW----- and its onClick function*/
        $upperRow.append('<div class="over col-md-1 col-xs-1" id="leftArrow">'
                         +   '<img class="img-responsive arrow-left" src="' + controller.get_left_btn_src() + '"></img>'
                         +'</div> ');
        var $leftArrow = $('#leftArrow');
        $leftArrow.css('top', '45%');
        $leftArrow.css('bottom', '55%');
        $leftArrow.css('text-align', 'right');
        $leftArrow.css('display', 'block');
        
        /*onClick left button, first i check if I can do that, 
         * if I CAN'T is because the traslation is in progress,
         * if I CAN is because the delay time is in progress*/
        $leftArrow.click(function(){
            if(!view.isntAnimationNow) {
                return;
            }
            view.onClickArrow('l');
        });
        
        /*         -----SECOND LEVELELELELELEL of Rows------
         *  secondLevel ┬-> labelsRow -> labelContainer  
         *              └-> btnsRow -> buttonContainer 
         * WHy? because we want fix their horizontal
         */
        $upperRow.append('<div class="over col-md-10 col-xs-10 col-md-offset-1 col-xs-offset-1" id="secondLevel"></div>');
        var $secondLevel = $('#secondLevel');
        $secondLevel.css('top', '93%');
        
        /*add the -----LABELS------*/
        $secondLevel.append('<div class="row" id="labelsRow"></div>');
        var $labelsRow = $('#labelsRow');
        $labelsRow.append('<div class="over jumbotron col-md-11 col-xs-11 col-md-offset-1 col-xs-offset-1" id="labelContainer"></div>');
        var $labelContainer = $('#labelContainer');
        $labelContainer.css('bottom', -20 ); 
        $labelContainer.append('<h1 id="title">' + controller.get_title(0) + '</h1>');
        $('#title').css('color', controller.get_color_of_title());
        $labelContainer.append('<p id="description">' + controller.get_description(0) + '</p>');
        $('#description').css('color', controller.get_color_of_description());
        
        /*-----Bububububuttons------*/
        $secondLevel.append('<div class="row" id="btnsRow"></div>');
        var $btnsRow= $('#btnsRow');
        $btnsRow.append('<div class="over jumbotron col-md-12 col-xs-12 " id="buttonContainer"></div>');
        var $buttonContainer = $('#buttonContainer');
        
        /*why -1? because first and last one image are the same*/
        for(var i = 0; i < numberOfImages-1; i++){
            $buttonContainer.append('<img class="btn-choosen img-circle" src="' + controller.get_btn_controll_src() + '" id="' + i + '-btn"></img>');
            var $curBtn = $('#' + i + '-btn');
            $curBtn.click(function(event){
               view.onClickButton(event.target.id); 
            });
        }
        
        /*change opacity on hover*/
        
        /*add the ------RIGHT ARROW------ and its onClick function*/
        $upperRow.append('<div class="over col-md-1 col-xs-1 col-md-offset-11 col-xs-offset-11" id="rightArrow">'
                         +   '<img class="img-responsive arrow-right" src="' + controller.get_right_btn_src() + '"></img>'
                         +'</div> ');
        var $rightArrow = $('#rightArrow');
        $rightArrow.css('top', '45%');
        $rightArrow.css('bottom', '55%');
        $rightArrow.css('text-align','left');
        $leftArrow.css('display', 'block');
        
        /*-onClick right button, first i check if I can do that, 
         * if I CAN'T is because the traslation is in progress,
         * if I CAN is because the delay time is in progress*/
        $rightArrow.click(function(){
            if(!view.isntAnimationNow) {
                return;
            }
            view.onClickArrow('r');
        });
        
        /*check for visibility*/
        if(!controller.get_arrows_visibility()){
            $leftArrow.css('visibility', 'hidden');
            $rightArrow.css('visibility', 'hidden');
        }
        if(!controller.get_btn_visibility()){
            $buttonContainer.css('visibility', 'hidden');
        }
        if(!controller.get_description_visibility()){
            $('#description').css('visibility', 'hidden');
        }
        if(!controller.get_title_visibility()){
            $('#title').css('visibility', 'hidden');
        }
        
        /*let's animate*/
        view.animateCarousel();
    } ,
    
    
    
    onClickArrow : function(direction){
        
        /*ALGORITH with words: 
         * - check if I just clicked
         * - set the flags that I just clicked, I cant clicked until animation is finished
         * -  
         * - LEFT CASE: easy, stop the animation, stop(), stop()->Stop the currently-running animation on the matched elements. That it is delay,
         *              we CANT call this function, in the transiton time, so we stop delay and trigger the transition advance.
         *              FLAG ijustClicked is unlocked after the transition in animateCarousel function
         * - RIGHT CASE: let me die...
         *               QUEUE party -> 1. stop the delay
         *                              2. frees the queueuee of functions
         *                              3. animate right to the right
         *                              4. in the callback set the right labels and recall animateCarousel()
         *                              NB. if the first image is dysplayed, we must replace it with last one (should be equal.....)
         */
        
        if(view.isJustClicked){
            return;
        }
        
        /*lock another click while transition is present
         *it will be unlock will the transition will be finished in the animateCarousel() for left shift
         *it will be unlock will the transition will be finished in the queue manipaltion after the right transition*/
        view.isJustClicked = true;
        
        view.$firstSort = $('#0-sort');
        var $firstSort = view.$firstSort;
        
        /*left case*/
        if(direction == 'l'){     
            $firstSort.stop();
        }
        /*right case*/
        else if(direction == 'r'){  
            /*falg to stop animation and than stop delay, the slider will be temporarily stopped*/
            
            view.isntAnimationNow = false;
            var numberOfImages = controller.get_image_number();
            
            var $lastSort = $('#' + (numberOfImages-1) + '-sort');

            /*get the current lenght of slider, the same of images*/
            var lengthOfSlider = $firstSort.width();

            /*get the current position of the last photo*/
            var lastPosLeft = $lastSort.position().left;

            /*get the current window width*/
            var sliderLeftPosition = $('.carousel').position().left;
            
            /*if first image is visible we replace it with last one, their should be equal..................must be
             * for do it we move slider back for totallength less sliderlength*/
            if(view.getCurrentImage(lastPosLeft,lengthOfSlider) == 0){
                /*move the last image in the dysplayed area:
                 * if the first image is displaye -┬-> ⬛⬜⬜⬜⬜⬜⬜
                 *                                 └-> move block of images without animation -> ⬜⬜⬜⬜⬜⬜⬛ */
                $firstSort.css('margin-left', -((lengthOfSlider*numberOfImages)-lengthOfSlider));                 
            }
    
            
            /*queueueueueueueueu manipolation
             *   1-> stop() delay*/
            $firstSort.stop();
            /*2-> frees queue*/
            $firstSort.queue([]);
            $firstSort.animate({marginLeft: "+=" + lengthOfSlider}, "med", function(){
                /*return if I clicked one of the r button, because it stop the animation*/
                lastPosLeftastPosLeft = $lastSort.position().left;
                /*adapt the title and description label for current image*/
                /*afeter finished this animate, call that callback:
                 * free FLAGS and restart*/
                view.isntAnimationNow = true;
                view.isJustClicked = false;
                
                view.adaptLabelContainer(view.getCurrentImage(lastPosLeft, lengthOfSlider));
                view.animateCarousel();
             });        
        }
        
    } ,
    
    
    
    onClickButton : function(idd){
        var id = "" + idd; /*????*/
        
        /*ALGORITH with words: 
         * - check if I just clicked
         * - set the flags that I just clicked, I cant clicked until animation is finished
         * 
         * - the same process of that we have done with the right arrow, difference is in how much we move the block
         * - We have to move the FIRST PHOTO MARGIN LEFT to the right distance 
         *              we have this:
         *  
         *               <- ⬛⬜⬜⬜⬜⬜⬜ 1st photo displayed
         *                 ⬜⬛⬜⬜⬜⬜⬜  2nd photo displayed
         *                ⬜⬜⬛⬜⬜⬜⬜   3rd photo displayed
         *
         *                  Y = marginLeft of last image
         *                  T = total lenght of images block 
         *                  t = image lenght
         *                  X = current image dysplayed
         *
         *                  we KNOW that [Y = T - (t * X)] and [X=(T-Y)/t] --> check we.getCurrentImage() if you don't believe
         *
         *                  So we can infer the firstImage marginLeft -> a = Y'-(T-t)
         *                                                                 with Y' = y when X-th image (X = number of button clicked) is dysplayed 
         */
        var $curBtn = $('#' + id);
        var numberOfBtnClicked = parseInt(id.substr(0));
        
         if(view.isJustClicked || !view.isntAnimationNow){
            return;
        }
        
        view.isJustClicked = true;
        
        view.$firstSort = $('#0-sort');
        var $firstSort = view.$firstSort;
        
        
        view.isntAnimationNow = false;
        var numberOfImages = controller.get_image_number();

        var $lastSort = $('#' + (numberOfImages-1) + '-sort');

        /*get the current lenght of slider, the same of images*/
        var lengthOfSlider = $firstSort.width();

        /*get the current position of the last photo*/
        var lastPosLeft = $lastSort.position().left;

        /*get the current window width*/
        var sliderLeftPosition = $('.carousel').position().left;
        
        /*queueueueueueueueu manipolation
         *   1-> stop() delay*/
        $firstSort.stop();
        /*2-> frees queue*/
        $firstSort.queue([]);
        
        /*Y' = T - (t * x) with x = clicked button number*/
        var lastPosLeftForBottonClicked = (lengthOfSlider*numberOfImages) - (lengthOfSlider * (numberOfBtnClicked+1));
        /*a = Y' - (T -t)*/    
        var newFirstPosLeft = lastPosLeftForBottonClicked - ((lengthOfSlider*numberOfImages) - lengthOfSlider);
        
        $firstSort.animate({marginLeft: newFirstPosLeft}, "med" , function(){
            /*return if I clicked one of the r button, because it stop the animation*/
            lastPosLeftastPosLeft = $lastSort.position().left;
            /*adapt the title and description label for current image*/
            /*afeter finished this animate, call that callback:
             * free FLAGS and restart*/
            view.isntAnimationNow = true;
            view.isJustClicked = false;

            view.adaptLabelContainer(view.getCurrentImage(lastPosLeft, lengthOfSlider));
            view.animateCarousel();
         });
        
    } ,
    
    
    
    animateCarousel : function () {
        
        /*ALGORITH with words: 
         * - first of all we must check if we can animate, the flag isItOkToAminate
         * - images are in order horizontally in a long block like this -> ⬜⬜⬜⬜⬜⬜⬜
         * - we can see only one photo at a time -> ⬜⬛⬜⬜⬜⬜⬜
         * - images are the same width
         * - move the first image to the left of its width, moving in turn all block of images
         * - now the first one is hide, and the second one is visible
         * - go on with the same on second image and so on 
         * - if the last photo position is  visible (we check that in that way: if its left position is equal to the left position of slider) 
         *    move the first photo to the initial position 
         * - how do on resize? -> stop animation! 
         * - how do on botton clicked? -> very hard
         */
        
        var numberOfImages = controller.get_image_number();
        
        /*get first and last image */
        view.$firstSort = $('#0-sort');
        var $firstSort = view.$firstSort;
        var $lastSort = $('#' + (numberOfImages-1) + '-sort');
        
        /*get the current lenght of slider, the same of images*/
        var lengthOfSlider = $firstSort.width();
        
        /*get the current position of the last photo*/
        var lastPosLeft = $lastSort.position().left;
        
        /*get the current window width*/
        var sliderLeftPosition = $('.carousel').position().left;
        
        /*is not ok? cut*/
        if(!view.isntAnimationNow) {
            return;
        }
        
        /*if the last photo is visible with 15px of accuration*/
        if(lastPosLeft < sliderLeftPosition + 15){
            /*move, without animate, the first image to the initial position*/
            
            $firstSort.css('margin-left', 0 );    
        }
        
        /*while windows is on resize*/
        $(window).resize(function() {
            /*this is a great hack finded here 
             *      -> http://stackoverflow.com/questions/5489946/jquery-how-to-wait-for-the-end-of-resize-event-and-only-then-perform-an-ac
             *for stop animation when resize is checked*/
            clearTimeout(window.resizedFinished);
            window.resizedFinished = setTimeout(function(){
                view.isntAnimationNow = true;
                view.isJustClicked = false;
                view.animateCarousel();
            }, 500);
            
            /*stop animation*/
            $firstSort.stop();
            
            /*2-> frees queue*/
            $firstSort.queue([]);
            /*move, without animate, the first image to the initial position to avoid bad things*/
            $firstSort.css('margin-left', 0 );
            
            /*adapt the title and description label for current image*/
            view.adaptLabelContainer(view.getCurrentImage(lastPosLeft, lengthOfSlider));
            
            view.setRightButton(currentImageNumber);
        });
        
        /*wait before animate*/
        $firstSort.delay(controller.get_timer())
                  .queue(function(next){  
                      /*return if I clicked one of the r button, because it stop the animation*/
                      if(!view.isntAnimationNow) return;
                      view.isntAnimationNow = false; 
                      next();
                   });
        
        /*now we can animate*/
        /*but wait for finish animation before unlock, with a callback function*/
        $firstSort.animate({marginLeft: "-=" + lengthOfSlider}, "med", function(){
            /*afeter finished this animate, call that callback:
             * free FLAGS and restart*/
            view.isntAnimationNow = true;
            view.isJustClicked = false;
            view.animateCarousel();
        });
        
        /*adapt the title and description label for current image*/
        var currentImageNumber = view.getCurrentImage(lastPosLeft, lengthOfSlider);
        
        if(currentImageNumber == numberOfImages-1) 
            view.setRightButton(0);
        else 
            view.setRightButton(currentImageNumber);
        
        view.adaptLabelContainer(currentImageNumber);
     
    } ,
    
    
    
    adaptLabelContainer : function (currentImage){
        
        var $title = $('#title');
        var $description = $('#description');
        
        $title.text(controller.get_title(currentImage));
        $description.text(controller.get_description(currentImage));
        
    } ,
    
    
    
    getCurrentImage : function (lastPosLeft, lengthOfSlider) {
        
        var totalLenght = controller.get_image_number() * lengthOfSlider;
        
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
        var currentImage = (( totalLenght - lastPosLeft ) / lengthOfSlider) - 1;
        
        return Math.round(currentImage);
    } ,
    
    
    
    setRightButton : function(numberOfCurrentImage){
        /* set all button's opacity to 0.6 and then change the current to 0.9*/
        var $cur = $('#' + numberOfCurrentImage + '-btn');
        var $all = $('.btn-choosen');
        $all.css('border', 'none');
        $cur.css('border', 'solid 3px transparent');
    }
    
    
    
};


/*----------------------------------------Let's go----------------------------------------*/
$(document).ready(function(){
    controller.init();
});


