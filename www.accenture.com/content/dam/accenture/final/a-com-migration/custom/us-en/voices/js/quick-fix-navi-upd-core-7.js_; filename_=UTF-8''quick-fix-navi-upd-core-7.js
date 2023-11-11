$(".secondary-nav-menu .nav-item-links .col-sm-12")
  .first()
  .removeClass("col-sm-12");
$(".secondary-nav-menu .nav-item-links .secondaryCounter")
  .first()
  .addClass("col-sm-8");
$(".secondary-nav-menu .nav-item-links")
  .first()
  .prepend(
    "<ul class='global-headerannounce col-custom secondaryCounter'><li class='announce-heading'>FEATURED CONTENT</li><li><a class='announce-article-title' href='https://www.accenture.com/us-en/insights/voices' data-linkcomponentname='announcement nav' data-analytics-link-name='Voices of Change' data-analytics-content-type='nav/paginate'>Voices of Change</a></li><li class='announce-desc'>The path to 360Â° value starts hereâ€”featuring our most provocative thinking, extensive research and compelling stories of shared success.</li><li><a class='announce-article-title' href='https://www.accenture.com/us-en/about/company/war-in-ukraine-business-impact' data-linkcomponentname='announcement nav' data-analytics-link-name='War in Ukraine' data-analytics-content-type='nav/paginate'>War in Ukraine</a></li><li class='announce-desc'>Addressing the business and economic impact.</li></ul>"
  );
