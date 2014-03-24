!!! 5
html(lang='en')
head
    meta(charset='utf-8')
    meta(name='viewport', content='width=device-width, initial-scale=1.0')
    meta(name='description', content='')
    meta(name='author', content='')
    link(rel='shortcut icon', href='img/favicon.ico')
    //Bootstrap core CSS 
    link(href='css/bootstrap.css', rel='stylesheet')
    //Add custom CSS here 
    link(href='css/stylish-portfolio.css', rel='stylesheet')
    link(href='font-awesome/css/font-awesome.min.css', rel='stylesheet')
    link(href='css/search.css', rel='stylesheet')
  body
    //Side Menu 
    menu-toggle.btn.btn-primary.btn-lg.toggle(href='#')
      i.fa.fa-bars
    sidebar-wrapper
      ul.sidebar-nav
        menu-close.btn.btn-default.btn-lg.pull-right.toggle(href='#')
          i.fa.fa-times
        li.sidebar-brand
          a(href='index.html') Politics Mapper
        li
          a(href='#top') Home
        li
          a(href='#results') Search results
        li
          a(href='#something-else') Something Else?
    //Side Menu 
    //Full Page Image Header Area 
    #top.header
      .vert-text
        .row
          .col-md-2.col-md-offset-4
            img(src='img/bbc-logo.png')
          .col-md-2
            img(src='img/ucl-logo-transparent-small.png')
        h1 Politics Mapper
        h3 They work for you
        .row
          .col-md-3
          .col-md-6
            .input-group
              input#srch-term.form-control(type='text', placeholder='Search', name='srch-term')
              .input-group-btn
                button.btn.btn-default(onclick='location.href=\'search.html#results\';', type='submit')
                  i.glyphicon.glyphicon-search
          .col-md-3
        h5
          em
            | Brought to you by University College London Engineering and BBC Research and Development
        h4 Scroll down for your results!
    //Full Page Image Header Area 
    #results.container
      .well.well-sm
        strong Search Results for: "gay marriage"
        .btn-group
          a#list.btn.btn-default.btn-sm(href='#')
            span.glyphicon.glyphicon-th-list
            | List
          a#grid.btn.btn-default.btn-sm(href='#')
            span.glyphicon.glyphicon-th
            | Grid
      #products.row.list-group
        .item.col-xs-4.col-lg-4
          .thumbnail
            .caption
              .row
                .col-xs-12.col-md-7
                  h4.group.inner.list-group-item-heading
                    | Civil Partnerships Bill [H.L.] Mr John Gladwin - Lords
                .col-xs-12.col-md-5
                  p.lead(align='right')
                    | 25/01/2002
              p.group.inner.list-group-item-text
                | "...importance marriage plays in our common life. Whether we are gay or straight, whatever is done to address the injustices of same sex and cohabiting couples we must not undermine the central place of marriage..."
              .row
                .col-xs-12.col-md-offset-4.col-md-4
                  a.btn.btn-success.btn-block(href='http://www.jquery2dotnet.com') View
        .item.col-xs-4.col-lg-4
          .thumbnail
            .caption
              .row
                .col-xs-12.col-md-7
                  h4.group.inner.list-group-item-heading
                    | Civil Partnership Bill [H.L.] - Lords
                .col-xs-12.col-md-5
                  p.lead(align='right')
                    | 24/06/2004
              p.group.inner.list-group-item-text
                | "...about justice, as we are told that the Bill is not a gay marriage Bill but one about removing injustice. The Government insist that a civil partnership is not gay marriage. The name is clearly different..."
              .row
                .col-xs-12.col-md-offset-4.col-md-4
                  a.btn.btn-success.btn-block(href='http://www.jquery2dotnet.com') View
        .item.col-xs-4.col-lg-4
          .thumbnail
            .caption
              .row
                .col-xs-12.col-md-7
                  h4.group.inner.list-group-item-heading
                    | Local Government Bill [H.L.] Mr David Waddington - Lords
                .col-xs-12.col-md-5
                  p.lead(align='right')
                    | 07/02/2000
              p.group.inner.list-group-item-text
                | "...hundreds of respondents to its survey, but not a single one identified Section 28 as a factor in bullying. Finally, more and more aggressive demands are coming from the gay community—demands for gay marriage..."
              .row
                .col-xs-12.col-md-offset-4.col-md-4
                  a.btn.btn-success.btn-block(href='http://www.jquery2dotnet.com') View
        .item.col-xs-4.col-lg-4
          .thumbnail
            .caption
              .row
                .col-xs-12.col-md-7
                  h4.group.inner.list-group-item-heading
                    | Specified degrees of family relationship - Lords
                .col-xs-12.col-md-5
                  p.lead(align='right')
                    | 24/06/2004
              p.group.inner.list-group-item-text
                | "...understand that in May the Supreme Court of the United States rejected an attempt to prevent gay marriages being registered. To amend the Massachusetts state constitution, there would have to be a referendum..."
              .row
                .col-xs-12.col-md-offset-4.col-md-4
                  a.btn.btn-success.btn-block(href='http://www.jquery2dotnet.com') View
        .item.col-xs-4.col-lg-4
          .thumbnail
            .caption
              .row
                .col-xs-12.col-md-7
                  h4.group.inner.list-group-item-heading
                    | Gay Relationships: Inheritance Tax Laws Mr Andrew McIntosh - Lords
                .col-xs-12.col-md-5
                  p.lead(align='right')
                    | 28/02/2000
              p.group.inner.list-group-item-text
                | "...My Lords, again the noble Lord raises an important question. The issue of civil marriages for gay couples has been raised recently in France with the tax law. Many people in this country have a lot..."
              .row
                .col-xs-12.col-md-offset-4.col-md-4
                  a.btn.btn-success.btn-block(href='http://www.jquery2dotnet.com') View
        .item.col-xs-4.col-lg-4
          .thumbnail
            .caption
              .row
                .col-xs-12.col-md-7
                  h4.group.inner.list-group-item-heading
                    | EQUAL TREATMENT RULE - Lords
                .col-xs-12.col-md-5
                  p.lead(align='right')
                    | 01/10/1998
              p.group.inner.list-group-item-text
                | "...same is true of same sex couples—lesbian and gay couples—some of whose relationships are more harmonious and more stable than others in more conventional arrangements. The number of cohabiting couples is..."
              .row
                .col-xs-12.col-md-offset-4.col-md-4
                  a.btn.btn-success.btn-block(href='http://www.jquery2dotnet.com') View
    //Call to Action 
    #something-else.call-to-action
      .container
        .row
          .col-md-6.col-md-offset-3.text-center
            h3 Looking for something else?
            a.btn.btn-lg.btn-primary(href='#') Categories
            a.btn.btn-lg.btn-success(href='#') Timeline
            a.btn.btn-lg.btn-info(href='#') Help
            a.btn.btn-lg.btn-warning(href='#') UCL Engineering
            a.btn.btn-lg.btn-danger(href='#') BBC Politics
          .col-md-8.col-md-offset-2.text-center
            hr
            script
              document.write("Last Modified: " + document.lastModified);
    //Call to Action 
    //JavaScript 
    script(src='js/jquery-1.10.2.js')
    script(src='js/bootstrap.js')
    //Custom JavaScript for the Side Menu and Smooth Scrolling 
    script
      $("#menu-close").click(function(e) {
      e.preventDefault();
      $("#sidebar-wrapper").toggleClass("active");
      });
    script
      $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#sidebar-wrapper").toggleClass("active");
      });
    script
      $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
      $('html,body').animate({
      scrollTop: target.offset().top
      }, 1000);
      return false;
      }
      }
      });
      });
    script
      $(document).ready(function() {
      $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
      $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
      });
