/**
 * @license
 * Copyright 2020 Xingwang Liao <kuoruan@gmail.com>
 *
 * Licensed to the public under the MIT License.
 */
"use strict";"require form";"require uci";"require v2ray";return L.view.extend({render:function(){var r=new form.Map("v2ray","%s - %s".format(_("V2Ray"),_("Observatory")),_("Details: %s").format('<a href="https://www.v2fly.org/config/observatory.html#observatoryobject" target="_blank">ObservatoryObject</a>')),e=r.section(form.NamedSection,"main_observatory","observatory");return e.addremove=!1,e.option(form.Flag,"enabled",_("Enabled")).rmempty=!1,e.option(form.Value,"probeURL",_("ProbeURL")),e.option(form.Value,"probeInterval",_("ProbeInterval")),e.option(form.DynamicList,"subjectSelector",_("SubjectSelector")),r.render()}});