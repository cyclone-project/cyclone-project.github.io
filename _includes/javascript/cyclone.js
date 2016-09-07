$(document.links).filter(function() {
    return this.hostname != window.location.hostname;
}).attr('target', '_blank');

(function(document, history, location) {
  var HISTORY_SUPPORT = !!(history && history.pushState);

  var anchorScrolls = {
    ANCHOR_REGEX: /^#[^ ]+$/,
    OFFSET_HEIGHT_PX: 0,

    /**
     * Establish events, and fix initial scroll position if a hash is provided.
     */
    init: function() {
      this.scrollToCurrent();
      window.addEventListener('hashchange', this.scrollToCurrent.bind(this));
      document.body.addEventListener('click', this.delegateAnchors.bind(this));
    },

    /**
     * Return the offset amount to deduct from the normal scroll position.
     * Modify as appropriate to allow for dynamic calculations
     */
    getFixedOffset: function() {
      return this.OFFSET_HEIGHT_PX;
    },

    /**
     * If the provided href is an anchor which resolves to an element on the
     * page, scroll to it.
     * @param  {String} href
     * @return {Boolean} - Was the href an anchor.
     */
    scrollIfAnchor: function(href, pushToHistory) {
      var match, rect, anchorOffset;

      if(!this.ANCHOR_REGEX.test(href)) {
        return false;
      }

      match = document.getElementById(href.slice(1));

      if(match) {
        rect = match.getBoundingClientRect();
        anchorOffset = window.pageYOffset + rect.top - this.getFixedOffset();
        window.scrollTo(window.pageXOffset, anchorOffset);

        // Add the state to history as-per normal anchor links
        if(HISTORY_SUPPORT && pushToHistory) {
          history.pushState({}, document.title, location.pathname + href);
        }
      }

      return !!match;
    },

    /**
     * Attempt to scroll to the current location's hash.
     */
    scrollToCurrent: function() {
      this.scrollIfAnchor(window.location.hash);
    },

    /**
     * If the click event's target was an anchor, fix the scroll position.
     */
    delegateAnchors: function(e) {
      var elem = e.target;

      if(
        elem.nodeName === 'A' &&
        this.scrollIfAnchor(elem.getAttribute('href'), true)
      ) {
        e.preventDefault();
      }
    }
  };

  window.addEventListener(
    'DOMContentLoaded', anchorScrolls.init.bind(anchorScrolls)
  );
})(window.document, window.history, window.location);

// https://github.com/ghiculescu/jekyll-table-of-contents
(function($){
    $.fn.toc = function(options) {
        var defaults = {
                noBackToTopLinks: false,
                title: '',
                minimumHeaders: 3,
                headers: 'h1, h2, h3, h4, h5, h6',
                listType: 'ul', // values: [ol|ul]
                showEffect: 'show', // values: [show|slideDown|fadeIn|none]
                showSpeed: 'slow' // set to 0 to deactivate effect
            },
            settings = $.extend(defaults, options);

        var headers = $(settings.headers).filter(function() {
            // get all headers with an ID
            var previousSiblingName = $(this).prev().attr( "name" );
            if (!this.id && previousSiblingName) {
                this.id = $(this).attr( "id", previousSiblingName.replace(/\./g, "-") );
            }
            return this.id;
        }), output = $(this);
        if (!headers.length || headers.length < settings.minimumHeaders || !output.length) {
            return;
        }

        if (0 === settings.showSpeed) {
            settings.showEffect = 'none';
        }

        var render = {
            show: function() { output.hide().html(html).show(settings.showSpeed); },
            slideDown: function() { output.hide().html(html).slideDown(settings.showSpeed); },
            fadeIn: function() { output.hide().html(html).fadeIn(settings.showSpeed); },
            none: function() { output.html(html); }
        };

        var get_level = function(ele) { return parseInt(ele.nodeName.replace("H", ""), 10); }
        var highest_level = headers.map(function(_, ele) { return get_level(ele); }).get().sort()[0];
        var return_to_top = '<i class="icon-arrow-up back-to-top"> </i>';

        var getHeaderText = function(header) {
            var headerCopy = jQuery(header).clone();
            headerCopy.find('img').replaceWith(headerCopy.find('img').attr('alt'));
            headerCopy.find('small').remove();
            return headerCopy.html();
        }

        var level = get_level(headers[0]),
            this_level,
            html = settings.title + " <"+settings.listType+" class='nav nav-pills nav-stacked'>";
        headers.on('click', function() {
            if (!settings.noBackToTopLinks) {
                window.location.hash = this.id;
            }
        })
            .addClass('clickable-header')
            .each(function(_, header) {
                this_level = get_level(header);
                if (!settings.noBackToTopLinks && this_level === highest_level) {
                    $(header).addClass('top-level-header').after(return_to_top);
                }
                if (this_level === level) // same level as before; same indenting
                    html += "<li><a href='#" + header.id + "'>" + getHeaderText(header) + "</a>";
                else if (this_level <= level){ // higher level than before; end parent ol
                    for(i = this_level; i < level; i++) {
                        html += "</li></"+settings.listType+">"
                    }
                    html += "<li><a href='#" + header.id + "'>" + getHeaderText(header) + "</a>";
                }
                else if (this_level > level) { // lower level than before; expand the previous to contain a ol
                    for(i = this_level; i > level; i--) {
                        html += "<"+settings.listType+"><li>"
                    }
                    html += "<a href='#" + header.id + "'>" + getHeaderText(header) + "</a>";
                }
                level = this_level; // update for the next one
                $(header).before('<a id="' + header.id + '" class="before">&nbsp;</a>');
            });
        html += "</"+settings.listType+">";
        if (!settings.noBackToTopLinks) {
            $(document).on('click', '.back-to-top', function() {
                $(window).scrollTop(0);
                window.location.hash = '';
            });
        }

        render[settings.showEffect]();
    };
})(jQuery);

$(document).ready(function() {
    $('#toc').toc({ minimumHeaders: 0, listType: 'ul', showSpeed: 0, headers: 'h1,h2,h3,h4' });

    $('.affix-nav').affix({
        offset: {
            top: 140,
            bottom: 550
        }
    })

    if(navigator.userAgent.match(/Trident\/7\./)) { // if IE
        $('body').on("mousewheel", function () {
            // remove default behavior
            event.preventDefault(); 

            //scroll without smoothing
            var wheelDelta = event.wheelDelta;
            var currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta);
        });
    }
});
