if(!typeof dataModel) {
    if (window.dataModel.page.pageInfo.sitecoreTemplateName == "reinventblogpostpage")
    {
    var style = document.createElement('style');
    style.innerHTML = 'h2{font-size:1.25rem;line-height:1.2em}@media screen and (min-width:1000px){h2{font-size:2.188rem;line-height:1.2em}}';
    document.head.appendChild(style);
    console.log("blog h2 custom header");
    };
};

//For Job Search Filter 
(function updateJobsearchCountryFilter () {
	if(window.location.href.indexOf("/careers/jobsearch") !== -1) {
		var countryItem = $("#country .countrylist li").find("[data-country-site='tw-en'],[data-country-site='tr-en'],[data-country-site='ng-en'],[data-country-site='ma-fr'],[data-country-site='ru-ru']");
		countryItem.closest("li").addClass("hidden");
	}//WIT 1539225 ma-fr decom WIT 1549943 Hide Russia from the Careers site  3/7/22
})();

//For Job Preferences
(function JobPreferencesFilter () {
if(window.location.href.indexOf("/careers/registration/register") !== -1) {
$("#reg-menu-list-2 li[data-value='{5EFC5B92-37A6-4C67-9326-79C497B8E52F}']").remove()

}
})();

(function JobPreferencesFilter () {
if(window.location.href.indexOf("/careers/registration/register") !== -1) {
$("#reg-menu-list-2 li[data-value='{EE15BE04-9A47-45DF-AECE-B6D7DD44BE7B}']").remove()

}
})();

(function JobPreferencesFilter () {
if(window.location.href.indexOf("/careers/registration/register") !== -1) {
$("#reg-menu-list-2 li[data-value='{1542EC3B-276B-46A7-81A9-4A7B6BBACF06}']").remove()

}
})();//WIT 1539225 ma-fr decom 3/7/22

(function JobPreferencesFilter () {
if(window.location.href.indexOf("/careers/registration/register") !== -1) {
$("#reg-menu-list-2 li[data-value='{4AE86E35-7ADA-4617-9EE7-0A96917798E5}']").remove()

}
})();//WIT 1549943 Hide Russia from the Careers site 

//For Careers XML Result  
(function CountryCareersXMLRemove() {
if(window.location.href.indexOf("/careers/admin/careersxmlresult") !== -1) {
$("#ReqCountryList li[value='Nigeria'],[value='Turkey'],[value='Morocco'],[value='Russian Federation']").remove()
//WIT 1539225 ma-fr decom WIT 1549943 Hide Russia from the Careers site  3/7/22  
	}
})();


//SM Inquiry 1306500
$("h3.module-title:empty").remove();

//Work-around for MixedMedia Block - Parallax Image - (for Clean-up) SM Inquiry #1442004
$(window).on("load", function() {
    $(".mixed-media-block .img-parallax").each(function() {
        $(window).width() > 767 && $(this).attr("style", "background-image:url('" + $(this).attr("data-imagelg") + "');"),
        $(window).width() <= 767 && $(this).attr("style", "background-image:url('" + $(this).attr("data-imagexs") + "');")
    })
});

//TabsModule on BAT, Locations and FAO pages - To follow SM-inquiery Ticket #1444690
$(window).on("load", function() {
    1 == ComponentRegistry.TabModule && (window.location.href.indexOf("location-index") > -1 || $(".tab-container").closest(".block-content").removeAttr("style").closest(".row").removeAttr("style"))
});


// Vidyard - sc_mode=edit - Prevent conversion to longscript code - JPPL 03/01/2022
$(function() {
    var e = window.location.href;
    -1 < e.indexOf("www.accenture.com") || (-1 < e.indexOf("sc_mode=edit") ? ($(".content-module .vidyard-player-embed").attr("data-rendered", "true"),
    $(window).on("load", function() {
        setTimeout(function() {
            $(".content-module .vidyard-player-embed").removeAttr("data-rendered")
        })
    })) : ($('script[src="https://play.vidyard.com/embed/v4.js"]').length <= 0 && 0 != $(".vidyard-player-embed").length && $("head").append('<script type="text/javascript" async="" src="https://play.vidyard.com/embed/v4.js"><\/script>'),
    $(".content-module .vidyard-player-embed").removeAttr("data-rendered")))
});

//------------------- WIT 1549943 Hide Russia from the Careers site---------------
//For Global Nav
$(function(){
    $(document).ready(function () {
        var russianCountryRemoved = false;
        $('#country-language-selector').on("click", function() {
            if(russianCountryRemoved == false) {
                var pollCountryRetries = 0;
                var pollCountryPopover = setInterval(function() {
                    var $russianCountry = $('#location-recommendation > ul > li a[data-analytics-link-name=" Russian Federation"]');    
                    if($russianCountry.length > 0) {
                        $russianCountry.closest('li').remove();
                        clearInterval(pollCountryPopover);
                        russianCountryRemoved = true;
                    }
                    if(++pollCountryRetries == 4) {
                        clearInterval(pollCountryPopover);
                    }
                }, 500);
            }
        });
    });
});

//For Edit Profile
(function EditProfileCountry () {
if(window.location.href.indexOf("/careers/profiles/edit-profile") !== -1) {
$("#editprofileform li[data-value='{4AE86E35-7ADA-4617-9EE7-0A96917798E5}']").remove()

}
})();

//Hide Countries on Contact Us
(function ContactUsHideCountries () {
	if(window.location.href.indexOf("/about/contact-us") !== -1) {
		$("#formmodule li[data-value='{830A74CD-0989-427E-A7B9-5831244496D9}']").addClass("hidden");
		$("#formmodule1 li[data-value='{830A74CD-0989-427E-A7B9-5831244496D9}']").addClass("hidden");
	}
})();

$(function () {
    var selectCountryDropdown = $("div.reinvent-select-menu div[class*='country']");
    var dropdownCountry = (selectCountryDropdown.hasClass("multiple")) ? selectCountryDropdown.find('span.text-checkbox:contains("Russia")').parent() : selectCountryDropdown.find("li[data-value='RU']");
    dropdownCountry.remove();
});

//For BrandPurpose Footer
$(function () {
	$("#brandpurpose-main~#footer-block .body-content .ui-container .row").attr("style", "max-width: 75rem !important");
})

//For BrandPurpose Main - VOC
$(function(){
    $("#brandpurpose-main .SubsectionTitleTrigger").each(function(){
        var new_subtitle_link = $(this).attr("href").split("/content/acom")[1];
        $(this).attr("href", new_subtitle_link)
    })
    //insights card version - 05-31-2023 - JPPL
    if(window.location.href.indexOf("www.accenture.com") > -1) {
        $('#brandpurpose-main .cards li.img-container').each(function(){
            var wf = "/"+window.location.href.split("www.accenture.com/")[1].split("/")[0];;
            var new_subtitle_link = $(this).attr("data-sub-title-link").split("/language-masters/en_us")[1];
            if ($(this).attr("data-sub-title-link").indexOf("www.accenture.com") > -1){
                $(this).attr("data-sub-title-link", $(this).attr("data-sub-title-link"))
            }
            else {
                $(this).attr("data-sub-title-link", wf + new_subtitle_link)
            }
        })
    }
})