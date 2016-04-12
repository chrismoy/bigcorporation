App.FullPage = {
  init: function(args) {
    $(args.container).fullpage({
      //Navigation
      menu: args.menu,
      lockAnchors: args.lockAnchors,
      anchors: args.anchors,
      navigation: args.navigation,
      navigationPosition: args.navigationPosition,
      navigationTooltips: args.navigationTooltips,
      showActiveTooltip: args.showActiveTooltip,
      slidesNavigation: args.slidesNavigation,
      slidesNavPosition: args.slidesNavPosition,

      //Scrolling
      css3: args.css3,
      scrollingSpeed: args.scrollingSpeed,
      autoScrolling: args.autoScrolling,
      fitToSection: args.fitToSection,
      fitToSectionDelay: args.fitToSectionDelay,
      scrollBar: args.scrollBar,
      easing: args.easing,
      easingcss3: args.easingcss3,
      loopBottom: args.loopBottom,
      loopTop: args.loopTop,
      loopHorizontal: args.loopHorizontal,
      continuousVertical: args.continuousVertical,
      normalScrollElements: args.normalScrollElements,
      scrollOverflow: args.scrollOverflow,
      touchSensitivity: args.touchSensitivity,
      normalScrollElementTouchThreshold: args.normalScrollElementTouchThreshold,

      //Accessibility
      keyboardScrolling: args.keyboardScrolling,
      animateAnchor: args.animateAnchor,
      recordHistory: args.recordHistory,

      //Design
      controlArrows: args.controlArrows,
      verticalCentered: args.verticalCentered,
      resize : args.resize,
      sectionsColor : args.sectionsColor,
      paddingTop: args.paddingTop,
      paddingBottom: args.paddingBottom,
      fixedElements: args.fixedElements,
      responsiveWidth: args.responsiveWidth,
      responsiveHeight: args.responsiveHeight,

      //Custom selectors
      sectionSelector: args.sectionSelector,
      slideSelector: args.slideSelector,
    });
  }
}

$(document).ready(function() {
  App.FullPage.init({
      container: '#fullpage',
      loopBottom: true,
      loopTop: false,
      scrollingSpeed: 1000,
      sectionSelector: 'section',
      verticalCentered: true
    }
  );
});
