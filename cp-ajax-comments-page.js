if("undefined"!==typeof CommentpressAjaxSettings){var cpac_live=CommentpressAjaxSettings.cpac_live;var cpac_ajax_url=CommentpressAjaxSettings.cpac_ajax_url;var cpac_spinner_url=CommentpressAjaxSettings.cpac_spinner_url;var cpac_post_id=CommentpressAjaxSettings.cpac_post_id}var cpac_submitting=false;jQuery(document).ready(function(g){var e,f;function i(){jQuery("#respond_title").after('<div id="error" style="background: #761d19; margin: 0 0 0.4em 0; padding: 0.4em; -moz-border-radius: 6px; -khtml-border-radius: 6px; -webkit-border-radius: 6px; border-radius: 6px; color: #fff; line-height: 1.3em;"></div>');jQuery("#commentform").after('<img src="'+cpac_path+'loading.gif" id="loading" alt="'+cpac_lang[0]+'" />');jQuery("#loading").hide();e=jQuery("#commentform");f=jQuery("#error");f.hide()}i();function c(){jQuery("#loading").hide();jQuery("#submit").removeAttr("disabled");jQuery("#submit").show();addComment.enableForm();cpac_submitting=false}function b(j){var m=e.find("#comment_parent").val();var o=jQuery("ol.commentlist:first");if(m!="0"){var n="#li-comment-"+m;var l=jQuery(n+" > .children:first");if(l[0]){h(j,n+" .children:first li:last",l,n+" .children:first li:last")}else{h(j,n+" .children:first",n,n+" .children:first li:last")}}else{if(o[0]){h(j,"ol.commentlist:first li:last",o,"ol.commentlist:first li:last")}else{h(j,"ol.commentlist:first","div.comments_container","ol.commentlist:first li:last")}}cp_enable_comment_permalink_clicks();var k=j.find("div.comments_container h3");jQuery("div.comments_container h3").replaceWith(k);e.find("#comment").val("")}function h(j,l,m,k){j.find(l).hide().appendTo(m);a(l,k)}function d(j,l,m,k){j.find(l).hide().prependTo(m);a(l,k)}function a(l,k){var j=jQuery(k).attr("id");var m="#comment-"+j.split("-")[2];var n=jQuery(m);addComment.cancelForm();n.css("background","#c2d8bc");jQuery(l).slideDown("slow",function(){jQuery.scrollTo(n,{duration:cp_scroll_speed,axis:"y",offset:cp_get_header_offset(),onAfter:function(){n.animate({backgroundColor:"#ffffff"},1000,function(){n.css("background","transparent")})}})})}jQuery("#commentform").live("submit",function(j){cpac_submitting=true;f.hide();if(e.find("#author")[0]){if(e.find("#author").val()==""){f.html('<span class="error">'+cpac_lang[1]+"</span>");f.show();cpac_submitting=false;return false}if(e.find("#email").val()==""){f.html('<span class="error">'+cpac_lang[2]+"</span>");f.show();cpac_submitting=false;return false}var k=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;if(!k.test(e.find("#email").val())){f.html('<span class="error">'+cpac_lang[3]+"</span>");f.show();if(j.preventDefault){j.preventDefault()}cpac_submitting=false;return false}}if(cp_tinymce=="1"){tinyMCE.triggerSave();addComment.disableForm()}if(e.find("#comment").val()==""){f.html('<span class="error">'+cpac_lang[4]+"</span>");f.show();addComment.enableForm();cpac_submitting=false;return false}jQuery(this).ajaxSubmit({beforeSubmit:function(){jQuery("#loading").show();jQuery("#submit").attr("disabled","disabled");jQuery("#submit").hide()},error:function(l){f.empty();var m=l.responseText.match(/<p>(.*)<\/p>/);f.html('<span class="error">'+m[1]+"</span>");f.show();c();return false},success:function(m){try{var l=jQuery(m);b(l);c()}catch(n){c();alert(cpac_lang[6]+"\n\n"+n)}}});return false})});