/**
 * @license
 * Copyright 2021 BI7PRK
 *
 * Licensed to the public under the MIT License.
 */

"use strict";

"require form";
// @ts-ignore
return L.view.extend({
  render: function () {
    const m = new form.Map(
      "v2ray",
      "%s - %s".format(_("V2Ray"), _("Observatory")),
      _("Details: %s").format(
        '<a href="https://www.v2fly.org/config/observatory.html#observatoryobject" target="_blank">ObservatoryObject</a>'
      )
    );

    const s = m.section(form.NamedSection, "main_observatory", "observatory");
    s.addremove = false;

    let o;
    o = s.option(form.Flag, "enabled", _("Enabled"));
    o.rmempty = false;

    o = s.option(
      form.Value,
      "probeURL",
      _("ProbeURL"),
      _(
        "A valid URL, it will be get request to testing. eg: <code>%s</code>."
      ).format("https://api.github.com/_private/browser/stats")
    );
    o.placeholder = _("empty use the built-in value");

    o = s.option(form.Value, "probeInterval", _("ProbeInterval"));

    o = s.option(form.DynamicList, "subjectSelector", _("SubjectSelector"));

    return m.render();
  },
});
